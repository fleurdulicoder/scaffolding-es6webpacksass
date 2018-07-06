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
+ liner-csslint
+ linter-eslint
+ linter-sass-lint
+ linter-ui-default
+ pigments

Settings for atom-beautify:
---------------------------
+ Beautify entire file on save

Settings for linter-sass-lint:
------------------------------
+ A .sass-lint.yml to use fallback...:  .sass-lint.yml
+ Global node installation path: /usr/local/bin/
+ Disable when no sass-lint.yml found

Webpack 4:
-------------------------------------------------------------------------------

"babel-core": "^6.26.3",
"babel-eslint": "^8.2.5",
"babel-loader": "^7.1.5",
"babel-preset-env": "^1.7.0",
"css-loader": "^0.28.11",
"eslint": "^4.19.1",
"eslint-config-airbnb-base": "^13.0.0",
"eslint-plugin-import": "^2.12.0",
"html-loader": "^0.5.5",
"html-webpack-plugin": "^3.2.0",
"mini-css-extract-plugin": "^0.4.1",
"optimize-css-assets-webpack-plugin": "^4.0.3",
"postcss-loader": "^2.1.5",
"sass-loader": "^7.0.3",
"style-loader": "^0.21.0",
"uglifyjs-webpack-plugin": "^1.2.7",
"webpack": "^4.8.3",
"webpack-cli": "^3.0.8",
"webpack-dev-server": "^3.1.4"

ToDo: Add hot loading & code splitting - dynamic imports!
https://webpack.js.org/guides/code-splitting/

StyleGuides & Best Practices:
-------------------------------------------------------------------------------
AirBNB Best practices for SASS/CSS and ECMA2015 are used.

+ .scss-lint.yml
+ .eslintrc   ("extends": "airbnb-base")
