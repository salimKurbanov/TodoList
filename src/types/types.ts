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
    disabled?: boolean,
    children: React.ReactNode,
    onClick?: (e: any) => void 
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
    isDone: boolean,
    description: string,
}

export type TypeList = {
    list: TypeItem[],
    addItem: (item: TypeItem) => void
    deleteItem: (id: string) => void
    changeItem: (id: string, value: string, name: string) => void
}

export type TypeModalLayout = {
    maxWidth?: string,
    classMode?: string,
    listenerOpen: string,
    listenerClose: string,
    children: React.ReactNode
}