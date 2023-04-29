import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js"; 

const matches = books
const page = 1
const range = [0, 100] // not quite sure what range we are looking at here

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

// VARIABLES FOR handleSettingsToggle
const settingsOverlay = document.querySelector('dialog[data-settings-overlay]')
const settingsButton = document.querySelector('button[data-header-settings]')
const cancelButton = document.querySelector('button[data-settings-cancel]')
const saveButton = document.querySelector('button[data-settings-save]')

/** 
@function handleSettingsToggle // EVENT HANDLER
@description Toggles the display of the settings overlay based on the target of the click event.
Opens the overlay when the settings button is clicked, and closes the overlay when the cancel button is clicked.
@param {MouseEvent} event - The click event triggered by the user.
*/
const handleSettingsToggle = (event) => {
    if (event.target === settingsButton) {
        console.log('Settings button clicked')
        settingsOverlay.show()
    } else if (event.target === cancelButton) {
        console.log('Close button clicked to close')
        settingsOverlay.close()
    }
};
settingsButton.addEventListener('click', handleSettingsToggle)
cancelButton.addEventListener('click', handleSettingsToggle)


// const day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// const night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

/**
 * Creates a preview container element for a book with the given details.
 * 
 * The preview container includes an image, title, and author of the book.
 * CSS styles are applied using classes assigned to the elements within the preview container.
 *
 * @function createPreview
 * @param {Object} book - The book object with details to display in the preview.
 * @param {string} book.author - The author ID of the book.
 * @param {string} book.image - The URL of the book's cover image.
 * @param {string} book.title - The title of the book.
 * @returns {HTMLElement} The preview container element with the book's information and styled with CSS classes.
 */
function createPreview({ image, title, author }) {
    const previewContainer = document.createElement('list__items');
    previewContainer.classList.add('preview');

    previewContainer.innerHTML = `
        <img class="preview__image" src="${image}" alt="${title} - book cover">
        <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <p class="preview__author">${authors[author]}</p>
        </div>
    `;

    return previewContainer;
}


// VARIABLES FOR displayBookPreviews()
const fragment = document.createDocumentFragment()
const extracted = books.slice(0, BOOKS_PER_PAGE)
/**
 * This function takes an array of book objects, creates a preview element for each book using the
 * `createPreview` function, appends each generated preview to a document fragment.
 * Once all the previews are added to the fragment it then appends the fragment
 * to an HTML element with a `data-list-items` attribute.
 * Ensuring that the previews are displayed as part of the page content.
 * 
 * @param {Array} extracted - An array of book objects, each containing `image`, `title`, and `author` properties.
 * @param {number} BOOKS_PER_PAGE - The number of books to be displayed per page // 36
 */
function displayBookPreviews(extracted, BOOKS_PER_PAGE) {
    const fragment = document.createDocumentFragment();

    for (const { image, title, author } of extracted.slice(0, BOOKS_PER_PAGE)) {
        const preview = createPreview({
            image,
            title,
            author
        });
        fragment.appendChild(preview);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
}

displayBookPreviews(books, BOOKS_PER_PAGE);

// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, name]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1 
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
