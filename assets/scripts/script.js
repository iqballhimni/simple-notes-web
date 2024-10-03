document.getElementById('add-note-btn').addEventListener('click', addNote);

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
        const noteContainer = document.getElementById('notes-container'); // Ganti dengan ID yang sesuai

        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.textContent = noteText;

        noteContainer.appendChild(noteCard);
        noteInput.value = '';
    }
}
