import { renderGallery } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showAlert } from './util.js';
import { initFilter } from './filters.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (err) {
    showAlert();
  }
};

bootstrap();
