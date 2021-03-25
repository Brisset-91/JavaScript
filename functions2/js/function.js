
/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/

var FullName = []
    
    function KoderName() {
        var CantidadKoders = parseInt(prompt("Ingresa la cantida de koders a guardar"))

        for (let i = 0; i < CantidadKoders; i++) {
            let Name = prompt("Ingresa el nombre");
            let Lastname = prompt("Ingresa el apellido");
            FullName.push(`${Name} ${""} ${Lastname} `);
        }   
        
        console.log(FullName)
    }
   
   
  KoderName()

/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
 */
   
    function NewList() {
    
      var AgregaQuita = prompt("Desea agregar/quitar Koders?")

      if (AgregaQuita == "agregar") {
       
        KoderName()  
        
      } else if (AgregaQuita == "quitar") {
        let DKoder = parseInt(prompt("Cuantos desea quitar?"))
        
        for (let i = 0; i < DKoder; i++) {
        
            var DeleteKoders = FullName.pop()

        }
        console.log(DeleteKoders)
        console.log(FullName)

      } 

      else {
        alert("Hasta Luego gracias")
      
      }

    }
      
    NewList()
    
