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

	this.ForEachWithFunction = function(f, cb){
		this.ForEach(ent => {
			var maybeComp = ent.EntityComponents.GetValueWithKey(f);
			ent.EntityComponents.ForEach(comp => {
				if(comp === 'Initialize'){
					console.log('asdasdasd');
				}
			});
			//console.log(maybeComp);
			if(maybeComp){
				cb(maybeComp);
			}
		});
	};
}