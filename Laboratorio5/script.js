const app = {
  notes: [],
  init: function () {
    const input = document.getElementById("input-notes");
    input.value = "";

    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.display = "none";
  },
  handlers: {
    calculateAverage: function () {
      const input = document.getElementById("input-notes");
      const notesInput = input.value.trim();

      if (notesInput === "") {
        alert("Por favor, ingrese al menos una nota.");
        return;
      }

      app.notes = notesInput.split(",").map((note) => parseInt(note));

      if (app.notes.some(isNaN)) {
        alert("Por favor, ingrese notas válidas.");
        return;
      }

      if (app.notes.some((note) => note < 0 || note > 100)) {
        alert("Por favor, ingrese notas entre 0 y 100.");
        return;
      }

      const average = app.methods.calculateAverage();
      app.methods.displayResult(average);
      app.methods.updateProgressBar(average);
    },
  },
  methods: {
    calculateAverage: function () {
      const sum = app.notes.reduce((acc, note) => acc + note, 0);
      const average = sum / app.notes.length;
      return average.toFixed(2);
    },
    displayResult: function (average) {
      const resultContainer = document.getElementById("average-result");
      resultContainer.innerHTML = `El promedio de las notas es: ${average}`;
    },
    updateProgressBar: function (average) {
      const progressBar = document.querySelector(".progress-bar");
      progressBar.style.display = "block";

      const progressBarFill = document.getElementById("progress-bar-fill");
      progressBarFill.style.width = `${average}%`;
      progressBarFill.innerHTML = `${average}%`;
    },
  },
};

app.init();
