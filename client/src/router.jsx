
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import ListOfProperties from "./pages/ListOfProperties";
import AdminLayout from "./layouts/AdminLayout";
import PropertyPage from "./pages/PropertyPage";
import PropertiesForm from "./pages/admin/PropertiesForm";
import { ListCrudProperty } from "./pages/admin/ListCrudProperty";



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
            element: <PropertyPage/>
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
                path: "crearInmueble",
                element: <PropertiesForm/>
            },
            {
                path: "CrudPropiedad",
                element:<ListCrudProperty/>
            }
        ]
    }

])