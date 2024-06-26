import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notFound";
import Detail from "../pages/detail";


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
            },
            {
                path:'/detail/:id',
                element:<Detail />
            },
            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])
export default router