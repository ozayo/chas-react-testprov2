// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

// 1. Kommentarslista 3p
// Hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

import { useState } from "react";

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

let count = 1;

export default function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  function handleComment(e) {
    setInput(e.target.value);
  }

  function handleAddComment() {
    if (input.trim() === "") return; 

    const comment = {
      id: count++,
      text: input,
    };

    setComments([...comments, comment]);
    setInput(""); 
  }

  function handleRemove(id) {
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
  }

  return (
    <main>
      {comments.map((comment) => (
        <div key={comment.id}> {/* key prop'u eklendi */}
          <p>{comment.text}</p>
          <button onClick={() => handleRemove(comment.id)}>Remove</button>
        </div>
      ))}

      <input type="text" value={input} onChange={handleComment} /> {/* value prop'u eklendi */}
      <button onClick={handleAddComment}>Add</button>
    </main>
  );
}