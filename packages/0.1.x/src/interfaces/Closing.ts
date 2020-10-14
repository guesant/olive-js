import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface ClosingProps extends NodeProps {
  length: ExtendedNumber;
  name: string;
  enabled: boolean;
  shared: ExtendedNumber | boolean;
}
export type ClosingNode = Node<ClosingProps>;

export const Closing = (
  props?: ClosingProps,
  ...children: NodeChildren[]
): ClosingNode => new Node("closing", props, children);
