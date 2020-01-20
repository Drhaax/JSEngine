function Entity()  {
	this.Id = (+ new Date()).toString(16) +
		(Math.random() * 1000000 | 0).toString(16) +
		Entity.prototype.count;
		
	Entity.prototype.count++;
	this.Components = {};

	this.AddComponent = function(component){
		this.Components[component.name] = component
		return this;
	}
	this.RemoveComponent = function(componentName){
		var name = componentName;

    	if(typeof componentName === 'function'){ 
        name = componentName.prototype.name;
    	}

    	delete this.components[name];
		return this;
	}

	this.Print =function() {
		console.log(JSON.stringify(this, null, 4));
	};

	return this;
}

Entity.prototype.count = 0;

let EntityComponent = () => {
	
	this.Start = function() {

	}

	this.Update = function() {

	}

}