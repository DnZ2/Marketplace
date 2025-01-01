import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-plugin-svgr';
import {
    createHtmlPlugin
}  from 'vite-plugin-html';
export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), createHtmlPlugin({
        minify: true
    }), svgr()],
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