import { Node } from "./Node";

export type Children<T extends Node> = T["_inner"];
