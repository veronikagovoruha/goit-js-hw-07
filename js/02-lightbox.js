import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", openModal);

function renderGalleryList(array) {
  const listMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
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
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
