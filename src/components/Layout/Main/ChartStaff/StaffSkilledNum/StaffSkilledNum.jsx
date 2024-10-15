import styles from './StaffSkilledNum.module.css';
import { useState } from 'react';

function StaffSkilledNum() {
    const [isActiveBtn, setActiveBtn] = useState('hardSkill');

    return (
        <div>
            <span className={styles.chartBtnsWrap}>
                <button
                    onClick={() => setActiveBtn('hardSkill')}
                    className={`${styles.chartBtn} ${styles.chartBtnHSkill} ${isActiveBtn === 'hardSkill' ? styles.chartBtnActive : ''}`}
                >
                    Hard Skill
                </button>
                <button
                    onClick={() => setActiveBtn('softSkill')}
                    className={`${styles.chartBtn} ${isActiveBtn === 'softSkill' ? styles.chartBtnActive : ''}`}
                >
                    Soft Skill
                </button>
            </span>

            <p className={styles.chartSubtitle}>Сотрудник •</p>
        </div>
    );
}

export default StaffSkilledNum;