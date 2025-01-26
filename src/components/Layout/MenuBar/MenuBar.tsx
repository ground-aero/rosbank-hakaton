import { useContext, useEffect, useState, useCallback } from "react"
import api from '../../../api/api'
import globalStyles from '../../../globals.module.css'
import styles from './MenuBar.module.css'
import { AppContext } from "../../../context/context"
import Filter from './Filter/Filter'
import { type TBusFactor } from '../../../entities/bus-factor/types'
import PopupMainMenu from '../../Popup/PopupMainMenu/PopupMainMenu'

function MenuBar() {
    const { isTeamTotal, isTeamId, isBusFactor, setBusFactor } = useContext(AppContext);
    const [isSkillName, setSkillName] = useState<string>("");

    const getBusFactor = useCallback(async () => {
        try {
            const data: TBusFactor = await api.getBusFactor(isTeamId);
console.log(data)
            setBusFactor(data.bus_factor);
            setSkillName(data.skill);
        } catch (err) {
            console.error(err);
        }
    }, [isTeamId, setBusFactor]);

    useEffect(() => {
        getBusFactor();
    }, [getBusFactor]);

    return (
        <section id="menubar" className={`${styles.menuBar} ${globalStyles.section}`}>
            {/* 2 small data windows */}
            <section className={styles.wrapData}>
                <div className={styles.innerData}>
                    <div className={styles.innerNum}>{ isTeamTotal }</div>
                    <div className={styles.innerText}>Всего в команде</div>
                </div>

                <div className={`${styles.innerData} ${styles.innerDataBusFactor}`} title={`Навык: ${isSkillName}`}>
                    <div className={styles.innerNum}>{ isBusFactor }</div>
                    <div className={styles.innerText}>Bus-фактор</div>
                </div>
            </section>

            <Filter />
            {/*<PopupMainMenu onOpen={onOpen} />*/}
        </section>
    );
}

export default MenuBar;