{
    var isShow = false;
    var strname = "lh";
    var strTence = "hello\uFF0Cmy name is ".concat(strname);
    function returnNullFn() {
        console.log("null");
    }
}
{
    var num1 = 0;
    // num1 = 'num1' // Type 'string' is not assignable to type 'number'.
    var num2 = 0;
    num2 = "num2";
    var something = void 0;
    something = "something";
    something = 7;
}
{
    var num1 = 0;
    // num1 = 'num1' // 阻止分配
}
function typeOne(person) {
    if (typeof person === "string") {
        return person;
    }
    else {
        throw new Error("person in not a string");
    }
}
var user = "hello";
// console.log(typeOne(user))
{
    var x = void 0;
    // x = 10; // Type 'number' is not assignable to type 'never'.
    function foo() {
        throw new Error("not implemented");
    }
    var x1 = foo();
    var x2 = foo();
    var x3 = foo();
}
