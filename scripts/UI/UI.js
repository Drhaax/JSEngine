UI = {
	Canvas: {},
	Ctx: {},
	Initialize: function(Canvas){
      this.Canvas = Canvas;
	  this.Ctx = Canvas.getContext("2d"); 
	  this.Entities = new Entities();
	  this.Canvas.style.zIndex = 1;
      this.Canvas.style.position = "absolute";
    
      this.Canvas.width = window.screen.width * 0.99;
      this.Canvas.height = window.screen.height * 0.8;
	},
	
}