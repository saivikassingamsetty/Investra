import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript'
import {globalIgnores} from 'eslint/config'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**', '**/.yarn/**', '**/env.d.ts']),

  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  pluginOxlint.configs['flat/recommended'],
  skipFormatting,
  {
    // add your custom rules here
    rules: {
      // https://eslint.org/docs/latest/rules/no-undef#handled_by_typescript
      // done by ts
      'no-undef': 'off',

      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],

      // allow debugger during development only
      'no-debugger': 'error',
      // 'no-console': 'warn',

      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-empty-object-type': 0,
      '@typescript-eslint/no-unused-expressions': ['error', {allowShortCircuit: true}],

      'vue/multi-word-component-names': 0,
      'vue/block-lang': 0,
    },
  }
)
