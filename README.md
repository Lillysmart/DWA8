# Abstracting from a Book connect app

The book connect app is a web application that displays list of books and allows users to filter and interact with them.

This is what can be abstracted from the app:

 ## Exported Constants and Objects:

- BOOKS_PER_PAGE: This constant defines the number of books to display per page.
- authors: An object that maps author IDs to author names.
- genres: An object that maps genre IDs to genre names.
- books: An array of book objects, each containing information such as id, author, image, title, and more.

## HTML Element Generation and Manipulation:

 The app creates and manipulates HTML elements dynamically using JavaScript. It generates buttons for book previews, options for genre and author selection, and updates the UI based on user interactions.

## Event Handling:

The code attaches event listeners to various HTML elements, like buttons and forms, to handle user interactions. For example, it handles form submissions for filtering books and opens pop-up dialogs for book previews.


## Theme Switching:

The code detects the user's system theme (light or dark mode) using window.matchMedia and updates the application's theme accordingly.


## Book Filtering:

There is a function that filters books based on user-selected criteria, such as title, author, and genre.
Pagination:

The code manages pagination by showing a limited number of books per page and updating the "Show more" button to load more books as needed.


## Book Preview:

Clicking on a book in the list opens a pop-up dialog that displays detailed information about the book, including its image, title, author, and description.