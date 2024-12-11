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

  if (color == "black") {
    document.getElementById("totalScore").style.color = color;
    document.getElementById("evaluation").style.color = color;

    document.getElementById("evaluation").style.textShadow =
      "0 0 1px white, 0 0 2px white, 0 0 3px white";
    document.getElementById("totalScore").style.textShadow =
      "0 0 1px white, 0 0 2px white, 0 0 3px white";
  } else {
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

//---------------------------------GESTIONE BACKEND------------------------------//

// Crea il client di Supabase
const supabasePublicClient = supabase.createClient(
  "https://awtfgmsrjwkxewhzmwib.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dGZnbXNyandreGV3aHptd2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0Mzg3MjMsImV4cCI6MjA0OTAxNDcyM30.6MKqUUTA8OJa_uBtia_x12dVQs6ILz6CaBl63XrLkWM",
  { db: { schema: "public" } }
);

// Aggiungi l'evento click al pulsante Salva
document.getElementById("salvaPappa").addEventListener("click", function (e) {
  e.preventDefault(); // Previene il comportamento di default (anche se non è un form)

  // Raccogli i dati dai campi
  var marca = document.getElementById("marca").value;
  var tipo = document.getElementById("nomePappa").value;
  var punteggio = parseInt(document.getElementById("totalScore").innerText, 10); // Assicurati che l'input per "punteggio" esista
  var inseritoDa = document.getElementById("inseritoDa").value;

  // Esegui la funzione per inserire i dati
  inserisciMangime(inseritoDa, marca, punteggio, tipo);
  setTimeout(() => {
    popolaTabella();
  }, 1000);
});

// Funzione per inserire i dati nella tabella MANGIMI
async function inserisciMangime(inserito_da, marca, punteggio, tipo) {
  var { data, error } = await supabasePublicClient.rpc("insert_mangimi", {
    inserito_da,
    marca,
    punteggio,
    tipo,
  });

  if (error) {
    console.error("Errore durante l'inserimento:", error);
    return null; // Ritorna null in caso di errore
  } else {
    console.log("Dati inseriti con successo:", data);
    if (data) {
      const idCrocchetta = data; // Supponendo che la risposta contenga l'ID della crocchetta
      // Ora inseriamo i parametri selezionati nella tabella PARAMETRI_MANGIMI
      await inserisciParametriMangimi(idCrocchetta);
    } else {
      console.error("Nessun ID restituito dalla funzione RPC");
      return null;
    }
  }
}

// Funzione per inserire i parametri nella tabella PARAMETRI_MANGIMI
async function inserisciParametriMangimi(idCrocchetta) {
  // Raccogliamo tutti i parametri selezionati (checkbox selezionate)
  const parametriSelezionati = [];
  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((checkbox) => {
      parametriSelezionati.push(checkbox.dataset.parametro); // Aggiungiamo il parametro associato alla checkbox
    });

  // Chiamata alla funzione SQL per inserire i parametri
  var { data, error } = await supabasePublicClient.rpc(
    "inserisciparametrimangimi",
    {
      id_crocchetta: idCrocchetta,
      parametri: parametriSelezionati,
    }
  );

  if (error) {
    console.error("Errore durante l'inserimento dei parametri:", error);
  } else {
    console.log("Parametri inseriti con successo:", data);
  }
}

// Funzione per popolare la tabella
async function popolaTabella() {
  const supabasePublicClient = supabase.createClient(
    "https://awtfgmsrjwkxewhzmwib.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dGZnbXNyandreGV3aHptd2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0Mzg3MjMsImV4cCI6MjA0OTAxNDcyM30.6MKqUUTA8OJa_uBtia_x12dVQs6ILz6CaBl63XrLkWM",
    { db: { schema: "public" } }
  );

  const { data, error } = await supabasePublicClient
    .from("MANGIMI")
    .select("*")
    .order("VERIFICATO", { ascending: true }) // Prima quelli non verificati/nulli
    .order("PUNTEGGIO", { ascending: false }); // Poi per punteggio decrescente

  if (error) {
    console.error("Errore durante il recupero dei dati:", error);
    return;
  }

  const tableBody = document.querySelector("#MangimiAnalizzati tbody");
  tableBody.innerHTML = ""; // Pulisce la tabella
  window.tabellaDati = data;
  // Itera sui dati per popolare la tabella
  data.forEach((data) => {
    const formattedDate = formatDate(data.INSERITO_IL); // Formatta la data
    const rowClass = getRowClass(data.VERIFICATO, data.PUNTEGGIO); // Ottieni la classe per la riga
    const valutazione = getValutazione(data.PUNTEGGIO); // Ottieni la valutazione
    const verificato =
      data.VERIFICATO === true ? "✅" : data.VERIFICATO === false ? "🔴" : "🕒";

    const row = `
                  <tr class="${rowClass}" id="row-${data.ID}">
                <td>${data.MARCA}</td>
                <td>${data.TIPO}</td>
                <td><b>${data.PUNTEGGIO}</b></td>
                <td><p style="font-size: 0.5rem;display:ruby-text;">${valutazione}</p></td>
                <td><p style="font-size: 0.65rem!important;">${data.INSERITO_DA}</p><p style="font-size: 0.65rem;">${formattedDate}</p></td>
                <td>${verificato}</td>
                <td onclick="mostraDettagli(${data.ID})" style="cursor: pointer;">🔍</td>
            </tr>`;
    tableBody.innerHTML += row;
  });
}

async function mostraDettagli(mangimeId) {
  const existingRow = document.getElementById(`details-row-${mangimeId}`);
  const existingInfo = document.getElementById(`dettagli-${mangimeId}`);
  const toggleIcon = document.querySelector(`#row-${mangimeId} td:last-child`);

  if (existingInfo) {
    existingInfo.remove();
  }

  if (existingRow) {
    // Se la riga esiste, la rimuoviamo e cambiamo l'icona
    existingRow.remove();
    toggleIcon.innerHTML = "🔍";
  } else {
    // Se la riga non esiste, aggiungiamo i dettagli
    const { data, error } = await supabasePublicClient.rpc(
      "get_dettagli_parametri",
      { mangime_id: mangimeId }
    );

    if (error) {
      console.error("Errore durante il recupero dei dettagli:", error);
      return;
    }

    // Funzione per determinare il gruppo del parametro
    const determinaGruppo = (parametro) => {
      // Regex per controllare che ci sia un numero dopo il prefisso 'm' o 'p'
      const regexMalusBonus = /^[mp]\d+[a-zA-Z]*$/;

      // Se il parametro inizia con 'm' o 'p' e ha un suffisso numerico
      if (regexMalusBonus.test(parametro)) {
        if (parametro.startsWith("m")) {
          return "malus"; // Malus se inizia con 'm'
        }
        if (parametro.startsWith("p")) {
          return "bonus"; // Bonus se inizia con 'p'
        }
      }
      return "quantitativo"; // Tutti gli altri sono parametri quantitativi
    };

    // Applica la logica di raggruppamento ai dati
    const malus = [];
    const bonus = [];
    const quantitativi = [];

    data.forEach((parametro) => {
      const gruppo = determinaGruppo(parametro.parametro);
      if (gruppo === "malus") {
        malus.push(parametro);
      } else if (gruppo === "bonus") {
        bonus.push(parametro);
      } else {
        quantitativi.push(parametro);
      }
    });

    // Ordina i parametri all'interno dei gruppi (per suffisso numerico)
    const ordinaPerSuffisso = (a, b) => {
      const aSuffix = a.parametro.slice(1); // Prende tutto dopo 'm' o 'p'
      const bSuffix = b.parametro.slice(1);
      return aSuffix.localeCompare(bSuffix); // Confronta i suffissi numericamente (o lessicograficamente)
    };

    malus.sort(ordinaPerSuffisso);
    bonus.sort(ordinaPerSuffisso);
    quantitativi.sort(ordinaPerSuffisso);

    // Funzione per colorare i valori quantitativi
    const colorValue = (value) => {
      if (isNaN(value)) return ""; // Se non è un numero, non coloriamo
      if (value > 0) return "positivo"; // Verde se positivo
      if (value < 0) return "negativo"; // Rosso se negativo
      return ""; // Altrimenti nessun colore
    };

    const formatQuantitativo = (parametro) => {
      // Rimuoviamo le ultime due lettere e mettiamo la prima in maiuscolo
      return (
        parametro.slice(0, -2).charAt(0).toUpperCase() + parametro.slice(1, -2)
      );
    };

    // Genera la riga dei dettagli
    const dettagliRow = `
      <tr id="details-row-${mangimeId}">
        <td colspan="7" style="background-color: #f8f9fa; padding: 10px;">
          <table style="width: 100%; border-collapse: collapse;" class="dettagliMangime">
            <thead>
              
            </thead>
            <tbody>
              <!-- Mostra la sezione "Non ci piace" solo se ci sono parametri malus -->
              ${
                malus.length > 0
                  ? `
                <tr>
                  <td colspan="3"><b>NON CI PIACE 🔴</b></td>
                </tr>
                ${malus
                  .map(
                    (parametro) => `
                  <tr>
                    <td style="text-align: right;"><b>${
                      parametro.parametro
                    }</b></td>
                    <td class="${colorValue(parametro.valore)}">${
                      parametro.valore
                    }</td>
                    <td style="text-align: left;">${parametro.descrizione}</td>
                  </tr>
                `
                  )
                  .join("")}
              `
                  : ""
              }
              
              <!-- Mostra la sezione "Ci piace" solo se ci sono parametri bonus -->
              ${
                bonus.length > 0
                  ? `
                <tr>
                  <td colspan="3"><b>CI PIACE 🟢</b></td>
                </tr>
                ${bonus
                  .map(
                    (parametro) => `
                  <tr>
                    <td style="text-align: right;"><b>${
                      parametro.parametro
                    }</b></td>
                    <td class="${colorValue(parametro.valore)}">${
                      parametro.valore
                    }</td>
                    <td style="text-align: left;">${parametro.descrizione}</td>
                  </tr>
                `
                  )
                  .join("")}
              `
                  : ""
              }
              
              <!-- Mostra sempre i parametri quantitativi -->
              <tr>
                <td colspan="3"><b>Parametri Quantitativi</b></td>
              </tr>
              ${quantitativi
                .map(
                  (parametro) => `
                <tr>
                  <td style="text-align: right;"><b>${formatQuantitativo(
                    parametro.parametro
                  )}</b></td>
                  <td class="${colorValue(parametro.valore)}">${
                    parametro.valore
                  }</td>
                  <td style="text-align: left!important;">${
                    parametro.descrizione
                  }</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
              <div id="dettagli-${mangimeId}" class="dettagli-container">
              </div>
        </td>
      </tr>

    `;

    // Aggiungiamo la nuova riga subito dopo quella principale
    const mainRow = document.getElementById(`row-${mangimeId}`);
    mainRow.insertAdjacentHTML("afterend", dettagliRow);

    // Cambiamo l'icona a ➖
    toggleIcon.innerHTML = "➖";

    await mostraInformazioniAggiuntive(mangimeId);
  }
}

async function mostraInformazioniAggiuntive(mangimeId) {
  try {
    const { data, error } = await supabasePublicClient.rpc("get_info_mangime", {
      mangime_id: mangimeId,
    });

    if (error) {
      console.error("Errore nel recupero delle informazioni:", error.message);
      return;
    }

    if (data) {
      // Trova la sezione dei dettagli
      const dettagliContainer = document.getElementById(
        `dettagli-${mangimeId}`
      );
      let infoHtml = `
              <h3>Composizione Mangime</h3>
              <table class="info-table">
                  <tr>
                      <th>Ingredienti</th>
                      <td style="text-align: left!important;">${
                        data[0]?.ingredienti || "..."
                      }</td>
                  </tr>
                  <tr>
                      <th>Tabella Analitica</th>
                      <td style="text-align: left!important;">${
                        data[0]?.tabella_analitica || "..."
                      }</td>
                  </tr>
                  <tr>
                      <th>Integrazioni</th>
                      <td style="text-align: left!important;">${
                        data[0]?.integrazioni || "..."
                      }</td>
                  </tr>
                  <tr>
                      <th>Note</th>
                      <td style="text-align: left!important;">${
                        data[0]?.note || "..."
                      }</td>
                  </tr>
                  <tr>
                      <th>Energia Metabolizzante</th>
                      <td style="text-align: left!important;">
  ${
    data[0]?.energia_metabolizzante
      ? `${data[0].energia_metabolizzante} kcal/kg`
      : "..."
  }
</td>
                  </tr>
                  <tr>
                      <th>Fonte</th>
                      <td style="text-align: left!important;">${
                        data[0]?.fonte || "..."
                      }</td>
                  </tr>
              </table>
          `;

      // Aggiungi le informazioni sotto la tabella dei dettagli
      dettagliContainer.insertAdjacentHTML("beforeend", infoHtml);
    }
  } catch (error) {
    console.error("Errore nella visualizzazione delle informazioni:", error);
  }
}

document
  .querySelectorAll("#MangimiAnalizzati th[data-column]")
  .forEach((header) => {
    header.addEventListener("click", function () {
      const column = this.dataset.column; // Ottieni la colonna
      const order = this.dataset.order === "asc" ? "desc" : "asc"; // Determina il nuovo ordine
      this.dataset.order = order; // Salva il nuovo ordine nell'attributo data-order

      // Aggiorna l'indicatore di ordinamento
      document.querySelectorAll(".sort-indicator").forEach((indicator) => {
        indicator.textContent = "↕️"; // Reset di tutti gli indicatori
      });
      this.querySelector(".sort-indicator").textContent =
        order === "asc" ? "⬆️" : "⬇️";

      // Ordina i dati
      const sortedData = sortData(window.tabellaDati, column, order);

      // Rendi di nuovo la tabella visibile con i dati ordinati
      renderTable(sortedData);
    });
  });

function renderTable(data) {
  const tableBody = document.querySelector("#MangimiAnalizzati tbody");
  tableBody.innerHTML = ""; // Pulisce la tabella

  // Crea una nuova riga per ogni elemento dei dati
  data.forEach((row) => {
    const formattedDate = formatDate(row.INSERITO_IL);
    const valutazione = getValutazione(row.PUNTEGGIO);
    const verificato =
      row.VERIFICATO === true ? "✅" : row.VERIFICATO === false ? "🔴" : "🕒";
    const rowClass = getRowClass(row.VERIFICATO, row.PUNTEGGIO); // Calcola la classe

    const tr = `
                  <tr class="${rowClass}" id="row-${row.ID}">
                <td>${row.MARCA}</td>
                <td>${row.TIPO}</td>
                <td><b>${row.PUNTEGGIO}</b></td>
                <td><p style="font-size: 0.5rem;display:ruby-text;">${valutazione}</p></td>
                <td><p style="font-size: 0.65rem!important;">${row.INSERITO_DA}</p><p style="font-size: 0.65rem;">${formattedDate}</p></td>
                <td>${verificato}</td>
                <td onclick="mostraDettagli(${row.ID})" style="cursor: pointer;">🔍</td>
            </tr>`;
    tableBody.innerHTML += tr;
  });
}

// Funzione di ordinamento generica
function sortData(data, column, order) {
  return [...data].sort((a, b) => {
    if (a[column] === null) return 1; // Tratta i valori nulli come inferiori
    if (b[column] === null) return -1;

    if (order === "asc") {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });
}

// Funzione per formattare la data
function formatDate(dateString) {
  var date = new Date(dateString);
  var day = String(date.getDate()).padStart(2, "0"); // Ottieni il giorno con padding
  var month = String(date.getMonth() + 1).padStart(2, "0"); // Ottieni il mese con padding
  var year = String(date.getFullYear()).slice(-2); // Ottieni solo gli ultimi due cifre dell'anno
  return `${day}/${month}/${year}`;
}

function getClassByScore(score) {
  if (score > 130) return "eccellente";
  if (score >= 115) return "molto-buono";
  if (score >= 100) return "buono";
  if (score >= 85) return "discreto";
  if (score >= 70) return "sufficiente";
  if (score >= 56) return "mediocre";
  if (score >= 40) return "insufficiente";
  if (score >= 20) return "scarso";
  return "molto-scarso";
}

// Funzione per ottenere la valutazione in base al punteggio
function getValutazione(score) {
  if (score > 130) return "🟪🟪🟪🟪🟪";
  if (score >= 115) return "🟩🟩🟩🟩";
  if (score >= 100) return "🟩🟩🟩";
  if (score >= 85) return "🟨🟨";
  if (score >= 70) return "🟨";
  if (score >= 56) return "🟧🟧";
  if (score >= 40) return "🟥🟥🟥";
  if (score >= 20) return "🟥🟥🟥🟥";
  return "⬛⬛⬛⬛⬛";
}

function getRowClass(verificato, score) {
  if (verificato === true) {
    return getClassByScore(score); // Usa le classi basate sul punteggio se il cibo è approvato
  }
  return "blank"; // Nessuna classe per righe bianche
}

document.addEventListener("DOMContentLoaded", function () {
  popolaTabella(); // Chiamata alla funzione che popola la tabella
});
