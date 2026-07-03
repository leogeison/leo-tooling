import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    rules: {
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      curly: ['error', 'all'],
      'no-debugger': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
    },
  },
);
