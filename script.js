function addNote() {
    let input = document.getElementById("noteInput");
    let noteText = input.value;

    if (noteText.trim() === "") {
        alert("Please enter a note");
        return;
    }

    let note = document.createElement("div");
    note.className = "note";

    note.innerHTML = `
        <p>${noteText}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("notesContainer").appendChild(note);

    input.value = "";
}