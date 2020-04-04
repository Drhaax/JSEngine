function WorldEntity()  {
	Entity.call(this);
	Engine.Entities.AddEntry(this.Id,this);
}
