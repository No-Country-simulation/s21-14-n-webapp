
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
//Home Templates

export const router = createBrowserRouter([
    //Home 
    {
    path: "/",
    element: (
        <HomeLayout/>
    ),
    children: [
        {
            index: true,
            element: <Home/>
        }
    ]
},

])