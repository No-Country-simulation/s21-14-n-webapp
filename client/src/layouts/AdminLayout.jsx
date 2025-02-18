import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <div className="">
       
    <main>
        <Outlet/>
    </main>


    </div>
  )
}

export default AdminLayout