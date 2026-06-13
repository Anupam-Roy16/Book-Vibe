import { createBrowserRouter } from "react-router";
import Main_layout from "../layout/Main_layout";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage/Homepage";
import Errorpage from "../Errorpage/Errorpage";
import Bookdetails from "../pages/Bookdetails/Bookdetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout/>,
    children:[
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/books",
        element: <Books/>,
      },
      {
        path:"/bookdetails/:bookId",
        element: <Bookdetails/>,
        loader: ()=> fetch("/booksData.json")
 
      }
    ],
    errorElement: <Errorpage/>
  }
]);
