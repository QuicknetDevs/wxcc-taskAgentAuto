import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const TaskAgentAuto: React.FC = () => {
  useEffect(() => {
    const waitForDesktop = () => {
      const Desktop = (window as any).Desktop;
      if (Desktop?.media) {
        Desktop.media.onTaskNotification(async (task: any) => {
          if (task.status === "new" && task.mediaType === "chat") {
            try {
              await Desktop.media.acceptTask(task.taskId);
              console.log("Tarea aceptada automáticamente:", task.taskId);
            } catch (err) {
              console.error(err);
            }
          }
        });
      } else setTimeout(waitForDesktop, 100);
    };
    waitForDesktop();
  }, []);

  return null; // invisible
};

// 🔹 Exponer React y ReactDOM globalmente
(window as any).React = React;
(window as any).ReactDOM = ReactDOM;

// 🔹 Registrar widget globalmente
(window as any).registerWidget?.("wxcc-taskagentauto", TaskAgentAuto);
