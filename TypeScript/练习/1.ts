// 1. 题目 - useState它接收一个任意类型的数据，返回一个数组。
/** 要求:
 *  数组的第一个元素的类型与入参一致；
 *  数组的第二个元素是一个函数
 *  第二个元素函数的入参类型和返回值类型与useState的入参一致
 */

// 2. 将以下的代码改写成符合上述要求的 Ts 代码
function useState<T>(value: T): [T, (value: T) => void] {
  const setValue = (val: T): T => {
    return val;
  };
  return [value, setValue];
}
// 测试代码 - 鼠标悬停查看结果
const [num, setNum] = useState(111);
const [str, setStr] = useState("ab");

// 泛型 T 继承 { name: string } 类型，就是指调用到 T 的地方，T 必须包含 name 属性
function getName<T extends { name: string }>(obj: T): T {
  return obj;
}

let result1 = getName({ name: "Jason" }); // result1 类型为 string
let result2 = getName({ age: 18, name: "aaa" }); // @error: 2345
