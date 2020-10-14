export const hasOwnProperty = (object: any, key: string) =>
  Object.prototype.hasOwnProperty.call(object, key);
