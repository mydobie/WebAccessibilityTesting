module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': [
    (jsFiles) => jsFiles.map((jsFile) => `npx eslint ${jsFile}`), // check files
    (jsFiles) =>
      jsFiles.map(
        (jsFile) =>
          `npx stylelint --ignore-path ./.eslintignore --config .stylelintrcJS --allow-empty-input --fix ${jsFile}`
      ),
  ],
  'src/**/*.{scss,css}': [
    (scssFiles) =>
      scssFiles.map(
        (scssFile) =>
          `npx stylelint --ignore-path ./.eslintignore --allow-empty-input --fix  ${scssFile}`
      ), // check files
  ],
  'src/**/*.{js,jsx,ts,tsx,css,scss,md,json,html}': [
    (htmlFiles) =>
      htmlFiles.map(
        (htmlFile) =>
          `npx prettier --ignore-path ./.eslintignore --write  ${htmlFile}`
      ), // check files
  ],
};
