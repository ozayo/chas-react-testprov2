// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.
import ColorDisplay from "./ColorDisplay";
import ColorSelector from "./ColorSelector";
import { ColorProvider } from "./colorContext";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorSelector />
        <ColorDisplay />
      </div>
    </ColorProvider>
  );
}

export default App;
