import Category from "../Page/Category/Category";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import FoodLayout from "../Main/FoodLayout/FoodLayout";
import Footer from "../Main/Footer/Footer";
import Login from "../Page/Login/Login/Login";
import LoginLayout from "../Page/Login/LoginLayout/LoginLayout";
import Main from "../Main/Main";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../Page/Login/Register";
import Terms from "../Page/Login/Terms/Terms";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // loader: () => fetch(`http://localhost:5000/categories/1`),
    errorElement: <ErrorPage></ErrorPage>
  },

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    
    ],
  },

  {
    path: "/",
    // element: <Main></Main>,
    element: <FoodLayout></FoodLayout>,
    children: [
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(`https://food-recipe-server-bimol009.vercel.app/${params.id}`),
      },
    ],
  },
 
  // {
  //   path: "*",
  //   element: <PrivateRoutes><ErrorPage></ErrorPage></PrivateRoutes>,
  // },
  // },
  // {
  //   path: "/recipes",
  //   element: <FoodLayout></FoodLayout>,
  //   children: [
  //     {
  //       path: ":id",
  //       element: <PrivateRoutes></PrivateRoutes>,
  //       loader: ({ params }) =>
  //         // fetch(`https://dragon-server-bimol009.vercel.app/news/${params.id}`),
  //         fetch(`http://localhost:5000/recipes/${params.id}`),
  //     },
  //   ],
  // },
]);

export default router;
