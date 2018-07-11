IDE Set Up: Atom
-------------------------------------------------------------------------------
Download ATOM for Mac or Windows. Install the following packages:

+ atom-beautify
+ atom-jest-snippets
+ autoclose-html
+ autocomplete-js-import
+ autocomplete-js-modules
+ es6-javascript
+ file-icons
+ language-babel
+ linter
+ linter-eslint
+ linter-scss-lint
+ linter-ui-default
+ pigments

Settings for atom-beautify:
---------------------------
+ Beautify entire file on save

Settings for linter-scss-lint:
------------------------------
+ A .scss-lint.yml to use fallback...:  .scss-lint.yml
+ Disable when no scss-lint.yml found

Webpack 4:
-------------------------------------------------------------------------------

"babel-core": "^6.26.3",
"babel-eslint": "^8.2.5",
"babel-loader": "^7.1.5",
"babel-preset-env": "^1.7.0",
"clean-webpack-plugin": "^0.1.19",
"copy-webpack-plugin": "^4.5.2",
"css-loader": "^0.28.11",
"cssnano": "^4.0.0",
"eslint": "^4.19.1",
"eslint-config-airbnb-base": "^13.0.0",
"eslint-plugin-import": "^2.12.0",
"file-loader": "^1.1.11",
"html-loader": "^0.5.5",
"html-webpack-plugin": "^3.2.0",
"imagemin-gifsicle": "^5.2.0",
"imagemin-webpack": "^3.0.0",
"mini-css-extract-plugin": "^0.4.1",
"node-sass": "^4.9.2",
"postcss-cssnext": "^3.1.0",
"postcss-import": "^11.1.0",
"postcss-loader": "^2.1.5",
"sass-loader": "^7.0.3",
"webpack": "^4.8.3",
"webpack-cli": "^3.0.8",
"webpack-dev-server": "^3.1.4"

Style Guides & Best Practices:
-------------------------------------------------------------------------------
AirBNB Best practices for SASS/CSS and ECMA2015 are used.

+ .scss-lint.yml (https://github.com/airbnb/css)
+ .eslintrc   (https://www.npmjs.com/package/eslint-config-airbnb-base)


Technologies:
-------------------------------------------------------------------------------
Sass, CSS, HTML5, Ecma2015 (ES6) Modular Programming


Application Installation:
-------------------------------------------------------------------------------
1. Make sure you have node, npm installed (and maybe a few other packages)
2. Run "npm install"
3. Run "npm run build"
4. Do "npm start"
5. Review what was build in dist/ etc.

Todos:
-------------------------------------------------------------------------------
JavaScript Code Splitting:
- Add hot loading & code splitting - dynamic imports!
  https://webpack.js.org/guides/code-splitting/

SASS Processing:
- Combine css & css
- Add prefixes
- Process into one file
- Minimize
