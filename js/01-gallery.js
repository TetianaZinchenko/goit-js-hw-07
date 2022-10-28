import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeImgEl = ({ preview, original, description }) =>
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

const markup = galleryItems.map(makeImgEl).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onIncreaseSizeEl);

let instance = '';

function onIncreaseSizeEl(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox
    .create(`<img src=${event.target.dataset.source} width="800" height="600">`)
    .show();

  window.addEventListener('keydown', onModalCloseToEscape);
}

function onModalCloseToEscape(evt) {
  if (evt.code === 'Escape') {
    const basicLightboxEl = document.querySelector('.basicLightbox');
    basicLightboxEl.remove();

    window.removeEventListener('keydown', onModalCloseToEscape);
  }
}
