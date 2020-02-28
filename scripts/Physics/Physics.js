Physics = {
	Gravity : 9.8,
	ApplyGravity: function() {
		Engine.Entities.ForEachWithComponent(RigidBody,(rb => {
			rb.TickForce();	
		}));
	},

	CollisionTick: function() {
		Engine.Entities.ForEachWithComponent(BoxCollider,(cb => {
			//console.log(cb);
			Engine.Entities.ForEachWithComponent(BoxCollider, e => {
				cb.CheckCollision(e);
			});
		}));
	}
}