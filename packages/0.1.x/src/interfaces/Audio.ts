import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface AudioProps extends NodeProps {
  id: ExtendedNumber;
  channels: ExtendedNumber;
  layout: ExtendedNumber;
  frequency: ExtendedNumber;
}

export type AudioNode = Node<AudioProps>;

export const Audio = (
  props?: AudioProps,
  ...children: NodeChildren[]
): AudioNode => new Node("audio", props, children);
