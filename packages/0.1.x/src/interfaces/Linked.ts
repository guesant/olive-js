import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { LinkNode } from "./Link";

export type LinkedChildren = Recursive<LinkNode>;

export type LinkedNode = Node<any, LinkedChildren>;

export const Linked = (
  props?: NodeProps,
  ...children: LinkedChildren[]
): LinkedNode => new Node("linked", props, children);
