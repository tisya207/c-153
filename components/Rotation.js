//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});


AFRAME.registerComponent("plane-rotation-reader",{
  schema:{
    speedOfRotation:{type:"number", default:0},
  },
  init: function(){
    window.addEventListener("keydown",(e)=>{
      this.data.speedOfRotation= this.el.getAttribute("rotation");
      var planeRotation= this.data.speedOfRotation

      this.data.speedOfAscent= this.el.getAttribute("position");
      var planePosition= this.data.speedOfAscent

      if (e.key=== "ArrowRight"){
        if( planeRotation.x < 10){
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }

      if (e.key=== "ArrowLeft"){
        if( planeRotation.x > -10){
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key=== "ArrowUp"){
        if( planeRotation.z < 20){
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if(planePosition.y < 2){
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key=== "ArrowDown"){
        if( planeRotation.z > -20){
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if(planePosition.y > -2){
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
    })
  },


})

