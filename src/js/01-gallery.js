import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const galleryItems = items.reduce((acc, {original, preview, description}) => { 
    
    const template = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    return acc += template}, '')
    
    galleryListContainer.innerHTML = galleryItems
   
}

creategalleryItemsMarkUp(galleryItems)

let lightbox = new SimpleLightbox('.gallery__link', {captionDelay: 250, captionsData: 'alt'})