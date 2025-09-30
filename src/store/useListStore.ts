import type { TypeList } from "../types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useListStore = create<TypeList>()(
    persist(
        (set) => ({
            list: [],
            addItem: (item) => set((state) => ({list: [...state.list, item]})),
            deleteItem: (id) => set((state) => ({list: state.list.filter(el => el.id !== id)})),
            changeItem: (id, value, name) => set((state) => ({
                list: state.list.map(el => el.id === id ? {...el, [name]: value} : el)
            }))
        }),
        {
            name: 'todo_list'
        }
    )
)