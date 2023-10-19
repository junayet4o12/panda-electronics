import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import BrandProducts from "./Components/Brand/BrandProducts";
import AddProducts from "./Components/AddProducts";
import ProductDetails from "./Components/Brand/ProductDetails";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import PrivateRouts from "./Components/PrivateRouts";

const Myrouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/company')
            },
            {
                path: '/products/:id',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`http://localhost:3000/company/${params.id}`)
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/:brand/:id',
                element: <PrivateRouts><ProductDetails></ProductDetails></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:3000/${params.brand}/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);


export default Myrouter;