function Transform(x,y,w,h) {
	ComponentBase.call(this);
	this.position = new Vector2(x,y);
	this.width = w;
	this.height = h;
	this.GetCenterPoint = function() {
		var centerX = this.position.x+this.width/2;
		var centerY = this.position.y+this.height/2;
		return new Vector2(centerX,centerY)
	}
	
	this.SetX = function(x){
		this.position.SetX(x);
	}

	this.SetY = function(y){
		this.position.SetY(y);
	}

	this.SetPosition = function(pos){
		this.position.Set(pos);
	}
	this.Move = function(pos) {
		var fixedVector = pos.Times(DeltaTime);
		this.position.Move(fixedVector.Times(10));
	}
}

function Property(initialValue,propertyChanged) {
	var current = initialValue;
	return {
        get value() {
			return current;
		},
        set value(newValue) {
			if(current != newValue){
				propertyChanged(current, newValue);
				current = newValue;
			}
		}
    };
}

function GameObject (w, h, x = 0, y = 0) {
	WorldEntity.call(this);
	this.AddComponent(new Transform(x,y,w,h));

	this.active.value = true;
	this.Destroy = function() {
		this.active.value = false;
		var i = 0;
		while(Instances[i] !== this){
			i++;
		}
		Instances.splice(i,1);
	}
}
