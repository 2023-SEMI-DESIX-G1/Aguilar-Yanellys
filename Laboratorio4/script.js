(() => {
  const App = {
    htmlElements: {
      fibonacciGeneratorForm: document.getElementById("fibonaccigenerator"),
      fibonacciGeneratorFormInput: document.getElementById("quantity"),
      fibonacciNumbersList: document.getElementById("response"),
    },
    init() {
      App.htmlElements.fibonacciGeneratorForm.addEventListener(
        "submit",
        App.handlers.fibonaccigeneratorFormSubmitHandler
      );
    },
    handlers: {
      fibonaccigeneratorFormSubmitHandler(event) {
        +event.preventDefault();
        const quantity = App.htmlElements.fibonacciGeneratorFormInput.value;
        const fibonacciNumbers = App.methods.getFibonacciNumbers(quantity);
        App.methods.printFibonacciNumbers(fibonacciNumbers);
        console.log({ fibonacciNumbers });
      },
    },
    methods: {
      //Calculate Fibonacci Numbers Sequence
      getFibonacciNumbers(quantity) {
        const fibonacciNumbers = [];
        let fibonacciNumber = 0;
        for (let i = 0; i < quantity; i++) {
          if (i === 0 || i === 1) {
            fibonacciNumber = i;
          } else {
            fibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
          }
          fibonacciNumbers.push(fibonacciNumber);
        }
        return fibonacciNumbers;
      },

      //Print Fibonacci Numbers Sequence and Create Cards for each number
      printFibonacciNumbers(fibonacciNumbers) {
        const fibonacciNumbersList = App.htmlElements.fibonacciNumbersList;
        fibonacciNumbersList.innerHTML = "";
        fibonacciNumbers.forEach((fibonacciNumber) => {
          const fibonacciNumberItem = document.createElement("div");
          fibonacciNumberItem.textContent = fibonacciNumber;
          fibonacciNumberItem.classList.add("list-group-item");
          fibonacciNumbersList.appendChild(fibonacciNumberItem);

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Del";
          deleteButton.classList.add("btn", "btn-danger", "float-right");
          deleteButton.addEventListener('click', () => {
            If (confirm('Desea eliminar este elemento?')) {
              App.methods.deleteFibonacciNumber(fibonacciNumbersList, fibonacciNumber);
              fibonacciNumbersList.removeChild(fibonacciNumberItem);
            };
        });
      },
    },
  };
  App.init();
})();
