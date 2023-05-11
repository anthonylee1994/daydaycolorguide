import {defineConfig} from "vite";
import {VitePWA} from "vite-plugin-pwa";
import React from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        React(),
        VitePWA({
            registerType: "autoUpdate",
        }),
    ],
    define: {
        "process.env": {},
    }
});
