import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { RowNode } from "./Row";

export type EffectChildren = Recursive<RowNode>;

export interface EffectProps extends NodeProps {
  name: string;
  enabled: boolean;
}

export type EffectNode = Node<EffectProps, EffectChildren>;

export const Effect = (
  props?: EffectProps,
  ...children: EffectChildren[]
): EffectNode => new Node("effect", props, children);
