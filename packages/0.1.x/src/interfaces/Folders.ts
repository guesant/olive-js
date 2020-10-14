import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { FolderNode } from "./Folder";

export type FoldersChildren = Recursive<FolderNode>;

export interface FoldersProps extends NodeProps {}

export type FoldersNode = Node<FoldersProps, FoldersChildren>;

export const Folders = (
  props?: FoldersProps,
  ...children: FoldersChildren[]
): FoldersNode => new Node("folders", props, children);
