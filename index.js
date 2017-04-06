//获取元素
var wd=document.querySelector('#wd');
var btn=document.querySelector('#btn');
var jsonp_data=document.querySelector('#xiala');

//百度跨域
function callback(data){
	var arr=data.s;
	var a=''
	for(var i=0; i<arr.length; i++){
		a+='<div>'+arr[i]+'</div>';
	}
	jsonp_data.innerHTML=a;

	//获取提示元素
	var ts=document.querySelectorAll('#xiala div');

	//38up 40down
	var ts_i=-1;
	if(ts){
		document.addEventListener('keydown',function(e){
			var e=e || event;
			if(e.keyCode==38){
				ts_i-=1;
				if(ts_i==-1){
					ts_i=ts.length-1;
				}
				active();
				ts[ts_i].style.background='#ddd';
				getText(ts_i);
			}
			if(e.keyCode==40){
				ts_i+=1;
				if(ts_i==ts.length){
					ts_i=0;
				}
				active();
				ts[ts_i].style.background='#ddd';
				getText(ts_i);
			}
		})
	}

	//去背景
	function active(){
		for(var i=0; i<ts.length; i++){
			ts[i].style.background='';
		}
	}
	//获取内容
	function getText(num){
		wd.value=ts[num].innerHTML;
	}
}
function jsonp(text){
	var jsonp_js=document.createElement('script');
	jsonp_js.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+text+'&cb=callback';
	document.body.appendChild(jsonp_js);
	jsonp_js.remove();
}

//点击提交按钮
btn.onclick=function(){
	if(wd.value!=''){
		win_open();
	}
}

//初始获取焦点
wd.focus();
wd.classList.add('fo');

//获得和失去焦点||输入内容
wd.onfocus=function(){
	wd.classList.add('fo');
	jsonp(wd.value);
}
wd.onblur=function(){
	wd.classList.remove('fo');
	xiala.innerHTML='';
}
wd.oninput=function(){
	jsonp(wd.value);
}

//打开新标签
function win_open(){
	window.open('https://www.baidu.com/s?wd='+wd.value,'_self');
}
//回车键
// document.onkeydown=function(e){
// 	if(e.keyCode==13 && wd.value!=''){
// 		win_open();
// 	}
// }
document.addEventListener('keydown',function(e){
	if(e.keyCode==13 && wd.value!=''){
		win_open();
	}
})