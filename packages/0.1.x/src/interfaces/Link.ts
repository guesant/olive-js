import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface LinkProps extends NodeProps {
  id: ExtendedNumber;
}

export type LinkNode = Node<LinkProps>;

export const Link = (
  props?: LinkProps,
  ...children: NodeChildren[]
): LinkNode => new Node("link", props, children);
