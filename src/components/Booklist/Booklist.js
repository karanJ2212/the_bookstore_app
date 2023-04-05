import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import Addbook from '../Addbook/Addbook';

export default function Booklist() {
  // const [books] = useState([{ title: 'react', author: 'karan' }]);
  const storebooks = useSelector((state) => state.books.books);
  return (
    <div className="booksContainer">
      <ul className="booklist">
        {storebooks.map((book) => (
          <li key={book.title + book.author}>
            <Book title={book.title} author={book.author} itemID={book.itemID} />

          </li>
        ))}
      </ul>
      <Addbook />
    </div>
  );
}
