import { isEscapeKey } from './utils.js';

const COUNT_SHOWN_COMMENTS = 5;

const bigPictureElement = document.querySelector('.big-picture');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const shownCommentCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const closeBigPictureElement = bigPictureElement.querySelector('.big-picture__cancel');

const commentElement = document.querySelector('#comment')
  .content.querySelector('.social__comment');

let commentsCoutShown = 0;
let commentsArray = [];

const createComment = ({ avatar, message, name }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = () => {
  if (commentsCoutShown >= commentsArray.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsCoutShown = commentsArray.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsCoutShown; i++) {
    const comment = createComment(commentsArray[i]);
    fragment.append(comment);
  }

  commentsListElement.innerHTML = '';
  commentsListElement.append(fragment);

  shownCommentCountElement.textContent = commentsCoutShown;
  totalCommentCountElement.textContent = commentsArray.length;
  commentsCoutShown += COUNT_SHOWN_COMMENTS;
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClosePictureButtonClick = () => {
  hidePicture();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({ url, description, likes, comments }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;

  if (comments.length > 0) {
    commentsArray = comments;
  }

  renderComments();
};

const showPicture = (pictureData) => {
  commentsCoutShown = 0;
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentsArray = pictureData.comments;
  renderComments();

  renderPicture(pictureData);
};

closeBigPictureElement.addEventListener('click', onClosePictureButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { showPicture };
