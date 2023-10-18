import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";

  const Myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:3000/company')
        }
      ]
    },
  ]);


export default Myrouter;