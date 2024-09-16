var A0 = Object.defineProperty;
var F0 = (t, e, n) => (e in t ? A0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var M = (t, e, n) => F0(t, typeof e != "symbol" ? e + "" : e, n);
function I0(t, e) {
  for (var n = 0; n < e.length; n++) {
    const i = e[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s && Object.defineProperty(t, r, s.get ? s : { enumerable: !0, get: () => i[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function z0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xh = { exports: {} },
  ua = {},
  qh = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = Symbol.for("react.element"),
  j0 = Symbol.for("react.portal"),
  W0 = Symbol.for("react.fragment"),
  B0 = Symbol.for("react.strict_mode"),
  H0 = Symbol.for("react.profiler"),
  V0 = Symbol.for("react.provider"),
  $0 = Symbol.for("react.context"),
  Y0 = Symbol.for("react.forward_ref"),
  U0 = Symbol.for("react.suspense"),
  Q0 = Symbol.for("react.memo"),
  X0 = Symbol.for("react.lazy"),
  nd = Symbol.iterator;
function q0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (nd && t[nd]) || t["@@iterator"]), typeof t == "function" ? t : null);
}
var Kh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gh = Object.assign,
  Zh = {};
function Xi(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Zh), (this.updater = n || Kh);
}
Xi.prototype.isReactComponent = {};
Xi.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Xi.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Jh() {}
Jh.prototype = Xi.prototype;
function ju(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Zh), (this.updater = n || Kh);
}
var Wu = (ju.prototype = new Jh());
Wu.constructor = ju;
Gh(Wu, Xi.prototype);
Wu.isPureReactComponent = !0;
var id = Array.isArray,
  ep = Object.prototype.hasOwnProperty,
  Bu = { current: null },
  tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function np(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e))
      ep.call(e, i) && !tp.hasOwnProperty(i) && (r[i] = e[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  if (t && t.defaultProps) for (i in ((a = t.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return { $$typeof: hs, type: t, key: s, ref: o, props: r, _owner: Bu.current };
}
function K0(t, e) {
  return { $$typeof: hs, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Hu(t) {
  return typeof t == "object" && t !== null && t.$$typeof === hs;
}
function G0(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var rd = /\/+/g;
function Aa(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? G0("" + t.key) : e.toString(36);
}
function so(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case hs:
          case j0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + Aa(o, 0) : i),
      id(r)
        ? ((n = ""),
          t != null && (n = t.replace(rd, "$&/") + "/"),
          so(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (Hu(r) &&
            (r = K0(r, n + (!r.key || (o && o.key === r.key) ? "" : ("" + r.key).replace(rd, "$&/") + "/") + t)),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), id(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = i + Aa(s, a);
      o += so(s, e, n, l, r);
    }
  else if (((l = q0(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; ) (s = s.value), (l = i + Aa(s, a++)), (o += so(s, e, n, l, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ps(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    so(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function Z0(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var $e = { current: null },
  oo = { transition: null },
  J0 = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: oo, ReactCurrentOwner: Bu };
function ip() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: Ps,
  forEach: function (t, e, n) {
    Ps(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Ps(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ps(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Hu(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  },
};
j.Component = Xi;
j.Fragment = W0;
j.Profiler = H0;
j.PureComponent = ju;
j.StrictMode = B0;
j.Suspense = U0;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J0;
j.act = ip;
j.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var i = Gh({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Bu.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e) ep.call(e, l) && !tp.hasOwnProperty(l) && (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  return { $$typeof: hs, type: t.type, key: r, ref: s, props: i, _owner: o };
};
j.createContext = function (t) {
  return (
    (t = {
      $$typeof: $0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: V0, _context: t }),
    (t.Consumer = t)
  );
};
j.createElement = np;
j.createFactory = function (t) {
  var e = np.bind(null, t);
  return (e.type = t), e;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (t) {
  return { $$typeof: Y0, render: t };
};
j.isValidElement = Hu;
j.lazy = function (t) {
  return { $$typeof: X0, _payload: { _status: -1, _result: t }, _init: Z0 };
};
j.memo = function (t, e) {
  return { $$typeof: Q0, type: t, compare: e === void 0 ? null : e };
};
j.startTransition = function (t) {
  var e = oo.transition;
  oo.transition = {};
  try {
    t();
  } finally {
    oo.transition = e;
  }
};
j.unstable_act = ip;
j.useCallback = function (t, e) {
  return $e.current.useCallback(t, e);
};
j.useContext = function (t) {
  return $e.current.useContext(t);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (t) {
  return $e.current.useDeferredValue(t);
};
j.useEffect = function (t, e) {
  return $e.current.useEffect(t, e);
};
j.useId = function () {
  return $e.current.useId();
};
j.useImperativeHandle = function (t, e, n) {
  return $e.current.useImperativeHandle(t, e, n);
};
j.useInsertionEffect = function (t, e) {
  return $e.current.useInsertionEffect(t, e);
};
j.useLayoutEffect = function (t, e) {
  return $e.current.useLayoutEffect(t, e);
};
j.useMemo = function (t, e) {
  return $e.current.useMemo(t, e);
};
j.useReducer = function (t, e, n) {
  return $e.current.useReducer(t, e, n);
};
j.useRef = function (t) {
  return $e.current.useRef(t);
};
j.useState = function (t) {
  return $e.current.useState(t);
};
j.useSyncExternalStore = function (t, e, n) {
  return $e.current.useSyncExternalStore(t, e, n);
};
j.useTransition = function () {
  return $e.current.useTransition();
};
j.version = "18.3.1";
qh.exports = j;
var C = qh.exports;
const ey = z0(C),
  ty = I0({ __proto__: null, default: ey }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ny = C,
  iy = Symbol.for("react.element"),
  ry = Symbol.for("react.fragment"),
  sy = Object.prototype.hasOwnProperty,
  oy = ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ay = { key: !0, ref: !0, __self: !0, __source: !0 };
function rp(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (i in e) sy.call(e, i) && !ay.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps) for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return { $$typeof: iy, type: t, key: s, ref: o, props: r, _owner: oy.current };
}
ua.Fragment = ry;
ua.jsx = rp;
ua.jsxs = rp;
Xh.exports = ua;
var b = Xh.exports,
  Sl = {},
  sp = { exports: {} },
  st = {},
  op = { exports: {} },
  ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(T, R) {
    var F = T.length;
    T.push(R);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        ee = T[K];
      if (0 < r(ee, R)) (T[K] = R), (T[F] = ee), (F = K);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function i(T) {
    if (T.length === 0) return null;
    var R = T[0],
      F = T.pop();
    if (F !== R) {
      T[0] = F;
      e: for (var K = 0, ee = T.length, Mt = ee >>> 1; K < Mt; ) {
        var We = 2 * (K + 1) - 1,
          zt = T[We],
          Be = We + 1,
          Ms = T[Be];
        if (0 > r(zt, F))
          Be < ee && 0 > r(Ms, zt) ? ((T[K] = Ms), (T[Be] = F), (K = Be)) : ((T[K] = zt), (T[We] = F), (K = We));
        else if (Be < ee && 0 > r(Ms, F)) (T[K] = Ms), (T[Be] = F), (K = Be);
        else break e;
      }
    }
    return R;
  }
  function r(T, R) {
    var F = T.sortIndex - R.sortIndex;
    return F !== 0 ? F : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    m = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) i(u);
      else if (R.startTime <= T) i(u), (R.sortIndex = R.expirationTime), e(l, R);
      else break;
      R = n(u);
    }
  }
  function _(T) {
    if (((y = !1), v(T), !m))
      if (n(l) !== null) (m = !0), X(w);
      else {
        var R = n(u);
        R !== null && J(_, R.startTime - T);
      }
  }
  function w(T, R) {
    (m = !1), y && ((y = !1), g(S), (S = -1)), (h = !0);
    var F = f;
    try {
      for (v(R), d = n(l); d !== null && (!(d.expirationTime > R) || (T && !N())); ) {
        var K = d.callback;
        if (typeof K == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ee = K(d.expirationTime <= R);
          (R = t.unstable_now()), typeof ee == "function" ? (d.callback = ee) : d === n(l) && i(l), v(R);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var Mt = !0;
      else {
        var We = n(u);
        We !== null && J(_, We.startTime - R), (Mt = !1);
      }
      return Mt;
    } finally {
      (d = null), (f = F), (h = !1);
    }
  }
  var P = !1,
    k = null,
    S = -1,
    D = 5,
    O = -1;
  function N() {
    return !(t.unstable_now() - O < D);
  }
  function I() {
    if (k !== null) {
      var T = t.unstable_now();
      O = T;
      var R = !0;
      try {
        R = k(!0, T);
      } finally {
        R ? q() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var q;
  if (typeof p == "function")
    q = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var Te = new MessageChannel(),
      $ = Te.port2;
    (Te.port1.onmessage = I),
      (q = function () {
        $.postMessage(null);
      });
  } else
    q = function () {
      x(I, 0);
    };
  function X(T) {
    (k = T), P || ((P = !0), q());
  }
  function J(T, R) {
    S = x(function () {
      T(t.unstable_now());
    }, R);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      m || h || ((m = !0), X(w));
    }),
    (t.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var F = f;
      f = R;
      try {
        return T();
      } finally {
        f = F;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var F = f;
      f = T;
      try {
        return R();
      } finally {
        f = F;
      }
    }),
    (t.unstable_scheduleCallback = function (T, R, F) {
      var K = t.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        T)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = F + ee),
        (T = { id: c++, callback: R, priorityLevel: T, startTime: F, expirationTime: ee, sortIndex: -1 }),
        F > K
          ? ((T.sortIndex = F), e(u, T), n(l) === null && T === n(u) && (y ? (g(S), (S = -1)) : (y = !0), J(_, F - K)))
          : ((T.sortIndex = ee), e(l, T), m || h || ((m = !0), X(w))),
        T
      );
    }),
    (t.unstable_shouldYield = N),
    (t.unstable_wrapCallback = function (T) {
      var R = f;
      return function () {
        var F = f;
        f = R;
        try {
          return T.apply(this, arguments);
        } finally {
          f = F;
        }
      };
    });
})(ap);
op.exports = ap;
var ly = op.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy = C,
  rt = ly;
function E(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lp = new Set(),
  Wr = {};
function ui(t, e) {
  Ii(t, e), Ii(t + "Capture", e);
}
function Ii(t, e) {
  for (Wr[t] = e, t = 0; t < e.length; t++) lp.add(e[t]);
}
var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ml = Object.prototype.hasOwnProperty,
  cy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sd = {},
  od = {};
function dy(t) {
  return Ml.call(od, t) ? !0 : Ml.call(sd, t) ? !1 : cy.test(t) ? (od[t] = !0) : ((sd[t] = !0), !1);
}
function fy(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function hy(t, e, n, i) {
  if (e === null || typeof e > "u" || fy(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ye(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Oe[t] = new Ye(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Oe[e] = new Ye(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Oe[t] = new Ye(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
  Oe[t] = new Ye(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Oe[t] = new Ye(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Oe[t] = new Ye(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Oe[t] = new Ye(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Oe[t] = new Ye(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Oe[t] = new Ye(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Vu = /[\-:]([a-z])/g;
function $u(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Vu, $u);
    Oe[e] = new Ye(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
  var e = t.replace(Vu, $u);
  Oe[e] = new Ye(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Vu, $u);
  Oe[e] = new Ye(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Oe[t] = new Ye(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (t) {
  Oe[t] = new Ye(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Yu(t, e, n, i) {
  var r = Oe.hasOwnProperty(e) ? Oe[e] : null;
  (r !== null
    ? r.type !== 0
    : i || !(2 < e.length) || (e[0] !== "o" && e[0] !== "O") || (e[1] !== "n" && e[1] !== "N")) &&
    (hy(e, n, r, i) && (n = null),
    i || r === null
      ? dy(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
      ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((e = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var nn = uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cs = Symbol.for("react.element"),
  vi = Symbol.for("react.portal"),
  xi = Symbol.for("react.fragment"),
  Uu = Symbol.for("react.strict_mode"),
  Pl = Symbol.for("react.profiler"),
  up = Symbol.for("react.provider"),
  cp = Symbol.for("react.context"),
  Qu = Symbol.for("react.forward_ref"),
  Cl = Symbol.for("react.suspense"),
  El = Symbol.for("react.suspense_list"),
  Xu = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  dp = Symbol.for("react.offscreen"),
  ad = Symbol.iterator;
function Ji(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (ad && t[ad]) || t["@@iterator"]), typeof t == "function" ? t : null);
}
var de = Object.assign,
  Fa;
function gr(t) {
  if (Fa === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Fa = (e && e[1]) || "";
    }
  return (
    `
` +
    Fa +
    t
  );
}
var Ia = !1;
function za(t, e) {
  if (!t || Ia) return "";
  Ia = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          i = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && r[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (r[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || r[o] !== s[a])) {
                var l =
                  `
` + r[o].replace(" at new ", " at ");
                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l;
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ia = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? gr(t) : "";
}
function py(t) {
  switch (t.tag) {
    case 5:
      return gr(t.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = za(t.type, !1)), t;
    case 11:
      return (t = za(t.type.render, !1)), t;
    case 1:
      return (t = za(t.type, !0)), t;
    default:
      return "";
  }
}
function Dl(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case xi:
      return "Fragment";
    case vi:
      return "Portal";
    case Pl:
      return "Profiler";
    case Uu:
      return "StrictMode";
    case Cl:
      return "Suspense";
    case El:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case cp:
        return (t.displayName || "Context") + ".Consumer";
      case up:
        return (t._context.displayName || "Context") + ".Provider";
      case Qu:
        var e = t.render;
        return (
          (t = t.displayName),
          t || ((t = e.displayName || e.name || ""), (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Xu:
        return (e = t.displayName || null), e !== null ? e : Dl(t.type) || "Memo";
      case ln:
        (e = t._payload), (t = t._init);
        try {
          return Dl(t(e));
        } catch {}
    }
  return null;
}
function gy(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Dl(e);
    case 8:
      return e === Uu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Dn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function fp(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function my(t) {
  var e = fp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Es(t) {
  t._valueTracker || (t._valueTracker = my(t));
}
function hp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return t && (i = fp(t) ? (t.checked ? "true" : "false") : t.value), (t = i), t !== n ? (e.setValue(t), !0) : !1;
}
function Co(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ol(t, e) {
  var n = e.checked;
  return de({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function ld(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = Dn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null,
    });
}
function pp(t, e) {
  (e = e.checked), e != null && Yu(t, "checked", e, !1);
}
function Tl(t, e) {
  pp(t, e);
  var n = Dn(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Ll(t, e.type, n) : e.hasOwnProperty("defaultValue") && Ll(t, e.type, Dn(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function ud(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (!((i !== "submit" && i !== "reset") || (e.value !== void 0 && e.value !== null))) return;
    (e = "" + t._wrapperState.initialValue), n || e === t.value || (t.value = e), (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Ll(t, e, n) {
  (e !== "number" || Co(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var mr = Array.isArray;
function Oi(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Dn(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function Rl(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
  return de({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function cd(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(E(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Dn(n) };
}
function gp(t, e) {
  var n = Dn(e.value),
    i = Dn(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function dd(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function mp(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nl(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? mp(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Ds,
  yp = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
      for (
        Ds = Ds || document.createElement("div"),
          Ds.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ds.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Br(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (t) {
  yy.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Mr[e] = Mr[t]);
  });
});
function vp(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Mr.hasOwnProperty(t) && Mr[t])
    ? ("" + e).trim()
    : e + "px";
}
function xp(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = vp(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var vy = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Al(t, e) {
  if (e) {
    if (vy[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(E(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(E(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(E(62));
  }
}
function Fl(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Il = null;
function qu(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var zl = null,
  Ti = null,
  Li = null;
function fd(t) {
  if ((t = ms(t))) {
    if (typeof zl != "function") throw Error(E(280));
    var e = t.stateNode;
    e && ((e = pa(e)), zl(t.stateNode, t.type, e));
  }
}
function _p(t) {
  Ti ? (Li ? Li.push(t) : (Li = [t])) : (Ti = t);
}
function wp() {
  if (Ti) {
    var t = Ti,
      e = Li;
    if (((Li = Ti = null), fd(t), e)) for (t = 0; t < e.length; t++) fd(e[t]);
  }
}
function bp(t, e) {
  return t(e);
}
function kp() {}
var ja = !1;
function Sp(t, e, n) {
  if (ja) return t(e, n);
  ja = !0;
  try {
    return bp(t, e, n);
  } finally {
    (ja = !1), (Ti !== null || Li !== null) && (kp(), wp());
  }
}
function Hr(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = pa(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type), (i = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(E(231, e, typeof n));
  return n;
}
var jl = !1;
if (Zt)
  try {
    var er = {};
    Object.defineProperty(er, "passive", {
      get: function () {
        jl = !0;
      },
    }),
      window.addEventListener("test", er, er),
      window.removeEventListener("test", er, er);
  } catch {
    jl = !1;
  }
function xy(t, e, n, i, r, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Pr = !1,
  Eo = null,
  Do = !1,
  Wl = null,
  _y = {
    onError: function (t) {
      (Pr = !0), (Eo = t);
    },
  };
function wy(t, e, n, i, r, s, o, a, l) {
  (Pr = !1), (Eo = null), xy.apply(_y, arguments);
}
function by(t, e, n, i, r, s, o, a, l) {
  if ((wy.apply(this, arguments), Pr)) {
    if (Pr) {
      var u = Eo;
      (Pr = !1), (Eo = null);
    } else throw Error(E(198));
    Do || ((Do = !0), (Wl = u));
  }
}
function ci(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Mp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
  }
  return null;
}
function hd(t) {
  if (ci(t) !== t) throw Error(E(188));
}
function ky(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = ci(t)), e === null)) throw Error(E(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return hd(r), t;
        if (s === i) return hd(r), e;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, a = r.child; a; ) {
        if (a === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (a === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (a === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== i) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? t : e;
}
function Pp(t) {
  return (t = ky(t)), t !== null ? Cp(t) : null;
}
function Cp(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Cp(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Ep = rt.unstable_scheduleCallback,
  pd = rt.unstable_cancelCallback,
  Sy = rt.unstable_shouldYield,
  My = rt.unstable_requestPaint,
  me = rt.unstable_now,
  Py = rt.unstable_getCurrentPriorityLevel,
  Ku = rt.unstable_ImmediatePriority,
  Dp = rt.unstable_UserBlockingPriority,
  Oo = rt.unstable_NormalPriority,
  Cy = rt.unstable_LowPriority,
  Op = rt.unstable_IdlePriority,
  ca = null,
  Nt = null;
function Ey(t) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ca, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : Ty,
  Dy = Math.log,
  Oy = Math.LN2;
function Ty(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Dy(t) / Oy) | 0)) | 0;
}
var Os = 64,
  Ts = 4194304;
function yr(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function To(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? (i = yr(a)) : ((s &= o), s !== 0 && (i = yr(s)));
  } else (o = n & ~r), o !== 0 ? (i = yr(o)) : s !== 0 && (i = yr(s));
  if (i === 0) return 0;
  if (e !== 0 && e !== i && !(e & r) && ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0)))
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; ) (n = 31 - _t(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function Ly(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ry(t, e) {
  for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes; 0 < s; ) {
    var o = 31 - _t(s),
      a = 1 << o,
      l = r[o];
    l === -1 ? (!(a & n) || a & i) && (r[o] = Ly(a, e)) : l <= e && (t.expiredLanes |= a), (s &= ~a);
  }
}
function Bl(t) {
  return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Tp() {
  var t = Os;
  return (Os <<= 1), !(Os & 4194240) && (Os = 64), t;
}
function Wa(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function ps(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - _t(e)),
    (t[e] = n);
}
function Ny(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - _t(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function Gu(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - _t(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var Q = 0;
function Lp(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rp,
  Zu,
  Np,
  Ap,
  Fp,
  Hl = !1,
  Ls = [],
  xn = null,
  _n = null,
  wn = null,
  Vr = new Map(),
  $r = new Map(),
  cn = [],
  Ay =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gd(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      _n = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(e.pointerId);
  }
}
function tr(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: i, nativeEvent: s, targetContainers: [r] }),
      e !== null && ((e = ms(e)), e !== null && Zu(e)),
      t)
    : ((t.eventSystemFlags |= i), (e = t.targetContainers), r !== null && e.indexOf(r) === -1 && e.push(r), t);
}
function Fy(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (xn = tr(xn, t, e, n, i, r)), !0;
    case "dragenter":
      return (_n = tr(_n, t, e, n, i, r)), !0;
    case "mouseover":
      return (wn = tr(wn, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return Vr.set(s, tr(Vr.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (s = r.pointerId), $r.set(s, tr($r.get(s) || null, t, e, n, i, r)), !0;
  }
  return !1;
}
function Ip(t) {
  var e = Xn(t.target);
  if (e !== null) {
    var n = ci(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Mp(n)), e !== null)) {
          (t.blockedOn = e),
            Fp(t.priority, function () {
              Np(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ao(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Vl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (Il = i), n.target.dispatchEvent(i), (Il = null);
    } else return (e = ms(n)), e !== null && Zu(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function md(t, e, n) {
  ao(t) && n.delete(e);
}
function Iy() {
  (Hl = !1),
    xn !== null && ao(xn) && (xn = null),
    _n !== null && ao(_n) && (_n = null),
    wn !== null && ao(wn) && (wn = null),
    Vr.forEach(md),
    $r.forEach(md);
}
function nr(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null), Hl || ((Hl = !0), rt.unstable_scheduleCallback(rt.unstable_NormalPriority, Iy)));
}
function Yr(t) {
  function e(r) {
    return nr(r, t);
  }
  if (0 < Ls.length) {
    nr(Ls[0], t);
    for (var n = 1; n < Ls.length; n++) {
      var i = Ls[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    xn !== null && nr(xn, t), _n !== null && nr(_n, t), wn !== null && nr(wn, t), Vr.forEach(e), $r.forEach(e), n = 0;
    n < cn.length;
    n++
  )
    (i = cn[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); ) Ip(n), n.blockedOn === null && cn.shift();
}
var Ri = nn.ReactCurrentBatchConfig,
  Lo = !0;
function zy(t, e, n, i) {
  var r = Q,
    s = Ri.transition;
  Ri.transition = null;
  try {
    (Q = 1), Ju(t, e, n, i);
  } finally {
    (Q = r), (Ri.transition = s);
  }
}
function jy(t, e, n, i) {
  var r = Q,
    s = Ri.transition;
  Ri.transition = null;
  try {
    (Q = 4), Ju(t, e, n, i);
  } finally {
    (Q = r), (Ri.transition = s);
  }
}
function Ju(t, e, n, i) {
  if (Lo) {
    var r = Vl(t, e, n, i);
    if (r === null) Ka(t, e, i, Ro, n), gd(t, i);
    else if (Fy(r, t, e, n, i)) i.stopPropagation();
    else if ((gd(t, i), e & 4 && -1 < Ay.indexOf(t))) {
      for (; r !== null; ) {
        var s = ms(r);
        if ((s !== null && Rp(s), (s = Vl(t, e, n, i)), s === null && Ka(t, e, i, Ro, n), s === r)) break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else Ka(t, e, i, null, n);
  }
}
var Ro = null;
function Vl(t, e, n, i) {
  if (((Ro = null), (t = qu(i)), (t = Xn(t)), t !== null))
    if (((e = ci(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Mp(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Ro = t), null;
}
function zp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Py()) {
        case Ku:
          return 1;
        case Dp:
          return 4;
        case Oo:
        case Cy:
          return 16;
        case Op:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null,
  ec = null,
  lo = null;
function jp() {
  if (lo) return lo;
  var t,
    e = ec,
    n = e.length,
    i,
    r = "value" in fn ? fn.value : fn.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (lo = r.slice(t, 1 < i ? 1 - i : void 0));
}
function uo(t) {
  var e = t.keyCode;
  return (
    "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Rs() {
  return !0;
}
function yd() {
  return !1;
}
function ot(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t) t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Rs : yd),
      (this.isPropagationStopped = yd),
      this
    );
  }
  return (
    de(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    e
  );
}
var qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tc = ot(qi),
  gs = de({}, qi, { view: 0, detail: 0 }),
  Wy = ot(gs),
  Ba,
  Ha,
  ir,
  da = de({}, gs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ir &&
            (ir && t.type === "mousemove"
              ? ((Ba = t.screenX - ir.screenX), (Ha = t.screenY - ir.screenY))
              : (Ha = Ba = 0),
            (ir = t)),
          Ba);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Ha;
    },
  }),
  vd = ot(da),
  By = de({}, da, { dataTransfer: 0 }),
  Hy = ot(By),
  Vy = de({}, gs, { relatedTarget: 0 }),
  Va = ot(Vy),
  $y = de({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = ot($y),
  Uy = de({}, qi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Qy = ot(Uy),
  Xy = de({}, qi, { data: 0 }),
  xd = ot(Xy),
  qy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Gy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zy(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Gy[t]) ? !!e[t] : !1;
}
function nc() {
  return Zy;
}
var Jy = de({}, gs, {
    key: function (t) {
      if (t.key) {
        var e = qy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = uo(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? Ky[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function (t) {
      return t.type === "keypress" ? uo(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress" ? uo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
  }),
  ev = ot(Jy),
  tv = de({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _d = ot(tv),
  nv = de({}, gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc,
  }),
  iv = ot(nv),
  rv = de({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = ot(rv),
  ov = de({}, da, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  av = ot(ov),
  lv = [9, 13, 27, 32],
  ic = Zt && "CompositionEvent" in window,
  Cr = null;
Zt && "documentMode" in document && (Cr = document.documentMode);
var uv = Zt && "TextEvent" in window && !Cr,
  Wp = Zt && (!ic || (Cr && 8 < Cr && 11 >= Cr)),
  wd = " ",
  bd = !1;
function Bp(t, e) {
  switch (t) {
    case "keyup":
      return lv.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hp(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var _i = !1;
function cv(t, e) {
  switch (t) {
    case "compositionend":
      return Hp(e);
    case "keypress":
      return e.which !== 32 ? null : ((bd = !0), wd);
    case "textInput":
      return (t = e.data), t === wd && bd ? null : t;
    default:
      return null;
  }
}
function dv(t, e) {
  if (_i) return t === "compositionend" || (!ic && Bp(t, e)) ? ((t = jp()), (lo = ec = fn = null), (_i = !1), t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Wp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var fv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function kd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!fv[t.type] : e === "textarea";
}
function Vp(t, e, n, i) {
  _p(i),
    (e = No(e, "onChange")),
    0 < e.length && ((n = new tc("onChange", "change", null, n, i)), t.push({ event: n, listeners: e }));
}
var Er = null,
  Ur = null;
function hv(t) {
  eg(t, 0);
}
function fa(t) {
  var e = ki(t);
  if (hp(e)) return t;
}
function pv(t, e) {
  if (t === "change") return e;
}
var $p = !1;
if (Zt) {
  var $a;
  if (Zt) {
    var Ya = "oninput" in document;
    if (!Ya) {
      var Sd = document.createElement("div");
      Sd.setAttribute("oninput", "return;"), (Ya = typeof Sd.oninput == "function");
    }
    $a = Ya;
  } else $a = !1;
  $p = $a && (!document.documentMode || 9 < document.documentMode);
}
function Md() {
  Er && (Er.detachEvent("onpropertychange", Yp), (Ur = Er = null));
}
function Yp(t) {
  if (t.propertyName === "value" && fa(Ur)) {
    var e = [];
    Vp(e, Ur, t, qu(t)), Sp(hv, e);
  }
}
function gv(t, e, n) {
  t === "focusin" ? (Md(), (Er = e), (Ur = n), Er.attachEvent("onpropertychange", Yp)) : t === "focusout" && Md();
}
function mv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return fa(Ur);
}
function yv(t, e) {
  if (t === "click") return fa(e);
}
function vv(t, e) {
  if (t === "input" || t === "change") return fa(e);
}
function xv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var kt = typeof Object.is == "function" ? Object.is : xv;
function Qr(t, e) {
  if (kt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Ml.call(e, r) || !kt(t[r], e[r])) return !1;
  }
  return !0;
}
function Pd(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Cd(t, e) {
  var n = Pd(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e)) return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pd(n);
  }
}
function Up(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Up(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Qp() {
  for (var t = window, e = Co(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Co(t.document);
  }
  return e;
}
function rc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function _v(t) {
  var e = Qp(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Up(n.ownerDocument.documentElement, n)) {
    if (i !== null && rc(n)) {
      if (((e = i.start), (t = i.end), t === void 0 && (t = e), "selectionStart" in n))
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (((t = ((e = n.ownerDocument || document) && e.defaultView) || window), t.getSelection)) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Cd(n, s));
        var o = Cd(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
  }
}
var wv = Zt && "documentMode" in document && 11 >= document.documentMode,
  wi = null,
  $l = null,
  Dr = null,
  Yl = !1;
function Ed(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yl ||
    wi == null ||
    wi !== Co(i) ||
    ((i = wi),
    "selectionStart" in i && rc(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Dr && Qr(Dr, i)) ||
      ((Dr = i),
      (i = No($l, "onSelect")),
      0 < i.length &&
        ((e = new tc("onSelect", "select", null, e, n)), t.push({ event: e, listeners: i }), (e.target = wi))));
}
function Ns(t, e) {
  var n = {};
  return (n[t.toLowerCase()] = e.toLowerCase()), (n["Webkit" + t] = "webkit" + e), (n["Moz" + t] = "moz" + e), n;
}
var bi = {
    animationend: Ns("Animation", "AnimationEnd"),
    animationiteration: Ns("Animation", "AnimationIteration"),
    animationstart: Ns("Animation", "AnimationStart"),
    transitionend: Ns("Transition", "TransitionEnd"),
  },
  Ua = {},
  Xp = {};
Zt &&
  ((Xp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation),
  "TransitionEvent" in window || delete bi.transitionend.transition);
function ha(t) {
  if (Ua[t]) return Ua[t];
  if (!bi[t]) return t;
  var e = bi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Xp) return (Ua[t] = e[n]);
  return t;
}
var qp = ha("animationend"),
  Kp = ha("animationiteration"),
  Gp = ha("animationstart"),
  Zp = ha("transitionend"),
  Jp = new Map(),
  Dd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rn(t, e) {
  Jp.set(t, e), ui(e, [t]);
}
for (var Qa = 0; Qa < Dd.length; Qa++) {
  var Xa = Dd[Qa],
    bv = Xa.toLowerCase(),
    kv = Xa[0].toUpperCase() + Xa.slice(1);
  Rn(bv, "on" + kv);
}
Rn(qp, "onAnimationEnd");
Rn(Kp, "onAnimationIteration");
Rn(Gp, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(Zp, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
ui("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ui("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ui("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ui("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ui("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Sv = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function Od(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), by(i, e, void 0, t), (t.currentTarget = null);
}
function eg(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var a = i[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && r.isPropagationStopped())) break e;
          Od(r, a, u), (s = l);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((a = i[o]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== s && r.isPropagationStopped())
          )
            break e;
          Od(r, a, u), (s = l);
        }
    }
  }
  if (Do) throw ((t = Wl), (Do = !1), (Wl = null), t);
}
function te(t, e) {
  var n = e[Kl];
  n === void 0 && (n = e[Kl] = new Set());
  var i = t + "__bubble";
  n.has(i) || (tg(e, t, 2, !1), n.add(i));
}
function qa(t, e, n) {
  var i = 0;
  e && (i |= 4), tg(n, t, i, e);
}
var As = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(t) {
  if (!t[As]) {
    (t[As] = !0),
      lp.forEach(function (n) {
        n !== "selectionchange" && (Sv.has(n) || qa(n, !1, t), qa(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[As] || ((e[As] = !0), qa("selectionchange", !1, e));
  }
}
function tg(t, e, n, i) {
  switch (zp(e)) {
    case 1:
      var r = zy;
      break;
    case 4:
      r = jy;
      break;
    default:
      r = Ju;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !jl || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
      ? t.addEventListener(e, n, { passive: r })
      : t.addEventListener(e, n, !1);
}
function Ka(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var a = i.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Xn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  Sp(function () {
    var u = s,
      c = qu(n),
      d = [];
    e: {
      var f = Jp.get(t);
      if (f !== void 0) {
        var h = tc,
          m = t;
        switch (t) {
          case "keypress":
            if (uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = ev;
            break;
          case "focusin":
            (m = "focus"), (h = Va);
            break;
          case "focusout":
            (m = "blur"), (h = Va);
            break;
          case "beforeblur":
          case "afterblur":
            h = Va;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = vd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Hy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = iv;
            break;
          case qp:
          case Kp:
          case Gp:
            h = Yy;
            break;
          case Zp:
            h = sv;
            break;
          case "scroll":
            h = Wy;
            break;
          case "wheel":
            h = av;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Qy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = _d;
        }
        var y = (e & 4) !== 0,
          x = !y && t === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var _ = v.stateNode;
          if (
            (v.tag === 5 && _ !== null && ((v = _), g !== null && ((_ = Hr(p, g)), _ != null && y.push(qr(p, _, v)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < y.length && ((f = new h(f, m, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (h = t === "mouseout" || t === "pointerout"),
          f && n !== Il && (m = n.relatedTarget || n.fromElement) && (Xn(m) || m[Jt]))
        )
          break e;
        if (
          (h || f) &&
          ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = u),
              (m = m ? Xn(m) : null),
              m !== null && ((x = ci(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((y = vd),
            (_ = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = _d), (_ = "onPointerLeave"), (g = "onPointerEnter"), (p = "pointer")),
            (x = h == null ? f : ki(h)),
            (v = m == null ? f : ki(m)),
            (f = new y(_, p + "leave", h, n, c)),
            (f.target = x),
            (f.relatedTarget = v),
            (_ = null),
            Xn(c) === u && ((y = new y(g, p + "enter", m, n, c)), (y.target = v), (y.relatedTarget = x), (_ = y)),
            (x = _),
            h && m)
          )
            t: {
              for (y = h, g = m, p = 0, v = y; v; v = pi(v)) p++;
              for (v = 0, _ = g; _; _ = pi(_)) v++;
              for (; 0 < p - v; ) (y = pi(y)), p--;
              for (; 0 < v - p; ) (g = pi(g)), v--;
              for (; p--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = pi(y)), (g = pi(g));
              }
              y = null;
            }
          else y = null;
          h !== null && Td(d, f, h, y, !1), m !== null && x !== null && Td(d, x, m, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? ki(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var w = pv;
        else if (kd(f))
          if ($p) w = vv;
          else {
            w = mv;
            var P = gv;
          }
        else
          (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (w = yv);
        if (w && (w = w(t, u))) {
          Vp(d, w, n, c);
          break e;
        }
        P && P(t, f, u),
          t === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Ll(f, "number", f.value);
      }
      switch (((P = u ? ki(u) : window), t)) {
        case "focusin":
          (kd(P) || P.contentEditable === "true") && ((wi = P), ($l = u), (Dr = null));
          break;
        case "focusout":
          Dr = $l = wi = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), Ed(d, n, c);
          break;
        case "selectionchange":
          if (wv) break;
        case "keydown":
        case "keyup":
          Ed(d, n, c);
      }
      var k;
      if (ic)
        e: {
          switch (t) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        _i ? Bp(t, n) && (S = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S &&
        (Wp &&
          n.locale !== "ko" &&
          (_i || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && _i && (k = jp())
            : ((fn = c), (ec = "value" in fn ? fn.value : fn.textContent), (_i = !0))),
        (P = No(u, S)),
        0 < P.length &&
          ((S = new xd(S, t, null, n, c)),
          d.push({ event: S, listeners: P }),
          k ? (S.data = k) : ((k = Hp(n)), k !== null && (S.data = k)))),
        (k = uv ? cv(t, n) : dv(t, n)) &&
          ((u = No(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new xd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    eg(d, e);
  });
}
function qr(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function No(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s), (s = Hr(t, n)), s != null && i.unshift(qr(t, s, r)), (s = Hr(t, e)), s != null && i.push(qr(t, s, r))),
      (t = t.return);
  }
  return i;
}
function pi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Td(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = Hr(n, s)), l != null && o.unshift(qr(n, l, a)))
        : r || ((l = Hr(n, s)), l != null && o.push(qr(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var Mv = /\r\n?/g,
  Pv = /\u0000|\uFFFD/g;
function Ld(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Mv,
      `
`
    )
    .replace(Pv, "");
}
function Fs(t, e, n) {
  if (((e = Ld(e)), Ld(t) !== e && n)) throw Error(E(425));
}
function Ao() {}
var Ul = null,
  Ql = null;
function Xl(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0,
  Cv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Rd = typeof Promise == "function" ? Promise : void 0,
  Ev =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Rd < "u"
      ? function (t) {
          return Rd.resolve(null).then(t).catch(Dv);
        }
      : ql;
function Dv(t) {
  setTimeout(function () {
    throw t;
  });
}
function Ga(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), Yr(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  Yr(e);
}
function bn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Nd(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Ki = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + Ki,
  Kr = "__reactProps$" + Ki,
  Jt = "__reactContainer$" + Ki,
  Kl = "__reactEvents$" + Ki,
  Ov = "__reactListeners$" + Ki,
  Tv = "__reactHandles$" + Ki;
function Xn(t) {
  var e = t[Tt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Jt] || n[Tt])) {
      if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
        for (t = Nd(t); t !== null; ) {
          if ((n = t[Tt])) return n;
          t = Nd(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function ms(t) {
  return (t = t[Tt] || t[Jt]), !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t;
}
function ki(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(E(33));
}
function pa(t) {
  return t[Kr] || null;
}
var Gl = [],
  Si = -1;
function Nn(t) {
  return { current: t };
}
function ie(t) {
  0 > Si || ((t.current = Gl[Si]), (Gl[Si] = null), Si--);
}
function Z(t, e) {
  Si++, (Gl[Si] = t.current), (t.current = e);
}
var On = {},
  ze = Nn(On),
  Ke = Nn(!1),
  ni = On;
function zi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return On;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Ge(t) {
  return (t = t.childContextTypes), t != null;
}
function Fo() {
  ie(Ke), ie(ze);
}
function Ad(t, e, n) {
  if (ze.current !== On) throw Error(E(168));
  Z(ze, e), Z(Ke, n);
}
function ng(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function")) return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(E(108, gy(t) || "Unknown", r));
  return de({}, n, i);
}
function Io(t) {
  return (
    (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || On),
    (ni = ze.current),
    Z(ze, t),
    Z(Ke, Ke.current),
    !0
  );
}
function Fd(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(E(169));
  n ? ((t = ng(t, e, ni)), (i.__reactInternalMemoizedMergedChildContext = t), ie(Ke), ie(ze), Z(ze, t)) : ie(Ke),
    Z(Ke, n);
}
var Vt = null,
  ga = !1,
  Za = !1;
function ig(t) {
  Vt === null ? (Vt = [t]) : Vt.push(t);
}
function Lv(t) {
  (ga = !0), ig(t);
}
function An() {
  if (!Za && Vt !== null) {
    Za = !0;
    var t = 0,
      e = Q;
    try {
      var n = Vt;
      for (Q = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (Vt = null), (ga = !1);
    } catch (r) {
      throw (Vt !== null && (Vt = Vt.slice(t + 1)), Ep(Ku, An), r);
    } finally {
      (Q = e), (Za = !1);
    }
  }
  return null;
}
var Mi = [],
  Pi = 0,
  zo = null,
  jo = 0,
  lt = [],
  ut = 0,
  ii = null,
  Ut = 1,
  Qt = "";
function Hn(t, e) {
  (Mi[Pi++] = jo), (Mi[Pi++] = zo), (zo = t), (jo = e);
}
function rg(t, e, n) {
  (lt[ut++] = Ut), (lt[ut++] = Qt), (lt[ut++] = ii), (ii = t);
  var i = Ut;
  t = Qt;
  var r = 32 - _t(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - _t(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Ut = (1 << (32 - _t(e) + r)) | (n << r) | i),
      (Qt = s + t);
  } else (Ut = (1 << s) | (n << r) | i), (Qt = t);
}
function sc(t) {
  t.return !== null && (Hn(t, 1), rg(t, 1, 0));
}
function oc(t) {
  for (; t === zo; ) (zo = Mi[--Pi]), (Mi[Pi] = null), (jo = Mi[--Pi]), (Mi[Pi] = null);
  for (; t === ii; )
    (ii = lt[--ut]), (lt[ut] = null), (Qt = lt[--ut]), (lt[ut] = null), (Ut = lt[--ut]), (lt[ut] = null);
}
var it = null,
  nt = null,
  oe = !1,
  vt = null;
function sg(t, e) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Id(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
        e !== null ? ((t.stateNode = e), (it = t), (nt = bn(e.firstChild)), !0) : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (it = t), (nt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = ii !== null ? { id: Ut, overflow: Qt } : null),
            (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (it = t),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zl(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Jl(t) {
  if (oe) {
    var e = nt;
    if (e) {
      var n = e;
      if (!Id(t, e)) {
        if (Zl(t)) throw Error(E(418));
        e = bn(n.nextSibling);
        var i = it;
        e && Id(t, e) ? sg(i, n) : ((t.flags = (t.flags & -4097) | 2), (oe = !1), (it = t));
      }
    } else {
      if (Zl(t)) throw Error(E(418));
      (t.flags = (t.flags & -4097) | 2), (oe = !1), (it = t);
    }
  }
}
function zd(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  it = t;
}
function Is(t) {
  if (t !== it) return !1;
  if (!oe) return zd(t), (oe = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type), (e = e !== "head" && e !== "body" && !Xl(t.type, t.memoizedProps))),
    e && (e = nt))
  ) {
    if (Zl(t)) throw (og(), Error(E(418)));
    for (; e; ) sg(t, e), (e = bn(e.nextSibling));
  }
  if ((zd(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(E(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              nt = bn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      nt = null;
    }
  } else nt = it ? bn(t.stateNode.nextSibling) : null;
  return !0;
}
function og() {
  for (var t = nt; t; ) t = bn(t.nextSibling);
}
function ji() {
  (nt = it = null), (oe = !1);
}
function ac(t) {
  vt === null ? (vt = [t]) : vt.push(t);
}
var Rv = nn.ReactCurrentBatchConfig;
function rr(t, e, n) {
  if (((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(E(147, t));
      var r = i,
        s = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = r.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, t));
  }
  return t;
}
function zs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(E(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
  );
}
function jd(t) {
  var e = t._init;
  return e(t._payload);
}
function ag(t) {
  function e(g, p) {
    if (t) {
      var v = g.deletions;
      v === null ? ((g.deletions = [p]), (g.flags |= 16)) : v.push(p);
    }
  }
  function n(g, p) {
    if (!t) return null;
    for (; p !== null; ) e(g, p), (p = p.sibling);
    return null;
  }
  function i(g, p) {
    for (g = new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function r(g, p) {
    return (g = Pn(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, p, v) {
    return (
      (g.index = v),
      t
        ? ((v = g.alternate), v !== null ? ((v = v.index), v < p ? ((g.flags |= 2), p) : v) : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function o(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, p, v, _) {
    return p === null || p.tag !== 6 ? ((p = sl(v, g.mode, _)), (p.return = g), p) : ((p = r(p, v)), (p.return = g), p);
  }
  function l(g, p, v, _) {
    var w = v.type;
    return w === xi
      ? c(g, p, v.props.children, _, v.key)
      : p !== null &&
        (p.elementType === w || (typeof w == "object" && w !== null && w.$$typeof === ln && jd(w) === p.type))
      ? ((_ = r(p, v.props)), (_.ref = rr(g, p, v)), (_.return = g), _)
      : ((_ = yo(v.type, v.key, v.props, null, g.mode, _)), (_.ref = rr(g, p, v)), (_.return = g), _);
  }
  function u(g, p, v, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = ol(v, g.mode, _)), (p.return = g), p)
      : ((p = r(p, v.children || [])), (p.return = g), p);
  }
  function c(g, p, v, _, w) {
    return p === null || p.tag !== 7
      ? ((p = Jn(v, g.mode, _, w)), (p.return = g), p)
      : ((p = r(p, v)), (p.return = g), p);
  }
  function d(g, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = sl("" + p, g.mode, v)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Cs:
          return (v = yo(p.type, p.key, p.props, null, g.mode, v)), (v.ref = rr(g, null, p)), (v.return = g), v;
        case vi:
          return (p = ol(p, g.mode, v)), (p.return = g), p;
        case ln:
          var _ = p._init;
          return d(g, _(p._payload), v);
      }
      if (mr(p) || Ji(p)) return (p = Jn(p, g.mode, v, null)), (p.return = g), p;
      zs(g, p);
    }
    return null;
  }
  function f(g, p, v, _) {
    var w = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number") return w !== null ? null : a(g, p, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cs:
          return v.key === w ? l(g, p, v, _) : null;
        case vi:
          return v.key === w ? u(g, p, v, _) : null;
        case ln:
          return (w = v._init), f(g, p, w(v._payload), _);
      }
      if (mr(v) || Ji(v)) return w !== null ? null : c(g, p, v, _, null);
      zs(g, v);
    }
    return null;
  }
  function h(g, p, v, _, w) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number") return (g = g.get(v) || null), a(p, g, "" + _, w);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Cs:
          return (g = g.get(_.key === null ? v : _.key) || null), l(p, g, _, w);
        case vi:
          return (g = g.get(_.key === null ? v : _.key) || null), u(p, g, _, w);
        case ln:
          var P = _._init;
          return h(g, p, v, P(_._payload), w);
      }
      if (mr(_) || Ji(_)) return (g = g.get(v) || null), c(p, g, _, w, null);
      zs(p, _);
    }
    return null;
  }
  function m(g, p, v, _) {
    for (var w = null, P = null, k = p, S = (p = 0), D = null; k !== null && S < v.length; S++) {
      k.index > S ? ((D = k), (k = null)) : (D = k.sibling);
      var O = f(g, k, v[S], _);
      if (O === null) {
        k === null && (k = D);
        break;
      }
      t && k && O.alternate === null && e(g, k),
        (p = s(O, p, S)),
        P === null ? (w = O) : (P.sibling = O),
        (P = O),
        (k = D);
    }
    if (S === v.length) return n(g, k), oe && Hn(g, S), w;
    if (k === null) {
      for (; S < v.length; S++)
        (k = d(g, v[S], _)), k !== null && ((p = s(k, p, S)), P === null ? (w = k) : (P.sibling = k), (P = k));
      return oe && Hn(g, S), w;
    }
    for (k = i(g, k); S < v.length; S++)
      (D = h(k, g, S, v[S], _)),
        D !== null &&
          (t && D.alternate !== null && k.delete(D.key === null ? S : D.key),
          (p = s(D, p, S)),
          P === null ? (w = D) : (P.sibling = D),
          (P = D));
    return (
      t &&
        k.forEach(function (N) {
          return e(g, N);
        }),
      oe && Hn(g, S),
      w
    );
  }
  function y(g, p, v, _) {
    var w = Ji(v);
    if (typeof w != "function") throw Error(E(150));
    if (((v = w.call(v)), v == null)) throw Error(E(151));
    for (var P = (w = null), k = p, S = (p = 0), D = null, O = v.next(); k !== null && !O.done; S++, O = v.next()) {
      k.index > S ? ((D = k), (k = null)) : (D = k.sibling);
      var N = f(g, k, O.value, _);
      if (N === null) {
        k === null && (k = D);
        break;
      }
      t && k && N.alternate === null && e(g, k),
        (p = s(N, p, S)),
        P === null ? (w = N) : (P.sibling = N),
        (P = N),
        (k = D);
    }
    if (O.done) return n(g, k), oe && Hn(g, S), w;
    if (k === null) {
      for (; !O.done; S++, O = v.next())
        (O = d(g, O.value, _)), O !== null && ((p = s(O, p, S)), P === null ? (w = O) : (P.sibling = O), (P = O));
      return oe && Hn(g, S), w;
    }
    for (k = i(g, k); !O.done; S++, O = v.next())
      (O = h(k, g, S, O.value, _)),
        O !== null &&
          (t && O.alternate !== null && k.delete(O.key === null ? S : O.key),
          (p = s(O, p, S)),
          P === null ? (w = O) : (P.sibling = O),
          (P = O));
    return (
      t &&
        k.forEach(function (I) {
          return e(g, I);
        }),
      oe && Hn(g, S),
      w
    );
  }
  function x(g, p, v, _) {
    if (
      (typeof v == "object" && v !== null && v.type === xi && v.key === null && (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Cs:
          e: {
            for (var w = v.key, P = p; P !== null; ) {
              if (P.key === w) {
                if (((w = v.type), w === xi)) {
                  if (P.tag === 7) {
                    n(g, P.sibling), (p = r(P, v.props.children)), (p.return = g), (g = p);
                    break e;
                  }
                } else if (
                  P.elementType === w ||
                  (typeof w == "object" && w !== null && w.$$typeof === ln && jd(w) === P.type)
                ) {
                  n(g, P.sibling), (p = r(P, v.props)), (p.ref = rr(g, P, v)), (p.return = g), (g = p);
                  break e;
                }
                n(g, P);
                break;
              } else e(g, P);
              P = P.sibling;
            }
            v.type === xi
              ? ((p = Jn(v.props.children, g.mode, _, v.key)), (p.return = g), (g = p))
              : ((_ = yo(v.type, v.key, v.props, null, g.mode, _)), (_.ref = rr(g, p, v)), (_.return = g), (g = _));
          }
          return o(g);
        case vi:
          e: {
            for (P = v.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(g, p.sibling), (p = r(p, v.children || [])), (p.return = g), (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else e(g, p);
              p = p.sibling;
            }
            (p = ol(v, g.mode, _)), (p.return = g), (g = p);
          }
          return o(g);
        case ln:
          return (P = v._init), x(g, p, P(v._payload), _);
      }
      if (mr(v)) return m(g, p, v, _);
      if (Ji(v)) return y(g, p, v, _);
      zs(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = r(p, v)), (p.return = g), (g = p))
          : (n(g, p), (p = sl(v, g.mode, _)), (p.return = g), (g = p)),
        o(g))
      : n(g, p);
  }
  return x;
}
var Wi = ag(!0),
  lg = ag(!1),
  Wo = Nn(null),
  Bo = null,
  Ci = null,
  lc = null;
function uc() {
  lc = Ci = Bo = null;
}
function cc(t) {
  var e = Wo.current;
  ie(Wo), (t._currentValue = e);
}
function eu(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Ni(t, e) {
  (Bo = t),
    (lc = Ci = null),
    (t = t.dependencies),
    t !== null && t.firstContext !== null && (t.lanes & e && (qe = !0), (t.firstContext = null));
}
function ft(t) {
  var e = t._currentValue;
  if (lc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ci === null)) {
      if (Bo === null) throw Error(E(308));
      (Ci = t), (Bo.dependencies = { lanes: 0, firstContext: t });
    } else Ci = Ci.next = t;
  return e;
}
var qn = null;
function dc(t) {
  qn === null ? (qn = [t]) : qn.push(t);
}
function ug(t, e, n, i) {
  var r = e.interleaved;
  return r === null ? ((n.next = n), dc(e)) : ((n.next = r.next), (r.next = n)), (e.interleaved = n), en(t, i);
}
function en(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e), (n = t.alternate), n !== null && (n.childLanes |= e), (n = t), (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function fc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cg(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Gt(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function kn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), B & 2)) {
    var r = i.pending;
    return r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)), (i.pending = e), en(t, n);
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), dc(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    en(t, n)
  );
}
function co(t, e, n) {
  if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Gu(t, n);
  }
}
function Wd(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = { baseState: i.baseState, firstBaseUpdate: r, lastBaseUpdate: s, shared: i.shared, effects: i.effects }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate), t === null ? (n.firstBaseUpdate = e) : (t.next = e), (n.lastBaseUpdate = e);
}
function Ho(t, e, n, i) {
  var r = t.updateQueue;
  un = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = r.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((i & f) === f) {
        c !== null &&
          (c = c.next = { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var m = t,
            y = a;
          switch (((f = e), (h = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                d = m.call(h, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (((m = y.payload), (f = typeof m == "function" ? m.call(h, d, f) : m), f == null)) break e;
              d = de({}, d, f);
              break e;
            case 2:
              un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64), (f = r.effects), f === null ? (r.effects = [a]) : f.push(a));
      } else
        (h = { eventTime: h, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (r.lastBaseUpdate = f), (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (si |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function Bd(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function")) throw Error(E(191, r));
        r.call(i);
      }
    }
}
var ys = {},
  At = Nn(ys),
  Gr = Nn(ys),
  Zr = Nn(ys);
function Kn(t) {
  if (t === ys) throw Error(E(174));
  return t;
}
function hc(t, e) {
  switch ((Z(Zr, e), Z(Gr, t), Z(At, ys), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Nl(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e), (e = t.namespaceURI || null), (t = t.tagName), (e = Nl(e, t));
  }
  ie(At), Z(At, e);
}
function Bi() {
  ie(At), ie(Gr), ie(Zr);
}
function dg(t) {
  Kn(Zr.current);
  var e = Kn(At.current),
    n = Nl(e, t.type);
  e !== n && (Z(Gr, t), Z(At, n));
}
function pc(t) {
  Gr.current === t && (ie(At), ie(Gr));
}
var le = Nn(0);
function Vo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Ja = [];
function gc() {
  for (var t = 0; t < Ja.length; t++) Ja[t]._workInProgressVersionPrimary = null;
  Ja.length = 0;
}
var fo = nn.ReactCurrentDispatcher,
  el = nn.ReactCurrentBatchConfig,
  ri = 0,
  ce = null,
  be = null,
  Me = null,
  $o = !1,
  Or = !1,
  Jr = 0,
  Nv = 0;
function Le() {
  throw Error(E(321));
}
function mc(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!kt(t[n], e[n])) return !1;
  return !0;
}
function yc(t, e, n, i, r, s) {
  if (
    ((ri = s),
    (ce = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (fo.current = t === null || t.memoizedState === null ? zv : jv),
    (t = n(i, r)),
    Or)
  ) {
    s = 0;
    do {
      if (((Or = !1), (Jr = 0), 25 <= s)) throw Error(E(301));
      (s += 1), (Me = be = null), (e.updateQueue = null), (fo.current = Wv), (t = n(i, r));
    } while (Or);
  }
  if (((fo.current = Yo), (e = be !== null && be.next !== null), (ri = 0), (Me = be = ce = null), ($o = !1), e))
    throw Error(E(300));
  return t;
}
function vc() {
  var t = Jr !== 0;
  return (Jr = 0), t;
}
function Dt() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? (ce.memoizedState = Me = t) : (Me = Me.next = t), Me;
}
function ht() {
  if (be === null) {
    var t = ce.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = be.next;
  var e = Me === null ? ce.memoizedState : Me.next;
  if (e !== null) (Me = e), (be = t);
  else {
    if (t === null) throw Error(E(310));
    (be = t),
      (t = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Me === null ? (ce.memoizedState = Me = t) : (Me = Me.next = t);
  }
  return Me;
}
function es(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function tl(t) {
  var e = ht(),
    n = e.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = t;
  var i = be,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((ri & c) === c)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (i = u.hasEagerState ? u.eagerState : t(i, u.action));
      else {
        var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((a = l = d), (o = i)) : (l = l.next = d), (ce.lanes |= c), (si |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = i) : (l.next = a),
      kt(i, e.memoizedState) || (qe = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (ce.lanes |= s), (si |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function nl(t) {
  var e = ht(),
    n = e.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    kt(s, e.memoizedState) || (qe = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function fg() {}
function hg(t, e) {
  var n = ce,
    i = ht(),
    r = e(),
    s = !kt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (qe = !0)),
    (i = i.queue),
    xc(mg.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ts(9, gg.bind(null, n, i, r, e), void 0, null), Ce === null)) throw Error(E(349));
    ri & 30 || pg(n, e, r);
  }
  return r;
}
function pg(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ce.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (ce.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function gg(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), yg(e) && vg(t);
}
function mg(t, e, n) {
  return n(function () {
    yg(e) && vg(t);
  });
}
function yg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !kt(t, n);
  } catch {
    return !0;
  }
}
function vg(t) {
  var e = en(t, 1);
  e !== null && wt(e, t, 1, -1);
}
function Hd(t) {
  var e = Dt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: es, lastRenderedState: t }),
    (e.queue = t),
    (t = t.dispatch = Iv.bind(null, ce, t)),
    [e.memoizedState, t]
  );
}
function ts(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = ce.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (ce.updateQueue = e), (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null ? (e.lastEffect = t.next = t) : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function xg() {
  return ht().memoizedState;
}
function ho(t, e, n, i) {
  var r = Dt();
  (ce.flags |= t), (r.memoizedState = ts(1 | e, n, void 0, i === void 0 ? null : i));
}
function ma(t, e, n, i) {
  var r = ht();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (be !== null) {
    var o = be.memoizedState;
    if (((s = o.destroy), i !== null && mc(i, o.deps))) {
      r.memoizedState = ts(e, n, s, i);
      return;
    }
  }
  (ce.flags |= t), (r.memoizedState = ts(1 | e, n, s, i));
}
function Vd(t, e) {
  return ho(8390656, 8, t, e);
}
function xc(t, e) {
  return ma(2048, 8, t, e);
}
function _g(t, e) {
  return ma(4, 2, t, e);
}
function wg(t, e) {
  return ma(4, 4, t, e);
}
function bg(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function kg(t, e, n) {
  return (n = n != null ? n.concat([t]) : null), ma(4, 4, bg.bind(null, e, t), n);
}
function _c() {}
function Sg(t, e) {
  var n = ht();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && mc(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
}
function Mg(t, e) {
  var n = ht();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && mc(e, i[1]) ? i[0] : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Pg(t, e, n) {
  return ri & 21
    ? (kt(n, e) || ((n = Tp()), (ce.lanes |= n), (si |= n), (t.baseState = !0)), e)
    : (t.baseState && ((t.baseState = !1), (qe = !0)), (t.memoizedState = n));
}
function Av(t, e) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = el.transition;
  el.transition = {};
  try {
    t(!1), e();
  } finally {
    (Q = n), (el.transition = i);
  }
}
function Cg() {
  return ht().memoizedState;
}
function Fv(t, e, n) {
  var i = Mn(t);
  if (((n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }), Eg(t))) Dg(e, n);
  else if (((n = ug(t, e, n, i)), n !== null)) {
    var r = Ve();
    wt(n, t, i, r), Og(n, e, i);
  }
}
function Iv(t, e, n) {
  var i = Mn(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Eg(t)) Dg(e, r);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = a), kt(a, o))) {
          var l = e.interleaved;
          l === null ? ((r.next = r), dc(e)) : ((r.next = l.next), (l.next = r)), (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = ug(t, e, r, i)), n !== null && ((r = Ve()), wt(n, t, i, r), Og(n, e, i));
  }
}
function Eg(t) {
  var e = t.alternate;
  return t === ce || (e !== null && e === ce);
}
function Dg(t, e) {
  Or = $o = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function Og(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Gu(t, n);
  }
}
var Yo = {
    readContext: ft,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  zv = {
    readContext: ft,
    useCallback: function (t, e) {
      return (Dt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: ft,
    useEffect: Vd,
    useImperativeHandle: function (t, e, n) {
      return (n = n != null ? n.concat([t]) : null), ho(4194308, 4, bg.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return ho(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ho(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Dt();
      return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
    },
    useReducer: function (t, e, n) {
      var i = Dt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = Fv.bind(null, ce, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Dt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Hd,
    useDebugValue: _c,
    useDeferredValue: function (t) {
      return (Dt().memoizedState = t);
    },
    useTransition: function () {
      var t = Hd(!1),
        e = t[0];
      return (t = Av.bind(null, t[1])), (Dt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = ce,
        r = Dt();
      if (oe) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = e()), Ce === null)) throw Error(E(349));
        ri & 30 || pg(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        Vd(mg.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        ts(9, gg.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Dt(),
        e = Ce.identifierPrefix;
      if (oe) {
        var n = Qt,
          i = Ut;
        (n = (i & ~(1 << (32 - _t(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Jr++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Nv++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  jv = {
    readContext: ft,
    useCallback: Sg,
    useContext: ft,
    useEffect: xc,
    useImperativeHandle: kg,
    useInsertionEffect: _g,
    useLayoutEffect: wg,
    useMemo: Mg,
    useReducer: tl,
    useRef: xg,
    useState: function () {
      return tl(es);
    },
    useDebugValue: _c,
    useDeferredValue: function (t) {
      var e = ht();
      return Pg(e, be.memoizedState, t);
    },
    useTransition: function () {
      var t = tl(es)[0],
        e = ht().memoizedState;
      return [t, e];
    },
    useMutableSource: fg,
    useSyncExternalStore: hg,
    useId: Cg,
    unstable_isNewReconciler: !1,
  },
  Wv = {
    readContext: ft,
    useCallback: Sg,
    useContext: ft,
    useEffect: xc,
    useImperativeHandle: kg,
    useInsertionEffect: _g,
    useLayoutEffect: wg,
    useMemo: Mg,
    useReducer: nl,
    useRef: xg,
    useState: function () {
      return nl(es);
    },
    useDebugValue: _c,
    useDeferredValue: function (t) {
      var e = ht();
      return be === null ? (e.memoizedState = t) : Pg(e, be.memoizedState, t);
    },
    useTransition: function () {
      var t = nl(es)[0],
        e = ht().memoizedState;
      return [t, e];
    },
    useMutableSource: fg,
    useSyncExternalStore: hg,
    useId: Cg,
    unstable_isNewReconciler: !1,
  };
function mt(t, e) {
  if (t && t.defaultProps) {
    (e = de({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function tu(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : de({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ya = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? ci(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = Ve(),
      r = Mn(t),
      s = Gt(i, r);
    (s.payload = e), n != null && (s.callback = n), (e = kn(t, s, r)), e !== null && (wt(e, t, r, i), co(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = Ve(),
      r = Mn(t),
      s = Gt(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = kn(t, s, r)),
      e !== null && (wt(e, t, r, i), co(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Ve(),
      i = Mn(t),
      r = Gt(n, i);
    (r.tag = 2), e != null && (r.callback = e), (e = kn(t, r, i)), e !== null && (wt(e, t, i, n), co(e, t, i));
  },
};
function $d(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Qr(n, i) || !Qr(r, s)
      : !0
  );
}
function Tg(t, e, n) {
  var i = !1,
    r = On,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((r = Ge(e) ? ni : ze.current), (i = e.contextTypes), (s = (i = i != null) ? zi(t, r) : On)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ya),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Yd(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && ya.enqueueReplaceState(e, e.state, null);
}
function nu(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = {}), fc(t);
  var s = e.contextType;
  typeof s == "object" && s !== null ? (r.context = ft(s)) : ((s = Ge(e) ? ni : ze.current), (r.context = zi(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (tu(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
      e !== r.state && ya.enqueueReplaceState(r, r.state, null),
      Ho(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function Hi(t, e) {
  try {
    var n = "",
      i = e;
    do (n += py(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function il(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function iu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bv = typeof WeakMap == "function" ? WeakMap : Map;
function Lg(t, e, n) {
  (n = Gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      Qo || ((Qo = !0), (hu = i)), iu(t, e);
    }),
    n
  );
}
function Rg(t, e, n) {
  (n = Gt(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        iu(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        iu(t, e), typeof i != "function" && (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function Ud(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new Bv();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = tx.bind(null, t, e, n)), e.then(t, t));
}
function Qd(t) {
  do {
    var e;
    if (((e = t.tag === 13) && ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)), e)) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Xd(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((e = Gt(-1, 1)), (e.tag = 2), kn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Hv = nn.ReactCurrentOwner,
  qe = !1;
function He(t, e, n, i) {
  e.child = t === null ? lg(e, null, n, i) : Wi(e, t.child, n, i);
}
function qd(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    Ni(e, r),
    (i = yc(t, e, n, i, s, r)),
    (n = vc()),
    t !== null && !qe
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), tn(t, e, r))
      : (oe && n && sc(e), (e.flags |= 1), He(t, e, i, r), e.child)
  );
}
function Kd(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ec(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Ng(t, e, s, i, r))
      : ((t = yo(n.type, null, i, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Qr), n(o, i) && t.ref === e.ref)) return tn(t, e, r);
  }
  return (e.flags |= 1), (t = Pn(s, i)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function Ng(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Qr(s, i) && t.ref === e.ref)
      if (((qe = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0)) t.flags & 131072 && (qe = !0);
      else return (e.lanes = t.lanes), tn(t, e, r);
  }
  return ru(t, e, n, i, r);
}
function Ag(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1)) (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Z(Di, et), (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
          (e.updateQueue = null),
          Z(Di, et),
          (et |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        Z(Di, et),
        (et |= i);
    }
  else s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n), Z(Di, et), (et |= i);
  return He(t, e, r, n), e.child;
}
function Fg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) && ((e.flags |= 512), (e.flags |= 2097152));
}
function ru(t, e, n, i, r) {
  var s = Ge(n) ? ni : ze.current;
  return (
    (s = zi(e, s)),
    Ni(e, r),
    (n = yc(t, e, n, i, s, r)),
    (i = vc()),
    t !== null && !qe
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), tn(t, e, r))
      : (oe && i && sc(e), (e.flags |= 1), He(t, e, n, r), e.child)
  );
}
function Gd(t, e, n, i, r) {
  if (Ge(n)) {
    var s = !0;
    Io(e);
  } else s = !1;
  if ((Ni(e, r), e.stateNode === null)) po(t, e), Tg(e, n, i), nu(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = ft(u)) : ((u = Ge(n) ? ni : ze.current), (u = zi(e, u)));
    var c = n.getDerivedStateFromProps,
      d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== u) && Yd(e, o, i, u)),
      (un = !1);
    var f = e.memoizedState;
    (o.state = f),
      Ho(e, i, o, r),
      (l = e.memoizedState),
      a !== i || f !== l || Ke.current || un
        ? (typeof c == "function" && (tu(e, n, c, i), (l = e.memoizedState)),
          (a = un || $d(e, n, a, i, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = l)),
          (o.props = i),
          (o.state = l),
          (o.context = u),
          (i = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (i = !1));
  } else {
    (o = e.stateNode),
      cg(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : mt(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null ? (l = ft(l)) : ((l = Ge(n) ? ni : ze.current), (l = zi(e, l)));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Yd(e, o, i, l)),
      (un = !1),
      (f = e.memoizedState),
      (o.state = f),
      Ho(e, i, o, r);
    var m = e.memoizedState;
    a !== d || f !== m || Ke.current || un
      ? (typeof h == "function" && (tu(e, n, h, i), (m = e.memoizedState)),
        (u = un || $d(e, n, u, i, f, m, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, m, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = m)),
        (o.props = i),
        (o.state = m),
        (o.context = l),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return su(t, e, n, i, s, r);
}
function su(t, e, n, i, r, s) {
  Fg(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && Fd(e, n, !1), tn(t, e, s);
  (i = e.stateNode), (Hv.current = e);
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o ? ((e.child = Wi(e, t.child, null, s)), (e.child = Wi(e, null, a, s))) : He(t, e, a, s),
    (e.memoizedState = i.state),
    r && Fd(e, n, !0),
    e.child
  );
}
function Ig(t) {
  var e = t.stateNode;
  e.pendingContext ? Ad(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Ad(t, e.context, !1),
    hc(t, e.containerInfo);
}
function Zd(t, e, n, i, r) {
  return ji(), ac(r), (e.flags |= 256), He(t, e, n, i), e.child;
}
var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
function au(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function zg(t, e, n) {
  var i = e.pendingProps,
    r = le.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    a ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (r |= 1),
    Z(le, r & 1),
    t === null)
  )
    return (
      Jl(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1 ? (t.data === "$!" ? (e.lanes = 8) : (e.lanes = 1073741824)) : (e.lanes = 1), null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = _a(o, i, 0, null)),
              (t = Jn(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = au(n)),
              (e.memoizedState = ou),
              t)
            : wc(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((a = r.dehydrated), a !== null))) return Vv(t, e, o, i, a, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child), (i.childLanes = 0), (i.pendingProps = l), (e.deletions = null))
        : ((i = Pn(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (s = Pn(a, s)) : ((s = Jn(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o = o === null ? au(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = ou),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = Pn(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null && ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function wc(t, e) {
  return (e = _a({ mode: "visible", children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function js(t, e, n, i) {
  return (
    i !== null && ac(i),
    Wi(e, t.child, null, n),
    (t = wc(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Vv(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = il(Error(E(422)))), js(t, e, o, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = i.fallback),
        (r = e.mode),
        (i = _a({ mode: "visible", children: i.children }, r, 0, null)),
        (s = Jn(s, r, o, null)),
        (s.flags |= 2),
        (i.return = e),
        (s.return = e),
        (i.sibling = s),
        (e.child = i),
        e.mode & 1 && Wi(e, t.child, null, o),
        (e.child.memoizedState = au(o)),
        (e.memoizedState = ou),
        s);
  if (!(e.mode & 1)) return js(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (s = Error(E(419))), (i = il(s, i, void 0)), js(t, e, o, i);
  }
  if (((a = (o & t.childLanes) !== 0), qe || a)) {
    if (((i = Ce), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 && r !== s.retryLane && ((s.retryLane = r), en(t, r), wt(i, t, r, -1));
    }
    return Cc(), (i = il(Error(E(421)))), js(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128), (e.child = t.child), (e = nx.bind(null, t)), (r._reactRetry = e), null)
    : ((t = s.treeContext),
      (nt = bn(r.nextSibling)),
      (it = e),
      (oe = !0),
      (vt = null),
      t !== null && ((lt[ut++] = Ut), (lt[ut++] = Qt), (lt[ut++] = ii), (Ut = t.id), (Qt = t.overflow), (ii = e)),
      (e = wc(e, i.children)),
      (e.flags |= 4096),
      e);
}
function Jd(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), eu(t.return, e, n);
}
function rl(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: r })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function jg(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((He(t, e, i.children, n), (i = le.current), i & 2)) (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Jd(t, n, e);
        else if (t.tag === 19) Jd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((Z(le, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate), t !== null && Vo(t) === null && (r = n), (n = n.sibling);
        (n = r),
          n === null ? ((r = e.child), (e.child = null)) : ((r = n.sibling), (n.sibling = null)),
          rl(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Vo(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        rl(e, !0, n, null, s);
        break;
      case "together":
        rl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function po(t, e) {
  !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function tn(t, e, n) {
  if ((t !== null && (e.dependencies = t.dependencies), (si |= e.lanes), !(n & e.childLanes))) return null;
  if (t !== null && e.child !== t.child) throw Error(E(153));
  if (e.child !== null) {
    for (t = e.child, n = Pn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      (t = t.sibling), (n = n.sibling = Pn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function $v(t, e, n) {
  switch (e.tag) {
    case 3:
      Ig(e), ji();
      break;
    case 5:
      dg(e);
      break;
    case 1:
      Ge(e.type) && Io(e);
      break;
    case 4:
      hc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      Z(Wo, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Z(le, le.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? zg(t, e, n)
          : (Z(le, le.current & 1), (t = tn(t, e, n)), t !== null ? t.sibling : null);
      Z(le, le.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return jg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Z(le, le.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ag(t, e, n);
  }
  return tn(t, e, n);
}
var Wg, lu, Bg, Hg;
Wg = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lu = function () {};
Bg = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), Kn(At.current);
    var s = null;
    switch (n) {
      case "input":
        (r = Ol(t, r)), (i = Ol(t, i)), (s = []);
        break;
      case "select":
        (r = de({}, r, { value: void 0 })), (i = de({}, i, { value: void 0 })), (s = []);
        break;
      case "textarea":
        (r = Rl(t, r)), (i = Rl(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Ao);
    }
    Al(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var a = r[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Wr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in i) {
      var l = i[u];
      if (((a = r != null ? r[u] : void 0), i.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === "style")
          if (a) {
            for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") || (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Wr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && te("scroll", t), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Hg = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function sr(t, e) {
  if (!oe)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), (n = n.sibling);
        i === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (i.sibling = null);
    }
}
function Re(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes), (i |= r.subtreeFlags), (i |= r.flags), (r.return = t), (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function Yv(t, e, n) {
  var i = e.pendingProps;
  switch ((oc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(e), null;
    case 1:
      return Ge(e.type) && Fo(), Re(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Bi(),
        ie(Ke),
        ie(ze),
        gc(),
        i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (Is(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), vt !== null && (mu(vt), (vt = null)))),
        lu(t, e),
        Re(e),
        null
      );
    case 5:
      pc(e);
      var r = Kn(Zr.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Bg(t, e, n, i, r), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(E(166));
          return Re(e), null;
        }
        if (((t = Kn(At.current)), Is(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[Tt] = e), (i[Kr] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", i), te("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < vr.length; r++) te(vr[r], i);
              break;
            case "source":
              te("error", i);
              break;
            case "img":
            case "image":
            case "link":
              te("error", i), te("load", i);
              break;
            case "details":
              te("toggle", i);
              break;
            case "input":
              ld(i, s), te("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }), te("invalid", i);
              break;
            case "textarea":
              cd(i, s), te("invalid", i);
          }
          Al(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && Fs(i.textContent, a, t), (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 && Fs(i.textContent, a, t), (r = ["children", "" + a]))
                : Wr.hasOwnProperty(o) && a != null && o === "onScroll" && te("scroll", i);
            }
          switch (n) {
            case "input":
              Es(i), ud(i, s, !0);
              break;
            case "textarea":
              Es(i), dd(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Ao);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = mp(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")), (t.innerHTML = "<script></script>"), (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                ? (t = o.createElement(n, { is: i.is }))
                : ((t = o.createElement(n)),
                  n === "select" && ((o = t), i.multiple ? (o.multiple = !0) : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[Tt] = e),
            (t[Kr] = i),
            Wg(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Fl(n, i)), n)) {
              case "dialog":
                te("cancel", t), te("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < vr.length; r++) te(vr[r], t);
                r = i;
                break;
              case "source":
                te("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                te("error", t), te("load", t), (r = i);
                break;
              case "details":
                te("toggle", t), (r = i);
                break;
              case "input":
                ld(t, i), (r = Ol(t, i)), te("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }), (r = de({}, i, { value: void 0 })), te("invalid", t);
                break;
              case "textarea":
                cd(t, i), (r = Rl(t, i)), te("invalid", t);
                break;
              default:
                r = i;
            }
            Al(n, r), (a = r);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? xp(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && yp(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Br(t, l)
                    : typeof l == "number" && Br(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Wr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && te("scroll", t)
                      : l != null && Yu(t, s, l, o));
              }
            switch (n) {
              case "input":
                Es(t), ud(t, i, !1);
                break;
              case "textarea":
                Es(t), dd(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + Dn(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Oi(t, !!i.multiple, s, !1)
                    : i.defaultValue != null && Oi(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = Ao);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Re(e), null;
    case 6:
      if (t && e.stateNode != null) Hg(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(E(166));
        if (((n = Kn(Zr.current)), Kn(At.current), Is(e))) {
          if (
            ((i = e.stateNode), (n = e.memoizedProps), (i[Tt] = e), (s = i.nodeValue !== n) && ((t = it), t !== null))
          )
            switch (t.tag) {
              case 3:
                Fs(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Fs(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)), (i[Tt] = e), (e.stateNode = i);
      }
      return Re(e), null;
    case 13:
      if (
        (ie(le), (i = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (oe && nt !== null && e.mode & 1 && !(e.flags & 128)) og(), ji(), (e.flags |= 98560), (s = !1);
        else if (((s = Is(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(E(318));
            if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(E(317));
            s[Tt] = e;
          } else ji(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Re(e), (s = !1);
        } else vt !== null && (mu(vt), (vt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192), e.mode & 1 && (t === null || le.current & 1 ? ke === 0 && (ke = 3) : Cc())),
          e.updateQueue !== null && (e.flags |= 4),
          Re(e),
          null);
    case 4:
      return Bi(), lu(t, e), t === null && Xr(e.stateNode.containerInfo), Re(e), null;
    case 10:
      return cc(e.type._context), Re(e), null;
    case 17:
      return Ge(e.type) && Fo(), Re(e), null;
    case 19:
      if ((ie(le), (s = e.memoizedState), s === null)) return Re(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) sr(s, !1);
        else {
          if (ke !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Vo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    sr(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                    (n = n.sibling);
                return Z(le, (le.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null && me() > Vi && ((e.flags |= 128), (i = !0), sr(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = Vo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              sr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !oe)
            )
              return Re(e), null;
          } else
            2 * me() - s.renderingStartTime > Vi &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), sr(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = me()),
          (e.sibling = null),
          (n = le.current),
          Z(le, i ? (n & 1) | 2 : n & 1),
          e)
        : (Re(e), null);
    case 22:
    case 23:
      return (
        Pc(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1 ? et & 1073741824 && (Re(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Re(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, e.tag));
}
function Uv(t, e) {
  switch ((oc(e), e.tag)) {
    case 1:
      return Ge(e.type) && Fo(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 3:
      return (
        Bi(), ie(Ke), ie(ze), gc(), (t = e.flags), t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return pc(e), null;
    case 13:
      if ((ie(le), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(E(340));
        ji();
      }
      return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 19:
      return ie(le), null;
    case 4:
      return Bi(), null;
    case 10:
      return cc(e.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ws = !1,
  Fe = !1,
  Qv = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Ei(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        fe(t, e, i);
      }
    else n.current = null;
}
function uu(t, e, n) {
  try {
    n();
  } catch (i) {
    fe(t, e, i);
  }
}
var ef = !1;
function Xv(t, e) {
  if (((Ul = Lo), (t = Qp()), rc(t))) {
    if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = t,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d !== s || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === t) break t;
              if ((f === n && ++u === r && (a = o), f === s && ++c === i && (l = o), (h = d.nextSibling) !== null))
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ql = { focusedElem: t, selectionRange: n }, Lo = !1, L = e; L !== null; )
    if (((e = L), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) (t.return = e), (L = t);
    else
      for (; L !== null; ) {
        e = L;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    x = m.memoizedState,
                    g = e.stateNode,
                    p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? y : mt(e.type, y), x);
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (_) {
          fe(e, e.return, _);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (L = t);
          break;
        }
        L = e.return;
      }
  return (m = ef), (ef = !1), m;
}
function Tr(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && uu(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function va(t, e) {
  if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function cu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Vg(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Vg(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode), e !== null && (delete e[Tt], delete e[Kr], delete e[Kl], delete e[Ov], delete e[Tv])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function $g(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function tf(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || $g(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function du(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8 ? ((e = n.parentNode), e.insertBefore(t, n)) : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Ao));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (du(t, e, n), t = t.sibling; t !== null; ) du(t, e, n), (t = t.sibling);
}
function fu(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (fu(t, e, n), t = t.sibling; t !== null; ) fu(t, e, n), (t = t.sibling);
}
var Ee = null,
  yt = !1;
function sn(t, e, n) {
  for (n = n.child; n !== null; ) Yg(t, e, n), (n = n.sibling);
}
function Yg(t, e, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || Ei(n, e);
    case 6:
      var i = Ee,
        r = yt;
      (Ee = null),
        sn(t, e, n),
        (Ee = i),
        (yt = r),
        Ee !== null &&
          (yt
            ? ((t = Ee), (n = n.stateNode), t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (yt
          ? ((t = Ee), (n = n.stateNode), t.nodeType === 8 ? Ga(t.parentNode, n) : t.nodeType === 1 && Ga(t, n), Yr(t))
          : Ga(Ee, n.stateNode));
      break;
    case 4:
      (i = Ee), (r = yt), (Ee = n.stateNode.containerInfo), (yt = !0), sn(t, e, n), (Ee = i), (yt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Fe && ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && uu(n, e, o), (r = r.next);
        } while (r !== i);
      }
      sn(t, e, n);
      break;
    case 1:
      if (!Fe && (Ei(n, e), (i = n.stateNode), typeof i.componentWillUnmount == "function"))
        try {
          (i.props = n.memoizedProps), (i.state = n.memoizedState), i.componentWillUnmount();
        } catch (a) {
          fe(n, e, a);
        }
      sn(t, e, n);
      break;
    case 21:
      sn(t, e, n);
      break;
    case 22:
      n.mode & 1 ? ((Fe = (i = Fe) || n.memoizedState !== null), sn(t, e, n), (Fe = i)) : sn(t, e, n);
      break;
    default:
      sn(t, e, n);
  }
}
function nf(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Qv()),
      e.forEach(function (i) {
        var r = ix.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function pt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (yt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (yt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error(E(160));
        Yg(s, o, r), (Ee = null), (yt = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (u) {
        fe(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Ug(e, t), (e = e.sibling);
}
function Ug(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(e, t), Pt(t), i & 4)) {
        try {
          Tr(3, t, t.return), va(3, t);
        } catch (y) {
          fe(t, t.return, y);
        }
        try {
          Tr(5, t, t.return);
        } catch (y) {
          fe(t, t.return, y);
        }
      }
      break;
    case 1:
      pt(e, t), Pt(t), i & 512 && n !== null && Ei(n, n.return);
      break;
    case 5:
      if ((pt(e, t), Pt(t), i & 512 && n !== null && Ei(n, n.return), t.flags & 32)) {
        var r = t.stateNode;
        try {
          Br(r, "");
        } catch (y) {
          fe(t, t.return, y);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && pp(r, s), Fl(a, o);
            var u = Fl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? xp(r, d)
                : c === "dangerouslySetInnerHTML"
                ? yp(r, d)
                : c === "children"
                ? Br(r, d)
                : Yu(r, c, d, u);
            }
            switch (a) {
              case "input":
                Tl(r, s);
                break;
              case "textarea":
                gp(r, s);
                break;
              case "select":
                var f = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? Oi(r, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Oi(r, !!s.multiple, s.defaultValue, !0)
                      : Oi(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[Kr] = s;
          } catch (y) {
            fe(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((pt(e, t), Pt(t), i & 4)) {
        if (t.stateNode === null) throw Error(E(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          fe(t, t.return, y);
        }
      }
      break;
    case 3:
      if ((pt(e, t), Pt(t), i & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Yr(e.containerInfo);
        } catch (y) {
          fe(t, t.return, y);
        }
      break;
    case 4:
      pt(e, t), Pt(t);
      break;
    case 13:
      pt(e, t),
        Pt(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s || (r.alternate !== null && r.alternate.memoizedState !== null) || (Sc = me())),
        i & 4 && nf(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Fe = (u = Fe) || c), pt(e, t), (Fe = u)) : pt(e, t),
        Pt(t),
        i & 8192)
      ) {
        if (((u = t.memoizedState !== null), (t.stateNode.isHidden = u) && !c && t.mode & 1))
          for (L = t, c = t.child; c !== null; ) {
            for (d = L = c; L !== null; ) {
              switch (((f = L), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, f, f.return);
                  break;
                case 1:
                  Ei(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (i = f), (n = f.return);
                    try {
                      (e = i), (m.props = e.memoizedProps), (m.state = e.memoizedState), m.componentWillUnmount();
                    } catch (y) {
                      fe(i, n, y);
                    }
                  }
                  break;
                case 5:
                  Ei(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sf(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (L = h)) : sf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = t; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (r = d.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = vp("display", o)));
              } catch (y) {
                fe(t, t.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                fe(t, t.return, y);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === t) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      pt(e, t), Pt(t), i & 4 && nf(t);
      break;
    case 21:
      break;
    default:
      pt(e, t), Pt(t);
  }
}
function Pt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if ($g(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Br(r, ""), (i.flags &= -33));
          var s = tf(t);
          fu(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = tf(t);
          du(t, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      fe(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function qv(t, e, n) {
  (L = t), Qg(t);
}
function Qg(t, e, n) {
  for (var i = (t.mode & 1) !== 0; L !== null; ) {
    var r = L,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Ws;
      if (!o) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || Fe;
        a = Ws;
        var u = Fe;
        if (((Ws = o), (Fe = l) && !u))
          for (L = r; L !== null; )
            (o = L),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null ? of(r) : l !== null ? ((l.return = o), (L = l)) : of(r);
        for (; s !== null; ) (L = s), Qg(s), (s = s.sibling);
        (L = r), (Ws = a), (Fe = u);
      }
      rf(t);
    } else r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (L = s)) : rf(t);
  }
}
function rf(t) {
  for (; L !== null; ) {
    var e = L;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Fe || va(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Fe)
                if (n === null) i.componentDidMount();
                else {
                  var r = e.elementType === e.type ? n.memoizedProps : mt(e.type, n.memoizedProps);
                  i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
                }
              var s = e.updateQueue;
              s !== null && Bd(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Bd(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Yr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        Fe || (e.flags & 512 && cu(e));
      } catch (f) {
        fe(e, e.return, f);
      }
    }
    if (e === t) {
      L = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (L = n);
      break;
    }
    L = e.return;
  }
}
function sf(t) {
  for (; L !== null; ) {
    var e = L;
    if (e === t) {
      L = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (L = n);
      break;
    }
    L = e.return;
  }
}
function of(t) {
  for (; L !== null; ) {
    var e = L;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            va(4, e);
          } catch (l) {
            fe(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              fe(e, r, l);
            }
          }
          var s = e.return;
          try {
            cu(e);
          } catch (l) {
            fe(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            cu(e);
          } catch (l) {
            fe(e, o, l);
          }
      }
    } catch (l) {
      fe(e, e.return, l);
    }
    if (e === t) {
      L = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (L = a);
      break;
    }
    L = e.return;
  }
}
var Kv = Math.ceil,
  Uo = nn.ReactCurrentDispatcher,
  bc = nn.ReactCurrentOwner,
  dt = nn.ReactCurrentBatchConfig,
  B = 0,
  Ce = null,
  _e = null,
  De = 0,
  et = 0,
  Di = Nn(0),
  ke = 0,
  ns = null,
  si = 0,
  xa = 0,
  kc = 0,
  Lr = null,
  Qe = null,
  Sc = 0,
  Vi = 1 / 0,
  Ht = null,
  Qo = !1,
  hu = null,
  Sn = null,
  Bs = !1,
  hn = null,
  Xo = 0,
  Rr = 0,
  pu = null,
  go = -1,
  mo = 0;
function Ve() {
  return B & 6 ? me() : go !== -1 ? go : (go = me());
}
function Mn(t) {
  return t.mode & 1
    ? B & 2 && De !== 0
      ? De & -De
      : Rv.transition !== null
      ? (mo === 0 && (mo = Tp()), mo)
      : ((t = Q), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : zp(t.type))), t)
    : 1;
}
function wt(t, e, n, i) {
  if (50 < Rr) throw ((Rr = 0), (pu = null), Error(E(185)));
  ps(t, n, i),
    (!(B & 2) || t !== Ce) &&
      (t === Ce && (!(B & 2) && (xa |= n), ke === 4 && dn(t, De)),
      Ze(t, i),
      n === 1 && B === 0 && !(e.mode & 1) && ((Vi = me() + 500), ga && An()));
}
function Ze(t, e) {
  var n = t.callbackNode;
  Ry(t, e);
  var i = To(t, t === Ce ? De : 0);
  if (i === 0) n !== null && pd(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && pd(n), e === 1))
      t.tag === 0 ? Lv(af.bind(null, t)) : ig(af.bind(null, t)),
        Ev(function () {
          !(B & 6) && An();
        }),
        (n = null);
    else {
      switch (Lp(i)) {
        case 1:
          n = Ku;
          break;
        case 4:
          n = Dp;
          break;
        case 16:
          n = Oo;
          break;
        case 536870912:
          n = Op;
          break;
        default:
          n = Oo;
      }
      n = tm(n, Xg.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Xg(t, e) {
  if (((go = -1), (mo = 0), B & 6)) throw Error(E(327));
  var n = t.callbackNode;
  if (Ai() && t.callbackNode !== n) return null;
  var i = To(t, t === Ce ? De : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = qo(t, i);
  else {
    e = i;
    var r = B;
    B |= 2;
    var s = Kg();
    (Ce !== t || De !== e) && ((Ht = null), (Vi = me() + 500), Zn(t, e));
    do
      try {
        Jv();
        break;
      } catch (a) {
        qg(t, a);
      }
    while (!0);
    uc(), (Uo.current = s), (B = r), _e !== null ? (e = 0) : ((Ce = null), (De = 0), (e = ke));
  }
  if (e !== 0) {
    if ((e === 2 && ((r = Bl(t)), r !== 0 && ((i = r), (e = gu(t, r)))), e === 1))
      throw ((n = ns), Zn(t, 0), dn(t, i), Ze(t, me()), n);
    if (e === 6) dn(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !Gv(r) &&
          ((e = qo(t, i)), e === 2 && ((s = Bl(t)), s !== 0 && ((i = s), (e = gu(t, s)))), e === 1))
      )
        throw ((n = ns), Zn(t, 0), dn(t, i), Ze(t, me()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Vn(t, Qe, Ht);
          break;
        case 3:
          if ((dn(t, i), (i & 130023424) === i && ((e = Sc + 500 - me()), 10 < e))) {
            if (To(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              Ve(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = ql(Vn.bind(null, t, Qe, Ht), e);
            break;
          }
          Vn(t, Qe, Ht);
          break;
        case 4:
          if ((dn(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - _t(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = me() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Kv(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = ql(Vn.bind(null, t, Qe, Ht), i);
            break;
          }
          Vn(t, Qe, Ht);
          break;
        case 5:
          Vn(t, Qe, Ht);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ze(t, me()), t.callbackNode === n ? Xg.bind(null, t) : null;
}
function gu(t, e) {
  var n = Lr;
  return (
    t.current.memoizedState.isDehydrated && (Zn(t, e).flags |= 256),
    (t = qo(t, e)),
    t !== 2 && ((e = Qe), (Qe = n), e !== null && mu(e)),
    t
  );
}
function mu(t) {
  Qe === null ? (Qe = t) : Qe.push.apply(Qe, t);
}
function Gv(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!kt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function dn(t, e) {
  for (e &= ~kc, e &= ~xa, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - _t(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function af(t) {
  if (B & 6) throw Error(E(327));
  Ai();
  var e = To(t, 0);
  if (!(e & 1)) return Ze(t, me()), null;
  var n = qo(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = Bl(t);
    i !== 0 && ((e = i), (n = gu(t, i)));
  }
  if (n === 1) throw ((n = ns), Zn(t, 0), dn(t, e), Ze(t, me()), n);
  if (n === 6) throw Error(E(345));
  return (t.finishedWork = t.current.alternate), (t.finishedLanes = e), Vn(t, Qe, Ht), Ze(t, me()), null;
}
function Mc(t, e) {
  var n = B;
  B |= 1;
  try {
    return t(e);
  } finally {
    (B = n), B === 0 && ((Vi = me() + 500), ga && An());
  }
}
function oi(t) {
  hn !== null && hn.tag === 0 && !(B & 6) && Ai();
  var e = B;
  B |= 1;
  var n = dt.transition,
    i = Q;
  try {
    if (((dt.transition = null), (Q = 1), t)) return t();
  } finally {
    (Q = i), (dt.transition = n), (B = e), !(B & 6) && An();
  }
}
function Pc() {
  (et = Di.current), ie(Di);
}
function Zn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Cv(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var i = n;
      switch ((oc(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Fo();
          break;
        case 3:
          Bi(), ie(Ke), ie(ze), gc();
          break;
        case 5:
          pc(i);
          break;
        case 4:
          Bi();
          break;
        case 13:
          ie(le);
          break;
        case 19:
          ie(le);
          break;
        case 10:
          cc(i.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((Ce = t),
    (_e = t = Pn(t.current, null)),
    (De = et = e),
    (ke = 0),
    (ns = null),
    (kc = xa = si = 0),
    (Qe = Lr = null),
    qn !== null)
  ) {
    for (e = 0; e < qn.length; e++)
      if (((n = qn[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    qn = null;
  }
  return t;
}
function qg(t, e) {
  do {
    var n = _e;
    try {
      if ((uc(), (fo.current = Yo), $o)) {
        for (var i = ce.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        $o = !1;
      }
      if (
        ((ri = 0), (Me = be = ce = null), (Or = !1), (Jr = 0), (bc.current = null), n === null || n.return === null)
      ) {
        (ke = 1), (ns = e), (_e = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (((e = De), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue), (c.memoizedState = f.memoizedState), (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Qd(o);
          if (h !== null) {
            (h.flags &= -257), Xd(h, o, a, s, e), h.mode & 1 && Ud(s, u, e), (e = h), (l = u);
            var m = e.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(l), (e.updateQueue = y);
            } else m.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Ud(s, u, e), Cc();
              break e;
            }
            l = Error(E(426));
          }
        } else if (oe && a.mode & 1) {
          var x = Qd(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Xd(x, o, a, s, e), ac(Hi(l, a));
            break e;
          }
        }
        (s = l = Hi(l, a)), ke !== 4 && (ke = 2), Lr === null ? (Lr = [s]) : Lr.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var g = Lg(s, l, e);
              Wd(s, g);
              break e;
            case 1:
              a = l;
              var p = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null && typeof v.componentDidCatch == "function" && (Sn === null || !Sn.has(v))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var _ = Rg(s, a, e);
                Wd(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Zg(n);
    } catch (w) {
      (e = w), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kg() {
  var t = Uo.current;
  return (Uo.current = Yo), t === null ? Yo : t;
}
function Cc() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ce === null || (!(si & 268435455) && !(xa & 268435455)) || dn(Ce, De);
}
function qo(t, e) {
  var n = B;
  B |= 2;
  var i = Kg();
  (Ce !== t || De !== e) && ((Ht = null), Zn(t, e));
  do
    try {
      Zv();
      break;
    } catch (r) {
      qg(t, r);
    }
  while (!0);
  if ((uc(), (B = n), (Uo.current = i), _e !== null)) throw Error(E(261));
  return (Ce = null), (De = 0), ke;
}
function Zv() {
  for (; _e !== null; ) Gg(_e);
}
function Jv() {
  for (; _e !== null && !Sy(); ) Gg(_e);
}
function Gg(t) {
  var e = em(t.alternate, t, et);
  (t.memoizedProps = t.pendingProps), e === null ? Zg(t) : (_e = e), (bc.current = null);
}
function Zg(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Uv(n, e)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ke = 6), (_e = null);
        return;
      }
    } else if (((n = Yv(n, e, et)), n !== null)) {
      _e = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      _e = e;
      return;
    }
    _e = e = t;
  } while (e !== null);
  ke === 0 && (ke = 5);
}
function Vn(t, e, n) {
  var i = Q,
    r = dt.transition;
  try {
    (dt.transition = null), (Q = 1), ex(t, e, n, i);
  } finally {
    (dt.transition = r), (Q = i);
  }
  return null;
}
function ex(t, e, n, i) {
  do Ai();
  while (hn !== null);
  if (B & 6) throw Error(E(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(E(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ny(t, s),
    t === Ce && ((_e = Ce = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      tm(Oo, function () {
        return Ai(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var o = Q;
    Q = 1;
    var a = B;
    (B |= 4),
      (bc.current = null),
      Xv(t, n),
      Ug(n, t),
      _v(Ql),
      (Lo = !!Ul),
      (Ql = Ul = null),
      (t.current = n),
      qv(n),
      My(),
      (B = a),
      (Q = o),
      (dt.transition = s);
  } else t.current = n;
  if (
    (Bs && ((Bs = !1), (hn = t), (Xo = r)),
    (s = t.pendingLanes),
    s === 0 && (Sn = null),
    Ey(n.stateNode),
    Ze(t, me()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Qo) throw ((Qo = !1), (t = hu), (hu = null), t);
  return (
    Xo & 1 && t.tag !== 0 && Ai(),
    (s = t.pendingLanes),
    s & 1 ? (t === pu ? Rr++ : ((Rr = 0), (pu = t))) : (Rr = 0),
    An(),
    null
  );
}
function Ai() {
  if (hn !== null) {
    var t = Lp(Xo),
      e = dt.transition,
      n = Q;
    try {
      if (((dt.transition = null), (Q = 16 > t ? 16 : t), hn === null)) var i = !1;
      else {
        if (((t = hn), (hn = null), (Xo = 0), B & 6)) throw Error(E(331));
        var r = B;
        for (B |= 4, L = t.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (L = d);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var f = c.sibling,
                        h = c.return;
                      if ((Vg(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (L = f);
                        break;
                      }
                      L = h;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (L = o);
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (L = g);
                break e;
              }
              L = s.return;
            }
        }
        var p = t.current;
        for (L = p; L !== null; ) {
          o = L;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (L = v);
          else
            e: for (o = p; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      va(9, a);
                  }
                } catch (w) {
                  fe(a, a.return, w);
                }
              if (a === o) {
                L = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (L = _);
                break e;
              }
              L = a.return;
            }
        }
        if (((B = r), An(), Nt && typeof Nt.onPostCommitFiberRoot == "function"))
          try {
            Nt.onPostCommitFiberRoot(ca, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (Q = n), (dt.transition = e);
    }
  }
  return !1;
}
function lf(t, e, n) {
  (e = Hi(n, e)), (e = Lg(t, e, 1)), (t = kn(t, e, 1)), (e = Ve()), t !== null && (ps(t, 1, e), Ze(t, e));
}
function fe(t, e, n) {
  if (t.tag === 3) lf(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        lf(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" && (Sn === null || !Sn.has(i)))
        ) {
          (t = Hi(n, t)), (t = Rg(e, t, 1)), (e = kn(e, t, 1)), (t = Ve()), e !== null && (ps(e, 1, t), Ze(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function tx(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = Ve()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ce === t &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > me() - Sc) ? Zn(t, 0) : (kc |= n)),
    Ze(t, e);
}
function Jg(t, e) {
  e === 0 && (t.mode & 1 ? ((e = Ts), (Ts <<= 1), !(Ts & 130023424) && (Ts = 4194304)) : (e = 1));
  var n = Ve();
  (t = en(t, e)), t !== null && (ps(t, e, n), Ze(t, n));
}
function nx(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Jg(t, n);
}
function ix(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  i !== null && i.delete(e), Jg(t, n);
}
var em;
em = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Ke.current) qe = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (qe = !1), $v(t, e, n);
      qe = !!(t.flags & 131072);
    }
  else (qe = !1), oe && e.flags & 1048576 && rg(e, jo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      po(t, e), (t = e.pendingProps);
      var r = zi(e, ze.current);
      Ni(e, n), (r = yc(null, e, i, t, r, n));
      var s = vc();
      return (
        (e.flags |= 1),
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ge(i) ? ((s = !0), Io(e)) : (s = !1),
            (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
            fc(e),
            (r.updater = ya),
            (e.stateNode = r),
            (r._reactInternals = e),
            nu(e, i, t, n),
            (e = su(null, e, i, !0, s, n)))
          : ((e.tag = 0), oe && s && sc(e), He(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (po(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = sx(i)),
          (t = mt(i, t)),
          r)
        ) {
          case 0:
            e = ru(null, e, i, t, n);
            break e;
          case 1:
            e = Gd(null, e, i, t, n);
            break e;
          case 11:
            e = qd(null, e, i, t, n);
            break e;
          case 14:
            e = Kd(null, e, i, mt(i.type, t), n);
            break e;
        }
        throw Error(E(306, i, ""));
      }
      return e;
    case 0:
      return (i = e.type), (r = e.pendingProps), (r = e.elementType === i ? r : mt(i, r)), ru(t, e, i, r, n);
    case 1:
      return (i = e.type), (r = e.pendingProps), (r = e.elementType === i ? r : mt(i, r)), Gd(t, e, i, r, n);
    case 3:
      e: {
        if ((Ig(e), t === null)) throw Error(E(387));
        (i = e.pendingProps), (s = e.memoizedState), (r = s.element), cg(t, e), Ho(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = Hi(Error(E(423)), e)), (e = Zd(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = Hi(Error(E(424)), e)), (e = Zd(t, e, i, n, r));
            break e;
          } else
            for (
              nt = bn(e.stateNode.containerInfo.firstChild),
                it = e,
                oe = !0,
                vt = null,
                n = lg(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ji(), i === r)) {
            e = tn(t, e, n);
            break e;
          }
          He(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        dg(e),
        t === null && Jl(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        Xl(i, r) ? (o = null) : s !== null && Xl(i, s) && (e.flags |= 32),
        Fg(t, e),
        He(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Jl(e), null;
    case 13:
      return zg(t, e, n);
    case 4:
      return (
        hc(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = Wi(e, null, i, n)) : He(t, e, i, n),
        e.child
      );
    case 11:
      return (i = e.type), (r = e.pendingProps), (r = e.elementType === i ? r : mt(i, r)), qd(t, e, i, r, n);
    case 7:
      return He(t, e, e.pendingProps, n), e.child;
    case 8:
      return He(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return He(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          Z(Wo, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (kt(s.value, o)) {
            if (s.children === r.children && !Ke.current) {
              e = tn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (s.tag === 1) {
                      (l = Gt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), eu(s.return, n, e), (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), eu(o, n, e), (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        He(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        Ni(e, n),
        (r = ft(r)),
        (i = i(r)),
        (e.flags |= 1),
        He(t, e, i, n),
        e.child
      );
    case 14:
      return (i = e.type), (r = mt(i, e.pendingProps)), (r = mt(i.type, r)), Kd(t, e, i, r, n);
    case 15:
      return Ng(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : mt(i, r)),
        po(t, e),
        (e.tag = 1),
        Ge(i) ? ((t = !0), Io(e)) : (t = !1),
        Ni(e, n),
        Tg(e, i, r),
        nu(e, i, r, n),
        su(null, e, i, !0, t, n)
      );
    case 19:
      return jg(t, e, n);
    case 22:
      return Ag(t, e, n);
  }
  throw Error(E(156, e.tag));
};
function tm(t, e) {
  return Ep(t, e);
}
function rx(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(t, e, n, i) {
  return new rx(t, e, n, i);
}
function Ec(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function sx(t) {
  if (typeof t == "function") return Ec(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Qu)) return 11;
    if (t === Xu) return 14;
  }
  return 2;
}
function Pn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = ct(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e), (n.type = t.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function yo(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) Ec(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case xi:
        return Jn(n.children, r, s, e);
      case Uu:
        (o = 8), (r |= 8);
        break;
      case Pl:
        return (t = ct(12, n, e, r | 2)), (t.elementType = Pl), (t.lanes = s), t;
      case Cl:
        return (t = ct(13, n, e, r)), (t.elementType = Cl), (t.lanes = s), t;
      case El:
        return (t = ct(19, n, e, r)), (t.elementType = El), (t.lanes = s), t;
      case dp:
        return _a(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case up:
              o = 10;
              break e;
            case cp:
              o = 9;
              break e;
            case Qu:
              o = 11;
              break e;
            case Xu:
              o = 14;
              break e;
            case ln:
              (o = 16), (i = null);
              break e;
          }
        throw Error(E(130, t == null ? t : typeof t, ""));
    }
  return (e = ct(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e;
}
function Jn(t, e, n, i) {
  return (t = ct(7, t, i, e)), (t.lanes = n), t;
}
function _a(t, e, n, i) {
  return (t = ct(22, t, i, e)), (t.elementType = dp), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t;
}
function sl(t, e, n) {
  return (t = ct(6, t, null, e)), (t.lanes = n), t;
}
function ol(t, e, n) {
  return (
    (e = ct(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
    e
  );
}
function ox(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wa(0)),
    (this.expirationTimes = Wa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wa(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Dc(t, e, n, i, r, s, o, a, l) {
  return (
    (t = new ox(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = ct(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fc(s),
    t
  );
}
function ax(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vi, key: i == null ? null : "" + i, children: t, containerInfo: e, implementation: n };
}
function nm(t) {
  if (!t) return On;
  t = t._reactInternals;
  e: {
    if (ci(t) !== t || t.tag !== 1) throw Error(E(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ge(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(E(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ge(n)) return ng(t, n, e);
  }
  return e;
}
function im(t, e, n, i, r, s, o, a, l) {
  return (
    (t = Dc(n, i, !0, t, r, s, o, a, l)),
    (t.context = nm(null)),
    (n = t.current),
    (i = Ve()),
    (r = Mn(n)),
    (s = Gt(i, r)),
    (s.callback = e ?? null),
    kn(n, s, r),
    (t.current.lanes = r),
    ps(t, r, i),
    Ze(t, i),
    t
  );
}
function wa(t, e, n, i) {
  var r = e.current,
    s = Ve(),
    o = Mn(r);
  return (
    (n = nm(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Gt(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = kn(r, e, o)),
    t !== null && (wt(t, r, o, s), co(t, r, o)),
    o
  );
}
function Ko(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function uf(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Oc(t, e) {
  uf(t, e), (t = t.alternate) && uf(t, e);
}
function lx() {
  return null;
}
var rm =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Tc(t) {
  this._internalRoot = t;
}
ba.prototype.render = Tc.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  wa(t, e, null, null);
};
ba.prototype.unmount = Tc.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    oi(function () {
      wa(null, t, null, null);
    }),
      (e[Jt] = null);
  }
};
function ba(t) {
  this._internalRoot = t;
}
ba.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Ap();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < cn.length && e !== 0 && e < cn[n].priority; n++);
    cn.splice(n, 0, t), n === 0 && Ip(t);
  }
};
function Lc(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ka(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function cf() {}
function ux(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Ko(o);
        s.call(u);
      };
    }
    var o = im(e, i, t, 0, null, !1, !1, "", cf);
    return (t._reactRootContainer = o), (t[Jt] = o.current), Xr(t.nodeType === 8 ? t.parentNode : t), oi(), o;
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var u = Ko(l);
      a.call(u);
    };
  }
  var l = Dc(t, 0, !1, null, null, !1, !1, "", cf);
  return (
    (t._reactRootContainer = l),
    (t[Jt] = l.current),
    Xr(t.nodeType === 8 ? t.parentNode : t),
    oi(function () {
      wa(e, l, n, i);
    }),
    l
  );
}
function Sa(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = Ko(o);
        a.call(l);
      };
    }
    wa(e, o, t, r);
  } else o = ux(n, e, t, r, i);
  return Ko(o);
}
Rp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = yr(e.pendingLanes);
        n !== 0 && (Gu(e, n | 1), Ze(e, me()), !(B & 6) && ((Vi = me() + 500), An()));
      }
      break;
    case 13:
      oi(function () {
        var i = en(t, 1);
        if (i !== null) {
          var r = Ve();
          wt(i, t, 1, r);
        }
      }),
        Oc(t, 1);
  }
};
Zu = function (t) {
  if (t.tag === 13) {
    var e = en(t, 134217728);
    if (e !== null) {
      var n = Ve();
      wt(e, t, 134217728, n);
    }
    Oc(t, 134217728);
  }
};
Np = function (t) {
  if (t.tag === 13) {
    var e = Mn(t),
      n = en(t, e);
    if (n !== null) {
      var i = Ve();
      wt(n, t, e, i);
    }
    Oc(t, e);
  }
};
Ap = function () {
  return Q;
};
Fp = function (t, e) {
  var n = Q;
  try {
    return (Q = t), e();
  } finally {
    Q = n;
  }
};
zl = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Tl(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = pa(i);
            if (!r) throw Error(E(90));
            hp(i), Tl(i, r);
          }
        }
      }
      break;
    case "textarea":
      gp(t, n);
      break;
    case "select":
      (e = n.value), e != null && Oi(t, !!n.multiple, e, !1);
  }
};
bp = Mc;
kp = oi;
var cx = { usingClientEntryPoint: !1, Events: [ms, ki, pa, _p, wp, Mc] },
  or = { findFiberByHostInstance: Xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  dx = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Pp(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: or.findFiberByHostInstance || lx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hs.isDisabled && Hs.supportsFiber)
    try {
      (ca = Hs.inject(dx)), (Nt = Hs);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cx;
st.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(e)) throw Error(E(200));
  return ax(t, e, null, n);
};
st.createRoot = function (t, e) {
  if (!Lc(t)) throw Error(E(299));
  var n = !1,
    i = "",
    r = rm;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Dc(t, 1, !1, null, null, n, !1, i, r)),
    (t[Jt] = e.current),
    Xr(t.nodeType === 8 ? t.parentNode : t),
    new Tc(e)
  );
};
st.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(E(188)) : ((t = Object.keys(t).join(",")), Error(E(268, t)));
  return (t = Pp(e)), (t = t === null ? null : t.stateNode), t;
};
st.flushSync = function (t) {
  return oi(t);
};
st.hydrate = function (t, e, n) {
  if (!ka(e)) throw Error(E(200));
  return Sa(null, t, e, !0, n);
};
st.hydrateRoot = function (t, e, n) {
  if (!Lc(t)) throw Error(E(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = rm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = im(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[Jt] = e.current),
    Xr(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new ba(e);
};
st.render = function (t, e, n) {
  if (!ka(e)) throw Error(E(200));
  return Sa(null, t, e, !1, n);
};
st.unmountComponentAtNode = function (t) {
  if (!ka(t)) throw Error(E(40));
  return t._reactRootContainer
    ? (oi(function () {
        Sa(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Jt] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = Mc;
st.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!ka(n)) throw Error(E(200));
  if (t == null || t._reactInternals === void 0) throw Error(E(38));
  return Sa(t, e, n, !1, i);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function sm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm);
    } catch (t) {
      console.error(t);
    }
}
sm(), (sp.exports = st);
var fx = sp.exports,
  df = fx;
(Sl.createRoot = df.createRoot), (Sl.hydrateRoot = df.hydrateRoot);
/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    is.apply(this, arguments)
  );
}
var pn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(pn || (pn = {}));
const ff = "popstate";
function hx(t) {
  t === void 0 && (t = {});
  function e(i, r) {
    let { pathname: s, search: o, hash: a } = i.location;
    return yu(
      "",
      { pathname: s, search: o, hash: a },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function n(i, r) {
    return typeof r == "string" ? r : Go(r);
  }
  return gx(e, n, null, t);
}
function we(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function om(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function px() {
  return Math.random().toString(36).substr(2, 8);
}
function hf(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function yu(t, e, n, i) {
  return (
    n === void 0 && (n = null),
    is({ pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" }, typeof e == "string" ? Gi(e) : e, {
      state: n,
      key: (e && e.key) || i || px(),
    })
  );
}
function Go(t) {
  let { pathname: e = "/", search: n = "", hash: i = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
  );
}
function Gi(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let i = t.indexOf("?");
    i >= 0 && ((e.search = t.substr(i)), (t = t.substr(0, i))), t && (e.pathname = t);
  }
  return e;
}
function gx(t, e, n, i) {
  i === void 0 && (i = {});
  let { window: r = document.defaultView, v5Compat: s = !1 } = i,
    o = r.history,
    a = pn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(is({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = pn.Pop;
    let x = c(),
      g = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: y.location, delta: g });
  }
  function f(x, g) {
    a = pn.Push;
    let p = yu(y.location, x, g);
    u = c() + 1;
    let v = hf(p, u),
      _ = y.createHref(p);
    try {
      o.pushState(v, "", _);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      r.location.assign(_);
    }
    s && l && l({ action: a, location: y.location, delta: 1 });
  }
  function h(x, g) {
    a = pn.Replace;
    let p = yu(y.location, x, g);
    u = c();
    let v = hf(p, u),
      _ = y.createHref(p);
    o.replaceState(v, "", _), s && l && l({ action: a, location: y.location, delta: 0 });
  }
  function m(x) {
    let g = r.location.origin !== "null" ? r.location.origin : r.location.href,
      p = typeof x == "string" ? x : Go(x);
    return (
      (p = p.replace(/ $/, "%20")),
      we(g, "No window.location.(origin|href) available to create URL for href: " + p),
      new URL(p, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return t(r, o);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(ff, d),
        (l = x),
        () => {
          r.removeEventListener(ff, d), (l = null);
        }
      );
    },
    createHref(x) {
      return e(r, x);
    },
    createURL: m,
    encodeLocation(x) {
      let g = m(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return o.go(x);
    },
  };
  return y;
}
var pf;
(function (t) {
  (t.data = "data"), (t.deferred = "deferred"), (t.redirect = "redirect"), (t.error = "error");
})(pf || (pf = {}));
function mx(t, e, n) {
  return n === void 0 && (n = "/"), yx(t, e, n, !1);
}
function yx(t, e, n, i) {
  let r = typeof e == "string" ? Gi(e) : e,
    s = Rc(r.pathname || "/", n);
  if (s == null) return null;
  let o = am(t);
  vx(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = Dx(s);
    a = Cx(o[l], u, i);
  }
  return a;
}
function am(t, e, n, i) {
  e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
  let r = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (we(
        l.relativePath.startsWith(i),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let u = Cn([i, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (we(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
      ),
      am(s.children, e, c, u)),
      !(s.path == null && !s.index) && e.push({ path: u, score: Mx(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) r(s, o);
      else for (let l of lm(s.path)) r(s, o, l);
    }),
    e
  );
}
function lm(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...i] = e,
    r = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (i.length === 0) return r ? [s, ""] : [s];
  let o = lm(i.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    r && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function vx(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Px(
          e.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const xx = /^:[\w-]+$/,
  _x = 3,
  wx = 2,
  bx = 1,
  kx = 10,
  Sx = -2,
  gf = (t) => t === "*";
function Mx(t, e) {
  let n = t.split("/"),
    i = n.length;
  return (
    n.some(gf) && (i += Sx),
    e && (i += wx),
    n.filter((r) => !gf(r)).reduce((r, s) => r + (xx.test(s) ? _x : s === "" ? bx : kx), i)
  );
}
function Px(t, e) {
  return t.length === e.length && t.slice(0, -1).every((i, r) => i === e[r]) ? t[t.length - 1] - e[e.length - 1] : 0;
}
function Cx(t, e, n) {
  let { routesMeta: i } = t,
    r = {},
    s = "/",
    o = [];
  for (let a = 0; a < i.length; ++a) {
    let l = i[a],
      u = a === i.length - 1,
      c = s === "/" ? e : e.slice(s.length) || "/",
      d = mf({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, c),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !i[i.length - 1].route.index &&
        (d = mf({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, c)),
      !d)
    )
      return null;
    Object.assign(r, d.params),
      o.push({ params: r, pathname: Cn([s, d.pathname]), pathnameBase: Rx(Cn([s, d.pathnameBase])), route: f }),
      d.pathnameBase !== "/" && (s = Cn([s, d.pathnameBase]));
  }
  return o;
}
function mf(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, i] = Ex(t.path, t.caseSensitive, t.end),
    r = e.match(n);
  if (!r) return null;
  let s = r[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = r.slice(1);
  return {
    params: i.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let y = a[d] || "";
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[d];
      return h && !m ? (u[f] = void 0) : (u[f] = (m || "").replace(/%2F/g, "/")), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function Ex(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    om(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    r =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (i.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
        );
  return (
    t.endsWith("*")
      ? (i.push({ paramName: "*" }), (r += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : t !== "" && t !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, e ? void 0 : "i"), i]
  );
}
function Dx(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      om(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function Rc(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    i = t.charAt(n);
  return i && i !== "/" ? null : t.slice(n) || "/";
}
function Ox(t, e) {
  e === void 0 && (e = "/");
  let { pathname: n, search: i = "", hash: r = "" } = typeof t == "string" ? Gi(t) : t;
  return { pathname: n ? (n.startsWith("/") ? n : Tx(n, e)) : e, search: Nx(i), hash: Ax(r) };
}
function Tx(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function al(t, e, n, i) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Lx(t) {
  return t.filter((e, n) => n === 0 || (e.route.path && e.route.path.length > 0));
}
function um(t, e) {
  let n = Lx(t);
  return e ? n.map((i, r) => (r === t.length - 1 ? i.pathname : i.pathnameBase)) : n.map((i) => i.pathnameBase);
}
function cm(t, e, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof t == "string"
    ? (r = Gi(t))
    : ((r = is({}, t)),
      we(!r.pathname || !r.pathname.includes("?"), al("?", "pathname", "search", r)),
      we(!r.pathname || !r.pathname.includes("#"), al("#", "pathname", "hash", r)),
      we(!r.search || !r.search.includes("#"), al("#", "search", "hash", r)));
  let s = t === "" || r.pathname === "",
    o = s ? "/" : r.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = e.length - 1;
    if (!i && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      r.pathname = f.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = Ox(r, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Cn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Rx = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Nx = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Ax = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Fx(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const dm = ["post", "put", "patch", "delete"];
new Set(dm);
const Ix = ["get", ...dm];
new Set(Ix);
/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rs() {
  return (
    (rs = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    rs.apply(this, arguments)
  );
}
const Nc = C.createContext(null),
  zx = C.createContext(null),
  di = C.createContext(null),
  Ma = C.createContext(null),
  Fn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fm = C.createContext(null);
function jx(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  vs() || we(!1);
  let { basename: i, navigator: r } = C.useContext(di),
    { hash: s, pathname: o, search: a } = pm(t, { relative: n }),
    l = o;
  return i !== "/" && (l = o === "/" ? i : Cn([i, o])), r.createHref({ pathname: l, search: a, hash: s });
}
function vs() {
  return C.useContext(Ma) != null;
}
function Pa() {
  return vs() || we(!1), C.useContext(Ma).location;
}
function hm(t) {
  C.useContext(di).static || C.useLayoutEffect(t);
}
function Zi() {
  let { isDataRoute: t } = C.useContext(Fn);
  return t ? e1() : Wx();
}
function Wx() {
  vs() || we(!1);
  let t = C.useContext(Nc),
    { basename: e, future: n, navigator: i } = C.useContext(di),
    { matches: r } = C.useContext(Fn),
    { pathname: s } = Pa(),
    o = JSON.stringify(um(r, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    hm(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          i.go(u);
          return;
        }
        let d = cm(u, JSON.parse(o), s, c.relative === "path");
        t == null && e !== "/" && (d.pathname = d.pathname === "/" ? e : Cn([e, d.pathname])),
          (c.replace ? i.replace : i.push)(d, c.state, c);
      },
      [e, i, o, s, t]
    )
  );
}
const Bx = C.createContext(null);
function Hx(t) {
  let e = C.useContext(Fn).outlet;
  return e && C.createElement(Bx.Provider, { value: t }, e);
}
function pm(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: i } = C.useContext(di),
    { matches: r } = C.useContext(Fn),
    { pathname: s } = Pa(),
    o = JSON.stringify(um(r, i.v7_relativeSplatPath));
  return C.useMemo(() => cm(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function Vx(t, e) {
  return $x(t, e);
}
function $x(t, e, n, i) {
  vs() || we(!1);
  let { navigator: r } = C.useContext(di),
    { matches: s } = C.useContext(Fn),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Pa(),
    c;
  if (e) {
    var d;
    let x = typeof e == "string" ? Gi(e) : e;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || we(!1), (c = x);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let m = mx(t, { pathname: h }),
    y = qx(
      m &&
        m.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Cn([l, r.encodeLocation ? r.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : Cn([l, r.encodeLocation ? r.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
          })
        ),
      s,
      n,
      i
    );
  return e && y
    ? C.createElement(
        Ma.Provider,
        {
          value: {
            location: rs({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
            navigationType: pn.Pop,
          },
        },
        y
      )
    : y;
}
function Yx() {
  let t = Jx(),
    e = Fx(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? C.createElement("pre", { style: r }, n) : null,
    null
  );
}
const Ux = C.createElement(Yx, null);
class Qx extends C.Component {
  constructor(e) {
    super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error("React Router caught the following error during render", e, n);
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Fn.Provider,
          { value: this.props.routeContext },
          C.createElement(fm.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Xx(t) {
  let { routeContext: e, match: n, children: i } = t,
    r = C.useContext(Nc);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Fn.Provider, { value: e }, i)
  );
}
function qx(t, e, n, i) {
  var r;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), i === void 0 && (i = null), t == null)) {
    var s;
    if ((s = n) != null && s.errors) t = n.matches;
    else return null;
  }
  let o = t,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let c = o.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    c >= 0 || we(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && i && i.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id)) {
        let { loaderData: f, errors: h } = n,
          m = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let h,
      m = !1,
      y = null,
      x = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || Ux),
      l &&
        (u < 0 && f === 0
          ? ((m = !0), (x = null))
          : u === f && ((m = !0), (x = d.route.hydrateFallbackElement || null))));
    let g = e.concat(o.slice(0, f + 1)),
      p = () => {
        let v;
        return (
          h
            ? (v = y)
            : m
            ? (v = x)
            : d.route.Component
            ? (v = C.createElement(d.route.Component, null))
            : d.route.element
            ? (v = d.route.element)
            : (v = c),
          C.createElement(Xx, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? C.createElement(Qx, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var gm = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"), (t.UseRevalidator = "useRevalidator"), (t.UseNavigateStable = "useNavigate"), t
    );
  })(gm || {}),
  Zo = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Zo || {});
function Kx(t) {
  let e = C.useContext(Nc);
  return e || we(!1), e;
}
function Gx(t) {
  let e = C.useContext(zx);
  return e || we(!1), e;
}
function Zx(t) {
  let e = C.useContext(Fn);
  return e || we(!1), e;
}
function mm(t) {
  let e = Zx(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function Jx() {
  var t;
  let e = C.useContext(fm),
    n = Gx(Zo.UseRouteError),
    i = mm(Zo.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i];
}
function e1() {
  let { router: t } = Kx(gm.UseNavigateStable),
    e = mm(Zo.UseNavigateStable),
    n = C.useRef(!1);
  return (
    hm(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (r, s) {
        s === void 0 && (s = {}),
          n.current && (typeof r == "number" ? t.navigate(r) : t.navigate(r, rs({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
function t1(t) {
  return Hx(t.context);
}
function an(t) {
  we(!1);
}
function n1(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: i,
    navigationType: r = pn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = t;
  vs() && we(!1);
  let l = e.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({ basename: l, navigator: s, static: o, future: rs({ v7_relativeSplatPath: !1 }, a) }),
      [l, a, s, o]
    );
  typeof i == "string" && (i = Gi(i));
  let { pathname: c = "/", search: d = "", hash: f = "", state: h = null, key: m = "default" } = i,
    y = C.useMemo(() => {
      let x = Rc(c, l);
      return x == null ? null : { location: { pathname: x, search: d, hash: f, state: h, key: m }, navigationType: r };
    }, [l, c, d, f, h, m, r]);
  return y == null
    ? null
    : C.createElement(di.Provider, { value: u }, C.createElement(Ma.Provider, { children: n, value: y }));
}
function i1(t) {
  let { children: e, location: n } = t;
  return Vx(vu(e), n);
}
new Promise(() => {});
function vu(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    C.Children.forEach(t, (i, r) => {
      if (!C.isValidElement(i)) return;
      let s = [...e, r];
      if (i.type === C.Fragment) {
        n.push.apply(n, vu(i.props.children, s));
        return;
      }
      i.type !== an && we(!1), !i.props.index || !i.props.children || we(!1);
      let o = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (o.children = vu(i.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xu() {
  return (
    (xu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    xu.apply(this, arguments)
  );
}
function r1(t, e) {
  if (t == null) return {};
  var n = {},
    i = Object.keys(t),
    r,
    s;
  for (s = 0; s < i.length; s++) (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function s1(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function o1(t, e) {
  return t.button === 0 && (!e || e === "_self") && !s1(t);
}
const a1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  l1 = "6";
try {
  window.__reactRouterVersion = l1;
} catch {}
const u1 = "startTransition",
  yf = ty[u1];
function c1(t) {
  let { basename: e, children: n, future: i, window: r } = t,
    s = C.useRef();
  s.current == null && (s.current = hx({ window: r, v5Compat: !0 }));
  let o = s.current,
    [a, l] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = i || {},
    c = C.useCallback(
      (d) => {
        u && yf ? yf(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement(n1, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: i,
    })
  );
}
const d1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  f1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qn = C.forwardRef(function (e, n) {
    let {
        onClick: i,
        relative: r,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = e,
      f = r1(e, a1),
      { basename: h } = C.useContext(di),
      m,
      y = !1;
    if (typeof u == "string" && f1.test(u) && ((m = u), d1))
      try {
        let v = new URL(window.location.href),
          _ = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          w = Rc(_.pathname, h);
        _.origin === v.origin && w != null ? (u = w + _.search + _.hash) : (y = !0);
      } catch {}
    let x = jx(u, { relative: r }),
      g = h1(u, { replace: o, state: a, target: l, preventScrollReset: c, relative: r, unstable_viewTransition: d });
    function p(v) {
      i && i(v), v.defaultPrevented || g(v);
    }
    return C.createElement("a", xu({}, f, { href: m || x, onClick: y || s ? i : p, ref: n, target: l }));
  });
var vf;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(vf || (vf = {}));
var xf;
(function (t) {
  (t.UseFetcher = "useFetcher"), (t.UseFetchers = "useFetchers"), (t.UseScrollRestoration = "useScrollRestoration");
})(xf || (xf = {}));
function h1(t, e) {
  let {
      target: n,
      replace: i,
      state: r,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    l = Zi(),
    u = Pa(),
    c = pm(t, { relative: o });
  return C.useCallback(
    (d) => {
      if (o1(d, n)) {
        d.preventDefault();
        let f = i !== void 0 ? i : Go(u) === Go(c);
        l(t, { replace: f, state: r, preventScrollReset: s, relative: o, unstable_viewTransition: a });
      }
    },
    [u, l, c, i, r, n, t, s, o, a]
  );
}
const p1 = "_container_148kq_1",
  g1 = "_centred_148kq_21",
  m1 = "_form_148kq_33",
  Ae = {
    container: p1,
    centred: g1,
    form: m1,
    "submit-button": "_submit-button_148kq_45",
    "error-message": "_error-message_148kq_83",
  };
function y1() {
  const [t, e] = C.useState(!0),
    n = C.useContext(rn),
    i = C.useRef(null),
    r = C.useRef(null),
    s = Zi();
  async function o(a) {
    a.preventDefault();
    const l = i.current.value,
      u = r.current.value;
    (
      await fetch(n + "/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: l, password: u }),
      })
    ).ok
      ? s("/")
      : e(!1);
  }
  return b.jsxs("div", {
    className: `${Ae.container} ${Ae.centred}`,
    children: [
      b.jsx("h1", { children: "Login" }),
      b.jsxs("form", {
        onSubmit: o,
        className: Ae.form,
        children: [
          b.jsxs("label", {
            children: [
              "E-mail:",
              b.jsx("input", {
                className: Ae["input-box"],
                type: "email",
                name: "email",
                autoComplete: "on",
                ref: i,
                required: !0,
              }),
            ],
          }),
          b.jsxs("label", {
            children: [
              "Password:",
              b.jsx("input", { className: Ae["input-box"], type: "password", name: "password", ref: r, required: !0 }),
            ],
          }),
          b.jsx("button", { type: "submit", className: Ae["submit-button"], children: "Login" }),
        ],
      }),
      t
        ? b.jsx(b.Fragment, {})
        : b.jsx("p", { className: Ae["error-message"], children: "Invalid login details, try again" }),
      b.jsxs("p", { children: ["Don't have a profile ? ", b.jsx(Qn, { to: "/signup", children: "sign up" })] }),
    ],
  });
}
const v1 = "_navbar_1rnm3_1",
  gt = {
    navbar: v1,
    "navbar-item": "_navbar-item_1rnm3_35",
    "navbar-link": "_navbar-link_1rnm3_45",
    "navbar-image": "_navbar-image_1rnm3_67",
  };
function x1() {
  return (
    Zi(),
    b.jsx("nav", {
      className: gt.navbar,
      children: b.jsxs("ul", {
        children: [
          b.jsx("li", {
            className: gt["navbar-item"],
            children: b.jsx(Qn, {
              to: "/",
              children: b.jsx("img", { src: "stock-logo.svg", alt: "stockViewer logo", className: gt["navbar-image"] }),
            }),
          }),
          b.jsx("li", {
            className: gt["navbar-item"],
            children: b.jsx(Qn, { className: gt["navbar-link"], to: "/", children: "My stocks" }),
          }),
          b.jsx("li", {
            className: gt["navbar-item"],
            children: b.jsx(Qn, { className: gt["navbar-link"], to: "/aboutus", children: "About us" }),
          }),
          b.jsx("li", {
            className: gt["navbar-item"],
            children: b.jsx(Qn, { className: gt["navbar-link"], to: "/contactus", children: "Contact us" }),
          }),
          b.jsx("li", {
            className: gt["navbar-item"],
            children: b.jsx(Qn, {
              to: "/profile",
              children: b.jsx("img", { src: "Default_pfp.svg", alt: "Profile Picture", className: gt["navbar-image"] }),
            }),
          }),
        ],
      }),
    })
  );
}
function _1() {
  const t = Zi(),
    e = C.useContext(rn);
  return (
    C.useEffect(() => {
      const n = document.cookie;
      /sessionid/.test(n) || t("/login"),
        fetch(e + "/api/check-session", { credentials: "include" }).then(
          (i) => {
            i.ok || t("/login");
          },
          (i) => {
            t("/login");
          }
        );
    }),
    b.jsxs("div", { style: { height: "100%" }, children: [b.jsx(x1, {}), b.jsx(t1, {})] })
  );
}
function w1() {
  const [t, e] = C.useState(!0),
    n = C.useContext(rn),
    i = C.useRef(null),
    r = C.useRef(null),
    s = Zi();
  async function o(a) {
    a.preventDefault();
    const l = i.current.value,
      u = r.current.value;
    (
      await fetch(n + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: l, password: u }),
      })
    ).ok
      ? (alert("Account succesfully created"), s("/login"))
      : e(!1);
  }
  return b.jsxs("div", {
    className: `${Ae.container} ${Ae.centred}`,
    children: [
      b.jsx("h1", { children: "Sign up" }),
      b.jsxs("form", {
        className: Ae.form,
        onSubmit: o,
        children: [
          b.jsxs("label", {
            children: [
              "E-mail:",
              b.jsx("input", { type: "email", name: "email", autoComplete: "on", ref: i, required: !0 }),
            ],
          }),
          b.jsxs("label", {
            children: ["Password:", b.jsx("input", { type: "password", name: "password", ref: r, required: !0 })],
          }),
          b.jsx("button", { className: Ae["submit-button"], type: "submit", children: "Sign up" }),
        ],
      }),
      t
        ? b.jsx(b.Fragment, {})
        : b.jsx("p", { className: Ae["error-message"], children: "Invalid Sign up details, try again" }),
      b.jsxs("p", { children: ["Already have a profile ? ", b.jsx(Qn, { to: "/login", children: "login" })] }),
    ],
  });
}
const b1 = "_tab_ml2qj_1",
  k1 = { tab: b1 };
function S1({ stock: t, remove: e, selected: n }) {
  return b.jsxs("div", {
    className: k1.tab,
    children: [b.jsx("button", { onClick: e, children: "×" }), b.jsx("p", { onClick: n, children: t })],
  });
}
const M1 = "_modal_1dmi4_1",
  P1 = "_container_1dmi4_31",
  Ct = {
    modal: M1,
    container: P1,
    "search-bar": "_search-bar_1dmi4_41",
    "search-input": "_search-input_1dmi4_51",
    "search-button": "_search-button_1dmi4_65",
    "close-button": "_close-button_1dmi4_77",
    "stock-results": "_stock-results_1dmi4_99",
    "stock-symbol": "_stock-symbol_1dmi4_141",
    "stock-name": "_stock-name_1dmi4_149",
    "stock-exchange": "_stock-exchange_1dmi4_155",
  };
function C1({ setChosenStock: t, exit: e }) {
  const [n, i] = C.useState([]),
    r = C.useContext(rn);
  async function s(o) {
    const a = document.querySelector("#stockSearchBar").value;
    if (/\s/.test(a) || a === "") {
      alert("invalid search term");
      return;
    }
    const l = await fetch(r + "/api/search-stocks/" + a, { credentials: "include" });
    l !== null && l.ok ? i(await l.json()) : alert("an error has occured when searching for the stock");
  }
  return b.jsxs("div", {
    className: Ct.container,
    children: [
      b.jsx("button", { className: Ct["close-button"], onClick: e, children: "×" }),
      b.jsxs("div", {
        className: Ct["search-bar"],
        children: [
          b.jsx("input", { className: Ct["search-input"], type: "text", id: "stockSearchBar" }),
          b.jsx("button", { className: Ct["search-button"], onClick: s, children: "Search" }),
        ],
      }),
      b.jsx("p", { children: "Search results:" }),
      b.jsx("ul", {
        className: Ct["stock-results"],
        children: n.map((o, a) =>
          b.jsxs(
            "li",
            {
              onClick: () => {
                t(o), e();
              },
              children: [
                b.jsx("p", { className: Ct["stock-symbol"], children: o.symbol }),
                b.jsx("p", { className: Ct["stock-name"], children: o.name }),
                b.jsx("p", { className: Ct["stock-exchange"], children: o.stockExchange }),
              ],
            },
            a
          )
        ),
      }),
    ],
  });
}
const E1 = "_main_l7xit_1",
  D1 = "_sidebar_l7xit_11",
  ll = { main: E1, sidebar: D1, "filler-message": "_filler-message_l7xit_105" };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function xs(t) {
  return (t + 0.5) | 0;
}
const gn = (t, e, n) => Math.max(Math.min(t, n), e);
function xr(t) {
  return gn(xs(t * 2.55), 0, 255);
}
function En(t) {
  return gn(xs(t * 255), 0, 255);
}
function $t(t) {
  return gn(xs(t / 2.55) / 100, 0, 1);
}
function _f(t) {
  return gn(xs(t * 100), 0, 100);
}
const at = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  _u = [..."0123456789ABCDEF"],
  O1 = (t) => _u[t & 15],
  T1 = (t) => _u[(t & 240) >> 4] + _u[t & 15],
  Vs = (t) => (t & 240) >> 4 === (t & 15),
  L1 = (t) => Vs(t.r) && Vs(t.g) && Vs(t.b) && Vs(t.a);
function R1(t) {
  var e = t.length,
    n;
  return (
    t[0] === "#" &&
      (e === 4 || e === 5
        ? (n = {
            r: 255 & (at[t[1]] * 17),
            g: 255 & (at[t[2]] * 17),
            b: 255 & (at[t[3]] * 17),
            a: e === 5 ? at[t[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (n = {
            r: (at[t[1]] << 4) | at[t[2]],
            g: (at[t[3]] << 4) | at[t[4]],
            b: (at[t[5]] << 4) | at[t[6]],
            a: e === 9 ? (at[t[7]] << 4) | at[t[8]] : 255,
          })),
    n
  );
}
const N1 = (t, e) => (t < 255 ? e(t) : "");
function A1(t) {
  var e = L1(t) ? O1 : T1;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + N1(t.a, e) : void 0;
}
const F1 =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ym(t, e, n) {
  const i = e * Math.min(n, 1 - n),
    r = (s, o = (s + t / 30) % 12) => n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [r(0), r(8), r(4)];
}
function I1(t, e, n) {
  const i = (r, s = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
  return [i(5), i(3), i(1)];
}
function z1(t, e, n) {
  const i = ym(t, 1, 0.5);
  let r;
  for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++) (i[r] *= 1 - e - n), (i[r] += e);
  return i;
}
function j1(t, e, n, i, r) {
  return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4;
}
function Ac(t) {
  const n = t.r / 255,
    i = t.g / 255,
    r = t.b / 255,
    s = Math.max(n, i, r),
    o = Math.min(n, i, r),
    a = (s + o) / 2;
  let l, u, c;
  return (
    s !== o &&
      ((c = s - o), (u = a > 0.5 ? c / (2 - s - o) : c / (s + o)), (l = j1(n, i, r, c, s)), (l = l * 60 + 0.5)),
    [l | 0, u || 0, a]
  );
}
function Fc(t, e, n, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(En);
}
function Ic(t, e, n) {
  return Fc(ym, t, e, n);
}
function W1(t, e, n) {
  return Fc(z1, t, e, n);
}
function B1(t, e, n) {
  return Fc(I1, t, e, n);
}
function vm(t) {
  return ((t % 360) + 360) % 360;
}
function H1(t) {
  const e = F1.exec(t);
  let n = 255,
    i;
  if (!e) return;
  e[5] !== i && (n = e[6] ? xr(+e[5]) : En(+e[5]));
  const r = vm(+e[2]),
    s = +e[3] / 100,
    o = +e[4] / 100;
  return (
    e[1] === "hwb" ? (i = W1(r, s, o)) : e[1] === "hsv" ? (i = B1(r, s, o)) : (i = Ic(r, s, o)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function V1(t, e) {
  var n = Ac(t);
  (n[0] = vm(n[0] + e)), (n = Ic(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function $1(t) {
  if (!t) return;
  const e = Ac(t),
    n = e[0],
    i = _f(e[1]),
    r = _f(e[2]);
  return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${$t(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`;
}
const wf = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  bf = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Y1() {
  const t = {},
    e = Object.keys(bf),
    n = Object.keys(wf);
  let i, r, s, o, a;
  for (i = 0; i < e.length; i++) {
    for (o = a = e[i], r = 0; r < n.length; r++) (s = n[r]), (a = a.replace(s, wf[s]));
    (s = parseInt(bf[o], 16)), (t[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return t;
}
let $s;
function U1(t) {
  $s || (($s = Y1()), ($s.transparent = [0, 0, 0, 0]));
  const e = $s[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const Q1 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function X1(t) {
  const e = Q1.exec(t);
  let n = 255,
    i,
    r,
    s;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      n = e[8] ? xr(o) : gn(o * 255, 0, 255);
    }
    return (
      (i = +e[1]),
      (r = +e[3]),
      (s = +e[5]),
      (i = 255 & (e[2] ? xr(i) : gn(i, 0, 255))),
      (r = 255 & (e[4] ? xr(r) : gn(r, 0, 255))),
      (s = 255 & (e[6] ? xr(s) : gn(s, 0, 255))),
      { r: i, g: r, b: s, a: n }
    );
  }
}
function q1(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${$t(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const ul = (t) => (t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055),
  gi = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function K1(t, e, n) {
  const i = gi($t(t.r)),
    r = gi($t(t.g)),
    s = gi($t(t.b));
  return {
    r: En(ul(i + n * (gi($t(e.r)) - i))),
    g: En(ul(r + n * (gi($t(e.g)) - r))),
    b: En(ul(s + n * (gi($t(e.b)) - s))),
    a: t.a + n * (e.a - t.a),
  };
}
function Ys(t, e, n) {
  if (t) {
    let i = Ac(t);
    (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
      (i = Ic(i)),
      (t.r = i[0]),
      (t.g = i[1]),
      (t.b = i[2]);
  }
}
function xm(t, e) {
  return t && Object.assign(e || {}, t);
}
function kf(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 && ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = En(t[3])))
      : ((e = xm(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = En(e.a))),
    e
  );
}
function G1(t) {
  return t.charAt(0) === "r" ? X1(t) : H1(t);
}
class ss {
  constructor(e) {
    if (e instanceof ss) return e;
    const n = typeof e;
    let i;
    n === "object" ? (i = kf(e)) : n === "string" && (i = R1(e) || U1(e) || G1(e)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = xm(this._rgb);
    return e && (e.a = $t(e.a)), e;
  }
  set rgb(e) {
    this._rgb = kf(e);
  }
  rgbString() {
    return this._valid ? q1(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? A1(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? $1(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const i = this.rgb,
        r = e.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        a = 2 * o - 1,
        l = i.a - r.a,
        u = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (s = 1 - u),
        (i.r = 255 & (u * i.r + s * r.r + 0.5)),
        (i.g = 255 & (u * i.g + s * r.g + 0.5)),
        (i.b = 255 & (u * i.b + s * r.b + 0.5)),
        (i.a = o * i.a + (1 - o) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = K1(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new ss(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = En(e)), this;
  }
  clearer(e) {
    const n = this._rgb;
    return (n.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      n = xs(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = n), this;
  }
  opaquer(e) {
    const n = this._rgb;
    return (n.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return Ys(this._rgb, 2, e), this;
  }
  darken(e) {
    return Ys(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return Ys(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return Ys(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return V1(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function jt() {}
const Z1 = (() => {
  let t = 0;
  return () => t++;
})();
function H(t) {
  return t === null || typeof t > "u";
}
function ae(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function W(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function he(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Je(t, e) {
  return he(t) ? t : e;
}
function z(t, e) {
  return typeof t > "u" ? e : t;
}
const J1 = (t, e) => (typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e),
  _m = (t, e) => (typeof t == "string" && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t);
function G(t, e, n) {
  if (t && typeof t.call == "function") return t.apply(n, e);
}
function U(t, e, n, i) {
  let r, s, o;
  if (ae(t)) for (s = t.length, r = 0; r < s; r++) e.call(n, t[r], r);
  else if (W(t)) for (o = Object.keys(t), s = o.length, r = 0; r < s; r++) e.call(n, t[o[r]], o[r]);
}
function Jo(t, e) {
  let n, i, r, s;
  if (!t || !e || t.length !== e.length) return !1;
  for (n = 0, i = t.length; n < i; ++n)
    if (((r = t[n]), (s = e[n]), r.datasetIndex !== s.datasetIndex || r.index !== s.index)) return !1;
  return !0;
}
function ea(t) {
  if (ae(t)) return t.map(ea);
  if (W(t)) {
    const e = Object.create(null),
      n = Object.keys(t),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) e[n[r]] = ea(t[n[r]]);
    return e;
  }
  return t;
}
function wm(t) {
  return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function e_(t, e, n, i) {
  if (!wm(t)) return;
  const r = e[t],
    s = n[t];
  W(r) && W(s) ? os(r, s, i) : (e[t] = ea(s));
}
function os(t, e, n) {
  const i = ae(e) ? e : [e],
    r = i.length;
  if (!W(t)) return t;
  n = n || {};
  const s = n.merger || e_;
  let o;
  for (let a = 0; a < r; ++a) {
    if (((o = i[a]), !W(o))) continue;
    const l = Object.keys(o);
    for (let u = 0, c = l.length; u < c; ++u) s(l[u], t, o, n);
  }
  return t;
}
function Nr(t, e) {
  return os(t, e, { merger: t_ });
}
function t_(t, e, n) {
  if (!wm(t)) return;
  const i = e[t],
    r = n[t];
  W(i) && W(r) ? Nr(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ea(r));
}
const Sf = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
function n_(t) {
  const e = t.split("."),
    n = [];
  let i = "";
  for (const r of e) (i += r), i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function i_(t) {
  const e = n_(t);
  return (n) => {
    for (const i of e) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function Tn(t, e) {
  return (Sf[e] || (Sf[e] = i_(e)))(t);
}
function zc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const as = (t) => typeof t < "u",
  Ln = (t) => typeof t == "function",
  Mf = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const n of t) if (!e.has(n)) return !1;
    return !0;
  };
function r_(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const se = Math.PI,
  re = 2 * se,
  s_ = re + se,
  ta = Number.POSITIVE_INFINITY,
  o_ = se / 180,
  ye = se / 2,
  zn = se / 4,
  Pf = (se * 2) / 3,
  mn = Math.log10,
  Ft = Math.sign;
function Ar(t, e, n) {
  return Math.abs(t - e) < n;
}
function Cf(t) {
  const e = Math.round(t);
  t = Ar(t, e, t / 1e3) ? e : t;
  const n = Math.pow(10, Math.floor(mn(t))),
    i = t / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function a_(t) {
  const e = [],
    n = Math.sqrt(t);
  let i;
  for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
  return n === (n | 0) && e.push(n), e.sort((r, s) => r - s).pop(), e;
}
function $i(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function l_(t, e) {
  const n = Math.round(t);
  return n - e <= t && n + e >= t;
}
function bm(t, e, n) {
  let i, r, s;
  for (i = 0, r = t.length; i < r; i++)
    (s = t[i][n]), isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function xt(t) {
  return t * (se / 180);
}
function jc(t) {
  return t * (180 / se);
}
function Ef(t) {
  if (!he(t)) return;
  let e = 1,
    n = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
  return n;
}
function km(t, e) {
  const n = e.x - t.x,
    i = e.y - t.y,
    r = Math.sqrt(n * n + i * i);
  let s = Math.atan2(i, n);
  return s < -0.5 * se && (s += re), { angle: s, distance: r };
}
function wu(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function u_(t, e) {
  return ((t - e + s_) % re) - se;
}
function tt(t) {
  return ((t % re) + re) % re;
}
function ls(t, e, n, i) {
  const r = tt(t),
    s = tt(e),
    o = tt(n),
    a = tt(s - r),
    l = tt(o - r),
    u = tt(r - s),
    c = tt(r - o);
  return r === s || r === o || (i && s === o) || (a > l && u < c);
}
function Pe(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function c_(t) {
  return Pe(t, -32768, 32767);
}
function Xt(t, e, n, i = 1e-6) {
  return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function Wc(t, e, n) {
  n = n || ((o) => t[o] < e);
  let i = t.length - 1,
    r = 0,
    s;
  for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
  return { lo: r, hi: i };
}
const qt = (t, e, n, i) =>
    Wc(
      t,
      n,
      i
        ? (r) => {
            const s = t[r][e];
            return s < n || (s === n && t[r + 1][e] === n);
          }
        : (r) => t[r][e] < n
    ),
  d_ = (t, e, n) => Wc(t, n, (i) => t[i][e] >= n);
function f_(t, e, n) {
  let i = 0,
    r = t.length;
  for (; i < r && t[i] < e; ) i++;
  for (; r > i && t[r - 1] > n; ) r--;
  return i > 0 || r < t.length ? t.slice(i, r) : t;
}
const Sm = ["push", "pop", "shift", "splice", "unshift"];
function h_(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }),
    Sm.forEach((n) => {
      const i = "_onData" + zc(n),
        r = t[n];
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = r.apply(this, s);
          return (
            t._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...s);
            }),
            o
          );
        },
      });
    });
}
function Df(t, e) {
  const n = t._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(e);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (Sm.forEach((s) => {
        delete t[s];
      }),
      delete t._chartjs);
}
function Mm(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Pm = (function () {
  return typeof window > "u"
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
})();
function Cm(t, e) {
  let n = [],
    i = !1;
  return function (...r) {
    (n = r),
      i ||
        ((i = !0),
        Pm.call(window, () => {
          (i = !1), t.apply(e, n);
        }));
  };
}
function p_(t, e) {
  let n;
  return function (...i) {
    return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e;
  };
}
const Bc = (t) => (t === "start" ? "left" : t === "end" ? "right" : "center"),
  Ne = (t, e, n) => (t === "start" ? e : t === "end" ? n : (e + n) / 2),
  g_ = (t, e, n, i) => (t === (i ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e);
function Em(t, e, n) {
  const i = e.length;
  let r = 0,
    s = i;
  if (t._sorted) {
    const { iScale: o, _parsed: a } = t,
      l = o.axis,
      { min: u, max: c, minDefined: d, maxDefined: f } = o.getUserBounds();
    d && (r = Pe(Math.min(qt(a, l, u).lo, n ? i : qt(e, l, o.getPixelForValue(u)).lo), 0, i - 1)),
      f
        ? (s = Pe(Math.max(qt(a, o.axis, c, !0).hi + 1, n ? 0 : qt(e, l, o.getPixelForValue(c), !0).hi + 1), r, i) - r)
        : (s = i - r);
  }
  return { start: r, count: s };
}
function Dm(t) {
  const { xScale: e, yScale: n, _scaleRanges: i } = t,
    r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
  if (!i) return (t._scaleRanges = r), !0;
  const s = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
  return Object.assign(i, r), s;
}
const Us = (t) => t === 0 || t === 1,
  Of = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * re) / n)),
  Tf = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * re) / n) + 1,
  Fr = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)),
    easeInSine: (t) => -Math.cos(t * ye) + 1,
    easeOutSine: (t) => Math.sin(t * ye),
    easeInOutSine: (t) => -0.5 * (Math.cos(se * t) - 1),
    easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
    easeInOutExpo: (t) =>
      Us(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (Us(t) ? t : Of(t, 0.075, 0.3)),
    easeOutElastic: (t) => (Us(t) ? t : Tf(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      return Us(t) ? t : t < 0.5 ? 0.5 * Of(t * 2, 0.1125, 0.45) : 0.5 + 0.5 * Tf(t * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(t) {
      return t * t * ((1.70158 + 1) * t - 1.70158);
    },
    easeOutBack(t) {
      return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
        : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - Fr.easeOutBounce(1 - t),
    easeOutBounce(t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
        : t < 2.5 / 2.75
        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: (t) => (t < 0.5 ? Fr.easeInBounce(t * 2) * 0.5 : Fr.easeOutBounce(t * 2 - 1) * 0.5 + 0.5),
  };
function Hc(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function Lf(t) {
  return Hc(t) ? t : new ss(t);
}
function cl(t) {
  return Hc(t) ? t : new ss(t).saturate(0.5).darken(0.1).hexString();
}
const m_ = ["x", "y", "borderWidth", "radius", "tension"],
  y_ = ["color", "borderColor", "backgroundColor"];
function v_(t) {
  t.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    t.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    t.set("animations", { colors: { type: "color", properties: y_ }, numbers: { type: "number", properties: m_ } }),
    t.describe("animations", { _fallback: "animation" }),
    t.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } },
      hide: {
        animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 } },
      },
    });
}
function x_(t) {
  t.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
const Rf = new Map();
function __(t, e) {
  e = e || {};
  const n = t + JSON.stringify(e);
  let i = Rf.get(n);
  return i || ((i = new Intl.NumberFormat(t, e)), Rf.set(n, i)), i;
}
function _s(t, e, n) {
  return __(e, n).format(t);
}
const Om = {
  values(t) {
    return ae(t) ? t : "" + t;
  },
  numeric(t, e, n) {
    if (t === 0) return "0";
    const i = this.chart.options.locale;
    let r,
      s = t;
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (u < 1e-4 || u > 1e15) && (r = "scientific"), (s = w_(t, n));
    }
    const o = mn(Math.abs(s)),
      a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), _s(t, i, l);
  },
  logarithmic(t, e, n) {
    if (t === 0) return "0";
    const i = n[e].significand || t / Math.pow(10, Math.floor(mn(t)));
    return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length ? Om.numeric.call(this, t, e, n) : "";
  },
};
function w_(t, e) {
  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var Ca = { formatters: Om };
function b_(t) {
  t.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, n) => n.lineWidth,
      tickColor: (e, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ca.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    t.route("scale.ticks", "color", "", "color"),
    t.route("scale.grid", "color", "", "borderColor"),
    t.route("scale.border", "color", "", "borderColor"),
    t.route("scale.title", "color", "", "color"),
    t.describe("scale", {
      _fallback: !1,
      _scriptable: (e) => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
      _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    t.describe("scales", { _fallback: "scale" }),
    t.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const ai = Object.create(null),
  bu = Object.create(null);
function Ir(t, e) {
  if (!e) return t;
  const n = e.split(".");
  for (let i = 0, r = n.length; i < r; ++i) {
    const s = n[i];
    t = t[s] || (t[s] = Object.create(null));
  }
  return t;
}
function dl(t, e, n) {
  return typeof e == "string" ? os(Ir(t, e), n) : os(Ir(t, ""), e);
}
class k_ {
  constructor(e, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, r) => cl(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => cl(r.borderColor)),
      (this.hoverColor = (i, r) => cl(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(n);
  }
  set(e, n) {
    return dl(this, e, n);
  }
  get(e) {
    return Ir(this, e);
  }
  describe(e, n) {
    return dl(bu, e, n);
  }
  override(e, n) {
    return dl(ai, e, n);
  }
  route(e, n, i, r) {
    const s = Ir(this, e),
      o = Ir(this, i),
      a = "_" + n;
    Object.defineProperties(s, {
      [a]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            u = o[r];
          return W(l) ? Object.assign({}, u, l) : z(l, u);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(e) {
    e.forEach((n) => n(this));
  }
}
var pe = new k_(
  {
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => t !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [v_, x_, b_]
);
function S_(t) {
  return !t || H(t.size) || H(t.family)
    ? null
    : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
}
function na(t, e, n, i, r) {
  let s = e[r];
  return s || ((s = e[r] = t.measureText(r).width), n.push(r)), s > i && (i = s), i;
}
function M_(t, e, n, i) {
  i = i || {};
  let r = (i.data = i.data || {}),
    s = (i.garbageCollect = i.garbageCollect || []);
  i.font !== e && ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = e)), t.save(), (t.font = e);
  let o = 0;
  const a = n.length;
  let l, u, c, d, f;
  for (l = 0; l < a; l++)
    if (((d = n[l]), d != null && !ae(d))) o = na(t, r, s, o, d);
    else if (ae(d)) for (u = 0, c = d.length; u < c; u++) (f = d[u]), f != null && !ae(f) && (o = na(t, r, s, o, f));
  t.restore();
  const h = s.length / 2;
  if (h > n.length) {
    for (l = 0; l < h; l++) delete r[s[l]];
    s.splice(0, h);
  }
  return o;
}
function jn(t, e, n) {
  const i = t.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - r) * i) / i + r;
}
function Nf(t, e) {
  (!e && !t) ||
    ((e = e || t.getContext("2d")), e.save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
}
function ku(t, e, n, i) {
  Tm(t, e, n, i, null);
}
function Tm(t, e, n, i, r) {
  let s, o, a, l, u, c, d, f;
  const h = e.pointStyle,
    m = e.rotation,
    y = e.radius;
  let x = (m || 0) * o_;
  if (
    h &&
    typeof h == "object" &&
    ((s = h.toString()), s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    t.save(),
      t.translate(n, i),
      t.rotate(x),
      t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
      t.restore();
    return;
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((t.beginPath(), h)) {
      default:
        r ? t.ellipse(n, i, r / 2, y, 0, 0, re) : t.arc(n, i, y, 0, re), t.closePath();
        break;
      case "triangle":
        (c = r ? r / 2 : y),
          t.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          (x += Pf),
          t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          (x += Pf),
          t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
          t.closePath();
        break;
      case "rectRounded":
        (u = y * 0.516),
          (l = y - u),
          (o = Math.cos(x + zn) * l),
          (d = Math.cos(x + zn) * (r ? r / 2 - u : l)),
          (a = Math.sin(x + zn) * l),
          (f = Math.sin(x + zn) * (r ? r / 2 - u : l)),
          t.arc(n - d, i - a, u, x - se, x - ye),
          t.arc(n + f, i - o, u, x - ye, x),
          t.arc(n + d, i + a, u, x, x + ye),
          t.arc(n - f, i + o, u, x + ye, x + se),
          t.closePath();
        break;
      case "rect":
        if (!m) {
          (l = Math.SQRT1_2 * y), (c = r ? r / 2 : l), t.rect(n - c, i - l, 2 * c, 2 * l);
          break;
        }
        x += zn;
      case "rectRot":
        (d = Math.cos(x) * (r ? r / 2 : y)),
          (o = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + f, i - o),
          t.lineTo(n + d, i + a),
          t.lineTo(n - f, i + o),
          t.closePath();
        break;
      case "crossRot":
        x += zn;
      case "cross":
        (d = Math.cos(x) * (r ? r / 2 : y)),
          (o = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + f, i - o),
          t.lineTo(n - f, i + o);
        break;
      case "star":
        (d = Math.cos(x) * (r ? r / 2 : y)),
          (o = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + f, i - o),
          t.lineTo(n - f, i + o),
          (x += zn),
          (d = Math.cos(x) * (r ? r / 2 : y)),
          (o = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (r ? r / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + f, i - o),
          t.lineTo(n - f, i + o);
        break;
      case "line":
        (o = r ? r / 2 : Math.cos(x) * y), (a = Math.sin(x) * y), t.moveTo(n - o, i - a), t.lineTo(n + o, i + a);
        break;
      case "dash":
        t.moveTo(n, i), t.lineTo(n + Math.cos(x) * (r ? r / 2 : y), i + Math.sin(x) * y);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function Kt(t, e, n) {
  return (n = n || 0.5), !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n);
}
function Ea(t, e) {
  t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function Da(t) {
  t.restore();
}
function P_(t, e, n, i, r) {
  if (!e) return t.lineTo(n.x, n.y);
  if (r === "middle") {
    const s = (e.x + n.x) / 2;
    t.lineTo(s, e.y), t.lineTo(s, n.y);
  } else (r === "after") != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
  t.lineTo(n.x, n.y);
}
function C_(t, e, n, i) {
  if (!e) return t.lineTo(n.x, n.y);
  t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y);
}
function E_(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    H(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function D_(t, e, n, i, r) {
  if (r.strikethrough || r.underline) {
    const s = t.measureText(i),
      o = e - s.actualBoundingBoxLeft,
      a = e + s.actualBoundingBoxRight,
      l = n - s.actualBoundingBoxAscent,
      u = n + s.actualBoundingBoxDescent,
      c = r.strikethrough ? (l + u) / 2 : u;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = r.decorationWidth || 2),
      t.moveTo(o, c),
      t.lineTo(a, c),
      t.stroke();
  }
}
function O_(t, e) {
  const n = t.fillStyle;
  (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
}
function li(t, e, n, i, r, s = {}) {
  const o = ae(e) ? e : [e],
    a = s.strokeWidth > 0 && s.strokeColor !== "";
  let l, u;
  for (t.save(), t.font = r.string, E_(t, s), l = 0; l < o.length; ++l)
    (u = o[l]),
      s.backdrop && O_(t, s.backdrop),
      a &&
        (s.strokeColor && (t.strokeStyle = s.strokeColor),
        H(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(u, n, i, s.maxWidth)),
      t.fillText(u, n, i, s.maxWidth),
      D_(t, n, i, u, s),
      (i += Number(r.lineHeight));
  t.restore();
}
function us(t, e) {
  const { x: n, y: i, w: r, h: s, radius: o } = e;
  t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * se, se, !0),
    t.lineTo(n, i + s - o.bottomLeft),
    t.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, se, ye, !0),
    t.lineTo(n + r - o.bottomRight, i + s),
    t.arc(n + r - o.bottomRight, i + s - o.bottomRight, o.bottomRight, ye, 0, !0),
    t.lineTo(n + r, i + o.topRight),
    t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -ye, !0),
    t.lineTo(n + o.topLeft, i);
}
const T_ = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  L_ = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function R_(t, e) {
  const n = ("" + t).match(T_);
  if (!n || n[1] === "normal") return e * 1.2;
  switch (((t = +n[2]), n[3])) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return e * t;
}
const N_ = (t) => +t || 0;
function Vc(t, e) {
  const n = {},
    i = W(e),
    r = i ? Object.keys(e) : e,
    s = W(t) ? (i ? (o) => z(t[o], t[e[o]]) : (o) => t[o]) : () => t;
  for (const o of r) n[o] = N_(s(o));
  return n;
}
function Lm(t) {
  return Vc(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ei(t) {
  return Vc(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function je(t) {
  const e = Lm(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Se(t, e) {
  (t = t || {}), (e = e || pe.font);
  let n = z(t.size, e.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = z(t.style, e.style);
  i && !("" + i).match(L_) && (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const r = {
    family: z(t.family, e.family),
    lineHeight: R_(z(t.lineHeight, e.lineHeight), n),
    size: n,
    style: i,
    weight: z(t.weight, e.weight),
    string: "",
  };
  return (r.string = S_(r)), r;
}
function _r(t, e, n, i) {
  let r, s, o;
  for (r = 0, s = t.length; r < s; ++r) if (((o = t[r]), o !== void 0 && o !== void 0)) return o;
}
function A_(t, e, n) {
  const { min: i, max: r } = t,
    s = _m(e, (r - i) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function In(t, e) {
  return Object.assign(Object.create(t), e);
}
function $c(t, e = [""], n, i, r = () => t[0]) {
  const s = n || t;
  typeof i > "u" && (i = Fm("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: s,
    _fallback: i,
    _getTarget: r,
    override: (a) => $c([a, ...t], e, s, i),
  };
  return new Proxy(o, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete t[0][l], !0;
    },
    get(a, l) {
      return Nm(a, l, () => V_(l, e, t, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    has(a, l) {
      return Ff(a).includes(l);
    },
    ownKeys(a) {
      return Ff(a);
    },
    set(a, l, u) {
      const c = a._storage || (a._storage = r());
      return (a[l] = c[l] = u), delete a._keys, !0;
    },
  });
}
function Yi(t, e, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: Rm(t, i),
    setContext: (s) => Yi(t, s, n, i),
    override: (s) => Yi(t.override(s), e, n, i),
  };
  return new Proxy(r, {
    deleteProperty(s, o) {
      return delete s[o], delete t[o], !0;
    },
    get(s, o, a) {
      return Nm(s, o, () => I_(s, o, a));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(t, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    has(s, o) {
      return Reflect.has(t, o);
    },
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    set(s, o, a) {
      return (t[o] = a), delete s[o], !0;
    },
  });
}
function Rm(t, e = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: n = e.scriptable, _indexable: i = e.indexable, _allKeys: r = e.allKeys } = t;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: Ln(n) ? n : () => n,
    isIndexable: Ln(i) ? i : () => i,
  };
}
const F_ = (t, e) => (t ? t + zc(e) : e),
  Yc = (t, e) => W(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Nm(t, e, n) {
  if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor") return t[e];
  const i = n();
  return (t[e] = i), i;
}
function I_(t, e, n) {
  const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = t;
  let a = i[e];
  return (
    Ln(a) && o.isScriptable(e) && (a = z_(e, a, t, n)),
    ae(a) && a.length && (a = j_(e, a, t, o.isIndexable)),
    Yc(e, a) && (a = Yi(a, r, s && s[e], o)),
    a
  );
}
function z_(t, e, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _stack: a } = n;
  if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
  a.add(t);
  let l = e(s, o || i);
  return a.delete(t), Yc(t, l) && (l = Uc(r._scopes, r, t, l)), l;
}
function j_(t, e, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _descriptors: a } = n;
  if (typeof s.index < "u" && i(t)) return e[s.index % e.length];
  if (W(e[0])) {
    const l = e,
      u = r._scopes.filter((c) => c !== l);
    e = [];
    for (const c of l) {
      const d = Uc(u, r, t, c);
      e.push(Yi(d, s, o && o[t], a));
    }
  }
  return e;
}
function Am(t, e, n) {
  return Ln(t) ? t(e, n) : t;
}
const W_ = (t, e) => (t === !0 ? e : typeof t == "string" ? Tn(e, t) : void 0);
function B_(t, e, n, i, r) {
  for (const s of e) {
    const o = W_(n, s);
    if (o) {
      t.add(o);
      const a = Am(o._fallback, n, r);
      if (typeof a < "u" && a !== n && a !== i) return a;
    } else if (o === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function Uc(t, e, n, i) {
  const r = e._rootScopes,
    s = Am(e._fallback, n, i),
    o = [...t, ...r],
    a = new Set();
  a.add(i);
  let l = Af(a, o, n, s || n, i);
  return l === null || (typeof s < "u" && s !== n && ((l = Af(a, o, s, l, i)), l === null))
    ? !1
    : $c(Array.from(a), [""], r, s, () => H_(e, n, i));
}
function Af(t, e, n, i, r) {
  for (; n; ) n = B_(t, e, n, i, r);
  return n;
}
function H_(t, e, n) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const r = i[e];
  return ae(r) && W(n) ? n : r || {};
}
function V_(t, e, n, i) {
  let r;
  for (const s of e) if (((r = Fm(F_(s, t), n)), typeof r < "u")) return Yc(t, r) ? Uc(n, i, t, r) : r;
}
function Fm(t, e) {
  for (const n of e) {
    if (!n) continue;
    const i = n[t];
    if (typeof i < "u") return i;
  }
}
function Ff(t) {
  let e = t._keys;
  return e || (e = t._keys = $_(t._scopes)), e;
}
function $_(t) {
  const e = new Set();
  for (const n of t) for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) e.add(i);
  return Array.from(e);
}
function Im(t, e, n, i) {
  const { iScale: r } = t,
    { key: s = "r" } = this._parsing,
    o = new Array(i);
  let a, l, u, c;
  for (a = 0, l = i; a < l; ++a) (u = a + n), (c = e[u]), (o[a] = { r: r.parse(Tn(c, s), u) });
  return o;
}
const Y_ = Number.EPSILON || 1e-14,
  Ui = (t, e) => e < t.length && !t[e].skip && t[e],
  zm = (t) => (t === "x" ? "y" : "x");
function U_(t, e, n, i) {
  const r = t.skip ? e : t,
    s = e,
    o = n.skip ? e : n,
    a = wu(s, r),
    l = wu(o, s);
  let u = a / (a + l),
    c = l / (a + l);
  (u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c);
  const d = i * u,
    f = i * c;
  return {
    previous: { x: s.x - d * (o.x - r.x), y: s.y - d * (o.y - r.y) },
    next: { x: s.x + f * (o.x - r.x), y: s.y + f * (o.y - r.y) },
  };
}
function Q_(t, e, n) {
  const i = t.length;
  let r,
    s,
    o,
    a,
    l,
    u = Ui(t, 0);
  for (let c = 0; c < i - 1; ++c)
    if (((l = u), (u = Ui(t, c + 1)), !(!l || !u))) {
      if (Ar(e[c], 0, Y_)) {
        n[c] = n[c + 1] = 0;
        continue;
      }
      (r = n[c] / e[c]),
        (s = n[c + 1] / e[c]),
        (a = Math.pow(r, 2) + Math.pow(s, 2)),
        !(a <= 9) && ((o = 3 / Math.sqrt(a)), (n[c] = r * o * e[c]), (n[c + 1] = s * o * e[c]));
    }
}
function X_(t, e, n = "x") {
  const i = zm(n),
    r = t.length;
  let s,
    o,
    a,
    l = Ui(t, 0);
  for (let u = 0; u < r; ++u) {
    if (((o = a), (a = l), (l = Ui(t, u + 1)), !a)) continue;
    const c = a[n],
      d = a[i];
    o && ((s = (c - o[n]) / 3), (a[`cp1${n}`] = c - s), (a[`cp1${i}`] = d - s * e[u])),
      l && ((s = (l[n] - c) / 3), (a[`cp2${n}`] = c + s), (a[`cp2${i}`] = d + s * e[u]));
  }
}
function q_(t, e = "x") {
  const n = zm(e),
    i = t.length,
    r = Array(i).fill(0),
    s = Array(i);
  let o,
    a,
    l,
    u = Ui(t, 0);
  for (o = 0; o < i; ++o)
    if (((a = l), (l = u), (u = Ui(t, o + 1)), !!l)) {
      if (u) {
        const c = u[e] - l[e];
        r[o] = c !== 0 ? (u[n] - l[n]) / c : 0;
      }
      s[o] = a ? (u ? (Ft(r[o - 1]) !== Ft(r[o]) ? 0 : (r[o - 1] + r[o]) / 2) : r[o - 1]) : r[o];
    }
  Q_(t, r, s), X_(t, s, e);
}
function Qs(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
function K_(t, e) {
  let n,
    i,
    r,
    s,
    o,
    a = Kt(t[0], e);
  for (n = 0, i = t.length; n < i; ++n)
    (o = s),
      (s = a),
      (a = n < i - 1 && Kt(t[n + 1], e)),
      s &&
        ((r = t[n]),
        o && ((r.cp1x = Qs(r.cp1x, e.left, e.right)), (r.cp1y = Qs(r.cp1y, e.top, e.bottom))),
        a && ((r.cp2x = Qs(r.cp2x, e.left, e.right)), (r.cp2y = Qs(r.cp2y, e.top, e.bottom))));
}
function G_(t, e, n, i, r) {
  let s, o, a, l;
  if ((e.spanGaps && (t = t.filter((u) => !u.skip)), e.cubicInterpolationMode === "monotone")) q_(t, r);
  else {
    let u = i ? t[t.length - 1] : t[0];
    for (s = 0, o = t.length; s < o; ++s)
      (a = t[s]),
        (l = U_(u, a, t[Math.min(s + 1, o - (i ? 0 : 1)) % o], e.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (u = a);
  }
  e.capBezierPoints && K_(t, n);
}
function Qc() {
  return typeof window < "u" && typeof document < "u";
}
function Xc(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function ia(t, e, n) {
  let i;
  return (
    typeof t == "string"
      ? ((i = parseInt(t, 10)), t.indexOf("%") !== -1 && (i = (i / 100) * e.parentNode[n]))
      : (i = t),
    i
  );
}
const Oa = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function Z_(t, e) {
  return Oa(t).getPropertyValue(e);
}
const J_ = ["top", "right", "bottom", "left"];
function ti(t, e, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const s = J_[r];
    i[s] = parseFloat(t[e + "-" + s + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const ew = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function tw(t, e) {
  const n = t.touches,
    i = n && n.length ? n[0] : t,
    { offsetX: r, offsetY: s } = i;
  let o = !1,
    a,
    l;
  if (ew(r, s, t.target)) (a = r), (l = s);
  else {
    const u = e.getBoundingClientRect();
    (a = i.clientX - u.left), (l = i.clientY - u.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function $n(t, e) {
  if ("native" in t) return t;
  const { canvas: n, currentDevicePixelRatio: i } = e,
    r = Oa(n),
    s = r.boxSizing === "border-box",
    o = ti(r, "padding"),
    a = ti(r, "border", "width"),
    { x: l, y: u, box: c } = tw(t, n),
    d = o.left + (c && a.left),
    f = o.top + (c && a.top);
  let { width: h, height: m } = e;
  return (
    s && ((h -= o.width + a.width), (m -= o.height + a.height)),
    { x: Math.round((((l - d) / h) * n.width) / i), y: Math.round((((u - f) / m) * n.height) / i) }
  );
}
function nw(t, e, n) {
  let i, r;
  if (e === void 0 || n === void 0) {
    const s = t && Xc(t);
    if (!s) (e = t.clientWidth), (n = t.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        a = Oa(s),
        l = ti(a, "border", "width"),
        u = ti(a, "padding");
      (e = o.width - u.width - l.width),
        (n = o.height - u.height - l.height),
        (i = ia(a.maxWidth, s, "clientWidth")),
        (r = ia(a.maxHeight, s, "clientHeight"));
    }
  }
  return { width: e, height: n, maxWidth: i || ta, maxHeight: r || ta };
}
const Xs = (t) => Math.round(t * 10) / 10;
function iw(t, e, n, i) {
  const r = Oa(t),
    s = ti(r, "margin"),
    o = ia(r.maxWidth, t, "clientWidth") || ta,
    a = ia(r.maxHeight, t, "clientHeight") || ta,
    l = nw(t, e, n);
  let { width: u, height: c } = l;
  if (r.boxSizing === "content-box") {
    const f = ti(r, "border", "width"),
      h = ti(r, "padding");
    (u -= h.width + f.width), (c -= h.height + f.height);
  }
  return (
    (u = Math.max(0, u - s.width)),
    (c = Math.max(0, i ? u / i : c - s.height)),
    (u = Xs(Math.min(u, o, l.maxWidth))),
    (c = Xs(Math.min(c, a, l.maxHeight))),
    u && !c && (c = Xs(u / 2)),
    (e !== void 0 || n !== void 0) && i && l.height && c > l.height && ((c = l.height), (u = Xs(Math.floor(c * i)))),
    { width: u, height: c }
  );
}
function If(t, e, n) {
  const i = e || 1,
    r = Math.floor(t.height * i),
    s = Math.floor(t.width * i);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const o = t.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
    t.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
      ? ((t.currentDevicePixelRatio = i), (o.height = r), (o.width = s), t.ctx.setTransform(i, 0, 0, i, 0, 0), !0)
      : !1
  );
}
const rw = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    Qc() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {}
  return t;
})();
function zf(t, e) {
  const n = Z_(t, e),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Yn(t, e, n, i) {
  return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function sw(t, e, n, i) {
  return {
    x: t.x + n * (e.x - t.x),
    y: i === "middle" ? (n < 0.5 ? t.y : e.y) : i === "after" ? (n < 1 ? t.y : e.y) : n > 0 ? e.y : t.y,
  };
}
function ow(t, e, n, i) {
  const r = { x: t.cp2x, y: t.cp2y },
    s = { x: e.cp1x, y: e.cp1y },
    o = Yn(t, r, n),
    a = Yn(r, s, n),
    l = Yn(s, e, n),
    u = Yn(o, a, n),
    c = Yn(a, l, n);
  return Yn(u, c, n);
}
const aw = function (t, e) {
    return {
      x(n) {
        return t + t + e - n;
      },
      setWidth(n) {
        e = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  lw = function () {
    return {
      x(t) {
        return t;
      },
      setWidth(t) {},
      textAlign(t) {
        return t;
      },
      xPlus(t, e) {
        return t + e;
      },
      leftForLtr(t, e) {
        return t;
      },
    };
  };
function Fi(t, e, n) {
  return t ? aw(e, n) : lw();
}
function jm(t, e) {
  let n, i;
  (e === "ltr" || e === "rtl") &&
    ((n = t.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", e, "important"),
    (t.prevTextDirection = i));
}
function Wm(t, e) {
  e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
}
function Bm(t) {
  return t === "angle"
    ? { between: ls, compare: u_, normalize: tt }
    : { between: Xt, compare: (e, n) => e - n, normalize: (e) => e };
}
function jf({ start: t, end: e, count: n, loop: i, style: r }) {
  return { start: t % n, end: e % n, loop: i && (e - t + 1) % n === 0, style: r };
}
function uw(t, e, n) {
  const { property: i, start: r, end: s } = n,
    { between: o, normalize: a } = Bm(i),
    l = e.length;
  let { start: u, end: c, loop: d } = t,
    f,
    h;
  if (d) {
    for (u += l, c += l, f = 0, h = l; f < h && o(a(e[u % l][i]), r, s); ++f) u--, c--;
    (u %= l), (c %= l);
  }
  return c < u && (c += l), { start: u, end: c, loop: d, style: t.style };
}
function Hm(t, e, n) {
  if (!n) return [t];
  const { property: i, start: r, end: s } = n,
    o = e.length,
    { compare: a, between: l, normalize: u } = Bm(i),
    { start: c, end: d, loop: f, style: h } = uw(t, e, n),
    m = [];
  let y = !1,
    x = null,
    g,
    p,
    v;
  const _ = () => l(r, v, g) && a(r, v) !== 0,
    w = () => a(s, g) === 0 || l(s, v, g),
    P = () => y || _(),
    k = () => !y || w();
  for (let S = c, D = c; S <= d; ++S)
    (p = e[S % o]),
      !p.skip &&
        ((g = u(p[i])),
        g !== v &&
          ((y = l(g, r, s)),
          x === null && P() && (x = a(g, r) === 0 ? S : D),
          x !== null && k() && (m.push(jf({ start: x, end: S, loop: f, count: o, style: h })), (x = null)),
          (D = S),
          (v = g)));
  return x !== null && m.push(jf({ start: x, end: d, loop: f, count: o, style: h })), m;
}
function Vm(t, e) {
  const n = [],
    i = t.segments;
  for (let r = 0; r < i.length; r++) {
    const s = Hm(i[r], t.points, e);
    s.length && n.push(...s);
  }
  return n;
}
function cw(t, e, n, i) {
  let r = 0,
    s = e - 1;
  if (n && !i) for (; r < e && !t[r].skip; ) r++;
  for (; r < e && t[r].skip; ) r++;
  for (r %= e, n && (s += r); s > r && t[s % e].skip; ) s--;
  return (s %= e), { start: r, end: s };
}
function dw(t, e, n, i) {
  const r = t.length,
    s = [];
  let o = e,
    a = t[e],
    l;
  for (l = e + 1; l <= n; ++l) {
    const u = t[l % r];
    u.skip || u.stop
      ? a.skip || ((i = !1), s.push({ start: e % r, end: (l - 1) % r, loop: i }), (e = o = u.stop ? l : null))
      : ((o = l), a.skip && (e = l)),
      (a = u);
  }
  return o !== null && s.push({ start: e % r, end: o % r, loop: i }), s;
}
function fw(t, e) {
  const n = t.points,
    i = t.options.spanGaps,
    r = n.length;
  if (!r) return [];
  const s = !!t._loop,
    { start: o, end: a } = cw(n, r, s, i);
  if (i === !0) return Wf(t, [{ start: o, end: a, loop: s }], n, e);
  const l = a < o ? a + r : a,
    u = !!t._fullLoop && o === 0 && a === r - 1;
  return Wf(t, dw(n, o, l, u), n, e);
}
function Wf(t, e, n, i) {
  return !i || !i.setContext || !n ? e : hw(t, e, n, i);
}
function hw(t, e, n, i) {
  const r = t._chart.getContext(),
    s = Bf(t.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = t,
    l = n.length,
    u = [];
  let c = s,
    d = e[0].start,
    f = d;
  function h(m, y, x, g) {
    const p = a ? -1 : 1;
    if (m !== y) {
      for (m += l; n[m % l].skip; ) m -= p;
      for (; n[y % l].skip; ) y += p;
      m % l !== y % l && (u.push({ start: m % l, end: y % l, loop: x, style: g }), (c = g), (d = y % l));
    }
  }
  for (const m of e) {
    d = a ? d : m.start;
    let y = n[d % l],
      x;
    for (f = d + 1; f <= m.end; f++) {
      const g = n[f % l];
      (x = Bf(
        i.setContext(
          In(r, { type: "segment", p0: y, p1: g, p0DataIndex: (f - 1) % l, p1DataIndex: f % l, datasetIndex: o })
        )
      )),
        pw(x, c) && h(d, f - 1, m.loop, c),
        (y = g),
        (c = x);
    }
    d < f - 1 && h(d, f - 1, m.loop, c);
  }
  return u;
}
function Bf(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function pw(t, e) {
  if (!e) return !1;
  const n = [],
    i = function (r, s) {
      return Hc(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
    };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class gw {
  constructor() {
    (this._request = null), (this._charts = new Map()), (this._running = !1), (this._lastDate = void 0);
  }
  _notify(e, n, i, r) {
    const s = n.listeners[r],
      o = n.duration;
    s.forEach((a) => a({ chart: e, initial: n.initial, numSteps: o, currentStep: Math.min(i - n.start, o) }));
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Pm.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const s = i.items;
      let o = s.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = s[o]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total), l.tick(e), (a = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      a && (r.draw(), this._notify(r, i, e, "progress")),
        s.length || ((i.running = !1), this._notify(r, i, e, "complete"), (i.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = e),
      n === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const n = this._charts;
    let i = n.get(e);
    return (
      i || ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }), n.set(e, i)), i
    );
  }
  listen(e, n, i) {
    this._getAnims(e).listeners[n].push(i);
  }
  add(e, n) {
    !n || !n.length || this._getAnims(e).items.push(...n);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const n = this._charts.get(e);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const n = this._charts.get(e);
    return !(!n || !n.running || !n.items.length);
  }
  stop(e) {
    const n = this._charts.get(e);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(e, n, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var Wt = new gw();
const Hf = "transparent",
  mw = {
    boolean(t, e, n) {
      return n > 0.5 ? e : t;
    },
    color(t, e, n) {
      const i = Lf(t || Hf),
        r = i.valid && Lf(e || Hf);
      return r && r.valid ? r.mix(i, n).hexString() : e;
    },
    number(t, e, n) {
      return t + (e - t) * n;
    },
  };
class yw {
  constructor(e, n, i, r) {
    const s = n[i];
    r = _r([e.to, r, s, e.from]);
    const o = _r([e.from, s, r]);
    (this._active = !0),
      (this._fn = e.fn || mw[e.type || typeof o]),
      (this._easing = Fr[e.easing] || Fr.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = o),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        s = i - this._start,
        o = this._duration - s;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, e.duration))),
        (this._total += s),
        (this._loop = !!e.loop),
        (this._to = _r([e.to, n, r, e.from])),
        (this._from = _r([e.from, r, n]));
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const n = e - this._start,
      i = this._duration,
      r = this._prop,
      s = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = s !== a && (o || n < i)), !this._active)) {
      (this._target[r] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = s;
      return;
    }
    (l = (n / i) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(s, a, l));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      e.push({ res: n, rej: i });
    });
  }
  _notify(e) {
    const n = e ? "res" : "rej",
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
class $m {
  constructor(e, n) {
    (this._chart = e), (this._properties = new Map()), this.configure(n);
  }
  configure(e) {
    if (!W(e)) return;
    const n = Object.keys(pe.animation),
      i = this._properties;
    Object.getOwnPropertyNames(e).forEach((r) => {
      const s = e[r];
      if (!W(s)) return;
      const o = {};
      for (const a of n) o[a] = s[a];
      ((ae(s.properties) && s.properties) || [r]).forEach((a) => {
        (a === r || !i.has(a)) && i.set(a, o);
      });
    });
  }
  _animateOptions(e, n) {
    const i = n.options,
      r = xw(e, i);
    if (!r) return [];
    const s = this._createAnimations(r, i);
    return (
      i.$shared &&
        vw(e.options.$animations, i).then(
          () => {
            e.options = i;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(e, n) {
    const i = this._properties,
      r = [],
      s = e.$animations || (e.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const u = o[l];
      if (u.charAt(0) === "$") continue;
      if (u === "options") {
        r.push(...this._animateOptions(e, n));
        continue;
      }
      const c = n[u];
      let d = s[u];
      const f = i.get(u);
      if (d)
        if (f && d.active()) {
          d.update(f, c, a);
          continue;
        } else d.cancel();
      if (!f || !f.duration) {
        e[u] = c;
        continue;
      }
      (s[u] = d = new yw(f, e, u, c)), r.push(d);
    }
    return r;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const i = this._createAnimations(e, n);
    if (i.length) return Wt.add(this._chart, i), !0;
  }
}
function vw(t, e) {
  const n = [],
    i = Object.keys(e);
  for (let r = 0; r < i.length; r++) {
    const s = t[i[r]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function xw(t, e) {
  if (!e) return;
  let n = t.options;
  if (!n) {
    t.options = e;
    return;
  }
  return n.$shared && (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
}
function Vf(t, e) {
  const n = (t && t.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? e : 0,
    s = n.max === void 0 ? e : 0;
  return { start: i ? s : r, end: i ? r : s };
}
function _w(t, e, n) {
  if (n === !1) return !1;
  const i = Vf(t, n),
    r = Vf(e, n);
  return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function ww(t) {
  let e, n, i, r;
  return (
    W(t) ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left)) : (e = n = i = r = t),
    { top: e, right: n, bottom: i, left: r, disabled: t === !1 }
  );
}
function Ym(t, e) {
  const n = [],
    i = t._getSortedDatasetMetas(e);
  let r, s;
  for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
  return n;
}
function $f(t, e, n, i = {}) {
  const r = t.keys,
    s = i.mode === "single";
  let o, a, l, u;
  if (e !== null) {
    for (o = 0, a = r.length; o < a; ++o) {
      if (((l = +r[o]), l === n)) {
        if (i.all) continue;
        break;
      }
      (u = t.values[l]), he(u) && (s || e === 0 || Ft(e) === Ft(u)) && (e += u);
    }
    return e;
  }
}
function bw(t, e) {
  const { iScale: n, vScale: i } = e,
    r = n.axis === "x" ? "x" : "y",
    s = i.axis === "x" ? "x" : "y",
    o = Object.keys(t),
    a = new Array(o.length);
  let l, u, c;
  for (l = 0, u = o.length; l < u; ++l) (c = o[l]), (a[l] = { [r]: c, [s]: t[c] });
  return a;
}
function Yf(t, e) {
  const n = t && t.options.stacked;
  return n || (n === void 0 && e.stack !== void 0);
}
function kw(t, e, n) {
  return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function Sw(t) {
  const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
  return { min: i ? e : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY };
}
function Mw(t, e, n) {
  const i = t[e] || (t[e] = {});
  return i[n] || (i[n] = {});
}
function Uf(t, e, n, i) {
  for (const r of e.getMatchingVisibleMetas(i).reverse()) {
    const s = t[r.index];
    if ((n && s > 0) || (!n && s < 0)) return r.index;
  }
  return null;
}
function Qf(t, e) {
  const { chart: n, _cachedMeta: i } = t,
    r = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: a } = i,
    l = s.axis,
    u = o.axis,
    c = kw(s, o, i),
    d = e.length;
  let f;
  for (let h = 0; h < d; ++h) {
    const m = e[h],
      { [l]: y, [u]: x } = m,
      g = m._stacks || (m._stacks = {});
    (f = g[u] = Mw(r, c, y)), (f[a] = x), (f._top = Uf(f, o, !0, i.type)), (f._bottom = Uf(f, o, !1, i.type));
    const p = f._visualValues || (f._visualValues = {});
    p[a] = x;
  }
}
function fl(t, e) {
  const n = t.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === e)
    .shift();
}
function Pw(t, e) {
  return In(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" });
}
function Cw(t, e, n) {
  return In(t, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: e,
    mode: "default",
    type: "data",
  });
}
function ar(t, e) {
  const n = t.controller.index,
    i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const r of e) {
      const s = r._stacks;
      if (!s || s[i] === void 0 || s[i][n] === void 0) return;
      delete s[i][n], s[i]._visualValues !== void 0 && s[i]._visualValues[n] !== void 0 && delete s[i]._visualValues[n];
    }
  }
}
const hl = (t) => t === "reset" || t === "none",
  Xf = (t, e) => (e ? t : Object.assign({}, t)),
  Ew = (t, e, n) => t && !e.hidden && e._stacked && { keys: Ym(n, !0), values: null };
class bt {
  constructor(e, n) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = Yf(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && ar(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (d, f, h, m) => (d === "x" ? f : d === "r" ? m : h),
      s = (n.xAxisID = z(i.xAxisID, fl(e, "x"))),
      o = (n.yAxisID = z(i.yAxisID, fl(e, "y"))),
      a = (n.rAxisID = z(i.rAxisID, fl(e, "r"))),
      l = n.indexAxis,
      u = (n.iAxisID = r(l, s, o, a)),
      c = (n.vAxisID = r(l, o, s, a));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(c));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const n = this._cachedMeta;
    return e === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Df(this._data, this), e._stacked && ar(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      n = e.data || (e.data = []),
      i = this._data;
    if (W(n)) {
      const r = this._cachedMeta;
      this._data = bw(n, r);
    } else if (i !== n) {
      if (i) {
        Df(i, this);
        const r = this._cachedMeta;
        ar(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && h_(n, this), (this._syncList = []), (this._data = n);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = Yf(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), ar(n), (n.stack = i.stack)),
      this._resyncElements(e),
      (r || s !== n._stacked) && Qf(this, n._parsed);
  }
  configure() {
    const e = this.chart.config,
      n = e.datasetScopeKeys(this._type),
      i = e.getOptionScopes(this.getDataset(), n, !0);
    (this.options = e.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: s, _stacked: o } = i,
      a = s.axis;
    let l = e === 0 && n === r.length ? !0 : i._sorted,
      u = e > 0 && i._parsed[e - 1],
      c,
      d,
      f;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (f = r);
    else {
      ae(r[e])
        ? (f = this.parseArrayData(i, r, e, n))
        : W(r[e])
        ? (f = this.parseObjectData(i, r, e, n))
        : (f = this.parsePrimitiveData(i, r, e, n));
      const h = () => d[a] === null || (u && d[a] < u[a]);
      for (c = 0; c < n; ++c) (i._parsed[c + e] = d = f[c]), l && (h() && (l = !1), (u = d));
      i._sorted = l;
    }
    o && Qf(this, f);
  }
  parsePrimitiveData(e, n, i, r) {
    const { iScale: s, vScale: o } = e,
      a = s.axis,
      l = o.axis,
      u = s.getLabels(),
      c = s === o,
      d = new Array(r);
    let f, h, m;
    for (f = 0, h = r; f < h; ++f) (m = f + i), (d[f] = { [a]: c || s.parse(u[m], m), [l]: o.parse(n[m], m) });
    return d;
  }
  parseArrayData(e, n, i, r) {
    const { xScale: s, yScale: o } = e,
      a = new Array(r);
    let l, u, c, d;
    for (l = 0, u = r; l < u; ++l) (c = l + i), (d = n[c]), (a[l] = { x: s.parse(d[0], c), y: o.parse(d[1], c) });
    return a;
  }
  parseObjectData(e, n, i, r) {
    const { xScale: s, yScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      u = new Array(r);
    let c, d, f, h;
    for (c = 0, d = r; c < d; ++c)
      (f = c + i), (h = n[f]), (u[c] = { x: s.parse(Tn(h, a), f), y: o.parse(Tn(h, l), f) });
    return u;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, i) {
    const r = this.chart,
      s = this._cachedMeta,
      o = n[e.axis],
      a = { keys: Ym(r, !0), values: n._stacks[e.axis]._visualValues };
    return $f(a, o, s.index, { mode: i });
  }
  updateRangeFromParsed(e, n, i, r) {
    const s = i[n.axis];
    let o = s === null ? NaN : s;
    const a = r && i._stacks[n.axis];
    r && a && ((r.values = a), (o = $f(r, s, this._cachedMeta.index))),
      (e.min = Math.min(e.min, o)),
      (e.max = Math.max(e.max, o));
  }
  getMinMax(e, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      s = i._sorted && e === i.iScale,
      o = r.length,
      a = this._getOtherScale(e),
      l = Ew(n, i, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: d } = Sw(a);
    let f, h;
    function m() {
      h = r[f];
      const y = h[a.axis];
      return !he(h[e.axis]) || c > y || d < y;
    }
    for (f = 0; f < o && !(!m() && (this.updateRangeFromParsed(u, e, h, l), s)); ++f);
    if (s) {
      for (f = o - 1; f >= 0; --f)
        if (!m()) {
          this.updateRangeFromParsed(u, e, h, l);
          break;
        }
    }
    return u;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, s, o;
    for (r = 0, s = n.length; r < s; ++r) (o = n[r][e.axis]), he(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      s = this.getParsed(e);
    return { label: i ? "" + i.getLabelForValue(s[i.axis]) : "", value: r ? "" + r.getLabelForValue(s[r.axis]) : "" };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || "default"), (n._clip = ww(z(this.options.clip, _w(n.xScale, n.yScale, this.getMaxOverflow()))));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      s = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || r.length - a,
      u = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(e, s, a, l), c = a; c < a + l; ++c) {
      const d = r[c];
      d.hidden || (d.active && u ? o.push(d) : d.draw(e, s));
    }
    for (c = 0; c < o.length; ++c) o[c].draw(e, s);
  }
  getStyle(e, n) {
    const i = n ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(e || 0, i);
  }
  getContext(e, n, i) {
    const r = this.getDataset();
    let s;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      (s = o.$context || (o.$context = Cw(this.getContext(), e, o))),
        (s.parsed = this.getParsed(e)),
        (s.raw = r.data[e]),
        (s.index = s.dataIndex = e);
    } else
      (s = this.$context || (this.$context = Pw(this.chart.getContext(), this.index))),
        (s.dataset = r),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = i), s;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = "default", i) {
    const r = n === "active",
      s = this._cachedDataOpts,
      o = e + "-" + n,
      a = s[o],
      l = this.enableOptionSharing && as(i);
    if (a) return Xf(a, l);
    const u = this.chart.config,
      c = u.datasetElementScopeKeys(this._type, e),
      d = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      f = u.getOptionScopes(this.getDataset(), c),
      h = Object.keys(pe.elements[e]),
      m = () => this.getContext(i, r, n),
      y = u.resolveNamedOptions(f, h, m, d);
    return y.$shared && ((y.$shared = l), (s[o] = Object.freeze(Xf(y, l)))), y;
  }
  _resolveAnimations(e, n, i) {
    const r = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      a = s[o];
    if (a) return a;
    let l;
    if (r.options.animation !== !1) {
      const c = this.chart.config,
        d = c.datasetAnimationScopeKeys(this._type, n),
        f = c.getOptionScopes(this.getDataset(), d);
      l = c.createResolver(f, this.getContext(e, i, n));
    }
    const u = new $m(r, l && l.animations);
    return l && l._cacheable && (s[o] = Object.freeze(u)), u;
  }
  getSharedOptions(e) {
    if (e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, n) {
    return !n || hl(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const i = this.resolveDataElementOptions(e, n),
      r = this._sharedOptions,
      s = this.getSharedOptions(i),
      o = this.includeOptions(n, s) || s !== r;
    return this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o };
  }
  updateElement(e, n, i, r) {
    hl(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
  }
  updateSharedOptions(e, n, i) {
    e && !hl(n) && this._resolveAnimations(void 0, n).update(e, i);
  }
  _setStyle(e, n, i, r) {
    e.active = r;
    const s = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(e, { options: (!r && this.getSharedOptions(s)) || s });
  }
  removeHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !1);
  }
  setHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, u] of this._syncList) this[a](l, u);
    this._syncList = [];
    const r = i.length,
      s = n.length,
      o = Math.min(s, r);
    o && this.parse(0, o), s > r ? this._insertElements(r, s - r, e) : s < r && this._removeElements(s, r - s);
  }
  _insertElements(e, n, i = !0) {
    const r = this._cachedMeta,
      s = r.data,
      o = e + n;
    let a;
    const l = (u) => {
      for (u.length += n, a = u.length - 1; a >= o; a--) u[a] = u[a - n];
    };
    for (l(s), a = e; a < o; ++a) s[a] = new this.dataElementType();
    this._parsing && l(r._parsed), this.parse(e, n), i && this.updateElements(s, e, n, "reset");
  }
  updateElements(e, n, i, r) {}
  _removeElements(e, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(e, n);
      i._stacked && ar(i, r);
    }
    i.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [n, i, r] = e;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, n) {
    n && this._sync(["_removeElements", e, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", e, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
M(bt, "defaults", {}), M(bt, "datasetElementType", null), M(bt, "dataElementType", null);
function Dw(t, e) {
  if (!t._cache.$bar) {
    const n = t.getMatchingVisibleMetas(e);
    let i = [];
    for (let r = 0, s = n.length; r < s; r++) i = i.concat(n[r].controller.getAllParsedValues(t));
    t._cache.$bar = Mm(i.sort((r, s) => r - s));
  }
  return t._cache.$bar;
}
function Ow(t) {
  const e = t.iScale,
    n = Dw(e, t.type);
  let i = e._length,
    r,
    s,
    o,
    a;
  const l = () => {
    o === 32767 || o === -32768 || (as(a) && (i = Math.min(i, Math.abs(o - a) || i)), (a = o));
  };
  for (r = 0, s = n.length; r < s; ++r) (o = e.getPixelForValue(n[r])), l();
  for (a = void 0, r = 0, s = e.ticks.length; r < s; ++r) (o = e.getPixelForTick(r)), l();
  return i;
}
function Tw(t, e, n, i) {
  const r = n.barThickness;
  let s, o;
  return (
    H(r) ? ((s = e.min * n.categoryPercentage), (o = n.barPercentage)) : ((s = r * i), (o = 1)),
    { chunk: s / i, ratio: o, start: e.pixels[t] - s / 2 }
  );
}
function Lw(t, e, n, i) {
  const r = e.pixels,
    s = r[t];
  let o = t > 0 ? r[t - 1] : null,
    a = t < r.length - 1 ? r[t + 1] : null;
  const l = n.categoryPercentage;
  o === null && (o = s - (a === null ? e.end - e.start : a - s)), a === null && (a = s + s - o);
  const u = s - ((s - Math.min(o, a)) / 2) * l;
  return { chunk: ((Math.abs(a - o) / 2) * l) / i, ratio: n.barPercentage, start: u };
}
function Rw(t, e, n, i) {
  const r = n.parse(t[0], i),
    s = n.parse(t[1], i),
    o = Math.min(r, s),
    a = Math.max(r, s);
  let l = o,
    u = a;
  Math.abs(o) > Math.abs(a) && ((l = a), (u = o)),
    (e[n.axis] = u),
    (e._custom = { barStart: l, barEnd: u, start: r, end: s, min: o, max: a });
}
function Um(t, e, n, i) {
  return ae(t) ? Rw(t, e, n, i) : (e[n.axis] = n.parse(t, i)), e;
}
function qf(t, e, n, i) {
  const r = t.iScale,
    s = t.vScale,
    o = r.getLabels(),
    a = r === s,
    l = [];
  let u, c, d, f;
  for (u = n, c = n + i; u < c; ++u) (f = e[u]), (d = {}), (d[r.axis] = a || r.parse(o[u], u)), l.push(Um(f, d, s, u));
  return l;
}
function pl(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function Nw(t, e, n) {
  return t !== 0 ? Ft(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
}
function Aw(t) {
  let e, n, i, r, s;
  return (
    t.horizontal
      ? ((e = t.base > t.x), (n = "left"), (i = "right"))
      : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
    e ? ((r = "end"), (s = "start")) : ((r = "start"), (s = "end")),
    { start: n, end: i, reverse: e, top: r, bottom: s }
  );
}
function Fw(t, e, n, i) {
  let r = e.borderSkipped;
  const s = {};
  if (!r) {
    t.borderSkipped = s;
    return;
  }
  if (r === !0) {
    t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: o, end: a, reverse: l, top: u, bottom: c } = Aw(t);
  r === "middle" &&
    n &&
    ((t.enableBorderRadius = !0),
    (n._top || 0) === i ? (r = u) : (n._bottom || 0) === i ? (r = c) : ((s[Kf(c, o, a, l)] = !0), (r = u))),
    (s[Kf(r, o, a, l)] = !0),
    (t.borderSkipped = s);
}
function Kf(t, e, n, i) {
  return i ? ((t = Iw(t, e, n)), (t = Gf(t, n, e))) : (t = Gf(t, e, n)), t;
}
function Iw(t, e, n) {
  return t === e ? n : t === n ? e : t;
}
function Gf(t, e, n) {
  return t === "start" ? e : t === "end" ? n : t;
}
function zw(t, { inflateAmount: e }, n) {
  t.inflateAmount = e === "auto" ? (n === 1 ? 0.33 : 0) : e;
}
class vo extends bt {
  parsePrimitiveData(e, n, i, r) {
    return qf(e, n, i, r);
  }
  parseArrayData(e, n, i, r) {
    return qf(e, n, i, r);
  }
  parseObjectData(e, n, i, r) {
    const { iScale: s, vScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      u = s.axis === "x" ? a : l,
      c = o.axis === "x" ? a : l,
      d = [];
    let f, h, m, y;
    for (f = i, h = i + r; f < h; ++f)
      (y = n[f]), (m = {}), (m[s.axis] = s.parse(Tn(y, u), f)), d.push(Um(Tn(y, c), m, o, f));
    return d;
  }
  updateRangeFromParsed(e, n, i, r) {
    super.updateRangeFromParsed(e, n, i, r);
    const s = i._custom;
    s && n === this._cachedMeta.vScale && ((e.min = Math.min(e.min, s.min)), (e.max = Math.max(e.max, s.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      { iScale: i, vScale: r } = n,
      s = this.getParsed(e),
      o = s._custom,
      a = pl(o) ? "[" + o.start + ", " + o.end + "]" : "" + r.getLabelForValue(s[r.axis]);
    return { label: "" + i.getLabelForValue(s[i.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const e = this._cachedMeta;
    e.stack = this.getDataset().stack;
  }
  update(e) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, e);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      {
        index: o,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      u = a.isHorizontal(),
      c = this._getRuler(),
      { sharedOptions: d, includeOptions: f } = this._getSharedOptions(n, r);
    for (let h = n; h < n + i; h++) {
      const m = this.getParsed(h),
        y = s || H(m[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(h),
        x = this._calculateBarIndexPixels(h, c),
        g = (m._stacks || {})[a.axis],
        p = {
          horizontal: u,
          base: y.base,
          enableBorderRadius: !g || pl(m._custom) || o === g._top || o === g._bottom,
          x: u ? y.head : x.center,
          y: u ? x.center : y.head,
          height: u ? x.size : Math.abs(y.size),
          width: u ? Math.abs(y.size) : x.size,
        };
      f && (p.options = d || this.resolveDataElementOptions(h, e[h].active ? "active" : r));
      const v = p.options || e[h].options;
      Fw(p, v, g, o), zw(p, v, c.ratio), this.updateElement(e[h], h, p, r);
    }
  }
  _getStacks(e, n) {
    const { iScale: i } = this._cachedMeta,
      r = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped),
      s = i.options.stacked,
      o = [],
      a = (l) => {
        const u = l.controller.getParsed(n),
          c = u && u[l.vScale.axis];
        if (H(c) || isNaN(c)) return !0;
      };
    for (const l of r)
      if (
        !(n !== void 0 && a(l)) &&
        ((s === !1 || o.indexOf(l.stack) === -1 || (s === void 0 && l.stack === void 0)) && o.push(l.stack),
        l.index === e)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(e) {
    return this._getStacks(void 0, e).length;
  }
  _getStackIndex(e, n, i) {
    const r = this._getStacks(e, i),
      s = n !== void 0 ? r.indexOf(n) : -1;
    return s === -1 ? r.length - 1 : s;
  }
  _getRuler() {
    const e = this.options,
      n = this._cachedMeta,
      i = n.iScale,
      r = [];
    let s, o;
    for (s = 0, o = n.data.length; s < o; ++s) r.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
    const a = e.barThickness;
    return {
      min: a || Ow(n),
      pixels: r,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: e.grouped,
      ratio: a ? 1 : e.categoryPercentage * e.barPercentage,
    };
  }
  _calculateBarValuePixels(e) {
    const {
        _cachedMeta: { vScale: n, _stacked: i, index: r },
        options: { base: s, minBarLength: o },
      } = this,
      a = s || 0,
      l = this.getParsed(e),
      u = l._custom,
      c = pl(u);
    let d = l[n.axis],
      f = 0,
      h = i ? this.applyStack(n, l, i) : d,
      m,
      y;
    h !== d && ((f = h - d), (h = d)),
      c && ((d = u.barStart), (h = u.barEnd - u.barStart), d !== 0 && Ft(d) !== Ft(u.barEnd) && (f = 0), (f += d));
    const x = !H(s) && !c ? s : f;
    let g = n.getPixelForValue(x);
    if ((this.chart.getDataVisibility(e) ? (m = n.getPixelForValue(f + h)) : (m = g), (y = m - g), Math.abs(y) < o)) {
      (y = Nw(y, n, a) * o), d === a && (g -= y / 2);
      const p = n.getPixelForDecimal(0),
        v = n.getPixelForDecimal(1),
        _ = Math.min(p, v),
        w = Math.max(p, v);
      (g = Math.max(Math.min(g, w), _)),
        (m = g + y),
        i && !c && (l._stacks[n.axis]._visualValues[r] = n.getValueForPixel(m) - n.getValueForPixel(g));
    }
    if (g === n.getPixelForValue(a)) {
      const p = (Ft(y) * n.getLineWidthForValue(a)) / 2;
      (g += p), (y -= p);
    }
    return { size: y, base: g, head: m, center: m + y / 2 };
  }
  _calculateBarIndexPixels(e, n) {
    const i = n.scale,
      r = this.options,
      s = r.skipNull,
      o = z(r.maxBarThickness, 1 / 0);
    let a, l;
    if (n.grouped) {
      const u = s ? this._getStackCount(e) : n.stackCount,
        c = r.barThickness === "flex" ? Lw(e, n, r, u) : Tw(e, n, r, u),
        d = this._getStackIndex(this.index, this._cachedMeta.stack, s ? e : void 0);
      (a = c.start + c.chunk * d + c.chunk / 2), (l = Math.min(o, c.chunk * c.ratio));
    } else (a = i.getPixelForValue(this.getParsed(e)[i.axis], e)), (l = Math.min(o, n.min * n.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const e = this._cachedMeta,
      n = e.vScale,
      i = e.data,
      r = i.length;
    let s = 0;
    for (; s < r; ++s) this.getParsed(s)[n.axis] !== null && !i[s].hidden && i[s].draw(this._ctx);
  }
}
M(vo, "id", "bar"),
  M(vo, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } },
  }),
  M(vo, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
class xo extends bt {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(e, n, i, r) {
    const s = super.parsePrimitiveData(e, n, i, r);
    for (let o = 0; o < s.length; o++) s[o]._custom = this.resolveDataElementOptions(o + i).radius;
    return s;
  }
  parseArrayData(e, n, i, r) {
    const s = super.parseArrayData(e, n, i, r);
    for (let o = 0; o < s.length; o++) {
      const a = n[i + o];
      s[o]._custom = z(a[2], this.resolveDataElementOptions(o + i).radius);
    }
    return s;
  }
  parseObjectData(e, n, i, r) {
    const s = super.parseObjectData(e, n, i, r);
    for (let o = 0; o < s.length; o++) {
      const a = n[i + o];
      s[o]._custom = z(a && a.r && +a.r, this.resolveDataElementOptions(o + i).radius);
    }
    return s;
  }
  getMaxOverflow() {
    const e = this._cachedMeta.data;
    let n = 0;
    for (let i = e.length - 1; i >= 0; --i) n = Math.max(n, e[i].size(this.resolveDataElementOptions(i)) / 2);
    return n > 0 && n;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: r, yScale: s } = n,
      o = this.getParsed(e),
      a = r.getLabelForValue(o.x),
      l = s.getLabelForValue(o.y),
      u = o._custom;
    return { label: i[e] || "", value: "(" + a + ", " + l + (u ? ", " + u : "") + ")" };
  }
  update(e) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, e);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      { iScale: o, vScale: a } = this._cachedMeta,
      { sharedOptions: l, includeOptions: u } = this._getSharedOptions(n, r),
      c = o.axis,
      d = a.axis;
    for (let f = n; f < n + i; f++) {
      const h = e[f],
        m = !s && this.getParsed(f),
        y = {},
        x = (y[c] = s ? o.getPixelForDecimal(0.5) : o.getPixelForValue(m[c])),
        g = (y[d] = s ? a.getBasePixel() : a.getPixelForValue(m[d]));
      (y.skip = isNaN(x) || isNaN(g)),
        u &&
          ((y.options = l || this.resolveDataElementOptions(f, h.active ? "active" : r)), s && (y.options.radius = 0)),
        this.updateElement(h, f, y, r);
    }
  }
  resolveDataElementOptions(e, n) {
    const i = this.getParsed(e);
    let r = super.resolveDataElementOptions(e, n);
    r.$shared && (r = Object.assign({}, r, { $shared: !1 }));
    const s = r.radius;
    return n !== "active" && (r.radius = 0), (r.radius += z(i && i._custom, s)), r;
  }
}
M(xo, "id", "bubble"),
  M(xo, "defaults", {
    datasetElementType: !1,
    dataElementType: "point",
    animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } },
  }),
  M(xo, "overrides", { scales: { x: { type: "linear" }, y: { type: "linear" } } });
function jw(t, e, n) {
  let i = 1,
    r = 1,
    s = 0,
    o = 0;
  if (e < re) {
    const a = t,
      l = a + e,
      u = Math.cos(a),
      c = Math.sin(a),
      d = Math.cos(l),
      f = Math.sin(l),
      h = (v, _, w) => (ls(v, a, l, !0) ? 1 : Math.max(_, _ * n, w, w * n)),
      m = (v, _, w) => (ls(v, a, l, !0) ? -1 : Math.min(_, _ * n, w, w * n)),
      y = h(0, u, d),
      x = h(ye, c, f),
      g = m(se, u, d),
      p = m(se + ye, c, f);
    (i = (y - g) / 2), (r = (x - p) / 2), (s = -(y + g) / 2), (o = -(x + p) / 2);
  }
  return { ratioX: i, ratioY: r, offsetX: s, offsetY: o };
}
class Gn extends bt {
  constructor(e, n) {
    super(e, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(e, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta;
    if (this._parsing === !1) r._parsed = i;
    else {
      let s = (l) => +i[l];
      if (W(i[e])) {
        const { key: l = "value" } = this._parsing;
        s = (u) => +Tn(i[u], l);
      }
      let o, a;
      for (o = e, a = e + n; o < a; ++o) r._parsed[o] = s(o);
    }
  }
  _getRotation() {
    return xt(this.options.rotation - 90);
  }
  _getCircumference() {
    return xt(this.options.circumference);
  }
  _getRotationExtents() {
    let e = re,
      n = -re;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const r = this.chart.getDatasetMeta(i).controller,
          s = r._getRotation(),
          o = r._getCircumference();
        (e = Math.min(e, s)), (n = Math.max(n, s + o));
      }
    return { rotation: e, circumference: n - e };
  }
  update(e) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      s = r.data,
      o = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
      a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
      l = Math.min(J1(this.options.cutout, a), 1),
      u = this._getRingWeight(this.index),
      { circumference: c, rotation: d } = this._getRotationExtents(),
      { ratioX: f, ratioY: h, offsetX: m, offsetY: y } = jw(d, c, l),
      x = (i.width - o) / f,
      g = (i.height - o) / h,
      p = Math.max(Math.min(x, g) / 2, 0),
      v = _m(this.options.radius, p),
      _ = Math.max(v * l, 0),
      w = (v - _) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = m * v),
      (this.offsetY = y * v),
      (r.total = this.calculateTotal()),
      (this.outerRadius = v - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * u, 0)),
      this.updateElements(s, 0, s.length, e);
  }
  _circumference(e, n) {
    const i = this.options,
      r = this._cachedMeta,
      s = this._getCircumference();
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(e) ||
      r._parsed[e] === null ||
      r.data[e].hidden
      ? 0
      : this.calculateCircumference((r._parsed[e] * s) / re);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      o = this.chart,
      a = o.chartArea,
      u = o.options.animation,
      c = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      f = s && u.animateScale,
      h = f ? 0 : this.innerRadius,
      m = f ? 0 : this.outerRadius,
      { sharedOptions: y, includeOptions: x } = this._getSharedOptions(n, r);
    let g = this._getRotation(),
      p;
    for (p = 0; p < n; ++p) g += this._circumference(p, s);
    for (p = n; p < n + i; ++p) {
      const v = this._circumference(p, s),
        _ = e[p],
        w = {
          x: c + this.offsetX,
          y: d + this.offsetY,
          startAngle: g,
          endAngle: g + v,
          circumference: v,
          outerRadius: m,
          innerRadius: h,
        };
      x && (w.options = y || this.resolveDataElementOptions(p, _.active ? "active" : r)),
        (g += v),
        this.updateElement(_, p, w, r);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta,
      n = e.data;
    let i = 0,
      r;
    for (r = 0; r < n.length; r++) {
      const s = e._parsed[r];
      s !== null && !isNaN(s) && this.chart.getDataVisibility(r) && !n[r].hidden && (i += Math.abs(s));
    }
    return i;
  }
  calculateCircumference(e) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(e) ? re * (Math.abs(e) / n) : 0;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = _s(n._parsed[e], i.options.locale);
    return { label: r[e] || "", value: s };
  }
  getMaxBorderWidth(e) {
    let n = 0;
    const i = this.chart;
    let r, s, o, a, l;
    if (!e) {
      for (r = 0, s = i.data.datasets.length; r < s; ++r)
        if (i.isDatasetVisible(r)) {
          (o = i.getDatasetMeta(r)), (e = o.data), (a = o.controller);
          break;
        }
    }
    if (!e) return 0;
    for (r = 0, s = e.length; r < s; ++r)
      (l = a.resolveDataElementOptions(r)),
        l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(e) {
    let n = 0;
    for (let i = 0, r = e.length; i < r; ++i) {
      const s = this.resolveDataElementOptions(i);
      n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(e) {
    let n = 0;
    for (let i = 0; i < e; ++i) this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(e) {
    return Math.max(z(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
M(Gn, "id", "doughnut"),
  M(Gn, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  M(Gn, "descriptors", {
    _scriptable: (e) => e !== "spacing",
    _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash"),
  }),
  M(Gn, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(e) {
            const n = e.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: r },
              } = e.legend.options;
              return n.labels.map((s, o) => {
                const l = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: s,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: r,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !e.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(e, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
  });
class _o extends bt {
  initialize() {
    (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
  }
  update(e) {
    const n = this._cachedMeta,
      { dataset: i, data: r = [], _dataset: s } = n,
      o = this.chart._animationsDisabled;
    let { start: a, count: l } = Em(n, r, o);
    (this._drawStart = a),
      (this._drawCount = l),
      Dm(n) && ((a = 0), (l = r.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!s._decimated),
      (i.points = r);
    const u = this.resolveDatasetElementOptions(e);
    this.options.showLine || (u.borderWidth = 0),
      (u.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !o, options: u }, e),
      this.updateElements(r, a, l, e);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: u } = this._cachedMeta,
      { sharedOptions: c, includeOptions: d } = this._getSharedOptions(n, r),
      f = o.axis,
      h = a.axis,
      { spanGaps: m, segment: y } = this.options,
      x = $i(m) ? m : Number.POSITIVE_INFINITY,
      g = this.chart._animationsDisabled || s || r === "none",
      p = n + i,
      v = e.length;
    let _ = n > 0 && this.getParsed(n - 1);
    for (let w = 0; w < v; ++w) {
      const P = e[w],
        k = g ? P : {};
      if (w < n || w >= p) {
        k.skip = !0;
        continue;
      }
      const S = this.getParsed(w),
        D = H(S[h]),
        O = (k[f] = o.getPixelForValue(S[f], w)),
        N = (k[h] = s || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, S, l) : S[h], w));
      (k.skip = isNaN(O) || isNaN(N) || D),
        (k.stop = w > 0 && Math.abs(S[f] - _[f]) > x),
        y && ((k.parsed = S), (k.raw = u.data[w])),
        d && (k.options = c || this.resolveDataElementOptions(w, P.active ? "active" : r)),
        g || this.updateElement(P, w, k, r),
        (_ = S);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      r = e.data || [];
    if (!r.length) return i;
    const s = r[0].size(this.resolveDataElementOptions(0)),
      o = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(i, s, o) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
  }
}
M(_o, "id", "line"),
  M(_o, "defaults", { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 }),
  M(_o, "overrides", { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } });
class zr extends bt {
  constructor(e, n) {
    super(e, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = _s(n._parsed[e].r, i.options.locale);
    return { label: r[e] || "", value: s };
  }
  parseObjectData(e, n, i, r) {
    return Im.bind(this)(e, n, i, r);
  }
  update(e) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, e);
  }
  getMinMax() {
    const e = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      e.data.forEach((i, r) => {
        const s = this.getParsed(r).r;
        !isNaN(s) && this.chart.getDataVisibility(r) && (s < n.min && (n.min = s), s > n.max && (n.max = s));
      }),
      n
    );
  }
  _updateRadius() {
    const e = this.chart,
      n = e.chartArea,
      i = e.options,
      r = Math.min(n.right - n.left, n.bottom - n.top),
      s = Math.max(r / 2, 0),
      o = Math.max(i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1, 0),
      a = (s - o) / e.getVisibleDatasetCount();
    (this.outerRadius = s - a * this.index), (this.innerRadius = this.outerRadius - a);
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      o = this.chart,
      l = o.options.animation,
      u = this._cachedMeta.rScale,
      c = u.xCenter,
      d = u.yCenter,
      f = u.getIndexAngle(0) - 0.5 * se;
    let h = f,
      m;
    const y = 360 / this.countVisibleElements();
    for (m = 0; m < n; ++m) h += this._computeAngle(m, r, y);
    for (m = n; m < n + i; m++) {
      const x = e[m];
      let g = h,
        p = h + this._computeAngle(m, r, y),
        v = o.getDataVisibility(m) ? u.getDistanceFromCenterForValue(this.getParsed(m).r) : 0;
      (h = p), s && (l.animateScale && (v = 0), l.animateRotate && (g = p = f));
      const _ = {
        x: c,
        y: d,
        innerRadius: 0,
        outerRadius: v,
        startAngle: g,
        endAngle: p,
        options: this.resolveDataElementOptions(m, x.active ? "active" : r),
      };
      this.updateElement(x, m, _, r);
    }
  }
  countVisibleElements() {
    const e = this._cachedMeta;
    let n = 0;
    return (
      e.data.forEach((i, r) => {
        !isNaN(this.getParsed(r).r) && this.chart.getDataVisibility(r) && n++;
      }),
      n
    );
  }
  _computeAngle(e, n, i) {
    return this.chart.getDataVisibility(e) ? xt(this.resolveDataElementOptions(e, n).angle || i) : 0;
  }
}
M(zr, "id", "polarArea"),
  M(zr, "defaults", {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  M(zr, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(e) {
            const n = e.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: r },
              } = e.legend.options;
              return n.labels.map((s, o) => {
                const l = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: s,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: r,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !e.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(e, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
class Su extends Gn {}
M(Su, "id", "pie"), M(Su, "defaults", { cutout: 0, rotation: 0, circumference: 360, radius: "100%" });
class wo extends bt {
  getLabelAndValue(e) {
    const n = this._cachedMeta.vScale,
      i = this.getParsed(e);
    return { label: n.getLabels()[e], value: "" + n.getLabelForValue(i[n.axis]) };
  }
  parseObjectData(e, n, i, r) {
    return Im.bind(this)(e, n, i, r);
  }
  update(e) {
    const n = this._cachedMeta,
      i = n.dataset,
      r = n.data || [],
      s = n.iScale.getLabels();
    if (((i.points = r), e !== "resize")) {
      const o = this.resolveDatasetElementOptions(e);
      this.options.showLine || (o.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: s.length === r.length, options: o };
      this.updateElement(i, void 0, a, e);
    }
    this.updateElements(r, 0, r.length, e);
  }
  updateElements(e, n, i, r) {
    const s = this._cachedMeta.rScale,
      o = r === "reset";
    for (let a = n; a < n + i; a++) {
      const l = e[a],
        u = this.resolveDataElementOptions(a, l.active ? "active" : r),
        c = s.getPointPositionForValue(a, this.getParsed(a).r),
        d = o ? s.xCenter : c.x,
        f = o ? s.yCenter : c.y,
        h = { x: d, y: f, angle: c.angle, skip: isNaN(d) || isNaN(f), options: u };
      this.updateElement(l, a, h, r);
    }
  }
}
M(wo, "id", "radar"),
  M(wo, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: { line: { fill: "start" } },
  }),
  M(wo, "overrides", { aspectRatio: 1, scales: { r: { type: "radialLinear" } } });
class bo extends bt {
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: r, yScale: s } = n,
      o = this.getParsed(e),
      a = r.getLabelForValue(o.x),
      l = s.getLabelForValue(o.y);
    return { label: i[e] || "", value: "(" + a + ", " + l + ")" };
  }
  update(e) {
    const n = this._cachedMeta,
      { data: i = [] } = n,
      r = this.chart._animationsDisabled;
    let { start: s, count: o } = Em(n, i, r);
    if (((this._drawStart = s), (this._drawCount = o), Dm(n) && ((s = 0), (o = i.length)), this.options.showLine)) {
      this.datasetElementType || this.addElements();
      const { dataset: a, _dataset: l } = n;
      (a._chart = this.chart), (a._datasetIndex = this.index), (a._decimated = !!l._decimated), (a.points = i);
      const u = this.resolveDatasetElementOptions(e);
      (u.segment = this.options.segment), this.updateElement(a, void 0, { animated: !r, options: u }, e);
    } else this.datasetElementType && (delete n.dataset, (this.datasetElementType = !1));
    this.updateElements(i, s, o, e);
  }
  addElements() {
    const { showLine: e } = this.options;
    !this.datasetElementType && e && (this.datasetElementType = this.chart.registry.getElement("line")),
      super.addElements();
  }
  updateElements(e, n, i, r) {
    const s = r === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: u } = this._cachedMeta,
      c = this.resolveDataElementOptions(n, r),
      d = this.getSharedOptions(c),
      f = this.includeOptions(r, d),
      h = o.axis,
      m = a.axis,
      { spanGaps: y, segment: x } = this.options,
      g = $i(y) ? y : Number.POSITIVE_INFINITY,
      p = this.chart._animationsDisabled || s || r === "none";
    let v = n > 0 && this.getParsed(n - 1);
    for (let _ = n; _ < n + i; ++_) {
      const w = e[_],
        P = this.getParsed(_),
        k = p ? w : {},
        S = H(P[m]),
        D = (k[h] = o.getPixelForValue(P[h], _)),
        O = (k[m] = s || S ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[m], _));
      (k.skip = isNaN(D) || isNaN(O) || S),
        (k.stop = _ > 0 && Math.abs(P[h] - v[h]) > g),
        x && ((k.parsed = P), (k.raw = u.data[_])),
        f && (k.options = d || this.resolveDataElementOptions(_, w.active ? "active" : r)),
        p || this.updateElement(w, _, k, r),
        (v = P);
    }
    this.updateSharedOptions(d, r, c);
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = n.length - 1; l >= 0; --l) a = Math.max(a, n[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const i = e.dataset,
      r = (i.options && i.options.borderWidth) || 0;
    if (!n.length) return r;
    const s = n[0].size(this.resolveDataElementOptions(0)),
      o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(r, s, o) / 2;
  }
}
M(bo, "id", "scatter"),
  M(bo, "defaults", { datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1 }),
  M(bo, "overrides", { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } });
var Ww = Object.freeze({
  __proto__: null,
  BarController: vo,
  BubbleController: xo,
  DoughnutController: Gn,
  LineController: _o,
  PieController: Su,
  PolarAreaController: zr,
  RadarController: wo,
  ScatterController: bo,
});
function Wn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class qc {
  constructor(e) {
    M(this, "options");
    this.options = e || {};
  }
  static override(e) {
    Object.assign(qc.prototype, e);
  }
  init() {}
  formats() {
    return Wn();
  }
  parse() {
    return Wn();
  }
  format() {
    return Wn();
  }
  add() {
    return Wn();
  }
  diff() {
    return Wn();
  }
  startOf() {
    return Wn();
  }
  endOf() {
    return Wn();
  }
}
var Qm = { _date: qc };
function Bw(t, e, n, i) {
  const { controller: r, data: s, _sorted: o } = t,
    a = r._cachedMeta.iScale;
  if (a && e === a.axis && e !== "r" && o && s.length) {
    const l = a._reversePixels ? d_ : qt;
    if (i) {
      if (r._sharedOptions) {
        const u = s[0],
          c = typeof u.getRange == "function" && u.getRange(e);
        if (c) {
          const d = l(s, e, n - c),
            f = l(s, e, n + c);
          return { lo: d.lo, hi: f.hi };
        }
      }
    } else return l(s, e, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function ws(t, e, n, i, r) {
  const s = t.getSortedVisibleDatasetMetas(),
    o = n[e];
  for (let a = 0, l = s.length; a < l; ++a) {
    const { index: u, data: c } = s[a],
      { lo: d, hi: f } = Bw(s[a], e, o, r);
    for (let h = d; h <= f; ++h) {
      const m = c[h];
      m.skip || i(m, u, h);
    }
  }
}
function Hw(t) {
  const e = t.indexOf("x") !== -1,
    n = t.indexOf("y") !== -1;
  return function (i, r) {
    const s = e ? Math.abs(i.x - r.x) : 0,
      o = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function gl(t, e, n, i, r) {
  const s = [];
  return (
    (!r && !t.isPointInArea(e)) ||
      ws(
        t,
        n,
        e,
        function (a, l, u) {
          (!r && !Kt(a, t.chartArea, 0)) ||
            (a.inRange(e.x, e.y, i) && s.push({ element: a, datasetIndex: l, index: u }));
        },
        !0
      ),
    s
  );
}
function Vw(t, e, n, i) {
  let r = [];
  function s(o, a, l) {
    const { startAngle: u, endAngle: c } = o.getProps(["startAngle", "endAngle"], i),
      { angle: d } = km(o, { x: e.x, y: e.y });
    ls(d, u, c) && r.push({ element: o, datasetIndex: a, index: l });
  }
  return ws(t, n, e, s), r;
}
function $w(t, e, n, i, r, s) {
  let o = [];
  const a = Hw(n);
  let l = Number.POSITIVE_INFINITY;
  function u(c, d, f) {
    const h = c.inRange(e.x, e.y, r);
    if (i && !h) return;
    const m = c.getCenterPoint(r);
    if (!(!!s || t.isPointInArea(m)) && !h) return;
    const x = a(e, m);
    x < l
      ? ((o = [{ element: c, datasetIndex: d, index: f }]), (l = x))
      : x === l && o.push({ element: c, datasetIndex: d, index: f });
  }
  return ws(t, n, e, u), o;
}
function ml(t, e, n, i, r, s) {
  return !s && !t.isPointInArea(e) ? [] : n === "r" && !i ? Vw(t, e, n, r) : $w(t, e, n, i, r, s);
}
function Zf(t, e, n, i, r) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    ws(t, n, e, (l, u, c) => {
      l[o](e[n], r) && (s.push({ element: l, datasetIndex: u, index: c }), (a = a || l.inRange(e.x, e.y, r)));
    }),
    i && !a ? [] : s
  );
}
var Yw = {
  evaluateInteractionItems: ws,
  modes: {
    index(t, e, n, i) {
      const r = $n(e, t),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? gl(t, r, s, i, o) : ml(t, r, s, !1, i, o),
        l = [];
      return a.length
        ? (t.getSortedVisibleDatasetMetas().forEach((u) => {
            const c = a[0].index,
              d = u.data[c];
            d && !d.skip && l.push({ element: d, datasetIndex: u.index, index: c });
          }),
          l)
        : [];
    },
    dataset(t, e, n, i) {
      const r = $n(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? gl(t, r, s, i, o) : ml(t, r, s, !1, i, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          u = t.getDatasetMeta(l).data;
        a = [];
        for (let c = 0; c < u.length; ++c) a.push({ element: u[c], datasetIndex: l, index: c });
      }
      return a;
    },
    point(t, e, n, i) {
      const r = $n(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return gl(t, r, s, i, o);
    },
    nearest(t, e, n, i) {
      const r = $n(e, t),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return ml(t, r, s, n.intersect, i, o);
    },
    x(t, e, n, i) {
      const r = $n(e, t);
      return Zf(t, r, "x", n.intersect, i);
    },
    y(t, e, n, i) {
      const r = $n(e, t);
      return Zf(t, r, "y", n.intersect, i);
    },
  },
};
const Xm = ["left", "top", "right", "bottom"];
function lr(t, e) {
  return t.filter((n) => n.pos === e);
}
function Jf(t, e) {
  return t.filter((n) => Xm.indexOf(n.pos) === -1 && n.box.axis === e);
}
function ur(t, e) {
  return t.sort((n, i) => {
    const r = e ? i : n,
      s = e ? n : i;
    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
  });
}
function Uw(t) {
  const e = [];
  let n, i, r, s, o, a;
  for (n = 0, i = (t || []).length; n < i; ++n)
    (r = t[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: a = 1 },
      } = r),
      e.push({
        index: n,
        box: r,
        pos: s,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: o && s + o,
        stackWeight: a,
      });
  return e;
}
function Qw(t) {
  const e = {};
  for (const n of t) {
    const { stack: i, pos: r, stackWeight: s } = n;
    if (!i || !Xm.includes(r)) continue;
    const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return e;
}
function Xw(t, e) {
  const n = Qw(t),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
  let s, o, a;
  for (s = 0, o = t.length; s < o; ++s) {
    a = t[s];
    const { fullSize: l } = a.box,
      u = n[a.stack],
      c = u && a.stackWeight / u.weight;
    a.horizontal
      ? ((a.width = c ? c * i : l && e.availableWidth), (a.height = r))
      : ((a.width = i), (a.height = c ? c * r : l && e.availableHeight));
  }
  return n;
}
function qw(t) {
  const e = Uw(t),
    n = ur(
      e.filter((u) => u.box.fullSize),
      !0
    ),
    i = ur(lr(e, "left"), !0),
    r = ur(lr(e, "right")),
    s = ur(lr(e, "top"), !0),
    o = ur(lr(e, "bottom")),
    a = Jf(e, "x"),
    l = Jf(e, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(s),
    rightAndBottom: r.concat(l).concat(o).concat(a),
    chartArea: lr(e, "chartArea"),
    vertical: i.concat(r).concat(l),
    horizontal: s.concat(o).concat(a),
  };
}
function eh(t, e, n, i) {
  return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function qm(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function Kw(t, e, n, i) {
  const { pos: r, box: s } = n,
    o = t.maxPadding;
  if (!W(r)) {
    n.size && (t[r] -= n.size);
    const d = i[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? s.height : s.width)), (n.size = d.size / d.count), (t[r] += n.size);
  }
  s.getPadding && qm(o, s.getPadding());
  const a = Math.max(0, e.outerWidth - eh(o, t, "left", "right")),
    l = Math.max(0, e.outerHeight - eh(o, t, "top", "bottom")),
    u = a !== t.w,
    c = l !== t.h;
  return (t.w = a), (t.h = l), n.horizontal ? { same: u, other: c } : { same: c, other: u };
}
function Gw(t) {
  const e = t.maxPadding;
  function n(i) {
    const r = Math.max(e[i] - t[i], 0);
    return (t[i] += r), r;
  }
  (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
}
function Zw(t, e) {
  const n = e.maxPadding;
  function i(r) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((o) => {
        s[o] = Math.max(e[o], n[o]);
      }),
      s
    );
  }
  return i(t ? ["left", "right"] : ["top", "bottom"]);
}
function wr(t, e, n, i) {
  const r = [];
  let s, o, a, l, u, c;
  for (s = 0, o = t.length, u = 0; s < o; ++s) {
    (a = t[s]), (l = a.box), l.update(a.width || e.w, a.height || e.h, Zw(a.horizontal, e));
    const { same: d, other: f } = Kw(e, n, a, i);
    (u |= d && r.length), (c = c || f), l.fullSize || r.push(a);
  }
  return (u && wr(r, e, n, i)) || c;
}
function qs(t, e, n, i, r) {
  (t.top = n), (t.left = e), (t.right = e + i), (t.bottom = n + r), (t.width = i), (t.height = r);
}
function th(t, e, n, i) {
  const r = n.padding;
  let { x: s, y: o } = e;
  for (const a of t) {
    const l = a.box,
      u = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      c = a.stackWeight / u.weight || 1;
    if (a.horizontal) {
      const d = e.w * c,
        f = u.size || l.height;
      as(u.start) && (o = u.start),
        l.fullSize ? qs(l, r.left, o, n.outerWidth - r.right - r.left, f) : qs(l, e.left + u.placed, o, d, f),
        (u.start = o),
        (u.placed += d),
        (o = l.bottom);
    } else {
      const d = e.h * c,
        f = u.size || l.width;
      as(u.start) && (s = u.start),
        l.fullSize ? qs(l, s, r.top, f, n.outerHeight - r.bottom - r.top) : qs(l, s, e.top + u.placed, f, d),
        (u.start = s),
        (u.placed += d),
        (s = l.right);
    }
  }
  (e.x = s), (e.y = o);
}
var Ie = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                e.draw(n);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const n = t.boxes ? t.boxes.indexOf(e) : -1;
    n !== -1 && t.boxes.splice(n, 1);
  },
  configure(t, e, n) {
    (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
  },
  update(t, e, n, i) {
    if (!t) return;
    const r = je(t.options.layout.padding),
      s = Math.max(e - r.width, 0),
      o = Math.max(n - r.height, 0),
      a = qw(t.boxes),
      l = a.vertical,
      u = a.horizontal;
    U(t.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout();
    });
    const c = l.reduce((y, x) => (x.box.options && x.box.options.display === !1 ? y : y + 1), 0) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: n,
        padding: r,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / c,
        hBoxMaxHeight: o / 2,
      }),
      f = Object.assign({}, r);
    qm(f, je(i));
    const h = Object.assign({ maxPadding: f, w: s, h: o, x: r.left, y: r.top }, r),
      m = Xw(l.concat(u), d);
    wr(a.fullSize, h, d, m),
      wr(l, h, d, m),
      wr(u, h, d, m) && wr(l, h, d, m),
      Gw(h),
      th(a.leftAndTop, h, d, m),
      (h.x += h.w),
      (h.y += h.h),
      th(a.rightAndBottom, h, d, m),
      (t.chartArea = { left: h.left, top: h.top, right: h.left + h.w, bottom: h.top + h.h, height: h.h, width: h.w }),
      U(a.chartArea, (y) => {
        const x = y.box;
        Object.assign(x, t.chartArea), x.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Km {
  acquireContext(e, n) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, n, i) {}
  removeEventListener(e, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, i, r) {
    return (
      (n = Math.max(0, n || e.width)), (i = i || e.height), { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class Jw extends Km {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const ko = "$chartjs",
  eb = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  nh = (t) => t === null || t === "";
function tb(t, e) {
  const n = t.style,
    i = t.getAttribute("height"),
    r = t.getAttribute("width");
  if (
    ((t[ko] = { initial: { height: i, width: r, style: { display: n.display, height: n.height, width: n.width } } }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    nh(r))
  ) {
    const s = zf(t, "width");
    s !== void 0 && (t.width = s);
  }
  if (nh(i))
    if (t.style.height === "") t.height = t.width / (e || 2);
    else {
      const s = zf(t, "height");
      s !== void 0 && (t.height = s);
    }
  return t;
}
const Gm = rw ? { passive: !0 } : !1;
function nb(t, e, n) {
  t && t.addEventListener(e, n, Gm);
}
function ib(t, e, n) {
  t && t.canvas && t.canvas.removeEventListener(e, n, Gm);
}
function rb(t, e) {
  const n = eb[t.type] || t.type,
    { x: i, y: r } = $n(t, e);
  return { type: n, chart: e, native: t, x: i !== void 0 ? i : null, y: r !== void 0 ? r : null };
}
function ra(t, e) {
  for (const n of t) if (n === e || n.contains(e)) return !0;
}
function sb(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s) (o = o || ra(a.addedNodes, i)), (o = o && !ra(a.removedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function ob(t, e, n) {
  const i = t.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s) (o = o || ra(a.removedNodes, i)), (o = o && !ra(a.addedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const cs = new Map();
let ih = 0;
function Zm() {
  const t = window.devicePixelRatio;
  t !== ih &&
    ((ih = t),
    cs.forEach((e, n) => {
      n.currentDevicePixelRatio !== t && e();
    }));
}
function ab(t, e) {
  cs.size || window.addEventListener("resize", Zm), cs.set(t, e);
}
function lb(t) {
  cs.delete(t), cs.size || window.removeEventListener("resize", Zm);
}
function ub(t, e, n) {
  const i = t.canvas,
    r = i && Xc(i);
  if (!r) return;
  const s = Cm((a, l) => {
      const u = r.clientWidth;
      n(a, l), u < r.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        u = l.contentRect.width,
        c = l.contentRect.height;
      (u === 0 && c === 0) || s(u, c);
    });
  return o.observe(r), ab(t, s), o;
}
function yl(t, e, n) {
  n && n.disconnect(), e === "resize" && lb(t);
}
function cb(t, e, n) {
  const i = t.canvas,
    r = Cm((s) => {
      t.ctx !== null && n(rb(s, t));
    }, t);
  return nb(i, e, r), r;
}
class db extends Km {
  acquireContext(e, n) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (tb(e, n), i) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[ko]) return !1;
    const i = n[ko].initial;
    ["height", "width"].forEach((s) => {
      const o = i[s];
      H(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((s) => {
        n.style[s] = r[s];
      }),
      (n.width = n.width),
      delete n[ko],
      !0
    );
  }
  addEventListener(e, n, i) {
    this.removeEventListener(e, n);
    const r = e.$proxies || (e.$proxies = {}),
      o = { attach: sb, detach: ob, resize: ub }[n] || cb;
    r[n] = o(e, n, i);
  }
  removeEventListener(e, n) {
    const i = e.$proxies || (e.$proxies = {}),
      r = i[n];
    if (!r) return;
    (({ attach: yl, detach: yl, resize: yl })[n] || ib)(e, n, r), (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, i, r) {
    return iw(e, n, i, r);
  }
  isAttached(e) {
    const n = e && Xc(e);
    return !!(n && n.isConnected);
  }
}
function fb(t) {
  return !Qc() || (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas) ? Jw : db;
}
class St {
  constructor() {
    M(this, "x");
    M(this, "y");
    M(this, "active", !1);
    M(this, "options");
    M(this, "$animations");
  }
  tooltipPosition(e) {
    const { x: n, y: i } = this.getProps(["x", "y"], e);
    return { x: n, y: i };
  }
  hasValue() {
    return $i(this.x) && $i(this.y);
  }
  getProps(e, n) {
    const i = this.$animations;
    if (!n || !i) return this;
    const r = {};
    return (
      e.forEach((s) => {
        r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
      }),
      r
    );
  }
}
M(St, "defaults", {}), M(St, "defaultRoutes");
function hb(t, e) {
  const n = t.options.ticks,
    i = pb(t),
    r = Math.min(n.maxTicksLimit || i, i),
    s = n.major.enabled ? mb(e) : [],
    o = s.length,
    a = s[0],
    l = s[o - 1],
    u = [];
  if (o > r) return yb(e, u, s, o / r), u;
  const c = gb(s, e, r);
  if (o > 0) {
    let d, f;
    const h = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (Ks(e, u, c, H(h) ? 0 : a - h, a), d = 0, f = o - 1; d < f; d++) Ks(e, u, c, s[d], s[d + 1]);
    return Ks(e, u, c, l, H(h) ? e.length : l + h), u;
  }
  return Ks(e, u, c), u;
}
function pb(t) {
  const e = t.options.offset,
    n = t._tickSize(),
    i = t._length / n + (e ? 0 : 1),
    r = t._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function gb(t, e, n) {
  const i = vb(t),
    r = e.length / n;
  if (!i) return Math.max(r, 1);
  const s = a_(i);
  for (let o = 0, a = s.length - 1; o < a; o++) {
    const l = s[o];
    if (l > r) return l;
  }
  return Math.max(r, 1);
}
function mb(t) {
  const e = [];
  let n, i;
  for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
  return e;
}
function yb(t, e, n, i) {
  let r = 0,
    s = n[0],
    o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++) o === s && (e.push(t[o]), r++, (s = n[r * i]));
}
function Ks(t, e, n, i, r) {
  const s = z(i, 0),
    o = Math.min(z(r, t.length), t.length);
  let a = 0,
    l,
    u,
    c;
  for (n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), c = s; c < 0; )
    a++, (c = Math.round(s + a * n));
  for (u = Math.max(s, 0); u < o; u++) u === c && (e.push(t[u]), a++, (c = Math.round(s + a * n)));
}
function vb(t) {
  const e = t.length;
  let n, i;
  if (e < 2) return !1;
  for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
  return i;
}
const xb = (t) => (t === "left" ? "right" : t === "right" ? "left" : t),
  rh = (t, e, n) => (e === "top" || e === "left" ? t[e] + n : t[e] - n),
  sh = (t, e) => Math.min(e || t, t);
function oh(t, e) {
  const n = [],
    i = t.length / e,
    r = t.length;
  let s = 0;
  for (; s < r; s += i) n.push(t[Math.floor(s)]);
  return n;
}
function _b(t, e, n) {
  const i = t.ticks.length,
    r = Math.min(e, i - 1),
    s = t._startPixel,
    o = t._endPixel,
    a = 1e-6;
  let l = t.getPixelForTick(r),
    u;
  if (
    !(
      n &&
      (i === 1
        ? (u = Math.max(l - s, o - l))
        : e === 0
        ? (u = (t.getPixelForTick(1) - l) / 2)
        : (u = (l - t.getPixelForTick(r - 1)) / 2),
      (l += r < e ? u : -u),
      l < s - a || l > o + a)
    )
  )
    return l;
}
function wb(t, e) {
  U(t, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let s;
    if (r > e) {
      for (s = 0; s < r; ++s) delete n.data[i[s]];
      i.splice(0, r);
    }
  });
}
function cr(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function ah(t, e) {
  if (!t.display) return 0;
  const n = Se(t.font, e),
    i = je(t.padding);
  return (ae(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function bb(t, e) {
  return In(t, { scale: e, type: "scale" });
}
function kb(t, e, n) {
  return In(t, { tick: n, index: e, type: "tick" });
}
function Sb(t, e, n) {
  let i = Bc(t);
  return ((n && e !== "right") || (!n && e === "right")) && (i = xb(i)), i;
}
function Mb(t, e, n, i) {
  const { top: r, left: s, bottom: o, right: a, chart: l } = t,
    { chartArea: u, scales: c } = l;
  let d = 0,
    f,
    h,
    m;
  const y = o - r,
    x = a - s;
  if (t.isHorizontal()) {
    if (((h = Ne(i, s, a)), W(n))) {
      const g = Object.keys(n)[0],
        p = n[g];
      m = c[g].getPixelForValue(p) + y - e;
    } else n === "center" ? (m = (u.bottom + u.top) / 2 + y - e) : (m = rh(t, n, e));
    f = a - s;
  } else {
    if (W(n)) {
      const g = Object.keys(n)[0],
        p = n[g];
      h = c[g].getPixelForValue(p) - x + e;
    } else n === "center" ? (h = (u.left + u.right) / 2 - x + e) : (h = rh(t, n, e));
    (m = Ne(i, o, r)), (d = n === "left" ? -ye : ye);
  }
  return { titleX: h, titleY: m, maxWidth: f, rotation: d };
}
class fi extends St {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, n) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (e = Je(e, Number.POSITIVE_INFINITY)),
      (n = Je(n, Number.NEGATIVE_INFINITY)),
      (i = Je(i, Number.POSITIVE_INFINITY)),
      (r = Je(r, Number.NEGATIVE_INFINITY)),
      { min: Je(e, i), max: Je(n, r), minDefined: he(e), maxDefined: he(n) }
    );
  }
  getMinMax(e) {
    let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
      o;
    if (r && s) return { min: n, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, u = a.length; l < u; ++l)
      (o = a[l].controller.getMinMax(this, e)), r || (n = Math.min(n, o.min)), s || (i = Math.max(i, o.max));
    return (n = s && n > i ? i : n), (i = r && n > i ? n : i), { min: Je(n, Je(i, n)), max: Je(i, Je(n, i)) };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    G(this.options.beforeUpdate, [this]);
  }
  update(e, n, i) {
    const { beginAtZero: r, grace: s, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = A_(this, s, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? oh(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = hb(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      n,
      i;
    this.isHorizontal() ? ((n = this.left), (i = this.right)) : ((n = this.top), (i = this.bottom), (e = !e)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = e),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    G(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    G(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    G(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), G(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    G(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let i, r, s;
    for (i = 0, r = e.length; i < r; i++) (s = e[i]), (s.label = G(n.callback, [s.value, i, e], this));
  }
  afterTickToLabelConversion() {
    G(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    G(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      n = e.ticks,
      i = sh(this.ticks.length, e.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      s = n.maxRotation;
    let o = r,
      a,
      l,
      u;
    if (!this._isVisible() || !n.display || r >= s || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = r;
      return;
    }
    const c = this._getLabelSizes(),
      d = c.widest.width,
      f = c.highest.height,
      h = Pe(this.chart.width - d, 0, this.maxWidth);
    (a = e.offset ? this.maxWidth / i : h / (i - 1)),
      d + 6 > a &&
        ((a = h / (i - (e.offset ? 0.5 : 1))),
        (l = this.maxHeight - cr(e.grid) - n.padding - ah(e.title, this.chart.options.font)),
        (u = Math.sqrt(d * d + f * f)),
        (o = jc(
          Math.min(
            Math.asin(Pe((c.highest.height + 6) / a, -1, 1)),
            Math.asin(Pe(l / u, -1, 1)) - Math.asin(Pe(f / u, -1, 1))
          )
        )),
        (o = Math.max(r, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    G(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    G(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: s },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = ah(r, n.options.font);
      if (
        (a ? ((e.width = this.maxWidth), (e.height = cr(s) + l)) : ((e.height = this.maxHeight), (e.width = cr(s) + l)),
        i.display && this.ticks.length)
      ) {
        const { first: u, last: c, widest: d, highest: f } = this._getLabelSizes(),
          h = i.padding * 2,
          m = xt(this.labelRotation),
          y = Math.cos(m),
          x = Math.sin(m);
        if (a) {
          const g = i.mirror ? 0 : x * d.width + y * f.height;
          e.height = Math.min(this.maxHeight, e.height + g + h);
        } else {
          const g = i.mirror ? 0 : y * d.width + x * f.height;
          e.width = Math.min(this.maxWidth, e.width + g + h);
        }
        this._calculatePadding(u, c, x, y);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length = n.width - this._margins.left - this._margins.right), (this.height = e.height))
        : ((this.width = e.width), (this.height = this._length = n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, n, i, r) {
    const {
        ticks: { align: s, padding: o },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      u = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0,
        h = 0;
      l
        ? u
          ? ((f = r * e.width), (h = i * n.height))
          : ((f = i * e.height), (h = r * n.width))
        : s === "start"
        ? (h = n.width)
        : s === "end"
        ? (f = e.width)
        : s !== "inner" && ((f = e.width / 2), (h = n.width / 2)),
        (this.paddingLeft = Math.max(((f - c + o) * this.width) / (this.width - c), 0)),
        (this.paddingRight = Math.max(((h - d + o) * this.width) / (this.width - d), 0));
    } else {
      let c = n.height / 2,
        d = e.height / 2;
      s === "start" ? ((c = 0), (d = e.height)) : s === "end" && ((c = n.height), (d = 0)),
        (this.paddingTop = c + o),
        (this.paddingBottom = d + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
  }
  afterFit() {
    G(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: n } = this.options;
    return n === "top" || n === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let n, i;
    for (n = 0, i = e.length; n < i; n++) H(e[n].label) && (e.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = oh(i, n)),
        (this._labelSizes = e = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
    }
    return e;
  }
  _computeLabelSizes(e, n, i) {
    const { ctx: r, _longestTextCache: s } = this,
      o = [],
      a = [],
      l = Math.floor(n / sh(n, i));
    let u = 0,
      c = 0,
      d,
      f,
      h,
      m,
      y,
      x,
      g,
      p,
      v,
      _,
      w;
    for (d = 0; d < n; d += l) {
      if (
        ((m = e[d].label),
        (y = this._resolveTickFontOptions(d)),
        (r.font = x = y.string),
        (g = s[x] = s[x] || { data: {}, gc: [] }),
        (p = y.lineHeight),
        (v = _ = 0),
        !H(m) && !ae(m))
      )
        (v = na(r, g.data, g.gc, v, m)), (_ = p);
      else if (ae(m))
        for (f = 0, h = m.length; f < h; ++f)
          (w = m[f]), !H(w) && !ae(w) && ((v = na(r, g.data, g.gc, v, w)), (_ += p));
      o.push(v), a.push(_), (u = Math.max(v, u)), (c = Math.max(_, c));
    }
    wb(s, n);
    const P = o.indexOf(u),
      k = a.indexOf(c),
      S = (D) => ({ width: o[D] || 0, height: a[D] || 0 });
    return { first: S(0), last: S(n - 1), widest: S(P), highest: S(k), widths: o, heights: a };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, n) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const n = this._startPixel + e * this._length;
    return c_(this._alignToPixels ? jn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(e) {
    const n = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: n } = this;
    return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
  }
  getContext(e) {
    const n = this.ticks || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return i.$context || (i.$context = kb(this.getContext(), e, i));
    }
    return this.$context || (this.$context = bb(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      n = xt(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = e.autoSkipPadding || 0,
      a = s ? s.widest.width + o : 0,
      l = s ? s.highest.height + o : 0;
    return this.isHorizontal() ? (l * i > a * r ? a / i : l / r) : l * r < a * i ? l / i : a / r;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: s, position: o, border: a } = r,
      l = s.offset,
      u = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      f = cr(s),
      h = [],
      m = a.setContext(this.getContext()),
      y = m.display ? m.width : 0,
      x = y / 2,
      g = function (X) {
        return jn(i, X, y);
      };
    let p, v, _, w, P, k, S, D, O, N, I, q;
    if (o === "top") (p = g(this.bottom)), (k = this.bottom - f), (D = p - x), (N = g(e.top) + x), (q = e.bottom);
    else if (o === "bottom") (p = g(this.top)), (N = e.top), (q = g(e.bottom) - x), (k = p + x), (D = this.top + f);
    else if (o === "left") (p = g(this.right)), (P = this.right - f), (S = p - x), (O = g(e.left) + x), (I = e.right);
    else if (o === "right") (p = g(this.left)), (O = e.left), (I = g(e.right) - x), (P = p + x), (S = this.left + f);
    else if (n === "x") {
      if (o === "center") p = g((e.top + e.bottom) / 2 + 0.5);
      else if (W(o)) {
        const X = Object.keys(o)[0],
          J = o[X];
        p = g(this.chart.scales[X].getPixelForValue(J));
      }
      (N = e.top), (q = e.bottom), (k = p + x), (D = k + f);
    } else if (n === "y") {
      if (o === "center") p = g((e.left + e.right) / 2);
      else if (W(o)) {
        const X = Object.keys(o)[0],
          J = o[X];
        p = g(this.chart.scales[X].getPixelForValue(J));
      }
      (P = p - x), (S = P - f), (O = e.left), (I = e.right);
    }
    const Te = z(r.ticks.maxTicksLimit, d),
      $ = Math.max(1, Math.ceil(d / Te));
    for (v = 0; v < d; v += $) {
      const X = this.getContext(v),
        J = s.setContext(X),
        T = a.setContext(X),
        R = J.lineWidth,
        F = J.color,
        K = T.dash || [],
        ee = T.dashOffset,
        Mt = J.tickWidth,
        We = J.tickColor,
        zt = J.tickBorderDash || [],
        Be = J.tickBorderDashOffset;
      (_ = _b(this, v, l)),
        _ !== void 0 &&
          ((w = jn(i, _, R)),
          u ? (P = S = O = I = w) : (k = D = N = q = w),
          h.push({
            tx1: P,
            ty1: k,
            tx2: S,
            ty2: D,
            x1: O,
            y1: N,
            x2: I,
            y2: q,
            width: R,
            color: F,
            borderDash: K,
            borderDashOffset: ee,
            tickWidth: Mt,
            tickColor: We,
            tickBorderDash: zt,
            tickBorderDashOffset: Be,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = p), h;
  }
  _computeLabelItems(e) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: s } = i,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: u, padding: c, mirror: d } = s,
      f = cr(i.grid),
      h = f + c,
      m = d ? -c : h,
      y = -xt(this.labelRotation),
      x = [];
    let g,
      p,
      v,
      _,
      w,
      P,
      k,
      S,
      D,
      O,
      N,
      I,
      q = "middle";
    if (r === "top") (P = this.bottom - m), (k = this._getXAxisLabelAlignment());
    else if (r === "bottom") (P = this.top + m), (k = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const $ = this._getYAxisLabelAlignment(f);
      (k = $.textAlign), (w = $.x);
    } else if (r === "right") {
      const $ = this._getYAxisLabelAlignment(f);
      (k = $.textAlign), (w = $.x);
    } else if (n === "x") {
      if (r === "center") P = (e.top + e.bottom) / 2 + h;
      else if (W(r)) {
        const $ = Object.keys(r)[0],
          X = r[$];
        P = this.chart.scales[$].getPixelForValue(X) + h;
      }
      k = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (r === "center") w = (e.left + e.right) / 2 - h;
      else if (W(r)) {
        const $ = Object.keys(r)[0],
          X = r[$];
        w = this.chart.scales[$].getPixelForValue(X);
      }
      k = this._getYAxisLabelAlignment(f).textAlign;
    }
    n === "y" && (l === "start" ? (q = "top") : l === "end" && (q = "bottom"));
    const Te = this._getLabelSizes();
    for (g = 0, p = a.length; g < p; ++g) {
      (v = a[g]), (_ = v.label);
      const $ = s.setContext(this.getContext(g));
      (S = this.getPixelForTick(g) + s.labelOffset),
        (D = this._resolveTickFontOptions(g)),
        (O = D.lineHeight),
        (N = ae(_) ? _.length : 1);
      const X = N / 2,
        J = $.color,
        T = $.textStrokeColor,
        R = $.textStrokeWidth;
      let F = k;
      o
        ? ((w = S),
          k === "inner" &&
            (g === p - 1
              ? (F = this.options.reverse ? "left" : "right")
              : g === 0
              ? (F = this.options.reverse ? "right" : "left")
              : (F = "center")),
          r === "top"
            ? u === "near" || y !== 0
              ? (I = -N * O + O / 2)
              : u === "center"
              ? (I = -Te.highest.height / 2 - X * O + O)
              : (I = -Te.highest.height + O / 2)
            : u === "near" || y !== 0
            ? (I = O / 2)
            : u === "center"
            ? (I = Te.highest.height / 2 - X * O)
            : (I = Te.highest.height - N * O),
          d && (I *= -1),
          y !== 0 && !$.showLabelBackdrop && (w += (O / 2) * Math.sin(y)))
        : ((P = S), (I = ((1 - N) * O) / 2));
      let K;
      if ($.showLabelBackdrop) {
        const ee = je($.backdropPadding),
          Mt = Te.heights[g],
          We = Te.widths[g];
        let zt = I - ee.top,
          Be = 0 - ee.left;
        switch (q) {
          case "middle":
            zt -= Mt / 2;
            break;
          case "bottom":
            zt -= Mt;
            break;
        }
        switch (k) {
          case "center":
            Be -= We / 2;
            break;
          case "right":
            Be -= We;
            break;
          case "inner":
            g === p - 1 ? (Be -= We) : g > 0 && (Be -= We / 2);
            break;
        }
        K = { left: Be, top: zt, width: We + ee.width, height: Mt + ee.height, color: $.backdropColor };
      }
      x.push({
        label: _,
        font: D,
        textOffset: I,
        options: {
          rotation: y,
          color: J,
          strokeColor: T,
          strokeWidth: R,
          textAlign: F,
          textBaseline: q,
          translation: [w, P],
          backdrop: K,
        },
      });
    }
    return x;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-xt(this.labelRotation)) return e === "top" ? "left" : "right";
    let r = "center";
    return (
      n.align === "start" ? (r = "left") : n.align === "end" ? (r = "right") : n.align === "inner" && (r = "inner"), r
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      a = e + s,
      l = o.widest.width;
    let u, c;
    return (
      n === "left"
        ? r
          ? ((c = this.right + s),
            i === "near" ? (u = "left") : i === "center" ? ((u = "center"), (c += l / 2)) : ((u = "right"), (c += l)))
          : ((c = this.right - a),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= l / 2))
              : ((u = "left"), (c = this.left)))
        : n === "right"
        ? r
          ? ((c = this.left + s),
            i === "near" ? (u = "right") : i === "center" ? ((u = "center"), (c -= l / 2)) : ((u = "left"), (c -= l)))
          : ((c = this.left + a),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += l / 2))
              : ((u = "right"), (c = this.right)))
        : (u = "right"),
      { textAlign: u, x: c }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right") return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (n === "top" || n === "bottom") return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: s,
      height: o,
    } = this;
    n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, s, o), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((s) => s.value === e);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid,
      i = this.ctx,
      r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
    let s, o;
    const a = (l, u, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(u.x, u.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (s = 0, o = r.length; s < o; ++s) {
        const l = r[s];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      s = i.setContext(this.getContext()),
      o = i.display ? s.width : 0;
    if (!o) return;
    const a = r.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let u, c, d, f;
    this.isHorizontal()
      ? ((u = jn(e, this.left, o) - o / 2), (c = jn(e, this.right, a) + a / 2), (d = f = l))
      : ((d = jn(e, this.top, o) - o / 2), (f = jn(e, this.bottom, a) + a / 2), (u = c = l)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(u, d),
      n.lineTo(c, f),
      n.stroke(),
      n.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && Ea(i, r);
    const s = this.getLabelItems(e);
    for (const o of s) {
      const a = o.options,
        l = o.font,
        u = o.label,
        c = o.textOffset;
      li(i, u, 0, c, l, a);
    }
    r && Da(i);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const s = Se(i.font),
      o = je(i.padding),
      a = i.align;
    let l = s.lineHeight / 2;
    n === "bottom" || n === "center" || W(n)
      ? ((l += o.bottom), ae(i.text) && (l += s.lineHeight * (i.text.length - 1)))
      : (l += o.top);
    const { titleX: u, titleY: c, maxWidth: d, rotation: f } = Mb(this, l, n, a);
    li(e, i.text, 0, 0, s, {
      color: i.color,
      maxWidth: d,
      rotation: f,
      textAlign: Sb(a, n, r),
      textBaseline: "middle",
      translation: [u, c],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(), this.drawGrid(e), this.drawBorder(), this.drawTitle(), this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      n = (e.ticks && e.ticks.z) || 0,
      i = z(e.grid && e.grid.z, -1),
      r = z(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== fi.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const a = n[s];
      a[i] === this.id && (!e || a.type === e) && r.push(a);
    }
    return r;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return Se(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class Gs {
  constructor(e, n, i) {
    (this.type = e), (this.scope = n), (this.override = i), (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const n = Object.getPrototypeOf(e);
    let i;
    Eb(n) && (i = this.register(n));
    const r = this.items,
      s = e.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + e);
    return s in r || ((r[s] = e), Pb(e, o, i), this.override && pe.override(e.id, e.overrides)), o;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items,
      i = e.id,
      r = this.scope;
    i in n && delete n[i], r && i in pe[r] && (delete pe[r][i], this.override && delete ai[i]);
  }
}
function Pb(t, e, n) {
  const i = os(Object.create(null), [n ? pe.get(n) : {}, pe.get(e), t.defaults]);
  pe.set(e, i), t.defaultRoutes && Cb(e, t.defaultRoutes), t.descriptors && pe.describe(e, t.descriptors);
}
function Cb(t, e) {
  Object.keys(e).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      s = [t].concat(i).join("."),
      o = e[n].split("."),
      a = o.pop(),
      l = o.join(".");
    pe.route(s, r, l, a);
  });
}
function Eb(t) {
  return "id" in t && "defaults" in t;
}
class Db {
  constructor() {
    (this.controllers = new Gs(bt, "datasets", !0)),
      (this.elements = new Gs(St, "elements")),
      (this.plugins = new Gs(Object, "plugins")),
      (this.scales = new Gs(fi, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, n, i) {
    [...n].forEach((r) => {
      const s = i || this._getRegistryForType(r);
      i || s.isForType(r) || (s === this.plugins && r.id)
        ? this._exec(e, s, r)
        : U(r, (o) => {
            const a = i || this._getRegistryForType(o);
            this._exec(e, a, o);
          });
    });
  }
  _exec(e, n, i) {
    const r = zc(e);
    G(i["before" + r], [], i), n[e](i), G(i["after" + r], [], i);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(e)) return i;
    }
    return this.plugins;
  }
  _get(e, n, i) {
    const r = n.get(e);
    if (r === void 0) throw new Error('"' + e + '" is not a registered ' + i + ".");
    return r;
  }
}
var Ot = new Db();
class Ob {
  constructor() {
    this._init = [];
  }
  notify(e, n, i, r) {
    n === "beforeInit" && ((this._init = this._createDescriptors(e, !0)), this._notify(this._init, e, "install"));
    const s = r ? this._descriptors(e).filter(r) : this._descriptors(e),
      o = this._notify(s, e, n, i);
    return n === "afterDestroy" && (this._notify(s, e, "stop"), this._notify(this._init, e, "uninstall")), o;
  }
  _notify(e, n, i, r) {
    r = r || {};
    for (const s of e) {
      const o = s.plugin,
        a = o[i],
        l = [n, r, s.options];
      if (G(a, l, o) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    H(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const i = e && e.config,
      r = z(i.options && i.options.plugins, {}),
      s = Tb(i);
    return r === !1 && !n ? [] : Rb(e, s, r, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (s, o) => s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(r(n, i), e, "stop"), this._notify(r(i, n), e, "start");
  }
}
function Tb(t) {
  const e = {},
    n = [],
    i = Object.keys(Ot.plugins.items);
  for (let s = 0; s < i.length; s++) n.push(Ot.getPlugin(i[s]));
  const r = t.plugins || [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
  }
  return { plugins: n, localIds: e };
}
function Lb(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function Rb(t, { plugins: e, localIds: n }, i, r) {
  const s = [],
    o = t.getContext();
  for (const a of e) {
    const l = a.id,
      u = Lb(i[l], r);
    u !== null && s.push({ plugin: a, options: Nb(t.config, { plugin: a, local: n[l] }, u, o) });
  }
  return s;
}
function Nb(t, { plugin: e, local: n }, i, r) {
  const s = t.pluginScopeKeys(e),
    o = t.getOptionScopes(i, s);
  return (
    n && e.defaults && o.push(e.defaults), t.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Mu(t, e) {
  const n = pe.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x";
}
function Ab(t, e) {
  let n = t;
  return t === "_index_" ? (n = e) : t === "_value_" && (n = e === "x" ? "y" : "x"), n;
}
function Fb(t, e) {
  return t === e ? "_index_" : "_value_";
}
function lh(t) {
  if (t === "x" || t === "y" || t === "r") return t;
}
function Ib(t) {
  if (t === "top" || t === "bottom") return "x";
  if (t === "left" || t === "right") return "y";
}
function Pu(t, ...e) {
  if (lh(t)) return t;
  for (const n of e) {
    const i = n.axis || Ib(n.position) || (t.length > 1 && lh(t[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function uh(t, e, n) {
  if (n[e + "AxisID"] === t) return { axis: e };
}
function zb(t, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (n.length) return uh(t, "x", n[0]) || uh(t, "y", n[0]);
  }
  return {};
}
function jb(t, e) {
  const n = ai[t.type] || { scales: {} },
    i = e.scales || {},
    r = Mu(t.type, e),
    s = Object.create(null);
  return (
    Object.keys(i).forEach((o) => {
      const a = i[o];
      if (!W(a)) return console.error(`Invalid scale configuration for scale: ${o}`);
      if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
      const l = Pu(o, a, zb(o, t), pe.scales[a.type]),
        u = Fb(l, r),
        c = n.scales || {};
      s[o] = Nr(Object.create(null), [{ axis: l }, a, c[l], c[u]]);
    }),
    t.data.datasets.forEach((o) => {
      const a = o.type || t.type,
        l = o.indexAxis || Mu(a, e),
        c = (ai[a] || {}).scales || {};
      Object.keys(c).forEach((d) => {
        const f = Ab(d, l),
          h = o[f + "AxisID"] || f;
        (s[h] = s[h] || Object.create(null)), Nr(s[h], [{ axis: f }, i[h], c[d]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const a = s[o];
      Nr(a, [pe.scales[a.type], pe.scale]);
    }),
    s
  );
}
function Jm(t) {
  const e = t.options || (t.options = {});
  (e.plugins = z(e.plugins, {})), (e.scales = jb(t, e));
}
function e0(t) {
  return (t = t || {}), (t.datasets = t.datasets || []), (t.labels = t.labels || []), t;
}
function Wb(t) {
  return (t = t || {}), (t.data = e0(t.data)), Jm(t), t;
}
const ch = new Map(),
  t0 = new Set();
function Zs(t, e) {
  let n = ch.get(t);
  return n || ((n = e()), ch.set(t, n), t0.add(n)), n;
}
const dr = (t, e, n) => {
  const i = Tn(e, n);
  i !== void 0 && t.add(i);
};
class Bb {
  constructor(e) {
    (this._config = Wb(e)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = e0(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), Jm(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Zs(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, n) {
    return Zs(`${e}.transition.${n}`, () => [
      [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return Zs(`${e}-${n}`, () => [[`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""]]);
  }
  pluginScopeKeys(e) {
    const n = e.id,
      i = this.type;
    return Zs(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...(e.additionalOptionScopes || [])]]);
  }
  _cachedScopes(e, n) {
    const i = this._scopeCache;
    let r = i.get(e);
    return (!r || n) && ((r = new Map()), i.set(e, r)), r;
  }
  getOptionScopes(e, n, i) {
    const { options: r, type: s } = this,
      o = this._cachedScopes(e, i),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((c) => {
      e && (l.add(e), c.forEach((d) => dr(l, e, d))),
        c.forEach((d) => dr(l, r, d)),
        c.forEach((d) => dr(l, ai[s] || {}, d)),
        c.forEach((d) => dr(l, pe, d)),
        c.forEach((d) => dr(l, bu, d));
    });
    const u = Array.from(l);
    return u.length === 0 && u.push(Object.create(null)), t0.has(n) && o.set(n, u), u;
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [e, ai[n] || {}, pe.datasets[n] || {}, { type: n }, pe, bu];
  }
  resolveNamedOptions(e, n, i, r = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: a } = dh(this._resolverCache, e, r);
    let l = o;
    if (Vb(o, n)) {
      (s.$shared = !1), (i = Ln(i) ? i() : i);
      const u = this.createResolver(e, i, a);
      l = Yi(o, i, u);
    }
    for (const u of n) s[u] = l[u];
    return s;
  }
  createResolver(e, n, i = [""], r) {
    const { resolver: s } = dh(this._resolverCache, e, i);
    return W(n) ? Yi(s, n, void 0, r) : s;
  }
}
function dh(t, e, n) {
  let i = t.get(e);
  i || ((i = new Map()), t.set(e, i));
  const r = n.join();
  let s = i.get(r);
  return (
    s || ((s = { resolver: $c(e, n), subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")) }), i.set(r, s)),
    s
  );
}
const Hb = (t) => W(t) && Object.getOwnPropertyNames(t).some((e) => Ln(t[e]));
function Vb(t, e) {
  const { isScriptable: n, isIndexable: i } = Rm(t);
  for (const r of e) {
    const s = n(r),
      o = i(r),
      a = (o || s) && t[r];
    if ((s && (Ln(a) || Hb(a))) || (o && ae(a))) return !0;
  }
  return !1;
}
var $b = "4.4.3";
const Yb = ["top", "bottom", "left", "right", "chartArea"];
function fh(t, e) {
  return t === "top" || t === "bottom" || (Yb.indexOf(t) === -1 && e === "x");
}
function hh(t, e) {
  return function (n, i) {
    return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
  };
}
function ph(t) {
  const e = t.chart,
    n = e.options.animation;
  e.notifyPlugins("afterRender"), G(n && n.onComplete, [t], e);
}
function Ub(t) {
  const e = t.chart,
    n = e.options.animation;
  G(n && n.onProgress, [t], e);
}
function n0(t) {
  return (
    Qc() && typeof t == "string" ? (t = document.getElementById(t)) : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const So = {},
  gh = (t) => {
    const e = n0(t);
    return Object.values(So)
      .filter((n) => n.canvas === e)
      .pop();
  };
function Qb(t, e, n) {
  const i = Object.keys(t);
  for (const r of i) {
    const s = +r;
    if (s >= e) {
      const o = t[r];
      delete t[r], (n > 0 || s > e) && (t[s + n] = o);
    }
  }
}
function Xb(t, e, n, i) {
  return !n || t.type === "mouseout" ? null : i ? e : t;
}
function Js(t, e, n) {
  return t.options.clip ? t[n] : e[n];
}
function qb(t, e) {
  const { xScale: n, yScale: i } = t;
  return n && i
    ? { left: Js(n, e, "left"), right: Js(n, e, "right"), top: Js(i, e, "top"), bottom: Js(i, e, "bottom") }
    : e;
}
class Yt {
  static register(...e) {
    Ot.add(...e), mh();
  }
  static unregister(...e) {
    Ot.remove(...e), mh();
  }
  constructor(e, n) {
    const i = (this.config = new Bb(n)),
      r = n0(e),
      s = gh(r);
    if (s)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          s.id +
          "' must be destroyed before the canvas with ID '" +
          s.canvas.id +
          "' can be reused."
      );
    const o = i.createResolver(i.chartOptionScopes(), this.getContext());
    (this.platform = new (i.platform || fb(r))()), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(r, o.aspectRatio),
      l = a && a.canvas,
      u = l && l.height,
      c = l && l.width;
    if (
      ((this.id = Z1()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = c),
      (this.height = u),
      (this._options = o),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new Ob()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = p_((d) => this.update(d), o.resizeDelay || 0)),
      (this._dataChanges = []),
      (So[this.id] = this),
      !a || !l)
    ) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Wt.listen(this, "complete", ph),
      Wt.listen(this, "progress", Ub),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: e, maintainAspectRatio: n },
      width: i,
      height: r,
      _aspectRatio: s,
    } = this;
    return H(e) ? (n && s ? s : r ? i / r : null) : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return Ot;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive ? this.resize() : If(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return Nf(this.canvas, this.ctx), this;
  }
  stop() {
    return Wt.stop(this), this;
  }
  resize(e, n) {
    Wt.running(this) ? (this._resizeBeforeDraw = { width: e, height: n }) : this._resize(e, n);
  }
  _resize(e, n) {
    const i = this.options,
      r = this.canvas,
      s = i.maintainAspectRatio && this.aspectRatio,
      o = this.platform.getMaximumSize(r, e, n, s),
      a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = o.width),
      (this.height = o.height),
      (this._aspectRatio = this.aspectRatio),
      If(this, a, !0) &&
        (this.notifyPlugins("resize", { size: o }),
        G(i.onResize, [this, o], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    U(n, (i, r) => {
      i.id = r;
    });
  }
  buildOrUpdateScales() {
    const e = this.options,
      n = e.scales,
      i = this.scales,
      r = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
    let s = [];
    n &&
      (s = s.concat(
        Object.keys(n).map((o) => {
          const a = n[o],
            l = Pu(o, a),
            u = l === "r",
            c = l === "x";
          return {
            options: a,
            dposition: u ? "chartArea" : c ? "bottom" : "left",
            dtype: u ? "radialLinear" : c ? "category" : "linear",
          };
        })
      )),
      U(s, (o) => {
        const a = o.options,
          l = a.id,
          u = Pu(l, a),
          c = z(a.type, o.dtype);
        (a.position === void 0 || fh(a.position, u) !== fh(o.dposition)) && (a.position = o.dposition), (r[l] = !0);
        let d = null;
        if (l in i && i[l].type === c) d = i[l];
        else {
          const f = Ot.getScale(c);
          (d = new f({ id: l, type: c, ctx: this.ctx, chart: this })), (i[d.id] = d);
        }
        d.init(a, e);
      }),
      U(r, (o, a) => {
        o || delete i[a];
      }),
      U(i, (o) => {
        Ie.configure(this, o, o.options), Ie.addBox(this, o);
      });
  }
  _updateMetasets() {
    const e = this._metasets,
      n = this.data.datasets.length,
      i = e.length;
    if ((e.sort((r, s) => r.index - s.index), i > n)) {
      for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
      e.splice(n, i - n);
    }
    this._sortedMetasets = e.slice(0).sort(hh("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: { datasets: n },
    } = this;
    e.length > n.length && delete this._stacks,
      e.forEach((i, r) => {
        n.filter((s) => s === i._dataset).length === 0 && this._destroyDatasetMeta(r);
      });
  }
  buildOrUpdateControllers() {
    const e = [],
      n = this.data.datasets;
    let i, r;
    for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      let o = this.getDatasetMeta(i);
      const a = s.type || this.config.type;
      if (
        (o.type && o.type !== a && (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
        (o.type = a),
        (o.indexAxis = s.indexAxis || Mu(a, this.options)),
        (o.order = s.order || 0),
        (o.index = i),
        (o.label = "" + s.label),
        (o.visible = this.isDatasetVisible(i)),
        o.controller)
      )
        o.controller.updateIndex(i), o.controller.linkScales();
      else {
        const l = Ot.getController(a),
          { datasetElementType: u, dataElementType: c } = pe.datasets[a];
        Object.assign(l, { dataElementType: Ot.getElement(c), datasetElementType: u && Ot.getElement(u) }),
          (o.controller = new l(this, i)),
          e.push(o.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    U(
      this.data.datasets,
      (e, n) => {
        this.getDatasetMeta(n).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const n = this.config;
    n.update();
    const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
      r = (this._animationsDisabled = !i.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
    )
      return;
    const s = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let u = 0, c = this.data.datasets.length; u < c; u++) {
      const { controller: d } = this.getDatasetMeta(u),
        f = !r && s.indexOf(d) === -1;
      d.buildOrUpdateElements(f), (o = Math.max(+d.getMaxOverflow(), o));
    }
    (o = this._minPadding = i.layout.autoPadding ? o : 0),
      this._updateLayout(o),
      r ||
        U(s, (u) => {
          u.reset();
        }),
      this._updateDatasets(e),
      this.notifyPlugins("afterUpdate", { mode: e }),
      this._layers.sort(hh("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    U(this.scales, (e) => {
      Ie.removeBox(this, e);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options,
      n = new Set(Object.keys(this._listeners)),
      i = new Set(e.events);
    (!Mf(n, i) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this,
      n = this._getUniformDataChanges() || [];
    for (const { method: i, start: r, count: s } of n) {
      const o = i === "_removeElements" ? -s : s;
      Qb(e, r, o);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) return;
    this._dataChanges = [];
    const n = this.data.datasets.length,
      i = (s) => new Set(e.filter((o) => o[0] === s).map((o, a) => a + "," + o.splice(1).join(","))),
      r = i(0);
    for (let s = 1; s < n; s++) if (!Mf(r, i(s))) return;
    return Array.from(r)
      .map((s) => s.split(","))
      .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    Ie.update(this, this.width, this.height, e);
    const n = this.chartArea,
      i = n.width <= 0 || n.height <= 0;
    (this._layers = []),
      U(
        this.boxes,
        (r) => {
          (i && r.position === "chartArea") || (r.configure && r.configure(), this._layers.push(...r._layers()));
        },
        this
      ),
      this._layers.forEach((r, s) => {
        r._idx = s;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (this.notifyPlugins("beforeDatasetsUpdate", { mode: e, cancelable: !0 }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n) this.getDatasetMeta(n).controller.configure();
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, Ln(e) ? e({ datasetIndex: n }) : e);
      this.notifyPlugins("afterDatasetsUpdate", { mode: e });
    }
  }
  _updateDataset(e, n) {
    const i = this.getDatasetMeta(e),
      r = { meta: i, index: e, mode: n, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
      (i.controller._update(n), (r.cancelable = !1), this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Wt.has(this) ? this.attached && !Wt.running(this) && Wt.start(this) : (this.draw(), ph({ chart: this })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: i, height: r } = this._resizeBeforeDraw;
      this._resize(i, r), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const n = this._layers;
    for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
    for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const n = this._sortedMetasets,
      i = [];
    let r, s;
    for (r = 0, s = n.length; r < s; ++r) {
      const o = n[r];
      (!e || o.visible) && i.push(o);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1) return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const n = this.ctx,
      i = e._clip,
      r = !i.disabled,
      s = qb(e, this.chartArea),
      o = { meta: e, index: e.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
      (r &&
        Ea(n, {
          left: i.left === !1 ? 0 : s.left - i.left,
          right: i.right === !1 ? this.width : s.right + i.right,
          top: i.top === !1 ? 0 : s.top - i.top,
          bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
        }),
      e.controller.draw(),
      r && Da(n),
      (o.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", o));
  }
  isPointInArea(e) {
    return Kt(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, n, i, r) {
    const s = Yw.modes[n];
    return typeof s == "function" ? s(this, e, i, r) : [];
  }
  getDatasetMeta(e) {
    const n = this.data.datasets[e],
      i = this._metasets;
    let r = i.filter((s) => s && s._dataset === n).pop();
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (n && n.order) || 0,
          index: e,
          _dataset: n,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(r)),
      r
    );
  }
  getContext() {
    return this.$context || (this.$context = In(null, { chart: this, type: "chart" }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const n = this.data.datasets[e];
    if (!n) return !1;
    const i = this.getDatasetMeta(e);
    return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
  }
  setDatasetVisibility(e, n) {
    const i = this.getDatasetMeta(e);
    i.hidden = !n;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, n, i) {
    const r = i ? "show" : "hide",
      s = this.getDatasetMeta(e),
      o = s.controller._resolveAnimations(void 0, r);
    as(n)
      ? ((s.data[n].hidden = !i), this.update())
      : (this.setDatasetVisibility(e, i),
        o.update(s, { visible: i }),
        this.update((a) => (a.datasetIndex === e ? r : void 0)));
  }
  hide(e, n) {
    this._updateVisibility(e, n, !1);
  }
  show(e, n) {
    this._updateVisibility(e, n, !0);
  }
  _destroyDatasetMeta(e) {
    const n = this._metasets[e];
    n && n.controller && n.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, n;
    for (this.stop(), Wt.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e) this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: n } = this;
    this._stop(),
      this.config.clearCache(),
      e && (this.unbindEvents(), Nf(e, n), this.platform.releaseContext(n), (this.canvas = null), (this.ctx = null)),
      delete So[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
  }
  bindUserEvents() {
    const e = this._listeners,
      n = this.platform,
      i = (s, o) => {
        n.addEventListener(this, s, o), (e[s] = o);
      },
      r = (s, o, a) => {
        (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
      };
    U(this.options.events, (s) => i(s, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners,
      n = this.platform,
      i = (l, u) => {
        n.addEventListener(this, l, u), (e[l] = u);
      },
      r = (l, u) => {
        e[l] && (n.removeEventListener(this, l, u), delete e[l]);
      },
      s = (l, u) => {
        this.canvas && this.resize(l, u);
      };
    let o;
    const a = () => {
      r("attach", a), (this.attached = !0), this.resize(), i("resize", s), i("detach", o);
    };
    (o = () => {
      (this.attached = !1), r("resize", s), this._stop(), this._resize(0, 0), i("attach", a);
    }),
      n.isAttached(this.canvas) ? a() : o();
  }
  unbindEvents() {
    U(this._listeners, (e, n) => {
      this.platform.removeEventListener(this, n, e);
    }),
      (this._listeners = {}),
      U(this._responsiveListeners, (e, n) => {
        this.platform.removeEventListener(this, n, e);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(e, n, i) {
    const r = i ? "set" : "remove";
    let s, o, a, l;
    for (
      n === "dataset" && ((s = this.getDatasetMeta(e[0].datasetIndex)), s.controller["_" + r + "DatasetHoverStyle"]()),
        a = 0,
        l = e.length;
      a < l;
      ++a
    ) {
      o = e[a];
      const u = o && this.getDatasetMeta(o.datasetIndex).controller;
      u && u[r + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const n = this._active || [],
      i = e.map(({ datasetIndex: s, index: o }) => {
        const a = this.getDatasetMeta(s);
        if (!a) throw new Error("No dataset found at index " + s);
        return { datasetIndex: s, element: a.data[o], index: o };
      });
    !Jo(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n));
  }
  notifyPlugins(e, n, i) {
    return this._plugins.notify(this, e, n, i);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, n, i) {
    const r = this.options.hover,
      s = (l, u) => l.filter((c) => !u.some((d) => c.datasetIndex === d.datasetIndex && c.index === d.index)),
      o = s(n, e),
      a = i ? e : s(e, n);
    o.length && this.updateHoverStyle(o, r.mode, !1), a.length && r.mode && this.updateHoverStyle(a, r.mode, !0);
  }
  _eventHandler(e, n) {
    const i = { event: e, replay: n, cancelable: !0, inChartArea: this.isPointInArea(e) },
      r = (o) => (o.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
    const s = this._handleEvent(e, n, i.inChartArea);
    return (i.cancelable = !1), this.notifyPlugins("afterEvent", i, r), (s || i.changed) && this.render(), this;
  }
  _handleEvent(e, n, i) {
    const { _active: r = [], options: s } = this,
      o = n,
      a = this._getActiveElements(e, r, i, o),
      l = r_(e),
      u = Xb(e, this._lastEvent, i, l);
    i && ((this._lastEvent = null), G(s.onHover, [e, a, this], this), l && G(s.onClick, [e, a, this], this));
    const c = !Jo(a, r);
    return (c || n) && ((this._active = a), this._updateHoverStyles(a, r, n)), (this._lastEvent = u), c;
  }
  _getActiveElements(e, n, i, r) {
    if (e.type === "mouseout") return [];
    if (!i) return n;
    const s = this.options.hover;
    return this.getElementsAtEventForMode(e, s.mode, s, r);
  }
}
M(Yt, "defaults", pe),
  M(Yt, "instances", So),
  M(Yt, "overrides", ai),
  M(Yt, "registry", Ot),
  M(Yt, "version", $b),
  M(Yt, "getChart", gh);
function mh() {
  return U(Yt.instances, (t) => t._plugins.invalidate());
}
function Kb(t, e, n) {
  const { startAngle: i, pixelMargin: r, x: s, y: o, outerRadius: a, innerRadius: l } = e;
  let u = r / a;
  t.beginPath(),
    t.arc(s, o, a, i - u, n + u),
    l > r ? ((u = r / l), t.arc(s, o, l, n + u, i - u, !0)) : t.arc(s, o, r, n + ye, i - ye),
    t.closePath(),
    t.clip();
}
function Gb(t) {
  return Vc(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Zb(t, e, n, i) {
  const r = Gb(t.options.borderRadius),
    s = (n - e) / 2,
    o = Math.min(s, (i * e) / 2),
    a = (l) => {
      const u = ((n - Math.min(s, l)) * i) / 2;
      return Pe(l, 0, Math.min(s, u));
    };
  return {
    outerStart: a(r.outerStart),
    outerEnd: a(r.outerEnd),
    innerStart: Pe(r.innerStart, 0, o),
    innerEnd: Pe(r.innerEnd, 0, o),
  };
}
function mi(t, e, n, i) {
  return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
}
function sa(t, e, n, i, r, s) {
  const { x: o, y: a, startAngle: l, pixelMargin: u, innerRadius: c } = e,
    d = Math.max(e.outerRadius + i + n - u, 0),
    f = c > 0 ? c + i + n + u : 0;
  let h = 0;
  const m = r - l;
  if (i) {
    const $ = c > 0 ? c - i : 0,
      X = d > 0 ? d - i : 0,
      J = ($ + X) / 2,
      T = J !== 0 ? (m * J) / (J + i) : m;
    h = (m - T) / 2;
  }
  const y = Math.max(0.001, m * d - n / se) / d,
    x = (m - y) / 2,
    g = l + x + h,
    p = r - x - h,
    { outerStart: v, outerEnd: _, innerStart: w, innerEnd: P } = Zb(e, f, d, p - g),
    k = d - v,
    S = d - _,
    D = g + v / k,
    O = p - _ / S,
    N = f + w,
    I = f + P,
    q = g + w / N,
    Te = p - P / I;
  if ((t.beginPath(), s)) {
    const $ = (D + O) / 2;
    if ((t.arc(o, a, d, D, $), t.arc(o, a, d, $, O), _ > 0)) {
      const R = mi(S, O, o, a);
      t.arc(R.x, R.y, _, O, p + ye);
    }
    const X = mi(I, p, o, a);
    if ((t.lineTo(X.x, X.y), P > 0)) {
      const R = mi(I, Te, o, a);
      t.arc(R.x, R.y, P, p + ye, Te + Math.PI);
    }
    const J = (p - P / f + (g + w / f)) / 2;
    if ((t.arc(o, a, f, p - P / f, J, !0), t.arc(o, a, f, J, g + w / f, !0), w > 0)) {
      const R = mi(N, q, o, a);
      t.arc(R.x, R.y, w, q + Math.PI, g - ye);
    }
    const T = mi(k, g, o, a);
    if ((t.lineTo(T.x, T.y), v > 0)) {
      const R = mi(k, D, o, a);
      t.arc(R.x, R.y, v, g - ye, D);
    }
  } else {
    t.moveTo(o, a);
    const $ = Math.cos(D) * d + o,
      X = Math.sin(D) * d + a;
    t.lineTo($, X);
    const J = Math.cos(O) * d + o,
      T = Math.sin(O) * d + a;
    t.lineTo(J, T);
  }
  t.closePath();
}
function Jb(t, e, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: a } = e;
  let l = e.endAngle;
  if (s) {
    sa(t, e, n, i, l, r);
    for (let u = 0; u < s; ++u) t.fill();
    isNaN(a) || (l = o + (a % re || re));
  }
  return sa(t, e, n, i, l, r), t.fill(), l;
}
function ek(t, e, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: a, options: l } = e,
    { borderWidth: u, borderJoinStyle: c, borderDash: d, borderDashOffset: f } = l,
    h = l.borderAlign === "inner";
  if (!u) return;
  t.setLineDash(d || []),
    (t.lineDashOffset = f),
    h ? ((t.lineWidth = u * 2), (t.lineJoin = c || "round")) : ((t.lineWidth = u), (t.lineJoin = c || "bevel"));
  let m = e.endAngle;
  if (s) {
    sa(t, e, n, i, m, r);
    for (let y = 0; y < s; ++y) t.stroke();
    isNaN(a) || (m = o + (a % re || re));
  }
  h && Kb(t, e, m), s || (sa(t, e, n, i, m, r), t.stroke());
}
class br extends St {
  constructor(n) {
    super();
    M(this, "circumference");
    M(this, "endAngle");
    M(this, "fullCircles");
    M(this, "innerRadius");
    M(this, "outerRadius");
    M(this, "pixelMargin");
    M(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.getProps(["x", "y"], r),
      { angle: o, distance: a } = km(s, { x: n, y: i }),
      {
        startAngle: l,
        endAngle: u,
        innerRadius: c,
        outerRadius: d,
        circumference: f,
      } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], r),
      h = (this.options.spacing + this.options.borderWidth) / 2,
      y = z(f, u - l) >= re || ls(o, l, u),
      x = Xt(a, c + h, d + h);
    return y && x;
  }
  getCenterPoint(n) {
    const {
        x: i,
        y: r,
        startAngle: s,
        endAngle: o,
        innerRadius: a,
        outerRadius: l,
      } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], n),
      { offset: u, spacing: c } = this.options,
      d = (s + o) / 2,
      f = (a + l + c + u) / 2;
    return { x: i + Math.cos(d) * f, y: r + Math.sin(d) * f };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: i, circumference: r } = this,
      s = (i.offset || 0) / 4,
      o = (i.spacing || 0) / 2,
      a = i.circular;
    if (
      ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = r > re ? Math.floor(r / re) : 0),
      r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * s, Math.sin(l) * s);
    const u = 1 - Math.sin(Math.min(se, r || 0)),
      c = s * u;
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      Jb(n, this, c, o, a),
      ek(n, this, c, o, a),
      n.restore();
  }
}
M(br, "id", "arc"),
  M(br, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  M(br, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  M(br, "descriptors", { _scriptable: !0, _indexable: (n) => n !== "borderDash" });
function i0(t, e, n = e) {
  (t.lineCap = z(n.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(z(n.borderDash, e.borderDash)),
    (t.lineDashOffset = z(n.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = z(n.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = z(n.borderWidth, e.borderWidth)),
    (t.strokeStyle = z(n.borderColor, e.borderColor));
}
function tk(t, e, n) {
  t.lineTo(n.x, n.y);
}
function nk(t) {
  return t.stepped ? P_ : t.tension || t.cubicInterpolationMode === "monotone" ? C_ : tk;
}
function r0(t, e, n = {}) {
  const i = t.length,
    { start: r = 0, end: s = i - 1 } = n,
    { start: o, end: a } = e,
    l = Math.max(r, o),
    u = Math.min(s, a),
    c = (r < o && s < o) || (r > a && s > a);
  return { count: i, start: l, loop: e.loop, ilen: u < l && !c ? i + u - l : u - l };
}
function ik(t, e, n, i) {
  const { points: r, options: s } = e,
    { count: o, start: a, loop: l, ilen: u } = r0(r, n, i),
    c = nk(s);
  let { move: d = !0, reverse: f } = i || {},
    h,
    m,
    y;
  for (h = 0; h <= u; ++h)
    (m = r[(a + (f ? u - h : h)) % o]),
      !m.skip && (d ? (t.moveTo(m.x, m.y), (d = !1)) : c(t, y, m, f, s.stepped), (y = m));
  return l && ((m = r[(a + (f ? u : 0)) % o]), c(t, y, m, f, s.stepped)), !!l;
}
function rk(t, e, n, i) {
  const r = e.points,
    { count: s, start: o, ilen: a } = r0(r, n, i),
    { move: l = !0, reverse: u } = i || {};
  let c = 0,
    d = 0,
    f,
    h,
    m,
    y,
    x,
    g;
  const p = (_) => (o + (u ? a - _ : _)) % s,
    v = () => {
      y !== x && (t.lineTo(c, x), t.lineTo(c, y), t.lineTo(c, g));
    };
  for (l && ((h = r[p(0)]), t.moveTo(h.x, h.y)), f = 0; f <= a; ++f) {
    if (((h = r[p(f)]), h.skip)) continue;
    const _ = h.x,
      w = h.y,
      P = _ | 0;
    P === m
      ? (w < y ? (y = w) : w > x && (x = w), (c = (d * c + _) / ++d))
      : (v(), t.lineTo(_, w), (m = P), (d = 0), (y = x = w)),
      (g = w);
  }
  v();
}
function Cu(t) {
  const e = t.options,
    n = e.borderDash && e.borderDash.length;
  return !t._decimated && !t._loop && !e.tension && e.cubicInterpolationMode !== "monotone" && !e.stepped && !n
    ? rk
    : ik;
}
function sk(t) {
  return t.stepped ? sw : t.tension || t.cubicInterpolationMode === "monotone" ? ow : Yn;
}
function ok(t, e, n, i) {
  let r = e._path;
  r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()), i0(t, e.options), t.stroke(r);
}
function ak(t, e, n, i) {
  const { segments: r, options: s } = e,
    o = Cu(e);
  for (const a of r)
    i0(t, s, a.style), t.beginPath(), o(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(), t.stroke();
}
const lk = typeof Path2D == "function";
function uk(t, e, n, i) {
  lk && !e.options.segment ? ok(t, e, n, i) : ak(t, e, n, i);
}
class yn extends St {
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, n) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      G_(this._points, i, e, r, n), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e), delete this._segments, delete this._path, (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = fw(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      n = this.points;
    return e.length && n[e[0].start];
  }
  last() {
    const e = this.segments,
      n = this.points,
      i = e.length;
    return i && n[e[i - 1].end];
  }
  interpolate(e, n) {
    const i = this.options,
      r = e[n],
      s = this.points,
      o = Vm(this, { property: n, start: r, end: r });
    if (!o.length) return;
    const a = [],
      l = sk(i);
    let u, c;
    for (u = 0, c = o.length; u < c; ++u) {
      const { start: d, end: f } = o[u],
        h = s[d],
        m = s[f];
      if (h === m) {
        a.push(h);
        continue;
      }
      const y = Math.abs((r - h[n]) / (m[n] - h[n])),
        x = l(h, m, y, i.stepped);
      (x[n] = e[n]), a.push(x);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(e, n, i) {
    return Cu(this)(e, this, n, i);
  }
  path(e, n, i) {
    const r = this.segments,
      s = Cu(this);
    let o = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const a of r) o &= s(e, this, a, { start: n, end: n + i - 1 });
    return !!o;
  }
  draw(e, n, i, r) {
    const s = this.options || {};
    (this.points || []).length && s.borderWidth && (e.save(), uk(e, this, i, r), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
M(yn, "id", "line"),
  M(yn, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  M(yn, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" }),
  M(yn, "descriptors", { _scriptable: !0, _indexable: (e) => e !== "borderDash" && e !== "fill" });
function yh(t, e, n, i) {
  const r = t.options,
    { [n]: s } = t.getProps([n], i);
  return Math.abs(e - s) < r.radius + r.hitRadius;
}
class Mo extends St {
  constructor(n) {
    super();
    M(this, "parsed");
    M(this, "skip");
    M(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.options,
      { x: o, y: a } = this.getProps(["x", "y"], r);
    return Math.pow(n - o, 2) + Math.pow(i - a, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(n, i) {
    return yh(this, n, "x", i);
  }
  inYRange(n, i) {
    return yh(this, n, "y", i);
  }
  getCenterPoint(n) {
    const { x: i, y: r } = this.getProps(["x", "y"], n);
    return { x: i, y: r };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const r = (i && n.borderWidth) || 0;
    return (i + r) * 2;
  }
  draw(n, i) {
    const r = this.options;
    this.skip ||
      r.radius < 0.1 ||
      !Kt(this, i, this.size(r) / 2) ||
      ((n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      (n.fillStyle = r.backgroundColor),
      ku(n, r, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
M(Mo, "id", "point"),
  M(Mo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  M(Mo, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" });
function s0(t, e) {
  const { x: n, y: i, base: r, width: s, height: o } = t.getProps(["x", "y", "base", "width", "height"], e);
  let a, l, u, c, d;
  return (
    t.horizontal
      ? ((d = o / 2), (a = Math.min(n, r)), (l = Math.max(n, r)), (u = i - d), (c = i + d))
      : ((d = s / 2), (a = n - d), (l = n + d), (u = Math.min(i, r)), (c = Math.max(i, r))),
    { left: a, top: u, right: l, bottom: c }
  );
}
function vn(t, e, n, i) {
  return t ? 0 : Pe(e, n, i);
}
function ck(t, e, n) {
  const i = t.options.borderWidth,
    r = t.borderSkipped,
    s = Lm(i);
  return {
    t: vn(r.top, s.top, 0, n),
    r: vn(r.right, s.right, 0, e),
    b: vn(r.bottom, s.bottom, 0, n),
    l: vn(r.left, s.left, 0, e),
  };
}
function dk(t, e, n) {
  const { enableBorderRadius: i } = t.getProps(["enableBorderRadius"]),
    r = t.options.borderRadius,
    s = ei(r),
    o = Math.min(e, n),
    a = t.borderSkipped,
    l = i || W(r);
  return {
    topLeft: vn(!l || a.top || a.left, s.topLeft, 0, o),
    topRight: vn(!l || a.top || a.right, s.topRight, 0, o),
    bottomLeft: vn(!l || a.bottom || a.left, s.bottomLeft, 0, o),
    bottomRight: vn(!l || a.bottom || a.right, s.bottomRight, 0, o),
  };
}
function fk(t) {
  const e = s0(t),
    n = e.right - e.left,
    i = e.bottom - e.top,
    r = ck(t, n / 2, i / 2),
    s = dk(t, n / 2, i / 2);
  return {
    outer: { x: e.left, y: e.top, w: n, h: i, radius: s },
    inner: {
      x: e.left + r.l,
      y: e.top + r.t,
      w: n - r.l - r.r,
      h: i - r.t - r.b,
      radius: {
        topLeft: Math.max(0, s.topLeft - Math.max(r.t, r.l)),
        topRight: Math.max(0, s.topRight - Math.max(r.t, r.r)),
        bottomLeft: Math.max(0, s.bottomLeft - Math.max(r.b, r.l)),
        bottomRight: Math.max(0, s.bottomRight - Math.max(r.b, r.r)),
      },
    },
  };
}
function vl(t, e, n, i) {
  const r = e === null,
    s = n === null,
    a = t && !(r && s) && s0(t, i);
  return a && (r || Xt(e, a.left, a.right)) && (s || Xt(n, a.top, a.bottom));
}
function hk(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function pk(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function xl(t, e, n = {}) {
  const i = t.x !== n.x ? -e : 0,
    r = t.y !== n.y ? -e : 0,
    s = (t.x + t.w !== n.x + n.w ? e : 0) - i,
    o = (t.y + t.h !== n.y + n.h ? e : 0) - r;
  return { x: t.x + i, y: t.y + r, w: t.w + s, h: t.h + o, radius: t.radius };
}
class Po extends St {
  constructor(e) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      e && Object.assign(this, e);
  }
  draw(e) {
    const {
        inflateAmount: n,
        options: { borderColor: i, backgroundColor: r },
      } = this,
      { inner: s, outer: o } = fk(this),
      a = hk(o.radius) ? us : pk;
    e.save(),
      (o.w !== s.w || o.h !== s.h) &&
        (e.beginPath(), a(e, xl(o, n, s)), e.clip(), a(e, xl(s, -n, o)), (e.fillStyle = i), e.fill("evenodd")),
      e.beginPath(),
      a(e, xl(s, n)),
      (e.fillStyle = r),
      e.fill(),
      e.restore();
  }
  inRange(e, n, i) {
    return vl(this, e, n, i);
  }
  inXRange(e, n) {
    return vl(this, e, null, n);
  }
  inYRange(e, n) {
    return vl(this, null, e, n);
  }
  getCenterPoint(e) {
    const { x: n, y: i, base: r, horizontal: s } = this.getProps(["x", "y", "base", "horizontal"], e);
    return { x: s ? (n + r) / 2 : n, y: s ? i : (i + r) / 2 };
  }
  getRange(e) {
    return e === "x" ? this.width / 2 : this.height / 2;
  }
}
M(Po, "id", "bar"),
  M(Po, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  M(Po, "defaultRoutes", { backgroundColor: "backgroundColor", borderColor: "borderColor" });
var gk = Object.freeze({ __proto__: null, ArcElement: br, BarElement: Po, LineElement: yn, PointElement: Mo });
const Eu = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)",
  ],
  vh = Eu.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function o0(t) {
  return Eu[t % Eu.length];
}
function a0(t) {
  return vh[t % vh.length];
}
function mk(t, e) {
  return (t.borderColor = o0(e)), (t.backgroundColor = a0(e)), ++e;
}
function yk(t, e) {
  return (t.backgroundColor = t.data.map(() => o0(e++))), e;
}
function vk(t, e) {
  return (t.backgroundColor = t.data.map(() => a0(e++))), e;
}
function xk(t) {
  let e = 0;
  return (n, i) => {
    const r = t.getDatasetMeta(i).controller;
    r instanceof Gn ? (e = yk(n, e)) : r instanceof zr ? (e = vk(n, e)) : r && (e = mk(n, e));
  };
}
function xh(t) {
  let e;
  for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
  return !1;
}
function _k(t) {
  return t && (t.borderColor || t.backgroundColor);
}
var wk = {
  id: "colors",
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(t, e, n) {
    if (!n.enabled) return;
    const {
        data: { datasets: i },
        options: r,
      } = t.config,
      { elements: s } = r;
    if (!n.forceOverride && (xh(i) || _k(r) || (s && xh(s)))) return;
    const o = xk(t);
    i.forEach(o);
  },
};
function bk(t, e, n, i, r) {
  const s = r.samples || i;
  if (s >= n) return t.slice(e, e + n);
  const o = [],
    a = (n - 2) / (s - 2);
  let l = 0;
  const u = e + n - 1;
  let c = e,
    d,
    f,
    h,
    m,
    y;
  for (o[l++] = t[c], d = 0; d < s - 2; d++) {
    let x = 0,
      g = 0,
      p;
    const v = Math.floor((d + 1) * a) + 1 + e,
      _ = Math.min(Math.floor((d + 2) * a) + 1, n) + e,
      w = _ - v;
    for (p = v; p < _; p++) (x += t[p].x), (g += t[p].y);
    (x /= w), (g /= w);
    const P = Math.floor(d * a) + 1 + e,
      k = Math.min(Math.floor((d + 1) * a) + 1, n) + e,
      { x: S, y: D } = t[c];
    for (h = m = -1, p = P; p < k; p++)
      (m = 0.5 * Math.abs((S - x) * (t[p].y - D) - (S - t[p].x) * (g - D))), m > h && ((h = m), (f = t[p]), (y = p));
    (o[l++] = f), (c = y);
  }
  return (o[l++] = t[u]), o;
}
function kk(t, e, n, i) {
  let r = 0,
    s = 0,
    o,
    a,
    l,
    u,
    c,
    d,
    f,
    h,
    m,
    y;
  const x = [],
    g = e + n - 1,
    p = t[e].x,
    _ = t[g].x - p;
  for (o = e; o < e + n; ++o) {
    (a = t[o]), (l = ((a.x - p) / _) * i), (u = a.y);
    const w = l | 0;
    if (w === c) u < m ? ((m = u), (d = o)) : u > y && ((y = u), (f = o)), (r = (s * r + a.x) / ++s);
    else {
      const P = o - 1;
      if (!H(d) && !H(f)) {
        const k = Math.min(d, f),
          S = Math.max(d, f);
        k !== h && k !== P && x.push({ ...t[k], x: r }), S !== h && S !== P && x.push({ ...t[S], x: r });
      }
      o > 0 && P !== h && x.push(t[P]), x.push(a), (c = w), (s = 0), (m = y = u), (d = f = h = o);
    }
  }
  return x;
}
function l0(t) {
  if (t._decimated) {
    const e = t._data;
    delete t._decimated,
      delete t._data,
      Object.defineProperty(t, "data", { configurable: !0, enumerable: !0, writable: !0, value: e });
  }
}
function _h(t) {
  t.data.datasets.forEach((e) => {
    l0(e);
  });
}
function Sk(t, e) {
  const n = e.length;
  let i = 0,
    r;
  const { iScale: s } = t,
    { min: o, max: a, minDefined: l, maxDefined: u } = s.getUserBounds();
  return (
    l && (i = Pe(qt(e, s.axis, o).lo, 0, n - 1)),
    u ? (r = Pe(qt(e, s.axis, a).hi + 1, i, n) - i) : (r = n - i),
    { start: i, count: r }
  );
}
var Mk = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (t, e, n) => {
    if (!n.enabled) {
      _h(t);
      return;
    }
    const i = t.width;
    t.data.datasets.forEach((r, s) => {
      const { _data: o, indexAxis: a } = r,
        l = t.getDatasetMeta(s),
        u = o || r.data;
      if (_r([a, t.options.indexAxis]) === "y" || !l.controller.supportsDecimation) return;
      const c = t.scales[l.xAxisID];
      if ((c.type !== "linear" && c.type !== "time") || t.options.parsing) return;
      let { start: d, count: f } = Sk(l, u);
      const h = n.threshold || 4 * i;
      if (f <= h) {
        l0(r);
        return;
      }
      H(o) &&
        ((r._data = u),
        delete r.data,
        Object.defineProperty(r, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (y) {
            this._data = y;
          },
        }));
      let m;
      switch (n.algorithm) {
        case "lttb":
          m = bk(u, d, f, i, n);
          break;
        case "min-max":
          m = kk(u, d, f, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`);
      }
      r._decimated = m;
    });
  },
  destroy(t) {
    _h(t);
  },
};
function Pk(t, e, n) {
  const i = t.segments,
    r = t.points,
    s = e.points,
    o = [];
  for (const a of i) {
    let { start: l, end: u } = a;
    u = Kc(l, u, r);
    const c = Du(n, r[l], r[u], a.loop);
    if (!e.segments) {
      o.push({ source: a, target: c, start: r[l], end: r[u] });
      continue;
    }
    const d = Vm(e, c);
    for (const f of d) {
      const h = Du(n, s[f.start], s[f.end], f.loop),
        m = Hm(a, r, h);
      for (const y of m)
        o.push({
          source: y,
          target: f,
          start: { [n]: wh(c, h, "start", Math.max) },
          end: { [n]: wh(c, h, "end", Math.min) },
        });
    }
  }
  return o;
}
function Du(t, e, n, i) {
  if (i) return;
  let r = e[t],
    s = n[t];
  return t === "angle" && ((r = tt(r)), (s = tt(s))), { property: t, start: r, end: s };
}
function Ck(t, e) {
  const { x: n = null, y: i = null } = t || {},
    r = e.points,
    s = [];
  return (
    e.segments.forEach(({ start: o, end: a }) => {
      a = Kc(o, a, r);
      const l = r[o],
        u = r[a];
      i !== null
        ? (s.push({ x: l.x, y: i }), s.push({ x: u.x, y: i }))
        : n !== null && (s.push({ x: n, y: l.y }), s.push({ x: n, y: u.y }));
    }),
    s
  );
}
function Kc(t, e, n) {
  for (; e > t; e--) {
    const i = n[e];
    if (!isNaN(i.x) && !isNaN(i.y)) break;
  }
  return e;
}
function wh(t, e, n, i) {
  return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
}
function u0(t, e) {
  let n = [],
    i = !1;
  return (
    ae(t) ? ((i = !0), (n = t)) : (n = Ck(t, e)),
    n.length ? new yn({ points: n, options: { tension: 0 }, _loop: i, _fullLoop: i }) : null
  );
}
function bh(t) {
  return t && t.fill !== !1;
}
function Ek(t, e, n) {
  let r = t[e].fill;
  const s = [e];
  let o;
  if (!n) return r;
  for (; r !== !1 && s.indexOf(r) === -1; ) {
    if (!he(r)) return r;
    if (((o = t[r]), !o)) return !1;
    if (o.visible) return r;
    s.push(r), (r = o.fill);
  }
  return !1;
}
function Dk(t, e, n) {
  const i = Rk(t);
  if (W(i)) return isNaN(i.value) ? !1 : i;
  let r = parseFloat(i);
  return he(r) && Math.floor(r) === r
    ? Ok(i[0], e, r, n)
    : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
}
function Ok(t, e, n, i) {
  return (t === "-" || t === "+") && (n = e + n), n === e || n < 0 || n >= i ? !1 : n;
}
function Tk(t, e) {
  let n = null;
  return (
    t === "start"
      ? (n = e.bottom)
      : t === "end"
      ? (n = e.top)
      : W(t)
      ? (n = e.getPixelForValue(t.value))
      : e.getBasePixel && (n = e.getBasePixel()),
    n
  );
}
function Lk(t, e, n) {
  let i;
  return (
    t === "start"
      ? (i = n)
      : t === "end"
      ? (i = e.options.reverse ? e.min : e.max)
      : W(t)
      ? (i = t.value)
      : (i = e.getBaseValue()),
    i
  );
}
function Rk(t) {
  const e = t.options,
    n = e.fill;
  let i = z(n && n.target, n);
  return i === void 0 && (i = !!e.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function Nk(t) {
  const { scale: e, index: n, line: i } = t,
    r = [],
    s = i.segments,
    o = i.points,
    a = Ak(e, n);
  a.push(u0({ x: null, y: e.bottom }, i));
  for (let l = 0; l < s.length; l++) {
    const u = s[l];
    for (let c = u.start; c <= u.end; c++) Fk(r, o[c], a);
  }
  return new yn({ points: r, options: {} });
}
function Ak(t, e) {
  const n = [],
    i = t.getMatchingVisibleMetas("line");
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (s.index === e) break;
    s.hidden || n.unshift(s.dataset);
  }
  return n;
}
function Fk(t, e, n) {
  const i = [];
  for (let r = 0; r < n.length; r++) {
    const s = n[r],
      { first: o, last: a, point: l } = Ik(s, e, "x");
    if (!(!l || (o && a))) {
      if (o) i.unshift(l);
      else if ((t.push(l), !a)) break;
    }
  }
  t.push(...i);
}
function Ik(t, e, n) {
  const i = t.interpolate(e, n);
  if (!i) return {};
  const r = i[n],
    s = t.segments,
    o = t.points;
  let a = !1,
    l = !1;
  for (let u = 0; u < s.length; u++) {
    const c = s[u],
      d = o[c.start][n],
      f = o[c.end][n];
    if (Xt(r, d, f)) {
      (a = r === d), (l = r === f);
      break;
    }
  }
  return { first: a, last: l, point: i };
}
class c0 {
  constructor(e) {
    (this.x = e.x), (this.y = e.y), (this.radius = e.radius);
  }
  pathSegment(e, n, i) {
    const { x: r, y: s, radius: o } = this;
    return (n = n || { start: 0, end: re }), e.arc(r, s, o, n.end, n.start, !0), !i.bounds;
  }
  interpolate(e) {
    const { x: n, y: i, radius: r } = this,
      s = e.angle;
    return { x: n + Math.cos(s) * r, y: i + Math.sin(s) * r, angle: s };
  }
}
function zk(t) {
  const { chart: e, fill: n, line: i } = t;
  if (he(n)) return jk(e, n);
  if (n === "stack") return Nk(t);
  if (n === "shape") return !0;
  const r = Wk(t);
  return r instanceof c0 ? r : u0(r, i);
}
function jk(t, e) {
  const n = t.getDatasetMeta(e);
  return n && t.isDatasetVisible(e) ? n.dataset : null;
}
function Wk(t) {
  return (t.scale || {}).getPointPositionForValue ? Hk(t) : Bk(t);
}
function Bk(t) {
  const { scale: e = {}, fill: n } = t,
    i = Tk(n, e);
  if (he(i)) {
    const r = e.isHorizontal();
    return { x: r ? i : null, y: r ? null : i };
  }
  return null;
}
function Hk(t) {
  const { scale: e, fill: n } = t,
    i = e.options,
    r = e.getLabels().length,
    s = i.reverse ? e.max : e.min,
    o = Lk(n, e, s),
    a = [];
  if (i.grid.circular) {
    const l = e.getPointPositionForValue(0, s);
    return new c0({ x: l.x, y: l.y, radius: e.getDistanceFromCenterForValue(o) });
  }
  for (let l = 0; l < r; ++l) a.push(e.getPointPositionForValue(l, o));
  return a;
}
function _l(t, e, n) {
  const i = zk(e),
    { line: r, scale: s, axis: o } = e,
    a = r.options,
    l = a.fill,
    u = a.backgroundColor,
    { above: c = u, below: d = u } = l || {};
  i &&
    r.points.length &&
    (Ea(t, n), Vk(t, { line: r, target: i, above: c, below: d, area: n, scale: s, axis: o }), Da(t));
}
function Vk(t, e) {
  const { line: n, target: i, above: r, below: s, area: o, scale: a } = e,
    l = n._loop ? "angle" : e.axis;
  t.save(),
    l === "x" &&
      s !== r &&
      (kh(t, i, o.top),
      Sh(t, { line: n, target: i, color: r, scale: a, property: l }),
      t.restore(),
      t.save(),
      kh(t, i, o.bottom)),
    Sh(t, { line: n, target: i, color: s, scale: a, property: l }),
    t.restore();
}
function kh(t, e, n) {
  const { segments: i, points: r } = e;
  let s = !0,
    o = !1;
  t.beginPath();
  for (const a of i) {
    const { start: l, end: u } = a,
      c = r[l],
      d = r[Kc(l, u, r)];
    s ? (t.moveTo(c.x, c.y), (s = !1)) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
      (o = !!e.pathSegment(t, a, { move: o })),
      o ? t.closePath() : t.lineTo(d.x, n);
  }
  t.lineTo(e.first().x, n), t.closePath(), t.clip();
}
function Sh(t, e) {
  const { line: n, target: i, property: r, color: s, scale: o } = e,
    a = Pk(n, i, r);
  for (const { source: l, target: u, start: c, end: d } of a) {
    const { style: { backgroundColor: f = s } = {} } = l,
      h = i !== !0;
    t.save(), (t.fillStyle = f), $k(t, o, h && Du(r, c, d)), t.beginPath();
    const m = !!n.pathSegment(t, l);
    let y;
    if (h) {
      m ? t.closePath() : Mh(t, i, d, r);
      const x = !!i.pathSegment(t, u, { move: m, reverse: !0 });
      (y = m && x), y || Mh(t, i, c, r);
    }
    t.closePath(), t.fill(y ? "evenodd" : "nonzero"), t.restore();
  }
}
function $k(t, e, n) {
  const { top: i, bottom: r } = e.chart.chartArea,
    { property: s, start: o, end: a } = n || {};
  s === "x" && (t.beginPath(), t.rect(o, i, a - o, r - i), t.clip());
}
function Mh(t, e, n, i) {
  const r = e.interpolate(n, i);
  r && t.lineTo(r.x, r.y);
}
var Yk = {
  id: "filler",
  afterDatasetsUpdate(t, e, n) {
    const i = (t.data.datasets || []).length,
      r = [];
    let s, o, a, l;
    for (o = 0; o < i; ++o)
      (s = t.getDatasetMeta(o)),
        (a = s.dataset),
        (l = null),
        a &&
          a.options &&
          a instanceof yn &&
          (l = {
            visible: t.isDatasetVisible(o),
            index: o,
            fill: Dk(a, o, i),
            chart: t,
            axis: s.controller.options.indexAxis,
            scale: s.vScale,
            line: a,
          }),
        (s.$filler = l),
        r.push(l);
    for (o = 0; o < i; ++o) (l = r[o]), !(!l || l.fill === !1) && (l.fill = Ek(r, o, n.propagate));
  },
  beforeDraw(t, e, n) {
    const i = n.drawTime === "beforeDraw",
      r = t.getSortedVisibleDatasetMetas(),
      s = t.chartArea;
    for (let o = r.length - 1; o >= 0; --o) {
      const a = r[o].$filler;
      a && (a.line.updateControlPoints(s, a.axis), i && a.fill && _l(t.ctx, a, s));
    }
  },
  beforeDatasetsDraw(t, e, n) {
    if (n.drawTime !== "beforeDatasetsDraw") return;
    const i = t.getSortedVisibleDatasetMetas();
    for (let r = i.length - 1; r >= 0; --r) {
      const s = i[r].$filler;
      bh(s) && _l(t.ctx, s, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, n) {
    const i = e.meta.$filler;
    !bh(i) || n.drawTime !== "beforeDatasetDraw" || _l(t.ctx, i, t.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const Ph = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return (
      t.usePointStyle && ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  },
  Uk = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class Ch extends St {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n, i) {
    (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = this._margins.top), (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let n = G(e.generateLabels, [this.chart], this) || [];
    e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
      e.sort && (n = n.sort((i, r) => e.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: e, ctx: n } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const i = e.labels,
      r = Se(i.font),
      s = r.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Ph(i, s);
    let u, c;
    (n.font = r.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (c = this._fitRows(o, s, a, l) + 10))
        : ((c = this.maxHeight), (u = this._fitCols(o, r, a, l) + 10)),
      (this.width = Math.min(u, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, n, i, r) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      c = r + a;
    let d = e;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let f = -1,
      h = -c;
    return (
      this.legendItems.forEach((m, y) => {
        const x = i + n / 2 + s.measureText(m.text).width;
        (y === 0 || u[u.length - 1] + x + 2 * a > o) && ((d += c), (u[u.length - (y > 0 ? 0 : 1)] = 0), (h += c), f++),
          (l[y] = { left: 0, top: h, row: f, width: x, height: r }),
          (u[u.length - 1] += x + a);
      }),
      d
    );
  }
  _fitCols(e, n, i, r) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      c = o - e;
    let d = a,
      f = 0,
      h = 0,
      m = 0,
      y = 0;
    return (
      this.legendItems.forEach((x, g) => {
        const { itemWidth: p, itemHeight: v } = Qk(i, n, s, x, r);
        g > 0 && h + v + 2 * a > c && ((d += f + a), u.push({ width: f, height: h }), (m += f + a), y++, (f = h = 0)),
          (l[g] = { left: m, top: h, col: y, width: p, height: v }),
          (f = Math.max(f, p)),
          (h += v + a);
      }),
      (d += f),
      u.push({ width: f, height: h }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: s,
        },
      } = this,
      o = Fi(s, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Ne(i, this.left + r, this.right - this.lineWidths[a]);
      for (const u of n)
        a !== u.row && ((a = u.row), (l = Ne(i, this.left + r, this.right - this.lineWidths[a]))),
          (u.top += this.top + e + r),
          (u.left = o.leftForLtr(o.x(l), u.width)),
          (l += u.width + r);
    } else {
      let a = 0,
        l = Ne(i, this.top + e + r, this.bottom - this.columnSizes[a].height);
      for (const u of n)
        u.col !== a && ((a = u.col), (l = Ne(i, this.top + e + r, this.bottom - this.columnSizes[a].height))),
          (u.top = l),
          (u.left += this.left + r),
          (u.left = o.leftForLtr(o.x(u.left), u.width)),
          (l += u.height + r);
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      Ea(e, this), this._draw(), Da(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: s, labels: o } = e,
      a = pe.color,
      l = Fi(e.rtl, this.left, this.width),
      u = Se(o.font),
      { padding: c } = o,
      d = u.size,
      f = d / 2;
    let h;
    this.drawTitle(),
      (r.textAlign = l.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = u.string);
    const { boxWidth: m, boxHeight: y, itemHeight: x } = Ph(o, d),
      g = function (P, k, S) {
        if (isNaN(m) || m <= 0 || isNaN(y) || y < 0) return;
        r.save();
        const D = z(S.lineWidth, 1);
        if (
          ((r.fillStyle = z(S.fillStyle, a)),
          (r.lineCap = z(S.lineCap, "butt")),
          (r.lineDashOffset = z(S.lineDashOffset, 0)),
          (r.lineJoin = z(S.lineJoin, "miter")),
          (r.lineWidth = D),
          (r.strokeStyle = z(S.strokeStyle, a)),
          r.setLineDash(z(S.lineDash, [])),
          o.usePointStyle)
        ) {
          const O = { radius: (y * Math.SQRT2) / 2, pointStyle: S.pointStyle, rotation: S.rotation, borderWidth: D },
            N = l.xPlus(P, m / 2),
            I = k + f;
          Tm(r, O, N, I, o.pointStyleWidth && m);
        } else {
          const O = k + Math.max((d - y) / 2, 0),
            N = l.leftForLtr(P, m),
            I = ei(S.borderRadius);
          r.beginPath(),
            Object.values(I).some((q) => q !== 0) ? us(r, { x: N, y: O, w: m, h: y, radius: I }) : r.rect(N, O, m, y),
            r.fill(),
            D !== 0 && r.stroke();
        }
        r.restore();
      },
      p = function (P, k, S) {
        li(r, S.text, P, k + x / 2, u, { strikethrough: S.hidden, textAlign: l.textAlign(S.textAlign) });
      },
      v = this.isHorizontal(),
      _ = this._computeTitleHeight();
    v
      ? (h = { x: Ne(s, this.left + c, this.right - i[0]), y: this.top + c + _, line: 0 })
      : (h = { x: this.left + c, y: Ne(s, this.top + _ + c, this.bottom - n[0].height), line: 0 }),
      jm(this.ctx, e.textDirection);
    const w = x + c;
    this.legendItems.forEach((P, k) => {
      (r.strokeStyle = P.fontColor), (r.fillStyle = P.fontColor);
      const S = r.measureText(P.text).width,
        D = l.textAlign(P.textAlign || (P.textAlign = o.textAlign)),
        O = m + f + S;
      let N = h.x,
        I = h.y;
      l.setWidth(this.width),
        v
          ? k > 0 &&
            N + O + c > this.right &&
            ((I = h.y += w), h.line++, (N = h.x = Ne(s, this.left + c, this.right - i[h.line])))
          : k > 0 &&
            I + w > this.bottom &&
            ((N = h.x = N + n[h.line].width + c),
            h.line++,
            (I = h.y = Ne(s, this.top + _ + c, this.bottom - n[h.line].height)));
      const q = l.x(N);
      if ((g(q, I, P), (N = g_(D, N + m + f, v ? N + O : this.right, e.rtl)), p(l.x(N), I, P), v)) h.x += O + c;
      else if (typeof P.text != "string") {
        const Te = u.lineHeight;
        h.y += d0(P, Te) + c;
      } else h.y += w;
    }),
      Wm(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      n = e.title,
      i = Se(n.font),
      r = je(n.padding);
    if (!n.display) return;
    const s = Fi(e.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = i.size / 2,
      u = r.top + l;
    let c,
      d = this.left,
      f = this.width;
    if (this.isHorizontal())
      (f = Math.max(...this.lineWidths)), (c = this.top + u), (d = Ne(e.align, d, this.right - f));
    else {
      const m = this.columnSizes.reduce((y, x) => Math.max(y, x.height), 0);
      c = u + Ne(e.align, this.top, this.bottom - m - e.labels.padding - this._computeTitleHeight());
    }
    const h = Ne(a, d, d + f);
    (o.textAlign = s.textAlign(Bc(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = i.string),
      li(o, n.text, h, c, i);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      n = Se(e.font),
      i = je(e.padding);
    return e.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(e, n) {
    let i, r, s;
    if (Xt(e, this.left, this.right) && Xt(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
        if (((r = s[i]), Xt(e, r.left, r.left + r.width) && Xt(n, r.top, r.top + r.height))) return this.legendItems[i];
    }
    return null;
  }
  handleEvent(e) {
    const n = this.options;
    if (!Kk(e.type, n)) return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const r = this._hoveredItem,
        s = Uk(r, i);
      r && !s && G(n.onLeave, [e, r, this], this), (this._hoveredItem = i), i && !s && G(n.onHover, [e, i, this], this);
    } else i && G(n.onClick, [e, i, this], this);
  }
}
function Qk(t, e, n, i, r) {
  const s = Xk(i, t, e, n),
    o = qk(r, i, e.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function Xk(t, e, n, i) {
  let r = t.text;
  return (
    r && typeof r != "string" && (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
    e + n.size / 2 + i.measureText(r).width
  );
}
function qk(t, e, n) {
  let i = t;
  return typeof e.text != "string" && (i = d0(e, n)), i;
}
function d0(t, e) {
  const n = t.text ? t.text.length : 0;
  return e * n;
}
function Kk(t, e) {
  return !!(
    ((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (t === "click" || t === "mouseup"))
  );
}
var Gk = {
  id: "legend",
  _element: Ch,
  start(t, e, n) {
    const i = (t.legend = new Ch({ ctx: t.ctx, options: n, chart: t }));
    Ie.configure(t, i, n), Ie.addBox(t, i);
  },
  stop(t) {
    Ie.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, n) {
    const i = t.legend;
    Ie.configure(t, i, n), (i.options = n);
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, n) {
      const i = e.datasetIndex,
        r = n.chart;
      r.isDatasetVisible(i) ? (r.hide(i), (e.hidden = !0)) : (r.show(i), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets,
          {
            labels: { usePointStyle: n, pointStyle: i, textAlign: r, color: s, useBorderRadius: o, borderRadius: a },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map((l) => {
          const u = l.controller.getStyle(n ? 0 : void 0),
            c = je(u.borderWidth);
          return {
            text: e[l.index].label,
            fillStyle: u.backgroundColor,
            fontColor: s,
            hidden: !l.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: i || u.pointStyle,
            rotation: u.rotation,
            textAlign: r || u.textAlign,
            borderRadius: o && (a || u.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: { color: (t) => t.chart.options.color, display: !1, position: "center", text: "" },
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith("on"),
    labels: { _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t) },
  },
};
class Gc extends St {
  constructor(e) {
    super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = n);
    const r = ae(i.text) ? i.text.length : 1;
    this._padding = je(i.padding);
    const s = r * Se(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: n, left: i, bottom: r, right: s, options: o } = this,
      a = o.align;
    let l = 0,
      u,
      c,
      d;
    return (
      this.isHorizontal()
        ? ((c = Ne(a, i, s)), (d = n + e), (u = s - i))
        : (o.position === "left"
            ? ((c = i + e), (d = Ne(a, r, n)), (l = se * -0.5))
            : ((c = s - e), (d = Ne(a, n, r)), (l = se * 0.5)),
          (u = r - n)),
      { titleX: c, titleY: d, maxWidth: u, rotation: l }
    );
  }
  draw() {
    const e = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = Se(n.font),
      s = i.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: a, maxWidth: l, rotation: u } = this._drawArgs(s);
    li(e, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: u,
      textAlign: Bc(n.align),
      textBaseline: "middle",
      translation: [o, a],
    });
  }
}
function Zk(t, e) {
  const n = new Gc({ ctx: t.ctx, options: e, chart: t });
  Ie.configure(t, n, e), Ie.addBox(t, n), (t.titleBlock = n);
}
var Jk = {
  id: "title",
  _element: Gc,
  start(t, e, n) {
    Zk(t, n);
  },
  stop(t) {
    const e = t.titleBlock;
    Ie.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, n) {
    const i = t.titleBlock;
    Ie.configure(t, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const eo = new WeakMap();
var eS = {
  id: "subtitle",
  start(t, e, n) {
    const i = new Gc({ ctx: t.ctx, options: n, chart: t });
    Ie.configure(t, i, n), Ie.addBox(t, i), eo.set(t, i);
  },
  stop(t) {
    Ie.removeBox(t, eo.get(t)), eo.delete(t);
  },
  beforeUpdate(t, e, n) {
    const i = eo.get(t);
    Ie.configure(t, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const kr = {
  average(t) {
    if (!t.length) return !1;
    let e,
      n,
      i = new Set(),
      r = 0,
      s = 0;
    for (e = 0, n = t.length; e < n; ++e) {
      const a = t[e].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        i.add(l.x), (r += l.y), ++s;
      }
    }
    return { x: [...i].reduce((a, l) => a + l) / i.size, y: r / s };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let n = e.x,
      i = e.y,
      r = Number.POSITIVE_INFINITY,
      s,
      o,
      a;
    for (s = 0, o = t.length; s < o; ++s) {
      const l = t[s].element;
      if (l && l.hasValue()) {
        const u = l.getCenterPoint(),
          c = wu(e, u);
        c < r && ((r = c), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return { x: n, y: i };
  },
};
function Et(t, e) {
  return e && (ae(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Bt(t) {
  return (typeof t == "string" || t instanceof String) &&
    t.indexOf(`
`) > -1
    ? t.split(`
`)
    : t;
}
function tS(t, e) {
  const { element: n, datasetIndex: i, index: r } = e,
    s = t.getDatasetMeta(i).controller,
    { label: o, value: a } = s.getLabelAndValue(r);
  return {
    chart: t,
    label: o,
    parsed: s.getParsed(r),
    raw: t.data.datasets[i].data[r],
    formattedValue: a,
    dataset: s.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function Eh(t, e) {
  const n = t.chart.ctx,
    { body: i, footer: r, title: s } = t,
    { boxWidth: o, boxHeight: a } = e,
    l = Se(e.bodyFont),
    u = Se(e.titleFont),
    c = Se(e.footerFont),
    d = s.length,
    f = r.length,
    h = i.length,
    m = je(e.padding);
  let y = m.height,
    x = 0,
    g = i.reduce((_, w) => _ + w.before.length + w.lines.length + w.after.length, 0);
  if (
    ((g += t.beforeBody.length + t.afterBody.length),
    d && (y += d * u.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    g)
  ) {
    const _ = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    y += h * _ + (g - h) * l.lineHeight + (g - 1) * e.bodySpacing;
  }
  f && (y += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
  let p = 0;
  const v = function (_) {
    x = Math.max(x, n.measureText(_).width + p);
  };
  return (
    n.save(),
    (n.font = u.string),
    U(t.title, v),
    (n.font = l.string),
    U(t.beforeBody.concat(t.afterBody), v),
    (p = e.displayColors ? o + 2 + e.boxPadding : 0),
    U(i, (_) => {
      U(_.before, v), U(_.lines, v), U(_.after, v);
    }),
    (p = 0),
    (n.font = c.string),
    U(t.footer, v),
    n.restore(),
    (x += m.width),
    { width: x, height: y }
  );
}
function nS(t, e) {
  const { y: n, height: i } = e;
  return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
}
function iS(t, e, n, i) {
  const { x: r, width: s } = i,
    o = n.caretSize + n.caretPadding;
  if ((t === "left" && r + s + o > e.width) || (t === "right" && r - s - o < 0)) return !0;
}
function rS(t, e, n, i) {
  const { x: r, width: s } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = t;
  let u = "center";
  return (
    i === "center"
      ? (u = r <= (a + l) / 2 ? "left" : "right")
      : r <= s / 2
      ? (u = "left")
      : r >= o - s / 2 && (u = "right"),
    iS(u, t, e, n) && (u = "center"),
    u
  );
}
function Dh(t, e, n) {
  const i = n.yAlign || e.yAlign || nS(t, n);
  return { xAlign: n.xAlign || e.xAlign || rS(t, e, n, i), yAlign: i };
}
function sS(t, e) {
  let { x: n, width: i } = t;
  return e === "right" ? (n -= i) : e === "center" && (n -= i / 2), n;
}
function oS(t, e, n) {
  let { y: i, height: r } = t;
  return e === "top" ? (i += n) : e === "bottom" ? (i -= r + n) : (i -= r / 2), i;
}
function Oh(t, e, n, i) {
  const { caretSize: r, caretPadding: s, cornerRadius: o } = t,
    { xAlign: a, yAlign: l } = n,
    u = r + s,
    { topLeft: c, topRight: d, bottomLeft: f, bottomRight: h } = ei(o);
  let m = sS(e, a);
  const y = oS(e, l, u);
  return (
    l === "center"
      ? a === "left"
        ? (m += u)
        : a === "right" && (m -= u)
      : a === "left"
      ? (m -= Math.max(c, f) + r)
      : a === "right" && (m += Math.max(d, h) + r),
    { x: Pe(m, 0, i.width - e.width), y: Pe(y, 0, i.height - e.height) }
  );
}
function to(t, e, n) {
  const i = je(n.padding);
  return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - i.right : t.x + i.left;
}
function Th(t) {
  return Et([], Bt(t));
}
function aS(t, e, n) {
  return In(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
}
function Lh(t, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t.override(n) : t;
}
const f0 = {
  beforeTitle: jt,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        n = e.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset") return e.dataset.label || "";
      if (e.label) return e.label;
      if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
    }
    return "";
  },
  afterTitle: jt,
  beforeBody: jt,
  beforeLabel: jt,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const n = t.formattedValue;
    return H(n) || (e += n), e;
  },
  labelColor(t) {
    const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: jt,
  afterBody: jt,
  beforeFooter: jt,
  footer: jt,
  afterFooter: jt,
};
function Ue(t, e, n, i) {
  const r = t[e].call(n, i);
  return typeof r > "u" ? f0[e].call(n, i) : r;
}
class Ou extends St {
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(e) {
    (this.options = e), (this._cachedAnimations = void 0), (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      s = new $m(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = aS(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, n) {
    const { callbacks: i } = n,
      r = Ue(i, "beforeTitle", this, e),
      s = Ue(i, "title", this, e),
      o = Ue(i, "afterTitle", this, e);
    let a = [];
    return (a = Et(a, Bt(r))), (a = Et(a, Bt(s))), (a = Et(a, Bt(o))), a;
  }
  getBeforeBody(e, n) {
    return Th(Ue(n.callbacks, "beforeBody", this, e));
  }
  getBody(e, n) {
    const { callbacks: i } = n,
      r = [];
    return (
      U(e, (s) => {
        const o = { before: [], lines: [], after: [] },
          a = Lh(i, s);
        Et(o.before, Bt(Ue(a, "beforeLabel", this, s))),
          Et(o.lines, Ue(a, "label", this, s)),
          Et(o.after, Bt(Ue(a, "afterLabel", this, s))),
          r.push(o);
      }),
      r
    );
  }
  getAfterBody(e, n) {
    return Th(Ue(n.callbacks, "afterBody", this, e));
  }
  getFooter(e, n) {
    const { callbacks: i } = n,
      r = Ue(i, "beforeFooter", this, e),
      s = Ue(i, "footer", this, e),
      o = Ue(i, "afterFooter", this, e);
    let a = [];
    return (a = Et(a, Bt(r))), (a = Et(a, Bt(s))), (a = Et(a, Bt(o))), a;
  }
  _createItems(e) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      s = [],
      o = [];
    let a = [],
      l,
      u;
    for (l = 0, u = n.length; l < u; ++l) a.push(tS(this.chart, n[l]));
    return (
      e.filter && (a = a.filter((c, d, f) => e.filter(c, d, f, i))),
      e.itemSort && (a = a.sort((c, d) => e.itemSort(c, d, i))),
      U(a, (c) => {
        const d = Lh(e.callbacks, c);
        r.push(Ue(d, "labelColor", this, c)),
          s.push(Ue(d, "labelPointStyle", this, c)),
          o.push(Ue(d, "labelTextColor", this, c));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = s),
      (this.labelTextColors = o),
      (this.dataPoints = a),
      a
    );
  }
  update(e, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active;
    let s,
      o = [];
    if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const a = kr[i.position].call(this, r, this._eventPosition);
      (o = this._createItems(i)),
        (this.title = this.getTitle(o, i)),
        (this.beforeBody = this.getBeforeBody(o, i)),
        (this.body = this.getBody(o, i)),
        (this.afterBody = this.getAfterBody(o, i)),
        (this.footer = this.getFooter(o, i));
      const l = (this._size = Eh(this, i)),
        u = Object.assign({}, a, l),
        c = Dh(this.chart, i, u),
        d = Oh(i, u, c, this.chart);
      (this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (s = { opacity: 1, x: d.x, y: d.y, width: l.width, height: l.height, caretX: a.x, caretY: a.y });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      e && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(e, n, i, r) {
    const s = this.getCaretPosition(e, i, r);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(e, n, i) {
    const { xAlign: r, yAlign: s } = this,
      { caretSize: o, cornerRadius: a } = i,
      { topLeft: l, topRight: u, bottomLeft: c, bottomRight: d } = ei(a),
      { x: f, y: h } = e,
      { width: m, height: y } = n;
    let x, g, p, v, _, w;
    return (
      s === "center"
        ? ((_ = h + y / 2),
          r === "left"
            ? ((x = f), (g = x - o), (v = _ + o), (w = _ - o))
            : ((x = f + m), (g = x + o), (v = _ - o), (w = _ + o)),
          (p = x))
        : (r === "left"
            ? (g = f + Math.max(l, c) + o)
            : r === "right"
            ? (g = f + m - Math.max(u, d) - o)
            : (g = this.caretX),
          s === "top"
            ? ((v = h), (_ = v - o), (x = g - o), (p = g + o))
            : ((v = h + y), (_ = v + o), (x = g + o), (p = g - o)),
          (w = v)),
      { x1: x, x2: g, x3: p, y1: v, y2: _, y3: w }
    );
  }
  drawTitle(e, n, i) {
    const r = this.title,
      s = r.length;
    let o, a, l;
    if (s) {
      const u = Fi(i.rtl, this.x, this.width);
      for (
        e.x = to(this, i.titleAlign, i),
          n.textAlign = u.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          o = Se(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = o.string,
          l = 0;
        l < s;
        ++l
      )
        n.fillText(r[l], u.x(e.x), e.y + o.lineHeight / 2),
          (e.y += o.lineHeight + a),
          l + 1 === s && (e.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(e, n, i, r, s) {
    const o = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: u } = s,
      c = Se(s.bodyFont),
      d = to(this, "left", s),
      f = r.x(d),
      h = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
      m = n.y + h;
    if (s.usePointStyle) {
      const y = { radius: Math.min(u, l) / 2, pointStyle: a.pointStyle, rotation: a.rotation, borderWidth: 1 },
        x = r.leftForLtr(f, u) + u / 2,
        g = m + l / 2;
      (e.strokeStyle = s.multiKeyBackground),
        (e.fillStyle = s.multiKeyBackground),
        ku(e, y, x, g),
        (e.strokeStyle = o.borderColor),
        (e.fillStyle = o.backgroundColor),
        ku(e, y, x, g);
    } else {
      (e.lineWidth = W(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1),
        (e.strokeStyle = o.borderColor),
        e.setLineDash(o.borderDash || []),
        (e.lineDashOffset = o.borderDashOffset || 0);
      const y = r.leftForLtr(f, u),
        x = r.leftForLtr(r.xPlus(f, 1), u - 2),
        g = ei(o.borderRadius);
      Object.values(g).some((p) => p !== 0)
        ? (e.beginPath(),
          (e.fillStyle = s.multiKeyBackground),
          us(e, { x: y, y: m, w: u, h: l, radius: g }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = o.backgroundColor),
          e.beginPath(),
          us(e, { x, y: m + 1, w: u - 2, h: l - 2, radius: g }),
          e.fill())
        : ((e.fillStyle = s.multiKeyBackground),
          e.fillRect(y, m, u, l),
          e.strokeRect(y, m, u, l),
          (e.fillStyle = o.backgroundColor),
          e.fillRect(x, m + 1, u - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, n, i) {
    const { body: r } = this,
      { bodySpacing: s, bodyAlign: o, displayColors: a, boxHeight: l, boxWidth: u, boxPadding: c } = i,
      d = Se(i.bodyFont);
    let f = d.lineHeight,
      h = 0;
    const m = Fi(i.rtl, this.x, this.width),
      y = function (S) {
        n.fillText(S, m.x(e.x + h), e.y + f / 2), (e.y += f + s);
      },
      x = m.textAlign(o);
    let g, p, v, _, w, P, k;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = d.string,
        e.x = to(this, x, i),
        n.fillStyle = i.bodyColor,
        U(this.beforeBody, y),
        h = a && x !== "right" ? (o === "center" ? u / 2 + c : u + 2 + c) : 0,
        _ = 0,
        P = r.length;
      _ < P;
      ++_
    ) {
      for (
        g = r[_],
          p = this.labelTextColors[_],
          n.fillStyle = p,
          U(g.before, y),
          v = g.lines,
          a && v.length && (this._drawColorBox(n, e, _, m, i), (f = Math.max(d.lineHeight, l))),
          w = 0,
          k = v.length;
        w < k;
        ++w
      )
        y(v[w]), (f = d.lineHeight);
      U(g.after, y);
    }
    (h = 0), (f = d.lineHeight), U(this.afterBody, y), (e.y -= s);
  }
  drawFooter(e, n, i) {
    const r = this.footer,
      s = r.length;
    let o, a;
    if (s) {
      const l = Fi(i.rtl, this.x, this.width);
      for (
        e.x = to(this, i.footerAlign, i),
          e.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          o = Se(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = o.string,
          a = 0;
        a < s;
        ++a
      )
        n.fillText(r[a], l.x(e.x), e.y + o.lineHeight / 2), (e.y += o.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(e, n, i, r) {
    const { xAlign: s, yAlign: o } = this,
      { x: a, y: l } = e,
      { width: u, height: c } = i,
      { topLeft: d, topRight: f, bottomLeft: h, bottomRight: m } = ei(r.cornerRadius);
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(a + d, l),
      o === "top" && this.drawCaret(e, n, i, r),
      n.lineTo(a + u - f, l),
      n.quadraticCurveTo(a + u, l, a + u, l + f),
      o === "center" && s === "right" && this.drawCaret(e, n, i, r),
      n.lineTo(a + u, l + c - m),
      n.quadraticCurveTo(a + u, l + c, a + u - m, l + c),
      o === "bottom" && this.drawCaret(e, n, i, r),
      n.lineTo(a + h, l + c),
      n.quadraticCurveTo(a, l + c, a, l + c - h),
      o === "center" && s === "left" && this.drawCaret(e, n, i, r),
      n.lineTo(a, l + d),
      n.quadraticCurveTo(a, l, a + d, l),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(e) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      s = i && i.y;
    if (r || s) {
      const o = kr[e.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const a = (this._size = Eh(this, e)),
        l = Object.assign({}, o, this._size),
        u = Dh(n, e, l),
        c = Oh(e, l, u, n);
      (r._to !== c.x || s._to !== c.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, c));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const r = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const o = je(n.padding),
      a =
        this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled &&
      a &&
      (e.save(),
      (e.globalAlpha = i),
      this.drawBackground(s, e, r, n),
      jm(e, n.textDirection),
      (s.y += o.top),
      this.drawTitle(s, e, n),
      this.drawBody(s, e, n),
      this.drawFooter(s, e, n),
      Wm(e, n.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, n) {
    const i = this._active,
      r = e.map(({ datasetIndex: a, index: l }) => {
        const u = this.chart.getDatasetMeta(a);
        if (!u) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: u.data[l], index: l };
      }),
      s = !Jo(i, r),
      o = this._positionChanged(r, n);
    (s || o) && ((this._active = r), (this._eventPosition = n), (this._ignoreReplayEvents = !0), this.update(!0));
  }
  handleEvent(e, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      s = this._active || [],
      o = this._getActiveElements(e, s, n, i),
      a = this._positionChanged(o, e),
      l = n || !Jo(o, s) || a;
    return (
      l &&
        ((this._active = o),
        (r.enabled || r.external) && ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(e, n, i, r) {
    const s = this.options;
    if (e.type === "mouseout") return [];
    if (!r)
      return n.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0
      );
    const o = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
    return s.reverse && o.reverse(), o;
  }
  _positionChanged(e, n) {
    const { caretX: i, caretY: r, options: s } = this,
      o = kr[s.position].call(this, e, n);
    return o !== !1 && (i !== o.x || r !== o.y);
  }
}
M(Ou, "positioners", kr);
var lS = {
    id: "tooltip",
    _element: Ou,
    positioners: kr,
    afterInit(t, e, n) {
      n && (t.tooltip = new Ou({ chart: t, options: n }));
    },
    beforeUpdate(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    reset(t, e, n) {
      t.tooltip && t.tooltip.initialize(n);
    },
    afterDraw(t) {
      const e = t.tooltip;
      if (e && e._willRender()) {
        const n = { tooltip: e };
        if (t.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1) return;
        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
      }
    },
    afterEvent(t, e) {
      if (t.tooltip) {
        const n = e.replay;
        t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: f0,
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  uS = Object.freeze({
    __proto__: null,
    Colors: wk,
    Decimation: Mk,
    Filler: Yk,
    Legend: Gk,
    SubTitle: eS,
    Title: Jk,
    Tooltip: lS,
  });
const cS = (t, e, n, i) => (
  typeof e == "string" ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e })) : isNaN(e) && (n = null), n
);
function dS(t, e, n, i) {
  const r = t.indexOf(e);
  if (r === -1) return cS(t, e, n, i);
  const s = t.lastIndexOf(e);
  return r !== s ? n : r;
}
const fS = (t, e) => (t === null ? null : Pe(Math.round(t), 0, e));
function Rh(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class Tu extends fi {
  constructor(e) {
    super(e), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
  }
  init(e) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, n) {
    if (H(e)) return null;
    const i = this.getLabels();
    return (n = isFinite(n) && i[n] === e ? n : dS(i, e, z(n, e), this._addedLabels)), fS(n, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (e || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const e = this.min,
      n = this.max,
      i = this.options.offset,
      r = [];
    let s = this.getLabels();
    (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
      (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let o = e; o <= n; o++) r.push({ value: o });
    return r;
  }
  getLabelForValue(e) {
    return Rh.call(this, e);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getValueForPixel(e) {
    return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
M(Tu, "id", "category"), M(Tu, "defaults", { ticks: { callback: Rh } });
function hS(t, e) {
  const n = [],
    { bounds: r, step: s, min: o, max: a, precision: l, count: u, maxTicks: c, maxDigits: d, includeBounds: f } = t,
    h = s || 1,
    m = c - 1,
    { min: y, max: x } = e,
    g = !H(o),
    p = !H(a),
    v = !H(u),
    _ = (x - y) / (d + 1);
  let w = Cf((x - y) / m / h) * h,
    P,
    k,
    S,
    D;
  if (w < 1e-14 && !g && !p) return [{ value: y }, { value: x }];
  (D = Math.ceil(x / w) - Math.floor(y / w)),
    D > m && (w = Cf((D * w) / m / h) * h),
    H(l) || ((P = Math.pow(10, l)), (w = Math.ceil(w * P) / P)),
    r === "ticks" ? ((k = Math.floor(y / w) * w), (S = Math.ceil(x / w) * w)) : ((k = y), (S = x)),
    g && p && s && l_((a - o) / s, w / 1e3)
      ? ((D = Math.round(Math.min((a - o) / w, c))), (w = (a - o) / D), (k = o), (S = a))
      : v
      ? ((k = g ? o : k), (S = p ? a : S), (D = u - 1), (w = (S - k) / D))
      : ((D = (S - k) / w), Ar(D, Math.round(D), w / 1e3) ? (D = Math.round(D)) : (D = Math.ceil(D)));
  const O = Math.max(Ef(w), Ef(k));
  (P = Math.pow(10, H(l) ? O : l)), (k = Math.round(k * P) / P), (S = Math.round(S * P) / P);
  let N = 0;
  for (
    g &&
    (f && k !== o
      ? (n.push({ value: o }), k < o && N++, Ar(Math.round((k + N * w) * P) / P, o, Nh(o, _, t)) && N++)
      : k < o && N++);
    N < D;
    ++N
  ) {
    const I = Math.round((k + N * w) * P) / P;
    if (p && I > a) break;
    n.push({ value: I });
  }
  return (
    p && f && S !== a
      ? n.length && Ar(n[n.length - 1].value, a, Nh(a, _, t))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!p || S === a) && n.push({ value: S }),
    n
  );
}
function Nh(t, e, { horizontal: n, minRotation: i }) {
  const r = xt(i),
    s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    o = 0.75 * e * ("" + t).length;
  return Math.min(e / s, o);
}
class oa extends fi {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    return H(e) || ((typeof e == "number" || e instanceof Number) && !isFinite(+e)) ? null : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: s } = this;
    const o = (l) => (r = n ? r : l),
      a = (l) => (s = i ? s : l);
    if (e) {
      const l = Ft(r),
        u = Ft(s);
      l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && o(0);
    }
    if (r === s) {
      let l = s === 0 ? 1 : Math.abs(s * 0.05);
      a(s + l), e || o(r - l);
    }
    (this.min = r), (this.max = s);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = e,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      n = e.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = hS(r, s);
    return (
      e.bounds === "ticks" && bm(o, this, "value"),
      e.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const e = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const r = (i - n) / Math.max(e.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(e) {
    return _s(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class Lu extends oa {
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = he(e) ? e : 0), (this.max = he(n) ? n : 1), this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      n = e ? this.width : this.height,
      i = xt(this.options.ticks.minRotation),
      r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / r));
  }
  getPixelForValue(e) {
    return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
M(Lu, "id", "linear"), M(Lu, "defaults", { ticks: { callback: Ca.formatters.numeric } });
const ds = (t) => Math.floor(mn(t)),
  Bn = (t, e) => Math.pow(10, ds(t) + e);
function Ah(t) {
  return t / Math.pow(10, ds(t)) === 1;
}
function Fh(t, e, n) {
  const i = Math.pow(10, n),
    r = Math.floor(t / i);
  return Math.ceil(e / i) - r;
}
function pS(t, e) {
  const n = e - t;
  let i = ds(n);
  for (; Fh(t, e, i) > 10; ) i++;
  for (; Fh(t, e, i) < 10; ) i--;
  return Math.min(i, ds(t));
}
function gS(t, { min: e, max: n }) {
  e = Je(t.min, e);
  const i = [],
    r = ds(e);
  let s = pS(e, n),
    o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
  const a = Math.pow(10, s),
    l = r > s ? Math.pow(10, r) : 0,
    u = Math.round((e - l) * o) / o,
    c = Math.floor((e - l) / a / 10) * a * 10;
  let d = Math.floor((u - c) / Math.pow(10, s)),
    f = Je(t.min, Math.round((l + c + d * Math.pow(10, s)) * o) / o);
  for (; f < n; )
    i.push({ value: f, major: Ah(f), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (s++, (d = 2), (o = s >= 0 ? 1 : o)),
      (f = Math.round((l + c + d * Math.pow(10, s)) * o) / o);
  const h = Je(t.max, f);
  return i.push({ value: h, major: Ah(h), significand: d }), i;
}
class Ru extends fi {
  constructor(e) {
    super(e), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._valueRange = 0);
  }
  parse(e, n) {
    const i = oa.prototype.parse.apply(this, [e, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return he(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = he(e) ? Math.max(0, e) : null),
      (this.max = he(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !he(this._userMin) &&
        (this.min = e === Bn(this.min, 0) ? Bn(this.min, -1) : Bn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      r = this.max;
    const s = (a) => (i = e ? i : a),
      o = (a) => (r = n ? r : a);
    i === r && (i <= 0 ? (s(1), o(10)) : (s(Bn(i, -1)), o(Bn(r, 1)))),
      i <= 0 && s(Bn(r, -1)),
      r <= 0 && o(Bn(i, 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const e = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = gS(n, this);
    return (
      e.bounds === "ticks" && bm(i, this, "value"),
      e.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(e) {
    return e === void 0 ? "0" : _s(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(), (this._startValue = mn(e)), (this._valueRange = mn(this.max) - mn(e));
  }
  getPixelForValue(e) {
    return (
      (e === void 0 || e === 0) && (e = this.min),
      e === null || isNaN(e)
        ? NaN
        : this.getPixelForDecimal(e === this.min ? 0 : (mn(e) - this._startValue) / this._valueRange)
    );
  }
  getValueForPixel(e) {
    const n = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
M(Ru, "id", "logarithmic"),
  M(Ru, "defaults", { ticks: { callback: Ca.formatters.logarithmic, major: { enabled: !0 } } });
function Nu(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const n = je(e.backdropPadding);
    return z(e.font && e.font.size, pe.font.size) + n.height;
  }
  return 0;
}
function mS(t, e, n) {
  return (n = ae(n) ? n : [n]), { w: M_(t, e.string, n), h: n.length * e.lineHeight };
}
function Ih(t, e, n, i, r) {
  return t === i || t === r
    ? { start: e - n / 2, end: e + n / 2 }
    : t < i || t > r
    ? { start: e - n, end: e }
    : { start: e, end: e + n };
}
function yS(t) {
  const e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom,
    },
    n = Object.assign({}, e),
    i = [],
    r = [],
    s = t._pointLabels.length,
    o = t.options.pointLabels,
    a = o.centerPointLabels ? se / s : 0;
  for (let l = 0; l < s; l++) {
    const u = o.setContext(t.getPointLabelContext(l));
    r[l] = u.padding;
    const c = t.getPointPosition(l, t.drawingArea + r[l], a),
      d = Se(u.font),
      f = mS(t.ctx, d, t._pointLabels[l]);
    i[l] = f;
    const h = tt(t.getIndexAngle(l) + a),
      m = Math.round(jc(h)),
      y = Ih(m, c.x, f.w, 0, 180),
      x = Ih(m, c.y, f.h, 90, 270);
    vS(n, e, h, y, x);
  }
  t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b), (t._pointLabelItems = wS(t, i, r));
}
function vS(t, e, n, i, r) {
  const s = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  i.start < e.l
    ? ((a = (e.l - i.start) / s), (t.l = Math.min(t.l, e.l - a)))
    : i.end > e.r && ((a = (i.end - e.r) / s), (t.r = Math.max(t.r, e.r + a))),
    r.start < e.t
      ? ((l = (e.t - r.start) / o), (t.t = Math.min(t.t, e.t - l)))
      : r.end > e.b && ((l = (r.end - e.b) / o), (t.b = Math.max(t.b, e.b + l)));
}
function xS(t, e, n) {
  const i = t.drawingArea,
    { extra: r, additionalAngle: s, padding: o, size: a } = n,
    l = t.getPointPosition(e, i + r + o, s),
    u = Math.round(jc(tt(l.angle + ye))),
    c = SS(l.y, a.h, u),
    d = bS(u),
    f = kS(l.x, a.w, d);
  return { visible: !0, x: l.x, y: c, textAlign: d, left: f, top: c, right: f + a.w, bottom: c + a.h };
}
function _S(t, e) {
  if (!e) return !0;
  const { left: n, top: i, right: r, bottom: s } = t;
  return !(Kt({ x: n, y: i }, e) || Kt({ x: n, y: s }, e) || Kt({ x: r, y: i }, e) || Kt({ x: r, y: s }, e));
}
function wS(t, e, n) {
  const i = [],
    r = t._pointLabels.length,
    s = t.options,
    { centerPointLabels: o, display: a } = s.pointLabels,
    l = { extra: Nu(s) / 2, additionalAngle: o ? se / r : 0 };
  let u;
  for (let c = 0; c < r; c++) {
    (l.padding = n[c]), (l.size = e[c]);
    const d = xS(t, c, l);
    i.push(d), a === "auto" && ((d.visible = _S(d, u)), d.visible && (u = d));
  }
  return i;
}
function bS(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function kS(t, e, n) {
  return n === "right" ? (t -= e) : n === "center" && (t -= e / 2), t;
}
function SS(t, e, n) {
  return n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
}
function MS(t, e, n) {
  const { left: i, top: r, right: s, bottom: o } = n,
    { backdropColor: a } = e;
  if (!H(a)) {
    const l = ei(e.borderRadius),
      u = je(e.backdropPadding);
    t.fillStyle = a;
    const c = i - u.left,
      d = r - u.top,
      f = s - i + u.width,
      h = o - r + u.height;
    Object.values(l).some((m) => m !== 0)
      ? (t.beginPath(), us(t, { x: c, y: d, w: f, h, radius: l }), t.fill())
      : t.fillRect(c, d, f, h);
  }
}
function PS(t, e) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = t;
  for (let r = e - 1; r >= 0; r--) {
    const s = t._pointLabelItems[r];
    if (!s.visible) continue;
    const o = i.setContext(t.getPointLabelContext(r));
    MS(n, o, s);
    const a = Se(o.font),
      { x: l, y: u, textAlign: c } = s;
    li(n, t._pointLabels[r], l, u + a.lineHeight / 2, a, { color: o.color, textAlign: c, textBaseline: "middle" });
  }
}
function h0(t, e, n, i) {
  const { ctx: r } = t;
  if (n) r.arc(t.xCenter, t.yCenter, e, 0, re);
  else {
    let s = t.getPointPosition(0, e);
    r.moveTo(s.x, s.y);
    for (let o = 1; o < i; o++) (s = t.getPointPosition(o, e)), r.lineTo(s.x, s.y);
  }
}
function CS(t, e, n, i, r) {
  const s = t.ctx,
    o = e.circular,
    { color: a, lineWidth: l } = e;
  (!o && !i) ||
    !a ||
    !l ||
    n < 0 ||
    (s.save(),
    (s.strokeStyle = a),
    (s.lineWidth = l),
    s.setLineDash(r.dash),
    (s.lineDashOffset = r.dashOffset),
    s.beginPath(),
    h0(t, n, o, i),
    s.closePath(),
    s.stroke(),
    s.restore());
}
function ES(t, e, n) {
  return In(t, { label: n, index: e, type: "pointLabel" });
}
class Sr extends oa {
  constructor(e) {
    super(e),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const e = (this._padding = je(Nu(this.options) / 2)),
      n = (this.width = this.maxWidth - e.width),
      i = (this.height = this.maxHeight - e.height);
    (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!1);
    (this.min = he(e) && !isNaN(e) ? e : 0), (this.max = he(n) && !isNaN(n) ? n : 0), this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Nu(this.options));
  }
  generateTickLabels(e) {
    oa.prototype.generateTickLabels.call(this, e),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = G(this.options.pointLabels.callback, [n, i], this);
          return r || r === 0 ? r : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display ? yS(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, n, i, r) {
    (this.xCenter += Math.floor((e - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, i, r)));
  }
  getIndexAngle(e) {
    const n = re / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return tt(e * n + xt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (H(e)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
  }
  getValueForDistanceFromCenter(e) {
    if (H(e)) return NaN;
    const n = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(e) {
    const n = this._pointLabels || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return ES(this.getContext(), e, i);
    }
  }
  getPointPosition(e, n, i = 0) {
    const r = this.getIndexAngle(e) - ye + i;
    return { x: Math.cos(r) * n + this.xCenter, y: Math.sin(r) * n + this.yCenter, angle: r };
  }
  getPointPositionForValue(e, n) {
    return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(e) {
    return this.getPointPositionForValue(e || 0, this.getBaseValue());
  }
  getPointLabelPosition(e) {
    const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[e];
    return { left: n, top: i, right: r, bottom: s };
  }
  drawBackground() {
    const {
      backgroundColor: e,
      grid: { circular: n },
    } = this.options;
    if (e) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        h0(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = e),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const e = this.ctx,
      n = this.options,
      { angleLines: i, grid: r, border: s } = n,
      o = this._pointLabels.length;
    let a, l, u;
    if (
      (n.pointLabels.display && PS(this, o),
      r.display &&
        this.ticks.forEach((c, d) => {
          if (d !== 0 || (d === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(c.value);
            const f = this.getContext(d),
              h = r.setContext(f),
              m = s.setContext(f);
            CS(this, h, l, o, m);
          }
        }),
      i.display)
    ) {
      for (e.save(), a = o - 1; a >= 0; a--) {
        const c = i.setContext(this.getPointLabelContext(a)),
          { color: d, lineWidth: f } = c;
        !f ||
          !d ||
          ((e.lineWidth = f),
          (e.strokeStyle = d),
          e.setLineDash(c.borderDash),
          (e.lineDashOffset = c.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
          (u = this.getPointPosition(a, l)),
          e.beginPath(),
          e.moveTo(this.xCenter, this.yCenter),
          e.lineTo(u.x, u.y),
          e.stroke());
      }
      e.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const e = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const r = this.getIndexAngle(0);
    let s, o;
    e.save(),
      e.translate(this.xCenter, this.yCenter),
      e.rotate(r),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && this.min >= 0 && !n.reverse) return;
        const u = i.setContext(this.getContext(l)),
          c = Se(u.font);
        if (((s = this.getDistanceFromCenterForValue(this.ticks[l].value)), u.showLabelBackdrop)) {
          (e.font = c.string), (o = e.measureText(a.label).width), (e.fillStyle = u.backdropColor);
          const d = je(u.backdropPadding);
          e.fillRect(-o / 2 - d.left, -s - c.size / 2 - d.top, o + d.width, c.size + d.height);
        }
        li(e, a.label, 0, -s, c, { color: u.color, strokeColor: u.textStrokeColor, strokeWidth: u.textStrokeWidth });
      }),
      e.restore();
  }
  drawTitle() {}
}
M(Sr, "id", "radialLinear"),
  M(Sr, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Ca.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(e) {
        return e;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  M(Sr, "defaultRoutes", { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" }),
  M(Sr, "descriptors", { angleLines: { _fallback: "grid" } });
const Ta = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Xe = Object.keys(Ta);
function zh(t, e) {
  return t - e;
}
function jh(t, e) {
  if (H(e)) return null;
  const n = t._adapter,
    { parser: i, round: r, isoWeekday: s } = t._parseOpts;
  let o = e;
  return (
    typeof i == "function" && (o = i(o)),
    he(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null
      ? null
      : (r && (o = r === "week" && ($i(s) || s === !0) ? n.startOf(o, "isoWeek", s) : n.startOf(o, r)), +o)
  );
}
function Wh(t, e, n, i) {
  const r = Xe.length;
  for (let s = Xe.indexOf(t); s < r - 1; ++s) {
    const o = Ta[Xe[s]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - e) / (a * o.size)) <= i) return Xe[s];
  }
  return Xe[r - 1];
}
function DS(t, e, n, i, r) {
  for (let s = Xe.length - 1; s >= Xe.indexOf(n); s--) {
    const o = Xe[s];
    if (Ta[o].common && t._adapter.diff(r, i, o) >= e - 1) return o;
  }
  return Xe[n ? Xe.indexOf(n) : 0];
}
function OS(t) {
  for (let e = Xe.indexOf(t) + 1, n = Xe.length; e < n; ++e) if (Ta[Xe[e]].common) return Xe[e];
}
function Bh(t, e, n) {
  if (!n) t[e] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = Wc(n, e),
      s = n[i] >= e ? n[i] : n[r];
    t[s] = !0;
  }
}
function TS(t, e, n, i) {
  const r = t._adapter,
    s = +r.startOf(e[0].value, i),
    o = e[e.length - 1].value;
  let a, l;
  for (a = s; a <= o; a = +r.add(a, 1, i)) (l = n[a]), l >= 0 && (e[l].major = !0);
  return e;
}
function Hh(t, e, n) {
  const i = [],
    r = {},
    s = e.length;
  let o, a;
  for (o = 0; o < s; ++o) (a = e[o]), (r[a] = o), i.push({ value: a, major: !1 });
  return s === 0 || !n ? i : TS(t, i, r, n);
}
class fs extends fi {
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, n = {}) {
    const i = e.time || (e.time = {}),
      r = (this._adapter = new Qm._date(e.adapters.date));
    r.init(n),
      Nr(i.displayFormats, r.formats()),
      (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
      super.init(e),
      (this._normalized = n.normalized);
  }
  parse(e, n) {
    return e === void 0 ? null : jh(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      n = this._adapter,
      i = e.time.unit || "day";
    let { min: r, max: s, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(u) {
      !o && !isNaN(u.min) && (r = Math.min(r, u.min)), !a && !isNaN(u.max) && (s = Math.max(s, u.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(!1))),
      (r = he(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (s = he(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, s - 1)),
      (this.max = Math.max(r + 1, s));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const e = this.options,
      n = e.time,
      i = e.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]));
    const s = this.min,
      o = this.max,
      a = f_(r, s, o);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Wh(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : DS(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : OS(this._unit)),
      this.initOffsets(r),
      e.reverse && a.reverse(),
      Hh(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0,
      i = 0,
      r,
      s;
    this.options.offset &&
      e.length &&
      ((r = this.getDecimalForValue(e[0])),
      e.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(e[1]) - r) / 2),
      (s = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1 ? (i = s) : (i = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
    const o = e.length < 3 ? 0.5 : 0.25;
    (n = Pe(n, 0, o)), (i = Pe(i, 0, o)), (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const e = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      s = r.time,
      o = s.unit || Wh(s.minUnit, n, i, this._getLabelCapacity(n)),
      a = z(r.ticks.stepSize, 1),
      l = o === "week" ? s.isoWeekday : !1,
      u = $i(l) || l === !0,
      c = {};
    let d = n,
      f,
      h;
    if ((u && (d = +e.startOf(d, "isoWeek", l)), (d = +e.startOf(d, u ? "day" : o)), e.diff(i, n, o) > 1e5 * a))
      throw new Error(n + " and " + i + " are too far apart with stepSize of " + a + " " + o);
    const m = r.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, h = 0; f < i; f = +e.add(f, a, o), h++) Bh(c, f, m);
    return (
      (f === i || r.bounds === "ticks" || h === 1) && Bh(c, f, m),
      Object.keys(c)
        .sort(zh)
        .map((y) => +y)
    );
  }
  getLabelForValue(e) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat ? n.format(e, i.tooltipFormat) : n.format(e, i.displayFormats.datetime);
  }
  format(e, n) {
    const r = this.options.time.displayFormats,
      s = this._unit,
      o = n || r[s];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, n, i, r) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return G(o, [e, n, i], this);
    const a = s.time.displayFormats,
      l = this._unit,
      u = this._majorUnit,
      c = l && a[l],
      d = u && a[u],
      f = i[n],
      h = u && d && f && f.major;
    return this._adapter.format(e, r || (h ? d : c));
  }
  generateTickLabels(e) {
    let n, i, r;
    for (n = 0, i = e.length; n < i; ++n) (r = e[n]), (r.label = this._tickFormatFunction(r.value, n, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets,
      i = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks,
      i = this.ctx.measureText(e).width,
      r = xt(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(r),
      o = Math.sin(r),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * s + a * o, h: i * o + a * s };
  }
  _getLabelCapacity(e) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      s = this._tickFormatFunction(e, 0, Hh(this, [e], this._majorUnit), r),
      o = this._getLabelSize(s),
      a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      n,
      i;
    if (e.length) return e;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length) return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n) e = e.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, i;
    if (e.length) return e;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) e.push(jh(this, r[n]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return Mm(e.sort(zh));
  }
}
M(fs, "id", "time"),
  M(fs, "defaults", {
    bounds: "data",
    adapters: {},
    time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function no(t, e, n) {
  let i = 0,
    r = t.length - 1,
    s,
    o,
    a,
    l;
  n
    ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = qt(t, "pos", e)),
      ({ pos: s, time: a } = t[i]),
      ({ pos: o, time: l } = t[r]))
    : (e >= t[i].time && e <= t[r].time && ({ lo: i, hi: r } = qt(t, "time", e)),
      ({ time: s, pos: a } = t[i]),
      ({ time: o, pos: l } = t[r]));
  const u = o - s;
  return u ? a + ((l - a) * (e - s)) / u : a;
}
class Au extends fs {
  constructor(e) {
    super(e), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(e));
    (this._minPos = no(n, this.min)), (this._tableRange = no(n, this.max) - this._minPos), super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: i } = this,
      r = [],
      s = [];
    let o, a, l, u, c;
    for (o = 0, a = e.length; o < a; ++o) (u = e[o]), u >= n && u <= i && r.push(u);
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, a = r.length; o < a; ++o)
      (c = r[o + 1]),
        (l = r[o - 1]),
        (u = r[o]),
        Math.round((c + l) / 2) !== u && s.push({ time: u, pos: o / (a - 1) });
    return s;
  }
  _generate() {
    const e = this.min,
      n = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(e) || !i.length) && i.splice(0, 0, e),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((r, s) => r - s)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length ? (e = this.normalize(n.concat(i))) : (e = n.length ? n : i), (e = this._cache.all = e), e
    );
  }
  getDecimalForValue(e) {
    return (no(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return no(this._table, i * this._tableRange + this._minPos, !0);
  }
}
M(Au, "id", "timeseries"), M(Au, "defaults", fs.defaults);
var LS = Object.freeze({
  __proto__: null,
  CategoryScale: Tu,
  LinearScale: Lu,
  LogarithmicScale: Ru,
  RadialLinearScale: Sr,
  TimeScale: fs,
  TimeSeriesScale: Au,
});
const RS = [Ww, gk, uS, LS];
Yt.register(...RS);
function A(t) {
  const e = Object.prototype.toString.call(t);
  return t instanceof Date || (typeof t == "object" && e === "[object Date]")
    ? new t.constructor(+t)
    : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]"
    ? new Date(t)
    : new Date(NaN);
}
function ne(t, e) {
  return t instanceof Date ? new t.constructor(e) : new Date(e);
}
function La(t, e) {
  const n = A(t);
  return isNaN(e) ? ne(t, NaN) : (e && n.setDate(n.getDate() + e), n);
}
function Zc(t, e) {
  const n = A(t);
  if (isNaN(e)) return ne(t, NaN);
  if (!e) return n;
  const i = n.getDate(),
    r = ne(t, n.getTime());
  r.setMonth(n.getMonth() + e + 1, 0);
  const s = r.getDate();
  return i >= s ? r : (n.setFullYear(r.getFullYear(), r.getMonth(), i), n);
}
function Ra(t, e) {
  const n = +A(t);
  return ne(t, n + e);
}
const p0 = 6048e5,
  NS = 864e5,
  bs = 6e4,
  ks = 36e5,
  AS = 1e3;
function FS(t, e) {
  return Ra(t, e * ks);
}
let IS = {};
function hi() {
  return IS;
}
function It(t, e) {
  var a, l, u, c;
  const n = hi(),
    i =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((l = (a = e == null ? void 0 : e.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ??
      0,
    r = A(t),
    s = r.getDay(),
    o = (s < i ? 7 : 0) + s - i;
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r;
}
function Qi(t) {
  return It(t, { weekStartsOn: 1 });
}
function g0(t) {
  const e = A(t),
    n = e.getFullYear(),
    i = ne(t, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const r = Qi(i),
    s = ne(t, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = Qi(s);
  return e.getTime() >= r.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1;
}
function Fu(t) {
  const e = A(t);
  return e.setHours(0, 0, 0, 0), e;
}
function aa(t) {
  const e = A(t),
    n = new Date(
      Date.UTC(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        e.getMinutes(),
        e.getSeconds(),
        e.getMilliseconds()
      )
    );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function m0(t, e) {
  const n = Fu(t),
    i = Fu(e),
    r = +n - aa(n),
    s = +i - aa(i);
  return Math.round((r - s) / NS);
}
function zS(t) {
  const e = g0(t),
    n = ne(t, 0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), Qi(n);
}
function jS(t, e) {
  return Ra(t, e * bs);
}
function WS(t, e) {
  const n = e * 3;
  return Zc(t, n);
}
function BS(t, e) {
  return Ra(t, e * 1e3);
}
function HS(t, e) {
  const n = e * 7;
  return La(t, n);
}
function VS(t, e) {
  return Zc(t, e * 12);
}
function jr(t, e) {
  const n = A(t),
    i = A(e),
    r = n.getTime() - i.getTime();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function $S(t) {
  return t instanceof Date || (typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]");
}
function y0(t) {
  if (!$S(t) && typeof t != "number") return !1;
  const e = A(t);
  return !isNaN(Number(e));
}
function YS(t, e) {
  const n = A(t),
    i = A(e),
    r = n.getFullYear() - i.getFullYear(),
    s = n.getMonth() - i.getMonth();
  return r * 12 + s;
}
function US(t, e) {
  const n = A(t),
    i = A(e);
  return n.getFullYear() - i.getFullYear();
}
function v0(t, e) {
  const n = A(t),
    i = A(e),
    r = Vh(n, i),
    s = Math.abs(m0(n, i));
  n.setDate(n.getDate() - r * s);
  const o = +(Vh(n, i) === -r),
    a = r * (s - o);
  return a === 0 ? 0 : a;
}
function Vh(t, e) {
  const n =
    t.getFullYear() - e.getFullYear() ||
    t.getMonth() - e.getMonth() ||
    t.getDate() - e.getDate() ||
    t.getHours() - e.getHours() ||
    t.getMinutes() - e.getMinutes() ||
    t.getSeconds() - e.getSeconds() ||
    t.getMilliseconds() - e.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function Ss(t) {
  return (e) => {
    const n = Math.trunc,
      i = n(e);
    return i === 0 ? 0 : i;
  };
}
function Na(t, e) {
  return +A(t) - +A(e);
}
function QS(t, e, n) {
  const i = Na(t, e) / ks;
  return Ss()(i);
}
function XS(t, e, n) {
  const i = Na(t, e) / bs;
  return Ss()(i);
}
function x0(t) {
  const e = A(t);
  return e.setHours(23, 59, 59, 999), e;
}
function _0(t) {
  const e = A(t),
    n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function qS(t) {
  const e = A(t);
  return +x0(e) == +_0(e);
}
function w0(t, e) {
  const n = A(t),
    i = A(e),
    r = jr(n, i),
    s = Math.abs(YS(n, i));
  let o;
  if (s < 1) o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - r * s);
    let a = jr(n, i) === -r;
    qS(A(t)) && s === 1 && jr(t, i) === 1 && (a = !1), (o = r * (s - Number(a)));
  }
  return o === 0 ? 0 : o;
}
function KS(t, e, n) {
  const i = w0(t, e) / 3;
  return Ss()(i);
}
function GS(t, e, n) {
  const i = Na(t, e) / 1e3;
  return Ss()(i);
}
function ZS(t, e, n) {
  const i = v0(t, e) / 7;
  return Ss()(i);
}
function JS(t, e) {
  const n = A(t),
    i = A(e),
    r = jr(n, i),
    s = Math.abs(US(n, i));
  n.setFullYear(1584), i.setFullYear(1584);
  const o = jr(n, i) === -r,
    a = r * (s - +o);
  return a === 0 ? 0 : a;
}
function eM(t) {
  const e = A(t);
  return e.setSeconds(0, 0), e;
}
function tM(t) {
  const e = A(t),
    n = e.getMonth(),
    i = n - (n % 3);
  return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
}
function nM(t) {
  const e = A(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function iM(t) {
  const e = A(t),
    n = e.getFullYear();
  return e.setFullYear(n + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
function b0(t) {
  const e = A(t),
    n = ne(t, 0);
  return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function rM(t) {
  const e = A(t);
  return e.setMinutes(59, 59, 999), e;
}
function sM(t, e) {
  var a, l;
  const n = hi(),
    i = n.weekStartsOn ?? ((l = (a = n.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ?? 0,
    r = A(t),
    s = r.getDay(),
    o = (s < i ? -7 : 0) + 6 - (s - i);
  return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r;
}
function oM(t) {
  const e = A(t);
  return e.setSeconds(59, 999), e;
}
function aM(t) {
  const e = A(t),
    n = e.getMonth(),
    i = n - (n % 3) + 3;
  return e.setMonth(i, 0), e.setHours(23, 59, 59, 999), e;
}
function lM(t) {
  const e = A(t);
  return e.setMilliseconds(999), e;
}
const uM = {
    lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  cM = (t, e, n) => {
    let i;
    const r = uM[t];
    return (
      typeof r == "string" ? (i = r) : e === 1 ? (i = r.one) : (i = r.other.replace("{{count}}", e.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + i : i + " ago") : i
    );
  };
function wl(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const dM = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
  fM = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
  hM = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  pM = {
    date: wl({ formats: dM, defaultWidth: "full" }),
    time: wl({ formats: fM, defaultWidth: "full" }),
    dateTime: wl({ formats: hM, defaultWidth: "full" }),
  },
  gM = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  mM = (t, e, n, i) => gM[t];
function fr(t) {
  return (e, n) => {
    const i = n != null && n.context ? String(n.context) : "standalone";
    let r;
    if (i === "formatting" && t.formattingValues) {
      const o = t.defaultFormattingWidth || t.defaultWidth,
        a = n != null && n.width ? String(n.width) : o;
      r = t.formattingValues[a] || t.formattingValues[o];
    } else {
      const o = t.defaultWidth,
        a = n != null && n.width ? String(n.width) : t.defaultWidth;
      r = t.values[a] || t.values[o];
    }
    const s = t.argumentCallback ? t.argumentCallback(e) : e;
    return r[s];
  };
}
const yM = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] },
  vM = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  xM = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  _M = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  wM = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  bM = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  kM = (t, e) => {
    const n = Number(t),
      i = n % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  SM = {
    ordinalNumber: kM,
    era: fr({ values: yM, defaultWidth: "wide" }),
    quarter: fr({ values: vM, defaultWidth: "wide", argumentCallback: (t) => t - 1 }),
    month: fr({ values: xM, defaultWidth: "wide" }),
    day: fr({ values: _M, defaultWidth: "wide" }),
    dayPeriod: fr({ values: wM, defaultWidth: "wide", formattingValues: bM, defaultFormattingWidth: "wide" }),
  };
function hr(t) {
  return (e, n = {}) => {
    const i = n.width,
      r = (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
      s = e.match(r);
    if (!s) return null;
    const o = s[0],
      a = (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth],
      l = Array.isArray(a) ? PM(a, (d) => d.test(o)) : MM(a, (d) => d.test(o));
    let u;
    (u = t.valueCallback ? t.valueCallback(l) : l), (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = e.slice(o.length);
    return { value: u, rest: c };
  };
}
function MM(t, e) {
  for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return n;
}
function PM(t, e) {
  for (let n = 0; n < t.length; n++) if (e(t[n])) return n;
}
function CM(t) {
  return (e, n = {}) => {
    const i = e.match(t.matchPattern);
    if (!i) return null;
    const r = i[0],
      s = e.match(t.parsePattern);
    if (!s) return null;
    let o = t.valueCallback ? t.valueCallback(s[0]) : s[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const a = e.slice(r.length);
    return { value: o, rest: a };
  };
}
const EM = /^(\d+)(th|st|nd|rd)?/i,
  DM = /\d+/i,
  OM = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  TM = { any: [/^b/i, /^(a|c)/i] },
  LM = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  RM = { any: [/1/i, /2/i, /3/i, /4/i] },
  NM = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  AM = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  FM = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  IM = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  zM = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  jM = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  WM = {
    ordinalNumber: CM({ matchPattern: EM, parsePattern: DM, valueCallback: (t) => parseInt(t, 10) }),
    era: hr({ matchPatterns: OM, defaultMatchWidth: "wide", parsePatterns: TM, defaultParseWidth: "any" }),
    quarter: hr({
      matchPatterns: LM,
      defaultMatchWidth: "wide",
      parsePatterns: RM,
      defaultParseWidth: "any",
      valueCallback: (t) => t + 1,
    }),
    month: hr({ matchPatterns: NM, defaultMatchWidth: "wide", parsePatterns: AM, defaultParseWidth: "any" }),
    day: hr({ matchPatterns: FM, defaultMatchWidth: "wide", parsePatterns: IM, defaultParseWidth: "any" }),
    dayPeriod: hr({ matchPatterns: zM, defaultMatchWidth: "any", parsePatterns: jM, defaultParseWidth: "any" }),
  },
  k0 = {
    code: "en-US",
    formatDistance: cM,
    formatLong: pM,
    formatRelative: mM,
    localize: SM,
    match: WM,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function BM(t) {
  const e = A(t);
  return m0(e, b0(e)) + 1;
}
function S0(t) {
  const e = A(t),
    n = +Qi(e) - +zS(e);
  return Math.round(n / p0) + 1;
}
function Jc(t, e) {
  var c, d, f, h;
  const n = A(t),
    i = n.getFullYear(),
    r = hi(),
    s =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((d = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((h = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ??
      1,
    o = ne(t, 0);
  o.setFullYear(i + 1, 0, s), o.setHours(0, 0, 0, 0);
  const a = It(o, e),
    l = ne(t, 0);
  l.setFullYear(i, 0, s), l.setHours(0, 0, 0, 0);
  const u = It(l, e);
  return n.getTime() >= a.getTime() ? i + 1 : n.getTime() >= u.getTime() ? i : i - 1;
}
function HM(t, e) {
  var a, l, u, c;
  const n = hi(),
    i =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((l = (a = e == null ? void 0 : e.locale) == null ? void 0 : a.options) == null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ??
      1,
    r = Jc(t, e),
    s = ne(t, 0);
  return s.setFullYear(r, 0, i), s.setHours(0, 0, 0, 0), It(s, e);
}
function M0(t, e) {
  const n = A(t),
    i = +It(n, e) - +HM(n, e);
  return Math.round(i / p0) + 1;
}
function Y(t, e) {
  const n = t < 0 ? "-" : "",
    i = Math.abs(t).toString().padStart(e, "0");
  return n + i;
}
const on = {
    y(t, e) {
      const n = t.getFullYear(),
        i = n > 0 ? n : 1 - n;
      return Y(e === "yy" ? i % 100 : i, e.length);
    },
    M(t, e) {
      const n = t.getMonth();
      return e === "M" ? String(n + 1) : Y(n + 1, 2);
    },
    d(t, e) {
      return Y(t.getDate(), e.length);
    },
    a(t, e) {
      const n = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(t, e) {
      return Y(t.getHours() % 12 || 12, e.length);
    },
    H(t, e) {
      return Y(t.getHours(), e.length);
    },
    m(t, e) {
      return Y(t.getMinutes(), e.length);
    },
    s(t, e) {
      return Y(t.getSeconds(), e.length);
    },
    S(t, e) {
      const n = e.length,
        i = t.getMilliseconds(),
        r = Math.trunc(i * Math.pow(10, n - 3));
      return Y(r, e.length);
    },
  },
  yi = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  $h = {
    G: function (t, e, n) {
      const i = t.getFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(i, { width: "abbreviated" });
        case "GGGGG":
          return n.era(i, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(i, { width: "wide" });
      }
    },
    y: function (t, e, n) {
      if (e === "yo") {
        const i = t.getFullYear(),
          r = i > 0 ? i : 1 - i;
        return n.ordinalNumber(r, { unit: "year" });
      }
      return on.y(t, e);
    },
    Y: function (t, e, n, i) {
      const r = Jc(t, i),
        s = r > 0 ? r : 1 - r;
      if (e === "YY") {
        const o = s % 100;
        return Y(o, 2);
      }
      return e === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Y(s, e.length);
    },
    R: function (t, e) {
      const n = g0(t);
      return Y(n, e.length);
    },
    u: function (t, e) {
      const n = t.getFullYear();
      return Y(n, e.length);
    },
    Q: function (t, e, n) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(i);
        case "QQ":
          return Y(i, 2);
        case "Qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return n.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(i, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, e, n) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(i);
        case "qq":
          return Y(i, 2);
        case "qo":
          return n.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return n.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(i, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, e, n) {
      const i = t.getMonth();
      switch (e) {
        case "M":
        case "MM":
          return on.M(t, e);
        case "Mo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return n.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(i, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, e, n) {
      const i = t.getMonth();
      switch (e) {
        case "L":
          return String(i + 1);
        case "LL":
          return Y(i + 1, 2);
        case "Lo":
          return n.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return n.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(i, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, e, n, i) {
      const r = M0(t, i);
      return e === "wo" ? n.ordinalNumber(r, { unit: "week" }) : Y(r, e.length);
    },
    I: function (t, e, n) {
      const i = S0(t);
      return e === "Io" ? n.ordinalNumber(i, { unit: "week" }) : Y(i, e.length);
    },
    d: function (t, e, n) {
      return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : on.d(t, e);
    },
    D: function (t, e, n) {
      const i = BM(t);
      return e === "Do" ? n.ordinalNumber(i, { unit: "dayOfYear" }) : Y(i, e.length);
    },
    E: function (t, e, n) {
      const i = t.getDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(i, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, e, n, i) {
      const r = t.getDay(),
        s = (r - i.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(s);
        case "ee":
          return Y(s, 2);
        case "eo":
          return n.ordinalNumber(s, { unit: "day" });
        case "eee":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(r, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, e, n, i) {
      const r = t.getDay(),
        s = (r - i.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(s);
        case "cc":
          return Y(s, e.length);
        case "co":
          return n.ordinalNumber(s, { unit: "day" });
        case "ccc":
          return n.day(r, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(r, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(r, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(r, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, e, n) {
      const i = t.getDay(),
        r = i === 0 ? 7 : i;
      switch (e) {
        case "i":
          return String(r);
        case "ii":
          return Y(r, e.length);
        case "io":
          return n.ordinalNumber(r, { unit: "day" });
        case "iii":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(i, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, e, n) {
      const r = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "aaa":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, e, n) {
      const i = t.getHours();
      let r;
      switch ((i === 12 ? (r = yi.noon) : i === 0 ? (r = yi.midnight) : (r = i / 12 >= 1 ? "pm" : "am"), e)) {
        case "b":
        case "bb":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "bbb":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, e, n) {
      const i = t.getHours();
      let r;
      switch (
        (i >= 17 ? (r = yi.evening) : i >= 12 ? (r = yi.afternoon) : i >= 4 ? (r = yi.morning) : (r = yi.night), e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "BBBBB":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, e, n) {
      if (e === "ho") {
        let i = t.getHours() % 12;
        return i === 0 && (i = 12), n.ordinalNumber(i, { unit: "hour" });
      }
      return on.h(t, e);
    },
    H: function (t, e, n) {
      return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : on.H(t, e);
    },
    K: function (t, e, n) {
      const i = t.getHours() % 12;
      return e === "Ko" ? n.ordinalNumber(i, { unit: "hour" }) : Y(i, e.length);
    },
    k: function (t, e, n) {
      let i = t.getHours();
      return i === 0 && (i = 24), e === "ko" ? n.ordinalNumber(i, { unit: "hour" }) : Y(i, e.length);
    },
    m: function (t, e, n) {
      return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : on.m(t, e);
    },
    s: function (t, e, n) {
      return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : on.s(t, e);
    },
    S: function (t, e) {
      return on.S(t, e);
    },
    X: function (t, e, n) {
      const i = t.getTimezoneOffset();
      if (i === 0) return "Z";
      switch (e) {
        case "X":
          return Uh(i);
        case "XXXX":
        case "XX":
          return Un(i);
        case "XXXXX":
        case "XXX":
        default:
          return Un(i, ":");
      }
    },
    x: function (t, e, n) {
      const i = t.getTimezoneOffset();
      switch (e) {
        case "x":
          return Uh(i);
        case "xxxx":
        case "xx":
          return Un(i);
        case "xxxxx":
        case "xxx":
        default:
          return Un(i, ":");
      }
    },
    O: function (t, e, n) {
      const i = t.getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Yh(i, ":");
        case "OOOO":
        default:
          return "GMT" + Un(i, ":");
      }
    },
    z: function (t, e, n) {
      const i = t.getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Yh(i, ":");
        case "zzzz":
        default:
          return "GMT" + Un(i, ":");
      }
    },
    t: function (t, e, n) {
      const i = Math.trunc(t.getTime() / 1e3);
      return Y(i, e.length);
    },
    T: function (t, e, n) {
      const i = t.getTime();
      return Y(i, e.length);
    },
  };
function Yh(t, e = "") {
  const n = t > 0 ? "-" : "+",
    i = Math.abs(t),
    r = Math.trunc(i / 60),
    s = i % 60;
  return s === 0 ? n + String(r) : n + String(r) + e + Y(s, 2);
}
function Uh(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + Y(Math.abs(t) / 60, 2) : Un(t, e);
}
function Un(t, e = "") {
  const n = t > 0 ? "-" : "+",
    i = Math.abs(t),
    r = Y(Math.trunc(i / 60), 2),
    s = Y(i % 60, 2);
  return n + r + e + s;
}
const Qh = (t, e) => {
    switch (t) {
      case "P":
        return e.date({ width: "short" });
      case "PP":
        return e.date({ width: "medium" });
      case "PPP":
        return e.date({ width: "long" });
      case "PPPP":
      default:
        return e.date({ width: "full" });
    }
  },
  P0 = (t, e) => {
    switch (t) {
      case "p":
        return e.time({ width: "short" });
      case "pp":
        return e.time({ width: "medium" });
      case "ppp":
        return e.time({ width: "long" });
      case "pppp":
      default:
        return e.time({ width: "full" });
    }
  },
  VM = (t, e) => {
    const n = t.match(/(P+)(p+)?/) || [],
      i = n[1],
      r = n[2];
    if (!r) return Qh(t, e);
    let s;
    switch (i) {
      case "P":
        s = e.dateTime({ width: "short" });
        break;
      case "PP":
        s = e.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = e.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = e.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", Qh(i, e)).replace("{{time}}", P0(r, e));
  },
  Iu = { p: P0, P: VM },
  $M = /^D+$/,
  YM = /^Y+$/,
  UM = ["D", "DD", "YY", "YYYY"];
function C0(t) {
  return $M.test(t);
}
function E0(t) {
  return YM.test(t);
}
function zu(t, e, n) {
  const i = QM(t, e, n);
  if ((console.warn(i), UM.includes(t))) throw new RangeError(i);
}
function QM(t, e, n) {
  const i = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const XM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  qM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  KM = /^'([^]*?)'?$/,
  GM = /''/g,
  ZM = /[a-zA-Z]/;
function JM(t, e, n) {
  var c, d, f, h, m, y, x, g;
  const i = hi(),
    r = (n == null ? void 0 : n.locale) ?? i.locale ?? k0,
    s =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((h = (f = i.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ??
      1,
    o =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((y = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : y.weekStartsOn) ??
      i.weekStartsOn ??
      ((g = (x = i.locale) == null ? void 0 : x.options) == null ? void 0 : g.weekStartsOn) ??
      0,
    a = A(t);
  if (!y0(a)) throw new RangeError("Invalid time value");
  let l = e
    .match(qM)
    .map((p) => {
      const v = p[0];
      if (v === "p" || v === "P") {
        const _ = Iu[v];
        return _(p, r.formatLong);
      }
      return p;
    })
    .join("")
    .match(XM)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const v = p[0];
      if (v === "'") return { isToken: !1, value: eP(p) };
      if ($h[v]) return { isToken: !0, value: p };
      if (v.match(ZM)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + v + "`");
      return { isToken: !1, value: p };
    });
  r.localize.preprocessor && (l = r.localize.preprocessor(a, l));
  const u = { firstWeekContainsDate: s, weekStartsOn: o, locale: r };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const v = p.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && E0(v)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && C0(v))) &&
        zu(v, e, String(t));
      const _ = $h[v[0]];
      return _(a, v, r.localize, u);
    })
    .join("");
}
function eP(t) {
  const e = t.match(KM);
  return e ? e[1].replace(GM, "'") : t;
}
function tP() {
  return Object.assign({}, hi());
}
function nP(t) {
  let n = A(t).getDay();
  return n === 0 && (n = 7), n;
}
function iP(t, e) {
  const n = e instanceof Date ? ne(e, 0) : new e(0);
  return (
    n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
    n.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()),
    n
  );
}
const rP = 10;
class D0 {
  constructor() {
    M(this, "subPriority", 0);
  }
  validate(e, n) {
    return !0;
  }
}
class sP extends D0 {
  constructor(e, n, i, r, s) {
    super(),
      (this.value = e),
      (this.validateValue = n),
      (this.setValue = i),
      (this.priority = r),
      s && (this.subPriority = s);
  }
  validate(e, n) {
    return this.validateValue(e, this.value, n);
  }
  set(e, n, i) {
    return this.setValue(e, n, this.value, i);
  }
}
class oP extends D0 {
  constructor() {
    super(...arguments);
    M(this, "priority", rP);
    M(this, "subPriority", -1);
  }
  set(n, i) {
    return i.timestampIsSet ? n : ne(n, iP(n, Date));
  }
}
class V {
  run(e, n, i, r) {
    const s = this.parse(e, n, i, r);
    return s
      ? { setter: new sP(s.value, this.validate, this.set, this.priority, this.subPriority), rest: s.rest }
      : null;
  }
  validate(e, n, i) {
    return !0;
  }
}
class aP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 140);
    M(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" }) || r.era(n, { width: "narrow" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" }) || r.era(n, { width: "abbreviated" }) || r.era(n, { width: "narrow" });
    }
  }
  set(n, i, r) {
    return (i.era = r), n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const ve = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  Lt = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function xe(t, e) {
  return t && { value: e(t.value), rest: t.rest };
}
function ue(t, e) {
  const n = e.match(t);
  return n ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) } : null;
}
function Rt(t, e) {
  const n = e.match(t);
  if (!n) return null;
  if (n[0] === "Z") return { value: 0, rest: e.slice(1) };
  const i = n[1] === "+" ? 1 : -1,
    r = n[2] ? parseInt(n[2], 10) : 0,
    s = n[3] ? parseInt(n[3], 10) : 0,
    o = n[5] ? parseInt(n[5], 10) : 0;
  return { value: i * (r * ks + s * bs + o * AS), rest: e.slice(n[0].length) };
}
function O0(t) {
  return ue(ve.anyDigitsSigned, t);
}
function ge(t, e) {
  switch (t) {
    case 1:
      return ue(ve.singleDigit, e);
    case 2:
      return ue(ve.twoDigits, e);
    case 3:
      return ue(ve.threeDigits, e);
    case 4:
      return ue(ve.fourDigits, e);
    default:
      return ue(new RegExp("^\\d{1," + t + "}"), e);
  }
}
function la(t, e) {
  switch (t) {
    case 1:
      return ue(ve.singleDigitSigned, e);
    case 2:
      return ue(ve.twoDigitsSigned, e);
    case 3:
      return ue(ve.threeDigitsSigned, e);
    case 4:
      return ue(ve.fourDigitsSigned, e);
    default:
      return ue(new RegExp("^-?\\d{1," + t + "}"), e);
  }
}
function ed(t) {
  switch (t) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function T0(t, e) {
  const n = e > 0,
    i = n ? e : 1 - e;
  let r;
  if (i <= 50) r = t || 100;
  else {
    const s = i + 50,
      o = Math.trunc(s / 100) * 100,
      a = t >= s % 100;
    r = t + o - (a ? 100 : 0);
  }
  return n ? r : 1 - r;
}
function L0(t) {
  return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
}
class lP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 130);
    M(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    const s = (o) => ({ year: o, isTwoDigitYear: i === "yy" });
    switch (i) {
      case "y":
        return xe(ge(4, n), s);
      case "yo":
        return xe(r.ordinalNumber(n, { unit: "year" }), s);
      default:
        return xe(ge(i.length, n), s);
    }
  }
  validate(n, i) {
    return i.isTwoDigitYear || i.year > 0;
  }
  set(n, i, r) {
    const s = n.getFullYear();
    if (r.isTwoDigitYear) {
      const a = T0(r.year, s);
      return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const o = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
    return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class uP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 130);
    M(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(n, i, r) {
    const s = (o) => ({ year: o, isTwoDigitYear: i === "YY" });
    switch (i) {
      case "Y":
        return xe(ge(4, n), s);
      case "Yo":
        return xe(r.ordinalNumber(n, { unit: "year" }), s);
      default:
        return xe(ge(i.length, n), s);
    }
  }
  validate(n, i) {
    return i.isTwoDigitYear || i.year > 0;
  }
  set(n, i, r, s) {
    const o = Jc(n, s);
    if (r.isTwoDigitYear) {
      const l = T0(r.year, o);
      return n.setFullYear(l, 0, s.firstWeekContainsDate), n.setHours(0, 0, 0, 0), It(n, s);
    }
    const a = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
    return n.setFullYear(a, 0, s.firstWeekContainsDate), n.setHours(0, 0, 0, 0), It(n, s);
  }
}
class cP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 130);
    M(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(n, i) {
    return la(i === "R" ? 4 : i.length, n);
  }
  set(n, i, r) {
    const s = ne(n, 0);
    return s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0), Qi(s);
  }
}
class dP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 130);
    M(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, i) {
    return la(i === "u" ? 4 : i.length, n);
  }
  set(n, i, r) {
    return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class fP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 120);
    M(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "Q":
      case "QQ":
        return ge(i.length, n);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return (
          r.quarter(n, { width: "abbreviated", context: "formatting" }) ||
          r.quarter(n, { width: "narrow", context: "formatting" })
        );
      case "QQQQQ":
        return r.quarter(n, { width: "narrow", context: "formatting" });
      case "QQQQ":
      default:
        return (
          r.quarter(n, { width: "wide", context: "formatting" }) ||
          r.quarter(n, { width: "abbreviated", context: "formatting" }) ||
          r.quarter(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 4;
  }
  set(n, i, r) {
    return n.setMonth((r - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class hP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 120);
    M(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "q":
      case "qq":
        return ge(i.length, n);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return (
          r.quarter(n, { width: "abbreviated", context: "standalone" }) ||
          r.quarter(n, { width: "narrow", context: "standalone" })
        );
      case "qqqqq":
        return r.quarter(n, { width: "narrow", context: "standalone" });
      case "qqqq":
      default:
        return (
          r.quarter(n, { width: "wide", context: "standalone" }) ||
          r.quarter(n, { width: "abbreviated", context: "standalone" }) ||
          r.quarter(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 4;
  }
  set(n, i, r) {
    return n.setMonth((r - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class pP extends V {
  constructor() {
    super(...arguments);
    M(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    M(this, "priority", 110);
  }
  parse(n, i, r) {
    const s = (o) => o - 1;
    switch (i) {
      case "M":
        return xe(ue(ve.month, n), s);
      case "MM":
        return xe(ge(2, n), s);
      case "Mo":
        return xe(r.ordinalNumber(n, { unit: "month" }), s);
      case "MMM":
        return (
          r.month(n, { width: "abbreviated", context: "formatting" }) ||
          r.month(n, { width: "narrow", context: "formatting" })
        );
      case "MMMMM":
        return r.month(n, { width: "narrow", context: "formatting" });
      case "MMMM":
      default:
        return (
          r.month(n, { width: "wide", context: "formatting" }) ||
          r.month(n, { width: "abbreviated", context: "formatting" }) ||
          r.month(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 11;
  }
  set(n, i, r) {
    return n.setMonth(r, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class gP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 110);
    M(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    const s = (o) => o - 1;
    switch (i) {
      case "L":
        return xe(ue(ve.month, n), s);
      case "LL":
        return xe(ge(2, n), s);
      case "Lo":
        return xe(r.ordinalNumber(n, { unit: "month" }), s);
      case "LLL":
        return (
          r.month(n, { width: "abbreviated", context: "standalone" }) ||
          r.month(n, { width: "narrow", context: "standalone" })
        );
      case "LLLLL":
        return r.month(n, { width: "narrow", context: "standalone" });
      case "LLLL":
      default:
        return (
          r.month(n, { width: "wide", context: "standalone" }) ||
          r.month(n, { width: "abbreviated", context: "standalone" }) ||
          r.month(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 11;
  }
  set(n, i, r) {
    return n.setMonth(r, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function mP(t, e, n) {
  const i = A(t),
    r = M0(i, n) - e;
  return i.setDate(i.getDate() - r * 7), i;
}
class yP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 100);
    M(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "w":
        return ue(ve.week, n);
      case "wo":
        return r.ordinalNumber(n, { unit: "week" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 53;
  }
  set(n, i, r, s) {
    return It(mP(n, r, s), s);
  }
}
function vP(t, e) {
  const n = A(t),
    i = S0(n) - e;
  return n.setDate(n.getDate() - i * 7), n;
}
class xP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 100);
    M(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "I":
        return ue(ve.week, n);
      case "Io":
        return r.ordinalNumber(n, { unit: "week" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 53;
  }
  set(n, i, r) {
    return Qi(vP(n, r));
  }
}
const _P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  wP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class bP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "subPriority", 1);
    M(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "d":
        return ue(ve.date, n);
      case "do":
        return r.ordinalNumber(n, { unit: "date" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    const r = n.getFullYear(),
      s = L0(r),
      o = n.getMonth();
    return s ? i >= 1 && i <= wP[o] : i >= 1 && i <= _P[o];
  }
  set(n, i, r) {
    return n.setDate(r), n.setHours(0, 0, 0, 0), n;
  }
}
class kP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "subpriority", 1);
    M(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "D":
      case "DD":
        return ue(ve.dayOfYear, n);
      case "Do":
        return r.ordinalNumber(n, { unit: "date" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    const r = n.getFullYear();
    return L0(r) ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
  }
  set(n, i, r) {
    return n.setMonth(0, r), n.setHours(0, 0, 0, 0), n;
  }
}
function td(t, e, n) {
  var d, f, h, m;
  const i = hi(),
    r =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ??
      i.weekStartsOn ??
      ((m = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ??
      0,
    s = A(t),
    o = s.getDay(),
    l = ((e % 7) + 7) % 7,
    u = 7 - r,
    c = e < 0 || e > 6 ? e - ((o + u) % 7) : ((l + u) % 7) - ((o + u) % 7);
  return La(s, c);
}
class SP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "E":
      case "EE":
      case "EEE":
        return (
          r.day(n, { width: "abbreviated", context: "formatting" }) ||
          r.day(n, { width: "short", context: "formatting" }) ||
          r.day(n, { width: "narrow", context: "formatting" })
        );
      case "EEEEE":
        return r.day(n, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return (
          r.day(n, { width: "short", context: "formatting" }) || r.day(n, { width: "narrow", context: "formatting" })
        );
      case "EEEE":
      default:
        return (
          r.day(n, { width: "wide", context: "formatting" }) ||
          r.day(n, { width: "abbreviated", context: "formatting" }) ||
          r.day(n, { width: "short", context: "formatting" }) ||
          r.day(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 6;
  }
  set(n, i, r, s) {
    return (n = td(n, r, s)), n.setHours(0, 0, 0, 0), n;
  }
}
class MP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
  }
  parse(n, i, r, s) {
    const o = (a) => {
      const l = Math.floor((a - 1) / 7) * 7;
      return ((a + s.weekStartsOn + 6) % 7) + l;
    };
    switch (i) {
      case "e":
      case "ee":
        return xe(ge(i.length, n), o);
      case "eo":
        return xe(r.ordinalNumber(n, { unit: "day" }), o);
      case "eee":
        return (
          r.day(n, { width: "abbreviated", context: "formatting" }) ||
          r.day(n, { width: "short", context: "formatting" }) ||
          r.day(n, { width: "narrow", context: "formatting" })
        );
      case "eeeee":
        return r.day(n, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return (
          r.day(n, { width: "short", context: "formatting" }) || r.day(n, { width: "narrow", context: "formatting" })
        );
      case "eeee":
      default:
        return (
          r.day(n, { width: "wide", context: "formatting" }) ||
          r.day(n, { width: "abbreviated", context: "formatting" }) ||
          r.day(n, { width: "short", context: "formatting" }) ||
          r.day(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 6;
  }
  set(n, i, r, s) {
    return (n = td(n, r, s)), n.setHours(0, 0, 0, 0), n;
  }
}
class PP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
  }
  parse(n, i, r, s) {
    const o = (a) => {
      const l = Math.floor((a - 1) / 7) * 7;
      return ((a + s.weekStartsOn + 6) % 7) + l;
    };
    switch (i) {
      case "c":
      case "cc":
        return xe(ge(i.length, n), o);
      case "co":
        return xe(r.ordinalNumber(n, { unit: "day" }), o);
      case "ccc":
        return (
          r.day(n, { width: "abbreviated", context: "standalone" }) ||
          r.day(n, { width: "short", context: "standalone" }) ||
          r.day(n, { width: "narrow", context: "standalone" })
        );
      case "ccccc":
        return r.day(n, { width: "narrow", context: "standalone" });
      case "cccccc":
        return (
          r.day(n, { width: "short", context: "standalone" }) || r.day(n, { width: "narrow", context: "standalone" })
        );
      case "cccc":
      default:
        return (
          r.day(n, { width: "wide", context: "standalone" }) ||
          r.day(n, { width: "abbreviated", context: "standalone" }) ||
          r.day(n, { width: "short", context: "standalone" }) ||
          r.day(n, { width: "narrow", context: "standalone" })
        );
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 6;
  }
  set(n, i, r, s) {
    return (n = td(n, r, s)), n.setHours(0, 0, 0, 0), n;
  }
}
function CP(t, e) {
  const n = A(t),
    i = nP(n),
    r = e - i;
  return La(n, r);
}
class EP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 90);
    M(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
  }
  parse(n, i, r) {
    const s = (o) => (o === 0 ? 7 : o);
    switch (i) {
      case "i":
      case "ii":
        return ge(i.length, n);
      case "io":
        return r.ordinalNumber(n, { unit: "day" });
      case "iii":
        return xe(
          r.day(n, { width: "abbreviated", context: "formatting" }) ||
            r.day(n, { width: "short", context: "formatting" }) ||
            r.day(n, { width: "narrow", context: "formatting" }),
          s
        );
      case "iiiii":
        return xe(r.day(n, { width: "narrow", context: "formatting" }), s);
      case "iiiiii":
        return xe(
          r.day(n, { width: "short", context: "formatting" }) || r.day(n, { width: "narrow", context: "formatting" }),
          s
        );
      case "iiii":
      default:
        return xe(
          r.day(n, { width: "wide", context: "formatting" }) ||
            r.day(n, { width: "abbreviated", context: "formatting" }) ||
            r.day(n, { width: "short", context: "formatting" }) ||
            r.day(n, { width: "narrow", context: "formatting" }),
          s
        );
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 7;
  }
  set(n, i, r) {
    return (n = CP(n, r)), n.setHours(0, 0, 0, 0), n;
  }
}
class DP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 80);
    M(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "a":
      case "aa":
      case "aaa":
        return (
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "aaaaa":
        return r.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "aaaa":
      default:
        return (
          r.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, i, r) {
    return n.setHours(ed(r), 0, 0, 0), n;
  }
}
class OP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 80);
    M(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "b":
      case "bb":
      case "bbb":
        return (
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "bbbbb":
        return r.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "bbbb":
      default:
        return (
          r.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, i, r) {
    return n.setHours(ed(r), 0, 0, 0), n;
  }
}
class TP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 80);
    M(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "B":
      case "BB":
      case "BBB":
        return (
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
      case "BBBBB":
        return r.dayPeriod(n, { width: "narrow", context: "formatting" });
      case "BBBB":
      default:
        return (
          r.dayPeriod(n, { width: "wide", context: "formatting" }) ||
          r.dayPeriod(n, { width: "abbreviated", context: "formatting" }) ||
          r.dayPeriod(n, { width: "narrow", context: "formatting" })
        );
    }
  }
  set(n, i, r) {
    return n.setHours(ed(r), 0, 0, 0), n;
  }
}
class LP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 70);
    M(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "h":
        return ue(ve.hour12h, n);
      case "ho":
        return r.ordinalNumber(n, { unit: "hour" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 12;
  }
  set(n, i, r) {
    const s = n.getHours() >= 12;
    return (
      s && r < 12 ? n.setHours(r + 12, 0, 0, 0) : !s && r === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(r, 0, 0, 0), n
    );
  }
}
class RP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 70);
    M(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "H":
        return ue(ve.hour23h, n);
      case "Ho":
        return r.ordinalNumber(n, { unit: "hour" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 23;
  }
  set(n, i, r) {
    return n.setHours(r, 0, 0, 0), n;
  }
}
class NP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 70);
    M(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "K":
        return ue(ve.hour11h, n);
      case "Ko":
        return r.ordinalNumber(n, { unit: "hour" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 11;
  }
  set(n, i, r) {
    return n.getHours() >= 12 && r < 12 ? n.setHours(r + 12, 0, 0, 0) : n.setHours(r, 0, 0, 0), n;
  }
}
class AP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 70);
    M(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "k":
        return ue(ve.hour24h, n);
      case "ko":
        return r.ordinalNumber(n, { unit: "hour" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 1 && i <= 24;
  }
  set(n, i, r) {
    const s = r <= 24 ? r % 24 : r;
    return n.setHours(s, 0, 0, 0), n;
  }
}
class FP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 60);
    M(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "m":
        return ue(ve.minute, n);
      case "mo":
        return r.ordinalNumber(n, { unit: "minute" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 59;
  }
  set(n, i, r) {
    return n.setMinutes(r, 0, 0), n;
  }
}
class IP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 50);
    M(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, i, r) {
    switch (i) {
      case "s":
        return ue(ve.second, n);
      case "so":
        return r.ordinalNumber(n, { unit: "second" });
      default:
        return ge(i.length, n);
    }
  }
  validate(n, i) {
    return i >= 0 && i <= 59;
  }
  set(n, i, r) {
    return n.setSeconds(r, 0), n;
  }
}
class zP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 30);
    M(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, i) {
    const r = (s) => Math.trunc(s * Math.pow(10, -i.length + 3));
    return xe(ge(i.length, n), r);
  }
  set(n, i, r) {
    return n.setMilliseconds(r), n;
  }
}
class jP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 10);
    M(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, i) {
    switch (i) {
      case "X":
        return Rt(Lt.basicOptionalMinutes, n);
      case "XX":
        return Rt(Lt.basic, n);
      case "XXXX":
        return Rt(Lt.basicOptionalSeconds, n);
      case "XXXXX":
        return Rt(Lt.extendedOptionalSeconds, n);
      case "XXX":
      default:
        return Rt(Lt.extended, n);
    }
  }
  set(n, i, r) {
    return i.timestampIsSet ? n : ne(n, n.getTime() - aa(n) - r);
  }
}
class WP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 10);
    M(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, i) {
    switch (i) {
      case "x":
        return Rt(Lt.basicOptionalMinutes, n);
      case "xx":
        return Rt(Lt.basic, n);
      case "xxxx":
        return Rt(Lt.basicOptionalSeconds, n);
      case "xxxxx":
        return Rt(Lt.extendedOptionalSeconds, n);
      case "xxx":
      default:
        return Rt(Lt.extended, n);
    }
  }
  set(n, i, r) {
    return i.timestampIsSet ? n : ne(n, n.getTime() - aa(n) - r);
  }
}
class BP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 40);
    M(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return O0(n);
  }
  set(n, i, r) {
    return [ne(n, r * 1e3), { timestampIsSet: !0 }];
  }
}
class HP extends V {
  constructor() {
    super(...arguments);
    M(this, "priority", 20);
    M(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return O0(n);
  }
  set(n, i, r) {
    return [ne(n, r), { timestampIsSet: !0 }];
  }
}
const VP = {
    G: new aP(),
    y: new lP(),
    Y: new uP(),
    R: new cP(),
    u: new dP(),
    Q: new fP(),
    q: new hP(),
    M: new pP(),
    L: new gP(),
    w: new yP(),
    I: new xP(),
    d: new bP(),
    D: new kP(),
    E: new SP(),
    e: new MP(),
    c: new PP(),
    i: new EP(),
    a: new DP(),
    b: new OP(),
    B: new TP(),
    h: new LP(),
    H: new RP(),
    K: new NP(),
    k: new AP(),
    m: new FP(),
    s: new IP(),
    S: new zP(),
    X: new jP(),
    x: new WP(),
    t: new BP(),
    T: new HP(),
  },
  $P = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  YP = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  UP = /^'([^]*?)'?$/,
  QP = /''/g,
  XP = /\S/,
  qP = /[a-zA-Z]/;
function KP(t, e, n, i) {
  var y, x, g, p, v, _, w, P;
  const r = tP(),
    s = (i == null ? void 0 : i.locale) ?? r.locale ?? k0,
    o =
      (i == null ? void 0 : i.firstWeekContainsDate) ??
      ((x = (y = i == null ? void 0 : i.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((p = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : p.firstWeekContainsDate) ??
      1,
    a =
      (i == null ? void 0 : i.weekStartsOn) ??
      ((_ = (v = i == null ? void 0 : i.locale) == null ? void 0 : v.options) == null ? void 0 : _.weekStartsOn) ??
      r.weekStartsOn ??
      ((P = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : P.weekStartsOn) ??
      0;
  if (e === "") return t === "" ? A(n) : ne(n, NaN);
  const l = { firstWeekContainsDate: o, weekStartsOn: a, locale: s },
    u = [new oP()],
    c = e
      .match(YP)
      .map((k) => {
        const S = k[0];
        if (S in Iu) {
          const D = Iu[S];
          return D(k, s.formatLong);
        }
        return k;
      })
      .join("")
      .match($P),
    d = [];
  for (let k of c) {
    !(i != null && i.useAdditionalWeekYearTokens) && E0(k) && zu(k, e, t),
      !(i != null && i.useAdditionalDayOfYearTokens) && C0(k) && zu(k, e, t);
    const S = k[0],
      D = VP[S];
    if (D) {
      const { incompatibleTokens: O } = D;
      if (Array.isArray(O)) {
        const I = d.find((q) => O.includes(q.token) || q.token === S);
        if (I)
          throw new RangeError(`The format string mustn't contain \`${I.fullToken}\` and \`${k}\` at the same time`);
      } else if (D.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(`The format string mustn't contain \`${k}\` and any other token at the same time`);
      d.push({ token: S, fullToken: k });
      const N = D.run(t, k, s.match, l);
      if (!N) return ne(n, NaN);
      u.push(N.setter), (t = N.rest);
    } else {
      if (S.match(qP)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + S + "`");
      if ((k === "''" ? (k = "'") : S === "'" && (k = GP(k)), t.indexOf(k) === 0)) t = t.slice(k.length);
      else return ne(n, NaN);
    }
  }
  if (t.length > 0 && XP.test(t)) return ne(n, NaN);
  const f = u
    .map((k) => k.priority)
    .sort((k, S) => S - k)
    .filter((k, S, D) => D.indexOf(k) === S)
    .map((k) => u.filter((S) => S.priority === k).sort((S, D) => D.subPriority - S.subPriority))
    .map((k) => k[0]);
  let h = A(n);
  if (isNaN(h.getTime())) return ne(n, NaN);
  const m = {};
  for (const k of f) {
    if (!k.validate(h, l)) return ne(n, NaN);
    const S = k.set(h, m, l);
    Array.isArray(S) ? ((h = S[0]), Object.assign(m, S[1])) : (h = S);
  }
  return ne(n, h);
}
function GP(t) {
  return t.match(UP)[1].replace(QP, "'");
}
function ZP(t) {
  const e = A(t);
  return e.setMinutes(0, 0, 0), e;
}
function JP(t) {
  const e = A(t);
  return e.setMilliseconds(0), e;
}
function eC(t, e) {
  const n = (e == null ? void 0 : e.additionalDigits) ?? 2,
    i = rC(t);
  let r;
  if (i.date) {
    const l = sC(i.date, n);
    r = oC(l.restDateString, l.year);
  }
  if (!r || isNaN(r.getTime())) return new Date(NaN);
  const s = r.getTime();
  let o = 0,
    a;
  if (i.time && ((o = aC(i.time)), isNaN(o))) return new Date(NaN);
  if (i.timezone) {
    if (((a = lC(i.timezone)), isNaN(a))) return new Date(NaN);
  } else {
    const l = new Date(s + o),
      u = new Date(0);
    return (
      u.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()),
      u.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()),
      u
    );
  }
  return new Date(s + o + a);
}
const io = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ },
  tC = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  nC = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  iC = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function rC(t) {
  const e = {},
    n = t.split(io.dateTimeDelimiter);
  let i;
  if (n.length > 2) return e;
  if (
    (/:/.test(n[0])
      ? (i = n[0])
      : ((e.date = n[0]),
        (i = n[1]),
        io.timeZoneDelimiter.test(e.date) &&
          ((e.date = t.split(io.timeZoneDelimiter)[0]), (i = t.substr(e.date.length, t.length)))),
    i)
  ) {
    const r = io.timezone.exec(i);
    r ? ((e.time = i.replace(r[1], "")), (e.timezone = r[1])) : (e.time = i);
  }
  return e;
}
function sC(t, e) {
  const n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + e) + "})|(\\d{2}|[+-]\\d{" + (2 + e) + "})$)"),
    i = t.match(n);
  if (!i) return { year: NaN, restDateString: "" };
  const r = i[1] ? parseInt(i[1]) : null,
    s = i[2] ? parseInt(i[2]) : null;
  return { year: s === null ? r : s * 100, restDateString: t.slice((i[1] || i[2]).length) };
}
function oC(t, e) {
  if (e === null) return new Date(NaN);
  const n = t.match(tC);
  if (!n) return new Date(NaN);
  const i = !!n[4],
    r = pr(n[1]),
    s = pr(n[2]) - 1,
    o = pr(n[3]),
    a = pr(n[4]),
    l = pr(n[5]) - 1;
  if (i) return hC(e, a, l) ? uC(e, a, l) : new Date(NaN);
  {
    const u = new Date(0);
    return !dC(e, s, o) || !fC(e, r) ? new Date(NaN) : (u.setUTCFullYear(e, s, Math.max(r, o)), u);
  }
}
function pr(t) {
  return t ? parseInt(t) : 1;
}
function aC(t) {
  const e = t.match(nC);
  if (!e) return NaN;
  const n = bl(e[1]),
    i = bl(e[2]),
    r = bl(e[3]);
  return pC(n, i, r) ? n * ks + i * bs + r * 1e3 : NaN;
}
function bl(t) {
  return (t && parseFloat(t.replace(",", "."))) || 0;
}
function lC(t) {
  if (t === "Z") return 0;
  const e = t.match(iC);
  if (!e) return 0;
  const n = e[1] === "+" ? -1 : 1,
    i = parseInt(e[2]),
    r = (e[3] && parseInt(e[3])) || 0;
  return gC(i, r) ? n * (i * ks + r * bs) : NaN;
}
function uC(t, e, n) {
  const i = new Date(0);
  i.setUTCFullYear(t, 0, 4);
  const r = i.getUTCDay() || 7,
    s = (e - 1) * 7 + n + 1 - r;
  return i.setUTCDate(i.getUTCDate() + s), i;
}
const cC = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function R0(t) {
  return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
}
function dC(t, e, n) {
  return e >= 0 && e <= 11 && n >= 1 && n <= (cC[e] || (R0(t) ? 29 : 28));
}
function fC(t, e) {
  return e >= 1 && e <= (R0(t) ? 366 : 365);
}
function hC(t, e, n) {
  return e >= 1 && e <= 53 && n >= 0 && n <= 6;
}
function pC(t, e, n) {
  return t === 24 ? e === 0 && n === 0 : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
}
function gC(t, e) {
  return e >= 0 && e <= 59;
}
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */ const mC = {
  datetime: "MMM d, yyyy, h:mm:ss aaaa",
  millisecond: "h:mm:ss.SSS aaaa",
  second: "h:mm:ss aaaa",
  minute: "h:mm aaaa",
  hour: "ha",
  day: "MMM d",
  week: "PP",
  month: "MMM yyyy",
  quarter: "qqq - yyyy",
  year: "yyyy",
};
Qm._date.override({
  _id: "date-fns",
  formats: function () {
    return mC;
  },
  parse: function (t, e) {
    if (t === null || typeof t > "u") return null;
    const n = typeof t;
    return (
      n === "number" || t instanceof Date
        ? (t = A(t))
        : n === "string" &&
          (typeof e == "string" ? (t = KP(t, e, new Date(), this.options)) : (t = eC(t, this.options))),
      y0(t) ? t.getTime() : null
    );
  },
  format: function (t, e) {
    return JM(t, e, this.options);
  },
  add: function (t, e, n) {
    switch (n) {
      case "millisecond":
        return Ra(t, e);
      case "second":
        return BS(t, e);
      case "minute":
        return jS(t, e);
      case "hour":
        return FS(t, e);
      case "day":
        return La(t, e);
      case "week":
        return HS(t, e);
      case "month":
        return Zc(t, e);
      case "quarter":
        return WS(t, e);
      case "year":
        return VS(t, e);
      default:
        return t;
    }
  },
  diff: function (t, e, n) {
    switch (n) {
      case "millisecond":
        return Na(t, e);
      case "second":
        return GS(t, e);
      case "minute":
        return XS(t, e);
      case "hour":
        return QS(t, e);
      case "day":
        return v0(t, e);
      case "week":
        return ZS(t, e);
      case "month":
        return w0(t, e);
      case "quarter":
        return KS(t, e);
      case "year":
        return JS(t, e);
      default:
        return 0;
    }
  },
  startOf: function (t, e, n) {
    switch (e) {
      case "second":
        return JP(t);
      case "minute":
        return eM(t);
      case "hour":
        return ZP(t);
      case "day":
        return Fu(t);
      case "week":
        return It(t);
      case "isoWeek":
        return It(t, { weekStartsOn: +n });
      case "month":
        return nM(t);
      case "quarter":
        return tM(t);
      case "year":
        return b0(t);
      default:
        return t;
    }
  },
  endOf: function (t, e) {
    switch (e) {
      case "second":
        return lM(t);
      case "minute":
        return oM(t);
      case "hour":
        return rM(t);
      case "day":
        return x0(t);
      case "week":
        return sM(t);
      case "month":
        return _0(t);
      case "quarter":
        return aM(t);
      case "year":
        return iM(t);
      default:
        return t;
    }
  },
});
function yC({ dataset: t }) {
  const e = C.useRef(null);
  return (
    console.log(t),
    C.useEffect(() => {
      const n = e.current.getContext("2d"),
        i = new Yt(n, {
          type: "line",
          data: {
            labels: t.map((r) => r.date),
            datasets: [
              {
                label: "Stock Price",
                data: t.map((r) => r.close),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(255, 255, 255, 0)",
                fill: !1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: "time",
                time: { unit: "day" },
                grid: {
                  display: !0,
                  color: "rgba(255,255,255,0.2)",
                  borderWidth: 1,
                  borderColor: "rgba(54, 162, 235, 0.5)",
                  borderDash: [],
                },
              },
              y: {
                beginAtZero: !1,
                grid: {
                  display: !0,
                  color: "rgba(255,255,255,0.2)",
                  borderWidth: 1,
                  borderColor: "rgba(54, 162, 235, 0.5)",
                  borderDash: [],
                },
              },
            },
          },
        });
      return () => {
        i.destroy();
      };
    }, [t]),
    b.jsx("canvas", { ref: e })
  );
}
const vC = "_description_x07gv_75",
  kl = { "info-window": "_info-window_x07gv_1", "info-container": "_info-container_x07gv_65", description: vC };
function xC({ symbol: t }) {
  const [e, n] = C.useState(null),
    [i, r] = C.useState(null),
    s = C.useContext(rn);
  return (
    C.useEffect(() => {
      o(t), a(t);
    }, [t]),
    e === null || i === null
      ? "Loading company data..."
      : b.jsxs("div", {
          className: kl["info-window"],
          children: [
            b.jsx("h1", { children: e.symbol }),
            b.jsx("p", { children: e.companyName }),
            b.jsx("img", { src: e.image, alt: `an image of the company ${e.companyName}` }),
            b.jsx(yC, { dataset: i }),
            b.jsxs("div", {
              className: kl.description,
              children: [b.jsx("h2", { children: "Comapny Description" }), `${e.description}`],
            }),
            b.jsxs("div", {
              className: kl["info-container"],
              children: [
                b.jsxs("p", {
                  children: [b.jsx("strong", { children: "Current stock price:" }), " ", `${e.price} ${e.currency}`],
                }),
                b.jsxs("p", {
                  children: [b.jsx("strong", { children: "Market Cap:" }), " ", `${e.mktCap} ${e.currency}`],
                }),
                b.jsxs("p", { children: [b.jsx("strong", { children: "Exchange:" }), " ", `${e.exchange}`] }),
                b.jsxs("p", { children: [b.jsx("strong", { children: "Industry:" }), " ", `${e.industry}`] }),
                b.jsxs("p", {
                  children: [b.jsx("strong", { children: "Their website:" }), " ", b.jsx("a", { children: e.website })],
                }),
                b.jsxs("p", { children: [b.jsx("strong", { children: "Current CEO:" }), " ", `${e.ceo}`] }),
                b.jsxs("p", {
                  children: [
                    b.jsx("strong", { children: "Location: " }),
                    `${e.country} ${e.address} ${e.city}${e.state}`,
                  ],
                }),
                b.jsxs("p", {
                  children: [b.jsx("strong", { children: "Full-time employees:" }), " ", `${e.fullTimeEmployees}`],
                }),
                b.jsxs("p", { children: [b.jsx("strong", { children: "IPO date:" }), " ", `${e.ipoDate}`] }),
              ],
            }),
          ],
        })
  );
  async function o(l) {
    const u = await fetch(s + "/api/company-profile/" + l, { credentials: "include" });
    l == t &&
      (u.ok ? n(await u.json()) : alert("API used to fetch company profile has limited the data from this company :("));
  }
  async function a(l) {
    const u = await fetch(s + "/api/info/" + l, { credentials: "include" });
    l == t && u.ok && r((await u.json()).historical);
  }
}
function _C() {
  const [t, e] = C.useState([]),
    [n, i] = C.useState(null),
    r = C.useContext(rn);
  function s(c) {
    document.querySelector("[data-modal]").showModal();
  }
  function o(c) {
    document.querySelector("[data-modal]").close();
  }
  async function a(c) {
    if ((await fetch(r + "/api/add-stock/" + c.symbol, { credentials: "include", method: "post" })).ok) {
      let f = !1;
      if (
        (t.forEach((h) => {
          h === c.symbol && (f = !0);
        }),
        f)
      )
        return;
      e((h) => [...h, c.symbol]);
    } else alert("an error has occured when adding the stock");
  }
  async function l() {
    const c = await fetch(r + "/api/stock-list", { credentials: "include" });
    c.ok ? e(await c.json()) : alert("an error has occured when adding the stock");
  }
  async function u(c) {
    (await fetch(r + "/api/delete-stock/" + c, { method: "delete", credentials: "include" })).ok
      ? e((f) => {
          const h = [];
          for (let m = 0; m < f.length; m++) f[m].toUpperCase() !== c.toUpperCase() && h.push(f[m]);
          return h;
        })
      : alert("an error has occured when removing the stock");
  }
  return (
    C.useEffect(() => {
      l();
    }, []),
    b.jsxs("div", {
      className: ll.main,
      children: [
        b.jsxs("aside", {
          className: ll.sidebar,
          children: [
            b.jsxs("ul", {
              children: [
                t.map((c, d) =>
                  b.jsx(
                    "li",
                    {
                      children: b.jsx(S1, {
                        stock: c,
                        remove: () => {
                          u(c);
                        },
                        selected: () => {
                          i(c);
                        },
                      }),
                    },
                    d
                  )
                ),
                b.jsx("button", { onClick: s, children: "+   Add new Stock" }),
              ],
            }),
            b.jsx("dialog", {
              "data-modal": !0,
              className: Ct.modal,
              children: b.jsx(C1, { setChosenStock: a, exit: o }),
            }),
          ],
        }),
        n === null
          ? b.jsx("div", { className: ll["filler-message"], children: "Select a stock to view its profile" })
          : b.jsx(xC, { symbol: n }),
      ],
    })
  );
}
function wC() {
  const t = C.useContext(rn),
    [e, n] = C.useState(!1),
    [i, r] = C.useState(!0),
    s = C.useRef(null),
    o = C.useRef(null),
    a = C.useRef(null);
  async function l(u) {
    u.preventDefault();
    const c = s.current.value,
      d = a.current.value,
      f = o.current.value,
      h = await fetch(t + "/api/change-password", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        method: "put",
        body: JSON.stringify({ email: c, oldpassword: f, newpassword: d }),
      });
    n(!0), h !== null && h.ok ? r(!0) : r(!1);
  }
  return b.jsxs("div", {
    className: Ae.container,
    children: [
      b.jsx("h1", { children: "Change Password:" }),
      b.jsxs("form", {
        className: Ae.form,
        onSubmit: l,
        children: [
          b.jsxs("label", {
            children: ["Email: ", b.jsx("input", { type: "email", name: "email", ref: s, required: !0 })],
          }),
          b.jsxs("label", {
            children: [
              "Old password: ",
              b.jsx("input", { type: "password", name: "oldpassword", ref: o, required: !0 }),
            ],
          }),
          b.jsxs("label", {
            children: [
              "New password: ",
              b.jsx("input", { type: "password", name: "newpassword", ref: a, required: !0 }),
            ],
          }),
          b.jsx("button", { className: Ae["submit-button"], type: "submit", children: "Change password" }),
        ],
      }),
      e
        ? i
          ? b.jsx("p", { children: "Password changed" })
          : b.jsx("p", { className: Ae["error-message"], children: "Password not changed" })
        : null,
    ],
  });
}
const bC = "_container_1df8k_1",
  kC = "_email_1df8k_19",
  SC = "_pfp_1df8k_25",
  ro = { container: bC, email: kC, pfp: SC, "logout-button": "_logout-button_1df8k_33" };
function MC() {
  const [t, e] = C.useState("Your email"),
    n = C.useContext(rn),
    i = Zi();
  return (
    C.useEffect(() => {
      async function s() {
        const o = await fetch(n + "/api/email", { credentials: "include" });
        o.ok ? e(await o.text()) : e("Unable to fetch email");
      }
      s();
    }, []),
    b.jsxs("div", {
      className: ro.container,
      children: [
        b.jsx("img", { className: ro.pfp, src: "Default_pfp.svg", alt: "Profile Picture" }),
        b.jsx("p", { className: ro.email, children: t }),
        b.jsx("button", { className: ro["logout-button"], onClick: r, children: "LOGOUT" }),
        b.jsx(wC, {}),
      ],
    })
  );
  async function r() {
    await fetch(n + "/api/logout", { method: "delete", credentials: "include" }), i("/login");
  }
}
const PC = "_container_8brmh_1",
  N0 = { container: PC, "contact-us": "_contact-us_8brmh_19" };
function CC() {
  return b.jsxs("div", {
    className: N0.container,
    children: [
      b.jsx("h1", { children: "About Us" }),
      b.jsx("p", {
        children:
          "Welcome to StockViewr, your ultimate platform for personalized stock management and analysis. At StockViewr, we empower users with robust tools to manage their stock portfolios efficiently and gain deep insights into their investments.",
      }),
      b.jsx("h2", { children: "Our Mission" }),
      b.jsx("p", {
        children:
          "Our mission at StockViewr is to provide a seamless and intuitive experience for managing stocks and gaining valuable insights into stock market trends. We aim to empower every user, from novice investors to seasoned traders, with the tools and information needed to make informed investment decisions.",
      }),
      b.jsx("h2", { children: "What we offer" }),
      b.jsx("p", {
        children:
          "Personalized Stock Management: Easily manage your stock portfolio with our user-friendly interface. Select and organize stocks according to your preferences, and track their performance over time. Comprehensive Stock Analysis: Dive deep into stock performance metrics such as current value, historical trends over the past few years, and other key financial indicators. Our detailed charts and analytics tools provide a clear picture of your investments. User-Friendly Interface: Enjoy a smooth and intuitive experience with our modern and responsive web application. Whether you’re accessing it from your desktop or mobile device, managing your stocks and exploring company information is effortless. Secure and Reliable: Rest assured that your data is secure with our robust session management and login system. We prioritize user privacy and security to ensure a safe environment for managing sensitive financial information.",
      }),
      b.jsx("h2", { children: "How it works" }),
      b.jsx("p", {
        children:
          "Create Your Account: Sign up and create your personalized profile to get started. Manage Your Portfolio: Add and organize stocks that interest you. Our intuitive interface allows you to easily view and track their performance. Gain Insights: Explore detailed stock information including current market value, historical performance, company profiles, and more. Make informed decisions based on comprehensive data analysis. Stay Informed: Receive updates and notifications to stay informed about market trends and changes in your portfolio.",
      }),
      b.jsx("h2", { children: "Get Started" }),
      b.jsx("p", {
        children:
          "Join thousands of users who rely on StockViewr for their stock management and analysis needs. Whether you’re a casual investor or a dedicated trader, we have the tools to help you succeed in the stock market.",
      }),
    ],
  });
}
function EC() {
  return b.jsxs("div", {
    className: N0["contact-us"],
    children: [
      b.jsx("h1", { children: "Contact us" }),
      b.jsx("p", {
        children:
          "Have questions, feedback, or need assistance? We’re here to help! Contact StockViewr using the information below:",
      }),
      b.jsx("h2", { children: "Customer Support" }),
      b.jsxs("p", {
        children: [
          "Email: support@yourwebsitename.com",
          b.jsx("br", {}),
          "Phone: +1 (123) 456-7890",
          b.jsx("br", {}),
          "Hours: Monday - Friday, 9:00 AM to 5:00 PM (EST)",
        ],
      }),
      b.jsx("h2", { children: "Technical Support" }),
      b.jsxs("p", {
        children: [
          "For technical issues or assistance with account management, please contact our technical support team:",
          b.jsx("br", {}),
          "Email: techsupport@yourwebsitename.com",
          b.jsx("br", {}),
          "Phone: +1 (234) 567-8901",
          b.jsx("br", {}),
          "Hours: 24/7 Support Available",
        ],
      }),
      b.jsx("h2", { children: "Sales Inquiries" }),
      b.jsxs("p", {
        children: [
          "Interested in partnership opportunities or enterprise solutions? Contact our sales team for more information:",
          b.jsx("br", {}),
          "Email: sales@yourwebsitename.com",
          b.jsx("br", {}),
          "Phone: +1 (345) 678-9012",
          b.jsx("br", {}),
          "Hours: Monday - Friday, 9:00 AM to 6:00 PM (EST)",
          b.jsx("br", {}),
          "Address: StockViewr 123 Stock Street Finance City, FC 56789 United States",
        ],
      }),
      b.jsx("h2", { children: "Connect With Us" }),
      b.jsxs("p", {
        children: [
          "Follow us on social media to stay updated with the latest news, features, and tips:",
          b.jsx("br", {}),
          "Twitter: @YourWebsiteName",
          b.jsx("br", {}),
          "Facebook: /YourWebsiteName",
          b.jsx("br", {}),
          "LinkedIn: /company/YourWebsiteName",
        ],
      }),
      b.jsx("h2", { children: "Feedback" }),
      b.jsx("p", {
        children:
          "We value your feedback! Let us know how we can improve StockViewr to better serve your needs. Your suggestions are essential in helping us enhance our platform.",
      }),
      b.jsx("h2", { children: "Get In Touch" }),
      b.jsx("p", {
        children:
          "Whether you’re a current user, potential partner, or simply curious about our services, don’t hesitate to reach out. We look forward to hearing from you!",
      }),
    ],
  });
}
const rn = C.createContext();
function DC() {
  return b.jsx(rn.Provider, {
    value: "http://192.168.0.7:8080",
    children: b.jsx(c1, {
      children: b.jsxs(i1, {
        children: [
          b.jsxs(an, {
            path: "/",
            element: b.jsx(_1, {}),
            children: [
              b.jsx(an, { path: "/", element: b.jsx(_C, {}) }),
              b.jsx(an, { path: "profile", element: b.jsx(MC, {}) }),
              b.jsx(an, { path: "aboutus", element: b.jsx(CC, {}) }),
              b.jsx(an, { path: "contactus", element: b.jsx(EC, {}) }),
            ],
          }),
          b.jsx(an, { path: "/login", element: b.jsx(y1, {}) }),
          b.jsx(an, { path: "/signUp", element: b.jsx(w1, {}) }),
        ],
      }),
    }),
  });
}
Sl.createRoot(document.getElementById("root")).render(b.jsx(DC, {}));
