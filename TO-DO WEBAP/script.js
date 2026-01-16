function addTask() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;

    if (title === "") {
        alert("Please enter a title");
        return;
    }

    const taskList = document.getElementById("taskList");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
        <span>${title}</span>
        <span>${desc}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
    `;

    taskList.appendChild(taskDiv);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}
