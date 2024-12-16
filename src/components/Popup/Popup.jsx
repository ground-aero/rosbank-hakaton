import styles from './Popup.module.css'

function Popup({ name, children, onOpen, onClose }) {

 console.log('onOpen, onClose, name', onOpen, onClose, name)
    return (
            <div className={`${styles.popup} ${styles[`popup_type_${name}`]} ${onOpen ? styles.popup_opened : ''}`}>
                <button className={styles.btnClose} onClick={ onClose } type='button' aria-label='close'>X</button>
                Popup:

                { children }
            </div>
        )
}

export default Popup;