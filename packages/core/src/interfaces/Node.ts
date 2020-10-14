import { hasOwnProperty } from "../helpers/has-own-property";
import { Optional } from "./Optional";
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
  constructor(
    node: Node<any, any>["_node"] = "",
    attribs?: Node<A, any>["_attribs"],
    ...inner: Node<A, any>["_inner"]
  ) {
    node && this.setNode(node);
    typeof attribs !== "undefined" && this.set(attribs);
    inner && this.push(...inner.flat(Infinity));
    return this;
  }
  set(object: Optional<this["_attribs"]>): this;
  set<K extends keyof A, V extends A[K]>(key: K, value: V): this;
  set() {
    if (arguments.length === 1) {
      if (typeof arguments[0] === "object") {
        const object = arguments[0];
        for (const key in object) {
          hasOwnProperty(object, key) && this.set(key, object[key]);
        }
      }
    } else if (arguments.length === 2) {
      if (typeof arguments[0] === "string") {
        const key = arguments[0];
        const value = arguments[1];
        (this._attribs as any)[key] = value;
      }
    }
    return this;
  }
  setIfNotDefined(attribs: Optional<this["_attribs"]>) {
    for (const key in attribs) {
      hasOwnProperty(attribs, key) &&
        !hasOwnProperty(this["_attribs"], key) &&
        this.set(key, (attribs as any)[key]);
    }
    return this;
  }
  setNode(node: Node<A, I>["_node"]) {
    this._node = node;
    return this;
  }
  setInner(inner: Node<A, I>["_inner"]) {
    this._inner = inner.flat(Infinity) as any;
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
