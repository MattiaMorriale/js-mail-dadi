// dobbiamo chiedere all'utente la sua email..
const submitElement = document.querySelector("#submit");

const inmailElement = document.querySelector("#inmail");

submitElement.addEventListener("click", 
    function (){
        let mails = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

        let verifica = false;

        for (let i = 0; i < mails.length ; i++){
            console.log(mails[i])

            if (inmailElement === mails[i]){

                verifica = true;

            }
        }

        if (verifica) {

            document.getElementById("emailsuccess").innerHTML = ("La tua E-mail è presente nel nostro cloud")

        } else {

            document.getElementById("emailsuccess").innerHTML = ("La tua E-mail non è stata trovata, prego registrati")

        }
    }
)
// dopo che lui ci da la sua mail attraverso un form,controlliamo se lui è già registrato
// si controlla attraverso un for se è presente in un arrey la sua mail 
// la sua mail non sarà disponibile, e quindi apparirà un bottone che gli permetterà di registrarsi