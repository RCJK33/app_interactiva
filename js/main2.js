
const queue = ["img/disco_i.png" ];
const queueEl = document.getElementById("queue");

function renderQueue() {
  queueEl.innerHTML = ""; 
  for (let i = 0; i < queue.length; i++) {
    const img = document.createElement("img");
    img.src = queue[i];
    queueEl.appendChild(img);
  }
}

document.getElementById("queue-enqueue").addEventListener("click", () => {
  if (queue.length >= 6) {
    alert("La cola ya tiene 6 elementos!");
    return;
  }

  // La URL de la imagen a agregar es 'img/Recurso_11.png'
  const imageUrl = 'img/disco.png';
  queue.unshift(imageUrl); // Agrega el elemento al inicio de la cola
  renderQueue();
});

document.getElementById("queue-dequeue").addEventListener("click", () => {
  if (queue.length === 0) {
    alert("La cola está vacía!");
    return;
  }
  queue.pop();
  renderQueue();
});


renderQueue();
