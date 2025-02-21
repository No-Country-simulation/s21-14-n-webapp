
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import ListOfProperties from "./pages/ListOfProperties";
import PropertiePage from "./pages/PropertiePage";
import AdminLayout from "./layouts/AdminLayout";
import PropertiesForm from "./pages/PropertiesForm";
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
        },
        {
            path: "/inmuebles",
            element: <ListOfProperties/>
        },
        {
            path: "/inmueble",
            element: <PropertiePage/>
        }
    ],
    },
    {
        path: "/admin",
        element: (
            <AdminLayout/>
        ),
        children: [
            {
                index: true,

            },
            {
                path: "/crearInmueble",
                element: <PropertiesForm/>
            }
        ]
    }

])