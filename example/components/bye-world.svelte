<template>
    <div class="content">this is a modal content too</div>
    <button on:click="{onCloseModal}">close</button>
</template>

<script lang="ts">
import { useModal } from '@/modal.service'

const modal = useModal()

function onCloseModal() {
    modal.close()
}
</script>
