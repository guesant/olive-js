import { ExtendedNumber } from "@olive-js/core/lib/interfaces/ExtendedNumber";
import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

export interface VideoProps extends NodeProps {
  id: ExtendedNumber;
  width: ExtendedNumber;
  height: ExtendedNumber;
  framerate: ExtendedNumber;
  infinite: boolean;
}

export type VideoNode = Node<VideoProps>;

export const Video = (
  props?: VideoProps,
  ...children: NodeChildren[]
): VideoNode => new Node("video", props, children);
