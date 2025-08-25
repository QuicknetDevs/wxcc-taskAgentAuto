import re, { useEffect as te } from "react";
import { Desktop as ne } from "@wxcc-desktop/sdk";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  if (D) return R;
  D = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function o(f, s, u) {
    var E = null;
    if (u !== void 0 && (E = "" + u), s.key !== void 0 && (E = "" + s.key), "key" in s) {
      u = {};
      for (var _ in s)
        _ !== "key" && (u[_] = s[_]);
    } else u = s;
    return s = u.ref, {
      $$typeof: c,
      type: f,
      key: E,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return R.Fragment = d, R.jsx = o, R.jsxs = o, R;
}
var b = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function oe() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function o(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function f(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, n, i, l, O, h) {
      return t = l.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: l,
        _owner: i
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, n, i, l, O, h) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              S(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(a);
      if (y.call(r, "key")) {
        a = c(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          m,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (o(t), a = "" + t), E(r) && (o(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return a && _(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        a,
        l,
        i,
        s(),
        t,
        O,
        h
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var p = re, j = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, K = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = p.react_stack_bottom_frame.bind(
      p,
      u
    )(), I = A(f(u)), $ = {};
    b.Fragment = v, b.jsx = function(e, r, t, n, i) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        n,
        i,
        l ? Error("react-stack-top-frame") : Y,
        l ? A(f(e)) : I
      );
    }, b.jsxs = function(e, r, t, n, i) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        n,
        i,
        l ? Error("react-stack-top-frame") : Y,
        l ? A(f(e)) : I
      );
    };
  })()), b;
}
var L;
function se() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? T.exports = ae() : T.exports = oe()), T.exports;
}
var x = se();
const le = () => (te(() => {
  console.log("wxcc-taskAgentAuto iniciado");
  const c = ne.media, d = c.onTaskNotification(async (o) => {
    if (o.status === "new" && o.mediaType === "chat") {
      console.log("Nueva tarea detectada:", o.taskId);
      try {
        await c.acceptTask(o.taskId), console.log("Tarea aceptada automáticamente:", o.taskId);
      } catch (f) {
        console.error("Error al aceptar la tarea:", f);
      }
    }
  });
  return () => d();
}, []), /* @__PURE__ */ x.jsxs("div", { children: [
  /* @__PURE__ */ x.jsx("h3", { children: "wxcc-taskAgentAuto" }),
  /* @__PURE__ */ x.jsx("p", { children: "Las tareas de chat/WhatsApp se aceptarán automáticamente." })
] }));
export {
  le as default
};
