import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {
    createHtmlPlugin
}  from 'vite-plugin-html';
export default defineConfig({
    plugins: [react(), createHtmlPlugin({
        minify: true
    })],
    resolve: {
        alias: {
            assets:"/src/assets",
            app: "/src/app",
            widgets:"/src/widgets",
            features:"/src/features",
            entities: "/src/entities",
            shared: "/src/shared",
            pages: "/src/pages",
        },
    },
});