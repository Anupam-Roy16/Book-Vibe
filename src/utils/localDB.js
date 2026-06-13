const getAllRaedListFromLocalDB = () => {
  const allreadlist = localStorage.getItem("readlist");
  if (allreadlist) {
    return JSON.parse(allreadlist);
  } else {
    return [];
  }
};
const getAllWishListFromLocalDB = () => {
  const allwishlist = localStorage.getItem("wishlist");
  if (allwishlist) {
    return JSON.parse(allwishlist);
  } else {
    return [];
  }
};
const addReadListToLocalDB = (book) => {
  const allbooks = getAllRaedListFromLocalDB();
  const isExist = allbooks.find((b) => b.bookId == book.bookId);
  if (!isExist) {
    allbooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allbooks));
  }
};

const addWishListToLocalDB = (book) => {
  const allbooks = getAllWishListFromLocalDB();
  const isExist = allbooks.find((b) => b.bookId == book.bookId);
  if (!isExist) {
    allbooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allbooks));
  }
};
export { getAllRaedListFromLocalDB,getAllWishListFromLocalDB ,addReadListToLocalDB,addWishListToLocalDB };
