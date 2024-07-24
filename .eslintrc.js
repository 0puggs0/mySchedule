// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    settings: {
      "import/ignore": ["react-native"],
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  
          // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
  
          // use <root>/path/to/folder/tsconfig.json
          project: "./tsconfig.json",
  
          // Multiple tsconfigs (Useful for monorepos)
  
          // use a glob patter
        },
        node: {
          paths: ["src", "src/api"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        },
      },
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "import/no-unresolved": [2, { caseSensitive: false }],
      "import/no-named-as-default": 0,
      "import/extensions": "off",
    },
  };