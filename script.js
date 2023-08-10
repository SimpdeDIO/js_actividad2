function enviar()
{
var nombre = document.getElementById("nombre").value;
    if (nombre ===""){
        alert("Es obligatorio completar esta casilla");
        return
    }
   
alert("hola " + nombre + " n.n")
}

function agregarComentario() 

  {

  // Obtener el valor del campo de comentario
  var comentarioInput = document.getElementById("comentario").value;

  // Verificar si el campo de comentario está vacío
  // Si no se ingresó ningún texto en el imput, salir de la función sin cambiar ni agregar nada nuevo. (la función termina aca)
  if (comentarioInput === "") {return;}

  // Obtener el contenedor de comentarios
  var contenedorComentarios = document.getElementById("contenedor-comentarios");

  // Crear un nuevo elemento div para el comentario
  var nuevoComentario = document.createElement("div");

  // Establecer el contenido del nuevo comentario con el valor del campo de comentario
  nuevoComentario.innerHTML = comentarioInput;

  // Agregar la clase "comentario" al nuevo comentario
  nuevoComentario.classList.add("comentario");

  // Agregar el nuevo comentario al contenedor de comentarios
  contenedorComentarios.appendChild(nuevoComentario);

  // Limpiar el campo de comentario después de agregar el comentario
  document.getElementById("comentario").value = "";
}

function comprar_B()
{
    var boton_b = document.getElementById("bullet");
    boton_b.innerHTML = "Producto agregado"
    boton_b.style.backgroundColor = "indianred"
    boton_b.style.color = "black"

}

function comprar_M()
{
    var boton_m = document.getElementById("metallica");
    boton_m.innerHTML = "Producto agregado"
    boton_m.style.backgroundColor = "indianred"
    boton_m.style.color = "black"
}

function comprar_ff()
{
    var boton_ff = document.getElementById("ff");
    boton_ff.innerHTML = "Producto agregado"
    boton_ff.style.backgroundColor = "indianred"
    boton_ff.style.color = "black"
}

console.log("jijijija");