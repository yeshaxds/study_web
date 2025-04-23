var car = {
    name: "Fiat",
    model: 500,
    weight :  850,
    color: "white",
    start: function(){
        console.log("car started");
    },
    drive: function(){
        console.log("car driving");
    },
    brake: function(){
        console.log("car braking");
    },
    stop: function(){
        console.log("car stopped");
    }
}
car.start();
car.drive();
car.brake();
car.stop();
function carnamefunction(){
    document.getElementById("demo2").innerHTML = car.name;
}