import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Navbar from "../components/Navbar";
import CategoryDetails from "../components/CategoryDetails";


export const router = createBrowserRouter([
  {
    path: "/", 
    Component: Root, 
    children: [
      {
        path: "/category/:id", 
        element: <CategoryDetails></CategoryDetails>
      }
    ]
  }, 
  {
    path:"/about", 
    element: <Navbar></Navbar>
  }, 
  {
    path:"/career", 
    element: <Navbar></Navbar>
  }
]);
