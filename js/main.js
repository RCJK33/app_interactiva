const stack = [];
const queue = [];
const stackEl = document.getElementById("stack");
const queueEl = document.getElementById("queue");

function renderStack() {
  stackEl.innerHTML = "";
  for (let i = stack.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.textContent = stack[i];
    stackEl.appendChild(li);
  }
}

function renderQueue() {
  queueEl.innerHTML = "";
  for (let i = 0; i < queue.length; i++) {
    const li = document.createElement("li");
    li.textContent = queue[i];
    queueEl.appendChild(li);
  }
}

document.getElementById("stack-push").addEventListener("click", () => {
  const value = prompt("Enter a value to push:");
  stack.push(value);
  renderStack();
});

document.getElementById("stack-pop").addEventListener("click", () => {
  if (stack.length === 0) {
    alert("Stack is empty!");
    return;
  }
  stack.pop();
  renderStack();
});

document.getElementById("queue-enqueue").addEventListener("click", () => {
  const value = prompt("Enter a value to enqueue:");
  queue.push(value);
  renderQueue();
});

document.getElementById("queue-dequeue").addEventListener("click", () => {
  if (queue.length === 0) {
    alert("Queue is empty!");
    return;
  }
  queue.shift();
  renderQueue();
});

renderStack();
renderQueue();