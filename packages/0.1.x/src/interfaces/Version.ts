import { TextNode } from "@olive-js/core/lib/interfaces/TextNode";

export type VersionNode = TextNode;

export const Version = (version: string = ""): VersionNode =>
  new TextNode("version", version);
