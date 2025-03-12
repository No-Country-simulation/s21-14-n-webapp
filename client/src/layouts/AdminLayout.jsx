import { Outlet } from "react-router-dom";
import { NavBar } from "../components/shared/NavBar";
import { Footer } from "../components/shared/Footer";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-primary  flex flex-col">
        
        <header>
            <NavBar/>
        </header>
        <main className="flex-1 flex justify-center items-center">
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
};

export default AdminLayout;
