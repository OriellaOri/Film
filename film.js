// salvo nome utente inserito nel form nel localstorage
// con conferma iscrizione
function save() {
    //prendo il nome tramite id 
    var nome = document.getElementById('name').value;
    //lo salvo nello storage
    localStorage.setItem('name', nome);

    // mando messaggio di iscrzione
    alert('Iscrizione avvenulta. Benvenut* ' + nome);

    //ricarico la pagina
    onload();
}

//controllo utente inserito nome
function check() {
    //recupero il nome dallo storage
    var nome = localStorage.getItem('name');
    // se l'utente c'è visualizzo il bottone unsub
    if (nome !== null) {
        change();
    }
    else {
        //seno recupero il tasto UNSUB e lo faccio sparire
        let subBtn = document.getElementById('btnunsub');
        subBtn.style.display = "none";
    }
}

// se l'utente non è nullo
// scomprare il SUB e comprare il UNSUB
function change() {

    //Recupero il tasto sub e lo faccio sparire
    let subBtn = document.getElementById('btnsub');
    subBtn.style.display = "none";

    //Recupero il tasto unsb e lo faccio comprarire
    let unsubBtn = document.getElementById('btnunsub');
    unsubBtn.style.display = "";
}

// se uno vuole disiscriversi 
function cancella() {
    //recupero il bottone di iscrizione
    var iscriviti = document.getElementById('btnsub');
    //recupero bottine per cancellarsi
    var cancellati = document.getElementById('btnunsub');
    //se il nome nello storage non è nullo
    if (localStorage.getItem('name') !== null) {

        //Rivisualizzo la form
        let loginForm = document.getElementById('formnews');
        loginForm.style.display = '';

        //Scompare il pulsante per canellarsi 
        cancellati.style.display = "none";

        //Ricompare quello per subscrive
        iscriviti.style.display = "";

        //Pulisco il local storage
        localStorage.clear();

        alert('Cancellazione avvenuta');  
    }
    onload();
}

// messaggio di benventuo nella home
function ciao() {
    //recupero il nome dallo storage 
    var nomeUser = localStorage.getItem('name');
    // se è nullo alert di benveuto generico 
    if (nomeUser === null) {
        alert('Benvenut*! Iscriviti alla Newsletter!');
    } else {
        // se no saluto personalizzato
        alert('Ciao ' + nomeUser + '!');
    }
}

//controllo per attivare il bottone SUB
function controllo(name) {
    // prendo il bottone del SUB
    var btnSubmit = document.getElementById("btnSubmit");

    // se il valore del name è vuoto 
    if (name.value.trim() != ""){
        // imposto il valore del disabilitato su FALSO 
        btnSubmit.disabled = false;
    }
    else {
        //Se è vuoto lo disabilito 
        btnSubmit.disabled = true;
    }
}