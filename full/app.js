var express = require('express');
var app = express();

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug'); //Dico a express di usare pug come motore di template
app.use(express.static(__dirname)); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
    res.render('../index', {
        titolo: "HOME",
        sottotitolo: 'Benvenuto nella scuola di guida!',
        servizi: [
            'Rinnovo patente con visita medica in sede',
            'Conversioni di patenti militari',
            'Patente internazionale',
            'Prenotazione revisione',
            'Duplicato della patente (per smarrimento, furto, deterioramento)',
            'Conversioni di patenti estere'
        ],
        links: [
            {link: "/info", nome: 'Patenti'},
            {link: "/contacts", nome: 'Contatti'}
        ]
    }); //Dico a express di processare e inviare la pagina index.pug
});
app.get('/info', function (req, res) {
    res.render('../info', {
        titolo: "PATENTI",
        sottotitolo: 'Ecco la lista delle patenti disponibili:',
        patenti: [
            {nome: 'Patente AM', descrizione: 'Ciclomotori a due ruote (categoria L1e), veicoli a tre ruote (categoria L2e)'},
            {nome: 'Patente A1', descrizione: 'Motocicli di cilindrata massima di 125 cm³'},
            {nome: 'Patente B', descrizione: 'Autoveicoli la cui massa massima autorizzata non supera 3500 kg.'},
            {nome: 'Patente C1', descrizione: 'Autoveicoli diversi da quelli delle categorie D1 o D'},
            {nome: 'Patente D', descrizione: 'Autoveicoli progettati e costruiti per il trasporto di più di otto persone'}
        ]
    }); //Dico a express di processare e inviare la pagina index.pug
});
app.get('/contacts', function (req, res) {
    res.render('../contacts', {
        titolo: "CONTATTI",
        values: [
            {nome: 'Telefono', valore: '3458671298'},
            {nome: 'Email', valore: 'patentipotenti@gmail.com'},
            {nome: 'Indirizzo', valore: 'viale degli automobilisti, 12'},
        ]
    }); //Dico a express di processare e inviare la pagina index.pug
});

app.listen(3000, function () {});