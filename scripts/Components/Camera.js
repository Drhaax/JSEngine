function Camera(mainCam = false) {
	ComponentBase.call(this);
	var camX;
	var camY;
	var MainCamera = mainCam;
	this.Initialize = function(){
		transform =  this.GetComponent(Transform);
		if(MainCamera){
			Engine.MainCamera = this;
		}
	}

	this.RenderViewport = function() {
		Engine.Ctx.setTransform(1, 0, 0, 1, 0, 0);
		ClearScreen();
		camX = -transform.position.x;
		camY = -transform.position.y;
		Engine.Ctx.translate(camX, camY);
	}

	
	var ClearScreen = function() {
		Engine.Ctx.clearRect(0,0,Engine.Canvas.width,Engine.Canvas.height);
	}

}