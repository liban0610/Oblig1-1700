    let objArray = [];


document.getElementById('ticketForm').onsubmit = function(event) {
    event.preventDefault();
        if (validateForm()){
          addToArray();
          clearForm();
        }
};

function validateForm() {
    // Validerer at alle feltene i skjemaet er fylt ut
    let inputs = document.querySelectorAll('#ticketForm input, #ticketForm select');
    for (let input of inputs) {
        if (input.value === '') {
            alert('Vennligst fyll ut alle feltene.');
            return false;
        }
    }
    return true;
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
    // Tømmer tabellen utenom header row
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
