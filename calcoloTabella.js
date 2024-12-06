let totalScore = 100; // Imposta il punteggio iniziale a 100

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
      debugger;
      if (checkbox.closest("tr").cells.length == 3) {
        var score = parseInt(
          checkbox.closest("tr").children[1].textContent,
          10
        );
      } else {
        var score = parseInt(
          checkbox.closest("tr").children[2].textContent,
          10
        );
      }

      totalScore += score;
    }
  });

  // Mostra il punteggio totale
  document.getElementById("totalScore").textContent = totalScore;
  document.getElementById("totalScoreContainer").style.display = "block"; // Mostra il punteggio
  document.getElementById("saveContainer").style.display = "block";

  // Rende visibile il pulsante "Azzera"
  document.getElementById("azzeraBtn").style.display = "inline-block";

  // Chiama la funzione per aggiornare la valutazione in base al punteggio
  updateEvaluation();
}

// Funzione per azzerare il punteggio
function resetTotalScore() {
  totalScore = 100; // Resetta il punteggio a 100
  document.getElementById("totalScore").textContent = totalScore;
  document.getElementById("evaluation").textContent = ""; // Rimuove la valutazione

  // Nasconde il punteggio e il pulsante "Azzera"
  document.getElementById("totalScoreContainer").style.display = "none";
  document.getElementById("saveContainer").style.display = "none";
  document.getElementById("azzeraBtn").style.display = "none";

  // Deseleziona tutte le checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Rimuove la valutazione
  updateEvaluation();
}

// Funzione per aggiornare la valutazione in base al punteggio
function updateEvaluation() {
  let evaluation = "";
  let color = "";

  if (totalScore < 20) {
    evaluation = "Inadatto<br> ⬛⬛⬛⬛⬛";
    color = "black"; // Rosso intenso
  } else if (totalScore >= 20 && totalScore <= 39) {
    evaluation = "Molto povero<br>🟥🟥🟥🟥";
    color = "#FF4C4C"; // Rosso
  } else if (totalScore >= 40 && totalScore <= 54) {
    evaluation = "Povero<br>🟥🟥🟥";
    color = "#FF7F3F"; // Arancione scuro
  } else if (totalScore >= 56 && totalScore <= 69) {
    evaluation = "Nella media<br>🟧🟧";
    color = "#FFA500"; // Arancione
  } else if (totalScore >= 70 && totalScore <= 84) {
    evaluation = "Sufficiente<br>🟨";
    color = "#FFFF00"; // Giallo
  } else if (totalScore >= 85 && totalScore <= 99) {
    evaluation = "Discreto<br>🟨🟨";
    color = "#FFFF99"; // Giallo chiaro
  } else if (totalScore >= 100 && totalScore <= 114) {
    evaluation = "Buono<br>🟩🟩🟩";
    color = "#D3FFBD"; // Verde molto chiaro
  } else if (totalScore >= 115 && totalScore <= 129) {
    evaluation = "Ottimo<br>🟩🟩🟩🟩";
    color = "#90EE90"; // Verde chiaro
  } else if (totalScore >= 130) {
    evaluation = "Qualità Top<br>🟪🟪🟪🟪🟪";
    color = "#64249b"; // Verde
  }

  if (color == 'black'){
    document.getElementById("totalScore").style.color = color;
  document.getElementById("evaluation").style.color = color;

  document.getElementById("evaluation").style.textShadow = '0 0 1px white, 0 0 2px white, 0 0 3px white';
  document.getElementById("totalScore").style.textShadow = '0 0 1px white, 0 0 2px white, 0 0 3px white';
  }else{
    document.getElementById("totalScore").style.color = color;
  document.getElementById("evaluation").style.color = color;
  }
  // Imposta il colore del testo in base alla valutazione
  
  document.getElementById("evaluation").innerHTML = evaluation;
}

function toggleInfo(id) {
  var info = document.getElementById(id);
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "table-row"; // Mostra il contenuto
  } else {
    info.style.display = "none"; // Nasconde il contenuto
  }
}

function toggleIcon(link) {
  // Cambia il contenuto del link da "❓" a "➖"
  if (link.innerHTML === "❓") {
    link.innerHTML = "➖";
  } else {
    link.innerHTML = "❓";
  }
}

// Aggiungi gli event listener ai pulsanti
document
  .getElementById("calcolaBtn")
  .addEventListener("click", updateTotalScore);
document.getElementById("azzeraBtn").addEventListener("click", resetTotalScore);

// Seleziona tutte le checkbox con il nome 'proteine'
const checkboxesProteine = document.querySelectorAll('input[name="proteine"]');

// Aggiungi l'evento di selezione/deselezione per 'proteine'
checkboxesProteine.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesProteine.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'grassi'
const checkboxesGrassi = document.querySelectorAll('input[name="grassi"]');

// Aggiungi l'evento di selezione/deselezione per 'grassi'
checkboxesGrassi.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesGrassi.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'ceneri'
const checkboxesCeneri = document.querySelectorAll('input[name="ceneri"]');

// Aggiungi l'evento di selezione/deselezione per 'ceneri'
checkboxesCeneri.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesCeneri.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'fibre'
const checkboxesFibre = document.querySelectorAll('input[name="fibre"]');

// Aggiungi l'evento di selezione/deselezione per 'fibre'
checkboxesFibre.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesFibre.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'calciofosforo'
const checkboxesCalciofosforo = document.querySelectorAll(
  'input[name="calciofosforo"]'
);

// Aggiungi l'evento di selezione/deselezione per 'calciofosforo'
checkboxesCalciofosforo.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesCalciofosforo.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'omega'
const checkboxesOmega = document.querySelectorAll('input[name="omega"]');

// Aggiungi l'evento di selezione/deselezione per 'omega'
checkboxesOmega.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesOmega.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'minerali'
const checkboxesMinerali = document.querySelectorAll('input[name="minerali"]');

// Aggiungi l'evento di selezione/deselezione per 'minerali'
checkboxesMinerali.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesMinerali.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Seleziona tutte le checkbox con il nome 'vitamine'
const checkboxesVitamine = document.querySelectorAll('input[name="vitamine"]');

// Aggiungi l'evento di selezione/deselezione per 'vitamine'
checkboxesVitamine.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxesVitamine.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});
