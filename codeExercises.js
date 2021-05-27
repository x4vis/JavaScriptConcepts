const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) { console.log('fizzBuzz') }
    else if (i % 3 === 0) { console.log('fizz') }
    else if (i % 5 === 0) { console.log('Buzz') }
    else { console.log(i) }
  }
}

// fizzBuzz(100);


const isPalindrome = (word) => {
  const lowerCaseWord = word.toLowerCase();
  const reverseWord = lowerCaseWord.split('').reverse().join('');

  return reverseWord === lowerCaseWord;
}

// console.log('isPalindrome :>> ', isPalindrome('arepera'));


const arr = [
  1,
  2,
  3,
  [1, "platano", "manzana"],
  "manzana",
  ["fresa", "platano", "1", [
      "manzana", "3", 3, 3
    ]
  ]
];

const repeatedElements = ({serchOnArray, elementToSearch}) => {
  let counter = 0;

  for (let i = 0; i < serchOnArray.length; i++) {
    const element = serchOnArray[i];
    
    if (typeof element === 'object') {
      counter + repeatedElements({serchOnArray: element, elementToSearch});
    }
    else if(element === elementToSearch) {
      return 1++;
    }
  }

  return counter;
}


console.log('repeatedElements :>> ', repeatedElements({serchOnArray: arr, elementToSearch: 'platano'}));