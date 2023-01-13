import React, { useState } from "react";
import Emojis from "./emojis.json";
import "./styles.css";

// const emojiDictionary = {
//   "🤓": "Nerd Face",
//   "😌": "Relieved Face",
//   "😪": "Sleepy Face",
//   "🤥": "Lying Face",
//   "😕": "Confused Face",
//   "🥺": "Pleading Face",
//   "😠": "Angry Face",
//   "🤪": "Zany Face",
//   "😏": "Smirking Face",
//   "🥴": "Woozy Face"
// };

const emojiDictionary = JSON.parse(JSON.stringify(Emojis));

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "ugh!🙄\nPlease enter emoji!!!";
    } else meaning = meaning.join(", ");

    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    meaning = meaning.join(", ");
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>emoji-interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      {/* Actual output set by React using useState */}

      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji} style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
