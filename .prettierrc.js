module.exports = {
  semi: false,
  trailingComma: 'none',
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.md'],
      options: {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}
