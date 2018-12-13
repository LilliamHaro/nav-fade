// // PASO 1
// // primer patrón común en three.js 
// // - Crear un renderer(ugar donde vamos a volcar el resultado de nuestras escenas. )
// // - Crear una escena (podemos tener múltiples escenas y cada una puede tener diferentes objetos dentro.).
// // - Crear una cámara(pasando como parámetros el FOV, el aspect ratio, el near plane y el far plane)
// // ------------------------------------------------


// // Create a renderer with Antialiasing
// var renderer = new THREE.WebGLRenderer({antialias:true});

// // Configure renderer clear color
// renderer.setClearColor("#000000");

// // Configure renderer size
// renderer.setSize( window.innerWidth, window.innerHeight );

// // Append Renderer to DOM
// var container = document.getElementById('container')
// container.appendChild( renderer.domElement );

// // Create an empty scene
// var scene = new THREE.Scene();

// // Create a basic perspective camera
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
// camera.position.z = 4;


// // PASO 2
// // segundo patrón común (agregar objetos a la escena)
// // - Crear un Geometry (fórmula matemática de un objeto,)
// // - Crear un Material ( las propiedades de un objeto y su comportamiento con respecto a las fuentes de luz de la escena)
// // - Crear un Mesh (composición de una geometría y un material.)
// // - Agregar el mesh a la escena.
// // ------------------------------------------------


// // Creamos el Geometry, pasando el tamaño
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // Creamos el Material, pasando el color
// var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
// // Creamos el Mesh
// var cube = new THREE.Mesh( geometry, material );
// // Agregamos el Mesh a la escena
// scene.add( cube );

// //Animacion
// // Render Loop
// var render = function () {
//   requestAnimationFrame( render );

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   // El código animado
//   renderer.render(scene, camera);
// };

// render();

// function draw() {
//   ctx.translate(75,75);
//   for (i=1;i<6;i++){
//       // Desplazarse or los anillos (desde dentro hacia fuera)
//       ctx.save();
//       ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
//       for (j=0;j<i*6;j++){
//           // dibujar puntos individuales
//           ctx.rotate(Math.PI*2/(i*6));
//           ctx.beginPath();
//           ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
//           ctx.fill();
//       }
//       ctx.restore();
//   }
// }


function message(n) {
  if (n % 5 === 0 && n % 3 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  }  else {
    return n;
  }
}

for (let i = 1; i < 101; i++) {
  const msg = message(i);
  // answerEl.textContent += msg;
  console.log(msg)
}


