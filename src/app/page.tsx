"use client";

import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullModal, setIsFullModal] = useState(false);

  const HeaderContent = () => (
    <div className="mt-4 space-y-2">
      <h3 className="text-sm font-medium">Header Content</h3>
      <p className="text-sm text-muted-foreground">This is some example header content.</p>
      <Button variant="outline" size="sm" onClick={() => setIsFullModal(!isFullModal)}>
        Toggle Full Screen
      </Button>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Modal Example</h1>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <Modal
        title="Example Modal"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        full={isFullModal}
        headerContent={<HeaderContent />}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Modal Content</h2>
          <p>This is an example of the modal content.</p>
          <p>You can add any React components or JSX here.</p>
          {isFullModal && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Full Screen Content</h3>
              <p>This additional content is visible in full screen mode.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </main>
  );
}