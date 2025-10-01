import type { ComponentProps } from "react";
import type Icons from "../icons/Icons";

export type TypeIconsLine = ComponentProps<typeof Icons.Line>['name']

export type TypeTitle = {
    children: React.ReactNode,
    mode: 'white' | 'black'
}

export type TypeButton = {
    mode: 'white' | 'main_color' | 'black',
    disabled?: boolean,
    icon?: React.ReactNode,
    children: React.ReactNode,
    callback?: (e: any) => void
}

export type TypeIconBtn = {
    mode: 'white' | 'black' | 'grey',
    classMode?: string,
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: (e: any) => void 
}

export type TypeCheckBox = {
    isChecked?: boolean
    callback?: React.ChangeEventHandler<HTMLInputElement>
}

export type TypeTextarea = {
    value: string | number,
    placeholder: string,
    mode?: string,
    disabled?: boolean,
    icon?: React.ReactNode,
    error?: string | boolean,
    callback?: React.ChangeEventHandler<HTMLTextAreaElement>,
    onFocusCallback?: React.FocusEventHandler<HTMLTextAreaElement>,
    onBlurCallback?: React.FocusEventHandler<HTMLTextAreaElement>,
}

export type TypeNoItems = {
    icon?: React.ReactNode,
    text?: string,
    button?: React.ReactNode,
    mode: string,
}

export type TypeItem = {
    id: string
    isActive: boolean,
    description: string,
}

export type TypeListStore = {
    list: TypeItem[],
    filter: number,
    addItem: (item: TypeItem) => void
    deleteItem: (id: string) => void
    changeItem: (id: string, value: string, name: string) => void
    setFilter: (id: number) => void
    endItem: (id: string) => void
}

export type TypeModalLayout = {
    maxWidth?: string,
    classMode?: string,
    listenerOpen: string,
    listenerClose: string,
    children: React.ReactNode
}

export type TypeTodoItem = {
    item: TypeItem,
    handleCheck: () => void,
    handleDelete: () => void,
    changeItem: (id: string, value: string, name: string) => void
}