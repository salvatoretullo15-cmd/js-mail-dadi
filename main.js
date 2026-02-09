console.log("it works");
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//numeri casuali per il player

const player_number = Math.ceil(Math.random()*6)

//numeri casuali per il computer

const pc_number = Math.ceil(Math.random()*6)

let game_message;
console.log( pc_number, player_number );

//Stabilire il vincitore, in base a chi fa il punteggio più alto

if (player_number>pc_number) {
    message="you win player , pc is a looser"
} else if (pc_number>player_number){
    message="you loose player , pc is the winner"
}else{
    message="try again player"
}
console.log(message);

    
/*
//Mail
//Crea una lista di email di invitati ad una festa
//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for
//Non è consentito usare nessun metodo proprio degli array (come includes, per esempio)
//Si può fare? Certo che si basta ragionare un po’
//Nota: 
//Non è necessario provvedere alla validazione delle email
*/


//Crea una lista di email di invitati ad una festa.
const guests = [
    "osvaldo@hotmail.com",
    "biggiogero@libero.com",
    "olindo@gmail.com",
    "damerjeffrey@hotmail.com",
    "totorina@libero.com",
    "edgain@gmail.com",
    "menedezbrother@libero.com",
]
//Chiedi all’utente la sua email,
const guest_user = prompt("type your email");

let can_access = false

//controlla che sia nella lista di chi può accedere
for (let i = 0 ; i < guests.length && !can_access; i++) {
    const guest = guests[i];
    console.log(guest);


   if (guest === guest_user) {
    can_access=true
    console.log("founded");
   }
} 

//stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for
console.log(can_access);
if(can_access === true){
    console.log("bienvenidos amigos");
}else{
    console.log("adios amigos");
}