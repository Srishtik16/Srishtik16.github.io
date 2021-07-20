let isAscending = true;
let getArrayContainer = document.querySelector("#array");
// let buttons = document.querySelectorAll(".button");
// let typeOfSort = buttons.innerText;
// console.log(typeOfSort);
// console.log(buttons);
function generateRandomArray(n) {
      if(n > 20) {
            alert("ENTER LESS THAN 20 ELEMENTS!!");
            return;
      }
      for(let i = 1; i <= n; i++) {
            let randomElement = Math.random() * 100;
            randomElement = Math.ceil(randomElement);
            console.log(randomElement);
            let widthOfEachBlock = Math.floor(600 / n);
            console.log(widthOfEachBlock);
            let arrayElement = document.createElement("div");
            arrayElement.classList.add("block");
            arrayElement.style.height = `${randomElement * 3}px`;
            arrayElement.style.transform = `translate(${i * widthOfEachBlock}px)`;
            let arrayElementValue = document.createElement("label");
            arrayElementValue.classList.add("block_id");
            arrayElementValue.innerText = randomElement;

            arrayElement.appendChild(arrayElementValue);
            console.log(arrayElement);
            getArrayContainer.appendChild(arrayElement);
      }
}

// function animationTimer() {
//       setTimeout(() => {
//             getArrayContainer.insertBefore(element2, element1);
//             resolve();
//       }, 300);
// }

function swapElements(element1, element2) {
      return new Promise((resolve) => {
            let temporaryVariable = element1.style.transform;
            element1.style.transform = element2.style.transform;
            element2.style.transform = temporaryVariable;
            window.requestAnimationFrame(function() {
                  setTimeout(() => {
                        var clonedElement1 = element1.cloneNode(true);
                        var clonedElement2 = element2.cloneNode(true);
                        // getArrayContainer.insertBefore(element2, element1);
                        // getArrayContainer.replaceChild(clonedElement1, element2);
                        // getArrayContainer.replaceChild(clonedElement2, element1);
                        element2.parentNode.replaceChild(clonedElement1, element2);
                        element1.parentNode.replaceChild(clonedElement2, element1);
                        resolve();
                  }, 300);
            });
      });
}

async function bubbleSort(delay = 150) {
      let getBlocks = document.querySelectorAll(".block");
      for(let i = 0; i < getBlocks.length; i++) {
            for(let j = 0; j < getBlocks.length - i - 1; j++) {
                  getBlocks[j].style.backgroundColor = "#FF4919";
                  getBlocks[j + 1].style.backgroundColor = "#FF4919";
                  await new Promise((resolve) =>
                        setTimeout(() => {
                              resolve();
                        }, delay)
                  );
                  let firstValue = Number(getBlocks[j].childNodes[0].innerHTML);
                  let secondValue = Number(getBlocks[j + 1].childNodes[0].innerHTML);
                  if(isAscending) {
                        if(firstValue > secondValue) {
                              await swapElements(getBlocks[j], getBlocks[j + 1]);
                              getBlocks = document.querySelectorAll(".block");
                        } 
                  }
                  getBlocks[j].style.backgroundColor = "#0000FF";
                  getBlocks[j + 1].style.backgroundColor = "#0000FF";
            }
            getBlocks[getBlocks.length - i - 1].style.backgroundColor = "#13CE66";
      }
}

