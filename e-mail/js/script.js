// dobbiamo chiedere all'utente la sua email..
const inmailElement = document.querySelector("#inmail");
let mails = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

const submitElement = document.querySelector("#submit");

submitElement.addEventListener("click", 
    function (){
        for (let i = 0; i < mails.length ; i++){
            console.log(mails[i])
        }
    }
)
// dopo che lui ci da la sua mail attraverso un form,controlliamo se lui è già registrato
// si controlla attraverso un for se è presente in un arrey la sua mail 
// la sua mail non sarà disponibile, e quindi apparirà un bottone che gli permetterà di registrarsi