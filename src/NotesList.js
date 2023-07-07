import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  // filter notes data and keep only notes that are filtered to true
  const keepSearchMatches = (note) => note.doesMatchSearch;
  // Of the notes filtered as true pass the notes data into props below; the onType will pass changes to a note
  const searchMatches = props.notes.filter(keepSearchMatches);
  const showNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );
  const notesContents = searchMatches.map(showNote);
  return <ul className="notes-list">{notesContents}</ul>;
};

export default NotesList;
