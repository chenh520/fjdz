var fjt={
	
	isTouchEnemy:function(){

		var enemys=a.enemys;
		
			for(var j in enemys){
				if (j=="len") {
					continue
				} 
				var e=enemys[j]
			if(isTouch(e.ele,fj.ele )){
						 fj.booom()
				}
			}	
	},
	
	touchListen:function() {  
		var self = this
		setInterval(function() {
			self.isTouchEnemy()
		}, 30)
		
	}

}
//function Bao(){
//	Fj.all(this)
//	Bao.prototype={}
//	for(var k in Fj.prototype){
//		Bao.prototype[k]=Fj.prototype[k]
//	}
//}
