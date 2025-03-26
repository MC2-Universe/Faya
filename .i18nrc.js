const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locales/en-US',
  entryLocale: 'en-US',
  output: 'locales',
  outputLocales: [
    'ar',
    'bg-BG',
    'zh-TW',
    'en-US',
    'ru-RU',
    'ja-JP',
    'ko-KR',
    'fr-FR',
    'tr-TR',
    'es-ES',
    'pt-BR',
    'de-DE',
    'it-IT',
    'nl-NL',
    'pl-PL',
    'vi-VN',
    'fa-IR',
  ],
  temperature: 0,
  modelName: 'gpt-4o-mini',
  experimental: {
    jsonMode: true,
  },
  markdown: {
    reference: 'You need to keep the mdx component format, and the output text does not need to be wrapped in any code block syntax at the outermost level',
    entry: ['./README.zh-US.md', './contributing/**/*.zh-US.md', './docs/**/*.zh-US.mdx'],
    entryLocale: 'en-US',
    outputLocales: ['en-US'],
    includeMatter: true,
    exclude: [
      './src/**/*',
      './contributing/_Sidebar.md',
      './contributing/_Footer.md',
      './contributing/Home.md',
    ],
    outputExtensions: (locale, { filePath }) => {
      if (filePath.includes('.mdx')) {
        if (locale === 'en-US') return '.mdx';
        return `.${locale}.mdx`;
      } else {
        if (locale === 'en-US') return '.md';
        return `.${locale}.md`;
      }
    },
  },
});
