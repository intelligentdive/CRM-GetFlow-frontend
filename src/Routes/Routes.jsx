import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Leads from "../Pages/Leads/Leads";
import Account from "../Pages/Account/Account";
import Contact from "../Pages/Contact/Contact";
import Opprotunities from "../Pages/Opprotunities/Opprotunities";
import Calender from "../Pages/Calender/Calender";
import Forecasts from "../Pages/Forecasts/Forecasts";
import Reports from "../Pages/Reports/Reports";
import Quotes from "../Pages/Quotes/Quotes";
import Campaigns from "../Pages/Campaigns/Campaigns";

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
      },
      {
        path: "/forecasts",
        element: <Forecasts/>,
      },
      {
        path: "/reports",
        element: <Reports/>,
      },
      {
        path: "/quotes",
        element: <Quotes/>,
      },
      {
        path: "/campaings",
        element: <Campaigns/>,
      },
    ],
  },
]);

export default router;
