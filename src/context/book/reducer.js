// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS 
} from './actions.js'

export default function reducer(prevState, {action, payload}) {
  const {favoriteBooks} = prevState
  let newFavoriteBooks
  switch(action) {
    case ADD_BOOK:
      newFavoriteBooks = [...favoriteBooks, payload]
      saveToLocalStorage(newFavoriteBooks)
      return {...prevState, favoriteBooks: newFavoriteBooks} 
    case REMOVE_BOOK:
      newFavoriteBooks = favoriteBooks.filter(book => book.id != payload)
      saveToLocalStorage(newFavoriteBooks)
      return {...prevState, favoriteBooks: newFavoriteBooks} 
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}

