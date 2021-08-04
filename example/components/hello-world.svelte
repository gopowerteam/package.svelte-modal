<template>
    <div class="content">this is a modal content</div>
    <button on:click="{onTestEvent}">close</button>
    <button on:click="{onCloseModal}">close</button>
</template>

<script lang="ts">
import { useModal } from '@/modal.service'
import { createEventDispatcher } from 'svelte'
const dispatcher = createEventDispatcher()
const modal = useModal()

function onCloseModal() {
    modal.close()
}

function onTestEvent() {
    dispatcher('test')
}
</script>
