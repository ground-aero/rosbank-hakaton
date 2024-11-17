import styles from './PopupWithForm.module.css'

function PopupWithForm({ name, children, onOpen, onClose, onSubmit, textBtn }) {

 // console.log('onOpen, onClose, name', onOpen, onClose, name, textBtn)
    return (
            <div className={`${styles.popup} ${styles[`popup_type_${name}`]} ${ onOpen ? styles.popup_opened : ''}`}>
                <button onClick={ onClose } className={styles.btnClose} type='button' aria-label='close'>X</button>
                Popup with form:
                <form
                    name={ name }
                    onSubmit={ onSubmit }
                    className={styles.form}
                >

                    { children }

                    <button type='submit'>{ textBtn }</button>
                </form>

            </div>
        )
}

export default PopupWithForm;