(() => {
  const App = {
    init: () => {
      const value1 = "5";
      console.log(
        `1. IsDoubleBasePalindrome('${value1}') => ${App.methods.isDoubleBasePalindrome(
          value1
        )}`
      );

      const value2 = "AABBBACAA";
      console.log(
        `2. CountChars('${value2}') => ${JSON.stringify(
          App.methods.countChars(value2)
        )}`
      );

      const value3 = "2020";
      console.log(
        `3. IsLeapYear('${value3}') => ${App.methods.isLeapYear(value3)}`
      );

      const value4 = "7";
      console.log(
        `4. SumOfPrimes('${value4}') => ${JSON.stringify(
          App.methods.sumOfPrimes(value4)
        )}`
      );
    },
    methods: {
      isPalindrome: (str) => {
        return str.split("").reverse().join("") === str;
      },
      isDoubleBasePalindrome: (str) => {
        if (isNaN(str)) {
          console.log("NO ES PALINDROMO");
          return false;
        }
        return (
          App.methods.isPalindrome(
            App.methods.toBase10(Number(str)).toString()
          ) &&
          App.methods.isPalindrome(App.methods.toBase2(Number(str)).toString())
        );
      },
      toBase10: (num) => {
        return num.toString(10);
      },
      toBase2: (num) => {
        return Number(num).toString(2);
      },
      isPrime: (num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
        }
        return true;
      },
      countChars: (str) => {
        let count = {};
        for (let i = 0; i < str.length; i++) {
          if (count[str[i]]) {
            count[str[i]]++;
          } else {
            count[str[i]] = 1;
          }
        }
        return count;
      },
      isLeapYear: (str) => {
        return (str % 4 === 0 && str % 100 !== 0) || str % 400 === 0;
      },
      sumOfPrimes: (n) => {
        let res = { sum: 0, primes: [] };
        for (let i = 2; i <= n; i++) {
          if (App.methods.isPrime(i)) {
            res.sum += i;
            res.primes.push(i);
          }
        }
        return res;
      },
    },
  };
  App.init();
})();
