import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src', 'index.js'),
            name: 'modal',
            fileName: 'index'
        },
        rollupOptions: {
            // 请确保外部化那些你的库中不需要的依赖
            external: ['svelte'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    svelte: 'svelte'
                }
            }
        }
    },
    plugins: [svelte()]
})
