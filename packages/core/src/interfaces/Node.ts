import { Recursive } from "./Recursive";

export interface NodeProps {
  [key: string]: any;
}

export type NodeChildren = Recursive<any>;

