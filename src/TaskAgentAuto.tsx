import React, { useEffect, useState } from "react";
import { Desktop } from "@wxcc-desktop/sdk";

const TaskAgentAuto: React.FC = () => {
  const [offers, setOffers] = useState<any[]>([]); // contactos ofrecidos
  const [accepted, setAccepted] = useState<any[]>([]); // contactos aceptados

  useEffect(() => {
    // ⚡ Suscribirse a nuevos contactos ofrecidos
    const handleOffer = (contact: any) => {
      console.log("Nuevo contacto ofrecido:", contact);
      setOffers((prev) => [...prev, contact]);
    };

    // El evento eAgentOffer se dispara para omnichannel (chats, mensajes, etc.)
    (Desktop.actions as any).on("eAgentOffer", handleOffer);

    // Cleanup al desmontar
    return () => {
      (Desktop.actions as any).off("eAgentOffer", handleOffer);
    };
  }, []);

  const acceptOffer = async (contact: any) => {
    try {
      await (Desktop.agentContact as any).accept({
        interactionId: contact.interactionId,
      });

      setAccepted((prev) => [...prev, contact]);
      setOffers((prev) =>
        prev.filter((c) => c.interactionId !== contact.interactionId)
      );
    } catch (err) {
      console.error("Error aceptando contacto:", err);
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">TaskAgentAuto Widget</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Ofertas de contacto:</h3>
        <ul className="list-disc ml-5">
          {offers.map((c, i) => (
            <li key={i}>
              {c.interactionId} - {c.type || "desconocido"}{" "}
              <button
                onClick={() => acceptOffer(c)}
                className="bg-green-500 text-white px-2 py-1 rounded ml-2"
              >
                Aceptar
              </button>
            </li>
          ))}
          {offers.length === 0 && <li>No hay ofertas pendientes</li>}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Contactos aceptados:</h3>
        <ul className="list-disc ml-5">
          {accepted.map((c, i) => (
            <li key={i}>
              {c.interactionId} - {c.type || "desconocido"}
            </li>
          ))}
          {accepted.length === 0 && <li>No hay contactos aceptados</li>}
        </ul>
      </div>
    </div>
  );
};

export default TaskAgentAuto;
