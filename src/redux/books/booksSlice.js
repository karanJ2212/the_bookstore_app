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

    if (response.data && response.data === 'Created') {
      return { ...book, id: book.item_id };
    }
    return null;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/d5U1jci9rU4Ou9MD2rVE/books/${bookId}`);
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

export default booksSlice.reducer;
