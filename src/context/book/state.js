// TODO: Load/parse 'favoriteBooks' from localStorage √
// TODO: Export initial state object as default √
// initial state should have keys bookSearchResults and favoriteBooks √
// bookSearchResults should be an empty array √
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy √

function books() {
    if (!JSON.parse(localStorage.getItem('favoriteBooks'))) return []
    else return JSON.parse(localStorage.getItem('favoriteBooks'))
}

const initialState = {
    bookSearchResults: [], 
    favoriteBooks: books
}

export default initialState