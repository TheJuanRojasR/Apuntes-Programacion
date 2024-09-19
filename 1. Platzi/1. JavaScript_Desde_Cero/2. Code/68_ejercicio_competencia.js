'use strict';

// REQUERIMIENTOS
// Equipo local va ser definido como el que va primero en el array. ✅
// Siempre hay ganador y perdedor (No existen los empates). El ganador se lleva 3 puntos y el perdedor se lleva 0 puntos. ✅
// El ganador general es el que tenga mayor cantidad de puntos. ✅
// Hacer funcion que determine el ganador. ✅
    // La funcion recibe 2 parametros.✅
    // 1. competitons: Array con pares de equipos (local-visitante).Cada equipo es una cadena de texto hasta 30 caraceres. ✅
    // 2. result: Indica el ganador. Si aparece 1 significa que gano el equipo local, si aparece 0 es porque gano el equipo visitante. ✅
// Se garantiza que 1 equipo gane el torneo ✅
// Se garantiza que cada equipo compite contra los demas equipos 1 vez. ✅
// Se garantiza que cada torneo tendra al menos 2 equipos.✅

const competitionsExample = [   
    ['JavaScript', 'C'],
    ['C', 'Python'],
    ['Python', 'JavaScript']
];

const resultsExampple = [0, 0, 1];

// 1.1 Validar nombre de concursante. Tienen que tener menos de 30 caracteres.
function validateTeamNameLength ( competitions ) {
    // Recorriendo array
    for (let i = 0; i < competitions.length; i++) {
        for (let j = 0; j < competitions[i].length; j++) {
            // Verificando si los nombres son mayores a 30 caracteres.
            if (competitions[i][j].length > 30) {
                console.log(`Nombre del concursante "${competitions[i][j]}" no valido. Supera los 30 caracteres.`)
                // Si se encuentra un nombre con 30 caracteres se retorna false y se acaba el ciclo.
                return false;
            } 
        }
    }
    // Si todos los nombres estan bien se retorna true.
    return true;
}

// 1.2 Validar que haya al menos 2 concursantes.
function validateNumberOfCompetitors ( competitions ) {
    // Se utiliza set ya que solo permite datos unicos.
    const uniqueCompetitors = new Set();

    // Se usa el ciclo for...of porque podemos utilizar las palabras reservadas para los bucles.
    for (let match of competitions) {
        for (let competitor of match) {
            uniqueCompetitors.add(competitor);
            // Si ya tenemos al menos 2 competidores únicos, podemos detener la verificación.
            if (uniqueCompetitors.size >= 2) {
                console.log('Hay más de 2 competidores.');
                return true;
            }
        }
    }
    console.log('No hay competidores suficientes.');
    return false;
}

// Garantizar que cada equipo compite contra los demas equipos 1 vez.
function validateTournamentMatches ( competitions ) {
     // Se utiliza set ya que solo permite datos unicos.
    const uniqueTeams = new Set();
    const matchesMap = new Map();
    
    // Identifica los equipos unicos y los guarda en un set.
    for (let match of competitions) {
        for (let team of match) {
            uniqueTeams.add(team);
        }
    }
    
    // Inicializamos el map con los equipos unicos y el valor de de cada uno sera un set vacio.
    for (let team of uniqueTeams) {
        matchesMap.set(team, new Set());
    }
    
    // Recorre nuevamente y actualiza los sets con los equipos contrario
    for (let match of competitions) {
        let homeTeam = match[0];
        let awayTeam = match[1];
        
        // Voy a acceder a la propiedad (homeTeam) y le voy agregar(awayTeam);
        matchesMap.get(homeTeam).add(awayTeam);
        matchesMap.get(awayTeam).add(homeTeam);
    }

    // Verificando si tiene la misma cantidad de competiciones.
    const expectedMatches = uniqueTeams.size - 1;
    // Estoy practicando la desestructuracion para poner las propiedades en distintas variables.
    for (let [team, opponents] of matchesMap) {
        if ( opponents.size !== expectedMatches ) {
            console.lgo(`El equipo ${team} no ha jugando contra todos los equipos.`)
            return false;
        } 
    }
    // Retorna true si todos los equipos tienen el mismo numero de partidos.
    return true;
}

// Funcion para contar los puntos.
function calculatePoints ( competitions, result ) {
    let pointsTable = {};
    
    // Recoriendo el array.
    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];
        
        // Inicianilizando los equipos con 0 puntos. 
        // Cuando es solo una linea de ejecucion se pueden omitir los corchetes.
        if (!pointsTable[homeTeam]) pointsTable[homeTeam] = 0; // Si no existe entonces haga.
        if (!pointsTable[awayTeam]) pointsTable[awayTeam] = 0;
        
        if (result[i] === 1) pointsTable[homeTeam] += 3; 
        else pointsTable[awayTeam] += 3;
    }
    // Me retorne un objeto con lo puntos obtenidos.
    return pointsTable;
}

// Funcion para escoger al ganador.
function winnerSelect ( scoreCompetitionsObj ) {
    let maxPoints = 0;
    let candidates = [];
    
    // Recorre las propiedades del objeto
    for (let key in scoreCompetitionsObj) {
        if (scoreCompetitionsObj[key] > maxPoints) {
            maxPoints = scoreCompetitionsObj[key];
            // Reinicia la lista y le agrega el nuevo posible ganador.
            candidates = [key]; 
        // Si tiene los mismo puntos lo agrega a la lista.
        } else if (scoreCompetitionsObj[key] === maxPoints) {
            candidates.push(key); 
        }
    }
    
    // Como tiene que haber un ganador siempre. Si hay mas de un equipo con el mismo puntaje se escoge de forma Random jaja.
    if (candidates.length > 1) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        return candidates[randomIndex]; // Retorna un ganador aleatorio
    }
    
    return candidates[0]; // Retorna el único ganador posible
}

// Posibilidades
// Si uno es mayor que los otros entonces ese sera el ganador.
// Si 2 o mas empatan entonces se escogera el ganador de forma random entre los que empataron. 


// FUNCION PRINCIPAL
function chooseWinnerTournament ( competitions, results ) {
    // 1. Validar los datos de competitions.
    // 1.1 Ninguno puede sobrepasar de 30 caracteres.
    // let validName = validateTeamNameLength(competitions);
    // 1.2 Al menos tiene que haber 2 competidores.
    // let validNumberOfCompetitor = validateNumberOfCompetitors(competitions);
    // Garantizar que cada equipo compite contra los demas equipos 1 vez.
    // let validMaches = validateTournamentMatches(competitions)
    
    // Verificacion de errores
    if (!validateTeamNameLength(competitions) || !validateNumberOfCompetitors(competitions) || !validateTournamentMatches(competitions)) {
        console.error("El torneo no es valido. Por favor ingresa la informacion conforme a las reglas.");
        return null;
    }

    // Contando puntos
    let scoreMatches = calculatePoints(competitions,results)
    console.log(scoreMatches);
    // Escoger al ganador
    return winnerSelect(scoreMatches);
}

const winner = chooseWinnerTournament( competitionsExample, resultsExampple );
console.log(`El ganador es ${winner}`);

