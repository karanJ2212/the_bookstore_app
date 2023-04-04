import React, { useState } from 'react';
import Book from '../Book/Book';
import Addbook from '../Addbook/Addbook';

export default function Booklist() {
  const [books] = useState([{ title: 'react', author: 'karan' }]);
  return (
    <div className="booksContainer">
      <ul className="booklist">
        {books.map((book) => (
          <li key={book.title + book.author}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Addbook />
    </div>
  );
}
