const inputLabel = document.querySelector("#input-label");
const outputLabel = document.querySelector("#output-label");

updateItems();

function addItem() {
	const text = inputLabel.value;
	if (text === "") return;
	if (!localStorage.getItem("counter")) {
		localStorage.setItem("counter", 0);
	}
	localStorage.setItem(localStorage.getItem("counter"), text);
	localStorage.setItem("counter", +localStorage.getItem("counter") + 1);
	inputLabel.value = "";
	updateItems();
}

function updateItems() {
	outputLabel.innerHTML = "";
	for (const key in { ...localStorage }) {
		if (key == +key) {
			outputLabel.innerHTML += `
      <div class="todo-item">
        <p class="todo-item__text">${localStorage.getItem(key)}</p>
        <button class="todo-item__remove-btn" onclick="removeFromLocalStorage(${key})">
          <img class="todo-item__remove-btn-icon" src="img/x.svg" alt="remove-btn-icon"></img>
        </button>
      </div>
      `;
		}
	}
}

function removeFromLocalStorage(key) {
	localStorage.removeItem(key);
	updateItems();
}
