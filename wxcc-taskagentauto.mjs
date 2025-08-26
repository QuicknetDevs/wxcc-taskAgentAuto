import hr, { useState as cr, useEffect as oi } from "react";
import lr from "react-dom";
var Cn = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function si() {
  if (dr) return an;
  dr = 1;
  var Ve = hr, Ee = Symbol.for("react.element"), Z = Symbol.for("react.fragment"), K = Object.prototype.hasOwnProperty, O = Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, k, j) {
    var I, D = {}, J = null, p = null;
    j !== void 0 && (J = "" + j), k.key !== void 0 && (J = "" + k.key), k.ref !== void 0 && (p = k.ref);
    for (I in k) K.call(k, I) && !v.hasOwnProperty(I) && (D[I] = k[I]);
    if (m && m.defaultProps) for (I in k = m.defaultProps, k) D[I] === void 0 && (D[I] = k[I]);
    return { $$typeof: Ee, type: m, key: J, ref: p, props: D, _owner: O.current };
  }
  return an.Fragment = Z, an.jsx = h, an.jsxs = h, an;
}
var un = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function ai() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var Ve = hr, Ee = Symbol.for("react.element"), Z = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), m = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), H = Symbol.iterator, W = "@@iterator";
    function it(C) {
      if (C === null || typeof C != "object")
        return null;
      var ct = H && C[H] || C[W];
      return typeof ct == "function" ? ct : null;
    }
    var B = Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function X(C) {
      {
        for (var ct = arguments.length, pt = new Array(ct > 1 ? ct - 1 : 0), At = 1; At < ct; At++)
          pt[At - 1] = arguments[At];
        _("error", C, pt);
      }
    }
    function _(C, ct, pt) {
      {
        var At = B.ReactDebugCurrentFrame, Vt = At.getStackAddendum();
        Vt !== "" && (ct += "%s", pt = pt.concat([Vt]));
        var Jt = pt.map(function(_t) {
          return String(_t);
        });
        Jt.unshift("Warning: " + ct), Function.prototype.apply.call(console[C], console, Jt);
      }
    }
    var at = !1, lt = !1, ot = !1, F = !1, yt = !1, bt;
    bt = Symbol.for("react.module.reference");
    function It(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === K || C === v || yt || C === O || C === j || C === I || F || C === p || at || lt || ot || typeof C == "object" && C !== null && (C.$$typeof === J || C.$$typeof === D || C.$$typeof === h || C.$$typeof === m || C.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === bt || C.getModuleId !== void 0));
    }
    function Bt(C, ct, pt) {
      var At = C.displayName;
      if (At)
        return At;
      var Vt = ct.displayName || ct.name || "";
      return Vt !== "" ? pt + "(" + Vt + ")" : pt;
    }
    function z(C) {
      return C.displayName || "Context";
    }
    function G(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case K:
          return "Fragment";
        case Z:
          return "Portal";
        case v:
          return "Profiler";
        case O:
          return "StrictMode";
        case j:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case m:
            var ct = C;
            return z(ct) + ".Consumer";
          case h:
            var pt = C;
            return z(pt._context) + ".Provider";
          case k:
            return Bt(C, C.render, "ForwardRef");
          case D:
            var At = C.displayName || null;
            return At !== null ? At : G(C.type) || "Memo";
          case J: {
            var Vt = C, Jt = Vt._payload, _t = Vt._init;
            try {
              return G(_t(Jt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, f = 0, A, M, vt, wt, Et, Mt, Y;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function rt() {
      {
        if (f === 0) {
          A = console.log, M = console.info, vt = console.warn, wt = console.error, Et = console.group, Mt = console.groupCollapsed, Y = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        f++;
      }
    }
    function et() {
      {
        if (f--, f === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, C, {
              value: A
            }),
            info: P({}, C, {
              value: M
            }),
            warn: P({}, C, {
              value: vt
            }),
            error: P({}, C, {
              value: wt
            }),
            group: P({}, C, {
              value: Et
            }),
            groupCollapsed: P({}, C, {
              value: Mt
            }),
            groupEnd: P({}, C, {
              value: Y
            })
          });
        }
        f < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gt = B.ReactCurrentDispatcher, Qt;
    function Xt(C, ct, pt) {
      {
        if (Qt === void 0)
          try {
            throw Error();
          } catch (Vt) {
            var At = Vt.stack.trim().match(/\n( *(at )?)/);
            Qt = At && At[1] || "";
          }
        return `
` + Qt + C;
      }
    }
    var re = !1, he;
    {
      var y = typeof WeakMap == "function" ? WeakMap : Map;
      he = new y();
    }
    function u(C, ct) {
      if (!C || re)
        return "";
      {
        var pt = he.get(C);
        if (pt !== void 0)
          return pt;
      }
      var At;
      re = !0;
      var Vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Jt;
      Jt = Gt.current, Gt.current = null, rt();
      try {
        if (ct) {
          var _t = function() {
            throw Error();
          };
          if (Object.defineProperty(_t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_t, []);
            } catch (Kt) {
              At = Kt;
            }
            Reflect.construct(C, [], _t);
          } else {
            try {
              _t.call();
            } catch (Kt) {
              At = Kt;
            }
            C.call(_t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kt) {
            At = Kt;
          }
          C();
        }
      } catch (Kt) {
        if (Kt && At && typeof Kt.stack == "string") {
          for (var Nt = Kt.stack.split(`
`), ie = At.stack.split(`
`), qt = Nt.length - 1, Yt = ie.length - 1; qt >= 1 && Yt >= 0 && Nt[qt] !== ie[Yt]; )
            Yt--;
          for (; qt >= 1 && Yt >= 0; qt--, Yt--)
            if (Nt[qt] !== ie[Yt]) {
              if (qt !== 1 || Yt !== 1)
                do
                  if (qt--, Yt--, Yt < 0 || Nt[qt] !== ie[Yt]) {
                    var ee = `
` + Nt[qt].replace(" at new ", " at ");
                    return C.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", C.displayName)), typeof C == "function" && he.set(C, ee), ee;
                  }
                while (qt >= 1 && Yt >= 0);
              break;
            }
        }
      } finally {
        re = !1, Gt.current = Jt, et(), Error.prepareStackTrace = Vt;
      }
      var Ce = C ? C.displayName || C.name : "", Oe = Ce ? Xt(Ce) : "";
      return typeof C == "function" && he.set(C, Oe), Oe;
    }
    function r(C, ct, pt) {
      return u(C, !1);
    }
    function s(C) {
      var ct = C.prototype;
      return !!(ct && ct.isReactComponent);
    }
    function l(C, ct, pt) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return u(C, s(C));
      if (typeof C == "string")
        return Xt(C);
      switch (C) {
        case j:
          return Xt("Suspense");
        case I:
          return Xt("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case k:
            return r(C.render);
          case D:
            return l(C.type, ct, pt);
          case J: {
            var At = C, Vt = At._payload, Jt = At._init;
            try {
              return l(Jt(Vt), ct, pt);
            } catch {
            }
          }
        }
      return "";
    }
    var S = Object.prototype.hasOwnProperty, d = {}, L = B.ReactDebugCurrentFrame;
    function b(C) {
      if (C) {
        var ct = C._owner, pt = l(C.type, C._source, ct ? ct.type : null);
        L.setExtraStackFrame(pt);
      } else
        L.setExtraStackFrame(null);
    }
    function E(C, ct, pt, At, Vt) {
      {
        var Jt = Function.call.bind(S);
        for (var _t in C)
          if (Jt(C, _t)) {
            var Nt = void 0;
            try {
              if (typeof C[_t] != "function") {
                var ie = Error((At || "React class") + ": " + pt + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              Nt = C[_t](ct, _t, At, pt, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              Nt = qt;
            }
            Nt && !(Nt instanceof Error) && (b(Vt), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", At || "React class", pt, _t, typeof Nt), b(null)), Nt instanceof Error && !(Nt.message in d) && (d[Nt.message] = !0, b(Vt), X("Failed %s type: %s", pt, Nt.message), b(null));
          }
      }
    }
    var x = Array.isArray;
    function T(C) {
      return x(C);
    }
    function N(C) {
      {
        var ct = typeof Symbol == "function" && Symbol.toStringTag, pt = ct && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return pt;
      }
    }
    function U(C) {
      try {
        return $(C), !1;
      } catch {
        return !0;
      }
    }
    function $(C) {
      return "" + C;
    }
    function tt(C) {
      if (U(C))
        return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", N(C)), $(C);
    }
    var St = B.ReactCurrentOwner, Pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ht, le;
    function de(C) {
      if (S.call(C, "ref")) {
        var ct = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (ct && ct.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function we(C) {
      if (S.call(C, "key")) {
        var ct = Object.getOwnPropertyDescriptor(C, "key").get;
        if (ct && ct.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function ge(C, ct) {
      typeof C.ref == "string" && St.current;
    }
    function Me(C, ct) {
      {
        var pt = function() {
          Ht || (Ht = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ct));
        };
        pt.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: pt,
          configurable: !0
        });
      }
    }
    function pe(C, ct) {
      {
        var pt = function() {
          le || (le = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ct));
        };
        pt.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: pt,
          configurable: !0
        });
      }
    }
    var De = function(C, ct, pt, At, Vt, Jt, _t) {
      var Nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Ee,
        // Built-in properties that belong on the element
        type: C,
        key: ct,
        ref: pt,
        props: _t,
        // Record the component responsible for creating this element.
        _owner: Jt
      };
      return Nt._store = {}, Object.defineProperty(Nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: At
      }), Object.defineProperty(Nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Vt
      }), Object.freeze && (Object.freeze(Nt.props), Object.freeze(Nt)), Nt;
    };
    function ve(C, ct, pt, At, Vt) {
      {
        var Jt, _t = {}, Nt = null, ie = null;
        pt !== void 0 && (tt(pt), Nt = "" + pt), we(ct) && (tt(ct.key), Nt = "" + ct.key), de(ct) && (ie = ct.ref, ge(ct, Vt));
        for (Jt in ct)
          S.call(ct, Jt) && !Pt.hasOwnProperty(Jt) && (_t[Jt] = ct[Jt]);
        if (C && C.defaultProps) {
          var qt = C.defaultProps;
          for (Jt in qt)
            _t[Jt] === void 0 && (_t[Jt] = qt[Jt]);
        }
        if (Nt || ie) {
          var Yt = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          Nt && Me(_t, Yt), ie && pe(_t, Yt);
        }
        return De(C, Nt, ie, Vt, At, St.current, _t);
      }
    }
    var Le = B.ReactCurrentOwner, zt = B.ReactDebugCurrentFrame;
    function me(C) {
      if (C) {
        var ct = C._owner, pt = l(C.type, C._source, ct ? ct.type : null);
        zt.setExtraStackFrame(pt);
      } else
        zt.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function a(C) {
      return typeof C == "object" && C !== null && C.$$typeof === Ee;
    }
    function c() {
      {
        if (Le.current) {
          var C = G(Le.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function V(C) {
      return "";
    }
    var gt = {};
    function dt(C) {
      {
        var ct = c();
        if (!ct) {
          var pt = typeof C == "string" ? C : C.displayName || C.name;
          pt && (ct = `

Check the top-level render call using <` + pt + ">.");
        }
        return ct;
      }
    }
    function Ct(C, ct) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var pt = dt(ct);
        if (gt[pt])
          return;
        gt[pt] = !0;
        var At = "";
        C && C._owner && C._owner !== Le.current && (At = " It was passed a child from " + G(C._owner.type) + "."), me(C), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pt, At), me(null);
      }
    }
    function Lt(C, ct) {
      {
        if (typeof C != "object")
          return;
        if (T(C))
          for (var pt = 0; pt < C.length; pt++) {
            var At = C[pt];
            a(At) && Ct(At, ct);
          }
        else if (a(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Vt = it(C);
          if (typeof Vt == "function" && Vt !== C.entries)
            for (var Jt = Vt.call(C), _t; !(_t = Jt.next()).done; )
              a(_t.value) && Ct(_t.value, ct);
        }
      }
    }
    function xt(C) {
      {
        var ct = C.type;
        if (ct == null || typeof ct == "string")
          return;
        var pt;
        if (typeof ct == "function")
          pt = ct.propTypes;
        else if (typeof ct == "object" && (ct.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ct.$$typeof === D))
          pt = ct.propTypes;
        else
          return;
        if (pt) {
          var At = G(ct);
          E(pt, C.props, "prop", At, C);
        } else if (ct.PropTypes !== void 0 && !mt) {
          mt = !0;
          var Vt = G(ct);
          X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Vt || "Unknown");
        }
        typeof ct.getDefaultProps == "function" && !ct.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(C) {
      {
        for (var ct = Object.keys(C.props), pt = 0; pt < ct.length; pt++) {
          var At = ct[pt];
          if (At !== "children" && At !== "key") {
            me(C), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", At), me(null);
            break;
          }
        }
        C.ref !== null && (me(C), X("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    var ut = {};
    function jt(C, ct, pt, At, Vt, Jt) {
      {
        var _t = It(C);
        if (!_t) {
          var Nt = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (Nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = V();
          ie ? Nt += ie : Nt += c();
          var qt;
          C === null ? qt = "null" : T(C) ? qt = "array" : C !== void 0 && C.$$typeof === Ee ? (qt = "<" + (G(C.type) || "Unknown") + " />", Nt = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof C, X("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, Nt);
        }
        var Yt = ve(C, ct, pt, Vt, Jt);
        if (Yt == null)
          return Yt;
        if (_t) {
          var ee = ct.children;
          if (ee !== void 0)
            if (At)
              if (T(ee)) {
                for (var Ce = 0; Ce < ee.length; Ce++)
                  Lt(ee[Ce], C);
                Object.freeze && Object.freeze(ee);
              } else
                X("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lt(ee, C);
        }
        if (S.call(ct, "key")) {
          var Oe = G(C), Kt = Object.keys(ct).filter(function(cn) {
            return cn !== "key";
          }), qe = Kt.length > 0 ? "{key: someKey, " + Kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ut[Oe + qe]) {
            var Ue = Kt.length > 0 ? "{" + Kt.join(": ..., ") + ": ...}" : "{}";
            X(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, Oe, Ue, Oe), ut[Oe + qe] = !0;
          }
        }
        return C === K ? ft(Yt) : xt(Yt), Yt;
      }
    }
    function te(C, ct, pt) {
      return jt(C, ct, pt, !0);
    }
    function ke(C, ct, pt) {
      return jt(C, ct, pt, !1);
    }
    var se = ke, ye = te;
    un.Fragment = K, un.jsx = se, un.jsxs = ye;
  }()), un;
}
process.env.NODE_ENV === "production" ? Cn.exports = si() : Cn.exports = ai();
var Ne = Cn.exports, gr = { exports: {} };
(function(Ve, Ee) {
  (function(Z, K) {
    Ve.exports = K();
  })(window, function() {
    return function(Z) {
      var K = {};
      function O(v) {
        if (K[v]) return K[v].exports;
        var h = K[v] = { i: v, l: !1, exports: {} };
        return Z[v].call(h.exports, h, h.exports, O), h.l = !0, h.exports;
      }
      return O.m = Z, O.c = K, O.d = function(v, h, m) {
        O.o(v, h) || Object.defineProperty(v, h, { enumerable: !0, get: m });
      }, O.r = function(v) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(v, "__esModule", { value: !0 });
      }, O.t = function(v, h) {
        if (1 & h && (v = O(v)), 8 & h || 4 & h && typeof v == "object" && v && v.__esModule) return v;
        var m = /* @__PURE__ */ Object.create(null);
        if (O.r(m), Object.defineProperty(m, "default", { enumerable: !0, value: v }), 2 & h && typeof v != "string") for (var k in v) O.d(m, k, (function(j) {
          return v[j];
        }).bind(null, k));
        return m;
      }, O.n = function(v) {
        var h = v && v.__esModule ? function() {
          return v.default;
        } : function() {
          return v;
        };
        return O.d(h, "a", h), h;
      }, O.o = function(v, h) {
        return Object.prototype.hasOwnProperty.call(v, h);
      }, O.p = "/", O(O.s = 67);
    }([function(Z, K, O) {
      Z.exports = function(v) {
        var h = {};
        function m(k) {
          if (h[k]) return h[k].exports;
          var j = h[k] = { i: k, l: !1, exports: {} };
          return v[k].call(j.exports, j, j.exports, m), j.l = !0, j.exports;
        }
        return m.m = v, m.c = h, m.d = function(k, j, I) {
          m.o(k, j) || Object.defineProperty(k, j, { enumerable: !0, get: I });
        }, m.r = function(k) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(k, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(k, "__esModule", { value: !0 });
        }, m.t = function(k, j) {
          if (1 & j && (k = m(k)), 8 & j || 4 & j && typeof k == "object" && k && k.__esModule) return k;
          var I = /* @__PURE__ */ Object.create(null);
          if (m.r(I), Object.defineProperty(I, "default", { enumerable: !0, value: k }), 2 & j && typeof k != "string") for (var D in k) m.d(I, D, (function(J) {
            return k[J];
          }).bind(null, D));
          return I;
        }, m.n = function(k) {
          var j = k && k.__esModule ? function() {
            return k.default;
          } : function() {
            return k;
          };
          return m.d(j, "a", j), j;
        }, m.o = function(k, j) {
          return Object.prototype.hasOwnProperty.call(k, j);
        }, m.p = "/", m(m.s = 8);
      }([function(v, h) {
        v.exports = O(6);
      }, function(v, h) {
        v.exports = O(41);
      }, function(v, h) {
        v.exports = O(11);
      }, function(v, h) {
        v.exports = O(44);
      }, function(v, h) {
        v.exports = O(68);
      }, function(v, h) {
        v.exports = O(69);
      }, function(v, h) {
        v.exports = O(64);
      }, function(v, h) {
        v.exports = O(66);
      }, function(v, h, m) {
        m.r(h), m.d(h, "BrowserNotification", function() {
          return it;
        }), m.d(h, "createBrowserNotifications", function() {
          return X;
        }), m.d(h, "Decorator", function() {
          return at;
        }), m.d(h, "Err", function() {
          return B;
        }), m.d(h, "Evt", function() {
          return F;
        }), m.d(h, "createHttp", function() {
          return Bt;
        }), m.d(h, "I18N", function() {
          return z;
        }), m.d(h, "createLogger", function() {
          return H;
        }), m.d(h, "Logger", function() {
          return p;
        }), m.d(h, "createNotifications", function() {
          return rt;
        }), m.d(h, "Notifications", function() {
          return Et;
        }), m.d(h, "Signal", function() {
          return Mt;
        }), m.d(h, "clearInterval", function() {
          return Xt;
        }), m.d(h, "clearTimeout", function() {
          return re;
        }), m.d(h, "setInterval", function() {
          return he;
        }), m.d(h, "setTimeout", function() {
          return y;
        });
        var k = m(0), j = m.n(k), I = m(1);
        class D {
          constructor(r) {
            this.maskKeys = r;
          }
          tryJSONParse(r) {
            try {
              return JSON.parse(r);
            } catch {
              return;
            }
          }
          copiedObj(r) {
            try {
              return JSON.parse(JSON.stringify(r));
            } catch {
              return r;
            }
          }
          maskObjectProperty(r) {
            const s = r;
            Object.keys(r).forEach((l) => {
              typeof r[l] == "object" && r[l] !== null ? this.maskObjectProperty(r[l]) : s[l] = "*********";
            });
          }
          maskLogData(r) {
            Object.keys(r).forEach((s) => {
              typeof r[s] == "object" && r[s] !== null ? this.maskKeys[s] ? this.maskObjectProperty(r[s]) : this.maskLogData(r[s]) : (this.maskKeys[s] && typeof r[s] == "string" || s === "value" && this.maskKeys[r.name]) && (r[s] = "*********");
            });
          }
          maskPIIInformation(r) {
            const s = r[r.length - 1], l = typeof s == "string" ? this.tryJSONParse(s) : this.copiedObj(s);
            l && typeof l == "object" && (this.maskLogData(l), r.splice(r.length - 1, 1, l));
          }
        }
        const J = (...u) => u.map((r) => typeof r == "string" ? r : JSON.stringify(r));
        var p;
        function H(u, r) {
          const s = new p.Service(u, r);
          return p.POOL.addLogger(s), s;
        }
        (function(u) {
          u.MAX_LOGS_SIZE = 1048576, u.LS_LOGS_KEY = "uuip-client-logs";
          const r = /[\u0100-\uFFFF]/g;
          let s;
          (function(S) {
            S[S.Trace = 1] = "Trace", S[S.Debug = 2] = "Debug", S[S.Warn = 3] = "Warn", S[S.Error = 4] = "Error", S[S.Fatal = 5] = "Fatal";
          })(s = u.Level || (u.Level = {})), u.Service = class {
            constructor(S, d) {
              this.loggerEmitter = j()(), this.prefix = S, this.maskKeys = d;
            }
            log(S, ...d) {
              this.maskKeys && typeof this.maskKeys == "object" && ((T, N) => {
                new D(N).maskPIIInformation(T);
              })(d, this.maskKeys);
              const L = J(this.prefix ? ["" + this.prefix, ...d] : d), b = Date.now(), E = I.DateTime.fromMillis(b).toFormat("yyyy-LL-dd HH:mm:ss:SSS");
              switch (S) {
                case u.Level.Trace:
                  console.info(E, ...L);
                  break;
                case u.Level.Debug:
                  console.log(E, ...L);
                  break;
                case u.Level.Warn:
                  console.warn(E, ...L);
                  break;
                case u.Level.Error:
                case u.Level.Fatal:
                  console.error(E, ...L);
                  break;
                default:
                  console.log(...L);
              }
              const x = { pfx: this.prefix, msgs: [...d], ts: b, lvl: S };
              this.emit("add", x);
            }
            info(...S) {
              this.log(s.Trace, ...S);
            }
            debug(...S) {
              this.log(s.Debug, ...S);
            }
            warn(...S) {
              this.log(s.Warn, ...S);
            }
            error(...S) {
              this.log(s.Error, ...S);
            }
            emit(S, ...d) {
              this.loggerEmitter.emit(S, ...d);
            }
            addEventListener(S, d) {
              return this.loggerEmitter.on(S, d), () => {
                this.removeEventListener(S, d);
              };
            }
            removeEventListener(S, d) {
              this.loggerEmitter.off(S, d);
            }
          };
          class l {
            constructor() {
              this.loggers = /* @__PURE__ */ new Map(), this.logsCollection = [], this.logsCollectionString = "", this.prefixedLogsCollections = {}, this.logRecordsSerializedLength = 0, this.onLoggerAddRecord = (d) => {
                this.addLogRecord(d), this.save();
              }, this.restore();
            }
            static getSerializedJsonLogRecordBytesSize(d = "") {
              const L = d.length;
              if (L) {
                const b = d.replace(r, "").length;
                return 1 * b + 2 * (L - b);
              }
              return L;
            }
            get serializedJsonLogsBytesSize() {
              const d = this.logsCollectionString.split("<uuip-eol>").length;
              return 2 + this.logRecordsSerializedLength + 1 * (d - 1);
            }
            save() {
              window.sessionStorage.setItem(u.LS_LOGS_KEY, this.logsCollectionString);
            }
            restore() {
              try {
                const d = window.sessionStorage.getItem(u.LS_LOGS_KEY) || "";
                this.logsCollectionString = d, this.logRecordsSerializedLength += l.getSerializedJsonLogRecordBytesSize(this.logsCollectionString), this.restorePreFixedLogs();
              } catch (d) {
                console.warn("Logger failed read logs from sessionStorage: ", d);
              }
            }
            getLogObjectFromString() {
              try {
                return this.logsCollectionString !== "" ? JSON.parse(`[${this.logsCollectionString.split("<uuip-eol>").join(",")}]`) : [];
              } catch {
                console.log("Error parsing local storage data");
              }
            }
            restorePreFixedLogs() {
              const d = this.getLogObjectFromString();
              d && Array.isArray(d) && d.length > 0 && d.forEach((L) => {
                this.addPreFixedLogs(L), this.removeOversized();
              });
            }
            addPreFixedLogs(d) {
              this.prefixedLogsCollections[d.pfx] = this.prefixedLogsCollections[d.pfx] || /* @__PURE__ */ new Set(), this.prefixedLogsCollections[d.pfx].add(d);
            }
            removeOversized() {
              for (; this.serializedJsonLogsBytesSize > u.MAX_LOGS_SIZE && this.logsCollectionString !== ""; ) this.removeLogRecord();
            }
            removeTextFromString(d, L, b) {
              return `${d.slice(0, L)}${d.slice(b + L)}`;
            }
            addLogRecord(d) {
              try {
                const L = JSON.stringify(d), b = this.logsCollectionString;
                this.logsCollectionString = b == null ? void 0 : b.concat(`${b.trim() !== "" ? "<uuip-eol>" : ""}${L}`);
              } catch (L) {
                const b = JSON.stringify(d);
                this.logsCollectionString = b, console.warn("Logger failed read logs from sessionStorage: ", L);
              }
              this.logRecordsSerializedLength += l.getSerializedJsonLogRecordBytesSize(JSON.stringify(d)), this.addPreFixedLogs(d), this.removeOversized();
            }
            removeLogRecord() {
              if (this.logsCollectionString !== "") {
                const d = this.logsCollectionString.indexOf("<uuip-eol>");
                if (d !== -1) {
                  const L = this.logsCollectionString.substring(0, d), b = d + 10, E = this.removeTextFromString(this.logsCollectionString, 0, b);
                  this.logsCollectionString = E, this.logRecordsSerializedLength -= l.getSerializedJsonLogRecordBytesSize(L);
                  try {
                    const x = JSON.parse(L);
                    this.prefixedLogsCollections[x.pfx] && this.prefixedLogsCollections[x.pfx].forEach((T) => {
                      T.ts === x.ts && this.prefixedLogsCollections[x.pfx].delete(T);
                    });
                  } catch (x) {
                    console.warn("Logger failed to read/parse the first logs from sessionStorage: ", x);
                  }
                }
              }
            }
            removePreFixedLogs(d) {
              const L = this.getLogObjectFromString();
              d.forEach((b) => {
                const E = L.findIndex((x) => x.pfx === b.pfx);
                E !== -1 && (L.splice(E, 1), this.logRecordsSerializedLength -= l.getSerializedJsonLogRecordBytesSize(JSON.stringify(b)), this.prefixedLogsCollections[b.pfx] && this.prefixedLogsCollections[b.pfx].has(b) && this.prefixedLogsCollections[b.pfx].delete(b));
              }), this.logsCollectionString = L.map((b) => JSON.stringify(b)).join("<uuip-eol>");
            }
            static getLogRecordReadable(d) {
              if (d.ts) return { prefix: d.pfx, messages: d.msgs, timestamp: I.DateTime.fromMillis(d.ts).toFormat("yyyy-LL-dd HH:mm:ss:SSS"), level: s[d.lvl] };
            }
            static getLogsReadableJson(d) {
              const L = (b) => b.map((E) => l.getLogRecordReadable(E));
              return JSON.stringify(Array.isArray(d) ? L(d) : Object.keys(d).reduce((b, E) => (b[E] = L(d[E]), b), {}), null, 2);
            }
            static getLogsReadableText(d) {
              const L = (b) => b.reduce((E, x) => {
                const T = l.getLogRecordReadable(x);
                return T && (E += T.timestamp + " " + T.prefix + " " + T.level + " " + J(T.messages).join(" ") + ` \r
`), E;
              }, "");
              return Array.isArray(d) ? L(d) : Object.keys(d).reduce((b, E) => (b += `[SERVICE "${E}" LOGS]: `) + L(d[E]), "");
            }
            static getLogsUrl(d) {
              return "data:text/plain;charset=utf-8," + encodeURIComponent(d);
            }
            static browserDownload(d, L) {
              try {
                if (document && document.createElement) {
                  const b = document.createElement("a");
                  b.setAttribute("href", d), b.setAttribute("download", L), b.style.display = "none", document.body.appendChild(b), b.click(), document.body.removeChild(b);
                } else console.warn("Browser is not supported to download logs");
              } catch {
              }
            }
            addLogger(d) {
              this.loggers.set(d.prefix, d), d.removeEventListener("add", this.onLoggerAddRecord), d.addEventListener("add", this.onLoggerAddRecord);
            }
            getAllLogsJsonUrl() {
              return l.getLogsUrl(l.getLogsReadableJson(this.getLogObjectFromString()));
            }
            getAllPrefixedLogsJsonUrl() {
              return l.getLogsUrl(l.getLogsReadableJson(this.getAllPrefixedLogsCollections()));
            }
            getPrefixedLogsJsonUrl(d) {
              return l.getLogsUrl(l.getLogsReadableJson(this.getPrefixedLogsCollection(d)));
            }
            getAllLogsTextUrl() {
              return l.getLogsUrl(l.getLogsReadableText(this.getLogObjectFromString()));
            }
            getPrefixedLogsTextUrl(d) {
              return l.getLogsUrl(l.getLogsReadableText(this.getPrefixedLogsCollection(d)));
            }
            browserDownloadAllLogsJson() {
              l.browserDownload(this.getAllLogsJsonUrl(), /* @__PURE__ */ new Date() + "_all_logs.json");
            }
            browserDownloadAllPrefixedLogsJson() {
              l.browserDownload(this.getAllPrefixedLogsJsonUrl(), /* @__PURE__ */ new Date() + "_all_prefixed_logs.json");
            }
            browserDownloadPrefixedLogsJson(d) {
              l.browserDownload(this.getPrefixedLogsJsonUrl(d), `${/* @__PURE__ */ new Date()}_${d}_logs.json`);
            }
            browserDownloadAllLogsText() {
              l.browserDownload(this.getAllLogsTextUrl(), /* @__PURE__ */ new Date() + "_all_logs.log");
            }
            browserDownloadPrefixedLogsText(d) {
              l.browserDownload(this.getPrefixedLogsTextUrl(d), `${/* @__PURE__ */ new Date()}_${d}_logs.log`);
            }
            cleanupAllLogs() {
              this.logsCollection.length = 0, this.logRecordsSerializedLength = 0, this.logsCollectionString = "", Object.keys(this.prefixedLogsCollections).forEach((d) => this.prefixedLogsCollections[d] = /* @__PURE__ */ new Set()), this.save();
            }
            cleanupPrefixedLogs(d) {
              const L = this.getPrefixedLogsCollection(d);
              this.removePreFixedLogs(L), this.prefixedLogsCollections[d] = /* @__PURE__ */ new Set(), this.save();
            }
            getAllPrefixedLogsCollections() {
              return Object.keys(this.prefixedLogsCollections).reduce((d, L) => (d[L] = this.getPrefixedLogsCollection(L), d), {});
            }
            getPrefixedLogsCollection(d) {
              return Array.from(this.prefixedLogsCollections[d] || /* @__PURE__ */ new Set());
            }
          }
          u.ServicesPool = l, u.POOL = new u.ServicesPool();
        })(p || (p = {}));
        const W = H("unified-ui-platform-sdk");
        var it, B;
        function X(u) {
          return new it.Service(u);
        }
        function _(u, r) {
          if (u.descriptor = u.descriptor || Object.getOwnPropertyDescriptor(u.target, u.key), typeof u.descriptor.value != "function") return console.warn(u.key, "Decorator must be used on function"), u.descriptor;
          const s = u.descriptor.value, l = u.target.constructor.name;
          return u.descriptor.value = function() {
            const S = [];
            for (let d = 0; d < arguments.length; d++) S[d] = arguments[d];
            return r.call(this, s, S, l);
          }, u.descriptor;
        }
        (function(u) {
          class r {
            static get isBrowserNotificationPromiseSupported() {
              try {
                window.Notification.requestPermission().then();
              } catch {
                return !1;
              }
              return !0;
            }
            constructor(l) {
              this.defaultOptions = l || {};
            }
            get isBrowserNotificationSupported() {
              return "Notification" in window;
            }
            get isBrowserNotificationIconSupported() {
              return this.isBrowserNotificationSupported && "icon" in window.Notification.prototype;
            }
            get isBrowserNotificationImageSupported() {
              return this.isBrowserNotificationSupported && "image" in window.Notification.prototype;
            }
            get isBrowserNotificationBadgeSupported() {
              return this.isBrowserNotificationSupported && "badge" in window.Notification.prototype;
            }
            get isPermissionGranted() {
              return window.Notification.permission === "granted";
            }
            get isPermissionDenied() {
              return window.Notification.permission === "denied";
            }
            get isPermissionUnknown() {
              return !this.isPermissionGranted && !this.isPermissionDenied;
            }
            requestNotificationUserPermission() {
              return function(l, S, d, L) {
                return new (d || (d = Promise))(function(b, E) {
                  function x(U) {
                    try {
                      N(L.next(U));
                    } catch ($) {
                      E($);
                    }
                  }
                  function T(U) {
                    try {
                      N(L.throw(U));
                    } catch ($) {
                      E($);
                    }
                  }
                  function N(U) {
                    var $;
                    U.done ? b(U.value) : ($ = U.value, $ instanceof d ? $ : new d(function(tt) {
                      tt($);
                    })).then(x, T);
                  }
                  N((L = L.apply(l, [])).next());
                });
              }(this, void 0, void 0, function* () {
                this.isBrowserNotificationSupported ? r.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission() : yield new Promise((l) => window.Notification.requestPermission((S) => l(S))) : W.warn("Browser notification is not supported...");
              });
            }
            fire(l, S) {
              return new window.Notification(l, Object.assign(Object.assign({}, this.defaultOptions), S || {}));
            }
          }
          u.Service = r;
        })(it || (it = {})), function(u) {
          class r extends Error {
            constructor(S, d) {
              super(), this.isErr = "yes", this.id = S, this.stack = new Error().stack, typeof d == "string" ? this.message = d : d instanceof Error ? (this.message = d.message, this.name = d.name) : this.message = "";
            }
          }
          u.Message = r;
          class s extends Error {
            constructor(S, d) {
              super(), this.isErr = "yes", this.id = S, this.stack = new Error().stack, this.details = d;
            }
          }
          u.Details = s;
        }(B || (B = {}));
        var at, lt, ot = function(u, r, s, l) {
          return new (s || (s = Promise))(function(S, d) {
            function L(x) {
              try {
                E(l.next(x));
              } catch (T) {
                d(T);
              }
            }
            function b(x) {
              try {
                E(l.throw(x));
              } catch (T) {
                d(T);
              }
            }
            function E(x) {
              var T;
              x.done ? S(x.value) : (T = x.value, T instanceof s ? T : new s(function(N) {
                N(T);
              })).then(L, b);
            }
            E((l = l.apply(u, [])).next());
          });
        };
        (lt = at || (at = {})).Debounce = function(u = 250) {
          return function(r, s, l) {
            let S;
            return _({ target: r, key: s, descriptor: l }, function(d, L) {
              clearTimeout(S), S = window.setTimeout(() => {
                clearTimeout(S), d.apply(this, L);
              }, u);
            });
          };
        }, lt.Evt = function() {
          return (u, r) => {
            const s = { get() {
              return new F(this, r !== void 0 ? r : u.key);
            }, enumerable: !0, configurable: !0 };
            return r !== void 0 ? Object.defineProperty(u, r, s) : { kind: "method", placement: "prototype", key: u.key, descriptor: s };
          };
        }, lt.Exec = function(u, r = !0) {
          return function(s, l, S) {
            return _({ target: s, key: l, descriptor: S }, function(d, L) {
              return function(b, E, x, T) {
                return new (x || (x = Promise))(function(N, U) {
                  function $(Pt) {
                    try {
                      St(T.next(Pt));
                    } catch (Ht) {
                      U(Ht);
                    }
                  }
                  function tt(Pt) {
                    try {
                      St(T.throw(Pt));
                    } catch (Ht) {
                      U(Ht);
                    }
                  }
                  function St(Pt) {
                    var Ht;
                    Pt.done ? N(Pt.value) : (Ht = Pt.value, Ht instanceof x ? Ht : new x(function(le) {
                      le(Ht);
                    })).then($, tt);
                  }
                  St((T = T.apply(b, [])).next());
                });
              }(this, void 0, void 0, function* () {
                const b = "_" + l + "_exec_flag";
                if (r && this[b]) return void console.log("PREVENTING DOUBLE EXECUTION");
                const E = (T) => {
                  if (this[b] = T, typeof u == "function") u.call(this, { isExec: T, ctx: this });
                  else {
                    const N = u;
                    T ? N.before && N.before.call(this, this) : N.after && N.after.call(this, this);
                  }
                };
                E(!0);
                const x = d.apply(this, L);
                return x instanceof Promise ? x.then(() => E(!1)).catch(() => E(!1)) : (console.warn("Must be async function to use [@Executing] decorator"), E(!1)), x;
              });
            });
          };
        }, lt.Handle = function(u) {
          return function(r, s, l) {
            return _({ target: r, key: s, descriptor: l }, function(S, d, L) {
              return ot(this, void 0, void 0, function* () {
                const b = this, E = (x) => ot(this, void 0, void 0, function* () {
                  x.id && typeof x.id == "string" && x.isErr === "yes" || (typeof x == "string" || x instanceof Error ? x = new B.Message("system", x) : (console.warn("Err must be 'string' or 'new Error()' instance"), x = new B.Message("system", "")));
                  const T = x;
                  T.ctx = b;
                  const N = `Error] ${L}.${s} [${T.id}]: ${T.message}`;
                  if (typeof u == "function") {
                    const U = u;
                    console.log("[Handled" + N);
                    const $ = U.call(b, T);
                    $ instanceof Promise && (yield $);
                  } else {
                    const U = u;
                    if (U[T.id]) {
                      console.log("[Handled" + N);
                      const $ = U[T.id].call(b, T);
                      $ instanceof Promise && (yield $);
                    } else if (U.handle) {
                      console.log("[Handled" + N);
                      const $ = U.handle.call(b, T);
                      $ instanceof Promise && (yield $);
                    } else console.warn("[Unhandled " + N);
                    if (U.fallback) {
                      const $ = U.fallback.call(b, T);
                      $ instanceof Promise && (yield $);
                    }
                  }
                });
                try {
                  const x = S.apply(b, d);
                  return x instanceof Promise ? new Promise((T) => {
                    x.then(T).catch((N) => ot(this, void 0, void 0, function* () {
                      yield E(N), T(void 0);
                    }));
                  }) : x;
                } catch (x) {
                  return void (yield E(x));
                }
              });
            });
          };
        }, lt.Once = function() {
          return function(u, r, s) {
            return _({ target: u, key: r, descriptor: s }, function(l, S) {
              const d = "_" + r + "_once_flag";
              if (!this[d]) return this[d] = !0, l.call(this, S);
            });
          };
        }, lt.Throttle = function(u = 1e3 / 60) {
          return function(r, s, l) {
            let S, d = Date.now();
            return _({ target: r, key: s, descriptor: l }, function(L, b) {
              const E = (...x) => {
                const T = Date.now();
                window.clearTimeout(S), !d || T - d >= u ? (d = T, L.apply(this, x)) : S = window.setTimeout(() => E(...x), u - (T - d));
              };
              E(...b);
            });
          };
        };
        class F {
          constructor(r, s) {
            this.target = r, this.eventName = s;
          }
          emit(r, s = { bubbles: !0, composed: !0, cancelable: !1 }) {
            this.target.dispatchEvent(new CustomEvent(this.eventName, Object.assign({ detail: r }, s)));
          }
        }
        var yt = m(3), bt = m.n(yt), It = m(4);
        function Bt(u) {
          const r = bt.a.create();
          return r.accessToken = u, r.interceptors.request.use((s) => {
            if (!s.headers.Authorization && r.accessToken && (s.headers.Authorization = "Bearer " + r.accessToken), !s.headers.TrackingID) {
              const l = Object(It.v1)();
              s.headers.TrackingID = `uuip_${l}_1.0:1.0`;
            }
            return s.headers["Content-Type"] || (s.headers["Content-Type"] = "application/json"), s;
          }), r;
        }
        var z, G, P = m(5), f = m.n(P), A = m(6), M = m.n(A), vt = m(7), wt = m.n(vt);
        (G = z || (z = {})).createService = (u) => {
          const r = f.a.createInstance();
          {
            const s = u && u.backend ? u.backend : new M.a();
            r.use(s);
          }
          {
            const s = u && u.languageDetector ? u.languageDetector : new wt.a();
            r.use(s);
          }
          return u && u.logger && r.use({ log: "log" in u.logger ? u.logger.log : u.logger.info, warn: u.logger.warn, error: u.logger.error, type: "logger" }), r;
        }, G.mergeServiceInitOptions = (...u) => Object.assign.call(null, {}, ...u), G.createMixin = (u) => {
          const r = "i18n" in u ? u.i18n : G.createService(), s = "i18nInitOptions" in u ? u.i18nInitOptions : null;
          s || W.info("i18n mixin instance waiting service initialization outside...");
          let l = !1;
          return (S) => class extends S {
            constructor() {
              super(...arguments), this.onI18NInitialized = (d) => this.requestUpdate(), this.onI18NLanguageChanged = (d) => this.requestUpdate();
            }
            connectedCallback() {
              super.connectedCallback && super.connectedCallback(), r.on("initialized", this.onI18NInitialized), r.on("languageChanged", this.onI18NLanguageChanged), r.isInitialized || l || !s || (l = !0, r.init(s).finally(() => l = !1));
            }
            disconnectedCallback() {
              r.off("initialized", this.onI18NInitialized), r.off("languageChanged", this.onI18NLanguageChanged), super.disconnectedCallback && super.disconnectedCallback();
            }
            t(...d) {
              return r.t(...d);
            }
          };
        };
        var Et, Mt, Y = m(2), Q = m.n(Y);
        function rt(u = {}) {
          const r = new Et.Service();
          return r.updateConfig(u), r;
        }
        (function(u) {
          let r, s;
          (function(b) {
            let E, x, T;
            (function(N) {
              N.Info = "info", N.Warn = "warn", N.Error = "error", N.Success = "success", N.Chat = "chat", N.Default = "default";
            })(E = b.Type || (b.Type = {})), b.TYPES = Object.values(E), function(N) {
              N.Silent = "silent", N.AutoDismiss = "autodismiss", N.Acknowledge = "acknowledge";
            }(x = b.Mode || (b.Mode = {})), b.MODES = Object.values(x), function(N) {
              N.Added = "added", N.Pended = "pended", N.Activated = "activated", N.Deactivated = "deactivated", N.Removed = "removed";
            }(T = b.Status || (b.Status = {})), b.StatusWeight = { [T.Added]: 0, [T.Pended]: 1, [T.Activated]: 2, [T.Deactivated]: 3, [T.Removed]: 4 }, b.STATUSES = Object.values(T), function(N) {
              N.User = "user_add";
            }(b.AddEventReason || (b.AddEventReason = {})), function(N) {
              N.ServiceAutoPropagate = "service_auto_propagate_pending", N.ServiceAutoDismiss = "service_autodismiss_pending", N.UserSilent = "user_silent_pending";
            }(b.PendingEventReason || (b.PendingEventReason = {})), function(N) {
              N.ServiceAutoPropagate = "service_auto_propagate_activate";
            }(b.ActivateEventReason || (b.ActivateEventReason = {})), function(N) {
              N.UserNegative = "user_negative_deactivate", N.UserPositive = "user_positive_deactivate", N.UserNeutral = "user_neutral_deactivate";
            }(b.DeactivateEventReason || (b.DeactivateEventReason = {})), function(N) {
              N.User = "user_remove";
            }(b.RemoveEventReason || (b.RemoveEventReason = {}));
          })(r = u.ItemMeta || (u.ItemMeta = {})), function(b) {
            b.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"], b.STATUS_EVENT_MAP = { add: r.Status.Added, pending: r.Status.Pended, activate: r.Status.Activated, deactivate: r.Status.Deactivated, remove: r.Status.Removed }, b.DISABLED_ITEM_MODE = { [r.Mode.Silent]: !1, [r.Mode.AutoDismiss]: !1, [r.Mode.Acknowledge]: !1 }, b.ACTIVATED_ITEM_MODE_LIMIT = { [r.Mode.Silent]: 0, [r.Mode.AutoDismiss]: 10, [r.Mode.Acknowledge]: 1 }, b.AUTO_DISMISS_TIMEOUT = 5e3;
          }(s = u.ServiceMeta || (u.ServiceMeta = {}));
          class l {
            constructor() {
              this.hubEmitter = j()();
            }
            emit(E, ...x) {
              this.hubEmitter.emit(E, ...x);
            }
            addEventListener(E, x) {
              this.hubEmitter.on(E, x);
            }
            addOnceEventListener(E, x) {
              this.hubEmitter.once(E, x);
            }
            removeEventListener(E, x) {
              this.hubEmitter.off(E, x);
            }
            removeAllEventListeners() {
              Q()(this.hubEmitter);
            }
          }
          u.Item = class {
            get status() {
              return this._status;
            }
            get reason() {
              return this._reason;
            }
            get mode() {
              return this._mode;
            }
            validateAuxOptions(b) {
              let E = {};
              return b && b.AUTO_DISMISS_TIMEOUT !== void 0 && this.mode === r.Mode.AutoDismiss && (E = Object.assign(Object.assign({}, E), { AUTO_DISMISS_TIMEOUT: b.AUTO_DISMISS_TIMEOUT })), E;
            }
            constructor(b, E) {
              this._serviceHubSubscriptions = [], this._itemEmitter = j()();
              const { type: x, mode: T, title: N, data: U, timestamp: $ } = b.data;
              this.type = x, this.title = N, this.data = U, this._mode = T, this.timestamp = $ || (/* @__PURE__ */ new Date()).toISOString(), this.datetime = I.DateTime.fromISO(this.timestamp).toLocaleString(I.DateTime.DATETIME_SHORT_WITH_SECONDS), this.options = Object.freeze(this.validateAuxOptions(b.options || {})), E && (this._serviceHubAdapter = E, this._status = r.Status.Added, this._reason = r.AddEventReason.User, this.bindItemHubListeners());
            }
            bindItemHubListeners() {
              if (this._serviceHubAdapter) {
                {
                  const b = (x, T, N) => {
                    this.timestamp in x && (this._status = T, this._reason = N, T === r.Status.Removed && (this.unbindItemHubListeners(), this.removeAllEventListeners()), this.emit("statusUpdate", T, N));
                  };
                  this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", b);
                  const E = () => {
                    var x;
                    (x = this._serviceHubAdapter) === null || x === void 0 || x.removeEventListener("statusServiceUpdateResponse", b);
                  };
                  this._serviceHubSubscriptions.push(E);
                }
                {
                  const b = (x, T) => {
                    this.timestamp in x && (this._mode = T, this.emit("modeUpdate", T));
                  };
                  this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", b);
                  const E = () => {
                    var x;
                    (x = this._serviceHubAdapter) === null || x === void 0 || x.removeEventListener("modeStatusUpdateResponse", b);
                  };
                  this._serviceHubSubscriptions.push(E);
                }
              }
            }
            unbindItemHubListeners() {
              this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach((b) => b()), this._serviceHubSubscriptions.length = 0);
            }
            deactivate(b) {
              this._status && r.StatusWeight[this._status] < r.StatusWeight[r.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, r.Status.Deactivated, b) : W.warn("Service hub adapter is not initialized for this notification item instance: ", this) : W.warn(`Notification should have "${r.Status.Pended}" or "${r.Status.Activated}" status to be able change status to "${r.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`);
            }
            pending() {
              this._status === r.Status.Activated || this.mode !== r.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, r.Status.Pended, r.PendingEventReason.UserSilent) : W.warn("Service hub adapter is not initialized for this notification item instance: ", this) : W.warn(`Notification should have "${r.Status.Activated}" status or not "${r.Mode.Silent}" mode, to be able change status to "${r.Status.Pended}" and mode to "${r.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`);
            }
            emit(b, ...E) {
              this._itemEmitter.emit(b, ...E);
            }
            addEventListener(b, E) {
              this._itemEmitter.on(b, E);
            }
            addOnceEventListener(b, E) {
              this._itemEmitter.once(b, E);
            }
            removeEventListener(b, E) {
              this._itemEmitter.off(b, E);
            }
            removeAllEventListeners() {
              Q()(this._itemEmitter);
            }
          };
          const S = (b, E, x = () => 0) => [...b, ...E].sort(x), d = (b, E) => b.reduce((x, T) => (E.indexOf(T) === -1 && x.push(T), x), []);
          class L {
            constructor() {
              this.emitter = j()(), this.map = {}, this.status = L.createStatus(), this.serviceConfig = { DISABLED_ITEM_MODE: Object.assign({}, s.DISABLED_ITEM_MODE), ACTIVATED_ITEM_MODE_LIMIT: Object.assign({}, s.ACTIVATED_ITEM_MODE_LIMIT), AUTO_DISMISS_TIMEOUT: s.AUTO_DISMISS_TIMEOUT }, this.activeAutoDismissTimeoutRefs = {}, this.serviceHubAdapter = new l(), this.bindServiceHubEvents();
            }
            static mergeConfig(E, ...x) {
              if (!x.length) return E;
              const T = x.shift(), N = (U) => U && typeof U == "object" && !Array.isArray(U);
              if (N(E) && N(T)) for (const U in T) N(T[U]) ? (E[U] || Object.assign(E, { [U]: {} }), this.mergeConfig(E[U], T[U])) : Object.assign(E, { [U]: T[U] });
              return this.mergeConfig(E, ...x);
            }
            static createStatus() {
              return { [r.Status.Added]: this.createStatusHolderCollection(), [r.Status.Pended]: this.createStatusHolderCollection(), [r.Status.Activated]: this.createStatusHolderCollection(), [r.Status.Deactivated]: this.createStatusHolderCollection(), [r.Status.Removed]: this.createStatusHolderCollection() };
            }
            static createStatusHolderCollection() {
              return Object.assign([], Object.assign(Object.assign({ ids: [] }, this.createStatusHolderSubCollections(r.MODES)), this.createStatusHolderSubCollections(r.TYPES)));
            }
            static createStatusHolderSubCollections(E) {
              return Object.assign({}, E.reduce((x, T) => (x[T] = [], x), {}));
            }
            updateNotificationsCollections() {
              const E = L.createStatus();
              this.status.added.ids.forEach((x) => {
                const T = this.map[x];
                r.STATUSES.forEach((N) => {
                  this.status[N].ids.indexOf(T.timestamp) !== -1 && (E[N].push(T), E[N].ids.push(x), E[N][T.mode].push(T), E[N][T.type].push(T));
                });
              }), this.status = E;
            }
            setAutoDismiss(E, x = () => {
            }) {
              this.prepareUpdateNotifications(E).forEach((T) => {
                var N;
                if (T.mode === r.Mode.AutoDismiss) {
                  const U = () => x(T);
                  this.activeAutoDismissTimeoutRefs[T.timestamp] = window.setTimeout(U, (N = T.options.AUTO_DISMISS_TIMEOUT) !== null && N !== void 0 ? N : this.serviceConfig.AUTO_DISMISS_TIMEOUT);
                }
              });
            }
            removeAutoDismiss(E, x = () => {
            }) {
              this.prepareUpdateNotifications(E).forEach((T) => {
                T.timestamp in this.activeAutoDismissTimeoutRefs && (x(T), window.clearTimeout(this.activeAutoDismissTimeoutRefs[T.timestamp]), delete this.activeAutoDismissTimeoutRefs[T.timestamp]);
              });
            }
            update(E, x, T) {
              const N = Array.isArray(T) ? T : [T];
              if (N.length) {
                const U = N.map(($) => $.timestamp);
                switch (E) {
                  case "add":
                    N.forEach(($) => this.map[$.timestamp] = $), this.status.added.ids = S(this.status.added.ids, U, L.sortTimestampsFn);
                    break;
                  case "pending":
                    this.status.pended.ids = S(this.status.pended.ids, U, L.sortTimestampsFn), this.status.activated.ids = d(this.status.activated.ids, U), this.status.deactivated.ids = d(this.status.deactivated.ids, U);
                    break;
                  case "activate":
                    this.status.pended.ids = d(this.status.pended.ids, U), this.status.activated.ids = S(this.status.activated.ids, U, L.sortTimestampsFn), this.status.deactivated.ids = d(this.status.deactivated.ids, U);
                    break;
                  case "deactivate":
                    this.status.pended.ids = d(this.status.pended.ids, U), this.status.activated.ids = d(this.status.activated.ids, U), this.status.deactivated.ids = S(this.status.deactivated.ids, U, L.sortTimestampsFn);
                    break;
                  case "remove":
                    this.status.pended.ids = d(this.status.pended.ids, U), this.status.activated.ids = d(this.status.activated.ids, U), this.status.deactivated.ids = d(this.status.deactivated.ids, U), this.status.added.ids = d(this.status.added.ids, U), this.status.removed.ids = S(this.status.removed.ids, U, L.sortTimestampsFn), U.forEach(($) => delete this.map[$]);
                }
                this.updateNotificationsCollections(), this.emit(E, N, x), this.propagate(E, x, N);
              }
            }
            propagate(E, x, T) {
              const N = Array.isArray(T) ? T : [T];
              if (N.length) switch (E) {
                case "add":
                  this.update("pending", r.PendingEventReason.ServiceAutoPropagate, N);
                  break;
                case "pending":
                  N.forEach((U) => {
                    this.removeAutoDismiss(U);
                  }), this.update("activate", r.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                  break;
                case "activate":
                  N.forEach((U) => {
                    this.setAutoDismiss(U, ($) => {
                      $.mode === r.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", $, r.Status.Pended, r.PendingEventReason.ServiceAutoDismiss);
                    });
                  });
                  break;
                case "deactivate":
                  N.forEach((U) => {
                    this.removeAutoDismiss(U);
                  }), this.update("activate", r.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                  break;
                case "remove":
                  this.update("deactivate", r.DeactivateEventReason.UserNegative, N);
              }
            }
            prepareAddNotifications(E) {
              const x = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((T, N) => (this.serviceConfig.DISABLED_ITEM_MODE[N] || T.push(N), T), []).map((T) => `"${T}"`).join(", ");
              return (Array.isArray(E) ? E : [E]).filter((T) => !this.serviceConfig.DISABLED_ITEM_MODE[T.data.mode] || (W.error(`Trying to .add(...) notification mode "${T.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${x} allowed. Ignoring .add(${JSON.stringify(T)}) notification...`), !1)).map((T) => new u.Item(T, this.serviceHubAdapter));
            }
            prepareUpdateNotifications(E) {
              return (Array.isArray(E) ? E : [E]).reduce((x, T) => (T.timestamp in this.map ? x.push(T) : W.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(T)), x), []);
            }
            prepareActiveCandidatesNotifications(E) {
              const x = (Array.isArray(E) ? E : [E]).reduce((T, N) => (this.status.activated[N.mode].length + T[N.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[N.mode] && T[N.mode].push(N), T), L.createStatusHolderSubCollections(r.MODES));
              return Object.values(x).reduce((T, N) => T.concat(N), []);
            }
            static sortByTimestampsFn(E, x) {
              return L.sortTimestampsFn(E.timestamp, x.timestamp);
            }
            get added() {
              return this.status.added;
            }
            get pended() {
              return this.status.pended;
            }
            get activated() {
              return this.status.activated;
            }
            get deactivated() {
              return this.status.deactivated;
            }
            getNotificationStatus(E) {
              return Object.keys(this.status).filter((x) => x !== r.Status.Added).find((x) => this.status[x].ids.indexOf(E.timestamp) !== -1);
            }
            get config() {
              return Object.freeze(this.serviceConfig);
            }
            static validateUpdateConfig(E) {
              const x = E;
              if (x.ACTIVATED_ITEM_MODE_LIMIT && x.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > s.ACTIVATED_ITEM_MODE_LIMIT.acknowledge) throw new Error(`
          Max ${r.Mode.Acknowledge} limit is ${s.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}
        `);
              if (x.DISABLED_ITEM_MODE) {
                if (!Object.keys(x.DISABLED_ITEM_MODE).reduce((T, N) => (x.DISABLED_ITEM_MODE[N] && T++, T), 0)) throw new Error("At least one notifications mode should be allowed in service instance");
                Object.keys(x.ACTIVATED_ITEM_MODE_LIMIT).forEach((T) => {
                  T in x.DISABLED_ITEM_MODE && x.DISABLED_ITEM_MODE[T] && W.warn(`Changing configuration limit count for mode "${T}" won't have any effect, because this mode is disabled in notifications service instance`);
                }), "AUTO_DISMISS_TIMEOUT" in x && x.DISABLED_ITEM_MODE[r.Mode.AutoDismiss] && W.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${r.Mode.AutoDismiss}" mode is disabled in notifications service instance`);
              }
              return !0;
            }
            updateConfig(E) {
              L.validateUpdateConfig(E) && (this.serviceConfig = L.mergeConfig({}, this.serviceConfig, E), W.info("Updated notifications service configuration: ", this.config));
            }
            add(E) {
              const x = this.prepareAddNotifications(E);
              return this.update("add", r.AddEventReason.User, x), x;
            }
            pending(E) {
              const x = this.prepareUpdateNotifications(E);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", x, r.Status.Pended, r.PendingEventReason.UserSilent), x;
            }
            deactivate(E, x) {
              const T = this.prepareUpdateNotifications(E);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", T, r.Status.Deactivated, x), T;
            }
            remove(E) {
              const x = this.prepareUpdateNotifications(E);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", x, r.Status.Removed, r.RemoveEventReason.User), x;
            }
            pendingAllActivated() {
              return this.pending(this.status.activated);
            }
            pendingAll() {
              return this.pending([...this.status.pended, ...this.status.activated]);
            }
            deactivateAllActivated(E) {
              return this.deactivate(this.status.activated, E);
            }
            deactivateAll(E) {
              return this.deactivate([...this.status.pended, ...this.status.activated], E);
            }
            removeAllDeactivated() {
              return this.remove(this.status.deactivated);
            }
            removeAll() {
              return this.remove(this.status.added);
            }
            addEventListener(E, x) {
              this.emitter.on(E, x);
            }
            removeEventListener(E, x) {
              this.emitter.off(E, x);
            }
            addOnceEventListener(E, x) {
              this.emitter.once(E, x);
            }
            removeAllEventListeners() {
              Q()(this.emitter);
            }
            emit(E, ...x) {
              this.emitter.emit(E, ...x);
            }
            bindServiceHubEvents() {
              this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", (E, x, T) => {
                const N = Array.isArray(E) ? E : [E], U = N.reduce(($, tt) => ($[tt.timestamp] = this.getNotificationStatus(tt), $), {});
                {
                  const $ = N.filter((tt) => (U[tt.timestamp] === r.Status.Activated || tt.mode !== r.Mode.Silent) && x === r.Status.Pended);
                  {
                    const tt = $.filter((St) => St.mode !== r.Mode.Silent);
                    tt.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", tt.reduce((St, Pt) => (St[Pt.timestamp] = Pt, St), {}), r.Mode.Silent);
                  }
                  $.length && this.update("pending", T, $);
                }
                {
                  const $ = N.filter((tt) => {
                    const St = U[tt.timestamp];
                    return (St === r.Status.Pended || St === r.Status.Activated) && x === r.Status.Deactivated;
                  });
                  $.length && this.update("deactivate", T, $);
                }
                N.filter(($) => {
                  const tt = U[$.timestamp];
                  return (tt === r.Status.Pended || tt === r.Status.Activated || tt === r.Status.Deactivated) && x === r.Status.Removed;
                }).length && this.update("remove", T, E);
              }), s.STATUS_EVENTS.forEach((E) => {
                this.addEventListener(E, (x, T) => {
                  const N = s.STATUS_EVENT_MAP[E], U = x.reduce(($, tt) => ($[tt.timestamp] = tt, $), {});
                  this.serviceHubAdapter.emit("statusServiceUpdateResponse", U, N, T);
                });
              });
            }
          }
          L.sortTimestampsFn = (b, E) => b > E ? 1 : b < E ? -1 : 0, u.Service = L;
        })(Et || (Et = {})), function(u) {
          class r {
            constructor() {
              this.listeners = [], this.listenersOnce = [], this.listen = (S) => (this.listeners.push(S), { stopListen: () => this.stopListen(S) }), this.listenOnce = (S) => (this.listenersOnce.push(S), { stopListenOnce: () => this.stopListenOnce(S) }), this.stopListen = (S) => {
                const d = this.listeners.indexOf(S, 0);
                return d > -1 && (this.listeners.splice(d, 1), !0);
              }, this.stopListenOnce = (S) => {
                const d = this.listenersOnce.indexOf(S, 0);
                return d > -1 && (this.listenersOnce.splice(d, 1), !0);
              }, this.stopListenAll = () => {
                this.listeners = [], this.listenersOnce = [];
              }, this.send = (S) => {
                this.listeners.forEach((d) => d(S)), this.listenersOnce.forEach((d) => d(S)), this.listenersOnce = [];
              };
            }
          }
          class s {
            constructor() {
              this.listeners = [], this.listenersOnce = [], this.listen = (S) => (this.listeners.push(S), { stopListen: () => this.stopListen(S) }), this.listenOnce = (S) => (this.listenersOnce.push(S), { stopListenOnce: () => this.stopListenOnce(S) }), this.stopListen = (S) => {
                const d = this.listeners.indexOf(S, 0);
                return d > -1 && (this.listeners.splice(d, 1), !0);
              }, this.stopListenOnce = (S) => {
                const d = this.listenersOnce.indexOf(S, 0);
                return d > -1 && (this.listenersOnce.splice(d, 1), !0);
              }, this.stopListenAll = () => {
                this.listeners = [], this.listenersOnce = [];
              }, this.send = () => {
                this.listeners.forEach((S) => S()), this.listenersOnce.forEach((S) => S()), this.listenersOnce = [];
              };
            }
          }
          u.create = new class {
            withData() {
              const l = new r();
              return { signal: l, send: l.send, stopListenAll: l.stopListenAll };
            }
            empty() {
              const l = new s();
              return { signal: l, send: l.send, stopListenAll: l.stopListenAll };
            }
          }();
        }(Mt || (Mt = {}));
        let et = null;
        const Gt = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, Qt = () => {
          if (et !== null) return et;
          const u = new Blob([`(()=>{"use strict";
const e=new Map,t=new Map,r=(e,t)=>
{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);
    return{expected:r+o,remainingDelay:o}},
    o=(e,t,r,i)=>{const s=performance.now();
        s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};
        addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;
        if("interval"===i)
        (t=>{const r=e.get(t);
        if(void 0===r)
        throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));
        clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});
        else{if("timeout"!==i)
        throw new Error('The given type "'.concat(i,'" is not supported'));
        (e=>{const r=t.get(e);if(void 0===r)
        throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));
        clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}
        else{if("set"!==s.method)
        throw new Error('The given method "'.concat(s.method,'" is not supported'));
        {const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;
        if("interval"===d)
        ((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);
        e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);
        else{if("timeout"!==d)
        throw new Error('The given type "'.concat(d,'" is not supported'));
        ((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);
        t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`], { type: "application/javascript; charset=utf-8" }), r = URL.createObjectURL(u);
          return W.info("Worker url established", r), et = ((s) => {
            const l = /* @__PURE__ */ new Map([[0, () => {
            }]]), S = /* @__PURE__ */ new Map([[0, () => {
            }]]), d = /* @__PURE__ */ new Map(), L = new Worker(s);
            W.info("worker created ", L);
            const b = /* @__PURE__ */ new WeakMap();
            var E;
            const x = /* @__PURE__ */ ((T, N) => (U) => {
              const $ = N.get(U);
              let tt = $ === void 0 ? U.size : $ < 1073741824 ? $ + 1 : 0;
              if (!U.has(tt)) return T(U, tt);
              if (U.size < 536870912) {
                for (; U.has(tt); ) tt = Math.floor(1073741824 * Math.random());
                return T(U, tt);
              }
              if (U.size > Gt) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
              for (; U.has(tt); ) tt = Math.floor(Math.random() * Gt);
              return T(U, tt);
            })((E = b, (T, N) => (E.set(T, N), N)), b);
            return L.addEventListener("message", ({ data: T }) => {
              if ((N = T).method !== void 0 && N.method === "call") {
                const { params: { timerId: U, timerType: $ } } = T;
                if ($ === "interval") {
                  const tt = l.get(U);
                  if (typeof tt == "number") {
                    const St = d.get(tt);
                    if (St === void 0 || St.timerId !== U || St.timerType !== $) throw new Error("The timer is in an undefined state.");
                  } else {
                    if (tt === void 0) throw new Error("The timer is in an undefined state.");
                    tt();
                  }
                } else if ($ === "timeout") {
                  const tt = S.get(U);
                  if (typeof tt == "number") {
                    const St = d.get(tt);
                    if (St === void 0 || St.timerId !== U || St.timerType !== $) throw new Error("The timer is in an undefined state.");
                  } else {
                    if (tt === void 0) throw new Error("The timer is in an undefined state.");
                    tt(), S.delete(U);
                  }
                }
              } else if (((U) => U.error === null && typeof U.id == "number")(T)) {
                const { id: U } = T, $ = d.get(U);
                if ($ === void 0) throw new Error("The timer is in an undefined state.");
                const { timerId: tt, timerType: St } = $;
                d.delete(U), St === "interval" ? l.delete(tt) : S.delete(tt);
              } else {
                const { error: { message: U } } = T;
              }
              var N;
            }), { clearInterval: (T) => {
              const N = x(d);
              d.set(N, { timerId: T, timerType: "interval" }), l.set(T, N), L.postMessage({ id: N, method: "clear", params: { timerId: T, timerType: "interval" } });
            }, clearTimeout: (T) => {
              const N = x(d);
              d.set(N, { timerId: T, timerType: "timeout" }), S.set(T, N), L.postMessage({ id: N, method: "clear", params: { timerId: T, timerType: "timeout" } });
            }, setInterval: (T, N) => {
              const U = x(l);
              return l.set(U, () => {
                T(), typeof l.get(U) == "function" && L.postMessage({ id: null, method: "set", params: { delay: N, now: performance.now(), timerId: U, timerType: "interval" } });
              }), L.postMessage({ id: null, method: "set", params: { delay: N, now: performance.now(), timerId: U, timerType: "interval" } }), U;
            }, setTimeout: (T, N) => {
              const U = x(S);
              return S.set(U, T), L.postMessage({ id: null, method: "set", params: { delay: N, now: performance.now(), timerId: U, timerType: "timeout" } }), U;
            } };
          })(r), et.setTimeout(() => URL.revokeObjectURL(r), 0), et;
        }, Xt = (u) => Qt().clearInterval(u), re = (u) => Qt().clearTimeout(u), he = (u, r) => Qt().setInterval(u, r), y = (u, r) => Qt().setTimeout(u, r);
      }]);
    }, function(Z, K, O) {
      var v = O(13), h = Object.prototype.toString;
      function m(p) {
        return h.call(p) === "[object Array]";
      }
      function k(p) {
        return p === void 0;
      }
      function j(p) {
        return p !== null && typeof p == "object";
      }
      function I(p) {
        if (h.call(p) !== "[object Object]") return !1;
        var H = Object.getPrototypeOf(p);
        return H === null || H === Object.prototype;
      }
      function D(p) {
        return h.call(p) === "[object Function]";
      }
      function J(p, H) {
        if (p != null) if (typeof p != "object" && (p = [p]), m(p)) for (var W = 0, it = p.length; W < it; W++) H.call(null, p[W], W, p);
        else for (var B in p) Object.prototype.hasOwnProperty.call(p, B) && H.call(null, p[B], B, p);
      }
      Z.exports = { isArray: m, isArrayBuffer: function(p) {
        return h.call(p) === "[object ArrayBuffer]";
      }, isBuffer: function(p) {
        return p !== null && !k(p) && p.constructor !== null && !k(p.constructor) && typeof p.constructor.isBuffer == "function" && p.constructor.isBuffer(p);
      }, isFormData: function(p) {
        return typeof FormData < "u" && p instanceof FormData;
      }, isArrayBufferView: function(p) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(p) : p && p.buffer && p.buffer instanceof ArrayBuffer;
      }, isString: function(p) {
        return typeof p == "string";
      }, isNumber: function(p) {
        return typeof p == "number";
      }, isObject: j, isPlainObject: I, isUndefined: k, isDate: function(p) {
        return h.call(p) === "[object Date]";
      }, isFile: function(p) {
        return h.call(p) === "[object File]";
      }, isBlob: function(p) {
        return h.call(p) === "[object Blob]";
      }, isFunction: D, isStream: function(p) {
        return j(p) && D(p.pipe);
      }, isURLSearchParams: function(p) {
        return typeof URLSearchParams < "u" && p instanceof URLSearchParams;
      }, isStandardBrowserEnv: function() {
        return (typeof navigator > "u" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window < "u" && typeof document < "u";
      }, forEach: J, merge: function p() {
        var H = {};
        function W(X, _) {
          I(H[_]) && I(X) ? H[_] = p(H[_], X) : I(X) ? H[_] = p({}, X) : m(X) ? H[_] = X.slice() : H[_] = X;
        }
        for (var it = 0, B = arguments.length; it < B; it++) J(arguments[it], W);
        return H;
      }, extend: function(p, H, W) {
        return J(H, function(it, B) {
          p[B] = W && typeof it == "function" ? v(it, W) : it;
        }), p;
      }, trim: function(p) {
        return p.trim ? p.trim() : p.replace(/^\s+|\s+$/g, "");
      }, stripBOM: function(p) {
        return p.charCodeAt(0) === 65279 && (p = p.slice(1)), p;
      } };
    }, function(Z, K, O) {
      function v(h) {
        return (v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
          return typeof m;
        } : function(m) {
          return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
        })(h);
      }
      O.d(K, "a", function() {
        return v;
      });
    }, function(Z, K, O) {
      function v(h, m) {
        if (!(h instanceof m)) throw new TypeError("Cannot call a class as a function");
      }
      O.d(K, "a", function() {
        return v;
      });
    }, function(Z, K, O) {
      O.d(K, "a", function() {
        return m;
      });
      var v = O(8);
      function h(k, j) {
        for (var I = 0; I < j.length; I++) {
          var D = j[I];
          D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(k, Object(v.a)(D.key), D);
        }
      }
      function m(k, j, I) {
        return j && h(k.prototype, j), I && h(k, I), Object.defineProperty(k, "prototype", { writable: !1 }), k;
      }
    }, function(Z, K, O) {
      function v(J) {
        return (v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
          return typeof p;
        } : function(p) {
          return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
        })(J);
      }
      O.d(K, "a", function() {
        return j;
      }), O.d(K, "b", function() {
        return I;
      }), O.d(K, "c", function() {
        return D;
      });
      var h = [], m = h.forEach, k = h.slice;
      function j(J) {
        return m.call(k.call(arguments, 1), function(p) {
          if (p) for (var H in p) J[H] === void 0 && (J[H] = p[H]);
        }), J;
      }
      function I() {
        return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : v(XMLHttpRequest)) === "object";
      }
      function D(J) {
        return function(p) {
          return !!p && typeof p.then == "function";
        }(J) ? J : Promise.resolve(J);
      }
    }, function(Z, K, O) {
      var v, h, m, k, j, I, D, J = O(23), p = O(40), H = Function.prototype.apply, W = Function.prototype.call, it = Object.create, B = Object.defineProperty, X = Object.defineProperties, _ = Object.prototype.hasOwnProperty, at = { configurable: !0, enumerable: !1, writable: !0 };
      h = function(lt, ot) {
        var F, yt;
        return p(ot), yt = this, v.call(this, lt, F = function() {
          m.call(yt, lt, F), H.call(ot, this, arguments);
        }), F.__eeOnceListener__ = ot, this;
      }, j = { on: v = function(lt, ot) {
        var F;
        return p(ot), _.call(this, "__ee__") ? F = this.__ee__ : (F = at.value = it(null), B(this, "__ee__", at), at.value = null), F[lt] ? typeof F[lt] == "object" ? F[lt].push(ot) : F[lt] = [F[lt], ot] : F[lt] = ot, this;
      }, once: h, off: m = function(lt, ot) {
        var F, yt, bt, It;
        if (p(ot), !_.call(this, "__ee__")) return this;
        if (!(F = this.__ee__)[lt]) return this;
        if (typeof (yt = F[lt]) == "object") for (It = 0; bt = yt[It]; ++It) bt !== ot && bt.__eeOnceListener__ !== ot || (yt.length === 2 ? F[lt] = yt[It ? 0 : 1] : yt.splice(It, 1));
        else yt !== ot && yt.__eeOnceListener__ !== ot || delete F[lt];
        return this;
      }, emit: k = function(lt) {
        var ot, F, yt, bt, It;
        if (_.call(this, "__ee__") && (bt = this.__ee__[lt])) if (typeof bt == "object") {
          for (F = arguments.length, It = new Array(F - 1), ot = 1; ot < F; ++ot) It[ot - 1] = arguments[ot];
          for (bt = bt.slice(), ot = 0; yt = bt[ot]; ++ot) H.call(yt, this, It);
        } else switch (arguments.length) {
          case 1:
            W.call(bt, this);
            break;
          case 2:
            W.call(bt, this, arguments[1]);
            break;
          case 3:
            W.call(bt, this, arguments[1], arguments[2]);
            break;
          default:
            for (F = arguments.length, It = new Array(F - 1), ot = 1; ot < F; ++ot) It[ot - 1] = arguments[ot];
            H.call(bt, this, It);
        }
      } }, I = { on: J(v), once: J(h), off: J(m), emit: J(k) }, D = X({}, I), Z.exports = K = function(lt) {
        return lt == null ? it(D) : X(Object(lt), I);
      }, K.methods = j;
    }, function(Z, K, O) {
      var v = O(34)();
      Z.exports = function(h) {
        return h !== v && h !== null;
      };
    }, function(Z, K, O) {
      O.d(K, "a", function() {
        return h;
      });
      var v = O(2);
      function h(m) {
        var k = function(j, I) {
          if (Object(v.a)(j) !== "object" || j === null) return j;
          var D = j[Symbol.toPrimitive];
          if (D !== void 0) {
            var J = D.call(j, I);
            if (Object(v.a)(J) !== "object") return J;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (I === "string" ? String : Number)(j);
        }(m, "string");
        return Object(v.a)(k) === "symbol" ? k : String(k);
      }
    }, function(Z, K, O) {
      (function(v) {
        var h;
        if (typeof fetch == "function" && (h = v !== void 0 && v.fetch ? v.fetch : typeof window < "u" && window.fetch ? window.fetch : fetch), typeof window > "u" || window.document === void 0) {
          var m = h || O(65);
          m.default && (m = m.default), K.default = m, Z.exports = K.default;
        }
      }).call(this, O(21));
    }, function(Z, K, O) {
      (function(v) {
        var h = O(1), m = O(51), k = O(15), j = { "Content-Type": "application/x-www-form-urlencoded" };
        function I(p, H) {
          !h.isUndefined(p) && h.isUndefined(p["Content-Type"]) && (p["Content-Type"] = H);
        }
        var D, J = { transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, adapter: ((typeof XMLHttpRequest < "u" || v !== void 0 && Object.prototype.toString.call(v) === "[object process]") && (D = O(16)), D), transformRequest: [function(p, H) {
          return m(H, "Accept"), m(H, "Content-Type"), h.isFormData(p) || h.isArrayBuffer(p) || h.isBuffer(p) || h.isStream(p) || h.isFile(p) || h.isBlob(p) ? p : h.isArrayBufferView(p) ? p.buffer : h.isURLSearchParams(p) ? (I(H, "application/x-www-form-urlencoded;charset=utf-8"), p.toString()) : h.isObject(p) || H && H["Content-Type"] === "application/json" ? (I(H, "application/json"), function(W, it, B) {
            if (h.isString(W)) try {
              return (it || JSON.parse)(W), h.trim(W);
            } catch (X) {
              if (X.name !== "SyntaxError") throw X;
            }
            return (B || JSON.stringify)(W);
          }(p)) : p;
        }], transformResponse: [function(p) {
          var H = this.transitional, W = H && H.silentJSONParsing, it = H && H.forcedJSONParsing, B = !W && this.responseType === "json";
          if (B || it && h.isString(p) && p.length) try {
            return JSON.parse(p);
          } catch (X) {
            if (B)
              throw X.name === "SyntaxError" ? k(X, this, "E_JSON_PARSE") : X;
          }
          return p;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(p) {
          return p >= 200 && p < 300;
        } };
        J.headers = { common: { Accept: "application/json, text/plain, */*" } }, h.forEach(["delete", "get", "head"], function(p) {
          J.headers[p] = {};
        }), h.forEach(["post", "put", "patch"], function(p) {
          J.headers[p] = h.merge(j);
        }), Z.exports = J;
      }).call(this, O(50));
    }, function(Z, K, O) {
      var v = O(42), h = Object.prototype.hasOwnProperty;
      Z.exports = function(m) {
        var k, j = arguments[1];
        if (v(m), j === void 0) h.call(m, "__ee__") && delete m.__ee__;
        else {
          if (!(k = h.call(m, "__ee__") && m.__ee__)) return;
          k[j] && delete k[j];
        }
      };
    }, function(Z, K, O) {
      Z.exports = function(v) {
        return v != null;
      };
    }, function(Z, K, O) {
      Z.exports = function(v, h) {
        return function() {
          for (var m = new Array(arguments.length), k = 0; k < m.length; k++) m[k] = arguments[k];
          return v.apply(h, m);
        };
      };
    }, function(Z, K, O) {
      var v = O(1);
      function h(m) {
        return encodeURIComponent(m).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      Z.exports = function(m, k, j) {
        if (!k) return m;
        var I;
        if (j) I = j(k);
        else if (v.isURLSearchParams(k)) I = k.toString();
        else {
          var D = [];
          v.forEach(k, function(p, H) {
            p != null && (v.isArray(p) ? H += "[]" : p = [p], v.forEach(p, function(W) {
              v.isDate(W) ? W = W.toISOString() : v.isObject(W) && (W = JSON.stringify(W)), D.push(h(H) + "=" + h(W));
            }));
          }), I = D.join("&");
        }
        if (I) {
          var J = m.indexOf("#");
          J !== -1 && (m = m.slice(0, J)), m += (m.indexOf("?") === -1 ? "?" : "&") + I;
        }
        return m;
      };
    }, function(Z, K, O) {
      Z.exports = function(v, h, m, k, j) {
        return v.config = h, m && (v.code = m), v.request = k, v.response = j, v.isAxiosError = !0, v.toJSON = function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code };
        }, v;
      };
    }, function(Z, K, O) {
      var v = O(1), h = O(52), m = O(53), k = O(14), j = O(54), I = O(57), D = O(58), J = O(17);
      Z.exports = function(p) {
        return new Promise(function(H, W) {
          var it = p.data, B = p.headers, X = p.responseType;
          v.isFormData(it) && delete B["Content-Type"];
          var _ = new XMLHttpRequest();
          if (p.auth) {
            var at = p.auth.username || "", lt = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
            B.Authorization = "Basic " + btoa(at + ":" + lt);
          }
          var ot = j(p.baseURL, p.url);
          function F() {
            if (_) {
              var bt = "getAllResponseHeaders" in _ ? I(_.getAllResponseHeaders()) : null, It = { data: X && X !== "text" && X !== "json" ? _.response : _.responseText, status: _.status, statusText: _.statusText, headers: bt, config: p, request: _ };
              h(H, W, It), _ = null;
            }
          }
          if (_.open(p.method.toUpperCase(), k(ot, p.params, p.paramsSerializer), !0), _.timeout = p.timeout, "onloadend" in _ ? _.onloadend = F : _.onreadystatechange = function() {
            _ && _.readyState === 4 && (_.status !== 0 || _.responseURL && _.responseURL.indexOf("file:") === 0) && setTimeout(F);
          }, _.onabort = function() {
            _ && (W(J("Request aborted", p, "ECONNABORTED", _)), _ = null);
          }, _.onerror = function() {
            W(J("Network Error", p, null, _)), _ = null;
          }, _.ontimeout = function() {
            var bt = "timeout of " + p.timeout + "ms exceeded";
            p.timeoutErrorMessage && (bt = p.timeoutErrorMessage), W(J(bt, p, p.transitional && p.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", _)), _ = null;
          }, v.isStandardBrowserEnv()) {
            var yt = (p.withCredentials || D(ot)) && p.xsrfCookieName ? m.read(p.xsrfCookieName) : void 0;
            yt && (B[p.xsrfHeaderName] = yt);
          }
          "setRequestHeader" in _ && v.forEach(B, function(bt, It) {
            it === void 0 && It.toLowerCase() === "content-type" ? delete B[It] : _.setRequestHeader(It, bt);
          }), v.isUndefined(p.withCredentials) || (_.withCredentials = !!p.withCredentials), X && X !== "json" && (_.responseType = p.responseType), typeof p.onDownloadProgress == "function" && _.addEventListener("progress", p.onDownloadProgress), typeof p.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", p.onUploadProgress), p.cancelToken && p.cancelToken.promise.then(function(bt) {
            _ && (_.abort(), W(bt), _ = null);
          }), it || (it = null), _.send(it);
        });
      };
    }, function(Z, K, O) {
      var v = O(15);
      Z.exports = function(h, m, k, j, I) {
        var D = new Error(h);
        return v(D, m, k, j, I);
      };
    }, function(Z, K, O) {
      Z.exports = function(v) {
        return !(!v || !v.__CANCEL__);
      };
    }, function(Z, K, O) {
      var v = O(1);
      Z.exports = function(h, m) {
        m = m || {};
        var k = {}, j = ["url", "method", "data"], I = ["headers", "auth", "proxy", "params"], D = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"], J = ["validateStatus"];
        function p(B, X) {
          return v.isPlainObject(B) && v.isPlainObject(X) ? v.merge(B, X) : v.isPlainObject(X) ? v.merge({}, X) : v.isArray(X) ? X.slice() : X;
        }
        function H(B) {
          v.isUndefined(m[B]) ? v.isUndefined(h[B]) || (k[B] = p(void 0, h[B])) : k[B] = p(h[B], m[B]);
        }
        v.forEach(j, function(B) {
          v.isUndefined(m[B]) || (k[B] = p(void 0, m[B]));
        }), v.forEach(I, H), v.forEach(D, function(B) {
          v.isUndefined(m[B]) ? v.isUndefined(h[B]) || (k[B] = p(void 0, h[B])) : k[B] = p(void 0, m[B]);
        }), v.forEach(J, function(B) {
          B in m ? k[B] = p(h[B], m[B]) : B in h && (k[B] = p(void 0, h[B]));
        });
        var W = j.concat(I).concat(D).concat(J), it = Object.keys(h).concat(Object.keys(m)).filter(function(B) {
          return W.indexOf(B) === -1;
        });
        return v.forEach(it, H), k;
      };
    }, function(Z, K, O) {
      function v(h) {
        this.message = h;
      }
      v.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }, v.prototype.__CANCEL__ = !0, Z.exports = v;
    }, function(Z, K) {
      var O;
      O = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        O = O || new Function("return this")();
      } catch {
        typeof window == "object" && (O = window);
      }
      Z.exports = O;
    }, function(Z, K, O) {
      (function(v) {
        var h, m, k, j = O(5), I = O(9), D = O.n(I);
        function J(it) {
          return (J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          })(it);
        }
        typeof fetch == "function" && (h = v !== void 0 && v.fetch ? v.fetch : typeof window < "u" && window.fetch ? window.fetch : fetch), Object(j.b)() && (v !== void 0 && v.XMLHttpRequest ? m = v.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (m = window.XMLHttpRequest)), typeof ActiveXObject == "function" && (v !== void 0 && v.ActiveXObject ? k = v.ActiveXObject : typeof window < "u" && window.ActiveXObject && (k = window.ActiveXObject)), h || !I || m || k || (h = D.a || I), typeof h != "function" && (h = void 0);
        var p = function(it, B) {
          if (B && J(B) === "object") {
            var X = "";
            for (var _ in B) X += "&" + encodeURIComponent(_) + "=" + encodeURIComponent(B[_]);
            if (!X) return it;
            it = it + (it.indexOf("?") !== -1 ? "&" : "?") + X.slice(1);
          }
          return it;
        }, H = function(it, B, X) {
          h(it, B).then(function(_) {
            if (!_.ok) return X(_.statusText || "Error", { status: _.status });
            _.text().then(function(at) {
              X(null, { status: _.status, data: at });
            }).catch(X);
          }).catch(X);
        }, W = !1;
        K.a = function(it, B, X, _) {
          return typeof X == "function" && (_ = X, X = void 0), _ = _ || function() {
          }, h ? function(at, lt, ot, F) {
            at.queryStringParams && (lt = p(lt, at.queryStringParams));
            var yt = Object(j.a)({}, typeof at.customHeaders == "function" ? at.customHeaders() : at.customHeaders);
            ot && (yt["Content-Type"] = "application/json");
            var bt = typeof at.requestOptions == "function" ? at.requestOptions(ot) : at.requestOptions, It = Object(j.a)({ method: ot ? "POST" : "GET", body: ot ? at.stringify(ot) : void 0, headers: yt }, W ? {} : bt);
            try {
              H(lt, It, F);
            } catch (Bt) {
              if (!bt || Object.keys(bt).length === 0 || !Bt.message || Bt.message.indexOf("not implemented") < 0) return F(Bt);
              try {
                Object.keys(bt).forEach(function(z) {
                  delete It[z];
                }), H(lt, It, F), W = !0;
              } catch (z) {
                F(z);
              }
            }
          }(it, B, X, _) : Object(j.b)() || typeof ActiveXObject == "function" ? function(at, lt, ot, F) {
            ot && J(ot) === "object" && (ot = p("", ot).slice(1)), at.queryStringParams && (lt = p(lt, at.queryStringParams));
            try {
              var yt;
              (yt = m ? new m() : new k("MSXML2.XMLHTTP.3.0")).open(ot ? "POST" : "GET", lt, 1), at.crossDomain || yt.setRequestHeader("X-Requested-With", "XMLHttpRequest"), yt.withCredentials = !!at.withCredentials, ot && yt.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), yt.overrideMimeType && yt.overrideMimeType("application/json");
              var bt = at.customHeaders;
              if (bt = typeof bt == "function" ? bt() : bt) for (var It in bt) yt.setRequestHeader(It, bt[It]);
              yt.onreadystatechange = function() {
                yt.readyState > 3 && F(yt.status >= 400 ? yt.statusText : null, { status: yt.status, data: yt.responseText });
              }, yt.send(ot);
            } catch (Bt) {
              console && console.log(Bt);
            }
          }(it, B, X, _) : void _(new Error("No fetch and no xhr implementation found!"));
        };
      }).call(this, O(21));
    }, function(Z, K, O) {
      var v = O(12), h = O(24), m = O(28), k = O(36), j = O(37);
      (Z.exports = function(I, D) {
        var J, p, H, W, it;
        return arguments.length < 2 || typeof I != "string" ? (W = D, D = I, I = null) : W = arguments[2], v(I) ? (J = j.call(I, "c"), p = j.call(I, "e"), H = j.call(I, "w")) : (J = H = !0, p = !1), it = { value: D, configurable: J, enumerable: p, writable: H }, W ? m(k(W), it) : it;
      }).gs = function(I, D, J) {
        var p, H, W, it;
        return typeof I != "string" ? (W = J, J = D, D = I, I = null) : W = arguments[3], v(D) ? h(D) ? v(J) ? h(J) || (W = J, J = void 0) : J = void 0 : (W = D, D = J = void 0) : D = void 0, v(I) ? (p = j.call(I, "c"), H = j.call(I, "e")) : (p = !0, H = !1), it = { get: D, set: J, configurable: p, enumerable: H }, W ? m(k(W), it) : it;
      };
    }, function(Z, K, O) {
      var v = O(25), h = /^\s*class[\s{/}]/, m = Function.prototype.toString;
      Z.exports = function(k) {
        return !!v(k) && !h.test(m.call(k));
      };
    }, function(Z, K, O) {
      var v = O(26);
      Z.exports = function(h) {
        if (typeof h != "function" || !hasOwnProperty.call(h, "length")) return !1;
        try {
          if (typeof h.length != "number" || typeof h.call != "function" || typeof h.apply != "function") return !1;
        } catch {
          return !1;
        }
        return !v(h);
      };
    }, function(Z, K, O) {
      var v = O(27);
      Z.exports = function(h) {
        if (!v(h)) return !1;
        try {
          return !!h.constructor && h.constructor.prototype === h;
        } catch {
          return !1;
        }
      };
    }, function(Z, K, O) {
      var v = O(12), h = { object: !0, function: !0, undefined: !0 };
      Z.exports = function(m) {
        return !!v(m) && hasOwnProperty.call(h, typeof m);
      };
    }, function(Z, K, O) {
      Z.exports = O(29)() ? Object.assign : O(30);
    }, function(Z, K, O) {
      Z.exports = function() {
        var v, h = Object.assign;
        return typeof h == "function" && (h(v = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), v.foo + v.bar + v.trzy === "razdwatrzy");
      };
    }, function(Z, K, O) {
      var v = O(31), h = O(35), m = Math.max;
      Z.exports = function(k, j) {
        var I, D, J, p = m(arguments.length, 2);
        for (k = Object(h(k)), J = function(H) {
          try {
            k[H] = j[H];
          } catch (W) {
            I || (I = W);
          }
        }, D = 1; D < p; ++D) v(j = arguments[D]).forEach(J);
        if (I !== void 0) throw I;
        return k;
      };
    }, function(Z, K, O) {
      Z.exports = O(32)() ? Object.keys : O(33);
    }, function(Z, K, O) {
      Z.exports = function() {
        try {
          return Object.keys("primitive"), !0;
        } catch {
          return !1;
        }
      };
    }, function(Z, K, O) {
      var v = O(7), h = Object.keys;
      Z.exports = function(m) {
        return h(v(m) ? Object(m) : m);
      };
    }, function(Z, K, O) {
      Z.exports = function() {
      };
    }, function(Z, K, O) {
      var v = O(7);
      Z.exports = function(h) {
        if (!v(h)) throw new TypeError("Cannot use null or undefined");
        return h;
      };
    }, function(Z, K, O) {
      var v = O(7), h = Array.prototype.forEach, m = Object.create, k = function(j, I) {
        var D;
        for (D in j) I[D] = j[D];
      };
      Z.exports = function(j) {
        var I = m(null);
        return h.call(arguments, function(D) {
          v(D) && k(Object(D), I);
        }), I;
      };
    }, function(Z, K, O) {
      Z.exports = O(38)() ? String.prototype.contains : O(39);
    }, function(Z, K, O) {
      var v = "razdwatrzy";
      Z.exports = function() {
        return typeof v.contains == "function" && v.contains("dwa") === !0 && v.contains("foo") === !1;
      };
    }, function(Z, K, O) {
      var v = String.prototype.indexOf;
      Z.exports = function(h) {
        return v.call(this, h, arguments[1]) > -1;
      };
    }, function(Z, K, O) {
      Z.exports = function(v) {
        if (typeof v != "function") throw new TypeError(v + " is not a function");
        return v;
      };
    }, function(Z, K, O) {
      function v(e, i) {
        for (var t = 0; t < i.length; t++) {
          var n = i[t];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function h(e, i, t) {
        return i && v(e.prototype, i), t && v(e, t), e;
      }
      function m(e, i) {
        e.prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
      }
      function k(e) {
        return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
          return i.__proto__ || Object.getPrototypeOf(i);
        })(e);
      }
      function j(e, i) {
        return (j = Object.setPrototypeOf || function(t, n) {
          return t.__proto__ = n, t;
        })(e, i);
      }
      function I() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function D(e, i, t) {
        return (D = I() ? Reflect.construct : function(n, o, g) {
          var w = [null];
          w.push.apply(w, o);
          var R = new (Function.bind.apply(n, w))();
          return g && j(R, g.prototype), R;
        }).apply(null, arguments);
      }
      function J(e) {
        var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return (J = function(t) {
          if (t === null || (n = t, Function.toString.call(n).indexOf("[native code]") === -1)) return t;
          var n;
          if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
          if (i !== void 0) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          function o() {
            return D(t, arguments, k(this).constructor);
          }
          return o.prototype = Object.create(t.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), j(o, t);
        })(e);
      }
      function p(e, i) {
        (i == null || i > e.length) && (i = e.length);
        for (var t = 0, n = new Array(i); t < i; t++) n[t] = e[t];
        return n;
      }
      function H(e) {
        var i = 0;
        if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
          if (Array.isArray(e) || (e = function(t, n) {
            if (t) {
              if (typeof t == "string") return p(t, n);
              var o = Object.prototype.toString.call(t).slice(8, -1);
              return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(o) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? p(t, n) : void 0;
            }
          }(e))) return function() {
            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
          };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        return (i = e[Symbol.iterator]()).next.bind(i);
      }
      Object.defineProperty(K, "__esModule", { value: !0 });
      var W = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(J(Error)), it = function(e) {
        function i(t) {
          return e.call(this, "Invalid DateTime: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(W), B = function(e) {
        function i(t) {
          return e.call(this, "Invalid Interval: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(W), X = function(e) {
        function i(t) {
          return e.call(this, "Invalid Duration: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(W), _ = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(W), at = function(e) {
        function i(t) {
          return e.call(this, "Invalid unit " + t) || this;
        }
        return m(i, e), i;
      }(W), lt = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(W), ot = function(e) {
        function i() {
          return e.call(this, "Zone is an abstract class") || this;
        }
        return m(i, e), i;
      }(W), F = "numeric", yt = "short", bt = "long", It = { year: F, month: F, day: F }, Bt = { year: F, month: yt, day: F }, z = { year: F, month: yt, day: F, weekday: yt }, G = { year: F, month: bt, day: F }, P = { year: F, month: bt, day: F, weekday: bt }, f = { hour: F, minute: F }, A = { hour: F, minute: F, second: F }, M = { hour: F, minute: F, second: F, timeZoneName: yt }, vt = { hour: F, minute: F, second: F, timeZoneName: bt }, wt = { hour: F, minute: F, hour12: !1 }, Et = { hour: F, minute: F, second: F, hour12: !1 }, Mt = { hour: F, minute: F, second: F, hour12: !1, timeZoneName: yt }, Y = { hour: F, minute: F, second: F, hour12: !1, timeZoneName: bt }, Q = { year: F, month: F, day: F, hour: F, minute: F }, rt = { year: F, month: F, day: F, hour: F, minute: F, second: F }, et = { year: F, month: yt, day: F, hour: F, minute: F }, Gt = { year: F, month: yt, day: F, hour: F, minute: F, second: F }, Qt = { year: F, month: yt, day: F, weekday: yt, hour: F, minute: F }, Xt = { year: F, month: bt, day: F, hour: F, minute: F, timeZoneName: yt }, re = { year: F, month: bt, day: F, hour: F, minute: F, second: F, timeZoneName: yt }, he = { year: F, month: bt, day: F, weekday: bt, hour: F, minute: F, timeZoneName: bt }, y = { year: F, month: bt, day: F, weekday: bt, hour: F, minute: F, second: F, timeZoneName: bt };
      function u(e) {
        return e === void 0;
      }
      function r(e) {
        return typeof e == "number";
      }
      function s(e) {
        return typeof e == "number" && e % 1 == 0;
      }
      function l() {
        try {
          return typeof Intl < "u" && Intl.DateTimeFormat;
        } catch {
          return !1;
        }
      }
      function S() {
        return !u(Intl.DateTimeFormat.prototype.formatToParts);
      }
      function d() {
        try {
          return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
        } catch {
          return !1;
        }
      }
      function L(e, i, t) {
        if (e.length !== 0) return e.reduce(function(n, o) {
          var g = [i(o), o];
          return n && t(n[0], g[0]) === n[0] ? n : g;
        }, null)[1];
      }
      function b(e, i) {
        return i.reduce(function(t, n) {
          return t[n] = e[n], t;
        }, {});
      }
      function E(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i);
      }
      function x(e, i, t) {
        return s(e) && e >= i && e <= t;
      }
      function T(e, i) {
        i === void 0 && (i = 2);
        var t = e < 0 ? "-" : "", n = t ? -1 * e : e;
        return "" + t + (n.toString().length < i ? ("0".repeat(i) + n).slice(-i) : n.toString());
      }
      function N(e) {
        return u(e) || e === null || e === "" ? void 0 : parseInt(e, 10);
      }
      function U(e) {
        if (!u(e) && e !== null && e !== "") {
          var i = 1e3 * parseFloat("0." + e);
          return Math.floor(i);
        }
      }
      function $(e, i, t) {
        t === void 0 && (t = !1);
        var n = Math.pow(10, i);
        return (t ? Math.trunc : Math.round)(e * n) / n;
      }
      function tt(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
      }
      function St(e) {
        return tt(e) ? 366 : 365;
      }
      function Pt(e, i) {
        var t = function(n, o) {
          return n - o * Math.floor(n / o);
        }(i - 1, 12) + 1;
        return t === 2 ? tt(e + (i - t) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
      }
      function Ht(e) {
        var i = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
        return e.year < 100 && e.year >= 0 && (i = new Date(i)).setUTCFullYear(i.getUTCFullYear() - 1900), +i;
      }
      function le(e) {
        var i = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, t = e - 1, n = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
        return i === 4 || n === 3 ? 53 : 52;
      }
      function de(e) {
        return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
      }
      function we(e, i, t, n) {
        n === void 0 && (n = null);
        var o = new Date(e), g = { hour12: !1, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
        n && (g.timeZone = n);
        var w = Object.assign({ timeZoneName: i }, g), R = l();
        if (R && S()) {
          var q = new Intl.DateTimeFormat(t, w).formatToParts(o).find(function(nt) {
            return nt.type.toLowerCase() === "timezonename";
          });
          return q ? q.value : null;
        }
        if (R) {
          var st = new Intl.DateTimeFormat(t, g).format(o);
          return new Intl.DateTimeFormat(t, w).format(o).substring(st.length).replace(/^[, \u200e]+/, "");
        }
        return null;
      }
      function ge(e, i) {
        var t = parseInt(e, 10);
        Number.isNaN(t) && (t = 0);
        var n = parseInt(i, 10) || 0;
        return 60 * t + (t < 0 || Object.is(t, -0) ? -n : n);
      }
      function Me(e) {
        var i = Number(e);
        if (typeof e == "boolean" || e === "" || Number.isNaN(i)) throw new lt("Invalid unit value " + e);
        return i;
      }
      function pe(e, i, t) {
        var n = {};
        for (var o in e) if (E(e, o)) {
          if (t.indexOf(o) >= 0) continue;
          var g = e[o];
          if (g == null) continue;
          n[i(o)] = Me(g);
        }
        return n;
      }
      function De(e, i) {
        var t = Math.trunc(Math.abs(e / 60)), n = Math.trunc(Math.abs(e % 60)), o = e >= 0 ? "+" : "-";
        switch (i) {
          case "short":
            return "" + o + T(t, 2) + ":" + T(n, 2);
          case "narrow":
            return "" + o + t + (n > 0 ? ":" + n : "");
          case "techie":
            return "" + o + T(t, 2) + T(n, 2);
          default:
            throw new RangeError("Value format " + i + " is out of range for property format");
        }
      }
      function ve(e) {
        return b(e, ["hour", "minute", "second", "millisecond"]);
      }
      var Le = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
      function zt(e) {
        return JSON.stringify(e, Object.keys(e).sort());
      }
      var me = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], a = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function c(e) {
        switch (e) {
          case "narrow":
            return [].concat(a);
          case "short":
            return [].concat(mt);
          case "long":
            return [].concat(me);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var V = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], gt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], dt = ["M", "T", "W", "T", "F", "S", "S"];
      function Ct(e) {
        switch (e) {
          case "narrow":
            return [].concat(dt);
          case "short":
            return [].concat(gt);
          case "long":
            return [].concat(V);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var Lt = ["AM", "PM"], xt = ["Before Christ", "Anno Domini"], ft = ["BC", "AD"], ut = ["B", "A"];
      function jt(e) {
        switch (e) {
          case "narrow":
            return [].concat(ut);
          case "short":
            return [].concat(ft);
          case "long":
            return [].concat(xt);
          default:
            return null;
        }
      }
      function te(e, i) {
        for (var t, n = "", o = H(e); !(t = o()).done; ) {
          var g = t.value;
          g.literal ? n += g.val : n += i(g.val);
        }
        return n;
      }
      var ke = { D: It, DD: Bt, DDD: G, DDDD: P, t: f, tt: A, ttt: M, tttt: vt, T: wt, TT: Et, TTT: Mt, TTTT: Y, f: Q, ff: et, fff: Xt, ffff: he, F: rt, FF: Gt, FFF: re, FFFF: y }, se = function() {
        function e(t, n) {
          this.opts = n, this.loc = t, this.systemLoc = null;
        }
        e.create = function(t, n) {
          return n === void 0 && (n = {}), new e(t, n);
        }, e.parseFormat = function(t) {
          for (var n = null, o = "", g = !1, w = [], R = 0; R < t.length; R++) {
            var q = t.charAt(R);
            q === "'" ? (o.length > 0 && w.push({ literal: g, val: o }), n = null, o = "", g = !g) : g || q === n ? o += q : (o.length > 0 && w.push({ literal: !1, val: o }), o = q, n = q);
          }
          return o.length > 0 && w.push({ literal: g, val: o }), w;
        }, e.macroTokenToFormatOpts = function(t) {
          return ke[t];
        };
        var i = e.prototype;
        return i.formatWithSystemDefault = function(t, n) {
          return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
        }, i.formatDateTime = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
        }, i.formatDateTimeParts = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).formatToParts();
        }, i.resolvedOptions = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).resolvedOptions();
        }, i.num = function(t, n) {
          if (n === void 0 && (n = 0), this.opts.forceSimple) return T(t, n);
          var o = Object.assign({}, this.opts);
          return n > 0 && (o.padTo = n), this.loc.numberFormatter(o).format(t);
        }, i.formatDateTimeFromString = function(t, n) {
          var o = this, g = this.loc.listingMode() === "en", w = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && S(), R = function(Tt, Rt) {
            return o.loc.extract(t, Tt, Rt);
          }, q = function(Tt) {
            return t.isOffsetFixed && t.offset === 0 && Tt.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, Tt.format) : "";
          }, st = function() {
            return g ? function(Tt) {
              return Lt[Tt.hour < 12 ? 0 : 1];
            }(t) : R({ hour: "numeric", hour12: !0 }, "dayperiod");
          }, nt = function(Tt, Rt) {
            return g ? function(Ut, Ot) {
              return c(Ot)[Ut.month - 1];
            }(t, Tt) : R(Rt ? { month: Tt } : { month: Tt, day: "numeric" }, "month");
          }, ht = function(Tt, Rt) {
            return g ? function(Ut, Ot) {
              return Ct(Ot)[Ut.weekday - 1];
            }(t, Tt) : R(Rt ? { weekday: Tt } : { weekday: Tt, month: "long", day: "numeric" }, "weekday");
          }, kt = function(Tt) {
            return g ? function(Rt, Ut) {
              return jt(Ut)[Rt.year < 0 ? 0 : 1];
            }(t, Tt) : R({ era: Tt }, "era");
          };
          return te(e.parseFormat(n), function(Tt) {
            switch (Tt) {
              case "S":
                return o.num(t.millisecond);
              case "u":
              case "SSS":
                return o.num(t.millisecond, 3);
              case "s":
                return o.num(t.second);
              case "ss":
                return o.num(t.second, 2);
              case "m":
                return o.num(t.minute);
              case "mm":
                return o.num(t.minute, 2);
              case "h":
                return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
              case "hh":
                return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
              case "H":
                return o.num(t.hour);
              case "HH":
                return o.num(t.hour, 2);
              case "Z":
                return q({ format: "narrow", allowZ: o.opts.allowZ });
              case "ZZ":
                return q({ format: "short", allowZ: o.opts.allowZ });
              case "ZZZ":
                return q({ format: "techie", allowZ: o.opts.allowZ });
              case "ZZZZ":
                return t.zone.offsetName(t.ts, { format: "short", locale: o.loc.locale });
              case "ZZZZZ":
                return t.zone.offsetName(t.ts, { format: "long", locale: o.loc.locale });
              case "z":
                return t.zoneName;
              case "a":
                return st();
              case "d":
                return w ? R({ day: "numeric" }, "day") : o.num(t.day);
              case "dd":
                return w ? R({ day: "2-digit" }, "day") : o.num(t.day, 2);
              case "c":
                return o.num(t.weekday);
              case "ccc":
                return ht("short", !0);
              case "cccc":
                return ht("long", !0);
              case "ccccc":
                return ht("narrow", !0);
              case "E":
                return o.num(t.weekday);
              case "EEE":
                return ht("short", !1);
              case "EEEE":
                return ht("long", !1);
              case "EEEEE":
                return ht("narrow", !1);
              case "L":
                return w ? R({ month: "numeric", day: "numeric" }, "month") : o.num(t.month);
              case "LL":
                return w ? R({ month: "2-digit", day: "numeric" }, "month") : o.num(t.month, 2);
              case "LLL":
                return nt("short", !0);
              case "LLLL":
                return nt("long", !0);
              case "LLLLL":
                return nt("narrow", !0);
              case "M":
                return w ? R({ month: "numeric" }, "month") : o.num(t.month);
              case "MM":
                return w ? R({ month: "2-digit" }, "month") : o.num(t.month, 2);
              case "MMM":
                return nt("short", !1);
              case "MMMM":
                return nt("long", !1);
              case "MMMMM":
                return nt("narrow", !1);
              case "y":
                return w ? R({ year: "numeric" }, "year") : o.num(t.year);
              case "yy":
                return w ? R({ year: "2-digit" }, "year") : o.num(t.year.toString().slice(-2), 2);
              case "yyyy":
                return w ? R({ year: "numeric" }, "year") : o.num(t.year, 4);
              case "yyyyyy":
                return w ? R({ year: "numeric" }, "year") : o.num(t.year, 6);
              case "G":
                return kt("short");
              case "GG":
                return kt("long");
              case "GGGGG":
                return kt("narrow");
              case "kk":
                return o.num(t.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return o.num(t.weekYear, 4);
              case "W":
                return o.num(t.weekNumber);
              case "WW":
                return o.num(t.weekNumber, 2);
              case "o":
                return o.num(t.ordinal);
              case "ooo":
                return o.num(t.ordinal, 3);
              case "q":
                return o.num(t.quarter);
              case "qq":
                return o.num(t.quarter, 2);
              case "X":
                return o.num(Math.floor(t.ts / 1e3));
              case "x":
                return o.num(t.ts);
              default:
                return function(Rt) {
                  var Ut = e.macroTokenToFormatOpts(Rt);
                  return Ut ? o.formatWithSystemDefault(t, Ut) : Rt;
                }(Tt);
            }
          });
        }, i.formatDurationFromString = function(t, n) {
          var o, g = this, w = function(nt) {
            switch (nt[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, R = e.parseFormat(n), q = R.reduce(function(nt, ht) {
            var kt = ht.literal, Tt = ht.val;
            return kt ? nt : nt.concat(Tt);
          }, []), st = t.shiftTo.apply(t, q.map(w).filter(function(nt) {
            return nt;
          }));
          return te(R, (o = st, function(nt) {
            var ht = w(nt);
            return ht ? g.num(o.get(ht), nt.length) : nt;
          }));
        }, e;
      }(), ye = function() {
        function e(i, t) {
          this.reason = i, this.explanation = t;
        }
        return e.prototype.toMessage = function() {
          return this.explanation ? this.reason + ": " + this.explanation : this.reason;
        }, e;
      }(), C = function() {
        function e() {
        }
        var i = e.prototype;
        return i.offsetName = function(t, n) {
          throw new ot();
        }, i.formatOffset = function(t, n) {
          throw new ot();
        }, i.offset = function(t) {
          throw new ot();
        }, i.equals = function(t) {
          throw new ot();
        }, h(e, [{ key: "type", get: function() {
          throw new ot();
        } }, { key: "name", get: function() {
          throw new ot();
        } }, { key: "universal", get: function() {
          throw new ot();
        } }, { key: "isValid", get: function() {
          throw new ot();
        } }]), e;
      }(), ct = null, pt = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        m(i, e);
        var t = i.prototype;
        return t.offsetName = function(n, o) {
          return we(n, o.format, o.locale);
        }, t.formatOffset = function(n, o) {
          return De(this.offset(n), o);
        }, t.offset = function(n) {
          return -new Date(n).getTimezoneOffset();
        }, t.equals = function(n) {
          return n.type === "local";
        }, h(i, [{ key: "type", get: function() {
          return "local";
        } }, { key: "name", get: function() {
          return l() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return !0;
        } }], [{ key: "instance", get: function() {
          return ct === null && (ct = new i()), ct;
        } }]), i;
      }(C), At = RegExp("^" + Le.source + "$"), Vt = {}, Jt = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, _t = {}, Nt = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).zoneName = n, o.valid = i.isValidZone(n), o;
        }
        m(i, e), i.create = function(n) {
          return _t[n] || (_t[n] = new i(n)), _t[n];
        }, i.resetCache = function() {
          _t = {}, Vt = {};
        }, i.isValidSpecifier = function(n) {
          return !(!n || !n.match(At));
        }, i.isValidZone = function(n) {
          try {
            return new Intl.DateTimeFormat("en-US", { timeZone: n }).format(), !0;
          } catch {
            return !1;
          }
        }, i.parseGMTOffset = function(n) {
          if (n) {
            var o = n.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
            if (o) return -60 * parseInt(o[1]);
          }
          return null;
        };
        var t = i.prototype;
        return t.offsetName = function(n, o) {
          return we(n, o.format, o.locale, this.name);
        }, t.formatOffset = function(n, o) {
          return De(this.offset(n), o);
        }, t.offset = function(n) {
          var o = new Date(n);
          if (isNaN(o)) return NaN;
          var g, w = (g = this.name, Vt[g] || (Vt[g] = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })), Vt[g]), R = w.formatToParts ? function(Rt, Ut) {
            for (var Ot = Rt.formatToParts(Ut), Ft = [], Dt = 0; Dt < Ot.length; Dt++) {
              var ne = Ot[Dt], $t = ne.type, fe = ne.value, Se = Jt[$t];
              u(Se) || (Ft[Se] = parseInt(fe, 10));
            }
            return Ft;
          }(w, o) : function(Rt, Ut) {
            var Ot = Rt.format(Ut).replace(/\u200E/g, ""), Ft = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(Ot), Dt = Ft[1], ne = Ft[2];
            return [Ft[3], Dt, ne, Ft[4], Ft[5], Ft[6]];
          }(w, o), q = R[0], st = R[1], nt = R[2], ht = R[3], kt = +o, Tt = kt % 1e3;
          return (Ht({ year: q, month: st, day: nt, hour: ht === 24 ? 0 : ht, minute: R[4], second: R[5], millisecond: 0 }) - (kt -= Tt >= 0 ? Tt : 1e3 + Tt)) / 6e4;
        }, t.equals = function(n) {
          return n.type === "iana" && n.name === this.name;
        }, h(i, [{ key: "type", get: function() {
          return "iana";
        } }, { key: "name", get: function() {
          return this.zoneName;
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return this.valid;
        } }]), i;
      }(C), ie = null, qt = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).fixed = n, o;
        }
        m(i, e), i.instance = function(n) {
          return n === 0 ? i.utcInstance : new i(n);
        }, i.parseSpecifier = function(n) {
          if (n) {
            var o = n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (o) return new i(ge(o[1], o[2]));
          }
          return null;
        }, h(i, null, [{ key: "utcInstance", get: function() {
          return ie === null && (ie = new i(0)), ie;
        } }]);
        var t = i.prototype;
        return t.offsetName = function() {
          return this.name;
        }, t.formatOffset = function(n, o) {
          return De(this.fixed, o);
        }, t.offset = function() {
          return this.fixed;
        }, t.equals = function(n) {
          return n.type === "fixed" && n.fixed === this.fixed;
        }, h(i, [{ key: "type", get: function() {
          return "fixed";
        } }, { key: "name", get: function() {
          return this.fixed === 0 ? "UTC" : "UTC" + De(this.fixed, "narrow");
        } }, { key: "universal", get: function() {
          return !0;
        } }, { key: "isValid", get: function() {
          return !0;
        } }]), i;
      }(C), Yt = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).zoneName = n, o;
        }
        m(i, e);
        var t = i.prototype;
        return t.offsetName = function() {
          return null;
        }, t.formatOffset = function() {
          return "";
        }, t.offset = function() {
          return NaN;
        }, t.equals = function() {
          return !1;
        }, h(i, [{ key: "type", get: function() {
          return "invalid";
        } }, { key: "name", get: function() {
          return this.zoneName;
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return !1;
        } }]), i;
      }(C);
      function ee(e, i) {
        var t;
        if (u(e) || e === null) return i;
        if (e instanceof C) return e;
        if (typeof e == "string") {
          var n = e.toLowerCase();
          return n === "local" ? i : n === "utc" || n === "gmt" ? qt.utcInstance : (t = Nt.parseGMTOffset(e)) != null ? qt.instance(t) : Nt.isValidSpecifier(n) ? Nt.create(e) : qt.parseSpecifier(n) || new Yt(e);
        }
        return r(e) ? qt.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Yt(e);
      }
      var Ce = function() {
        return Date.now();
      }, Oe = null, Kt = null, qe = null, Ue = null, cn = !1, oe = function() {
        function e() {
        }
        return e.resetCaches = function() {
          ce.resetCache(), Nt.resetCache();
        }, h(e, null, [{ key: "now", get: function() {
          return Ce;
        }, set: function(i) {
          Ce = i;
        } }, { key: "defaultZoneName", get: function() {
          return e.defaultZone.name;
        }, set: function(i) {
          Oe = i ? ee(i) : null;
        } }, { key: "defaultZone", get: function() {
          return Oe || pt.instance;
        } }, { key: "defaultLocale", get: function() {
          return Kt;
        }, set: function(i) {
          Kt = i;
        } }, { key: "defaultNumberingSystem", get: function() {
          return qe;
        }, set: function(i) {
          qe = i;
        } }, { key: "defaultOutputCalendar", get: function() {
          return Ue;
        }, set: function(i) {
          Ue = i;
        } }, { key: "throwOnInvalid", get: function() {
          return cn;
        }, set: function(i) {
          cn = i;
        } }]), e;
      }(), hn = {};
      function gn(e, i) {
        i === void 0 && (i = {});
        var t = JSON.stringify([e, i]), n = hn[t];
        return n || (n = new Intl.DateTimeFormat(e, i), hn[t] = n), n;
      }
      var vn = {}, mn = {};
      function vr(e, i) {
        i === void 0 && (i = {});
        var t = i, n = (t.base, function(w, R) {
          if (w == null) return {};
          var q, st, nt = {}, ht = Object.keys(w);
          for (st = 0; st < ht.length; st++) q = ht[st], R.indexOf(q) >= 0 || (nt[q] = w[q]);
          return nt;
        }(t, ["base"])), o = JSON.stringify([e, n]), g = mn[o];
        return g || (g = new Intl.RelativeTimeFormat(e, i), mn[o] = g), g;
      }
      var Xe = null;
      function ln(e, i, t, n, o) {
        var g = e.listingMode(t);
        return g === "error" ? null : g === "en" ? n(i) : o(i);
      }
      var mr = function() {
        function e(i, t, n) {
          if (this.padTo = n.padTo || 0, this.floor = n.floor || !1, !t && l()) {
            var o = { useGrouping: !1 };
            n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = function(g, w) {
              w === void 0 && (w = {});
              var R = JSON.stringify([g, w]), q = vn[R];
              return q || (q = new Intl.NumberFormat(g, w), vn[R] = q), q;
            }(i, o);
          }
        }
        return e.prototype.format = function(i) {
          if (this.inf) {
            var t = this.floor ? Math.floor(i) : i;
            return this.inf.format(t);
          }
          return T(this.floor ? Math.floor(i) : $(i, 3), this.padTo);
        }, e;
      }(), pr = function() {
        function e(t, n, o) {
          var g;
          if (this.opts = o, this.hasIntl = l(), t.zone.universal && this.hasIntl) {
            var w = t.offset / 60 * -1, R = w >= 0 ? "Etc/GMT+" + w : "Etc/GMT" + w, q = Nt.isValidZone(R);
            t.offset !== 0 && q ? (g = R, this.dt = t) : (g = "UTC", o.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : ae.fromMillis(t.ts + 60 * t.offset * 1e3));
          } else t.zone.type === "local" ? this.dt = t : (this.dt = t, g = t.zone.name);
          if (this.hasIntl) {
            var st = Object.assign({}, this.opts);
            g && (st.timeZone = g), this.dtf = gn(n, st);
          }
        }
        var i = e.prototype;
        return i.format = function() {
          if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
          var t = function(o) {
            switch (zt(b(o, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
              case zt(It):
                return "M/d/yyyy";
              case zt(Bt):
                return "LLL d, yyyy";
              case zt(z):
                return "EEE, LLL d, yyyy";
              case zt(G):
                return "LLLL d, yyyy";
              case zt(P):
                return "EEEE, LLLL d, yyyy";
              case zt(f):
                return "h:mm a";
              case zt(A):
                return "h:mm:ss a";
              case zt(M):
              case zt(vt):
                return "h:mm a";
              case zt(wt):
                return "HH:mm";
              case zt(Et):
                return "HH:mm:ss";
              case zt(Mt):
              case zt(Y):
                return "HH:mm";
              case zt(Q):
                return "M/d/yyyy, h:mm a";
              case zt(et):
                return "LLL d, yyyy, h:mm a";
              case zt(Xt):
                return "LLLL d, yyyy, h:mm a";
              case zt(he):
                return "EEEE, LLLL d, yyyy, h:mm a";
              case zt(rt):
                return "M/d/yyyy, h:mm:ss a";
              case zt(Gt):
                return "LLL d, yyyy, h:mm:ss a";
              case zt(Qt):
                return "EEE, d LLL yyyy, h:mm a";
              case zt(re):
                return "LLLL d, yyyy, h:mm:ss a";
              case zt(y):
                return "EEEE, LLLL d, yyyy, h:mm:ss a";
              default:
                return "EEEE, LLLL d, yyyy, h:mm a";
            }
          }(this.opts), n = ce.create("en-US");
          return se.create(n).formatDateTimeFromString(this.dt, t);
        }, i.formatToParts = function() {
          return this.hasIntl && S() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
        }, i.resolvedOptions = function() {
          return this.hasIntl ? this.dtf.resolvedOptions() : { locale: "en-US", numberingSystem: "latn", outputCalendar: "gregory" };
        }, e;
      }(), yr = function() {
        function e(t, n, o) {
          this.opts = Object.assign({ style: "long" }, o), !n && d() && (this.rtf = vr(t, o));
        }
        var i = e.prototype;
        return i.format = function(t, n) {
          return this.rtf ? this.rtf.format(t, n) : function(o, g, w, R) {
            w === void 0 && (w = "always"), R === void 0 && (R = !1);
            var q = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, st = ["hours", "minutes", "seconds"].indexOf(o) === -1;
            if (w === "auto" && st) {
              var nt = o === "days";
              switch (g) {
                case 1:
                  return nt ? "tomorrow" : "next " + q[o][0];
                case -1:
                  return nt ? "yesterday" : "last " + q[o][0];
                case 0:
                  return nt ? "today" : "this " + q[o][0];
              }
            }
            var ht = Object.is(g, -0) || g < 0, kt = Math.abs(g), Tt = kt === 1, Rt = q[o], Ut = R ? Tt ? Rt[1] : Rt[2] || Rt[1] : Tt ? q[o][0] : o;
            return ht ? kt + " " + Ut + " ago" : "in " + kt + " " + Ut;
          }(n, t, this.opts.numeric, this.opts.style !== "long");
        }, i.formatToParts = function(t, n) {
          return this.rtf ? this.rtf.formatToParts(t, n) : [];
        }, e;
      }(), ce = function() {
        function e(t, n, o, g) {
          var w = function(nt) {
            var ht = nt.indexOf("-u-");
            if (ht === -1) return [nt];
            var kt, Tt = nt.substring(0, ht);
            try {
              kt = gn(nt).resolvedOptions();
            } catch {
              kt = gn(Tt).resolvedOptions();
            }
            var Rt = kt;
            return [Tt, Rt.numberingSystem, Rt.calendar];
          }(t), R = w[0], q = w[1], st = w[2];
          this.locale = R, this.numberingSystem = n || q || null, this.outputCalendar = o || st || null, this.intl = function(nt, ht, kt) {
            return l() ? ((kt || ht) && (nt += "-u", kt && (nt += "-ca-" + kt), ht && (nt += "-nu-" + ht)), nt) : [];
          }(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = g, this.fastNumbersCached = null;
        }
        e.fromOpts = function(t) {
          return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
        }, e.create = function(t, n, o, g) {
          g === void 0 && (g = !1);
          var w = t || oe.defaultLocale;
          return new e(w || (g ? "en-US" : function() {
            if (Xe) return Xe;
            if (l()) {
              var R = new Intl.DateTimeFormat().resolvedOptions().locale;
              return Xe = R && R !== "und" ? R : "en-US";
            }
            return Xe = "en-US";
          }()), n || oe.defaultNumberingSystem, o || oe.defaultOutputCalendar, w);
        }, e.resetCache = function() {
          Xe = null, hn = {}, vn = {}, mn = {};
        }, e.fromObject = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, g = n.numberingSystem, w = n.outputCalendar;
          return e.create(o, g, w);
        };
        var i = e.prototype;
        return i.listingMode = function(t) {
          t === void 0 && (t = !0);
          var n = l() && S(), o = this.isEnglish(), g = !(this.numberingSystem !== null && this.numberingSystem !== "latn" || this.outputCalendar !== null && this.outputCalendar !== "gregory");
          return n || o && g || t ? !n || o && g ? "en" : "intl" : "error";
        }, i.clone = function(t) {
          return t && Object.getOwnPropertyNames(t).length !== 0 ? e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1) : this;
        }, i.redefaultToEN = function(t) {
          return t === void 0 && (t = {}), this.clone(Object.assign({}, t, { defaultToEN: !0 }));
        }, i.redefaultToSystem = function(t) {
          return t === void 0 && (t = {}), this.clone(Object.assign({}, t, { defaultToEN: !1 }));
        }, i.months = function(t, n, o) {
          var g = this;
          return n === void 0 && (n = !1), o === void 0 && (o = !0), ln(this, t, o, c, function() {
            var w = n ? { month: t, day: "numeric" } : { month: t }, R = n ? "format" : "standalone";
            return g.monthsCache[R][t] || (g.monthsCache[R][t] = function(q) {
              for (var st = [], nt = 1; nt <= 12; nt++) {
                var ht = ae.utc(2016, nt, 1);
                st.push(q(ht));
              }
              return st;
            }(function(q) {
              return g.extract(q, w, "month");
            })), g.monthsCache[R][t];
          });
        }, i.weekdays = function(t, n, o) {
          var g = this;
          return n === void 0 && (n = !1), o === void 0 && (o = !0), ln(this, t, o, Ct, function() {
            var w = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, R = n ? "format" : "standalone";
            return g.weekdaysCache[R][t] || (g.weekdaysCache[R][t] = function(q) {
              for (var st = [], nt = 1; nt <= 7; nt++) {
                var ht = ae.utc(2016, 11, 13 + nt);
                st.push(q(ht));
              }
              return st;
            }(function(q) {
              return g.extract(q, w, "weekday");
            })), g.weekdaysCache[R][t];
          });
        }, i.meridiems = function(t) {
          var n = this;
          return t === void 0 && (t = !0), ln(this, void 0, t, function() {
            return Lt;
          }, function() {
            if (!n.meridiemCache) {
              var o = { hour: "numeric", hour12: !0 };
              n.meridiemCache = [ae.utc(2016, 11, 13, 9), ae.utc(2016, 11, 13, 19)].map(function(g) {
                return n.extract(g, o, "dayperiod");
              });
            }
            return n.meridiemCache;
          });
        }, i.eras = function(t, n) {
          var o = this;
          return n === void 0 && (n = !0), ln(this, t, n, jt, function() {
            var g = { era: t };
            return o.eraCache[t] || (o.eraCache[t] = [ae.utc(-40, 1, 1), ae.utc(2017, 1, 1)].map(function(w) {
              return o.extract(w, g, "era");
            })), o.eraCache[t];
          });
        }, i.extract = function(t, n, o) {
          var g = this.dtFormatter(t, n).formatToParts().find(function(w) {
            return w.type.toLowerCase() === o;
          });
          return g ? g.value : null;
        }, i.numberFormatter = function(t) {
          return t === void 0 && (t = {}), new mr(this.intl, t.forceSimple || this.fastNumbers, t);
        }, i.dtFormatter = function(t, n) {
          return n === void 0 && (n = {}), new pr(t, this.intl, n);
        }, i.relFormatter = function(t) {
          return t === void 0 && (t = {}), new yr(this.intl, this.isEnglish(), t);
        }, i.isEnglish = function() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || l() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        }, i.equals = function(t) {
          return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
        }, h(e, [{ key: "fastNumbers", get: function() {
          var t;
          return this.fastNumbersCached == null && (this.fastNumbersCached = (!(t = this).numberingSystem || t.numberingSystem === "latn") && (t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || l() && new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn")), this.fastNumbersCached;
        } }]), e;
      }();
      function Je() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
        var n = i.reduce(function(o, g) {
          return o + g.source;
        }, "");
        return RegExp("^" + n + "$");
      }
      function Fe() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
        return function(n) {
          return i.reduce(function(o, g) {
            var w = o[0], R = o[1], q = o[2], st = g(n, q), nt = st[0], ht = st[1], kt = st[2];
            return [Object.assign(w, nt), R || ht, kt];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function We(e) {
        if (e == null) return [null, null];
        for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) t[n - 1] = arguments[n];
        for (var o = 0, g = t; o < g.length; o++) {
          var w = g[o], R = w[0], q = w[1], st = R.exec(e);
          if (st) return q(st);
        }
        return [null, null];
      }
      function Tn() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
        return function(n, o) {
          var g, w = {};
          for (g = 0; g < i.length; g++) w[i[g]] = N(n[o + g]);
          return [w, null, o + g];
        };
      }
      var xn = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, pn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Ln = RegExp("" + pn.source + xn.source + "?"), yn = RegExp("(?:T" + Ln.source + ")?"), br = Tn("weekYear", "weekNumber", "weekDay"), Sr = Tn("year", "ordinal"), In = RegExp(pn.source + " ?(?:" + xn.source + "|(" + Le.source + "))?"), Er = RegExp("(?: " + In.source + ")?");
      function Ze(e, i, t) {
        var n = e[i];
        return u(n) ? t : N(n);
      }
      function An(e, i) {
        return [{ year: Ze(e, i), month: Ze(e, i + 1, 1), day: Ze(e, i + 2, 1) }, null, i + 3];
      }
      function He(e, i) {
        return [{ hours: Ze(e, i, 0), minutes: Ze(e, i + 1, 0), seconds: Ze(e, i + 2, 0), milliseconds: U(e[i + 3]) }, null, i + 4];
      }
      function $e(e, i) {
        var t = !e[i] && !e[i + 1], n = ge(e[i + 1], e[i + 2]);
        return [{}, t ? null : qt.instance(n), i + 3];
      }
      function Rn(e, i) {
        return [{}, e[i] ? Nt.create(e[i]) : null, i + 1];
      }
      var wr = RegExp("^T?" + pn.source + "$"), kr = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function Or(e) {
        var i = e[0], t = e[1], n = e[2], o = e[3], g = e[4], w = e[5], R = e[6], q = e[7], st = e[8], nt = i[0] === "-", ht = q && q[0] === "-", kt = function(Tt, Rt) {
          return Rt === void 0 && (Rt = !1), Tt !== void 0 && (Rt || Tt && nt) ? -Tt : Tt;
        };
        return [{ years: kt(N(t)), months: kt(N(n)), weeks: kt(N(o)), days: kt(N(g)), hours: kt(N(w)), minutes: kt(N(R)), seconds: kt(N(q), q === "-0"), milliseconds: kt(U(st), ht) }];
      }
      var Cr = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
      function bn(e, i, t, n, o, g, w) {
        var R = { year: i.length === 2 ? de(N(i)) : N(i), month: mt.indexOf(t) + 1, day: N(n), hour: N(o), minute: N(g) };
        return w && (R.second = N(w)), e && (R.weekday = e.length > 3 ? V.indexOf(e) + 1 : gt.indexOf(e) + 1), R;
      }
      var Tr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function xr(e) {
        var i, t = e[1], n = e[2], o = e[3], g = e[4], w = e[5], R = e[6], q = e[7], st = e[8], nt = e[9], ht = e[10], kt = e[11], Tt = bn(t, g, o, n, w, R, q);
        return i = st ? Cr[st] : nt ? 0 : ge(ht, kt), [Tt, new qt(i)];
      }
      var Lr = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Ir = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Ar = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function Nn(e) {
        var i = e[1], t = e[2], n = e[3];
        return [bn(i, e[4], n, t, e[5], e[6], e[7]), qt.utcInstance];
      }
      function Rr(e) {
        var i = e[1], t = e[2], n = e[3], o = e[4], g = e[5], w = e[6];
        return [bn(i, e[7], t, n, o, g, w), qt.utcInstance];
      }
      var Nr = Je(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, yn), Dr = Je(/(\d{4})-?W(\d\d)(?:-?(\d))?/, yn), jr = Je(/(\d{4})-?(\d{3})/, yn), Mr = Je(Ln), _r = Fe(An, He, $e), Pr = Fe(br, He, $e), Vr = Fe(Sr, He, $e), qr = Fe(He, $e), Ur = Fe(He), Fr = Je(/(\d{4})-(\d\d)-(\d\d)/, Er), Hr = Je(In), zr = Fe(An, He, $e, Rn), Br = Fe(He, $e, Rn), Dn = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } }, Jr = Object.assign({ years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 } }, Dn), Wr = Object.assign({ years: { quarters: 4, months: 12, weeks: 52.1775, days: 365.2425, hours: 8765.82, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: 13.044375, days: 91.310625, hours: 2191.455, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999999999e-6 }, months: { weeks: 30.436875 / 7, days: 30.436875, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 } }, Dn), Ge = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Zr = Ge.slice(0).reverse();
      function ze(e, i, t) {
        t === void 0 && (t = !1);
        var n = { values: t ? i.values : Object.assign({}, e.values, i.values || {}), loc: e.loc.clone(i.loc), conversionAccuracy: i.conversionAccuracy || e.conversionAccuracy };
        return new be(n);
      }
      function jn(e, i, t, n, o) {
        var g = e[o][t], w = i[t] / g, R = Math.sign(w) !== Math.sign(n[o]) && n[o] !== 0 && Math.abs(w) <= 1 ? function(q) {
          return q < 0 ? Math.floor(q) : Math.ceil(q);
        }(w) : Math.trunc(w);
        n[o] += R, i[t] -= R * g;
      }
      var be = function() {
        function e(t) {
          var n = t.conversionAccuracy === "longterm" || !1;
          this.values = t.values, this.loc = t.loc || ce.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? Wr : Jr, this.isLuxonDuration = !0;
        }
        e.fromMillis = function(t, n) {
          return e.fromObject(Object.assign({ milliseconds: t }, n));
        }, e.fromObject = function(t) {
          if (t == null || typeof t != "object") throw new lt("Duration.fromObject: argument expected to be an object, got " + (t === null ? "null" : typeof t));
          return new e({ values: pe(t, e.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone"]), loc: ce.fromObject(t), conversionAccuracy: t.conversionAccuracy });
        }, e.fromISO = function(t, n) {
          var o = function(w) {
            return We(w, [kr, Or]);
          }(t)[0];
          if (o) {
            var g = Object.assign(o, n);
            return e.fromObject(g);
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.fromISOTime = function(t, n) {
          var o = function(w) {
            return We(w, [wr, Ur]);
          }(t)[0];
          if (o) {
            var g = Object.assign(o, n);
            return e.fromObject(g);
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t) throw new lt("need to specify a reason the Duration is invalid");
          var o = t instanceof ye ? t : new ye(t, n);
          if (oe.throwOnInvalid) throw new X(o);
          return new e({ invalid: o });
        }, e.normalizeUnit = function(t) {
          var n = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[t && t.toLowerCase()];
          if (!n) throw new at(t);
          return n;
        }, e.isDuration = function(t) {
          return t && t.isLuxonDuration || !1;
        };
        var i = e.prototype;
        return i.toFormat = function(t, n) {
          n === void 0 && (n = {});
          var o = Object.assign({}, n, { floor: n.round !== !1 && n.floor !== !1 });
          return this.isValid ? se.create(this.loc, o).formatDurationFromString(this, t) : "Invalid Duration";
        }, i.toObject = function(t) {
          if (t === void 0 && (t = {}), !this.isValid) return {};
          var n = Object.assign({}, this.values);
          return t.includeConfig && (n.conversionAccuracy = this.conversionAccuracy, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
        }, i.toISO = function() {
          if (!this.isValid) return null;
          var t = "P";
          return this.years !== 0 && (t += this.years + "Y"), this.months === 0 && this.quarters === 0 || (t += this.months + 3 * this.quarters + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), this.seconds === 0 && this.milliseconds === 0 || (t += $(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
        }, i.toISOTime = function(t) {
          if (t === void 0 && (t = {}), !this.isValid) return null;
          var n = this.toMillis();
          if (n < 0 || n >= 864e5) return null;
          t = Object.assign({ suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended" }, t);
          var o = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), g = t.format === "basic" ? "hhmm" : "hh:mm";
          t.suppressSeconds && o.seconds === 0 && o.milliseconds === 0 || (g += t.format === "basic" ? "ss" : ":ss", t.suppressMilliseconds && o.milliseconds === 0 || (g += ".SSS"));
          var w = o.toFormat(g);
          return t.includePrefix && (w = "T" + w), w;
        }, i.toJSON = function() {
          return this.toISO();
        }, i.toString = function() {
          return this.toISO();
        }, i.toMillis = function() {
          return this.as("milliseconds");
        }, i.valueOf = function() {
          return this.toMillis();
        }, i.plus = function(t) {
          if (!this.isValid) return this;
          for (var n, o = Be(t), g = {}, w = H(Ge); !(n = w()).done; ) {
            var R = n.value;
            (E(o.values, R) || E(this.values, R)) && (g[R] = o.get(R) + this.get(R));
          }
          return ze(this, { values: g }, !0);
        }, i.minus = function(t) {
          if (!this.isValid) return this;
          var n = Be(t);
          return this.plus(n.negate());
        }, i.mapUnits = function(t) {
          if (!this.isValid) return this;
          for (var n = {}, o = 0, g = Object.keys(this.values); o < g.length; o++) {
            var w = g[o];
            n[w] = Me(t(this.values[w], w));
          }
          return ze(this, { values: n }, !0);
        }, i.get = function(t) {
          return this[e.normalizeUnit(t)];
        }, i.set = function(t) {
          return this.isValid ? ze(this, { values: Object.assign(this.values, pe(t, e.normalizeUnit, [])) }) : this;
        }, i.reconfigure = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, g = n.numberingSystem, w = n.conversionAccuracy, R = { loc: this.loc.clone({ locale: o, numberingSystem: g }) };
          return w && (R.conversionAccuracy = w), ze(this, R);
        }, i.as = function(t) {
          return this.isValid ? this.shiftTo(t).get(t) : NaN;
        }, i.normalize = function() {
          if (!this.isValid) return this;
          var t = this.toObject();
          return function(n, o) {
            Zr.reduce(function(g, w) {
              return u(o[w]) ? g : (g && jn(n, o, g, o, w), w);
            }, null);
          }(this.matrix, t), ze(this, { values: t }, !0);
        }, i.shiftTo = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
          if (!this.isValid) return this;
          if (n.length === 0) return this;
          n = n.map(function(Ft) {
            return e.normalizeUnit(Ft);
          });
          for (var g, w, R = {}, q = {}, st = this.toObject(), nt = H(Ge); !(w = nt()).done; ) {
            var ht = w.value;
            if (n.indexOf(ht) >= 0) {
              g = ht;
              var kt = 0;
              for (var Tt in q) kt += this.matrix[Tt][ht] * q[Tt], q[Tt] = 0;
              r(st[ht]) && (kt += st[ht]);
              var Rt = Math.trunc(kt);
              for (var Ut in R[ht] = Rt, q[ht] = kt - Rt, st) Ge.indexOf(Ut) > Ge.indexOf(ht) && jn(this.matrix, st, Ut, R, ht);
            } else r(st[ht]) && (q[ht] = st[ht]);
          }
          for (var Ot in q) q[Ot] !== 0 && (R[g] += Ot === g ? q[Ot] : q[Ot] / this.matrix[g][Ot]);
          return ze(this, { values: R }, !0).normalize();
        }, i.negate = function() {
          if (!this.isValid) return this;
          for (var t = {}, n = 0, o = Object.keys(this.values); n < o.length; n++) {
            var g = o[n];
            t[g] = -this.values[g];
          }
          return ze(this, { values: t }, !0);
        }, i.equals = function(t) {
          if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
          for (var n, o = H(Ge); !(n = o()).done; ) {
            var g = n.value;
            if (w = this.values[g], R = t.values[g], !(w === void 0 || w === 0 ? R === void 0 || R === 0 : w === R)) return !1;
          }
          var w, R;
          return !0;
        }, h(e, [{ key: "locale", get: function() {
          return this.isValid ? this.loc.locale : null;
        } }, { key: "numberingSystem", get: function() {
          return this.isValid ? this.loc.numberingSystem : null;
        } }, { key: "years", get: function() {
          return this.isValid ? this.values.years || 0 : NaN;
        } }, { key: "quarters", get: function() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        } }, { key: "months", get: function() {
          return this.isValid ? this.values.months || 0 : NaN;
        } }, { key: "weeks", get: function() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        } }, { key: "days", get: function() {
          return this.isValid ? this.values.days || 0 : NaN;
        } }, { key: "hours", get: function() {
          return this.isValid ? this.values.hours || 0 : NaN;
        } }, { key: "minutes", get: function() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        } }, { key: "seconds", get: function() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        } }, { key: "milliseconds", get: function() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        } }, { key: "isValid", get: function() {
          return this.invalid === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }]), e;
      }();
      function Be(e) {
        if (r(e)) return be.fromMillis(e);
        if (be.isDuration(e)) return e;
        if (typeof e == "object") return be.fromObject(e);
        throw new lt("Unknown duration argument " + e + " of type " + typeof e);
      }
      var Qe = "Invalid Interval";
      function $r(e, i) {
        return e && e.isValid ? i && i.isValid ? i < e ? tn.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e.toISO() + " and end=" + i.toISO()) : null : tn.invalid("missing or invalid end") : tn.invalid("missing or invalid start");
      }
      var tn = function() {
        function e(t) {
          this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
        }
        e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t) throw new lt("need to specify a reason the Interval is invalid");
          var o = t instanceof ye ? t : new ye(t, n);
          if (oe.throwOnInvalid) throw new B(o);
          return new e({ invalid: o });
        }, e.fromDateTimes = function(t, n) {
          var o = on(t), g = on(n), w = $r(o, g);
          return w ?? new e({ start: o, end: g });
        }, e.after = function(t, n) {
          var o = Be(n), g = on(t);
          return e.fromDateTimes(g, g.plus(o));
        }, e.before = function(t, n) {
          var o = Be(n), g = on(t);
          return e.fromDateTimes(g.minus(o), g);
        }, e.fromISO = function(t, n) {
          var o = (t || "").split("/", 2), g = o[0], w = o[1];
          if (g && w) {
            var R, q, st, nt;
            try {
              q = (R = ae.fromISO(g, n)).isValid;
            } catch {
              q = !1;
            }
            try {
              nt = (st = ae.fromISO(w, n)).isValid;
            } catch {
              nt = !1;
            }
            if (q && nt) return e.fromDateTimes(R, st);
            if (q) {
              var ht = be.fromISO(w, n);
              if (ht.isValid) return e.after(R, ht);
            } else if (nt) {
              var kt = be.fromISO(g, n);
              if (kt.isValid) return e.before(st, kt);
            }
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.isInterval = function(t) {
          return t && t.isLuxonInterval || !1;
        };
        var i = e.prototype;
        return i.length = function(t) {
          return t === void 0 && (t = "milliseconds"), this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN;
        }, i.count = function(t) {
          if (t === void 0 && (t = "milliseconds"), !this.isValid) return NaN;
          var n = this.start.startOf(t), o = this.end.startOf(t);
          return Math.floor(o.diff(n, t).get(t)) + 1;
        }, i.hasSame = function(t) {
          return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t));
        }, i.isEmpty = function() {
          return this.s.valueOf() === this.e.valueOf();
        }, i.isAfter = function(t) {
          return !!this.isValid && this.s > t;
        }, i.isBefore = function(t) {
          return !!this.isValid && this.e <= t;
        }, i.contains = function(t) {
          return !!this.isValid && this.s <= t && this.e > t;
        }, i.set = function(t) {
          var n = t === void 0 ? {} : t, o = n.start, g = n.end;
          return this.isValid ? e.fromDateTimes(o || this.s, g || this.e) : this;
        }, i.splitAt = function() {
          var t = this;
          if (!this.isValid) return [];
          for (var n = arguments.length, o = new Array(n), g = 0; g < n; g++) o[g] = arguments[g];
          for (var w = o.map(on).filter(function(kt) {
            return t.contains(kt);
          }).sort(), R = [], q = this.s, st = 0; q < this.e; ) {
            var nt = w[st] || this.e, ht = +nt > +this.e ? this.e : nt;
            R.push(e.fromDateTimes(q, ht)), q = ht, st += 1;
          }
          return R;
        }, i.splitBy = function(t) {
          var n = Be(t);
          if (!this.isValid || !n.isValid || n.as("milliseconds") === 0) return [];
          for (var o, g = this.s, w = 1, R = []; g < this.e; ) {
            var q = this.start.plus(n.mapUnits(function(st) {
              return st * w;
            }));
            o = +q > +this.e ? this.e : q, R.push(e.fromDateTimes(g, o)), g = o, w += 1;
          }
          return R;
        }, i.divideEqually = function(t) {
          return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
        }, i.overlaps = function(t) {
          return this.e > t.s && this.s < t.e;
        }, i.abutsStart = function(t) {
          return !!this.isValid && +this.e == +t.s;
        }, i.abutsEnd = function(t) {
          return !!this.isValid && +t.e == +this.s;
        }, i.engulfs = function(t) {
          return !!this.isValid && this.s <= t.s && this.e >= t.e;
        }, i.equals = function(t) {
          return !(!this.isValid || !t.isValid) && this.s.equals(t.s) && this.e.equals(t.e);
        }, i.intersection = function(t) {
          if (!this.isValid) return this;
          var n = this.s > t.s ? this.s : t.s, o = this.e < t.e ? this.e : t.e;
          return n >= o ? null : e.fromDateTimes(n, o);
        }, i.union = function(t) {
          if (!this.isValid) return this;
          var n = this.s < t.s ? this.s : t.s, o = this.e > t.e ? this.e : t.e;
          return e.fromDateTimes(n, o);
        }, e.merge = function(t) {
          var n = t.sort(function(w, R) {
            return w.s - R.s;
          }).reduce(function(w, R) {
            var q = w[0], st = w[1];
            return st ? st.overlaps(R) || st.abutsStart(R) ? [q, st.union(R)] : [q.concat([st]), R] : [q, R];
          }, [[], null]), o = n[0], g = n[1];
          return g && o.push(g), o;
        }, e.xor = function(t) {
          for (var n, o, g = null, w = 0, R = [], q = t.map(function(ht) {
            return [{ time: ht.s, type: "s" }, { time: ht.e, type: "e" }];
          }), st = H((n = Array.prototype).concat.apply(n, q).sort(function(ht, kt) {
            return ht.time - kt.time;
          })); !(o = st()).done; ) {
            var nt = o.value;
            (w += nt.type === "s" ? 1 : -1) === 1 ? g = nt.time : (g && +g != +nt.time && R.push(e.fromDateTimes(g, nt.time)), g = null);
          }
          return e.merge(R);
        }, i.difference = function() {
          for (var t = this, n = arguments.length, o = new Array(n), g = 0; g < n; g++) o[g] = arguments[g];
          return e.xor([this].concat(o)).map(function(w) {
            return t.intersection(w);
          }).filter(function(w) {
            return w && !w.isEmpty();
          });
        }, i.toString = function() {
          return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : Qe;
        }, i.toISO = function(t) {
          return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : Qe;
        }, i.toISODate = function() {
          return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Qe;
        }, i.toISOTime = function(t) {
          return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : Qe;
        }, i.toFormat = function(t, n) {
          var o = (n === void 0 ? {} : n).separator, g = o === void 0 ? " – " : o;
          return this.isValid ? "" + this.s.toFormat(t) + g + this.e.toFormat(t) : Qe;
        }, i.toDuration = function(t, n) {
          return this.isValid ? this.e.diff(this.s, t, n) : be.invalid(this.invalidReason);
        }, i.mapEndpoints = function(t) {
          return e.fromDateTimes(t(this.s), t(this.e));
        }, h(e, [{ key: "start", get: function() {
          return this.isValid ? this.s : null;
        } }, { key: "end", get: function() {
          return this.isValid ? this.e : null;
        } }, { key: "isValid", get: function() {
          return this.invalidReason === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }]), e;
      }(), en = function() {
        function e() {
        }
        return e.hasDST = function(i) {
          i === void 0 && (i = oe.defaultZone);
          var t = ae.now().setZone(i).set({ month: 12 });
          return !i.universal && t.offset !== t.set({ month: 6 }).offset;
        }, e.isValidIANAZone = function(i) {
          return Nt.isValidSpecifier(i) && Nt.isValidZone(i);
        }, e.normalizeZone = function(i) {
          return ee(i, oe.defaultZone);
        }, e.months = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, g = o === void 0 ? null : o, w = n.numberingSystem, R = w === void 0 ? null : w, q = n.locObj, st = q === void 0 ? null : q, nt = n.outputCalendar, ht = nt === void 0 ? "gregory" : nt;
          return (st || ce.create(g, R, ht)).months(i);
        }, e.monthsFormat = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, g = o === void 0 ? null : o, w = n.numberingSystem, R = w === void 0 ? null : w, q = n.locObj, st = q === void 0 ? null : q, nt = n.outputCalendar, ht = nt === void 0 ? "gregory" : nt;
          return (st || ce.create(g, R, ht)).months(i, !0);
        }, e.weekdays = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, g = o === void 0 ? null : o, w = n.numberingSystem, R = w === void 0 ? null : w, q = n.locObj;
          return ((q === void 0 ? null : q) || ce.create(g, R, null)).weekdays(i);
        }, e.weekdaysFormat = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, g = o === void 0 ? null : o, w = n.numberingSystem, R = w === void 0 ? null : w, q = n.locObj;
          return ((q === void 0 ? null : q) || ce.create(g, R, null)).weekdays(i, !0);
        }, e.meridiems = function(i) {
          var t = (i === void 0 ? {} : i).locale, n = t === void 0 ? null : t;
          return ce.create(n).meridiems();
        }, e.eras = function(i, t) {
          i === void 0 && (i = "short");
          var n = (t === void 0 ? {} : t).locale, o = n === void 0 ? null : n;
          return ce.create(o, null, "gregory").eras(i);
        }, e.features = function() {
          var i = !1, t = !1, n = !1, o = !1;
          if (l()) {
            i = !0, t = S(), o = d();
            try {
              n = new Intl.DateTimeFormat("en", { timeZone: "America/New_York" }).resolvedOptions().timeZone === "America/New_York";
            } catch {
              n = !1;
            }
          }
          return { intl: i, intlTokens: t, zones: n, relative: o };
        }, e;
      }();
      function Mn(e, i) {
        var t = function(o) {
          return o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf();
        }, n = t(i) - t(e);
        return Math.floor(be.fromMillis(n).as("days"));
      }
      function Gr(e, i, t, n) {
        var o = function(Rt, Ut, Ot) {
          for (var Ft, Dt, ne = {}, $t = 0, fe = [["years", function(xe, Re) {
            return Re.year - xe.year;
          }], ["quarters", function(xe, Re) {
            return Re.quarter - xe.quarter;
          }], ["months", function(xe, Re) {
            return Re.month - xe.month + 12 * (Re.year - xe.year);
          }], ["weeks", function(xe, Re) {
            var Ke = Mn(xe, Re);
            return (Ke - Ke % 7) / 7;
          }], ["days", Mn]]; $t < fe.length; $t++) {
            var Se = fe[$t], ue = Se[0], Wt = Se[1];
            if (Ot.indexOf(ue) >= 0) {
              var je;
              Ft = ue;
              var _e, Pe = Wt(Rt, Ut);
              (Dt = Rt.plus(((je = {})[ue] = Pe, je))) > Ut ? (Rt = Rt.plus(((_e = {})[ue] = Pe - 1, _e)), Pe -= 1) : Rt = Dt, ne[ue] = Pe;
            }
          }
          return [Rt, ne, Dt, Ft];
        }(e, i, t), g = o[0], w = o[1], R = o[2], q = o[3], st = i - g, nt = t.filter(function(Rt) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(Rt) >= 0;
        });
        if (nt.length === 0) {
          var ht;
          R < i && (R = g.plus(((ht = {})[q] = 1, ht))), R !== g && (w[q] = (w[q] || 0) + st / (R - g));
        }
        var kt, Tt = be.fromObject(Object.assign(w, n));
        return nt.length > 0 ? (kt = be.fromMillis(st, n)).shiftTo.apply(kt, nt).plus(Tt) : Tt;
      }
      var Sn = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" }, _n = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, Yr = Sn.hanidec.replace(/[\[|\]]/g, "").split("");
      function Ie(e, i) {
        var t = e.numberingSystem;
        return i === void 0 && (i = ""), new RegExp("" + Sn[t || "latn"] + i);
      }
      function Zt(e, i) {
        return i === void 0 && (i = function(t) {
          return t;
        }), { regex: e, deser: function(t) {
          var n = t[0];
          return i(function(o) {
            var g = parseInt(o, 10);
            if (isNaN(g)) {
              g = "";
              for (var w = 0; w < o.length; w++) {
                var R = o.charCodeAt(w);
                if (o[w].search(Sn.hanidec) !== -1) g += Yr.indexOf(o[w]);
                else for (var q in _n) {
                  var st = _n[q], nt = st[0], ht = st[1];
                  R >= nt && R <= ht && (g += R - nt);
                }
              }
              return parseInt(g, 10);
            }
            return g;
          }(n));
        } };
      }
      var Pn = "( | )", Vn = new RegExp(Pn, "g");
      function Kr(e) {
        return e.replace(/\./g, "\\.?").replace(Vn, Pn);
      }
      function qn(e) {
        return e.replace(/\./g, "").replace(Vn, " ").toLowerCase();
      }
      function Ae(e, i) {
        return e === null ? null : { regex: RegExp(e.map(Kr).join("|")), deser: function(t) {
          var n = t[0];
          return e.findIndex(function(o) {
            return qn(n) === qn(o);
          }) + i;
        } };
      }
      function Un(e, i) {
        return { regex: e, deser: function(t) {
          return ge(t[1], t[2]);
        }, groups: i };
      }
      function Fn(e) {
        return { regex: e, deser: function(i) {
          return i[0];
        } };
      }
      var Xr = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour: { numeric: "h", "2-digit": "hh" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" } }, En = null;
      function Qr(e, i) {
        if (e.literal) return e;
        var t = se.macroTokenToFormatOpts(e.val);
        if (!t) return e;
        var n = se.create(i, t).formatDateTimeParts((En || (En = ae.fromMillis(1555555555555)), En)).map(function(o) {
          return function(g, w, R) {
            var q = g.type, st = g.value;
            if (q === "literal") return { literal: !0, val: st };
            var nt = R[q], ht = Xr[q];
            return typeof ht == "object" && (ht = ht[nt]), ht ? { literal: !1, val: ht } : void 0;
          }(o, 0, t);
        });
        return n.includes(void 0) ? e : n;
      }
      function Hn(e, i, t) {
        var n = function(Ot, Ft) {
          var Dt;
          return (Dt = Array.prototype).concat.apply(Dt, Ot.map(function(ne) {
            return Qr(ne, Ft);
          }));
        }(se.parseFormat(t), e), o = n.map(function(Ot) {
          return Ft = Ot, ne = Ie(Dt = e), $t = Ie(Dt, "{2}"), fe = Ie(Dt, "{3}"), Se = Ie(Dt, "{4}"), ue = Ie(Dt, "{6}"), Wt = Ie(Dt, "{1,2}"), je = Ie(Dt, "{1,3}"), _e = Ie(Dt, "{1,6}"), Pe = Ie(Dt, "{1,9}"), xe = Ie(Dt, "{2,4}"), Re = Ie(Dt, "{4,6}"), Ke = function(sn) {
            return { regex: RegExp((ur = sn.val, ur.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: function(ii) {
              return ii[0];
            }, literal: !0 };
            var ur;
          }, (ar = function(sn) {
            if (Ft.literal) return Ke(sn);
            switch (sn.val) {
              case "G":
                return Ae(Dt.eras("short", !1), 0);
              case "GG":
                return Ae(Dt.eras("long", !1), 0);
              case "y":
                return Zt(_e);
              case "yy":
                return Zt(xe, de);
              case "yyyy":
                return Zt(Se);
              case "yyyyy":
                return Zt(Re);
              case "yyyyyy":
                return Zt(ue);
              case "M":
                return Zt(Wt);
              case "MM":
                return Zt($t);
              case "MMM":
                return Ae(Dt.months("short", !0, !1), 1);
              case "MMMM":
                return Ae(Dt.months("long", !0, !1), 1);
              case "L":
                return Zt(Wt);
              case "LL":
                return Zt($t);
              case "LLL":
                return Ae(Dt.months("short", !1, !1), 1);
              case "LLLL":
                return Ae(Dt.months("long", !1, !1), 1);
              case "d":
                return Zt(Wt);
              case "dd":
                return Zt($t);
              case "o":
                return Zt(je);
              case "ooo":
                return Zt(fe);
              case "HH":
                return Zt($t);
              case "H":
                return Zt(Wt);
              case "hh":
                return Zt($t);
              case "h":
                return Zt(Wt);
              case "mm":
                return Zt($t);
              case "m":
              case "q":
                return Zt(Wt);
              case "qq":
                return Zt($t);
              case "s":
                return Zt(Wt);
              case "ss":
                return Zt($t);
              case "S":
                return Zt(je);
              case "SSS":
                return Zt(fe);
              case "u":
                return Fn(Pe);
              case "a":
                return Ae(Dt.meridiems(), 0);
              case "kkkk":
                return Zt(Se);
              case "kk":
                return Zt(xe, de);
              case "W":
                return Zt(Wt);
              case "WW":
                return Zt($t);
              case "E":
              case "c":
                return Zt(ne);
              case "EEE":
                return Ae(Dt.weekdays("short", !1, !1), 1);
              case "EEEE":
                return Ae(Dt.weekdays("long", !1, !1), 1);
              case "ccc":
                return Ae(Dt.weekdays("short", !0, !1), 1);
              case "cccc":
                return Ae(Dt.weekdays("long", !0, !1), 1);
              case "Z":
              case "ZZ":
                return Un(new RegExp("([+-]" + Wt.source + ")(?::(" + $t.source + "))?"), 2);
              case "ZZZ":
                return Un(new RegExp("([+-]" + Wt.source + ")(" + $t.source + ")?"), 2);
              case "z":
                return Fn(/[a-z_+-/]{1,256}?/i);
              default:
                return Ke(sn);
            }
          }(Ft) || { invalidReason: "missing Intl.DateTimeFormat.formatToParts support" }).token = Ft, ar;
          var Ft, Dt, ne, $t, fe, Se, ue, Wt, je, _e, Pe, xe, Re, Ke, ar;
        }), g = o.find(function(Ot) {
          return Ot.invalidReason;
        });
        if (g) return { input: i, tokens: n, invalidReason: g.invalidReason };
        var w = function(Ot) {
          return ["^" + Ot.map(function(Ft) {
            return Ft.regex;
          }).reduce(function(Ft, Dt) {
            return Ft + "(" + Dt.source + ")";
          }, "") + "$", Ot];
        }(o), R = w[0], q = w[1], st = RegExp(R, "i"), nt = function(Ot, Ft, Dt) {
          var ne = Ot.match(Ft);
          if (ne) {
            var $t = {}, fe = 1;
            for (var Se in Dt) if (E(Dt, Se)) {
              var ue = Dt[Se], Wt = ue.groups ? ue.groups + 1 : 1;
              !ue.literal && ue.token && ($t[ue.token.val[0]] = ue.deser(ne.slice(fe, fe + Wt))), fe += Wt;
            }
            return [ne, $t];
          }
          return [ne, {}];
        }(i, st, q), ht = nt[0], kt = nt[1], Tt = kt ? function(Ot) {
          var Ft;
          return Ft = u(Ot.Z) ? u(Ot.z) ? null : Nt.create(Ot.z) : new qt(Ot.Z), u(Ot.q) || (Ot.M = 3 * (Ot.q - 1) + 1), u(Ot.h) || (Ot.h < 12 && Ot.a === 1 ? Ot.h += 12 : Ot.h === 12 && Ot.a === 0 && (Ot.h = 0)), Ot.G === 0 && Ot.y && (Ot.y = -Ot.y), u(Ot.u) || (Ot.S = U(Ot.u)), [Object.keys(Ot).reduce(function(Dt, ne) {
            var $t = function(fe) {
              switch (fe) {
                case "S":
                  return "millisecond";
                case "s":
                  return "second";
                case "m":
                  return "minute";
                case "h":
                case "H":
                  return "hour";
                case "d":
                  return "day";
                case "o":
                  return "ordinal";
                case "L":
                case "M":
                  return "month";
                case "y":
                  return "year";
                case "E":
                case "c":
                  return "weekday";
                case "W":
                  return "weekNumber";
                case "k":
                  return "weekYear";
                case "q":
                  return "quarter";
                default:
                  return null;
              }
            }(ne);
            return $t && (Dt[$t] = Ot[ne]), Dt;
          }, {}), Ft];
        }(kt) : [null, null], Rt = Tt[0], Ut = Tt[1];
        if (E(kt, "a") && E(kt, "H")) throw new _("Can't include meridiem when specifying 24-hour format");
        return { input: i, tokens: n, regex: st, rawMatches: ht, matches: kt, result: Rt, zone: Ut };
      }
      var zn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Bn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function Te(e, i) {
        return new ye("unit out of range", "you specified " + i + " (of type " + typeof i + ") as a " + e + ", which is invalid");
      }
      function Jn(e, i, t) {
        var n = new Date(Date.UTC(e, i - 1, t)).getUTCDay();
        return n === 0 ? 7 : n;
      }
      function Wn(e, i, t) {
        return t + (tt(e) ? Bn : zn)[i - 1];
      }
      function Zn(e, i) {
        var t = tt(e) ? Bn : zn, n = t.findIndex(function(o) {
          return o < i;
        });
        return { month: n + 1, day: i - t[n] };
      }
      function wn(e) {
        var i, t = e.year, n = e.month, o = e.day, g = Wn(t, n, o), w = Jn(t, n, o), R = Math.floor((g - w + 10) / 7);
        return R < 1 ? R = le(i = t - 1) : R > le(t) ? (i = t + 1, R = 1) : i = t, Object.assign({ weekYear: i, weekNumber: R, weekday: w }, ve(e));
      }
      function $n(e) {
        var i, t = e.weekYear, n = e.weekNumber, o = e.weekday, g = Jn(t, 1, 4), w = St(t), R = 7 * n + o - g - 3;
        R < 1 ? R += St(i = t - 1) : R > w ? (i = t + 1, R -= St(t)) : i = t;
        var q = Zn(i, R), st = q.month, nt = q.day;
        return Object.assign({ year: i, month: st, day: nt }, ve(e));
      }
      function kn(e) {
        var i = e.year, t = Wn(i, e.month, e.day);
        return Object.assign({ year: i, ordinal: t }, ve(e));
      }
      function Gn(e) {
        var i = e.year, t = Zn(i, e.ordinal), n = t.month, o = t.day;
        return Object.assign({ year: i, month: n, day: o }, ve(e));
      }
      function Yn(e) {
        var i = s(e.year), t = x(e.month, 1, 12), n = x(e.day, 1, Pt(e.year, e.month));
        return i ? t ? !n && Te("day", e.day) : Te("month", e.month) : Te("year", e.year);
      }
      function Kn(e) {
        var i = e.hour, t = e.minute, n = e.second, o = e.millisecond, g = x(i, 0, 23) || i === 24 && t === 0 && n === 0 && o === 0, w = x(t, 0, 59), R = x(n, 0, 59), q = x(o, 0, 999);
        return g ? w ? R ? !q && Te("millisecond", o) : Te("second", n) : Te("minute", t) : Te("hour", i);
      }
      function dn(e) {
        return new ye("unsupported zone", 'the zone "' + e.name + '" is not supported');
      }
      function On(e) {
        return e.weekData === null && (e.weekData = wn(e.c)), e.weekData;
      }
      function nn(e, i) {
        var t = { ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid };
        return new ae(Object.assign({}, t, i, { old: t }));
      }
      function Xn(e, i, t) {
        var n = e - 60 * i * 1e3, o = t.offset(n);
        if (i === o) return [n, i];
        n -= 60 * (o - i) * 1e3;
        var g = t.offset(n);
        return o === g ? [n, o] : [e - 60 * Math.min(o, g) * 1e3, Math.max(o, g)];
      }
      function Qn(e, i) {
        var t = new Date(e += 60 * i * 1e3);
        return { year: t.getUTCFullYear(), month: t.getUTCMonth() + 1, day: t.getUTCDate(), hour: t.getUTCHours(), minute: t.getUTCMinutes(), second: t.getUTCSeconds(), millisecond: t.getUTCMilliseconds() };
      }
      function fn(e, i, t) {
        return Xn(Ht(e), i, t);
      }
      function tr(e, i) {
        var t = e.o, n = e.c.year + Math.trunc(i.years), o = e.c.month + Math.trunc(i.months) + 3 * Math.trunc(i.quarters), g = Object.assign({}, e.c, { year: n, month: o, day: Math.min(e.c.day, Pt(n, o)) + Math.trunc(i.days) + 7 * Math.trunc(i.weeks) }), w = be.fromObject({ years: i.years - Math.trunc(i.years), quarters: i.quarters - Math.trunc(i.quarters), months: i.months - Math.trunc(i.months), weeks: i.weeks - Math.trunc(i.weeks), days: i.days - Math.trunc(i.days), hours: i.hours, minutes: i.minutes, seconds: i.seconds, milliseconds: i.milliseconds }).as("milliseconds"), R = Xn(Ht(g), t, e.zone), q = R[0], st = R[1];
        return w !== 0 && (q += w, st = e.zone.offset(q)), { ts: q, o: st };
      }
      function rn(e, i, t, n, o) {
        var g = t.setZone, w = t.zone;
        if (e && Object.keys(e).length !== 0) {
          var R = i || w, q = ae.fromObject(Object.assign(e, t, { zone: R, setZone: void 0 }));
          return g ? q : q.setZone(w);
        }
        return ae.invalid(new ye("unparsable", 'the input "' + o + `" can't be parsed as ` + n));
      }
      function Ye(e, i, t) {
        return t === void 0 && (t = !0), e.isValid ? se.create(ce.create("en-US"), { allowZ: t, forceSimple: !0 }).formatDateTimeFromString(e, i) : null;
      }
      function er(e, i) {
        var t = i.suppressSeconds, n = t !== void 0 && t, o = i.suppressMilliseconds, g = o !== void 0 && o, w = i.includeOffset, R = i.includePrefix, q = R !== void 0 && R, st = i.includeZone, nt = st !== void 0 && st, ht = i.spaceZone, kt = ht !== void 0 && ht, Tt = i.format, Rt = Tt === void 0 ? "extended" : Tt, Ut = Rt === "basic" ? "HHmm" : "HH:mm";
        n && e.second === 0 && e.millisecond === 0 || (Ut += Rt === "basic" ? "ss" : ":ss", g && e.millisecond === 0 || (Ut += ".SSS")), (nt || w) && kt && (Ut += " "), nt ? Ut += "z" : w && (Ut += Rt === "basic" ? "ZZZ" : "ZZ");
        var Ot = Ye(e, Ut);
        return q && (Ot = "T" + Ot), Ot;
      }
      var nr = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ti = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, ei = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, rr = ["year", "month", "day", "hour", "minute", "second", "millisecond"], ni = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], ri = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function ir(e) {
        var i = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[e.toLowerCase()];
        if (!i) throw new at(e);
        return i;
      }
      function or(e, i) {
        for (var t, n = H(rr); !(t = n()).done; ) {
          var o = t.value;
          u(e[o]) && (e[o] = nr[o]);
        }
        var g = Yn(e) || Kn(e);
        if (g) return ae.invalid(g);
        var w = oe.now(), R = fn(e, i.offset(w), i), q = R[0], st = R[1];
        return new ae({ ts: q, zone: i, o: st });
      }
      function sr(e, i, t) {
        var n = !!u(t.round) || t.round, o = function(nt, ht) {
          return nt = $(nt, n || t.calendary ? 0 : 2, !0), i.loc.clone(t).relFormatter(t).format(nt, ht);
        }, g = function(nt) {
          return t.calendary ? i.hasSame(e, nt) ? 0 : i.startOf(nt).diff(e.startOf(nt), nt).get(nt) : i.diff(e, nt).get(nt);
        };
        if (t.unit) return o(g(t.unit), t.unit);
        for (var w, R = H(t.units); !(w = R()).done; ) {
          var q = w.value, st = g(q);
          if (Math.abs(st) >= 1) return o(st, q);
        }
        return o(e > i ? -0 : 0, t.units[t.units.length - 1]);
      }
      var ae = function() {
        function e(t) {
          var n = t.zone || oe.defaultZone, o = t.invalid || (Number.isNaN(t.ts) ? new ye("invalid input") : null) || (n.isValid ? null : dn(n));
          this.ts = u(t.ts) ? oe.now() : t.ts;
          var g = null, w = null;
          if (!o) if (t.old && t.old.ts === this.ts && t.old.zone.equals(n)) {
            var R = [t.old.c, t.old.o];
            g = R[0], w = R[1];
          } else {
            var q = n.offset(this.ts);
            g = Qn(this.ts, q), g = (o = Number.isNaN(g.year) ? new ye("invalid input") : null) ? null : g, w = o ? null : q;
          }
          this._zone = n, this.loc = t.loc || ce.create(), this.invalid = o, this.weekData = null, this.c = g, this.o = w, this.isLuxonDateTime = !0;
        }
        e.now = function() {
          return new e({});
        }, e.local = function(t, n, o, g, w, R, q) {
          return u(t) ? e.now() : or({ year: t, month: n, day: o, hour: g, minute: w, second: R, millisecond: q }, oe.defaultZone);
        }, e.utc = function(t, n, o, g, w, R, q) {
          return u(t) ? new e({ ts: oe.now(), zone: qt.utcInstance }) : or({ year: t, month: n, day: o, hour: g, minute: w, second: R, millisecond: q }, qt.utcInstance);
        }, e.fromJSDate = function(t, n) {
          n === void 0 && (n = {});
          var o, g = (o = t, Object.prototype.toString.call(o) === "[object Date]" ? t.valueOf() : NaN);
          if (Number.isNaN(g)) return e.invalid("invalid input");
          var w = ee(n.zone, oe.defaultZone);
          return w.isValid ? new e({ ts: g, zone: w, loc: ce.fromObject(n) }) : e.invalid(dn(w));
        }, e.fromMillis = function(t, n) {
          if (n === void 0 && (n = {}), r(t)) return t < -864e13 || t > 864e13 ? e.invalid("Timestamp out of range") : new e({ ts: t, zone: ee(n.zone, oe.defaultZone), loc: ce.fromObject(n) });
          throw new lt("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t);
        }, e.fromSeconds = function(t, n) {
          if (n === void 0 && (n = {}), r(t)) return new e({ ts: 1e3 * t, zone: ee(n.zone, oe.defaultZone), loc: ce.fromObject(n) });
          throw new lt("fromSeconds requires a numerical input");
        }, e.fromObject = function(t) {
          var n = ee(t.zone, oe.defaultZone);
          if (!n.isValid) return e.invalid(dn(n));
          var o = oe.now(), g = n.offset(o), w = pe(t, ir, ["zone", "locale", "outputCalendar", "numberingSystem"]), R = !u(w.ordinal), q = !u(w.year), st = !u(w.month) || !u(w.day), nt = q || st, ht = w.weekYear || w.weekNumber, kt = ce.fromObject(t);
          if ((nt || R) && ht) throw new _("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (st && R) throw new _("Can't mix ordinal dates with month/day");
          var Tt, Rt, Ut = ht || w.weekday && !nt, Ot = Qn(o, g);
          Ut ? (Tt = ni, Rt = ti, Ot = wn(Ot)) : R ? (Tt = ri, Rt = ei, Ot = kn(Ot)) : (Tt = rr, Rt = nr);
          for (var Ft, Dt = !1, ne = H(Tt); !(Ft = ne()).done; ) {
            var $t = Ft.value;
            u(w[$t]) ? w[$t] = Dt ? Rt[$t] : Ot[$t] : Dt = !0;
          }
          var fe = (Ut ? function(Wt) {
            var je = s(Wt.weekYear), _e = x(Wt.weekNumber, 1, le(Wt.weekYear)), Pe = x(Wt.weekday, 1, 7);
            return je ? _e ? !Pe && Te("weekday", Wt.weekday) : Te("week", Wt.week) : Te("weekYear", Wt.weekYear);
          }(w) : R ? function(Wt) {
            var je = s(Wt.year), _e = x(Wt.ordinal, 1, St(Wt.year));
            return je ? !_e && Te("ordinal", Wt.ordinal) : Te("year", Wt.year);
          }(w) : Yn(w)) || Kn(w);
          if (fe) return e.invalid(fe);
          var Se = fn(Ut ? $n(w) : R ? Gn(w) : w, g, n), ue = new e({ ts: Se[0], zone: n, o: Se[1], loc: kt });
          return w.weekday && nt && t.weekday !== ue.weekday ? e.invalid("mismatched weekday", "you can't specify both a weekday of " + w.weekday + " and a date of " + ue.toISO()) : ue;
        }, e.fromISO = function(t, n) {
          n === void 0 && (n = {});
          var o = function(g) {
            return We(g, [Nr, _r], [Dr, Pr], [jr, Vr], [Mr, qr]);
          }(t);
          return rn(o[0], o[1], n, "ISO 8601", t);
        }, e.fromRFC2822 = function(t, n) {
          n === void 0 && (n = {});
          var o = function(g) {
            return We(function(w) {
              return w.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
            }(g), [Tr, xr]);
          }(t);
          return rn(o[0], o[1], n, "RFC 2822", t);
        }, e.fromHTTP = function(t, n) {
          n === void 0 && (n = {});
          var o = function(g) {
            return We(g, [Lr, Nn], [Ir, Nn], [Ar, Rr]);
          }(t);
          return rn(o[0], o[1], n, "HTTP", n);
        }, e.fromFormat = function(t, n, o) {
          if (o === void 0 && (o = {}), u(t) || u(n)) throw new lt("fromFormat requires an input string and a format");
          var g = o, w = g.locale, R = w === void 0 ? null : w, q = g.numberingSystem, st = q === void 0 ? null : q, nt = function(Rt, Ut, Ot) {
            var Ft = Hn(Rt, Ut, Ot);
            return [Ft.result, Ft.zone, Ft.invalidReason];
          }(ce.fromOpts({ locale: R, numberingSystem: st, defaultToEN: !0 }), t, n), ht = nt[0], kt = nt[1], Tt = nt[2];
          return Tt ? e.invalid(Tt) : rn(ht, kt, o, "format " + n, t);
        }, e.fromString = function(t, n, o) {
          return o === void 0 && (o = {}), e.fromFormat(t, n, o);
        }, e.fromSQL = function(t, n) {
          n === void 0 && (n = {});
          var o = function(g) {
            return We(g, [Fr, zr], [Hr, Br]);
          }(t);
          return rn(o[0], o[1], n, "SQL", t);
        }, e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t) throw new lt("need to specify a reason the DateTime is invalid");
          var o = t instanceof ye ? t : new ye(t, n);
          if (oe.throwOnInvalid) throw new it(o);
          return new e({ invalid: o });
        }, e.isDateTime = function(t) {
          return t && t.isLuxonDateTime || !1;
        };
        var i = e.prototype;
        return i.get = function(t) {
          return this[t];
        }, i.resolvedLocaleOpts = function(t) {
          t === void 0 && (t = {});
          var n = se.create(this.loc.clone(t), t).resolvedOptions(this);
          return { locale: n.locale, numberingSystem: n.numberingSystem, outputCalendar: n.calendar };
        }, i.toUTC = function(t, n) {
          return t === void 0 && (t = 0), n === void 0 && (n = {}), this.setZone(qt.instance(t), n);
        }, i.toLocal = function() {
          return this.setZone(oe.defaultZone);
        }, i.setZone = function(t, n) {
          var o = n === void 0 ? {} : n, g = o.keepLocalTime, w = g !== void 0 && g, R = o.keepCalendarTime, q = R !== void 0 && R;
          if ((t = ee(t, oe.defaultZone)).equals(this.zone)) return this;
          if (t.isValid) {
            var st = this.ts;
            if (w || q) {
              var nt = t.offset(this.ts);
              st = fn(this.toObject(), nt, t)[0];
            }
            return nn(this, { ts: st, zone: t });
          }
          return e.invalid(dn(t));
        }, i.reconfigure = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, g = n.numberingSystem, w = n.outputCalendar;
          return nn(this, { loc: this.loc.clone({ locale: o, numberingSystem: g, outputCalendar: w }) });
        }, i.setLocale = function(t) {
          return this.reconfigure({ locale: t });
        }, i.set = function(t) {
          if (!this.isValid) return this;
          var n, o = pe(t, ir, []), g = !u(o.weekYear) || !u(o.weekNumber) || !u(o.weekday), w = !u(o.ordinal), R = !u(o.year), q = !u(o.month) || !u(o.day), st = R || q, nt = o.weekYear || o.weekNumber;
          if ((st || w) && nt) throw new _("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (q && w) throw new _("Can't mix ordinal dates with month/day");
          g ? n = $n(Object.assign(wn(this.c), o)) : u(o.ordinal) ? (n = Object.assign(this.toObject(), o), u(o.day) && (n.day = Math.min(Pt(n.year, n.month), n.day))) : n = Gn(Object.assign(kn(this.c), o));
          var ht = fn(n, this.o, this.zone);
          return nn(this, { ts: ht[0], o: ht[1] });
        }, i.plus = function(t) {
          return this.isValid ? nn(this, tr(this, Be(t))) : this;
        }, i.minus = function(t) {
          return this.isValid ? nn(this, tr(this, Be(t).negate())) : this;
        }, i.startOf = function(t) {
          if (!this.isValid) return this;
          var n = {}, o = be.normalizeUnit(t);
          switch (o) {
            case "years":
              n.month = 1;
            case "quarters":
            case "months":
              n.day = 1;
            case "weeks":
            case "days":
              n.hour = 0;
            case "hours":
              n.minute = 0;
            case "minutes":
              n.second = 0;
            case "seconds":
              n.millisecond = 0;
          }
          if (o === "weeks" && (n.weekday = 1), o === "quarters") {
            var g = Math.ceil(this.month / 3);
            n.month = 3 * (g - 1) + 1;
          }
          return this.set(n);
        }, i.endOf = function(t) {
          var n;
          return this.isValid ? this.plus((n = {}, n[t] = 1, n)).startOf(t).minus(1) : this;
        }, i.toFormat = function(t, n) {
          return n === void 0 && (n = {}), this.isValid ? se.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : "Invalid DateTime";
        }, i.toLocaleString = function(t) {
          return t === void 0 && (t = It), this.isValid ? se.create(this.loc.clone(t), t).formatDateTime(this) : "Invalid DateTime";
        }, i.toLocaleParts = function(t) {
          return t === void 0 && (t = {}), this.isValid ? se.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
        }, i.toISO = function(t) {
          return t === void 0 && (t = {}), this.isValid ? this.toISODate(t) + "T" + this.toISOTime(t) : null;
        }, i.toISODate = function(t) {
          var n = (t === void 0 ? {} : t).format, o = (n === void 0 ? "extended" : n) === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
          return this.year > 9999 && (o = "+" + o), Ye(this, o);
        }, i.toISOWeekDate = function() {
          return Ye(this, "kkkk-'W'WW-c");
        }, i.toISOTime = function(t) {
          var n = t === void 0 ? {} : t, o = n.suppressMilliseconds, g = o !== void 0 && o, w = n.suppressSeconds, R = w !== void 0 && w, q = n.includeOffset, st = q === void 0 || q, nt = n.includePrefix, ht = nt !== void 0 && nt, kt = n.format;
          return er(this, { suppressSeconds: R, suppressMilliseconds: g, includeOffset: st, includePrefix: ht, format: kt === void 0 ? "extended" : kt });
        }, i.toRFC2822 = function() {
          return Ye(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }, i.toHTTP = function() {
          return Ye(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }, i.toSQLDate = function() {
          return Ye(this, "yyyy-MM-dd");
        }, i.toSQLTime = function(t) {
          var n = t === void 0 ? {} : t, o = n.includeOffset, g = o === void 0 || o, w = n.includeZone;
          return er(this, { includeOffset: g, includeZone: w !== void 0 && w, spaceZone: !0 });
        }, i.toSQL = function(t) {
          return t === void 0 && (t = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null;
        }, i.toString = function() {
          return this.isValid ? this.toISO() : "Invalid DateTime";
        }, i.valueOf = function() {
          return this.toMillis();
        }, i.toMillis = function() {
          return this.isValid ? this.ts : NaN;
        }, i.toSeconds = function() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }, i.toJSON = function() {
          return this.toISO();
        }, i.toBSON = function() {
          return this.toJSDate();
        }, i.toObject = function(t) {
          if (t === void 0 && (t = {}), !this.isValid) return {};
          var n = Object.assign({}, this.c);
          return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
        }, i.toJSDate = function() {
          return new Date(this.isValid ? this.ts : NaN);
        }, i.diff = function(t, n, o) {
          if (n === void 0 && (n = "milliseconds"), o === void 0 && (o = {}), !this.isValid || !t.isValid) return be.invalid(this.invalid || t.invalid, "created by diffing an invalid DateTime");
          var g, w = Object.assign({ locale: this.locale, numberingSystem: this.numberingSystem }, o), R = (g = n, Array.isArray(g) ? g : [g]).map(be.normalizeUnit), q = t.valueOf() > this.valueOf(), st = Gr(q ? this : t, q ? t : this, R, w);
          return q ? st.negate() : st;
        }, i.diffNow = function(t, n) {
          return t === void 0 && (t = "milliseconds"), n === void 0 && (n = {}), this.diff(e.now(), t, n);
        }, i.until = function(t) {
          return this.isValid ? tn.fromDateTimes(this, t) : this;
        }, i.hasSame = function(t, n) {
          if (!this.isValid) return !1;
          var o = t.valueOf(), g = this.setZone(t.zone, { keepLocalTime: !0 });
          return g.startOf(n) <= o && o <= g.endOf(n);
        }, i.equals = function(t) {
          return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
        }, i.toRelative = function(t) {
          if (t === void 0 && (t = {}), !this.isValid) return null;
          var n = t.base || e.fromObject({ zone: this.zone }), o = t.padding ? this < n ? -t.padding : t.padding : 0, g = ["years", "months", "days", "hours", "minutes", "seconds"], w = t.unit;
          return Array.isArray(t.unit) && (g = t.unit, w = void 0), sr(n, this.plus(o), Object.assign(t, { numeric: "always", units: g, unit: w }));
        }, i.toRelativeCalendar = function(t) {
          return t === void 0 && (t = {}), this.isValid ? sr(t.base || e.fromObject({ zone: this.zone }), this, Object.assign(t, { numeric: "auto", units: ["years", "months", "days"], calendary: !0 })) : null;
        }, e.min = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
          if (!n.every(e.isDateTime)) throw new lt("min requires all arguments be DateTimes");
          return L(n, function(g) {
            return g.valueOf();
          }, Math.min);
        }, e.max = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
          if (!n.every(e.isDateTime)) throw new lt("max requires all arguments be DateTimes");
          return L(n, function(g) {
            return g.valueOf();
          }, Math.max);
        }, e.fromFormatExplain = function(t, n, o) {
          o === void 0 && (o = {});
          var g = o, w = g.locale, R = w === void 0 ? null : w, q = g.numberingSystem, st = q === void 0 ? null : q;
          return Hn(ce.fromOpts({ locale: R, numberingSystem: st, defaultToEN: !0 }), t, n);
        }, e.fromStringExplain = function(t, n, o) {
          return o === void 0 && (o = {}), e.fromFormatExplain(t, n, o);
        }, h(e, [{ key: "isValid", get: function() {
          return this.invalid === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }, { key: "locale", get: function() {
          return this.isValid ? this.loc.locale : null;
        } }, { key: "numberingSystem", get: function() {
          return this.isValid ? this.loc.numberingSystem : null;
        } }, { key: "outputCalendar", get: function() {
          return this.isValid ? this.loc.outputCalendar : null;
        } }, { key: "zone", get: function() {
          return this._zone;
        } }, { key: "zoneName", get: function() {
          return this.isValid ? this.zone.name : null;
        } }, { key: "year", get: function() {
          return this.isValid ? this.c.year : NaN;
        } }, { key: "quarter", get: function() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        } }, { key: "month", get: function() {
          return this.isValid ? this.c.month : NaN;
        } }, { key: "day", get: function() {
          return this.isValid ? this.c.day : NaN;
        } }, { key: "hour", get: function() {
          return this.isValid ? this.c.hour : NaN;
        } }, { key: "minute", get: function() {
          return this.isValid ? this.c.minute : NaN;
        } }, { key: "second", get: function() {
          return this.isValid ? this.c.second : NaN;
        } }, { key: "millisecond", get: function() {
          return this.isValid ? this.c.millisecond : NaN;
        } }, { key: "weekYear", get: function() {
          return this.isValid ? On(this).weekYear : NaN;
        } }, { key: "weekNumber", get: function() {
          return this.isValid ? On(this).weekNumber : NaN;
        } }, { key: "weekday", get: function() {
          return this.isValid ? On(this).weekday : NaN;
        } }, { key: "ordinal", get: function() {
          return this.isValid ? kn(this.c).ordinal : NaN;
        } }, { key: "monthShort", get: function() {
          return this.isValid ? en.months("short", { locObj: this.loc })[this.month - 1] : null;
        } }, { key: "monthLong", get: function() {
          return this.isValid ? en.months("long", { locObj: this.loc })[this.month - 1] : null;
        } }, { key: "weekdayShort", get: function() {
          return this.isValid ? en.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
        } }, { key: "weekdayLong", get: function() {
          return this.isValid ? en.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
        } }, { key: "offset", get: function() {
          return this.isValid ? +this.o : NaN;
        } }, { key: "offsetNameShort", get: function() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
        } }, { key: "offsetNameLong", get: function() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
        } }, { key: "isOffsetFixed", get: function() {
          return this.isValid ? this.zone.universal : null;
        } }, { key: "isInDST", get: function() {
          return !this.isOffsetFixed && (this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset);
        } }, { key: "isInLeapYear", get: function() {
          return tt(this.year);
        } }, { key: "daysInMonth", get: function() {
          return Pt(this.year, this.month);
        } }, { key: "daysInYear", get: function() {
          return this.isValid ? St(this.year) : NaN;
        } }, { key: "weeksInWeekYear", get: function() {
          return this.isValid ? le(this.weekYear) : NaN;
        } }], [{ key: "DATE_SHORT", get: function() {
          return It;
        } }, { key: "DATE_MED", get: function() {
          return Bt;
        } }, { key: "DATE_MED_WITH_WEEKDAY", get: function() {
          return z;
        } }, { key: "DATE_FULL", get: function() {
          return G;
        } }, { key: "DATE_HUGE", get: function() {
          return P;
        } }, { key: "TIME_SIMPLE", get: function() {
          return f;
        } }, { key: "TIME_WITH_SECONDS", get: function() {
          return A;
        } }, { key: "TIME_WITH_SHORT_OFFSET", get: function() {
          return M;
        } }, { key: "TIME_WITH_LONG_OFFSET", get: function() {
          return vt;
        } }, { key: "TIME_24_SIMPLE", get: function() {
          return wt;
        } }, { key: "TIME_24_WITH_SECONDS", get: function() {
          return Et;
        } }, { key: "TIME_24_WITH_SHORT_OFFSET", get: function() {
          return Mt;
        } }, { key: "TIME_24_WITH_LONG_OFFSET", get: function() {
          return Y;
        } }, { key: "DATETIME_SHORT", get: function() {
          return Q;
        } }, { key: "DATETIME_SHORT_WITH_SECONDS", get: function() {
          return rt;
        } }, { key: "DATETIME_MED", get: function() {
          return et;
        } }, { key: "DATETIME_MED_WITH_SECONDS", get: function() {
          return Gt;
        } }, { key: "DATETIME_MED_WITH_WEEKDAY", get: function() {
          return Qt;
        } }, { key: "DATETIME_FULL", get: function() {
          return Xt;
        } }, { key: "DATETIME_FULL_WITH_SECONDS", get: function() {
          return re;
        } }, { key: "DATETIME_HUGE", get: function() {
          return he;
        } }, { key: "DATETIME_HUGE_WITH_SECONDS", get: function() {
          return y;
        } }]), e;
      }();
      function on(e) {
        if (ae.isDateTime(e)) return e;
        if (e && e.valueOf && r(e.valueOf())) return ae.fromJSDate(e);
        if (e && typeof e == "object") return ae.fromObject(e);
        throw new lt("Unknown datetime argument: " + e + ", of type " + typeof e);
      }
      K.DateTime = ae, K.Duration = be, K.FixedOffsetZone = qt, K.IANAZone = Nt, K.Info = en, K.Interval = tn, K.InvalidZone = Yt, K.LocalZone = pt, K.Settings = oe, K.VERSION = "1.28.1", K.Zone = C;
    }, function(Z, K, O) {
      var v = O(43);
      Z.exports = function(h) {
        if (!v(h)) throw new TypeError(h + " is not an Object");
        return h;
      };
    }, function(Z, K, O) {
      var v = O(7), h = { function: !0, object: !0 };
      Z.exports = function(m) {
        return v(m) && h[typeof m] || !1;
      };
    }, function(Z, K, O) {
      Z.exports = O(45);
    }, function(Z, K, O) {
      var v = O(1), h = O(13), m = O(46), k = O(19);
      function j(D) {
        var J = new m(D), p = h(m.prototype.request, J);
        return v.extend(p, m.prototype, J), v.extend(p, J), p;
      }
      var I = j(O(10));
      I.Axios = m, I.create = function(D) {
        return j(k(I.defaults, D));
      }, I.Cancel = O(20), I.CancelToken = O(61), I.isCancel = O(18), I.all = function(D) {
        return Promise.all(D);
      }, I.spread = O(62), I.isAxiosError = O(63), Z.exports = I, Z.exports.default = I;
    }, function(Z, K, O) {
      var v = O(1), h = O(14), m = O(47), k = O(48), j = O(19), I = O(59), D = I.validators;
      function J(p) {
        this.defaults = p, this.interceptors = { request: new m(), response: new m() };
      }
      J.prototype.request = function(p) {
        typeof p == "string" ? (p = arguments[1] || {}).url = arguments[0] : p = p || {}, (p = j(this.defaults, p)).method ? p.method = p.method.toLowerCase() : this.defaults.method ? p.method = this.defaults.method.toLowerCase() : p.method = "get";
        var H = p.transitional;
        H !== void 0 && I.assertOptions(H, { silentJSONParsing: D.transitional(D.boolean, "1.0.0"), forcedJSONParsing: D.transitional(D.boolean, "1.0.0"), clarifyTimeoutError: D.transitional(D.boolean, "1.0.0") }, !1);
        var W = [], it = !0;
        this.interceptors.request.forEach(function(F) {
          typeof F.runWhen == "function" && F.runWhen(p) === !1 || (it = it && F.synchronous, W.unshift(F.fulfilled, F.rejected));
        });
        var B, X = [];
        if (this.interceptors.response.forEach(function(F) {
          X.push(F.fulfilled, F.rejected);
        }), !it) {
          var _ = [k, void 0];
          for (Array.prototype.unshift.apply(_, W), _ = _.concat(X), B = Promise.resolve(p); _.length; ) B = B.then(_.shift(), _.shift());
          return B;
        }
        for (var at = p; W.length; ) {
          var lt = W.shift(), ot = W.shift();
          try {
            at = lt(at);
          } catch (F) {
            ot(F);
            break;
          }
        }
        try {
          B = k(at);
        } catch (F) {
          return Promise.reject(F);
        }
        for (; X.length; ) B = B.then(X.shift(), X.shift());
        return B;
      }, J.prototype.getUri = function(p) {
        return p = j(this.defaults, p), h(p.url, p.params, p.paramsSerializer).replace(/^\?/, "");
      }, v.forEach(["delete", "get", "head", "options"], function(p) {
        J.prototype[p] = function(H, W) {
          return this.request(j(W || {}, { method: p, url: H, data: (W || {}).data }));
        };
      }), v.forEach(["post", "put", "patch"], function(p) {
        J.prototype[p] = function(H, W, it) {
          return this.request(j(it || {}, { method: p, url: H, data: W }));
        };
      }), Z.exports = J;
    }, function(Z, K, O) {
      var v = O(1);
      function h() {
        this.handlers = [];
      }
      h.prototype.use = function(m, k, j) {
        return this.handlers.push({ fulfilled: m, rejected: k, synchronous: !!j && j.synchronous, runWhen: j ? j.runWhen : null }), this.handlers.length - 1;
      }, h.prototype.eject = function(m) {
        this.handlers[m] && (this.handlers[m] = null);
      }, h.prototype.forEach = function(m) {
        v.forEach(this.handlers, function(k) {
          k !== null && m(k);
        });
      }, Z.exports = h;
    }, function(Z, K, O) {
      var v = O(1), h = O(49), m = O(18), k = O(10);
      function j(I) {
        I.cancelToken && I.cancelToken.throwIfRequested();
      }
      Z.exports = function(I) {
        return j(I), I.headers = I.headers || {}, I.data = h.call(I, I.data, I.headers, I.transformRequest), I.headers = v.merge(I.headers.common || {}, I.headers[I.method] || {}, I.headers), v.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(D) {
          delete I.headers[D];
        }), (I.adapter || k.adapter)(I).then(function(D) {
          return j(I), D.data = h.call(I, D.data, D.headers, I.transformResponse), D;
        }, function(D) {
          return m(D) || (j(I), D && D.response && (D.response.data = h.call(I, D.response.data, D.response.headers, I.transformResponse))), Promise.reject(D);
        });
      };
    }, function(Z, K, O) {
      var v = O(1), h = O(10);
      Z.exports = function(m, k, j) {
        var I = this || h;
        return v.forEach(j, function(D) {
          m = D.call(I, m, k);
        }), m;
      };
    }, function(Z, K) {
      var O, v, h = Z.exports = {};
      function m() {
        throw new Error("setTimeout has not been defined");
      }
      function k() {
        throw new Error("clearTimeout has not been defined");
      }
      function j(X) {
        if (O === setTimeout) return setTimeout(X, 0);
        if ((O === m || !O) && setTimeout) return O = setTimeout, setTimeout(X, 0);
        try {
          return O(X, 0);
        } catch {
          try {
            return O.call(null, X, 0);
          } catch {
            return O.call(this, X, 0);
          }
        }
      }
      (function() {
        try {
          O = typeof setTimeout == "function" ? setTimeout : m;
        } catch {
          O = m;
        }
        try {
          v = typeof clearTimeout == "function" ? clearTimeout : k;
        } catch {
          v = k;
        }
      })();
      var I, D = [], J = !1, p = -1;
      function H() {
        J && I && (J = !1, I.length ? D = I.concat(D) : p = -1, D.length && W());
      }
      function W() {
        if (!J) {
          var X = j(H);
          J = !0;
          for (var _ = D.length; _; ) {
            for (I = D, D = []; ++p < _; ) I && I[p].run();
            p = -1, _ = D.length;
          }
          I = null, J = !1, function(at) {
            if (v === clearTimeout) return clearTimeout(at);
            if ((v === k || !v) && clearTimeout) return v = clearTimeout, clearTimeout(at);
            try {
              v(at);
            } catch {
              try {
                return v.call(null, at);
              } catch {
                return v.call(this, at);
              }
            }
          }(X);
        }
      }
      function it(X, _) {
        this.fun = X, this.array = _;
      }
      function B() {
      }
      h.nextTick = function(X) {
        var _ = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var at = 1; at < arguments.length; at++) _[at - 1] = arguments[at];
        D.push(new it(X, _)), D.length !== 1 || J || j(W);
      }, it.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = B, h.addListener = B, h.once = B, h.off = B, h.removeListener = B, h.removeAllListeners = B, h.emit = B, h.prependListener = B, h.prependOnceListener = B, h.listeners = function(X) {
        return [];
      }, h.binding = function(X) {
        throw new Error("process.binding is not supported");
      }, h.cwd = function() {
        return "/";
      }, h.chdir = function(X) {
        throw new Error("process.chdir is not supported");
      }, h.umask = function() {
        return 0;
      };
    }, function(Z, K, O) {
      var v = O(1);
      Z.exports = function(h, m) {
        v.forEach(h, function(k, j) {
          j !== m && j.toUpperCase() === m.toUpperCase() && (h[m] = k, delete h[j]);
        });
      };
    }, function(Z, K, O) {
      var v = O(17);
      Z.exports = function(h, m, k) {
        var j = k.config.validateStatus;
        k.status && j && !j(k.status) ? m(v("Request failed with status code " + k.status, k.config, null, k.request, k)) : h(k);
      };
    }, function(Z, K, O) {
      var v = O(1);
      Z.exports = v.isStandardBrowserEnv() ? { write: function(h, m, k, j, I, D) {
        var J = [];
        J.push(h + "=" + encodeURIComponent(m)), v.isNumber(k) && J.push("expires=" + new Date(k).toGMTString()), v.isString(j) && J.push("path=" + j), v.isString(I) && J.push("domain=" + I), D === !0 && J.push("secure"), document.cookie = J.join("; ");
      }, read: function(h) {
        var m = document.cookie.match(new RegExp("(^|;\\s*)(" + h + ")=([^;]*)"));
        return m ? decodeURIComponent(m[3]) : null;
      }, remove: function(h) {
        this.write(h, "", Date.now() - 864e5);
      } } : { write: function() {
      }, read: function() {
        return null;
      }, remove: function() {
      } };
    }, function(Z, K, O) {
      var v = O(55), h = O(56);
      Z.exports = function(m, k) {
        return m && !v(k) ? h(m, k) : k;
      };
    }, function(Z, K, O) {
      Z.exports = function(v) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(v);
      };
    }, function(Z, K, O) {
      Z.exports = function(v, h) {
        return h ? v.replace(/\/+$/, "") + "/" + h.replace(/^\/+/, "") : v;
      };
    }, function(Z, K, O) {
      var v = O(1), h = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
      Z.exports = function(m) {
        var k, j, I, D = {};
        return m && v.forEach(m.split(`
`), function(J) {
          if (I = J.indexOf(":"), k = v.trim(J.substr(0, I)).toLowerCase(), j = v.trim(J.substr(I + 1)), k) {
            if (D[k] && h.indexOf(k) >= 0) return;
            D[k] = k === "set-cookie" ? (D[k] ? D[k] : []).concat([j]) : D[k] ? D[k] + ", " + j : j;
          }
        }), D;
      };
    }, function(Z, K, O) {
      var v = O(1);
      Z.exports = v.isStandardBrowserEnv() ? function() {
        var h, m = /(msie|trident)/i.test(navigator.userAgent), k = document.createElement("a");
        function j(I) {
          var D = I;
          return m && (k.setAttribute("href", D), D = k.href), k.setAttribute("href", D), { href: k.href, protocol: k.protocol ? k.protocol.replace(/:$/, "") : "", host: k.host, search: k.search ? k.search.replace(/^\?/, "") : "", hash: k.hash ? k.hash.replace(/^#/, "") : "", hostname: k.hostname, port: k.port, pathname: k.pathname.charAt(0) === "/" ? k.pathname : "/" + k.pathname };
        }
        return h = j(window.location.href), function(I) {
          var D = v.isString(I) ? j(I) : I;
          return D.protocol === h.protocol && D.host === h.host;
        };
      }() : function() {
        return !0;
      };
    }, function(Z, K, O) {
      var v = O(60), h = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(I, D) {
        h[I] = function(J) {
          return typeof J === I || "a" + (D < 1 ? "n " : " ") + I;
        };
      });
      var m = {}, k = v.version.split(".");
      function j(I, D) {
        for (var J = D ? D.split(".") : k, p = I.split("."), H = 0; H < 3; H++) {
          if (J[H] > p[H]) return !0;
          if (J[H] < p[H]) return !1;
        }
        return !1;
      }
      h.transitional = function(I, D, J) {
        var p = D && j(D);
        function H(W, it) {
          return "[Axios v" + v.version + "] Transitional option '" + W + "'" + it + (J ? ". " + J : "");
        }
        return function(W, it, B) {
          if (I === !1) throw new Error(H(it, " has been removed in " + D));
          return p && !m[it] && (m[it] = !0, console.warn(H(it, " has been deprecated since v" + D + " and will be removed in the near future"))), !I || I(W, it, B);
        };
      }, Z.exports = { isOlderVersion: j, assertOptions: function(I, D, J) {
        if (typeof I != "object") throw new TypeError("options must be an object");
        for (var p = Object.keys(I), H = p.length; H-- > 0; ) {
          var W = p[H], it = D[W];
          if (it) {
            var B = I[W], X = B === void 0 || it(B, W, I);
            if (X !== !0) throw new TypeError("option " + W + " must be " + X);
          } else if (J !== !0) throw Error("Unknown option " + W);
        }
      }, validators: h };
    }, function(Z) {
      Z.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');
    }, function(Z, K, O) {
      var v = O(20);
      function h(m) {
        if (typeof m != "function") throw new TypeError("executor must be a function.");
        var k;
        this.promise = new Promise(function(I) {
          k = I;
        });
        var j = this;
        m(function(I) {
          j.reason || (j.reason = new v(I), k(j.reason));
        });
      }
      h.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
      }, h.source = function() {
        var m;
        return { token: new h(function(k) {
          m = k;
        }), cancel: m };
      }, Z.exports = h;
    }, function(Z, K, O) {
      Z.exports = function(v) {
        return function(h) {
          return v.apply(null, h);
        };
      };
    }, function(Z, K, O) {
      Z.exports = function(v) {
        return typeof v == "object" && v.isAxiosError === !0;
      };
    }, function(Z, K, O) {
      O.r(K);
      var v = O(5), h = O(22);
      function m(D, J) {
        if (!(D instanceof J)) throw new TypeError("Cannot call a class as a function");
      }
      function k(D, J) {
        for (var p = 0; p < J.length; p++) {
          var H = J[p];
          H.enumerable = H.enumerable || !1, H.configurable = !0, "value" in H && (H.writable = !0), Object.defineProperty(D, H.key, H);
        }
      }
      var j = function() {
        return { loadPath: "/locales/{{lng}}/{{ns}}.json", addPath: "/locales/add/{{lng}}/{{ns}}", allowMultiLoading: !1, parse: function(D) {
          return JSON.parse(D);
        }, stringify: JSON.stringify, parsePayload: function(D, J, p) {
          return function(H, W, it) {
            return W in H ? Object.defineProperty(H, W, { value: it, enumerable: !0, configurable: !0, writable: !0 }) : H[W] = it, H;
          }({}, J, p || "");
        }, request: h.a, reloadInterval: typeof window > "u" && 36e5, customHeaders: {}, queryStringParams: {}, crossDomain: !1, withCredentials: !1, overrideMimeType: !1, requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" } };
      }, I = function() {
        function D(H) {
          var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, it = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          m(this, D), this.services = H, this.options = W, this.allOptions = it, this.type = "backend", this.init(H, W, it);
        }
        var J, p;
        return J = D, (p = [{ key: "init", value: function(H) {
          var W = this, it = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          this.services = H, this.options = Object(v.a)(it, this.options || {}, j()), this.allOptions = B, this.services && this.options.reloadInterval && setInterval(function() {
            return W.reload();
          }, this.options.reloadInterval);
        } }, { key: "readMulti", value: function(H, W, it) {
          this._readAny(H, H, W, W, it);
        } }, { key: "read", value: function(H, W, it) {
          this._readAny([H], H, [W], W, it);
        } }, { key: "_readAny", value: function(H, W, it, B, X) {
          var _ = this, at = this.options.loadPath;
          typeof this.options.loadPath == "function" && (at = this.options.loadPath(H, it)), (at = Object(v.c)(at)).then(function(lt) {
            if (!lt) return X(null, {});
            var ot = _.services.interpolator.interpolate(lt, { lng: H.join("+"), ns: it.join("+") });
            _.loadUrl(ot, X, W, B);
          });
        } }, { key: "loadUrl", value: function(H, W, it, B) {
          var X = this;
          this.options.request(this.options, H, void 0, function(_, at) {
            if (at && (at.status >= 500 && at.status < 600 || !at.status)) return W("failed loading " + H + "; status code: " + at.status, !0);
            if (at && at.status >= 400 && at.status < 500) return W("failed loading " + H + "; status code: " + at.status, !1);
            if (!at && _ && _.message && _.message.indexOf("Failed to fetch") > -1) return W("failed loading " + H + ": " + _.message, !0);
            if (_) return W(_, !1);
            var lt, ot;
            try {
              lt = typeof at.data == "string" ? X.options.parse(at.data, it, B) : at.data;
            } catch {
              ot = "failed parsing " + H + " to json";
            }
            if (ot) return W(ot, !1);
            W(null, lt);
          });
        } }, { key: "create", value: function(H, W, it, B, X) {
          var _ = this;
          if (this.options.addPath) {
            typeof H == "string" && (H = [H]);
            var at = this.options.parsePayload(W, it, B), lt = 0, ot = [], F = [];
            H.forEach(function(yt) {
              var bt = _.options.addPath;
              typeof _.options.addPath == "function" && (bt = _.options.addPath(yt, W));
              var It = _.services.interpolator.interpolate(bt, { lng: yt, ns: W });
              _.options.request(_.options, It, at, function(Bt, z) {
                lt += 1, ot.push(Bt), F.push(z), lt === H.length && X && X(ot, F);
              });
            });
          }
        } }, { key: "reload", value: function() {
          var H = this, W = this.services, it = W.backendConnector, B = W.languageUtils, X = W.logger, _ = it.language;
          if (!_ || _.toLowerCase() !== "cimode") {
            var at = [], lt = function(ot) {
              B.toResolveHierarchy(ot).forEach(function(F) {
                at.indexOf(F) < 0 && at.push(F);
              });
            };
            lt(_), this.allOptions.preload && this.allOptions.preload.forEach(function(ot) {
              return lt(ot);
            }), at.forEach(function(ot) {
              H.allOptions.ns.forEach(function(F) {
                it.read(ot, F, "read", null, null, function(yt, bt) {
                  yt && X.warn("loading namespace ".concat(F, " for language ").concat(ot, " failed"), yt), !yt && bt && X.log("loaded namespace ".concat(F, " for language ").concat(ot), bt), it.loaded("".concat(ot, "|").concat(F), yt, bt);
                });
              });
            });
          }
        } }]) && k(J.prototype, p), Object.defineProperty(J, "prototype", { writable: !1 }), D;
      }();
      I.type = "backend", K.default = I;
    }, function(Z, K) {
      var O = typeof self < "u" ? self : this, v = function() {
        function m() {
          this.fetch = !1, this.DOMException = O.DOMException;
        }
        return m.prototype = O, new m();
      }();
      (function(m) {
        (function(k) {
          var j = "URLSearchParams" in m, I = "Symbol" in m && "iterator" in Symbol, D = "FileReader" in m && "Blob" in m && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(), J = "FormData" in m, p = "ArrayBuffer" in m;
          if (p) var H = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], W = ArrayBuffer.isView || function(f) {
            return f && H.indexOf(Object.prototype.toString.call(f)) > -1;
          };
          function it(f) {
            if (typeof f != "string" && (f = String(f)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(f)) throw new TypeError("Invalid character in header field name");
            return f.toLowerCase();
          }
          function B(f) {
            return typeof f != "string" && (f = String(f)), f;
          }
          function X(f) {
            var A = { next: function() {
              var M = f.shift();
              return { done: M === void 0, value: M };
            } };
            return I && (A[Symbol.iterator] = function() {
              return A;
            }), A;
          }
          function _(f) {
            this.map = {}, f instanceof _ ? f.forEach(function(A, M) {
              this.append(M, A);
            }, this) : Array.isArray(f) ? f.forEach(function(A) {
              this.append(A[0], A[1]);
            }, this) : f && Object.getOwnPropertyNames(f).forEach(function(A) {
              this.append(A, f[A]);
            }, this);
          }
          function at(f) {
            if (f.bodyUsed) return Promise.reject(new TypeError("Already read"));
            f.bodyUsed = !0;
          }
          function lt(f) {
            return new Promise(function(A, M) {
              f.onload = function() {
                A(f.result);
              }, f.onerror = function() {
                M(f.error);
              };
            });
          }
          function ot(f) {
            var A = new FileReader(), M = lt(A);
            return A.readAsArrayBuffer(f), M;
          }
          function F(f) {
            if (f.slice) return f.slice(0);
            var A = new Uint8Array(f.byteLength);
            return A.set(new Uint8Array(f)), A.buffer;
          }
          function yt() {
            return this.bodyUsed = !1, this._initBody = function(f) {
              var A;
              this._bodyInit = f, f ? typeof f == "string" ? this._bodyText = f : D && Blob.prototype.isPrototypeOf(f) ? this._bodyBlob = f : J && FormData.prototype.isPrototypeOf(f) ? this._bodyFormData = f : j && URLSearchParams.prototype.isPrototypeOf(f) ? this._bodyText = f.toString() : p && D && (A = f) && DataView.prototype.isPrototypeOf(A) ? (this._bodyArrayBuffer = F(f.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : p && (ArrayBuffer.prototype.isPrototypeOf(f) || W(f)) ? this._bodyArrayBuffer = F(f) : this._bodyText = f = Object.prototype.toString.call(f) : this._bodyText = "", this.headers.get("content-type") || (typeof f == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : j && URLSearchParams.prototype.isPrototypeOf(f) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }, D && (this.blob = function() {
              var f = at(this);
              if (f) return f;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? at(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ot);
            }), this.text = function() {
              var f, A, M, vt = at(this);
              if (vt) return vt;
              if (this._bodyBlob) return f = this._bodyBlob, A = new FileReader(), M = lt(A), A.readAsText(f), M;
              if (this._bodyArrayBuffer) return Promise.resolve(function(wt) {
                for (var Et = new Uint8Array(wt), Mt = new Array(Et.length), Y = 0; Y < Et.length; Y++) Mt[Y] = String.fromCharCode(Et[Y]);
                return Mt.join("");
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }, J && (this.formData = function() {
              return this.text().then(Bt);
            }), this.json = function() {
              return this.text().then(JSON.parse);
            }, this;
          }
          _.prototype.append = function(f, A) {
            f = it(f), A = B(A);
            var M = this.map[f];
            this.map[f] = M ? M + ", " + A : A;
          }, _.prototype.delete = function(f) {
            delete this.map[it(f)];
          }, _.prototype.get = function(f) {
            return f = it(f), this.has(f) ? this.map[f] : null;
          }, _.prototype.has = function(f) {
            return this.map.hasOwnProperty(it(f));
          }, _.prototype.set = function(f, A) {
            this.map[it(f)] = B(A);
          }, _.prototype.forEach = function(f, A) {
            for (var M in this.map) this.map.hasOwnProperty(M) && f.call(A, this.map[M], M, this);
          }, _.prototype.keys = function() {
            var f = [];
            return this.forEach(function(A, M) {
              f.push(M);
            }), X(f);
          }, _.prototype.values = function() {
            var f = [];
            return this.forEach(function(A) {
              f.push(A);
            }), X(f);
          }, _.prototype.entries = function() {
            var f = [];
            return this.forEach(function(A, M) {
              f.push([M, A]);
            }), X(f);
          }, I && (_.prototype[Symbol.iterator] = _.prototype.entries);
          var bt = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function It(f, A) {
            var M, vt, wt = (A = A || {}).body;
            if (f instanceof It) {
              if (f.bodyUsed) throw new TypeError("Already read");
              this.url = f.url, this.credentials = f.credentials, A.headers || (this.headers = new _(f.headers)), this.method = f.method, this.mode = f.mode, this.signal = f.signal, wt || f._bodyInit == null || (wt = f._bodyInit, f.bodyUsed = !0);
            } else this.url = String(f);
            if (this.credentials = A.credentials || this.credentials || "same-origin", !A.headers && this.headers || (this.headers = new _(A.headers)), this.method = (M = A.method || this.method || "GET", vt = M.toUpperCase(), bt.indexOf(vt) > -1 ? vt : M), this.mode = A.mode || this.mode || null, this.signal = A.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && wt) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(wt);
          }
          function Bt(f) {
            var A = new FormData();
            return f.trim().split("&").forEach(function(M) {
              if (M) {
                var vt = M.split("="), wt = vt.shift().replace(/\+/g, " "), Et = vt.join("=").replace(/\+/g, " ");
                A.append(decodeURIComponent(wt), decodeURIComponent(Et));
              }
            }), A;
          }
          function z(f, A) {
            A || (A = {}), this.type = "default", this.status = A.status === void 0 ? 200 : A.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in A ? A.statusText : "OK", this.headers = new _(A.headers), this.url = A.url || "", this._initBody(f);
          }
          It.prototype.clone = function() {
            return new It(this, { body: this._bodyInit });
          }, yt.call(It.prototype), yt.call(z.prototype), z.prototype.clone = function() {
            return new z(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new _(this.headers), url: this.url });
          }, z.error = function() {
            var f = new z(null, { status: 0, statusText: "" });
            return f.type = "error", f;
          };
          var G = [301, 302, 303, 307, 308];
          z.redirect = function(f, A) {
            if (G.indexOf(A) === -1) throw new RangeError("Invalid status code");
            return new z(null, { status: A, headers: { location: f } });
          }, k.DOMException = m.DOMException;
          try {
            new k.DOMException();
          } catch {
            k.DOMException = function(A, M) {
              this.message = A, this.name = M;
              var vt = Error(A);
              this.stack = vt.stack;
            }, k.DOMException.prototype = Object.create(Error.prototype), k.DOMException.prototype.constructor = k.DOMException;
          }
          function P(f, A) {
            return new Promise(function(M, vt) {
              var wt = new It(f, A);
              if (wt.signal && wt.signal.aborted) return vt(new k.DOMException("Aborted", "AbortError"));
              var Et = new XMLHttpRequest();
              function Mt() {
                Et.abort();
              }
              Et.onload = function() {
                var Y, Q, rt = { status: Et.status, statusText: Et.statusText, headers: (Y = Et.getAllResponseHeaders() || "", Q = new _(), Y.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(Gt) {
                  var Qt = Gt.split(":"), Xt = Qt.shift().trim();
                  if (Xt) {
                    var re = Qt.join(":").trim();
                    Q.append(Xt, re);
                  }
                }), Q) };
                rt.url = "responseURL" in Et ? Et.responseURL : rt.headers.get("X-Request-URL");
                var et = "response" in Et ? Et.response : Et.responseText;
                M(new z(et, rt));
              }, Et.onerror = function() {
                vt(new TypeError("Network request failed"));
              }, Et.ontimeout = function() {
                vt(new TypeError("Network request failed"));
              }, Et.onabort = function() {
                vt(new k.DOMException("Aborted", "AbortError"));
              }, Et.open(wt.method, wt.url, !0), wt.credentials === "include" ? Et.withCredentials = !0 : wt.credentials === "omit" && (Et.withCredentials = !1), "responseType" in Et && D && (Et.responseType = "blob"), wt.headers.forEach(function(Y, Q) {
                Et.setRequestHeader(Q, Y);
              }), wt.signal && (wt.signal.addEventListener("abort", Mt), Et.onreadystatechange = function() {
                Et.readyState === 4 && wt.signal.removeEventListener("abort", Mt);
              }), Et.send(wt._bodyInit === void 0 ? null : wt._bodyInit);
            });
          }
          P.polyfill = !0, m.fetch || (m.fetch = P, m.Headers = _, m.Request = It, m.Response = z), k.Headers = _, k.Request = It, k.Response = z, k.fetch = P, Object.defineProperty(k, "__esModule", { value: !0 });
        })({});
      })(v), v.fetch.ponyfill = !0, delete v.fetch.polyfill;
      var h = v;
      (K = h.fetch).default = h.fetch, K.fetch = h.fetch, K.Headers = h.Headers, K.Request = h.Request, K.Response = h.Response, Z.exports = K;
    }, function(Z, K, O) {
      O.r(K);
      var v = O(3), h = O(4), m = [], k = m.forEach, j = m.slice;
      function I(z) {
        return k.call(j.call(arguments, 1), function(G) {
          if (G) for (var P in G) z[P] === void 0 && (z[P] = G[P]);
        }), z;
      }
      var D = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, J = function(z, G, P) {
        var f = P || {};
        f.path = f.path || "/";
        var A = z + "=" + encodeURIComponent(G);
        if (f.maxAge > 0) {
          var M = f.maxAge - 0;
          if (isNaN(M)) throw new Error("maxAge should be a Number");
          A += "; Max-Age=" + Math.floor(M);
        }
        if (f.domain) {
          if (!D.test(f.domain)) throw new TypeError("option domain is invalid");
          A += "; Domain=" + f.domain;
        }
        if (f.path) {
          if (!D.test(f.path)) throw new TypeError("option path is invalid");
          A += "; Path=" + f.path;
        }
        if (f.expires) {
          if (typeof f.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
          A += "; Expires=" + f.expires.toUTCString();
        }
        if (f.httpOnly && (A += "; HttpOnly"), f.secure && (A += "; Secure"), f.sameSite) switch (typeof f.sameSite == "string" ? f.sameSite.toLowerCase() : f.sameSite) {
          case !0:
            A += "; SameSite=Strict";
            break;
          case "lax":
            A += "; SameSite=Lax";
            break;
          case "strict":
            A += "; SameSite=Strict";
            break;
          case "none":
            A += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
        return A;
      }, p = function(z, G, P, f) {
        var A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
        P && (A.expires = /* @__PURE__ */ new Date(), A.expires.setTime(A.expires.getTime() + 60 * P * 1e3)), f && (A.domain = f), document.cookie = J(z, encodeURIComponent(G), A);
      }, H = function(z) {
        for (var G = z + "=", P = document.cookie.split(";"), f = 0; f < P.length; f++) {
          for (var A = P[f]; A.charAt(0) === " "; ) A = A.substring(1, A.length);
          if (A.indexOf(G) === 0) return A.substring(G.length, A.length);
        }
        return null;
      }, W = { name: "cookie", lookup: function(z) {
        var G;
        if (z.lookupCookie && typeof document < "u") {
          var P = H(z.lookupCookie);
          P && (G = P);
        }
        return G;
      }, cacheUserLanguage: function(z, G) {
        G.lookupCookie && typeof document < "u" && p(G.lookupCookie, z, G.cookieMinutes, G.cookieDomain, G.cookieOptions);
      } }, it = { name: "querystring", lookup: function(z) {
        var G;
        if (typeof window < "u") for (var P = window.location.search.substring(1).split("&"), f = 0; f < P.length; f++) {
          var A = P[f].indexOf("=");
          A > 0 && P[f].substring(0, A) === z.lookupQuerystring && (G = P[f].substring(A + 1));
        }
        return G;
      } }, B = null, X = function() {
        if (B !== null) return B;
        try {
          B = window !== "undefined" && window.localStorage !== null, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
        } catch {
          B = !1;
        }
        return B;
      }, _ = { name: "localStorage", lookup: function(z) {
        var G;
        if (z.lookupLocalStorage && X()) {
          var P = window.localStorage.getItem(z.lookupLocalStorage);
          P && (G = P);
        }
        return G;
      }, cacheUserLanguage: function(z, G) {
        G.lookupLocalStorage && X() && window.localStorage.setItem(G.lookupLocalStorage, z);
      } }, at = null, lt = function() {
        if (at !== null) return at;
        try {
          at = window !== "undefined" && window.sessionStorage !== null, window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo");
        } catch {
          at = !1;
        }
        return at;
      }, ot = { name: "sessionStorage", lookup: function(z) {
        var G;
        if (z.lookupSessionStorage && lt()) {
          var P = window.sessionStorage.getItem(z.lookupSessionStorage);
          P && (G = P);
        }
        return G;
      }, cacheUserLanguage: function(z, G) {
        G.lookupSessionStorage && lt() && window.sessionStorage.setItem(G.lookupSessionStorage, z);
      } }, F = { name: "navigator", lookup: function(z) {
        var G = [];
        if (typeof navigator < "u") {
          if (navigator.languages) for (var P = 0; P < navigator.languages.length; P++) G.push(navigator.languages[P]);
          navigator.userLanguage && G.push(navigator.userLanguage), navigator.language && G.push(navigator.language);
        }
        return G.length > 0 ? G : void 0;
      } }, yt = { name: "htmlTag", lookup: function(z) {
        var G, P = z.htmlTag || (typeof document < "u" ? document.documentElement : null);
        return P && typeof P.getAttribute == "function" && (G = P.getAttribute("lang")), G;
      } }, bt = { name: "path", lookup: function(z) {
        var G;
        if (typeof window < "u") {
          var P = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (P instanceof Array) if (typeof z.lookupFromPathIndex == "number") {
            if (typeof P[z.lookupFromPathIndex] != "string") return;
            G = P[z.lookupFromPathIndex].replace("/", "");
          } else G = P[0].replace("/", "");
        }
        return G;
      } }, It = { name: "subdomain", lookup: function(z) {
        var G;
        if (typeof window < "u") {
          var P = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
          P instanceof Array && (G = typeof z.lookupFromSubdomainIndex == "number" ? P[z.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : P[0].replace("http://", "").replace("https://", "").replace(".", ""));
        }
        return G;
      } }, Bt = function() {
        function z(G) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(v.a)(this, z), this.type = "languageDetector", this.detectors = {}, this.init(G, P);
        }
        return Object(h.a)(z, [{ key: "init", value: function(G) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          this.services = G, this.options = I(P, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = f, this.addDetector(W), this.addDetector(it), this.addDetector(_), this.addDetector(ot), this.addDetector(F), this.addDetector(yt), this.addDetector(bt), this.addDetector(It);
        } }, { key: "addDetector", value: function(G) {
          this.detectors[G.name] = G;
        } }, { key: "detect", value: function(G) {
          var P = this;
          G || (G = this.options.order);
          var f = [];
          return G.forEach(function(A) {
            if (P.detectors[A]) {
              var M = P.detectors[A].lookup(P.options);
              M && typeof M == "string" && (M = [M]), M && (f = f.concat(M));
            }
          }), this.services.languageUtils.getBestMatchFromCodes ? f : f.length > 0 ? f[0] : null;
        } }, { key: "cacheUserLanguage", value: function(G, P) {
          var f = this;
          P || (P = this.options.caches), P && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(G) > -1 || P.forEach(function(A) {
            f.detectors[A] && f.detectors[A].cacheUserLanguage(G, f.options);
          }));
        } }]), z;
      }();
      Bt.type = "languageDetector", K.default = Bt;
    }, function(Z, K, O) {
      O.r(K), O.d(K, "Desktop", function() {
        return me;
      });
      var v = O(0);
      const h = Object(v.createLogger)("agentx-js-api"), m = (mt, a) => ({ info: (...c) => mt.info(a, ...c), warn: (...c) => mt.warn(a, ...c), error: (...c) => mt.error(a, ...c) });
      class k {
        constructor(a) {
          this.logger = a.logger;
        }
        check(a) {
          return a ? !!a.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."), !1) : (this.logger.error("SERVICE is not defined..."), !1);
        }
      }
      const j = (mt) => new k(mt);
      var I = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      const D = { rps: 120, tag: "jsapi" }, J = { rps: 0, tag: "jsapi" }, p = { tag: "jsapi" }, H = (mt) => mt.actionsChannels.createSource("fireGeneralSilentNotification/Req", D), W = (mt) => mt.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", J), it = (mt) => mt.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", J), B = (mt) => mt.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", J), X = (mt) => mt.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", J), _ = (mt) => mt.actionsChannels.createSource("addCustomTask", D), at = (mt) => mt.actionsChannels.createSource("getToken/Req", J), lt = (mt) => mt.actionsChannels.createDestination("getToken/Res", p), ot = (mt) => mt.actionsChannels.createSource("getTaskMap/Req", J), F = (mt) => mt.actionsChannels.createDestination("getTaskMap/Res", p), yt = (mt) => mt.actionsChannels.createSource("getMediaTypeQueue/Req", J), bt = (mt) => mt.actionsChannels.createDestination("getMediaTypeQueue/Res", p), It = (mt) => mt.actionsChannels.createSource("getIdleCodes/Req", J), Bt = (mt) => mt.actionsChannels.createDestination("getIdleCodes/Res", p), z = (mt) => mt.actionsChannels.createSource("getWrapUpCodes/Req", J), G = (mt) => mt.actionsChannels.createDestination("getWrapUpCodes/Res", p);
      class P {
        constructor(a) {
          this.lastReqTs = Date.now(), this.lastReqN = 0, this.toggleMiximizeRestore = (c) => {
            var V;
            if (c && c.target) {
              const gt = (V = this.getClosestElement(c.target, ".dynamic-widget-wrapper")) === null || V === void 0 ? void 0 : V.id;
              if (gt) {
                const dt = new CustomEvent("toggle-maximize-restore", { detail: { widgetId: gt } });
                window.dispatchEvent(dt), h.info("Dispatching toggle-maximize-restore event for widgetId:", gt);
              }
            }
          }, this.toggleVoiceInteractionPanel = () => {
            window.dispatchEvent(new CustomEvent("toggle-voice-interaction-panel")), h.info("Dispatching toggl-voice-interaction-panel");
          }, this.toggleMuteUnmuteWebRtcCall = () => {
            const c = new CustomEvent("ax-web-call-mute-unmute", {});
            window.dispatchEvent(c), h.info("Dispatching ax-web-call-mute-unmute event");
          }, this.declineWebRtcCall = () => {
            const c = new CustomEvent("ax-web-call-decline", {});
            window.dispatchEvent(c), h.info("Dispatching ax-web-call-decline event");
          }, this.acceptWebRtcCall = () => {
            const c = new CustomEvent("ax-web-call-answer", {});
            window.dispatchEvent(c), h.info("Dispatching ax-web-call-answer event");
          }, this.logger = a.logger, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        getNextReqId() {
          const a = Date.now();
          return this.lastReqTs !== a ? (this.lastReqTs = a, this.lastReqN = 0) : this.lastReqN++, `${this.lastReqTs}_${this.lastReqN}`;
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.sourceActionsChannels = { fireGeneralSilentNotification: H(this.SERVICE), fireGeneralAutoDismissNotification: W(this.SERVICE), fireGeneralAcknowledgeNotification: B(this.SERVICE), addCustomTask: _(this.SERVICE), getToken: at(this.SERVICE), getTaskMap: ot(this.SERVICE), getMediaTypeQueue: yt(this.SERVICE), getIdleCodes: It(this.SERVICE), getWrapUpCodes: z(this.SERVICE) }, this.destinationActionsChannels = { fireGeneralAutoDismissNotification: it(this.SERVICE), fireGeneralAcknowledgeNotification: X(this.SERVICE), getToken: lt(this.SERVICE), getTaskMap: F(this.SERVICE), getMediaTypeQueue: bt(this.SERVICE), getIdleCodes: Bt(this.SERVICE), getWrapUpCodes: G(this.SERVICE) }, this.logger.info("Inited"));
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        fireGeneralSilentNotification(...a) {
          this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...a);
        }
        fireGeneralAutoDismissNotification(...a) {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((c) => {
              const V = this.getNextReqId(), gt = ({ args: [dt, Ct, Lt, xt] }) => {
                xt === V && (Lt !== v.Notifications.ItemMeta.Mode.AutoDismiss && Lt !== v.Notifications.ItemMeta.Mode.Silent || dt === v.Notifications.ItemMeta.Status.Deactivated && (c([dt, Ct, Lt]), this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(gt)));
              };
              this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(gt), this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...a);
            });
          });
        }
        fireGeneralAcknowledgeNotification(...a) {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((c) => {
              const V = this.getNextReqId(), gt = ({ args: [dt, Ct, Lt, xt] }) => {
                xt === V && (Lt !== v.Notifications.ItemMeta.Mode.Acknowledge && Lt !== v.Notifications.ItemMeta.Mode.Silent || dt === v.Notifications.ItemMeta.Status.Deactivated && (c([dt, Ct, Lt]), this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(gt)));
              };
              this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(gt), this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...a);
            });
          });
        }
        addCustomTask(...a) {
          this.checkService() && this.sourceActionsChannels.addCustomTask.send(...a);
        }
        getTaskMap() {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((a) => {
              const c = this.getNextReqId(), V = ({ args: [gt, dt] }) => {
                dt === c && (a(gt), this.destinationActionsChannels.getTaskMap.removeListener(V));
              };
              this.destinationActionsChannels.getTaskMap.addListener(V), this.sourceActionsChannels.getTaskMap.send(c);
            });
          });
        }
        getMediaTypeQueue(a) {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((c) => {
              const V = this.getNextReqId(), gt = ({ args: [dt, Ct] }) => {
                Ct === V && (c(dt), this.destinationActionsChannels.getMediaTypeQueue.removeListener(gt));
              };
              this.destinationActionsChannels.getMediaTypeQueue.addListener(gt), this.sourceActionsChannels.getMediaTypeQueue.send(a, V);
            });
          });
        }
        getToken() {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((a) => {
              const c = this.getNextReqId(), V = ({ args: [gt, dt] }) => {
                dt === c && (a(gt), this.destinationActionsChannels.getToken.removeListener(V));
              };
              this.destinationActionsChannels.getToken.addListener(V), this.sourceActionsChannels.getToken.send(c);
            });
          });
        }
        getIdleCodes() {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((a) => {
              const c = this.getNextReqId(), V = ({ args: [gt, dt] }) => {
                dt === c && (a(gt), this.destinationActionsChannels.getIdleCodes.removeListener(V));
              };
              this.destinationActionsChannels.getIdleCodes.addListener(V), this.sourceActionsChannels.getIdleCodes.send(c);
            });
          });
        }
        getWrapUpCodes() {
          return I(this, void 0, void 0, function* () {
            if (this.checkService()) return yield new Promise((a) => {
              const c = this.getNextReqId(), V = ({ args: [gt, dt] }) => {
                dt === c && (a(gt), this.destinationActionsChannels.getWrapUpCodes.removeListener(V));
              };
              this.destinationActionsChannels.getWrapUpCodes.addListener(V), this.sourceActionsChannels.getWrapUpCodes.send(c);
            });
          });
        }
        getClosestElement(a, c) {
          return a && a !== document && a !== window ? a instanceof ShadowRoot ? this.getClosestElement(a.host, c) : a instanceof HTMLElement && a.matches(c) ? a : this.getClosestElement(a.parentNode, c) : null;
        }
      }
      const f = m(h, "[Actions JSAPI] =>");
      class A {
        constructor(a) {
          this.isInited = !1, this.listeners = /* @__PURE__ */ new Map(), this.listenersOnce = /* @__PURE__ */ new Map(), this.logger = a.logger;
        }
        init(a) {
          this.aqmServiceEntity = a.aqmServiceEntity, this.aqmServiceEntityString = a.aqmServiceEntityString, this.isInited = !0;
        }
        cleanup() {
          this.removeAllEventListeners(), this.aqmServiceEntity = void 0, this.aqmServiceEntityString = void 0, this.isInited = !1;
        }
        _addEventListener(a, c, V) {
          var gt, dt, Ct;
          const Lt = V ? "listenersOnce" : "listeners";
          this[Lt].has(a) || this[Lt].set(a, /* @__PURE__ */ new Map());
          const xt = this[Lt].get(a), ft = V ? "listenOnce" : "listen", ut = (jt) => {
            let te = null;
            return V && (te = this.aqmServiceEntity[a].listenOnce(() => this.removeOnceEventListener(a, c))), () => {
              var ke;
              if (jt) {
                V ? (jt.stopListenOnce(), te && te.stopListenOnce()) : jt.stopListen();
                const se = [];
                se.push(`UnBound "${a}"`), V && se.push("Once"), this.aqmServiceEntityString && se.push(`from "${this.aqmServiceEntityString}"`), (ke = this.logger) === null || ke === void 0 || ke.info(se.join(" "));
              }
            };
          };
          if (this.aqmServiceEntity) if (a in this.aqmServiceEntity && ft in this.aqmServiceEntity[a]) {
            const jt = this.aqmServiceEntity[a][ft](c);
            xt.set(c, ut(jt));
            const te = [];
            te.push(`Bound "${a}"`), V && te.push("Once"), this.aqmServiceEntityString && te.push(`to "${this.aqmServiceEntityString}"`), (gt = this.logger) === null || gt === void 0 || gt.info(te.join(" "));
          } else (dt = this.logger) === null || dt === void 0 || dt.warn(`EventName "${a}" is not recognized, so won't be subscribed...`);
          else (Ct = this.logger) === null || Ct === void 0 || Ct.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`);
        }
        _removeEventListener(a, c, V) {
          const gt = V ? "listenersOnce" : "listeners";
          if (this[gt].has(a)) {
            const dt = this[gt].get(a);
            dt && (dt.has(c) && (dt.get(c)(), dt.delete(c)), dt.size < 1 && this[gt].delete(a));
          }
        }
        addEventListener(a, c) {
          this._addEventListener(a, c, !1);
        }
        addOnceEventListener(a, c) {
          this._addEventListener(a, c, !0);
        }
        removeEventListener(a, c) {
          this._removeEventListener(a, c, !1);
        }
        removeOnceEventListener(a, c) {
          this._removeEventListener(a, c, !0);
        }
        removeAllEventListeners() {
          ["listeners", "listenersOnce"].forEach((a) => {
            this[a].forEach((c, V) => {
              c.forEach((gt, dt) => gt()), c.clear();
            }), this[a].clear();
          });
        }
      }
      const M = (mt) => new A(mt);
      var vt = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class wt {
        constructor(a) {
          this.logger = a.logger, this.aqmEvents = a.aqmEvents, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.contact, aqmServiceEntityString: "SERVICE.aqm.contact" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        sendDtmf(a) {
          this.checkService() && this.SERVICE.webCalling.sendDTMF(a);
        }
        accept(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.accept(a);
          });
        }
        consultAccept(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.consultAccept(a);
          });
        }
        buddyAgents(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.buddyAgents(a);
          });
        }
        end(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.end(a);
          });
        }
        consultEnd(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.consultEnd(a);
          });
        }
        cancelCtq(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.cancelCtq(a);
          });
        }
        wrapup(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.wrapup(a);
          });
        }
        vteamTransfer(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.vteamTransfer(a);
          });
        }
        blindTransfer(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.blindTransfer(a);
          });
        }
        hold(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.hold(a);
          });
        }
        unHold(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.unHold(a);
          });
        }
        consult(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.consult(a);
          });
        }
        consultConference(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.consultConference(a);
          });
        }
        decline(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.decline(a);
          });
        }
        consultTransfer(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.consultTransfer(a);
          });
        }
        vteamList(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.vteamList(a);
          });
        }
        pauseRecording(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.pauseRecording(a);
          });
        }
        resumeRecording(a) {
          var c;
          return vt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.contact.resumeRecording(a);
          });
        }
        addEventListener(a, c) {
          this.checkService() && this.aqmEvents.addEventListener(a, c);
        }
        addOnceEventListener(a, c) {
          this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
        }
        removeEventListener(a, c) {
          this.aqmEvents.removeEventListener(a, c);
        }
        removeOnceEventListener(a, c) {
          this.aqmEvents.removeOnceEventListener(a, c);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const Et = m(h, "[AgentContact JSAPI] =>"), Mt = m(Et, "[AqmServiceEvents: Contact] => ");
      var Y = O(6), Q = O.n(Y), rt = O(11), et = O.n(rt), Gt = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      const Qt = { agentName: void 0, agentProfileID: void 0, agentSessionId: void 0, idleCode: void 0, teamId: void 0, teamName: void 0, dn: void 0, status: void 0, subStatus: void 0, idleCodes: void 0, wrapupCodes: void 0, outDialRegex: void 0, isOutboundEnabledForTenant: void 0, isOutboundEnabledForAgent: void 0, isEndCallEnabled: void 0, isEndConsultEnabled: void 0, allowConsultToQueue: void 0, isAdhocDialingEnabled: void 0, isAgentAvailableAfterOutdial: void 0, isCampaignManagementEnabled: void 0, agentPersonalStatsEnabled: void 0 };
      class Xt {
        constructor(a) {
          this.emitter = Q()(), this.listeners = /* @__PURE__ */ new Set(), this.teams = [], this.idleCodes = {}, this.latestData = Object.assign({}, Qt), this.logger = a.logger, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        emit(a, ...c) {
          this.emitter.emit(a, ...c);
        }
        update(a) {
          const c = Object.keys(a).reduce((V, gt) => {
            const dt = a[gt], Ct = this.latestData[gt];
            return JSON.stringify(dt) !== JSON.stringify(Ct) && V.push({ name: gt, value: dt, oldValue: Ct }), V;
          }, []);
          c.length && (c.forEach((V) => this.latestData[V.name] = V.value), this.emit("updated", c));
        }
        static getOutdialRegex(a) {
          if (a && a.dialPlanEntity) {
            const c = a.dialPlanEntity.find((V) => V.name === "Any Format");
            if (c) return c.regex;
          }
          return "";
        }
        static findTeamName(a, c) {
          const V = a.find((gt) => gt.teamId === c);
          return (V == null ? void 0 : V.teamName) || "";
        }
        init(a) {
          return Gt(this, void 0, void 0, function* () {
            a && (this.SERVICE = a), this.checkService() && (yield this.fetchLatestData(), this.subscribeSelfDataEvents(), this.logger.info("Inited"));
          });
        }
        cleanup() {
          this.unsubscribeSelfDataEvents(), this.removeAllEventListeners(), this.SERVICE = void 0, this.update(Object.assign({}, Qt)), this.logger.info("Cleaned");
        }
        fetchLatestData() {
          var a, c, V, gt, dt, Ct;
          return Gt(this, void 0, void 0, function* () {
            const Lt = !((a = this.SERVICE) === null || a === void 0) && a.conf.profile ? (c = this.SERVICE) === null || c === void 0 ? void 0 : c.conf.profile : yield (V = this.SERVICE) === null || V === void 0 ? void 0 : V.conf.fetchProfile();
            if (Lt) {
              const { teams: xt, agentName: ft, agentProfileID: ut, defaultDn: jt, agentSubStatus: te, agentStatus: ke, idleCodes: se, wrapupCodes: ye, dialPlan: C, isOutboundEnabledForTenant: ct, isOutboundEnabledForAgent: pt, isAdhocDialingEnabled: At, isEndCallEnabled: Vt, isEndConsultEnabled: Jt, allowConsultToQueue: _t, isAgentAvailableAfterOutdial: Nt, isCampaignManagementEnabled: ie, agentPersonalStatsEnabled: qt } = Lt;
              let { idleCode: Yt } = Lt;
              const ee = jt;
              let Ce = ke, Oe = te;
              this.teams = xt, se.forEach((Ue) => {
                this.idleCodes[Ue.id] = { id: Ue.id, name: Ue.name };
              });
              const Kt = yield (gt = this.SERVICE) === null || gt === void 0 ? void 0 : gt.aqm.agent.reload();
              Kt != null && Kt.data && (Yt = Kt.data.auxCodeId != "0" ? this.idleCodes[Kt.data.auxCodeId] : void 0, Ce = (dt = Kt == null ? void 0 : Kt.data) === null || dt === void 0 ? void 0 : dt.status, Oe = (Ct = Kt == null ? void 0 : Kt.data) === null || Ct === void 0 ? void 0 : Ct.subStatus);
              const qe = Xt.getOutdialRegex(C);
              this.update({ agentName: ft, agentProfileID: ut, dn: ee, status: Ce, subStatus: Oe, idleCode: Yt, idleCodes: se, wrapupCodes: ye, outDialRegex: qe, isOutboundEnabledForTenant: ct, isOutboundEnabledForAgent: pt, isAdhocDialingEnabled: At, isEndCallEnabled: Vt, isEndConsultEnabled: Jt, allowConsultToQueue: _t, isAgentAvailableAfterOutdial: Nt, isCampaignManagementEnabled: ie, agentPersonalStatsEnabled: qt });
            }
          });
        }
        subscribeSelfDataEvents() {
          var a, c, V, gt;
          if (this.checkService()) {
            {
              const dt = (a = this.SERVICE) === null || a === void 0 ? void 0 : a.aqm.agent.eAgentReloginSuccess.listen(({ data: { agentSessionId: Ct = "", teamId: Lt = "", dn: xt = "", status: ft = "", subStatus: ut = "", auxCodeId: jt = "" } }) => {
                const te = Xt.findTeamName(this.teams, Lt);
                this.update({ agentSessionId: Ct, teamId: Lt, teamName: te, dn: xt, status: ft, subStatus: ut, idleCode: this.idleCodes[jt] });
              });
              this.listeners.add(() => dt == null ? void 0 : dt.stopListen());
            }
            {
              const dt = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.eAgentStationLoginSuccess.listen(({ data: { agentSessionId: Ct = "", teamId: Lt = "", status: xt = "", subStatus: ft = "", auxCodeId: ut = "" } }) => {
                const jt = Xt.findTeamName(this.teams, Lt);
                this.update({ agentSessionId: Ct, teamId: Lt, teamName: jt, status: xt, subStatus: ft, idleCode: this.idleCodes[ut] });
              });
              this.listeners.add(() => dt == null ? void 0 : dt.stopListen());
            }
            {
              const dt = (V = this.SERVICE) === null || V === void 0 ? void 0 : V.aqm.agent.eAgentStateChangeSuccess.listen(({ data: { agentSessionId: Ct = "", status: Lt = "", subStatus: xt = "", auxCodeId: ft = "" } }) => {
                this.update({ agentSessionId: Ct, status: Lt, subStatus: xt, idleCode: this.idleCodes[ft] });
              });
              this.listeners.add(() => dt == null ? void 0 : dt.stopListen());
            }
            {
              const dt = (gt = this.SERVICE) === null || gt === void 0 ? void 0 : gt.aqm.agent.eAgentDNRegistered.listen(({ data: { dn: Ct = "" } }) => {
                this.update({ dn: Ct });
              });
              this.listeners.add(() => dt == null ? void 0 : dt.stopListen());
            }
          }
        }
        unsubscribeSelfDataEvents() {
          this.listeners.forEach((a) => a()), this.listeners.clear();
        }
        stateChange(a) {
          var c;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.stateChange({ data: a });
          });
        }
        mockOutdialAniList() {
          var a;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.aqm.agent.mockOutdialAniList({ p: null });
          });
        }
        fetchAddressBooks() {
          var a;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.aqm.agent.fetchAddressBooks({ p: null });
          });
        }
        changeAgentState(a, c) {
          var V;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = this.SERVICE) === null || V === void 0 ? void 0 : V.aqm.supervisor.changeAgentState({ orgId: a, data: c });
          });
        }
        fetchAgentIdleCodes(a, c) {
          var V;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return yield (V = this.SERVICE) === null || V === void 0 ? void 0 : V.abs.fetchAgentIdleCodes({ orgId: a, agentId: c });
          });
        }
        fetchOrganizationIdleCodes(a) {
          var c;
          return Gt(this, void 0, void 0, function* () {
            if (this.checkService()) return yield (c = this.SERVICE) === null || c === void 0 ? void 0 : c.abs.fetchIdleCodes({ orgId: a, accessType: "ALL" });
          });
        }
        addEventListener(a, c) {
          this.checkService() && this.emitter.on(a, c);
        }
        removeEventListener(a, c) {
          this.checkService() && this.emitter.off(a, c);
        }
        removeAllEventListeners() {
          et()(this.emitter);
        }
      }
      const re = m(h, "[AgentInfo JSAPI] =>");
      var he = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class y {
        constructor(a) {
          this.emitter = Q()(), this.logger = a.logger, this.agentxSERVICE = a.SERVICE;
        }
        waitUntil(a) {
          return he(this, void 0, void 0, function* () {
            typeof a == "function" && (yield new Promise((c) => setTimeout(c, 1e3 / 30)), !a() && (yield this.waitUntil(a)));
          });
        }
        checkService(a) {
          return he(this, void 0, void 0, function* () {
            a ? (a.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."), yield this.waitUntil(() => a.isInited)), this.logger.info("SERVICE is inited. Continuing..."), this.emit("inited")) : this.logger.error("SERVICE is not defiend...");
          });
        }
        emit(a, ...c) {
          this.emitter.emit(a, ...c);
        }
        init() {
          return he(this, void 0, void 0, function* () {
            this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE) : this.logger.error("SERVICE is not defined...");
          });
        }
        cleanup() {
          this.agentxSERVICE = void 0, this.emit("cleaned"), this.logger.info("Cleaned");
        }
        get clientLocale() {
          return window.navigator.languages != null ? window.navigator.languages[0] : window.navigator.language;
        }
        addEventListener(a, c) {
          this.emitter.on(a, c);
        }
        removeEventListener(a, c) {
          this.emitter.off(a, c);
        }
      }
      const u = m(h, "[Config JSAPI] =>");
      var r = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class s {
        constructor(a) {
          this.logger = a.logger, this.aqmEvents = a.aqmEvents, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.dialer, aqmServiceEntityString: "SERVICE.aqm.dialer" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        startOutdial(a) {
          var c;
          return r(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.dialer.startOutdial(a);
          });
        }
        updateCadVariables(a) {
          var c;
          return r(this, void 0, void 0, function* () {
            if (this.checkService()) return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.dialer.updateCadVariables(a);
          });
        }
        addEventListener(a, c) {
          this.checkService() && this.aqmEvents.addEventListener(a, c);
        }
        addOnceEventListener(a, c) {
          this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
        }
        removeEventListener(a, c) {
          this.aqmEvents.removeEventListener(a, c);
        }
        removeOnceEventListener(a, c) {
          this.aqmEvents.removeOnceEventListener(a, c);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const l = m(h, "[Dialer JSAPI] =>"), S = m(l, "[AqmServiceEvents: Dialer] =>");
      class d {
        constructor(a) {
          this.logger = a.logger, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && this.logger.info("Inited");
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        createInstance(a) {
          return v.I18N.createService(a);
        }
        createMixin(a) {
          return v.I18N.createMixin(a);
        }
        get DEFAULT_INIT_OPTIONS() {
          var a;
          if (this.checkService()) return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.i18n.DEFAULT_INIT_OPTIONS;
        }
        getMergedInitOptions(...a) {
          return v.I18N.mergeServiceInitOptions(...a);
        }
      }
      const L = m(h, "[I18N JSAPI] =>");
      class b {
        constructor(a) {
          this.clientLoggers = /* @__PURE__ */ new Map(), this.logger = a.logger;
        }
        createLogger(a) {
          const c = Object(v.createLogger)(a);
          return this.clientLoggers.set(a, c), this.logger.info(`Client logger created: "${a}"`), c;
        }
        cleanupLogs(a) {
          this.clientLoggers.has(a) && v.Logger.POOL.cleanupPrefixedLogs(a);
        }
        browserDownloadLogsJson(a) {
          this.clientLoggers.has(a) && v.Logger.POOL.browserDownloadPrefixedLogsJson(a);
        }
        browserDownloadLogsText(a) {
          this.clientLoggers.has(a) && v.Logger.POOL.browserDownloadPrefixedLogsText(a);
        }
        getLogsCollection(a) {
          if (this.clientLoggers.has(a)) return v.Logger.POOL.getPrefixedLogsCollection(a);
        }
        getLogsJsonUrl(a) {
          if (this.clientLoggers.has(a)) return v.Logger.POOL.getPrefixedLogsJsonUrl(a);
        }
        getLogsTextUrl(a) {
          if (this.clientLoggers.has(a)) return v.Logger.POOL.getPrefixedLogsTextUrl(a);
        }
      }
      const E = m(h, "[Logger JSAPI] =>");
      class x {
        constructor(a) {
          this.logger = a.logger, this.aqmEvents = a.aqmEvents, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.screenpop, aqmServiceEntityString: "SERVICE.aqm.screenpop" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        addEventListener(a, c) {
          this.checkService() && this.aqmEvents.addEventListener(a, c);
        }
        addOnceEventListener(a, c) {
          this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
        }
        removeEventListener(a, c) {
          this.aqmEvents.removeEventListener(a, c);
        }
        removeOnceEventListener(a, c) {
          this.aqmEvents.removeOnceEventListener(a, c);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const T = m(h, "[ScreenPop JSAPI] =>"), N = m(T, "[AqmServiceEvents: ScreenPop] =>");
      class U {
        constructor(a) {
          this.logger = a.logger, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && this.logger.info("Inited");
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        listenKeyPress(...a) {
          var c;
          this.checkService() && ((c = this.SERVICE) === null || c === void 0 || c.shortcut.event.listenKeyPress(...a));
        }
        listenKeyConflict(...a) {
          var c;
          this.checkService() && ((c = this.SERVICE) === null || c === void 0 || c.shortcut.event.listenKeyConflict(...a));
        }
        listenConflictResolved(...a) {
          var c;
          this.checkService() && ((c = this.SERVICE) === null || c === void 0 || c.shortcut.event.listenConflictResolved(...a));
        }
        register(...a) {
          var c;
          this.checkService() && ((c = this.SERVICE) === null || c === void 0 || c.shortcut.register(...a));
        }
        unregisterKeys(...a) {
          var c;
          this.checkService() && ((c = this.SERVICE) === null || c === void 0 || c.shortcut.unregisterKeys(...a));
        }
        getRegisteredKeys() {
          var a;
          if (this.checkService()) return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.shortcut.getRegisteredKeys();
        }
        get DEFAULT_SHORTCUT_KEYS() {
          var a;
          return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.shortcut.DEFAULT_SHORTCUT_KEYS;
        }
        get MODIFIERS() {
          var a;
          return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.shortcut.MODIFIERS;
        }
        get REGISTERED_KEYS() {
          var a;
          return (a = this.SERVICE) === null || a === void 0 ? void 0 : a.shortcut.REGISTERED_KEYS;
        }
      }
      const $ = m(h, "[ShortcutKey JSAPI] =>");
      var tt = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class St {
        constructor(a) {
          this.emitter = Q()(), this.logger = a.logger;
        }
        waitUntil(a) {
          return tt(this, void 0, void 0, function* () {
            typeof a == "function" && (yield new Promise((c) => setTimeout(c, 1e3 / 30)), !a() && (yield this.waitUntil(a)));
          });
        }
        checkService() {
          var a, c, V, gt, dt;
          return tt(this, void 0, void 0, function* () {
            window.wxcc && (!((a = window.wxcc) === null || a === void 0) && a.rtdwc) ? (!((V = (c = window.wxcc) === null || c === void 0 ? void 0 : c.rtdwc) === null || V === void 0) && V.error && (this.logger.error("RTDWC initialization failed. Awaiting Websocket connection to establish", (dt = (gt = window.wxcc) === null || gt === void 0 ? void 0 : gt.rtdwc) === null || dt === void 0 ? void 0 : dt.error), yield this.waitUntil(() => {
              var Ct, Lt;
              return !(!((Lt = (Ct = window.wxcc) === null || Ct === void 0 ? void 0 : Ct.rtdwc) === null || Lt === void 0) && Lt.error);
            })), this.logger.info("Websocket connection established successfully. Continue to subscribe...")) : this.logger.error("issue in loading rtdwc");
          });
        }
        init() {
          return tt(this, void 0, void 0, function* () {
            yield this.checkService(), this.logger.info("rtdwc initialized");
          });
        }
        subscribe({ datasetName: a, update: c, error: V }) {
          var gt, dt;
          return tt(this, void 0, void 0, function* () {
            return yield this.checkService(), yield (dt = (gt = window.wxcc) === null || gt === void 0 ? void 0 : gt.rtdwc) === null || dt === void 0 ? void 0 : dt.subscribe({ datasetName: a, update: c, error: V });
          });
        }
      }
      const Pt = m(h, "[RTDWC JSAPI] =>");
      var Ht = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class le {
        constructor(a) {
          this.logger = a.logger, this.aqmEvents = a.aqmEvents, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.supervisor, aqmServiceEntityString: "SERVICE.aqm.supervisor" }), this.logger.info("[JSAPI] Monitoring Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        startMonitoring(a) {
          var c, V;
          return Ht(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.supervisor) === null || V === void 0 ? void 0 : V.startMonitoring(a);
          });
        }
        endMonitoring(a) {
          var c, V;
          return Ht(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.supervisor) === null || V === void 0 ? void 0 : V.endMonitoring(a);
          });
        }
        holdMonitoring(a) {
          var c, V;
          return Ht(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.supervisor) === null || V === void 0 ? void 0 : V.holdMonitoring(a);
          });
        }
        unHoldMonitoring(a) {
          var c, V;
          return Ht(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.supervisor) === null || V === void 0 ? void 0 : V.unHoldMonitoring(a);
          });
        }
        bargeIn(a) {
          var c, V;
          return Ht(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.supervisor) === null || V === void 0 ? void 0 : V.bargeIn(a);
          });
        }
        addEventListener(a, c) {
          this.checkService() && this.aqmEvents.addEventListener(a, c);
        }
        addOnceEventListener(a, c) {
          this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
        }
        removeEventListener(a, c) {
          this.aqmEvents.removeEventListener(a, c);
        }
        removeOnceEventListener(a, c) {
          this.aqmEvents.removeOnceEventListener(a, c);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const de = m(h, "[Call Monitoring JSAPI] =>"), we = m(de, "[AqmServiceEvents: Call Monitoring] =>");
      var ge = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class Me {
        constructor(a) {
          this.logger = a.logger, this.aqmEvents = a.aqmEvents, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.agent, aqmServiceEntityString: "SERVICE.aqm.agent" }), this.logger.info("[JSAPI] Logout Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        desktopLogout(a) {
          var c, V;
          return ge(this, void 0, void 0, function* () {
            if (!this.checkService()) return;
            const gt = yield me.actions.getTaskMap();
            if ((gt == null ? void 0 : gt.size) !== 0) throw new Error("You cannot sign out now because you have active conversations. Complete them and try again.");
            return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent) === null || V === void 0 ? void 0 : V.logout(a);
          });
        }
        addEventListener(a, c) {
          this.checkService() && this.aqmEvents.addEventListener(a, c);
        }
        addOnceEventListener(a, c) {
          this.checkService() && this.aqmEvents.addOnceEventListener(a, c);
        }
        removeEventListener(a, c) {
          this.aqmEvents.removeEventListener(a, c);
        }
        removeOnceEventListener(a, c) {
          this.aqmEvents.removeOnceEventListener(a, c);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const pe = m(h, "[Station Logout JSAPI] =>"), De = m(pe, "[AqmServiceEvents: Call Monitoring] =>");
      var ve = function(mt, a, c, V) {
        return new (c || (c = Promise))(function(gt, dt) {
          function Ct(ft) {
            try {
              xt(V.next(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function Lt(ft) {
            try {
              xt(V.throw(ft));
            } catch (ut) {
              dt(ut);
            }
          }
          function xt(ft) {
            var ut;
            ft.done ? gt(ft.value) : (ut = ft.value, ut instanceof c ? ut : new c(function(jt) {
              jt(ut);
            })).then(Ct, Lt);
          }
          xt((V = V.apply(mt, [])).next());
        });
      };
      class Le {
        constructor(a) {
          this.logger = a.logger, this.serviceChecker = a.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(a) {
          a && (this.SERVICE = a), this.checkService() && this.logger.info("[JSAPI] Initialized");
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        fetchTasks(a) {
          var c, V;
          return ve(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.qmw) === null || V === void 0 ? void 0 : V.fetchTasks(a);
          });
        }
        fetchCapture(a) {
          var c, V;
          return ve(this, void 0, void 0, function* () {
            if (this.checkService()) return (V = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.qmw) === null || V === void 0 ? void 0 : V.fetchCapture(a);
          });
        }
      }
      const zt = m(h, "[PI JSAPI] =>"), me = (() => {
        AGENTX_SERVICE ? h.info('Found global "AGENTX_SERVICE"!') : h.error('Missed global "AGENTX_SERVICE"...');
        const mt = (a = AGENTX_SERVICE, new y({ logger: u, SERVICE: a }));
        var a;
        const c = new b({ logger: E }), V = new U({ logger: $, serviceChecker: j({ logger: $ }) }), gt = new P({ logger: f, serviceChecker: j({ logger: f }) }), dt = new Xt({ logger: re, serviceChecker: j({ logger: re }) }), Ct = new wt({ logger: Et, serviceChecker: j({ logger: Et }), aqmEvents: M({ logger: Mt }) }), Lt = new s({ logger: l, aqmEvents: M({ logger: S }), serviceChecker: j({ logger: l }) }), xt = new le({ logger: de, aqmEvents: M({ logger: we }), serviceChecker: j({ logger: de }) }), ft = new x({ logger: T, aqmEvents: M({ logger: N }), serviceChecker: j({ logger: T }) }), ut = new Me({ logger: pe, aqmEvents: M({ logger: De }), serviceChecker: j({ logger: pe }) }), jt = new d({ logger: L, serviceChecker: j({ logger: L }) }), te = new St({ logger: Pt });
        te.init();
        const ke = new Le({ logger: zt, serviceChecker: j({ logger: zt }) });
        return mt.addEventListener("inited", () => {
          Ct.init(AGENTX_SERVICE), dt.init(AGENTX_SERVICE), Lt.init(AGENTX_SERVICE), xt.init(AGENTX_SERVICE), ft.init(AGENTX_SERVICE), ut.init(AGENTX_SERVICE), ke.init(AGENTX_SERVICE), V.init(AGENTX_SERVICE), gt.init(AGENTX_SERVICE), jt.init(AGENTX_SERVICE);
        }), mt.addEventListener("cleaned", () => {
          Ct.cleanup(), dt.cleanup(), Lt.cleanup(), xt.cleanup(), ft.cleanup(), ut.cleanup(), ke.cleanup(), V.cleanup(), jt.cleanup(), gt.cleanup();
        }), { config: mt, logger: c, monitoring: xt, shortcutKey: V, actions: gt, agentContact: Ct, agentStateInfo: dt, dialer: Lt, screenpop: ft, i18n: jt, rtdwc: te, postInteractions: ke, logout: ut };
      })();
    }, function(Z, K, O) {
      O.r(K), O.d(K, "v1", function() {
        return W;
      }), O.d(K, "v3", function() {
        return F;
      }), O.d(K, "v4", function() {
        return yt;
      }), O.d(K, "v5", function() {
        return Bt;
      });
      var v = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), h = new Uint8Array(16);
      function m() {
        if (!v) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return v(h);
      }
      for (var k = [], j = 0; j < 256; ++j) k[j] = (j + 256).toString(16).substr(1);
      var I, D, J = function(z, G) {
        var P = 0, f = k;
        return [f[z[P++]], f[z[P++]], f[z[P++]], f[z[P++]], "-", f[z[P++]], f[z[P++]], "-", f[z[P++]], f[z[P++]], "-", f[z[P++]], f[z[P++]], "-", f[z[P++]], f[z[P++]], f[z[P++]], f[z[P++]], f[z[P++]], f[z[P++]]].join("");
      }, p = 0, H = 0, W = function(z, G, P) {
        var f = G && P || 0, A = G || [], M = (z = z || {}).node || I, vt = z.clockseq !== void 0 ? z.clockseq : D;
        if (M == null || vt == null) {
          var wt = z.random || (z.rng || m)();
          M == null && (M = I = [1 | wt[0], wt[1], wt[2], wt[3], wt[4], wt[5]]), vt == null && (vt = D = 16383 & (wt[6] << 8 | wt[7]));
        }
        var Et = z.msecs !== void 0 ? z.msecs : (/* @__PURE__ */ new Date()).getTime(), Mt = z.nsecs !== void 0 ? z.nsecs : H + 1, Y = Et - p + (Mt - H) / 1e4;
        if (Y < 0 && z.clockseq === void 0 && (vt = vt + 1 & 16383), (Y < 0 || Et > p) && z.nsecs === void 0 && (Mt = 0), Mt >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        p = Et, H = Mt, D = vt;
        var Q = (1e4 * (268435455 & (Et += 122192928e5)) + Mt) % 4294967296;
        A[f++] = Q >>> 24 & 255, A[f++] = Q >>> 16 & 255, A[f++] = Q >>> 8 & 255, A[f++] = 255 & Q;
        var rt = Et / 4294967296 * 1e4 & 268435455;
        A[f++] = rt >>> 8 & 255, A[f++] = 255 & rt, A[f++] = rt >>> 24 & 15 | 16, A[f++] = rt >>> 16 & 255, A[f++] = vt >>> 8 | 128, A[f++] = 255 & vt;
        for (var et = 0; et < 6; ++et) A[f + et] = M[et];
        return G || J(A);
      }, it = function(z, G, P) {
        var f = function(A, M, vt, wt) {
          var Et = vt && wt || 0;
          if (typeof A == "string" && (A = function(Q) {
            Q = unescape(encodeURIComponent(Q));
            for (var rt = new Array(Q.length), et = 0; et < Q.length; et++) rt[et] = Q.charCodeAt(et);
            return rt;
          }(A)), typeof M == "string" && (M = function(Q) {
            var rt = [];
            return Q.replace(/[a-fA-F0-9]{2}/g, function(et) {
              rt.push(parseInt(et, 16));
            }), rt;
          }(M)), !Array.isArray(A)) throw TypeError("value must be an array of bytes");
          if (!Array.isArray(M) || M.length !== 16) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
          var Mt = P(M.concat(A));
          if (Mt[6] = 15 & Mt[6] | G, Mt[8] = 63 & Mt[8] | 128, vt) for (var Y = 0; Y < 16; ++Y) vt[Et + Y] = Mt[Y];
          return vt || J(Mt);
        };
        try {
          f.name = z;
        } catch {
        }
        return f.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", f.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", f;
      };
      function B(z, G) {
        var P = (65535 & z) + (65535 & G);
        return (z >> 16) + (G >> 16) + (P >> 16) << 16 | 65535 & P;
      }
      function X(z, G, P, f, A, M) {
        return B((vt = B(B(G, z), B(f, M))) << (wt = A) | vt >>> 32 - wt, P);
        var vt, wt;
      }
      function _(z, G, P, f, A, M, vt) {
        return X(G & P | ~G & f, z, G, A, M, vt);
      }
      function at(z, G, P, f, A, M, vt) {
        return X(G & f | P & ~f, z, G, A, M, vt);
      }
      function lt(z, G, P, f, A, M, vt) {
        return X(G ^ P ^ f, z, G, A, M, vt);
      }
      function ot(z, G, P, f, A, M, vt) {
        return X(P ^ (G | ~f), z, G, A, M, vt);
      }
      var F = it("v3", 48, function(z) {
        if (typeof z == "string") {
          var G = unescape(encodeURIComponent(z));
          z = new Array(G.length);
          for (var P = 0; P < G.length; P++) z[P] = G.charCodeAt(P);
        }
        return function(f) {
          var A, M, vt, wt = [], Et = 32 * f.length;
          for (A = 0; A < Et; A += 8) M = f[A >> 5] >>> A % 32 & 255, vt = parseInt("0123456789abcdef".charAt(M >>> 4 & 15) + "0123456789abcdef".charAt(15 & M), 16), wt.push(vt);
          return wt;
        }(function(f, A) {
          var M, vt, wt, Et, Mt;
          f[A >> 5] |= 128 << A % 32, f[14 + (A + 64 >>> 9 << 4)] = A;
          var Y = 1732584193, Q = -271733879, rt = -1732584194, et = 271733878;
          for (M = 0; M < f.length; M += 16) vt = Y, wt = Q, Et = rt, Mt = et, Y = _(Y, Q, rt, et, f[M], 7, -680876936), et = _(et, Y, Q, rt, f[M + 1], 12, -389564586), rt = _(rt, et, Y, Q, f[M + 2], 17, 606105819), Q = _(Q, rt, et, Y, f[M + 3], 22, -1044525330), Y = _(Y, Q, rt, et, f[M + 4], 7, -176418897), et = _(et, Y, Q, rt, f[M + 5], 12, 1200080426), rt = _(rt, et, Y, Q, f[M + 6], 17, -1473231341), Q = _(Q, rt, et, Y, f[M + 7], 22, -45705983), Y = _(Y, Q, rt, et, f[M + 8], 7, 1770035416), et = _(et, Y, Q, rt, f[M + 9], 12, -1958414417), rt = _(rt, et, Y, Q, f[M + 10], 17, -42063), Q = _(Q, rt, et, Y, f[M + 11], 22, -1990404162), Y = _(Y, Q, rt, et, f[M + 12], 7, 1804603682), et = _(et, Y, Q, rt, f[M + 13], 12, -40341101), rt = _(rt, et, Y, Q, f[M + 14], 17, -1502002290), Q = _(Q, rt, et, Y, f[M + 15], 22, 1236535329), Y = at(Y, Q, rt, et, f[M + 1], 5, -165796510), et = at(et, Y, Q, rt, f[M + 6], 9, -1069501632), rt = at(rt, et, Y, Q, f[M + 11], 14, 643717713), Q = at(Q, rt, et, Y, f[M], 20, -373897302), Y = at(Y, Q, rt, et, f[M + 5], 5, -701558691), et = at(et, Y, Q, rt, f[M + 10], 9, 38016083), rt = at(rt, et, Y, Q, f[M + 15], 14, -660478335), Q = at(Q, rt, et, Y, f[M + 4], 20, -405537848), Y = at(Y, Q, rt, et, f[M + 9], 5, 568446438), et = at(et, Y, Q, rt, f[M + 14], 9, -1019803690), rt = at(rt, et, Y, Q, f[M + 3], 14, -187363961), Q = at(Q, rt, et, Y, f[M + 8], 20, 1163531501), Y = at(Y, Q, rt, et, f[M + 13], 5, -1444681467), et = at(et, Y, Q, rt, f[M + 2], 9, -51403784), rt = at(rt, et, Y, Q, f[M + 7], 14, 1735328473), Q = at(Q, rt, et, Y, f[M + 12], 20, -1926607734), Y = lt(Y, Q, rt, et, f[M + 5], 4, -378558), et = lt(et, Y, Q, rt, f[M + 8], 11, -2022574463), rt = lt(rt, et, Y, Q, f[M + 11], 16, 1839030562), Q = lt(Q, rt, et, Y, f[M + 14], 23, -35309556), Y = lt(Y, Q, rt, et, f[M + 1], 4, -1530992060), et = lt(et, Y, Q, rt, f[M + 4], 11, 1272893353), rt = lt(rt, et, Y, Q, f[M + 7], 16, -155497632), Q = lt(Q, rt, et, Y, f[M + 10], 23, -1094730640), Y = lt(Y, Q, rt, et, f[M + 13], 4, 681279174), et = lt(et, Y, Q, rt, f[M], 11, -358537222), rt = lt(rt, et, Y, Q, f[M + 3], 16, -722521979), Q = lt(Q, rt, et, Y, f[M + 6], 23, 76029189), Y = lt(Y, Q, rt, et, f[M + 9], 4, -640364487), et = lt(et, Y, Q, rt, f[M + 12], 11, -421815835), rt = lt(rt, et, Y, Q, f[M + 15], 16, 530742520), Q = lt(Q, rt, et, Y, f[M + 2], 23, -995338651), Y = ot(Y, Q, rt, et, f[M], 6, -198630844), et = ot(et, Y, Q, rt, f[M + 7], 10, 1126891415), rt = ot(rt, et, Y, Q, f[M + 14], 15, -1416354905), Q = ot(Q, rt, et, Y, f[M + 5], 21, -57434055), Y = ot(Y, Q, rt, et, f[M + 12], 6, 1700485571), et = ot(et, Y, Q, rt, f[M + 3], 10, -1894986606), rt = ot(rt, et, Y, Q, f[M + 10], 15, -1051523), Q = ot(Q, rt, et, Y, f[M + 1], 21, -2054922799), Y = ot(Y, Q, rt, et, f[M + 8], 6, 1873313359), et = ot(et, Y, Q, rt, f[M + 15], 10, -30611744), rt = ot(rt, et, Y, Q, f[M + 6], 15, -1560198380), Q = ot(Q, rt, et, Y, f[M + 13], 21, 1309151649), Y = ot(Y, Q, rt, et, f[M + 4], 6, -145523070), et = ot(et, Y, Q, rt, f[M + 11], 10, -1120210379), rt = ot(rt, et, Y, Q, f[M + 2], 15, 718787259), Q = ot(Q, rt, et, Y, f[M + 9], 21, -343485551), Y = B(Y, vt), Q = B(Q, wt), rt = B(rt, Et), et = B(et, Mt);
          return [Y, Q, rt, et];
        }(function(f) {
          var A, M = [];
          for (M[(f.length >> 2) - 1] = void 0, A = 0; A < M.length; A += 1) M[A] = 0;
          var vt = 8 * f.length;
          for (A = 0; A < vt; A += 8) M[A >> 5] |= (255 & f[A / 8]) << A % 32;
          return M;
        }(z), 8 * z.length));
      }), yt = function(z, G, P) {
        var f = G && P || 0;
        typeof z == "string" && (G = z === "binary" ? new Array(16) : null, z = null);
        var A = (z = z || {}).random || (z.rng || m)();
        if (A[6] = 15 & A[6] | 64, A[8] = 63 & A[8] | 128, G) for (var M = 0; M < 16; ++M) G[f + M] = A[M];
        return G || J(A);
      };
      function bt(z, G, P, f) {
        switch (z) {
          case 0:
            return G & P ^ ~G & f;
          case 1:
            return G ^ P ^ f;
          case 2:
            return G & P ^ G & f ^ P & f;
          case 3:
            return G ^ P ^ f;
        }
      }
      function It(z, G) {
        return z << G | z >>> 32 - G;
      }
      var Bt = it("v5", 80, function(z) {
        var G = [1518500249, 1859775393, 2400959708, 3395469782], P = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof z == "string") {
          var f = unescape(encodeURIComponent(z));
          z = new Array(f.length);
          for (var A = 0; A < f.length; A++) z[A] = f.charCodeAt(A);
        }
        z.push(128);
        var M = z.length / 4 + 2, vt = Math.ceil(M / 16), wt = new Array(vt);
        for (A = 0; A < vt; A++) {
          wt[A] = new Array(16);
          for (var Et = 0; Et < 16; Et++) wt[A][Et] = z[64 * A + 4 * Et] << 24 | z[64 * A + 4 * Et + 1] << 16 | z[64 * A + 4 * Et + 2] << 8 | z[64 * A + 4 * Et + 3];
        }
        for (wt[vt - 1][14] = 8 * (z.length - 1) / Math.pow(2, 32), wt[vt - 1][14] = Math.floor(wt[vt - 1][14]), wt[vt - 1][15] = 8 * (z.length - 1) & 4294967295, A = 0; A < vt; A++) {
          for (var Mt = new Array(80), Y = 0; Y < 16; Y++) Mt[Y] = wt[A][Y];
          for (Y = 16; Y < 80; Y++) Mt[Y] = It(Mt[Y - 3] ^ Mt[Y - 8] ^ Mt[Y - 14] ^ Mt[Y - 16], 1);
          var Q = P[0], rt = P[1], et = P[2], Gt = P[3], Qt = P[4];
          for (Y = 0; Y < 80; Y++) {
            var Xt = Math.floor(Y / 20), re = It(Q, 5) + bt(Xt, rt, et, Gt) + Qt + G[Xt] + Mt[Y] >>> 0;
            Qt = Gt, Gt = et, et = It(rt, 30) >>> 0, rt = Q, Q = re;
          }
          P[0] = P[0] + Q >>> 0, P[1] = P[1] + rt >>> 0, P[2] = P[2] + et >>> 0, P[3] = P[3] + Gt >>> 0, P[4] = P[4] + Qt >>> 0;
        }
        return [P[0] >> 24 & 255, P[0] >> 16 & 255, P[0] >> 8 & 255, 255 & P[0], P[1] >> 24 & 255, P[1] >> 16 & 255, P[1] >> 8 & 255, 255 & P[1], P[2] >> 24 & 255, P[2] >> 16 & 255, P[2] >> 8 & 255, 255 & P[2], P[3] >> 24 & 255, P[3] >> 16 & 255, P[3] >> 8 & 255, 255 & P[3], P[4] >> 24 & 255, P[4] >> 16 & 255, P[4] >> 8 & 255, 255 & P[4]];
      });
    }, function(Z, K, O) {
      O.r(K);
      var v = O(2), h = O(8);
      function m(y, u, r) {
        return (u = Object(h.a)(u)) in y ? Object.defineProperty(y, u, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : y[u] = r, y;
      }
      function k(y) {
        for (var u = 1; u < arguments.length; u++) {
          var r = arguments[u] != null ? Object(arguments[u]) : {}, s = Object.keys(r);
          typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(r).filter(function(l) {
            return Object.getOwnPropertyDescriptor(r, l).enumerable;
          })), s.forEach(function(l) {
            m(y, l, r[l]);
          });
        }
        return y;
      }
      var j = O(3), I = O(4);
      function D(y) {
        if (y === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y;
      }
      function J(y, u) {
        if (u && (Object(v.a)(u) === "object" || typeof u == "function")) return u;
        if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return D(y);
      }
      function p(y) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
          return u.__proto__ || Object.getPrototypeOf(u);
        })(y);
      }
      function H(y, u) {
        return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
          return r.__proto__ = s, r;
        })(y, u);
      }
      function W(y, u) {
        if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(u && u.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), u && H(y, u);
      }
      var it = { type: "logger", log: function(y) {
        this.output("log", y);
      }, warn: function(y) {
        this.output("warn", y);
      }, error: function(y) {
        this.output("error", y);
      }, output: function(y, u) {
        console && console[y] && console[y].apply(console, u);
      } }, B = new (function() {
        function y(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(j.a)(this, y), this.init(u, r);
        }
        return Object(I.a)(y, [{ key: "init", value: function(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = r.prefix || "i18next:", this.logger = u || it, this.options = r, this.debug = r.debug;
        } }, { key: "setDebug", value: function(u) {
          this.debug = u;
        } }, { key: "log", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++) r[s] = arguments[s];
          return this.forward(r, "log", "", !0);
        } }, { key: "warn", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++) r[s] = arguments[s];
          return this.forward(r, "warn", "", !0);
        } }, { key: "error", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++) r[s] = arguments[s];
          return this.forward(r, "error", "");
        } }, { key: "deprecate", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++) r[s] = arguments[s];
          return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
        } }, { key: "forward", value: function(u, r, s, l) {
          return l && !this.debug ? null : (typeof u[0] == "string" && (u[0] = "".concat(s).concat(this.prefix, " ").concat(u[0])), this.logger[r](u));
        } }, { key: "create", value: function(u) {
          return new y(this.logger, k({}, { prefix: "".concat(this.prefix, ":").concat(u, ":") }, this.options));
        } }]), y;
      }())(), X = function() {
        function y() {
          Object(j.a)(this, y), this.observers = {};
        }
        return Object(I.a)(y, [{ key: "on", value: function(u, r) {
          var s = this;
          return u.split(" ").forEach(function(l) {
            s.observers[l] = s.observers[l] || [], s.observers[l].push(r);
          }), this;
        } }, { key: "off", value: function(u, r) {
          this.observers[u] && (r ? this.observers[u] = this.observers[u].filter(function(s) {
            return s !== r;
          }) : delete this.observers[u]);
        } }, { key: "emit", value: function(u) {
          for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) s[l - 1] = arguments[l];
          if (this.observers[u]) {
            var S = [].concat(this.observers[u]);
            S.forEach(function(L) {
              L.apply(void 0, s);
            });
          }
          if (this.observers["*"]) {
            var d = [].concat(this.observers["*"]);
            d.forEach(function(L) {
              L.apply(L, [u].concat(s));
            });
          }
        } }]), y;
      }();
      function _() {
        var y, u, r = new Promise(function(s, l) {
          y = s, u = l;
        });
        return r.resolve = y, r.reject = u, r;
      }
      function at(y) {
        return y == null ? "" : "" + y;
      }
      function lt(y, u, r) {
        y.forEach(function(s) {
          u[s] && (r[s] = u[s]);
        });
      }
      function ot(y, u, r) {
        function s(L) {
          return L && L.indexOf("###") > -1 ? L.replace(/###/g, ".") : L;
        }
        function l() {
          return !y || typeof y == "string";
        }
        for (var S = typeof u != "string" ? [].concat(u) : u.split("."); S.length > 1; ) {
          if (l()) return {};
          var d = s(S.shift());
          !y[d] && r && (y[d] = new r()), y = Object.prototype.hasOwnProperty.call(y, d) ? y[d] : {};
        }
        return l() ? {} : { obj: y, k: s(S.shift()) };
      }
      function F(y, u, r) {
        var s = ot(y, u, Object);
        s.obj[s.k] = r;
      }
      function yt(y, u) {
        var r = ot(y, u), s = r.obj, l = r.k;
        if (s) return s[l];
      }
      function bt(y, u, r) {
        var s = yt(y, r);
        return s !== void 0 ? s : yt(u, r);
      }
      function It(y, u, r) {
        for (var s in u) s !== "__proto__" && s !== "constructor" && (s in y ? typeof y[s] == "string" || y[s] instanceof String || typeof u[s] == "string" || u[s] instanceof String ? r && (y[s] = u[s]) : It(y[s], u[s], r) : y[s] = u[s]);
        return y;
      }
      function Bt(y) {
        return y.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var z = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
      function G(y) {
        return typeof y == "string" ? y.replace(/[&<>"'\/]/g, function(u) {
          return z[u];
        }) : y;
      }
      var P = typeof window < "u" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, f = function(y) {
        function u(r) {
          var s, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
          return Object(j.a)(this, u), s = J(this, p(u).call(this)), P && X.call(D(s)), s.data = r || {}, s.options = l, s.options.keySeparator === void 0 && (s.options.keySeparator = "."), s;
        }
        return W(u, y), Object(I.a)(u, [{ key: "addNamespaces", value: function(r) {
          this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
        } }, { key: "removeNamespaces", value: function(r) {
          var s = this.options.ns.indexOf(r);
          s > -1 && this.options.ns.splice(s, 1);
        } }, { key: "getResource", value: function(r, s, l) {
          var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = S.keySeparator !== void 0 ? S.keySeparator : this.options.keySeparator, L = [r, s];
          return l && typeof l != "string" && (L = L.concat(l)), l && typeof l == "string" && (L = L.concat(d ? l.split(d) : l)), r.indexOf(".") > -1 && (L = r.split(".")), yt(this.data, L);
        } }, { key: "addResource", value: function(r, s, l, S) {
          var d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 }, L = this.options.keySeparator;
          L === void 0 && (L = ".");
          var b = [r, s];
          l && (b = b.concat(L ? l.split(L) : l)), r.indexOf(".") > -1 && (S = s, s = (b = r.split("."))[1]), this.addNamespaces(s), F(this.data, b, S), d.silent || this.emit("added", r, s, l, S);
        } }, { key: "addResources", value: function(r, s, l) {
          var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
          for (var d in l) typeof l[d] != "string" && Object.prototype.toString.apply(l[d]) !== "[object Array]" || this.addResource(r, s, d, l[d], { silent: !0 });
          S.silent || this.emit("added", r, s, l);
        } }, { key: "addResourceBundle", value: function(r, s, l, S, d) {
          var L = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 }, b = [r, s];
          r.indexOf(".") > -1 && (S = l, l = s, s = (b = r.split("."))[1]), this.addNamespaces(s);
          var E = yt(this.data, b) || {};
          S ? It(E, l, d) : E = k({}, E, l), F(this.data, b, E), L.silent || this.emit("added", r, s, l);
        } }, { key: "removeResourceBundle", value: function(r, s) {
          this.hasResourceBundle(r, s) && delete this.data[r][s], this.removeNamespaces(s), this.emit("removed", r, s);
        } }, { key: "hasResourceBundle", value: function(r, s) {
          return this.getResource(r, s) !== void 0;
        } }, { key: "getResourceBundle", value: function(r, s) {
          return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? k({}, {}, this.getResource(r, s)) : this.getResource(r, s);
        } }, { key: "getDataByLanguage", value: function(r) {
          return this.data[r];
        } }, { key: "toJSON", value: function() {
          return this.data;
        } }]), u;
      }(X), A = { processors: {}, addPostProcessor: function(y) {
        this.processors[y.name] = y;
      }, handle: function(y, u, r, s, l) {
        var S = this;
        return y.forEach(function(d) {
          S.processors[d] && (u = S.processors[d].process(u, r, s, l));
        }), u;
      } }, M = {}, vt = function(y) {
        function u(r) {
          var s, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return Object(j.a)(this, u), s = J(this, p(u).call(this)), P && X.call(D(s)), lt(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, D(s)), s.options = l, s.options.keySeparator === void 0 && (s.options.keySeparator = "."), s.logger = B.create("translator"), s;
        }
        return W(u, y), Object(I.a)(u, [{ key: "changeLanguage", value: function(r) {
          r && (this.language = r);
        } }, { key: "exists", value: function(r) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }, l = this.resolve(r, s);
          return l && l.res !== void 0;
        } }, { key: "extractFromKey", value: function(r, s) {
          var l = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
          l === void 0 && (l = ":");
          var S = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, d = s.ns || this.options.defaultNS;
          if (l && r.indexOf(l) > -1) {
            var L = r.match(this.interpolator.nestingRegexp);
            if (L && L.length > 0) return { key: r, namespaces: d };
            var b = r.split(l);
            (l !== S || l === S && this.options.ns.indexOf(b[0]) > -1) && (d = b.shift()), r = b.join(S);
          }
          return typeof d == "string" && (d = [d]), { key: r, namespaces: d };
        } }, { key: "translate", value: function(r, s, l) {
          var S = this;
          if (Object(v.a)(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), s || (s = {}), r == null) return "";
          Array.isArray(r) || (r = [String(r)]);
          var d = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, L = this.extractFromKey(r[r.length - 1], s), b = L.key, E = L.namespaces, x = E[E.length - 1], T = s.lng || this.language, N = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (T && T.toLowerCase() === "cimode") {
            if (N) {
              var U = s.nsSeparator || this.options.nsSeparator;
              return x + U + b;
            }
            return b;
          }
          var $ = this.resolve(r, s), tt = $ && $.res, St = $ && $.usedKey || b, Pt = $ && $.exactUsedKey || b, Ht = Object.prototype.toString.apply(tt), le = ["[object Number]", "[object Function]", "[object RegExp]"], de = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, we = !this.i18nFormat || this.i18nFormat.handleAsObject, ge = typeof tt != "string" && typeof tt != "boolean" && typeof tt != "number";
          if (we && tt && ge && le.indexOf(Ht) < 0 && (typeof de != "string" || Ht !== "[object Array]")) {
            if (!s.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(St, tt, s) : "key '".concat(b, " (").concat(this.language, ")' returned an object instead of string.");
            if (d) {
              var Me = Ht === "[object Array]", pe = Me ? [] : {}, De = Me ? Pt : St;
              for (var ve in tt) if (Object.prototype.hasOwnProperty.call(tt, ve)) {
                var Le = "".concat(De).concat(d).concat(ve);
                pe[ve] = this.translate(Le, k({}, s, { joinArrays: !1, ns: E })), pe[ve] === Le && (pe[ve] = tt[ve]);
              }
              tt = pe;
            }
          } else if (we && typeof de == "string" && Ht === "[object Array]") (tt = tt.join(de)) && (tt = this.extendTranslation(tt, r, s, l));
          else {
            var zt = !1, me = !1, mt = s.count !== void 0 && typeof s.count != "string", a = u.hasDefaultValue(s), c = mt ? this.pluralResolver.getSuffix(T, s.count) : "", V = s["defaultValue".concat(c)] || s.defaultValue;
            !this.isValidLookup(tt) && a && (zt = !0, tt = V), this.isValidLookup(tt) || (me = !0, tt = b);
            var gt = a && V !== tt && this.options.updateMissing;
            if (me || zt || gt) {
              if (this.logger.log(gt ? "updateKey" : "missingKey", T, x, b, gt ? V : tt), d) {
                var dt = this.resolve(b, k({}, s, { keySeparator: !1 }));
                dt && dt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var Ct = [], Lt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && Lt && Lt[0]) for (var xt = 0; xt < Lt.length; xt++) Ct.push(Lt[xt]);
              else this.options.saveMissingTo === "all" ? Ct = this.languageUtils.toResolveHierarchy(s.lng || this.language) : Ct.push(s.lng || this.language);
              var ft = function(ut, jt, te) {
                S.options.missingKeyHandler ? S.options.missingKeyHandler(ut, x, jt, gt ? te : tt, gt, s) : S.backendConnector && S.backendConnector.saveMissing && S.backendConnector.saveMissing(ut, x, jt, gt ? te : tt, gt, s), S.emit("missingKey", ut, x, jt, tt);
              };
              this.options.saveMissing && (this.options.saveMissingPlurals && mt ? Ct.forEach(function(ut) {
                S.pluralResolver.getSuffixes(ut).forEach(function(jt) {
                  ft([ut], b + jt, s["defaultValue".concat(jt)] || V);
                });
              }) : ft(Ct, b, V));
            }
            tt = this.extendTranslation(tt, r, s, $, l), me && tt === b && this.options.appendNamespaceToMissingKey && (tt = "".concat(x, ":").concat(b)), me && this.options.parseMissingKeyHandler && (tt = this.options.parseMissingKeyHandler(tt));
          }
          return tt;
        } }, { key: "extendTranslation", value: function(r, s, l, S, d) {
          var L = this;
          if (this.i18nFormat && this.i18nFormat.parse) r = this.i18nFormat.parse(r, l, S.usedLng, S.usedNS, S.usedKey, { resolved: S });
          else if (!l.skipInterpolation) {
            l.interpolation && this.interpolator.init(k({}, l, { interpolation: k({}, this.options.interpolation, l.interpolation) }));
            var b, E = l.interpolation && l.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
            if (E) {
              var x = r.match(this.interpolator.nestingRegexp);
              b = x && x.length;
            }
            var T = l.replace && typeof l.replace != "string" ? l.replace : l;
            if (this.options.interpolation.defaultVariables && (T = k({}, this.options.interpolation.defaultVariables, T)), r = this.interpolator.interpolate(r, T, l.lng || this.language, l), E) {
              var N = r.match(this.interpolator.nestingRegexp);
              b < (N && N.length) && (l.nest = !1);
            }
            l.nest !== !1 && (r = this.interpolator.nest(r, function() {
              for (var tt = arguments.length, St = new Array(tt), Pt = 0; Pt < tt; Pt++) St[Pt] = arguments[Pt];
              return d && d[0] === St[0] && !l.context ? (L.logger.warn("It seems you are nesting recursively key: ".concat(St[0], " in key: ").concat(s[0])), null) : L.translate.apply(L, St.concat([s]));
            }, l)), l.interpolation && this.interpolator.reset();
          }
          var U = l.postProcess || this.options.postProcess, $ = typeof U == "string" ? [U] : U;
          return r != null && $ && $.length && l.applyPostProcessor !== !1 && (r = A.handle($, r, s, this.options && this.options.postProcessPassResolved ? k({ i18nResolved: S }, l) : l, this)), r;
        } }, { key: "resolve", value: function(r) {
          var s, l, S, d, L, b = this, E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return typeof r == "string" && (r = [r]), r.forEach(function(x) {
            if (!b.isValidLookup(s)) {
              var T = b.extractFromKey(x, E), N = T.key;
              l = N;
              var U = T.namespaces;
              b.options.fallbackNS && (U = U.concat(b.options.fallbackNS));
              var $ = E.count !== void 0 && typeof E.count != "string", tt = E.context !== void 0 && typeof E.context == "string" && E.context !== "", St = E.lngs ? E.lngs : b.languageUtils.toResolveHierarchy(E.lng || b.language, E.fallbackLng);
              U.forEach(function(Pt) {
                b.isValidLookup(s) || (L = Pt, !M["".concat(St[0], "-").concat(Pt)] && b.utils && b.utils.hasLoadedNamespace && !b.utils.hasLoadedNamespace(L) && (M["".concat(St[0], "-").concat(Pt)] = !0, b.logger.warn('key "'.concat(l, '" for languages "').concat(St.join(", "), `" won't get resolved as namespace "`).concat(L, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), St.forEach(function(Ht) {
                  if (!b.isValidLookup(s)) {
                    d = Ht;
                    var le, de, we = N, ge = [we];
                    for (b.i18nFormat && b.i18nFormat.addLookupKeys ? b.i18nFormat.addLookupKeys(ge, N, Ht, Pt, E) : ($ && (le = b.pluralResolver.getSuffix(Ht, E.count)), $ && tt && ge.push(we + le), tt && ge.push(we += "".concat(b.options.contextSeparator).concat(E.context)), $ && ge.push(we += le)); de = ge.pop(); ) b.isValidLookup(s) || (S = de, s = b.getResource(Ht, Pt, de, E));
                  }
                }));
              });
            }
          }), { res: s, usedKey: l, exactUsedKey: S, usedLng: d, usedNS: L };
        } }, { key: "isValidLookup", value: function(r) {
          return !(r === void 0 || !this.options.returnNull && r === null || !this.options.returnEmptyString && r === "");
        } }, { key: "getResource", value: function(r, s, l) {
          var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, s, l, S) : this.resourceStore.getResource(r, s, l, S);
        } }], [{ key: "hasDefaultValue", value: function(r) {
          for (var s in r) if (Object.prototype.hasOwnProperty.call(r, s) && s.substring(0, 12) === "defaultValue" && r[s] !== void 0) return !0;
          return !1;
        } }]), u;
      }(X);
      function wt(y) {
        return y.charAt(0).toUpperCase() + y.slice(1);
      }
      var Et = function() {
        function y(u) {
          Object(j.a)(this, y), this.options = u, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = B.create("languageUtils");
        }
        return Object(I.a)(y, [{ key: "getScriptPartFromCode", value: function(u) {
          if (!u || u.indexOf("-") < 0) return null;
          var r = u.split("-");
          return r.length === 2 ? null : (r.pop(), r[r.length - 1].toLowerCase() === "x" ? null : this.formatLanguageCode(r.join("-")));
        } }, { key: "getLanguagePartFromCode", value: function(u) {
          if (!u || u.indexOf("-") < 0) return u;
          var r = u.split("-");
          return this.formatLanguageCode(r[0]);
        } }, { key: "formatLanguageCode", value: function(u) {
          if (typeof u == "string" && u.indexOf("-") > -1) {
            var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], s = u.split("-");
            return this.options.lowerCaseLng ? s = s.map(function(l) {
              return l.toLowerCase();
            }) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), r.indexOf(s[1].toLowerCase()) > -1 && (s[1] = wt(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), r.indexOf(s[1].toLowerCase()) > -1 && (s[1] = wt(s[1].toLowerCase())), r.indexOf(s[2].toLowerCase()) > -1 && (s[2] = wt(s[2].toLowerCase()))), s.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? u.toLowerCase() : u;
        } }, { key: "isWhitelisted", value: function(u) {
          return this.logger.deprecate("languageUtils.isWhitelisted", `function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it's usage asap.`), this.isSupportedCode(u);
        } }, { key: "isSupportedCode", value: function(u) {
          return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (u = this.getLanguagePartFromCode(u)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(u) > -1;
        } }, { key: "getBestMatchFromCodes", value: function(u) {
          var r, s = this;
          return u ? (u.forEach(function(l) {
            if (!r) {
              var S = s.formatLanguageCode(l);
              s.options.supportedLngs && !s.isSupportedCode(S) || (r = S);
            }
          }), !r && this.options.supportedLngs && u.forEach(function(l) {
            if (!r) {
              var S = s.getLanguagePartFromCode(l);
              if (s.isSupportedCode(S)) return r = S;
              r = s.options.supportedLngs.find(function(d) {
                if (d.indexOf(S) === 0) return d;
              });
            }
          }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r) : null;
        } }, { key: "getFallbackCodes", value: function(u, r) {
          if (!u) return [];
          if (typeof u == "function" && (u = u(r)), typeof u == "string" && (u = [u]), Object.prototype.toString.apply(u) === "[object Array]") return u;
          if (!r) return u.default || [];
          var s = u[r];
          return s || (s = u[this.getScriptPartFromCode(r)]), s || (s = u[this.formatLanguageCode(r)]), s || (s = u[this.getLanguagePartFromCode(r)]), s || (s = u.default), s || [];
        } }, { key: "toResolveHierarchy", value: function(u, r) {
          var s = this, l = this.getFallbackCodes(r || this.options.fallbackLng || [], u), S = [], d = function(L) {
            L && (s.isSupportedCode(L) ? S.push(L) : s.logger.warn("rejecting language code not found in supportedLngs: ".concat(L)));
          };
          return typeof u == "string" && u.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && d(this.formatLanguageCode(u)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && d(this.getScriptPartFromCode(u)), this.options.load !== "currentOnly" && d(this.getLanguagePartFromCode(u))) : typeof u == "string" && d(this.formatLanguageCode(u)), l.forEach(function(L) {
            S.indexOf(L) < 0 && d(s.formatLanguageCode(L));
          }), S;
        } }]), y;
      }(), Mt = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], Y = { 1: function(y) {
        return +(y > 1);
      }, 2: function(y) {
        return +(y != 1);
      }, 3: function(y) {
        return 0;
      }, 4: function(y) {
        return y % 10 == 1 && y % 100 != 11 ? 0 : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? 1 : 2;
      }, 5: function(y) {
        return y == 0 ? 0 : y == 1 ? 1 : y == 2 ? 2 : y % 100 >= 3 && y % 100 <= 10 ? 3 : y % 100 >= 11 ? 4 : 5;
      }, 6: function(y) {
        return y == 1 ? 0 : y >= 2 && y <= 4 ? 1 : 2;
      }, 7: function(y) {
        return y == 1 ? 0 : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? 1 : 2;
      }, 8: function(y) {
        return y == 1 ? 0 : y == 2 ? 1 : y != 8 && y != 11 ? 2 : 3;
      }, 9: function(y) {
        return +(y >= 2);
      }, 10: function(y) {
        return y == 1 ? 0 : y == 2 ? 1 : y < 7 ? 2 : y < 11 ? 3 : 4;
      }, 11: function(y) {
        return y == 1 || y == 11 ? 0 : y == 2 || y == 12 ? 1 : y > 2 && y < 20 ? 2 : 3;
      }, 12: function(y) {
        return +(y % 10 != 1 || y % 100 == 11);
      }, 13: function(y) {
        return +(y !== 0);
      }, 14: function(y) {
        return y == 1 ? 0 : y == 2 ? 1 : y == 3 ? 2 : 3;
      }, 15: function(y) {
        return y % 10 == 1 && y % 100 != 11 ? 0 : y % 10 >= 2 && (y % 100 < 10 || y % 100 >= 20) ? 1 : 2;
      }, 16: function(y) {
        return y % 10 == 1 && y % 100 != 11 ? 0 : y !== 0 ? 1 : 2;
      }, 17: function(y) {
        return y == 1 || y % 10 == 1 && y % 100 != 11 ? 0 : 1;
      }, 18: function(y) {
        return y == 0 ? 0 : y == 1 ? 1 : 2;
      }, 19: function(y) {
        return y == 1 ? 0 : y == 0 || y % 100 > 1 && y % 100 < 11 ? 1 : y % 100 > 10 && y % 100 < 20 ? 2 : 3;
      }, 20: function(y) {
        return y == 1 ? 0 : y == 0 || y % 100 > 0 && y % 100 < 20 ? 1 : 2;
      }, 21: function(y) {
        return y % 100 == 1 ? 1 : y % 100 == 2 ? 2 : y % 100 == 3 || y % 100 == 4 ? 3 : 0;
      }, 22: function(y) {
        return y == 1 ? 0 : y == 2 ? 1 : (y < 0 || y > 10) && y % 10 == 0 ? 2 : 3;
      } };
      function Q() {
        var y = {};
        return Mt.forEach(function(u) {
          u.lngs.forEach(function(r) {
            y[r] = { numbers: u.nr, plurals: Y[u.fc] };
          });
        }), y;
      }
      var rt = function() {
        function y(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(j.a)(this, y), this.languageUtils = u, this.options = r, this.logger = B.create("pluralResolver"), this.rules = Q();
        }
        return Object(I.a)(y, [{ key: "addRule", value: function(u, r) {
          this.rules[u] = r;
        } }, { key: "getRule", value: function(u) {
          return this.rules[u] || this.rules[this.languageUtils.getLanguagePartFromCode(u)];
        } }, { key: "needsPlural", value: function(u) {
          var r = this.getRule(u);
          return r && r.numbers.length > 1;
        } }, { key: "getPluralFormsOfKey", value: function(u, r) {
          return this.getSuffixes(u).map(function(s) {
            return r + s;
          });
        } }, { key: "getSuffixes", value: function(u) {
          var r = this, s = this.getRule(u);
          return s ? s.numbers.map(function(l) {
            return r.getSuffix(u, l);
          }) : [];
        } }, { key: "getSuffix", value: function(u, r) {
          var s = this, l = this.getRule(u);
          if (l) {
            var S = l.noAbs ? l.plurals(r) : l.plurals(Math.abs(r)), d = l.numbers[S];
            this.options.simplifyPluralSuffix && l.numbers.length === 2 && l.numbers[0] === 1 && (d === 2 ? d = "plural" : d === 1 && (d = ""));
            var L = function() {
              return s.options.prepend && d.toString() ? s.options.prepend + d.toString() : d.toString();
            };
            return this.options.compatibilityJSON === "v1" ? d === 1 ? "" : typeof d == "number" ? "_plural_".concat(d.toString()) : L() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && l.numbers.length === 2 && l.numbers[0] === 1 ? L() : this.options.prepend && S.toString() ? this.options.prepend + S.toString() : S.toString();
          }
          return this.logger.warn("no plural rule found for: ".concat(u)), "";
        } }]), y;
      }(), et = function() {
        function y() {
          var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          Object(j.a)(this, y), this.logger = B.create("interpolator"), this.options = u, this.format = u.interpolation && u.interpolation.format || function(r) {
            return r;
          }, this.init(u);
        }
        return Object(I.a)(y, [{ key: "init", value: function() {
          var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.interpolation || (u.interpolation = { escapeValue: !0 });
          var r = u.interpolation;
          this.escape = r.escape !== void 0 ? r.escape : G, this.escapeValue = r.escapeValue === void 0 || r.escapeValue, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 && r.useRawValueToEscape, this.prefix = r.prefix ? Bt(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Bt(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Bt(r.nestingPrefix) : r.nestingPrefixEscaped || Bt("$t("), this.nestingSuffix = r.nestingSuffix ? Bt(r.nestingSuffix) : r.nestingSuffixEscaped || Bt(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 && r.alwaysFormat, this.resetRegExp();
        } }, { key: "reset", value: function() {
          this.options && this.init(this.options);
        } }, { key: "resetRegExp", value: function() {
          var u = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(u, "g");
          var r = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(r, "g");
          var s = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(s, "g");
        } }, { key: "interpolate", value: function(u, r, s, l) {
          var S, d, L, b = this, E = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
          function x($) {
            return $.replace(/\$/g, "$$$$");
          }
          var T = function($) {
            if ($.indexOf(b.formatSeparator) < 0) {
              var tt = bt(r, E, $);
              return b.alwaysFormat ? b.format(tt, void 0, s) : tt;
            }
            var St = $.split(b.formatSeparator), Pt = St.shift().trim(), Ht = St.join(b.formatSeparator).trim();
            return b.format(bt(r, E, Pt), Ht, s, l);
          };
          this.resetRegExp();
          var N = l && l.missingInterpolationHandler || this.options.missingInterpolationHandler, U = l && l.interpolation && l.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
          return [{ regex: this.regexpUnescape, safeValue: function($) {
            return x($);
          } }, { regex: this.regexp, safeValue: function($) {
            return b.escapeValue ? x(b.escape($)) : x($);
          } }].forEach(function($) {
            for (L = 0; S = $.regex.exec(u); ) {
              if ((d = T(S[1].trim())) === void 0) if (typeof N == "function") {
                var tt = N(u, S, l);
                d = typeof tt == "string" ? tt : "";
              } else {
                if (U) {
                  d = S[0];
                  continue;
                }
                b.logger.warn("missed to pass in variable ".concat(S[1], " for interpolating ").concat(u)), d = "";
              }
              else typeof d == "string" || b.useRawValueToEscape || (d = at(d));
              if (u = u.replace(S[0], $.safeValue(d)), $.regex.lastIndex = 0, ++L >= b.maxReplaces) break;
            }
          }), u;
        } }, { key: "nest", value: function(u, r) {
          var s, l, S = this, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, L = k({}, d);
          function b(N, U) {
            var $ = this.nestingOptionsSeparator;
            if (N.indexOf($) < 0) return N;
            var tt = N.split(new RegExp("".concat($, "[ ]*{"))), St = "{".concat(tt[1]);
            N = tt[0], St = (St = this.interpolate(St, L)).replace(/'/g, '"');
            try {
              L = JSON.parse(St), U && (L = k({}, U, L));
            } catch (Pt) {
              return this.logger.warn("failed parsing options string in nesting for key ".concat(N), Pt), "".concat(N).concat($).concat(St);
            }
            return delete L.defaultValue, N;
          }
          for (L.applyPostProcessor = !1, delete L.defaultValue; s = this.nestingRegexp.exec(u); ) {
            var E = [], x = !1;
            if (s[0].includes(this.formatSeparator) && !/{.*}/.test(s[1])) {
              var T = s[1].split(this.formatSeparator).map(function(N) {
                return N.trim();
              });
              s[1] = T.shift(), E = T, x = !0;
            }
            if ((l = r(b.call(this, s[1].trim(), L), L)) && s[0] === u && typeof l != "string") return l;
            typeof l != "string" && (l = at(l)), l || (this.logger.warn("missed to resolve ".concat(s[1], " for nesting ").concat(u)), l = ""), x && (l = E.reduce(function(N, U) {
              return S.format(N, U, d.lng, d);
            }, l.trim())), u = u.replace(s[0], l), this.regexp.lastIndex = 0;
          }
          return u;
        } }]), y;
      }(), Gt = function(y) {
        function u(r, s, l) {
          var S, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return Object(j.a)(this, u), S = J(this, p(u).call(this)), P && X.call(D(S)), S.backend = r, S.store = s, S.services = l, S.languageUtils = l.languageUtils, S.options = d, S.logger = B.create("backendConnector"), S.state = {}, S.queue = [], S.backend && S.backend.init && S.backend.init(l, d.backend, d), S;
        }
        return W(u, y), Object(I.a)(u, [{ key: "queueLoad", value: function(r, s, l, S) {
          var d = this, L = [], b = [], E = [], x = [];
          return r.forEach(function(T) {
            var N = !0;
            s.forEach(function(U) {
              var $ = "".concat(T, "|").concat(U);
              !l.reload && d.store.hasResourceBundle(T, U) ? d.state[$] = 2 : d.state[$] < 0 || (d.state[$] === 1 ? b.indexOf($) < 0 && b.push($) : (d.state[$] = 1, N = !1, b.indexOf($) < 0 && b.push($), L.indexOf($) < 0 && L.push($), x.indexOf(U) < 0 && x.push(U)));
            }), N || E.push(T);
          }), (L.length || b.length) && this.queue.push({ pending: b, loaded: {}, errors: [], callback: S }), { toLoad: L, pending: b, toLoadLanguages: E, toLoadNamespaces: x };
        } }, { key: "loaded", value: function(r, s, l) {
          var S = r.split("|"), d = S[0], L = S[1];
          s && this.emit("failedLoading", d, L, s), l && this.store.addResourceBundle(d, L, l), this.state[r] = s ? -1 : 2;
          var b = {};
          this.queue.forEach(function(E) {
            var x, T, N, U, $;
            x = E.loaded, T = L, N = ot(x, [d], Object), U = N.obj, $ = N.k, U[$] = U[$] || [], U[$].push(T), function(tt, St) {
              for (var Pt = tt.indexOf(St); Pt !== -1; ) tt.splice(Pt, 1), Pt = tt.indexOf(St);
            }(E.pending, r), s && E.errors.push(s), E.pending.length !== 0 || E.done || (Object.keys(E.loaded).forEach(function(tt) {
              b[tt] || (b[tt] = []), E.loaded[tt].length && E.loaded[tt].forEach(function(St) {
                b[tt].indexOf(St) < 0 && b[tt].push(St);
              });
            }), E.done = !0, E.errors.length ? E.callback(E.errors) : E.callback());
          }), this.emit("loaded", b), this.queue = this.queue.filter(function(E) {
            return !E.done;
          });
        } }, { key: "read", value: function(r, s, l) {
          var S = this, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, L = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 350, b = arguments.length > 5 ? arguments[5] : void 0;
          return r.length ? this.backend[l](r, s, function(E, x) {
            E && x && d < 5 ? setTimeout(function() {
              S.read.call(S, r, s, l, d + 1, 2 * L, b);
            }, L) : b(E, x);
          }) : b(null, {});
        } }, { key: "prepareLoading", value: function(r, s) {
          var l = this, S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), d && d();
          typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)), typeof s == "string" && (s = [s]);
          var L = this.queueLoad(r, s, S, d);
          if (!L.toLoad.length) return L.pending.length || d(), null;
          L.toLoad.forEach(function(b) {
            l.loadOne(b);
          });
        } }, { key: "load", value: function(r, s, l) {
          this.prepareLoading(r, s, {}, l);
        } }, { key: "reload", value: function(r, s, l) {
          this.prepareLoading(r, s, { reload: !0 }, l);
        } }, { key: "loadOne", value: function(r) {
          var s = this, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", S = r.split("|"), d = S[0], L = S[1];
          this.read(d, L, "read", void 0, void 0, function(b, E) {
            b && s.logger.warn("".concat(l, "loading namespace ").concat(L, " for language ").concat(d, " failed"), b), !b && E && s.logger.log("".concat(l, "loaded namespace ").concat(L, " for language ").concat(d), E), s.loaded(r, b, E);
          });
        } }, { key: "saveMissing", value: function(r, s, l, S, d) {
          var L = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s) ? this.logger.warn('did not save key "'.concat(l, '" as the namespace "').concat(s, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : l != null && l !== "" && (this.backend && this.backend.create && this.backend.create(r, s, l, S, null, k({}, L, { isUpdate: d })), r && r[0] && this.store.addResource(r[0], s, l, S));
        } }]), u;
      }(X);
      function Qt() {
        return { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(y) {
          var u = {};
          if (Object(v.a)(y[1]) === "object" && (u = y[1]), typeof y[1] == "string" && (u.defaultValue = y[1]), typeof y[2] == "string" && (u.tDescription = y[2]), Object(v.a)(y[2]) === "object" || Object(v.a)(y[3]) === "object") {
            var r = y[3] || y[2];
            Object.keys(r).forEach(function(s) {
              u[s] = r[s];
            });
          }
          return u;
        }, interpolation: { escapeValue: !0, format: function(y, u, r, s) {
          return y;
        }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !1 } };
      }
      function Xt(y) {
        return typeof y.ns == "string" && (y.ns = [y.ns]), typeof y.fallbackLng == "string" && (y.fallbackLng = [y.fallbackLng]), typeof y.fallbackNS == "string" && (y.fallbackNS = [y.fallbackNS]), y.whitelist && (y.whitelist && y.whitelist.indexOf("cimode") < 0 && (y.whitelist = y.whitelist.concat(["cimode"])), y.supportedLngs = y.whitelist), y.nonExplicitWhitelist && (y.nonExplicitSupportedLngs = y.nonExplicitWhitelist), y.supportedLngs && y.supportedLngs.indexOf("cimode") < 0 && (y.supportedLngs = y.supportedLngs.concat(["cimode"])), y;
      }
      function re() {
      }
      var he = new (function(y) {
        function u() {
          var r, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
          if (Object(j.a)(this, u), r = J(this, p(u).call(this)), P && X.call(D(r)), r.options = Xt(s), r.services = {}, r.logger = B, r.modules = { external: [] }, l && !r.isInitialized && !s.isClone) {
            if (!r.options.initImmediate) return r.init(s, l), J(r, D(r));
            setTimeout(function() {
              r.init(s, l);
            }, 0);
          }
          return r;
        }
        return W(u, y), Object(I.a)(u, [{ key: "init", value: function() {
          var r = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
          function S(U) {
            return U ? typeof U == "function" ? new U() : U : null;
          }
          if (typeof s == "function" && (l = s, s = {}), s.whitelist && !s.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), s.nonExplicitWhitelist && !s.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = k({}, Qt(), this.options, Xt(s)), this.format = this.options.interpolation.format, l || (l = re), !this.options.isClone) {
            this.modules.logger ? B.init(S(this.modules.logger), this.options) : B.init(null, this.options);
            var d = new Et(this.options);
            this.store = new f(this.options.resources, this.options);
            var L = this.services;
            L.logger = B, L.resourceStore = this.store, L.languageUtils = d, L.pluralResolver = new rt(d, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), L.interpolator = new et(this.options), L.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, L.backendConnector = new Gt(S(this.modules.backend), L.resourceStore, L, this.options), L.backendConnector.on("*", function(U) {
              for (var $ = arguments.length, tt = new Array($ > 1 ? $ - 1 : 0), St = 1; St < $; St++) tt[St - 1] = arguments[St];
              r.emit.apply(r, [U].concat(tt));
            }), this.modules.languageDetector && (L.languageDetector = S(this.modules.languageDetector), L.languageDetector.init(L, this.options.detection, this.options)), this.modules.i18nFormat && (L.i18nFormat = S(this.modules.i18nFormat), L.i18nFormat.init && L.i18nFormat.init(this)), this.translator = new vt(this.services, this.options), this.translator.on("*", function(U) {
              for (var $ = arguments.length, tt = new Array($ > 1 ? $ - 1 : 0), St = 1; St < $; St++) tt[St - 1] = arguments[St];
              r.emit.apply(r, [U].concat(tt));
            }), this.modules.external.forEach(function(U) {
              U.init && U.init(r);
            });
          }
          if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            var b = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            b.length > 0 && b[0] !== "dev" && (this.options.lng = b[0]);
          }
          this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
          var E = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
          E.forEach(function(U) {
            r[U] = function() {
              var $;
              return ($ = r.store)[U].apply($, arguments);
            };
          });
          var x = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
          x.forEach(function(U) {
            r[U] = function() {
              var $;
              return ($ = r.store)[U].apply($, arguments), r;
            };
          });
          var T = _(), N = function() {
            var U = function($, tt) {
              r.isInitialized && r.logger.warn("init: i18next is already initialized. You should call init just once!"), r.isInitialized = !0, r.options.isClone || r.logger.log("initialized", r.options), r.emit("initialized", r.options), T.resolve(tt), l($, tt);
            };
            if (r.languages && r.options.compatibilityAPI !== "v1" && !r.isInitialized) return U(null, r.t.bind(r));
            r.changeLanguage(r.options.lng, U);
          };
          return this.options.resources || !this.options.initImmediate ? N() : setTimeout(N, 0), T;
        } }, { key: "loadResources", value: function(r) {
          var s = this, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : re, S = l, d = typeof r == "string" ? r : this.language;
          if (typeof r == "function" && (S = r), !this.options.resources || this.options.partialBundledLanguages) {
            if (d && d.toLowerCase() === "cimode") return S();
            var L = [], b = function(x) {
              x && s.services.languageUtils.toResolveHierarchy(x).forEach(function(T) {
                L.indexOf(T) < 0 && L.push(T);
              });
            };
            if (d) b(d);
            else {
              var E = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              E.forEach(function(x) {
                return b(x);
              });
            }
            this.options.preload && this.options.preload.forEach(function(x) {
              return b(x);
            }), this.services.backendConnector.load(L, this.options.ns, S);
          } else S(null);
        } }, { key: "reloadResources", value: function(r, s, l) {
          var S = _();
          return r || (r = this.languages), s || (s = this.options.ns), l || (l = re), this.services.backendConnector.reload(r, s, function(d) {
            S.resolve(), l(d);
          }), S;
        } }, { key: "use", value: function(r) {
          if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && A.addPostProcessor(r), r.type === "3rdParty" && this.modules.external.push(r), this;
        } }, { key: "changeLanguage", value: function(r, s) {
          var l = this;
          this.isLanguageChangingTo = r;
          var S = _();
          this.emit("languageChanging", r);
          var d = function(L) {
            var b = typeof L == "string" ? L : l.services.languageUtils.getBestMatchFromCodes(L);
            b && (l.language || (l.language = b, l.languages = l.services.languageUtils.toResolveHierarchy(b)), l.translator.language || l.translator.changeLanguage(b), l.services.languageDetector && l.services.languageDetector.cacheUserLanguage(b)), l.loadResources(b, function(E) {
              (function(x, T) {
                T ? (l.language = T, l.languages = l.services.languageUtils.toResolveHierarchy(T), l.translator.changeLanguage(T), l.isLanguageChangingTo = void 0, l.emit("languageChanged", T), l.logger.log("languageChanged", T)) : l.isLanguageChangingTo = void 0, S.resolve(function() {
                  return l.t.apply(l, arguments);
                }), s && s(x, function() {
                  return l.t.apply(l, arguments);
                });
              })(E, b);
            });
          };
          return r || !this.services.languageDetector || this.services.languageDetector.async ? !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(d) : d(r) : d(this.services.languageDetector.detect()), S;
        } }, { key: "getFixedT", value: function(r, s) {
          var l = this, S = function d(L, b) {
            var E;
            if (Object(v.a)(b) !== "object") {
              for (var x = arguments.length, T = new Array(x > 2 ? x - 2 : 0), N = 2; N < x; N++) T[N - 2] = arguments[N];
              E = l.options.overloadTranslationOptionHandler([L, b].concat(T));
            } else E = k({}, b);
            return E.lng = E.lng || d.lng, E.lngs = E.lngs || d.lngs, E.ns = E.ns || d.ns, l.t(L, E);
          };
          return typeof r == "string" ? S.lng = r : S.lngs = r, S.ns = s, S;
        } }, { key: "t", value: function() {
          var r;
          return this.translator && (r = this.translator).translate.apply(r, arguments);
        } }, { key: "exists", value: function() {
          var r;
          return this.translator && (r = this.translator).exists.apply(r, arguments);
        } }, { key: "setDefaultNamespace", value: function(r) {
          this.options.defaultNS = r;
        } }, { key: "hasLoadedNamespace", value: function(r) {
          var s = this, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
          if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
          var S = this.languages[0], d = !!this.options && this.options.fallbackLng, L = this.languages[this.languages.length - 1];
          if (S.toLowerCase() === "cimode") return !0;
          var b = function(x, T) {
            var N = s.services.backendConnector.state["".concat(x, "|").concat(T)];
            return N === -1 || N === 2;
          };
          if (l.precheck) {
            var E = l.precheck(this, b);
            if (E !== void 0) return E;
          }
          return !!this.hasResourceBundle(S, r) || !this.services.backendConnector.backend || !(!b(S, r) || d && !b(L, r));
        } }, { key: "loadNamespaces", value: function(r, s) {
          var l = this, S = _();
          return this.options.ns ? (typeof r == "string" && (r = [r]), r.forEach(function(d) {
            l.options.ns.indexOf(d) < 0 && l.options.ns.push(d);
          }), this.loadResources(function(d) {
            S.resolve(), s && s(d);
          }), S) : (s && s(), Promise.resolve());
        } }, { key: "loadLanguages", value: function(r, s) {
          var l = _();
          typeof r == "string" && (r = [r]);
          var S = this.options.preload || [], d = r.filter(function(L) {
            return S.indexOf(L) < 0;
          });
          return d.length ? (this.options.preload = S.concat(d), this.loadResources(function(L) {
            l.resolve(), s && s(L);
          }), l) : (s && s(), Promise.resolve());
        } }, { key: "dir", value: function(r) {
          return r || (r = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), r ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(r)) >= 0 ? "rtl" : "ltr" : "rtl";
        } }, { key: "createInstance", value: function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
          return new u(r, s);
        } }, { key: "cloneInstance", value: function() {
          var r = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : re, S = k({}, this.options, s, { isClone: !0 }), d = new u(S), L = ["store", "services", "language"];
          return L.forEach(function(b) {
            d[b] = r[b];
          }), d.services = k({}, this.services), d.services.utils = { hasLoadedNamespace: d.hasLoadedNamespace.bind(d) }, d.translator = new vt(d.services, d.options), d.translator.on("*", function(b) {
            for (var E = arguments.length, x = new Array(E > 1 ? E - 1 : 0), T = 1; T < E; T++) x[T - 1] = arguments[T];
            d.emit.apply(d, [b].concat(x));
          }), d.init(S, l), d.translator.options = d.options, d.translator.backendConnector.services.utils = { hasLoadedNamespace: d.hasLoadedNamespace.bind(d) }, d;
        } }]), u;
      }(X))();
      K.default = he;
    }]);
  });
})(gr);
var ui = gr.exports;
const ci = () => {
  const [Ve, Ee] = cr([]), [Z, K] = cr(""), O = ui.Desktop.actions;
  oi(() => {
    const m = (k) => {
      console.log("Nuevo task asignado:", k), Ee((j) => [...j, k]);
    };
    return O.on("TASK_ASSIGNED", m), () => {
      O.off("TASK_ASSIGNED", m);
    };
  }, []);
  const v = () => {
    Z.trim() && (O.fireGeneralSilentNotification({
      data: {
        mode: "Silent",
        data: Z
        // 👈 va en data.data, no como "message"
      }
    }), K(""));
  }, h = () => {
    O.addCustomTask({
      id: Date.now().toString(),
      type: "custom",
      payload: { note: "Este es un task manual" }
    });
  };
  return /* @__PURE__ */ Ne.jsxs("div", { className: "p-4 rounded-xl shadow-md bg-white", children: [
    /* @__PURE__ */ Ne.jsx("h2", { className: "text-lg font-bold mb-2", children: "TaskAgentAuto Widget" }),
    /* @__PURE__ */ Ne.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ Ne.jsx(
        "input",
        {
          type: "text",
          placeholder: "Mensaje Silent...",
          value: Z,
          onChange: (m) => K(m.target.value),
          className: "border p-2 rounded w-full"
        }
      ),
      /* @__PURE__ */ Ne.jsx(
        "button",
        {
          onClick: v,
          className: "bg-blue-500 text-white px-4 py-2 rounded mt-2",
          children: "Enviar Silent Notification"
        }
      )
    ] }),
    /* @__PURE__ */ Ne.jsx("div", { className: "mb-3", children: /* @__PURE__ */ Ne.jsx(
      "button",
      {
        onClick: h,
        className: "bg-green-500 text-white px-4 py-2 rounded",
        children: "Agregar Custom Task"
      }
    ) }),
    /* @__PURE__ */ Ne.jsx("h3", { className: "text-md font-semibold mt-4", children: "Tareas asignadas:" }),
    /* @__PURE__ */ Ne.jsx("ul", { className: "list-disc ml-5", children: Ve.map((m, k) => /* @__PURE__ */ Ne.jsxs("li", { children: [
      (m == null ? void 0 : m.id) || "sin-id",
      " - ",
      (m == null ? void 0 : m.type) || "desconocido"
    ] }, k)) })
  ] });
};
class li extends HTMLElement {
  connectedCallback() {
    const Ee = document.createElement("div");
    this.appendChild(Ee), lr.render(/* @__PURE__ */ Ne.jsx(ci, {}), Ee);
  }
  disconnectedCallback() {
    const Ee = this.firstElementChild;
    Ee && lr.unmountComponentAtNode(Ee);
  }
}
customElements.get("wxcc-taskagentauto") || customElements.define("wxcc-taskagentauto", li);
