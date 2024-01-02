module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'indent': ['error', 2],
    // Indentación de 2 espacios (ajusta según prefieras)
    'eol-last': ['error', 'always'], // Línea en blanco al final de archivos
    'semi': ['error', 'always'], // Punto y coma al final de declaraciones
    'quotes': ['error', 'single'], // Comillas simples en strings
    'space-before-function-paren': ['error', 'always'],
    // Espacios en blanco en funciones
    'no-unused-vars': 'error', // Variables no utilizadas
    'max-len': [
      'error',
      {
        code: 100,
      /*   ignoreUrls: true, // Opcional: Ignora las URL
        ignoreStrings: true, // Opcional: Ignora las cadenas
        ignoreTemplateLiterals: true, // Opcional: Ignora plantillas literales
        ignoreRegExpLiterals: true, // Opcional: Ignora expresiones regulares */
      },
    ],
  },
};
