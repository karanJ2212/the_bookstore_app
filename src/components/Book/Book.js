import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import './Book.css';

export default function Book({
  category, title, author, itemID,
}) {
  const dispatch = useDispatch();
  const handleRemove = (event) => {
    event.preventDefault();

    dispatch(removeBook(itemID));
  };

  const percentage = Math.floor(Math.random() * (100 - (0)) + (0));
  return (
    <article className="book">

      <div className="book-info">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="action-buttons">
          <button className="button-outline" type="button">
            Comments
          </button>
          <p className="vertical-divider" />
          <button className="button-outline" type="button" onClick={handleRemove}>
            Remove
          </button>
          <p className="vertical-divider" />
          <button className="button-outline" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">{`${percentage}%`}</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">Current Chapter</p>
            <p className="current-chapter">{`Chapter ${(percentage > 30) ? Math.floor(percentage / 2) : percentage}`}</p>
          </div>
          <div>
            <button className="primary-button" type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </article>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemID: PropTypes.string,
  category: PropTypes.string,
};
Book.defaultProps = {
  itemID: '',
  category: 'General',
};
