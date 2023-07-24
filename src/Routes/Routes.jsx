import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";


  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);


  export default Routes;