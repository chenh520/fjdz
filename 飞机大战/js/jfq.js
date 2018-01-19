var jfq={
	sun:0,
	addScore:function(a){
		this.sun+=a
		$(".jfb").text("分数："+this.sun)
	}
	
}
function Jfb(){
	this.ele=$("<div></div>")
	this.ele.addClass("jfb")
	this.ele.appendTo("#box")
}
