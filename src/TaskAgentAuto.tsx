import React, { useEffect, useState } from "react";
import webex from '@webex/contact-center'

// ⚠️ Asegúrate de tener cargado el SDK en tu layout (ej. window.webex.cc disponible)
declare global {
  interface Window {
    webex: any;
  }
}

const TaskAgentAuto: React.FC = () => {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    if (!window.webex?.cc) {
      console.error("Webex CC SDK no está disponible en window.webex");
      return;
    }

    const handleTaskIncoming = (task: any) => {
      console.log("👉 Nuevo task entrante:", task);
      setActiveCount((c) => c + 1);
    };

    const handleTaskHydrate = (task: any) => {
      console.log("👉 Task restaurado (hydrate):", task);
      setActiveCount((c) => c + 1);
    };

    const handleTaskEnded = (task: any) => {
      console.log("👋 Task finalizado:", task);
      setActiveCount((c) => Math.max(0, c - 1));
    };

    // Registrar eventos del Webex Web SDK
    window.webex.cc.on("task:incoming", handleTaskIncoming);
    window.webex.cc.on("task:hydrate", handleTaskHydrate);
    window.webex.cc.on("task:ended", handleTaskEnded);

    return () => {
      window.webex.cc.off("task:incoming", handleTaskIncoming);
      window.webex.cc.off("task:hydrate", handleTaskHydrate);
      window.webex.cc.off("task:ended", handleTaskEnded);
    };
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-bold mb-2">WXCC Auto Task Handler</h2>
      <p>📊 Tareas activas: {activeCount}</p>
    </div>
  );
};

export default TaskAgentAuto;
