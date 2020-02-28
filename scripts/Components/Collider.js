const Direction  = {
	UP : 'up',
	DOWN : 'down',
	LEFT : 'left',
	RIGHT : 'right'
}

function ColliderBase() {

	this.CollisionDirections = {
		LEFT : false,
		RIGHT : false,
		UP : false,
		DOWN : false
	};

	ComponentBase.call(this);
	this.EnteredCollision = false;
	this.CheckCollision = function(collider){

	}

	this.EnterCollision = function(collider) {
		console.warn("no Collision implemented in entity: " + this.parent.Id);
	}

	this.StayCollision = function(collider){
	}

	this.ExitCollision = function(collider){
	}
}


function BoxCollider(name) {
	ColliderBase.call(this);
	var transform;
	var collidingWith = new Dictionary();
	this.StopOnCollision = true;

	this.Initialize = function(){
		transform =  this.GetComponent(Transform);
	}

	this.GetCenter = function(){
		return transform.GetCenterPoint();	
	}

	this.GetWidth = function() {
	 	return transform.width;
	}

	this.GetHeight = function() {
		return transform.height;
   	}

	this.TriggerCollisionEvents = function(collider, dir){
		
		if(!this.EnteredCollision){
			this.EnteredCollision = true;
			this.EnterCollision(collider);
			RegisterCollision(collider, dir);
		}	
			
		if(this.EnteredCollision){
			this.StayCollision(collider);
			RegisterCollision(collider, dir);
		}
	}

	this.TriggerExitCollision = function(collider){
		if(UnregisterCollision(collider)){
			this.EnteredCollision = false;
			
			this.ExitCollision();
		}
	}

	this.CheckCollision = function(collider){
		if(this == collider){
			return;
		}
		var dx=(this.GetCenter().x)-(collider.GetCenter().x);
  		var dy=(this.GetCenter().y)-(collider.GetCenter().y);;
  
		var width=(this.GetWidth()+collider.GetWidth())/2;
  		var height=(this.GetHeight()+collider.GetHeight())/2;
  
		var crossWidth=width*dy;
  		var crossHeight=height*dx;
		
		if(Math.abs(dx)<=width && Math.abs(dy)<=height){
			if(this.StopOnCollision){
				if(crossWidth>crossHeight){
					if(crossWidth>(-crossHeight)){
						//colliding object is upside of this object;
						transform.SetY(collider.GetCenter().y+collider.GetHeight()/2);
						this.TriggerCollisionEvents(collider, Direction.UP);
					}else{
						this.TriggerCollisionEvents(collider, Direction.RIGHT);
						transform.SetX(collider.GetCenter().x-collider.GetWidth()/2 -  this.GetWidth());
					}
				  }else{
					if(crossWidth>-(crossHeight)){
						this.TriggerCollisionEvents(collider, Direction.LEFT);
						transform.SetX(collider.GetCenter().x+collider.GetWidth()/2);
					}else{
						this.TriggerCollisionEvents(collider, Direction.DOWN);
						transform.SetY(collider.GetCenter().y-collider.GetHeight()/2 - this.GetHeight());
					}
				  }
			}
    	}else{
			this.TriggerExitCollision(collider);
		}
	}

	this.IsCollisionsInDirection = function(dir){
		var colliding = false;
		collidingWith.ForEach(c => {
			if(c == dir){
				colliding = true;
				return;
			}

		});	
		return colliding;
	}

	this.GetEntityId = function() {
		return this.parent.Id;
	}

	var RegisterCollision = function(collider,dir){
		if(!collidingWith.Contains(collider.GetEntityId())){
			collidingWith.AddEntry(collider.GetEntityId(),dir);
			console.log('register entry', dir, 'for', collider.GetEntityId());
		
		}
		
	}

	var UnregisterCollision = function(collider){
		var unregistered = false;
		if(collidingWith.Contains(collider.GetEntityId())){
			collidingWith.RemoveEntry(collider.GetEntityId());
			unregistered = true;
		}
		return unregistered;
	}
		
	
}