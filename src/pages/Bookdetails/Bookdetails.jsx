import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../BookProvider/BookProvider";
const Bookdetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const expectedbook = books.find((book) => book.bookId == bookId);
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    image,
    bookName,
    author,
  } = expectedbook;
  
  const { handlemarkasread, handlewishlist } = useContext(BookContext);
  return (
    <div className="mt-9 grid grid-cols-2 max-w-[90%] mx-auto bg-base-100 shadow-sm max-[984px]:grid-cols-1">
      <figure>
        <img src={image}  alt="Album" className="h-[80vh] p-10 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h1 className="text-lg">By: {author}</h1>
        <h1 className="text-lg">{category}</h1>
        <h1>
          <span className="font-bold">Review: </span> {review}
        </h1>
        <div className="flex gap-5 mt-4">
          <h1>tags:</h1>
          <div className="flex gap-5">
            {tags.map((tag, ind) => (
              <div key={ind} className="badge badge-secondary">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <h1>
          Number of pages: <span className="font-bold">{totalPages}</span>
        </h1>
        <h1>
          Publisher: <span className="font-bold">{publisher}</span>
        </h1>
        <h1>
          Year of Publishing:{" "}
          <span className="font-bold">{yearOfPublishing}</span>
        </h1>
        <h1>
          Rating: <span className="font-bold">{rating}</span>
        </h1>
        <div className="flex gap-19 mt-4">
          <button
            onClick={() => handlemarkasread(expectedbook)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button onClick={() =>  handlewishlist(expectedbook)} className="btn btn-primary">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
