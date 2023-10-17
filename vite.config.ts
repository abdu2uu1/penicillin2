import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		
    AutoImport({  dts: true  , imports: ['vue']}),
    Components({ 	  dts: true,  }),

	],
})
