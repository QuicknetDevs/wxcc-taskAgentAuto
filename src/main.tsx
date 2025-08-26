import React from "react";
import ReactDOM from "react-dom";
import TaskAgentAuto from "./TaskAgentAuto";

class WxccTaskAgentAuto extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    // Usa ReactDOM.render para compatibilidad con React 17+ en IIFE
    ReactDOM.render(
      <React.StrictMode>
        <TaskAgentAuto />
      </React.StrictMode>,
      mountPoint
    );
  }

  disconnectedCallback() {
    // Limpiar React cuando se desconecta
    if (this.firstChild) {
      ReactDOM.unmountComponentAtNode(this.firstChild as Element);
    }
  }
}

// Registrar el custom element
if (!customElements.get("wxcc-taskagentauto")) {
  customElements.define("wxcc-taskagentauto", WxccTaskAgentAuto);
}
