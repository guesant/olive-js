import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { ClosingNode } from "./Closing";
import { EffectNode } from "./Effect";
import { LinkedNode } from "./Linked";
import { MarkerNode } from "./Marker";
import { OpeningNode } from "./Opening";

export type ClipChildren = Recursive<
  LinkedNode | OpeningNode | ClosingNode | MarkerNode | EffectNode
>;

export interface ClipProps extends NodeProps {
  id: ExtendedNumber;
  enabled: boolean;
  name: string;
  clipin: ExtendedNumber;
  in: ExtendedNumber;
  out: ExtendedNumber;
  track: ExtendedNumber;
  r: ExtendedNumber;
  g: ExtendedNumber;
  b: ExtendedNumber;
  autoscale: boolean;
  speed: ExtendedNumber;
  maintainpitch: boolean;
  reverse: boolean;
  type: ExtendedNumber;
  media: ExtendedNumber | "";
  stream: ExtendedNumber | "";
  sequence: ExtendedNumber | "";
}

export type ClipNode = Node<ClipProps, ClipChildren>;

export const Clip = (
  { ...props }: ClipProps,
  ...children: ClipChildren[]
): ClipNode => new Node("clip", props, children);
