{// 定义类
  class Cat {
    name;
    constructor(name: string) {
      this.name = name
    }
    sayName() {
      return 'my name is ' + this.name
    }
  }

  // 实例
  let a = new Cat('tom')

  a.sayName() // my name is tom
}

{
  // 定义类
  class Animal {
    name;
    constructor(name: string) {
      this.name = name
    }
    sayName() {
      return 'my name is' + this.name
    }
  }

  class Cat extends Animal {

    constructor(name: string) {
      super(name)
    }
    sayHi() {
      return `name1：${this.name} + name2：${super.sayName}`
    }
  }

  // 实例
  let a = new Cat('tom')

  console.log(a.sayHi()) // my name is tom
  // a.sayHi() // my name is tom
}


{
  class Animal {
    // public name: string
    public constructor(public readonly name: string) {
      // this.name = name
    }
  }

  let cat = new Animal('cat')

  console.log(cat.name)

  // cat.name = 'dog' //  Cannot assign to 'name' because it is a read-only property.
}


{
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    abstract sayName(): void
  }

  // 直接实例化会被编译器阻止
  // const cat = new Animal('cat') // Cannot create an instance of an abstract class

  // 必须通过创建子类的方式进行实例化

  class Cat extends Animal {
    cat() {
      console.log(this.name)
    }

    sayName(): void {
      console.log(this.name)
    }
  }

  const cat = new Cat('jerry')

  cat.sayName()
}