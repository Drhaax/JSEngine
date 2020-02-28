function loadScript(url, callback)
{
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    document.head.appendChild(script);
}

let fps = 60;
let interval = 1000 / fps;
let lastUpdate = Date.now();
DeltaTime = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    Engine.Initialize(document.getElementById("myCanvas"));
    Engine.Canvas.width = window.screen.width * 0.99;
    Engine.Canvas.height = window.screen.height * 0.8;
    var x = new GameObject(10,10);
    var y = new GameObject(20,20, 0,20)
    var floor = new GameObject(60,20,0 , 60);
    y.AddComponent(new SpriteRenderer());
    x.AddComponent(new SpriteRenderer());
    y.AddComponent(new BoxCollider('y'));
    x.AddComponent(new BoxCollider('x player'));
    x.AddComponent(new RigidBody());
    floor.AddComponent(new SpriteRenderer());
    
    floor.AddComponent(new BoxCollider('floor'));
    var bc = x.GetComponent(BoxCollider);
    bc.EnterCollision = function(collider){
    }
    bc.StayCollision = function(collider) {
    }
    bc.ExitCollision = function() {
    }
    x.AddComponent(new Movement());
    Tick();

});

function Update() {
    Engine.Entities.ForEach(entity => {
        entity.EntityComponents.ForEach(ec => {
            if(ec.Update){
                ec.Update();
            }
        });
    });
}

function LateUpdate(){
    Engine.Entities.ForEach(entity => {
        entity.EntityComponents.ForEach(ec => {
            if(ec.LateUpdate){
                ec.LateUpdate();
            }
        });
    });
}
    
function Draw(){
    ClearScreen();
    Engine.Entities.ForEachWithComponent(SpriteRenderer, (sr) => sr.Render());
}

function Tick(){
    requestAnimationFrame(Tick);
    var now = Date.now();
    var elapsed = now - lastUpdate;
     
    if (elapsed  > interval) {
        lastUpdate = now - (elapsed % interval);
        DeltaTime = elapsed / 1000;
        MainLoop();
    }
}

function MainLoop(){
    Physics.ApplyGravity();
    Update();
    Physics.CollisionTick();
    Draw();
    LateUpdate();
}

function ClearScreen() {
    Engine.Ctx.clearRect(0,0,Engine.Canvas.width,Engine.Canvas.height);
}
