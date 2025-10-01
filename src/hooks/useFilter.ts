import { useEffect, useState, type MouseEvent } from "react"
import { useListStore } from "../store/useListStore"

export default function useFilter() {
    const { filter, setFilter } = useListStore()
    const [isOpen, setIsOpen] = useState(false)

    // Открытие меню
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsOpen(prev => !prev)
    }

    // Закрытие меню
    useEffect(() => {
        if(isOpen) {
            const handleClose = () => setIsOpen(false)

            window.addEventListener('click', handleClose)

            return () => window.removeEventListener('click', handleClose)
        }
    }, [isOpen])

    return {
        isOpen,
        filter,
        handleOpen,
        setFilter,
    }
}