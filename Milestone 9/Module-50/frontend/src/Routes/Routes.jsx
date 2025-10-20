import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Navbar from "../components/Navbar";


export const router = createBrowserRouter([
  {
    path: "/", 
    Component: Root 
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
