function Diji(){
	this.id="e"+a.enemys.len++
	a.enemys[this.id]=this
	this.hp = 1		    // 血量
	this.speed = 100 
	this.ele=$("<div></div>")
	this.ele.addClass("bod4")
	this.ele.appendTo("#box")
	var x = ($("body").width()-100) * Math.random()
	this.ele.css({
		left: x,
		top:-300
	})
//	var a=Math.random()
//	if(a<0.9999){
//		this.ele.css("background","url(img/plain1.png)no-repeat")
//		this.ele.css({
//			width: 59,
//			height: 36
//		})
//		this.ele.SmallEnemy().move()
//	}
//	if(a<0.5555){
//		this.ele.css("background","url(img/plain2.png)no-repeat")
//		this.ele.css({
//			width: 70,
//			height: 92
//		})
//		new MidEnemy().move()
//	}
//	if(a<0.11111){
//		this.ele.css("background","url(img/plain3.png)no-repeat")
//		this.ele.css({
//			width: 165,
//			height: 256
//		})
//		new BigEnemy().move()
//	}
	
	
}
Diji.prototype.move=function(){
//		this.ele.animate({top: $("#box").height()}, 5000, function() {
//			this.remove();	
//		})
		var y = $("#box").height() 
		var t = 100000 / this.speed
		this.ele.animate({top: y}, t,"linear", function() {
			this.remove()
		})
	}
Diji.prototype.looseBlood=function(){
	var self=this
	this.hp-=3
	if(this.hp<=0){
		jfq.addScore(this.score)
		var i=0
		
		var timer=setInterval(function(){
			self.ele.css("background", self.dieImg[i++])
			if(i>self.dieImg.length){
				clearInterval(timer)
				self.ele.remove()
			}
		},100)
		delete a.enemys[this.id]
	}
}
