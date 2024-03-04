type ExtractSelf<T> = T extends infer U ? U : never;

type S1 = ExtractSelf<string>; // string

type S2 = ExtractSelf<() => void>;

type ExtractReturnType<T> = T extends () => infer U ? U : never;

type R1 = ExtractReturnType<() => { name: string }>;

enum FlexDirection {
  Row,
  Column,
}

const enumRow = FlexDirection.Row; // Type FlexDirection.Row
let enumColumn = FlexDirection.Column; // Type FlexDirection

{
  // 字面量类型发生变化
  const a: "http" = "http";

  const b: "http" = "http";

  const arrList = [a, b];

  const c = arrList[0];
}
