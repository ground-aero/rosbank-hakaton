import React from 'react'
import TopBar from "./TopBar/TopBar"
import Main from "./Main/Main"
import MenuBar from "./MenuBar/MenuBar"
import SearchForm from "./SearchForm/SearchForm"
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.layout}>
            <TopBar/>
            <MenuBar/>
            <SearchForm/>
            <Main/>
        </div>
    )
}

export default Layout;