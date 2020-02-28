function Entities() {
	Dictionary.call(this);

	this.ForEachWithComponent = function(component, callback) {
		this.ForEach(e => {
			var comp = 	e.GetComponent(component);
			if(comp){
				callback(comp);
			}
		});
	}

}