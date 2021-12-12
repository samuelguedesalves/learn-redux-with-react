import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface Book {
  id: number;
  title: string;
  description: string;
}

interface State {
  books: Book[];
}

const initialState: State = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { payload } = action;

      const newArray = [...state.books, { ...payload }].reduce(
        (accumulator: Array<Book>, current: Book, index, array) => {
          return [...accumulator, { ...current, id: index }];
        },
        []
      );

      state.books = newArray;
    },
    removeBook: (state, action) => {
      const { payload } = action;

      const newArray = state.books.filter((item) => item.id !== payload.id);

      state.books = newArray;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export const store = configureStore({
  reducer: booksSlice.reducer,
});

export const getBooks = (state: State) => state.books;
