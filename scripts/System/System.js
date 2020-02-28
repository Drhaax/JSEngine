Vector2 = function(x,y){
	this.x = x;
	this.y = y;
	
	this.plus = function(v2){
		var newX = this.x + v2.x;
		var newY = this.y + v2.y;
		return new Vector2(newX,newY);
	}

	this.minus = function(v2){
		var newX = this.x - v2.x;
		var newY = this.y - v2.y;
		return new Vector2(newX,newY);
	}

	this.Times = function(t){
		var newX = this.x * t;
		var newY = this.y * t;
		return new Vector2(newX, newY);
	}

	this.SetX = function(x){
		this.x = x;
	}

	this.SetY = function(y){
		this.y = y;
	}

	this.Set = function(v2){
		this.SetX(v2.x);
		this.SetY(v2.y);
	}

	this.Move = function(v2){
		this.x += v2.x;
		this.y += v2.y;
	}
}

Dictionary = function(){
	var dict = {};

	this.AddEntry = function(key,val) {
		dict[key] = val;
	}

	this.GetValueWithKey = function(key){
		return dict[key];
	}

	this.ForEach = function(callback){
		for( var e in dict ){
			var val = this.GetValueWithKey(e);
			callback(val);
		}
	};

	this.RemoveEntry = function(key){
		delete dict[key];
	}

	this.Contains = function(key) {
		return dict.hasOwnProperty(key);
	}

	this.Count = function() {
		return Object.keys(dict).length;
	}
}