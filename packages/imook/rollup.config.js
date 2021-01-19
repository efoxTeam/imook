import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const extensions = ['.ts', '.tsx']
const external = [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {file: 'lib/imook.js', format: 'cjs', indent: false, exports: 'named'},
    external,
    plugins: [
      typescript({useTsconfigDeclarationDir: true}),
      babel({
        extensions,
        runtimeHelpers: true,
      }),
      terser({
        ecma: 5,
        ie8: true,
        safari10: true,
      }),
      copy({
        targets: [{src: './types', dest: 'lib'}],
        hook: 'writeBundle',
      }),
    ],
  },
]
