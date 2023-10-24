import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [react(), svgr(), splitVendorChunkPlugin()],
  assetsInclude: ['**/*.woff2'],
});
