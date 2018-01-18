function Diji(){
	this.ele=$("<div></div>")
	this.ele.addClass("bod4")
	this.ele.appendTo("#box")
	this.ele.css({
		left:Math.random()*($("#box").width()-100),
		top:0
	})
	var a=Math.random()
	if(a<0.9999){
		this.ele.css("background","url(img/plain1.png)no-repeat")
		this.ele.css({
			width: 59,
			height: 36
		})
	}
	if(a<0.5555){
		this.ele.css("background","url(img/plain2.png)no-repeat")
		this.ele.css({
			width: 70,
			height: 92
		})
	}
	if(a<0.11111){
		this.ele.css("background","url(img/plain3.png)no-repeat")
		this.ele.css({
			width: 165,
			height: 256
		})
	}
	
	Diji.prototype.fall=function(){
		this.ele.animate({top: $("#box").height()}, 5000, function() {
			this.remove();	
		})
	}	
}
