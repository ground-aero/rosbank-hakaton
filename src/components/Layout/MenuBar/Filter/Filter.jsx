import styles from './Filter.module.css'
import PopupMainMenu from "../../../../components/Popup/PopupMainMenu/PopupMainMenu"
import { useState } from "react"

function Filter() {
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
        e.peventDefault()

        // api.getTeamNames({ isTeamId })
        // api. onChooseTeam({ isTeamId })
        // api. onChooseEmployee
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