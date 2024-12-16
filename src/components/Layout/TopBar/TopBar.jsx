import { NavLink } from 'react-router-dom'
import globalStyles from '../../../globals.module.css'
import styles from './TopBar.module.css'
import BtnEmpty from '../../../images/btn_empty.png'
import BtnBell from '../../../images/btn_bell.svg'
import BtnNut from '../../../images/btn_nut.svg'
import Men from '../../../images/btn_users.png'
import UserImg from '../../../images/user_img.png'
import { useState } from "react"
import SearchForm from "../../../components/Layout/SearchForm/SearchForm"

function TopBar() {
    const [activeBtn, setActiveBtn] = useState('bell');

    return (
        <section id='topbar' className={`${styles.topBar} ${globalStyles.section}`}>

                <aside className={styles.topBarInner}>

                    <SearchForm/>

                    {/* right panel btns */}
                    <div className={styles.innerWrap}>
                        <ul className={styles.innerRight}>
                            <li className={styles.btnWrap}>
                                <img src={BtnEmpty} className={styles.innerIconBg} alt="btn empty"/>
                            </li>
                            <li className={styles.btnWrap}>
                                <img src={BtnNut} className={styles.innerIconBg} alt="btn nut"/>
                            </li>
                            <li className={`${styles.btnWrap} ${activeBtn === 'men' ? styles.active : ''}`}>
                                <NavLink to="/" end onClick={() => setActiveBtn('')}>
                                    <img src={BtnBell} className={styles.innerIconBg} alt="btn bell"/>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={styles.innerRight}>
                            <img src={UserImg} className={`${styles.innerIconBg} ${styles.innerUserImg}`} alt="user"/>
                        </ul>
                    </div>

                </aside>

        </section>
    );
}

export default TopBar;