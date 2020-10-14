import { TextNode } from "@olive-js/core/lib/interfaces/TextNode";

export type URLNode = TextNode;

export const URL = (url: string = ""): URLNode => new TextNode("url", url);
