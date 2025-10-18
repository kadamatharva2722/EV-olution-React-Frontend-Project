import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/EV-olution-React-Frontend-Project/'  // <--- important for GitHub Pages
})
