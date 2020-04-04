function RigidBody() {
	ComponentBase.call(this);
	this.mass = 10;
	this.velocity =  new Vector2(0,0);
	this.force = new Vector2(0,0);
	this.EnableGravity = true;

	var transform;
	var collider;

	var acceleration = new Vector2(0,0);
	var timeFalling = 0;

	this.RecalculateAcceleration = function(){
		acceleration.SetX(this.force.x / this.mass);
		acceleration.SetY(this.force.y / this.mass);
	}

	this.Initialize = function(){
		acceleration.SetY(Physics.Gravity);
		transform =  this.GetComponent(Transform);
		if(!transform){
			console.error('missing transfrom in', this);
		}
		collider = this.GetComponent(BoxCollider);
		if(!collider){
			console.error('missing collider in ',this);
			return;
		}
		
	}

	this.AddForce = function(force){

	}

	this.SetForce = function(force){

	}

	this.TickForce = function() {
		if(!this.EnableGravity){
			return;
		}
		if(collider.IsCollisionsInDirection(Direction.DOWN)){
			timeFalling = 0;
		}
		
		timeFalling += DeltaTime;
		this.velocity.y = acceleration.y * timeFalling;
		transform.Move(this.velocity);
	}
}