// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const images = galleryItems
  .map(
    (image) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`,
  )
  .join('')

galleryEl.insertAdjacentHTML('beforeend', images)

var lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
})