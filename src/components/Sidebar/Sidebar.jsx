import './Sidebar.css';
import BtnEmpty from '../../images/btn_empty.png'
import Circles from '../../images/btn_empty.png'
import Men from '../../images/btn_men.png'


function Sidebar() {

    return (
        <nav id='sidebar' className='sidebar'>

            <aside className="sidebar__inner-bar">
                <div className="inner__half">
                    <img src={BtnEmpty} className="inner__img" alt={"btn empty"}/>
                    <img src={BtnEmpty} className="inner__img" alt={"btn empty"}/>
                    <img src={Men} className="inner__img" alt={"men"}/>
                </div>
                <div className="inner__half"></div>
            </aside>

        </nav>
    );
}

export default Sidebar;
