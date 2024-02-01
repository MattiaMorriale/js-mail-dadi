// dobbiamo chiedere all'utente la sua email..
const submitElement = document.querySelector("#submit");
// dopo che lui ci da la sua mail attraverso un form,controlliamo se lui è già registrato
const inmailElement = document.querySelector("#inmail");

const avantiElement = document.querySelector("#avanti");

const registratiElement = document.querySelector("#registrati");

submitElement.addEventListener("click", 
    function (){
        let mails = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

        let verifica = false;

        // si controlla attraverso un for se è presente in un arrey la sua mail 
        for (let i = 0; i < mails.length ; i++){
            console.log(mails[i])

            if (inmailElement.value === mails[i]){

                verifica = true;

            }
        }

        if (verifica) {

            document.getElementById("emailsuccess").innerHTML = ("La tua E-mail è presente nel nostro cloud")
            
            avantiElement.style.display = "block"

            submitElement.style.display = "none"

        } else {
            // la sua mail non sarà disponibile, e quindi apparirà un bottone che gli permetterà di registrarsi
            document.getElementById("emailerror").innerHTML = ("La tua E-mail non è stata trovata, prego registrati")

            registratiElement.style.display = "block"

            submitElement.style.display = "none"

        }
    }
)


