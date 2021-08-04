<template>
    <button on:click="{onClick1}">打开弹窗1</button>
    <button on:click="{onClick2}">打开弹窗2</button>
</template>

<script lang="ts">
import ByeWorld from '../components/bye-world.svelte'
import HelloWorld from '../components/hello-world.svelte'
import { useModal } from '@/index'

const modal = useModal()

function onClick1() {
    modal.open({
        title: 'aaa',
        component: HelloWorld,
        props: {
            msg: '123'
        },
        width: 800,
        maskClosable: true,
        event: {
            test: () => console.log('hello world')
        }
    })
}

function onClick2() {
    modal.open({
        title: 'aaa',
        component: ByeWorld,
        props: {
            msg: '123'
        },
        maskClosable: true
    })
}
</script>
