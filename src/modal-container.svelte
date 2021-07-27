<template>
    <div class="modal-container">
        <div
            class="modal-wrapper"
            on:click|self="{() => maskClose && onCloseModal()}">
            <div class="modal-content" style="{contentStyle}">
                {#if header}
                    <div class="modal-header">
                        <div class="title">{title}</div>
                        <div class="action">
                            {#if closable}
                                <img
                                    class="close-button"
                                    alt=""
                                    src="{closeSVG}"
                                    on:click="{onCloseModal}" />
                            {/if}
                        </div>
                    </div>
                {/if}
                <div class="modal-body">
                    <svelte:component this="{component}" {...params} />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
.modal-wrapper
    z-index 10000
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, 0.3)
    overflow auto
    display flex
    justify-content center
    align-items center

    .modal-content 
        background rgb(255, 255, 255)
        padding 10px
        border-radius 5px
        .modal-header 
            display flex
            justify-content space-between
            padding 0 10px
            .title 
                font-weight 600
                font-size 16px
            .close-button 
                height 20px
                cursor pointer
        .modal-body 
            padding 10px
</style>

<script lang="ts">
import { getContext, setContext, SvelteComponent } from 'svelte'
import closeSVG from '@/assets/icons/close.svg'

export let component: SvelteComponent
export let params: { [key: string]: any }
export let width: number | string
export let minWidth: number | string
export let title: string
export let header = true
export let id: string
export let closable = true
export let maskClose = true

const modal = getContext('modal') as any

function onCloseModal() {
    modal.close(id)
}

const getValue = (value?: string | number) =>
    ({
        string: value,
        number: `${value}px`
    }[typeof value])

$: contentStyle = [
    { key: 'width', value: getValue(width) },
    { key: 'min-width', value: getValue(minWidth) }
]
    .filter(({ value }) => !!value)
    .reduce((result, { key, value }) => {
        result += `${key}:${value};`
        return result
    }, '')

setContext('current-modal', { id })
</script>
