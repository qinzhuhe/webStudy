{
  // 通用接口
  interface Alarm {
    alarmFunc(): void
  }

  class Door {
    name;
    constructor(name: string) {
      this.name = name
    }
  }

  class SecurityDoor extends Door implements Alarm {
    // 实现接口
    alarmFunc() {
      console.log(`this is 'SecurityDoor' ${this.name}`)
    }
  }

  class Car implements Alarm {
    name;
    constructor(name: string) {
      this.name = name
    }
    alarmFunc() {
      console.log(`this is 'car' ${this.name}`)
    }
  }


  const door = new SecurityDoor('door')

  const car = new Car('car')


  door.alarmFunc()
  car.alarmFunc()
}

{
  // 接口继承接口

  interface Alarm {
    alert(): void
  }

  interface LightTable extends Alarm {
    lightOn(): void
    lightOff(): void
  }

}

{
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  loggingIdentity([1, 2]);
}

{
  // 泛型接口约束函数
  interface CreateArrFunc {
    <T>(length: number, value: T): Array<T>
  }

  let createArray: CreateArrFunc

  createArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }

    return result
  }

  createArray(3, 'x'); // ['x', 'x', 'x']
}

{
  // 泛型约束类
  class GenericNumber<T> {
    zeroValue?: T;
    add?: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) { return x + y; };

  console.log(myGenericNumber.zeroValue, myGenericNumber.add(1, 2))
}

{
  // 元组
  let tom: [string, number];
  tom = ['tom', 255]

  tom[0].slice(1);
  tom[1].toFixed(2);

  // tom.push(true); // error
}