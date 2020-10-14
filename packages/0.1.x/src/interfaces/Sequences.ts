import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { SequenceNode } from "./Sequence";

export type SequencesChildren = Recursive<SequenceNode>;

export type SequencesNode = Node<any, SequencesChildren>;

export const Sequences = (
  props?: NodeProps,
  ...children: SequencesChildren[]
): SequencesNode => new Node("sequences", props, children);
