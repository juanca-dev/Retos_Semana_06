var texto=document.getElementById("txtTexto");
var boton = document.getElementById("btnAgre");
var divtareas = document.getElementById("tareas");


var tarealista=[];

boton.addEventListener('click',function(){
    if(texto.value.length==0){
        alert("Ingrese una tarea");
    }
    else{
        tarealista.push(texto.value);
        texto.value="" ;       
        mostrarTareas(tarealista);
    }
    
})

function mostrarTareas(tarealista){
    

    var tareas="";  
    for(var i=0; i<tarealista.length;i++){
        var li = document.createElement("li");
       tareas = 
       `<div class="tarjetaTareas" id="${i}">
       <label  >${tarealista[i]}</label>
       <input type="checkbox" name="${i}" class="checkTarea" id="${i}" >
       </div>`
       li.innerHTML=tareas;
    }
    
    document.getElementById('tareas').appendChild(li);
  
}

var miList = document.getElementById('tareas');
miList.addEventListener('click', function(e){   
    if(e.target.classList.contains("checkTarea")){      
        //e.target.classList.toggle('checked');
        e.target.parentElement.classList.toggle('checked');
    }
});

var all = document.getElementById('all');
all.addEventListener('click', function(ev){   
   var miTexto = document.getElementsByClassName("tarjetaTareas");
   var miscasillas=document.getElementsByClassName("checkTarea");
   console.log(miTexto.length);
   for(var i=0; i<miTexto.length;i++){
       miTexto[i].classList.remove("checked");
    if(miscasillas[i].type == "checkbox") // Ejecutamos si es una casilla de verificacion
		{
			miscasillas[i].checked=i.checked; // Si su input es CheckBox se aplica la funcion ActivarCasilla
		}


   }
});

