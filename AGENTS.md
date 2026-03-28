# Agents Documentation

This file provides guidelines and instructions for agentic coding agents working in this repository.

## Project Overview

- **Type**: React web application (SPA)
- **Stack**: Vite + React 19.2.4 + JavaScript (JSX)
- **Package Manager**: npm

## Development Commands

```bash
# Start development server with hot module replacement (HMR)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Run ESLint on all files
npm run lint

# Preview production build locally
npm run preview
```

## Code Style Guidelines

### General JavaScript/JSX Conventions

- Use **ES modules** (`import`/`export`) for all JavaScript files
- Use **2 spaces** for indentation
- Use **double quotes** for strings (standard in this project)
- End files with a newline character
- Maximum line length: 120 characters (soft guideline)
- Use **PascalCase** for component names and file names for components
- Use **camelCase** for variables, functions, and utilities
- Use **UPPER_SNAKE_CASE** for constants

### Import Organization

Organize imports in the following order (eslint-plugin-import groups):

1. React core imports (`react`)
2. Third-party libraries (e.g., `react-router-dom`, `axios`)
3. Relative imports (components, utils, hooks)
4. CSS/style imports
5. Asset imports (images, fonts)

```jsx
// Example import organization in App.jsx
import { useState } from 'react'

import './App.css'
import { MyComponent } from './components/MyComponent'
import { myUtil } from './utils/myUtil'
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `MyComponent.jsx` |
| Hooks | camelCase, prefix `use` | `useAuth.js` |
| Utilities | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| CSS files | Match component name | `MyComponent.css` |
| State variables | camelCase | `userData`, `isLoading` |

### React Patterns

#### Component Structure

```jsx
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './ComponentName.css'

function ComponentName({ title, onSubmit }) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // effect logic
    return () => {
      // cleanup logic
    }
  }, [dependency])

  const handleClick = () => {
    onSubmit(state)
  }

  return (
    <div className="component-name">
      <h1>{title}</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
}

ComponentName.defaultProps = {
  onSubmit: () => {},
}

export default ComponentName
```

#### Hooks Rules (react-hooks)

- Only call hooks at the **top level** of components or custom hooks
- Only call hooks from **React functions** (components or custom hooks)
- Custom hooks must start with **`use`** prefix
- Use the `useCallback` hook when passing callbacks to optimized child components
- Use `useMemo` for expensive calculations that depend on specific values

### Error Handling

- Use **try-catch** blocks for async operations and API calls
- Provide user-friendly error messages
- Log errors to console with appropriate context
- Handle loading and error states in components

```jsx
async function fetchData() {
  try {
    setLoading(true)
    const response = await api.getData()
    setData(response)
  } catch (error) {
    console.error('Error fetching data:', error)
    setError(error.message)
  } finally {
    setLoading(false)
  }
}
```

### Conditional Rendering

Use early returns for cleaner component logic:

```jsx
function UserProfile({ user, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <ErrorMessage message="User not found" />
  }

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}
```

## Project Structure

```
src/
├── App.jsx          # Main app component
├── App.css          # App-level styles
├── main.jsx         # Entry point (creates React root)
├── index.css        # Global styles
└── components/      # Reusable UI components (create as needed)
    └── Example/
        ├── Example.jsx
        └── Example.css
├── hooks/           # Custom React hooks (create as needed)
│   └── useExample.js
├── utils/           # Utility functions (create as needed)
│   └── helpers.js
└── services/        # API services (create as needed)
    └── api.js
```

## ESLint Configuration

The project uses ESLint 9 with flat configuration (`eslint.config.js`):

- **react-hooks**: Enforces rules of hooks (see above)
- **react-refresh**: Ensures components are refresh-safe
- **no-unused-vars**: Errors on unused variables, except those starting with uppercase/underscore

```javascript
// eslint.config.js rule example
rules: {
  'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
}
```

## Git Conventions

### Commit Messages

Use conventional commits format:

```
<type>(<scope>): <description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, missing semi colons, etc
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks
```

Examples:
```
feat(components): add user profile card
fix(api): handle timeout errors gracefully
docs(readme): update installation instructions
```

### Branch Naming

```
<type>/<issue-number>-<short-description>

Examples:
- feature/123-user-authentication
- fix/456-login-validation
- chore/update-dependencies
```

## Recommended VS Code Extensions

For this project, install these extensions:

- **ESLint** (dbaeumer.vscode-eslint) - Linting support
- **Prettier** (esbenp.prettier-vscode) - Code formatting
- **Reactjs code snippets** (xabikos.ReactSnippets) - React code completion

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "xabikos.ReactSnippets"
  ]
}
```

## Dependencies

### Production Dependencies

- `react`: ^19.2.4
- `react-dom`: ^19.2.4

### Development Dependencies

- `vite`: ^8.0.1
- `@vitejs/plugin-react`: ^6.0.1
- `eslint`: ^9.39.4
- `@eslint/js`: ^9.39.4
- `eslint-plugin-react-hooks`: ^7.0.1
- `eslint-plugin-react-refresh`: ^0.5.2
- `globals`: ^17.4.0

## Important Notes

- This project uses **JavaScript**, not TypeScript
- There are currently **no tests** configured
- CSS files are **per-component** (not CSS modules or Tailwind)
- The project uses the **Vite default React plugin** (Oxc-based), not SWC
- React Compiler is **not enabled** (see README for instructions if needed)
