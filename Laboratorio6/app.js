function fibonacciSequence(n) {
  var sequence = [];

  if (n >= 1) {
    sequence.push(0);
  }
  if (n >= 2) {
    sequence.push(1);
  }

  for (var i = 2; i < n; i++) {
    var nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

var input = 10;
var sequence = fibonacciSequence(input);
console.log(sequence.join(" "));
