import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/booksSlice';

export default function Addbook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { item_id: uuidv4(), ...book };

    dispatch(addBook(newBook));
    setBook({ title: '', author: '', category: '' });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title of book"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author of book"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
