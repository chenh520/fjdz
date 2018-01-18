//var oBox=document.getElementById("box")
//var oBod2=document.getElementsByClassName("bod2")
function Fj(){
	this.ele=$("<div></div>")
	this.ele.addClass("bod2")
	this.ele.appendTo("#box")
}
Fj.prototype.start=function(){
	var aa=this
	this.ele.mousedown(function(e){
		e.preventDefault()
		var bb=e.offsetX
		var cc=e.offsetY
		$(document).mousemove(function(e){
			e.preventDefault()
			var x=e.clientX-bb
			var y=e.clientY-cc
			
			aa.move(x, y)
		})
		$(document).mouseup(function(){
			aa.stop()
		})
	})
}
Fj.prototype.move = function(x, y) {
			if(x<=0){x=0}
			if(y<=0){y=0}
			if(x>=$("#box").width()-$(".bod2").width()){x=$("#box").width()-$(".bod2").width()}
			if(y>=$("#box").height()-$(".bod2").height()){y=$("#box").height()-$(".bod2").height()}
	this.ele.css({
		left: x,
		top: y
	})
}

// 方法3：  停止拖拽
Fj.prototype.stop = function() {
	$(document).off("mouseup mousemove")
}