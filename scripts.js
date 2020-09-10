function pintarNumero(numero) {
    //document.getElementById("data").value = numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    //document.getElementById("data").value = 
    pintarDatos(operador)
}

function pintarDatos(dato){
    let valorInput = document.getElementById("data")
    //valorInput.value = valorInput.value +  " " + dato 
    valorInput.value = `${valorInput.value}${dato}`
}

function Limpiar(){
    document.getElementById("data").value=null
}

function mostrarResultado() {
    let valorInput=document.getElementById("data").value
    let arreglo = valorInput.split("")

    switch (arreglo[1]) {
        case "+":
            console .log ("suma")
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById("data").value = suma 
            break;
        case "-":
            console.log("resta")
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById ("data").value = resta 
            break;
            default:
                alert("No es + ni menos")
    }

}

    function mostrarDia (){
        let dia = prompt("Ingresa el dia")
        
        switch (dia){
            case "lunes":
                alert ("digitaste lunes")
                break;
        }

        switch (dia){
            case "martes":
                alert("digitaste martes")
                break;
        }

        switch(dia){
            case "miercoles":
                alert("digitaste miercoles")
                break;
        }


        switch (dia){
            case "jueves":
            alert("digitaste jueves")
            break;
        }

        switch (dia){
            case "viernes":
                alert ("digitaste viernes")
                break;

        }
        

        
    


    //let suma =parseInt (arreglo[0]) + parseInt(arreglo[2])
    //document.getElementById("data").value= suma  
    
}
