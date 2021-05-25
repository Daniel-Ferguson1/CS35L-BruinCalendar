import React, { useState } from "react";
import { SearchPanel } from "react-search-panel";
import './Search.css'

const choices = [
  { key: "choice1", description: "Event Search" },
  { key: "choice2", description: "Friend Search" },
];

const Search = () => {
  const [input, setInput] = React.useState("");
  const [selectedChoices, setSelectedChoices] = useState(choices);

  return (
    <div className="searchbar"> 
        <SearchPanel id="panel"
          choices={choices}
          onChange={event => setInput(event.target.value)}
          onSelectionChange={setSelectedChoices}
          placeholder="Search"
          selectedChoices={selectedChoices}
          value={input}
        />
    </div>
  );
}

export default Search;