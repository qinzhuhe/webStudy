interface Person {
  name: string,
  age: number
}

// 可选属性
interface Person2 {
  name: string,
  age?: number
}

// 任意属性
interface Person3 {
  name: string,
  age?: number,
  [propName: string]: undefined | string | number
}

// 只读属性
interface Person4 {
  readonly id: number,
  name: string,
  age: number,
  [propName: string]: number | string
}

{

  let tom: Person = {
    name: 'tom',
    age: 25
  }
  // let tom: Person = {
  //   name: 'tom',
  // }

  // let tom: Person = {
  //   name: 'tom',
  //   age: 25,
  //   gender: 'male'
  // }
}

{
  let tom: Person2 = {
    name: 'tom',
    age: 20,
  }

  // let tom: Person2 = {
  //   name: 'tom',
  //   age: 20,
  //   gender: 'male'
  // }
}

{

  let tom: Person3 = {
    name: 'tom',
    age: 10,
    gender: '111'
  }
}

{
  let tom: Person4 = {
    id: 0,
    name: 'tom',
    age: 10,
    gender: '111'
  }

  // tom.id = 1

  let list: any[] = [1, '2', { name: 3 }, 4]
}