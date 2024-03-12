import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout";
import Home from "../pages/home";
import About from "../pages/about";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
])
export default router