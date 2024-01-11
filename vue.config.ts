import * as path from 'path';

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    entry: './src/main.ts', // Update the entry point to main.ts
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'], // Add TypeScript extension
      alias: {
        '@': path.resolve(__dirname, 'src'), // Add alias for src directory if needed
      },
    },
  },
  transpileDependencies: true,
});
