import { useState } from "react"
import { useListener } from "../../../store/Store"

export default function useModalLayout(listenerOpen: string, listenerClose: string) {
    const [isOpen, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    useListener(listenerOpen, () => {
        setIsOpen(true)
        document.body.classList.add('modal_opened')
    })

    useListener(listenerClose, () => {
        handleClose()
    })

    const onAnimationEnd = () => {
        if(!isClosing) return

        setIsOpen(false)
        document.body.classList.remove('modal_opened')
        setIsClosing(false)
    }

    const handleClose = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIsClosing(true);
    }

    return {
        isOpen,
        isClosing,
        onAnimationEnd,
        handleClose
    }
}