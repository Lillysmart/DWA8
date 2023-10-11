//@ts-check
import { books, authors, genres, BOOKS_PER_PAGE } from "/data.js";
//
export let matches = books;
export const starting = document.createDocumentFragment();

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
  const element = document.createElement("button");
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

  starting.appendChild(element);
}

const createPreview = ({ author, id, image, title }) => {
  matches = {
    get() {
      matches.image;
    },
    set(value) {
      matches.image = value;
    },
  };
};
