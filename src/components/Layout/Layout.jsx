import React from 'react'
import Sidebar from "./Sidebar/Sidebar"
import Main from "./Main/Main"
import TopBar from "./TopBar/TopBar"
import SearchForm from "./SearchForm/SearchForm"
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <TopBar/>
            <SearchForm/>
            <Main/>
        </div>
    )
}

export default Layout;