
// function loadScript(url, callback)
// {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = url;

//     script.onreadystatechange = callback;
//     script.onload = callback;

//     document.head.appendChild(script);
// }

document.addEventListener("DOMContentLoaded", (event) => {
    Engine.Initialize(document.getElementById("mainCanvas"));
    UI.Initialize(document.getElementById("UICanvas"));
    
    Engine.Start();

    var text = new UIObject(50,50, 20,20);
    text.AddComponent(new Text('asdasdasd'));
    var mainCam = new GameObject(0,0,0,0);
    var x = new GameObject(30,30);
    var y = new GameObject(20,20,0,20)
    var floor = new GameObject(60,20,0,60);
    
    y.AddComponent(new SpriteRenderer());
    x.AddComponent(new SpriteRenderer("Assets/Robot_Idle.png"));
    y.AddComponent(new BoxCollider('y'));
    x.AddComponent(new BoxCollider('x player'));
    mainCam.AddComponent(new Camera(true));
    x.AddComponent(new RigidBody());
    floor.AddComponent(new SpriteRenderer());
    floor.AddComponent(new BoxCollider('floor'));
    x.Tesburu = text;
    var bc = x.GetComponent(BoxCollider);
    bc.EnterCollision = function(collider){
    }
    bc.StayCollision = function(collider) {
    }
    bc.ExitCollision = function() {
    }
    x.AddComponent(new Movement());
    
    
});