async function selectionSort(delay = 150) {
      console.log("Begin");
      let getBlocks = document.querySelectorAll(".block");
      console.log(getBlocks.length);
      let moves = 0;
      let minIndex = 0;
      for(let i = 0; i < getBlocks.length; i++) {
            minIndex = i;
            for(let j = i + 1; j < getBlocks.length; j++) {
                  // getBlocks[j].style.backgroundColor = "#FF4919";
                  // getBlocks[minIndex].style.backgroundColor = "#FF4919";
                  await new Promise((resolve) =>
                        setTimeout(() => {
                              resolve();
                        }, delay)
                  );
                  let firstValue = Number(getBlocks[j].childNodes[0].innerHTML);
                  let secondValue = Number(getBlocks[minIndex].childNodes[0].innerHTML);
                  if(firstValue < secondValue) {
                        minIndex = j;
                  }
            }
            if(minIndex == i) {
                  getBlocks[i].style.backgroundColor = "#13CE66";
                  continue;
            }
            console.log(getBlocks[i].childNodes[0].innerText + " " + getBlocks[minIndex].childNodes[0].innerText);
            getBlocks[i].style.backgroundColor = "#FF4919";
            getBlocks[minIndex].style.backgroundColor = "#FF4919";
            await swapElements(getBlocks[minIndex], getBlocks[i]);
            //  let temporaryVariable1 = getBlocks[i].childNodes[0].height;
            // getBlocks[i].childNodes[0].height = getBlocks[minIndex].childNodes[0].height;
            // getBlocks[minIndex].childNodes[0].height = temporaryVariable1;
            // let temporaryVariable = getBlocks[i].childNodes[0].innerText;
            // getBlocks[i].childNodes[0].innerText = getBlocks[minIndex].childNodes[0].innerText;
            // getBlocks[minIndex].childNodes[0].innerText = temporaryVariable;
            console.log(getBlocks[i].childNodes[0].innerText + " " + getBlocks[minIndex].childNodes[0].innerText);
            moves++;
            getBlocks = document.querySelectorAll(".block");
            getBlocks[i].style.backgroundColor = "#0000FF";
            getBlocks[minIndex].style.backgroundColor = "#0000FF";
            getBlocks[i].style.backgroundColor = "#13CE66";
      }
      // getBlocks[getBlocks.length - 1].style.backgroundColor = "#13CE66";
      // getBlocks[minIndex].style.backgroundColor = "#13CE66";
      console.log(moves);
      for(let i = 0; i < getBlocks.length; i++) {
            console.log(getBlocks[i].childNodes[0].innerHTML);
      }
}


async function insertionSort() {
      console.log("Begin");
      let getBlocks = document.querySelectorAll(".block");
      for(let i = 0; i < getBlocks.length; i++) {
            let j = i;
            while(j > 0) {
                  let firstValue = Number(getBlocks[j].childNodes[0].innerHTML);
                  let secondValue = Number(getBlocks[j - 1].childNodes[0].innerHTML);
                  if(firstValue >= secondValue) {
                        break;
                  }
                  getBlocks[j].style.backgroundColor = "#FF4919";
                  getBlocks[j - 1].style.backgroundColor = "#FF4919";
                  await swapElements(getBlocks[j], getBlocks[j - 1]);
                  getBlocks = document.querySelectorAll(".block");
                  getBlocks[j].style.backgroundColor = "#0000FF";
                  getBlocks[j - 1].style.backgroundColor = "#0000FF";
                  j--;
            }
            // getBlocks[i].style.backgroundColor = "#13CE66";
      }
      for(let i = 0; i < getBlocks.length; i++) {
            getBlocks[i].style.backgroundColor = "#13CE66";
      }
}

// let val = document.getElementsByClassName("Function1");
// console.log(val);
// val.onclick = function() {BubbleSort()};
let value1 = document.getElementById("Function1");
console.log(value1);
value1.onclick = function() {BubbleSort()};
function BubbleSort() {
      let n = prompt("Enter Number of Array Elements!!");
      generateRandomArray(n);
      bubbleSort();
}
let value2 = document.getElementById("Function2");
value2.onclick = function() {SelectionSort()};
function SelectionSort() {
      let n = prompt("Enter Number of Array Elements!!");
      generateRandomArray(n);
      selectionSort();
}
let value3 = document.getElementById("Function3");
value3.onclick = function() {InsertionSort()};
function InsertionSort() {
      let n = prompt("Enter Number of Array Elements!!");
      generateRandomArray(n);
      insertionSort();
}
// BubbleSort();
// generateRandomArray(20);
// insertionSort();
// selectionSort();
// bubbleSort();
