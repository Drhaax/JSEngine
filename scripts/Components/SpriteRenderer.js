function SpriteRenderer(path = "") {
	var spriteLoaded = false;
	var sprite = new Image;
	
	this.Initialize = function(){
		
	}
	sprite.src = path;
	
	ComponentBase.call(this);

	this.Render = function() {
		if(this.parent.active.value){
			var Transform = this.parent.GetComponent('Transform'); 
			if(Transform){
				if(spriteLoaded){
					Engine.Ctx.drawImage(sprite, Transform.position.x, Transform.position.y, Transform.width, Transform.height);
				}else{
					Engine.Ctx.fillRect(Transform.position.x, Transform.position.y, Transform.width, Transform.height);
				}
			}
		}
	}

	this.SetSprite = function(img){
		sprite = img;
		sprite.source = "";
		spriteLoaded = false;
	}

	sprite.onload = function(){
		spriteLoaded = true;
	}
}