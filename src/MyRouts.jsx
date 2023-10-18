import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import BrandProducts from "./Components/Brand/BrandProducts";
import AddProducts from "./Components/AddProducts";

  const Myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:3000/company')
        },
        {
            path:'/products/:id',
            element: <BrandProducts></BrandProducts>,
            loader: ({params})=> fetch(`http://localhost:3000/company/${params.id}`) 
        },
        {
            path: '/addproducts',
            element: <AddProducts></AddProducts>
        }
      ]
    },
  ]);


export default Myrouter;