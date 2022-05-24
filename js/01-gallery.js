import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", openModal);

function renderGalleryList(array) {
  const listMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", listMarkup);
}

renderGalleryList(galleryItems);

function openModal(event) {
  event.preventDefault();
  const currentImg = event.target;
  if (currentImg.nodeName !== "IMG") {
    return;
  }
  const urlOrigin = currentImg.dataset.source;

  const instance = basicLightbox.create(`
  <img
      class="gallery__image"
      src="${urlOrigin}"
      width="1280"
      height="auto"
  />
  `);

  instance.show();
  window.addEventListener("keydown", closeByEsc);

  function closeByEsc(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
