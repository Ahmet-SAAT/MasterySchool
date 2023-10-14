import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import CoursesPage from "../pages/courses-page";
import EventsPage from "../pages/events-page";
import AboutPage from "../pages/About-page";
import ContactPage from "../pages/contact-page";
import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
import AdminManagementPage from "../pages/dashboard/admin-management-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"courses",
        element:<CoursesPage/>
      },{
        path:"events",
        element:<EventsPage/>
      },{
        path:"about",
        element:<AboutPage/>
      },{
        path:"contact",
        element:<ContactPage/>
      },{
        path:"login",
        element:<LoginPage/>
      },{
        path:"dashboard",
        children:[
          {
            index:true,
            element:<DashboardPage/>

          },{
            path:"admin-management",
            element:<AdminManagementPage/>
          }
        ]
      }
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;