import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createImgEl = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const markup = galleryItems.map(createImgEl).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onIncreaseSizeEl);

function onIncreaseSizeEl(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;

  openCloseModal(source);
}

function openCloseModal(source) {
  const instance = basicLightbox.create(`<img width="1280" src="${source}">`);

  instance.show();
  window.addEventListener('keydown', onKeyPress);

  function onKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onKeyPress);
    }
  }
}
