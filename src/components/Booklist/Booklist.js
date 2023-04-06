import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Book/Book';
import Addbook from '../Addbook/Addbook';
import { fetchBooksList } from '../../redux/books/booksSlice';

export default function Booklist() {
  const dispatch = useDispatch();
  // const [books] = useState([{ title: 'react', author: 'karan' }]);
  const storebooks = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);
  return (
    <div className="booksContainer">
      <ul className="booklist">
        {storebooks.map((book) => (
          <li key={book.title + book.author}>
            <Book title={book.title} author={book.author} itemID={book.id} />

          </li>
        ))}
      </ul>
      <Addbook />
    </div>
  );
}
