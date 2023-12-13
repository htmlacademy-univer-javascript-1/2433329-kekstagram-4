const isEscapeKey = (evt) => evt.key === 'Escape';

const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorMessageElement = document.querySelector('#error')
  .content.querySelector('.error');

const showErrorMessage = () => {
  const errorElement = errorMessageElement.cloneNode(true);
  document.body.append(errorElement);
  setTimeout (() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const showAlert = () => {
  const alert = document.querySelector('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left= '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundClip = 'red';
  alert.textContent = 'Не удалось загрузить данные.Попробуйте обновить страницу';
  document.body.append(alert);
};

export { isEscapeKey, showErrorMessage, showAlert};
