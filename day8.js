const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

if (!outputDiv || !explanationDiv || !buttonsContainer) {
  console.error(
    "Missing one of the required DOM elements: #output, #explanation, #buttons-container"
  );
}

// Utility: get length without using .length (kept for your learning)
function getLength(arr) {
  let count = 0;
  for (let _ in arr) {
    count++;
  }
  return count;
}

// 1. Add number (push)
function addNumber(arr, num) {
  const newArr = [];
  for (let i = 0; i < getLength(arr); i++) newArr[i] = arr[i];
  newArr[getLength(arr)] = num;
  return newArr;
}

// 2. Remove last
function removeLast(arr) {
  const newArr = [];
  const len = getLength(arr);
  for (let i = 0; i < len - 1; i++) newArr[i] = arr[i];
  return newArr;
}

// 3. Get first
function getFirst(arr) {
  return arr[0];
}

// 4. Get index
function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// 6. Reverse array
function reverseArray(arr) {
  const len = getLength(arr);
  const newArr = [];
  for (let i = 0; i < len; i++) newArr[i] = arr[len - 1 - i];
  return newArr;
}

// 7. Get evens
function getEvens(arr) {
  const out = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      out[j++] = arr[i];
    }
  }
  return out;
}

// 8. Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) sum += arr[i];
  return sum;
}

// 9. Join words into sentence
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) sentence += " ";
  }
  return sentence;
}

// 10. Remove duplicates
function removeDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

// Find max/min/avg
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
}
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] < min) min = arr[i];
  return min;
}
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}

// Square numbers (single definition)
function squareNumbers(arr) {
  return arr.map((n) => n * n);
}

// Sort helpers
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
function sortDescending(arr) {
  return sortAscending(arr).slice().reverse();
}

// Shuffle
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Show result helper
function showResult(input, result, explanation) {
  if (!outputDiv || !explanationDiv) return;
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(
    input
  )}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// Button factory to avoid duplicate identifiers
function createButton(label, onClick) {
  const btn = document.createElement("button");
  btn.innerText = label;
  btn.addEventListener("click", onClick);
  buttonsContainer.appendChild(btn);
}

// Create buttons (no duplicate variable names)
createButton("Add number to array", () =>
  showResult(numbers, addNumber(numbers, 6), "Added number to end of array")
);
createButton("Remove last element", () =>
  showResult(numbers, removeLast(numbers), "Removed last element")
);
createButton("Get first element", () =>
  showResult(numbers, getFirst(numbers), "Got first element")
);
createButton("Get index of value 5", () =>
  showResult(numbers, getIndex(numbers, 5), "Got index of 5")
);
createButton("Get array length (no .length)", () =>
  showResult(numbers, getLength(numbers), "Counted elements without .length")
);
createButton("Reverse array", () =>
  showResult(numbers, reverseArray(numbers), "Reversed the array")
);
createButton("Get even numbers", () =>
  showResult(numbers, getEvens(numbers), "Filtered even numbers")
);
createButton("Sum of array", () =>
  showResult(numbers, sumArray(numbers), "Summed all numbers")
);
createButton("Join words", () =>
  showResult(words, joinWords(words), "Joined words into a sentence")
);
createButton("Remove duplicates", () =>
  showResult(
    [1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8],
    removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8]),
    "Removed duplicates"
  )
);
createButton("Find Maximum", () =>
  showResult(numbers, findMax(numbers), "Maximum number in array")
);
createButton("Find Minimum", () =>
  showResult(numbers, findMin(numbers), "Minimum number in array")
);
createButton("Find Average", () =>
  showResult(numbers, findAverage(numbers), "Average of numbers")
);
createButton("Square Numbers", () =>
  showResult(numbers, squareNumbers(numbers), "Squared all numbers")
);
createButton("Sort Ascending", () =>
  showResult(numbers, sortAscending(numbers), "Sorted in ascending order")
);
createButton("Sort Descending", () =>
  showResult(numbers, sortDescending(numbers), "Sorted in descending order")
);
createButton("Shuffle array", () =>
  showResult(numbers, shuffleArray(numbers), "Shuffled the array randomly")
);
