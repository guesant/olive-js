import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { KeyNode } from "./Key";

export type FieldChildren = Recursive<KeyNode>;

export interface FieldProps extends NodeProps {
  id: ExtendedNumber;
  value: any;
}

export type FieldNode = Node<FieldProps, FieldChildren>;

export const Field = (
  { ...props }: FieldProps,
  ...children: FieldChildren[]
): FieldNode => new Node("field", props, children);
