interface IModalComponentOption {
    component: any
    props?: { [key: string]: any }
    event?: { [key: string]: (event: any) => void }
}

export interface IModalWindowOption {
    closable?: boolean
    maskClosable?: boolean
    title?: string
    header?: boolean
    width?: number | string
}

export interface IModalOption
    extends IModalComponentOption,
        IModalWindowOption {}

export interface IModal extends IModalComponentOption {
    id: string
    resolve: any
    config: IModalWindowOption
}
