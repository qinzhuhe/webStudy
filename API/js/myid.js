/**
 * 根据id属性的值，返回对应的标签元素
 * @param id id属性的值，string类型的
 * @return {Element}	元素对象
 */
function myid(id){
	return document.getElementById(id);
}

// 设置任意元素中间的文本内容
function setInnerText(element,text){
	if(typeof element.textContent=="undefined"){
		element.innerText=text;
	}else{
		element.textContent=text;
	}
}

// 获取任意元素的中间的文本内容
function getInnerText(element){
	if(typeof element.textContent=="undefined"){
		return element.innerText;
	}else{
		return element.textContent;
	}
}

// 获取任意一个父级元素的第一个元素
function getFirstElementChild(element){
	if(element.firstElementChile){
		return element.firstElementChile;
	}else{
		var node = element.firstChild; //第一个节点
		// 将node放在括号里面代表node是存在的，有意义的
		while(node && node.nodeType != 1){
			node = node.nextSibling;
		}
		return node;
	}
}

// 获取任意一个父级元素的最后一个子元素
function getLastElementChild(element){
	if(element.lastElementChild){//true--->支持
		return element.lastElementChild;
	}else{
		var node = element.lastChild; //第一个节点
		// 将node放在括号里面代表node是存在的，有意义的
		while(node && node.nodeType != 1){
			node = node.previousSibling;
		}
		return node;
	}
}

//为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
function addEventListener(element,type,fn) {
    //判断浏览器是否支持这个方法
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}

// 鼠标进入事件颜色变色处理;
function mouseroverHandle(){
	this.style.backgroundColor="pink";
}
// 鼠标进入事件颜色还原处理
function mouseroutHandle(){
	this.style.backgroundColor="";
}