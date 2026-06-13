import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../BookProvider/BookProvider";
import Bookcard from "../Ui/SingleBookCard";
const ListedReadlist = ({ sortingtype }) => {
  const { storedbook } = useContext(BookContext);
  const [filteredReadlist, setFilteredReadlist] = useState(storedbook);
  useEffect(() => {
    if (sortingtype) {
      if (sortingtype === "pages") {
        const sorted_data = [...storedbook].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadlist(sorted_data);
        // console.log(sorted_data);
      } else if (sortingtype === "rating") {
        const sorted_data = [...storedbook].sort((a, b) => a.rating - b.rating);
        // console.log(sorted_data);
        setFilteredReadlist(sorted_data);
      }
    }
  }, [sortingtype, storedbook]);
  if (filteredReadlist.length == 0) {
    return (
      <div className=" mt-10 h-[70vh] w-[60%] mx-auto bg-gray-100 flex items-center justify-center text-2xl font-bold">
        No readlist data found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 mt-10 gap-10 max-[1016px]:grid-cols-2 max-[652px]:grid-cols-1">
      {filteredReadlist.map((book) => {
        return <Bookcard book={book} key={book.bookId}></Bookcard>;
      })}
    </div>
  );
};

export default ListedReadlist;
