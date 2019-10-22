# path 路径操作模块

- path basename
	+ 获取一个路径中的文件名（默认包含拓展名）。
- path.dirname
	+ 获取一个路径中的目录部分。
- path.extname
	+ 获取一个路径中的拓展名部分。
- path.parse
    + 把一个路径转为对象
      + root		=>	根路径
      + dir	       =>   目录
      + base       =>	包含后缀名的文件名
      + ext	      =>	后缀名
      + name     =>    不包含后缀名的文件
- path.join
    - 当你需要进行路径拼接的时候，推荐使用这个方法。
- path.isAbsolute
	+ 判断一个路径是否是绝对路径。