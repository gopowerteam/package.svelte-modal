import { getContext } from 'svelte'
import type { IModalOption } from './interfaces'

export function useModal() {
    const modal = getContext('modal') as any
    const current = getContext('current-modal') as any

    return {
        open: (option: IModalOption) => {
            return modal.open(option)
        },
        close: (data?: any) => {
            const id = current?.id

            if (!id) return

            modal.close(id, data)
        },
        closeAll: () => modal.closeAll()
    }
}
