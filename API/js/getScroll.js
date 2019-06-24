/**
 * [getScroll description]--->适应不同浏览器获取其左上边距
 * @return {[type]} [description]
 */
function getScroll(){
	return {
		left : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
		top : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	};
}