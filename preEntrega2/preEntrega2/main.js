//alert ();

class Participante {
    constructor(nombre, apellido, email, numeroElegido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.numeroElegido = numeroElegido;
    }
}

const participantes = [];
const numerosElegidos = {};

const agregarParticipante = () => {
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const email = prompt("Ingrese su email:");
    const numeroElegido = parseInt(prompt("Elija un número del 1 al 3:"));

    const participante = new Participante(nombre, apellido, email, numeroElegido);
    participantes.push(participante);

    if (numerosElegidos[numeroElegido]) {
        numerosElegidos[numeroElegido].push(participante);
    } else {
        numerosElegidos[numeroElegido] = [participante];
    }

    if (participantes.length < 3) {
        agregarParticipante();
    } else {
        realizarSorteo();
    }
};

const realizarSorteo = () => {
    const numeroGanador = Math.floor(Math.random() * 3) + 1;
    let mensajeFinal = `El número ganador es el ${numeroGanador}. Los ganadores son: `;

    if (numerosElegidos[numeroGanador]) {
        const ganadores = numerosElegidos[numeroGanador];
        ganadores.forEach(ganador => {
            mensajeFinal += `${ganador.nombre} ${ganador.apellido} (${ganador.email}), `;
        });
        alert(mensajeFinal);
    } else {
        alert(`Nadie ganó el ${numeroGanador}° premio.`);
    }
};

agregarParticipante();
