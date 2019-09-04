function ajax(url,type,param,dataType,callback){
	var xhr = null;
	// 不同浏览器处理兼容
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 如果是采用get方式上传的处理
	if(type == 'get'){
		url += "?" + param;
	}
	xhr.open(type,url,true);

	// 如果是采用post方式的上传
	var data =null;
	if(type == 'post'){
		data = param;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}

	xhr.send(data);
	 xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(dataType == 'json'){
                    data = JSON.parse(data);
                }
                callback(data);
            }
        }
    };
}