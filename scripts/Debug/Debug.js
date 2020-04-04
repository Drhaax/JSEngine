Debug = {
	DrawRect : function(pos, width, height, color){
		var previousColor = Engine.Ctx.fillStyle;
		if(color){
			Engine.Ctx.fillStyle = color;
		}
		Engine.Ctx.fillRect(pos.x, pos.y, width, height);
		Engine.Ctx.fillStyle = previousColor;
	}
}