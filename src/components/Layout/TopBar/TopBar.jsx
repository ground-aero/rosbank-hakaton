import './TopBar.css'
import Filter from "../../../images/filter.png";
import { TeamContext } from "../../../context/context";
import {useContext} from "react";

function TopBar() {
    const { isTeamTotal } = useContext(TeamContext);

    return (
        <section id='topbar' className='topbar'>

            {/* 2 small data windows */}
            <section className="wrap-data">
                <div className="inner-data">
                    <div className="inner inner_num">{`${isTeamTotal}`}</div>
                    <div className="inner inner_text">Всего в команде</div>
                </div>

                <div className="inner-data">
                    <div className="inner inner_num">${}</div>
                    <div className="inner inner_text">Bus-фактор</div>
                </div>
            </section>

            {/* 2 buttons */}
            <div className="btns">
                {/*<button className="btn btn__data">-</button>*/}
                {/*<button className="btn btn__team">Команда: $</button>*/}
                <img src={Filter} className="charts_filter" alt={'filter'}/>
            </div>

        </section>
    );
}

export default TopBar;
