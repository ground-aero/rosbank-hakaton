import { Outlet } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar"
import Main from "../Main/Main"
import './Layout.css'

function Layout() {
    return (
        <div className="layout">
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default Layout;