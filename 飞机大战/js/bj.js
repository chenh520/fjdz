var a={
	enemys:  {len:0}, 		
	bullets: {len: 0},
	ele:$("#box"),
	start:function(){
		var cc=this
		this.ele.animate({"background-position-y":"-230%"},5000,"linear",function(){
			cc.ele.css({"background-position-y":"0%"})
			cc.start()
		})
	},
	touchListen: function() {  // 碰撞检测
		
		setInterval(function() {		// 定时检测
			
//			console.log("所有敌机：")
//			for (var k in gameEngine.enemys) {		// 遍历所有敌机
//				console.log( gameEngine.enemys[k] )
//			}
//			
		}, 30)	// 碰撞检测时间要设很快
		
	},
}
