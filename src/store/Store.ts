type TypeListener = {
    [key: string]: (data?: any) => void
}

const listener: TypeListener = {}

export const useListener = (name: string, func: (data? :any) => void) => {
    return listener[name]=func
}

export const setListener = (name: string, data: any) => {
    if(name) {
        return listener[name](data)
    } else {
        return
    }
}