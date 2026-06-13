import { use } from "react";

// import { CiStar } from "react-icons/ci";
import Bookcard from "../Ui/SingleBookCard";
const bookspromise = fetch("/booksData.json").then((response) =>
  response.json(),
);

const Allbooks = () => {
  const books = use(bookspromise);
  //   console.log(books);
  return (
    <div className="my-5">
      <h1 className="text-center text-4xl font-bold ">Books</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {books.map((book) => {
          return <Bookcard book={book} key={book.bookId}></Bookcard>;
        })}
      </div>
    </div>
  );
};

export default Allbooks;
