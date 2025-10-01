import type { TypeItem } from "../types/types"
import { useListStore } from "../store/useListStore"
import { useState } from "react"
import { setListener } from "../store/Store"

export default function useTodoForm() {
    const { addItem } = useListStore()
    const [error, setError] = useState<string | boolean>(false)
    const [task, setTask] = useState<string>('')

    const handleInputTask = (value: string) => {
        setError(false)
        setTask(value)
    }

    // Создание новой задачи
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!validate(task)) return

        const newItem: TypeItem = {
            id: crypto.randomUUID(),
            isActive: true,
            description: task,
        }

        addItem(newItem)
        setListener('close_task_add', true)// зыкрытие модального окна
    }

    // Валидация
    const validate = (value: string) => {
        if(!value) return setError('это обязательное поле')

        return true
    }

    return {
        task,
        error,
        handleInputTask,
        onSubmit
    }
}