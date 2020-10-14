# olive-js

Javascript bindings for Olive Video Editor

## Requirements

Please ensure that you have NodeJS and pnpm installed.

```sh
node -v
npm i -g pnpm
```

## Install

We currently don't ship OliveJS over the npm registry. You can install OliveJS by typing:

```sh
git clone https://github.com/guesant/olive-js.git
cd olive-js
pnpm -r install
pwd # (this will print the full path of olive-js package)
```

Now, inside your project, install OliveJS with

```
$ npm install path-to-olive/packages/0.1.x
```

Remember to replace `path-to-olive` with the result of the `pwd` command executed above.


---

Gabriel Rodrigues, 2020.
