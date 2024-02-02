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
{
    var Door = /** @class */ (function () {
        function Door(name) {
            this.name = name;
        }
        return Door;
    }());
    var SecurityDoor = /** @class */ (function (_super) {
        __extends(SecurityDoor, _super);
        function SecurityDoor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 实现接口
        SecurityDoor.prototype.alarmFunc = function () {
            console.log("this is 'SecurityDoor' ".concat(this.name));
        };
        return SecurityDoor;
    }(Door));
    var Car = /** @class */ (function () {
        function Car(name) {
            this.name = name;
        }
        Car.prototype.alarmFunc = function () {
            console.log("this is 'car' ".concat(this.name));
        };
        return Car;
    }());
    var door = new SecurityDoor('door');
    var car = new Car('car');
    door.alarmFunc();
    car.alarmFunc();
}
{
}
{
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    loggingIdentity([1, 2]);
}
{
    var createArray = void 0;
    createArray = function (length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    };
    createArray(3, 'x'); // ['x', 'x', 'x']
}
{
    // 泛型约束类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
    console.log(myGenericNumber.zeroValue, myGenericNumber.add(1, 2));
}
{
    // 元组
    var tom = void 0;
    tom = ['tom', 255];
    tom[0].slice(1);
    tom[1].toFixed(2);
    tom.push(true);
}
