# Boilerplate and Starter for Next JS 13+, Tailwind CSS 3 and TypeScript

## Package

- NextJS ( App Directory )
- CSS Impletement with Tailwind CSS
- Zustand
- React Query
- Eslint for Code Quality
- Prettier for Format Quality
- Test with Jest and React Test
- Plopjs for Generate Folder Component, Modular
- Next-SEO
- Next-Auth
- Next-Intl

## State Management

## Test

## Generating components

```bash
yarn generate Button
```

``` text
└── components
      └── ui
        └── Button
          ├── index.ts
          ├── Button.test.tsx
          └── Button.tsx
      └── layouts
      └── templates
└── constants
└── contexts
└── dictionaries
└── graphql
└── hocs
└── hooks
└── lib
└── middlewares
└── modules
└── services
└── stores
└── styles
└── utils
```

## lib directory

The lib directory is typically used for files or components that are more closely tied to the core functionality or infrastructure of your application. This can include:

- Third-party library integrations: If you have a file that sets up or configures a third-party library like Apollo Client, React Query, or Redux, it's common to place it in the lib directory.
- Core utilities or services: If you have utility functions or services that are essential to the core functionality of your application, such as authentication services, API clients, or database utilities, they can be placed in the lib directory.
- Custom hooks or components with global scope: If you have custom hooks or components that are used across multiple parts of your application and have a global scope, they can be placed in the lib directory.
- Application-specific configuration: Any configuration files or constants that are specific to your application and used across multiple parts of the codebase can be placed in the lib directory.

## utils directory

The utils directory is generally used for files or components that provide utility or helper functions, and their scope is more localized or feature-specific. This can include:

- Utility functions: If you have utility functions that perform common tasks like data transformation, validation, or formatting, and are used across multiple parts of your application, they can be placed in the utils directory.
- Helper components: If you have reusable helper components that provide additional functionality or enhance existing components, they can be placed in the utils directory.
- Custom hooks with localized scope: If you have custom hooks that are specific to a particular feature or set of components, they can be placed in the utils directory.
- Feature-specific utilities: If you have utility functions or components that are specific to a particular feature or module of your application, they can be placed in the utils directory within that feature's directory.

## License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.
