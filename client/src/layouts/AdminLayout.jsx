import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <div>
        
    <main>
        <Outlet/>
    </main>


    </div>
  )
}

export default AdminLayout