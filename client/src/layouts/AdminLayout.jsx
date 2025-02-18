import { Outlet } from "react-router-dom"
import HeaderAdmin from "../components/admin/HeaderAdmin"


const AdminLayout = () => {
  return (
    <div className="">
       <HeaderAdmin/>
    <main>
        <Outlet/>
    </main>


    </div>
  )
}

export default AdminLayout