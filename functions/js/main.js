/*
Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder
}
*/  /*
var RegistroDeKoders= parseInt(prompt("ingresa la cantidad de Koders a registrar"));


for (let i=0; i < RegistroDeKoders; i++) {
    let name = prompt("Ingresa sus nombres");
    let lastname = prompt("Ingresa sus apellidos");

    
    let fullName = name.concat(" ").concat(lastname);

    console.log(fullName) 
} */




let koders = [];
function numOfKoders(nOfKoders){
    for (let i = 0; i < nOfKoders; i++) {
        koderName = prompt("Ingresa el nombre del Koder:");
        koderLastName = prompt("Ingresa el apellido del Koder:");
        koders.push(koderName + " " + koderLastName);
    }
    alert(koders);
    let answer = prompt("¿Deseas agregar más Koders? (S/N)");
    if(answer === 'S' || answer === 's'){
        let nofExtraKoders = parseInt(prompt("¿Cuántos Koders más deseas agregar"))
        nofExtraKoders != 0 ? numOfKoders(nofExtraKoders) : alert("Ok. hasta pronto.");
    } else{
        alert("Ok. La lista de Koders es " + koders);
    }
    return koders;
}
function deleteKoders(koders, deleteRandom){
    let randomNumber = Math.floor(Math.random()*(koders.length)+0);
    if (deleteRandom === 'S' || deleteRandom === 's') {
        alert(randomNumber);
        alert(`Se eliminó el registro de ${koders[randomNumber]}`);
        delete koders[randomNumber];
        alert("La lista final de Koders es " + koders);
    } else {
        alert("Ok. Hasta pronto");
    }
}
let nOfKoders = parseInt(prompt("Ingresa el número de Koders a registrar"));
kodersArray = numOfKoders(nOfKoders);
deleteRandomK = prompt("¿Deseas eliminar algún registro al azar? (S/N)");
deleteKoders(kodersArray, deleteRandomK);


