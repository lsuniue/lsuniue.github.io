/*
window.parent.document.getElementsByTagName("iframe")
这个代表获取父页面所有 iframe 
然后循环所有iframe
*/
function adjustIframe(){
var ifm = window.parent.document.getElementsByTagName("iframe");
for ( var i=0;i<ifm.length;i++ ) {
	ifm[i].height=document.documentElement.clientHeight;
	ifm[i].width=document.documentElement.clientWidth;
}
}
