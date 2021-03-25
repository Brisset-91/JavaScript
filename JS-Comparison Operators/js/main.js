


var phrase = "La mejor forma de predecir el futuro es creándolo";

//1- saber la cantidad de palabras
var cantidadPalabras = phrase.length;
    console.log(cantidadPalabras)

//2- saber la cantidad de "a"
var identificaA= phrase.match(/[AaÁá]/gi).length;
    console.log(identificaA)

//3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
var espacios0= phrase.replace(/ /gi,"")
var caracterNone =""

console.log(espacios0)

for (var i = 0; i < espacios0.length; i++) {
    if (i%2 != 0) {
        caracterNone += espacios0.charAt(i) 
    }  
}
console.log(caracterNone)


//4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares

var caracterPar =""
for (var i = 0; i < espacios0.length; i++) {
    if (i%2 == 0) {
        caracterPar +=espacios0.charAt(i)
    }  
}
console.log(caracterPar)

    

 
