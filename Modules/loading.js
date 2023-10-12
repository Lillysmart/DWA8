import { authors, books, BOOKS_PER_PAGE } from '../data.js';
import { allHtmlElements } from './helpers.js';

/**
 * Generates book previews and appends them to the list.
 *
 * @param {Array} matches - An array of book objects to generate previews from.
 * @param {number} page - The current page number for pagination.
 */
const generateBookPreviews = (matches, page) => {
    const starting = document.createDocumentFragment();
  
    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page +1) * BOOKS_PER_PAGE)) {
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data-preview', id);
  
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
  
   allHtmlElements.dataListItems.appendChild(starting);
  };
  console.log(generateBookPreviews(books,0))
  
  export {generateBookPreviews};