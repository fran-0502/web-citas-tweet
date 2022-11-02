// const agregar = document.querySelector("#formulario");

const formulario = document.querySelector('#formulario');
const lista_twit = document.querySelector('#lista-tweets');
let tweets = [];

manejadorEventos()

function manejadorEventos() {
  formulario.addEventListener('submit', agregarTweet);
}


// funciones

function agregarTweet(e) {
  e.preventDefault()
  const textoTweet = document.querySelector("#tweet").value;

  if (textoTweet == "") {
    mostrarError('Eres un pelabola en la vida ni escribir sabes');
    return
  }
  if (textoTweet.length > 250) {
    mostrarError("el tweet no puede tener mas de 250 caracteres");
    return
  }

  const tweetObj = {
    id: Date.now(),
    tweet: textoTweet
  }

  tweets = [...tweets, tweetObj]
  console.log(tweets)

  creteHTML()

}

function creteHTML() {

  if (tweets.length == 0) {
    return
  }

  tweets.forEach(tweets => {
    const li = document.createElement('li');
    li.innerText = tweets.tweet;
    lista_twit.appendChild(li)
    console.log(li)
  });




}





function mostrarError(error) {
  // mostrar el error del mensaje

  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');
  // insertar mensaje error

  const contError = document.querySelector('#contenido');
  contError.appendChild(mensajeError);

  // eliminar mensaje despues de 1.5s

  setTimeout(() => {
    mensajeError.remove()
  }, 1000);


}