import React from "react";
const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header className="app-header">
      <h1 className="app-header__title">My Super Slicky Sticky Notes</h1>
      <aside className="app-header__controls">
        {/* the props in the onClick event below pulls the addNote state from the addNote in the app component*/}
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Find a note..."
          // Set the search value to the props to take the data from state set in the app component
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
