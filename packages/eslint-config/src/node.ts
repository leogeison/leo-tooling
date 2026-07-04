import globals from 'globals'

import base from './base.js'

const nodeConfig = [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
] as unknown as typeof base

export default nodeConfig
