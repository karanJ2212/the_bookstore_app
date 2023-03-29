import React from 'react';

export default function Addbook() {
  return (
    <div>
      <form action="submit">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit"> Add Book</button>
      </form>
    </div>
  );
}
