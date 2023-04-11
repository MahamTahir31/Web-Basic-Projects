// Ques-1 
function add(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = addNum(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

// Ques-2
function searchArray(arr, val) {
    if (arr.length === 0) {
        //  value not found
        return false;
    } else if (arr[0] === val) {
        // value found at the beginning of the array
        return true;
    } else {
        //  search rest of array for value
        return searchArray(arr.slice(1), val);
    }
}
// Ques-3 
function addPara(text) {

    var p = document.createElement("p");
    p.textContent = text;
    var body = document.getElementsByTagName("body")[0];
    // Append the new paragraph element to the body
    body.appendChild(p);
}

addPara("This is new paragraph");

// Ques-4
function addItem(text) {
    // Get the unordered list element by its ID
    const list = document.getElementById("my-list");

    // Create a new list item element
    const newItem = document.createElement("li");

    // Set the text content of the new item
    newItem.textContent = text;

    // Add the new item to the end of the list
    list.appendChild(newItem);
}
addItem("purple");
addItem("violet");
addItem("green");

// Ques-5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'purple');

// Ques-6
function saveObjectToLocalStorage(key, object) {
    // Convert the object to a JSON string
    const objectJson = JSON.stringify(object);

    // Save the JSON string to localStorage
    localStorage.setItem(key, objectJson);
}
const myObject = { name: "maham", age: 21};
saveObjectToLocalStorage("myObject", myObject);

// Ques-7
function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

// Ques-8
function saveToLocalStorageAndRetrieve(obj) {
    // Save each property to localStorage
    Object.keys(obj).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
  
    // Retrieve the object from localStorage
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
  
    return newObj;
  }
