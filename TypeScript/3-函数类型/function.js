function createdPeoFn(name, age) {
    if (age) {
        return name + '' + age;
    }
    else {
        return name;
    }
}
var peo1 = createdPeoFn('tom', 30);
var peo2 = createdPeoFn('jerry');
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
reverse(0);
reverse('0');
{
    var myAddInfo = void 0;
    myAddInfo = function (source, subString) {
        return 'hello';
    };
    myAddInfo('zs', 'computer');
}
