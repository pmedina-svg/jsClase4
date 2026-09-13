confirmacion = prompt("Quieres jugar un juego? responde (si/no)").toLowerCase();
console.log("Lo que respondio a la participación:", confirmacion);

if (confirmacion == "si") {

    alert("Alguien ha robado una joyería!");  
    
    // AQUÍ comienza nuestra investigación con el array
    
    const sospechosos = ["Carlos", "Diego", "Gustavo", "Victor", "Luis"];
    function mostrarSospechosos(){
        for (const sospechoso of sospechosos){
            console.log("Sospechoso: " + sospechoso);
        }
    }

    console.log(sospechosos);
    alert("La policía capturó a 5 sospechosos: " + sospechosos.join(", "));
    
    //Agrega nuevo sospechoso al final
    const nuevoSospechoso = prompt("Antes que nada, cual es tu nombre?")
    sospechosos.push(nuevoSospechoso);
    alert("Hola " + nuevoSospechoso + ", ahora tú tambien eres sospechoso del robo!")

    
    //agrega nuevo sospechoso al comienzo
    const sospechosoTestigo = prompt("Un testigo vio salir a otra persona al momento del robo!!. ¿Cuál es su nombre?");
    sospechosos.unshift(sospechosoTestigo);

    alert("La nueva lista de sospechosos quedó asi: \n- " + sospechosos.join("\n- "));
    
    console.log(sospechosos);
    
    //elimina al primer sospechoso
    alert("Al parecer hubo un error con el sospechoso " + sospechosoTestigo + " y la policia lo descartó como posible ladrón");
    const sospechosoEliminado = sospechosos.shift();
    console.log(sospechosoEliminado + " ya no es sospechoso");
    
    //elimina al último sospechoso
    alert("Y lo de que tú " + nuevoSospechoso + " eras sospechoso era una broma");
    sospechosos.pop();
    console.log(nuevoSospechoso + " ya no eres sospechoso");
    mostrarSospechosos();

    alert("La lista oficial de sospechosos quedó asi: \n- " + sospechosos.join("\n- "));


    let existeSospechoso = false;

    do{
        //Captura de respuesta del usuario en minuscula
        const respuestaSospechoso = prompt("La policía descubrió que uno de los sospechosos está usando otra identidad. ¿Quién crees que es?\n\n- " + sospechosos.join("\n- ")).toLowerCase();
        //Transformación de la minuscula a Capitalized (código obtenido investigando en google)
        const buscarSospechoso = respuestaSospechoso.charAt(0).toUpperCase() + respuestaSospechoso.slice(1);

        existeSospechoso = sospechosos.includes(buscarSospechoso);

        if (existeSospechoso){
            console.log(buscarSospechoso + " si está en la lista de sospechosos");
            const posicionSospechoso = sospechosos.indexOf(buscarSospechoso);
            console.log("Es el sospechoso N°" + posicionSospechoso);

            alert("¡Tenías razón! la policía confirma que " + buscarSospechoso + " estaba usando una identidad falsa.");

            const verdaderoNombre = prompt("¿Cual crees que es el verdadero nombre?")

            sospechosos.splice(posicionSospechoso, 1, verdaderoNombre);

            alert("¡DESCUBRISTE AL LADRÓN! " + buscarSospechoso + " que en realidad se llama " + verdaderoNombre + " robó la joyería");
            
            console.log(buscarSospechoso + " cambia de nombre a: " + verdaderoNombre);
            console.log(sospechosos);
            
        } else{
            console.log(buscarSospechoso + " no está en la lista de sospechosos");
            alert("Ese nombre no está en la lista de sospechosos. Inténtalo nuevamente.");
        }

    } while(!existeSospechoso);

}

else if (confirmacion == "no") {
    alert("No te preocupes será en una próxima vez");
    console.log("No quiso jugar");
}

else {
    alert("respuesta invalida");
}