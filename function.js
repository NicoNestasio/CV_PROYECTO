//Random User Generator
fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(persona => mostrarData(persona))
function gen(genero){
      var traduccion;
      if (genero=='female'){
                  traduccion='femenino';
      } else {
                  traduccion='masculino';
      }
      return traduccion
}
const mostrarData = (persona) =>{
      console.log(persona)
      var genero = gen(persona.results[0].gender);
      document.getElementById('nombre').innerHTML= persona.results[0].name.first;
      document.getElementById('apellido').innerHTML= persona.results[0].name.last;
      document.getElementById('imagen').src= persona.results[0].picture.large;
      document.getElementById('email').innerHTML= persona.results[0].email;
      document.getElementById('cel').innerHTML= persona.results[0].cell;
      document.getElementById('infop').innerHTML= "<li>Edad: " + persona.results[0].dob.age + " años</li>" + "<li>Género: " + genero + "</li>" + "<li>Nacionalidad: " + persona.results[0].nat + "</li>" + "<li>Residencia: " + persona.results[0].location.city + ", " + persona.results[0].location.state + ", " + persona.results[0].location.country + "</li>" +  "<li>ID: " + persona.results[0].id.name + " " + persona.results[0].id.value + "</li>"
}
//Botón cambio de fondo
var c=0;
document.getElementById('boton').onclick =function(){

      if(c==0){
            document.body.style.backgroundColor = '#EBEBEB' ;
            document.getElementById('encabezado').style.color =  '#202076';
            document.getElementById('foto').style.backgroundColor =  '#202076';
            c=1;

      }else{
            document.body.style.backgroundColor =  '#160c48';
            document.getElementById('encabezado').style.color =  '#EBEBEB';
            document.getElementById('foto').style.backgroundColor =  '#EBEBEB';
            c=0;

      }


      
}
//Botón esconder info
var i=0;
document.getElementById('hide').onclick =function(){

      if(i==0){
            document.getElementById('infop').style.display = "block";
            document.getElementById('ojo').className= "fa-regular fa-eye";
            i=1;

      }else{
            document.getElementById('infop').style.display = "none";
            document.getElementById('ojo').className= "fa-regular fa-eye-slash";
            i=0;

      }


      
}