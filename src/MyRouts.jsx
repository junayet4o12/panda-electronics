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
import AddToCart from "./Components/AddToCart";
import UpdateProduct from "./Components/UpdateProduct";
import Error from "./Components/Error/Error";

const Myrouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/details/:brand/:id',
                element: <PrivateRouts><ProductDetails></ProductDetails></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:3000/${params.brand}/${params.id}`)
            },
            {
                path: '/update/:brand/:id',
                element: <PrivateRouts><UpdateProduct></UpdateProduct></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:3000/${params.brand}/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/mycart',
                element: <PrivateRouts><AddToCart></AddToCart></PrivateRouts>,
                loader: () => fetch('http://localhost:3000/client')
            }
        ]
    },
]);


export default Myrouter;