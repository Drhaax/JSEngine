	function Entity()  {
	this.Id = (+ new Date()).toString(16) +
		(Math.random() * 1000000 | 0).toString(16) +
		Entity.prototype.count;
	
	this.EntityComponents = new Dictionary();

	var propChanged = (old, newVal) => {
		this.EntityComponents.ForEach(ec => {
			if(ec.Start){
				ec.Start();
			}
		});
	}
	this.active = new Property(false, propChanged);
		
	Entity.prototype.count++;
	
	this.GetComponent = function(componentName) {
		var name = componentName;
		if(typeof componentName === 'function'){
			name = componentName.prototype.name;
			if(!name) {
				name = componentName.name;
				if(!name){
					console.error('Name is not defined!');
				}
			}
    	}
		return this.EntityComponents.GetValueWithKey(name);
	}

	this.AddComponent = function(component){
		if(!component.name){
			console.error('Trying to add component:');
			console.error(component);
			return;
		}
		
		component.parent = this;
		this.EntityComponents.AddEntry(component.name,component)
		Engine.Entities.AddEntry(this.Id,this);
		component.Initialize();
		
		if(this.active.value){
			if(component.Start){
				component.Start();
			}
		}
		
	}
	this.RemoveComponent = function(componentName){
		var name = componentName;

    	if(typeof componentName === 'function'){ 
        	name = componentName.prototype.name;
    	}

    	delete this.EntityComponents[name];
	}

	this.Print =function() {
		console.log(JSON.stringify(this, null, 4));
	};
}

Entity.prototype.count = 0;
