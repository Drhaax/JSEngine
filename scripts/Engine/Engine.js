Engine = {
    Canvas: {},
    Ctx: {},
    Entities : new Entities(),
    Initialize: function(Canvas){
      this.Canvas = Canvas;
      this.Ctx = Canvas.getContext("2d");  
    },
    
}
