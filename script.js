    let objArray = [];


document.getElementById('ticketForm').onsubmit = function(event) {
    event.preventDefault();
        if (validateForm()){
          addToArray();
          clearForm();
        }
};

    function validateForm() {
        let isValid = true;
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let regexPhone = /^[0-9]{8}$/;

        document.querySelectorAll('#ticketForm input, #ticketForm select').forEach(function(input) {
            // Fjern tidligere satt 'invalid' klasse
            input.classList.remove('invalid');

            // Sjekk for tomt felt
            if (!input.value) {
                input.classList.add('invalid');
                isValid = false;
            }

            // Sjekk for gyldig e-post
            if (input.type === "email" && !regexEmail.test(input.value)) {
                input.classList.add('invalid');
                isValid = false;
            }

            // Sjekk for gyldig telefonnummer
            if (input.id === "tlf" && !regexPhone.test(input.value)) {
                input.classList.add('invalid');
                isValid = false;
            }
        });

        return isValid;
    }


function addToArray(){
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let tlf = document.getElementById("tlf").value;
    let epost = document.getElementById("epost").value;
    let film = document.getElementById("velgFilm").value;
    let antall = document.getElementById("antall").value;

    objArray.push({fornavn, etternavn, tlf, epost, film, antall});
    populateHTML();
}

function populateHTML(){
    let table = document.getElementById("ticketsTable");
    // Clear the table except for the header row
    table.innerHTML = table.rows[0].outerHTML;
    objArray.forEach(function(billett) {
        let row = table.insertRow();
        row.insertCell().textContent = billett.film;
        row.insertCell().textContent = billett.antall;
        row.insertCell().textContent = billett.fornavn;
        row.insertCell().textContent = billett.etternavn;
        row.insertCell().textContent = billett.tlf;
        row.insertCell().textContent = billett.epost;
    });
}

function clearForm() {
    // Tømmer alle inputfeltene etter innsendelse
    document.getElementById("ticketForm").reset();
}

function slettBilletter(){
    objArray = [];
    populateHTML();
}
