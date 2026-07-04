import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/base.ts', 'src/node.ts', 'src/react.ts', 'src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: false,
  clean: true,
  target: 'es2022',
  splitting: false,
  bundle: false,
})
