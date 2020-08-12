// Write your code here!

let main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement('h1#victory')
newHeader.innerHTML = "David is the champion"
document.body.appendChild(newHeader)
