let totalScore = 100;  // Imposta il punteggio iniziale a 100

// Seleziona tutte le checkbox
const checkboxes = document.querySelectorAll(".score-checkbox");

// Funzione per aggiornare il punteggio totale
function updateTotalScore() {
    // Resetta il punteggio totale, mantenendo il valore di partenza (100)
    totalScore = 100;

    // Calcola il punteggio totale basandosi sui checkbox selezionati
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            // Ottieni il valore della terza cella della riga corrente
            const score = parseInt(checkbox.closest("tr").children[2].textContent, 10);
            totalScore += score;
        }
    });

    // Mostra il punteggio totale
    document.getElementById("totalScore").textContent = totalScore;
    document.getElementById("totalScoreContainer").style.display = 'block'; // Mostra il punteggio

    // Rende visibile il pulsante "Azzera"
    document.getElementById("azzeraBtn").style.display = 'inline-block';

    // Chiama la funzione per aggiornare la valutazione in base al punteggio
    updateEvaluation();
}

// Funzione per azzerare il punteggio
function resetTotalScore() {
    totalScore = 100;  // Resetta il punteggio a 100
    document.getElementById("totalScore").textContent = totalScore;
    document.getElementById("evaluation").textContent = ''; // Rimuove la valutazione

    // Nasconde il punteggio e il pulsante "Azzera"
    document.getElementById("totalScoreContainer").style.display = 'none';
    document.getElementById("azzeraBtn").style.display = 'none';

    // Deseleziona tutte le checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Rimuove la valutazione
    updateEvaluation();
}

// Funzione per aggiornare la valutazione in base al punteggio
function updateEvaluation() {
    let evaluation = '';
    let color = '';

    if (totalScore < 20) {
        evaluation = '💀🟥🟥🟥🟥🟥';
        color = '#FF0000'; // Rosso intenso
    } else if (totalScore >= 20 && totalScore <= 39) {
        evaluation = '👎🏻🟥🟥🟥🟥';
        color = '#FF4C4C'; // Rosso
    } else if (totalScore >= 40 && totalScore <= 54) {
        evaluation = '👎🏻🟥🟥🟥';
        color = '#FF7F3F'; // Arancione scuro
    } else if (totalScore >= 56 && totalScore <= 69) {
        evaluation = '👎🏻🟥🟥';
        color = '#FFA500'; // Arancione
    } else if (totalScore >= 70 && totalScore <= 84) {
        evaluation = '👎🏻🟥';
        color = '#FFFF00'; // Giallo
    } else if (totalScore >= 85 && totalScore <= 99) {
        evaluation = '🫤🟧';
        color = '#FFFF99'; // Giallo chiaro
    } else if (totalScore >= 100 && totalScore <= 114) {
        evaluation = '👍🏻🟩🟩';
        color = '#D3FFBD'; // Verde molto chiaro
    } else if (totalScore >= 115 && totalScore <= 129) {
        evaluation = '👍🏻🟩🟩🟩';
        color = '#90EE90'; // Verde chiaro
    } else if (totalScore >= 130) {
        evaluation = '💯🟩🟩🟩🟩';
        color = '#008000'; // Verde
    }

    // Imposta il colore del testo in base alla valutazione
    document.getElementById("totalScore").style.color = color;
    document.getElementById("evaluation").style.color = color;
    document.getElementById("evaluation").textContent = evaluation;
}

// Aggiungi gli event listener ai pulsanti
document.getElementById("calcolaBtn").addEventListener("click", updateTotalScore);
document.getElementById("azzeraBtn").addEventListener("click", resetTotalScore);
