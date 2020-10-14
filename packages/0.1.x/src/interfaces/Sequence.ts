import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { ClipNode } from "./Clip";
import { MarkerNode } from "./Marker";

export type SequenceChildren = Recursive<ClipNode | MarkerNode>;

export interface SequenceProps extends NodeProps {
  id: ExtendedNumber;
  folder: ExtendedNumber;
  name: string;
  width: ExtendedNumber;
  height: ExtendedNumber;
  framerate: ExtendedNumber;
  afreq: ExtendedNumber;
  alayout: ExtendedNumber;
  open: boolean;
  workarea: boolean;
  workareaIn: ExtendedNumber;
  workareaOut: ExtendedNumber;
}

export type SequenceNode = Node<SequenceProps, SequenceChildren>;

export const Sequence = (
  props?: SequenceProps,
  ...children: SequenceChildren[]
): SequenceNode => new Node("sequence", props, children);
