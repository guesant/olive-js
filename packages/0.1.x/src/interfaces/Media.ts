import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { FootageNode } from "./Footage";

export type MediaChildren = Recursive<FootageNode>;

export type MediaNode = Node<any, MediaChildren>;

export const Media = (
  props?: NodeProps,
  ...children: MediaChildren[]
): MediaNode => new Node("media", props, children);
