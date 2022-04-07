let betaalwijze = document.getElementById("Betalingswijze")
let errors = []
const voornaam = document.getElementById("validateVname")
const achternaam = document.getElementById("validateFname")
const gebruiker = document.getElementById("validateGname")
const email = document.getElementById("validateEmail")
const wachtwoord = document.getElementById("validatePas")
const wactwoord2 = document.getElementById("validatePasRe")
const adres = document.getElementById("validateAdres")
const postcode = document.getElementById("validatePostcode")
const voorwaarde = document.getElementById('validateTerms')

//Deze event listeners zijn om de betaalwijze aan te passen, de button doen werken en om de provincies aan te passen bij het geselecteerd land.
document.getElementById("BankingApp").addEventListener("click", validatePayment);
document.getElementById("Overschrijving").addEventListener("click", validatePayment);
document.getElementById("VisaCard").addEventListener("click", validatePayment);
document.getElementById("Paypal").addEventListener("click", validatePayment);
document.getElementById("btnAlert").addEventListener("click", validateForm);
document.getElementById("LandSelectie").addEventListener("change", selectLand);

//In deze functie wordt de p tag van "Betalingswijze" aangepast naar de geselecteerde radio button.
function validatePayment() {
    if (document.getElementById("BankingApp").checked) {
        betaalwijze = document.getElementById("Betalingswijze").innerHTML = "Banking app"
    }

    if (document.getElementById("Overschrijving").checked) {
        betaalwijze = document.getElementById("Betalingswijze").innerHTML = "Overschrijving"
    }

    if (document.getElementById("VisaCard").checked) {
        betaalwijze = document.getElementById("Betalingswijze").innerHTML = "Visa Card"
    }

    if (document.getElementById("Paypal").checked) {
        betaalwijze = document.getElementById("Betalingswijze").innerHTML = "PayPal"
    }
}

//In deze functie wordt de lijst van provincies aangepast afhankelijk welk land je selecteert, dit wordt gedaan met drie arrays met provincie namen in en een option tag te openen de item index te loopen in een for loop en afsluiten met een option tag.
function selectLand() {
    let subjectIdNode = document.getElementById('LandSelectie');
    let value =
        subjectIdNode.options[subjectIdNode.selectedIndex].text;

    if (value == "België") {
        let bel = ["Antwerpen", "Limburg", "Oost-Vlaanderen", "Vlaams-Brabant", "Waals-Brabant", "Henegouwen", "Luik", "Luxemburg", "Namen"]

        let lijst = bel.length
        let text = "<option>"
        for (let i = 0; i < lijst; i++) {
            text += "<option>" + bel[i] + "</option>"
        }
        text += "</option>"
        document.getElementById("ProvinciesLijst").innerHTML = "<option>Kies een provincie</option>" + text
        bel = []
    }

    if (value == "Nederland") {
        let ned = ["Groningen", "Friesland", "Drenthe", "Overijssel", "Flevoland", "Gelderland", "Utrecht", "Noord-Holland", "Zuid-Holland", "Zeeland", "Noord-Brabant", "Limburg"]

        let lijst = ned.length
        let text = "<option>"
        for (let i = 0; i < lijst; i++) {
            text += "<option>" + ned[i] + "</option>"
        }
        text += "</option>"
        document.getElementById("ProvinciesLijst").innerHTML = "<option>Kies een provincie</option>" + text
        ned = []
    }

    if (value == "Luxemburg") {
        let lux = ["Diekirch", "Grevenmacher", "Luxemburg"]

        let lijst = lux.length
        let text = "<option>"
        for (let i = 0; i < lijst; i++) {
            text += "<option>" + lux[i] + "</option>"
        }
        text += "</option>"
        document.getElementById("ProvinciesLijst").innerHTML = "<option>Kies een provincie</option>" + text
        lux = []
    }

    if (value == "Kies een land") {
        document.getElementById("ProvinciesLijst").innerHTML = "<option>Kies een provincie</option>"
    }
}

//Deze functie zorgt voor e-mail validatie dit wordt met regex gedaan, en checkt of de e-mail meer dan een karakter bevat.
function ValidateEmail() {
    if (email.value != "") {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.value.length <= 1) {
            errors.push('E-mailadres moet meer dan een karakter langzijn.')
        } else {
            if (email.value.match(validRegex)) {
                return true;
            } else {
                return errors.push('E-mailaders is niet correct.');
            }
        }
    }
}

//Deze functie controleert dat de wachtwoord meer dan acht karakters bevat en dat de twee wachtwoorden overeen komen.
function validateWachtwoorden() {
    if (wachtwoord.value != "") {
        if (wachtwoord.value.length < 8) {
            errors.push('Wachtwoord moet minstens 8 karakters lang zijn.')
        }
        if (wactwoord2.value != wachtwoord.value) {
            errors.push('Wachtwoorden komen niet overeen.')
        }
    }
}

//Deze functie controleert dat de postcode tussen de 1000 en 9999 zit.
function checkPC() {
    if (postcode.value > 9999 || postcode.value < 1000) {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.")
    }
}

//Deze functie controleert dat al de velden ingevuld zijn en dat er een land en provincie geselecteerd is, en dat de Algemene voorwaarden aangevinkt is.
function checkEmptyField() {
    if (voornaam.value == "") {
        errors.push('Vul uw voornaam in.')
    }
    if (achternaam.value == "") {
        errors.push('Vul uw achternaam in.')
    }
    if (gebruiker.value == "") {
        errors.push('Vul uw gebruikernaam in.')
    }
    if (email.value == "") {
        errors.push('Geef uw e-mailadres in.')
    }
    if (wachtwoord.value == "") {
        errors.push('Geef een wachtwoord in.')
    }
    if (wactwoord2.value == "") {
        errors.push('Geef een tweede wachtwoord in.')
    }
    if (adres.value == "") {
        errors.push('Geef een adres in.')
    }
    if (postcode.value == "") {
        errors.push('Het veld postcode is vereist.')
    }
    let subjectIdNode = document.getElementById('LandSelectie');
    let land = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    if (land == "Kies een land") {
        errors.push("Selecteer een geldig land.")
    }
    let subjectIdNode2 = document.getElementById('ProvinciesLijst');
    let provincie = subjectIdNode2.options[subjectIdNode2.selectedIndex].text;
    if (provincie == "Kies een provincie") {
        errors.push("Selecteer een geldig provincie.")
    }
    if (voorwaarde.checked) {
        let waarde = true
    } else {
        errors.push("Algemene voorwaarden moet geaccepteerd worden.")
    }
}

//Deze functie toont de alert boxen na dat de gebruiker de button "indienen" aan clickt, dit wordt gedaan met de html elementen "visually-hidden" te verwijderen en de arrays in p tag te zetten.
function validateForm() {
    ValidateEmail()
    validateWachtwoorden()
    checkEmptyField()
    checkPC()
    if (errors.length > 0) {
        document.getElementById("Alert").setAttribute("class", "alert alert-danger");
        document.getElementById("correct").setAttribute("class", "alert alert-success visually-hidden");
        document.getElementById("betaal").setAttribute("class", "alert alert-info visually-hidden");
        let lijst = errors.length
        let text = "<p>"
        for (let i = 0; i < lijst; i++) {
            text += "<p>" + errors[i] + "</p>"
        }
        text += "</p>"
        document.getElementById("foutMelding").innerHTML = text
        errors = []
    } else {
        document.getElementById("Alert").setAttribute("class", "alert alert-danger visually-hidden");
        document.getElementById("correct").setAttribute("class", "alert alert-success");
        document.getElementById("betaal").setAttribute("class", "alert alert-info");
    }
}