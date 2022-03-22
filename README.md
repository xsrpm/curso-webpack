# js-portfolio

## Fixing Uncaught ReferenceError: regeneratorRuntime is not defined
https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined

 If you're using babel 7, you need @babel/plugin-transform-runtime to use built-ins such as Promise, Set, Symbol etc as well use all the Babel features that require a polyfill seamlessly, without global pollution, making it extremely suitable for libraries.

 https://babeljs.io/docs/en/babel-plugin-transform-runtime

    npm install @babel/plugin-transform-runtime -D -E

