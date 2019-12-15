// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function updateInventory(arr1, arr2) {

  const inventory = [].concat.apply([], arr1);
  // console.log(inventory)

  arr2.forEach(function(element, index, array) {
    console.log(index)

    const item = element[1]
    const quantity = element[0]
    console.log(item, quantity)

    const position = inventory.indexOf(element)
    console.log(position)

    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
    }

    // alien item: add to inventory
    arr1.push([quantity, item]);
  })

  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));

  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
