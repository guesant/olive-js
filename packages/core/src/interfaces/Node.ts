import { Recursive } from "./Recursive";

export interface NodeProps {
  [key: string]: any;
}

export type NodeChildren = Recursive<any>;

export class Node<
  A extends NodeProps = NodeProps,
  I extends Recursive<any> = NodeChildren
> {
  _node: string = "";
  _attribs = {} as A;
  _inner = [] as I[];
  constructor() {
    return this;
  }
  push(...nodes: Node<A, I>["_inner"]) {
    return this._inner.push(...([nodes] as any).flat(Infinity));
  }
  add(...nodes: Node<A, I>["_inner"]) {
    this.push([nodes] as any);
    return this;
  }
  clone() {
    return new Node(this._node, this._attribs, this._inner);
  }
}
