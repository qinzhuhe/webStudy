{
    function myCar(prop) {
        // return prop.name
        prop.run();
    }
    var car = {
        name: 'tom',
        run: function () {
            console.log('hello');
        }
    };
    myCar(car);
}
{
    function getCount(count) {
        var run = function () {
            console.log(count + '次数');
        };
        return {
            count: count,
            run: run
        };
    }
    var getList = getCount(10);
    getList.run();
}
{
    var getCount_1 = function (name) {
        var run = function () {
            console.log(name);
        };
        return {
            name: name,
            run: run
        };
    };
    var count = getCount_1('张三');
    count.run();
}
