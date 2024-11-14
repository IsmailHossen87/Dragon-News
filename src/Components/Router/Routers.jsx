import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import CategoryNews from "../Components-Layout/Pages/CategoryNews";
import AuthLayout from "../Components-Layout/AuthLayout/AuthLayout";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Routers = createBrowserRouter ([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ]
    },
    {
        path:'/news',
        element:<h1>Newss</h1>
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
        ]
           
        
    },
    {
        path:'*',
        element:<h1>Error</h1>
    },
])

export default Routers;