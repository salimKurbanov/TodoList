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
