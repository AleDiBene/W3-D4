const now = new Date(); //è un oggetto di tipo data

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

//oggi siamo febbraio

const memory = [];

const showMonthInHeader = function () {
  //funzione per cambaire il titolo.
  const monthIndex = now.getMonth(); //prende il nome del mese corrente
  const currentMonth = monthNames[monthIndex]; //confronta il nome dell mese dell'array e come indice usa il monthIndex
  const h1Title = document.getElementById("current-month");
  h1Title.innerText = currentMonth;
};

const daysInThisMonth = function () {
  //funzione per trovare la data.
  const year = now.getFullYear(); //2025
  const month = now.getMonth();

  lastDayOfCurrentMonth = new Date(year, month + 1, 0);
  const numberOfDays = lastDayOfCurrentMonth.getDate();
  console.log(numberOfDays);
  return numberOfDays;
};

const createCalendarCells = function (numberOfDays) {
  //funzione per creare le celle con le date.

  for (let i = 0; i < numberOfDays; i++) {
    // aggiungo alla memoria del calendario una sotto sezione per questa giornata.
    memory.push([]);

    const cell = document.createElement("div"); //creo un div vuoto
    cell.classList.add("day"); //do una classe day al div

    cell.addEventListener("click", () => {
      //rende la cella cliccabile

      const alreadySelected = document.querySelector(".selected");

      if (alreadySelected !== null) {
        alreadySelected.classList.remove("selected");
      }

      cell.classList.add("selected");

      const spanToReplace = document.getElementById("newMeetingDay");
      spanToReplace.innerText = i + 1;
      spanToReplace.classList.add("hasDay");
    });

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    const today = now.getDate();
    if (i === today) {
      cellValue.classList.add("color-epic");
    }

    cell.appendChild(cellValue); // <div class='day'> <h3> 1 </h3> </div>

    const calendarSection = document.getElementById("calendar");
    calendarSection.appendChild(cell);
  }
};

showMonthInHeader(); //metto il nome del mese all'h1

const numberOfDays = daysInThisMonth(); //calcolare il numero di giorni del mese

createCalendarCells(numberOfDays);

//gestiamo la logica per salvare i dati
const meetingForm = document.getElementById("newMeetingForm");
meetingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("salviamo appuntamento");

  const spanToReplace = document.getElementById("newMeetingDay");
  const selectedDay = parseInt(spanToReplace.innerText);

  const timeInput = document.getElementById("newMeetingTime");
  const selectedTime = timeInput.ariaValue;
  const meetingInput = document.getElementById("newMeetingName");
  const selectedName = meetingInput.ariaValue;

  const appointment = ` `;
});
