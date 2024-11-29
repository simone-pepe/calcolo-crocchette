function scrollToResult() {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.scrollIntoView({ behavior: 'smooth' }); // Scorrimento fluido verso il div
    }
}

function toggleInputMethod() {
    const metodoInput = document.getElementById('metodoInput').value;
    const kcalInput = document.getElementById('kcalPerKg');
    const proteineInput = document.getElementById('proteine');
    const grassiInput = document.getElementById('grassi');
    const carboidratiInput = document.getElementById('carboidrati');

    // Seleziona tutte le etichette per carboidrati
    const carboidratiLabels = document.querySelectorAll('label[for="carboidrati"]');
    const proteineLabel = document.querySelector('label[for="proteine"]');
    const grassiLabel = document.querySelector('label[for="grassi"]');
    const kcalLabel = document.querySelector('label[for="kcalPerKg"]');

    if (metodoInput === 'kcal') {
        kcalInput.disabled = false;
        proteineInput.disabled = true;
        grassiInput.disabled = true;
        carboidratiInput.disabled = true;

        // Mostra solo il campo per le kcal e nasconde gli altri
        kcalInput.style.display = 'block';  // Assicurati che il campo kcal sia visibile
        proteineInput.style.display = 'none';  // Nasconde il campo proteine
        grassiInput.style.display = 'none';   // Nasconde il campo grassi
        carboidratiInput.style.display = 'none';  // Nasconde il campo carboidrati
        
        proteineLabel.style.display = 'none';   // Nasconde l'etichetta proteine
        grassiLabel.style.display = 'none';     // Nasconde l'etichetta grassi
        // Nascondi tutte le etichette di carboidrati
        carboidratiLabels.forEach(label => label.style.display = 'none');
        kcalLabel.style.display = 'block';     // Mostra l'etichetta per kcal
    } else {
        // Mostra i campi per proteine, grassi e carboidrati e nasconde le kcal
        kcalInput.disabled = true;
        proteineInput.disabled = false;
        grassiInput.disabled = false;
        carboidratiInput.disabled = false;

        kcalInput.style.display = 'none';    // Nasconde il campo kcal
        proteineInput.style.display = 'block';  // Mostra il campo proteine
        grassiInput.style.display = 'block';   // Mostra il campo grassi
        carboidratiInput.style.display = 'block';  // Mostra il campo carboidrati
        
        proteineLabel.style.display = 'block';   // Mostra l'etichetta proteine
        grassiLabel.style.display = 'block';     // Mostra l'etichetta grassi
        // Mostra tutte le etichette di carboidrati
        carboidratiLabels.forEach(label => label.style.display = 'block');
        kcalLabel.style.display = 'none';    // Nasconde l'etichetta per kcal
    }


}


function toggleInfoSection() {
    const infoSection = document.getElementById('infoSection');
    infoSection.style.display = infoSection.style.display === 'block' ? 'none' : 'block';
}

 document.getElementById('foodCalculatorForm').addEventListener('submit', function(event) {
event.preventDefault();

const pesoIdeale = parseFloat(document.getElementById('pesoIdeale').value);
const nomeDoggo = document.getElementById('nomeDoggo').value;
const metodoInput = document.getElementById('metodoInput').value;
let calorieCrocchette;

if (metodoInput === 'kcal') {
calorieCrocchette = parseFloat(document.getElementById('kcalPerKg').value);
} else {
    const proteine = parseFloat(document.getElementById('proteine').value);
    const grassi = parseFloat(document.getElementById('grassi').value);
    const carboidrati = parseFloat(document.getElementById('carboidrati').value);
    // Calcolo corretto delle kcal per kg
    const kcalPer100g = (proteine * 4) + (grassi * 9) + (carboidrati * 4);
    calorieCrocchette = kcalPer100g * 10;
}


// Calcolo delle calorie giornaliere basato sul peso ideale
const rer = 70 * Math.pow(pesoIdeale, 0.75);
let fabbisognoCalorico = rer * 1.3; // Fattore di attività medio (1.3)

// Considerare il fattore di attività
const attivita = parseFloat(document.getElementById('attività').value);
fabbisognoCalorico *= attivita;

// Considerare il fattore di razza
const razzaIncline = parseFloat(document.getElementById('razzaIncline').value);
fabbisognoCalorico *= razzaIncline;


// Considerare la sterilizzazione (ridurre le calorie del 10% se sterilizzato)
const sterilizzato = document.getElementById('sterilizzato').value === 'true';
if (sterilizzato) {
fabbisognoCalorico *= 0.9; // Ridurre del 10% se sterilizzato
}

// Considerare la condizione fisica
const condizioneFisica = document.getElementById('condizioneFisica').value;
if (condizioneFisica === 'sottopeso') {
fabbisognoCalorico *= 1.1; // Aumentare il fabbisogno calorico del 10% se sottopeso
} else if (condizioneFisica === 'sovrappeso') {
fabbisognoCalorico *= 0.9; // Ridurre del 10% se sovrappeso
}

// Considerare le condizioni mediche (esempio: obesità riduce le calorie)
const condizioniMediche = document.getElementById('condizioniMediche').value;
if (condizioniMediche === 'obesità') {
fabbisognoCalorico *= 0.8; // Ridurre del 20% in caso di obesità
} else if (condizioniMediche === 'diabete') {
fabbisognoCalorico *= 0.9; // Ridurre del 10% in caso di diabete
}

// Considerare la fase di vita
const faseVita = document.getElementById('faseVita').value;
if (faseVita === 'cucciolo') {
fabbisognoCalorico *= 1.5; // Aumentare del 50% se cucciolo
} else if (faseVita === 'anziano') {
fabbisognoCalorico *= 0.8; // Ridurre del 20% se anziano
}

// Considerare la temperatura ambientale
const temperatura = parseFloat(document.getElementById('temperatura').value);
if (temperatura < 10) {
fabbisognoCalorico *= 1.15; // Aumentare del 15% se la temperatura è inferiore a 10°C
} else if (temperatura > 30) {
fabbisognoCalorico *= 0.9; // Ridurre del 10% se la temperatura è superiore a 30°C
}

// Calcolare la quantità di crocchette per giorno
const crocchettePerGiorno = (fabbisognoCalorico / calorieCrocchette) * 1000;
const duePastiAlGiorno = crocchettePerGiorno / 2;
const trePastiAlGiorno = crocchettePerGiorno / 3;

// Mostrare il risultato
document.getElementById('result').innerHTML  = `${nomeDoggo} dovrebbe mangiare circa <p style="font-size: 23px!important; color: #b57fdb!important;">${crocchettePerGiorno.toFixed(0)}g </p> di crocchette al giorno.`;
document.getElementById('result').style.display = 'block';

document.getElementById('pasti').innerHTML  = `2 pasti da <p style="font-size: 23px!important; color: #b57fdb!important;">${duePastiAlGiorno.toFixed(0)}g</p><br>
                                           3 pasti da <p style="font-size: 20px!important; color: #b57fdb!important;">${trePastiAlGiorno.toFixed(0)}g</p>`;
document.getElementById('pasti').style.display = 'block';

document.getElementById('additionalInfo').innerHTML = `il Fabbisogno Energetico di ${nomeDoggo} è <br> <p style="font-size: 23px!important; color: #b57fdb!important;">${fabbisognoCalorico.toFixed(0)} kcal / giorno</p>`;
document.getElementById('additionalInfo').style.display = 'block';

document.getElementById('sources').style.display = 'block';
scrollToResult();
});

// Inizializzazione della scelta del metodo
toggleInputMethod();
scrollToResult();
