import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";
import preload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), viteTsconfigPaths(), webfontDownload(), preload()],
    build: {
        outDir: "build",
    },
    server: {
        open: true,
        port: 3000,
    },
});
