import { Node } from "./Node";

export type Attributes<T extends Node> = {
  [P in keyof T["_attribs"]]: T["_attribs"][P];
};
