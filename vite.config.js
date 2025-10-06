import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração completa para CodeSandbox
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 2222,
    allowedHosts: [".csb.app", ".codesandbox.io"],
  },
});
