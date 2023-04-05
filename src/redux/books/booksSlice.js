// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   books: [{
//     item_id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     item_id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//   }],
// };

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => ({
//       ...state,
//       books: [...state.books, action.payload],
//     }),
//     removeBook: (state, action) => ({
//       ...state,
//       books: state.books.filter((book) => book.itemID !== action.payload),
//     }),
//   },
// });

// export const { addBook, removeBook } = booksSlice.actions;
// export default booksSlice.reducer;

/// ////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

// Async Thunks
export const fetchBooksList = createAsyncThunk(
  'books/fetchBooksList',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d5U1jci9rU4Ou9MD2rVE/books');
    const { data } = response;
    const books = Object.keys(data).map((id) => ({
      id,
      ...data[id][0],
    }));

    return books;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d5U1jci9rU4Ou9MD2rVE/books', book);
    // return response.data;
    if (response.data && response.data === 'Created') {
      return book;
    }
    return null;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    await axios.DELETE(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d5U1jci9rU4Ou9MD2rVE/books/${bookId}`);
    console.log(bookId);
    return bookId;
  },
);

// Slice
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooksList.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooksList.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }));
  },
});

// Export Actions and Reducer
// export const {} = booksSlice.actions;
export default booksSlice.reducer;
