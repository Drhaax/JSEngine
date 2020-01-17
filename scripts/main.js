let fps = 60;
let interval = 1000 / fps;
let lastUpdate = Date.now();
let elapsed = 0;
DeltaTime = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    ESystem = {
        Canvas: document.getElementById("myCanvas"),
        Ctx: document.getElementById("myCanvas").getContext("2d")
    }
    
    ESystem.Canvas.width = window.innerWidth/1.01;
    ESystem.Canvas.height = window.innerHeight/1.04;
    var x = new Entity();
    var a = new Entity();
    a.Print();
   // gameArea = new GameArea(c.width,c.height,ctx);
    player = new Player(20,20);
    Tick();
});

function Update() {
    Instances.forEach(go => {
        go.Update();
    });
}
    
function Draw(){
    ClearScreen();
    Instances.forEach(go => {
        go.Draw();
    });
}

function Tick(){
    requestAnimationFrame(Tick);
    
    var now = Date.now();
    elapsed = now - lastUpdate;
     
    if (elapsed  > interval) {
        lastUpdate = now - (elapsed % interval);
        DeltaTime = elapsed / 1000;
        MainLoop();
    }
}

function MainLoop(){
    Update();
    Draw();
}

function ClearScreen() {
    ESystem.Ctx.clearRect(0,0,ESystem.Canvas.width,ESystem.Canvas.height);
}





