function iniciarjuego(){
   var canva = document.getElementById('canva').getContext('2d'); 
   var imagenNave     = new Image();
   var imagenEnemigo1 = new Image(); 
   var imagenEnemigo2 = new Image();

   imagenNave.src = "imagenes/nave.png"; 
   imagenEnemigo1.src = "imagenes/enemigo1.png"; 
   imagenEnemigo2.src = "imagenes/enemigo2.png"; 

   var anchoCanva = canva.canvas.width; 
   var alturaCanva = canva.canvas.heigth;
   
   var inspeccionarNaveEnemiga = function(opciones){
       return{
           id: opciones.id || '',
           x: opciones.x || '',
           y: opciones.y || '',
           w: opciones.w || '', 
           h: opciones.h || '',
           image: opciones.image || imagenEnemigo1
       }
   }
   
   var enemigos=[
        new inspeccionarNaveEnemiga({id: "enemigox", x : 200, y : 30, w : 20, h : 90, })
   ];

   var mostrarEnemigos = function(listaEnemigos){
        for(i = 0; i < listaEnemigos.length; i++){
            var enemigo = listaEnemigos[i];
            canva.drawImage(enemigo.image, enemigo.x, enemigo.y += .5, enemigo.w, enemigo.h); 
        }
   }

   function programarUbicacionNave(){
        this.y = 500, 
        this.x = anchoCanva*.5 - 25,
        this.w = 100,
        this.h = 100,
        this.direccion, 
        this.bg = "white",
        this.misiles = [];


        this.hacer = function(){
            if(this.direccion === 'left'){
                this.x -= 5;
            }
            else if(this.direccion === 'right'){
                this.x += 5;
            }
            else if(this.direccion === 'downArrow'){
                this.y += 5;
            }
            else if(this.direccion === 'upArrow'){
                this.y -= 5;
            }
            canva.fillStyle = this.bg;
            canva.drawImage(imagenNave, this.x, this.y, 100, 90);
        }
   }

   var lanzacohetes = new programarUbicacionNave();

   function animar(){
        canva.clearRect(0, 0, anchoCanva, alturaCanva);
        lanzacohetes.hacer();
        mostrarEnemigos(enemigos); 
   }

   var intervaloDeAnimar = setInterval(animar, 6);

   var  btnIzquierda = document.getElementById('btnIzquierda');
   var  btnFuego = document.getElementById('btnFuego');
   var  btnDerecha = document.getElementById('btnDerecha');

   document.addEventListener('keydown', function(event){
        if(event.keyCode === 37){
            lanzacohetes.direccion = 'left';
            if(lanzacohetes.x < anchoCanva*.2 -130){
                lanzacohetes.x += 0;
                lanzacohetes.direccion = ''; 
            }
        }
   });

   document.addEventListener('keyup', function(event){
        if(event.keyCode === 37){
            lanzacohetes.x += 0; 
            lanzacohetes.direccion = ''; 
        }
    });

    document.addEventListener('keydown', function(event){
        if(event.keyCode === 39){
            lanzacohetes.direccion = 'right';
            if(lanzacohetes.x > anchoCanva - 110){
                lanzacohetes.x -= 0;
                lanzacohetes.direccion = ''; 
            }
        }
   });

    document.addEventListener('keyup', function(event){
        if(event.keyCode === 39){
            lanzacohetes.x -= 0; 
            lanzacohetes.direccion = ''; 
        }
    });

    document.addEventListener('keydown', function(event){
        if(event.keyCode === 38){
            lanzacohetes.direccion = 'upArrow';
            if(lanzacohetes.y < alturaCanva*.2 - 80){
                lanzacohetes.y += 0;
                lanzacohetes.direccion = ''; 
            }
        }
    });

    document.addEventListener('keyup', function(event){
        if(event.keyCode === 38){
            lanzacohetes.y -= 0; 
            lanzacohetes.direccion = ''; 
        }
    });

    document.addEventListener('keydown', function(event){
        if(event.keyCode === 40){
            lanzacohetes.direccion = 'downArrow';
            if(lanzacohetes.y > alturaCanva - 110){
                lanzacohetes.y -= 0;
                lanzacohetes.direccion = ''; 
            }
        }
    });

    document.addEventListener('keyup', function(event){
        if(event.keyCode === 40){
            lanzacohetes.y += 0; 
            lanzacohetes.direccion = ''; 
        }
    });

    document.addEventListener('keydown', function(event){
        if(event.keyCode === 80){
            location.reload();
        }
    });

    btnIzquierda.addEventListener('mousedown',function(){
        lanzacohetes.direccion = 'left';
    });

    btnIzquierda.addEventListener('mouseup',function(){
        lanzacohetes.direccion = '';
    });

    btnDerecha.addEventListener('mousedown',function(){
        lanzacohetes.direccion = 'right';
    });

    btnDerecha.addEventListener('mouseup',function(){
        lanzacohetes.direccion = '';
    });


}


window.addEventListener('load', function(event){
    iniciarjuego(); 
}); 