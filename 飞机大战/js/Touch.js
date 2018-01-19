var tE	={
	isTouchEnemy:function(){
		var bullets=a.bullets;
		var enemys=a.enemys;
		var fj=$(".bod2")
				for(var k in bullets){
					if(k=="len"){
						continue
					}
					var b=bullets[k]
				
				for(var j in enemys){
					if (j=="len") {
						continue
					} 
					var e=enemys[j]
				
				if (isTouch(b.ele,e.ele)) {
//					console.log("碰到了")
					b.boom()
					e.looseBlood()
				} 

			}
				
		}
	},
	touchListen: function() {  
		var self = this
		setInterval(function() {
			self.isTouchEnemy()
		}, 30)
		
	}
}
