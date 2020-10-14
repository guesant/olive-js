import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface MarkerProps extends NodeProps {
  name: string;
  frame: ExtendedNumber;
}

export type MarkerNode = Node<MarkerProps>;

export const Marker = (
  props?: MarkerProps,
  ...children: NodeChildren[]
): MarkerNode => new Node("marker", props, children);
