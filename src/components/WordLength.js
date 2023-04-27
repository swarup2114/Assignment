import React, { useState } from "react";

function WordLength() {
  const [text, setText] = useState("");
  function handleText(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setText(text.toUpperCase());
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSubmit}>submit</button>
      <p>
        number of words {text.split(" ").length} and number of characters
        {text.length}
      </p>
    </div>
  );
}

export default WordLength;
