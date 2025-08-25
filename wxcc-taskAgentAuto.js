(function(p,R){"use strict";var n={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function k(){if(l)return a;l=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function e(c,t,r){var u=null;if(r!==void 0&&(u=""+r),t.key!==void 0&&(u=""+t.key),"key"in t){r={};for(var d in t)d!=="key"&&(r[d]=t[d])}else r=t;return t=r.ref,{$$typeof:s,type:c,key:u,ref:t!==void 0?t:null,props:r}}return a.Fragment=i,a.jsx=e,a.jsxs=e,a}var x;function v(){return x||(x=1,n.exports=k()),n.exports}var o=v();const m=()=>(p.useEffect(()=>{console.log("wxcc-taskAgentAuto iniciado");const s=R.Desktop.media,i=s.onTaskNotification(async e=>{if(e.status==="new"&&e.mediaType==="chat"){console.log("Nueva tarea detectada:",e.taskId);try{await s.acceptTask(e.taskId),console.log("Tarea aceptada automáticamente:",e.taskId)}catch(c){console.error("Error al aceptar la tarea:",c)}}});return()=>i()},[]),o.jsxs("div",{children:[o.jsx("h3",{children:"wxcc-taskAgentAuto"}),o.jsx("p",{children:"Las tareas de chat/WhatsApp se aceptarán automáticamente."})]}));window.registerWidget?.("wxcc-taskagentauto",m)})(React,Desktop);
