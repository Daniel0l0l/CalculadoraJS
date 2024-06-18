function soma() {
   let num1 = Number(document.getElementById("num1").value)
   let num2 = Number(document.getElementById("num2").value)

   let resultado = num1 + num2

   document.getElementById("Resultado").innerHTML = resultado.toFixed(2)
}

function subtracao () {
   let num1 = Number(document.getElementById("num1").value)
   let num2 = Number(document.getElementById("num2").value)

   let resultado = num1 - num2

   document.getElementById("Resultado").innerHTML = resultado.toFixed(2)
}

function multiplicacao () {
   let num1 = Number(document.getElementById("num1").value)
   let num2 = Number(document.getElementById("num2").value)

   let resultado = num1 * num2

   document.getElementById("Resultado").innerHTML = resultado.toFixed(2)
}

function divisao () {
   let num1 = Number(document.getElementById("num1").value)
   let num2 = Number(document.getElementById("num2").value)

   let resultado = num1 / num2

   document.getElementById("Resultado").innerHTML = resultado.toFixed(2)
}

//klasjdkkk oba