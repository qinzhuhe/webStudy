function createdPeoFn(name: string, age?: number) {
  if (age) {
    return name + '' + age
  } else {
    return name
  }
}

const peo1 = createdPeoFn('tom', 30)
const peo2 = createdPeoFn('jerry')

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else {
    return x.split('').reverse().join('');
  }
}

reverse(0)
reverse('0')


{
  // 接口方式创建函数
  interface FnInterface {
    (source: string, subString: string): string
  }

  let myAddInfo: FnInterface

  myAddInfo = function (source, subString) {
    return 'hello'
  }

  myAddInfo('zs', 'computer')
}