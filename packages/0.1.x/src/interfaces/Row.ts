import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { FieldNode } from "./Field";

export type RowChildren = Recursive<FieldNode>;

export type RowNode = Node<any, RowChildren>;

export const Row = (props?: NodeProps, ...children: RowChildren[]): RowNode =>
  new Node("row", props, children);
