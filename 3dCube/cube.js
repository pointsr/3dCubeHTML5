//this is an animation im not learning linear algebra for ts

function drawCircle(x, y) {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
      ctx.stroke();
    }
  }
  
  //using unit circle to track equidistant points
  let a1 = 0;
  let a2 = 90;
  let a3 = 180;
  let a4 = 270;
  //square behind

  
  let angles = [a1, a2, a3, a4]
  
  const rotate = (degree) => {
    degree = degree * Math.PI / 180;
    for (let i = 0; i < angles.length; i++) {
      angles[i] += degree;
      //this shouldnt work lol
      //not fixing this tho
      if (angles[i] > 360) {
        angles[i] -= 360;
      }
    }
    
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < angles.length; i++) {
        if (i < 4){
            let centerX = 500 + Math.cos(angles[i] * Math.PI / 180) * 250;
            let centerY = 500 + Math.sin(angles[i] * Math.PI / 180) * 250;
            drawCircle(centerX, centerY);
        } else {
            let centerX = 600 + Math.cos(angles[i] * Math.PI / 180) * 250;
            let centerY = 600 + Math.sin(angles[i] * Math.PI / 180) * 250;
            drawCircle(centerX, centerY);
        }
    }
    
    // front
    ctx.beginPath();
    ctx.moveTo(500 + Math.cos(angles[0] * Math.PI / 180) * 250, 500 + Math.sin(angles[0] * Math.PI / 180) * 250);
    for (let i = 1; i < angles.length; i++) {
      ctx.lineTo(500 + Math.cos(angles[i] * Math.PI / 180) * 250, 500 + Math.sin(angles[i] * Math.PI / 180) * 250);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    //back
    ctx.moveTo(600 + Math.cos(angles[0] * Math.PI / 180) * 250, 600 + Math.sin(angles[0] * Math.PI / 180) * 250);
    for (let i = 1; i < angles.length; i++) {
      ctx.lineTo(600 + Math.cos(angles[i] * Math.PI / 180) * 250, 600 + Math.sin(angles[i] * Math.PI / 180) * 250);
    }
    ctx.closePath();
    ctx.stroke();
    //conecting the two
    ctx.beginPath()
    for (let i = 0; i < angles.length;i++){
        ctx.moveTo(500 + Math.cos(angles[i] * Math.PI / 180) * 250,500 + Math.sin(angles[i] * Math.PI / 180) * 250)
        ctx.lineTo(600 + Math.cos(angles[i] * Math.PI / 180) * 250, 600 + Math.sin(angles[i] * Math.PI / 180) * 250);
    }
    ctx.closePath();
    ctx.stroke();
    

    
  };

// sick now at this point we have a working spinning square
// ofc a cube is 3d tho so we added another square (a5,a6,a7,a8)

  const animate = () => {
    rotate(5)
    setTimeout(animate,5)
  }
  animate()
