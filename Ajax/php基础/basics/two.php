<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>php数组</title>
    <script type="text/javascript">
    // var arr = [123,456];
    // console.log(arr[0]);
    // console.log(arr[1]);
    // var arr1 = new Array(789,111);
    // console.log(arr1[0]);
    // console.log(arr1[1]);

    // 二维数组(数组的每一项数据还是数组)
    var arr = [];
    arr[0] = [1,2,3];
    arr[1] = [4,5,6];
    arr[2] = [7,8,9];
    arr['hello'] = 'hi';
    console.dir(arr);
    for(var i = 0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            console.log('索引值：'+i+','+j + '-----' +arr[i][j]);
        }
    }

    </script>
</head>
<body>
    <div>测试内容</div>
    <div>
        <?php
        /*
        数组的两种形式
        1. $arr = array(1,2,3);默认key是从0开始的整数
        2. $arr = array("a"=>"1","b"=>"2","c"=>"3");
        */
        // $arr = array(1,2,3,4,5);
        // $arr = array("hello","hi");
        // // print_r($arr);//Array ( [0] => hello [1] => hi )
        // echo $arr[0];
        // echo '<br>';
        // echo $arr[1];
        // echo '<br>';

        // $arr1 = array("username"=>"zhangsan","age"=>"12","sex"=>"male");
        // print_r($arr1);//Array ( [username] => zhangsan [age] => 12 [sex] => male )
        // echo '<br>';
        // echo $arr1['username'];

        // echo '<br>';
        // var_dump($arr1);
        // -----------------------------------------------------
        // 二维数组
        // $arr = array();
        // $arr[0] = array(11,22,33);
        // $arr[1] = array(44,55,66);
        // $arr[2] = array(77,88,99);
        // print_r($arr);
        // Array (
        // [0] => Array ( [0] => 11 [1] => 22 [2] => 33 )
        // [1] => Array ( [0] => 44 [1] => 55 [2] => 66 )
        // [2] => Array ( [0] => 77 [1] => 88 [2] => 99 ) )

        $arr = array(123);
        $arr['apple'] = array('color'=>'red','shape'=>'round');
        $arr['orange'] = array('color'=>'orange','shape'=>'round');
        $arr['banana'] = array('color'=>'yellow','shape'=>'long');
        print_r($arr);
        // Array (
        // [apple] => Array ( [color] => red [shape] => round )
        // [orange] => Array ( [color] => orange [shape] => round )
        // [banana] => Array ( [color] => yellow [shape] => long ) )
         ?>
    </div>
</body>
</html>


