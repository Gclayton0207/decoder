function cifraCesar() {
  var i = document.querySelector(".rotacao").value;
  i %= 26;
  var radioDecodificar = document.querySelector(".descodificar");
  if (radioDecodificar.checked) {
    i *= -1;
  }
  cesar(i);
}

function cesar(i) {
  var textoDeEntrada = document.querySelector(".receber").value.toLowerCase();
  var textoDeSaida = document.querySelector(".resultado");
  var decode = "";
  textoDeSaida.innerHTML = "";

  for (var incremento = 0; incremento < textoDeEntrada.length; incremento++) {
    decode = textoDeEntrada.charCodeAt(incremento);

    if (decode >= 65 && decode <= 90) {
      decode += incremento;
      if (decode > 90) {
        decode -= 26;
      } else if (decode < 65) {
        decode += 26;
      }
    }

    if (decode >= 97 && decode <= 122) {
      decode += i;
      if (decode > 122) {
        decode -= 26;
      } else if (decode < 97) {
        decode += 26;
      }
    }

    textoDeSaida.innerHTML += String.fromCharCode(decode);
  }
}