import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import TrainDetails from "./pages/TrainDetails";
import Profileapi from "./pages/Profileapi";
import Paymentapi from "./pages/Paymentapi";

import Validation from "./pages/Validation"
import Contactus from "./components/ContactUs"
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
    path: "/validation/:email",
    element: <Validation />,
  },,
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
    path: "/Payment",
    element: <Paymentapi />,
  },
  {
    path: "/Profile",
    element: <Profileapi />,
  },
  {
    path: "/Contactus",
    element: <Contactus />,
  },
 {/* {
    path: "/update/:fname/:lname/:add/:mobileNumber/:email/:password",
    element: <Updateapi />,
  },
  {
    path: "/deleted/:email",
    element: <Deleteapi />,
  },*/}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
