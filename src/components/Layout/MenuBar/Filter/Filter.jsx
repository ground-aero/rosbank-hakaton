import styles from './Filter.module.css'
import PopupMainMenu from "../../../../components/Popup/PopupMainMenu/PopupMainMenu"
import {useState} from "react"

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

    return (
        <div className={styles.filterWrap}>
            <button className={styles.btnFilter} type="button" onClick={ openPopup } />
            <PopupMainMenu name='mainMenu' onOpen={isMainMenuPopupOpen} onClose={closeAllPopups}/>
        </div>
    );
}

export default Filter;