function UIObject(w, h, x = 0, y = 0)  {
	Entity.call(this);
	UI.Entities.AddEntry(this.Id,this);

	this.AddComponent(new Transform(x,y,w,h));
	this.active.value = true;
	
}


