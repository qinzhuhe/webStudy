function getstyle(element,attr){
	return window.getComputedStyle ? window.getComputedStyle(element,null)[attr] : element.currentStyle[attr];
}