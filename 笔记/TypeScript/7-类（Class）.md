# 类（Class）

## 类的概念

虽然 JavaScript 中有类的概念，但是平时之前的业务场景对于类的设计不深，这里对类相关的概念做一个简单的总结。

- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法

- 对象（Object）：类的实例，通过 `new` 生成

- 面向对象（OOP）的三大特性：封装、继承、多态

  - 封装（Encapsulation）

    将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据

  - 继承（Inheritance）

    子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性

  - 多态（Polymorphism）

    由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat` 和 `Dog` 都继承自 `Animal`，但是分别实现了自己的 `eat` 方法。此时针对某一个实例，我们无需了解它是 `Cat` 还是 `Dog`，就可以直接调用 `eat` 方法，程序会自动判断出来应该如何执行 `eat`

- 存取器（getter & setter）：用以改变属性的读取和赋值行为

- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法

- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现

- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

---



## 类的基础

### 属性和方法

使用 `class` 定义类，使用 `constructor` 定义构造函数。

通过 `new` 生成新实例的时候，会自动调用构造函数。

```typescript
// 定义类
class Cat {
    name;
    constructor(name) {
        this.name = name
    }
    sayName() {
        return 'my name is' + this.name
    }
}

// 实例
let a = new Cat('tom')

a.sayName() // my name is tom
```



### 类的继承

使用 `extends` 关键字实现类的继承，子类将会继承父类的属性和方法，在子类中使用 `super` 关键字来调用父类的构造函数和方法。

```typescript
// 定义类
class Animal {
    name;
    constructor(name) {
        this.name = name
    }
    sayName() {
        return 'my name is' + this.name
    }
}

class Cat extends Animal {
    name;
    sayHi() {
        return `name1：${this.name} + name2：${super.sayName}`
    }
}

// 实例
let a = new Cat('tom')

a.sayHi() // my name is tom
```



### 存取器

使用 `getter` 和 `setter` 可以改变属性的赋值和读取行为：

```typescript
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
```



### 静态方法

使用 `static` 修饰符修饰的方法成为静态方法，它们不需要实例化，而是直接通过类来使用：

```typescript
class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');
a.isAnimal(a); // TypeError: a.isAnimal is not a function

Animal.isAnimal(a); // true
```



### 实例属性

`ES6` 中实例的属性只能通过构造函数中的 `this.xxx` 来定义，`ES7` 提案中可以直接在类里面定义：

```typescript
class Animal {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let a = new Animal();
console.log(a.name); // Jack
```



### 静态属性

`ES7` 提案中，可以使用 `static` 定义一个静态属性：

```typescript
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```

---



## `TypeScript` 中类的用法

public、 private 、 protected

`TypeScript` 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

### `public`

下面举一些例子：

```typescript
class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
```

上面的例子中，`name` 被设置为了 `public`，所以直接访问实例的 `name` 属性是允许的。

### `private`

很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 `private` 了：

```typescript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Property 'name' is private and only accessible within class 'Animal'.
a.name = 'Tom'; // Property 'name' is private and only accessible within class 'Animal'.

```

需要注意的是，TypeScript 编译之后的代码中，并没有限制 `private` 属性在外部的可访问性。

上面的例子编译后的代码是：

```javascript
var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
```

使用 `private` 修饰的属性或方法，在子类中也是不允许访问的：

```typescript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// Property 'name' is private and only accessible within class 'Animal'.
```

### `protected`

而如果是用 `protected` 修饰，则允许在子类中访问：

```typescript
class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```

当构造函数修饰为 `private` 时，该类不允许被继承或者实例化：

```typescript
class Animal {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// Cannot extend a class 'Animal'. Class constructor is marked as private.
// Constructor of class 'Animal' is private and only accessible within the class declaration.
```

当构造函数修饰为 `protected` 时，该类只允许被继承：

```typescript
class Animal {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// Constructor of class 'Animal' is protected and only accessible within the class declaration.
```

### `readonly`

只读关键字，只允许出现在属性声明或索引签名或构造函数中

```typescript
class Animal {
  readonly name;
  public constructor(name: string) {
    this.name = name
  }
}

let cat = new Animal('cat')

console.log(cat.name)

cat.name = 'dog' //  Cannot assign to 'name' because it is a read-only property.
```

注意，如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面

```typescript
class Animal {
    // public name: string
    public constructor(public readonly name: string) {
        // this.name = name
    }
}
```

### 参数属性

修饰符和 `readonly` 还可以用在构造函数参数当中，等同于类中定义该属性的同时给该属性赋值，使代码更加简洁。

```typescript
class Animal {
    // public name: string
    public constructor(public name) {
        // this.name = name
    }
}
```

### 抽象类

`abstract` 用于定义抽象类和其中的抽象方法。

抽象类是不允许被实例化的，而其中定义的抽象方法必须被子类实现：

```typescript
abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    abstract sayName(): void
}

// 直接实例化会被编译器阻止
const cat = new Animal('cat') // Cannot create an instance of an abstract class

// 必须通过创建子类的方式进行实例化，并且，如果抽象类中声明了抽象方法，同样子类中必须进行实现
class Cat extends Animal {
    // 子类自己的具体方法
    cat() {
      console.log(this.name)
    }
	// 实现父类 - 抽象类的抽象方法
    sayName(): void {
      console.log(this.name)
    }
  }

  const cat = new Cat('jerry')

  cat.sayName() // jerry
```

<!--需要注意的是，即使是抽象方法，在 typescript 的编译结果中，仍然会存在这个类，所有实际编译出来后是会将类的创建实际反馈出来的。-->

### 类的类型

在 `typescript` 中，给类加上类型是很简单的

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

