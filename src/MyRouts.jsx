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
// import Login2 from "./Components/Login2";

const Myrouter = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/company')
            },
            {
                path: '/products/:id',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/company/${params.id}`)
            },
            {
                path: '/addproducts',
                element: <PrivateRouts><AddProducts></AddProducts></PrivateRouts>
            },
            {
                path: '/details/:brand/:id',
                element: <PrivateRouts><ProductDetails></ProductDetails></PrivateRouts>,
                loader: ({ params }) => fetch(`https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/${params.brand}/${params.id}`)
            },
            {
                path: '/update/:brand/:id',
                element: <PrivateRouts><UpdateProduct></UpdateProduct></PrivateRouts>,
                loader: ({ params }) => fetch(`https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/${params.brand}/${params.id}`)
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
                loader: () => fetch('https://panda-technology-and-electronics-backend-qzcawtmyu.vercel.app/client')
            }
        ]
    },
]);


export default Myrouter;