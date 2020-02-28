
function ComponentBase () {
	this.name = this.constructor.name;
	this.parent;
	this.active;

	this.Initialize = function() {}
	this.GetComponent = function(comp){
		if(!parent){
			console.error(name, ' has no parent where to look for component');
			return;
		}
		return this.parent.GetComponent(comp);
	}
}

function EntityComponent () {
	ComponentBase.call(this);
	
	this.Start = function() {
	}

	this.Update = function() {

	}

	this.LateUpdate = function() {

	}

}