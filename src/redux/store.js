import { configureStore } from '@reduxjs/toolkit';
import books from './books/booksSlice';
import categories from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books,
    category: categories,
  },
});

export default store;
