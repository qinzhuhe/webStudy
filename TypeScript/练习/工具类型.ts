{
  interface User {
    name: string;
    age: number;
  }

  type UserNew = Partial<User>;

  const partialUserData: UserNew = {};
}

{
  interface PartialUser {
    name?: string;
    age?: number;
  }

  type UserNew = Required<PartialUser>;
  // const requiredUserData: UserNew = {};
}

{
  interface User {
    name: string;
    age: number;
  }

  type UserNew = Readonly<User>; // {readonly name: string; readonly age: number}

  const readonlyUserData: UserNew = { name: "Tifa", age: 18 };

  // readonlyUserData.name = "Alice";
}

{
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about";

  const pages: Record<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "about" },
  };
}

{
  interface User {
    name: string;
    age: number;
    email: string;
  }

  type PickUser = Pick<User, "age" | "name">;

  const userInfo: PickUser = { name: "Tifa", age: 18 };
}

{
  interface User {
    name: string;
    age: number;
    email: string;
  }

  type OmitUser = Omit<User, "name">;

  // const userInfo: OmitUser = { name: "Tifa", age: 18 };
  const userInfo: OmitUser = { age: 18, email: "tifa@ff7.remake" };
}

{
  type User = {
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
    gender: string;
    // ...
  };

  // 只取部分
  type UserBasicInfo = Pick<User, "name" | "age" | "email">;

  const tifa: UserBasicInfo = { name: "tifa", age: 18, email: "ff7re1-2" };

  // 移除部分
  type UserDetailedInfo = Omit<User, "gender" | "phone" | "email" | "age">;

  const alice: UserDetailedInfo = { name: "alice", address: "middle" };
}

{
  type T = string | null | undefined;

  type NoT = NonNullable<T>; // Type string
}

// 集合类型
{
  type UserA = "name" | "age" | "email" | "phone";

  type UserB = "phone" | "email";

  type ExcludeUserProps = Exclude<UserA, UserB>;

  const userInfo: ExcludeUserProps = "age";
}

{
  type UserA = "name" | "age" | "email" | "phone";

  type UserB = "phone" | "email";

  type ExtractUserProps = Extract<UserA, UserB>; // Type 'phone' | 'email'

  const userInfo: ExtractUserProps = "phone"; // 编译通过
}

// 函数类型
{
  type Add = (x: number, y: number) => number;

  type Addarams = Parameters<Add>;
  type AddResult = ReturnType<Add>;
}
{
  const addHandler = (x: number, y: number) => x + y;

  type Add = typeof addHandler; // (x: number, y: number) => number;

  type AddParams = Parameters<Add>; // [number, number] 类型
  type AddResult = ReturnType<Add>; // number 类型

  const addParams: AddParams = [1, 2];
  const addResult: AddResult = 3;
}

{
  function getPromise() {
    return new Promise<string>(resolve => {
      return resolve("aaaa");
    });
  }

  type PromiseType = ReturnType<typeof getPromise>;

  type AwaitPromiseType = Awaited<ReturnType<typeof getPromise>>;
}
