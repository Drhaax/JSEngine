function Transform(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.Width = w;
	this.Height = h;
}
Instances = [];
class GameObject {
	
	constructor(w, h, x = 0, y = 0){
		this.Transform = new Transform(x,y,w,h);
		//this.Ctx = ctx;
		this.Active = true;
		Instances.push(this);
	}

	Update() {
		if(this.Active){
			ESystem.Ctx.fillRect(this.Transform.x, this.Transform.y, this.Transform.Width, this.Transform.Height);
		}
	}

	Draw() {
		if(this.Active){
			ESystem.Ctx.fillRect(this.Transform.x, this.Transform.y, this.Transform.Width, this.Transform.Height);
		}
	}

	Destroy() {
		this.Active = false;
		var i = 0;
		while(Instances[i] !== this){
			i++;
		}
		Instances.splice(i,1);
	}
}
