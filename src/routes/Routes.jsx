import Login from "../Page/Login/Login/Login";
import LoginLayout from "../Page/Login/LoginLayout/LoginLayout";
import Main from "../Main/Main";
import Register from "../Page/Login/Register";
import Terms from "../Page/Login/Terms/Terms";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);

export default router;
