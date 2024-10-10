import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  resolve: {
    preserveSymlinks: true,
  },
  optimizeDeps: {
    include: [
      '@supabase/supabase-js',
      '@supabase/auth-helpers-remix',
      '@supabase/auth-helpers-shared',
      '@supabase/auth-js',
      '@supabase/functions-js',
      '@supabase/realtime-js',
      '@supabase/postgrest-js',
      '@supabase/storage-js',
      'react-router',
      'turbo-stream',
      '@supabase/node-fetch',
      'scheduler'
    ],
  },
  ssr: {
    noExternal: ['@remix-run/react', '@remix-run/server-runtime', 'react-router-dom', 'react-router'],
  }
});