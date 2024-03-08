// index.js

// SmartNotes - An innovative note-taking application designed to revolutionize how you capture, organize, and retrieve information.

// Note-taking functionality
class SmartNotes {
    constructor() {
        this.notes = [];
    }

    // Method to add a new note
    addNote(title, content, tags) {
        const note = {
            title: title,
            content: content,
            tags: tags
        };
        this.notes.push(note);
    }

    // Method to list all notes
    listNotes() {
        console.log("All Notes:");
        this.notes.forEach((note, index) => {
            console.log(`Note ${index + 1}: ${note.title}`);
            console.log(`Tags: ${note.tags.join(", ")}`);
            console.log(note.content);
            console.log("--------------------------");
        });
    }
}

// Example usage:
const smartNotesApp = new SmartNotes();

// Adding new notes
smartNotesApp.addNote("Meeting with Client", "Discuss project updates and finalize the contract.", ["Work", "ClientMeeting"]);
smartNotesApp.addNote("Grocery List", "Remember to buy milk, eggs, and bread.", ["Shopping"]);

// Listing all notes
smartNotesApp.listNotes();
