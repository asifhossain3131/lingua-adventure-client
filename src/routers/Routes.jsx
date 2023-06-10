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
import Instructors from "../pages/public/instructors/Instructors";
import Dashboard from "../pages/private/dashboard/Dashboard";
import UserHome from "../pages/private/dashboard/user dashboard/UserHome";
import MySelectedClasses from "../pages/private/dashboard/user dashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/private/dashboard/user dashboard/MyEnrolledClasses";
import MyPaymentHistory from "../pages/private/dashboard/user dashboard/MyPaymentHistory";
import UserPayment from "../pages/private/dashboard/user dashboard/UserPayment";

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
path:'instructors',
element:<Instructors></Instructors>
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
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<UserHome></UserHome>
        },
        {
          path:'myselectedclasses',
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path:'myenrolledclasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path:'paymenthistory',
          element:<MyPaymentHistory></MyPaymentHistory>
        },
        {
          path:'userpayment',
          element:<UserPayment></UserPayment>
        }
      ]
    }
  ])


  export default router