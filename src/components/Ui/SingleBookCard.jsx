import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Bookcard = ({book}) => {
    return (
           <Link to={`/bookdetails/${book.bookId}`} className="card bg-gray-200 shadow-sm">
              <figure className="p-6">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="rounded-2xl h-[250px]"
                />
              </figure>
              <div className="pt-3 justify-center gap-18 flex items-center">
                {book.tags.map((tag) => (
                  <div key={tag} className="badge badge-secondary">{tag}</div>
                ))}
              </div>
              <div className="card-body">
                <h2 className="card-title text-2xl">{book.bookName}</h2>
                <p className="font-semibold text-lg">By : {book.author}</p>
                <div className="card-actions justify-between">
                  <div className="text-lg font-semibold">{book.category}</div>
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    {book.rating}  <CiStar />
                  </div>
                </div>
              </div>
            </Link>
    );
};

export default Bookcard;
