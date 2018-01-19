var fjt={
	isTouchEnemy:function(){
		var enemys=a.enemys;
		var fj=$(".bod2")
			for(var j in enemys){
				if (j=="len") {
					continue
				} 
				var e=enemys[j]
			if(isTouch(e.ele,fj )){
				fj.booom()
				}
			}	
		}
	
	touchListen:function() {  
		var self = this
		setInterval(function() {
			self.isTouchEnemy()
		}, 30)
		
	}
}

