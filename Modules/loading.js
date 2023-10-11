//@ts-check
export const starting = document.createDocumentFragment();

import { books, authors, genres, BOOKS_PER_PAGE } from "../data.js";
import { allHtmlElements } from "./helpers.js";

export let matches = books;

/**
 *
 * @param {*} param0
 */
const createBookPreview = ({ image, title }) => {
  const element = document.createElement("button");
  element.classList = "preview";
  //element.setAttribute("data-preview", id)

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            </div>`;

  return element;
};
const bookPreviews = matches
  .slice(0, BOOKS_PER_PAGE)
  .map((bookData) => createBookPreview(bookData));

bookPreviews.forEach((previewElement) => {
  starting.appendChild(previewElement);
});
//createPreview(book)
console.log(allHtmlElements)
//allHtmlElements.dataListButton.addEventListener("click", newDataListHandle);

//allHtmlElements.dataListItems.appendChild(starting);