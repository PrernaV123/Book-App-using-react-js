import { useEffect, useState } from 'react';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://softwium.com/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <a href={`/books/${book.id}`}>{book.title}</a>
        </div>
      ))}
    </div>
  );
};

export default BooksList;