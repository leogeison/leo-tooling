# leo-tooling

Development tooling for Node.js, React and TypeScript projects.

## Packages

### @leogeison/eslint-config

Shared ESLint flat configs for:

- Base JavaScript/TypeScript projects
- Node.js projects
- React projects

## Installation

```bash
pnpm add -D eslint @leogeison/eslint-config
```

## Usage

### Base

```js
import base from '@leogeison/eslint-config'

export default base
```

### Node.js

```js
import node from '@leogeison/eslint-config/node'

export default node
```

### React

```js
import react from '@leogeison/eslint-config/react'

export default react
```

## Available configs

| Config | Import | Description |
|---|---|---|
| Base | `@leogeison/eslint-config` | General JavaScript and TypeScript rules |
| Node | `@leogeison/eslint-config/node` | Node.js globals and server-side rules |
| React | `@leogeison/eslint-config/react` | React, React Hooks and React Refresh rules |

## Requirements

- Node.js 22+
- ESLint 9+

## License

MIT
