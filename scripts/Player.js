class Player extends GameObject {
	Speed = 100;
	constructor(w,h,x=0,y=0){
		super(w,h,x,y);
		this.Up = false;
		this.Down = false;
		this.Left = false;
		this.Right = false;
		this.AttachListeners();
	}
	
	Move (x,y) {
		this.Transform.x += x * DeltaTime * this.Speed;
        this.Transform.y += y * DeltaTime* this.Speed;
	}

	Update(){
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
		super.Update();
	}
	
	AttachListeners() {
	
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

