import { authors, books, BOOKS_PER_PAGE } from "../data.js";
import { allHtmlElements } from "./helpers.js";

/**
 * Create a book preview object with a method to generate preview HTML.
 *
 * @param {object} bookData - The data for the book.
 * @returns {object} - An object with a 'generatePreviewHTML' method.
 */
const createBookPreview = (bookData) => {
  const privateData = {
    title: bookData.title || "No Title",
    author: bookData.author || "Unknown Author",
    image: bookData.image || "",
  };

  return {
    /**
     * Generate HTML for a book preview.
     * @returns {HTMLElement} - The HTML element representing the book preview.
     */
    generatePreviewHTML: () => {
      const element = document.createElement("button");
      element.classList = "preview";
      element.setAttribute("data-preview", bookData.id);

      element.innerHTML = `
        <img
          class="preview__image"
          src="${bookData.image}"
        />
        
        <div class="preview__info">
          <h3 class="preview__title">${bookData.title}</h3>
          <div class="preview__author">${authors[bookData.author]}</div>
        </div>
      `;

      return element;
    },

    get Title() {
      privateData.title;
    },
    set Title(newTitle) {
      privateData.title = newTitle;
    },

    get Author() {
      privateData.author;
    },
    set Author(newAuthor) {
      privateData.author = newAuthor;
    },

    get Image() {
      privateData.image;
    },
    set Image(newImage) {
      privateData.image = newImage;
    },
  };
};
/**
 * Creates book previews and append them to the HTML element.
 *
 * @param {Array} matches - An array of book data objects to create previews from.
 * @param {number} page - The current page number
 */
const generateBookPreviews = (matches, page) => {
  const starting = document.createDocumentFragment();

  for (const bookData of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    const bookPreview = createBookPreview(bookData);
    const element = bookPreview.generatePreviewHTML();
    starting.appendChild(element);
  }

  allHtmlElements.dataListItems.appendChild(starting);
};

export { generateBookPreviews };
