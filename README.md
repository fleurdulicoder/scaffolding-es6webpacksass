Starter Kit: Webpack 4, Sass, HTML5, ES6
-------------------------------------------------------------------------------
This is an empty package with the set up to do common tasks for development of
web sites in non-React environment, yet with ES6. You can improve it by forking
it or sending me a request to add more to this bare package.

Prerequisites:
-------------------------------------------------------------------------------
1. Node must be installed globally
2. NPM must be installed globally (and/or Yarn)

Good to have:
-------------------------------------------------------------------------------
Install NVM for node version management. The instructions are here:
https://github.com/creationix/nvm#install-script.

Steps:

1. Make sure you have ~/.bash_profile (or .profile, or .bashrc). If not, create:
$ touch ~/.bash_profile

2. Load the NVM binaries:
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

3. Set up a node version for your project:
$ nvm install 8.11.3
$ nvm use 8.11.3
$ nvm current
8.11.3

4. If you have a new project in future that requires a different version of node,
you can simply switch to a different version just by asking NVM to use that version.

Application Installation:
-------------------------------------------------------------------------------
1. Make sure you have node & npm installed (+yarn)
2. Run "npm install"
3. Run "npm run build"
4. Do "npm start"
5. Review what was build in dist/ etc.

Node Version Manager
-------------------------------------------------------------------------------
1. Package node version is locked, so that we can safely program
2. Package node lock is in .nvmrc file

Technologies:
-------------------------------------------------------------------------------
Sass, CSS, HTML5, Ecma2015 (ES6) Modular JavaScript Programming

Suggested IDE: Atom
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

Package Features:
-------------------------------------------------------------------------------
1. Removal of the previous bundle /dist on "npm run build"
2. FontAwesome loading into /dist/fonts
3. SASS loading, interpreting & minifying into /dist/css
4. HTML loading, option to minify  /dist/index.html
5. Referenced in JS|HTML|CSS Images loading to /dist/img
6. JavaScript transpiling, bundling & minifying /dist/js/main.min.js
7. To preview bundle in the browser, run "npm start"

Todos:
-------------------------------------------------------------------------------
JavaScript Code Splitting:
- .scss images as backgrounds are not loading yet, a bug
- add hot loading & code splitting - dynamic imports!
  https://webpack.js.org/guides/code-splitting/
