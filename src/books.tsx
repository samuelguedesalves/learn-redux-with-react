import { createSlice, configureStore, createStore } from '@reduxjs/toolkit';

export interface Book {
  id: number;
  title: string;
  description: string;
}

interface State {
  books: Book[]
}

const initialState: State = {
  books: []
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { payload } = action;

      const newBooksArray = state.books.map((item, index) => {
        return {
          ...item,
          id: index
        }
      })

      console.log(newBooksArray)

      state.books = [...newBooksArray, { ...payload, id: newBooksArray.length - 1 }]
    },
    removeBook: (state, action) => {
      const { payload } = action;

      const newList = state.books.filter(item => item.id != payload.id)

      state.books = newList
    },
  }
})

export const { addBook, removeBook } = booksSlice.actions

export const store = configureStore({
  reducer: booksSlice.reducer
})

// store.subscribe(() => console.log(store.getState()))

export const getBooks = (state: State) => state.books;
