import React, { useEffect, useRef, useState } from "react";
import { Desktop } from "@wxcc-desktop/sdk";

type AgentInfo = {
  subStatus: string;
  agentName: string;
  agentSessionId: string;
  agentProfileID: string;
  teamName: string;
};

type OfferedItem = {
  interactionId: string;
  mediaType: string;
  when: string; // ISO time
};

const TaskAgentAuto: React.FC = () => {
  const [agent, setAgent] = useState<AgentInfo>({
    subStatus: "",
    agentName: "",
    agentSessionId: "",
    agentProfileID: "",
    teamName: "",
  });

  const [offered, setOffered] = useState<OfferedItem[]>([]);
  const initedRef = useRef(false);

  // --- helpers ---
  const snapshotAgentInfo = () => {
    const latest = (Desktop.agentStateInfo as any)?.latestData || {};
    setAgent({
      subStatus: latest.subStatus ?? "",
      agentName: latest.agentName ?? "",
      agentSessionId: latest.agentSessionId ?? "",
      agentProfileID: latest.agentProfileID ?? "",
      teamName: latest.teamName ?? "",
    });
  };

  useEffect(() => {
    if (!initedRef.current) {
      try {
        // ✅ Desactiva RTDWC para evitar el warning "issue in loading rtdwc"
        Desktop.config({
          widgetName: "TaskAgentAuto",
          widgetProvider: "QuickNet",
          features: { rtdwc: false },
        });
      } catch (e) {
        console.warn("Desktop.config init error (ignorable):", e);
      }
      initedRef.current = true;
    }

    // Snapshot inicial del estado del agente
    snapshotAgentInfo();

    // Refresco periódico del estado (cada 3s)
    const refreshId = window.setInterval(snapshotAgentInfo, 3000);

    // Escucha eventos de oferta de contacto
    const onOffer = (msg: any) => {
      const interactionId =
        msg?.data?.interaction?.interactionId ??
        msg?.data?.interactionId ??
        msg?.interactionId ??
        "Unknown";

      const mediaType =
        msg?.data?.interaction?.mediaType ??
        msg?.data?.mediaType ??
        msg?.mediaType ??
        "unknown";

      setOffered((prev) => [
        {
          interactionId: String(interactionId),
          mediaType: String(mediaType),
          when: new Date().toISOString(),
        },
        ...prev,
      ]);

      snapshotAgentInfo();
    };

    try {
      Desktop.agentContact.addEventListener("eAgentOfferContact", onOffer);
    } catch (e) {
      console.error("No se pudo suscribir a eAgentOfferContact:", e);
    }

    return () => {
      window.clearInterval(refreshId);
      try {
        Desktop.agentContact.removeEventListener?.("eAgentOfferContact", onOffer);
      } catch {
        /* noop */
      }
    };
  }, []);

  return (
    <div className="p-4 bg-gray-50 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Task Agent Auto</h2>

      {/* Info del Agente */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Agent Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          <div><span className="text-gray-500">Name:</span> <span className="font-medium">{agent.agentName}</span></div>
          <div><span className="text-gray-500">State:</span> <span className="font-medium">{agent.subStatus}</span></div>
          <div><span className="text-gray-500">Session:</span> <span className="font-mono">{agent.agentSessionId}</span></div>
          <div><span className="text-gray-500">Profile:</span> <span className="font-mono">{agent.agentProfileID}</span></div>
          <div><span className="text-gray-500">Team:</span> <span className="font-medium">{agent.teamName}</span></div>
        </div>
      </div>

      {/* Interacciones ofrecidas */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Interacciones ofrecidas</h3>
        {offered.length === 0 ? (
          <p className="text-gray-500 text-sm">Aún no se ofrecen interacciones.</p>
        ) : (
          <ul className="divide-y">
            {offered.map((o, idx) => (
              <li key={`${o.interactionId}-${idx}`} className="py-2 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-gray-500">ID:</span>{" "}
                    <span className="font-mono">{o.interactionId}</span>{" "}
                    <span className="text-gray-500">({o.mediaType})</span>
                  </div>
                  <div className="text-gray-500">
                    {new Date(o.when).toLocaleString()}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskAgentAuto;
