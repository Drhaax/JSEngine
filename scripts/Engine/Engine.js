Engine = {
    Canvas: {},
    Ctx: {},
    Entities : new Entities(),
    MainCamera : {},
    fps : 60,
    Running : false,
    Initialize: function(Canvas){
      this.Canvas = Canvas;
      this.Ctx = Canvas.getContext("2d");  
      
      this.Canvas.style.zIndex = 0;
      this.Canvas.style.position = "absolute";
    
      this.Canvas.width = window.screen.width * 0.99;
      this.Canvas.height = window.screen.height * 0.8;
    
    },

    Start: function(){
      var loop = new Gameloop();
      loop.Start();
    },
}

var Gameloop = function(){
  var lastUpdate = Date.now();

  this.Start = function(){
    if(Engine.Running){
      return
    }
    Tick();
    Engine.Running = true;
  }

  var Tick = function() {
    requestAnimationFrame(Tick);

    var interval = 1000 / Engine.fps;
    
    var now = Date.now();
    var elapsed = now - lastUpdate;
    
    if (elapsed  > interval) {
      
      lastUpdate = now - (elapsed % interval);
      DeltaTime = elapsed / 1000;
      MainLoop();
    }
  }

  var MainLoop = function(){
    Physics.ApplyGravity();
    Update();
    Physics.CollisionTick();
    Draw();
    LateUpdate();
    UpdateUI();
    DrawUI();
  }

  var Update = function() {
    Engine.Entities.ForEach(entity => {
        entity.EntityComponents.ForEach(ec => {
          if(ec.Update){
            ec.Update();
          }
        });
    });
  }

  var LateUpdate = function(){
    Engine.Entities.ForEach(entity => {
        entity.EntityComponents.ForEach(ec => {
          if(ec.LateUpdate){
              ec.LateUpdate();
          }
        });
    });
  }


  var Draw = function(){

    //ClearScreen();
    if(Object.keys(Engine.MainCamera).length > 0){
      Engine.MainCamera.RenderViewport();
      Engine.Entities.ForEachWithComponent(SpriteRenderer, (sr) => sr.Render());
    }else{
      alert('no main camera');
    }
    
  }


  //UI Stuff

  var UpdateUI = function() {
    UI.Entities.ForEach(entity => {
      entity.EntityComponents.ForEach(ec => {
        if(ec.Update){
            ec.Update();
        }
      });
    });
  }

  var DrawUI = function() {
    UI.Ctx.clearRect(0,0,UI.Canvas.width,UI.Canvas.height);
    UI.Entities.ForEach(entity => {
      entity.EntityComponents.ForEach(ec => {
        if(ec.Render){
          ec.Render();
        }
      });
    });
  }
}

