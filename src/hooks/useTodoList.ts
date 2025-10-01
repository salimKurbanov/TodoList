import type { TypeItem } from "../types/types"
import { useMemo } from "react"
import { useListStore } from "../store/useListStore"

export default function useTodoList() {
    const { list, filter, endItem, deleteItem, changeItem } = useListStore()

    //INFO Фильтрованый список
    const todoList: TypeItem[] = useMemo(() => {
        switch (filter) {
            case 2:
                return list.filter(el => el.isActive) // выполненные
            case 3:
                return list.filter(el => !el.isActive) // активные
            case 1:
            default:
                return list
            }
    }, [filter, list]) 

    return {
        list,
        todoList,
        endItem,
        deleteItem,
        changeItem
    }
}