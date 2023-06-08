import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/public/users/Login";
import Register from "../pages/public/users/Register";
import Home from "../pages/public/home/home/Home";
import Classes from "../pages/public/classes/Classes";
import SingleClass from "../pages/public/classes/SingleClass";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
             path:'/',
             element:<Home></Home>
          },
          {
              path:'/classes',
              element:<Classes></Classes>,
              loader:()=>fetch(`${import.meta.env.VITE_SERVER_URL}/classesCount`)
          },
          {
             path:'/singleClass/:id',
             element:<SingleClass></SingleClass>,
             loader:({params})=>fetch(`${import.meta.env.VITE_SERVER_URL}/class/${params?.id}`)
          },
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