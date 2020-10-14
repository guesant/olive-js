# olive-js

Javascript bindings for the Olive Video Editor

## Requirements

Please ensure that you have NodeJS and pnpm installed.

```sh
node -v
```

```sh
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

## Usage

```ts
import { Audio } from "@olive-js/0.1.x/lib/interfaces/Audio";
import { Folders } from "@olive-js/0.1.x/lib/interfaces/Folders";
import { Footage } from "@olive-js/0.1.x/lib/interfaces/Footage";
import { Media } from "@olive-js/0.1.x/lib/interfaces/Media";
import { Project } from "@olive-js/0.1.x/lib/interfaces/Project";
import { Sequences } from "@olive-js/0.1.x/lib/interfaces/Sequences";
import { URL } from "@olive-js/0.1.x/lib/interfaces/URL";
import { Version } from "@olive-js/0.1.x/lib/interfaces/Version";
import { Video } from "@olive-js/0.1.x/lib/interfaces/Video";

Project()
  .add(Version("190219"))
  .add(URL("/home/user/project.ove"))
  .add(Folders())
  .add(Media().add(Footage().add(Video()).add(Audio())))
  .add(Sequences());
```

You can use the `nodeToXML` helper to generate your XML string.

```ts
import { nodeToXML } from "@olive-js/0.1.x/lib/helpers/node-to-xml";
console.log(nodeToXML(Project(...)))
```

---

Gabriel Rodrigues, 2020.
