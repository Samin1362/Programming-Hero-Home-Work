import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root/Root';
import Login from '../layouts/Login/Login';
import Register from '../layouts/Register/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      {
        index:true,
        path: "/login",
        Component: Login
      }, 
      {
        path: "/register", 
        Component: Register
      }
    ]
  },
]);
