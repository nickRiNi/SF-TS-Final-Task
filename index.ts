export {};
// Create a "close" button and append it to each list item
const myNodelist:  HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i: number;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeBtns: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
// const i;
for (i = 0; i < close.length; i++) {
  closeBtns[i].addEventListener("click", ()=>{
    const li = closeBtns[i].parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
  list.addEventListener('click', function (ev: MouseEvent) {
      let target:HTMLElement = <HTMLElement>ev.target;
      if (target && target.tagName === 'LI') {
        target.classList.toggle('checked');
      }

  }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement():void  {
  const li: HTMLElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
  if (!input) return;
  const inputValue: string = input.value;
  const textNode: Text = document.createTextNode(inputValue);
  li.appendChild(textNode);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    const ul = document.getElementById("myUL");
    if (ul) {
      ul.appendChild(li);
    }
    // document.getElementById("myUL").appendChild(li);
  }
  input.value = "";

  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  span.addEventListener("click", ()=>{
    const li = span.parentElement;
    if (!!li) {
      li.style.display = "none";
    }
  });
}