import styles from './TopBar.module.css';
import Filter from "../../../images/filter.png";
import { TeamContext } from "../../../context/context";
import { useContext } from "react";

function TopBar() {
    const { isTeamTotal } = useContext(TeamContext);

    return (
        <section id='topbar' className={styles.topBar}>

            {/* 2 small data windows */}
            <section className={styles.wrapData}>
                <div className={styles.innerData}>
                    <div className={styles.innerNum}>{`${isTeamTotal}`}</div>
                    <div className={styles.innerText}>Всего в команде</div>
                </div>

                <div className={styles.innerData}>
                    <div className={styles.innerNum}>${}</div>
                    <div className={styles.innerText}>Bus-фактор</div>
                </div>
            </section>

            {/* 2 buttons */}
            <div className={styles.btns}>
                <img src={Filter} className={styles.chartsFilter} alt={'filter'}/>
            </div>

        </section>
    );
}

export default TopBar;