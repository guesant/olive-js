import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import { Node, NodeProps } from "@olive-js/core/lib/interfaces/Node";
import { Recursive } from "@olive-js/core/lib/interfaces/Recursive";
import { AudioNode } from "./Audio";
import { MarkerNode } from "./Marker";
import { VideoNode } from "./Video";

export type FootageChildren = Recursive<VideoNode | AudioNode | MarkerNode>;

export interface FootageProps extends NodeProps {
  id: ExtendedNumber;
  folder: ExtendedNumber;
  name: string;
  url: string;
  duration: ExtendedNumber;
  using_inout: boolean;
  in: ExtendedNumber;
  out: ExtendedNumber;
  speed: ExtendedNumber | string;
  alphapremul: boolean;
  startnumber: ExtendedNumber | string;
  proxy: boolean;
  proxypath: string;
}

export type FootageNode = Node<FootageProps, FootageChildren>;

export const Footage = (
  props?: FootageProps,
  ...children: FootageChildren[]
): FootageNode =>
  new Node<FootageProps, FootageChildren>("footage", props, children);
