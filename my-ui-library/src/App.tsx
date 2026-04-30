import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    setError(undefined);
    alert(`Hello, ${name}!`);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>My UI Library</h1>

      <Input
        label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        error={error}
      />

      <Button variant="primary" onClick={handleSubmit}>
        Say Hello
      </Button>
    </div>
  );
}

export default App;