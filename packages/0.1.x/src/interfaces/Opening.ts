import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface OpeningProps extends NodeProps {
  length: ExtendedNumber;
  name: string;
  enabled: boolean;
  shared: ExtendedNumber | boolean;
}

export type OpeningNode = Node<OpeningProps>;

export const Opening = (
  props?: OpeningProps,
  ...children: NodeChildren[]
): OpeningNode => new Node("opening", props, children);
