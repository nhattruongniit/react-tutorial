import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const arrayWord = ["hey", "this", "is"];
  const word = arrayWord[wordIndex];

  // Returns number of letters in a word
  // We make it slow by including a large and completely unnecessary loop
  const computeLetterCount = word => {
    console.log("rerender computeLetterCount");
    let i = 0;
    while (i < 10000000) i += 1;
    return word.length;
  };

  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Compute number of letters (slow 🐌)</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === arrayWord.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>

      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
