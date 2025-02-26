import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[url(/banner.webp)] bg-cover bg-center flex flex-col">
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
