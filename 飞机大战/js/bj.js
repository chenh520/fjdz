var a={
	ele:$("#box"),
	start:function(){
		var cc=this
		this.ele.animate({"background-position-y":"-230%"},5000,"linear",function(){
			cc.ele.css({"background-position-y":"0%"})
			cc.start()
		})
	}
}
