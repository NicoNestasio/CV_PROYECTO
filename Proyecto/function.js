
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

document.getElementById('boton').onclick =function(){

      document.body.style.backgroundColor = '#EBEBEB' ;
}