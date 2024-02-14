const billetter=[];

function kjopBillett(){

    const film=document.getElementById("slctFilm");
    const antall=document.getElementById("inpAntall");
    const fornavn=document.getElementById("inpFornavn");
    const etternavn=document.getElementById("inpEtternavn");
    const tlfnr=document.getElementById("inpTelefonnr");
    const epost=document.getElementById("inpEpost");

    let feilFilm=document.getElementById("nullFilm");
    let feilAntall=document.getElementById("nullAntall");
    let feilFornavn=document.getElementById("nullFornavn");
    let feilEtternavn=document.getElementById("nullEtternavn");
    let feilTlfnr=document.getElementById("nullTelefonnr");
    let feilEpost=document.getElementById("nullEpost");


    const filmer=document.getElementById("tblFilmer");

    const sjekkTlfnr = Number(tlfnr.value);



    if (film.value === "Velg Film") {
        feilFilm.innerHTML = "Du må velge en film";

    }

     if (antall.value === "") {
        feilAntall.innerHTML = "Du må skrive noe i antall";


    }

    if (fornavn.value === "") {
        feilFornavn.innerHTML = "Du må skrive noe i fornavn";


    }

    if (etternavn.value === "") {
        feilEtternavn.innerHTML = "Du må skrive noe i etternavn";


    }

    if (isNaN(sjekkTlfnr)) {
        feilTlfnr.innerHTML = "Du må skrive inn tall i tlfnr ";


    }

     if (tlfnr.value === "") {
        feilTlfnr.innerHTML = "Du må skrive noe i telefonnummer, og ";


    }

     if (tlfnr.value.length !== 8) {
        feilTlfnr.innerHTML += "Du må skrive et telefonnummer med 8 siffer";

    }


    if (epost.value === "") {
        feilEpost.innerHTML = "Du må skrive noe i Epost";

    }
    else {
        billetter.push({
            Film: film.value,
            Antall: antall.value,
            Fornavn: fornavn.value,
            Etternavn: etternavn.value,
            Telefonnr: tlfnr.value,
            Epost: epost.value
        });

        filmer.innerHTML = "<tr><th>Film</th>" + "<th>Antall</th>" + "<th>Fornavn</th>" + "<th>Etternavn</th>" + "<th>Telefonnummer</th>" + "<th>Epost</th></tr>";

        for (let i = 0; i < billetter.length; i++) {
            filmer.innerHTML += "<tr><td>" + billetter[i].Film + "</td><td>" + billetter[i].Antall + "</td><td>" + billetter[i].Fornavn + "</td><td>" + billetter[i].Etternavn + "</td><td>" + billetter[i].Telefonnr + "</td><td>" + billetter[i].Epost + "</td></tr>";
        }


    }
    if (film.value !=="Velg Film"){
        feilFilm.innerHTML="";
    }
    if (antall.value !==""){
        feilAntall.innerHTML="";
    }
    if (fornavn.value !==""){
        feilFornavn.innerHTML="";
    }
    if(etternavn.value !=="") {
        feilEtternavn.innerHTML = "";
    }

    if(tlfnr.value !=="" && tlfnr.value.length==8){
        feilTlfnr.innerHTML="";
    }
    if(epost.value !==""){
        feilEpost.innerHTML="";
    }
    film.value="Velg Film";
    antall.value="";
    fornavn.value="";
    etternavn.value="";
    tlfnr.value="";
    epost.value="";


}

const filmer=document.getElementById("tblFilmer");
filmer.innerHTML="";


function slettBillett(){
    const filmer=document.getElementById("tblFilmer");

    billetter.splice(0,billetter.length);
    filmer.innerHTML="";


}
