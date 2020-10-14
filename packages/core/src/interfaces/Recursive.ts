export type Recursive<T> =
  | T
  | {
      [index: number]: T | Recursive<T>;
      length?: number;
    };
