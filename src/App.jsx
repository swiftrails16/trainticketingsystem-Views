import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import TrainDetails from "./pages/TrainDetails";
import Paymentapi from "./pages/Paymentapi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-result/:from/:to/:date",
    element: <SearchResult />,
  },
  {
    path: "/booking/:trainNum",
    element: <TrainDetails />,
  },
  {
    path: "/Payment/:ticketPrice",
    element: <Paymentapi />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
