function Zd(){
	this.id="b"+a.bullets.len++
	a.bullets[this.id]=this
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
Zd.prototype.boom=function(){
	var self=this
	var arr=[
		"url(img/die1.png)",
		"url(img/die2.png)"
	]
	var i=0
	self.ele.stop()
	var timer=setInterval(function(){
		self.ele.css({"background":arr[i++]})
		self.ele.css({
			width:40,
			height:43
		})
		if(i>arr.length){
			clearInterval(timer)
			self.ele.remove()
			
		}
	},100)
	delete a.bullets[this.id]
}
//Zd.prototype.si=function(){
//	var self=this
//	if(Fj.ele){
//		self.move()
//	}else{
//		self.ele.remove()
//	}
//}
