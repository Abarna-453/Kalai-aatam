import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   loader: "jsx", // Specify "jsx" as the loader for JSX syntax in JS files
  //   include: [
  //     // Add the specific files and directories where you want to allow JSX syntax in JS files
  //     "src/**/*.js",
  //     "node_modules/**/*.js",
  //   ],
  // },
  esbuild: {
    jsxFactory: 'React.createElement', // Specify the JSX factory function
    jsxFragment: 'React.Fragment', // Specify the JSX fragment component
  },
});
