import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  // starts with either [] or accessing already present "notes" key from local storage
  // LAZY STATE : to not let it repeat every time the virtual DOM refreshes
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  // if "notes" present, then sets the first note as current note, else nothing ""
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  // to save the notes in JSON format to local storage
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // to create a new note using nanoid, and add it ot the notes array
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };

    // adds to the notes array
    setNotes((prevNotes) => [newNote, ...prevNotes]);

    // sets id to the newly created note
    setCurrentNoteId(newNote.id);
  }

  // to modify the content of any note, and then move it to the top of the notes array
  function updateNote(text) {
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          // Put the most recently-modified note at the top, copy all properties, except the body (that has been)
          newArray.unshift({ ...oldNote, body: text });
        } else {
          // add as it is
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  // to delete a particular note when delete is clicked,
  // accepts onClick event, and id of clicked note
  function deleteNote(event, noteId) {
    event.stopPropagation(); // to stop event bubbling
    setNotes(
      // filter: returns only those notes whose (id != deleteId)
      (oldNotes) => oldNotes.filter((note) => note.id !== noteId)
    );
  }

  // to find the current note in the notesArray
  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {/* conditional rendering */}
      {notes.length > 0 ? (
        // if notes are  already present : 70-30 screen split
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        // if no notes are present, just display no notes
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
