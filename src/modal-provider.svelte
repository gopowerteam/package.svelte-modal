<template>
    {#if modals.length}
        <div class="absolute inset-0 modal-container-wrapper">
            {#each modals as modal}
                <ModalContainer
                    id="{modal.id}"
                    component="{modal.component}"
                    params="{modal.props}"
                    title="{modal.config.title}"
                    closable="{modal.config.closable}"
                    maskClose="{modal.config.maskClosable}"
                    minWidth="{minWidth}"
                    width="{modal.config.width}" />
            {/each}
        </div>
    {/if}

    <slot />
</template>

<script lang="ts">
import ModalContainer from './modal-container.svelte'
import { setContext } from 'svelte'
import type { IModal, IModalOption } from './interfaces'

export let minWidth: number

let modals: IModal[] = []

async function openModal(option: IModalOption) {
    const component = option.component
    return new Promise((resolve) => {
        modals = modals.concat({
            id: Math.random().toString(32).slice(2),
            component,
            props: option.props,
            resolve,
            config: option
        })
    })
}

/**
 * 关闭Modal
 */
async function closeModal(id: string, data: any) {
    const index = modals.findIndex((x) => x.id === id)
    if (index < 0) return

    const modal = modals[index]
    modal?.resolve(data)
    modals.splice(index, 1)

    modals = [...modals]
}

async function closeAllModal() {
    modals.forEach((modal) => {
        modal.resolve()
    })
    modals = []
}

setContext('modal', {
    open: openModal,
    close: closeModal,
    closeAll: closeAllModal
})
</script>
