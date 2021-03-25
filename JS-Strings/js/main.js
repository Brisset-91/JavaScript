


var phrase = "La mejor forma de predecir el futuro es creándolo"
// 1.- Mostrar la misma frase en snake_case

var snakeCase = phrase.replace(/ /g, "_");
console.log(snakeCase)

// 2.- Mostrar la misma frase en kebab-case

var kebabCase = phrase.replace(/ /g, "-");
console.log(kebabCase)

// 3.- Mostrar la misma frase con todas las vocales en mayúscula

var Vowels = phrase.replace(/[aeiouáéíóú]/g, function mayúscula(M) {
    return M.toLocaleUpperCase();
})
console.log(Vowels)

// 4.- Mostrar los primeros 10 caracteres de la frase

var PrimerosCaracteres = phrase.slice(0,10);

console.log(PrimerosCaracteres)


//5.- Mostrar los últimos 10 caracteres de la frase 

var UltimosCaracteres = phrase.slice(-10);

console.log(UltimosCaracteres)

