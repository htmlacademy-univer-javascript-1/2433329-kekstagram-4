import { renderGallery } from './gallery.js';
import './form.js';
import { loadPictures } from './api.js';
import { showAlert } from './util.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
  } catch (err) {
    showAlert();
  }
};

bootstrap();
