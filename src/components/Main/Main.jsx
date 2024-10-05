import { useState } from 'react'
import LayoutCharts from '../LayoutCharts/LayoutCharts'
import LayoutDocs from '../LayoutDocs/LayoutDocs'
import './Main.css'

function Main({ type }) {
    const [activeTab, setActiveTab] = useState('charts')

    return (
        <main className="main">
            <div className="tabs">
                {/*<button className="tab tab__charts">Чарты</button>*/}
                <button className={`tab ${activeTab==='charts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('charts')}>
                    Чарты
                </button>
                <button className={`tab ${activeTab==='docs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('docs')}>
                    Документация
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'charts' ? <LayoutCharts/> : <LayoutDocs/>}
            </div>

            {/*{type==='charts' ? (*/}
            {/*    <main id='main' className='main'>*/}
            {/*        <LayoutCharts/>*/}
            {/*        /!* <LayoutMainHome layout={layout} title={title} text={text} /> *!/*/}
            {/*    </main>*/}
            {/*) : ''*/}
            {/*}*/}
            {/*{(type==='docs') ? (*/}
            {/*    <main id='main' className='main'>*/}
            {/*        <LayoutDocs/>*/}
            {/*    </main>*/}
            {/*) : ''*/}
            {/*}*/}
        </main>
    );
}

export default Main;