import { Node } from "./Node";

export type TextNodeText = string;

export class TextNode extends Node {
  _inner: TextNodeText[] = [];
  constructor(node: Node["_node"] = "", text: TextNodeText = "") {
    super("", {}, []);
    this.setText(text);
    node && this.setNode(node);
  }
  setText(text: TextNodeText) {
    this.setInner([text]);
  }
  getText(sep: string = "") {
    return this._inner.join(sep);
  }
}
