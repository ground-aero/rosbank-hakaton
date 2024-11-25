import styles from './Filter.module.css'
import PopupMainMenu from "../../../../components/Popup/PopupMainMenu/PopupMainMenu"
import { useState, useContext } from "react"
import { TeamContext } from '../../../../context/context'

function Filter() {
    const { isTeamId, isTeamName, isEmployeeId, selectedEmployee } = useContext(TeamContext)

    const [isPopupOpen, setPopupOpen] = useState(false)
    const [isMainMenuPopupOpen, setMainMenuPopupOpen] = useState(false)

    function openPopup() {
        setPopupOpen(true);
        setMainMenuPopupOpen(true);
    }

    function closeAllPopups() {
        setPopupOpen(false);
        setMainMenuPopupOpen(false);
    }

    function handleSubmitForm(e) {
        e.preventDefault()

        // api.getTeams({ isTeamId })
        // api. onChooseTeam({ isTeamId })
        // api. onChooseEmployee

        // Здесь можно добавить дополнительную логику
        // Например, отправка данных на сервер или другие действия
        console.log('Selected team: id: isTeamId, name: isTeamName:', { id: isTeamId, teamName: isTeamName })
        console.log("isEmployeeId, selectedEmployee:", {id: isEmployeeId, fullName: selectedEmployee})
        // console.log('Selected employee: id: is......, fullName: is....:', { id: isTeamId, name: isTeamName })
    }

    return (
        <div className={styles.filterWrap}>
            <button
                type="button"
                onClick={ openPopup }
                className={styles.btnFilter}
            />
            <PopupMainMenu
                name='mainMenu'
                onSubmit={ handleSubmitForm }
                onOpen={isMainMenuPopupOpen}
                onClose={closeAllPopups}
                textBtn={'Применить фильтры'}
            />
        </div>
    );
}

export default Filter;