import { useState } from "react";
import { Button, Input, Modal, Card, Checkbox } from "./index";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

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
      <Card title="React UI Kit Demo">
        <Input
          label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          error={error}
        />

        <div style={{ marginTop: "1rem" }}>
          <Checkbox
            label="Subscribe to newsletter"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button variant="primary" onClick={handleSubmit}>
            Open Greeting Modal
          </Button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button
            variant="secondary"
            onClick={() => alert("Secondary button!")}
          >
            Secondary Button
          </Button>
        </div>
      </Card>

      <Modal isOpen={isModalOpen} title="Greeting" onClose={handleCloseModal}>
        <p>Hello, {name || "friend"}!</p>
        {subscribe && <p>Thanks for subscribing!</p>}
      </Modal>
    </div>
  );
}

export default App;