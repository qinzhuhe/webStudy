<?php
	$code = $_GET['code'];

	$books = array();
	$books['sgyy'] = array('bookname'=>'三国演义','author'=>'罗贯中','desc'=>'乱世争霸');
	$books['shz'] = array('bookname'=>'水浒传','author'=>'施耐庵','desc'=>'草寇起义');
	$books['xyj'] = array('bookname'=>'西游记','author'=>'吴承恩','desc'=>'追求自我，追求真我');
	$books['hlm'] = array('bookname'=>'红楼梦','author'=>'曹雪芹','desc'=>'一个封建王朝的缩影');

	// 这里的array_key_exists用来判断数组中有没有对应的键
	if(array_key_exists($code, $books) == 1){
		$book = $books[$code];
		echo json_encode($book);
	}else{
		echo '{"flag":0}';
	}

 ?>