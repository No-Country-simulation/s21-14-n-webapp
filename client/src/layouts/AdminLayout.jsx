import { Outlet } from "react-router-dom";
import { NavBar } from "../components/shared/NavBar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[url(/banner.jpg)] bg-cover bg-center flex flex-col">
        
        <header>
            <NavBar/>
        </header>
        <main className="flex-1 flex justify-center items-center">
            <Outlet />
        </main>
    </div>
  );
};

export default AdminLayout;
