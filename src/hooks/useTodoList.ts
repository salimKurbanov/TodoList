import { useListStore } from "../store/useListStore"

export default function useTodoList() {
    const { list } = useListStore()


    return {
        list,
    }
}