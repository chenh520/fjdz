//var oBox=document.getElementById("box")
//var oBod2=document.getElementsByClassName("bod2")
function Fj(){
	this.ele=$("<div></div>")
	this.ele.addClass("bod2")
	this.ele.appendTo("#box")
	this.shoot()
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
	$(document).keydown(function(e){
			if(e.keyCode==38){
				var x=parseInt(aa.ele.css("left"));
				var y=parseInt(aa.ele.css("top"));
				y-=10;//shang
				aa.move(x,y)
			}
			if(e.keyCode==37){
				var x=parseInt(aa.ele.css("left"));
				var y=parseInt(aa.ele.css("top"));
				x-=10;
				aa.move(x,y)
			}
			if(e.keyCode==40){
				var x=parseInt(aa.ele.css("left"));
				var y=parseInt(aa.ele.css("top"));
				y+=10;//下
				aa.move(x,y)
			}
			if(e.keyCode==39){
				var x=parseInt(aa.ele.css("left"));
				var y=parseInt(aa.ele.css("top"));
				x+=10;//右
				aa.move(x,y)
			}
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
function Zd(){
	this.ele=$("<div></div>")
	this.ele.addClass("bod3")
	this.ele.appendTo("#box")
	this.ele.css({
		left:parseInt($(".bod2").css("left"))+50,
		top:parseInt($(".bod2").css("top"))-18
	})
}
Zd.prototype.move=function(){
	this.ele.animate({top:0},1000,function(){
		this.remove();
	})
}
Fj.prototype.shoot=function(){
	setInterval(function(){
		new Zd().move()
	},100)
}
// 方法3：  停止拖拽
Fj.prototype.stop = function() {
	$(document).off("mouseup mousemove")
}
