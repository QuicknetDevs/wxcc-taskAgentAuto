(function(x){"use strict";var o={exports:{}},r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function k(){if(d)return r;d=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(p,t,e){var u=null;if(e!==void 0&&(u=""+e),t.key!==void 0&&(u=""+t.key),"key"in t){e={};for(var c in t)c!=="key"&&(e[c]=t[c])}else e=t;return t=e.ref,{$$typeof:a,type:p,key:u,ref:t!==void 0?t:null,props:e}}return r.Fragment=n,r.jsx=s,r.jsxs=s,r}var l;function f(){return l||(l=1,o.exports=k()),o.exports}var i=f();const w=()=>(x.useEffect(()=>{console.log("wxcc-taskAgentAuto iniciado");const a=()=>{if(window.Desktop&&window.Desktop.media){const s=window.Desktop.media;return s.onTaskNotification(async t=>{if(t.status==="new"&&t.mediaType==="chat"){console.log("Nueva tarea detectada:",t.taskId);try{await s.acceptTask(t.taskId),console.log("Tarea aceptada automáticamente:",t.taskId)}catch(e){console.error("Error al aceptar la tarea:",e)}}})}else setTimeout(a,100)},n=a();return()=>{typeof n=="function"&&n()}},[]),i.jsxs("div",{children:[i.jsx("h3",{children:"wxcc-taskAgentAuto"}),i.jsx("p",{children:"Las tareas de chat/WhatsApp se aceptarán automáticamente."})]}));window.registerWidget?.("wxcc-taskagentauto",w)})(react);
