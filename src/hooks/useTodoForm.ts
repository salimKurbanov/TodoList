import type { TypeItem } from "../types/types"
import { useListStore } from "../store/useListStore"
import { useState } from "react"

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
            isDone: false,
            description: task,
        }

        addItem(newItem)
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