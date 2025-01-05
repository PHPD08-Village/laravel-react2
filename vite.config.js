import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    // css: {
    //     modules: {
    //         localsConvention: 'camelCaseOnly', // 使用駝峰命名
    //     },
    // },
});
