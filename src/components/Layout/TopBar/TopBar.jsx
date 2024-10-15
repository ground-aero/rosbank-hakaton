import styles from './TopBar.module.css';
import Filter from "../../../images/filter.png";
import { TeamContext } from "../../../context/context";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

function TopBar() {
    const { isTeamTotal, isTeamId, isBusFactor, setBusFactor } = useContext(TeamContext);
    // const [isTeamId, setTeamId] = useState(5);
    const [isSkillName, setSkillName] = useState("");

    useEffect(() => {
        fetchBusFactor();
    }, [isTeamId]);

    const fetchBusFactor = async () => {
        const db_url = `https://dashboard-t5.hopto.org/api/v1/dashboard/bus_factor/?team=${isTeamId}`;
        try {
            let { data } = await axios.get(`${db_url}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            // console.log(data, data.length);
            setBusFactor(data.bus_factor);
            setSkillName(data.skill);
            console.log(data)
        } catch (err) {
            console.error(err);
        } finally {

        }
    };

    return (
        <section id='topbar' className={styles.topBar}>

            {/* 2 small data windows */}
            <section className={styles.wrapData}>
                <div className={styles.innerData}>
                    <div className={styles.innerNum}>{`${isTeamTotal}`}</div>
                    <div className={styles.innerText}>Всего в команде</div>
                </div>

                <div className={`${styles.innerData} ${styles.innerDataBusFactor}`} title={`Навык: ${isSkillName}`}>
                    <div className={styles.innerNum}>{`${isBusFactor}`}</div>
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