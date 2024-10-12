import './StaffSkilledNum.css'
import {useState} from "react";
function StaffSkilledNum() {
    const [isActiveBtn, setActiveBtn] = useState('hardSkill')

    return (
        <div>
            <span className='chart-btns-wrap'>
                <button onClick={() => setActiveBtn('hardSkill')} className={`chart-btn chart-btn-hSkill ${isActiveBtn === 'hardSkill' ? 'active' : ''}`}>Hard Skill</button>
                <button onClick={() => setActiveBtn('softSkill')} className={`chart-btn ${isActiveBtn === 'softSkill' ? 'active' : ''}`}>Soft Skill</button>
            </span>

            <p className='chart-subtitle'>Сотрудник •</p>

        </div>
    )
}

export default StaffSkilledNum