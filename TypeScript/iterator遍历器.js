{
  // 模拟 next 循环机制
  let it = makeInterator(["m", "m", "n"]);

  it.next();
  it.next();
  it.next();
  it.next(); // 递进到这一步，返回 { value: undefined, done: true }

  function makeInterator(array) {
    let nextIndex = 0;
    return {
      next: function () {
        return (val = nextIndex < array.length ? { value: array[nextIndex++] } : { done: true });
      },
    };
  }
}

{
  // 数组的 Symbol.iterator 属性
  let arr = ["a", "b", "c"];
  let iter = arr[Symbol.iterator]();

  iter.next();
  iter.next();
  iter.next();
  iter.next(); // 递进到这一步，返回 { value: undefined, done: true }
}
