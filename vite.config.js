import { VitePluginFonts } from 'vite-plugin-fonts'

export default {
  plugins: [
    VitePluginFonts({
      google: {
        families: ['Hanken Grotesk'],
      },
    }),
  ],
}