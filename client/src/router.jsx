import { createHashRouter } from "react-router-dom"
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import ListOfProperties from "./pages/ListOfProperties";
import AdminLayout from "./layouts/AdminLayout";
import PropertyPage from "./pages/PropertyPage";
import PropertiesForm from "./pages/admin/PropertiesForm";
import { ListCrudProperty } from "./pages/admin/ListCrudProperty";
import AboutUs from "./pages/AboutUs";
import { HomeAdmin } from "./components/HomeAdmin/HomeAdmin";
import { Login } from "./components/login/Login";
import AdminUsers from "./pages/admin/Users";


//Home Templates

export const router = createHashRouter([
    
    //Home 
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "inmuebles", element: <ListOfProperties /> },
            { path: "inmueble", element: <PropertyPage /> },
            { path: "nosotros", element: <AboutUs /> },
            { path: "inicioSesion", element: <Login/>}
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true , element: <HomeAdmin/>},
            { path: "crearInmueble", element: <PropertiesForm /> },
            { path: "CrudPropiedad", element: <ListCrudProperty /> },
            { path: "Usuarios", element: <AdminUsers />}

        ]
    }

])