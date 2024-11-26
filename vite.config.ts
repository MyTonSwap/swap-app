import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import version from "vite-plugin-package-version";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), version()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
