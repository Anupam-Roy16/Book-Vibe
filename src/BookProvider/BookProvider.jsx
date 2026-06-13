import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllRaedListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../utils/localDb";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [storedbook, setStoredbook] = useState(()=>getAllRaedListFromLocalDB());
  const [wishlist, setWishlist] = useState(()=>getAllWishListFromLocalDB());
 
  const handlemarkasread = (currentbook) => {
    addReadListToLocalDB(currentbook);
    const isExistbook = storedbook.find(
      (book) => book.bookId == currentbook.bookId,
    );

    if (!isExistbook) {
      setStoredbook([...storedbook, currentbook]);
      toast.success(`You have marked ${currentbook.bookName} as read`);
    } else {
      toast.error("You have already read this book");
    }
  };
  const handlewishlist = (currentbook) => {
    addWishListToLocalDB(currentbook);
    const isExistinstoredbook = storedbook.find(
      (book) => book.bookId == currentbook.bookId,
    );
    if (isExistinstoredbook) {
      toast.error("You have already add this book in readlist");
      return;
    }
    const isExistbook = wishlist.find(
      (book) => book.bookId == currentbook.bookId,
    );
    if (!isExistbook) {
      setWishlist([...wishlist, currentbook]);
      toast.success(`You have added ${currentbook.bookName} in wishlight`);
    } else {
      toast.error("You have already add this book in wishlist");
    }
  };
  const data = {
    handlemarkasread,
    storedbook,
    setStoredbook,
    handlewishlist,
    wishlist,
    setWishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
