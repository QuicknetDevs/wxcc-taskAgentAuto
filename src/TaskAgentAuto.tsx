import React, { useEffect } from "react";
import { Desktop } from "@wxcc-desktop/sdk";

type WxCCTask = {
  taskId: string;
  status: string;
  mediaType: string;
};

// Tipo parcial de Desktop
type DesktopPartial = {
  media: {
    onTaskNotification: (callback: (task: WxCCTask) => void) => () => void;
    acceptTask: (taskId: string) => Promise<void>;
  };
};

const TaskAgentAuto: React.FC = () => {

  useEffect(() => {
    console.log("wxcc-taskAgentAuto iniciado");

    const media = (Desktop as unknown as DesktopPartial).media;

    const unsubscribe = media.onTaskNotification(async (task: WxCCTask) => {
      if (task.status === "new" && task.mediaType === "chat") {
        console.log("Nueva tarea detectada:", task.taskId);

        try {
          await media.acceptTask(task.taskId);
          console.log("Tarea aceptada automáticamente:", task.taskId);
        } catch (err) {
          console.error("Error al aceptar la tarea:", err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>wxcc-taskAgentAuto</h3>
      <p>Las tareas de chat/WhatsApp se aceptarán automáticamente.</p>
    </div>
  );
};

export default TaskAgentAuto;