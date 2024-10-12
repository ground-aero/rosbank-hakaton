import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Main.css'
import ChartStaff from "./ChartStaff/ChartStaff"
import ChartSkills from "./ChartSkills/ChartSkills"

function Main({ type }) {
    const [activeTab, setActiveTab] = useState('charts')

    return (
        <main className="main">

            <ChartStaff/>

            <ChartSkills/>
            {/*<div className="tabs">*/}
            {/*    <button className={`tab ${activeTab==='charts' ? 'active' : ''}`}*/}
            {/*            onClick={() => setActiveTab('charts')}>*/}
            {/*        Чарты*/}
            {/*    </button>*/}
            {/*    <button className={`tab ${activeTab==='docs' ? 'active' : ''}`}*/}
            {/*            onClick={() => setActiveTab('docs')}>*/}
            {/*        Документация*/}
            {/*    </button>*/}
            {/*</div>*/}

            {/*<div className="tab-content">*/}
            {/*    {activeTab === 'charts' ? <LayoutCharts/> : <LayoutDocs/>}*/}
            {/*</div>*/}

            <Outlet/>

        </main>
    );
}

export default Main;