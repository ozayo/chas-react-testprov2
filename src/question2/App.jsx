// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from "react";

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

function App() {
  const [email, setEmail] = useState("ozay@chasacademy.se");
  const [edit, setEdit] = useState(false);

  function handleSave() {
    setEdit(false); 
  }

  return (
    <div>
      {edit ? (
        <>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{email}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default App;