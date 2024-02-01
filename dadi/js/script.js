
// dichiariamo le nostre costanti
// prendiamo le due costanti chose e computer che ci daranno dei numeri casuali
const playElement = document.querySelector("#play")

const realoadElement = document.querySelector("#reload");

// avviamo un addeventlistener per il bottone che ci permetterà di giocare
// i numeri generati sono randomici
playElement.addEventListener("click",

    // prendiamo una funzione che si avvierà al click del pulsante
    function () {
        let computer = Math.floor(Math.random() * 6+1);

        let chose = Math.floor(Math.random() * 6+1);

        document.getElementById("chose").innerHTML = chose;

        document.getElementById("computer").innerHTML = computer;
        
        // questo if determina il rapporto tra i numeri usciti
        if (chose == computer) {
        
            document.getElementById("risultato").innerHTML = ("Pareggio");
        
        } else if (chose > computer){
            
            document.getElementById("risultato").innerHTML = ("Hai Vinto")
        
        } else {
        
            document.getElementById("risultato").innerHTML = ("Hai Perso")
        
        }

    }
)
