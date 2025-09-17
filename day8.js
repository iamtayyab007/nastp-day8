const numbers = [1, 2, 3, 4, 5,4,5,6,7,8,9,0,5];
const words = ["Hi", "it's", "me","Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// Functions

function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }

  //push
  newArr[getLength(arr)] = num;
  return newArr;
}

// 2. Remove last
function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i]; // use pop() to remove last
  }
  return newArr;
}

// 3. Get first
function getFirst(arr) {
  return arr[0];
}

// 4. Get index
function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1; // if not found
}

// 5. Get length (no .length)
function getLength(arr) {
  let count = 0;
  for (let i in arr) { // using for..each loop to count
    count++;
  }
  return count;
}

// 6. Reverse array
function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[i] = arr[len - 1 - i];
  }
  return newArr;
}

// 7. Get even numbers
function getEvens(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

// 8. Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

// 9. Join words into sentence
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) {
      sentence += " "; //join()
    }
  }
  return sentence;
}

// 10. Remove duplicates
function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // check if arr[i] already exists in newArr
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }

    // if not found, add it
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}


// Show result helper
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(input)}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// --- Create Buttons ---

// 1. Add number
const btn1 = document.createElement("button");
btn1.innerText = "Add number to array";
btn1.onclick = () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array");
buttonsContainer.appendChild(btn1);

// 2. Remove last
const btn2 = document.createElement("button");
btn2.innerText = "Remove last element";
btn2.onclick = () => showResult(numbers, removeLast(numbers), "Removed last element");
buttonsContainer.appendChild(btn2);

// 3. Get first
const btn3 = document.createElement("button");
btn3.innerText = "Get first element";
btn3.onclick = () => showResult(numbers, getFirst(numbers), "Got first element");
buttonsContainer.appendChild(btn3);

// 4. Get index
const btn4 = document.createElement("button");
btn4.innerText = "Get index of value 5";
btn4.onclick = () => showResult(numbers, getIndex(numbers, 5), "Got index of 5");
buttonsContainer.appendChild(btn4);

// 5. Get length
const btn5 = document.createElement("button");
btn5.innerText = "Get array length (no .length)";
btn5.onclick = () => showResult(numbers, getLength(numbers), "Counted elements without .length");
buttonsContainer.appendChild(btn5);

// 6. Reverse array
const btn6 = document.createElement("button");
btn6.innerText = "Reverse array";
btn6.onclick = () => showResult(numbers, reverseArray(numbers), "Reversed the array");
buttonsContainer.appendChild(btn6);

// 7. Get evens
const btn7 = document.createElement("button");
btn7.innerText = "Get even numbers";
btn7.onclick = () => showResult(numbers, getEvens(numbers), "Filtered even numbers");
buttonsContainer.appendChild(btn7);

// 8. Sum of array
const btn8 = document.createElement("button");
btn8.innerText = "Sum of array";
btn8.onclick = () => showResult(numbers, sumArray(numbers), "Summed all numbers");
buttonsContainer.appendChild(btn8);

// 9. Join words
const btn9 = document.createElement("button");
btn9.innerText = "Join words";
btn9.onclick = () => showResult(words, joinWords(words), "Joined words into a sentence");
buttonsContainer.appendChild(btn9);

// 10. Remove duplicates
const btn10 = document.createElement("button");
btn10.innerText = "Remove duplicates";
btn10.onclick = () => showResult([1, 2, 2, 3, 3, 4,4,4,4,3,5,6,7,8], removeDuplicates([1, 2, 2, 3, 3, 4,4,4,4,3,5,6,7,8]), "Removed duplicates");
buttonsContainer.appendChild(btn10);

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const btn11 = document.createElement("button");
btn11.innerText = "Find Maximum";
btn11.onclick = () => showResult(numbers, findMax(numbers), "Maximum number in array");
buttonsContainer.appendChild(btn11);

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const btn12 = document.createElement("button");
btn12.innerText = "Find Minimum";
btn12.onclick = () => showResult(numbers, findMin(numbers), "Minimum number in array");
buttonsContainer.appendChild(btn12);

function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Button
const btn13 = document.createElement("button");
btn13.innerText = "Find Average";
btn13.onclick = () => showResult(numbers, findAverage(numbers), "Average of numbers");
buttonsContainer.appendChild(btn13);

function squareNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * arr[i];
  }
  return newArr;
}

// Button
const btn17 = document.createElement("button");
btn17.innerText = "Square Numbers";
btn17.onclick = () => showResult(numbers, squareNumbers(numbers), "Squared all numbers");
buttonsContainer.appendChild(btn17);

function sortAscending(arr) {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[i]) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
}

// Button
const btn18 = document.createElement("button");
btn18.innerText = "Sort Ascending";
btn18.onclick = () => showResult(numbers, sortAscending(numbers), "Sorted in ascending order");
buttonsContainer.appendChild(btn18);

function sortDescending(arr) {
  let newArr = sortAscending(arr);
  return newArr.reverse();
}

// Button
const btn19 = document.createElement("button");
btn19.innerText = "Sort Descending";
btn19.onclick = () => showResult(numbers, sortDescending(numbers), "Sorted in descending order");
buttonsContainer.appendChild(btn19);
