import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        rum: resolve(__dirname, 'rum.html'),
        barrelRoom: resolve(__dirname, 'barrel-room.html'),
        booking: resolve(__dirname, 'booking.html'),
      },
    },
  },
});
