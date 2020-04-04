
function Text(text = '') {
	UIComponent.call(this);
	var transform;
	this.Start = function() {
		transform = this.GetComponent(Transform);
	
	}

	var oldText = '';
	var newText = text;
	this.Update = function() {
		// if(oldText == newText){
		// 	return;
		// }
		// oldText = newText;
	}

	this.Render = function(){
	
		// if(!this.ShouldReRender){
		// 	return;
		// }
		// UI.Ctx.clearRect(
		// 	transform.position.x,
		// 	transform.position.y,
		// 	UI.Ctx.measureText(oldText).width,
		// 	50
		// 	//UI.Ctx.measureText(oldText).height	
		// );
		
		UI.Ctx.fillStyle = "red";
		UI.Ctx.font = "30px Arial";
		UI.Ctx.fillText(newText, transform.position.x, transform.position.y); 
		//this.ShouldReRender = false;
	}

	this.SetText = function(txt){
		newText = txt;
		this.ShouldReRender = true;
	}
	
}