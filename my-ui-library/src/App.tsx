
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>My UI Library</h1>

      <div style={{ marginTop: "1rem" }}>
        <Button variant="primary" onClick={() => alert("Primary clicked")}>
          Primary Button
        </Button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Button variant="secondary" onClick={() => alert("Secondary clicked")}>
          Secondary Button
        </Button>
      </div>
    </div>
  );
}

export default App;