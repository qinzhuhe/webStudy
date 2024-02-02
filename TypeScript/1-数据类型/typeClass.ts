{
  let isShow: boolean = false;

  let strname: string = "lh";
  let strTence: string = `hello，my name is ${strname}`;

  function returnNullFn(): void {
    console.log("null");
  }
}

{
  let num1: number = 0;
  // num1 = 'num1' // Type 'string' is not assignable to type 'number'.

  let num2: any = 0;
  num2 = "num2";

  let something;
  something = "something";
  something = 7;
}

{
  let num1 = 0;
  // num1 = 'num1' // 阻止分配
}

function typeOne(person: String) {
  if (typeof person === "string") {
    return person;
  } else {
    throw new Error("person in not a string");
  }
}

let user = "hello";

// console.log(typeOne(user))

{
  let x: never;

  // x = 10; // Type 'number' is not assignable to type 'never'.

  function foo(): never {
    throw new Error("not implemented");
  }

  let x1: number = foo();
  let x2: number = foo();
  let x3: number = foo();
}

{
  // function f(): void {
  //   return 123; // 报错
  // }

  type voidFunc = () => void;

  const f: voidFunc = () => {
    return 123;
  };

  // let x = f();
  // x = 123;

  let x = f() * 2;
}
