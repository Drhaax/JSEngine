function GameArea (width,height,ctx) {
    this.Width = width;
    this.Height = height;
    this.Ctx = ctx;
    this.Draw = function() {
        this.Ctx.clearRect(0,0,this.Width,this.Height);
    }
}