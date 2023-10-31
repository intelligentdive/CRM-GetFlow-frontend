import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Leads from "../Pages/Leads/Leads";
import Account from "../Pages/Account/Account";
import Contact from "../Pages/Contact/Contact";
import Opprotunities from "../Pages/Opprotunities/Opprotunities";
import Calender from "../Pages/Calender/Calender";

const router = createBrowserRouter([
  {
      path: "*",
      element: <NotFound />,
  },
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/leads",
        element: <Leads/>,
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/opprotunities",
        element: <Opprotunities/>,
      },
      {
        path: "/calender",
        element: <Calender/>,
      }
    ],
  },
]);

export default router;
