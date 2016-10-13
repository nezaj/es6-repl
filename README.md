# ES6 REPL
Simple es6 style repl setup for interactive dev

### Motivation
I often do `node` or `babel-node` to fire up a repl for TDD/interactive development. However, one thing that is annoying is to keep doing the same `import ...` statements or to run the same commands to set up the environment (`const foo = ...; const bar = ...;`)

So what this does is use the standard library `repl` package to customize the repl startup. I've been using this for awhile, felt like it might be worth sharing

### Quickstart
```
git clone ...  # Clone rep
npm i  # Install node packages
make repl  # Start repl
hello  # prints 'Hello World!'
```
