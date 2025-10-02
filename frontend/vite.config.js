import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // React + Tailwind
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src
    },
  },
  
  server: {
    port: 8080, // Dev server on port 8080
    open: true, // Auto-open browser when server starts
  },
  assetsInclude: ["**/*.JPG"], // Include JPG images
})
