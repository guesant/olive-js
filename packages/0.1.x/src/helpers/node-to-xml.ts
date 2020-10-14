import {
  Node,
  NodeChildren,
  NodeProps,
} from "@olive-js/core/lib/interfaces/Node";

const hasOwnProperty = (obj: any, i: string) =>
  Object.prototype.hasOwnProperty.call(obj, i);

const attribute = (attrib: any) =>
  typeof attrib === "boolean" ? (attrib ? 1 : 0) : attrib;

const stringifyAttributes = (attribs: NodeProps) =>
  Object.entries(attribs)
    .map(([key, value]) => [key, attribute(value)])
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")
    .trim();

const stringifyChildren = (inner: NodeChildren) =>
  inner.map((i: any) => nodeToXML(i)).join("");

export const nodeToXML = (nodeObject: Node | any): string => {
  if (!["_node"].some((i) => hasOwnProperty(nodeObject, i))) {
    return String(nodeObject);
  }
  const { _node, _attribs, _inner } = nodeObject as Node;
  const node = _node;
  const inner = stringifyChildren(_inner);
  const attribs = stringifyAttributes(_attribs);
  return node.trim()
    ? `<${[node, ...(attribs ? [attribs] : [])].join(" ")}>${inner}</${node}>`
    : inner;
};
