import { useState } from "react";
import { Button, Input, Modal, Card, Checkbox,Badge } from "./index";

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
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">React UI Kit</h1>

        <Card title="Demo">
          <Input
            label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            error={error}
          />

          <div className="mt-2">
            <Checkbox
              label="Subscribe to newsletter"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
            />
          </div>

          <div className="mt-4 space-x-2">
            <Button variant="primary" onClick={handleSubmit}>
              Open Greeting Modal
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert("Secondary button!")}
            >
              Secondary
            </Button>
          </div>
        </Card>

        <Modal isOpen={isModalOpen} title="Greeting" onClose={handleCloseModal}>
          <p>Hello, {name || "friend"}!</p>
          {subscribe && <p className="mt-2">Thanks for subscribing!</p>}
        </Modal>
      </div>
    </div>
  );
}

export default App;