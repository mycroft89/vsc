addEventListener ("load", function (){
    document.getElementById("alerta").addEventListener("click", function (){
        alert("This game is supported on Linux!");
    })
})

document.addEventListener("DOMContentLoaded", function() {
    contadorFuncion.inicializar();
});

var contadorFuncion = {
    contador: 0,

    aumentarContador: function() {
      this.contador++;
      document.getElementById("contador").innerText = this.contador;
    },

    inicializar: function() {
      var botones = document.getElementsByClassName("aumentarContador");
      for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", this.aumentarContador.bind(this));
      }
    }
};