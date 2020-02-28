function Movement() {
	EntityComponent.call(this);
	var transform;
	this.Start = function() {
		this.AttachListeners();
		transform = this.parent.GetComponent(Transform);
	}

	this.Update = function(){
		if(this.Up == true){
			this.Move(0,-1);
		}
		if(this.Down == true){
			this.Move(0,1);
		}
		if(this.Left == true){
			this.Move(-1,0);
		}
		if(this.Right == true){
			this.Move(1,0);
		}
	}

	this.Move = function (x,y) {
		transform.Move(new Vector2(x,y));
	}

	this.AttachListeners = function() {
	
		window.addEventListener('keyup', (e) => {
			if (e.code === "KeyW") {
				this.Up = false;
			}
			if (e.code === "KeyS"){
				this.Down = false;	
			}
			if (e.code === "KeyA"){
				this.Left = false;
			}
			if (e.code === "KeyD"){
				this.Right = false;
			}
		})
		window.addEventListener('keydown', (e) => {
			if (e.code === "KeyW") {
				this.Up = true;
			}
			if (e.code === "KeyS"){
				this.Down = true;	
			}
				if (e.code === "KeyA"){
				this.Left = true;
			}
			if (e.code === "KeyD"){
				this.Right = true;
			}
		})  
	}
	
}