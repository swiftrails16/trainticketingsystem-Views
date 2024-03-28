import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TrainDetails from './components/TrainDetails'
import Transaction from './components/Transaction'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

 {
    path: "/Transaction",
    element: <Transaction />,
  },

]);

function App() {
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/TrainDetails' element={<TrainDetails />} />
    </Routes>
  </BrowserRouter>
 return <RouterProvider router={router} />;
}
export default App

//import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Home from './components/Home'
//import TrainDetails from './components/TrainDetails'
//const App = () => (
//  <BrowserRouter>
//    <Routes>
//      <Route path='/' element={<Home />} />
//      <Route path='/TrainDetails' element={<TrainDetails />} />
//    </Routes>
//  </BrowserRouter>
//)

