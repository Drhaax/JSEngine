function SpriteRenderer() {
	ComponentBase.call(this);
	this.Render = function() {
		if(this.parent.active.value){
			var Transform = this.parent.GetComponent('Transform'); 
			if(Transform){
				Engine.Ctx.fillRect(Transform.position.x, Transform.position.y, Transform.width, Transform.height);
			}
		}
	}
}