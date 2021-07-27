<template>
    <ModalProvider minWidth="{500}">
        <Page1 />
    </ModalProvider>
</template>

<script lang="ts">
import { ModalProvider } from '@/index'
import Page1 from './pages/page1.svelte'
</script>
