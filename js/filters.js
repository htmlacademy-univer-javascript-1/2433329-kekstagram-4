import { renderGallery } from './gallery.js';
import { finder } from './util.js';

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const MAX_RANDOM_FILTER = 10;

const filtersElement = document.querySelector('.img-filters');
const filtersFormElement = document.querySelector('.img-filters__form');
const defaultButton = filtersFormElement.querySelector('#filter-default');
const randomButton = filtersFormElement.querySelector('#filter-random');
const discussedButton = filtersFormElement.querySelector('#filter-discussed');

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

const compareNumbers = (pictureA, pictureB) => {
  const a = pictureA.comments.length;
  const b = pictureB.comments.length;
  return b - a;
};

const sortsPictures = (pictures) => {
  const test = pictures.slice().sort(compareNumbers);
  return test;
};

const randomPictures = (data) => {
  const randomIndexList = [];
  const max = Math.min(MAX_RANDOM_FILTER, data.length);
  while (randomIndexList.length < max) {
    const index = getRandomIndex(0, data.length);
    if (!randomIndexList.includes(index)) {
      randomIndexList.push(index);
    }
  }
  return randomIndexList.map((index) => data[index]);
};

const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => randomPictures(data),
  [FilterEnum.DISCUSSED]: (data) => sortsPictures(data)
};

const repair = (evt, filter, data) => {
  const filteredData = filterHandlers[filter](data);
  const pictures = document.querySelectorAll('.picture');
  const currentActiveElement = filtersFormElement.querySelector('.img-filters__button--active');

  pictures.forEach((item) => item.remove());
  renderGallery(filteredData);
  currentActiveElement.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const finderRepair = finder(repair);

const initFilter = (data) => {
  filtersElement.classList.remove('img-filters--inactive');

  defaultButton.addEventListener('click', (evt) => {
    finderRepair(evt, FilterEnum.DEFAULT, data);
  });

  randomButton.addEventListener('click', (evt) => {
    finderRepair(evt, FilterEnum.RANDOM, data);
  });

  discussedButton.addEventListener('click', (evt) => {
    finderRepair(evt, FilterEnum.DISCUSSED, data);
  });
};

export { initFilter };
