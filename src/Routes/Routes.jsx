import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Leads from "../Pages/Leads/Leads";

const router = createBrowserRouter([
  {
      path: "*",
      element: <NotFound />,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/leads",
        element: <Leads></Leads>,
      }
    ],
  },
]);

export default router;
