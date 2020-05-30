document.getElementById("button").addEventListener("click", toggleDisclosure);
document.getElementById("button").addEventListener("keydown", toggleDisclosure);

function toggleDisclosure(event) {
  const type = event.type;
  if(type === "keydown" && 
     (even.keyCode !== 13) && 
     (event.keyCode !== 32)
     ) {
         return true;
     }   
  event.preventDefault();
}
