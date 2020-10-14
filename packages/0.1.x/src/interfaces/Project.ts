import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { FoldersNode } from "./Folders";
import { MediaNode } from "./Media";
import { SequenceNode } from "./Sequence";
import { VersionNode } from "./Version";

export type ProjectChildren = Recursive<
  VersionNode | FoldersNode | MediaNode | SequenceNode
>;

export interface ProjectProps extends NodeProps {}

export type ProjectNode = Node<ProjectProps>;

export const Project = (
  props?: ProjectProps,
  ...children: NodeChildren[]
): ProjectNode => new Node("project", props, children);
