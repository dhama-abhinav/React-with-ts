
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

const data: string[] = [
  "newyork",
  "london",
  "delhi",
  "noida","gurgaon"
];
const lowerCaseData = data.map(language => language.toLowerCase());

  function getSuggestions(value: string): string[] {
    return lowerCaseData.filter(language =>
      language.startsWith(value.trim().toLowerCase())
    );
  }

const AutoSuggestExample :React.FC =()=>{
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  return (
    <div className="App">
       <AutoSuggest

        suggestions={suggestions}

        onSuggestionsClearRequested={() => setSuggestions([])}

        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}

        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }

        getSuggestionValue={suggestion => suggestion}

        renderSuggestion={suggestion => <span>{suggestion}</span>}

        inputProps={{
          placeholder: "Search here!!",
          value: value,
          onChange: (e, { newValue, method }) => {
            setValue(newValue);
          }
        }}

        highlightFirstSuggestion={true}
      />
      </div>
  )
}

export default AutoSuggestExample;
