import { createSlice, configureStore, createStore } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  }
})

export const { increment, decrement } = booksSlice.actions

export const store = configureStore({
  reducer: booksSlice.reducer
})

// store.subscribe(() => console.log(store.getState()))

export const getAmount = (state: any) => state.value;
