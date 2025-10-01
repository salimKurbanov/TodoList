import type { TypeListStore } from "../types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useListStore = create<TypeListStore>()(
    persist(
        (set) => ({
            list: [],
            filter: 1,
            addItem: (item) => set((state) => ({list: [...state.list, item]})),
            deleteItem: (id) => set((state) => ({list: state.list.filter(el => el.id !== id)})),
            changeItem: (id, value, name) => set((state) => ({
                list: state.list.map(el => el.id === id ? {...el, [name]: value} : el)
            })),
            setFilter: (id) => set({filter: id}),
            endItem: (id) => set((state) => ({
                list: state.list.map(el => el.id === id ? {...el, isActive: !el.isActive} : el)
            }))
        }),
        {
            name: 'todo_list'
        }
    )
)