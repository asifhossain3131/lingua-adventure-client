import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/public/users/Login";
import Register from "../pages/public/users/Register";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          }
        ]
    }
  ])


  export default router