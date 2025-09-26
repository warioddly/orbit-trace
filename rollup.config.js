import copy from 'rollup-plugin-copy'

export default {
  input: 'src/dist/index.js',
  output: {
    file: 'dist/OrbitTrace.js',
    name: 'OrbitTrace',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
      copy({
          targets: [
              { src: 'src/dist/index.d.ts', dest: 'dist', rename: 'OrbitTrace.d.ts' },
              { src: 'src/example.html', dest: 'dist', rename: 'index.html' },
          ],
          verbose: true
      })
  ],
};
