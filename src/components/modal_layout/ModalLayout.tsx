import type { TypeModalLayout } from "../../types/types";
import { createPortal } from "react-dom";
import useModalLayout from "./hooks/useModalLayout";
import './css/modal_layout.scss'

const ModalLayout = ({ 
    maxWidth='',
    classMode='', 
    listenerOpen, 
    listenerClose,
    children,
}: TypeModalLayout) => {
    const { isOpen, isClosing, onAnimationEnd, handleClose } = useModalLayout(listenerOpen, listenerClose)

    if(!isOpen) return null

    return createPortal(
        <div className={`modal_layout ${isClosing ? 'close' : ''}`} onMouseDown={handleClose}> 
            <div 
                className={`modal ${classMode} ${isClosing ? 'close' : 'open'}`}
                onAnimationEnd={onAnimationEnd}
                onMouseDown={e => e.stopPropagation()}
                style={{maxWidth: maxWidth}}
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ModalLayout;