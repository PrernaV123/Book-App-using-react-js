
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`https://softwium.com/api/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>ISBN: {book.isbn}</p>
      <p>Page Count: {book.pageCount}</p>
      <h3>Authors:</h3>
      <ul>
        {book.authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;