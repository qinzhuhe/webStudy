var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{ // 定义类
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.sayName = function () {
            return 'my name is ' + this.name;
        };
        return Cat;
    }());
    // 实例
    var a = new Cat('tom');
    a.sayName(); // my name is tom
}
{
    // 定义类
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayName = function () {
            return 'my name is' + this.name;
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.sayHi = function () {
            return "name1\uFF1A".concat(this.name, " + name2\uFF1A").concat(_super.prototype.sayName);
        };
        return Cat;
    }(Animal));
    // 实例
    var a = new Cat('tom');
    console.log(a.sayHi()); // my name is tom
    // a.sayHi() // my name is tom
}
{
    var Animal = /** @class */ (function () {
        // public name: string
        function Animal(name) {
            this.name = name;
            // this.name = name
        }
        return Animal;
    }());
    var cat = new Animal('cat');
    console.log(cat.name);
    // cat.name = 'dog' //  Cannot assign to 'name' because it is a read-only property.
}
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    // 直接实例化会被编译器阻止
    // const cat = new Animal('cat') // Cannot create an instance of an abstract class
    // 必须通过创建子类的方式进行实例化
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.cat = function () {
            console.log(this.name);
        };
        Cat.prototype.sayName = function () {
            console.log(this.name);
        };
        return Cat;
    }(Animal));
    var cat = new Cat('jerry');
    cat.sayName();
}
