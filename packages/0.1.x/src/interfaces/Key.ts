import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface KeyProps extends NodeProps {
  value: any;
  frame: ExtendedNumber;
  type: ExtendedNumber;
  prehx?: any;
  prehy?: any;
  posthx?: any;
  posthy?: any;
}

export type KeyNode = Node<KeyProps>;

export const Key = (props?: KeyProps, ...children: NodeChildren[]): KeyNode =>
  new Node("key", props, children);
