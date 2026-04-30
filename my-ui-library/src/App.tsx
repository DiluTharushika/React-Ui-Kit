import React, { useState } from "react";
import { Button, Input, Modal,Card} from "./index";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    setError(undefined);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        Open Greeting Modal
      </Button>

      <div style={{ marginTop: "1.5rem" }}>
        <Button variant="secondary" onClick={() => alert("Secondary button!")}>
          Secondary Button
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Greeting"
        onClose={handleCloseModal}
      >
        <p>Hello, {name || "friend"}!</p>
      </Modal>
    </div>
  );
}

export default App;