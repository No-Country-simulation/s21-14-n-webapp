import { Outlet } from "react-router-dom"
import HeaderAdmin from "../components/HeaderAdmin"


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