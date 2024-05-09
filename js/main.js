const stack = ["img/casete.png"];
const stackEl = document.getElementById("stack");

function renderStack() {
  stackEl.innerHTML = "";
  for (let i = 0; i < stack.length; i++) {
    const img = document.createElement("img");
    img.src = stack[i];
    stackEl.appendChild(img);
  }
}


document.getElementById("stack-push").addEventListener("click", () => {
  if (stack.length >= 6) {
    alert("La pila ya tiene 6 elementos!");
    return;
  }

  // La URL de la imagen a agregar es 'img/disco.png'
  const imageUrl = 'img/casetet.png';
  stack.push(imageUrl); // Agrega el elemento al final de la pila
  renderStack();
});

document.getElementById("stack-pop").addEventListener("click", () => {
  if (stack.length === 0) {
    alert("La pila está vacía!");
    return;
  }
  stack.pop(); // Elimina el elemento del final de la pila
  renderStack();
});


renderStack();
