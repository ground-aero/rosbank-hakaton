import Popup from '../Popup'

function PopupMainMenu({ onOpen, onClose, name }) {

 console.log(onOpen)
    return (
        <Popup name={ name } onOpen={ onOpen } onClose={ onClose }>
            <p>this a children content</p>
        </Popup>
        )
}

export default PopupMainMenu;