const choseElement = document.querySelector("#chose");

const playElement = document.querySelector("#play")

const computer = Math.floor(Math.random() * 6+1);

const finalCElement = document.querySelector("#finalC")


playElement.addEventListener("click",

    function () {
        let valore_scelta_utente =choseElement.value;
        finalCElement.innerHTML = valore_scelta_utente;

        document.getElementById("computer").innerHTML = computer;
    
        if (valore_scelta_utente == computer) {
        
            document.getElementById("risultato").innerHTML = ("Pareggio");
        
        } else if (valore_scelta_utente > computer){
            
            document.getElementById("risultato").innerHTML = ("Hai Vinto")
        
        } else {
        
            document.getElementById("risultato").innerHTML = ("Hai Perso")
        
        }

    }
)
