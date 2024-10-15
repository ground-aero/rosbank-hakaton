import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import BtnEmpty from '../../../images/btn_empty.png';
import Men from '../../../images/btn_users.png';
import UserImg from '../../../images/user_img.png';
import { useState } from "react";

function Sidebar() {
    const [activeBtn, setActiveBtn] = useState('men');

    return (
        <nav id='sidebar' className={styles.sidebar}>

            <aside className={styles.sidebarInnerBar}>
                <ul className={styles.innerHalf}>
                    <li className={styles.btnWrap}>
                        <img src={BtnEmpty} className={styles.innerIconBg} alt="btn empty" />
                    </li>
                    <li className={styles.btnWrap}>
                        <img src={BtnEmpty} className={styles.innerIconBg} alt="btn empty" />
                    </li>
                    <li className={`${styles.btnWrap} ${activeBtn === 'men' ? styles.active : ''}`}>
                        <NavLink to="/" end onClick={() => setActiveBtn('men')}>
                            <img src={Men} className={styles.innerIconBg} alt="men" />
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.innerHalf}>
                    <img src={UserImg} className={`${styles.innerIconBg} ${styles.innerUserImg}`} alt="user" />
                </ul>
            </aside>

        </nav>
    );
}

export default Sidebar;