import React from "react";

export default function Sidebar(props) {
  // array to contain all the notes present in the app
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      {/* highlight the current node, click to change the current node
       */}
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          {index + 1}
          {" ) "}
          {
            // can be also done by getting the indexOf("\n"), and then substring(0, index)
            note.body.split("\n")[0]
          }
        </h4>
        {/* delete button appears only on hover */}
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  //rendering the sidebar, with titles of the notes
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {
        // passing directly since this already has all the note title boxes in array
        noteElements
      }
    </section>
  );
}
