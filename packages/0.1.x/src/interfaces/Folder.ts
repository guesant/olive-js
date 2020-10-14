import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface FolderProps extends NodeProps {
  name: string;
  id: ExtendedNumber;
  parent: ExtendedNumber;
}

export type FolderNode = Node<FolderProps>;

export const Folder = (
  props?: FolderProps,
  ...children: NodeChildren[]
): FolderNode => new Node("folder", props, children);
