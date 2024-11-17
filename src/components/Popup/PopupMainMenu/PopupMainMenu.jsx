import PopupWithForm from '../PopupWithForm'
import styles from './PopupMainMenu.module.css'
import { useContext, useEffect, useState } from "react"
import { TeamContext } from "../../../context/context"
import api from "../../../api/api"

function PopupMainMenu({ onOpen, onClose, name, onSubmit, textBtn }) {
    const { isTeamId, setTeamId, isTeamName, setTeamName} = useContext(TeamContext);
    const [ teams, setTeams ] = useState([])

    // Получаем список команд при монтировании компонента
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await api.getTeamNames();
                setTeams(data);
            } catch (err) {
                console.error('Error fetching teams',err)
            }
        }

        fetchTeams()
    },[isTeamId])

    // Обработчик изменения выбора команды через select
    const handleTeamChange = (teamId) => {
        const numericTeamId = Number(teamId)
        setTeamId(numericTeamId)
    }

    // console.log(onOpen)
    return (
        <PopupWithForm
            name={name}
            onSubmit={onSubmit}
            onOpen={onOpen}
            onClose={onClose}
            textBtn={textBtn}
        >
            <p>children...</p>

            <div className={styles.selectContainer}>
                <select
                    name='team'
                    value={isTeamId}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="" className={styles.optionDefault}>--Команда--</option>
                    {teams.map((team) => (
                        <option key={team.id} value={team.id} className={styles.option}>
                            {team.name}
                        </option>
                    ))}
                </select>

                {/*<select name='employee' className={styles.select}>*/}
                {/*    <option value="" className={styles.optionDefault}>--Сотрудник--</option>*/}
                {/*    <option value='employee' className={styles.option}>{'Иванов'}</option>*/}
                {/*    <option value='employee' className={styles.option}>{'Петров'}</option>*/}
                {/*    <option value='employee' className={styles.option}>{'Другой сотрудник'}</option>*/}
                {/*</select>*/}

            </div>
        </PopupWithForm>
    )
}

export default PopupMainMenu;