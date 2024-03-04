/*
 * @Author: zhaoyi 2861969038@qq.com
 * @Date: 2024-02-27 10:59:36
 * @LastEditors: zhaoyi 2861969038@qq.com
 * @LastEditTime: 2024-03-01 15:00:23
 * @FilePath: \练习\映射类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type MyPick<T> = {
  [P in keyof T]?: T[P];
};

type UserInfo = {
  name: string;
  age: number;
  phone: number;
  address: string;
};

type UserPartial = MyPick<UserInfo>;

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Stack extends Animal {
  age: number;
  constructor(age: number, name: string) {
    super(name);
    this.age = age;
  }
}

const stack = new Stack(10, "ssss"); // {name: string, age: number}

console.log(stack.age, stack.name);

{
  // 泛型约束
  // 定义一个基础类型
  interface Animal {
    name: string;
  }

  // 通过扩展基础类型创建一个子类型
  interface Dog extends Animal {
    breed: string;
  }

  // 泛型类型，约束类型参数必须是 Animal 或其子类型
  type MyType<T extends Animal> = {
    animalData: T;
    sound(): void;
  };

  // // 使用一个子类型
  // const dogData: Dog = { name: "Buddy", breed: "Labrador" };

  // // 使用具有子类型的泛型类型
  // const myDogType: MyType<Dog> = {
  //   animalData: dogData,
  //   sound() {
  //     console.log(`${dogData.name} 会叫`);
  //   },
  // };

  // myDogType.sound(); // output: "Buddy 会叫"

  // 使用接口约束类型
  const animal: Animal = { name: "zs" };

  const animalType: MyType<Animal> = {
    animalData: animal,
    sound() {
      console.log(animal.name);
    },
  };
}

interface A {
  name: string;
  title: string;
  age: number;
}

type ITypesObj<T> = {
  [K in keyof T]: string;
};

type Clone<T> = {
  [K in keyof T]: T[K];
};

type B = ITypesObj<A>;

type C = Clone<A>;

/**
 * type B = {
 *   name: string;
 *   title: string;
 *   age: string;
 * }
 */

// 声明一个条件类型
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

// 使用上面的 TypeName 类型别名
// "string" | "function"
type T1 = TypeName<string | (() => void)>;

// "string" | "object"
type T2 = TypeName<string | number[]>;

type Naked<T> = T extends boolean ? "Y" : "N";

type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

type neaked = Naked<boolean | number>;

type wwrapped = Wrapped<boolean | number>;

{
  // 方法 运算符扩展

  function prop<T, U extends keyof T>(obj: T, key: U): T[U] {
    return obj[key];
  }
}

{
  /**
   * 理解这段类型代码的含义
   * 定义一个泛型 T，使用 extends 关键字约束 T 必须是一个没有返回值的函数类型
   * 紧接着使用 infer 关键字定义了一个类型变量 U，它是一个函数类型的参数类型
   * 如果 泛型 T 符合约束条件，那么就返回该函数类型的参数类型，否则返回泛型 T
   */
  type paramType<T> = T extends (params: infer U) => void ? U : T;

  type Func = (params: { name: string }) => void;

  type ParamsString = paramType<Func>; // 传入的类型是函数，满足了 extends 条件，所以返回的是函数的参数类型 { name: string }

  type String = paramType<string>; // 传入的类型是字符串，没有满足 extends 条件，所以返回的是字符串类型 string
}

{
  type Flattered<T> = T extends (infer V)[] ? V : T;

  type D = Flattered<string[]>; // number
}

{
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

  type Func = () => number;

  type FuncReturnType = MyReturnType<() => void>;
}

{
  type Ids = number[];
  type Names = string[];

  type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;

  type IdsType = Unpacked<[0, 1, 2, 3]>;
  type NamesType = Unpacked<[0, 1, 2, 3]>;
}

{
  type Arr = ["a", "b", "c"];

  // 获取第一个元素
  type First<T extends any[]> = T extends [infer First, ...any[]] ? First : [];
  // 获取最后一个元素
  type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : T;

  // 去除第一个元素
  type Pop<T extends any[]> = T extends [unknown, ...infer arr] ? arr : T;
  // 去除最后一个元素
  type Shift<T extends any[]> = T extends [...infer arr, unknown] ? arr : T;

  type rose = First<Arr>;
  type leno = Last<Arr>;

  type a = Pop<Arr>;
  type b = Shift<Arr>;
}
