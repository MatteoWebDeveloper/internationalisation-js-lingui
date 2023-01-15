import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), preact()],
});
