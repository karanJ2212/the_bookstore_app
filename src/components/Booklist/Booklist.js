import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Book/Book';
import Addbook from '../Addbook/Addbook';
import { fetchBooksList } from '../../redux/books/booksSlice';
import './Booklist.css';

export default function Booklist() {
  const dispatch = useDispatch();

  const storebooks = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);
  return (
    <section className="bookContainer">

      {storebooks.map((book) => (
        <li key={book.title + book.author}>
          <Book title={book.title} author={book.author} itemID={book.id} category={book.category} />

        </li>
      ))}

      <p className="section-divider" />
      <Addbook />
    </section>
  );
}
