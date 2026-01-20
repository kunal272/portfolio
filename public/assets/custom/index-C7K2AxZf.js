(function () {
    console.log(baseUrl);
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        r(u);
    new MutationObserver((u) => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(u) {
        const f = {};
        return (
            u.integrity && (f.integrity = u.integrity),
            u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
            u.crossOrigin === "use-credentials"
                ? (f.credentials = "include")
                : u.crossOrigin === "anonymous"
                    ? (f.credentials = "omit")
                    : (f.credentials = "same-origin"),
            f
        );
    }
    function r(u) {
        if (u.ep) return;
        u.ep = !0;
        const f = s(u);
        fetch(u.href, f);
    }
})();
function wb(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
}
var dc = { exports: {} },
    Al = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e0;
function Cb() {
    if (e0) return Al;
    e0 = 1;
    var n = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.fragment");
    function s(r, u, f) {
        var d = null;
        if (
            (f !== void 0 && (d = "" + f),
                u.key !== void 0 && (d = "" + u.key),
                "key" in u)
        ) {
            f = {};
            for (var m in u) m !== "key" && (f[m] = u[m]);
        } else f = u;
        return (
            (u = f.ref),
            {
                $$typeof: n,
                type: r,
                key: d,
                ref: u !== void 0 ? u : null,
                props: f,
            }
        );
    }
    return ((Al.Fragment = a), (Al.jsx = s), (Al.jsxs = s), Al);
}
var n0;
function Ab() {
    return (n0 || ((n0 = 1), (dc.exports = Cb())), dc.exports);
}
var v = Ab(),
    hc = { exports: {} },
    ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0;
function jb() {
    if (i0) return ot;
    i0 = 1;
    var n = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        b = Symbol.iterator;
    function S(w) {
        return w === null || typeof w != "object"
            ? null
            : ((w = (b && w[b]) || w["@@iterator"]),
                typeof w == "function" ? w : null);
    }
    var j = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { },
    },
        M = Object.assign,
        H = {};
    function V(w, Y, $) {
        ((this.props = w),
            (this.context = Y),
            (this.refs = H),
            (this.updater = $ || j));
    }
    ((V.prototype.isReactComponent = {}),
        (V.prototype.setState = function (w, Y) {
            if (typeof w != "object" && typeof w != "function" && w != null)
                throw Error(
                    "takes an object of state variables to update or a function which returns an object of state variables.",
                );
            this.updater.enqueueSetState(this, w, Y, "setState");
        }),
        (V.prototype.forceUpdate = function (w) {
            this.updater.enqueueForceUpdate(this, w, "forceUpdate");
        }));
    function U() { }
    U.prototype = V.prototype;
    function O(w, Y, $) {
        ((this.props = w),
            (this.context = Y),
            (this.refs = H),
            (this.updater = $ || j));
    }
    var G = (O.prototype = new U());
    ((G.constructor = O), M(G, V.prototype), (G.isPureReactComponent = !0));
    var K = Array.isArray,
        z = { H: null, A: null, T: null, S: null, V: null },
        P = Object.prototype.hasOwnProperty;
    function J(w, Y, $, F, et, pt) {
        return (
            ($ = pt.ref),
            {
                $$typeof: n,
                type: w,
                key: Y,
                ref: $ !== void 0 ? $ : null,
                props: pt,
            }
        );
    }
    function Z(w, Y) {
        return J(w.type, Y, void 0, void 0, void 0, w.props);
    }
    function st(w) {
        return typeof w == "object" && w !== null && w.$$typeof === n;
    }
    function jt(w) {
        var Y = { "=": "=0", ":": "=2" };
        return (
            "$" +
            w.replace(/[=:]/g, function ($) {
                return Y[$];
            })
        );
    }
    var Ut = /\/+/g;
    function _t(w, Y) {
        return typeof w == "object" && w !== null && w.key != null
            ? jt("" + w.key)
            : Y.toString(36);
    }
    function ln() { }
    function Qe(w) {
        switch (w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason;
            default:
                switch (
                (typeof w.status == "string"
                    ? w.then(ln, ln)
                    : ((w.status = "pending"),
                        w.then(
                            function (Y) {
                                w.status === "pending" &&
                                    ((w.status = "fulfilled"), (w.value = Y));
                            },
                            function (Y) {
                                w.status === "pending" &&
                                    ((w.status = "rejected"), (w.reason = Y));
                            },
                        )),
                    w.status)
                ) {
                    case "fulfilled":
                        return w.value;
                    case "rejected":
                        throw w.reason;
                }
        }
        throw w;
    }
    function Yt(w, Y, $, F, et) {
        var pt = typeof w;
        (pt === "undefined" || pt === "boolean") && (w = null);
        var rt = !1;
        if (w === null) rt = !0;
        else
            switch (pt) {
                case "bigint":
                case "string":
                case "number":
                    rt = !0;
                    break;
                case "object":
                    switch (w.$$typeof) {
                        case n:
                        case a:
                            rt = !0;
                            break;
                        case p:
                            return (
                                (rt = w._init),
                                Yt(rt(w._payload), Y, $, F, et)
                            );
                    }
            }
        if (rt)
            return (
                (et = et(w)),
                (rt = F === "" ? "." + _t(w, 0) : F),
                K(et)
                    ? (($ = ""),
                        rt != null && ($ = rt.replace(Ut, "$&/") + "/"),
                        Yt(et, Y, $, "", function (jn) {
                            return jn;
                        }))
                    : et != null &&
                    (st(et) &&
                        (et = Z(
                            et,
                            $ +
                            (et.key == null || (w && w.key === et.key)
                                ? ""
                                : ("" + et.key).replace(Ut, "$&/") +
                                "/") +
                            rt,
                        )),
                        Y.push(et)),
                1
            );
        rt = 0;
        var pe = F === "" ? "." : F + ":";
        if (K(w))
            for (var Et = 0; Et < w.length; Et++)
                ((F = w[Et]),
                    (pt = pe + _t(F, Et)),
                    (rt += Yt(F, Y, $, pt, et)));
        else if (((Et = S(w)), typeof Et == "function"))
            for (w = Et.call(w), Et = 0; !(F = w.next()).done;)
                ((F = F.value),
                    (pt = pe + _t(F, Et++)),
                    (rt += Yt(F, Y, $, pt, et)));
        else if (pt === "object") {
            if (typeof w.then == "function") return Yt(Qe(w), Y, $, F, et);
            throw (
                (Y = String(w)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (Y === "[object Object]"
                        ? "object with keys {" +
                        Object.keys(w).join(", ") +
                        "}"
                        : Y) +
                    "). If you meant to render a collection of children, use an array instead.",
                )
            );
        }
        return rt;
    }
    function L(w, Y, $) {
        if (w == null) return w;
        var F = [],
            et = 0;
        return (
            Yt(w, F, "", "", function (pt) {
                return Y.call($, pt, et++);
            }),
            F
        );
    }
    function X(w) {
        if (w._status === -1) {
            var Y = w._result;
            ((Y = Y()),
                Y.then(
                    function ($) {
                        (w._status === 0 || w._status === -1) &&
                            ((w._status = 1), (w._result = $));
                    },
                    function ($) {
                        (w._status === 0 || w._status === -1) &&
                            ((w._status = 2), (w._result = $));
                    },
                ),
                w._status === -1 && ((w._status = 0), (w._result = Y)));
        }
        if (w._status === 1) return w._result.default;
        throw w._result;
    }
    var I =
        typeof reportError == "function"
            ? reportError
            : function (w) {
                if (
                    typeof window == "object" &&
                    typeof window.ErrorEvent == "function"
                ) {
                    var Y = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                            typeof w == "object" &&
                                w !== null &&
                                typeof w.message == "string"
                                ? String(w.message)
                                : String(w),
                        error: w,
                    });
                    if (!window.dispatchEvent(Y)) return;
                } else if (
                    typeof process == "object" &&
                    typeof process.emit == "function"
                ) {
                    process.emit("uncaughtException", w);
                    return;
                }
                console.error(w);
            };
    function ht() { }
    return (
        (ot.Children = {
            map: L,
            forEach: function (w, Y, $) {
                L(
                    w,
                    function () {
                        Y.apply(this, arguments);
                    },
                    $,
                );
            },
            count: function (w) {
                var Y = 0;
                return (
                    L(w, function () {
                        Y++;
                    }),
                    Y
                );
            },
            toArray: function (w) {
                return (
                    L(w, function (Y) {
                        return Y;
                    }) || []
                );
            },
            only: function (w) {
                if (!st(w))
                    throw Error(
                        "React.Children.only expected to receive a single React element child.",
                    );
                return w;
            },
        }),
        (ot.Component = V),
        (ot.Fragment = s),
        (ot.Profiler = u),
        (ot.PureComponent = O),
        (ot.StrictMode = r),
        (ot.Suspense = h),
        (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            z),
        (ot.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (w) {
                return z.H.useMemoCache(w);
            },
        }),
        (ot.cache = function (w) {
            return function () {
                return w.apply(null, arguments);
            };
        }),
        (ot.cloneElement = function (w, Y, $) {
            if (w == null)
                throw Error(
                    "The argument must be a React element, but you passed " +
                    w +
                    ".",
                );
            var F = M({}, w.props),
                et = w.key,
                pt = void 0;
            if (Y != null)
                for (rt in (Y.ref !== void 0 && (pt = void 0),
                    Y.key !== void 0 && (et = "" + Y.key),
                    Y))
                    !P.call(Y, rt) ||
                        rt === "key" ||
                        rt === "__self" ||
                        rt === "__source" ||
                        (rt === "ref" && Y.ref === void 0) ||
                        (F[rt] = Y[rt]);
            var rt = arguments.length - 2;
            if (rt === 1) F.children = $;
            else if (1 < rt) {
                for (var pe = Array(rt), Et = 0; Et < rt; Et++)
                    pe[Et] = arguments[Et + 2];
                F.children = pe;
            }
            return J(w.type, et, void 0, void 0, pt, F);
        }),
        (ot.createContext = function (w) {
            return (
                (w = {
                    $$typeof: d,
                    _currentValue: w,
                    _currentValue2: w,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (w.Provider = w),
                (w.Consumer = { $$typeof: f, _context: w }),
                w
            );
        }),
        (ot.createElement = function (w, Y, $) {
            var F,
                et = {},
                pt = null;
            if (Y != null)
                for (F in (Y.key !== void 0 && (pt = "" + Y.key), Y))
                    P.call(Y, F) &&
                        F !== "key" &&
                        F !== "__self" &&
                        F !== "__source" &&
                        (et[F] = Y[F]);
            var rt = arguments.length - 2;
            if (rt === 1) et.children = $;
            else if (1 < rt) {
                for (var pe = Array(rt), Et = 0; Et < rt; Et++)
                    pe[Et] = arguments[Et + 2];
                et.children = pe;
            }
            if (w && w.defaultProps)
                for (F in ((rt = w.defaultProps), rt))
                    et[F] === void 0 && (et[F] = rt[F]);
            return J(w, pt, void 0, void 0, null, et);
        }),
        (ot.createRef = function () {
            return { current: null };
        }),
        (ot.forwardRef = function (w) {
            return { $$typeof: m, render: w };
        }),
        (ot.isValidElement = st),
        (ot.lazy = function (w) {
            return {
                $$typeof: p,
                _payload: { _status: -1, _result: w },
                _init: X,
            };
        }),
        (ot.memo = function (w, Y) {
            return { $$typeof: y, type: w, compare: Y === void 0 ? null : Y };
        }),
        (ot.startTransition = function (w) {
            var Y = z.T,
                $ = {};
            z.T = $;
            try {
                var F = w(),
                    et = z.S;
                (et !== null && et($, F),
                    typeof F == "object" &&
                    F !== null &&
                    typeof F.then == "function" &&
                    F.then(ht, I));
            } catch (pt) {
                I(pt);
            } finally {
                z.T = Y;
            }
        }),
        (ot.unstable_useCacheRefresh = function () {
            return z.H.useCacheRefresh();
        }),
        (ot.use = function (w) {
            return z.H.use(w);
        }),
        (ot.useActionState = function (w, Y, $) {
            return z.H.useActionState(w, Y, $);
        }),
        (ot.useCallback = function (w, Y) {
            return z.H.useCallback(w, Y);
        }),
        (ot.useContext = function (w) {
            return z.H.useContext(w);
        }),
        (ot.useDebugValue = function () { }),
        (ot.useDeferredValue = function (w, Y) {
            return z.H.useDeferredValue(w, Y);
        }),
        (ot.useEffect = function (w, Y, $) {
            var F = z.H;
            if (typeof $ == "function")
                throw Error(
                    "useEffect CRUD overload is not enabled in this build of React.",
                );
            return F.useEffect(w, Y);
        }),
        (ot.useId = function () {
            return z.H.useId();
        }),
        (ot.useImperativeHandle = function (w, Y, $) {
            return z.H.useImperativeHandle(w, Y, $);
        }),
        (ot.useInsertionEffect = function (w, Y) {
            return z.H.useInsertionEffect(w, Y);
        }),
        (ot.useLayoutEffect = function (w, Y) {
            return z.H.useLayoutEffect(w, Y);
        }),
        (ot.useMemo = function (w, Y) {
            return z.H.useMemo(w, Y);
        }),
        (ot.useOptimistic = function (w, Y) {
            return z.H.useOptimistic(w, Y);
        }),
        (ot.useReducer = function (w, Y, $) {
            return z.H.useReducer(w, Y, $);
        }),
        (ot.useRef = function (w) {
            return z.H.useRef(w);
        }),
        (ot.useState = function (w) {
            return z.H.useState(w);
        }),
        (ot.useSyncExternalStore = function (w, Y, $) {
            return z.H.useSyncExternalStore(w, Y, $);
        }),
        (ot.useTransition = function () {
            return z.H.useTransition();
        }),
        (ot.version = "19.1.1"),
        ot
    );
}
var a0;
function kr() {
    return (a0 || ((a0 = 1), (hc.exports = jb())), hc.exports);
}
var _ = kr();
const Tn = wb(_);
var mc = { exports: {} },
    jl = {},
    pc = { exports: {} },
    yc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l0;
function Eb() {
    return (
        l0 ||
        ((l0 = 1),
            (function (n) {
                function a(L, X) {
                    var I = L.length;
                    L.push(X);
                    t: for (; 0 < I;) {
                        var ht = (I - 1) >>> 1,
                            w = L[ht];
                        if (0 < u(w, X)) ((L[ht] = X), (L[I] = w), (I = ht));
                        else break t;
                    }
                }
                function s(L) {
                    return L.length === 0 ? null : L[0];
                }
                function r(L) {
                    if (L.length === 0) return null;
                    var X = L[0],
                        I = L.pop();
                    if (I !== X) {
                        L[0] = I;
                        t: for (
                            var ht = 0, w = L.length, Y = w >>> 1;
                            ht < Y;
                        ) {
                            var $ = 2 * (ht + 1) - 1,
                                F = L[$],
                                et = $ + 1,
                                pt = L[et];
                            if (0 > u(F, I))
                                et < w && 0 > u(pt, F)
                                    ? ((L[ht] = pt), (L[et] = I), (ht = et))
                                    : ((L[ht] = F), (L[$] = I), (ht = $));
                            else if (et < w && 0 > u(pt, I))
                                ((L[ht] = pt), (L[et] = I), (ht = et));
                            else break t;
                        }
                    }
                    return X;
                }
                function u(L, X) {
                    var I = L.sortIndex - X.sortIndex;
                    return I !== 0 ? I : L.id - X.id;
                }
                if (
                    ((n.unstable_now = void 0),
                        typeof performance == "object" &&
                        typeof performance.now == "function")
                ) {
                    var f = performance;
                    n.unstable_now = function () {
                        return f.now();
                    };
                } else {
                    var d = Date,
                        m = d.now();
                    n.unstable_now = function () {
                        return d.now() - m;
                    };
                }
                var h = [],
                    y = [],
                    p = 1,
                    b = null,
                    S = 3,
                    j = !1,
                    M = !1,
                    H = !1,
                    V = !1,
                    U = typeof setTimeout == "function" ? setTimeout : null,
                    O = typeof clearTimeout == "function" ? clearTimeout : null,
                    G = typeof setImmediate < "u" ? setImmediate : null;
                function K(L) {
                    for (var X = s(y); X !== null;) {
                        if (X.callback === null) r(y);
                        else if (X.startTime <= L)
                            (r(y), (X.sortIndex = X.expirationTime), a(h, X));
                        else break;
                        X = s(y);
                    }
                }
                function z(L) {
                    if (((H = !1), K(L), !M))
                        if (s(h) !== null) ((M = !0), P || ((P = !0), _t()));
                        else {
                            var X = s(y);
                            X !== null && Yt(z, X.startTime - L);
                        }
                }
                var P = !1,
                    J = -1,
                    Z = 5,
                    st = -1;
                function jt() {
                    return V ? !0 : !(n.unstable_now() - st < Z);
                }
                function Ut() {
                    if (((V = !1), P)) {
                        var L = n.unstable_now();
                        st = L;
                        var X = !0;
                        try {
                            t: {
                                ((M = !1),
                                    H && ((H = !1), O(J), (J = -1)),
                                    (j = !0));
                                var I = S;
                                try {
                                    e: {
                                        for (
                                            K(L), b = s(h);
                                            b !== null &&
                                            !(b.expirationTime > L && jt());
                                        ) {
                                            var ht = b.callback;
                                            if (typeof ht == "function") {
                                                ((b.callback = null),
                                                    (S = b.priorityLevel));
                                                var w = ht(
                                                    b.expirationTime <= L,
                                                );
                                                if (
                                                    ((L = n.unstable_now()),
                                                        typeof w == "function")
                                                ) {
                                                    ((b.callback = w),
                                                        K(L),
                                                        (X = !0));
                                                    break e;
                                                }
                                                (b === s(h) && r(h), K(L));
                                            } else r(h);
                                            b = s(h);
                                        }
                                        if (b !== null) X = !0;
                                        else {
                                            var Y = s(y);
                                            (Y !== null &&
                                                Yt(z, Y.startTime - L),
                                                (X = !1));
                                        }
                                    }
                                    break t;
                                } finally {
                                    ((b = null), (S = I), (j = !1));
                                }
                                X = void 0;
                            }
                        } finally {
                            X ? _t() : (P = !1);
                        }
                    }
                }
                var _t;
                if (typeof G == "function")
                    _t = function () {
                        G(Ut);
                    };
                else if (typeof MessageChannel < "u") {
                    var ln = new MessageChannel(),
                        Qe = ln.port2;
                    ((ln.port1.onmessage = Ut),
                        (_t = function () {
                            Qe.postMessage(null);
                        }));
                } else
                    _t = function () {
                        U(Ut, 0);
                    };
                function Yt(L, X) {
                    J = U(function () {
                        L(n.unstable_now());
                    }, X);
                }
                ((n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (L) {
                        L.callback = null;
                    }),
                    (n.unstable_forceFrameRate = function (L) {
                        0 > L || 125 < L
                            ? console.error(
                                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                            )
                            : (Z = 0 < L ? Math.floor(1e3 / L) : 5);
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return S;
                    }),
                    (n.unstable_next = function (L) {
                        switch (S) {
                            case 1:
                            case 2:
                            case 3:
                                var X = 3;
                                break;
                            default:
                                X = S;
                        }
                        var I = S;
                        S = X;
                        try {
                            return L();
                        } finally {
                            S = I;
                        }
                    }),
                    (n.unstable_requestPaint = function () {
                        V = !0;
                    }),
                    (n.unstable_runWithPriority = function (L, X) {
                        switch (L) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                L = 3;
                        }
                        var I = S;
                        S = L;
                        try {
                            return X();
                        } finally {
                            S = I;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (L, X, I) {
                        var ht = n.unstable_now();
                        switch (
                        (typeof I == "object" && I !== null
                            ? ((I = I.delay),
                                (I =
                                    typeof I == "number" && 0 < I
                                        ? ht + I
                                        : ht))
                            : (I = ht),
                            L)
                        ) {
                            case 1:
                                var w = -1;
                                break;
                            case 2:
                                w = 250;
                                break;
                            case 5:
                                w = 1073741823;
                                break;
                            case 4:
                                w = 1e4;
                                break;
                            default:
                                w = 5e3;
                        }
                        return (
                            (w = I + w),
                            (L = {
                                id: p++,
                                callback: X,
                                priorityLevel: L,
                                startTime: I,
                                expirationTime: w,
                                sortIndex: -1,
                            }),
                            I > ht
                                ? ((L.sortIndex = I),
                                    a(y, L),
                                    s(h) === null &&
                                    L === s(y) &&
                                    (H ? (O(J), (J = -1)) : (H = !0),
                                        Yt(z, I - ht)))
                                : ((L.sortIndex = w),
                                    a(h, L),
                                    M || j || ((M = !0), P || ((P = !0), _t()))),
                            L
                        );
                    }),
                    (n.unstable_shouldYield = jt),
                    (n.unstable_wrapCallback = function (L) {
                        var X = S;
                        return function () {
                            var I = S;
                            S = X;
                            try {
                                return L.apply(this, arguments);
                            } finally {
                                S = I;
                            }
                        };
                    }));
            })(yc)),
        yc
    );
}
var s0;
function Mb() {
    return (s0 || ((s0 = 1), (pc.exports = Eb())), pc.exports);
}
var gc = { exports: {} },
    le = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0;
function Db() {
    if (r0) return le;
    r0 = 1;
    var n = kr();
    function a(h) {
        var y = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var p = 2; p < arguments.length; p++)
                y += "&args[]=" + encodeURIComponent(arguments[p]);
        }
        return (
            "Minified React error #" +
            h +
            "; visit " +
            y +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function s() { }
    var r = {
        d: {
            f: s,
            r: function () {
                throw Error(a(522));
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s,
        },
        p: 0,
        findDOMNode: null,
    },
        u = Symbol.for("react.portal");
    function f(h, y, p) {
        var b =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: u,
            key: b == null ? null : "" + b,
            children: h,
            containerInfo: y,
            implementation: p,
        };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(h, y) {
        if (h === "font") return "";
        if (typeof y == "string") return y === "use-credentials" ? y : "";
    }
    return (
        (le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (le.createPortal = function (h, y) {
            var p =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (
                !y ||
                (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
            )
                throw Error(a(299));
            return f(h, y, null, p);
        }),
        (le.flushSync = function (h) {
            var y = d.T,
                p = r.p;
            try {
                if (((d.T = null), (r.p = 2), h)) return h();
            } finally {
                ((d.T = y), (r.p = p), r.d.f());
            }
        }),
        (le.preconnect = function (h, y) {
            typeof h == "string" &&
                (y
                    ? ((y = y.crossOrigin),
                        (y =
                            typeof y == "string"
                                ? y === "use-credentials"
                                    ? y
                                    : ""
                                : void 0))
                    : (y = null),
                    r.d.C(h, y));
        }),
        (le.prefetchDNS = function (h) {
            typeof h == "string" && r.d.D(h);
        }),
        (le.preinit = function (h, y) {
            if (typeof h == "string" && y && typeof y.as == "string") {
                var p = y.as,
                    b = m(p, y.crossOrigin),
                    S = typeof y.integrity == "string" ? y.integrity : void 0,
                    j =
                        typeof y.fetchPriority == "string"
                            ? y.fetchPriority
                            : void 0;
                p === "style"
                    ? r.d.S(
                        h,
                        typeof y.precedence == "string"
                            ? y.precedence
                            : void 0,
                        { crossOrigin: b, integrity: S, fetchPriority: j },
                    )
                    : p === "script" &&
                    r.d.X(h, {
                        crossOrigin: b,
                        integrity: S,
                        fetchPriority: j,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                    });
            }
        }),
        (le.preinitModule = function (h, y) {
            if (typeof h == "string")
                if (typeof y == "object" && y !== null) {
                    if (y.as == null || y.as === "script") {
                        var p = m(y.as, y.crossOrigin);
                        r.d.M(h, {
                            crossOrigin: p,
                            integrity:
                                typeof y.integrity == "string"
                                    ? y.integrity
                                    : void 0,
                            nonce:
                                typeof y.nonce == "string" ? y.nonce : void 0,
                        });
                    }
                } else y == null && r.d.M(h);
        }),
        (le.preload = function (h, y) {
            if (
                typeof h == "string" &&
                typeof y == "object" &&
                y !== null &&
                typeof y.as == "string"
            ) {
                var p = y.as,
                    b = m(p, y.crossOrigin);
                r.d.L(h, p, {
                    crossOrigin: b,
                    integrity:
                        typeof y.integrity == "string" ? y.integrity : void 0,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                    type: typeof y.type == "string" ? y.type : void 0,
                    fetchPriority:
                        typeof y.fetchPriority == "string"
                            ? y.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof y.referrerPolicy == "string"
                            ? y.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof y.imageSrcSet == "string"
                            ? y.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                    media: typeof y.media == "string" ? y.media : void 0,
                });
            }
        }),
        (le.preloadModule = function (h, y) {
            if (typeof h == "string")
                if (y) {
                    var p = m(y.as, y.crossOrigin);
                    r.d.m(h, {
                        as:
                            typeof y.as == "string" && y.as !== "script"
                                ? y.as
                                : void 0,
                        crossOrigin: p,
                        integrity:
                            typeof y.integrity == "string"
                                ? y.integrity
                                : void 0,
                    });
                } else r.d.m(h);
        }),
        (le.requestFormReset = function (h) {
            r.d.r(h);
        }),
        (le.unstable_batchedUpdates = function (h, y) {
            return h(y);
        }),
        (le.useFormState = function (h, y, p) {
            return d.H.useFormState(h, y, p);
        }),
        (le.useFormStatus = function () {
            return d.H.useHostTransitionStatus();
        }),
        (le.version = "19.1.1"),
        le
    );
}
var o0;
function Nb() {
    if (o0) return gc.exports;
    o0 = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (a) {
                console.error(a);
            }
    }
    return (n(), (gc.exports = Db()), gc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function Rb() {
    if (u0) return jl;
    u0 = 1;
    var n = Mb(),
        a = kr(),
        s = Nb();
    function r(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                e += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return (
            "Minified React error #" +
            t +
            "; visit " +
            e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function u(t) {
        return !(
            !t ||
            (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
        );
    }
    function f(t) {
        var e = t,
            i = t;
        if (t.alternate) for (; e.return;) e = e.return;
        else {
            t = e;
            do
                ((e = t),
                    (e.flags & 4098) !== 0 && (i = e.return),
                    (t = e.return));
            while (t);
        }
        return e.tag === 3 ? i : null;
    }
    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (
                (e === null &&
                    ((t = t.alternate), t !== null && (e = t.memoizedState)),
                    e !== null)
            )
                return e.dehydrated;
        }
        return null;
    }
    function m(t) {
        if (f(t) !== t) throw Error(r(188));
    }
    function h(t) {
        var e = t.alternate;
        if (!e) {
            if (((e = f(t)), e === null)) throw Error(r(188));
            return e !== t ? null : t;
        }
        for (var i = t, l = e; ;) {
            var o = i.return;
            if (o === null) break;
            var c = o.alternate;
            if (c === null) {
                if (((l = o.return), l !== null)) {
                    i = l;
                    continue;
                }
                break;
            }
            if (o.child === c.child) {
                for (c = o.child; c;) {
                    if (c === i) return (m(o), t);
                    if (c === l) return (m(o), e);
                    c = c.sibling;
                }
                throw Error(r(188));
            }
            if (i.return !== l.return) ((i = o), (l = c));
            else {
                for (var g = !1, x = o.child; x;) {
                    if (x === i) {
                        ((g = !0), (i = o), (l = c));
                        break;
                    }
                    if (x === l) {
                        ((g = !0), (l = o), (i = c));
                        break;
                    }
                    x = x.sibling;
                }
                if (!g) {
                    for (x = c.child; x;) {
                        if (x === i) {
                            ((g = !0), (i = c), (l = o));
                            break;
                        }
                        if (x === l) {
                            ((g = !0), (l = c), (i = o));
                            break;
                        }
                        x = x.sibling;
                    }
                    if (!g) throw Error(r(189));
                }
            }
            if (i.alternate !== l) throw Error(r(190));
        }
        if (i.tag !== 3) throw Error(r(188));
        return i.stateNode.current === i ? t : e;
    }
    function y(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (((e = y(t)), e !== null)) return e;
            t = t.sibling;
        }
        return null;
    }
    var p = Object.assign,
        b = Symbol.for("react.element"),
        S = Symbol.for("react.transitional.element"),
        j = Symbol.for("react.portal"),
        M = Symbol.for("react.fragment"),
        H = Symbol.for("react.strict_mode"),
        V = Symbol.for("react.profiler"),
        U = Symbol.for("react.provider"),
        O = Symbol.for("react.consumer"),
        G = Symbol.for("react.context"),
        K = Symbol.for("react.forward_ref"),
        z = Symbol.for("react.suspense"),
        P = Symbol.for("react.suspense_list"),
        J = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        st = Symbol.for("react.activity"),
        jt = Symbol.for("react.memo_cache_sentinel"),
        Ut = Symbol.iterator;
    function _t(t) {
        return t === null || typeof t != "object"
            ? null
            : ((t = (Ut && t[Ut]) || t["@@iterator"]),
                typeof t == "function" ? t : null);
    }
    var ln = Symbol.for("react.client.reference");
    function Qe(t) {
        if (t == null) return null;
        if (typeof t == "function")
            return t.$$typeof === ln ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case M:
                return "Fragment";
            case V:
                return "Profiler";
            case H:
                return "StrictMode";
            case z:
                return "Suspense";
            case P:
                return "SuspenseList";
            case st:
                return "Activity";
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
                case j:
                    return "Portal";
                case G:
                    return (t.displayName || "Context") + ".Provider";
                case O:
                    return (t._context.displayName || "Context") + ".Consumer";
                case K:
                    var e = t.render;
                    return (
                        (t = t.displayName),
                        t ||
                        ((t = e.displayName || e.name || ""),
                            (t =
                                t !== ""
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef")),
                        t
                    );
                case J:
                    return (
                        (e = t.displayName || null),
                        e !== null ? e : Qe(t.type) || "Memo"
                    );
                case Z:
                    ((e = t._payload), (t = t._init));
                    try {
                        return Qe(t(e));
                    } catch { }
            }
        return null;
    }
    var Yt = Array.isArray,
        L = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        I = { pending: !1, data: null, method: null, action: null },
        ht = [],
        w = -1;
    function Y(t) {
        return { current: t };
    }
    function $(t) {
        0 > w || ((t.current = ht[w]), (ht[w] = null), w--);
    }
    function F(t, e) {
        (w++, (ht[w] = t.current), (t.current = e));
    }
    var et = Y(null),
        pt = Y(null),
        rt = Y(null),
        pe = Y(null);
    function Et(t, e) {
        switch ((F(rt, e), F(pt, t), F(et, null), e.nodeType)) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? Dp(t) : 0;
                break;
            default:
                if (((t = e.tagName), (e = e.namespaceURI)))
                    ((e = Dp(e)), (t = Np(e, t)));
                else
                    switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
        }
        ($(et), F(et, t));
    }
    function jn() {
        ($(et), $(pt), $(rt));
    }
    function $r(t) {
        t.memoizedState !== null && F(pe, t);
        var e = et.current,
            i = Np(e, t.type);
        e !== i && (F(pt, t), F(et, i));
    }
    function Wl(t) {
        (pt.current === t && ($(et), $(pt)),
            pe.current === t && ($(pe), (bl._currentValue = I)));
    }
    var Jr = Object.prototype.hasOwnProperty,
        Wr = n.unstable_scheduleCallback,
        Ir = n.unstable_cancelCallback,
        ev = n.unstable_shouldYield,
        nv = n.unstable_requestPaint,
        Ze = n.unstable_now,
        iv = n.unstable_getCurrentPriorityLevel,
        ud = n.unstable_ImmediatePriority,
        cd = n.unstable_UserBlockingPriority,
        Il = n.unstable_NormalPriority,
        av = n.unstable_LowPriority,
        fd = n.unstable_IdlePriority,
        lv = n.log,
        sv = n.unstable_setDisableYieldValue,
        Ma = null,
        ye = null;
    function En(t) {
        if (
            (typeof lv == "function" && sv(t),
                ye && typeof ye.setStrictMode == "function")
        )
            try {
                ye.setStrictMode(Ma, t);
            } catch { }
    }
    var ge = Math.clz32 ? Math.clz32 : uv,
        rv = Math.log,
        ov = Math.LN2;
    function uv(t) {
        return ((t >>>= 0), t === 0 ? 32 : (31 - ((rv(t) / ov) | 0)) | 0);
    }
    var ts = 256,
        es = 4194304;
    function ni(t) {
        var e = t & 42;
        if (e !== 0) return e;
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
                return 64;
            case 128:
                return 128;
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
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t;
        }
    }
    function ns(t, e, i) {
        var l = t.pendingLanes;
        if (l === 0) return 0;
        var o = 0,
            c = t.suspendedLanes,
            g = t.pingedLanes;
        t = t.warmLanes;
        var x = l & 134217727;
        return (
            x !== 0
                ? ((l = x & ~c),
                    l !== 0
                        ? (o = ni(l))
                        : ((g &= x),
                            g !== 0
                                ? (o = ni(g))
                                : i || ((i = x & ~t), i !== 0 && (o = ni(i)))))
                : ((x = l & ~c),
                    x !== 0
                        ? (o = ni(x))
                        : g !== 0
                            ? (o = ni(g))
                            : i || ((i = l & ~t), i !== 0 && (o = ni(i)))),
            o === 0
                ? 0
                : e !== 0 &&
                    e !== o &&
                    (e & c) === 0 &&
                    ((c = o & -o),
                        (i = e & -e),
                        c >= i || (c === 32 && (i & 4194048) !== 0))
                    ? e
                    : o
        );
    }
    function Da(t, e) {
        return (
            (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
        );
    }
    function cv(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
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
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function dd() {
        var t = ts;
        return ((ts <<= 1), (ts & 4194048) === 0 && (ts = 256), t);
    }
    function hd() {
        var t = es;
        return ((es <<= 1), (es & 62914560) === 0 && (es = 4194304), t);
    }
    function to(t) {
        for (var e = [], i = 0; 31 > i; i++) e.push(t);
        return e;
    }
    function Na(t, e) {
        ((t.pendingLanes |= e),
            e !== 268435456 &&
            ((t.suspendedLanes = 0),
                (t.pingedLanes = 0),
                (t.warmLanes = 0)));
    }
    function fv(t, e, i, l, o, c) {
        var g = t.pendingLanes;
        ((t.pendingLanes = i),
            (t.suspendedLanes = 0),
            (t.pingedLanes = 0),
            (t.warmLanes = 0),
            (t.expiredLanes &= i),
            (t.entangledLanes &= i),
            (t.errorRecoveryDisabledLanes &= i),
            (t.shellSuspendCounter = 0));
        var x = t.entanglements,
            T = t.expirationTimes,
            D = t.hiddenUpdates;
        for (i = g & ~i; 0 < i;) {
            var B = 31 - ge(i),
                q = 1 << B;
            ((x[B] = 0), (T[B] = -1));
            var N = D[B];
            if (N !== null)
                for (D[B] = null, B = 0; B < N.length; B++) {
                    var R = N[B];
                    R !== null && (R.lane &= -536870913);
                }
            i &= ~q;
        }
        (l !== 0 && md(t, l, 0),
            c !== 0 &&
            o === 0 &&
            t.tag !== 0 &&
            (t.suspendedLanes |= c & ~(g & ~e)));
    }
    function md(t, e, i) {
        ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
        var l = 31 - ge(e);
        ((t.entangledLanes |= e),
            (t.entanglements[l] =
                t.entanglements[l] | 1073741824 | (i & 4194090)));
    }
    function pd(t, e) {
        var i = (t.entangledLanes |= e);
        for (t = t.entanglements; i;) {
            var l = 31 - ge(i),
                o = 1 << l;
            ((o & e) | (t[l] & e) && (t[l] |= e), (i &= ~o));
        }
    }
    function eo(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
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
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0;
        }
        return t;
    }
    function no(t) {
        return (
            (t &= -t),
            2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
        );
    }
    function yd() {
        var t = X.p;
        return t !== 0
            ? t
            : ((t = window.event), t === void 0 ? 32 : Fp(t.type));
    }
    function dv(t, e) {
        var i = X.p;
        try {
            return ((X.p = t), e());
        } finally {
            X.p = i;
        }
    }
    var Mn = Math.random().toString(36).slice(2),
        ie = "__reactFiber$" + Mn,
        oe = "__reactProps$" + Mn,
        Ni = "__reactContainer$" + Mn,
        io = "__reactEvents$" + Mn,
        hv = "__reactListeners$" + Mn,
        mv = "__reactHandles$" + Mn,
        gd = "__reactResources$" + Mn,
        Ra = "__reactMarker$" + Mn;
    function ao(t) {
        (delete t[ie], delete t[oe], delete t[io], delete t[hv], delete t[mv]);
    }
    function Ri(t) {
        var e = t[ie];
        if (e) return e;
        for (var i = t.parentNode; i;) {
            if ((e = i[Ni] || i[ie])) {
                if (
                    ((i = e.alternate),
                        e.child !== null || (i !== null && i.child !== null))
                )
                    for (t = _p(t); t !== null;) {
                        if ((i = t[ie])) return i;
                        t = _p(t);
                    }
                return e;
            }
            ((t = i), (i = t.parentNode));
        }
        return null;
    }
    function Oi(t) {
        if ((t = t[ie] || t[Ni])) {
            var e = t.tag;
            if (
                e === 5 ||
                e === 6 ||
                e === 13 ||
                e === 26 ||
                e === 27 ||
                e === 3
            )
                return t;
        }
        return null;
    }
    function Oa(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(r(33));
    }
    function zi(t) {
        var e = t[gd];
        return (
            e ||
            (e = t[gd] =
            {
                hoistableStyles: new Map(),
                hoistableScripts: new Map(),
            }),
            e
        );
    }
    function Pt(t) {
        t[Ra] = !0;
    }
    var vd = new Set(),
        xd = {};
    function ii(t, e) {
        (_i(t, e), _i(t + "Capture", e));
    }
    function _i(t, e) {
        for (xd[t] = e, t = 0; t < e.length; t++) vd.add(e[t]);
    }
    var pv = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
        bd = {},
        Sd = {};
    function yv(t) {
        return Jr.call(Sd, t)
            ? !0
            : Jr.call(bd, t)
                ? !1
                : pv.test(t)
                    ? (Sd[t] = !0)
                    : ((bd[t] = !0), !1);
    }
    function is(t, e, i) {
        if (yv(e))
            if (i === null) t.removeAttribute(e);
            else {
                switch (typeof i) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var l = e.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            t.removeAttribute(e);
                            return;
                        }
                }
                t.setAttribute(e, "" + i);
            }
    }
    function as(t, e, i) {
        if (i === null) t.removeAttribute(e);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return;
            }
            t.setAttribute(e, "" + i);
        }
    }
    function sn(t, e, i, l) {
        if (l === null) t.removeAttribute(i);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(i);
                    return;
            }
            t.setAttributeNS(e, i, "" + l);
        }
    }
    var lo, Td;
    function Vi(t) {
        if (lo === void 0)
            try {
                throw Error();
            } catch (i) {
                var e = i.stack.trim().match(/\n( *(at )?)/);
                ((lo = (e && e[1]) || ""),
                    (Td =
                        -1 <
                            i.stack.indexOf(`
    at`)
                            ? " (<anonymous>)"
                            : -1 < i.stack.indexOf("@")
                                ? "@unknown:0:0"
                                : ""));
            }
        return (
            `
` +
            lo +
            t +
            Td
        );
    }
    var so = !1;
    function ro(t, e) {
        if (!t || so) return "";
        so = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var q = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(q.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                    typeof Reflect == "object" && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(q, []);
                                } catch (R) {
                                    var N = R;
                                }
                                Reflect.construct(t, [], q);
                            } else {
                                try {
                                    q.call();
                                } catch (R) {
                                    N = R;
                                }
                                t.call(q.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (R) {
                                N = R;
                            }
                            (q = t()) &&
                                typeof q.catch == "function" &&
                                q.catch(function () { });
                        }
                    } catch (R) {
                        if (R && N && typeof R.stack == "string")
                            return [R.stack, N.stack];
                    }
                    return [null, null];
                },
            };
            l.DetermineComponentFrameRoot.displayName =
                "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(
                l.DetermineComponentFrameRoot,
                "name",
            );
            o &&
                o.configurable &&
                Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot",
                });
            var c = l.DetermineComponentFrameRoot(),
                g = c[0],
                x = c[1];
            if (g && x) {
                var T = g.split(`
`),
                    D = x.split(`
`);
                for (
                    o = l = 0;
                    l < T.length &&
                    !T[l].includes("DetermineComponentFrameRoot");
                )
                    l++;
                for (
                    ;
                    o < D.length &&
                    !D[o].includes("DetermineComponentFrameRoot");
                )
                    o++;
                if (l === T.length || o === D.length)
                    for (
                        l = T.length - 1, o = D.length - 1;
                        1 <= l && 0 <= o && T[l] !== D[o];
                    )
                        o--;
                for (; 1 <= l && 0 <= o; l--, o--)
                    if (T[l] !== D[o]) {
                        if (l !== 1 || o !== 1)
                            do
                                if ((l--, o--, 0 > o || T[l] !== D[o])) {
                                    var B =
                                        `
` + T[l].replace(" at new ", " at ");
                                    return (
                                        t.displayName &&
                                        B.includes("<anonymous>") &&
                                        (B = B.replace(
                                            "<anonymous>",
                                            t.displayName,
                                        )),
                                        B
                                    );
                                }
                            while (1 <= l && 0 <= o);
                        break;
                    }
            }
        } finally {
            ((so = !1), (Error.prepareStackTrace = i));
        }
        return (i = t ? t.displayName || t.name : "") ? Vi(i) : "";
    }
    function gv(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Vi(t.type);
            case 16:
                return Vi("Lazy");
            case 13:
                return Vi("Suspense");
            case 19:
                return Vi("SuspenseList");
            case 0:
            case 15:
                return ro(t.type, !1);
            case 11:
                return ro(t.type.render, !1);
            case 1:
                return ro(t.type, !0);
            case 31:
                return Vi("Activity");
            default:
                return "";
        }
    }
    function wd(t) {
        try {
            var e = "";
            do ((e += gv(t)), (t = t.return));
            while (t);
            return e;
        } catch (i) {
            return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
            );
        }
    }
    function Ee(t) {
        switch (typeof t) {
            case "bigint":
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
    function Cd(t) {
        var e = t.type;
        return (
            (t = t.nodeName) &&
            t.toLowerCase() === "input" &&
            (e === "checkbox" || e === "radio")
        );
    }
    function vv(t) {
        var e = Cd(t) ? "checked" : "value",
            i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            l = "" + t[e];
        if (
            !t.hasOwnProperty(e) &&
            typeof i < "u" &&
            typeof i.get == "function" &&
            typeof i.set == "function"
        ) {
            var o = i.get,
                c = i.set;
            return (
                Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                        return o.call(this);
                    },
                    set: function (g) {
                        ((l = "" + g), c.call(this, g));
                    },
                }),
                Object.defineProperty(t, e, { enumerable: i.enumerable }),
                {
                    getValue: function () {
                        return l;
                    },
                    setValue: function (g) {
                        l = "" + g;
                    },
                    stopTracking: function () {
                        ((t._valueTracker = null), delete t[e]);
                    },
                }
            );
        }
    }
    function ls(t) {
        t._valueTracker || (t._valueTracker = vv(t));
    }
    function Ad(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var i = e.getValue(),
            l = "";
        return (
            t && (l = Cd(t) ? (t.checked ? "true" : "false") : t.value),
            (t = l),
            t !== i ? (e.setValue(t), !0) : !1
        );
    }
    function ss(t) {
        if (
            ((t = t || (typeof document < "u" ? document : void 0)),
                typeof t > "u")
        )
            return null;
        try {
            return t.activeElement || t.body;
        } catch {
            return t.body;
        }
    }
    var xv = /[\n"\\]/g;
    function Me(t) {
        return t.replace(xv, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
        });
    }
    function oo(t, e, i, l, o, c, g, x) {
        ((t.name = ""),
            g != null &&
                typeof g != "function" &&
                typeof g != "symbol" &&
                typeof g != "boolean"
                ? (t.type = g)
                : t.removeAttribute("type"),
            e != null
                ? g === "number"
                    ? ((e === 0 && t.value === "") || t.value != e) &&
                    (t.value = "" + Ee(e))
                    : t.value !== "" + Ee(e) && (t.value = "" + Ee(e))
                : (g !== "submit" && g !== "reset") ||
                t.removeAttribute("value"),
            e != null
                ? uo(t, g, Ee(e))
                : i != null
                    ? uo(t, g, Ee(i))
                    : l != null && t.removeAttribute("value"),
            o == null && c != null && (t.defaultChecked = !!c),
            o != null &&
            (t.checked =
                o && typeof o != "function" && typeof o != "symbol"),
            x != null &&
                typeof x != "function" &&
                typeof x != "symbol" &&
                typeof x != "boolean"
                ? (t.name = "" + Ee(x))
                : t.removeAttribute("name"));
    }
    function jd(t, e, i, l, o, c, g, x) {
        if (
            (c != null &&
                typeof c != "function" &&
                typeof c != "symbol" &&
                typeof c != "boolean" &&
                (t.type = c),
                e != null || i != null)
        ) {
            if (!((c !== "submit" && c !== "reset") || e != null)) return;
            ((i = i != null ? "" + Ee(i) : ""),
                (e = e != null ? "" + Ee(e) : i),
                x || e === t.value || (t.value = e),
                (t.defaultValue = e));
        }
        ((l = l ?? o),
            (l = typeof l != "function" && typeof l != "symbol" && !!l),
            (t.checked = x ? t.checked : !!l),
            (t.defaultChecked = !!l),
            g != null &&
            typeof g != "function" &&
            typeof g != "symbol" &&
            typeof g != "boolean" &&
            (t.name = g));
    }
    function uo(t, e, i) {
        (e === "number" && ss(t.ownerDocument) === t) ||
            t.defaultValue === "" + i ||
            (t.defaultValue = "" + i);
    }
    function Bi(t, e, i, l) {
        if (((t = t.options), e)) {
            e = {};
            for (var o = 0; o < i.length; o++) e["$" + i[o]] = !0;
            for (i = 0; i < t.length; i++)
                ((o = e.hasOwnProperty("$" + t[i].value)),
                    t[i].selected !== o && (t[i].selected = o),
                    o && l && (t[i].defaultSelected = !0));
        } else {
            for (i = "" + Ee(i), e = null, o = 0; o < t.length; o++) {
                if (t[o].value === i) {
                    ((t[o].selected = !0), l && (t[o].defaultSelected = !0));
                    return;
                }
                e !== null || t[o].disabled || (e = t[o]);
            }
            e !== null && (e.selected = !0);
        }
    }
    function Ed(t, e, i) {
        if (
            e != null &&
            ((e = "" + Ee(e)), e !== t.value && (t.value = e), i == null)
        ) {
            t.defaultValue !== e && (t.defaultValue = e);
            return;
        }
        t.defaultValue = i != null ? "" + Ee(i) : "";
    }
    function Md(t, e, i, l) {
        if (e == null) {
            if (l != null) {
                if (i != null) throw Error(r(92));
                if (Yt(l)) {
                    if (1 < l.length) throw Error(r(93));
                    l = l[0];
                }
                i = l;
            }
            (i == null && (i = ""), (e = i));
        }
        ((i = Ee(e)),
            (t.defaultValue = i),
            (l = t.textContent),
            l === i && l !== "" && l !== null && (t.value = l));
    }
    function Li(t, e) {
        if (e) {
            var i = t.firstChild;
            if (i && i === t.lastChild && i.nodeType === 3) {
                i.nodeValue = e;
                return;
            }
        }
        t.textContent = e;
    }
    var bv = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
        ),
    );
    function Dd(t, e, i) {
        var l = e.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === ""
            ? l
                ? t.setProperty(e, "")
                : e === "float"
                    ? (t.cssFloat = "")
                    : (t[e] = "")
            : l
                ? t.setProperty(e, i)
                : typeof i != "number" || i === 0 || bv.has(e)
                    ? e === "float"
                        ? (t.cssFloat = i)
                        : (t[e] = ("" + i).trim())
                    : (t[e] = i + "px");
    }
    function Nd(t, e, i) {
        if (e != null && typeof e != "object") throw Error(r(62));
        if (((t = t.style), i != null)) {
            for (var l in i)
                !i.hasOwnProperty(l) ||
                    (e != null && e.hasOwnProperty(l)) ||
                    (l.indexOf("--") === 0
                        ? t.setProperty(l, "")
                        : l === "float"
                            ? (t.cssFloat = "")
                            : (t[l] = ""));
            for (var o in e)
                ((l = e[o]), e.hasOwnProperty(o) && i[o] !== l && Dd(t, o, l));
        } else for (var c in e) e.hasOwnProperty(c) && Dd(t, c, e[c]);
    }
    function co(t) {
        if (t.indexOf("-") === -1) return !1;
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
    var Sv = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
    ]),
        Tv =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function rs(t) {
        return Tv.test("" + t)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : t;
    }
    var fo = null;
    function ho(t) {
        return (
            (t = t.target || t.srcElement || window),
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === 3 ? t.parentNode : t
        );
    }
    var Ui = null,
        ki = null;
    function Rd(t) {
        var e = Oi(t);
        if (e && (t = e.stateNode)) {
            var i = t[oe] || null;
            t: switch (((t = e.stateNode), e.type)) {
                case "input":
                    if (
                        (oo(
                            t,
                            i.value,
                            i.defaultValue,
                            i.defaultValue,
                            i.checked,
                            i.defaultChecked,
                            i.type,
                            i.name,
                        ),
                            (e = i.name),
                            i.type === "radio" && e != null)
                    ) {
                        for (i = t; i.parentNode;) i = i.parentNode;
                        for (
                            i = i.querySelectorAll(
                                'input[name="' +
                                Me("" + e) +
                                '"][type="radio"]',
                            ),
                            e = 0;
                            e < i.length;
                            e++
                        ) {
                            var l = i[e];
                            if (l !== t && l.form === t.form) {
                                var o = l[oe] || null;
                                if (!o) throw Error(r(90));
                                oo(
                                    l,
                                    o.value,
                                    o.defaultValue,
                                    o.defaultValue,
                                    o.checked,
                                    o.defaultChecked,
                                    o.type,
                                    o.name,
                                );
                            }
                        }
                        for (e = 0; e < i.length; e++)
                            ((l = i[e]), l.form === t.form && Ad(l));
                    }
                    break t;
                case "textarea":
                    Ed(t, i.value, i.defaultValue);
                    break t;
                case "select":
                    ((e = i.value), e != null && Bi(t, !!i.multiple, e, !1));
            }
        }
    }
    var mo = !1;
    function Od(t, e, i) {
        if (mo) return t(e, i);
        mo = !0;
        try {
            var l = t(e);
            return l;
        } finally {
            if (
                ((mo = !1),
                    (Ui !== null || ki !== null) &&
                    (Ps(),
                        Ui && ((e = Ui), (t = ki), (ki = Ui = null), Rd(e), t)))
            )
                for (e = 0; e < t.length; e++) Rd(t[e]);
        }
    }
    function za(t, e) {
        var i = t.stateNode;
        if (i === null) return null;
        var l = i[oe] || null;
        if (l === null) return null;
        i = l[e];
        t: switch (e) {
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
                ((l = !l.disabled) ||
                    ((t = t.type),
                        (l = !(
                            t === "button" ||
                            t === "input" ||
                            t === "select" ||
                            t === "textarea"
                        ))),
                    (t = !l));
                break t;
            default:
                t = !1;
        }
        if (t) return null;
        if (i && typeof i != "function") throw Error(r(231, e, typeof i));
        return i;
    }
    var rn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
        po = !1;
    if (rn)
        try {
            var _a = {};
            (Object.defineProperty(_a, "passive", {
                get: function () {
                    po = !0;
                },
            }),
                window.addEventListener("test", _a, _a),
                window.removeEventListener("test", _a, _a));
        } catch {
            po = !1;
        }
    var Dn = null,
        yo = null,
        os = null;
    function zd() {
        if (os) return os;
        var t,
            e = yo,
            i = e.length,
            l,
            o = "value" in Dn ? Dn.value : Dn.textContent,
            c = o.length;
        for (t = 0; t < i && e[t] === o[t]; t++);
        var g = i - t;
        for (l = 1; l <= g && e[i - l] === o[c - l]; l++);
        return (os = o.slice(t, 1 < l ? 1 - l : void 0));
    }
    function us(t) {
        var e = t.keyCode;
        return (
            "charCode" in t
                ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
                : (t = e),
            t === 10 && (t = 13),
            32 <= t || t === 13 ? t : 0
        );
    }
    function cs() {
        return !0;
    }
    function _d() {
        return !1;
    }
    function ue(t) {
        function e(i, l, o, c, g) {
            ((this._reactName = i),
                (this._targetInst = o),
                (this.type = l),
                (this.nativeEvent = c),
                (this.target = g),
                (this.currentTarget = null));
            for (var x in t)
                t.hasOwnProperty(x) &&
                    ((i = t[x]), (this[x] = i ? i(c) : c[x]));
            return (
                (this.isDefaultPrevented = (
                    c.defaultPrevented != null
                        ? c.defaultPrevented
                        : c.returnValue === !1
                )
                    ? cs
                    : _d),
                (this.isPropagationStopped = _d),
                this
            );
        }
        return (
            p(e.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var i = this.nativeEvent;
                    i &&
                        (i.preventDefault
                            ? i.preventDefault()
                            : typeof i.returnValue != "unknown" &&
                            (i.returnValue = !1),
                            (this.isDefaultPrevented = cs));
                },
                stopPropagation: function () {
                    var i = this.nativeEvent;
                    i &&
                        (i.stopPropagation
                            ? i.stopPropagation()
                            : typeof i.cancelBubble != "unknown" &&
                            (i.cancelBubble = !0),
                            (this.isPropagationStopped = cs));
                },
                persist: function () { },
                isPersistent: cs,
            }),
            e
        );
    }
    var ai = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
        fs = ue(ai),
        Va = p({}, ai, { view: 0, detail: 0 }),
        wv = ue(Va),
        go,
        vo,
        Ba,
        ds = p({}, Va, {
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
            getModifierState: bo,
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
                    : (t !== Ba &&
                        (Ba && t.type === "mousemove"
                            ? ((go = t.screenX - Ba.screenX),
                                (vo = t.screenY - Ba.screenY))
                            : (vo = go = 0),
                            (Ba = t)),
                        go);
            },
            movementY: function (t) {
                return "movementY" in t ? t.movementY : vo;
            },
        }),
        Vd = ue(ds),
        Cv = p({}, ds, { dataTransfer: 0 }),
        Av = ue(Cv),
        jv = p({}, Va, { relatedTarget: 0 }),
        xo = ue(jv),
        Ev = p({}, ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Mv = ue(Ev),
        Dv = p({}, ai, {
            clipboardData: function (t) {
                return "clipboardData" in t
                    ? t.clipboardData
                    : window.clipboardData;
            },
        }),
        Nv = ue(Dv),
        Rv = p({}, ai, { data: 0 }),
        Bd = ue(Rv),
        Ov = {
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
        zv = {
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
        _v = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function Vv(t) {
        var e = this.nativeEvent;
        return e.getModifierState
            ? e.getModifierState(t)
            : (t = _v[t])
                ? !!e[t]
                : !1;
    }
    function bo() {
        return Vv;
    }
    var Bv = p({}, Va, {
        key: function (t) {
            if (t.key) {
                var e = Ov[t.key] || t.key;
                if (e !== "Unidentified") return e;
            }
            return t.type === "keypress"
                ? ((t = us(t)), t === 13 ? "Enter" : String.fromCharCode(t))
                : t.type === "keydown" || t.type === "keyup"
                    ? zv[t.keyCode] || "Unidentified"
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
        getModifierState: bo,
        charCode: function (t) {
            return t.type === "keypress" ? us(t) : 0;
        },
        keyCode: function (t) {
            return t.type === "keydown" || t.type === "keyup"
                ? t.keyCode
                : 0;
        },
        which: function (t) {
            return t.type === "keypress"
                ? us(t)
                : t.type === "keydown" || t.type === "keyup"
                    ? t.keyCode
                    : 0;
        },
    }),
        Lv = ue(Bv),
        Uv = p({}, ds, {
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
        Ld = ue(Uv),
        kv = p({}, Va, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: bo,
        }),
        Hv = ue(kv),
        qv = p({}, ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Yv = ue(qv),
        Gv = p({}, ds, {
            deltaX: function (t) {
                return "deltaX" in t
                    ? t.deltaX
                    : "wheelDeltaX" in t
                        ? -t.wheelDeltaX
                        : 0;
            },
            deltaY: function (t) {
                return "deltaY" in t
                    ? t.deltaY
                    : "wheelDeltaY" in t
                        ? -t.wheelDeltaY
                        : "wheelDelta" in t
                            ? -t.wheelDelta
                            : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Xv = ue(Gv),
        Kv = p({}, ai, { newState: 0, oldState: 0 }),
        Pv = ue(Kv),
        Qv = [9, 13, 27, 32],
        So = rn && "CompositionEvent" in window,
        La = null;
    rn && "documentMode" in document && (La = document.documentMode);
    var Zv = rn && "TextEvent" in window && !La,
        Ud = rn && (!So || (La && 8 < La && 11 >= La)),
        kd = " ",
        Hd = !1;
    function qd(t, e) {
        switch (t) {
            case "keyup":
                return Qv.indexOf(e.keyCode) !== -1;
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
    function Yd(t) {
        return (
            (t = t.detail),
            typeof t == "object" && "data" in t ? t.data : null
        );
    }
    var Hi = !1;
    function Fv(t, e) {
        switch (t) {
            case "compositionend":
                return Yd(e);
            case "keypress":
                return e.which !== 32 ? null : ((Hd = !0), kd);
            case "textInput":
                return ((t = e.data), t === kd && Hd ? null : t);
            default:
                return null;
        }
    }
    function $v(t, e) {
        if (Hi)
            return t === "compositionend" || (!So && qd(t, e))
                ? ((t = zd()), (os = yo = Dn = null), (Hi = !1), t)
                : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(e.ctrlKey || e.altKey || e.metaKey) ||
                    (e.ctrlKey && e.altKey)
                ) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which);
                }
                return null;
            case "compositionend":
                return Ud && e.locale !== "ko" ? null : e.data;
            default:
                return null;
        }
    }
    var Jv = {
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
    function Gd(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Jv[t.type] : e === "textarea";
    }
    function Xd(t, e, i, l) {
        (Ui ? (ki ? ki.push(l) : (ki = [l])) : (Ui = l),
            (e = Ws(e, "onChange")),
            0 < e.length &&
            ((i = new fs("onChange", "change", null, i, l)),
                t.push({ event: i, listeners: e })));
    }
    var Ua = null,
        ka = null;
    function Wv(t) {
        Cp(t, 0);
    }
    function hs(t) {
        var e = Oa(t);
        if (Ad(e)) return t;
    }
    function Kd(t, e) {
        if (t === "change") return e;
    }
    var Pd = !1;
    if (rn) {
        var To;
        if (rn) {
            var wo = "oninput" in document;
            if (!wo) {
                var Qd = document.createElement("div");
                (Qd.setAttribute("oninput", "return;"),
                    (wo = typeof Qd.oninput == "function"));
            }
            To = wo;
        } else To = !1;
        Pd = To && (!document.documentMode || 9 < document.documentMode);
    }
    function Zd() {
        Ua && (Ua.detachEvent("onpropertychange", Fd), (ka = Ua = null));
    }
    function Fd(t) {
        if (t.propertyName === "value" && hs(ka)) {
            var e = [];
            (Xd(e, ka, t, ho(t)), Od(Wv, e));
        }
    }
    function Iv(t, e, i) {
        t === "focusin"
            ? (Zd(), (Ua = e), (ka = i), Ua.attachEvent("onpropertychange", Fd))
            : t === "focusout" && Zd();
    }
    function tx(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return hs(ka);
    }
    function ex(t, e) {
        if (t === "click") return hs(e);
    }
    function nx(t, e) {
        if (t === "input" || t === "change") return hs(e);
    }
    function ix(t, e) {
        return (
            (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
        );
    }
    var ve = typeof Object.is == "function" ? Object.is : ix;
    function Ha(t, e) {
        if (ve(t, e)) return !0;
        if (
            typeof t != "object" ||
            t === null ||
            typeof e != "object" ||
            e === null
        )
            return !1;
        var i = Object.keys(t),
            l = Object.keys(e);
        if (i.length !== l.length) return !1;
        for (l = 0; l < i.length; l++) {
            var o = i[l];
            if (!Jr.call(e, o) || !ve(t[o], e[o])) return !1;
        }
        return !0;
    }
    function $d(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t;
    }
    function Jd(t, e) {
        var i = $d(t);
        t = 0;
        for (var l; i;) {
            if (i.nodeType === 3) {
                if (((l = t + i.textContent.length), t <= e && l >= e))
                    return { node: i, offset: e - t };
                t = l;
            }
            t: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break t;
                    }
                    i = i.parentNode;
                }
                i = void 0;
            }
            i = $d(i);
        }
    }
    function Wd(t, e) {
        return t && e
            ? t === e
                ? !0
                : t && t.nodeType === 3
                    ? !1
                    : e && e.nodeType === 3
                        ? Wd(t, e.parentNode)
                        : "contains" in t
                            ? t.contains(e)
                            : t.compareDocumentPosition
                                ? !!(t.compareDocumentPosition(e) & 16)
                                : !1
            : !1;
    }
    function Id(t) {
        t =
            t != null &&
                t.ownerDocument != null &&
                t.ownerDocument.defaultView != null
                ? t.ownerDocument.defaultView
                : window;
        for (var e = ss(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var i = typeof e.contentWindow.location.href == "string";
            } catch {
                i = !1;
            }
            if (i) t = e.contentWindow;
            else break;
            e = ss(t.document);
        }
        return e;
    }
    function Co(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return (
            e &&
            ((e === "input" &&
                (t.type === "text" ||
                    t.type === "search" ||
                    t.type === "tel" ||
                    t.type === "url" ||
                    t.type === "password")) ||
                e === "textarea" ||
                t.contentEditable === "true")
        );
    }
    var ax = rn && "documentMode" in document && 11 >= document.documentMode,
        qi = null,
        Ao = null,
        qa = null,
        jo = !1;
    function th(t, e, i) {
        var l =
            i.window === i
                ? i.document
                : i.nodeType === 9
                    ? i
                    : i.ownerDocument;
        jo ||
            qi == null ||
            qi !== ss(l) ||
            ((l = qi),
                "selectionStart" in l && Co(l)
                    ? (l = { start: l.selectionStart, end: l.selectionEnd })
                    : ((l = (
                        (l.ownerDocument && l.ownerDocument.defaultView) ||
                        window
                    ).getSelection()),
                        (l = {
                            anchorNode: l.anchorNode,
                            anchorOffset: l.anchorOffset,
                            focusNode: l.focusNode,
                            focusOffset: l.focusOffset,
                        })),
                (qa && Ha(qa, l)) ||
                ((qa = l),
                    (l = Ws(Ao, "onSelect")),
                    0 < l.length &&
                    ((e = new fs("onSelect", "select", null, e, i)),
                        t.push({ event: e, listeners: l }),
                        (e.target = qi))));
    }
    function li(t, e) {
        var i = {};
        return (
            (i[t.toLowerCase()] = e.toLowerCase()),
            (i["Webkit" + t] = "webkit" + e),
            (i["Moz" + t] = "moz" + e),
            i
        );
    }
    var Yi = {
        animationend: li("Animation", "AnimationEnd"),
        animationiteration: li("Animation", "AnimationIteration"),
        animationstart: li("Animation", "AnimationStart"),
        transitionrun: li("Transition", "TransitionRun"),
        transitionstart: li("Transition", "TransitionStart"),
        transitioncancel: li("Transition", "TransitionCancel"),
        transitionend: li("Transition", "TransitionEnd"),
    },
        Eo = {},
        eh = {};
    rn &&
        ((eh = document.createElement("div").style),
            "AnimationEvent" in window ||
            (delete Yi.animationend.animation,
                delete Yi.animationiteration.animation,
                delete Yi.animationstart.animation),
            "TransitionEvent" in window || delete Yi.transitionend.transition);
    function si(t) {
        if (Eo[t]) return Eo[t];
        if (!Yi[t]) return t;
        var e = Yi[t],
            i;
        for (i in e) if (e.hasOwnProperty(i) && i in eh) return (Eo[t] = e[i]);
        return t;
    }
    var nh = si("animationend"),
        ih = si("animationiteration"),
        ah = si("animationstart"),
        lx = si("transitionrun"),
        sx = si("transitionstart"),
        rx = si("transitioncancel"),
        lh = si("transitionend"),
        sh = new Map(),
        Mo =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
            );
    Mo.push("scrollEnd");
    function He(t, e) {
        (sh.set(t, e), ii(e, [t]));
    }
    var rh = new WeakMap();
    function De(t, e) {
        if (typeof t == "object" && t !== null) {
            var i = rh.get(t);
            return i !== void 0
                ? i
                : ((e = { value: t, source: e, stack: wd(e) }),
                    rh.set(t, e),
                    e);
        }
        return { value: t, source: e, stack: wd(e) };
    }
    var Ne = [],
        Gi = 0,
        Do = 0;
    function ms() {
        for (var t = Gi, e = (Do = Gi = 0); e < t;) {
            var i = Ne[e];
            Ne[e++] = null;
            var l = Ne[e];
            Ne[e++] = null;
            var o = Ne[e];
            Ne[e++] = null;
            var c = Ne[e];
            if (((Ne[e++] = null), l !== null && o !== null)) {
                var g = l.pending;
                (g === null ? (o.next = o) : ((o.next = g.next), (g.next = o)),
                    (l.pending = o));
            }
            c !== 0 && oh(i, o, c);
        }
    }
    function ps(t, e, i, l) {
        ((Ne[Gi++] = t),
            (Ne[Gi++] = e),
            (Ne[Gi++] = i),
            (Ne[Gi++] = l),
            (Do |= l),
            (t.lanes |= l),
            (t = t.alternate),
            t !== null && (t.lanes |= l));
    }
    function No(t, e, i, l) {
        return (ps(t, e, i, l), ys(t));
    }
    function Xi(t, e) {
        return (ps(t, null, null, e), ys(t));
    }
    function oh(t, e, i) {
        t.lanes |= i;
        var l = t.alternate;
        l !== null && (l.lanes |= i);
        for (var o = !1, c = t.return; c !== null;)
            ((c.childLanes |= i),
                (l = c.alternate),
                l !== null && (l.childLanes |= i),
                c.tag === 22 &&
                ((t = c.stateNode),
                    t === null || t._visibility & 1 || (o = !0)),
                (t = c),
                (c = c.return));
        return t.tag === 3
            ? ((c = t.stateNode),
                o &&
                e !== null &&
                ((o = 31 - ge(i)),
                    (t = c.hiddenUpdates),
                    (l = t[o]),
                    l === null ? (t[o] = [e]) : l.push(e),
                    (e.lane = i | 536870912)),
                c)
            : null;
    }
    function ys(t) {
        if (50 < dl) throw ((dl = 0), (Bu = null), Error(r(185)));
        for (var e = t.return; e !== null;) ((t = e), (e = t.return));
        return t.tag === 3 ? t.stateNode : null;
    }
    var Ki = {};
    function ox(t, e, i, l) {
        ((this.tag = t),
            (this.key = i),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                null),
            (this.mode = l),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function xe(t, e, i, l) {
        return new ox(t, e, i, l);
    }
    function Ro(t) {
        return ((t = t.prototype), !(!t || !t.isReactComponent));
    }
    function on(t, e) {
        var i = t.alternate;
        return (
            i === null
                ? ((i = xe(t.tag, e, t.key, t.mode)),
                    (i.elementType = t.elementType),
                    (i.type = t.type),
                    (i.stateNode = t.stateNode),
                    (i.alternate = t),
                    (t.alternate = i))
                : ((i.pendingProps = e),
                    (i.type = t.type),
                    (i.flags = 0),
                    (i.subtreeFlags = 0),
                    (i.deletions = null)),
            (i.flags = t.flags & 65011712),
            (i.childLanes = t.childLanes),
            (i.lanes = t.lanes),
            (i.child = t.child),
            (i.memoizedProps = t.memoizedProps),
            (i.memoizedState = t.memoizedState),
            (i.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (i.dependencies =
                e === null
                    ? null
                    : { lanes: e.lanes, firstContext: e.firstContext }),
            (i.sibling = t.sibling),
            (i.index = t.index),
            (i.ref = t.ref),
            (i.refCleanup = t.refCleanup),
            i
        );
    }
    function uh(t, e) {
        t.flags &= 65011714;
        var i = t.alternate;
        return (
            i === null
                ? ((t.childLanes = 0),
                    (t.lanes = e),
                    (t.child = null),
                    (t.subtreeFlags = 0),
                    (t.memoizedProps = null),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    (t.dependencies = null),
                    (t.stateNode = null))
                : ((t.childLanes = i.childLanes),
                    (t.lanes = i.lanes),
                    (t.child = i.child),
                    (t.subtreeFlags = 0),
                    (t.deletions = null),
                    (t.memoizedProps = i.memoizedProps),
                    (t.memoizedState = i.memoizedState),
                    (t.updateQueue = i.updateQueue),
                    (t.type = i.type),
                    (e = i.dependencies),
                    (t.dependencies =
                        e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
            t
        );
    }
    function gs(t, e, i, l, o, c) {
        var g = 0;
        if (((l = t), typeof t == "function")) Ro(t) && (g = 1);
        else if (typeof t == "string")
            g = cb(t, i, et.current)
                ? 26
                : t === "html" || t === "head" || t === "body"
                    ? 27
                    : 5;
        else
            t: switch (t) {
                case st:
                    return (
                        (t = xe(31, i, e, o)),
                        (t.elementType = st),
                        (t.lanes = c),
                        t
                    );
                case M:
                    return ri(i.children, o, c, e);
                case H:
                    ((g = 8), (o |= 24));
                    break;
                case V:
                    return (
                        (t = xe(12, i, e, o | 2)),
                        (t.elementType = V),
                        (t.lanes = c),
                        t
                    );
                case z:
                    return (
                        (t = xe(13, i, e, o)),
                        (t.elementType = z),
                        (t.lanes = c),
                        t
                    );
                case P:
                    return (
                        (t = xe(19, i, e, o)),
                        (t.elementType = P),
                        (t.lanes = c),
                        t
                    );
                default:
                    if (typeof t == "object" && t !== null)
                        switch (t.$$typeof) {
                            case U:
                            case G:
                                g = 10;
                                break t;
                            case O:
                                g = 9;
                                break t;
                            case K:
                                g = 11;
                                break t;
                            case J:
                                g = 14;
                                break t;
                            case Z:
                                ((g = 16), (l = null));
                                break t;
                        }
                    ((g = 29),
                        (i = Error(r(130, t === null ? "null" : typeof t, ""))),
                        (l = null));
            }
        return (
            (e = xe(g, i, e, o)),
            (e.elementType = t),
            (e.type = l),
            (e.lanes = c),
            e
        );
    }
    function ri(t, e, i, l) {
        return ((t = xe(7, t, l, e)), (t.lanes = i), t);
    }
    function Oo(t, e, i) {
        return ((t = xe(6, t, null, e)), (t.lanes = i), t);
    }
    function zo(t, e, i) {
        return (
            (e = xe(4, t.children !== null ? t.children : [], t.key, e)),
            (e.lanes = i),
            (e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation,
            }),
            e
        );
    }
    var Pi = [],
        Qi = 0,
        vs = null,
        xs = 0,
        Re = [],
        Oe = 0,
        oi = null,
        un = 1,
        cn = "";
    function ui(t, e) {
        ((Pi[Qi++] = xs), (Pi[Qi++] = vs), (vs = t), (xs = e));
    }
    function ch(t, e, i) {
        ((Re[Oe++] = un), (Re[Oe++] = cn), (Re[Oe++] = oi), (oi = t));
        var l = un;
        t = cn;
        var o = 32 - ge(l) - 1;
        ((l &= ~(1 << o)), (i += 1));
        var c = 32 - ge(e) + o;
        if (30 < c) {
            var g = o - (o % 5);
            ((c = (l & ((1 << g) - 1)).toString(32)),
                (l >>= g),
                (o -= g),
                (un = (1 << (32 - ge(e) + o)) | (i << o) | l),
                (cn = c + t));
        } else ((un = (1 << c) | (i << o) | l), (cn = t));
    }
    function _o(t) {
        t.return !== null && (ui(t, 1), ch(t, 1, 0));
    }
    function Vo(t) {
        for (; t === vs;)
            ((vs = Pi[--Qi]),
                (Pi[Qi] = null),
                (xs = Pi[--Qi]),
                (Pi[Qi] = null));
        for (; t === oi;)
            ((oi = Re[--Oe]),
                (Re[Oe] = null),
                (cn = Re[--Oe]),
                (Re[Oe] = null),
                (un = Re[--Oe]),
                (Re[Oe] = null));
    }
    var se = null,
        Rt = null,
        gt = !1,
        ci = null,
        Fe = !1,
        Bo = Error(r(519));
    function fi(t) {
        var e = Error(r(418, ""));
        throw (Xa(De(e, t)), Bo);
    }
    function fh(t) {
        var e = t.stateNode,
            i = t.type,
            l = t.memoizedProps;
        switch (((e[ie] = t), (e[oe] = l), i)) {
            case "dialog":
                (dt("cancel", e), dt("close", e));
                break;
            case "iframe":
            case "object":
            case "embed":
                dt("load", e);
                break;
            case "video":
            case "audio":
                for (i = 0; i < ml.length; i++) dt(ml[i], e);
                break;
            case "source":
                dt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                (dt("error", e), dt("load", e));
                break;
            case "details":
                dt("toggle", e);
                break;
            case "input":
                (dt("invalid", e),
                    jd(
                        e,
                        l.value,
                        l.defaultValue,
                        l.checked,
                        l.defaultChecked,
                        l.type,
                        l.name,
                        !0,
                    ),
                    ls(e));
                break;
            case "select":
                dt("invalid", e);
                break;
            case "textarea":
                (dt("invalid", e),
                    Md(e, l.value, l.defaultValue, l.children),
                    ls(e));
        }
        ((i = l.children),
            (typeof i != "string" &&
                typeof i != "number" &&
                typeof i != "bigint") ||
                e.textContent === "" + i ||
                l.suppressHydrationWarning === !0 ||
                Mp(e.textContent, i)
                ? (l.popover != null &&
                    (dt("beforetoggle", e), dt("toggle", e)),
                    l.onScroll != null && dt("scroll", e),
                    l.onScrollEnd != null && dt("scrollend", e),
                    l.onClick != null && (e.onclick = Is),
                    (e = !0))
                : (e = !1),
            e || fi(t));
    }
    function dh(t) {
        for (se = t.return; se;)
            switch (se.tag) {
                case 5:
                case 13:
                    Fe = !1;
                    return;
                case 27:
                case 3:
                    Fe = !0;
                    return;
                default:
                    se = se.return;
            }
    }
    function Ya(t) {
        if (t !== se) return !1;
        if (!gt) return (dh(t), (gt = !0), !1);
        var e = t.tag,
            i;
        if (
            ((i = e !== 3 && e !== 27) &&
                ((i = e === 5) &&
                    ((i = t.type),
                        (i =
                            !(i !== "form" && i !== "button") ||
                            Wu(t.type, t.memoizedProps))),
                    (i = !i)),
                i && Rt && fi(t),
                dh(t),
                e === 13)
        ) {
            if (
                ((t = t.memoizedState),
                    (t = t !== null ? t.dehydrated : null),
                    !t)
            )
                throw Error(r(317));
            t: {
                for (t = t.nextSibling, e = 0; t;) {
                    if (t.nodeType === 8)
                        if (((i = t.data), i === "/$")) {
                            if (e === 0) {
                                Rt = Ye(t.nextSibling);
                                break t;
                            }
                            e--;
                        } else (i !== "$" && i !== "$!" && i !== "$?") || e++;
                    t = t.nextSibling;
                }
                Rt = null;
            }
        } else
            e === 27
                ? ((e = Rt),
                    Kn(t.type) ? ((t = nc), (nc = null), (Rt = t)) : (Rt = e))
                : (Rt = se ? Ye(t.stateNode.nextSibling) : null);
        return !0;
    }
    function Ga() {
        ((Rt = se = null), (gt = !1));
    }
    function hh() {
        var t = ci;
        return (
            t !== null &&
            (de === null ? (de = t) : de.push.apply(de, t), (ci = null)),
            t
        );
    }
    function Xa(t) {
        ci === null ? (ci = [t]) : ci.push(t);
    }
    var Lo = Y(null),
        di = null,
        fn = null;
    function Nn(t, e, i) {
        (F(Lo, e._currentValue), (e._currentValue = i));
    }
    function dn(t) {
        ((t._currentValue = Lo.current), $(Lo));
    }
    function Uo(t, e, i) {
        for (; t !== null;) {
            var l = t.alternate;
            if (
                ((t.childLanes & e) !== e
                    ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
                    : l !== null &&
                    (l.childLanes & e) !== e &&
                    (l.childLanes |= e),
                    t === i)
            )
                break;
            t = t.return;
        }
    }
    function ko(t, e, i, l) {
        var o = t.child;
        for (o !== null && (o.return = t); o !== null;) {
            var c = o.dependencies;
            if (c !== null) {
                var g = o.child;
                c = c.firstContext;
                t: for (; c !== null;) {
                    var x = c;
                    c = o;
                    for (var T = 0; T < e.length; T++)
                        if (x.context === e[T]) {
                            ((c.lanes |= i),
                                (x = c.alternate),
                                x !== null && (x.lanes |= i),
                                Uo(c.return, i, t),
                                l || (g = null));
                            break t;
                        }
                    c = x.next;
                }
            } else if (o.tag === 18) {
                if (((g = o.return), g === null)) throw Error(r(341));
                ((g.lanes |= i),
                    (c = g.alternate),
                    c !== null && (c.lanes |= i),
                    Uo(g, i, t),
                    (g = null));
            } else g = o.child;
            if (g !== null) g.return = o;
            else
                for (g = o; g !== null;) {
                    if (g === t) {
                        g = null;
                        break;
                    }
                    if (((o = g.sibling), o !== null)) {
                        ((o.return = g.return), (g = o));
                        break;
                    }
                    g = g.return;
                }
            o = g;
        }
    }
    function Ka(t, e, i, l) {
        t = null;
        for (var o = e, c = !1; o !== null;) {
            if (!c) {
                if ((o.flags & 524288) !== 0) c = !0;
                else if ((o.flags & 262144) !== 0) break;
            }
            if (o.tag === 10) {
                var g = o.alternate;
                if (g === null) throw Error(r(387));
                if (((g = g.memoizedProps), g !== null)) {
                    var x = o.type;
                    ve(o.pendingProps.value, g.value) ||
                        (t !== null ? t.push(x) : (t = [x]));
                }
            } else if (o === pe.current) {
                if (((g = o.alternate), g === null)) throw Error(r(387));
                g.memoizedState.memoizedState !==
                    o.memoizedState.memoizedState &&
                    (t !== null ? t.push(bl) : (t = [bl]));
            }
            o = o.return;
        }
        (t !== null && ko(e, t, i, l), (e.flags |= 262144));
    }
    function bs(t) {
        for (t = t.firstContext; t !== null;) {
            if (!ve(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next;
        }
        return !1;
    }
    function hi(t) {
        ((di = t),
            (fn = null),
            (t = t.dependencies),
            t !== null && (t.firstContext = null));
    }
    function ae(t) {
        return mh(di, t);
    }
    function Ss(t, e) {
        return (di === null && hi(t), mh(t, e));
    }
    function mh(t, e) {
        var i = e._currentValue;
        if (((e = { context: e, memoizedValue: i, next: null }), fn === null)) {
            if (t === null) throw Error(r(308));
            ((fn = e),
                (t.dependencies = { lanes: 0, firstContext: e }),
                (t.flags |= 524288));
        } else fn = fn.next = e;
        return i;
    }
    var ux =
        typeof AbortController < "u"
            ? AbortController
            : function () {
                var t = [],
                    e = (this.signal = {
                        aborted: !1,
                        addEventListener: function (i, l) {
                            t.push(l);
                        },
                    });
                this.abort = function () {
                    ((e.aborted = !0),
                        t.forEach(function (i) {
                            return i();
                        }));
                };
            },
        cx = n.unstable_scheduleCallback,
        fx = n.unstable_NormalPriority,
        Gt = {
            $$typeof: G,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function Ho() {
        return { controller: new ux(), data: new Map(), refCount: 0 };
    }
    function Pa(t) {
        (t.refCount--,
            t.refCount === 0 &&
            cx(fx, function () {
                t.controller.abort();
            }));
    }
    var Qa = null,
        qo = 0,
        Zi = 0,
        Fi = null;
    function dx(t, e) {
        if (Qa === null) {
            var i = (Qa = []);
            ((qo = 0),
                (Zi = Gu()),
                (Fi = {
                    status: "pending",
                    value: void 0,
                    then: function (l) {
                        i.push(l);
                    },
                }));
        }
        return (qo++, e.then(ph, ph), e);
    }
    function ph() {
        if (--qo === 0 && Qa !== null) {
            Fi !== null && (Fi.status = "fulfilled");
            var t = Qa;
            ((Qa = null), (Zi = 0), (Fi = null));
            for (var e = 0; e < t.length; e++) (0, t[e])();
        }
    }
    function hx(t, e) {
        var i = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function (o) {
                    i.push(o);
                },
            };
        return (
            t.then(
                function () {
                    ((l.status = "fulfilled"), (l.value = e));
                    for (var o = 0; o < i.length; o++) (0, i[o])(e);
                },
                function (o) {
                    for (
                        l.status = "rejected", l.reason = o, o = 0;
                        o < i.length;
                        o++
                    )
                        (0, i[o])(void 0);
                },
            ),
            l
        );
    }
    var yh = L.S;
    L.S = function (t, e) {
        (typeof e == "object" &&
            e !== null &&
            typeof e.then == "function" &&
            dx(t, e),
            yh !== null && yh(t, e));
    };
    var mi = Y(null);
    function Yo() {
        var t = mi.current;
        return t !== null ? t : At.pooledCache;
    }
    function Ts(t, e) {
        e === null ? F(mi, mi.current) : F(mi, e.pool);
    }
    function gh() {
        var t = Yo();
        return t === null ? null : { parent: Gt._currentValue, pool: t };
    }
    var Za = Error(r(460)),
        vh = Error(r(474)),
        ws = Error(r(542)),
        Go = { then: function () { } };
    function xh(t) {
        return ((t = t.status), t === "fulfilled" || t === "rejected");
    }
    function Cs() { }
    function bh(t, e, i) {
        switch (
        ((i = t[i]),
            i === void 0 ? t.push(e) : i !== e && (e.then(Cs, Cs), (e = i)),
            e.status)
        ) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw ((t = e.reason), Th(t), t);
            default:
                if (typeof e.status == "string") e.then(Cs, Cs);
                else {
                    if (((t = At), t !== null && 100 < t.shellSuspendCounter))
                        throw Error(r(482));
                    ((t = e),
                        (t.status = "pending"),
                        t.then(
                            function (l) {
                                if (e.status === "pending") {
                                    var o = e;
                                    ((o.status = "fulfilled"), (o.value = l));
                                }
                            },
                            function (l) {
                                if (e.status === "pending") {
                                    var o = e;
                                    ((o.status = "rejected"), (o.reason = l));
                                }
                            },
                        ));
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw ((t = e.reason), Th(t), t);
                }
                throw ((Fa = e), Za);
        }
    }
    var Fa = null;
    function Sh() {
        if (Fa === null) throw Error(r(459));
        var t = Fa;
        return ((Fa = null), t);
    }
    function Th(t) {
        if (t === Za || t === ws) throw Error(r(483));
    }
    var Rn = !1;
    function Xo(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Ko(t, e) {
        ((t = t.updateQueue),
            e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                callbacks: null,
            }));
    }
    function On(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function zn(t, e, i) {
        var l = t.updateQueue;
        if (l === null) return null;
        if (((l = l.shared), (vt & 2) !== 0)) {
            var o = l.pending;
            return (
                o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
                (l.pending = e),
                (e = ys(t)),
                oh(t, null, i),
                e
            );
        }
        return (ps(t, l, e, i), ys(t));
    }
    function $a(t, e, i) {
        if (
            ((e = e.updateQueue),
                e !== null && ((e = e.shared), (i & 4194048) !== 0))
        ) {
            var l = e.lanes;
            ((l &= t.pendingLanes), (i |= l), (e.lanes = i), pd(t, i));
        }
    }
    function Po(t, e) {
        var i = t.updateQueue,
            l = t.alternate;
        if (l !== null && ((l = l.updateQueue), i === l)) {
            var o = null,
                c = null;
            if (((i = i.firstBaseUpdate), i !== null)) {
                do {
                    var g = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                    };
                    (c === null ? (o = c = g) : (c = c.next = g), (i = i.next));
                } while (i !== null);
                c === null ? (o = c = e) : (c = c.next = e);
            } else o = c = e;
            ((i = {
                baseState: l.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: l.shared,
                callbacks: l.callbacks,
            }),
                (t.updateQueue = i));
            return;
        }
        ((t = i.lastBaseUpdate),
            t === null ? (i.firstBaseUpdate = e) : (t.next = e),
            (i.lastBaseUpdate = e));
    }
    var Qo = !1;
    function Ja() {
        if (Qo) {
            var t = Fi;
            if (t !== null) throw t;
        }
    }
    function Wa(t, e, i, l) {
        Qo = !1;
        var o = t.updateQueue;
        Rn = !1;
        var c = o.firstBaseUpdate,
            g = o.lastBaseUpdate,
            x = o.shared.pending;
        if (x !== null) {
            o.shared.pending = null;
            var T = x,
                D = T.next;
            ((T.next = null), g === null ? (c = D) : (g.next = D), (g = T));
            var B = t.alternate;
            B !== null &&
                ((B = B.updateQueue),
                    (x = B.lastBaseUpdate),
                    x !== g &&
                    (x === null ? (B.firstBaseUpdate = D) : (x.next = D),
                        (B.lastBaseUpdate = T)));
        }
        if (c !== null) {
            var q = o.baseState;
            ((g = 0), (B = D = T = null), (x = c));
            do {
                var N = x.lane & -536870913,
                    R = N !== x.lane;
                if (R ? (mt & N) === N : (l & N) === N) {
                    (N !== 0 && N === Zi && (Qo = !0),
                        B !== null &&
                        (B = B.next =
                        {
                            lane: 0,
                            tag: x.tag,
                            payload: x.payload,
                            callback: null,
                            next: null,
                        }));
                    t: {
                        var at = t,
                            nt = x;
                        N = e;
                        var wt = i;
                        switch (nt.tag) {
                            case 1:
                                if (
                                    ((at = nt.payload), typeof at == "function")
                                ) {
                                    q = at.call(wt, q, N);
                                    break t;
                                }
                                q = at;
                                break t;
                            case 3:
                                at.flags = (at.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((at = nt.payload),
                                        (N =
                                            typeof at == "function"
                                                ? at.call(wt, q, N)
                                                : at),
                                        N == null)
                                )
                                    break t;
                                q = p({}, q, N);
                                break t;
                            case 2:
                                Rn = !0;
                        }
                    }
                    ((N = x.callback),
                        N !== null &&
                        ((t.flags |= 64),
                            R && (t.flags |= 8192),
                            (R = o.callbacks),
                            R === null ? (o.callbacks = [N]) : R.push(N)));
                } else
                    ((R = {
                        lane: N,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null,
                    }),
                        B === null ? ((D = B = R), (T = q)) : (B = B.next = R),
                        (g |= N));
                if (((x = x.next), x === null)) {
                    if (((x = o.shared.pending), x === null)) break;
                    ((R = x),
                        (x = R.next),
                        (R.next = null),
                        (o.lastBaseUpdate = R),
                        (o.shared.pending = null));
                }
            } while (!0);
            (B === null && (T = q),
                (o.baseState = T),
                (o.firstBaseUpdate = D),
                (o.lastBaseUpdate = B),
                c === null && (o.shared.lanes = 0),
                (qn |= g),
                (t.lanes = g),
                (t.memoizedState = q));
        }
    }
    function wh(t, e) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(e);
    }
    function Ch(t, e) {
        var i = t.callbacks;
        if (i !== null)
            for (t.callbacks = null, t = 0; t < i.length; t++) wh(i[t], e);
    }
    var $i = Y(null),
        As = Y(0);
    function Ah(t, e) {
        ((t = xn), F(As, t), F($i, e), (xn = t | e.baseLanes));
    }
    function Zo() {
        (F(As, xn), F($i, $i.current));
    }
    function Fo() {
        ((xn = As.current), $($i), $(As));
    }
    var _n = 0,
        ut = null,
        St = null,
        kt = null,
        js = !1,
        Ji = !1,
        pi = !1,
        Es = 0,
        Ia = 0,
        Wi = null,
        mx = 0;
    function Vt() {
        throw Error(r(321));
    }
    function $o(t, e) {
        if (e === null) return !1;
        for (var i = 0; i < e.length && i < t.length; i++)
            if (!ve(t[i], e[i])) return !1;
        return !0;
    }
    function Jo(t, e, i, l, o, c) {
        return (
            (_n = c),
            (ut = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (L.H = t === null || t.memoizedState === null ? om : um),
            (pi = !1),
            (c = i(l, o)),
            (pi = !1),
            Ji && (c = Eh(e, i, l, o)),
            jh(t),
            c
        );
    }
    function jh(t) {
        L.H = zs;
        var e = St !== null && St.next !== null;
        if (
            ((_n = 0),
                (kt = St = ut = null),
                (js = !1),
                (Ia = 0),
                (Wi = null),
                e)
        )
            throw Error(r(300));
        t === null ||
            Qt ||
            ((t = t.dependencies), t !== null && bs(t) && (Qt = !0));
    }
    function Eh(t, e, i, l) {
        ut = t;
        var o = 0;
        do {
            if ((Ji && (Wi = null), (Ia = 0), (Ji = !1), 25 <= o))
                throw Error(r(301));
            if (((o += 1), (kt = St = null), t.updateQueue != null)) {
                var c = t.updateQueue;
                ((c.lastEffect = null),
                    (c.events = null),
                    (c.stores = null),
                    c.memoCache != null && (c.memoCache.index = 0));
            }
            ((L.H = Sx), (c = e(i, l)));
        } while (Ji);
        return c;
    }
    function px() {
        var t = L.H,
            e = t.useState()[0];
        return (
            (e = typeof e.then == "function" ? tl(e) : e),
            (t = t.useState()[0]),
            (St !== null ? St.memoizedState : null) !== t && (ut.flags |= 1024),
            e
        );
    }
    function Wo() {
        var t = Es !== 0;
        return ((Es = 0), t);
    }
    function Io(t, e, i) {
        ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i));
    }
    function tu(t) {
        if (js) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                (e !== null && (e.pending = null), (t = t.next));
            }
            js = !1;
        }
        ((_n = 0),
            (kt = St = ut = null),
            (Ji = !1),
            (Ia = Es = 0),
            (Wi = null));
    }
    function ce() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            kt === null ? (ut.memoizedState = kt = t) : (kt = kt.next = t),
            kt
        );
    }
    function Ht() {
        if (St === null) {
            var t = ut.alternate;
            t = t !== null ? t.memoizedState : null;
        } else t = St.next;
        var e = kt === null ? ut.memoizedState : kt.next;
        if (e !== null) ((kt = e), (St = t));
        else {
            if (t === null)
                throw ut.alternate === null ? Error(r(467)) : Error(r(310));
            ((St = t),
                (t = {
                    memoizedState: St.memoizedState,
                    baseState: St.baseState,
                    baseQueue: St.baseQueue,
                    queue: St.queue,
                    next: null,
                }),
                kt === null ? (ut.memoizedState = kt = t) : (kt = kt.next = t));
        }
        return kt;
    }
    function eu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
        };
    }
    function tl(t) {
        var e = Ia;
        return (
            (Ia += 1),
            Wi === null && (Wi = []),
            (t = bh(Wi, t, e)),
            (e = ut),
            (kt === null ? e.memoizedState : kt.next) === null &&
            ((e = e.alternate),
                (L.H = e === null || e.memoizedState === null ? om : um)),
            t
        );
    }
    function Ms(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return tl(t);
            if (t.$$typeof === G) return ae(t);
        }
        throw Error(r(438, String(t)));
    }
    function nu(t) {
        var e = null,
            i = ut.updateQueue;
        if ((i !== null && (e = i.memoCache), e == null)) {
            var l = ut.alternate;
            l !== null &&
                ((l = l.updateQueue),
                    l !== null &&
                    ((l = l.memoCache),
                        l != null &&
                        (e = {
                            data: l.data.map(function (o) {
                                return o.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (e == null && (e = { data: [], index: 0 }),
                i === null && ((i = eu()), (ut.updateQueue = i)),
                (i.memoCache = e),
                (i = e.data[e.index]),
                i === void 0)
        )
            for (i = e.data[e.index] = Array(t), l = 0; l < t; l++) i[l] = jt;
        return (e.index++, i);
    }
    function hn(t, e) {
        return typeof e == "function" ? e(t) : e;
    }
    function Ds(t) {
        var e = Ht();
        return iu(e, St, t);
    }
    function iu(t, e, i) {
        var l = t.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = i;
        var o = t.baseQueue,
            c = l.pending;
        if (c !== null) {
            if (o !== null) {
                var g = o.next;
                ((o.next = c.next), (c.next = g));
            }
            ((e.baseQueue = o = c), (l.pending = null));
        }
        if (((c = t.baseState), o === null)) t.memoizedState = c;
        else {
            e = o.next;
            var x = (g = null),
                T = null,
                D = e,
                B = !1;
            do {
                var q = D.lane & -536870913;
                if (q !== D.lane ? (mt & q) === q : (_n & q) === q) {
                    var N = D.revertLane;
                    if (N === 0)
                        (T !== null &&
                            (T = T.next =
                            {
                                lane: 0,
                                revertLane: 0,
                                action: D.action,
                                hasEagerState: D.hasEagerState,
                                eagerState: D.eagerState,
                                next: null,
                            }),
                            q === Zi && (B = !0));
                    else if ((_n & N) === N) {
                        ((D = D.next), N === Zi && (B = !0));
                        continue;
                    } else
                        ((q = {
                            lane: 0,
                            revertLane: D.revertLane,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null,
                        }),
                            T === null
                                ? ((x = T = q), (g = c))
                                : (T = T.next = q),
                            (ut.lanes |= N),
                            (qn |= N));
                    ((q = D.action),
                        pi && i(c, q),
                        (c = D.hasEagerState ? D.eagerState : i(c, q)));
                } else
                    ((N = {
                        lane: q,
                        revertLane: D.revertLane,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null,
                    }),
                        T === null ? ((x = T = N), (g = c)) : (T = T.next = N),
                        (ut.lanes |= q),
                        (qn |= q));
                D = D.next;
            } while (D !== null && D !== e);
            if (
                (T === null ? (g = c) : (T.next = x),
                    !ve(c, t.memoizedState) &&
                    ((Qt = !0), B && ((i = Fi), i !== null)))
            )
                throw i;
            ((t.memoizedState = c),
                (t.baseState = g),
                (t.baseQueue = T),
                (l.lastRenderedState = c));
        }
        return (o === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
    }
    function au(t) {
        var e = Ht(),
            i = e.queue;
        if (i === null) throw Error(r(311));
        i.lastRenderedReducer = t;
        var l = i.dispatch,
            o = i.pending,
            c = e.memoizedState;
        if (o !== null) {
            i.pending = null;
            var g = (o = o.next);
            do ((c = t(c, g.action)), (g = g.next));
            while (g !== o);
            (ve(c, e.memoizedState) || (Qt = !0),
                (e.memoizedState = c),
                e.baseQueue === null && (e.baseState = c),
                (i.lastRenderedState = c));
        }
        return [c, l];
    }
    function Mh(t, e, i) {
        var l = ut,
            o = Ht(),
            c = gt;
        if (c) {
            if (i === void 0) throw Error(r(407));
            i = i();
        } else i = e();
        var g = !ve((St || o).memoizedState, i);
        (g && ((o.memoizedState = i), (Qt = !0)), (o = o.queue));
        var x = Rh.bind(null, l, o, t);
        if (
            (el(2048, 8, x, [t]),
                o.getSnapshot !== e ||
                g ||
                (kt !== null && kt.memoizedState.tag & 1))
        ) {
            if (
                ((l.flags |= 2048),
                    Ii(9, Ns(), Nh.bind(null, l, o, i, e), null),
                    At === null)
            )
                throw Error(r(349));
            c || (_n & 124) !== 0 || Dh(l, e, i);
        }
        return i;
    }
    function Dh(t, e, i) {
        ((t.flags |= 16384),
            (t = { getSnapshot: e, value: i }),
            (e = ut.updateQueue),
            e === null
                ? ((e = eu()), (ut.updateQueue = e), (e.stores = [t]))
                : ((i = e.stores), i === null ? (e.stores = [t]) : i.push(t)));
    }
    function Nh(t, e, i, l) {
        ((e.value = i), (e.getSnapshot = l), Oh(e) && zh(t));
    }
    function Rh(t, e, i) {
        return i(function () {
            Oh(e) && zh(t);
        });
    }
    function Oh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var i = e();
            return !ve(t, i);
        } catch {
            return !0;
        }
    }
    function zh(t) {
        var e = Xi(t, 2);
        e !== null && Ce(e, t, 2);
    }
    function lu(t) {
        var e = ce();
        if (typeof t == "function") {
            var i = t;
            if (((t = i()), pi)) {
                En(!0);
                try {
                    i();
                } finally {
                    En(!1);
                }
            }
        }
        return (
            (e.memoizedState = e.baseState = t),
            (e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: t,
            }),
            e
        );
    }
    function _h(t, e, i, l) {
        return ((t.baseState = i), iu(t, St, typeof l == "function" ? l : hn));
    }
    function yx(t, e, i, l, o) {
        if (Os(t)) throw Error(r(485));
        if (((t = e.action), t !== null)) {
            var c = {
                payload: o,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (g) {
                    c.listeners.push(g);
                },
            };
            (L.T !== null ? i(!0) : (c.isTransition = !1),
                l(c),
                (i = e.pending),
                i === null
                    ? ((c.next = e.pending = c), Vh(e, c))
                    : ((c.next = i.next), (e.pending = i.next = c)));
        }
    }
    function Vh(t, e) {
        var i = e.action,
            l = e.payload,
            o = t.state;
        if (e.isTransition) {
            var c = L.T,
                g = {};
            L.T = g;
            try {
                var x = i(o, l),
                    T = L.S;
                (T !== null && T(g, x), Bh(t, e, x));
            } catch (D) {
                su(t, e, D);
            } finally {
                L.T = c;
            }
        } else
            try {
                ((c = i(o, l)), Bh(t, e, c));
            } catch (D) {
                su(t, e, D);
            }
    }
    function Bh(t, e, i) {
        i !== null && typeof i == "object" && typeof i.then == "function"
            ? i.then(
                function (l) {
                    Lh(t, e, l);
                },
                function (l) {
                    return su(t, e, l);
                },
            )
            : Lh(t, e, i);
    }
    function Lh(t, e, i) {
        ((e.status = "fulfilled"),
            (e.value = i),
            Uh(e),
            (t.state = i),
            (e = t.pending),
            e !== null &&
            ((i = e.next),
                i === e
                    ? (t.pending = null)
                    : ((i = i.next), (e.next = i), Vh(t, i))));
    }
    function su(t, e, i) {
        var l = t.pending;
        if (((t.pending = null), l !== null)) {
            l = l.next;
            do ((e.status = "rejected"), (e.reason = i), Uh(e), (e = e.next));
            while (e !== l);
        }
        t.action = null;
    }
    function Uh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function kh(t, e) {
        return e;
    }
    function Hh(t, e) {
        if (gt) {
            var i = At.formState;
            if (i !== null) {
                t: {
                    var l = ut;
                    if (gt) {
                        if (Rt) {
                            e: {
                                for (var o = Rt, c = Fe; o.nodeType !== 8;) {
                                    if (!c) {
                                        o = null;
                                        break e;
                                    }
                                    if (((o = Ye(o.nextSibling)), o === null)) {
                                        o = null;
                                        break e;
                                    }
                                }
                                ((c = o.data),
                                    (o = c === "F!" || c === "F" ? o : null));
                            }
                            if (o) {
                                ((Rt = Ye(o.nextSibling)),
                                    (l = o.data === "F!"));
                                break t;
                            }
                        }
                        fi(l);
                    }
                    l = !1;
                }
                l && (e = i[0]);
            }
        }
        return (
            (i = ce()),
            (i.memoizedState = i.baseState = e),
            (l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: kh,
                lastRenderedState: e,
            }),
            (i.queue = l),
            (i = lm.bind(null, ut, l)),
            (l.dispatch = i),
            (l = lu(!1)),
            (c = fu.bind(null, ut, !1, l.queue)),
            (l = ce()),
            (o = { state: e, dispatch: null, action: t, pending: null }),
            (l.queue = o),
            (i = yx.bind(null, ut, o, c, i)),
            (o.dispatch = i),
            (l.memoizedState = t),
            [e, i, !1]
        );
    }
    function qh(t) {
        var e = Ht();
        return Yh(e, St, t);
    }
    function Yh(t, e, i) {
        if (
            ((e = iu(t, e, kh)[0]),
                (t = Ds(hn)[0]),
                typeof e == "object" && e !== null && typeof e.then == "function")
        )
            try {
                var l = tl(e);
            } catch (g) {
                throw g === Za ? ws : g;
            }
        else l = e;
        e = Ht();
        var o = e.queue,
            c = o.dispatch;
        return (
            i !== e.memoizedState &&
            ((ut.flags |= 2048), Ii(9, Ns(), gx.bind(null, o, i), null)),
            [l, c, t]
        );
    }
    function gx(t, e) {
        t.action = e;
    }
    function Gh(t) {
        var e = Ht(),
            i = St;
        if (i !== null) return Yh(e, i, t);
        (Ht(), (e = e.memoizedState), (i = Ht()));
        var l = i.queue.dispatch;
        return ((i.memoizedState = t), [e, l, !1]);
    }
    function Ii(t, e, i, l) {
        return (
            (t = { tag: t, create: i, deps: l, inst: e, next: null }),
            (e = ut.updateQueue),
            e === null && ((e = eu()), (ut.updateQueue = e)),
            (i = e.lastEffect),
            i === null
                ? (e.lastEffect = t.next = t)
                : ((l = i.next),
                    (i.next = t),
                    (t.next = l),
                    (e.lastEffect = t)),
            t
        );
    }
    function Ns() {
        return { destroy: void 0, resource: void 0 };
    }
    function Xh() {
        return Ht().memoizedState;
    }
    function Rs(t, e, i, l) {
        var o = ce();
        ((l = l === void 0 ? null : l),
            (ut.flags |= t),
            (o.memoizedState = Ii(1 | e, Ns(), i, l)));
    }
    function el(t, e, i, l) {
        var o = Ht();
        l = l === void 0 ? null : l;
        var c = o.memoizedState.inst;
        St !== null && l !== null && $o(l, St.memoizedState.deps)
            ? (o.memoizedState = Ii(e, c, i, l))
            : ((ut.flags |= t), (o.memoizedState = Ii(1 | e, c, i, l)));
    }
    function Kh(t, e) {
        Rs(8390656, 8, t, e);
    }
    function Ph(t, e) {
        el(2048, 8, t, e);
    }
    function Qh(t, e) {
        return el(4, 2, t, e);
    }
    function Zh(t, e) {
        return el(4, 4, t, e);
    }
    function Fh(t, e) {
        if (typeof e == "function") {
            t = t();
            var i = e(t);
            return function () {
                typeof i == "function" ? i() : e(null);
            };
        }
        if (e != null)
            return (
                (t = t()),
                (e.current = t),
                function () {
                    e.current = null;
                }
            );
    }
    function $h(t, e, i) {
        ((i = i != null ? i.concat([t]) : null),
            el(4, 4, Fh.bind(null, e, t), i));
    }
    function ru() { }
    function Jh(t, e) {
        var i = Ht();
        e = e === void 0 ? null : e;
        var l = i.memoizedState;
        return e !== null && $o(e, l[1])
            ? l[0]
            : ((i.memoizedState = [t, e]), t);
    }
    function Wh(t, e) {
        var i = Ht();
        e = e === void 0 ? null : e;
        var l = i.memoizedState;
        if (e !== null && $o(e, l[1])) return l[0];
        if (((l = t()), pi)) {
            En(!0);
            try {
                t();
            } finally {
                En(!1);
            }
        }
        return ((i.memoizedState = [l, e]), l);
    }
    function ou(t, e, i) {
        return i === void 0 || (_n & 1073741824) !== 0
            ? (t.memoizedState = e)
            : ((t.memoizedState = i),
                (t = ep()),
                (ut.lanes |= t),
                (qn |= t),
                i);
    }
    function Ih(t, e, i, l) {
        return ve(i, e)
            ? i
            : $i.current !== null
                ? ((t = ou(t, i, l)), ve(t, e) || (Qt = !0), t)
                : (_n & 42) === 0
                    ? ((Qt = !0), (t.memoizedState = i))
                    : ((t = ep()), (ut.lanes |= t), (qn |= t), e);
    }
    function tm(t, e, i, l, o) {
        var c = X.p;
        X.p = c !== 0 && 8 > c ? c : 8;
        var g = L.T,
            x = {};
        ((L.T = x), fu(t, !1, e, i));
        try {
            var T = o(),
                D = L.S;
            if (
                (D !== null && D(x, T),
                    T !== null &&
                    typeof T == "object" &&
                    typeof T.then == "function")
            ) {
                var B = hx(T, l);
                nl(t, e, B, we(t));
            } else nl(t, e, l, we(t));
        } catch (q) {
            nl(
                t,
                e,
                { then: function () { }, status: "rejected", reason: q },
                we(),
            );
        } finally {
            ((X.p = c), (L.T = g));
        }
    }
    function vx() { }
    function uu(t, e, i, l) {
        if (t.tag !== 5) throw Error(r(476));
        var o = em(t).queue;
        tm(
            t,
            o,
            e,
            I,
            i === null
                ? vx
                : function () {
                    return (nm(t), i(l));
                },
        );
    }
    function em(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: I,
            baseState: I,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: I,
            },
            next: null,
        };
        var i = {};
        return (
            (e.next = {
                memoizedState: i,
                baseState: i,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: hn,
                    lastRenderedState: i,
                },
                next: null,
            }),
            (t.memoizedState = e),
            (t = t.alternate),
            t !== null && (t.memoizedState = e),
            e
        );
    }
    function nm(t) {
        var e = em(t).next.queue;
        nl(t, e, {}, we());
    }
    function cu() {
        return ae(bl);
    }
    function im() {
        return Ht().memoizedState;
    }
    function am() {
        return Ht().memoizedState;
    }
    function xx(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var i = we();
                    t = On(i);
                    var l = zn(e, t, i);
                    (l !== null && (Ce(l, e, i), $a(l, e, i)),
                        (e = { cache: Ho() }),
                        (t.payload = e));
                    return;
            }
            e = e.return;
        }
    }
    function bx(t, e, i) {
        var l = we();
        ((i = {
            lane: l,
            revertLane: 0,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            Os(t)
                ? sm(e, i)
                : ((i = No(t, e, i, l)),
                    i !== null && (Ce(i, t, l), rm(i, e, l))));
    }
    function lm(t, e, i) {
        var l = we();
        nl(t, e, i, l);
    }
    function nl(t, e, i, l) {
        var o = {
            lane: l,
            revertLane: 0,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
        if (Os(t)) sm(e, o);
        else {
            var c = t.alternate;
            if (
                t.lanes === 0 &&
                (c === null || c.lanes === 0) &&
                ((c = e.lastRenderedReducer), c !== null)
            )
                try {
                    var g = e.lastRenderedState,
                        x = c(g, i);
                    if (((o.hasEagerState = !0), (o.eagerState = x), ve(x, g)))
                        return (ps(t, e, o, 0), At === null && ms(), !1);
                } catch {
                } finally {
                }
            if (((i = No(t, e, o, l)), i !== null))
                return (Ce(i, t, l), rm(i, e, l), !0);
        }
        return !1;
    }
    function fu(t, e, i, l) {
        if (
            ((l = {
                lane: 2,
                revertLane: Gu(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
                Os(t))
        ) {
            if (e) throw Error(r(479));
        } else ((e = No(t, i, l, 2)), e !== null && Ce(e, t, 2));
    }
    function Os(t) {
        var e = t.alternate;
        return t === ut || (e !== null && e === ut);
    }
    function sm(t, e) {
        Ji = js = !0;
        var i = t.pending;
        (i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
            (t.pending = e));
    }
    function rm(t, e, i) {
        if ((i & 4194048) !== 0) {
            var l = e.lanes;
            ((l &= t.pendingLanes), (i |= l), (e.lanes = i), pd(t, i));
        }
    }
    var zs = {
        readContext: ae,
        use: Ms,
        useCallback: Vt,
        useContext: Vt,
        useEffect: Vt,
        useImperativeHandle: Vt,
        useLayoutEffect: Vt,
        useInsertionEffect: Vt,
        useMemo: Vt,
        useReducer: Vt,
        useRef: Vt,
        useState: Vt,
        useDebugValue: Vt,
        useDeferredValue: Vt,
        useTransition: Vt,
        useSyncExternalStore: Vt,
        useId: Vt,
        useHostTransitionStatus: Vt,
        useFormState: Vt,
        useActionState: Vt,
        useOptimistic: Vt,
        useMemoCache: Vt,
        useCacheRefresh: Vt,
    },
        om = {
            readContext: ae,
            use: Ms,
            useCallback: function (t, e) {
                return ((ce().memoizedState = [t, e === void 0 ? null : e]), t);
            },
            useContext: ae,
            useEffect: Kh,
            useImperativeHandle: function (t, e, i) {
                ((i = i != null ? i.concat([t]) : null),
                    Rs(4194308, 4, Fh.bind(null, e, t), i));
            },
            useLayoutEffect: function (t, e) {
                return Rs(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
                Rs(4, 2, t, e);
            },
            useMemo: function (t, e) {
                var i = ce();
                e = e === void 0 ? null : e;
                var l = t();
                if (pi) {
                    En(!0);
                    try {
                        t();
                    } finally {
                        En(!1);
                    }
                }
                return ((i.memoizedState = [l, e]), l);
            },
            useReducer: function (t, e, i) {
                var l = ce();
                if (i !== void 0) {
                    var o = i(e);
                    if (pi) {
                        En(!0);
                        try {
                            i(e);
                        } finally {
                            En(!1);
                        }
                    }
                } else o = e;
                return (
                    (l.memoizedState = l.baseState = o),
                    (t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: o,
                    }),
                    (l.queue = t),
                    (t = t.dispatch = bx.bind(null, ut, t)),
                    [l.memoizedState, t]
                );
            },
            useRef: function (t) {
                var e = ce();
                return ((t = { current: t }), (e.memoizedState = t));
            },
            useState: function (t) {
                t = lu(t);
                var e = t.queue,
                    i = lm.bind(null, ut, e);
                return ((e.dispatch = i), [t.memoizedState, i]);
            },
            useDebugValue: ru,
            useDeferredValue: function (t, e) {
                var i = ce();
                return ou(i, t, e);
            },
            useTransition: function () {
                var t = lu(!1);
                return (
                    (t = tm.bind(null, ut, t.queue, !0, !1)),
                    (ce().memoizedState = t),
                    [!1, t]
                );
            },
            useSyncExternalStore: function (t, e, i) {
                var l = ut,
                    o = ce();
                if (gt) {
                    if (i === void 0) throw Error(r(407));
                    i = i();
                } else {
                    if (((i = e()), At === null)) throw Error(r(349));
                    (mt & 124) !== 0 || Dh(l, e, i);
                }
                o.memoizedState = i;
                var c = { value: i, getSnapshot: e };
                return (
                    (o.queue = c),
                    Kh(Rh.bind(null, l, c, t), [t]),
                    (l.flags |= 2048),
                    Ii(9, Ns(), Nh.bind(null, l, c, i, e), null),
                    i
                );
            },
            useId: function () {
                var t = ce(),
                    e = At.identifierPrefix;
                if (gt) {
                    var i = cn,
                        l = un;
                    ((i = (l & ~(1 << (32 - ge(l) - 1))).toString(32) + i),
                        (e = "«" + e + "R" + i),
                        (i = Es++),
                        0 < i && (e += "H" + i.toString(32)),
                        (e += "»"));
                } else ((i = mx++), (e = "«" + e + "r" + i.toString(32) + "»"));
                return (t.memoizedState = e);
            },
            useHostTransitionStatus: cu,
            useFormState: Hh,
            useActionState: Hh,
            useOptimistic: function (t) {
                var e = ce();
                e.memoizedState = e.baseState = t;
                var i = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null,
                };
                return (
                    (e.queue = i),
                    (e = fu.bind(null, ut, !0, i)),
                    (i.dispatch = e),
                    [t, e]
                );
            },
            useMemoCache: nu,
            useCacheRefresh: function () {
                return (ce().memoizedState = xx.bind(null, ut));
            },
        },
        um = {
            readContext: ae,
            use: Ms,
            useCallback: Jh,
            useContext: ae,
            useEffect: Ph,
            useImperativeHandle: $h,
            useInsertionEffect: Qh,
            useLayoutEffect: Zh,
            useMemo: Wh,
            useReducer: Ds,
            useRef: Xh,
            useState: function () {
                return Ds(hn);
            },
            useDebugValue: ru,
            useDeferredValue: function (t, e) {
                var i = Ht();
                return Ih(i, St.memoizedState, t, e);
            },
            useTransition: function () {
                var t = Ds(hn)[0],
                    e = Ht().memoizedState;
                return [typeof t == "boolean" ? t : tl(t), e];
            },
            useSyncExternalStore: Mh,
            useId: im,
            useHostTransitionStatus: cu,
            useFormState: qh,
            useActionState: qh,
            useOptimistic: function (t, e) {
                var i = Ht();
                return _h(i, St, t, e);
            },
            useMemoCache: nu,
            useCacheRefresh: am,
        },
        Sx = {
            readContext: ae,
            use: Ms,
            useCallback: Jh,
            useContext: ae,
            useEffect: Ph,
            useImperativeHandle: $h,
            useInsertionEffect: Qh,
            useLayoutEffect: Zh,
            useMemo: Wh,
            useReducer: au,
            useRef: Xh,
            useState: function () {
                return au(hn);
            },
            useDebugValue: ru,
            useDeferredValue: function (t, e) {
                var i = Ht();
                return St === null
                    ? ou(i, t, e)
                    : Ih(i, St.memoizedState, t, e);
            },
            useTransition: function () {
                var t = au(hn)[0],
                    e = Ht().memoizedState;
                return [typeof t == "boolean" ? t : tl(t), e];
            },
            useSyncExternalStore: Mh,
            useId: im,
            useHostTransitionStatus: cu,
            useFormState: Gh,
            useActionState: Gh,
            useOptimistic: function (t, e) {
                var i = Ht();
                return St !== null
                    ? _h(i, St, t, e)
                    : ((i.baseState = t), [t, i.queue.dispatch]);
            },
            useMemoCache: nu,
            useCacheRefresh: am,
        },
        ta = null,
        il = 0;
    function _s(t) {
        var e = il;
        return ((il += 1), ta === null && (ta = []), bh(ta, t, e));
    }
    function al(t, e) {
        ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
    }
    function Vs(t, e) {
        throw e.$$typeof === b
            ? Error(r(525))
            : ((t = Object.prototype.toString.call(e)),
                Error(
                    r(
                        31,
                        t === "[object Object]"
                            ? "object with keys {" +
                            Object.keys(e).join(", ") +
                            "}"
                            : t,
                    ),
                ));
    }
    function cm(t) {
        var e = t._init;
        return e(t._payload);
    }
    function fm(t) {
        function e(A, C) {
            if (t) {
                var E = A.deletions;
                E === null ? ((A.deletions = [C]), (A.flags |= 16)) : E.push(C);
            }
        }
        function i(A, C) {
            if (!t) return null;
            for (; C !== null;) (e(A, C), (C = C.sibling));
            return null;
        }
        function l(A) {
            for (var C = new Map(); A !== null;)
                (A.key !== null ? C.set(A.key, A) : C.set(A.index, A),
                    (A = A.sibling));
            return C;
        }
        function o(A, C) {
            return ((A = on(A, C)), (A.index = 0), (A.sibling = null), A);
        }
        function c(A, C, E) {
            return (
                (A.index = E),
                t
                    ? ((E = A.alternate),
                        E !== null
                            ? ((E = E.index),
                                E < C ? ((A.flags |= 67108866), C) : E)
                            : ((A.flags |= 67108866), C))
                    : ((A.flags |= 1048576), C)
            );
        }
        function g(A) {
            return (t && A.alternate === null && (A.flags |= 67108866), A);
        }
        function x(A, C, E, k) {
            return C === null || C.tag !== 6
                ? ((C = Oo(E, A.mode, k)), (C.return = A), C)
                : ((C = o(C, E)), (C.return = A), C);
        }
        function T(A, C, E, k) {
            var W = E.type;
            return W === M
                ? B(A, C, E.props.children, k, E.key)
                : C !== null &&
                    (C.elementType === W ||
                        (typeof W == "object" &&
                            W !== null &&
                            W.$$typeof === Z &&
                            cm(W) === C.type))
                    ? ((C = o(C, E.props)), al(C, E), (C.return = A), C)
                    : ((C = gs(E.type, E.key, E.props, null, A.mode, k)),
                        al(C, E),
                        (C.return = A),
                        C);
        }
        function D(A, C, E, k) {
            return C === null ||
                C.tag !== 4 ||
                C.stateNode.containerInfo !== E.containerInfo ||
                C.stateNode.implementation !== E.implementation
                ? ((C = zo(E, A.mode, k)), (C.return = A), C)
                : ((C = o(C, E.children || [])), (C.return = A), C);
        }
        function B(A, C, E, k, W) {
            return C === null || C.tag !== 7
                ? ((C = ri(E, A.mode, k, W)), (C.return = A), C)
                : ((C = o(C, E)), (C.return = A), C);
        }
        function q(A, C, E) {
            if (
                (typeof C == "string" && C !== "") ||
                typeof C == "number" ||
                typeof C == "bigint"
            )
                return ((C = Oo("" + C, A.mode, E)), (C.return = A), C);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case S:
                        return (
                            (E = gs(C.type, C.key, C.props, null, A.mode, E)),
                            al(E, C),
                            (E.return = A),
                            E
                        );
                    case j:
                        return ((C = zo(C, A.mode, E)), (C.return = A), C);
                    case Z:
                        var k = C._init;
                        return ((C = k(C._payload)), q(A, C, E));
                }
                if (Yt(C) || _t(C))
                    return ((C = ri(C, A.mode, E, null)), (C.return = A), C);
                if (typeof C.then == "function") return q(A, _s(C), E);
                if (C.$$typeof === G) return q(A, Ss(A, C), E);
                Vs(A, C);
            }
            return null;
        }
        function N(A, C, E, k) {
            var W = C !== null ? C.key : null;
            if (
                (typeof E == "string" && E !== "") ||
                typeof E == "number" ||
                typeof E == "bigint"
            )
                return W !== null ? null : x(A, C, "" + E, k);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case S:
                        return E.key === W ? T(A, C, E, k) : null;
                    case j:
                        return E.key === W ? D(A, C, E, k) : null;
                    case Z:
                        return (
                            (W = E._init),
                            (E = W(E._payload)),
                            N(A, C, E, k)
                        );
                }
                if (Yt(E) || _t(E))
                    return W !== null ? null : B(A, C, E, k, null);
                if (typeof E.then == "function") return N(A, C, _s(E), k);
                if (E.$$typeof === G) return N(A, C, Ss(A, E), k);
                Vs(A, E);
            }
            return null;
        }
        function R(A, C, E, k, W) {
            if (
                (typeof k == "string" && k !== "") ||
                typeof k == "number" ||
                typeof k == "bigint"
            )
                return ((A = A.get(E) || null), x(C, A, "" + k, W));
            if (typeof k == "object" && k !== null) {
                switch (k.$$typeof) {
                    case S:
                        return (
                            (A = A.get(k.key === null ? E : k.key) || null),
                            T(C, A, k, W)
                        );
                    case j:
                        return (
                            (A = A.get(k.key === null ? E : k.key) || null),
                            D(C, A, k, W)
                        );
                    case Z:
                        var ct = k._init;
                        return ((k = ct(k._payload)), R(A, C, E, k, W));
                }
                if (Yt(k) || _t(k))
                    return ((A = A.get(E) || null), B(C, A, k, W, null));
                if (typeof k.then == "function") return R(A, C, E, _s(k), W);
                if (k.$$typeof === G) return R(A, C, E, Ss(C, k), W);
                Vs(C, k);
            }
            return null;
        }
        function at(A, C, E, k) {
            for (
                var W = null, ct = null, tt = C, it = (C = 0), Ft = null;
                tt !== null && it < E.length;
                it++
            ) {
                tt.index > it ? ((Ft = tt), (tt = null)) : (Ft = tt.sibling);
                var yt = N(A, tt, E[it], k);
                if (yt === null) {
                    tt === null && (tt = Ft);
                    break;
                }
                (t && tt && yt.alternate === null && e(A, tt),
                    (C = c(yt, C, it)),
                    ct === null ? (W = yt) : (ct.sibling = yt),
                    (ct = yt),
                    (tt = Ft));
            }
            if (it === E.length) return (i(A, tt), gt && ui(A, it), W);
            if (tt === null) {
                for (; it < E.length; it++)
                    ((tt = q(A, E[it], k)),
                        tt !== null &&
                        ((C = c(tt, C, it)),
                            ct === null ? (W = tt) : (ct.sibling = tt),
                            (ct = tt)));
                return (gt && ui(A, it), W);
            }
            for (tt = l(tt); it < E.length; it++)
                ((Ft = R(tt, A, it, E[it], k)),
                    Ft !== null &&
                    (t &&
                        Ft.alternate !== null &&
                        tt.delete(Ft.key === null ? it : Ft.key),
                        (C = c(Ft, C, it)),
                        ct === null ? (W = Ft) : (ct.sibling = Ft),
                        (ct = Ft)));
            return (
                t &&
                tt.forEach(function ($n) {
                    return e(A, $n);
                }),
                gt && ui(A, it),
                W
            );
        }
        function nt(A, C, E, k) {
            if (E == null) throw Error(r(151));
            for (
                var W = null,
                ct = null,
                tt = C,
                it = (C = 0),
                Ft = null,
                yt = E.next();
                tt !== null && !yt.done;
                it++, yt = E.next()
            ) {
                tt.index > it ? ((Ft = tt), (tt = null)) : (Ft = tt.sibling);
                var $n = N(A, tt, yt.value, k);
                if ($n === null) {
                    tt === null && (tt = Ft);
                    break;
                }
                (t && tt && $n.alternate === null && e(A, tt),
                    (C = c($n, C, it)),
                    ct === null ? (W = $n) : (ct.sibling = $n),
                    (ct = $n),
                    (tt = Ft));
            }
            if (yt.done) return (i(A, tt), gt && ui(A, it), W);
            if (tt === null) {
                for (; !yt.done; it++, yt = E.next())
                    ((yt = q(A, yt.value, k)),
                        yt !== null &&
                        ((C = c(yt, C, it)),
                            ct === null ? (W = yt) : (ct.sibling = yt),
                            (ct = yt)));
                return (gt && ui(A, it), W);
            }
            for (tt = l(tt); !yt.done; it++, yt = E.next())
                ((yt = R(tt, A, it, yt.value, k)),
                    yt !== null &&
                    (t &&
                        yt.alternate !== null &&
                        tt.delete(yt.key === null ? it : yt.key),
                        (C = c(yt, C, it)),
                        ct === null ? (W = yt) : (ct.sibling = yt),
                        (ct = yt)));
            return (
                t &&
                tt.forEach(function (Tb) {
                    return e(A, Tb);
                }),
                gt && ui(A, it),
                W
            );
        }
        function wt(A, C, E, k) {
            if (
                (typeof E == "object" &&
                    E !== null &&
                    E.type === M &&
                    E.key === null &&
                    (E = E.props.children),
                    typeof E == "object" && E !== null)
            ) {
                switch (E.$$typeof) {
                    case S:
                        t: {
                            for (var W = E.key; C !== null;) {
                                if (C.key === W) {
                                    if (((W = E.type), W === M)) {
                                        if (C.tag === 7) {
                                            (i(A, C.sibling),
                                                (k = o(C, E.props.children)),
                                                (k.return = A),
                                                (A = k));
                                            break t;
                                        }
                                    } else if (
                                        C.elementType === W ||
                                        (typeof W == "object" &&
                                            W !== null &&
                                            W.$$typeof === Z &&
                                            cm(W) === C.type)
                                    ) {
                                        (i(A, C.sibling),
                                            (k = o(C, E.props)),
                                            al(k, E),
                                            (k.return = A),
                                            (A = k));
                                        break t;
                                    }
                                    i(A, C);
                                    break;
                                } else e(A, C);
                                C = C.sibling;
                            }
                            E.type === M
                                ? ((k = ri(E.props.children, A.mode, k, E.key)),
                                    (k.return = A),
                                    (A = k))
                                : ((k = gs(
                                    E.type,
                                    E.key,
                                    E.props,
                                    null,
                                    A.mode,
                                    k,
                                )),
                                    al(k, E),
                                    (k.return = A),
                                    (A = k));
                        }
                        return g(A);
                    case j:
                        t: {
                            for (W = E.key; C !== null;) {
                                if (C.key === W)
                                    if (
                                        C.tag === 4 &&
                                        C.stateNode.containerInfo ===
                                        E.containerInfo &&
                                        C.stateNode.implementation ===
                                        E.implementation
                                    ) {
                                        (i(A, C.sibling),
                                            (k = o(C, E.children || [])),
                                            (k.return = A),
                                            (A = k));
                                        break t;
                                    } else {
                                        i(A, C);
                                        break;
                                    }
                                else e(A, C);
                                C = C.sibling;
                            }
                            ((k = zo(E, A.mode, k)), (k.return = A), (A = k));
                        }
                        return g(A);
                    case Z:
                        return (
                            (W = E._init),
                            (E = W(E._payload)),
                            wt(A, C, E, k)
                        );
                }
                if (Yt(E)) return at(A, C, E, k);
                if (_t(E)) {
                    if (((W = _t(E)), typeof W != "function"))
                        throw Error(r(150));
                    return ((E = W.call(E)), nt(A, C, E, k));
                }
                if (typeof E.then == "function") return wt(A, C, _s(E), k);
                if (E.$$typeof === G) return wt(A, C, Ss(A, E), k);
                Vs(A, E);
            }
            return (typeof E == "string" && E !== "") ||
                typeof E == "number" ||
                typeof E == "bigint"
                ? ((E = "" + E),
                    C !== null && C.tag === 6
                        ? (i(A, C.sibling),
                            (k = o(C, E)),
                            (k.return = A),
                            (A = k))
                        : (i(A, C),
                            (k = Oo(E, A.mode, k)),
                            (k.return = A),
                            (A = k)),
                    g(A))
                : i(A, C);
        }
        return function (A, C, E, k) {
            try {
                il = 0;
                var W = wt(A, C, E, k);
                return ((ta = null), W);
            } catch (tt) {
                if (tt === Za || tt === ws) throw tt;
                var ct = xe(29, tt, null, A.mode);
                return ((ct.lanes = k), (ct.return = A), ct);
            } finally {
            }
        };
    }
    var ea = fm(!0),
        dm = fm(!1),
        ze = Y(null),
        $e = null;
    function Vn(t) {
        var e = t.alternate;
        (F(Xt, Xt.current & 1),
            F(ze, t),
            $e === null &&
            (e === null ||
                $i.current !== null ||
                e.memoizedState !== null) &&
            ($e = t));
    }
    function hm(t) {
        if (t.tag === 22) {
            if ((F(Xt, Xt.current), F(ze, t), $e === null)) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && ($e = t);
            }
        } else Bn();
    }
    function Bn() {
        (F(Xt, Xt.current), F(ze, ze.current));
    }
    function mn(t) {
        ($(ze), $e === t && ($e = null), $(Xt));
    }
    var Xt = Y(0);
    function Bs(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var i = e.memoizedState;
                if (
                    i !== null &&
                    ((i = i.dehydrated), i === null || i.data === "$?" || ec(i))
                )
                    return e;
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0) return e;
            } else if (e.child !== null) {
                ((e.child.return = e), (e = e.child));
                continue;
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
        }
        return null;
    }
    function du(t, e, i, l) {
        ((e = t.memoizedState),
            (i = i(l, e)),
            (i = i == null ? e : p({}, e, i)),
            (t.memoizedState = i),
            t.lanes === 0 && (t.updateQueue.baseState = i));
    }
    var hu = {
        enqueueSetState: function (t, e, i) {
            t = t._reactInternals;
            var l = we(),
                o = On(l);
            ((o.payload = e),
                i != null && (o.callback = i),
                (e = zn(t, o, l)),
                e !== null && (Ce(e, t, l), $a(e, t, l)));
        },
        enqueueReplaceState: function (t, e, i) {
            t = t._reactInternals;
            var l = we(),
                o = On(l);
            ((o.tag = 1),
                (o.payload = e),
                i != null && (o.callback = i),
                (e = zn(t, o, l)),
                e !== null && (Ce(e, t, l), $a(e, t, l)));
        },
        enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var i = we(),
                l = On(i);
            ((l.tag = 2),
                e != null && (l.callback = e),
                (e = zn(t, l, i)),
                e !== null && (Ce(e, t, i), $a(e, t, i)));
        },
    };
    function mm(t, e, i, l, o, c, g) {
        return (
            (t = t.stateNode),
            typeof t.shouldComponentUpdate == "function"
                ? t.shouldComponentUpdate(l, c, g)
                : e.prototype && e.prototype.isPureReactComponent
                    ? !Ha(i, l) || !Ha(o, c)
                    : !0
        );
    }
    function pm(t, e, i, l) {
        ((t = e.state),
            typeof e.componentWillReceiveProps == "function" &&
            e.componentWillReceiveProps(i, l),
            typeof e.UNSAFE_componentWillReceiveProps == "function" &&
            e.UNSAFE_componentWillReceiveProps(i, l),
            e.state !== t && hu.enqueueReplaceState(e, e.state, null));
    }
    function yi(t, e) {
        var i = e;
        if ("ref" in e) {
            i = {};
            for (var l in e) l !== "ref" && (i[l] = e[l]);
        }
        if ((t = t.defaultProps)) {
            i === e && (i = p({}, i));
            for (var o in t) i[o] === void 0 && (i[o] = t[o]);
        }
        return i;
    }
    var Ls =
        typeof reportError == "function"
            ? reportError
            : function (t) {
                if (
                    typeof window == "object" &&
                    typeof window.ErrorEvent == "function"
                ) {
                    var e = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                            typeof t == "object" &&
                                t !== null &&
                                typeof t.message == "string"
                                ? String(t.message)
                                : String(t),
                        error: t,
                    });
                    if (!window.dispatchEvent(e)) return;
                } else if (
                    typeof process == "object" &&
                    typeof process.emit == "function"
                ) {
                    process.emit("uncaughtException", t);
                    return;
                }
                console.error(t);
            };
    function ym(t) {
        Ls(t);
    }
    function gm(t) {
        console.error(t);
    }
    function vm(t) {
        Ls(t);
    }
    function Us(t, e) {
        try {
            var i = t.onUncaughtError;
            i(e.value, { componentStack: e.stack });
        } catch (l) {
            setTimeout(function () {
                throw l;
            });
        }
    }
    function xm(t, e, i) {
        try {
            var l = t.onCaughtError;
            l(i.value, {
                componentStack: i.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null,
            });
        } catch (o) {
            setTimeout(function () {
                throw o;
            });
        }
    }
    function mu(t, e, i) {
        return (
            (i = On(i)),
            (i.tag = 3),
            (i.payload = { element: null }),
            (i.callback = function () {
                Us(t, e);
            }),
            i
        );
    }
    function bm(t) {
        return ((t = On(t)), (t.tag = 3), t);
    }
    function Sm(t, e, i, l) {
        var o = i.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = l.value;
            ((t.payload = function () {
                return o(c);
            }),
                (t.callback = function () {
                    xm(e, i, l);
                }));
        }
        var g = i.stateNode;
        g !== null &&
            typeof g.componentDidCatch == "function" &&
            (t.callback = function () {
                (xm(e, i, l),
                    typeof o != "function" &&
                    (Yn === null ? (Yn = new Set([this])) : Yn.add(this)));
                var x = l.stack;
                this.componentDidCatch(l.value, {
                    componentStack: x !== null ? x : "",
                });
            });
    }
    function Tx(t, e, i, l, o) {
        if (
            ((i.flags |= 32768),
                l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
            if (
                ((e = i.alternate),
                    e !== null && Ka(e, i, o, !0),
                    (i = ze.current),
                    i !== null)
            ) {
                switch (i.tag) {
                    case 13:
                        return (
                            $e === null
                                ? Uu()
                                : i.alternate === null && Ot === 0 && (Ot = 3),
                            (i.flags &= -257),
                            (i.flags |= 65536),
                            (i.lanes = o),
                            l === Go
                                ? (i.flags |= 16384)
                                : ((e = i.updateQueue),
                                    e === null
                                        ? (i.updateQueue = new Set([l]))
                                        : e.add(l),
                                    Hu(t, l, o)),
                            !1
                        );
                    case 22:
                        return (
                            (i.flags |= 65536),
                            l === Go
                                ? (i.flags |= 16384)
                                : ((e = i.updateQueue),
                                    e === null
                                        ? ((e = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([l]),
                                        }),
                                            (i.updateQueue = e))
                                        : ((i = e.retryQueue),
                                            i === null
                                                ? (e.retryQueue = new Set([l]))
                                                : i.add(l)),
                                    Hu(t, l, o)),
                            !1
                        );
                }
                throw Error(r(435, i.tag));
            }
            return (Hu(t, l, o), Uu(), !1);
        }
        if (gt)
            return (
                (e = ze.current),
                e !== null
                    ? ((e.flags & 65536) === 0 && (e.flags |= 256),
                        (e.flags |= 65536),
                        (e.lanes = o),
                        l !== Bo &&
                        ((t = Error(r(422), { cause: l })), Xa(De(t, i))))
                    : (l !== Bo &&
                        ((e = Error(r(423), { cause: l })), Xa(De(e, i))),
                        (t = t.current.alternate),
                        (t.flags |= 65536),
                        (o &= -o),
                        (t.lanes |= o),
                        (l = De(l, i)),
                        (o = mu(t.stateNode, l, o)),
                        Po(t, o),
                        Ot !== 4 && (Ot = 2)),
                !1
            );
        var c = Error(r(520), { cause: l });
        if (
            ((c = De(c, i)),
                fl === null ? (fl = [c]) : fl.push(c),
                Ot !== 4 && (Ot = 2),
                e === null)
        )
            return !0;
        ((l = De(l, i)), (i = e));
        do {
            switch (i.tag) {
                case 3:
                    return (
                        (i.flags |= 65536),
                        (t = o & -o),
                        (i.lanes |= t),
                        (t = mu(i.stateNode, l, t)),
                        Po(i, t),
                        !1
                    );
                case 1:
                    if (
                        ((e = i.type),
                            (c = i.stateNode),
                            (i.flags & 128) === 0 &&
                            (typeof e.getDerivedStateFromError == "function" ||
                                (c !== null &&
                                    typeof c.componentDidCatch == "function" &&
                                    (Yn === null || !Yn.has(c)))))
                    )
                        return (
                            (i.flags |= 65536),
                            (o &= -o),
                            (i.lanes |= o),
                            (o = bm(o)),
                            Sm(o, t, i, l),
                            Po(i, o),
                            !1
                        );
            }
            i = i.return;
        } while (i !== null);
        return !1;
    }
    var Tm = Error(r(461)),
        Qt = !1;
    function Wt(t, e, i, l) {
        e.child = t === null ? dm(e, null, i, l) : ea(e, t.child, i, l);
    }
    function wm(t, e, i, l, o) {
        i = i.render;
        var c = e.ref;
        if ("ref" in l) {
            var g = {};
            for (var x in l) x !== "ref" && (g[x] = l[x]);
        } else g = l;
        return (
            hi(e),
            (l = Jo(t, e, i, g, c, o)),
            (x = Wo()),
            t !== null && !Qt
                ? (Io(t, e, o), pn(t, e, o))
                : (gt && x && _o(e), (e.flags |= 1), Wt(t, e, l, o), e.child)
        );
    }
    function Cm(t, e, i, l, o) {
        if (t === null) {
            var c = i.type;
            return typeof c == "function" &&
                !Ro(c) &&
                c.defaultProps === void 0 &&
                i.compare === null
                ? ((e.tag = 15), (e.type = c), Am(t, e, c, l, o))
                : ((t = gs(i.type, null, l, e, e.mode, o)),
                    (t.ref = e.ref),
                    (t.return = e),
                    (e.child = t));
        }
        if (((c = t.child), !Tu(t, o))) {
            var g = c.memoizedProps;
            if (
                ((i = i.compare),
                    (i = i !== null ? i : Ha),
                    i(g, l) && t.ref === e.ref)
            )
                return pn(t, e, o);
        }
        return (
            (e.flags |= 1),
            (t = on(c, l)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t)
        );
    }
    function Am(t, e, i, l, o) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (Ha(c, l) && t.ref === e.ref)
                if (((Qt = !1), (e.pendingProps = l = c), Tu(t, o)))
                    (t.flags & 131072) !== 0 && (Qt = !0);
                else return ((e.lanes = t.lanes), pn(t, e, o));
        }
        return pu(t, e, i, l, o);
    }
    function jm(t, e, i) {
        var l = e.pendingProps,
            o = l.children,
            c = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (((l = c !== null ? c.baseLanes | i : i), t !== null)) {
                    for (o = e.child = t.child, c = 0; o !== null;)
                        ((c = c | o.lanes | o.childLanes), (o = o.sibling));
                    e.childLanes = c & ~l;
                } else ((e.childLanes = 0), (e.child = null));
                return Em(t, e, l, i);
            }
            if ((i & 536870912) !== 0)
                ((e.memoizedState = { baseLanes: 0, cachePool: null }),
                    t !== null && Ts(e, c !== null ? c.cachePool : null),
                    c !== null ? Ah(e, c) : Zo(),
                    hm(e));
            else
                return (
                    (e.lanes = e.childLanes = 536870912),
                    Em(t, e, c !== null ? c.baseLanes | i : i, i)
                );
        } else
            c !== null
                ? (Ts(e, c.cachePool), Ah(e, c), Bn(), (e.memoizedState = null))
                : (t !== null && Ts(e, null), Zo(), Bn());
        return (Wt(t, e, o, i), e.child);
    }
    function Em(t, e, i, l) {
        var o = Yo();
        return (
            (o = o === null ? null : { parent: Gt._currentValue, pool: o }),
            (e.memoizedState = { baseLanes: i, cachePool: o }),
            t !== null && Ts(e, null),
            Zo(),
            hm(e),
            t !== null && Ka(t, e, l, !0),
            null
        );
    }
    function ks(t, e) {
        var i = e.ref;
        if (i === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof i != "function" && typeof i != "object")
                throw Error(r(284));
            (t === null || t.ref !== i) && (e.flags |= 4194816);
        }
    }
    function pu(t, e, i, l, o) {
        return (
            hi(e),
            (i = Jo(t, e, i, l, void 0, o)),
            (l = Wo()),
            t !== null && !Qt
                ? (Io(t, e, o), pn(t, e, o))
                : (gt && l && _o(e), (e.flags |= 1), Wt(t, e, i, o), e.child)
        );
    }
    function Mm(t, e, i, l, o, c) {
        return (
            hi(e),
            (e.updateQueue = null),
            (i = Eh(e, l, i, o)),
            jh(t),
            (l = Wo()),
            t !== null && !Qt
                ? (Io(t, e, c), pn(t, e, c))
                : (gt && l && _o(e), (e.flags |= 1), Wt(t, e, i, c), e.child)
        );
    }
    function Dm(t, e, i, l, o) {
        if ((hi(e), e.stateNode === null)) {
            var c = Ki,
                g = i.contextType;
            (typeof g == "object" && g !== null && (c = ae(g)),
                (c = new i(l, c)),
                (e.memoizedState =
                    c.state !== null && c.state !== void 0 ? c.state : null),
                (c.updater = hu),
                (e.stateNode = c),
                (c._reactInternals = e),
                (c = e.stateNode),
                (c.props = l),
                (c.state = e.memoizedState),
                (c.refs = {}),
                Xo(e),
                (g = i.contextType),
                (c.context = typeof g == "object" && g !== null ? ae(g) : Ki),
                (c.state = e.memoizedState),
                (g = i.getDerivedStateFromProps),
                typeof g == "function" &&
                (du(e, i, g, l), (c.state = e.memoizedState)),
                typeof i.getDerivedStateFromProps == "function" ||
                typeof c.getSnapshotBeforeUpdate == "function" ||
                (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                ((g = c.state),
                    typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount(),
                    g !== c.state && hu.enqueueReplaceState(c, c.state, null),
                    Wa(e, l, c, o),
                    Ja(),
                    (c.state = e.memoizedState)),
                typeof c.componentDidMount == "function" &&
                (e.flags |= 4194308),
                (l = !0));
        } else if (t === null) {
            c = e.stateNode;
            var x = e.memoizedProps,
                T = yi(i, x);
            c.props = T;
            var D = c.context,
                B = i.contextType;
            ((g = Ki), typeof B == "object" && B !== null && (g = ae(B)));
            var q = i.getDerivedStateFromProps;
            ((B =
                typeof q == "function" ||
                typeof c.getSnapshotBeforeUpdate == "function"),
                (x = e.pendingProps !== x),
                B ||
                (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof c.componentWillReceiveProps != "function") ||
                ((x || D !== g) && pm(e, c, l, g)),
                (Rn = !1));
            var N = e.memoizedState;
            ((c.state = N),
                Wa(e, l, c, o),
                Ja(),
                (D = e.memoizedState),
                x || N !== D || Rn
                    ? (typeof q == "function" &&
                        (du(e, i, q, l), (D = e.memoizedState)),
                        (T = Rn || mm(e, i, T, l, N, D, g))
                            ? (B ||
                                (typeof c.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof c.componentWillMount !=
                                    "function") ||
                                (typeof c.componentWillMount == "function" &&
                                    c.componentWillMount(),
                                    typeof c.UNSAFE_componentWillMount ==
                                    "function" &&
                                    c.UNSAFE_componentWillMount()),
                                typeof c.componentDidMount == "function" &&
                                (e.flags |= 4194308))
                            : (typeof c.componentDidMount == "function" &&
                                (e.flags |= 4194308),
                                (e.memoizedProps = l),
                                (e.memoizedState = D)),
                        (c.props = l),
                        (c.state = D),
                        (c.context = g),
                        (l = T))
                    : (typeof c.componentDidMount == "function" &&
                        (e.flags |= 4194308),
                        (l = !1)));
        } else {
            ((c = e.stateNode),
                Ko(t, e),
                (g = e.memoizedProps),
                (B = yi(i, g)),
                (c.props = B),
                (q = e.pendingProps),
                (N = c.context),
                (D = i.contextType),
                (T = Ki),
                typeof D == "object" && D !== null && (T = ae(D)),
                (x = i.getDerivedStateFromProps),
                (D =
                    typeof x == "function" ||
                    typeof c.getSnapshotBeforeUpdate == "function") ||
                (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof c.componentWillReceiveProps != "function") ||
                ((g !== q || N !== T) && pm(e, c, l, T)),
                (Rn = !1),
                (N = e.memoizedState),
                (c.state = N),
                Wa(e, l, c, o),
                Ja());
            var R = e.memoizedState;
            g !== q ||
                N !== R ||
                Rn ||
                (t !== null && t.dependencies !== null && bs(t.dependencies))
                ? (typeof x == "function" &&
                    (du(e, i, x, l), (R = e.memoizedState)),
                    (B =
                        Rn ||
                        mm(e, i, B, l, N, R, T) ||
                        (t !== null &&
                            t.dependencies !== null &&
                            bs(t.dependencies)))
                        ? (D ||
                            (typeof c.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof c.componentWillUpdate != "function") ||
                            (typeof c.componentWillUpdate == "function" &&
                                c.componentWillUpdate(l, R, T),
                                typeof c.UNSAFE_componentWillUpdate == "function" &&
                                c.UNSAFE_componentWillUpdate(l, R, T)),
                            typeof c.componentDidUpdate == "function" &&
                            (e.flags |= 4),
                            typeof c.getSnapshotBeforeUpdate == "function" &&
                            (e.flags |= 1024))
                        : (typeof c.componentDidUpdate != "function" ||
                            (g === t.memoizedProps && N === t.memoizedState) ||
                            (e.flags |= 4),
                            typeof c.getSnapshotBeforeUpdate != "function" ||
                            (g === t.memoizedProps && N === t.memoizedState) ||
                            (e.flags |= 1024),
                            (e.memoizedProps = l),
                            (e.memoizedState = R)),
                    (c.props = l),
                    (c.state = R),
                    (c.context = T),
                    (l = B))
                : (typeof c.componentDidUpdate != "function" ||
                    (g === t.memoizedProps && N === t.memoizedState) ||
                    (e.flags |= 4),
                    typeof c.getSnapshotBeforeUpdate != "function" ||
                    (g === t.memoizedProps && N === t.memoizedState) ||
                    (e.flags |= 1024),
                    (l = !1));
        }
        return (
            (c = l),
            ks(t, e),
            (l = (e.flags & 128) !== 0),
            c || l
                ? ((c = e.stateNode),
                    (i =
                        l && typeof i.getDerivedStateFromError != "function"
                            ? null
                            : c.render()),
                    (e.flags |= 1),
                    t !== null && l
                        ? ((e.child = ea(e, t.child, null, o)),
                            (e.child = ea(e, null, i, o)))
                        : Wt(t, e, i, o),
                    (e.memoizedState = c.state),
                    (t = e.child))
                : (t = pn(t, e, o)),
            t
        );
    }
    function Nm(t, e, i, l) {
        return (Ga(), (e.flags |= 256), Wt(t, e, i, l), e.child);
    }
    var yu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
    };
    function gu(t) {
        return { baseLanes: t, cachePool: gh() };
    }
    function vu(t, e, i) {
        return ((t = t !== null ? t.childLanes & ~i : 0), e && (t |= _e), t);
    }
    function Rm(t, e, i) {
        var l = e.pendingProps,
            o = !1,
            c = (e.flags & 128) !== 0,
            g;
        if (
            ((g = c) ||
                (g =
                    t !== null && t.memoizedState === null
                        ? !1
                        : (Xt.current & 2) !== 0),
                g && ((o = !0), (e.flags &= -129)),
                (g = (e.flags & 32) !== 0),
                (e.flags &= -33),
                t === null)
        ) {
            if (gt) {
                if ((o ? Vn(e) : Bn(), gt)) {
                    var x = Rt,
                        T;
                    if ((T = x)) {
                        t: {
                            for (T = x, x = Fe; T.nodeType !== 8;) {
                                if (!x) {
                                    x = null;
                                    break t;
                                }
                                if (((T = Ye(T.nextSibling)), T === null)) {
                                    x = null;
                                    break t;
                                }
                            }
                            x = T;
                        }
                        x !== null
                            ? ((e.memoizedState = {
                                dehydrated: x,
                                treeContext:
                                    oi !== null
                                        ? { id: un, overflow: cn }
                                        : null,
                                retryLane: 536870912,
                                hydrationErrors: null,
                            }),
                                (T = xe(18, null, null, 0)),
                                (T.stateNode = x),
                                (T.return = e),
                                (e.child = T),
                                (se = e),
                                (Rt = null),
                                (T = !0))
                            : (T = !1);
                    }
                    T || fi(e);
                }
                if (
                    ((x = e.memoizedState),
                        x !== null && ((x = x.dehydrated), x !== null))
                )
                    return (
                        ec(x) ? (e.lanes = 32) : (e.lanes = 536870912),
                        null
                    );
                mn(e);
            }
            return (
                (x = l.children),
                (l = l.fallback),
                o
                    ? (Bn(),
                        (o = e.mode),
                        (x = Hs({ mode: "hidden", children: x }, o)),
                        (l = ri(l, o, i, null)),
                        (x.return = e),
                        (l.return = e),
                        (x.sibling = l),
                        (e.child = x),
                        (o = e.child),
                        (o.memoizedState = gu(i)),
                        (o.childLanes = vu(t, g, i)),
                        (e.memoizedState = yu),
                        l)
                    : (Vn(e), xu(e, x))
            );
        }
        if (
            ((T = t.memoizedState),
                T !== null && ((x = T.dehydrated), x !== null))
        ) {
            if (c)
                e.flags & 256
                    ? (Vn(e), (e.flags &= -257), (e = bu(t, e, i)))
                    : e.memoizedState !== null
                        ? (Bn(),
                            (e.child = t.child),
                            (e.flags |= 128),
                            (e = null))
                        : (Bn(),
                            (o = l.fallback),
                            (x = e.mode),
                            (l = Hs({ mode: "visible", children: l.children }, x)),
                            (o = ri(o, x, i, null)),
                            (o.flags |= 2),
                            (l.return = e),
                            (o.return = e),
                            (l.sibling = o),
                            (e.child = l),
                            ea(e, t.child, null, i),
                            (l = e.child),
                            (l.memoizedState = gu(i)),
                            (l.childLanes = vu(t, g, i)),
                            (e.memoizedState = yu),
                            (e = o));
            else if ((Vn(e), ec(x))) {
                if (((g = x.nextSibling && x.nextSibling.dataset), g))
                    var D = g.dgst;
                ((g = D),
                    (l = Error(r(419))),
                    (l.stack = ""),
                    (l.digest = g),
                    Xa({ value: l, source: null, stack: null }),
                    (e = bu(t, e, i)));
            } else if (
                (Qt || Ka(t, e, i, !1), (g = (i & t.childLanes) !== 0), Qt || g)
            ) {
                if (
                    ((g = At),
                        g !== null &&
                        ((l = i & -i),
                            (l = (l & 42) !== 0 ? 1 : eo(l)),
                            (l = (l & (g.suspendedLanes | i)) !== 0 ? 0 : l),
                            l !== 0 && l !== T.retryLane))
                )
                    throw ((T.retryLane = l), Xi(t, l), Ce(g, t, l), Tm);
                (x.data === "$?" || Uu(), (e = bu(t, e, i)));
            } else
                x.data === "$?"
                    ? ((e.flags |= 192), (e.child = t.child), (e = null))
                    : ((t = T.treeContext),
                        (Rt = Ye(x.nextSibling)),
                        (se = e),
                        (gt = !0),
                        (ci = null),
                        (Fe = !1),
                        t !== null &&
                        ((Re[Oe++] = un),
                            (Re[Oe++] = cn),
                            (Re[Oe++] = oi),
                            (un = t.id),
                            (cn = t.overflow),
                            (oi = e)),
                        (e = xu(e, l.children)),
                        (e.flags |= 4096));
            return e;
        }
        return o
            ? (Bn(),
                (o = l.fallback),
                (x = e.mode),
                (T = t.child),
                (D = T.sibling),
                (l = on(T, { mode: "hidden", children: l.children })),
                (l.subtreeFlags = T.subtreeFlags & 65011712),
                D !== null
                    ? (o = on(D, o))
                    : ((o = ri(o, x, i, null)), (o.flags |= 2)),
                (o.return = e),
                (l.return = e),
                (l.sibling = o),
                (e.child = l),
                (l = o),
                (o = e.child),
                (x = t.child.memoizedState),
                x === null
                    ? (x = gu(i))
                    : ((T = x.cachePool),
                        T !== null
                            ? ((D = Gt._currentValue),
                                (T = T.parent !== D ? { parent: D, pool: D } : T))
                            : (T = gh()),
                        (x = { baseLanes: x.baseLanes | i, cachePool: T })),
                (o.memoizedState = x),
                (o.childLanes = vu(t, g, i)),
                (e.memoizedState = yu),
                l)
            : (Vn(e),
                (i = t.child),
                (t = i.sibling),
                (i = on(i, { mode: "visible", children: l.children })),
                (i.return = e),
                (i.sibling = null),
                t !== null &&
                ((g = e.deletions),
                    g === null
                        ? ((e.deletions = [t]), (e.flags |= 16))
                        : g.push(t)),
                (e.child = i),
                (e.memoizedState = null),
                i);
    }
    function xu(t, e) {
        return (
            (e = Hs({ mode: "visible", children: e }, t.mode)),
            (e.return = t),
            (t.child = e)
        );
    }
    function Hs(t, e) {
        return (
            (t = xe(22, t, null, e)),
            (t.lanes = 0),
            (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
            }),
            t
        );
    }
    function bu(t, e, i) {
        return (
            ea(e, t.child, null, i),
            (t = xu(e, e.pendingProps.children)),
            (t.flags |= 2),
            (e.memoizedState = null),
            t
        );
    }
    function Om(t, e, i) {
        t.lanes |= e;
        var l = t.alternate;
        (l !== null && (l.lanes |= e), Uo(t.return, e, i));
    }
    function Su(t, e, i, l, o) {
        var c = t.memoizedState;
        c === null
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: l,
                tail: i,
                tailMode: o,
            })
            : ((c.isBackwards = e),
                (c.rendering = null),
                (c.renderingStartTime = 0),
                (c.last = l),
                (c.tail = i),
                (c.tailMode = o));
    }
    function zm(t, e, i) {
        var l = e.pendingProps,
            o = l.revealOrder,
            c = l.tail;
        if ((Wt(t, e, l.children, i), (l = Xt.current), (l & 2) !== 0))
            ((l = (l & 1) | 2), (e.flags |= 128));
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null;) {
                    if (t.tag === 13) t.memoizedState !== null && Om(t, i, e);
                    else if (t.tag === 19) Om(t, i, e);
                    else if (t.child !== null) {
                        ((t.child.return = t), (t = t.child));
                        continue;
                    }
                    if (t === e) break t;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break t;
                        t = t.return;
                    }
                    ((t.sibling.return = t.return), (t = t.sibling));
                }
            l &= 1;
        }
        switch ((F(Xt, l), o)) {
            case "forwards":
                for (i = e.child, o = null; i !== null;)
                    ((t = i.alternate),
                        t !== null && Bs(t) === null && (o = i),
                        (i = i.sibling));
                ((i = o),
                    i === null
                        ? ((o = e.child), (e.child = null))
                        : ((o = i.sibling), (i.sibling = null)),
                    Su(e, !1, o, i, c));
                break;
            case "backwards":
                for (i = null, o = e.child, e.child = null; o !== null;) {
                    if (((t = o.alternate), t !== null && Bs(t) === null)) {
                        e.child = o;
                        break;
                    }
                    ((t = o.sibling), (o.sibling = i), (i = o), (o = t));
                }
                Su(e, !0, i, null, c);
                break;
            case "together":
                Su(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
        return e.child;
    }
    function pn(t, e, i) {
        if (
            (t !== null && (e.dependencies = t.dependencies),
                (qn |= e.lanes),
                (i & e.childLanes) === 0)
        )
            if (t !== null) {
                if ((Ka(t, e, i, !1), (i & e.childLanes) === 0)) return null;
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(r(153));
        if (e.child !== null) {
            for (
                t = e.child,
                i = on(t, t.pendingProps),
                e.child = i,
                i.return = e;
                t.sibling !== null;
            )
                ((t = t.sibling),
                    (i = i.sibling = on(t, t.pendingProps)),
                    (i.return = e));
            i.sibling = null;
        }
        return e.child;
    }
    function Tu(t, e) {
        return (t.lanes & e) !== 0
            ? !0
            : ((t = t.dependencies), !!(t !== null && bs(t)));
    }
    function wx(t, e, i) {
        switch (e.tag) {
            case 3:
                (Et(e, e.stateNode.containerInfo),
                    Nn(e, Gt, t.memoizedState.cache),
                    Ga());
                break;
            case 27:
            case 5:
                $r(e);
                break;
            case 4:
                Et(e, e.stateNode.containerInfo);
                break;
            case 10:
                Nn(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var l = e.memoizedState;
                if (l !== null)
                    return l.dehydrated !== null
                        ? (Vn(e), (e.flags |= 128), null)
                        : (i & e.child.childLanes) !== 0
                            ? Rm(t, e, i)
                            : (Vn(e),
                                (t = pn(t, e, i)),
                                t !== null ? t.sibling : null);
                Vn(e);
                break;
            case 19:
                var o = (t.flags & 128) !== 0;
                if (
                    ((l = (i & e.childLanes) !== 0),
                        l || (Ka(t, e, i, !1), (l = (i & e.childLanes) !== 0)),
                        o)
                ) {
                    if (l) return zm(t, e, i);
                    e.flags |= 128;
                }
                if (
                    ((o = e.memoizedState),
                        o !== null &&
                        ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                        F(Xt, Xt.current),
                        l)
                )
                    break;
                return null;
            case 22:
            case 23:
                return ((e.lanes = 0), jm(t, e, i));
            case 24:
                Nn(e, Gt, t.memoizedState.cache);
        }
        return pn(t, e, i);
    }
    function _m(t, e, i) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Qt = !0;
            else {
                if (!Tu(t, i) && (e.flags & 128) === 0)
                    return ((Qt = !1), wx(t, e, i));
                Qt = (t.flags & 131072) !== 0;
            }
        else ((Qt = !1), gt && (e.flags & 1048576) !== 0 && ch(e, xs, e.index));
        switch (((e.lanes = 0), e.tag)) {
            case 16:
                t: {
                    t = e.pendingProps;
                    var l = e.elementType,
                        o = l._init;
                    if (
                        ((l = o(l._payload)),
                            (e.type = l),
                            typeof l == "function")
                    )
                        Ro(l)
                            ? ((t = yi(l, t)),
                                (e.tag = 1),
                                (e = Dm(null, e, l, t, i)))
                            : ((e.tag = 0), (e = pu(null, e, l, t, i)));
                    else {
                        if (l != null) {
                            if (((o = l.$$typeof), o === K)) {
                                ((e.tag = 11), (e = wm(null, e, l, t, i)));
                                break t;
                            } else if (o === J) {
                                ((e.tag = 14), (e = Cm(null, e, l, t, i)));
                                break t;
                            }
                        }
                        throw ((e = Qe(l) || l), Error(r(306, e, "")));
                    }
                }
                return e;
            case 0:
                return pu(t, e, e.type, e.pendingProps, i);
            case 1:
                return (
                    (l = e.type),
                    (o = yi(l, e.pendingProps)),
                    Dm(t, e, l, o, i)
                );
            case 3:
                t: {
                    if ((Et(e, e.stateNode.containerInfo), t === null))
                        throw Error(r(387));
                    l = e.pendingProps;
                    var c = e.memoizedState;
                    ((o = c.element), Ko(t, e), Wa(e, l, null, i));
                    var g = e.memoizedState;
                    if (
                        ((l = g.cache),
                            Nn(e, Gt, l),
                            l !== c.cache && ko(e, [Gt], i, !0),
                            Ja(),
                            (l = g.element),
                            c.isDehydrated)
                    )
                        if (
                            ((c = {
                                element: l,
                                isDehydrated: !1,
                                cache: g.cache,
                            }),
                                (e.updateQueue.baseState = c),
                                (e.memoizedState = c),
                                e.flags & 256)
                        ) {
                            e = Nm(t, e, l, i);
                            break t;
                        } else if (l !== o) {
                            ((o = De(Error(r(424)), e)),
                                Xa(o),
                                (e = Nm(t, e, l, i)));
                            break t;
                        } else {
                            switch (
                            ((t = e.stateNode.containerInfo), t.nodeType)
                            ) {
                                case 9:
                                    t = t.body;
                                    break;
                                default:
                                    t =
                                        t.nodeName === "HTML"
                                            ? t.ownerDocument.body
                                            : t;
                            }
                            for (
                                Rt = Ye(t.firstChild),
                                se = e,
                                gt = !0,
                                ci = null,
                                Fe = !0,
                                i = dm(e, null, l, i),
                                e.child = i;
                                i;
                            )
                                ((i.flags = (i.flags & -3) | 4096),
                                    (i = i.sibling));
                        }
                    else {
                        if ((Ga(), l === o)) {
                            e = pn(t, e, i);
                            break t;
                        }
                        Wt(t, e, l, i);
                    }
                    e = e.child;
                }
                return e;
            case 26:
                return (
                    ks(t, e),
                    t === null
                        ? (i = Up(e.type, null, e.pendingProps, null))
                            ? (e.memoizedState = i)
                            : gt ||
                            ((i = e.type),
                                (t = e.pendingProps),
                                (l = tr(rt.current).createElement(i)),
                                (l[ie] = e),
                                (l[oe] = t),
                                te(l, i, t),
                                Pt(l),
                                (e.stateNode = l))
                        : (e.memoizedState = Up(
                            e.type,
                            t.memoizedProps,
                            e.pendingProps,
                            t.memoizedState,
                        )),
                    null
                );
            case 27:
                return (
                    $r(e),
                    t === null &&
                    gt &&
                    ((l = e.stateNode =
                        Vp(e.type, e.pendingProps, rt.current)),
                        (se = e),
                        (Fe = !0),
                        (o = Rt),
                        Kn(e.type)
                            ? ((nc = o), (Rt = Ye(l.firstChild)))
                            : (Rt = o)),
                    Wt(t, e, e.pendingProps.children, i),
                    ks(t, e),
                    t === null && (e.flags |= 4194304),
                    e.child
                );
            case 5:
                return (
                    t === null &&
                    gt &&
                    ((o = l = Rt) &&
                        ((l = Jx(l, e.type, e.pendingProps, Fe)),
                            l !== null
                                ? ((e.stateNode = l),
                                    (se = e),
                                    (Rt = Ye(l.firstChild)),
                                    (Fe = !1),
                                    (o = !0))
                                : (o = !1)),
                        o || fi(e)),
                    $r(e),
                    (o = e.type),
                    (c = e.pendingProps),
                    (g = t !== null ? t.memoizedProps : null),
                    (l = c.children),
                    Wu(o, c)
                        ? (l = null)
                        : g !== null && Wu(o, g) && (e.flags |= 32),
                    e.memoizedState !== null &&
                    ((o = Jo(t, e, px, null, null, i)),
                        (bl._currentValue = o)),
                    ks(t, e),
                    Wt(t, e, l, i),
                    e.child
                );
            case 6:
                return (
                    t === null &&
                    gt &&
                    ((t = i = Rt) &&
                        ((i = Wx(i, e.pendingProps, Fe)),
                            i !== null
                                ? ((e.stateNode = i),
                                    (se = e),
                                    (Rt = null),
                                    (t = !0))
                                : (t = !1)),
                        t || fi(e)),
                    null
                );
            case 13:
                return Rm(t, e, i);
            case 4:
                return (
                    Et(e, e.stateNode.containerInfo),
                    (l = e.pendingProps),
                    t === null ? (e.child = ea(e, null, l, i)) : Wt(t, e, l, i),
                    e.child
                );
            case 11:
                return wm(t, e, e.type, e.pendingProps, i);
            case 7:
                return (Wt(t, e, e.pendingProps, i), e.child);
            case 8:
                return (Wt(t, e, e.pendingProps.children, i), e.child);
            case 12:
                return (Wt(t, e, e.pendingProps.children, i), e.child);
            case 10:
                return (
                    (l = e.pendingProps),
                    Nn(e, e.type, l.value),
                    Wt(t, e, l.children, i),
                    e.child
                );
            case 9:
                return (
                    (o = e.type._context),
                    (l = e.pendingProps.children),
                    hi(e),
                    (o = ae(o)),
                    (l = l(o)),
                    (e.flags |= 1),
                    Wt(t, e, l, i),
                    e.child
                );
            case 14:
                return Cm(t, e, e.type, e.pendingProps, i);
            case 15:
                return Am(t, e, e.type, e.pendingProps, i);
            case 19:
                return zm(t, e, i);
            case 31:
                return (
                    (l = e.pendingProps),
                    (i = e.mode),
                    (l = { mode: l.mode, children: l.children }),
                    t === null
                        ? ((i = Hs(l, i)),
                            (i.ref = e.ref),
                            (e.child = i),
                            (i.return = e),
                            (e = i))
                        : ((i = on(t.child, l)),
                            (i.ref = e.ref),
                            (e.child = i),
                            (i.return = e),
                            (e = i)),
                    e
                );
            case 22:
                return jm(t, e, i);
            case 24:
                return (
                    hi(e),
                    (l = ae(Gt)),
                    t === null
                        ? ((o = Yo()),
                            o === null &&
                            ((o = At),
                                (c = Ho()),
                                (o.pooledCache = c),
                                c.refCount++,
                                c !== null && (o.pooledCacheLanes |= i),
                                (o = c)),
                            (e.memoizedState = { parent: l, cache: o }),
                            Xo(e),
                            Nn(e, Gt, o))
                        : ((t.lanes & i) !== 0 &&
                            (Ko(t, e), Wa(e, null, null, i), Ja()),
                            (o = t.memoizedState),
                            (c = e.memoizedState),
                            o.parent !== l
                                ? ((o = { parent: l, cache: l }),
                                    (e.memoizedState = o),
                                    e.lanes === 0 &&
                                    (e.memoizedState = e.updateQueue.baseState =
                                        o),
                                    Nn(e, Gt, l))
                                : ((l = c.cache),
                                    Nn(e, Gt, l),
                                    l !== o.cache && ko(e, [Gt], i, !0))),
                    Wt(t, e, e.pendingProps.children, i),
                    e.child
                );
            case 29:
                throw e.pendingProps;
        }
        throw Error(r(156, e.tag));
    }
    function yn(t) {
        t.flags |= 4;
    }
    function Vm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (((t.flags |= 16777216), !Gp(e))) {
            if (
                ((e = ze.current),
                    e !== null &&
                    ((mt & 4194048) === mt
                        ? $e !== null
                        : ((mt & 62914560) !== mt && (mt & 536870912) === 0) ||
                        e !== $e))
            )
                throw ((Fa = Go), vh);
            t.flags |= 8192;
        }
    }
    function qs(t, e) {
        (e !== null && (t.flags |= 4),
            t.flags & 16384 &&
            ((e = t.tag !== 22 ? hd() : 536870912),
                (t.lanes |= e),
                (la |= e)));
    }
    function ll(t, e) {
        if (!gt)
            switch (t.tailMode) {
                case "hidden":
                    e = t.tail;
                    for (var i = null; e !== null;)
                        (e.alternate !== null && (i = e), (e = e.sibling));
                    i === null ? (t.tail = null) : (i.sibling = null);
                    break;
                case "collapsed":
                    i = t.tail;
                    for (var l = null; i !== null;)
                        (i.alternate !== null && (l = i), (i = i.sibling));
                    l === null
                        ? e || t.tail === null
                            ? (t.tail = null)
                            : (t.tail.sibling = null)
                        : (l.sibling = null);
            }
    }
    function Dt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            i = 0,
            l = 0;
        if (e)
            for (var o = t.child; o !== null;)
                ((i |= o.lanes | o.childLanes),
                    (l |= o.subtreeFlags & 65011712),
                    (l |= o.flags & 65011712),
                    (o.return = t),
                    (o = o.sibling));
        else
            for (o = t.child; o !== null;)
                ((i |= o.lanes | o.childLanes),
                    (l |= o.subtreeFlags),
                    (l |= o.flags),
                    (o.return = t),
                    (o = o.sibling));
        return ((t.subtreeFlags |= l), (t.childLanes = i), e);
    }
    function Cx(t, e, i) {
        var l = e.pendingProps;
        switch ((Vo(e), e.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Dt(e), null);
            case 1:
                return (Dt(e), null);
            case 3:
                return (
                    (i = e.stateNode),
                    (l = null),
                    t !== null && (l = t.memoizedState.cache),
                    e.memoizedState.cache !== l && (e.flags |= 2048),
                    dn(Gt),
                    jn(),
                    i.pendingContext &&
                    ((i.context = i.pendingContext),
                        (i.pendingContext = null)),
                    (t === null || t.child === null) &&
                    (Ya(e)
                        ? yn(e)
                        : t === null ||
                        (t.memoizedState.isDehydrated &&
                            (e.flags & 256) === 0) ||
                        ((e.flags |= 1024), hh())),
                    Dt(e),
                    null
                );
            case 26:
                return (
                    (i = e.memoizedState),
                    t === null
                        ? (yn(e),
                            i !== null
                                ? (Dt(e), Vm(e, i))
                                : (Dt(e), (e.flags &= -16777217)))
                        : i
                            ? i !== t.memoizedState
                                ? (yn(e), Dt(e), Vm(e, i))
                                : (Dt(e), (e.flags &= -16777217))
                            : (t.memoizedProps !== l && yn(e),
                                Dt(e),
                                (e.flags &= -16777217)),
                    null
                );
            case 27:
                (Wl(e), (i = rt.current));
                var o = e.type;
                if (t !== null && e.stateNode != null)
                    t.memoizedProps !== l && yn(e);
                else {
                    if (!l) {
                        if (e.stateNode === null) throw Error(r(166));
                        return (Dt(e), null);
                    }
                    ((t = et.current),
                        Ya(e)
                            ? fh(e)
                            : ((t = Vp(o, l, i)), (e.stateNode = t), yn(e)));
                }
                return (Dt(e), null);
            case 5:
                if ((Wl(e), (i = e.type), t !== null && e.stateNode != null))
                    t.memoizedProps !== l && yn(e);
                else {
                    if (!l) {
                        if (e.stateNode === null) throw Error(r(166));
                        return (Dt(e), null);
                    }
                    if (((t = et.current), Ya(e))) fh(e);
                    else {
                        switch (((o = tr(rt.current)), t)) {
                            case 1:
                                t = o.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    i,
                                );
                                break;
                            case 2:
                                t = o.createElementNS(
                                    "http://www.w3.org/1998/Math/MathML",
                                    i,
                                );
                                break;
                            default:
                                switch (i) {
                                    case "svg":
                                        t = o.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            i,
                                        );
                                        break;
                                    case "math":
                                        t = o.createElementNS(
                                            "http://www.w3.org/1998/Math/MathML",
                                            i,
                                        );
                                        break;
                                    case "script":
                                        ((t = o.createElement("div")),
                                            (t.innerHTML =
                                                "<script><\/script>"),
                                            (t = t.removeChild(t.firstChild)));
                                        break;
                                    case "select":
                                        ((t =
                                            typeof l.is == "string"
                                                ? o.createElement("select", {
                                                    is: l.is,
                                                })
                                                : o.createElement("select")),
                                            l.multiple
                                                ? (t.multiple = !0)
                                                : l.size && (t.size = l.size));
                                        break;
                                    default:
                                        t =
                                            typeof l.is == "string"
                                                ? o.createElement(i, {
                                                    is: l.is,
                                                })
                                                : o.createElement(i);
                                }
                        }
                        ((t[ie] = e), (t[oe] = l));
                        t: for (o = e.child; o !== null;) {
                            if (o.tag === 5 || o.tag === 6)
                                t.appendChild(o.stateNode);
                            else if (
                                o.tag !== 4 &&
                                o.tag !== 27 &&
                                o.child !== null
                            ) {
                                ((o.child.return = o), (o = o.child));
                                continue;
                            }
                            if (o === e) break t;
                            for (; o.sibling === null;) {
                                if (o.return === null || o.return === e)
                                    break t;
                                o = o.return;
                            }
                            ((o.sibling.return = o.return), (o = o.sibling));
                        }
                        e.stateNode = t;
                        t: switch ((te(t, i, l), i)) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!l.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1;
                        }
                        t && yn(e);
                    }
                }
                return (Dt(e), (e.flags &= -16777217), null);
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== l && yn(e);
                else {
                    if (typeof l != "string" && e.stateNode === null)
                        throw Error(r(166));
                    if (((t = rt.current), Ya(e))) {
                        if (
                            ((t = e.stateNode),
                                (i = e.memoizedProps),
                                (l = null),
                                (o = se),
                                o !== null)
                        )
                            switch (o.tag) {
                                case 27:
                                case 5:
                                    l = o.memoizedProps;
                            }
                        ((t[ie] = e),
                            (t = !!(
                                t.nodeValue === i ||
                                (l !== null &&
                                    l.suppressHydrationWarning === !0) ||
                                Mp(t.nodeValue, i)
                            )),
                            t || fi(e));
                    } else
                        ((t = tr(t).createTextNode(l)),
                            (t[ie] = e),
                            (e.stateNode = t));
                }
                return (Dt(e), null);
            case 13:
                if (
                    ((l = e.memoizedState),
                        t === null ||
                        (t.memoizedState !== null &&
                            t.memoizedState.dehydrated !== null))
                ) {
                    if (((o = Ya(e)), l !== null && l.dehydrated !== null)) {
                        if (t === null) {
                            if (!o) throw Error(r(318));
                            if (
                                ((o = e.memoizedState),
                                    (o = o !== null ? o.dehydrated : null),
                                    !o)
                            )
                                throw Error(r(317));
                            o[ie] = e;
                        } else
                            (Ga(),
                                (e.flags & 128) === 0 &&
                                (e.memoizedState = null),
                                (e.flags |= 4));
                        (Dt(e), (o = !1));
                    } else
                        ((o = hh()),
                            t !== null &&
                            t.memoizedState !== null &&
                            (t.memoizedState.hydrationErrors = o),
                            (o = !0));
                    if (!o) return e.flags & 256 ? (mn(e), e) : (mn(e), null);
                }
                if ((mn(e), (e.flags & 128) !== 0)) return ((e.lanes = i), e);
                if (
                    ((i = l !== null),
                        (t = t !== null && t.memoizedState !== null),
                        i)
                ) {
                    ((l = e.child),
                        (o = null),
                        l.alternate !== null &&
                        l.alternate.memoizedState !== null &&
                        l.alternate.memoizedState.cachePool !== null &&
                        (o = l.alternate.memoizedState.cachePool.pool));
                    var c = null;
                    (l.memoizedState !== null &&
                        l.memoizedState.cachePool !== null &&
                        (c = l.memoizedState.cachePool.pool),
                        c !== o && (l.flags |= 2048));
                }
                return (
                    i !== t && i && (e.child.flags |= 8192),
                    qs(e, e.updateQueue),
                    Dt(e),
                    null
                );
            case 4:
                return (
                    jn(),
                    t === null && Qu(e.stateNode.containerInfo),
                    Dt(e),
                    null
                );
            case 10:
                return (dn(e.type), Dt(e), null);
            case 19:
                if (($(Xt), (o = e.memoizedState), o === null))
                    return (Dt(e), null);
                if (
                    ((l = (e.flags & 128) !== 0), (c = o.rendering), c === null)
                )
                    if (l) ll(o, !1);
                    else {
                        if (Ot !== 0 || (t !== null && (t.flags & 128) !== 0))
                            for (t = e.child; t !== null;) {
                                if (((c = Bs(t)), c !== null)) {
                                    for (
                                        e.flags |= 128,
                                        ll(o, !1),
                                        t = c.updateQueue,
                                        e.updateQueue = t,
                                        qs(e, t),
                                        e.subtreeFlags = 0,
                                        t = i,
                                        i = e.child;
                                        i !== null;
                                    )
                                        (uh(i, t), (i = i.sibling));
                                    return (
                                        F(Xt, (Xt.current & 1) | 2),
                                        e.child
                                    );
                                }
                                t = t.sibling;
                            }
                        o.tail !== null &&
                            Ze() > Xs &&
                            ((e.flags |= 128),
                                (l = !0),
                                ll(o, !1),
                                (e.lanes = 4194304));
                    }
                else {
                    if (!l)
                        if (((t = Bs(c)), t !== null)) {
                            if (
                                ((e.flags |= 128),
                                    (l = !0),
                                    (t = t.updateQueue),
                                    (e.updateQueue = t),
                                    qs(e, t),
                                    ll(o, !0),
                                    o.tail === null &&
                                    o.tailMode === "hidden" &&
                                    !c.alternate &&
                                    !gt)
                            )
                                return (Dt(e), null);
                        } else
                            2 * Ze() - o.renderingStartTime > Xs &&
                                i !== 536870912 &&
                                ((e.flags |= 128),
                                    (l = !0),
                                    ll(o, !1),
                                    (e.lanes = 4194304));
                    o.isBackwards
                        ? ((c.sibling = e.child), (e.child = c))
                        : ((t = o.last),
                            t !== null ? (t.sibling = c) : (e.child = c),
                            (o.last = c));
                }
                return o.tail !== null
                    ? ((e = o.tail),
                        (o.rendering = e),
                        (o.tail = e.sibling),
                        (o.renderingStartTime = Ze()),
                        (e.sibling = null),
                        (t = Xt.current),
                        F(Xt, l ? (t & 1) | 2 : t & 1),
                        e)
                    : (Dt(e), null);
            case 22:
            case 23:
                return (
                    mn(e),
                    Fo(),
                    (l = e.memoizedState !== null),
                    t !== null
                        ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
                        : l && (e.flags |= 8192),
                    l
                        ? (i & 536870912) !== 0 &&
                        (e.flags & 128) === 0 &&
                        (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                        : Dt(e),
                    (i = e.updateQueue),
                    i !== null && qs(e, i.retryQueue),
                    (i = null),
                    t !== null &&
                    t.memoizedState !== null &&
                    t.memoizedState.cachePool !== null &&
                    (i = t.memoizedState.cachePool.pool),
                    (l = null),
                    e.memoizedState !== null &&
                    e.memoizedState.cachePool !== null &&
                    (l = e.memoizedState.cachePool.pool),
                    l !== i && (e.flags |= 2048),
                    t !== null && $(mi),
                    null
                );
            case 24:
                return (
                    (i = null),
                    t !== null && (i = t.memoizedState.cache),
                    e.memoizedState.cache !== i && (e.flags |= 2048),
                    dn(Gt),
                    Dt(e),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(r(156, e.tag));
    }
    function Ax(t, e) {
        switch ((Vo(e), e.tag)) {
            case 1:
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 3:
                return (
                    dn(Gt),
                    jn(),
                    (t = e.flags),
                    (t & 65536) !== 0 && (t & 128) === 0
                        ? ((e.flags = (t & -65537) | 128), e)
                        : null
                );
            case 26:
            case 27:
            case 5:
                return (Wl(e), null);
            case 13:
                if (
                    (mn(e),
                        (t = e.memoizedState),
                        t !== null && t.dehydrated !== null)
                ) {
                    if (e.alternate === null) throw Error(r(340));
                    Ga();
                }
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 19:
                return ($(Xt), null);
            case 4:
                return (jn(), null);
            case 10:
                return (dn(e.type), null);
            case 22:
            case 23:
                return (
                    mn(e),
                    Fo(),
                    t !== null && $(mi),
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 24:
                return (dn(Gt), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Bm(t, e) {
        switch ((Vo(e), e.tag)) {
            case 3:
                (dn(Gt), jn());
                break;
            case 26:
            case 27:
            case 5:
                Wl(e);
                break;
            case 4:
                jn();
                break;
            case 13:
                mn(e);
                break;
            case 19:
                $(Xt);
                break;
            case 10:
                dn(e.type);
                break;
            case 22:
            case 23:
                (mn(e), Fo(), t !== null && $(mi));
                break;
            case 24:
                dn(Gt);
        }
    }
    function sl(t, e) {
        try {
            var i = e.updateQueue,
                l = i !== null ? i.lastEffect : null;
            if (l !== null) {
                var o = l.next;
                i = o;
                do {
                    if ((i.tag & t) === t) {
                        l = void 0;
                        var c = i.create,
                            g = i.inst;
                        ((l = c()), (g.destroy = l));
                    }
                    i = i.next;
                } while (i !== o);
            }
        } catch (x) {
            Ct(e, e.return, x);
        }
    }
    function Ln(t, e, i) {
        try {
            var l = e.updateQueue,
                o = l !== null ? l.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                l = c;
                do {
                    if ((l.tag & t) === t) {
                        var g = l.inst,
                            x = g.destroy;
                        if (x !== void 0) {
                            ((g.destroy = void 0), (o = e));
                            var T = i,
                                D = x;
                            try {
                                D();
                            } catch (B) {
                                Ct(o, T, B);
                            }
                        }
                    }
                    l = l.next;
                } while (l !== c);
            }
        } catch (B) {
            Ct(e, e.return, B);
        }
    }
    function Lm(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var i = t.stateNode;
            try {
                Ch(e, i);
            } catch (l) {
                Ct(t, t.return, l);
            }
        }
    }
    function Um(t, e, i) {
        ((i.props = yi(t.type, t.memoizedProps)), (i.state = t.memoizedState));
        try {
            i.componentWillUnmount();
        } catch (l) {
            Ct(t, e, l);
        }
    }
    function rl(t, e) {
        try {
            var i = t.ref;
            if (i !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = t.stateNode;
                        break;
                    case 30:
                        l = t.stateNode;
                        break;
                    default:
                        l = t.stateNode;
                }
                typeof i == "function"
                    ? (t.refCleanup = i(l))
                    : (i.current = l);
            }
        } catch (o) {
            Ct(t, e, o);
        }
    }
    function Je(t, e) {
        var i = t.ref,
            l = t.refCleanup;
        if (i !== null)
            if (typeof l == "function")
                try {
                    l();
                } catch (o) {
                    Ct(t, e, o);
                } finally {
                    ((t.refCleanup = null),
                        (t = t.alternate),
                        t != null && (t.refCleanup = null));
                }
            else if (typeof i == "function")
                try {
                    i(null);
                } catch (o) {
                    Ct(t, e, o);
                }
            else i.current = null;
    }
    function km(t) {
        var e = t.type,
            i = t.memoizedProps,
            l = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    i.autoFocus && l.focus();
                    break t;
                case "img":
                    i.src ? (l.src = i.src) : i.srcSet && (l.srcset = i.srcSet);
            }
        } catch (o) {
            Ct(t, t.return, o);
        }
    }
    function wu(t, e, i) {
        try {
            var l = t.stateNode;
            (Px(l, t.type, i, e), (l[oe] = e));
        } catch (o) {
            Ct(t, t.return, o);
        }
    }
    function Hm(t) {
        return (
            t.tag === 5 ||
            t.tag === 3 ||
            t.tag === 26 ||
            (t.tag === 27 && Kn(t.type)) ||
            t.tag === 4
        );
    }
    function Cu(t) {
        t: for (; ;) {
            for (; t.sibling === null;) {
                if (t.return === null || Hm(t.return)) return null;
                t = t.return;
            }
            for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
            ) {
                if (
                    (t.tag === 27 && Kn(t.type)) ||
                    t.flags & 2 ||
                    t.child === null ||
                    t.tag === 4
                )
                    continue t;
                ((t.child.return = t), (t = t.child));
            }
            if (!(t.flags & 2)) return t.stateNode;
        }
    }
    function Au(t, e, i) {
        var l = t.tag;
        if (l === 5 || l === 6)
            ((t = t.stateNode),
                e
                    ? (i.nodeType === 9
                        ? i.body
                        : i.nodeName === "HTML"
                            ? i.ownerDocument.body
                            : i
                    ).insertBefore(t, e)
                    : ((e =
                        i.nodeType === 9
                            ? i.body
                            : i.nodeName === "HTML"
                                ? i.ownerDocument.body
                                : i),
                        e.appendChild(t),
                        (i = i._reactRootContainer),
                        i != null || e.onclick !== null || (e.onclick = Is)));
        else if (
            l !== 4 &&
            (l === 27 && Kn(t.type) && ((i = t.stateNode), (e = null)),
                (t = t.child),
                t !== null)
        )
            for (Au(t, e, i), t = t.sibling; t !== null;)
                (Au(t, e, i), (t = t.sibling));
    }
    function Ys(t, e, i) {
        var l = t.tag;
        if (l === 5 || l === 6)
            ((t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t));
        else if (
            l !== 4 &&
            (l === 27 && Kn(t.type) && (i = t.stateNode),
                (t = t.child),
                t !== null)
        )
            for (Ys(t, e, i), t = t.sibling; t !== null;)
                (Ys(t, e, i), (t = t.sibling));
    }
    function qm(t) {
        var e = t.stateNode,
            i = t.memoizedProps;
        try {
            for (var l = t.type, o = e.attributes; o.length;)
                e.removeAttributeNode(o[0]);
            (te(e, l, i), (e[ie] = t), (e[oe] = i));
        } catch (c) {
            Ct(t, t.return, c);
        }
    }
    var gn = !1,
        Bt = !1,
        ju = !1,
        Ym = typeof WeakSet == "function" ? WeakSet : Set,
        Zt = null;
    function jx(t, e) {
        if (((t = t.containerInfo), ($u = sr), (t = Id(t)), Co(t))) {
            if ("selectionStart" in t)
                var i = { start: t.selectionStart, end: t.selectionEnd };
            else
                t: {
                    i = ((i = t.ownerDocument) && i.defaultView) || window;
                    var l = i.getSelection && i.getSelection();
                    if (l && l.rangeCount !== 0) {
                        i = l.anchorNode;
                        var o = l.anchorOffset,
                            c = l.focusNode;
                        l = l.focusOffset;
                        try {
                            (i.nodeType, c.nodeType);
                        } catch {
                            i = null;
                            break t;
                        }
                        var g = 0,
                            x = -1,
                            T = -1,
                            D = 0,
                            B = 0,
                            q = t,
                            N = null;
                        e: for (; ;) {
                            for (
                                var R;
                                q !== i ||
                                (o !== 0 && q.nodeType !== 3) ||
                                (x = g + o),
                                q !== c ||
                                (l !== 0 && q.nodeType !== 3) ||
                                (T = g + l),
                                q.nodeType === 3 &&
                                (g += q.nodeValue.length),
                                (R = q.firstChild) !== null;
                            )
                                ((N = q), (q = R));
                            for (; ;) {
                                if (q === t) break e;
                                if (
                                    (N === i && ++D === o && (x = g),
                                        N === c && ++B === l && (T = g),
                                        (R = q.nextSibling) !== null)
                                )
                                    break;
                                ((q = N), (N = q.parentNode));
                            }
                            q = R;
                        }
                        i = x === -1 || T === -1 ? null : { start: x, end: T };
                    } else i = null;
                }
            i = i || { start: 0, end: 0 };
        } else i = null;
        for (
            Ju = { focusedElem: t, selectionRange: i }, sr = !1, Zt = e;
            Zt !== null;
        )
            if (
                ((e = Zt),
                    (t = e.child),
                    (e.subtreeFlags & 1024) !== 0 && t !== null)
            )
                ((t.return = e), (Zt = t));
            else
                for (; Zt !== null;) {
                    switch (
                    ((e = Zt), (c = e.alternate), (t = e.flags), e.tag)
                    ) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && c !== null) {
                                ((t = void 0),
                                    (i = e),
                                    (o = c.memoizedProps),
                                    (c = c.memoizedState),
                                    (l = i.stateNode));
                                try {
                                    var at = yi(
                                        i.type,
                                        o,
                                        i.elementType === i.type,
                                    );
                                    ((t = l.getSnapshotBeforeUpdate(at, c)),
                                        (l.__reactInternalSnapshotBeforeUpdate =
                                            t));
                                } catch (nt) {
                                    Ct(i, i.return, nt);
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (
                                    ((t = e.stateNode.containerInfo),
                                        (i = t.nodeType),
                                        i === 9)
                                )
                                    tc(t);
                                else if (i === 1)
                                    switch (t.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            tc(t);
                                            break;
                                        default:
                                            t.textContent = "";
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(r(163));
                    }
                    if (((t = e.sibling), t !== null)) {
                        ((t.return = e.return), (Zt = t));
                        break;
                    }
                    Zt = e.return;
                }
    }
    function Gm(t, e, i) {
        var l = i.flags;
        switch (i.tag) {
            case 0:
            case 11:
            case 15:
                (Un(t, i), l & 4 && sl(5, i));
                break;
            case 1:
                if ((Un(t, i), l & 4))
                    if (((t = i.stateNode), e === null))
                        try {
                            t.componentDidMount();
                        } catch (g) {
                            Ct(i, i.return, g);
                        }
                    else {
                        var o = yi(i.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(
                                o,
                                e,
                                t.__reactInternalSnapshotBeforeUpdate,
                            );
                        } catch (g) {
                            Ct(i, i.return, g);
                        }
                    }
                (l & 64 && Lm(i), l & 512 && rl(i, i.return));
                break;
            case 3:
                if ((Un(t, i), l & 64 && ((t = i.updateQueue), t !== null))) {
                    if (((e = null), i.child !== null))
                        switch (i.child.tag) {
                            case 27:
                            case 5:
                                e = i.child.stateNode;
                                break;
                            case 1:
                                e = i.child.stateNode;
                        }
                    try {
                        Ch(t, e);
                    } catch (g) {
                        Ct(i, i.return, g);
                    }
                }
                break;
            case 27:
                e === null && l & 4 && qm(i);
            case 26:
            case 5:
                (Un(t, i),
                    e === null && l & 4 && km(i),
                    l & 512 && rl(i, i.return));
                break;
            case 12:
                Un(t, i);
                break;
            case 13:
                (Un(t, i),
                    l & 4 && Pm(t, i),
                    l & 64 &&
                    ((t = i.memoizedState),
                        t !== null &&
                        ((t = t.dehydrated),
                            t !== null && ((i = Vx.bind(null, i)), Ix(t, i)))));
                break;
            case 22:
                if (((l = i.memoizedState !== null || gn), !l)) {
                    ((e = (e !== null && e.memoizedState !== null) || Bt),
                        (o = gn));
                    var c = Bt;
                    ((gn = l),
                        (Bt = e) && !c
                            ? kn(t, i, (i.subtreeFlags & 8772) !== 0)
                            : Un(t, i),
                        (gn = o),
                        (Bt = c));
                }
                break;
            case 30:
                break;
            default:
                Un(t, i);
        }
    }
    function Xm(t) {
        var e = t.alternate;
        (e !== null && ((t.alternate = null), Xm(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            t.tag === 5 && ((e = t.stateNode), e !== null && ao(e)),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null));
    }
    var Mt = null,
        fe = !1;
    function vn(t, e, i) {
        for (i = i.child; i !== null;) (Km(t, e, i), (i = i.sibling));
    }
    function Km(t, e, i) {
        if (ye && typeof ye.onCommitFiberUnmount == "function")
            try {
                ye.onCommitFiberUnmount(Ma, i);
            } catch { }
        switch (i.tag) {
            case 26:
                (Bt || Je(i, e),
                    vn(t, e, i),
                    i.memoizedState
                        ? i.memoizedState.count--
                        : i.stateNode &&
                        ((i = i.stateNode), i.parentNode.removeChild(i)));
                break;
            case 27:
                Bt || Je(i, e);
                var l = Mt,
                    o = fe;
                (Kn(i.type) && ((Mt = i.stateNode), (fe = !1)),
                    vn(t, e, i),
                    yl(i.stateNode),
                    (Mt = l),
                    (fe = o));
                break;
            case 5:
                Bt || Je(i, e);
            case 6:
                if (
                    ((l = Mt),
                        (o = fe),
                        (Mt = null),
                        vn(t, e, i),
                        (Mt = l),
                        (fe = o),
                        Mt !== null)
                )
                    if (fe)
                        try {
                            (Mt.nodeType === 9
                                ? Mt.body
                                : Mt.nodeName === "HTML"
                                    ? Mt.ownerDocument.body
                                    : Mt
                            ).removeChild(i.stateNode);
                        } catch (c) {
                            Ct(i, e, c);
                        }
                    else
                        try {
                            Mt.removeChild(i.stateNode);
                        } catch (c) {
                            Ct(i, e, c);
                        }
                break;
            case 18:
                Mt !== null &&
                    (fe
                        ? ((t = Mt),
                            zp(
                                t.nodeType === 9
                                    ? t.body
                                    : t.nodeName === "HTML"
                                        ? t.ownerDocument.body
                                        : t,
                                i.stateNode,
                            ),
                            Cl(t))
                        : zp(Mt, i.stateNode));
                break;
            case 4:
                ((l = Mt),
                    (o = fe),
                    (Mt = i.stateNode.containerInfo),
                    (fe = !0),
                    vn(t, e, i),
                    (Mt = l),
                    (fe = o));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (Bt || Ln(2, i, e), Bt || Ln(4, i, e), vn(t, e, i));
                break;
            case 1:
                (Bt ||
                    (Je(i, e),
                        (l = i.stateNode),
                        typeof l.componentWillUnmount == "function" && Um(i, e, l)),
                    vn(t, e, i));
                break;
            case 21:
                vn(t, e, i);
                break;
            case 22:
                ((Bt = (l = Bt) || i.memoizedState !== null),
                    vn(t, e, i),
                    (Bt = l));
                break;
            default:
                vn(t, e, i);
        }
    }
    function Pm(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate),
                t !== null &&
                ((t = t.memoizedState),
                    t !== null && ((t = t.dehydrated), t !== null)))
        )
            try {
                Cl(t);
            } catch (i) {
                Ct(e, e.return, i);
            }
    }
    function Ex(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var e = t.stateNode;
                return (e === null && (e = t.stateNode = new Ym()), e);
            case 22:
                return (
                    (t = t.stateNode),
                    (e = t._retryCache),
                    e === null && (e = t._retryCache = new Ym()),
                    e
                );
            default:
                throw Error(r(435, t.tag));
        }
    }
    function Eu(t, e) {
        var i = Ex(t);
        e.forEach(function (l) {
            var o = Bx.bind(null, t, l);
            i.has(l) || (i.add(l), l.then(o, o));
        });
    }
    function be(t, e) {
        var i = e.deletions;
        if (i !== null)
            for (var l = 0; l < i.length; l++) {
                var o = i[l],
                    c = t,
                    g = e,
                    x = g;
                t: for (; x !== null;) {
                    switch (x.tag) {
                        case 27:
                            if (Kn(x.type)) {
                                ((Mt = x.stateNode), (fe = !1));
                                break t;
                            }
                            break;
                        case 5:
                            ((Mt = x.stateNode), (fe = !1));
                            break t;
                        case 3:
                        case 4:
                            ((Mt = x.stateNode.containerInfo), (fe = !0));
                            break t;
                    }
                    x = x.return;
                }
                if (Mt === null) throw Error(r(160));
                (Km(c, g, o),
                    (Mt = null),
                    (fe = !1),
                    (c = o.alternate),
                    c !== null && (c.return = null),
                    (o.return = null));
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null;) (Qm(e, t), (e = e.sibling));
    }
    var qe = null;
    function Qm(t, e) {
        var i = t.alternate,
            l = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (be(e, t),
                    Se(t),
                    l & 4 &&
                    (Ln(3, t, t.return), sl(3, t), Ln(5, t, t.return)));
                break;
            case 1:
                (be(e, t),
                    Se(t),
                    l & 512 && (Bt || i === null || Je(i, i.return)),
                    l & 64 &&
                    gn &&
                    ((t = t.updateQueue),
                        t !== null &&
                        ((l = t.callbacks),
                            l !== null &&
                            ((i = t.shared.hiddenCallbacks),
                                (t.shared.hiddenCallbacks =
                                    i === null ? l : i.concat(l))))));
                break;
            case 26:
                var o = qe;
                if (
                    (be(e, t),
                        Se(t),
                        l & 512 && (Bt || i === null || Je(i, i.return)),
                        l & 4)
                ) {
                    var c = i !== null ? i.memoizedState : null;
                    if (((l = t.memoizedState), i === null))
                        if (l === null)
                            if (t.stateNode === null) {
                                t: {
                                    ((l = t.type),
                                        (i = t.memoizedProps),
                                        (o = o.ownerDocument || o));
                                    e: switch (l) {
                                        case "title":
                                            ((c =
                                                o.getElementsByTagName(
                                                    "title",
                                                )[0]),
                                                (!c ||
                                                    c[Ra] ||
                                                    c[ie] ||
                                                    c.namespaceURI ===
                                                    "http://www.w3.org/2000/svg" ||
                                                    c.hasAttribute(
                                                        "itemprop",
                                                    )) &&
                                                ((c = o.createElement(l)),
                                                    o.head.insertBefore(
                                                        c,
                                                        o.querySelector(
                                                            "head > title",
                                                        ),
                                                    )),
                                                te(c, l, i),
                                                (c[ie] = t),
                                                Pt(c),
                                                (l = c));
                                            break t;
                                        case "link":
                                            var g = qp("link", "href", o).get(
                                                l + (i.href || ""),
                                            );
                                            if (g) {
                                                for (
                                                    var x = 0;
                                                    x < g.length;
                                                    x++
                                                )
                                                    if (
                                                        ((c = g[x]),
                                                            c.getAttribute(
                                                                "href",
                                                            ) ===
                                                            (i.href == null ||
                                                                i.href === ""
                                                                ? null
                                                                : i.href) &&
                                                            c.getAttribute(
                                                                "rel",
                                                            ) ===
                                                            (i.rel == null
                                                                ? null
                                                                : i.rel) &&
                                                            c.getAttribute(
                                                                "title",
                                                            ) ===
                                                            (i.title == null
                                                                ? null
                                                                : i.title) &&
                                                            c.getAttribute(
                                                                "crossorigin",
                                                            ) ===
                                                            (i.crossOrigin ==
                                                                null
                                                                ? null
                                                                : i.crossOrigin))
                                                    ) {
                                                        g.splice(x, 1);
                                                        break e;
                                                    }
                                            }
                                            ((c = o.createElement(l)),
                                                te(c, l, i),
                                                o.head.appendChild(c));
                                            break;
                                        case "meta":
                                            if (
                                                (g = qp(
                                                    "meta",
                                                    "content",
                                                    o,
                                                ).get(l + (i.content || "")))
                                            ) {
                                                for (x = 0; x < g.length; x++)
                                                    if (
                                                        ((c = g[x]),
                                                            c.getAttribute(
                                                                "content",
                                                            ) ===
                                                            (i.content == null
                                                                ? null
                                                                : "" +
                                                                i.content) &&
                                                            c.getAttribute(
                                                                "name",
                                                            ) ===
                                                            (i.name == null
                                                                ? null
                                                                : i.name) &&
                                                            c.getAttribute(
                                                                "property",
                                                            ) ===
                                                            (i.property ==
                                                                null
                                                                ? null
                                                                : i.property) &&
                                                            c.getAttribute(
                                                                "http-equiv",
                                                            ) ===
                                                            (i.httpEquiv ==
                                                                null
                                                                ? null
                                                                : i.httpEquiv) &&
                                                            c.getAttribute(
                                                                "charset",
                                                            ) ===
                                                            (i.charSet ==
                                                                null
                                                                ? null
                                                                : i.charSet))
                                                    ) {
                                                        g.splice(x, 1);
                                                        break e;
                                                    }
                                            }
                                            ((c = o.createElement(l)),
                                                te(c, l, i),
                                                o.head.appendChild(c));
                                            break;
                                        default:
                                            throw Error(r(468, l));
                                    }
                                    ((c[ie] = t), Pt(c), (l = c));
                                }
                                t.stateNode = l;
                            } else Yp(o, t.type, t.stateNode);
                        else t.stateNode = Hp(o, l, t.memoizedProps);
                    else
                        c !== l
                            ? (c === null
                                ? i.stateNode !== null &&
                                ((i = i.stateNode),
                                    i.parentNode.removeChild(i))
                                : c.count--,
                                l === null
                                    ? Yp(o, t.type, t.stateNode)
                                    : Hp(o, l, t.memoizedProps))
                            : l === null &&
                            t.stateNode !== null &&
                            wu(t, t.memoizedProps, i.memoizedProps);
                }
                break;
            case 27:
                (be(e, t),
                    Se(t),
                    l & 512 && (Bt || i === null || Je(i, i.return)),
                    i !== null &&
                    l & 4 &&
                    wu(t, t.memoizedProps, i.memoizedProps));
                break;
            case 5:
                if (
                    (be(e, t),
                        Se(t),
                        l & 512 && (Bt || i === null || Je(i, i.return)),
                        t.flags & 32)
                ) {
                    o = t.stateNode;
                    try {
                        Li(o, "");
                    } catch (R) {
                        Ct(t, t.return, R);
                    }
                }
                (l & 4 &&
                    t.stateNode != null &&
                    ((o = t.memoizedProps),
                        wu(t, o, i !== null ? i.memoizedProps : o)),
                    l & 1024 && (ju = !0));
                break;
            case 6:
                if ((be(e, t), Se(t), l & 4)) {
                    if (t.stateNode === null) throw Error(r(162));
                    ((l = t.memoizedProps), (i = t.stateNode));
                    try {
                        i.nodeValue = l;
                    } catch (R) {
                        Ct(t, t.return, R);
                    }
                }
                break;
            case 3:
                if (
                    ((ir = null),
                        (o = qe),
                        (qe = er(e.containerInfo)),
                        be(e, t),
                        (qe = o),
                        Se(t),
                        l & 4 && i !== null && i.memoizedState.isDehydrated)
                )
                    try {
                        Cl(e.containerInfo);
                    } catch (R) {
                        Ct(t, t.return, R);
                    }
                ju && ((ju = !1), Zm(t));
                break;
            case 4:
                ((l = qe),
                    (qe = er(t.stateNode.containerInfo)),
                    be(e, t),
                    Se(t),
                    (qe = l));
                break;
            case 12:
                (be(e, t), Se(t));
                break;
            case 13:
                (be(e, t),
                    Se(t),
                    t.child.flags & 8192 &&
                    (t.memoizedState !== null) !=
                    (i !== null && i.memoizedState !== null) &&
                    (zu = Ze()),
                    l & 4 &&
                    ((l = t.updateQueue),
                        l !== null && ((t.updateQueue = null), Eu(t, l))));
                break;
            case 22:
                o = t.memoizedState !== null;
                var T = i !== null && i.memoizedState !== null,
                    D = gn,
                    B = Bt;
                if (
                    ((gn = D || o),
                        (Bt = B || T),
                        be(e, t),
                        (Bt = B),
                        (gn = D),
                        Se(t),
                        l & 8192)
                )
                    t: for (
                        e = t.stateNode,
                        e._visibility = o
                            ? e._visibility & -2
                            : e._visibility | 1,
                        o && (i === null || T || gn || Bt || gi(t)),
                        i = null,
                        e = t;
                        ;
                    ) {
                        if (e.tag === 5 || e.tag === 26) {
                            if (i === null) {
                                T = i = e;
                                try {
                                    if (((c = T.stateNode), o))
                                        ((g = c.style),
                                            typeof g.setProperty == "function"
                                                ? g.setProperty(
                                                    "display",
                                                    "none",
                                                    "important",
                                                )
                                                : (g.display = "none"));
                                    else {
                                        x = T.stateNode;
                                        var q = T.memoizedProps.style,
                                            N =
                                                q != null &&
                                                    q.hasOwnProperty("display")
                                                    ? q.display
                                                    : null;
                                        x.style.display =
                                            N == null || typeof N == "boolean"
                                                ? ""
                                                : ("" + N).trim();
                                    }
                                } catch (R) {
                                    Ct(T, T.return, R);
                                }
                            }
                        } else if (e.tag === 6) {
                            if (i === null) {
                                T = e;
                                try {
                                    T.stateNode.nodeValue = o
                                        ? ""
                                        : T.memoizedProps;
                                } catch (R) {
                                    Ct(T, T.return, R);
                                }
                            }
                        } else if (
                            ((e.tag !== 22 && e.tag !== 23) ||
                                e.memoizedState === null ||
                                e === t) &&
                            e.child !== null
                        ) {
                            ((e.child.return = e), (e = e.child));
                            continue;
                        }
                        if (e === t) break t;
                        for (; e.sibling === null;) {
                            if (e.return === null || e.return === t) break t;
                            (i === e && (i = null), (e = e.return));
                        }
                        (i === e && (i = null),
                            (e.sibling.return = e.return),
                            (e = e.sibling));
                    }
                l & 4 &&
                    ((l = t.updateQueue),
                        l !== null &&
                        ((i = l.retryQueue),
                            i !== null && ((l.retryQueue = null), Eu(t, i))));
                break;
            case 19:
                (be(e, t),
                    Se(t),
                    l & 4 &&
                    ((l = t.updateQueue),
                        l !== null && ((t.updateQueue = null), Eu(t, l))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (be(e, t), Se(t));
        }
    }
    function Se(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var i, l = t.return; l !== null;) {
                    if (Hm(l)) {
                        i = l;
                        break;
                    }
                    l = l.return;
                }
                if (i == null) throw Error(r(160));
                switch (i.tag) {
                    case 27:
                        var o = i.stateNode,
                            c = Cu(t);
                        Ys(t, c, o);
                        break;
                    case 5:
                        var g = i.stateNode;
                        i.flags & 32 && (Li(g, ""), (i.flags &= -33));
                        var x = Cu(t);
                        Ys(t, x, g);
                        break;
                    case 3:
                    case 4:
                        var T = i.stateNode.containerInfo,
                            D = Cu(t);
                        Au(t, D, T);
                        break;
                    default:
                        throw Error(r(161));
                }
            } catch (B) {
                Ct(t, t.return, B);
            }
            t.flags &= -3;
        }
        e & 4096 && (t.flags &= -4097);
    }
    function Zm(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                (Zm(e),
                    e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                    (t = t.sibling));
            }
    }
    function Un(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;)
                (Gm(t, e.alternate, e), (e = e.sibling));
    }
    function gi(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (Ln(4, e, e.return), gi(e));
                    break;
                case 1:
                    Je(e, e.return);
                    var i = e.stateNode;
                    (typeof i.componentWillUnmount == "function" &&
                        Um(e, e.return, i),
                        gi(e));
                    break;
                case 27:
                    yl(e.stateNode);
                case 26:
                case 5:
                    (Je(e, e.return), gi(e));
                    break;
                case 22:
                    e.memoizedState === null && gi(e);
                    break;
                case 30:
                    gi(e);
                    break;
                default:
                    gi(e);
            }
            t = t.sibling;
        }
    }
    function kn(t, e, i) {
        for (
            i = i && (e.subtreeFlags & 8772) !== 0, e = e.child;
            e !== null;
        ) {
            var l = e.alternate,
                o = t,
                c = e,
                g = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    (kn(o, c, i), sl(4, c));
                    break;
                case 1:
                    if (
                        (kn(o, c, i),
                            (l = c),
                            (o = l.stateNode),
                            typeof o.componentDidMount == "function")
                    )
                        try {
                            o.componentDidMount();
                        } catch (D) {
                            Ct(l, l.return, D);
                        }
                    if (((l = c), (o = l.updateQueue), o !== null)) {
                        var x = l.stateNode;
                        try {
                            var T = o.shared.hiddenCallbacks;
                            if (T !== null)
                                for (
                                    o.shared.hiddenCallbacks = null, o = 0;
                                    o < T.length;
                                    o++
                                )
                                    wh(T[o], x);
                        } catch (D) {
                            Ct(l, l.return, D);
                        }
                    }
                    (i && g & 64 && Lm(c), rl(c, c.return));
                    break;
                case 27:
                    qm(c);
                case 26:
                case 5:
                    (kn(o, c, i),
                        i && l === null && g & 4 && km(c),
                        rl(c, c.return));
                    break;
                case 12:
                    kn(o, c, i);
                    break;
                case 13:
                    (kn(o, c, i), i && g & 4 && Pm(o, c));
                    break;
                case 22:
                    (c.memoizedState === null && kn(o, c, i), rl(c, c.return));
                    break;
                case 30:
                    break;
                default:
                    kn(o, c, i);
            }
            e = e.sibling;
        }
    }
    function Mu(t, e) {
        var i = null;
        (t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
            (t = null),
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (t = e.memoizedState.cachePool.pool),
            t !== i && (t != null && t.refCount++, i != null && Pa(i)));
    }
    function Du(t, e) {
        ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Pa(t)));
    }
    function We(t, e, i, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) (Fm(t, e, i, l), (e = e.sibling));
    }
    function Fm(t, e, i, l) {
        var o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (We(t, e, i, l), o & 2048 && sl(9, e));
                break;
            case 1:
                We(t, e, i, l);
                break;
            case 3:
                (We(t, e, i, l),
                    o & 2048 &&
                    ((t = null),
                        e.alternate !== null &&
                        (t = e.alternate.memoizedState.cache),
                        (e = e.memoizedState.cache),
                        e !== t && (e.refCount++, t != null && Pa(t))));
                break;
            case 12:
                if (o & 2048) {
                    (We(t, e, i, l), (t = e.stateNode));
                    try {
                        var c = e.memoizedProps,
                            g = c.id,
                            x = c.onPostCommit;
                        typeof x == "function" &&
                            x(
                                g,
                                e.alternate === null ? "mount" : "update",
                                t.passiveEffectDuration,
                                -0,
                            );
                    } catch (T) {
                        Ct(e, e.return, T);
                    }
                } else We(t, e, i, l);
                break;
            case 13:
                We(t, e, i, l);
                break;
            case 23:
                break;
            case 22:
                ((c = e.stateNode),
                    (g = e.alternate),
                    e.memoizedState !== null
                        ? c._visibility & 2
                            ? We(t, e, i, l)
                            : ol(t, e)
                        : c._visibility & 2
                            ? We(t, e, i, l)
                            : ((c._visibility |= 2),
                                na(t, e, i, l, (e.subtreeFlags & 10256) !== 0)),
                    o & 2048 && Mu(g, e));
                break;
            case 24:
                (We(t, e, i, l), o & 2048 && Du(e.alternate, e));
                break;
            default:
                We(t, e, i, l);
        }
    }
    function na(t, e, i, l, o) {
        for (
            o = o && (e.subtreeFlags & 10256) !== 0, e = e.child;
            e !== null;
        ) {
            var c = t,
                g = e,
                x = i,
                T = l,
                D = g.flags;
            switch (g.tag) {
                case 0:
                case 11:
                case 15:
                    (na(c, g, x, T, o), sl(8, g));
                    break;
                case 23:
                    break;
                case 22:
                    var B = g.stateNode;
                    (g.memoizedState !== null
                        ? B._visibility & 2
                            ? na(c, g, x, T, o)
                            : ol(c, g)
                        : ((B._visibility |= 2), na(c, g, x, T, o)),
                        o && D & 2048 && Mu(g.alternate, g));
                    break;
                case 24:
                    (na(c, g, x, T, o), o && D & 2048 && Du(g.alternate, g));
                    break;
                default:
                    na(c, g, x, T, o);
            }
            e = e.sibling;
        }
    }
    function ol(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var i = t,
                    l = e,
                    o = l.flags;
                switch (l.tag) {
                    case 22:
                        (ol(i, l), o & 2048 && Mu(l.alternate, l));
                        break;
                    case 24:
                        (ol(i, l), o & 2048 && Du(l.alternate, l));
                        break;
                    default:
                        ol(i, l);
                }
                e = e.sibling;
            }
    }
    var ul = 8192;
    function ia(t) {
        if (t.subtreeFlags & ul)
            for (t = t.child; t !== null;) ($m(t), (t = t.sibling));
    }
    function $m(t) {
        switch (t.tag) {
            case 26:
                (ia(t),
                    t.flags & ul &&
                    t.memoizedState !== null &&
                    db(qe, t.memoizedState, t.memoizedProps));
                break;
            case 5:
                ia(t);
                break;
            case 3:
            case 4:
                var e = qe;
                ((qe = er(t.stateNode.containerInfo)), ia(t), (qe = e));
                break;
            case 22:
                t.memoizedState === null &&
                    ((e = t.alternate),
                        e !== null && e.memoizedState !== null
                            ? ((e = ul), (ul = 16777216), ia(t), (ul = e))
                            : ia(t));
                break;
            default:
                ia(t);
        }
    }
    function Jm(t) {
        var e = t.alternate;
        if (e !== null && ((t = e.child), t !== null)) {
            e.child = null;
            do ((e = t.sibling), (t.sibling = null), (t = e));
            while (t !== null);
        }
    }
    function cl(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var i = 0; i < e.length; i++) {
                    var l = e[i];
                    ((Zt = l), Im(l, t));
                }
            Jm(t);
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) (Wm(t), (t = t.sibling));
    }
    function Wm(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (cl(t), t.flags & 2048 && Ln(9, t, t.return));
                break;
            case 3:
                cl(t);
                break;
            case 12:
                cl(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null &&
                    e._visibility & 2 &&
                    (t.return === null || t.return.tag !== 13)
                    ? ((e._visibility &= -3), Gs(t))
                    : cl(t);
                break;
            default:
                cl(t);
        }
    }
    function Gs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var i = 0; i < e.length; i++) {
                    var l = e[i];
                    ((Zt = l), Im(l, t));
                }
            Jm(t);
        }
        for (t = t.child; t !== null;) {
            switch (((e = t), e.tag)) {
                case 0:
                case 11:
                case 15:
                    (Ln(8, e, e.return), Gs(e));
                    break;
                case 22:
                    ((i = e.stateNode),
                        i._visibility & 2 && ((i._visibility &= -3), Gs(e)));
                    break;
                default:
                    Gs(e);
            }
            t = t.sibling;
        }
    }
    function Im(t, e) {
        for (; Zt !== null;) {
            var i = Zt;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Ln(8, i, e);
                    break;
                case 23:
                case 22:
                    if (
                        i.memoizedState !== null &&
                        i.memoizedState.cachePool !== null
                    ) {
                        var l = i.memoizedState.cachePool.pool;
                        l != null && l.refCount++;
                    }
                    break;
                case 24:
                    Pa(i.memoizedState.cache);
            }
            if (((l = i.child), l !== null)) ((l.return = i), (Zt = l));
            else
                t: for (i = t; Zt !== null;) {
                    l = Zt;
                    var o = l.sibling,
                        c = l.return;
                    if ((Xm(l), l === i)) {
                        Zt = null;
                        break t;
                    }
                    if (o !== null) {
                        ((o.return = c), (Zt = o));
                        break t;
                    }
                    Zt = c;
                }
        }
    }
    var Mx = {
        getCacheForType: function (t) {
            var e = ae(Gt),
                i = e.data.get(t);
            return (i === void 0 && ((i = t()), e.data.set(t, i)), i);
        },
    },
        Dx = typeof WeakMap == "function" ? WeakMap : Map,
        vt = 0,
        At = null,
        ft = null,
        mt = 0,
        xt = 0,
        Te = null,
        Hn = !1,
        aa = !1,
        Nu = !1,
        xn = 0,
        Ot = 0,
        qn = 0,
        vi = 0,
        Ru = 0,
        _e = 0,
        la = 0,
        fl = null,
        de = null,
        Ou = !1,
        zu = 0,
        Xs = 1 / 0,
        Ks = null,
        Yn = null,
        It = 0,
        Gn = null,
        sa = null,
        ra = 0,
        _u = 0,
        Vu = null,
        tp = null,
        dl = 0,
        Bu = null;
    function we() {
        if ((vt & 2) !== 0 && mt !== 0) return mt & -mt;
        if (L.T !== null) {
            var t = Zi;
            return t !== 0 ? t : Gu();
        }
        return yd();
    }
    function ep() {
        _e === 0 && (_e = (mt & 536870912) === 0 || gt ? dd() : 536870912);
        var t = ze.current;
        return (t !== null && (t.flags |= 32), _e);
    }
    function Ce(t, e, i) {
        (((t === At && (xt === 2 || xt === 9)) ||
            t.cancelPendingCommit !== null) &&
            (oa(t, 0), Xn(t, mt, _e, !1)),
            Na(t, i),
            ((vt & 2) === 0 || t !== At) &&
            (t === At &&
                ((vt & 2) === 0 && (vi |= i),
                    Ot === 4 && Xn(t, mt, _e, !1)),
                Ie(t)));
    }
    function np(t, e, i) {
        if ((vt & 6) !== 0) throw Error(r(327));
        var l =
            (!i && (e & 124) === 0 && (e & t.expiredLanes) === 0) ||
            Da(t, e),
            o = l ? Ox(t, e) : ku(t, e, !0),
            c = l;
        do {
            if (o === 0) {
                aa && !l && Xn(t, e, 0, !1);
                break;
            } else {
                if (((i = t.current.alternate), c && !Nx(i))) {
                    ((o = ku(t, e, !1)), (c = !1));
                    continue;
                }
                if (o === 2) {
                    if (((c = e), t.errorRecoveryDisabledLanes & c)) var g = 0;
                    else
                        ((g = t.pendingLanes & -536870913),
                            (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
                    if (g !== 0) {
                        e = g;
                        t: {
                            var x = t;
                            o = fl;
                            var T = x.current.memoizedState.isDehydrated;
                            if (
                                (T && (oa(x, g).flags |= 256),
                                    (g = ku(x, g, !1)),
                                    g !== 2)
                            ) {
                                if (Nu && !T) {
                                    ((x.errorRecoveryDisabledLanes |= c),
                                        (vi |= c),
                                        (o = 4));
                                    break t;
                                }
                                ((c = de),
                                    (de = o),
                                    c !== null &&
                                    (de === null
                                        ? (de = c)
                                        : de.push.apply(de, c)));
                            }
                            o = g;
                        }
                        if (((c = !1), o !== 2)) continue;
                    }
                }
                if (o === 1) {
                    (oa(t, 0), Xn(t, e, 0, !0));
                    break;
                }
                t: {
                    switch (((l = t), (c = o), c)) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Xn(l, e, _e, !Hn);
                            break t;
                        case 2:
                            de = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if (
                        (e & 62914560) === e &&
                        ((o = zu + 300 - Ze()), 10 < o)
                    ) {
                        if ((Xn(l, e, _e, !Hn), ns(l, 0, !0) !== 0)) break t;
                        l.timeoutHandle = Rp(
                            ip.bind(
                                null,
                                l,
                                i,
                                de,
                                Ks,
                                Ou,
                                e,
                                _e,
                                vi,
                                la,
                                Hn,
                                c,
                                2,
                                -0,
                                0,
                            ),
                            o,
                        );
                        break t;
                    }
                    ip(l, i, de, Ks, Ou, e, _e, vi, la, Hn, c, 0, -0, 0);
                }
            }
            break;
        } while (!0);
        Ie(t);
    }
    function ip(t, e, i, l, o, c, g, x, T, D, B, q, N, R) {
        if (
            ((t.timeoutHandle = -1),
                (q = e.subtreeFlags),
                (q & 8192 || (q & 16785408) === 16785408) &&
                ((xl = { stylesheets: null, count: 0, unsuspend: fb }),
                    $m(e),
                    (q = hb()),
                    q !== null))
        ) {
            ((t.cancelPendingCommit = q(
                cp.bind(null, t, e, c, i, l, o, g, x, T, B, 1, N, R),
            )),
                Xn(t, c, g, !D));
            return;
        }
        cp(t, e, c, i, l, o, g, x, T);
    }
    function Nx(t) {
        for (var e = t; ;) {
            var i = e.tag;
            if (
                (i === 0 || i === 11 || i === 15) &&
                e.flags & 16384 &&
                ((i = e.updateQueue),
                    i !== null && ((i = i.stores), i !== null))
            )
                for (var l = 0; l < i.length; l++) {
                    var o = i[l],
                        c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ve(c(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((i = e.child), e.subtreeFlags & 16384 && i !== null))
                ((i.return = e), (e = i));
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
            }
        }
        return !0;
    }
    function Xn(t, e, i, l) {
        ((e &= ~Ru),
            (e &= ~vi),
            (t.suspendedLanes |= e),
            (t.pingedLanes &= ~e),
            l && (t.warmLanes |= e),
            (l = t.expirationTimes));
        for (var o = e; 0 < o;) {
            var c = 31 - ge(o),
                g = 1 << c;
            ((l[c] = -1), (o &= ~g));
        }
        i !== 0 && md(t, i, e);
    }
    function Ps() {
        return (vt & 6) === 0 ? (hl(0), !1) : !0;
    }
    function Lu() {
        if (ft !== null) {
            if (xt === 0) var t = ft.return;
            else
                ((t = ft),
                    (fn = di = null),
                    tu(t),
                    (ta = null),
                    (il = 0),
                    (t = ft));
            for (; t !== null;) (Bm(t.alternate, t), (t = t.return));
            ft = null;
        }
    }
    function oa(t, e) {
        var i = t.timeoutHandle;
        (i !== -1 && ((t.timeoutHandle = -1), Zx(i)),
            (i = t.cancelPendingCommit),
            i !== null && ((t.cancelPendingCommit = null), i()),
            Lu(),
            (At = t),
            (ft = i = on(t.current, null)),
            (mt = e),
            (xt = 0),
            (Te = null),
            (Hn = !1),
            (aa = Da(t, e)),
            (Nu = !1),
            (la = _e = Ru = vi = qn = Ot = 0),
            (de = fl = null),
            (Ou = !1),
            (e & 8) !== 0 && (e |= e & 32));
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements, l &= e; 0 < l;) {
                var o = 31 - ge(l),
                    c = 1 << o;
                ((e |= t[o]), (l &= ~c));
            }
        return ((xn = e), ms(), i);
    }
    function ap(t, e) {
        ((ut = null),
            (L.H = zs),
            e === Za || e === ws
                ? ((e = Sh()), (xt = 3))
                : e === vh
                    ? ((e = Sh()), (xt = 4))
                    : (xt =
                        e === Tm
                            ? 8
                            : e !== null &&
                                typeof e == "object" &&
                                typeof e.then == "function"
                                ? 6
                                : 1),
            (Te = e),
            ft === null && ((Ot = 1), Us(t, De(e, t.current))));
    }
    function lp() {
        var t = L.H;
        return ((L.H = zs), t === null ? zs : t);
    }
    function sp() {
        var t = L.A;
        return ((L.A = Mx), t);
    }
    function Uu() {
        ((Ot = 4),
            Hn || ((mt & 4194048) !== mt && ze.current !== null) || (aa = !0),
            ((qn & 134217727) === 0 && (vi & 134217727) === 0) ||
            At === null ||
            Xn(At, mt, _e, !1));
    }
    function ku(t, e, i) {
        var l = vt;
        vt |= 2;
        var o = lp(),
            c = sp();
        ((At !== t || mt !== e) && ((Ks = null), oa(t, e)), (e = !1));
        var g = Ot;
        t: do
            try {
                if (xt !== 0 && ft !== null) {
                    var x = ft,
                        T = Te;
                    switch (xt) {
                        case 8:
                            (Lu(), (g = 6));
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            ze.current === null && (e = !0);
                            var D = xt;
                            if (
                                ((xt = 0), (Te = null), ua(t, x, T, D), i && aa)
                            ) {
                                g = 0;
                                break t;
                            }
                            break;
                        default:
                            ((D = xt), (xt = 0), (Te = null), ua(t, x, T, D));
                    }
                }
                (Rx(), (g = Ot));
                break;
            } catch (B) {
                ap(t, B);
            }
        while (!0);
        return (
            e && t.shellSuspendCounter++,
            (fn = di = null),
            (vt = l),
            (L.H = o),
            (L.A = c),
            ft === null && ((At = null), (mt = 0), ms()),
            g
        );
    }
    function Rx() {
        for (; ft !== null;) rp(ft);
    }
    function Ox(t, e) {
        var i = vt;
        vt |= 2;
        var l = lp(),
            o = sp();
        At !== t || mt !== e
            ? ((Ks = null), (Xs = Ze() + 500), oa(t, e))
            : (aa = Da(t, e));
        t: do
            try {
                if (xt !== 0 && ft !== null) {
                    e = ft;
                    var c = Te;
                    e: switch (xt) {
                        case 1:
                            ((xt = 0), (Te = null), ua(t, e, c, 1));
                            break;
                        case 2:
                        case 9:
                            if (xh(c)) {
                                ((xt = 0), (Te = null), op(e));
                                break;
                            }
                            ((e = function () {
                                ((xt !== 2 && xt !== 9) || At !== t || (xt = 7),
                                    Ie(t));
                            }),
                                c.then(e, e));
                            break t;
                        case 3:
                            xt = 7;
                            break t;
                        case 4:
                            xt = 5;
                            break t;
                        case 7:
                            xh(c)
                                ? ((xt = 0), (Te = null), op(e))
                                : ((xt = 0), (Te = null), ua(t, e, c, 7));
                            break;
                        case 5:
                            var g = null;
                            switch (ft.tag) {
                                case 26:
                                    g = ft.memoizedState;
                                case 5:
                                case 27:
                                    var x = ft;
                                    if (!g || Gp(g)) {
                                        ((xt = 0), (Te = null));
                                        var T = x.sibling;
                                        if (T !== null) ft = T;
                                        else {
                                            var D = x.return;
                                            D !== null
                                                ? ((ft = D), Qs(D))
                                                : (ft = null);
                                        }
                                        break e;
                                    }
                            }
                            ((xt = 0), (Te = null), ua(t, e, c, 5));
                            break;
                        case 6:
                            ((xt = 0), (Te = null), ua(t, e, c, 6));
                            break;
                        case 8:
                            (Lu(), (Ot = 6));
                            break t;
                        default:
                            throw Error(r(462));
                    }
                }
                zx();
                break;
            } catch (B) {
                ap(t, B);
            }
        while (!0);
        return (
            (fn = di = null),
            (L.H = l),
            (L.A = o),
            (vt = i),
            ft !== null ? 0 : ((At = null), (mt = 0), ms(), Ot)
        );
    }
    function zx() {
        for (; ft !== null && !ev();) rp(ft);
    }
    function rp(t) {
        var e = _m(t.alternate, t, xn);
        ((t.memoizedProps = t.pendingProps), e === null ? Qs(t) : (ft = e));
    }
    function op(t) {
        var e = t,
            i = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Mm(i, e, e.pendingProps, e.type, void 0, mt);
                break;
            case 11:
                e = Mm(i, e, e.pendingProps, e.type.render, e.ref, mt);
                break;
            case 5:
                tu(e);
            default:
                (Bm(i, e), (e = ft = uh(e, xn)), (e = _m(i, e, xn)));
        }
        ((t.memoizedProps = t.pendingProps), e === null ? Qs(t) : (ft = e));
    }
    function ua(t, e, i, l) {
        ((fn = di = null), tu(e), (ta = null), (il = 0));
        var o = e.return;
        try {
            if (Tx(t, o, e, i, mt)) {
                ((Ot = 1), Us(t, De(i, t.current)), (ft = null));
                return;
            }
        } catch (c) {
            if (o !== null) throw ((ft = o), c);
            ((Ot = 1), Us(t, De(i, t.current)), (ft = null));
            return;
        }
        e.flags & 32768
            ? (gt || l === 1
                ? (t = !0)
                : aa || (mt & 536870912) !== 0
                    ? (t = !1)
                    : ((Hn = t = !0),
                        (l === 2 || l === 9 || l === 3 || l === 6) &&
                        ((l = ze.current),
                            l !== null && l.tag === 13 && (l.flags |= 16384))),
                up(e, t))
            : Qs(e);
    }
    function Qs(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                up(e, Hn);
                return;
            }
            t = e.return;
            var i = Cx(e.alternate, e, xn);
            if (i !== null) {
                ft = i;
                return;
            }
            if (((e = e.sibling), e !== null)) {
                ft = e;
                return;
            }
            ft = e = t;
        } while (e !== null);
        Ot === 0 && (Ot = 5);
    }
    function up(t, e) {
        do {
            var i = Ax(t.alternate, t);
            if (i !== null) {
                ((i.flags &= 32767), (ft = i));
                return;
            }
            if (
                ((i = t.return),
                    i !== null &&
                    ((i.flags |= 32768),
                        (i.subtreeFlags = 0),
                        (i.deletions = null)),
                    !e && ((t = t.sibling), t !== null))
            ) {
                ft = t;
                return;
            }
            ft = t = i;
        } while (t !== null);
        ((Ot = 6), (ft = null));
    }
    function cp(t, e, i, l, o, c, g, x, T) {
        t.cancelPendingCommit = null;
        do Zs();
        while (It !== 0);
        if ((vt & 6) !== 0) throw Error(r(327));
        if (e !== null) {
            if (e === t.current) throw Error(r(177));
            if (
                ((c = e.lanes | e.childLanes),
                    (c |= Do),
                    fv(t, i, c, g, x, T),
                    t === At && ((ft = At = null), (mt = 0)),
                    (sa = e),
                    (Gn = t),
                    (ra = i),
                    (_u = c),
                    (Vu = o),
                    (tp = l),
                    (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                        ? ((t.callbackNode = null),
                            (t.callbackPriority = 0),
                            Lx(Il, function () {
                                return (pp(), null);
                            }))
                        : ((t.callbackNode = null), (t.callbackPriority = 0)),
                    (l = (e.flags & 13878) !== 0),
                    (e.subtreeFlags & 13878) !== 0 || l)
            ) {
                ((l = L.T),
                    (L.T = null),
                    (o = X.p),
                    (X.p = 2),
                    (g = vt),
                    (vt |= 4));
                try {
                    jx(t, e, i);
                } finally {
                    ((vt = g), (X.p = o), (L.T = l));
                }
            }
            ((It = 1), fp(), dp(), hp());
        }
    }
    function fp() {
        if (It === 1) {
            It = 0;
            var t = Gn,
                e = sa,
                i = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || i) {
                ((i = L.T), (L.T = null));
                var l = X.p;
                X.p = 2;
                var o = vt;
                vt |= 4;
                try {
                    Qm(e, t);
                    var c = Ju,
                        g = Id(t.containerInfo),
                        x = c.focusedElem,
                        T = c.selectionRange;
                    if (
                        g !== x &&
                        x &&
                        x.ownerDocument &&
                        Wd(x.ownerDocument.documentElement, x)
                    ) {
                        if (T !== null && Co(x)) {
                            var D = T.start,
                                B = T.end;
                            if (
                                (B === void 0 && (B = D), "selectionStart" in x)
                            )
                                ((x.selectionStart = D),
                                    (x.selectionEnd = Math.min(
                                        B,
                                        x.value.length,
                                    )));
                            else {
                                var q = x.ownerDocument || document,
                                    N = (q && q.defaultView) || window;
                                if (N.getSelection) {
                                    var R = N.getSelection(),
                                        at = x.textContent.length,
                                        nt = Math.min(T.start, at),
                                        wt =
                                            T.end === void 0
                                                ? nt
                                                : Math.min(T.end, at);
                                    !R.extend &&
                                        nt > wt &&
                                        ((g = wt), (wt = nt), (nt = g));
                                    var A = Jd(x, nt),
                                        C = Jd(x, wt);
                                    if (
                                        A &&
                                        C &&
                                        (R.rangeCount !== 1 ||
                                            R.anchorNode !== A.node ||
                                            R.anchorOffset !== A.offset ||
                                            R.focusNode !== C.node ||
                                            R.focusOffset !== C.offset)
                                    ) {
                                        var E = q.createRange();
                                        (E.setStart(A.node, A.offset),
                                            R.removeAllRanges(),
                                            nt > wt
                                                ? (R.addRange(E),
                                                    R.extend(C.node, C.offset))
                                                : (E.setEnd(C.node, C.offset),
                                                    R.addRange(E)));
                                    }
                                }
                            }
                        }
                        for (q = [], R = x; (R = R.parentNode);)
                            R.nodeType === 1 &&
                                q.push({
                                    element: R,
                                    left: R.scrollLeft,
                                    top: R.scrollTop,
                                });
                        for (
                            typeof x.focus == "function" && x.focus(), x = 0;
                            x < q.length;
                            x++
                        ) {
                            var k = q[x];
                            ((k.element.scrollLeft = k.left),
                                (k.element.scrollTop = k.top));
                        }
                    }
                    ((sr = !!$u), (Ju = $u = null));
                } finally {
                    ((vt = o), (X.p = l), (L.T = i));
                }
            }
            ((t.current = e), (It = 2));
        }
    }
    function dp() {
        if (It === 2) {
            It = 0;
            var t = Gn,
                e = sa,
                i = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || i) {
                ((i = L.T), (L.T = null));
                var l = X.p;
                X.p = 2;
                var o = vt;
                vt |= 4;
                try {
                    Gm(t, e.alternate, e);
                } finally {
                    ((vt = o), (X.p = l), (L.T = i));
                }
            }
            It = 3;
        }
    }
    function hp() {
        if (It === 4 || It === 3) {
            ((It = 0), nv());
            var t = Gn,
                e = sa,
                i = ra,
                l = tp;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                ? (It = 5)
                : ((It = 0), (sa = Gn = null), mp(t, t.pendingLanes));
            var o = t.pendingLanes;
            if (
                (o === 0 && (Yn = null),
                    no(i),
                    (e = e.stateNode),
                    ye && typeof ye.onCommitFiberRoot == "function")
            )
                try {
                    ye.onCommitFiberRoot(
                        Ma,
                        e,
                        void 0,
                        (e.current.flags & 128) === 128,
                    );
                } catch { }
            if (l !== null) {
                ((e = L.T), (o = X.p), (X.p = 2), (L.T = null));
                try {
                    for (
                        var c = t.onRecoverableError, g = 0;
                        g < l.length;
                        g++
                    ) {
                        var x = l[g];
                        c(x.value, { componentStack: x.stack });
                    }
                } finally {
                    ((L.T = e), (X.p = o));
                }
            }
            ((ra & 3) !== 0 && Zs(),
                Ie(t),
                (o = t.pendingLanes),
                (i & 4194090) !== 0 && (o & 42) !== 0
                    ? t === Bu
                        ? dl++
                        : ((dl = 0), (Bu = t))
                    : (dl = 0),
                hl(0));
        }
    }
    function mp(t, e) {
        (t.pooledCacheLanes &= e) === 0 &&
            ((e = t.pooledCache), e != null && ((t.pooledCache = null), Pa(e)));
    }
    function Zs(t) {
        return (fp(), dp(), hp(), pp());
    }
    function pp() {
        if (It !== 5) return !1;
        var t = Gn,
            e = _u;
        _u = 0;
        var i = no(ra),
            l = L.T,
            o = X.p;
        try {
            ((X.p = 32 > i ? 32 : i), (L.T = null), (i = Vu), (Vu = null));
            var c = Gn,
                g = ra;
            if (((It = 0), (sa = Gn = null), (ra = 0), (vt & 6) !== 0))
                throw Error(r(331));
            var x = vt;
            if (
                ((vt |= 4),
                    Wm(c.current),
                    Fm(c, c.current, g, i),
                    (vt = x),
                    hl(0, !1),
                    ye && typeof ye.onPostCommitFiberRoot == "function")
            )
                try {
                    ye.onPostCommitFiberRoot(Ma, c);
                } catch { }
            return !0;
        } finally {
            ((X.p = o), (L.T = l), mp(t, e));
        }
    }
    function yp(t, e, i) {
        ((e = De(i, e)),
            (e = mu(t.stateNode, e, 2)),
            (t = zn(t, e, 2)),
            t !== null && (Na(t, 2), Ie(t)));
    }
    function Ct(t, e, i) {
        if (t.tag === 3) yp(t, t, i);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    yp(e, t, i);
                    break;
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (
                        typeof e.type.getDerivedStateFromError == "function" ||
                        (typeof l.componentDidCatch == "function" &&
                            (Yn === null || !Yn.has(l)))
                    ) {
                        ((t = De(i, t)),
                            (i = bm(2)),
                            (l = zn(e, i, 2)),
                            l !== null && (Sm(i, l, e, t), Na(l, 2), Ie(l)));
                        break;
                    }
                }
                e = e.return;
            }
    }
    function Hu(t, e, i) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Dx();
            var o = new Set();
            l.set(e, o);
        } else ((o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o)));
        o.has(i) ||
            ((Nu = !0), o.add(i), (t = _x.bind(null, t, e, i)), e.then(t, t));
    }
    function _x(t, e, i) {
        var l = t.pingCache;
        (l !== null && l.delete(e),
            (t.pingedLanes |= t.suspendedLanes & i),
            (t.warmLanes &= ~i),
            At === t &&
            (mt & i) === i &&
            (Ot === 4 ||
                (Ot === 3 && (mt & 62914560) === mt && 300 > Ze() - zu)
                ? (vt & 2) === 0 && oa(t, 0)
                : (Ru |= i),
                la === mt && (la = 0)),
            Ie(t));
    }
    function gp(t, e) {
        (e === 0 && (e = hd()),
            (t = Xi(t, e)),
            t !== null && (Na(t, e), Ie(t)));
    }
    function Vx(t) {
        var e = t.memoizedState,
            i = 0;
        (e !== null && (i = e.retryLane), gp(t, i));
    }
    function Bx(t, e) {
        var i = 0;
        switch (t.tag) {
            case 13:
                var l = t.stateNode,
                    o = t.memoizedState;
                o !== null && (i = o.retryLane);
                break;
            case 19:
                l = t.stateNode;
                break;
            case 22:
                l = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314));
        }
        (l !== null && l.delete(e), gp(t, i));
    }
    function Lx(t, e) {
        return Wr(t, e);
    }
    var Fs = null,
        ca = null,
        qu = !1,
        $s = !1,
        Yu = !1,
        xi = 0;
    function Ie(t) {
        (t !== ca &&
            t.next === null &&
            (ca === null ? (Fs = ca = t) : (ca = ca.next = t)),
            ($s = !0),
            qu || ((qu = !0), kx()));
    }
    function hl(t, e) {
        if (!Yu && $s) {
            Yu = !0;
            do
                for (var i = !1, l = Fs; l !== null;) {
                    if (t !== 0) {
                        var o = l.pendingLanes;
                        if (o === 0) var c = 0;
                        else {
                            var g = l.suspendedLanes,
                                x = l.pingedLanes;
                            ((c = (1 << (31 - ge(42 | t) + 1)) - 1),
                                (c &= o & ~(g & ~x)),
                                (c =
                                    c & 201326741
                                        ? (c & 201326741) | 1
                                        : c
                                            ? c | 2
                                            : 0));
                        }
                        c !== 0 && ((i = !0), Sp(l, c));
                    } else
                        ((c = mt),
                            (c = ns(
                                l,
                                l === At ? c : 0,
                                l.cancelPendingCommit !== null ||
                                l.timeoutHandle !== -1,
                            )),
                            (c & 3) === 0 || Da(l, c) || ((i = !0), Sp(l, c)));
                    l = l.next;
                }
            while (i);
            Yu = !1;
        }
    }
    function Ux() {
        vp();
    }
    function vp() {
        $s = qu = !1;
        var t = 0;
        xi !== 0 && (Qx() && (t = xi), (xi = 0));
        for (var e = Ze(), i = null, l = Fs; l !== null;) {
            var o = l.next,
                c = xp(l, e);
            (c === 0
                ? ((l.next = null),
                    i === null ? (Fs = o) : (i.next = o),
                    o === null && (ca = i))
                : ((i = l), (t !== 0 || (c & 3) !== 0) && ($s = !0)),
                (l = o));
        }
        hl(t);
    }
    function xp(t, e) {
        for (
            var i = t.suspendedLanes,
            l = t.pingedLanes,
            o = t.expirationTimes,
            c = t.pendingLanes & -62914561;
            0 < c;
        ) {
            var g = 31 - ge(c),
                x = 1 << g,
                T = o[g];
            (T === -1
                ? ((x & i) === 0 || (x & l) !== 0) && (o[g] = cv(x, e))
                : T <= e && (t.expiredLanes |= x),
                (c &= ~x));
        }
        if (
            ((e = At),
                (i = mt),
                (i = ns(
                    t,
                    t === e ? i : 0,
                    t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
                )),
                (l = t.callbackNode),
                i === 0 ||
                (t === e && (xt === 2 || xt === 9)) ||
                t.cancelPendingCommit !== null)
        )
            return (
                l !== null && l !== null && Ir(l),
                (t.callbackNode = null),
                (t.callbackPriority = 0)
            );
        if ((i & 3) === 0 || Da(t, i)) {
            if (((e = i & -i), e === t.callbackPriority)) return e;
            switch ((l !== null && Ir(l), no(i))) {
                case 2:
                case 8:
                    i = cd;
                    break;
                case 32:
                    i = Il;
                    break;
                case 268435456:
                    i = fd;
                    break;
                default:
                    i = Il;
            }
            return (
                (l = bp.bind(null, t)),
                (i = Wr(i, l)),
                (t.callbackPriority = e),
                (t.callbackNode = i),
                e
            );
        }
        return (
            l !== null && l !== null && Ir(l),
            (t.callbackPriority = 2),
            (t.callbackNode = null),
            2
        );
    }
    function bp(t, e) {
        if (It !== 0 && It !== 5)
            return ((t.callbackNode = null), (t.callbackPriority = 0), null);
        var i = t.callbackNode;
        if (Zs() && t.callbackNode !== i) return null;
        var l = mt;
        return (
            (l = ns(
                t,
                t === At ? l : 0,
                t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
            )),
            l === 0
                ? null
                : (np(t, l, e),
                    xp(t, Ze()),
                    t.callbackNode != null && t.callbackNode === i
                        ? bp.bind(null, t)
                        : null)
        );
    }
    function Sp(t, e) {
        if (Zs()) return null;
        np(t, e, !0);
    }
    function kx() {
        Fx(function () {
            (vt & 6) !== 0 ? Wr(ud, Ux) : vp();
        });
    }
    function Gu() {
        return (xi === 0 && (xi = dd()), xi);
    }
    function Tp(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean"
            ? null
            : typeof t == "function"
                ? t
                : rs("" + t);
    }
    function wp(t, e) {
        var i = e.ownerDocument.createElement("input");
        return (
            (i.name = e.name),
            (i.value = e.value),
            t.id && i.setAttribute("form", t.id),
            e.parentNode.insertBefore(i, e),
            (t = new FormData(t)),
            i.parentNode.removeChild(i),
            t
        );
    }
    function Hx(t, e, i, l, o) {
        if (e === "submit" && i && i.stateNode === o) {
            var c = Tp((o[oe] || null).action),
                g = l.submitter;
            g &&
                ((e = (e = g[oe] || null)
                    ? Tp(e.formAction)
                    : g.getAttribute("formAction")),
                    e !== null && ((c = e), (g = null)));
            var x = new fs("action", "action", null, l, o);
            t.push({
                event: x,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (l.defaultPrevented) {
                                if (xi !== 0) {
                                    var T = g ? wp(o, g) : new FormData(o);
                                    uu(
                                        i,
                                        {
                                            pending: !0,
                                            data: T,
                                            method: o.method,
                                            action: c,
                                        },
                                        null,
                                        T,
                                    );
                                }
                            } else
                                typeof c == "function" &&
                                    (x.preventDefault(),
                                        (T = g ? wp(o, g) : new FormData(o)),
                                        uu(
                                            i,
                                            {
                                                pending: !0,
                                                data: T,
                                                method: o.method,
                                                action: c,
                                            },
                                            c,
                                            T,
                                        ));
                        },
                        currentTarget: o,
                    },
                ],
            });
        }
    }
    for (var Xu = 0; Xu < Mo.length; Xu++) {
        var Ku = Mo[Xu],
            qx = Ku.toLowerCase(),
            Yx = Ku[0].toUpperCase() + Ku.slice(1);
        He(qx, "on" + Yx);
    }
    (He(nh, "onAnimationEnd"),
        He(ih, "onAnimationIteration"),
        He(ah, "onAnimationStart"),
        He("dblclick", "onDoubleClick"),
        He("focusin", "onFocus"),
        He("focusout", "onBlur"),
        He(lx, "onTransitionRun"),
        He(sx, "onTransitionStart"),
        He(rx, "onTransitionCancel"),
        He(lh, "onTransitionEnd"),
        _i("onMouseEnter", ["mouseout", "mouseover"]),
        _i("onMouseLeave", ["mouseout", "mouseover"]),
        _i("onPointerEnter", ["pointerout", "pointerover"]),
        _i("onPointerLeave", ["pointerout", "pointerover"]),
        ii(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
            ),
        ),
        ii(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
            ),
        ),
        ii("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        ii(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        ii(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        ii(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ));
    var ml =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
        Gx = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
                .split(" ")
                .concat(ml),
        );
    function Cp(t, e) {
        e = (e & 4) !== 0;
        for (var i = 0; i < t.length; i++) {
            var l = t[i],
                o = l.event;
            l = l.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var x = l[g],
                            T = x.instance,
                            D = x.currentTarget;
                        if (
                            ((x = x.listener),
                                T !== c && o.isPropagationStopped())
                        )
                            break t;
                        ((c = x), (o.currentTarget = D));
                        try {
                            c(o);
                        } catch (B) {
                            Ls(B);
                        }
                        ((o.currentTarget = null), (c = T));
                    }
                else
                    for (g = 0; g < l.length; g++) {
                        if (
                            ((x = l[g]),
                                (T = x.instance),
                                (D = x.currentTarget),
                                (x = x.listener),
                                T !== c && o.isPropagationStopped())
                        )
                            break t;
                        ((c = x), (o.currentTarget = D));
                        try {
                            c(o);
                        } catch (B) {
                            Ls(B);
                        }
                        ((o.currentTarget = null), (c = T));
                    }
            }
        }
    }
    function dt(t, e) {
        var i = e[io];
        i === void 0 && (i = e[io] = new Set());
        var l = t + "__bubble";
        i.has(l) || (Ap(e, t, 2, !1), i.add(l));
    }
    function Pu(t, e, i) {
        var l = 0;
        (e && (l |= 4), Ap(i, t, l, e));
    }
    var Js = "_reactListening" + Math.random().toString(36).slice(2);
    function Qu(t) {
        if (!t[Js]) {
            ((t[Js] = !0),
                vd.forEach(function (i) {
                    i !== "selectionchange" &&
                        (Gx.has(i) || Pu(i, !1, t), Pu(i, !0, t));
                }));
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Js] || ((e[Js] = !0), Pu("selectionchange", !1, e));
        }
    }
    function Ap(t, e, i, l) {
        switch (Fp(e)) {
            case 2:
                var o = yb;
                break;
            case 8:
                o = gb;
                break;
            default:
                o = rc;
        }
        ((i = o.bind(null, e, i, t)),
            (o = void 0),
            !po ||
            (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
            (o = !0),
            l
                ? o !== void 0
                    ? t.addEventListener(e, i, { capture: !0, passive: o })
                    : t.addEventListener(e, i, !0)
                : o !== void 0
                    ? t.addEventListener(e, i, { passive: o })
                    : t.addEventListener(e, i, !1));
    }
    function Zu(t, e, i, l, o) {
        var c = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ;) {
                if (l === null) return;
                var g = l.tag;
                if (g === 3 || g === 4) {
                    var x = l.stateNode.containerInfo;
                    if (x === o) break;
                    if (g === 4)
                        for (g = l.return; g !== null;) {
                            var T = g.tag;
                            if (
                                (T === 3 || T === 4) &&
                                g.stateNode.containerInfo === o
                            )
                                return;
                            g = g.return;
                        }
                    for (; x !== null;) {
                        if (((g = Ri(x)), g === null)) return;
                        if (
                            ((T = g.tag),
                                T === 5 || T === 6 || T === 26 || T === 27)
                        ) {
                            l = c = g;
                            continue t;
                        }
                        x = x.parentNode;
                    }
                }
                l = l.return;
            }
        Od(function () {
            var D = c,
                B = ho(i),
                q = [];
            t: {
                var N = sh.get(t);
                if (N !== void 0) {
                    var R = fs,
                        at = t;
                    switch (t) {
                        case "keypress":
                            if (us(i) === 0) break t;
                        case "keydown":
                        case "keyup":
                            R = Lv;
                            break;
                        case "focusin":
                            ((at = "focus"), (R = xo));
                            break;
                        case "focusout":
                            ((at = "blur"), (R = xo));
                            break;
                        case "beforeblur":
                        case "afterblur":
                            R = xo;
                            break;
                        case "click":
                            if (i.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            R = Vd;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            R = Av;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            R = Hv;
                            break;
                        case nh:
                        case ih:
                        case ah:
                            R = Mv;
                            break;
                        case lh:
                            R = Yv;
                            break;
                        case "scroll":
                        case "scrollend":
                            R = wv;
                            break;
                        case "wheel":
                            R = Xv;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            R = Nv;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            R = Ld;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            R = Pv;
                    }
                    var nt = (e & 4) !== 0,
                        wt = !nt && (t === "scroll" || t === "scrollend"),
                        A = nt ? (N !== null ? N + "Capture" : null) : N;
                    nt = [];
                    for (var C = D, E; C !== null;) {
                        var k = C;
                        if (
                            ((E = k.stateNode),
                                (k = k.tag),
                                (k !== 5 && k !== 26 && k !== 27) ||
                                E === null ||
                                A === null ||
                                ((k = za(C, A)),
                                    k != null && nt.push(pl(C, k, E))),
                                wt)
                        )
                            break;
                        C = C.return;
                    }
                    0 < nt.length &&
                        ((N = new R(N, at, null, i, B)),
                            q.push({ event: N, listeners: nt }));
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (
                        ((N = t === "mouseover" || t === "pointerover"),
                            (R = t === "mouseout" || t === "pointerout"),
                            N &&
                            i !== fo &&
                            (at = i.relatedTarget || i.fromElement) &&
                            (Ri(at) || at[Ni]))
                    )
                        break t;
                    if (
                        (R || N) &&
                        ((N =
                            B.window === B
                                ? B
                                : (N = B.ownerDocument)
                                    ? N.defaultView || N.parentWindow
                                    : window),
                            R
                                ? ((at = i.relatedTarget || i.toElement),
                                    (R = D),
                                    (at = at ? Ri(at) : null),
                                    at !== null &&
                                    ((wt = f(at)),
                                        (nt = at.tag),
                                        at !== wt ||
                                        (nt !== 5 && nt !== 27 && nt !== 6)) &&
                                    (at = null))
                                : ((R = null), (at = D)),
                            R !== at)
                    ) {
                        if (
                            ((nt = Vd),
                                (k = "onMouseLeave"),
                                (A = "onMouseEnter"),
                                (C = "mouse"),
                                (t === "pointerout" || t === "pointerover") &&
                                ((nt = Ld),
                                    (k = "onPointerLeave"),
                                    (A = "onPointerEnter"),
                                    (C = "pointer")),
                                (wt = R == null ? N : Oa(R)),
                                (E = at == null ? N : Oa(at)),
                                (N = new nt(k, C + "leave", R, i, B)),
                                (N.target = wt),
                                (N.relatedTarget = E),
                                (k = null),
                                Ri(B) === D &&
                                ((nt = new nt(A, C + "enter", at, i, B)),
                                    (nt.target = E),
                                    (nt.relatedTarget = wt),
                                    (k = nt)),
                                (wt = k),
                                R && at)
                        )
                            e: {
                                for (
                                    nt = R, A = at, C = 0, E = nt;
                                    E;
                                    E = fa(E)
                                )
                                    C++;
                                for (E = 0, k = A; k; k = fa(k)) E++;
                                for (; 0 < C - E;) ((nt = fa(nt)), C--);
                                for (; 0 < E - C;) ((A = fa(A)), E--);
                                for (; C--;) {
                                    if (
                                        nt === A ||
                                        (A !== null && nt === A.alternate)
                                    )
                                        break e;
                                    ((nt = fa(nt)), (A = fa(A)));
                                }
                                nt = null;
                            }
                        else nt = null;
                        (R !== null && jp(q, N, R, nt, !1),
                            at !== null &&
                            wt !== null &&
                            jp(q, wt, at, nt, !0));
                    }
                }
                t: {
                    if (
                        ((N = D ? Oa(D) : window),
                            (R = N.nodeName && N.nodeName.toLowerCase()),
                            R === "select" || (R === "input" && N.type === "file"))
                    )
                        var W = Kd;
                    else if (Gd(N))
                        if (Pd) W = nx;
                        else {
                            W = tx;
                            var ct = Iv;
                        }
                    else
                        ((R = N.nodeName),
                            !R ||
                                R.toLowerCase() !== "input" ||
                                (N.type !== "checkbox" && N.type !== "radio")
                                ? D && co(D.elementType) && (W = Kd)
                                : (W = ex));
                    if (W && (W = W(t, D))) {
                        Xd(q, W, i, B);
                        break t;
                    }
                    (ct && ct(t, N, D),
                        t === "focusout" &&
                        D &&
                        N.type === "number" &&
                        D.memoizedProps.value != null &&
                        uo(N, "number", N.value));
                }
                switch (((ct = D ? Oa(D) : window), t)) {
                    case "focusin":
                        (Gd(ct) || ct.contentEditable === "true") &&
                            ((qi = ct), (Ao = D), (qa = null));
                        break;
                    case "focusout":
                        qa = Ao = qi = null;
                        break;
                    case "mousedown":
                        jo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ((jo = !1), th(q, i, B));
                        break;
                    case "selectionchange":
                        if (ax) break;
                    case "keydown":
                    case "keyup":
                        th(q, i, B);
                }
                var tt;
                if (So)
                    t: {
                        switch (t) {
                            case "compositionstart":
                                var it = "onCompositionStart";
                                break t;
                            case "compositionend":
                                it = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                it = "onCompositionUpdate";
                                break t;
                        }
                        it = void 0;
                    }
                else
                    Hi
                        ? qd(t, i) && (it = "onCompositionEnd")
                        : t === "keydown" &&
                        i.keyCode === 229 &&
                        (it = "onCompositionStart");
                (it &&
                    (Ud &&
                        i.locale !== "ko" &&
                        (Hi || it !== "onCompositionStart"
                            ? it === "onCompositionEnd" && Hi && (tt = zd())
                            : ((Dn = B),
                                (yo = "value" in Dn ? Dn.value : Dn.textContent),
                                (Hi = !0))),
                        (ct = Ws(D, it)),
                        0 < ct.length &&
                        ((it = new Bd(it, t, null, i, B)),
                            q.push({ event: it, listeners: ct }),
                            tt
                                ? (it.data = tt)
                                : ((tt = Yd(i)), tt !== null && (it.data = tt)))),
                    (tt = Zv ? Fv(t, i) : $v(t, i)) &&
                    ((it = Ws(D, "onBeforeInput")),
                        0 < it.length &&
                        ((ct = new Bd(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            i,
                            B,
                        )),
                            q.push({ event: ct, listeners: it }),
                            (ct.data = tt))),
                    Hx(q, t, D, i, B));
            }
            Cp(q, e);
        });
    }
    function pl(t, e, i) {
        return { instance: t, listener: e, currentTarget: i };
    }
    function Ws(t, e) {
        for (var i = e + "Capture", l = []; t !== null;) {
            var o = t,
                c = o.stateNode;
            if (
                ((o = o.tag),
                    (o !== 5 && o !== 26 && o !== 27) ||
                    c === null ||
                    ((o = za(t, i)),
                        o != null && l.unshift(pl(t, o, c)),
                        (o = za(t, e)),
                        o != null && l.push(pl(t, o, c))),
                    t.tag === 3)
            )
                return l;
            t = t.return;
        }
        return [];
    }
    function fa(t) {
        if (t === null) return null;
        do t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null;
    }
    function jp(t, e, i, l, o) {
        for (var c = e._reactName, g = []; i !== null && i !== l;) {
            var x = i,
                T = x.alternate,
                D = x.stateNode;
            if (((x = x.tag), T !== null && T === l)) break;
            ((x !== 5 && x !== 26 && x !== 27) ||
                D === null ||
                ((T = D),
                    o
                        ? ((D = za(i, c)), D != null && g.unshift(pl(i, D, T)))
                        : o || ((D = za(i, c)), D != null && g.push(pl(i, D, T)))),
                (i = i.return));
        }
        g.length !== 0 && t.push({ event: e, listeners: g });
    }
    var Xx = /\r\n?/g,
        Kx = /\u0000|\uFFFD/g;
    function Ep(t) {
        return (typeof t == "string" ? t : "" + t)
            .replace(
                Xx,
                `
`,
            )
            .replace(Kx, "");
    }
    function Mp(t, e) {
        return ((e = Ep(e)), Ep(t) === e);
    }
    function Is() { }
    function Tt(t, e, i, l, o, c) {
        switch (i) {
            case "children":
                typeof l == "string"
                    ? e === "body" || (e === "textarea" && l === "") || Li(t, l)
                    : (typeof l == "number" || typeof l == "bigint") &&
                    e !== "body" &&
                    Li(t, "" + l);
                break;
            case "className":
                as(t, "class", l);
                break;
            case "tabIndex":
                as(t, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                as(t, i, l);
                break;
            case "style":
                Nd(t, l, c);
                break;
            case "data":
                if (e !== "object") {
                    as(t, "data", l);
                    break;
                }
            case "src":
            case "href":
                if (l === "" && (e !== "a" || i !== "href")) {
                    t.removeAttribute(i);
                    break;
                }
                if (
                    l == null ||
                    typeof l == "function" ||
                    typeof l == "symbol" ||
                    typeof l == "boolean"
                ) {
                    t.removeAttribute(i);
                    break;
                }
                ((l = rs("" + l)), t.setAttribute(i, l));
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    t.setAttribute(
                        i,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    );
                    break;
                } else
                    typeof c == "function" &&
                        (i === "formAction"
                            ? (e !== "input" &&
                                Tt(t, e, "name", o.name, o, null),
                                Tt(t, e, "formEncType", o.formEncType, o, null),
                                Tt(t, e, "formMethod", o.formMethod, o, null),
                                Tt(t, e, "formTarget", o.formTarget, o, null))
                            : (Tt(t, e, "encType", o.encType, o, null),
                                Tt(t, e, "method", o.method, o, null),
                                Tt(t, e, "target", o.target, o, null)));
                if (
                    l == null ||
                    typeof l == "symbol" ||
                    typeof l == "boolean"
                ) {
                    t.removeAttribute(i);
                    break;
                }
                ((l = rs("" + l)), t.setAttribute(i, l));
                break;
            case "onClick":
                l != null && (t.onclick = Is);
                break;
            case "onScroll":
                l != null && dt("scroll", t);
                break;
            case "onScrollEnd":
                l != null && dt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l))
                        throw Error(r(61));
                    if (((i = l.__html), i != null)) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = i;
                    }
                }
                break;
            case "multiple":
                t.multiple =
                    l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                t.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (
                    l == null ||
                    typeof l == "function" ||
                    typeof l == "boolean" ||
                    typeof l == "symbol"
                ) {
                    t.removeAttribute("xlink:href");
                    break;
                }
                ((i = rs("" + l)),
                    t.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "xlink:href",
                        i,
                    ));
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol"
                    ? t.setAttribute(i, "" + l)
                    : t.removeAttribute(i);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol"
                    ? t.setAttribute(i, "")
                    : t.removeAttribute(i);
                break;
            case "capture":
            case "download":
                l === !0
                    ? t.setAttribute(i, "")
                    : l !== !1 &&
                        l != null &&
                        typeof l != "function" &&
                        typeof l != "symbol"
                        ? t.setAttribute(i, l)
                        : t.removeAttribute(i);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null &&
                    typeof l != "function" &&
                    typeof l != "symbol" &&
                    !isNaN(l) &&
                    1 <= l
                    ? t.setAttribute(i, l)
                    : t.removeAttribute(i);
                break;
            case "rowSpan":
            case "start":
                l == null ||
                    typeof l == "function" ||
                    typeof l == "symbol" ||
                    isNaN(l)
                    ? t.removeAttribute(i)
                    : t.setAttribute(i, l);
                break;
            case "popover":
                (dt("beforetoggle", t), dt("toggle", t), is(t, "popover", l));
                break;
            case "xlinkActuate":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                sn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                sn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                sn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                sn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                is(t, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < i.length) ||
                    (i[0] !== "o" && i[0] !== "O") ||
                    (i[1] !== "n" && i[1] !== "N")) &&
                    ((i = Sv.get(i) || i), is(t, i, l));
        }
    }
    function Fu(t, e, i, l, o, c) {
        switch (i) {
            case "style":
                Nd(t, l, c);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l))
                        throw Error(r(61));
                    if (((i = l.__html), i != null)) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = i;
                    }
                }
                break;
            case "children":
                typeof l == "string"
                    ? Li(t, l)
                    : (typeof l == "number" || typeof l == "bigint") &&
                    Li(t, "" + l);
                break;
            case "onScroll":
                l != null && dt("scroll", t);
                break;
            case "onScrollEnd":
                l != null && dt("scrollend", t);
                break;
            case "onClick":
                l != null && (t.onclick = Is);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!xd.hasOwnProperty(i))
                    t: {
                        if (
                            i[0] === "o" &&
                            i[1] === "n" &&
                            ((o = i.endsWith("Capture")),
                                (e = i.slice(2, o ? i.length - 7 : void 0)),
                                (c = t[oe] || null),
                                (c = c != null ? c[i] : null),
                                typeof c == "function" &&
                                t.removeEventListener(e, c, o),
                                typeof l == "function")
                        ) {
                            (typeof c != "function" &&
                                c !== null &&
                                (i in t
                                    ? (t[i] = null)
                                    : t.hasAttribute(i) &&
                                    t.removeAttribute(i)),
                                t.addEventListener(e, l, o));
                            break t;
                        }
                        i in t
                            ? (t[i] = l)
                            : l === !0
                                ? t.setAttribute(i, "")
                                : is(t, i, l);
                    }
        }
    }
    function te(t, e, i) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                (dt("error", t), dt("load", t));
                var l = !1,
                    o = !1,
                    c;
                for (c in i)
                    if (i.hasOwnProperty(c)) {
                        var g = i[c];
                        if (g != null)
                            switch (c) {
                                case "src":
                                    l = !0;
                                    break;
                                case "srcSet":
                                    o = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(r(137, e));
                                default:
                                    Tt(t, e, c, g, i, null);
                            }
                    }
                (o && Tt(t, e, "srcSet", i.srcSet, i, null),
                    l && Tt(t, e, "src", i.src, i, null));
                return;
            case "input":
                dt("invalid", t);
                var x = (c = g = o = null),
                    T = null,
                    D = null;
                for (l in i)
                    if (i.hasOwnProperty(l)) {
                        var B = i[l];
                        if (B != null)
                            switch (l) {
                                case "name":
                                    o = B;
                                    break;
                                case "type":
                                    g = B;
                                    break;
                                case "checked":
                                    T = B;
                                    break;
                                case "defaultChecked":
                                    D = B;
                                    break;
                                case "value":
                                    c = B;
                                    break;
                                case "defaultValue":
                                    x = B;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (B != null) throw Error(r(137, e));
                                    break;
                                default:
                                    Tt(t, e, l, B, i, null);
                            }
                    }
                (jd(t, c, x, T, D, g, o, !1), ls(t));
                return;
            case "select":
                (dt("invalid", t), (l = g = c = null));
                for (o in i)
                    if (i.hasOwnProperty(o) && ((x = i[o]), x != null))
                        switch (o) {
                            case "value":
                                c = x;
                                break;
                            case "defaultValue":
                                g = x;
                                break;
                            case "multiple":
                                l = x;
                            default:
                                Tt(t, e, o, x, i, null);
                        }
                ((e = c),
                    (i = g),
                    (t.multiple = !!l),
                    e != null
                        ? Bi(t, !!l, e, !1)
                        : i != null && Bi(t, !!l, i, !0));
                return;
            case "textarea":
                (dt("invalid", t), (c = o = l = null));
                for (g in i)
                    if (i.hasOwnProperty(g) && ((x = i[g]), x != null))
                        switch (g) {
                            case "value":
                                l = x;
                                break;
                            case "defaultValue":
                                o = x;
                                break;
                            case "children":
                                c = x;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (x != null) throw Error(r(91));
                                break;
                            default:
                                Tt(t, e, g, x, i, null);
                        }
                (Md(t, l, o, c), ls(t));
                return;
            case "option":
                for (T in i)
                    if (i.hasOwnProperty(T) && ((l = i[T]), l != null))
                        switch (T) {
                            case "selected":
                                t.selected =
                                    l &&
                                    typeof l != "function" &&
                                    typeof l != "symbol";
                                break;
                            default:
                                Tt(t, e, T, l, i, null);
                        }
                return;
            case "dialog":
                (dt("beforetoggle", t),
                    dt("toggle", t),
                    dt("cancel", t),
                    dt("close", t));
                break;
            case "iframe":
            case "object":
                dt("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < ml.length; l++) dt(ml[l], t);
                break;
            case "image":
                (dt("error", t), dt("load", t));
                break;
            case "details":
                dt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                (dt("error", t), dt("load", t));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (D in i)
                    if (i.hasOwnProperty(D) && ((l = i[D]), l != null))
                        switch (D) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, e));
                            default:
                                Tt(t, e, D, l, i, null);
                        }
                return;
            default:
                if (co(e)) {
                    for (B in i)
                        i.hasOwnProperty(B) &&
                            ((l = i[B]),
                                l !== void 0 && Fu(t, e, B, l, i, void 0));
                    return;
                }
        }
        for (x in i)
            i.hasOwnProperty(x) &&
                ((l = i[x]), l != null && Tt(t, e, x, l, i, null));
    }
    function Px(t, e, i, l) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var o = null,
                    c = null,
                    g = null,
                    x = null,
                    T = null,
                    D = null,
                    B = null;
                for (R in i) {
                    var q = i[R];
                    if (i.hasOwnProperty(R) && q != null)
                        switch (R) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                T = q;
                            default:
                                l.hasOwnProperty(R) || Tt(t, e, R, null, l, q);
                        }
                }
                for (var N in l) {
                    var R = l[N];
                    if (
                        ((q = i[N]),
                            l.hasOwnProperty(N) && (R != null || q != null))
                    )
                        switch (N) {
                            case "type":
                                c = R;
                                break;
                            case "name":
                                o = R;
                                break;
                            case "checked":
                                D = R;
                                break;
                            case "defaultChecked":
                                B = R;
                                break;
                            case "value":
                                g = R;
                                break;
                            case "defaultValue":
                                x = R;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null) throw Error(r(137, e));
                                break;
                            default:
                                R !== q && Tt(t, e, N, R, l, q);
                        }
                }
                oo(t, g, x, T, D, B, c, o);
                return;
            case "select":
                R = g = x = N = null;
                for (c in i)
                    if (((T = i[c]), i.hasOwnProperty(c) && T != null))
                        switch (c) {
                            case "value":
                                break;
                            case "multiple":
                                R = T;
                            default:
                                l.hasOwnProperty(c) || Tt(t, e, c, null, l, T);
                        }
                for (o in l)
                    if (
                        ((c = l[o]),
                            (T = i[o]),
                            l.hasOwnProperty(o) && (c != null || T != null))
                    )
                        switch (o) {
                            case "value":
                                N = c;
                                break;
                            case "defaultValue":
                                x = c;
                                break;
                            case "multiple":
                                g = c;
                            default:
                                c !== T && Tt(t, e, o, c, l, T);
                        }
                ((e = x),
                    (i = g),
                    (l = R),
                    N != null
                        ? Bi(t, !!i, N, !1)
                        : !!l != !!i &&
                        (e != null
                            ? Bi(t, !!i, e, !0)
                            : Bi(t, !!i, i ? [] : "", !1)));
                return;
            case "textarea":
                R = N = null;
                for (x in i)
                    if (
                        ((o = i[x]),
                            i.hasOwnProperty(x) &&
                            o != null &&
                            !l.hasOwnProperty(x))
                    )
                        switch (x) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Tt(t, e, x, null, l, o);
                        }
                for (g in l)
                    if (
                        ((o = l[g]),
                            (c = i[g]),
                            l.hasOwnProperty(g) && (o != null || c != null))
                    )
                        switch (g) {
                            case "value":
                                N = o;
                                break;
                            case "defaultValue":
                                R = o;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (o != null) throw Error(r(91));
                                break;
                            default:
                                o !== c && Tt(t, e, g, o, l, c);
                        }
                Ed(t, N, R);
                return;
            case "option":
                for (var at in i)
                    if (
                        ((N = i[at]),
                            i.hasOwnProperty(at) &&
                            N != null &&
                            !l.hasOwnProperty(at))
                    )
                        switch (at) {
                            case "selected":
                                t.selected = !1;
                                break;
                            default:
                                Tt(t, e, at, null, l, N);
                        }
                for (T in l)
                    if (
                        ((N = l[T]),
                            (R = i[T]),
                            l.hasOwnProperty(T) &&
                            N !== R &&
                            (N != null || R != null))
                    )
                        switch (T) {
                            case "selected":
                                t.selected =
                                    N &&
                                    typeof N != "function" &&
                                    typeof N != "symbol";
                                break;
                            default:
                                Tt(t, e, T, N, l, R);
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var nt in i)
                    ((N = i[nt]),
                        i.hasOwnProperty(nt) &&
                        N != null &&
                        !l.hasOwnProperty(nt) &&
                        Tt(t, e, nt, null, l, N));
                for (D in l)
                    if (
                        ((N = l[D]),
                            (R = i[D]),
                            l.hasOwnProperty(D) &&
                            N !== R &&
                            (N != null || R != null))
                    )
                        switch (D) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (N != null) throw Error(r(137, e));
                                break;
                            default:
                                Tt(t, e, D, N, l, R);
                        }
                return;
            default:
                if (co(e)) {
                    for (var wt in i)
                        ((N = i[wt]),
                            i.hasOwnProperty(wt) &&
                            N !== void 0 &&
                            !l.hasOwnProperty(wt) &&
                            Fu(t, e, wt, void 0, l, N));
                    for (B in l)
                        ((N = l[B]),
                            (R = i[B]),
                            !l.hasOwnProperty(B) ||
                            N === R ||
                            (N === void 0 && R === void 0) ||
                            Fu(t, e, B, N, l, R));
                    return;
                }
        }
        for (var A in i)
            ((N = i[A]),
                i.hasOwnProperty(A) &&
                N != null &&
                !l.hasOwnProperty(A) &&
                Tt(t, e, A, null, l, N));
        for (q in l)
            ((N = l[q]),
                (R = i[q]),
                !l.hasOwnProperty(q) ||
                N === R ||
                (N == null && R == null) ||
                Tt(t, e, q, N, l, R));
    }
    var $u = null,
        Ju = null;
    function tr(t) {
        return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Dp(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0;
        }
    }
    function Np(t, e) {
        if (t === 0)
            switch (e) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
        return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Wu(t, e) {
        return (
            t === "textarea" ||
            t === "noscript" ||
            typeof e.children == "string" ||
            typeof e.children == "number" ||
            typeof e.children == "bigint" ||
            (typeof e.dangerouslySetInnerHTML == "object" &&
                e.dangerouslySetInnerHTML !== null &&
                e.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Iu = null;
    function Qx() {
        var t = window.event;
        return t && t.type === "popstate"
            ? t === Iu
                ? !1
                : ((Iu = t), !0)
            : ((Iu = null), !1);
    }
    var Rp = typeof setTimeout == "function" ? setTimeout : void 0,
        Zx = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Op = typeof Promise == "function" ? Promise : void 0,
        Fx =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Op < "u"
                    ? function (t) {
                        return Op.resolve(null).then(t).catch($x);
                    }
                    : Rp;
    function $x(t) {
        setTimeout(function () {
            throw t;
        });
    }
    function Kn(t) {
        return t === "head";
    }
    function zp(t, e) {
        var i = e,
            l = 0,
            o = 0;
        do {
            var c = i.nextSibling;
            if ((t.removeChild(i), c && c.nodeType === 8))
                if (((i = c.data), i === "/$")) {
                    if (0 < l && 8 > l) {
                        i = l;
                        var g = t.ownerDocument;
                        if (
                            (i & 1 && yl(g.documentElement),
                                i & 2 && yl(g.body),
                                i & 4)
                        )
                            for (i = g.head, yl(i), g = i.firstChild; g;) {
                                var x = g.nextSibling,
                                    T = g.nodeName;
                                (g[Ra] ||
                                    T === "SCRIPT" ||
                                    T === "STYLE" ||
                                    (T === "LINK" &&
                                        g.rel.toLowerCase() === "stylesheet") ||
                                    i.removeChild(g),
                                    (g = x));
                            }
                    }
                    if (o === 0) {
                        (t.removeChild(c), Cl(e));
                        return;
                    }
                    o--;
                } else
                    i === "$" || i === "$?" || i === "$!"
                        ? o++
                        : (l = i.charCodeAt(0) - 48);
            else l = 0;
            i = c;
        } while (i);
        Cl(e);
    }
    function tc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var i = e;
            switch (((e = e.nextSibling), i.nodeName)) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    (tc(i), ao(i));
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (i.rel.toLowerCase() === "stylesheet") continue;
            }
            t.removeChild(i);
        }
    }
    function Jx(t, e, i, l) {
        for (; t.nodeType === 1;) {
            var o = i;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break;
            } else if (l) {
                if (!t[Ra])
                    switch (e) {
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (
                                ((c = t.getAttribute("rel")),
                                    c === "stylesheet" &&
                                    t.hasAttribute("data-precedence"))
                            )
                                break;
                            if (
                                c !== o.rel ||
                                t.getAttribute("href") !==
                                (o.href == null || o.href === ""
                                    ? null
                                    : o.href) ||
                                t.getAttribute("crossorigin") !==
                                (o.crossOrigin == null
                                    ? null
                                    : o.crossOrigin) ||
                                t.getAttribute("title") !==
                                (o.title == null ? null : o.title)
                            )
                                break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (
                                ((c = t.getAttribute("src")),
                                    (c !== (o.src == null ? null : o.src) ||
                                        t.getAttribute("type") !==
                                        (o.type == null ? null : o.type) ||
                                        t.getAttribute("crossorigin") !==
                                        (o.crossOrigin == null
                                            ? null
                                            : o.crossOrigin)) &&
                                    c &&
                                    t.hasAttribute("async") &&
                                    !t.hasAttribute("itemprop"))
                            )
                                break;
                            return t;
                        default:
                            return t;
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && t.getAttribute("name") === c)
                    return t;
            } else return t;
            if (((t = Ye(t.nextSibling)), t === null)) break;
        }
        return null;
    }
    function Wx(t, e, i) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if (
                ((t.nodeType !== 1 ||
                    t.nodeName !== "INPUT" ||
                    t.type !== "hidden") &&
                    !i) ||
                ((t = Ye(t.nextSibling)), t === null)
            )
                return null;
        return t;
    }
    function ec(t) {
        return (
            t.data === "$!" ||
            (t.data === "$?" && t.ownerDocument.readyState === "complete")
        );
    }
    function Ix(t, e) {
        var i = t.ownerDocument;
        if (t.data !== "$?" || i.readyState === "complete") e();
        else {
            var l = function () {
                (e(), i.removeEventListener("DOMContentLoaded", l));
            };
            (i.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
        }
    }
    function Ye(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (
                    ((e = t.data),
                        e === "$" ||
                        e === "$!" ||
                        e === "$?" ||
                        e === "F!" ||
                        e === "F")
                )
                    break;
                if (e === "/$") return null;
            }
        }
        return t;
    }
    var nc = null;
    function _p(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var i = t.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (e === 0) return t;
                    e--;
                } else i === "/$" && e++;
            }
            t = t.previousSibling;
        }
        return null;
    }
    function Vp(t, e, i) {
        switch (((e = tr(i)), t)) {
            case "html":
                if (((t = e.documentElement), !t)) throw Error(r(452));
                return t;
            case "head":
                if (((t = e.head), !t)) throw Error(r(453));
                return t;
            case "body":
                if (((t = e.body), !t)) throw Error(r(454));
                return t;
            default:
                throw Error(r(451));
        }
    }
    function yl(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        ao(t);
    }
    var Ve = new Map(),
        Bp = new Set();
    function er(t) {
        return typeof t.getRootNode == "function"
            ? t.getRootNode()
            : t.nodeType === 9
                ? t
                : t.ownerDocument;
    }
    var bn = X.d;
    X.d = { f: tb, r: eb, D: nb, C: ib, L: ab, m: lb, X: rb, S: sb, M: ob };
    function tb() {
        var t = bn.f(),
            e = Ps();
        return t || e;
    }
    function eb(t) {
        var e = Oi(t);
        e !== null && e.tag === 5 && e.type === "form" ? nm(e) : bn.r(t);
    }
    var da = typeof document > "u" ? null : document;
    function Lp(t, e, i) {
        var l = da;
        if (l && typeof e == "string" && e) {
            var o = Me(e);
            ((o = 'link[rel="' + t + '"][href="' + o + '"]'),
                typeof i == "string" && (o += '[crossorigin="' + i + '"]'),
                Bp.has(o) ||
                (Bp.add(o),
                    (t = { rel: t, crossOrigin: i, href: e }),
                    l.querySelector(o) === null &&
                    ((e = l.createElement("link")),
                        te(e, "link", t),
                        Pt(e),
                        l.head.appendChild(e))));
        }
    }
    function nb(t) {
        (bn.D(t), Lp("dns-prefetch", t, null));
    }
    function ib(t, e) {
        (bn.C(t, e), Lp("preconnect", t, e));
    }
    function ab(t, e, i) {
        bn.L(t, e, i);
        var l = da;
        if (l && t && e) {
            var o = 'link[rel="preload"][as="' + Me(e) + '"]';
            e === "image" && i && i.imageSrcSet
                ? ((o += '[imagesrcset="' + Me(i.imageSrcSet) + '"]'),
                    typeof i.imageSizes == "string" &&
                    (o += '[imagesizes="' + Me(i.imageSizes) + '"]'))
                : (o += '[href="' + Me(t) + '"]');
            var c = o;
            switch (e) {
                case "style":
                    c = ha(t);
                    break;
                case "script":
                    c = ma(t);
            }
            Ve.has(c) ||
                ((t = p(
                    {
                        rel: "preload",
                        href: e === "image" && i && i.imageSrcSet ? void 0 : t,
                        as: e,
                    },
                    i,
                )),
                    Ve.set(c, t),
                    l.querySelector(o) !== null ||
                    (e === "style" && l.querySelector(gl(c))) ||
                    (e === "script" && l.querySelector(vl(c))) ||
                    ((e = l.createElement("link")),
                        te(e, "link", t),
                        Pt(e),
                        l.head.appendChild(e)));
        }
    }
    function lb(t, e) {
        bn.m(t, e);
        var i = da;
        if (i && t) {
            var l = e && typeof e.as == "string" ? e.as : "script",
                o =
                    'link[rel="modulepreload"][as="' +
                    Me(l) +
                    '"][href="' +
                    Me(t) +
                    '"]',
                c = o;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    c = ma(t);
            }
            if (
                !Ve.has(c) &&
                ((t = p({ rel: "modulepreload", href: t }, e)),
                    Ve.set(c, t),
                    i.querySelector(o) === null)
            ) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (i.querySelector(vl(c))) return;
                }
                ((l = i.createElement("link")),
                    te(l, "link", t),
                    Pt(l),
                    i.head.appendChild(l));
            }
        }
    }
    function sb(t, e, i) {
        bn.S(t, e, i);
        var l = da;
        if (l && t) {
            var o = zi(l).hoistableStyles,
                c = ha(t);
            e = e || "default";
            var g = o.get(c);
            if (!g) {
                var x = { loading: 0, preload: null };
                if ((g = l.querySelector(gl(c)))) x.loading = 5;
                else {
                    ((t = p(
                        { rel: "stylesheet", href: t, "data-precedence": e },
                        i,
                    )),
                        (i = Ve.get(c)) && ic(t, i));
                    var T = (g = l.createElement("link"));
                    (Pt(T),
                        te(T, "link", t),
                        (T._p = new Promise(function (D, B) {
                            ((T.onload = D), (T.onerror = B));
                        })),
                        T.addEventListener("load", function () {
                            x.loading |= 1;
                        }),
                        T.addEventListener("error", function () {
                            x.loading |= 2;
                        }),
                        (x.loading |= 4),
                        nr(g, e, l));
                }
                ((g = { type: "stylesheet", instance: g, count: 1, state: x }),
                    o.set(c, g));
            }
        }
    }
    function rb(t, e) {
        bn.X(t, e);
        var i = da;
        if (i && t) {
            var l = zi(i).hoistableScripts,
                o = ma(t),
                c = l.get(o);
            c ||
                ((c = i.querySelector(vl(o))),
                    c ||
                    ((t = p({ src: t, async: !0 }, e)),
                        (e = Ve.get(o)) && ac(t, e),
                        (c = i.createElement("script")),
                        Pt(c),
                        te(c, "link", t),
                        i.head.appendChild(c)),
                    (c = { type: "script", instance: c, count: 1, state: null }),
                    l.set(o, c));
        }
    }
    function ob(t, e) {
        bn.M(t, e);
        var i = da;
        if (i && t) {
            var l = zi(i).hoistableScripts,
                o = ma(t),
                c = l.get(o);
            c ||
                ((c = i.querySelector(vl(o))),
                    c ||
                    ((t = p({ src: t, async: !0, type: "module" }, e)),
                        (e = Ve.get(o)) && ac(t, e),
                        (c = i.createElement("script")),
                        Pt(c),
                        te(c, "link", t),
                        i.head.appendChild(c)),
                    (c = { type: "script", instance: c, count: 1, state: null }),
                    l.set(o, c));
        }
    }
    function Up(t, e, i, l) {
        var o = (o = rt.current) ? er(o) : null;
        if (!o) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof i.precedence == "string" &&
                    typeof i.href == "string"
                    ? ((e = ha(i.href)),
                        (i = zi(o).hoistableStyles),
                        (l = i.get(e)),
                        l ||
                        ((l = {
                            type: "style",
                            instance: null,
                            count: 0,
                            state: null,
                        }),
                            i.set(e, l)),
                        l)
                    : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (
                    i.rel === "stylesheet" &&
                    typeof i.href == "string" &&
                    typeof i.precedence == "string"
                ) {
                    t = ha(i.href);
                    var c = zi(o).hoistableStyles,
                        g = c.get(t);
                    if (
                        (g ||
                            ((o = o.ownerDocument || o),
                                (g = {
                                    type: "stylesheet",
                                    instance: null,
                                    count: 0,
                                    state: { loading: 0, preload: null },
                                }),
                                c.set(t, g),
                                (c = o.querySelector(gl(t))) &&
                                !c._p &&
                                ((g.instance = c), (g.state.loading = 5)),
                                Ve.has(t) ||
                                ((i = {
                                    rel: "preload",
                                    as: "style",
                                    href: i.href,
                                    crossOrigin: i.crossOrigin,
                                    integrity: i.integrity,
                                    media: i.media,
                                    hrefLang: i.hrefLang,
                                    referrerPolicy: i.referrerPolicy,
                                }),
                                    Ve.set(t, i),
                                    c || ub(o, t, i, g.state))),
                            e && l === null)
                    )
                        throw Error(r(528, ""));
                    return g;
                }
                if (e && l !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return (
                    (e = i.async),
                    (i = i.src),
                    typeof i == "string" &&
                        e &&
                        typeof e != "function" &&
                        typeof e != "symbol"
                        ? ((e = ma(i)),
                            (i = zi(o).hoistableScripts),
                            (l = i.get(e)),
                            l ||
                            ((l = {
                                type: "script",
                                instance: null,
                                count: 0,
                                state: null,
                            }),
                                i.set(e, l)),
                            l)
                        : {
                            type: "void",
                            instance: null,
                            count: 0,
                            state: null,
                        }
                );
            default:
                throw Error(r(444, t));
        }
    }
    function ha(t) {
        return 'href="' + Me(t) + '"';
    }
    function gl(t) {
        return 'link[rel="stylesheet"][' + t + "]";
    }
    function kp(t) {
        return p({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function ub(t, e, i, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]")
            ? (l.loading = 1)
            : ((e = t.createElement("link")),
                (l.preload = e),
                e.addEventListener("load", function () {
                    return (l.loading |= 1);
                }),
                e.addEventListener("error", function () {
                    return (l.loading |= 2);
                }),
                te(e, "link", i),
                Pt(e),
                t.head.appendChild(e));
    }
    function ma(t) {
        return '[src="' + Me(t) + '"]';
    }
    function vl(t) {
        return "script[async]" + t;
    }
    function Hp(t, e, i) {
        if ((e.count++, e.instance === null))
            switch (e.type) {
                case "style":
                    var l = t.querySelector(
                        'style[data-href~="' + Me(i.href) + '"]',
                    );
                    if (l) return ((e.instance = l), Pt(l), l);
                    var o = p({}, i, {
                        "data-href": i.href,
                        "data-precedence": i.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (l = (t.ownerDocument || t).createElement("style")),
                        Pt(l),
                        te(l, "style", o),
                        nr(l, i.precedence, t),
                        (e.instance = l)
                    );
                case "stylesheet":
                    o = ha(i.href);
                    var c = t.querySelector(gl(o));
                    if (c)
                        return (
                            (e.state.loading |= 4),
                            (e.instance = c),
                            Pt(c),
                            c
                        );
                    ((l = kp(i)),
                        (o = Ve.get(o)) && ic(l, o),
                        (c = (t.ownerDocument || t).createElement("link")),
                        Pt(c));
                    var g = c;
                    return (
                        (g._p = new Promise(function (x, T) {
                            ((g.onload = x), (g.onerror = T));
                        })),
                        te(c, "link", l),
                        (e.state.loading |= 4),
                        nr(c, i.precedence, t),
                        (e.instance = c)
                    );
                case "script":
                    return (
                        (c = ma(i.src)),
                        (o = t.querySelector(vl(c)))
                            ? ((e.instance = o), Pt(o), o)
                            : ((l = i),
                                (o = Ve.get(c)) && ((l = p({}, i)), ac(l, o)),
                                (t = t.ownerDocument || t),
                                (o = t.createElement("script")),
                                Pt(o),
                                te(o, "link", l),
                                t.head.appendChild(o),
                                (e.instance = o))
                    );
                case "void":
                    return null;
                default:
                    throw Error(r(443, e.type));
            }
        else
            e.type === "stylesheet" &&
                (e.state.loading & 4) === 0 &&
                ((l = e.instance),
                    (e.state.loading |= 4),
                    nr(l, i.precedence, t));
        return e.instance;
    }
    function nr(t, e, i) {
        for (
            var l = i.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
            ),
            o = l.length ? l[l.length - 1] : null,
            c = o,
            g = 0;
            g < l.length;
            g++
        ) {
            var x = l[g];
            if (x.dataset.precedence === e) c = x;
            else if (c !== o) break;
        }
        c
            ? c.parentNode.insertBefore(t, c.nextSibling)
            : ((e = i.nodeType === 9 ? i.head : i),
                e.insertBefore(t, e.firstChild));
    }
    function ic(t, e) {
        (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.title == null && (t.title = e.title));
    }
    function ac(t, e) {
        (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.integrity == null && (t.integrity = e.integrity));
    }
    var ir = null;
    function qp(t, e, i) {
        if (ir === null) {
            var l = new Map(),
                o = (ir = new Map());
            o.set(i, l);
        } else ((o = ir), (l = o.get(i)), l || ((l = new Map()), o.set(i, l)));
        if (l.has(t)) return l;
        for (
            l.set(t, null), i = i.getElementsByTagName(t), o = 0;
            o < i.length;
            o++
        ) {
            var c = i[o];
            if (
                !(
                    c[Ra] ||
                    c[ie] ||
                    (t === "link" && c.getAttribute("rel") === "stylesheet")
                ) &&
                c.namespaceURI !== "http://www.w3.org/2000/svg"
            ) {
                var g = c.getAttribute(e) || "";
                g = t + g;
                var x = l.get(g);
                x ? x.push(c) : l.set(g, [c]);
            }
        }
        return l;
    }
    function Yp(t, e, i) {
        ((t = t.ownerDocument || t),
            t.head.insertBefore(
                i,
                e === "title" ? t.querySelector("head > title") : null,
            ));
    }
    function cb(t, e, i) {
        if (i === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (
                    typeof e.precedence != "string" ||
                    typeof e.href != "string" ||
                    e.href === ""
                )
                    break;
                return !0;
            case "link":
                if (
                    typeof e.rel != "string" ||
                    typeof e.href != "string" ||
                    e.href === "" ||
                    e.onLoad ||
                    e.onError
                )
                    break;
                switch (e.rel) {
                    case "stylesheet":
                        return (
                            (t = e.disabled),
                            typeof e.precedence == "string" && t == null
                        );
                    default:
                        return !0;
                }
            case "script":
                if (
                    e.async &&
                    typeof e.async != "function" &&
                    typeof e.async != "symbol" &&
                    !e.onLoad &&
                    !e.onError &&
                    e.src &&
                    typeof e.src == "string"
                )
                    return !0;
        }
        return !1;
    }
    function Gp(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    var xl = null;
    function fb() { }
    function db(t, e, i) {
        if (xl === null) throw Error(r(475));
        var l = xl;
        if (
            e.type === "stylesheet" &&
            (typeof i.media != "string" ||
                matchMedia(i.media).matches !== !1) &&
            (e.state.loading & 4) === 0
        ) {
            if (e.instance === null) {
                var o = ha(i.href),
                    c = t.querySelector(gl(o));
                if (c) {
                    ((t = c._p),
                        t !== null &&
                        typeof t == "object" &&
                        typeof t.then == "function" &&
                        (l.count++, (l = ar.bind(l)), t.then(l, l)),
                        (e.state.loading |= 4),
                        (e.instance = c),
                        Pt(c));
                    return;
                }
                ((c = t.ownerDocument || t),
                    (i = kp(i)),
                    (o = Ve.get(o)) && ic(i, o),
                    (c = c.createElement("link")),
                    Pt(c));
                var g = c;
                ((g._p = new Promise(function (x, T) {
                    ((g.onload = x), (g.onerror = T));
                })),
                    te(c, "link", i),
                    (e.instance = c));
            }
            (l.stylesheets === null && (l.stylesheets = new Map()),
                l.stylesheets.set(e, t),
                (t = e.state.preload) &&
                (e.state.loading & 3) === 0 &&
                (l.count++,
                    (e = ar.bind(l)),
                    t.addEventListener("load", e),
                    t.addEventListener("error", e)));
        }
    }
    function hb() {
        if (xl === null) throw Error(r(475));
        var t = xl;
        return (
            t.stylesheets && t.count === 0 && lc(t, t.stylesheets),
            0 < t.count
                ? function (e) {
                    var i = setTimeout(function () {
                        if (
                            (t.stylesheets && lc(t, t.stylesheets),
                                t.unsuspend)
                        ) {
                            var l = t.unsuspend;
                            ((t.unsuspend = null), l());
                        }
                    }, 6e4);
                    return (
                        (t.unsuspend = e),
                        function () {
                            ((t.unsuspend = null), clearTimeout(i));
                        }
                    );
                }
                : null
        );
    }
    function ar() {
        if ((this.count--, this.count === 0)) {
            if (this.stylesheets) lc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                ((this.unsuspend = null), t());
            }
        }
    }
    var lr = null;
    function lc(t, e) {
        ((t.stylesheets = null),
            t.unsuspend !== null &&
            (t.count++,
                (lr = new Map()),
                e.forEach(mb, t),
                (lr = null),
                ar.call(t)));
    }
    function mb(t, e) {
        if (!(e.state.loading & 4)) {
            var i = lr.get(t);
            if (i) var l = i.get(null);
            else {
                ((i = new Map()), lr.set(t, i));
                for (
                    var o = t.querySelectorAll(
                        "link[data-precedence],style[data-precedence]",
                    ),
                    c = 0;
                    c < o.length;
                    c++
                ) {
                    var g = o[c];
                    (g.nodeName === "LINK" ||
                        g.getAttribute("media") !== "not all") &&
                        (i.set(g.dataset.precedence, g), (l = g));
                }
                l && i.set(null, l);
            }
            ((o = e.instance),
                (g = o.getAttribute("data-precedence")),
                (c = i.get(g) || l),
                c === l && i.set(null, o),
                i.set(g, o),
                this.count++,
                (l = ar.bind(this)),
                o.addEventListener("load", l),
                o.addEventListener("error", l),
                c
                    ? c.parentNode.insertBefore(o, c.nextSibling)
                    : ((t = t.nodeType === 9 ? t.head : t),
                        t.insertBefore(o, t.firstChild)),
                (e.state.loading |= 4));
        }
    }
    var bl = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: I,
        _currentValue2: I,
        _threadCount: 0,
    };
    function pb(t, e, i, l, o, c, g, x) {
        ((this.tag = 1),
            (this.containerInfo = t),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = to(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                0),
            (this.entanglements = to(0)),
            (this.hiddenUpdates = to(null)),
            (this.identifierPrefix = l),
            (this.onUncaughtError = o),
            (this.onCaughtError = c),
            (this.onRecoverableError = g),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = x),
            (this.incompleteTransitions = new Map()));
    }
    function Xp(t, e, i, l, o, c, g, x, T, D, B, q) {
        return (
            (t = new pb(t, e, i, g, x, T, D, q)),
            (e = 1),
            c === !0 && (e |= 24),
            (c = xe(3, null, null, e)),
            (t.current = c),
            (c.stateNode = t),
            (e = Ho()),
            e.refCount++,
            (t.pooledCache = e),
            e.refCount++,
            (c.memoizedState = { element: l, isDehydrated: i, cache: e }),
            Xo(c),
            t
        );
    }
    function Kp(t) {
        return t ? ((t = Ki), t) : Ki;
    }
    function Pp(t, e, i, l, o, c) {
        ((o = Kp(o)),
            l.context === null ? (l.context = o) : (l.pendingContext = o),
            (l = On(e)),
            (l.payload = { element: i }),
            (c = c === void 0 ? null : c),
            c !== null && (l.callback = c),
            (i = zn(t, l, e)),
            i !== null && (Ce(i, t, e), $a(i, t, e)));
    }
    function Qp(t, e) {
        if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
            var i = t.retryLane;
            t.retryLane = i !== 0 && i < e ? i : e;
        }
    }
    function sc(t, e) {
        (Qp(t, e), (t = t.alternate) && Qp(t, e));
    }
    function Zp(t) {
        if (t.tag === 13) {
            var e = Xi(t, 67108864);
            (e !== null && Ce(e, t, 67108864), sc(t, 67108864));
        }
    }
    var sr = !0;
    function yb(t, e, i, l) {
        var o = L.T;
        L.T = null;
        var c = X.p;
        try {
            ((X.p = 2), rc(t, e, i, l));
        } finally {
            ((X.p = c), (L.T = o));
        }
    }
    function gb(t, e, i, l) {
        var o = L.T;
        L.T = null;
        var c = X.p;
        try {
            ((X.p = 8), rc(t, e, i, l));
        } finally {
            ((X.p = c), (L.T = o));
        }
    }
    function rc(t, e, i, l) {
        if (sr) {
            var o = oc(l);
            if (o === null) (Zu(t, e, l, rr, i), $p(t, l));
            else if (xb(o, t, e, i, l)) l.stopPropagation();
            else if (($p(t, l), e & 4 && -1 < vb.indexOf(t))) {
                for (; o !== null;) {
                    var c = Oi(o);
                    if (c !== null)
                        switch (c.tag) {
                            case 3:
                                if (
                                    ((c = c.stateNode),
                                        c.current.memoizedState.isDehydrated)
                                ) {
                                    var g = ni(c.pendingLanes);
                                    if (g !== 0) {
                                        var x = c;
                                        for (
                                            x.pendingLanes |= 2,
                                            x.entangledLanes |= 2;
                                            g;
                                        ) {
                                            var T = 1 << (31 - ge(g));
                                            ((x.entanglements[1] |= T),
                                                (g &= ~T));
                                        }
                                        (Ie(c),
                                            (vt & 6) === 0 &&
                                            ((Xs = Ze() + 500), hl(0)));
                                    }
                                }
                                break;
                            case 13:
                                ((x = Xi(c, 2)),
                                    x !== null && Ce(x, c, 2),
                                    Ps(),
                                    sc(c, 2));
                        }
                    if (
                        ((c = oc(l)), c === null && Zu(t, e, l, rr, i), c === o)
                    )
                        break;
                    o = c;
                }
                o !== null && l.stopPropagation();
            } else Zu(t, e, l, null, i);
        }
    }
    function oc(t) {
        return ((t = ho(t)), uc(t));
    }
    var rr = null;
    function uc(t) {
        if (((rr = null), (t = Ri(t)), t !== null)) {
            var e = f(t);
            if (e === null) t = null;
            else {
                var i = e.tag;
                if (i === 13) {
                    if (((t = d(e)), t !== null)) return t;
                    t = null;
                } else if (i === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null;
                } else e !== t && (t = null);
            }
        }
        return ((rr = t), null);
    }
    function Fp(t) {
        switch (t) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (iv()) {
                    case ud:
                        return 2;
                    case cd:
                        return 8;
                    case Il:
                    case av:
                        return 32;
                    case fd:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var cc = !1,
        Pn = null,
        Qn = null,
        Zn = null,
        Sl = new Map(),
        Tl = new Map(),
        Fn = [],
        vb =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                " ",
            );
    function $p(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Pn = null;
                break;
            case "dragenter":
            case "dragleave":
                Qn = null;
                break;
            case "mouseover":
            case "mouseout":
                Zn = null;
                break;
            case "pointerover":
            case "pointerout":
                Sl.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Tl.delete(e.pointerId);
        }
    }
    function wl(t, e, i, l, o, c) {
        return t === null || t.nativeEvent !== c
            ? ((t = {
                blockedOn: e,
                domEventName: i,
                eventSystemFlags: l,
                nativeEvent: c,
                targetContainers: [o],
            }),
                e !== null && ((e = Oi(e)), e !== null && Zp(e)),
                t)
            : ((t.eventSystemFlags |= l),
                (e = t.targetContainers),
                o !== null && e.indexOf(o) === -1 && e.push(o),
                t);
    }
    function xb(t, e, i, l, o) {
        switch (e) {
            case "focusin":
                return ((Pn = wl(Pn, t, e, i, l, o)), !0);
            case "dragenter":
                return ((Qn = wl(Qn, t, e, i, l, o)), !0);
            case "mouseover":
                return ((Zn = wl(Zn, t, e, i, l, o)), !0);
            case "pointerover":
                var c = o.pointerId;
                return (Sl.set(c, wl(Sl.get(c) || null, t, e, i, l, o)), !0);
            case "gotpointercapture":
                return (
                    (c = o.pointerId),
                    Tl.set(c, wl(Tl.get(c) || null, t, e, i, l, o)),
                    !0
                );
        }
        return !1;
    }
    function Jp(t) {
        var e = Ri(t.target);
        if (e !== null) {
            var i = f(e);
            if (i !== null) {
                if (((e = i.tag), e === 13)) {
                    if (((e = d(i)), e !== null)) {
                        ((t.blockedOn = e),
                            dv(t.priority, function () {
                                if (i.tag === 13) {
                                    var l = we();
                                    l = eo(l);
                                    var o = Xi(i, l);
                                    (o !== null && Ce(o, i, l), sc(i, l));
                                }
                            }));
                        return;
                    }
                } else if (
                    e === 3 &&
                    i.stateNode.current.memoizedState.isDehydrated
                ) {
                    t.blockedOn =
                        i.tag === 3 ? i.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        t.blockedOn = null;
    }
    function or(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var i = oc(t.nativeEvent);
            if (i === null) {
                i = t.nativeEvent;
                var l = new i.constructor(i.type, i);
                ((fo = l), i.target.dispatchEvent(l), (fo = null));
            } else
                return (
                    (e = Oi(i)),
                    e !== null && Zp(e),
                    (t.blockedOn = i),
                    !1
                );
            e.shift();
        }
        return !0;
    }
    function Wp(t, e, i) {
        or(t) && i.delete(e);
    }
    function bb() {
        ((cc = !1),
            Pn !== null && or(Pn) && (Pn = null),
            Qn !== null && or(Qn) && (Qn = null),
            Zn !== null && or(Zn) && (Zn = null),
            Sl.forEach(Wp),
            Tl.forEach(Wp));
    }
    function ur(t, e) {
        t.blockedOn === e &&
            ((t.blockedOn = null),
                cc ||
                ((cc = !0),
                    n.unstable_scheduleCallback(n.unstable_NormalPriority, bb)));
    }
    var cr = null;
    function Ip(t) {
        cr !== t &&
            ((cr = t),
                n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
                    cr === t && (cr = null);
                    for (var e = 0; e < t.length; e += 3) {
                        var i = t[e],
                            l = t[e + 1],
                            o = t[e + 2];
                        if (typeof l != "function") {
                            if (uc(l || i) === null) continue;
                            break;
                        }
                        var c = Oi(i);
                        c !== null &&
                            (t.splice(e, 3),
                                (e -= 3),
                                uu(
                                    c,
                                    {
                                        pending: !0,
                                        data: o,
                                        method: i.method,
                                        action: l,
                                    },
                                    l,
                                    o,
                                ));
                    }
                }));
    }
    function Cl(t) {
        function e(T) {
            return ur(T, t);
        }
        (Pn !== null && ur(Pn, t),
            Qn !== null && ur(Qn, t),
            Zn !== null && ur(Zn, t),
            Sl.forEach(e),
            Tl.forEach(e));
        for (var i = 0; i < Fn.length; i++) {
            var l = Fn[i];
            l.blockedOn === t && (l.blockedOn = null);
        }
        for (; 0 < Fn.length && ((i = Fn[0]), i.blockedOn === null);)
            (Jp(i), i.blockedOn === null && Fn.shift());
        if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
            for (l = 0; l < i.length; l += 3) {
                var o = i[l],
                    c = i[l + 1],
                    g = o[oe] || null;
                if (typeof c == "function") g || Ip(i);
                else if (g) {
                    var x = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (((o = c), (g = c[oe] || null))) x = g.formAction;
                        else if (uc(o) !== null) continue;
                    } else x = g.action;
                    (typeof x == "function"
                        ? (i[l + 1] = x)
                        : (i.splice(l, 3), (l -= 3)),
                        Ip(i));
                }
            }
    }
    function fc(t) {
        this._internalRoot = t;
    }
    ((fr.prototype.render = fc.prototype.render =
        function (t) {
            var e = this._internalRoot;
            if (e === null) throw Error(r(409));
            var i = e.current,
                l = we();
            Pp(i, l, t, e, null, null);
        }),
        (fr.prototype.unmount = fc.prototype.unmount =
            function () {
                var t = this._internalRoot;
                if (t !== null) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    (Pp(t.current, 2, null, t, null, null),
                        Ps(),
                        (e[Ni] = null));
                }
            }));
    function fr(t) {
        this._internalRoot = t;
    }
    fr.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = yd();
            t = { blockedOn: null, target: t, priority: e };
            for (
                var i = 0;
                i < Fn.length && e !== 0 && e < Fn[i].priority;
                i++
            );
            (Fn.splice(i, 0, t), i === 0 && Jp(t));
        }
    };
    var t0 = a.version;
    if (t0 !== "19.1.1") throw Error(r(527, t0, "19.1.1"));
    X.findDOMNode = function (t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function"
                ? Error(r(188))
                : ((t = Object.keys(t).join(",")), Error(r(268, t)));
        return (
            (t = h(e)),
            (t = t !== null ? y(t) : null),
            (t = t === null ? null : t.stateNode),
            t
        );
    };
    var Sb = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: L,
        reconcilerVersion: "19.1.1",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!dr.isDisabled && dr.supportsFiber)
            try {
                ((Ma = dr.inject(Sb)), (ye = dr));
            } catch { }
    }
    return (
        (jl.createRoot = function (t, e) {
            if (!u(t)) throw Error(r(299));
            var i = !1,
                l = "",
                o = ym,
                c = gm,
                g = vm,
                x = null;
            return (
                e != null &&
                (e.unstable_strictMode === !0 && (i = !0),
                    e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (c = e.onCaughtError),
                    e.onRecoverableError !== void 0 &&
                    (g = e.onRecoverableError),
                    e.unstable_transitionCallbacks !== void 0 &&
                    (x = e.unstable_transitionCallbacks)),
                (e = Xp(t, 1, !1, null, null, i, l, o, c, g, x, null)),
                (t[Ni] = e.current),
                Qu(t),
                new fc(e)
            );
        }),
        (jl.hydrateRoot = function (t, e, i) {
            if (!u(t)) throw Error(r(299));
            var l = !1,
                o = "",
                c = ym,
                g = gm,
                x = vm,
                T = null,
                D = null;
            return (
                i != null &&
                (i.unstable_strictMode === !0 && (l = !0),
                    i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
                    i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
                    i.onCaughtError !== void 0 && (g = i.onCaughtError),
                    i.onRecoverableError !== void 0 &&
                    (x = i.onRecoverableError),
                    i.unstable_transitionCallbacks !== void 0 &&
                    (T = i.unstable_transitionCallbacks),
                    i.formState !== void 0 && (D = i.formState)),
                (e = Xp(t, 1, !0, e, i ?? null, l, o, c, g, x, T, D)),
                (e.context = Kp(null)),
                (i = e.current),
                (l = we()),
                (l = eo(l)),
                (o = On(l)),
                (o.callback = null),
                zn(i, o, l),
                (i = l),
                (e.current.lanes = i),
                Na(e, i),
                Ie(e),
                (t[Ni] = e.current),
                Qu(t),
                new fr(e)
            );
        }),
        (jl.version = "19.1.1"),
        jl
    );
}
var c0;
function Ob() {
    if (c0) return mc.exports;
    c0 = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (a) {
                console.error(a);
            }
    }
    return (n(), (mc.exports = Rb()), mc.exports);
}
var zb = Ob(),
    vc = { exports: {} },
    xc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f0;
function _b() {
    if (f0) return xc;
    f0 = 1;
    var n = kr();
    function a(h, y) {
        return (
            (h === y && (h !== 0 || 1 / h === 1 / y)) || (h !== h && y !== y)
        );
    }
    var s = typeof Object.is == "function" ? Object.is : a,
        r = n.useSyncExternalStore,
        u = n.useRef,
        f = n.useEffect,
        d = n.useMemo,
        m = n.useDebugValue;
    return (
        (xc.useSyncExternalStoreWithSelector = function (h, y, p, b, S) {
            var j = u(null);
            if (j.current === null) {
                var M = { hasValue: !1, value: null };
                j.current = M;
            } else M = j.current;
            j = d(
                function () {
                    function V(z) {
                        if (!U) {
                            if (
                                ((U = !0),
                                    (O = z),
                                    (z = b(z)),
                                    S !== void 0 && M.hasValue)
                            ) {
                                var P = M.value;
                                if (S(P, z)) return (G = P);
                            }
                            return (G = z);
                        }
                        if (((P = G), s(O, z))) return P;
                        var J = b(z);
                        return S !== void 0 && S(P, J)
                            ? ((O = z), P)
                            : ((O = z), (G = J));
                    }
                    var U = !1,
                        O,
                        G,
                        K = p === void 0 ? null : p;
                    return [
                        function () {
                            return V(y());
                        },
                        K === null
                            ? void 0
                            : function () {
                                return V(K());
                            },
                    ];
                },
                [y, p, b, S],
            );
            var H = r(h, j[0], j[1]);
            return (
                f(
                    function () {
                        ((M.hasValue = !0), (M.value = H));
                    },
                    [H],
                ),
                m(H),
                H
            );
        }),
        xc
    );
}
var d0;
function Vb() {
    return (d0 || ((d0 = 1), (vc.exports = _b())), vc.exports);
}
var Bb = Vb();
function Lb(n) {
    n();
}
function Ub() {
    let n = null,
        a = null;
    return {
        clear() {
            ((n = null), (a = null));
        },
        notify() {
            Lb(() => {
                let s = n;
                for (; s;) (s.callback(), (s = s.next));
            });
        },
        get() {
            const s = [];
            let r = n;
            for (; r;) (s.push(r), (r = r.next));
            return s;
        },
        subscribe(s) {
            let r = !0;
            const u = (a = { callback: s, next: null, prev: a });
            return (
                u.prev ? (u.prev.next = u) : (n = u),
                function () {
                    !r ||
                        n === null ||
                        ((r = !1),
                            u.next ? (u.next.prev = u.prev) : (a = u.prev),
                            u.prev ? (u.prev.next = u.next) : (n = u.next));
                }
            );
        },
    };
}
var h0 = { notify() { }, get: () => [] };
function kb(n, a) {
    let s,
        r = h0,
        u = 0,
        f = !1;
    function d(H) {
        p();
        const V = r.subscribe(H);
        let U = !1;
        return () => {
            U || ((U = !0), V(), b());
        };
    }
    function m() {
        r.notify();
    }
    function h() {
        M.onStateChange && M.onStateChange();
    }
    function y() {
        return f;
    }
    function p() {
        (u++, s || ((s = n.subscribe(h)), (r = Ub())));
    }
    function b() {
        (u--, s && u === 0 && (s(), (s = void 0), r.clear(), (r = h0)));
    }
    function S() {
        f || ((f = !0), p());
    }
    function j() {
        f && ((f = !1), b());
    }
    const M = {
        addNestedSub: d,
        notifyNestedSubs: m,
        handleChangeWrapper: h,
        isSubscribed: y,
        trySubscribe: S,
        tryUnsubscribe: j,
        getListeners: () => r,
    };
    return M;
}
var Hb = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
    qb = Hb(),
    Yb = () => typeof navigator < "u" && navigator.product === "ReactNative",
    Gb = Yb(),
    Xb = () => (qb || Gb ? _.useLayoutEffect : _.useEffect),
    Kb = Xb(),
    bc = Symbol.for("react-redux-context"),
    Sc = typeof globalThis < "u" ? globalThis : {};
function Pb() {
    if (!_.createContext) return {};
    const n = Sc[bc] ?? (Sc[bc] = new Map());
    let a = n.get(_.createContext);
    return (a || ((a = _.createContext(null)), n.set(_.createContext, a)), a);
}
var In = Pb();
function Qb(n) {
    const { children: a, context: s, serverState: r, store: u } = n,
        f = _.useMemo(() => {
            const h = kb(u);
            return {
                store: u,
                subscription: h,
                getServerState: r ? () => r : void 0,
            };
        }, [u, r]),
        d = _.useMemo(() => u.getState(), [u]);
    Kb(() => {
        const { subscription: h } = f;
        return (
            (h.onStateChange = h.notifyNestedSubs),
            h.trySubscribe(),
            d !== u.getState() && h.notifyNestedSubs(),
            () => {
                (h.tryUnsubscribe(), (h.onStateChange = void 0));
            }
        );
    }, [f, d]);
    const m = s || In;
    return _.createElement(m.Provider, { value: f }, a);
}
var Zb = Qb;
function bf(n = In) {
    return function () {
        return _.useContext(n);
    };
}
var Qy = bf();
function Zy(n = In) {
    const a = n === In ? Qy : bf(n),
        s = () => {
            const { store: r } = a();
            return r;
        };
    return (Object.assign(s, { withTypes: () => s }), s);
}
var Fb = Zy();
function $b(n = In) {
    const a = n === In ? Fb : Zy(n),
        s = () => a().dispatch;
    return (Object.assign(s, { withTypes: () => s }), s);
}
var Jb = $b(),
    Wb = (n, a) => n === a;
function Ib(n = In) {
    const a = n === In ? Qy : bf(n),
        s = (r, u = {}) => {
            const { equalityFn: f = Wb } =
                typeof u == "function" ? { equalityFn: u } : u,
                d = a(),
                { store: m, subscription: h, getServerState: y } = d;
            _.useRef(!0);
            const p = _.useCallback(
                {
                    [r.name](S) {
                        return r(S);
                    },
                }[r.name],
                [r],
            ),
                b = Bb.useSyncExternalStoreWithSelector(
                    h.addNestedSub,
                    m.getState,
                    y || m.getState,
                    p,
                    f,
                );
            return (_.useDebugValue(b), b);
        };
    return (Object.assign(s, { withTypes: () => s }), s);
}
var Kt = Ib();
const Sf = _.createContext({});
function Di(n) {
    const a = _.useRef(null);
    return (a.current === null && (a.current = n()), a.current);
}
const Tf = typeof window < "u",
    Pl = Tf ? _.useLayoutEffect : _.useEffect,
    Hr = _.createContext(null);
function wf(n, a) {
    n.indexOf(a) === -1 && n.push(a);
}
function Cf(n, a) {
    const s = n.indexOf(a);
    s > -1 && n.splice(s, 1);
}
const an = (n, a, s) => (s > a ? a : s < n ? n : s);
let Ul = () => { };
const Cn = {},
    Fy = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function $y(n) {
    return typeof n == "object" && n !== null;
}
const Jy = (n) => /^0[^.\s]+$/u.test(n);
function Af(n) {
    let a;
    return () => (a === void 0 && (a = n()), a);
}
const me = (n) => n,
    t2 = (n, a) => (s) => a(n(s)),
    Ql = (...n) => n.reduce(t2),
    Ta = (n, a, s) => {
        const r = a - n;
        return r === 0 ? 1 : (s - n) / r;
    };
class jf {
    constructor() {
        this.subscriptions = [];
    }
    add(a) {
        return (wf(this.subscriptions, a), () => Cf(this.subscriptions, a));
    }
    notify(a, s, r) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1) this.subscriptions[0](a, s, r);
            else
                for (let f = 0; f < u; f++) {
                    const d = this.subscriptions[f];
                    d && d(a, s, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const tn = (n) => n * 1e3,
    en = (n) => n / 1e3;
function Ef(n, a) {
    return a ? n * (1e3 / a) : 0;
}
const Wy = (n, a, s) =>
    (((1 - 3 * s + 3 * a) * n + (3 * s - 6 * a)) * n + 3 * a) * n,
    e2 = 1e-7,
    n2 = 12;
function i2(n, a, s, r, u) {
    let f,
        d,
        m = 0;
    do
        ((d = a + (s - a) / 2),
            (f = Wy(d, r, u) - n),
            f > 0 ? (s = d) : (a = d));
    while (Math.abs(f) > e2 && ++m < n2);
    return d;
}
function Zl(n, a, s, r) {
    if (n === a && s === r) return me;
    const u = (f) => i2(f, 0, 1, n, s);
    return (f) => (f === 0 || f === 1 ? f : Wy(u(f), a, r));
}
const Iy = (n) => (a) => (a <= 0.5 ? n(2 * a) / 2 : (2 - n(2 * (1 - a))) / 2),
    tg = (n) => (a) => 1 - n(1 - a),
    eg = Zl(0.33, 1.53, 0.69, 0.99),
    Mf = tg(eg),
    ng = Iy(Mf),
    ig = (n) =>
        (n *= 2) < 1 ? 0.5 * Mf(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
    Df = (n) => 1 - Math.sin(Math.acos(n)),
    ag = tg(Df),
    lg = Iy(Df),
    a2 = Zl(0.42, 0, 1, 1),
    l2 = Zl(0, 0, 0.58, 1),
    sg = Zl(0.42, 0, 0.58, 1),
    s2 = (n) => Array.isArray(n) && typeof n[0] != "number",
    rg = (n) => Array.isArray(n) && typeof n[0] == "number",
    r2 = {
        linear: me,
        easeIn: a2,
        easeInOut: sg,
        easeOut: l2,
        circIn: Df,
        circInOut: lg,
        circOut: ag,
        backIn: Mf,
        backInOut: ng,
        backOut: eg,
        anticipate: ig,
    },
    o2 = (n) => typeof n == "string",
    m0 = (n) => {
        if (rg(n)) {
            Ul(n.length === 4);
            const [a, s, r, u] = n;
            return Zl(a, s, r, u);
        } else if (o2(n)) return r2[n];
        return n;
    },
    hr = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
    ];
function u2(n, a) {
    let s = new Set(),
        r = new Set(),
        u = !1,
        f = !1;
    const d = new WeakSet();
    let m = { delta: 0, timestamp: 0, isProcessing: !1 };
    function h(p) {
        (d.has(p) && (y.schedule(p), n()), p(m));
    }
    const y = {
        schedule: (p, b = !1, S = !1) => {
            const M = S && u ? s : r;
            return (b && d.add(p), M.has(p) || M.add(p), p);
        },
        cancel: (p) => {
            (r.delete(p), d.delete(p));
        },
        process: (p) => {
            if (((m = p), u)) {
                f = !0;
                return;
            }
            ((u = !0),
                ([s, r] = [r, s]),
                s.forEach(h),
                s.clear(),
                (u = !1),
                f && ((f = !1), y.process(p)));
        },
    };
    return y;
}
const c2 = 40;
function og(n, a) {
    let s = !1,
        r = !0;
    const u = { delta: 0, timestamp: 0, isProcessing: !1 },
        f = () => (s = !0),
        d = hr.reduce((G, K) => ((G[K] = u2(f)), G), {}),
        {
            setup: m,
            read: h,
            resolveKeyframes: y,
            preUpdate: p,
            update: b,
            preRender: S,
            render: j,
            postRender: M,
        } = d,
        H = () => {
            const G = Cn.useManualTiming ? u.timestamp : performance.now();
            ((s = !1),
                Cn.useManualTiming ||
                (u.delta = r
                    ? 1e3 / 60
                    : Math.max(Math.min(G - u.timestamp, c2), 1)),
                (u.timestamp = G),
                (u.isProcessing = !0),
                m.process(u),
                h.process(u),
                y.process(u),
                p.process(u),
                b.process(u),
                S.process(u),
                j.process(u),
                M.process(u),
                (u.isProcessing = !1),
                s && a && ((r = !1), n(H)));
        },
        V = () => {
            ((s = !0), (r = !0), u.isProcessing || n(H));
        };
    return {
        schedule: hr.reduce((G, K) => {
            const z = d[K];
            return (
                (G[K] = (P, J = !1, Z = !1) => (s || V(), z.schedule(P, J, Z))),
                G
            );
        }, {}),
        cancel: (G) => {
            for (let K = 0; K < hr.length; K++) d[hr[K]].cancel(G);
        },
        state: u,
        steps: d,
    };
}
const {
    schedule: bt,
    cancel: Pe,
    state: $t,
    steps: Tc,
} = og(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0);
let br;
function f2() {
    br = void 0;
}
const he = {
    now: () => (
        br === void 0 &&
        he.set(
            $t.isProcessing || Cn.useManualTiming
                ? $t.timestamp
                : performance.now(),
        ),
        br
    ),
    set: (n) => {
        ((br = n), queueMicrotask(f2));
    },
},
    ug = (n) => (a) => typeof a == "string" && a.startsWith(n),
    Nf = ug("--"),
    d2 = ug("var(--"),
    Rf = (n) => (d2(n) ? h2.test(n.split("/*")[0].trim()) : !1),
    h2 =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Aa = {
        test: (n) => typeof n == "number",
        parse: parseFloat,
        transform: (n) => n,
    },
    kl = { ...Aa, transform: (n) => an(0, 1, n) },
    mr = { ...Aa, default: 1 },
    Rl = (n) => Math.round(n * 1e5) / 1e5,
    Of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function m2(n) {
    return n == null;
}
const p2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    zf = (n, a) => (s) =>
        !!(
            (typeof s == "string" && p2.test(s) && s.startsWith(n)) ||
            (a && !m2(s) && Object.prototype.hasOwnProperty.call(s, a))
        ),
    cg = (n, a, s) => (r) => {
        if (typeof r != "string") return r;
        const [u, f, d, m] = r.match(Of);
        return {
            [n]: parseFloat(u),
            [a]: parseFloat(f),
            [s]: parseFloat(d),
            alpha: m !== void 0 ? parseFloat(m) : 1,
        };
    },
    y2 = (n) => an(0, 255, n),
    wc = { ...Aa, transform: (n) => Math.round(y2(n)) },
    wi = {
        test: zf("rgb", "red"),
        parse: cg("red", "green", "blue"),
        transform: ({ red: n, green: a, blue: s, alpha: r = 1 }) =>
            "rgba(" +
            wc.transform(n) +
            ", " +
            wc.transform(a) +
            ", " +
            wc.transform(s) +
            ", " +
            Rl(kl.transform(r)) +
            ")",
    };
function g2(n) {
    let a = "",
        s = "",
        r = "",
        u = "";
    return (
        n.length > 5
            ? ((a = n.substring(1, 3)),
                (s = n.substring(3, 5)),
                (r = n.substring(5, 7)),
                (u = n.substring(7, 9)))
            : ((a = n.substring(1, 2)),
                (s = n.substring(2, 3)),
                (r = n.substring(3, 4)),
                (u = n.substring(4, 5)),
                (a += a),
                (s += s),
                (r += r),
                (u += u)),
        {
            red: parseInt(a, 16),
            green: parseInt(s, 16),
            blue: parseInt(r, 16),
            alpha: u ? parseInt(u, 16) / 255 : 1,
        }
    );
}
const Gc = { test: zf("#"), parse: g2, transform: wi.transform },
    Fl = (n) => ({
        test: (a) =>
            typeof a == "string" && a.endsWith(n) && a.split(" ").length === 1,
        parse: parseFloat,
        transform: (a) => `${a}${n}`,
    }),
    Jn = Fl("deg"),
    nn = Fl("%"),
    lt = Fl("px"),
    v2 = Fl("vh"),
    x2 = Fl("vw"),
    p0 = {
        ...nn,
        parse: (n) => nn.parse(n) / 100,
        transform: (n) => nn.transform(n * 100),
    },
    pa = {
        test: zf("hsl", "hue"),
        parse: cg("hue", "saturation", "lightness"),
        transform: ({ hue: n, saturation: a, lightness: s, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(n) +
            ", " +
            nn.transform(Rl(a)) +
            ", " +
            nn.transform(Rl(s)) +
            ", " +
            Rl(kl.transform(r)) +
            ")",
    },
    qt = {
        test: (n) => wi.test(n) || Gc.test(n) || pa.test(n),
        parse: (n) =>
            wi.test(n) ? wi.parse(n) : pa.test(n) ? pa.parse(n) : Gc.parse(n),
        transform: (n) =>
            typeof n == "string"
                ? n
                : n.hasOwnProperty("red")
                    ? wi.transform(n)
                    : pa.transform(n),
        getAnimatableNone: (n) => {
            const a = qt.parse(n);
            return ((a.alpha = 0), qt.transform(a));
        },
    },
    b2 =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function S2(n) {
    var a, s;
    return (
        isNaN(n) &&
        typeof n == "string" &&
        (((a = n.match(Of)) == null ? void 0 : a.length) || 0) +
        (((s = n.match(b2)) == null ? void 0 : s.length) || 0) >
        0
    );
}
const fg = "number",
    dg = "color",
    T2 = "var",
    w2 = "var(",
    y0 = "${}",
    C2 =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Hl(n) {
    const a = n.toString(),
        s = [],
        r = { color: [], number: [], var: [] },
        u = [];
    let f = 0;
    const m = a
        .replace(
            C2,
            (h) => (
                qt.test(h)
                    ? (r.color.push(f), u.push(dg), s.push(qt.parse(h)))
                    : h.startsWith(w2)
                        ? (r.var.push(f), u.push(T2), s.push(h))
                        : (r.number.push(f), u.push(fg), s.push(parseFloat(h))),
                ++f,
                y0
            ),
        )
        .split(y0);
    return { values: s, split: m, indexes: r, types: u };
}
function hg(n) {
    return Hl(n).values;
}
function mg(n) {
    const { split: a, types: s } = Hl(n),
        r = a.length;
    return (u) => {
        let f = "";
        for (let d = 0; d < r; d++)
            if (((f += a[d]), u[d] !== void 0)) {
                const m = s[d];
                m === fg
                    ? (f += Rl(u[d]))
                    : m === dg
                        ? (f += qt.transform(u[d]))
                        : (f += u[d]);
            }
        return f;
    };
}
const A2 = (n) =>
    typeof n == "number" ? 0 : qt.test(n) ? qt.getAnimatableNone(n) : n;
function j2(n) {
    const a = hg(n);
    return mg(n)(a.map(A2));
}
const ti = {
    test: S2,
    parse: hg,
    createTransformer: mg,
    getAnimatableNone: j2,
};
function Cc(n, a, s) {
    return (
        s < 0 && (s += 1),
        s > 1 && (s -= 1),
        s < 1 / 6
            ? n + (a - n) * 6 * s
            : s < 1 / 2
                ? a
                : s < 2 / 3
                    ? n + (a - n) * (2 / 3 - s) * 6
                    : n
    );
}
function E2({ hue: n, saturation: a, lightness: s, alpha: r }) {
    ((n /= 360), (a /= 100), (s /= 100));
    let u = 0,
        f = 0,
        d = 0;
    if (!a) u = f = d = s;
    else {
        const m = s < 0.5 ? s * (1 + a) : s + a - s * a,
            h = 2 * s - m;
        ((u = Cc(h, m, n + 1 / 3)),
            (f = Cc(h, m, n)),
            (d = Cc(h, m, n - 1 / 3)));
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: r,
    };
}
function jr(n, a) {
    return (s) => (s > 0 ? a : n);
}
const Nt = (n, a, s) => n + (a - n) * s,
    Ac = (n, a, s) => {
        const r = n * n,
            u = s * (a * a - r) + r;
        return u < 0 ? 0 : Math.sqrt(u);
    },
    M2 = [Gc, wi, pa],
    D2 = (n) => M2.find((a) => a.test(n));
function g0(n) {
    const a = D2(n);
    if (!a) return !1;
    let s = a.parse(n);
    return (a === pa && (s = E2(s)), s);
}
const v0 = (n, a) => {
    const s = g0(n),
        r = g0(a);
    if (!s || !r) return jr(n, a);
    const u = { ...s };
    return (f) => (
        (u.red = Ac(s.red, r.red, f)),
        (u.green = Ac(s.green, r.green, f)),
        (u.blue = Ac(s.blue, r.blue, f)),
        (u.alpha = Nt(s.alpha, r.alpha, f)),
        wi.transform(u)
    );
},
    Xc = new Set(["none", "hidden"]);
function N2(n, a) {
    return Xc.has(n) ? (s) => (s <= 0 ? n : a) : (s) => (s >= 1 ? a : n);
}
function R2(n, a) {
    return (s) => Nt(n, a, s);
}
function _f(n) {
    return typeof n == "number"
        ? R2
        : typeof n == "string"
            ? Rf(n)
                ? jr
                : qt.test(n)
                    ? v0
                    : _2
            : Array.isArray(n)
                ? pg
                : typeof n == "object"
                    ? qt.test(n)
                        ? v0
                        : O2
                    : jr;
}
function pg(n, a) {
    const s = [...n],
        r = s.length,
        u = n.map((f, d) => _f(f)(f, a[d]));
    return (f) => {
        for (let d = 0; d < r; d++) s[d] = u[d](f);
        return s;
    };
}
function O2(n, a) {
    const s = { ...n, ...a },
        r = {};
    for (const u in s)
        n[u] !== void 0 && a[u] !== void 0 && (r[u] = _f(n[u])(n[u], a[u]));
    return (u) => {
        for (const f in r) s[f] = r[f](u);
        return s;
    };
}
function z2(n, a) {
    const s = [],
        r = { color: 0, var: 0, number: 0 };
    for (let u = 0; u < a.values.length; u++) {
        const f = a.types[u],
            d = n.indexes[f][r[f]],
            m = n.values[d] ?? 0;
        ((s[u] = m), r[f]++);
    }
    return s;
}
const _2 = (n, a) => {
    const s = ti.createTransformer(a),
        r = Hl(n),
        u = Hl(a);
    return r.indexes.var.length === u.indexes.var.length &&
        r.indexes.color.length === u.indexes.color.length &&
        r.indexes.number.length >= u.indexes.number.length
        ? (Xc.has(n) && !u.values.length) || (Xc.has(a) && !r.values.length)
            ? N2(n, a)
            : Ql(pg(z2(r, u), u.values), s)
        : jr(n, a);
};
function yg(n, a, s) {
    return typeof n == "number" && typeof a == "number" && typeof s == "number"
        ? Nt(n, a, s)
        : _f(n)(n, a);
}
const V2 = (n) => {
    const a = ({ timestamp: s }) => n(s);
    return {
        start: (s = !0) => bt.update(a, s),
        stop: () => Pe(a),
        now: () => ($t.isProcessing ? $t.timestamp : he.now()),
    };
},
    gg = (n, a, s = 10) => {
        let r = "";
        const u = Math.max(Math.round(a / s), 2);
        for (let f = 0; f < u; f++)
            r += Math.round(n(f / (u - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
    },
    Er = 2e4;
function Vf(n) {
    let a = 0;
    const s = 50;
    let r = n.next(a);
    for (; !r.done && a < Er;) ((a += s), (r = n.next(a)));
    return a >= Er ? 1 / 0 : a;
}
function B2(n, a = 100, s) {
    const r = s({ ...n, keyframes: [0, a] }),
        u = Math.min(Vf(r), Er);
    return {
        type: "keyframes",
        ease: (f) => r.next(u * f).value / a,
        duration: en(u),
    };
}
const L2 = 5;
function vg(n, a, s) {
    const r = Math.max(a - L2, 0);
    return Ef(s - n(r), a - r);
}
const zt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
},
    jc = 0.001;
function U2({
    duration: n = zt.duration,
    bounce: a = zt.bounce,
    velocity: s = zt.velocity,
    mass: r = zt.mass,
}) {
    let u,
        f,
        d = 1 - a;
    ((d = an(zt.minDamping, zt.maxDamping, d)),
        (n = an(zt.minDuration, zt.maxDuration, en(n))),
        d < 1
            ? ((u = (y) => {
                const p = y * d,
                    b = p * n,
                    S = p - s,
                    j = Kc(y, d),
                    M = Math.exp(-b);
                return jc - (S / j) * M;
            }),
                (f = (y) => {
                    const b = y * d * n,
                        S = b * s + s,
                        j = Math.pow(d, 2) * Math.pow(y, 2) * n,
                        M = Math.exp(-b),
                        H = Kc(Math.pow(y, 2), d);
                    return ((-u(y) + jc > 0 ? -1 : 1) * ((S - j) * M)) / H;
                }))
            : ((u = (y) => {
                const p = Math.exp(-y * n),
                    b = (y - s) * n + 1;
                return -jc + p * b;
            }),
                (f = (y) => {
                    const p = Math.exp(-y * n),
                        b = (s - y) * (n * n);
                    return p * b;
                })));
    const m = 5 / n,
        h = H2(u, f, m);
    if (((n = tn(n)), isNaN(h)))
        return { stiffness: zt.stiffness, damping: zt.damping, duration: n };
    {
        const y = Math.pow(h, 2) * r;
        return { stiffness: y, damping: d * 2 * Math.sqrt(r * y), duration: n };
    }
}
const k2 = 12;
function H2(n, a, s) {
    let r = s;
    for (let u = 1; u < k2; u++) r = r - n(r) / a(r);
    return r;
}
function Kc(n, a) {
    return n * Math.sqrt(1 - a * a);
}
const q2 = ["duration", "bounce"],
    Y2 = ["stiffness", "damping", "mass"];
function x0(n, a) {
    return a.some((s) => n[s] !== void 0);
}
function G2(n) {
    let a = {
        velocity: zt.velocity,
        stiffness: zt.stiffness,
        damping: zt.damping,
        mass: zt.mass,
        isResolvedFromDuration: !1,
        ...n,
    };
    if (!x0(n, Y2) && x0(n, q2))
        if (n.visualDuration) {
            const s = n.visualDuration,
                r = (2 * Math.PI) / (s * 1.2),
                u = r * r,
                f = 2 * an(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            a = { ...a, mass: zt.mass, stiffness: u, damping: f };
        } else {
            const s = U2(n);
            ((a = { ...a, ...s, mass: zt.mass }),
                (a.isResolvedFromDuration = !0));
        }
    return a;
}
function Mr(n = zt.visualDuration, a = zt.bounce) {
    const s =
        typeof n != "object"
            ? { visualDuration: n, keyframes: [0, 1], bounce: a }
            : n;
    let { restSpeed: r, restDelta: u } = s;
    const f = s.keyframes[0],
        d = s.keyframes[s.keyframes.length - 1],
        m = { done: !1, value: f },
        {
            stiffness: h,
            damping: y,
            mass: p,
            duration: b,
            velocity: S,
            isResolvedFromDuration: j,
        } = G2({ ...s, velocity: -en(s.velocity || 0) }),
        M = S || 0,
        H = y / (2 * Math.sqrt(h * p)),
        V = d - f,
        U = en(Math.sqrt(h / p)),
        O = Math.abs(V) < 5;
    (r || (r = O ? zt.restSpeed.granular : zt.restSpeed.default),
        u || (u = O ? zt.restDelta.granular : zt.restDelta.default));
    let G;
    if (H < 1) {
        const z = Kc(U, H);
        G = (P) => {
            const J = Math.exp(-H * U * P);
            return (
                d -
                J *
                (((M + H * U * V) / z) * Math.sin(z * P) +
                    V * Math.cos(z * P))
            );
        };
    } else if (H === 1) G = (z) => d - Math.exp(-U * z) * (V + (M + U * V) * z);
    else {
        const z = U * Math.sqrt(H * H - 1);
        G = (P) => {
            const J = Math.exp(-H * U * P),
                Z = Math.min(z * P, 300);
            return (
                d -
                (J * ((M + H * U * V) * Math.sinh(Z) + z * V * Math.cosh(Z))) /
                z
            );
        };
    }
    const K = {
        calculatedDuration: (j && b) || null,
        next: (z) => {
            const P = G(z);
            if (j) m.done = z >= b;
            else {
                let J = z === 0 ? M : 0;
                H < 1 && (J = z === 0 ? tn(M) : vg(G, z, P));
                const Z = Math.abs(J) <= r,
                    st = Math.abs(d - P) <= u;
                m.done = Z && st;
            }
            return ((m.value = m.done ? d : P), m);
        },
        toString: () => {
            const z = Math.min(Vf(K), Er),
                P = gg((J) => K.next(z * J).value, z, 30);
            return z + "ms " + P;
        },
        toTransition: () => { },
    };
    return K;
}
Mr.applyToOptions = (n) => {
    const a = B2(n, 100, Mr);
    return (
        (n.ease = a.ease),
        (n.duration = tn(a.duration)),
        (n.type = "keyframes"),
        n
    );
};
function Pc({
    keyframes: n,
    velocity: a = 0,
    power: s = 0.8,
    timeConstant: r = 325,
    bounceDamping: u = 10,
    bounceStiffness: f = 500,
    modifyTarget: d,
    min: m,
    max: h,
    restDelta: y = 0.5,
    restSpeed: p,
}) {
    const b = n[0],
        S = { done: !1, value: b },
        j = (Z) => (m !== void 0 && Z < m) || (h !== void 0 && Z > h),
        M = (Z) =>
            m === void 0
                ? h
                : h === void 0 || Math.abs(m - Z) < Math.abs(h - Z)
                    ? m
                    : h;
    let H = s * a;
    const V = b + H,
        U = d === void 0 ? V : d(V);
    U !== V && (H = U - b);
    const O = (Z) => -H * Math.exp(-Z / r),
        G = (Z) => U + O(Z),
        K = (Z) => {
            const st = O(Z),
                jt = G(Z);
            ((S.done = Math.abs(st) <= y), (S.value = S.done ? U : jt));
        };
    let z, P;
    const J = (Z) => {
        j(S.value) &&
            ((z = Z),
                (P = Mr({
                    keyframes: [S.value, M(S.value)],
                    velocity: vg(G, Z, S.value),
                    damping: u,
                    stiffness: f,
                    restDelta: y,
                    restSpeed: p,
                })));
    };
    return (
        J(0),
        {
            calculatedDuration: null,
            next: (Z) => {
                let st = !1;
                return (
                    !P && z === void 0 && ((st = !0), K(Z), J(Z)),
                    z !== void 0 && Z >= z ? P.next(Z - z) : (!st && K(Z), S)
                );
            },
        }
    );
}
function X2(n, a, s) {
    const r = [],
        u = s || Cn.mix || yg,
        f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let m = u(n[d], n[d + 1]);
        if (a) {
            const h = Array.isArray(a) ? a[d] || me : a;
            m = Ql(h, m);
        }
        r.push(m);
    }
    return r;
}
function Bf(n, a, { clamp: s = !0, ease: r, mixer: u } = {}) {
    const f = n.length;
    if ((Ul(f === a.length), f === 1)) return () => a[0];
    if (f === 2 && a[0] === a[1]) return () => a[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && ((n = [...n].reverse()), (a = [...a].reverse()));
    const m = X2(a, r, u),
        h = m.length,
        y = (p) => {
            if (d && p < n[0]) return a[0];
            let b = 0;
            if (h > 1) for (; b < n.length - 2 && !(p < n[b + 1]); b++);
            const S = Ta(n[b], n[b + 1], p);
            return m[b](S);
        };
    return s ? (p) => y(an(n[0], n[f - 1], p)) : y;
}
function K2(n, a) {
    const s = n[n.length - 1];
    for (let r = 1; r <= a; r++) {
        const u = Ta(0, a, r);
        n.push(Nt(s, 1, u));
    }
}
function xg(n) {
    const a = [0];
    return (K2(a, n.length - 1), a);
}
function P2(n, a) {
    return n.map((s) => s * a);
}
function Q2(n, a) {
    return n.map(() => a || sg).splice(0, n.length - 1);
}
function Ol({
    duration: n = 300,
    keyframes: a,
    times: s,
    ease: r = "easeInOut",
}) {
    const u = s2(r) ? r.map(m0) : m0(r),
        f = { done: !1, value: a[0] },
        d = P2(s && s.length === a.length ? s : xg(a), n),
        m = Bf(d, a, { ease: Array.isArray(u) ? u : Q2(a, u) });
    return {
        calculatedDuration: n,
        next: (h) => ((f.value = m(h)), (f.done = h >= n), f),
    };
}
const Z2 = (n) => n !== null;
function Lf(n, { repeat: a, repeatType: s = "loop" }, r, u = 1) {
    const f = n.filter(Z2),
        m = u < 0 || (a && s !== "loop" && a % 2 === 1) ? 0 : f.length - 1;
    return !m || r === void 0 ? f[m] : r;
}
const F2 = { decay: Pc, inertia: Pc, tween: Ol, keyframes: Ol, spring: Mr };
function bg(n) {
    typeof n.type == "string" && (n.type = F2[n.type]);
}
class Uf {
    constructor() {
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((a) => {
            this.resolve = a;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    then(a, s) {
        return this.finished.then(a, s);
    }
}
const $2 = (n) => n / 100;
class kf extends Uf {
    constructor(a) {
        (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
                var r, u;
                const { motionValue: s } = this.options;
                (s && s.updatedAt !== he.now() && this.tick(he.now()),
                    (this.isStopped = !0),
                    this.state !== "idle" &&
                    (this.teardown(),
                        (u = (r = this.options).onStop) == null || u.call(r)));
            }),
            (this.options = a),
            this.initAnimation(),
            this.play(),
            a.autoplay === !1 && this.pause());
    }
    initAnimation() {
        const { options: a } = this;
        bg(a);
        const {
            type: s = Ol,
            repeat: r = 0,
            repeatDelay: u = 0,
            repeatType: f,
            velocity: d = 0,
        } = a;
        let { keyframes: m } = a;
        const h = s || Ol;
        h !== Ol &&
            typeof m[0] != "number" &&
            ((this.mixKeyframes = Ql($2, yg(m[0], m[1]))), (m = [0, 100]));
        const y = h({ ...a, keyframes: m });
        (f === "mirror" &&
            (this.mirroredGenerator = h({
                ...a,
                keyframes: [...m].reverse(),
                velocity: -d,
            })),
            y.calculatedDuration === null && (y.calculatedDuration = Vf(y)));
        const { calculatedDuration: p } = y;
        ((this.calculatedDuration = p),
            (this.resolvedDuration = p + u),
            (this.totalDuration = this.resolvedDuration * (r + 1) - u),
            (this.generator = y));
    }
    updateTime(a) {
        const s = Math.round(a - this.startTime) * this.playbackSpeed;
        this.holdTime !== null
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = s);
    }
    tick(a, s = !1) {
        const {
            generator: r,
            totalDuration: u,
            mixKeyframes: f,
            mirroredGenerator: d,
            resolvedDuration: m,
            calculatedDuration: h,
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: y = 0,
            keyframes: p,
            repeat: b,
            repeatType: S,
            repeatDelay: j,
            type: M,
            onUpdate: H,
            finalKeyframe: V,
        } = this.options;
        (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, a))
            : this.speed < 0 &&
            (this.startTime = Math.min(a - u / this.speed, this.startTime)),
            s ? (this.currentTime = a) : this.updateTime(a));
        const U = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
            O = this.playbackSpeed >= 0 ? U < 0 : U > u;
        ((this.currentTime = Math.max(U, 0)),
            this.state === "finished" &&
            this.holdTime === null &&
            (this.currentTime = u));
        let G = this.currentTime,
            K = r;
        if (b) {
            const Z = Math.min(this.currentTime, u) / m;
            let st = Math.floor(Z),
                jt = Z % 1;
            (!jt && Z >= 1 && (jt = 1),
                jt === 1 && st--,
                (st = Math.min(st, b + 1)),
                !!(st % 2) &&
                (S === "reverse"
                    ? ((jt = 1 - jt), j && (jt -= j / m))
                    : S === "mirror" && (K = d)),
                (G = an(0, 1, jt) * m));
        }
        const z = O ? { done: !1, value: p[0] } : K.next(G);
        f && (z.value = f(z.value));
        let { done: P } = z;
        !O &&
            h !== null &&
            (P =
                this.playbackSpeed >= 0
                    ? this.currentTime >= u
                    : this.currentTime <= 0);
        const J =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && P));
        return (
            J && M !== Pc && (z.value = Lf(p, this.options, V, this.speed)),
            H && H(z.value),
            J && this.finish(),
            z
        );
    }
    then(a, s) {
        return this.finished.then(a, s);
    }
    get duration() {
        return en(this.calculatedDuration);
    }
    get time() {
        return en(this.currentTime);
    }
    set time(a) {
        var s;
        ((a = tn(a)),
            (this.currentTime = a),
            this.startTime === null ||
                this.holdTime !== null ||
                this.playbackSpeed === 0
                ? (this.holdTime = a)
                : this.driver &&
                (this.startTime = this.driver.now() - a / this.playbackSpeed),
            (s = this.driver) == null || s.start(!1));
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(a) {
        this.updateTime(he.now());
        const s = this.playbackSpeed !== a;
        ((this.playbackSpeed = a), s && (this.time = en(this.currentTime)));
    }
    play() {
        var u, f;
        if (this.isStopped) return;
        const { driver: a = V2, startTime: s } = this.options;
        (this.driver || (this.driver = a((d) => this.tick(d))),
            (f = (u = this.options).onPlay) == null || f.call(u));
        const r = this.driver.now();
        (this.state === "finished"
            ? (this.updateFinished(), (this.startTime = r))
            : this.holdTime !== null
                ? (this.startTime = r - this.holdTime)
                : this.startTime || (this.startTime = s ?? r),
            this.state === "finished" &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
    }
    pause() {
        ((this.state = "paused"),
            this.updateTime(he.now()),
            (this.holdTime = this.currentTime));
    }
    complete() {
        (this.state !== "running" && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
    }
    finish() {
        var a, s;
        (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            (s = (a = this.options).onComplete) == null || s.call(a));
    }
    cancel() {
        var a, s;
        ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            (s = (a = this.options).onCancel) == null || s.call(a));
    }
    teardown() {
        ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null));
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(a) {
        return ((this.startTime = 0), this.tick(a, !0));
    }
    attachTimeline(a) {
        var s;
        return (
            this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
                (this.options.ease = "linear"),
                this.initAnimation()),
            (s = this.driver) == null || s.stop(),
            a.observe(this)
        );
    }
}
function J2(n) {
    for (let a = 1; a < n.length; a++) n[a] ?? (n[a] = n[a - 1]);
}
const Ci = (n) => (n * 180) / Math.PI,
    Qc = (n) => {
        const a = Ci(Math.atan2(n[1], n[0]));
        return Zc(a);
    },
    W2 = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
        rotate: Qc,
        rotateZ: Qc,
        skewX: (n) => Ci(Math.atan(n[1])),
        skewY: (n) => Ci(Math.atan(n[2])),
        skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
    },
    Zc = (n) => ((n = n % 360), n < 0 && (n += 360), n),
    b0 = Qc,
    S0 = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
    T0 = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
    I2 = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: S0,
        scaleY: T0,
        scale: (n) => (S0(n) + T0(n)) / 2,
        rotateX: (n) => Zc(Ci(Math.atan2(n[6], n[5]))),
        rotateY: (n) => Zc(Ci(Math.atan2(-n[2], n[0]))),
        rotateZ: b0,
        rotate: b0,
        skewX: (n) => Ci(Math.atan(n[4])),
        skewY: (n) => Ci(Math.atan(n[1])),
        skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
    };
function Fc(n) {
    return n.includes("scale") ? 1 : 0;
}
function $c(n, a) {
    if (!n || n === "none") return Fc(a);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, u;
    if (s) ((r = I2), (u = s));
    else {
        const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((r = W2), (u = m));
    }
    if (!u) return Fc(a);
    const f = r[a],
        d = u[1].split(",").map(eS);
    return typeof f == "function" ? f(d) : d[f];
}
const tS = (n, a) => {
    const { transform: s = "none" } = getComputedStyle(n);
    return $c(s, a);
};
function eS(n) {
    return parseFloat(n.trim());
}
const ja = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
],
    Ea = new Set(ja),
    w0 = (n) => n === Aa || n === lt,
    nS = new Set(["x", "y", "z"]),
    iS = ja.filter((n) => !nS.has(n));
function aS(n) {
    const a = [];
    return (
        iS.forEach((s) => {
            const r = n.getValue(s);
            r !== void 0 &&
                (a.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
        }),
        a
    );
}
const Ai = {
    width: ({ x: n }, { paddingLeft: a = "0", paddingRight: s = "0" }) =>
        n.max - n.min - parseFloat(a) - parseFloat(s),
    height: ({ y: n }, { paddingTop: a = "0", paddingBottom: s = "0" }) =>
        n.max - n.min - parseFloat(a) - parseFloat(s),
    top: (n, { top: a }) => parseFloat(a),
    left: (n, { left: a }) => parseFloat(a),
    bottom: ({ y: n }, { top: a }) => parseFloat(a) + (n.max - n.min),
    right: ({ x: n }, { left: a }) => parseFloat(a) + (n.max - n.min),
    x: (n, { transform: a }) => $c(a, "x"),
    y: (n, { transform: a }) => $c(a, "y"),
};
Ai.translateX = Ai.x;
Ai.translateY = Ai.y;
const ji = new Set();
let Jc = !1,
    Wc = !1,
    Ic = !1;
function Sg() {
    if (Wc) {
        const n = Array.from(ji).filter((r) => r.needsMeasurement),
            a = new Set(n.map((r) => r.element)),
            s = new Map();
        (a.forEach((r) => {
            const u = aS(r);
            u.length && (s.set(r, u), r.render());
        }),
            n.forEach((r) => r.measureInitialState()),
            a.forEach((r) => {
                r.render();
                const u = s.get(r);
                u &&
                    u.forEach(([f, d]) => {
                        var m;
                        (m = r.getValue(f)) == null || m.set(d);
                    });
            }),
            n.forEach((r) => r.measureEndState()),
            n.forEach((r) => {
                r.suspendedScrollY !== void 0 &&
                    window.scrollTo(0, r.suspendedScrollY);
            }));
    }
    ((Wc = !1), (Jc = !1), ji.forEach((n) => n.complete(Ic)), ji.clear());
}
function Tg() {
    ji.forEach((n) => {
        (n.readKeyframes(), n.needsMeasurement && (Wc = !0));
    });
}
function lS() {
    ((Ic = !0), Tg(), Sg(), (Ic = !1));
}
class Hf {
    constructor(a, s, r, u, f, d = !1) {
        ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...a]),
            (this.onComplete = s),
            (this.name = r),
            (this.motionValue = u),
            (this.element = f),
            (this.isAsync = d));
    }
    scheduleResolve() {
        ((this.state = "scheduled"),
            this.isAsync
                ? (ji.add(this),
                    Jc || ((Jc = !0), bt.read(Tg), bt.resolveKeyframes(Sg)))
                : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: a,
            name: s,
            element: r,
            motionValue: u,
        } = this;
        if (a[0] === null) {
            const f = u == null ? void 0 : u.get(),
                d = a[a.length - 1];
            if (f !== void 0) a[0] = f;
            else if (r && s) {
                const m = r.readValue(s, d);
                m != null && (a[0] = m);
            }
            (a[0] === void 0 && (a[0] = d), u && f === void 0 && u.set(a[0]));
        }
        J2(a);
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(a = !1) {
        ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
            ji.delete(this));
    }
    cancel() {
        this.state === "scheduled" &&
            (ji.delete(this), (this.state = "pending"));
    }
    resume() {
        this.state === "pending" && this.scheduleResolve();
    }
}
const sS = (n) => n.startsWith("--");
function rS(n, a, s) {
    sS(a) ? n.style.setProperty(a, s) : (n.style[a] = s);
}
const wg = Af(() => window.ScrollTimeline !== void 0),
    oS = {};
function uS(n, a) {
    const s = Af(n);
    return () => oS[a] ?? s();
}
const Cg = uS(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
        return !1;
    }
    return !0;
}, "linearEasing"),
    Dl = ([n, a, s, r]) => `cubic-bezier(${n}, ${a}, ${s}, ${r})`,
    C0 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Dl([0, 0.65, 0.55, 1]),
        circOut: Dl([0.55, 0, 1, 0.45]),
        backIn: Dl([0.31, 0.01, 0.66, -0.59]),
        backOut: Dl([0.33, 1.53, 0.69, 0.99]),
    };
function Ag(n, a) {
    if (n)
        return typeof n == "function"
            ? Cg()
                ? gg(n, a)
                : "ease-out"
            : rg(n)
                ? Dl(n)
                : Array.isArray(n)
                    ? n.map((s) => Ag(s, a) || C0.easeOut)
                    : C0[n];
}
function cS(
    n,
    a,
    s,
    {
        delay: r = 0,
        duration: u = 300,
        repeat: f = 0,
        repeatType: d = "loop",
        ease: m = "easeOut",
        times: h,
    } = {},
    y = void 0,
) {
    const p = { [a]: s };
    h && (p.offset = h);
    const b = Ag(m, u);
    Array.isArray(b) && (p.easing = b);
    const S = {
        delay: r,
        duration: u,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal",
    };
    return (y && (S.pseudoElement = y), n.animate(p, S));
}
function jg(n) {
    return typeof n == "function" && "applyToOptions" in n;
}
function fS({ type: n, ...a }) {
    return jg(n) && Cg()
        ? n.applyToOptions(a)
        : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = "easeOut"), a);
}
class dS extends Uf {
    constructor(a) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), !a))
            return;
        const {
            element: s,
            name: r,
            keyframes: u,
            pseudoElement: f,
            allowFlatten: d = !1,
            finalKeyframe: m,
            onComplete: h,
        } = a;
        ((this.isPseudoElement = !!f),
            (this.allowFlatten = d),
            (this.options = a),
            Ul(typeof a.type != "string"));
        const y = fS(a);
        ((this.animation = cS(s, r, u, y, f)),
            y.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
                if (((this.finishedTime = this.time), !f)) {
                    const p = Lf(u, this.options, m, this.speed);
                    (this.updateMotionValue
                        ? this.updateMotionValue(p)
                        : rS(s, r, p),
                        this.animation.cancel());
                }
                (h == null || h(), this.notifyFinished());
            }));
    }
    play() {
        this.isStopped ||
            (this.animation.play(),
                this.state === "finished" && this.updateFinished());
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        var a, s;
        (s = (a = this.animation).finish) == null || s.call(a);
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch { }
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const { state: a } = this;
        a === "idle" ||
            a === "finished" ||
            (this.updateMotionValue
                ? this.updateMotionValue()
                : this.commitStyles(),
                this.isPseudoElement || this.cancel());
    }
    commitStyles() {
        var a, s;
        this.isPseudoElement ||
            (s = (a = this.animation).commitStyles) == null ||
            s.call(a);
    }
    get duration() {
        var s, r;
        const a =
            ((r =
                (s = this.animation.effect) == null
                    ? void 0
                    : s.getComputedTiming) == null
                ? void 0
                : r.call(s).duration) || 0;
        return en(Number(a));
    }
    get time() {
        return en(Number(this.animation.currentTime) || 0);
    }
    set time(a) {
        ((this.finishedTime = null), (this.animation.currentTime = tn(a)));
    }
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(a) {
        (a < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = a));
    }
    get state() {
        return this.finishedTime !== null
            ? "finished"
            : this.animation.playState;
    }
    get startTime() {
        return Number(this.animation.startTime);
    }
    set startTime(a) {
        this.animation.startTime = a;
    }
    attachTimeline({ timeline: a, observe: s }) {
        var r;
        return (
            this.allowFlatten &&
            ((r = this.animation.effect) == null ||
                r.updateTiming({ easing: "linear" })),
            (this.animation.onfinish = null),
            a && wg() ? ((this.animation.timeline = a), me) : s(this)
        );
    }
}
const Eg = { anticipate: ig, backInOut: ng, circInOut: lg };
function hS(n) {
    return n in Eg;
}
function mS(n) {
    typeof n.ease == "string" && hS(n.ease) && (n.ease = Eg[n.ease]);
}
const A0 = 10;
class pS extends dS {
    constructor(a) {
        (mS(a),
            bg(a),
            super(a),
            a.startTime && (this.startTime = a.startTime),
            (this.options = a));
    }
    updateMotionValue(a) {
        const {
            motionValue: s,
            onUpdate: r,
            onComplete: u,
            element: f,
            ...d
        } = this.options;
        if (!s) return;
        if (a !== void 0) {
            s.set(a);
            return;
        }
        const m = new kf({ ...d, autoplay: !1 }),
            h = tn(this.finishedTime ?? this.time);
        (s.setWithVelocity(m.sample(h - A0).value, m.sample(h).value, A0),
            m.stop());
    }
}
const j0 = (n, a) =>
    a === "zIndex"
        ? !1
        : !!(
            typeof n == "number" ||
            Array.isArray(n) ||
            (typeof n == "string" &&
                (ti.test(n) || n === "0") &&
                !n.startsWith("url("))
        );
function yS(n) {
    const a = n[0];
    if (n.length === 1) return !0;
    for (let s = 0; s < n.length; s++) if (n[s] !== a) return !0;
}
function gS(n, a, s, r) {
    const u = n[0];
    if (u === null) return !1;
    if (a === "display" || a === "visibility") return !0;
    const f = n[n.length - 1],
        d = j0(u, a),
        m = j0(f, a);
    return !d || !m ? !1 : yS(n) || ((s === "spring" || jg(s)) && r);
}
function tf(n) {
    ((n.duration = 0), n.type);
}
const vS = new Set(["opacity", "clipPath", "filter", "transform"]),
    xS = Af(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function bS(n) {
    var p;
    const {
        motionValue: a,
        name: s,
        repeatDelay: r,
        repeatType: u,
        damping: f,
        type: d,
    } = n;
    if (
        !(
            ((p = a == null ? void 0 : a.owner) == null
                ? void 0
                : p.current) instanceof HTMLElement
        )
    )
        return !1;
    const { onUpdate: h, transformTemplate: y } = a.owner.getProps();
    return (
        xS() &&
        s &&
        vS.has(s) &&
        (s !== "transform" || !y) &&
        !h &&
        !r &&
        u !== "mirror" &&
        f !== 0 &&
        d !== "inertia"
    );
}
const SS = 40;
class TS extends Uf {
    constructor({
        autoplay: a = !0,
        delay: s = 0,
        type: r = "keyframes",
        repeat: u = 0,
        repeatDelay: f = 0,
        repeatType: d = "loop",
        keyframes: m,
        name: h,
        motionValue: y,
        element: p,
        ...b
    }) {
        var M;
        (super(),
            (this.stop = () => {
                var H, V;
                (this._animation &&
                    (this._animation.stop(),
                        (H = this.stopTimeline) == null || H.call(this)),
                    (V = this.keyframeResolver) == null || V.cancel());
            }),
            (this.createdAt = he.now()));
        const S = {
            autoplay: a,
            delay: s,
            type: r,
            repeat: u,
            repeatDelay: f,
            repeatType: d,
            name: h,
            motionValue: y,
            element: p,
            ...b,
        },
            j = (p == null ? void 0 : p.KeyframeResolver) || Hf;
        ((this.keyframeResolver = new j(
            m,
            (H, V, U) => this.onKeyframesResolved(H, V, S, !U),
            h,
            y,
            p,
        )),
            (M = this.keyframeResolver) == null || M.scheduleResolve());
    }
    onKeyframesResolved(a, s, r, u) {
        this.keyframeResolver = void 0;
        const {
            name: f,
            type: d,
            velocity: m,
            delay: h,
            isHandoff: y,
            onUpdate: p,
        } = r;
        ((this.resolvedAt = he.now()),
            gS(a, f, d, m) ||
            ((Cn.instantAnimations || !h) && (p == null || p(Lf(a, r, s))),
                (a[0] = a[a.length - 1]),
                tf(r),
                (r.repeat = 0)));
        const S = {
            startTime: u
                ? this.resolvedAt
                    ? this.resolvedAt - this.createdAt > SS
                        ? this.resolvedAt
                        : this.createdAt
                    : this.createdAt
                : void 0,
            finalKeyframe: s,
            ...r,
            keyframes: a,
        },
            j =
                !y && bS(S)
                    ? new pS({ ...S, element: S.motionValue.owner.current })
                    : new kf(S);
        (j.finished.then(() => this.notifyFinished()).catch(me),
            this.pendingTimeline &&
            ((this.stopTimeline = j.attachTimeline(this.pendingTimeline)),
                (this.pendingTimeline = void 0)),
            (this._animation = j));
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished;
    }
    then(a, s) {
        return this.finished.finally(a).then(() => { });
    }
    get animation() {
        var a;
        return (
            this._animation ||
            ((a = this.keyframeResolver) == null || a.resume(), lS()),
            this._animation
        );
    }
    get duration() {
        return this.animation.duration;
    }
    get time() {
        return this.animation.time;
    }
    set time(a) {
        this.animation.time = a;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(a) {
        this.animation.speed = a;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(a) {
        return (
            this._animation
                ? (this.stopTimeline = this.animation.attachTimeline(a))
                : (this.pendingTimeline = a),
            () => this.stop()
        );
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        var a;
        (this._animation && this.animation.cancel(),
            (a = this.keyframeResolver) == null || a.cancel());
    }
}
const wS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function CS(n) {
    const a = wS.exec(n);
    if (!a) return [,];
    const [, s, r, u] = a;
    return [`--${s ?? r}`, u];
}
function Mg(n, a, s = 1) {
    const [r, u] = CS(n);
    if (!r) return;
    const f = window.getComputedStyle(a).getPropertyValue(r);
    if (f) {
        const d = f.trim();
        return Fy(d) ? parseFloat(d) : d;
    }
    return Rf(u) ? Mg(u, a, s + 1) : u;
}
function qf(n, a) {
    return (n == null ? void 0 : n[a]) ?? (n == null ? void 0 : n.default) ?? n;
}
const Dg = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ja,
]),
    AS = { test: (n) => n === "auto", parse: (n) => n },
    Ng = (n) => (a) => a.test(n),
    Rg = [Aa, lt, nn, Jn, x2, v2, AS],
    E0 = (n) => Rg.find(Ng(n));
function jS(n) {
    return typeof n == "number"
        ? n === 0
        : n !== null
            ? n === "none" || n === "0" || Jy(n)
            : !0;
}
const ES = new Set(["brightness", "contrast", "saturate", "opacity"]);
function MS(n) {
    const [a, s] = n.slice(0, -1).split("(");
    if (a === "drop-shadow") return n;
    const [r] = s.match(Of) || [];
    if (!r) return n;
    const u = s.replace(r, "");
    let f = ES.has(a) ? 1 : 0;
    return (r !== s && (f *= 100), a + "(" + f + u + ")");
}
const DS = /\b([a-z-]*)\(.*?\)/gu,
    ef = {
        ...ti,
        getAnimatableNone: (n) => {
            const a = n.match(DS);
            return a ? a.map(MS).join(" ") : n;
        },
    },
    M0 = { ...Aa, transform: Math.round },
    NS = {
        rotate: Jn,
        rotateX: Jn,
        rotateY: Jn,
        rotateZ: Jn,
        scale: mr,
        scaleX: mr,
        scaleY: mr,
        scaleZ: mr,
        skew: Jn,
        skewX: Jn,
        skewY: Jn,
        distance: lt,
        translateX: lt,
        translateY: lt,
        translateZ: lt,
        x: lt,
        y: lt,
        z: lt,
        perspective: lt,
        transformPerspective: lt,
        opacity: kl,
        originX: p0,
        originY: p0,
        originZ: lt,
    },
    Yf = {
        borderWidth: lt,
        borderTopWidth: lt,
        borderRightWidth: lt,
        borderBottomWidth: lt,
        borderLeftWidth: lt,
        borderRadius: lt,
        radius: lt,
        borderTopLeftRadius: lt,
        borderTopRightRadius: lt,
        borderBottomRightRadius: lt,
        borderBottomLeftRadius: lt,
        width: lt,
        maxWidth: lt,
        height: lt,
        maxHeight: lt,
        top: lt,
        right: lt,
        bottom: lt,
        left: lt,
        padding: lt,
        paddingTop: lt,
        paddingRight: lt,
        paddingBottom: lt,
        paddingLeft: lt,
        margin: lt,
        marginTop: lt,
        marginRight: lt,
        marginBottom: lt,
        marginLeft: lt,
        backgroundPositionX: lt,
        backgroundPositionY: lt,
        ...NS,
        zIndex: M0,
        fillOpacity: kl,
        strokeOpacity: kl,
        numOctaves: M0,
    },
    RS = {
        ...Yf,
        color: qt,
        backgroundColor: qt,
        outlineColor: qt,
        fill: qt,
        stroke: qt,
        borderColor: qt,
        borderTopColor: qt,
        borderRightColor: qt,
        borderBottomColor: qt,
        borderLeftColor: qt,
        filter: ef,
        WebkitFilter: ef,
    },
    Og = (n) => RS[n];
function zg(n, a) {
    let s = Og(n);
    return (
        s !== ef && (s = ti),
        s.getAnimatableNone ? s.getAnimatableNone(a) : void 0
    );
}
const OS = new Set(["auto", "none", "0"]);
function zS(n, a, s) {
    let r = 0,
        u;
    for (; r < n.length && !u;) {
        const f = n[r];
        (typeof f == "string" &&
            !OS.has(f) &&
            Hl(f).values.length &&
            (u = n[r]),
            r++);
    }
    if (u && s) for (const f of a) n[f] = zg(s, u);
}
class _S extends Hf {
    constructor(a, s, r, u, f) {
        super(a, s, r, u, f, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: a, element: s, name: r } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let h = 0; h < a.length; h++) {
            let y = a[h];
            if (typeof y == "string" && ((y = y.trim()), Rf(y))) {
                const p = Mg(y, s.current);
                (p !== void 0 && (a[h] = p),
                    h === a.length - 1 && (this.finalKeyframe = y));
            }
        }
        if ((this.resolveNoneKeyframes(), !Dg.has(r) || a.length !== 2)) return;
        const [u, f] = a,
            d = E0(u),
            m = E0(f);
        if (d !== m)
            if (w0(d) && w0(m))
                for (let h = 0; h < a.length; h++) {
                    const y = a[h];
                    typeof y == "string" && (a[h] = parseFloat(y));
                }
            else Ai[r] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: a, name: s } = this,
            r = [];
        for (let u = 0; u < a.length; u++)
            (a[u] === null || jS(a[u])) && r.push(u);
        r.length && zS(a, r, s);
    }
    measureInitialState() {
        const { element: a, unresolvedKeyframes: s, name: r } = this;
        if (!a || !a.current) return;
        (r === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = Ai[r](
                a.measureViewportBox(),
                window.getComputedStyle(a.current),
            )),
            (s[0] = this.measuredOrigin));
        const u = s[s.length - 1];
        u !== void 0 && a.getValue(r, u).jump(u, !1);
    }
    measureEndState() {
        var m;
        const { element: a, name: s, unresolvedKeyframes: r } = this;
        if (!a || !a.current) return;
        const u = a.getValue(s);
        u && u.jump(this.measuredOrigin, !1);
        const f = r.length - 1,
            d = r[f];
        ((r[f] = Ai[s](
            a.measureViewportBox(),
            window.getComputedStyle(a.current),
        )),
            d !== null &&
            this.finalKeyframe === void 0 &&
            (this.finalKeyframe = d),
            (m = this.removedTransforms) != null &&
            m.length &&
            this.removedTransforms.forEach(([h, y]) => {
                a.getValue(h).set(y);
            }),
            this.resolveNoneKeyframes());
    }
}
function _g(n, a, s) {
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
        const u = document.querySelectorAll(n);
        return u ? Array.from(u) : [];
    }
    return Array.from(n);
}
const Vg = (n, a) => (a && typeof n == "number" ? a.transform(n) : n);
function Gf(n) {
    return $y(n) && "offsetHeight" in n;
}
const D0 = 30,
    VS = (n) => !isNaN(parseFloat(n)),
    zl = { current: void 0 };
class BS {
    constructor(a, s = {}) {
        ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (r) => {
                var f;
                const u = he.now();
                if (
                    (this.updatedAt !== u && this.setPrevFrameValue(),
                        (this.prev = this.current),
                        this.setCurrent(r),
                        this.current !== this.prev &&
                        ((f = this.events.change) == null ||
                            f.notify(this.current),
                            this.dependents))
                )
                    for (const d of this.dependents) d.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(a),
            (this.owner = s.owner));
    }
    setCurrent(a) {
        ((this.current = a),
            (this.updatedAt = he.now()),
            this.canTrackVelocity === null &&
            a !== void 0 &&
            (this.canTrackVelocity = VS(this.current)));
    }
    setPrevFrameValue(a = this.current) {
        ((this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(a) {
        return this.on("change", a);
    }
    on(a, s) {
        this.events[a] || (this.events[a] = new jf());
        const r = this.events[a].add(s);
        return a === "change"
            ? () => {
                (r(),
                    bt.read(() => {
                        this.events.change.getSize() || this.stop();
                    }));
            }
            : r;
    }
    clearListeners() {
        for (const a in this.events) this.events[a].clear();
    }
    attach(a, s) {
        ((this.passiveEffect = a), (this.stopPassiveEffect = s));
    }
    set(a) {
        this.passiveEffect
            ? this.passiveEffect(a, this.updateAndNotify)
            : this.updateAndNotify(a);
    }
    setWithVelocity(a, s, r) {
        (this.set(s),
            (this.prev = void 0),
            (this.prevFrameValue = a),
            (this.prevUpdatedAt = this.updatedAt - r));
    }
    jump(a, s = !0) {
        (this.updateAndNotify(a),
            (this.prev = a),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            s && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
        var a;
        (a = this.events.change) == null || a.notify(this.current);
    }
    addDependent(a) {
        (this.dependents || (this.dependents = new Set()),
            this.dependents.add(a));
    }
    removeDependent(a) {
        this.dependents && this.dependents.delete(a);
    }
    get() {
        return (zl.current && zl.current.push(this), this.current);
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const a = he.now();
        if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            a - this.updatedAt > D0
        )
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, D0);
        return Ef(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            s,
        );
    }
    start(a) {
        return (
            this.stop(),
            new Promise((s) => {
                ((this.hasAnimated = !0),
                    (this.animation = a(s)),
                    this.events.animationStart &&
                    this.events.animationStart.notify());
            }).then(() => {
                (this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation());
            })
        );
    }
    stop() {
        (this.animation &&
            (this.animation.stop(),
                this.events.animationCancel &&
                this.events.animationCancel.notify()),
            this.clearAnimation());
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        var a, s;
        ((a = this.dependents) == null || a.clear(),
            (s = this.events.destroy) == null || s.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
    }
}
function Ke(n, a) {
    return new BS(n, a);
}
const { schedule: Xf } = og(queueMicrotask, !1),
    Ge = { x: !1, y: !1 };
function Bg() {
    return Ge.x || Ge.y;
}
function LS(n) {
    return n === "x" || n === "y"
        ? Ge[n]
            ? null
            : ((Ge[n] = !0),
                () => {
                    Ge[n] = !1;
                })
        : Ge.x || Ge.y
            ? null
            : ((Ge.x = Ge.y = !0),
                () => {
                    Ge.x = Ge.y = !1;
                });
}
function Lg(n, a) {
    const s = _g(n),
        r = new AbortController(),
        u = { passive: !0, ...a, signal: r.signal };
    return [s, u, () => r.abort()];
}
function N0(n) {
    return !(n.pointerType === "touch" || Bg());
}
function US(n, a, s = {}) {
    const [r, u, f] = Lg(n, s),
        d = (m) => {
            if (!N0(m)) return;
            const { target: h } = m,
                y = a(h, m);
            if (typeof y != "function" || !h) return;
            const p = (b) => {
                N0(b) && (y(b), h.removeEventListener("pointerleave", p));
            };
            h.addEventListener("pointerleave", p, u);
        };
    return (
        r.forEach((m) => {
            m.addEventListener("pointerenter", d, u);
        }),
        f
    );
}
const Ug = (n, a) => (a ? (n === a ? !0 : Ug(n, a.parentElement)) : !1),
    Kf = (n) =>
        n.pointerType === "mouse"
            ? typeof n.button != "number" || n.button <= 0
            : n.isPrimary !== !1,
    kS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function HS(n) {
    return kS.has(n.tagName) || n.tabIndex !== -1;
}
const Sr = new WeakSet();
function R0(n) {
    return (a) => {
        a.key === "Enter" && n(a);
    };
}
function Ec(n, a) {
    n.dispatchEvent(
        new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 }),
    );
}
const qS = (n, a) => {
    const s = n.currentTarget;
    if (!s) return;
    const r = R0(() => {
        if (Sr.has(s)) return;
        Ec(s, "down");
        const u = R0(() => {
            Ec(s, "up");
        }),
            f = () => Ec(s, "cancel");
        (s.addEventListener("keyup", u, a), s.addEventListener("blur", f, a));
    });
    (s.addEventListener("keydown", r, a),
        s.addEventListener(
            "blur",
            () => s.removeEventListener("keydown", r),
            a,
        ));
};
function O0(n) {
    return Kf(n) && !Bg();
}
function YS(n, a, s = {}) {
    const [r, u, f] = Lg(n, s),
        d = (m) => {
            const h = m.currentTarget;
            if (!O0(m)) return;
            Sr.add(h);
            const y = a(h, m),
                p = (j, M) => {
                    (window.removeEventListener("pointerup", b),
                        window.removeEventListener("pointercancel", S),
                        Sr.has(h) && Sr.delete(h),
                        O0(j) &&
                        typeof y == "function" &&
                        y(j, { success: M }));
                },
                b = (j) => {
                    p(
                        j,
                        h === window ||
                        h === document ||
                        s.useGlobalTarget ||
                        Ug(h, j.target),
                    );
                },
                S = (j) => {
                    p(j, !1);
                };
            (window.addEventListener("pointerup", b, u),
                window.addEventListener("pointercancel", S, u));
        };
    return (
        r.forEach((m) => {
            ((s.useGlobalTarget ? window : m).addEventListener(
                "pointerdown",
                d,
                u,
            ),
                Gf(m) &&
                (m.addEventListener("focus", (y) => qS(y, u)),
                    !HS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
        }),
        f
    );
}
function Pf(n) {
    return $y(n) && "ownerSVGElement" in n;
}
const Tr = new WeakMap();
let Wn;
const kg = (n, a, s) => (r, u) =>
    u && u[0]
        ? u[0][n + "Size"]
        : Pf(r) && "getBBox" in r
            ? r.getBBox()[a]
            : r[s],
    GS = kg("inline", "width", "offsetWidth"),
    XS = kg("block", "height", "offsetHeight");
function KS({ target: n, borderBoxSize: a }) {
    var s;
    (s = Tr.get(n)) == null ||
        s.forEach((r) => {
            r(n, {
                get width() {
                    return GS(n, a);
                },
                get height() {
                    return XS(n, a);
                },
            });
        });
}
function PS(n) {
    n.forEach(KS);
}
function QS() {
    typeof ResizeObserver > "u" || (Wn = new ResizeObserver(PS));
}
function ZS(n, a) {
    Wn || QS();
    const s = _g(n);
    return (
        s.forEach((r) => {
            let u = Tr.get(r);
            (u || ((u = new Set()), Tr.set(r, u)),
                u.add(a),
                Wn == null || Wn.observe(r));
        }),
        () => {
            s.forEach((r) => {
                const u = Tr.get(r);
                (u == null || u.delete(a),
                    (u != null && u.size) || Wn == null || Wn.unobserve(r));
            });
        }
    );
}
const wr = new Set();
let ya;
function FS() {
    ((ya = () => {
        const n = {
            get width() {
                return window.innerWidth;
            },
            get height() {
                return window.innerHeight;
            },
        };
        wr.forEach((a) => a(n));
    }),
        window.addEventListener("resize", ya));
}
function $S(n) {
    return (
        wr.add(n),
        ya || FS(),
        () => {
            (wr.delete(n),
                !wr.size &&
                typeof ya == "function" &&
                (window.removeEventListener("resize", ya), (ya = void 0)));
        }
    );
}
function JS(n, a) {
    return typeof n == "function" ? $S(n) : ZS(n, a);
}
function Hg(n, a) {
    let s;
    const r = () => {
        const { currentTime: u } = a,
            d = (u === null ? 0 : u.value) / 100;
        (s !== d && n(d), (s = d));
    };
    return (bt.preUpdate(r, !0), () => Pe(r));
}
function WS(n) {
    return Pf(n) && n.tagName === "svg";
}
function IS(...n) {
    const a = !Array.isArray(n[0]),
        s = a ? 0 : -1,
        r = n[0 + s],
        u = n[1 + s],
        f = n[2 + s],
        d = n[3 + s],
        m = Bf(u, f, d);
    return a ? m(r) : m;
}
const Jt = (n) => !!(n && n.getVelocity),
    t3 = [...Rg, qt, ti],
    e3 = (n) => t3.find(Ng(n)),
    qr = _.createContext({
        transformPagePoint: (n) => n,
        isStatic: !1,
        reducedMotion: "never",
    });
class n3 extends _.Component {
    getSnapshotBeforeUpdate(a) {
        const s = this.props.childRef.current;
        if (s && a.isPresent && !this.props.isPresent) {
            const r = s.offsetParent,
                u = (Gf(r) && r.offsetWidth) || 0,
                f = this.props.sizeRef.current;
            ((f.height = s.offsetHeight || 0),
                (f.width = s.offsetWidth || 0),
                (f.top = s.offsetTop),
                (f.left = s.offsetLeft),
                (f.right = u - f.width - f.left));
        }
        return null;
    }
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function i3({ children: n, isPresent: a, anchorX: s, root: r }) {
    const u = _.useId(),
        f = _.useRef(null),
        d = _.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
        { nonce: m } = _.useContext(qr);
    return (
        _.useInsertionEffect(() => {
            const {
                width: h,
                height: y,
                top: p,
                left: b,
                right: S,
            } = d.current;
            if (a || !f.current || !h || !y) return;
            const j = s === "left" ? `left: ${b}` : `right: ${S}`;
            f.current.dataset.motionPopId = u;
            const M = document.createElement("style");
            m && (M.nonce = m);
            const H = r ?? document.head;
            return (
                H.appendChild(M),
                M.sheet &&
                M.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${y}px !important;
            ${j}px !important;
            top: ${p}px !important;
          }
        `),
                () => {
                    H.contains(M) && H.removeChild(M);
                }
            );
        }, [a]),
        v.jsx(n3, {
            isPresent: a,
            childRef: f,
            sizeRef: d,
            children: _.cloneElement(n, { ref: f }),
        })
    );
}
const a3 = ({
    children: n,
    initial: a,
    isPresent: s,
    onExitComplete: r,
    custom: u,
    presenceAffectsLayout: f,
    mode: d,
    anchorX: m,
    root: h,
}) => {
    const y = Di(l3),
        p = _.useId();
    let b = !0,
        S = _.useMemo(
            () => (
                (b = !1),
                {
                    id: p,
                    initial: a,
                    isPresent: s,
                    custom: u,
                    onExitComplete: (j) => {
                        y.set(j, !0);
                        for (const M of y.values()) if (!M) return;
                        r && r();
                    },
                    register: (j) => (y.set(j, !1), () => y.delete(j)),
                }
            ),
            [s, y, r],
        );
    return (
        f && b && (S = { ...S }),
        _.useMemo(() => {
            y.forEach((j, M) => y.set(M, !1));
        }, [s]),
        _.useEffect(() => {
            !s && !y.size && r && r();
        }, [s]),
        d === "popLayout" &&
        (n = v.jsx(i3, { isPresent: s, anchorX: m, root: h, children: n })),
        v.jsx(Hr.Provider, { value: S, children: n })
    );
};
function l3() {
    return new Map();
}
function qg(n = !0) {
    const a = _.useContext(Hr);
    if (a === null) return [!0, null];
    const { isPresent: s, onExitComplete: r, register: u } = a,
        f = _.useId();
    _.useEffect(() => {
        if (n) return u(f);
    }, [n]);
    const d = _.useCallback(() => n && r && r(f), [f, r, n]);
    return !s && r ? [!1, d] : [!0];
}
const pr = (n) => n.key || "";
function z0(n) {
    const a = [];
    return (
        _.Children.forEach(n, (s) => {
            _.isValidElement(s) && a.push(s);
        }),
        a
    );
}
const Sn = ({
    children: n,
    custom: a,
    initial: s = !0,
    onExitComplete: r,
    presenceAffectsLayout: u = !0,
    mode: f = "sync",
    propagate: d = !1,
    anchorX: m = "left",
    root: h,
}) => {
    const [y, p] = qg(d),
        b = _.useMemo(() => z0(n), [n]),
        S = d && !y ? [] : b.map(pr),
        j = _.useRef(!0),
        M = _.useRef(b),
        H = Di(() => new Map()),
        [V, U] = _.useState(b),
        [O, G] = _.useState(b);
    Pl(() => {
        ((j.current = !1), (M.current = b));
        for (let P = 0; P < O.length; P++) {
            const J = pr(O[P]);
            S.includes(J) ? H.delete(J) : H.get(J) !== !0 && H.set(J, !1);
        }
    }, [O, S.length, S.join("-")]);
    const K = [];
    if (b !== V) {
        let P = [...b];
        for (let J = 0; J < O.length; J++) {
            const Z = O[J],
                st = pr(Z);
            S.includes(st) || (P.splice(J, 0, Z), K.push(Z));
        }
        return (f === "wait" && K.length && (P = K), G(z0(P)), U(b), null);
    }
    const { forceRender: z } = _.useContext(Sf);
    return v.jsx(v.Fragment, {
        children: O.map((P) => {
            const J = pr(P),
                Z = d && !y ? !1 : b === O || S.includes(J),
                st = () => {
                    if (H.has(J)) H.set(J, !0);
                    else return;
                    let jt = !0;
                    (H.forEach((Ut) => {
                        Ut || (jt = !1);
                    }),
                        jt &&
                        (z == null || z(),
                            G(M.current),
                            d && (p == null || p()),
                            r && r()));
                };
            return v.jsx(
                a3,
                {
                    isPresent: Z,
                    initial: !j.current || s ? void 0 : !1,
                    custom: a,
                    presenceAffectsLayout: u,
                    mode: f,
                    root: h,
                    onExitComplete: Z ? void 0 : st,
                    anchorX: m,
                    children: P,
                },
                J,
            );
        }),
    });
},
    Yg = _.createContext({ strict: !1 }),
    _0 = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    wa = {};
for (const n in _0) wa[n] = { isEnabled: (a) => _0[n].some((s) => !!a[s]) };
function s3(n) {
    for (const a in n) wa[a] = { ...wa[a], ...n[a] };
}
const r3 = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
function Dr(n) {
    return (
        n.startsWith("while") ||
        (n.startsWith("drag") && n !== "draggable") ||
        n.startsWith("layout") ||
        n.startsWith("onTap") ||
        n.startsWith("onPan") ||
        n.startsWith("onLayout") ||
        r3.has(n)
    );
}
let Gg = (n) => !Dr(n);
function o3(n) {
    typeof n == "function" &&
        (Gg = (a) => (a.startsWith("on") ? !Dr(a) : n(a)));
}
try {
    o3(require("@emotion/is-prop-valid").default);
} catch { }
function u3(n, a, s) {
    const r = {};
    for (const u in n)
        (u === "values" && typeof n.values == "object") ||
            ((Gg(u) ||
                (s === !0 && Dr(u)) ||
                (!a && !Dr(u)) ||
                (n.draggable && u.startsWith("onDrag"))) &&
                (r[u] = n[u]));
    return r;
}
const Yr = _.createContext({});
function Gr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function";
}
function ql(n) {
    return typeof n == "string" || Array.isArray(n);
}
const Qf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
],
    Zf = ["initial", ...Qf];
function Xr(n) {
    return Gr(n.animate) || Zf.some((a) => ql(n[a]));
}
function Xg(n) {
    return !!(Xr(n) || n.variants);
}
function c3(n, a) {
    if (Xr(n)) {
        const { initial: s, animate: r } = n;
        return {
            initial: s === !1 || ql(s) ? s : void 0,
            animate: ql(r) ? r : void 0,
        };
    }
    return n.inherit !== !1 ? a : {};
}
function f3(n) {
    const { initial: a, animate: s } = c3(n, _.useContext(Yr));
    return _.useMemo(() => ({ initial: a, animate: s }), [V0(a), V0(s)]);
}
function V0(n) {
    return Array.isArray(n) ? n.join(" ") : n;
}
const Yl = {};
function d3(n) {
    for (const a in n) ((Yl[a] = n[a]), Nf(a) && (Yl[a].isCSSVariable = !0));
}
function Kg(n, { layout: a, layoutId: s }) {
    return (
        Ea.has(n) ||
        n.startsWith("origin") ||
        ((a || s !== void 0) && (!!Yl[n] || n === "opacity"))
    );
}
const h3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
},
    m3 = ja.length;
function p3(n, a, s) {
    let r = "",
        u = !0;
    for (let f = 0; f < m3; f++) {
        const d = ja[f],
            m = n[d];
        if (m === void 0) continue;
        let h = !0;
        if (
            (typeof m == "number"
                ? (h = m === (d.startsWith("scale") ? 1 : 0))
                : (h = parseFloat(m) === 0),
                !h || s)
        ) {
            const y = Vg(m, Yf[d]);
            if (!h) {
                u = !1;
                const p = h3[d] || d;
                r += `${p}(${y}) `;
            }
            s && (a[d] = y);
        }
    }
    return ((r = r.trim()), s ? (r = s(a, u ? "" : r)) : u && (r = "none"), r);
}
function Ff(n, a, s) {
    const { style: r, vars: u, transformOrigin: f } = n;
    let d = !1,
        m = !1;
    for (const h in a) {
        const y = a[h];
        if (Ea.has(h)) {
            d = !0;
            continue;
        } else if (Nf(h)) {
            u[h] = y;
            continue;
        } else {
            const p = Vg(y, Yf[h]);
            h.startsWith("origin") ? ((m = !0), (f[h] = p)) : (r[h] = p);
        }
    }
    if (
        (a.transform ||
            (d || s
                ? (r.transform = p3(a, n.transform, s))
                : r.transform && (r.transform = "none")),
            m)
    ) {
        const { originX: h = "50%", originY: y = "50%", originZ: p = 0 } = f;
        r.transformOrigin = `${h} ${y} ${p}`;
    }
}
const $f = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Pg(n, a, s) {
    for (const r in a) !Jt(a[r]) && !Kg(r, s) && (n[r] = a[r]);
}
function y3({ transformTemplate: n }, a) {
    return _.useMemo(() => {
        const s = $f();
        return (Ff(s, a, n), Object.assign({}, s.vars, s.style));
    }, [a]);
}
function g3(n, a) {
    const s = n.style || {},
        r = {};
    return (Pg(r, s, n), Object.assign(r, y3(n, a)), r);
}
function v3(n, a) {
    const s = {},
        r = g3(n, a);
    return (
        n.drag &&
        n.dragListener !== !1 &&
        ((s.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
                n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
        n.tabIndex === void 0 &&
        (n.onTap || n.onTapStart || n.whileTap) &&
        (s.tabIndex = 0),
        (s.style = r),
        s
    );
}
const x3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    b3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function S3(n, a, s = 1, r = 0, u = !0) {
    n.pathLength = 1;
    const f = u ? x3 : b3;
    n[f.offset] = lt.transform(-r);
    const d = lt.transform(a),
        m = lt.transform(s);
    n[f.array] = `${d} ${m}`;
}
function Qg(
    n,
    {
        attrX: a,
        attrY: s,
        attrScale: r,
        pathLength: u,
        pathSpacing: f = 1,
        pathOffset: d = 0,
        ...m
    },
    h,
    y,
    p,
) {
    if ((Ff(n, m, y), h)) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return;
    }
    ((n.attrs = n.style), (n.style = {}));
    const { attrs: b, style: S } = n;
    (b.transform && ((S.transform = b.transform), delete b.transform),
        (S.transform || b.transformOrigin) &&
        ((S.transformOrigin = b.transformOrigin ?? "50% 50%"),
            delete b.transformOrigin),
        S.transform &&
        ((S.transformBox =
            (p == null ? void 0 : p.transformBox) ?? "fill-box"),
            delete b.transformBox),
        a !== void 0 && (b.x = a),
        s !== void 0 && (b.y = s),
        r !== void 0 && (b.scale = r),
        u !== void 0 && S3(b, u, f, d, !1));
}
const Zg = () => ({ ...$f(), attrs: {} }),
    Fg = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function T3(n, a, s, r) {
    const u = _.useMemo(() => {
        const f = Zg();
        return (
            Qg(f, a, Fg(r), n.transformTemplate, n.style),
            { ...f.attrs, style: { ...f.style } }
        );
    }, [a]);
    if (n.style) {
        const f = {};
        (Pg(f, n.style, n), (u.style = { ...f, ...u.style }));
    }
    return u;
}
const w3 = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function Jf(n) {
    return typeof n != "string" || n.includes("-")
        ? !1
        : !!(w3.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function C3(n, a, s, { latestValues: r }, u, f = !1) {
    const m = (Jf(n) ? T3 : v3)(a, r, u, n),
        h = u3(a, typeof n == "string", f),
        y = n !== _.Fragment ? { ...h, ...m, ref: s } : {},
        { children: p } = a,
        b = _.useMemo(() => (Jt(p) ? p.get() : p), [p]);
    return _.createElement(n, { ...y, children: b });
}
function B0(n) {
    const a = [{}, {}];
    return (
        n == null ||
        n.values.forEach((s, r) => {
            ((a[0][r] = s.get()), (a[1][r] = s.getVelocity()));
        }),
        a
    );
}
function Wf(n, a, s, r) {
    if (typeof a == "function") {
        const [u, f] = B0(r);
        a = a(s !== void 0 ? s : n.custom, u, f);
    }
    if (
        (typeof a == "string" && (a = n.variants && n.variants[a]),
            typeof a == "function")
    ) {
        const [u, f] = B0(r);
        a = a(s !== void 0 ? s : n.custom, u, f);
    }
    return a;
}
function Cr(n) {
    return Jt(n) ? n.get() : n;
}
function A3({ scrapeMotionValuesFromProps: n, createRenderState: a }, s, r, u) {
    return { latestValues: j3(s, r, u, n), renderState: a() };
}
function j3(n, a, s, r) {
    const u = {},
        f = r(n, {});
    for (const S in f) u[S] = Cr(f[S]);
    let { initial: d, animate: m } = n;
    const h = Xr(n),
        y = Xg(n);
    a &&
        y &&
        !h &&
        n.inherit !== !1 &&
        (d === void 0 && (d = a.initial), m === void 0 && (m = a.animate));
    let p = s ? s.initial === !1 : !1;
    p = p || d === !1;
    const b = p ? m : d;
    if (b && typeof b != "boolean" && !Gr(b)) {
        const S = Array.isArray(b) ? b : [b];
        for (let j = 0; j < S.length; j++) {
            const M = Wf(n, S[j]);
            if (M) {
                const { transitionEnd: H, transition: V, ...U } = M;
                for (const O in U) {
                    let G = U[O];
                    if (Array.isArray(G)) {
                        const K = p ? G.length - 1 : 0;
                        G = G[K];
                    }
                    G !== null && (u[O] = G);
                }
                for (const O in H) u[O] = H[O];
            }
        }
    }
    return u;
}
const $g = (n) => (a, s) => {
    const r = _.useContext(Yr),
        u = _.useContext(Hr),
        f = () => A3(n, a, r, u);
    return s ? f() : Di(f);
};
function If(n, a, s) {
    var f;
    const { style: r } = n,
        u = {};
    for (const d in r)
        (Jt(r[d]) ||
            (a.style && Jt(a.style[d])) ||
            Kg(d, n) ||
            ((f = s == null ? void 0 : s.getValue(d)) == null
                ? void 0
                : f.liveStyle) !== void 0) &&
            (u[d] = r[d]);
    return u;
}
const E3 = $g({ scrapeMotionValuesFromProps: If, createRenderState: $f });
function Jg(n, a, s) {
    const r = If(n, a, s);
    for (const u in n)
        if (Jt(n[u]) || Jt(a[u])) {
            const f =
                ja.indexOf(u) !== -1
                    ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
                    : u;
            r[f] = n[u];
        }
    return r;
}
const M3 = $g({ scrapeMotionValuesFromProps: Jg, createRenderState: Zg }),
    D3 = Symbol.for("motionComponentSymbol");
function ga(n) {
    return (
        n &&
        typeof n == "object" &&
        Object.prototype.hasOwnProperty.call(n, "current")
    );
}
function N3(n, a, s) {
    return _.useCallback(
        (r) => {
            (r && n.onMount && n.onMount(r),
                a && (r ? a.mount(r) : a.unmount()),
                s &&
                (typeof s == "function" ? s(r) : ga(s) && (s.current = r)));
        },
        [a],
    );
}
const td = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    R3 = "framerAppearId",
    Wg = "data-" + td(R3),
    Ig = _.createContext({});
function O3(n, a, s, r, u) {
    var H, V;
    const { visualElement: f } = _.useContext(Yr),
        d = _.useContext(Yg),
        m = _.useContext(Hr),
        h = _.useContext(qr).reducedMotion,
        y = _.useRef(null);
    ((r = r || d.renderer),
        !y.current &&
        r &&
        (y.current = r(n, {
            visualState: a,
            parent: f,
            props: s,
            presenceContext: m,
            blockInitialAnimation: m ? m.initial === !1 : !1,
            reducedMotionConfig: h,
        })));
    const p = y.current,
        b = _.useContext(Ig);
    p &&
        !p.projection &&
        u &&
        (p.type === "html" || p.type === "svg") &&
        z3(y.current, s, u, b);
    const S = _.useRef(!1);
    _.useInsertionEffect(() => {
        p && S.current && p.update(s, m);
    });
    const j = s[Wg],
        M = _.useRef(
            !!j &&
            !(
                (H = window.MotionHandoffIsComplete) != null &&
                H.call(window, j)
            ) &&
            ((V = window.MotionHasOptimisedAnimation) == null
                ? void 0
                : V.call(window, j)),
        );
    return (
        Pl(() => {
            p &&
                ((S.current = !0),
                    (window.MotionIsMounted = !0),
                    p.updateFeatures(),
                    p.scheduleRenderMicrotask(),
                    M.current &&
                    p.animationState &&
                    p.animationState.animateChanges());
        }),
        _.useEffect(() => {
            p &&
                (!M.current &&
                    p.animationState &&
                    p.animationState.animateChanges(),
                    M.current &&
                    (queueMicrotask(() => {
                        var U;
                        (U = window.MotionHandoffMarkAsComplete) == null ||
                            U.call(window, j);
                    }),
                        (M.current = !1)),
                    (p.enteringChildren = void 0));
        }),
        p
    );
}
function z3(n, a, s, r) {
    const {
        layoutId: u,
        layout: f,
        drag: d,
        dragConstraints: m,
        layoutScroll: h,
        layoutRoot: y,
        layoutCrossfade: p,
    } = a;
    ((n.projection = new s(
        n.latestValues,
        a["data-framer-portal-id"] ? void 0 : t1(n.parent),
    )),
        n.projection.setOptions({
            layoutId: u,
            layout: f,
            alwaysMeasureLayout: !!d || (m && ga(m)),
            visualElement: n,
            animationType: typeof f == "string" ? f : "both",
            initialPromotionConfig: r,
            crossfade: p,
            layoutScroll: h,
            layoutRoot: y,
        }));
}
function t1(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : t1(n.parent);
}
function Mc(n, { forwardMotionProps: a = !1 } = {}, s, r) {
    s && s3(s);
    const u = Jf(n) ? M3 : E3;
    function f(m, h) {
        let y;
        const p = { ..._.useContext(qr), ...m, layoutId: _3(m) },
            { isStatic: b } = p,
            S = f3(m),
            j = u(m, b);
        if (!b && Tf) {
            V3();
            const M = B3(p);
            ((y = M.MeasureLayout),
                (S.visualElement = O3(n, j, p, r, M.ProjectionNode)));
        }
        return v.jsxs(Yr.Provider, {
            value: S,
            children: [
                y && S.visualElement
                    ? v.jsx(y, { visualElement: S.visualElement, ...p })
                    : null,
                C3(n, m, N3(j, S.visualElement, h), j, b, a),
            ],
        });
    }
    f.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const d = _.forwardRef(f);
    return ((d[D3] = n), d);
}
function _3({ layoutId: n }) {
    const a = _.useContext(Sf).id;
    return a && n !== void 0 ? a + "-" + n : n;
}
function V3(n, a) {
    _.useContext(Yg).strict;
}
function B3(n) {
    const { drag: a, layout: s } = wa;
    if (!a && !s) return {};
    const r = { ...a, ...s };
    return {
        MeasureLayout:
            (a != null && a.isEnabled(n)) || (s != null && s.isEnabled(n))
                ? r.MeasureLayout
                : void 0,
        ProjectionNode: r.ProjectionNode,
    };
}
function L3(n, a) {
    if (typeof Proxy > "u") return Mc;
    const s = new Map(),
        r = (f, d) => Mc(f, d, n, a),
        u = (f, d) => r(f, d);
    return new Proxy(u, {
        get: (f, d) =>
            d === "create"
                ? r
                : (s.has(d) || s.set(d, Mc(d, void 0, n, a)), s.get(d)),
    });
}
function e1({ top: n, left: a, right: s, bottom: r }) {
    return { x: { min: a, max: s }, y: { min: n, max: r } };
}
function U3({ x: n, y: a }) {
    return { top: a.min, right: n.max, bottom: a.max, left: n.min };
}
function k3(n, a) {
    if (!a) return n;
    const s = a({ x: n.left, y: n.top }),
        r = a({ x: n.right, y: n.bottom });
    return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
function Dc(n) {
    return n === void 0 || n === 1;
}
function nf({ scale: n, scaleX: a, scaleY: s }) {
    return !Dc(n) || !Dc(a) || !Dc(s);
}
function Si(n) {
    return (
        nf(n) ||
        n1(n) ||
        n.z ||
        n.rotate ||
        n.rotateX ||
        n.rotateY ||
        n.skewX ||
        n.skewY
    );
}
function n1(n) {
    return L0(n.x) || L0(n.y);
}
function L0(n) {
    return n && n !== "0%";
}
function Nr(n, a, s) {
    const r = n - s,
        u = a * r;
    return s + u;
}
function U0(n, a, s, r, u) {
    return (u !== void 0 && (n = Nr(n, u, r)), Nr(n, s, r) + a);
}
function af(n, a = 0, s = 1, r, u) {
    ((n.min = U0(n.min, a, s, r, u)), (n.max = U0(n.max, a, s, r, u)));
}
function i1(n, { x: a, y: s }) {
    (af(n.x, a.translate, a.scale, a.originPoint),
        af(n.y, s.translate, s.scale, s.originPoint));
}
const k0 = 0.999999999999,
    H0 = 1.0000000000001;
function H3(n, a, s, r = !1) {
    const u = s.length;
    if (!u) return;
    a.x = a.y = 1;
    let f, d;
    for (let m = 0; m < u; m++) {
        ((f = s[m]), (d = f.projectionDelta));
        const { visualElement: h } = f.options;
        (h && h.props.style && h.props.style.display === "contents") ||
            (r &&
                f.options.layoutScroll &&
                f.scroll &&
                f !== f.root &&
                xa(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
                d && ((a.x *= d.x.scale), (a.y *= d.y.scale), i1(n, d)),
                r && Si(f.latestValues) && xa(n, f.latestValues));
    }
    (a.x < H0 && a.x > k0 && (a.x = 1), a.y < H0 && a.y > k0 && (a.y = 1));
}
function va(n, a) {
    ((n.min = n.min + a), (n.max = n.max + a));
}
function q0(n, a, s, r, u = 0.5) {
    const f = Nt(n.min, n.max, u);
    af(n, a, s, f, r);
}
function xa(n, a) {
    (q0(n.x, a.x, a.scaleX, a.scale, a.originX),
        q0(n.y, a.y, a.scaleY, a.scale, a.originY));
}
function a1(n, a) {
    return e1(k3(n.getBoundingClientRect(), a));
}
function q3(n, a, s) {
    const r = a1(n, s),
        { scroll: u } = a;
    return (u && (va(r.x, u.offset.x), va(r.y, u.offset.y)), r);
}
const Y0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    ba = () => ({ x: Y0(), y: Y0() }),
    G0 = () => ({ min: 0, max: 0 }),
    Lt = () => ({ x: G0(), y: G0() }),
    lf = { current: null },
    l1 = { current: !1 };
function Y3() {
    if (((l1.current = !0), !!Tf))
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                a = () => (lf.current = n.matches);
            (n.addEventListener("change", a), a());
        } else lf.current = !1;
}
const G3 = new WeakMap();
function X3(n, a, s) {
    for (const r in a) {
        const u = a[r],
            f = s[r];
        if (Jt(u)) n.addValue(r, u);
        else if (Jt(f)) n.addValue(r, Ke(u, { owner: n }));
        else if (f !== u)
            if (n.hasValue(r)) {
                const d = n.getValue(r);
                d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
            } else {
                const d = n.getStaticValue(r);
                n.addValue(r, Ke(d !== void 0 ? d : u, { owner: n }));
            }
    }
    for (const r in s) a[r] === void 0 && n.removeValue(r);
    return a;
}
const X0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
class K3 {
    scrapeMotionValuesFromProps(a, s, r) {
        return {};
    }
    constructor(
        {
            parent: a,
            props: s,
            presenceContext: r,
            reducedMotionConfig: u,
            blockInitialAnimation: f,
            visualState: d,
        },
        m = {},
    ) {
        ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = Hf),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                        this.renderInstance(
                            this.current,
                            this.renderState,
                            this.props.style,
                            this.projection,
                        ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const S = he.now();
                this.renderScheduledAt < S &&
                    ((this.renderScheduledAt = S),
                        bt.render(this.render, !1, !0));
            }));
        const { latestValues: h, renderState: y } = d;
        ((this.latestValues = h),
            (this.baseTarget = { ...h }),
            (this.initialValues = s.initial ? { ...h } : {}),
            (this.renderState = y),
            (this.parent = a),
            (this.props = s),
            (this.presenceContext = r),
            (this.depth = a ? a.depth + 1 : 0),
            (this.reducedMotionConfig = u),
            (this.options = m),
            (this.blockInitialAnimation = !!f),
            (this.isControllingVariants = Xr(s)),
            (this.isVariantNode = Xg(s)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(a && a.current)));
        const { willChange: p, ...b } = this.scrapeMotionValuesFromProps(
            s,
            {},
            this,
        );
        for (const S in b) {
            const j = b[S];
            h[S] !== void 0 && Jt(j) && j.set(h[S]);
        }
    }
    mount(a) {
        var s;
        ((this.current = a),
            G3.set(a, this),
            this.projection &&
            !this.projection.instance &&
            this.projection.mount(a),
            this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree =
                this.parent.addVariantChild(this)),
            this.values.forEach((r, u) => this.bindToMotionValue(u, r)),
            l1.current || Y3(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                        ? !0
                        : lf.current),
            (s = this.parent) == null || s.addChild(this),
            this.update(this.props, this.presenceContext));
    }
    unmount() {
        var a;
        (this.projection && this.projection.unmount(),
            Pe(this.notifyUpdate),
            Pe(this.render),
            this.valueSubscriptions.forEach((s) => s()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            (a = this.parent) == null || a.removeChild(this));
        for (const s in this.events) this.events[s].clear();
        for (const s in this.features) {
            const r = this.features[s];
            r && (r.unmount(), (r.isMounted = !1));
        }
        this.current = null;
    }
    addChild(a) {
        (this.children.add(a),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(a));
    }
    removeChild(a) {
        (this.children.delete(a),
            this.enteringChildren && this.enteringChildren.delete(a));
    }
    bindToMotionValue(a, s) {
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        const r = Ea.has(a);
        r && this.onBindTransform && this.onBindTransform();
        const u = s.on("change", (d) => {
            ((this.latestValues[a] = d),
                this.props.onUpdate && bt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
        });
        let f;
        (window.MotionCheckAppearSync &&
            (f = window.MotionCheckAppearSync(this, a, s)),
            this.valueSubscriptions.set(a, () => {
                (u(), f && f(), s.owner && s.stop());
            }));
    }
    sortNodePosition(a) {
        return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== a.type
            ? 0
            : this.sortInstanceNodePosition(this.current, a.current);
    }
    updateFeatures() {
        let a = "animation";
        for (a in wa) {
            const s = wa[a];
            if (!s) continue;
            const { isEnabled: r, Feature: u } = s;
            if (
                (!this.features[a] &&
                    u &&
                    r(this.props) &&
                    (this.features[a] = new u(this)),
                    this.features[a])
            ) {
                const f = this.features[a];
                f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : Lt();
    }
    getStaticValue(a) {
        return this.latestValues[a];
    }
    setStaticValue(a, s) {
        this.latestValues[a] = s;
    }
    update(a, s) {
        ((a.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = a),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = s));
        for (let r = 0; r < X0.length; r++) {
            const u = X0[r];
            this.propEventSubscriptions[u] &&
                (this.propEventSubscriptions[u](),
                    delete this.propEventSubscriptions[u]);
            const f = "on" + u,
                d = a[f];
            d && (this.propEventSubscriptions[u] = this.on(u, d));
        }
        ((this.prevMotionValues = X3(
            this,
            this.scrapeMotionValuesFromProps(a, this.prevProps, this),
            this.prevMotionValues,
        )),
            this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
        return this.props;
    }
    getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
    }
    addVariantChild(a) {
        const s = this.getClosestVariantNode();
        if (s)
            return (
                s.variantChildren && s.variantChildren.add(a),
                () => s.variantChildren.delete(a)
            );
    }
    addValue(a, s) {
        const r = this.values.get(a);
        s !== r &&
            (r && this.removeValue(a),
                this.bindToMotionValue(a, s),
                this.values.set(a, s),
                (this.latestValues[a] = s.get()));
    }
    removeValue(a) {
        this.values.delete(a);
        const s = this.valueSubscriptions.get(a);
        (s && (s(), this.valueSubscriptions.delete(a)),
            delete this.latestValues[a],
            this.removeValueFromRenderState(a, this.renderState));
    }
    hasValue(a) {
        return this.values.has(a);
    }
    getValue(a, s) {
        if (this.props.values && this.props.values[a])
            return this.props.values[a];
        let r = this.values.get(a);
        return (
            r === void 0 &&
            s !== void 0 &&
            ((r = Ke(s === null ? void 0 : s, { owner: this })),
                this.addValue(a, r)),
            r
        );
    }
    readValue(a, s) {
        let r =
            this.latestValues[a] !== void 0 || !this.current
                ? this.latestValues[a]
                : (this.getBaseTargetFromProps(this.props, a) ??
                    this.readValueFromInstance(this.current, a, this.options));
        return (
            r != null &&
            (typeof r == "string" && (Fy(r) || Jy(r))
                ? (r = parseFloat(r))
                : !e3(r) && ti.test(s) && (r = zg(a, s)),
                this.setBaseTarget(a, Jt(r) ? r.get() : r)),
            Jt(r) ? r.get() : r
        );
    }
    setBaseTarget(a, s) {
        this.baseTarget[a] = s;
    }
    getBaseTarget(a) {
        var f;
        const { initial: s } = this.props;
        let r;
        if (typeof s == "string" || typeof s == "object") {
            const d = Wf(
                this.props,
                s,
                (f = this.presenceContext) == null ? void 0 : f.custom,
            );
            d && (r = d[a]);
        }
        if (s && r !== void 0) return r;
        const u = this.getBaseTargetFromProps(this.props, a);
        return u !== void 0 && !Jt(u)
            ? u
            : this.initialValues[a] !== void 0 && r === void 0
                ? void 0
                : this.baseTarget[a];
    }
    on(a, s) {
        return (
            this.events[a] || (this.events[a] = new jf()),
            this.events[a].add(s)
        );
    }
    notify(a, ...s) {
        this.events[a] && this.events[a].notify(...s);
    }
    scheduleRenderMicrotask() {
        Xf.render(this.render);
    }
}
class s1 extends K3 {
    constructor() {
        (super(...arguments), (this.KeyframeResolver = _S));
    }
    sortInstanceNodePosition(a, s) {
        return a.compareDocumentPosition(s) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(a, s) {
        return a.style ? a.style[s] : void 0;
    }
    removeValueFromRenderState(a, { vars: s, style: r }) {
        (delete s[a], delete r[a]);
    }
    handleChildMotionValue() {
        this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
        const { children: a } = this.props;
        Jt(a) &&
            (this.childSubscription = a.on("change", (s) => {
                this.current && (this.current.textContent = `${s}`);
            }));
    }
}
function r1(n, { style: a, vars: s }, r, u) {
    const f = n.style;
    let d;
    for (d in a) f[d] = a[d];
    u == null || u.applyProjectionStyles(f, r);
    for (d in s) f.setProperty(d, s[d]);
}
function P3(n) {
    return window.getComputedStyle(n);
}
class Q3 extends s1 {
    constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = r1));
    }
    readValueFromInstance(a, s) {
        var r;
        if (Ea.has(s))
            return (r = this.projection) != null && r.isProjecting
                ? Fc(s)
                : tS(a, s);
        {
            const u = P3(a),
                f = (Nf(s) ? u.getPropertyValue(s) : u[s]) || 0;
            return typeof f == "string" ? f.trim() : f;
        }
    }
    measureInstanceViewportBox(a, { transformPagePoint: s }) {
        return a1(a, s);
    }
    build(a, s, r) {
        Ff(a, s, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(a, s, r) {
        return If(a, s, r);
    }
}
const o1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function Z3(n, a, s, r) {
    r1(n, a, void 0, r);
    for (const u in a.attrs) n.setAttribute(o1.has(u) ? u : td(u), a.attrs[u]);
}
class F3 extends s1 {
    constructor() {
        (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Lt));
    }
    getBaseTargetFromProps(a, s) {
        return a[s];
    }
    readValueFromInstance(a, s) {
        if (Ea.has(s)) {
            const r = Og(s);
            return (r && r.default) || 0;
        }
        return ((s = o1.has(s) ? s : td(s)), a.getAttribute(s));
    }
    scrapeMotionValuesFromProps(a, s, r) {
        return Jg(a, s, r);
    }
    build(a, s, r) {
        Qg(a, s, this.isSVGTag, r.transformTemplate, r.style);
    }
    renderInstance(a, s, r, u) {
        Z3(a, s, r, u);
    }
    mount(a) {
        ((this.isSVGTag = Fg(a.tagName)), super.mount(a));
    }
}
const $3 = (n, a) =>
    Jf(n) ? new F3(a) : new Q3(a, { allowProjection: n !== _.Fragment });
function Sa(n, a, s) {
    const r = n.getProps();
    return Wf(r, a, s !== void 0 ? s : r.custom, n);
}
const sf = (n) => Array.isArray(n);
function J3(n, a, s) {
    n.hasValue(a) ? n.getValue(a).set(s) : n.addValue(a, Ke(s));
}
function W3(n) {
    return sf(n) ? n[n.length - 1] || 0 : n;
}
function ed(n, a) {
    const s = Sa(n, a);
    let { transitionEnd: r = {}, transition: u = {}, ...f } = s || {};
    f = { ...f, ...r };
    for (const d in f) {
        const m = W3(f[d]);
        J3(n, d, m);
    }
}
function I3(n) {
    return !!(Jt(n) && n.add);
}
function rf(n, a) {
    const s = n.getValue("willChange");
    if (I3(s)) return s.add(a);
    if (!s && Cn.WillChange) {
        const r = new Cn.WillChange("auto");
        (n.addValue("willChange", r), r.add(a));
    }
}
function u1(n) {
    return n.props[Wg];
}
const t4 = (n) => n !== null;
function e4(n, { repeat: a, repeatType: s = "loop" }, r) {
    const u = n.filter(t4),
        f = a && s !== "loop" && a % 2 === 1 ? 0 : u.length - 1;
    return u[f];
}
const n4 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    i4 = (n) => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    a4 = { type: "keyframes", duration: 0.8 },
    l4 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    s4 = (n, { keyframes: a }) =>
        a.length > 2
            ? a4
            : Ea.has(n)
                ? n.startsWith("scale")
                    ? i4(a[1])
                    : n4
                : l4;
function r4({
    when: n,
    delay: a,
    delayChildren: s,
    staggerChildren: r,
    staggerDirection: u,
    repeat: f,
    repeatType: d,
    repeatDelay: m,
    from: h,
    elapsed: y,
    ...p
}) {
    return !!Object.keys(p).length;
}
const nd =
    (n, a, s, r = {}, u, f) =>
        (d) => {
            const m = qf(r, n) || {},
                h = m.delay || r.delay || 0;
            let { elapsed: y = 0 } = r;
            y = y - tn(h);
            const p = {
                keyframes: Array.isArray(s) ? s : [null, s],
                ease: "easeOut",
                velocity: a.getVelocity(),
                ...m,
                delay: -y,
                onUpdate: (S) => {
                    (a.set(S), m.onUpdate && m.onUpdate(S));
                },
                onComplete: () => {
                    (d(), m.onComplete && m.onComplete());
                },
                name: n,
                motionValue: a,
                element: f ? void 0 : u,
            };
            (r4(m) || Object.assign(p, s4(n, p)),
                p.duration && (p.duration = tn(p.duration)),
                p.repeatDelay && (p.repeatDelay = tn(p.repeatDelay)),
                p.from !== void 0 && (p.keyframes[0] = p.from));
            let b = !1;
            if (
                ((p.type === !1 || (p.duration === 0 && !p.repeatDelay)) &&
                    (tf(p), p.delay === 0 && (b = !0)),
                    (Cn.instantAnimations || Cn.skipAnimations) &&
                    ((b = !0), tf(p), (p.delay = 0)),
                    (p.allowFlatten = !m.type && !m.ease),
                    b && !f && a.get() !== void 0)
            ) {
                const S = e4(p.keyframes, m);
                if (S !== void 0) {
                    bt.update(() => {
                        (p.onUpdate(S), p.onComplete());
                    });
                    return;
                }
            }
            return m.isSync ? new kf(p) : new TS(p);
        };
function o4({ protectedKeys: n, needsAnimating: a }, s) {
    const r = n.hasOwnProperty(s) && a[s] !== !0;
    return ((a[s] = !1), r);
}
function c1(n, a, { delay: s = 0, transitionOverride: r, type: u } = {}) {
    let {
        transition: f = n.getDefaultTransition(),
        transitionEnd: d,
        ...m
    } = a;
    r && (f = r);
    const h = [],
        y = u && n.animationState && n.animationState.getState()[u];
    for (const p in m) {
        const b = n.getValue(p, n.latestValues[p] ?? null),
            S = m[p];
        if (S === void 0 || (y && o4(y, p))) continue;
        const j = { delay: s, ...qf(f || {}, p) },
            M = b.get();
        if (
            M !== void 0 &&
            !b.isAnimating &&
            !Array.isArray(S) &&
            S === M &&
            !j.velocity
        )
            continue;
        let H = !1;
        if (window.MotionHandoffAnimation) {
            const U = u1(n);
            if (U) {
                const O = window.MotionHandoffAnimation(U, p, bt);
                O !== null && ((j.startTime = O), (H = !0));
            }
        }
        (rf(n, p),
            b.start(
                nd(
                    p,
                    b,
                    S,
                    n.shouldReduceMotion && Dg.has(p) ? { type: !1 } : j,
                    n,
                    H,
                ),
            ));
        const V = b.animation;
        V && h.push(V);
    }
    return (
        d &&
        Promise.all(h).then(() => {
            bt.update(() => {
                d && ed(n, d);
            });
        }),
        h
    );
}
function f1(n, a, s, r = 0, u = 1) {
    const f = Array.from(n)
        .sort((y, p) => y.sortNodePosition(p))
        .indexOf(a),
        d = n.size,
        m = (d - 1) * r;
    return typeof s == "function" ? s(f, d) : u === 1 ? f * r : m - f * r;
}
function of(n, a, s = {}) {
    var h;
    const r = Sa(
        n,
        a,
        s.type === "exit"
            ? (h = n.presenceContext) == null
                ? void 0
                : h.custom
            : void 0,
    );
    let { transition: u = n.getDefaultTransition() || {} } = r || {};
    s.transitionOverride && (u = s.transitionOverride);
    const f = r ? () => Promise.all(c1(n, r, s)) : () => Promise.resolve(),
        d =
            n.variantChildren && n.variantChildren.size
                ? (y = 0) => {
                    const {
                        delayChildren: p = 0,
                        staggerChildren: b,
                        staggerDirection: S,
                    } = u;
                    return u4(n, a, y, p, b, S, s);
                }
                : () => Promise.resolve(),
        { when: m } = u;
    if (m) {
        const [y, p] = m === "beforeChildren" ? [f, d] : [d, f];
        return y().then(() => p());
    } else return Promise.all([f(), d(s.delay)]);
}
function u4(n, a, s = 0, r = 0, u = 0, f = 1, d) {
    const m = [];
    for (const h of n.variantChildren)
        (h.notify("AnimationStart", a),
            m.push(
                of(h, a, {
                    ...d,
                    delay:
                        s +
                        (typeof r == "function" ? 0 : r) +
                        f1(n.variantChildren, h, r, u, f),
                }).then(() => h.notify("AnimationComplete", a)),
            ));
    return Promise.all(m);
}
function d1(n, a, s = {}) {
    n.notify("AnimationStart", a);
    let r;
    if (Array.isArray(a)) {
        const u = a.map((f) => of(n, f, s));
        r = Promise.all(u);
    } else if (typeof a == "string") r = of(n, a, s);
    else {
        const u = typeof a == "function" ? Sa(n, a, s.custom) : a;
        r = Promise.all(c1(n, u, s));
    }
    return r.then(() => {
        n.notify("AnimationComplete", a);
    });
}
function h1(n, a) {
    if (!Array.isArray(a)) return !1;
    const s = a.length;
    if (s !== n.length) return !1;
    for (let r = 0; r < s; r++) if (a[r] !== n[r]) return !1;
    return !0;
}
const c4 = Zf.length;
function m1(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const s = n.parent ? m1(n.parent) || {} : {};
        return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
    }
    const a = {};
    for (let s = 0; s < c4; s++) {
        const r = Zf[s],
            u = n.props[r];
        (ql(u) || u === !1) && (a[r] = u);
    }
    return a;
}
const f4 = [...Qf].reverse(),
    d4 = Qf.length;
function h4(n) {
    return (a) =>
        Promise.all(a.map(({ animation: s, options: r }) => d1(n, s, r)));
}
function m4(n) {
    let a = h4(n),
        s = K0(),
        r = !0;
    const u = (h) => (y, p) => {
        var S;
        const b = Sa(
            n,
            p,
            h === "exit"
                ? (S = n.presenceContext) == null
                    ? void 0
                    : S.custom
                : void 0,
        );
        if (b) {
            const { transition: j, transitionEnd: M, ...H } = b;
            y = { ...y, ...H, ...M };
        }
        return y;
    };
    function f(h) {
        a = h(n);
    }
    function d(h) {
        const { props: y } = n,
            p = m1(n.parent) || {},
            b = [],
            S = new Set();
        let j = {},
            M = 1 / 0;
        for (let V = 0; V < d4; V++) {
            const U = f4[V],
                O = s[U],
                G = y[U] !== void 0 ? y[U] : p[U],
                K = ql(G),
                z = U === h ? O.isActive : null;
            z === !1 && (M = V);
            let P = G === p[U] && G !== y[U] && K;
            if (
                (P && r && n.manuallyAnimateOnMount && (P = !1),
                    (O.protectedKeys = { ...j }),
                    (!O.isActive && z === null) ||
                    (!G && !O.prevProp) ||
                    Gr(G) ||
                    typeof G == "boolean")
            )
                continue;
            const J = p4(O.prevProp, G);
            let Z = J || (U === h && O.isActive && !P && K) || (V > M && K),
                st = !1;
            const jt = Array.isArray(G) ? G : [G];
            let Ut = jt.reduce(u(U), {});
            z === !1 && (Ut = {});
            const { prevResolvedValues: _t = {} } = O,
                ln = { ..._t, ...Ut },
                Qe = (X) => {
                    ((Z = !0),
                        S.has(X) && ((st = !0), S.delete(X)),
                        (O.needsAnimating[X] = !0));
                    const I = n.getValue(X);
                    I && (I.liveStyle = !1);
                };
            for (const X in ln) {
                const I = Ut[X],
                    ht = _t[X];
                if (j.hasOwnProperty(X)) continue;
                let w = !1;
                (sf(I) && sf(ht) ? (w = !h1(I, ht)) : (w = I !== ht),
                    w
                        ? I != null
                            ? Qe(X)
                            : S.add(X)
                        : I !== void 0 && S.has(X)
                            ? Qe(X)
                            : (O.protectedKeys[X] = !0));
            }
            ((O.prevProp = G),
                (O.prevResolvedValues = Ut),
                O.isActive && (j = { ...j, ...Ut }),
                r && n.blockInitialAnimation && (Z = !1));
            const Yt = P && J;
            Z &&
                (!Yt || st) &&
                b.push(
                    ...jt.map((X) => {
                        const I = { type: U };
                        if (
                            typeof X == "string" &&
                            r &&
                            !Yt &&
                            n.manuallyAnimateOnMount &&
                            n.parent
                        ) {
                            const { parent: ht } = n,
                                w = Sa(ht, X);
                            if (ht.enteringChildren && w) {
                                const { delayChildren: Y } = w.transition || {};
                                I.delay = f1(ht.enteringChildren, n, Y);
                            }
                        }
                        return { animation: X, options: I };
                    }),
                );
        }
        if (S.size) {
            const V = {};
            if (typeof y.initial != "boolean") {
                const U = Sa(
                    n,
                    Array.isArray(y.initial) ? y.initial[0] : y.initial,
                );
                U && U.transition && (V.transition = U.transition);
            }
            (S.forEach((U) => {
                const O = n.getBaseTarget(U),
                    G = n.getValue(U);
                (G && (G.liveStyle = !0), (V[U] = O ?? null));
            }),
                b.push({ animation: V }));
        }
        let H = !!b.length;
        return (
            r &&
            (y.initial === !1 || y.initial === y.animate) &&
            !n.manuallyAnimateOnMount &&
            (H = !1),
            (r = !1),
            H ? a(b) : Promise.resolve()
        );
    }
    function m(h, y) {
        var b;
        if (s[h].isActive === y) return Promise.resolve();
        ((b = n.variantChildren) == null ||
            b.forEach((S) => {
                var j;
                return (j = S.animationState) == null
                    ? void 0
                    : j.setActive(h, y);
            }),
            (s[h].isActive = y));
        const p = d(h);
        for (const S in s) s[S].protectedKeys = {};
        return p;
    }
    return {
        animateChanges: d,
        setActive: m,
        setAnimateFunction: f,
        getState: () => s,
        reset: () => {
            ((s = K0()), (r = !0));
        },
    };
}
function p4(n, a) {
    return typeof a == "string" ? a !== n : Array.isArray(a) ? !h1(a, n) : !1;
}
function bi(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function K0() {
    return {
        animate: bi(!0),
        whileInView: bi(),
        whileHover: bi(),
        whileTap: bi(),
        whileDrag: bi(),
        whileFocus: bi(),
        exit: bi(),
    };
}
class ei {
    constructor(a) {
        ((this.isMounted = !1), (this.node = a));
    }
    update() { }
}
class y4 extends ei {
    constructor(a) {
        (super(a), a.animationState || (a.animationState = m4(a)));
    }
    updateAnimationControlsSubscription() {
        const { animate: a } = this.node.getProps();
        Gr(a) && (this.unmountControls = a.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: a } = this.node.getProps(),
            { animate: s } = this.node.prevProps || {};
        a !== s && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var a;
        (this.node.animationState.reset(),
            (a = this.unmountControls) == null || a.call(this));
    }
}
let g4 = 0;
class v4 extends ei {
    constructor() {
        (super(...arguments), (this.id = g4++));
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: a, onExitComplete: s } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || a === r) return;
        const u = this.node.animationState.setActive("exit", !a);
        s &&
            !a &&
            u.then(() => {
                s(this.id);
            });
    }
    mount() {
        const { register: a, onExitComplete: s } =
            this.node.presenceContext || {};
        (s && s(this.id), a && (this.unmount = a(this.id)));
    }
    unmount() { }
}
const x4 = { animation: { Feature: y4 }, exit: { Feature: v4 } };
function Gl(n, a, s, r = { passive: !0 }) {
    return (n.addEventListener(a, s, r), () => n.removeEventListener(a, s));
}
function $l(n) {
    return { point: { x: n.pageX, y: n.pageY } };
}
const b4 = (n) => (a) => Kf(a) && n(a, $l(a));
function _l(n, a, s, r) {
    return Gl(n, a, b4(s), r);
}
const p1 = 1e-4,
    S4 = 1 - p1,
    T4 = 1 + p1,
    y1 = 0.01,
    w4 = 0 - y1,
    C4 = 0 + y1;
function re(n) {
    return n.max - n.min;
}
function A4(n, a, s) {
    return Math.abs(n - a) <= s;
}
function P0(n, a, s, r = 0.5) {
    ((n.origin = r),
        (n.originPoint = Nt(a.min, a.max, n.origin)),
        (n.scale = re(s) / re(a)),
        (n.translate = Nt(s.min, s.max, n.origin) - n.originPoint),
        ((n.scale >= S4 && n.scale <= T4) || isNaN(n.scale)) && (n.scale = 1),
        ((n.translate >= w4 && n.translate <= C4) || isNaN(n.translate)) &&
        (n.translate = 0));
}
function Vl(n, a, s, r) {
    (P0(n.x, a.x, s.x, r ? r.originX : void 0),
        P0(n.y, a.y, s.y, r ? r.originY : void 0));
}
function Q0(n, a, s) {
    ((n.min = s.min + a.min), (n.max = n.min + re(a)));
}
function j4(n, a, s) {
    (Q0(n.x, a.x, s.x), Q0(n.y, a.y, s.y));
}
function Z0(n, a, s) {
    ((n.min = a.min - s.min), (n.max = n.min + re(a)));
}
function Bl(n, a, s) {
    (Z0(n.x, a.x, s.x), Z0(n.y, a.y, s.y));
}
function Ue(n) {
    return [n("x"), n("y")];
}
const g1 = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
    F0 = (n, a) => Math.abs(n - a);
function E4(n, a) {
    const s = F0(n.x, a.x),
        r = F0(n.y, a.y);
    return Math.sqrt(s ** 2 + r ** 2);
}
class v1 {
    constructor(
        a,
        s,
        {
            transformPagePoint: r,
            contextWindow: u = window,
            dragSnapToOrigin: f = !1,
            distanceThreshold: d = 3,
        } = {},
    ) {
        if (
            ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.contextWindow = window),
                (this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    const S = Rc(this.lastMoveEventInfo, this.history),
                        j = this.startEvent !== null,
                        M = E4(S.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
                    if (!j && !M) return;
                    const { point: H } = S,
                        { timestamp: V } = $t;
                    this.history.push({ ...H, timestamp: V });
                    const { onStart: U, onMove: O } = this.handlers;
                    (j ||
                        (U && U(this.lastMoveEvent, S),
                            (this.startEvent = this.lastMoveEvent)),
                        O && O(this.lastMoveEvent, S));
                }),
                (this.handlePointerMove = (S, j) => {
                    ((this.lastMoveEvent = S),
                        (this.lastMoveEventInfo = Nc(j, this.transformPagePoint)),
                        bt.update(this.updatePoint, !0));
                }),
                (this.handlePointerUp = (S, j) => {
                    this.end();
                    const {
                        onEnd: M,
                        onSessionEnd: H,
                        resumeAnimation: V,
                    } = this.handlers;
                    if (
                        (this.dragSnapToOrigin && V && V(),
                            !(this.lastMoveEvent && this.lastMoveEventInfo))
                    )
                        return;
                    const U = Rc(
                        S.type === "pointercancel"
                            ? this.lastMoveEventInfo
                            : Nc(j, this.transformPagePoint),
                        this.history,
                    );
                    (this.startEvent && M && M(S, U), H && H(S, U));
                }),
                !Kf(a))
        )
            return;
        ((this.dragSnapToOrigin = f),
            (this.handlers = s),
            (this.transformPagePoint = r),
            (this.distanceThreshold = d),
            (this.contextWindow = u || window));
        const m = $l(a),
            h = Nc(m, this.transformPagePoint),
            { point: y } = h,
            { timestamp: p } = $t;
        this.history = [{ ...y, timestamp: p }];
        const { onSessionStart: b } = s;
        (b && b(a, Rc(h, this.history)),
            (this.removeListeners = Ql(
                _l(this.contextWindow, "pointermove", this.handlePointerMove),
                _l(this.contextWindow, "pointerup", this.handlePointerUp),
                _l(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
    }
    updateHandlers(a) {
        this.handlers = a;
    }
    end() {
        (this.removeListeners && this.removeListeners(), Pe(this.updatePoint));
    }
}
function Nc(n, a) {
    return a ? { point: a(n.point) } : n;
}
function $0(n, a) {
    return { x: n.x - a.x, y: n.y - a.y };
}
function Rc({ point: n }, a) {
    return {
        point: n,
        delta: $0(n, x1(a)),
        offset: $0(n, M4(a)),
        velocity: D4(a, 0.1),
    };
}
function M4(n) {
    return n[0];
}
function x1(n) {
    return n[n.length - 1];
}
function D4(n, a) {
    if (n.length < 2) return { x: 0, y: 0 };
    let s = n.length - 1,
        r = null;
    const u = x1(n);
    for (; s >= 0 && ((r = n[s]), !(u.timestamp - r.timestamp > tn(a)));) s--;
    if (!r) return { x: 0, y: 0 };
    const f = en(u.timestamp - r.timestamp);
    if (f === 0) return { x: 0, y: 0 };
    const d = { x: (u.x - r.x) / f, y: (u.y - r.y) / f };
    return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function N4(n, { min: a, max: s }, r) {
    return (
        a !== void 0 && n < a
            ? (n = r ? Nt(a, n, r.min) : Math.max(n, a))
            : s !== void 0 &&
            n > s &&
            (n = r ? Nt(s, n, r.max) : Math.min(n, s)),
        n
    );
}
function J0(n, a, s) {
    return {
        min: a !== void 0 ? n.min + a : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
    };
}
function R4(n, { top: a, left: s, bottom: r, right: u }) {
    return { x: J0(n.x, s, u), y: J0(n.y, a, r) };
}
function W0(n, a) {
    let s = a.min - n.min,
        r = a.max - n.max;
    return (
        a.max - a.min < n.max - n.min && ([s, r] = [r, s]),
        { min: s, max: r }
    );
}
function O4(n, a) {
    return { x: W0(n.x, a.x), y: W0(n.y, a.y) };
}
function z4(n, a) {
    let s = 0.5;
    const r = re(n),
        u = re(a);
    return (
        u > r
            ? (s = Ta(a.min, a.max - r, n.min))
            : r > u && (s = Ta(n.min, n.max - u, a.min)),
        an(0, 1, s)
    );
}
function _4(n, a) {
    const s = {};
    return (
        a.min !== void 0 && (s.min = a.min - n.min),
        a.max !== void 0 && (s.max = a.max - n.min),
        s
    );
}
const uf = 0.35;
function V4(n = uf) {
    return (
        n === !1 ? (n = 0) : n === !0 && (n = uf),
        { x: I0(n, "left", "right"), y: I0(n, "top", "bottom") }
    );
}
function I0(n, a, s) {
    return { min: ty(n, a), max: ty(n, s) };
}
function ty(n, a) {
    return typeof n == "number" ? n : n[a] || 0;
}
const B4 = new WeakMap();
class L4 {
    constructor(a) {
        ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Lt()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = a));
    }
    start(a, { snapToCursor: s = !1, distanceThreshold: r } = {}) {
        const { presenceContext: u } = this.visualElement;
        if (u && u.isPresent === !1) return;
        const f = (b) => {
            const { dragSnapToOrigin: S } = this.getProps();
            (S ? this.pauseAnimation() : this.stopAnimation(),
                s && this.snapToCursor($l(b).point));
        },
            d = (b, S) => {
                const {
                    drag: j,
                    dragPropagation: M,
                    onDragStart: H,
                } = this.getProps();
                if (
                    j &&
                    !M &&
                    (this.openDragLock && this.openDragLock(),
                        (this.openDragLock = LS(j)),
                        !this.openDragLock)
                )
                    return;
                ((this.latestPointerEvent = b),
                    (this.latestPanInfo = S),
                    (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked =
                        !0),
                        (this.visualElement.projection.target = void 0)),
                    Ue((U) => {
                        let O = this.getAxisMotionValue(U).get() || 0;
                        if (nn.test(O)) {
                            const { projection: G } = this.visualElement;
                            if (G && G.layout) {
                                const K = G.layout.layoutBox[U];
                                K && (O = re(K) * (parseFloat(O) / 100));
                            }
                        }
                        this.originPoint[U] = O;
                    }),
                    H && bt.postRender(() => H(b, S)),
                    rf(this.visualElement, "transform"));
                const { animationState: V } = this.visualElement;
                V && V.setActive("whileDrag", !0);
            },
            m = (b, S) => {
                ((this.latestPointerEvent = b), (this.latestPanInfo = S));
                const {
                    dragPropagation: j,
                    dragDirectionLock: M,
                    onDirectionLock: H,
                    onDrag: V,
                } = this.getProps();
                if (!j && !this.openDragLock) return;
                const { offset: U } = S;
                if (M && this.currentDirection === null) {
                    ((this.currentDirection = U4(U)),
                        this.currentDirection !== null &&
                        H &&
                        H(this.currentDirection));
                    return;
                }
                (this.updateAxis("x", S.point, U),
                    this.updateAxis("y", S.point, U),
                    this.visualElement.render(),
                    V && V(b, S));
            },
            h = (b, S) => {
                ((this.latestPointerEvent = b),
                    (this.latestPanInfo = S),
                    this.stop(b, S),
                    (this.latestPointerEvent = null),
                    (this.latestPanInfo = null));
            },
            y = () =>
                Ue((b) => {
                    var S;
                    return (
                        this.getAnimationState(b) === "paused" &&
                        ((S = this.getAxisMotionValue(b).animation) == null
                            ? void 0
                            : S.play())
                    );
                }),
            { dragSnapToOrigin: p } = this.getProps();
        this.panSession = new v1(
            a,
            {
                onSessionStart: f,
                onStart: d,
                onMove: m,
                onSessionEnd: h,
                resumeAnimation: y,
            },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: p,
                distanceThreshold: r,
                contextWindow: g1(this.visualElement),
            },
        );
    }
    stop(a, s) {
        const r = a || this.latestPointerEvent,
            u = s || this.latestPanInfo,
            f = this.isDragging;
        if ((this.cancel(), !f || !u || !r)) return;
        const { velocity: d } = u;
        this.startAnimation(d);
        const { onDragEnd: m } = this.getProps();
        m && bt.postRender(() => m(r, u));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: a, animationState: s } = this.visualElement;
        (a && (a.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        const { dragPropagation: r } = this.getProps();
        (!r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            s && s.setActive("whileDrag", !1));
    }
    updateAxis(a, s, r) {
        const { drag: u } = this.getProps();
        if (!r || !yr(a, u, this.currentDirection)) return;
        const f = this.getAxisMotionValue(a);
        let d = this.originPoint[a] + r[a];
        (this.constraints &&
            this.constraints[a] &&
            (d = N4(d, this.constraints[a], this.elastic[a])),
            f.set(d));
    }
    resolveConstraints() {
        var f;
        const { dragConstraints: a, dragElastic: s } = this.getProps(),
            r =
                this.visualElement.projection &&
                    !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (f = this.visualElement.projection) == null
                        ? void 0
                        : f.layout,
            u = this.constraints;
        (a && ga(a)
            ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
            : a && r
                ? (this.constraints = R4(r.layoutBox, a))
                : (this.constraints = !1),
            (this.elastic = V4(s)),
            u !== this.constraints &&
            r &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            Ue((d) => {
                this.constraints !== !1 &&
                    this.getAxisMotionValue(d) &&
                    (this.constraints[d] = _4(
                        r.layoutBox[d],
                        this.constraints[d],
                    ));
            }));
    }
    resolveRefConstraints() {
        const { dragConstraints: a, onMeasureDragConstraints: s } =
            this.getProps();
        if (!a || !ga(a)) return !1;
        const r = a.current,
            { projection: u } = this.visualElement;
        if (!u || !u.layout) return !1;
        const f = q3(r, u.root, this.visualElement.getTransformPagePoint());
        let d = O4(u.layout.layoutBox, f);
        if (s) {
            const m = s(U3(d));
            ((this.hasMutatedConstraints = !!m), m && (d = e1(m)));
        }
        return d;
    }
    startAnimation(a) {
        const {
            drag: s,
            dragMomentum: r,
            dragElastic: u,
            dragTransition: f,
            dragSnapToOrigin: d,
            onDragTransitionEnd: m,
        } = this.getProps(),
            h = this.constraints || {},
            y = Ue((p) => {
                if (!yr(p, s, this.currentDirection)) return;
                let b = (h && h[p]) || {};
                d && (b = { min: 0, max: 0 });
                const S = u ? 200 : 1e6,
                    j = u ? 40 : 1e7,
                    M = {
                        type: "inertia",
                        velocity: r ? a[p] : 0,
                        bounceStiffness: S,
                        bounceDamping: j,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...f,
                        ...b,
                    };
                return this.startAxisValueAnimation(p, M);
            });
        return Promise.all(y).then(m);
    }
    startAxisValueAnimation(a, s) {
        const r = this.getAxisMotionValue(a);
        return (
            rf(this.visualElement, a),
            r.start(nd(a, r, 0, s, this.visualElement, !1))
        );
    }
    stopAnimation() {
        Ue((a) => this.getAxisMotionValue(a).stop());
    }
    pauseAnimation() {
        Ue((a) => {
            var s;
            return (s = this.getAxisMotionValue(a).animation) == null
                ? void 0
                : s.pause();
        });
    }
    getAnimationState(a) {
        var s;
        return (s = this.getAxisMotionValue(a).animation) == null
            ? void 0
            : s.state;
    }
    getAxisMotionValue(a) {
        const s = `_drag${a.toUpperCase()}`,
            r = this.visualElement.getProps(),
            u = r[s];
        return (
            u ||
            this.visualElement.getValue(
                a,
                (r.initial ? r.initial[a] : void 0) || 0,
            )
        );
    }
    snapToCursor(a) {
        Ue((s) => {
            const { drag: r } = this.getProps();
            if (!yr(s, r, this.currentDirection)) return;
            const { projection: u } = this.visualElement,
                f = this.getAxisMotionValue(s);
            if (u && u.layout) {
                const { min: d, max: m } = u.layout.layoutBox[s];
                f.set(a[s] - Nt(d, m, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: a, dragConstraints: s } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!ga(s) || !r || !this.constraints) return;
        this.stopAnimation();
        const u = { x: 0, y: 0 };
        Ue((d) => {
            const m = this.getAxisMotionValue(d);
            if (m && this.constraints !== !1) {
                const h = m.get();
                u[d] = z4({ min: h, max: h }, this.constraints[d]);
            }
        });
        const { transformTemplate: f } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = f ? f({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            Ue((d) => {
                if (!yr(d, a, null)) return;
                const m = this.getAxisMotionValue(d),
                    { min: h, max: y } = this.constraints[d];
                m.set(Nt(h, y, u[d]));
            }));
    }
    addListeners() {
        if (!this.visualElement.current) return;
        B4.set(this.visualElement, this);
        const a = this.visualElement.current,
            s = _l(a, "pointerdown", (h) => {
                const { drag: y, dragListener: p = !0 } = this.getProps();
                y && p && this.start(h);
            }),
            r = () => {
                const { dragConstraints: h } = this.getProps();
                ga(h) &&
                    h.current &&
                    (this.constraints = this.resolveRefConstraints());
            },
            { projection: u } = this.visualElement,
            f = u.addEventListener("measure", r);
        (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
            bt.read(r));
        const d = Gl(window, "resize", () =>
            this.scalePositionWithinConstraints(),
        ),
            m = u.addEventListener(
                "didUpdate",
                ({ delta: h, hasLayoutChanged: y }) => {
                    this.isDragging &&
                        y &&
                        (Ue((p) => {
                            const b = this.getAxisMotionValue(p);
                            b &&
                                ((this.originPoint[p] += h[p].translate),
                                    b.set(b.get() + h[p].translate));
                        }),
                            this.visualElement.render());
                },
            );
        return () => {
            (d(), s(), f(), m && m());
        };
    }
    getProps() {
        const a = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: r = !1,
                dragPropagation: u = !1,
                dragConstraints: f = !1,
                dragElastic: d = uf,
                dragMomentum: m = !0,
            } = a;
        return {
            ...a,
            drag: s,
            dragDirectionLock: r,
            dragPropagation: u,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: m,
        };
    }
}
function yr(n, a, s) {
    return (a === !0 || a === n) && (s === null || s === n);
}
function U4(n, a = 10) {
    let s = null;
    return (Math.abs(n.y) > a ? (s = "y") : Math.abs(n.x) > a && (s = "x"), s);
}
class k4 extends ei {
    constructor(a) {
        (super(a),
            (this.removeGroupControls = me),
            (this.removeListeners = me),
            (this.controls = new L4(a)));
    }
    mount() {
        const { dragControls: a } = this.node.getProps();
        (a && (this.removeGroupControls = a.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || me));
    }
    unmount() {
        (this.removeGroupControls(), this.removeListeners());
    }
}
const ey = (n) => (a, s) => {
    n && bt.postRender(() => n(a, s));
};
class H4 extends ei {
    constructor() {
        (super(...arguments), (this.removePointerDownListener = me));
    }
    onPointerDown(a) {
        this.session = new v1(a, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: g1(this.node),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: a,
            onPanStart: s,
            onPan: r,
            onPanEnd: u,
        } = this.node.getProps();
        return {
            onSessionStart: ey(a),
            onStart: ey(s),
            onMove: r,
            onEnd: (f, d) => {
                (delete this.session, u && bt.postRender(() => u(f, d)));
            },
        };
    }
    mount() {
        this.removePointerDownListener = _l(
            this.node.current,
            "pointerdown",
            (a) => this.onPointerDown(a),
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        (this.removePointerDownListener(), this.session && this.session.end());
    }
}
const Ar = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ny(n, a) {
    return a.max === a.min ? 0 : (n / (a.max - a.min)) * 100;
}
const El = {
    correct: (n, a) => {
        if (!a.target) return n;
        if (typeof n == "string")
            if (lt.test(n)) n = parseFloat(n);
            else return n;
        const s = ny(n, a.target.x),
            r = ny(n, a.target.y);
        return `${s}% ${r}%`;
    },
},
    q4 = {
        correct: (n, { treeScale: a, projectionDelta: s }) => {
            const r = n,
                u = ti.parse(n);
            if (u.length > 5) return r;
            const f = ti.createTransformer(n),
                d = typeof u[0] != "number" ? 1 : 0,
                m = s.x.scale * a.x,
                h = s.y.scale * a.y;
            ((u[0 + d] /= m), (u[1 + d] /= h));
            const y = Nt(m, h, 0.5);
            return (
                typeof u[2 + d] == "number" && (u[2 + d] /= y),
                typeof u[3 + d] == "number" && (u[3 + d] /= y),
                f(u)
            );
        },
    };
let Oc = !1;
class Y4 extends _.Component {
    componentDidMount() {
        const {
            visualElement: a,
            layoutGroup: s,
            switchLayoutGroup: r,
            layoutId: u,
        } = this.props,
            { projection: f } = a;
        (d3(G4),
            f &&
            (s.group && s.group.add(f),
                r && r.register && u && r.register(f),
                Oc && f.root.didUpdate(),
                f.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                f.setOptions({
                    ...f.options,
                    onExitComplete: () => this.safeToRemove(),
                })),
            (Ar.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(a) {
        const {
            layoutDependency: s,
            visualElement: r,
            drag: u,
            isPresent: f,
        } = this.props,
            { projection: d } = r;
        return (
            d &&
            ((d.isPresent = f),
                (Oc = !0),
                u ||
                    a.layoutDependency !== s ||
                    s === void 0 ||
                    a.isPresent !== f
                    ? d.willUpdate()
                    : this.safeToRemove(),
                a.isPresent !== f &&
                (f
                    ? d.promote()
                    : d.relegate() ||
                    bt.postRender(() => {
                        const m = d.getStack();
                        (!m || !m.members.length) && this.safeToRemove();
                    }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: a } = this.props.visualElement;
        a &&
            (a.root.didUpdate(),
                Xf.postRender(() => {
                    !a.currentAnimation && a.isLead() && this.safeToRemove();
                }));
    }
    componentWillUnmount() {
        const {
            visualElement: a,
            layoutGroup: s,
            switchLayoutGroup: r,
        } = this.props,
            { projection: u } = a;
        ((Oc = !0),
            u &&
            (u.scheduleCheckAfterUnmount(),
                s && s.group && s.group.remove(u),
                r && r.deregister && r.deregister(u)));
    }
    safeToRemove() {
        const { safeToRemove: a } = this.props;
        a && a();
    }
    render() {
        return null;
    }
}
function b1(n) {
    const [a, s] = qg(),
        r = _.useContext(Sf);
    return v.jsx(Y4, {
        ...n,
        layoutGroup: r,
        switchLayoutGroup: _.useContext(Ig),
        isPresent: a,
        safeToRemove: s,
    });
}
const G4 = {
    borderRadius: {
        ...El,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: El,
    borderTopRightRadius: El,
    borderBottomLeftRadius: El,
    borderBottomRightRadius: El,
    boxShadow: q4,
};
function X4(n, a, s) {
    const r = Jt(n) ? n : Ke(n);
    return (r.start(nd("", r, a, s)), r.animation);
}
const K4 = (n, a) => n.depth - a.depth;
class P4 {
    constructor() {
        ((this.children = []), (this.isDirty = !1));
    }
    add(a) {
        (wf(this.children, a), (this.isDirty = !0));
    }
    remove(a) {
        (Cf(this.children, a), (this.isDirty = !0));
    }
    forEach(a) {
        (this.isDirty && this.children.sort(K4),
            (this.isDirty = !1),
            this.children.forEach(a));
    }
}
function Q4(n, a) {
    const s = he.now(),
        r = ({ timestamp: u }) => {
            const f = u - s;
            f >= a && (Pe(r), n(f - a));
        };
    return (bt.setup(r, !0), () => Pe(r));
}
const S1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Z4 = S1.length,
    iy = (n) => (typeof n == "string" ? parseFloat(n) : n),
    ay = (n) => typeof n == "number" || lt.test(n);
function F4(n, a, s, r, u, f) {
    u
        ? ((n.opacity = Nt(0, s.opacity ?? 1, $4(r))),
            (n.opacityExit = Nt(a.opacity ?? 1, 0, J4(r))))
        : f && (n.opacity = Nt(a.opacity ?? 1, s.opacity ?? 1, r));
    for (let d = 0; d < Z4; d++) {
        const m = `border${S1[d]}Radius`;
        let h = ly(a, m),
            y = ly(s, m);
        if (h === void 0 && y === void 0) continue;
        (h || (h = 0),
            y || (y = 0),
            h === 0 || y === 0 || ay(h) === ay(y)
                ? ((n[m] = Math.max(Nt(iy(h), iy(y), r), 0)),
                    (nn.test(y) || nn.test(h)) && (n[m] += "%"))
                : (n[m] = y));
    }
    (a.rotate || s.rotate) && (n.rotate = Nt(a.rotate || 0, s.rotate || 0, r));
}
function ly(n, a) {
    return n[a] !== void 0 ? n[a] : n.borderRadius;
}
const $4 = T1(0, 0.5, ag),
    J4 = T1(0.5, 0.95, me);
function T1(n, a, s) {
    return (r) => (r < n ? 0 : r > a ? 1 : s(Ta(n, a, r)));
}
function sy(n, a) {
    ((n.min = a.min), (n.max = a.max));
}
function Be(n, a) {
    (sy(n.x, a.x), sy(n.y, a.y));
}
function ry(n, a) {
    ((n.translate = a.translate),
        (n.scale = a.scale),
        (n.originPoint = a.originPoint),
        (n.origin = a.origin));
}
function oy(n, a, s, r, u) {
    return (
        (n -= a),
        (n = Nr(n, 1 / s, r)),
        u !== void 0 && (n = Nr(n, 1 / u, r)),
        n
    );
}
function W4(n, a = 0, s = 1, r = 0.5, u, f = n, d = n) {
    if (
        (nn.test(a) &&
            ((a = parseFloat(a)), (a = Nt(d.min, d.max, a / 100) - d.min)),
            typeof a != "number")
    )
        return;
    let m = Nt(f.min, f.max, r);
    (n === f && (m -= a),
        (n.min = oy(n.min, a, s, m, u)),
        (n.max = oy(n.max, a, s, m, u)));
}
function uy(n, a, [s, r, u], f, d) {
    W4(n, a[s], a[r], a[u], a.scale, f, d);
}
const I4 = ["x", "scaleX", "originX"],
    tT = ["y", "scaleY", "originY"];
function cy(n, a, s, r) {
    (uy(n.x, a, I4, s ? s.x : void 0, r ? r.x : void 0),
        uy(n.y, a, tT, s ? s.y : void 0, r ? r.y : void 0));
}
function fy(n) {
    return n.translate === 0 && n.scale === 1;
}
function w1(n) {
    return fy(n.x) && fy(n.y);
}
function dy(n, a) {
    return n.min === a.min && n.max === a.max;
}
function eT(n, a) {
    return dy(n.x, a.x) && dy(n.y, a.y);
}
function hy(n, a) {
    return (
        Math.round(n.min) === Math.round(a.min) &&
        Math.round(n.max) === Math.round(a.max)
    );
}
function C1(n, a) {
    return hy(n.x, a.x) && hy(n.y, a.y);
}
function my(n) {
    return re(n.x) / re(n.y);
}
function py(n, a) {
    return (
        n.translate === a.translate &&
        n.scale === a.scale &&
        n.originPoint === a.originPoint
    );
}
class nT {
    constructor() {
        this.members = [];
    }
    add(a) {
        (wf(this.members, a), a.scheduleRender());
    }
    remove(a) {
        if (
            (Cf(this.members, a),
                a === this.prevLead && (this.prevLead = void 0),
                a === this.lead)
        ) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s);
        }
    }
    relegate(a) {
        const s = this.members.findIndex((u) => a === u);
        if (s === 0) return !1;
        let r;
        for (let u = s; u >= 0; u--) {
            const f = this.members[u];
            if (f.isPresent !== !1) {
                r = f;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(a, s) {
        const r = this.lead;
        if (a !== r && ((this.prevLead = r), (this.lead = a), a.show(), r)) {
            (r.instance && r.scheduleRender(),
                a.scheduleRender(),
                (a.resumeFrom = r),
                s && (a.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                ((a.snapshot = r.snapshot),
                    (a.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                a.root && a.root.isUpdating && (a.isLayoutDirty = !0));
            const { crossfade: u } = a.options;
            u === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((a) => {
            const { options: s, resumingFrom: r } = a;
            (s.onExitComplete && s.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete());
        });
    }
    scheduleRender() {
        this.members.forEach((a) => {
            a.instance && a.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function iT(n, a, s) {
    let r = "";
    const u = n.x.translate / a.x,
        f = n.y.translate / a.y,
        d = (s == null ? void 0 : s.z) || 0;
    if (
        ((u || f || d) && (r = `translate3d(${u}px, ${f}px, ${d}px) `),
            (a.x !== 1 || a.y !== 1) && (r += `scale(${1 / a.x}, ${1 / a.y}) `),
            s)
    ) {
        const {
            transformPerspective: y,
            rotate: p,
            rotateX: b,
            rotateY: S,
            skewX: j,
            skewY: M,
        } = s;
        (y && (r = `perspective(${y}px) ${r}`),
            p && (r += `rotate(${p}deg) `),
            b && (r += `rotateX(${b}deg) `),
            S && (r += `rotateY(${S}deg) `),
            j && (r += `skewX(${j}deg) `),
            M && (r += `skewY(${M}deg) `));
    }
    const m = n.x.scale * a.x,
        h = n.y.scale * a.y;
    return ((m !== 1 || h !== 1) && (r += `scale(${m}, ${h})`), r || "none");
}
const zc = ["", "X", "Y", "Z"],
    aT = 1e3;
let lT = 0;
function _c(n, a, s, r) {
    const { latestValues: u } = a;
    u[n] && ((s[n] = u[n]), a.setStaticValue(n, 0), r && (r[n] = 0));
}
function A1(n) {
    if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
    const { visualElement: a } = n.options;
    if (!a) return;
    const s = u1(a);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const { layout: u, layoutId: f } = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", bt, !(u || f));
    }
    const { parent: r } = n;
    r && !r.hasCheckedOptimisedAppear && A1(r);
}
function j1({
    attachResizeListener: n,
    defaultParent: a,
    measureScroll: s,
    checkIsScrollRoot: r,
    resetTransform: u,
}) {
    return class {
        constructor(d = {}, m = a == null ? void 0 : a()) {
            ((this.id = lT++),
                (this.animationId = 0),
                (this.animationCommitId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating &&
                        ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    ((this.projectionUpdateScheduled = !1),
                        this.nodes.forEach(oT),
                        this.nodes.forEach(dT),
                        this.nodes.forEach(hT),
                        this.nodes.forEach(uT));
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = d),
                (this.root = m ? m.root || m : this),
                (this.path = m ? [...m.path, m] : []),
                (this.parent = m),
                (this.depth = m ? m.depth + 1 : 0));
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new P4());
        }
        addEventListener(d, m) {
            return (
                this.eventHandlers.has(d) ||
                this.eventHandlers.set(d, new jf()),
                this.eventHandlers.get(d).add(m)
            );
        }
        notifyListeners(d, ...m) {
            const h = this.eventHandlers.get(d);
            h && h.notify(...m);
        }
        hasListeners(d) {
            return this.eventHandlers.has(d);
        }
        mount(d) {
            if (this.instance) return;
            ((this.isSVG = Pf(d) && !WS(d)), (this.instance = d));
            const { layoutId: m, layout: h, visualElement: y } = this.options;
            if (
                (y && !y.current && y.mount(d),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    this.root.hasTreeAnimated &&
                    (h || m) &&
                    (this.isLayoutDirty = !0),
                    n)
            ) {
                let p,
                    b = 0;
                const S = () => (this.root.updateBlockedByResize = !1);
                (bt.read(() => {
                    b = window.innerWidth;
                }),
                    n(d, () => {
                        const j = window.innerWidth;
                        j !== b &&
                            ((b = j),
                                (this.root.updateBlockedByResize = !0),
                                p && p(),
                                (p = Q4(S, 250)),
                                Ar.hasAnimatedSinceResize &&
                                ((Ar.hasAnimatedSinceResize = !1),
                                    this.nodes.forEach(vy)));
                    }));
            }
            (m && this.root.registerSharedNode(m, this),
                this.options.animate !== !1 &&
                y &&
                (m || h) &&
                this.addEventListener(
                    "didUpdate",
                    ({
                        delta: p,
                        hasLayoutChanged: b,
                        hasRelativeLayoutChanged: S,
                        layout: j,
                    }) => {
                        if (this.isTreeAnimationBlocked()) {
                            ((this.target = void 0),
                                (this.relativeTarget = void 0));
                            return;
                        }
                        const M =
                            this.options.transition ||
                            y.getDefaultTransition() ||
                            vT,
                            {
                                onLayoutAnimationStart: H,
                                onLayoutAnimationComplete: V,
                            } = y.getProps(),
                            U =
                                !this.targetLayout ||
                                !C1(this.targetLayout, j),
                            O = !b && S;
                        if (
                            this.options.layoutRoot ||
                            this.resumeFrom ||
                            O ||
                            (b && (U || !this.currentAnimation))
                        ) {
                            this.resumeFrom &&
                                ((this.resumingFrom = this.resumeFrom),
                                    (this.resumingFrom.resumingFrom = void 0));
                            const G = {
                                ...qf(M, "layout"),
                                onPlay: H,
                                onComplete: V,
                            };
                            ((y.shouldReduceMotion ||
                                this.options.layoutRoot) &&
                                ((G.delay = 0), (G.type = !1)),
                                this.startAnimation(G),
                                this.setAnimationOrigin(p, O));
                        } else
                            (b || vy(this),
                                this.isLead() &&
                                this.options.onExitComplete &&
                                this.options.onExitComplete());
                        this.targetLayout = j;
                    },
                ));
        }
        unmount() {
            (this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this));
            const d = this.getStack();
            (d && d.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                this.eventHandlers.clear(),
                Pe(this.updateProjection));
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(mT),
                    this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: d } = this.options;
            return d && d.getProps().transformTemplate;
        }
        willUpdate(d = !0) {
            if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation &&
                    !this.hasCheckedOptimisedAppear &&
                    A1(this),
                    !this.root.isUpdating && this.root.startUpdate(),
                    this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let p = 0; p < this.path.length; p++) {
                const b = this.path[p];
                ((b.shouldResetTransform = !0),
                    b.updateScroll("snapshot"),
                    b.options.layoutRoot && b.willUpdate(!1));
            }
            const { layoutId: m, layout: h } = this.options;
            if (m === void 0 && !h) return;
            const y = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = y
                ? y(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                d && this.notifyListeners("willUpdate"));
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                (this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(yy));
                return;
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(gy);
                return;
            }
            ((this.animationCommitId = this.animationId),
                this.isUpdating
                    ? ((this.isUpdating = !1),
                        this.nodes.forEach(fT),
                        this.nodes.forEach(sT),
                        this.nodes.forEach(rT))
                    : this.nodes.forEach(gy),
                this.clearAllSnapshots());
            const m = he.now();
            (($t.delta = an(0, 1e3 / 60, m - $t.timestamp)),
                ($t.timestamp = m),
                ($t.isProcessing = !0),
                Tc.update.process($t),
                Tc.preRender.process($t),
                Tc.render.process($t),
                ($t.isProcessing = !1));
        }
        didUpdate() {
            this.updateScheduled ||
                ((this.updateScheduled = !0), Xf.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            (this.nodes.forEach(cT), this.sharedNodes.forEach(pT));
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                    bt.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            bt.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot ||
                !this.instance ||
                ((this.snapshot = this.measure()),
                    this.snapshot &&
                    !re(this.snapshot.measuredBox.x) &&
                    !re(this.snapshot.measuredBox.y) &&
                    (this.snapshot = void 0));
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) &&
                    !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const d = this.layout;
            ((this.layout = this.measure(!1)),
                (this.layoutCorrected = Lt()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox));
            const { visualElement: m } = this.options;
            m &&
                m.notify(
                    "LayoutMeasure",
                    this.layout.layoutBox,
                    d ? d.layoutBox : void 0,
                );
        }
        updateScroll(d = "measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === d &&
                    (m = !1),
                    m && this.instance)
            ) {
                const h = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: h,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h,
                };
            }
        }
        resetTransform() {
            if (!u) return;
            const d =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
                m = this.projectionDelta && !w1(this.projectionDelta),
                h = this.getTransformTemplate(),
                y = h ? h(this.latestValues, "") : void 0,
                p = y !== this.prevTransformTemplateValue;
            d &&
                this.instance &&
                (m || Si(this.latestValues) || p) &&
                (u(this.instance, y),
                    (this.shouldResetTransform = !1),
                    this.scheduleRender());
        }
        measure(d = !0) {
            const m = this.measurePageBox();
            let h = this.removeElementScroll(m);
            return (
                d && (h = this.removeTransform(h)),
                xT(h),
                {
                    animationId: this.root.animationId,
                    measuredBox: m,
                    layoutBox: h,
                    latestValues: {},
                    source: this.id,
                }
            );
        }
        measurePageBox() {
            var y;
            const { visualElement: d } = this.options;
            if (!d) return Lt();
            const m = d.measureViewportBox();
            if (
                !(
                    ((y = this.scroll) == null ? void 0 : y.wasRoot) ||
                    this.path.some(bT)
                )
            ) {
                const { scroll: p } = this.root;
                p && (va(m.x, p.offset.x), va(m.y, p.offset.y));
            }
            return m;
        }
        removeElementScroll(d) {
            var h;
            const m = Lt();
            if ((Be(m, d), (h = this.scroll) != null && h.wasRoot)) return m;
            for (let y = 0; y < this.path.length; y++) {
                const p = this.path[y],
                    { scroll: b, options: S } = p;
                p !== this.root &&
                    b &&
                    S.layoutScroll &&
                    (b.wasRoot && Be(m, d),
                        va(m.x, b.offset.x),
                        va(m.y, b.offset.y));
            }
            return m;
        }
        applyTransform(d, m = !1) {
            const h = Lt();
            Be(h, d);
            for (let y = 0; y < this.path.length; y++) {
                const p = this.path[y];
                (!m &&
                    p.options.layoutScroll &&
                    p.scroll &&
                    p !== p.root &&
                    xa(h, { x: -p.scroll.offset.x, y: -p.scroll.offset.y }),
                    Si(p.latestValues) && xa(h, p.latestValues));
            }
            return (Si(this.latestValues) && xa(h, this.latestValues), h);
        }
        removeTransform(d) {
            const m = Lt();
            Be(m, d);
            for (let h = 0; h < this.path.length; h++) {
                const y = this.path[h];
                if (!y.instance || !Si(y.latestValues)) continue;
                nf(y.latestValues) && y.updateSnapshot();
                const p = Lt(),
                    b = y.measurePageBox();
                (Be(p, b),
                    cy(
                        m,
                        y.latestValues,
                        y.snapshot ? y.snapshot.layoutBox : void 0,
                        p,
                    ));
            }
            return (Si(this.latestValues) && cy(m, this.latestValues), m);
        }
        setTargetDelta(d) {
            ((this.targetDelta = d),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0));
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
            };
        }
        clearMeasurements() {
            ((this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(d = !1) {
            var S;
            const m = this.getLead();
            (this.isProjectionDirty ||
                (this.isProjectionDirty = m.isProjectionDirty),
                this.isTransformDirty ||
                (this.isTransformDirty = m.isTransformDirty),
                this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
            const h = !!this.resumingFrom || this !== m;
            if (
                !(
                    d ||
                    (h && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    ((S = this.parent) != null && S.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: p, layoutId: b } = this.options;
            if (!(!this.layout || !(p || b))) {
                if (
                    ((this.resolvedRelativeTargetAt = $t.timestamp),
                        !this.targetDelta && !this.relativeTarget)
                ) {
                    const j = this.getClosestProjectingParent();
                    j && j.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = j),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = Lt()),
                            (this.relativeTargetOrigin = Lt()),
                            Bl(
                                this.relativeTargetOrigin,
                                this.layout.layoutBox,
                                j.layout.layoutBox,
                            ),
                            Be(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (
                    !(!this.relativeTarget && !this.targetDelta) &&
                    (this.target ||
                        ((this.target = Lt()),
                            (this.targetWithTransforms = Lt())),
                        this.relativeTarget &&
                            this.relativeTargetOrigin &&
                            this.relativeParent &&
                            this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                                j4(
                                    this.target,
                                    this.relativeTarget,
                                    this.relativeParent.target,
                                ))
                            : this.targetDelta
                                ? (this.resumingFrom
                                    ? (this.target = this.applyTransform(
                                        this.layout.layoutBox,
                                    ))
                                    : Be(this.target, this.layout.layoutBox),
                                    i1(this.target, this.targetDelta))
                                : Be(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                ) {
                    this.attemptToResolveRelativeTarget = !1;
                    const j = this.getClosestProjectingParent();
                    j &&
                        !!j.resumingFrom == !!this.resumingFrom &&
                        !j.options.layoutScroll &&
                        j.target &&
                        this.animationProgress !== 1
                        ? ((this.relativeParent = j),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = Lt()),
                            (this.relativeTargetOrigin = Lt()),
                            Bl(this.relativeTargetOrigin, this.target, j.target),
                            Be(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    nf(this.parent.latestValues) ||
                    n1(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget ||
                    this.targetDelta ||
                    this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var M;
            const d = this.getLead(),
                m = !!this.resumingFrom || this !== d;
            let h = !0;
            if (
                ((this.isProjectionDirty ||
                    ((M = this.parent) != null && M.isProjectionDirty)) &&
                    (h = !1),
                    m &&
                    (this.isSharedProjectionDirty || this.isTransformDirty) &&
                    (h = !1),
                    this.resolvedRelativeTargetAt === $t.timestamp && (h = !1),
                    h)
            )
                return;
            const { layout: y, layoutId: p } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                    this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(y || p))
            )
                return;
            Be(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x,
                S = this.treeScale.y;
            (H3(this.layoutCorrected, this.treeScale, this.path, m),
                d.layout &&
                !d.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                ((d.target = d.layout.layoutBox),
                    (d.targetWithTransforms = Lt())));
            const { target: j } = d;
            if (!j) {
                this.prevProjectionDelta &&
                    (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            (!this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (ry(this.prevProjectionDelta.x, this.projectionDelta.x),
                    ry(this.prevProjectionDelta.y, this.projectionDelta.y)),
                Vl(
                    this.projectionDelta,
                    this.layoutCorrected,
                    j,
                    this.latestValues,
                ),
                (this.treeScale.x !== b ||
                    this.treeScale.y !== S ||
                    !py(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                    !py(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
                ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", j)));
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(d = !0) {
            var m;
            if (
                ((m = this.options.visualElement) == null || m.scheduleRender(),
                    d)
            ) {
                const h = this.getStack();
                h && h.scheduleRender();
            }
            this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            ((this.prevProjectionDelta = ba()),
                (this.projectionDelta = ba()),
                (this.projectionDeltaWithTransform = ba()));
        }
        setAnimationOrigin(d, m = !1) {
            const h = this.snapshot,
                y = h ? h.latestValues : {},
                p = { ...this.latestValues },
                b = ba();
            ((!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !m));
            const S = Lt(),
                j = h ? h.source : void 0,
                M = this.layout ? this.layout.source : void 0,
                H = j !== M,
                V = this.getStack(),
                U = !V || V.members.length <= 1,
                O = !!(
                    H &&
                    !U &&
                    this.options.crossfade === !0 &&
                    !this.path.some(gT)
                );
            this.animationProgress = 0;
            let G;
            ((this.mixTargetDelta = (K) => {
                const z = K / 1e3;
                (xy(b.x, d.x, z),
                    xy(b.y, d.y, z),
                    this.setTargetDelta(b),
                    this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (Bl(
                        S,
                        this.layout.layoutBox,
                        this.relativeParent.layout.layoutBox,
                    ),
                        yT(
                            this.relativeTarget,
                            this.relativeTargetOrigin,
                            S,
                            z,
                        ),
                        G &&
                        eT(this.relativeTarget, G) &&
                        (this.isProjectionDirty = !1),
                        G || (G = Lt()),
                        Be(G, this.relativeTarget)),
                    H &&
                    ((this.animationValues = p),
                        F4(p, y, this.latestValues, z, O, U)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = z));
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
        }
        startAnimation(d) {
            var m, h, y;
            (this.notifyListeners("animationStart"),
                (m = this.currentAnimation) == null || m.stop(),
                (y =
                    (h = this.resumingFrom) == null
                        ? void 0
                        : h.currentAnimation) == null || y.stop(),
                this.pendingAnimation &&
                (Pe(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                (this.pendingAnimation = bt.update(() => {
                    ((Ar.hasAnimatedSinceResize = !0),
                        this.motionValue || (this.motionValue = Ke(0)),
                        (this.currentAnimation = X4(
                            this.motionValue,
                            [0, 1e3],
                            {
                                ...d,
                                velocity: 0,
                                isSync: !0,
                                onUpdate: (p) => {
                                    (this.mixTargetDelta(p),
                                        d.onUpdate && d.onUpdate(p));
                                },
                                onStop: () => { },
                                onComplete: () => {
                                    (d.onComplete && d.onComplete(),
                                        this.completeAnimation());
                                },
                            },
                        )),
                        this.resumingFrom &&
                        (this.resumingFrom.currentAnimation =
                            this.currentAnimation),
                        (this.pendingAnimation = void 0));
                })));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
            const d = this.getStack();
            (d && d.exitAnimationComplete(),
                (this.resumingFrom =
                    this.currentAnimation =
                    this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
            (this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(aT),
                    this.currentAnimation.stop()),
                this.completeAnimation());
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {
                targetWithTransforms: m,
                target: h,
                layout: y,
                latestValues: p,
            } = d;
            if (!(!m || !h || !y)) {
                if (
                    this !== d &&
                    this.layout &&
                    y &&
                    E1(
                        this.options.animationType,
                        this.layout.layoutBox,
                        y.layoutBox,
                    )
                ) {
                    h = this.target || Lt();
                    const b = re(this.layout.layoutBox.x);
                    ((h.x.min = d.target.x.min), (h.x.max = h.x.min + b));
                    const S = re(this.layout.layoutBox.y);
                    ((h.y.min = d.target.y.min), (h.y.max = h.y.min + S));
                }
                (Be(m, h),
                    xa(m, p),
                    Vl(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        m,
                        p,
                    ));
            }
        }
        registerSharedNode(d, m) {
            (this.sharedNodes.has(d) || this.sharedNodes.set(d, new nT()),
                this.sharedNodes.get(d).add(m));
            const y = m.options.initialPromotionConfig;
            m.promote({
                transition: y ? y.transition : void 0,
                preserveFollowOpacity:
                    y && y.shouldPreserveFollowOpacity
                        ? y.shouldPreserveFollowOpacity(m)
                        : void 0,
            });
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0;
        }
        getLead() {
            var m;
            const { layoutId: d } = this.options;
            return d
                ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
                : this;
        }
        getPrevLead() {
            var m;
            const { layoutId: d } = this.options;
            return d
                ? (m = this.getStack()) == null
                    ? void 0
                    : m.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: d } = this.options;
            if (d) return this.root.sharedNodes.get(d);
        }
        promote({
            needsReset: d,
            transition: m,
            preserveFollowOpacity: h,
        } = {}) {
            const y = this.getStack();
            (y && y.promote(this, h),
                d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                m && this.setOptions({ transition: m }));
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: d } = this.options;
            if (!d) return;
            let m = !1;
            const { latestValues: h } = d;
            if (
                ((h.z ||
                    h.rotate ||
                    h.rotateX ||
                    h.rotateY ||
                    h.rotateZ ||
                    h.skewX ||
                    h.skewY) &&
                    (m = !0),
                    !m)
            )
                return;
            const y = {};
            h.z && _c("z", d, y, this.animationValues);
            for (let p = 0; p < zc.length; p++)
                (_c(`rotate${zc[p]}`, d, y, this.animationValues),
                    _c(`skew${zc[p]}`, d, y, this.animationValues));
            d.render();
            for (const p in y)
                (d.setStaticValue(p, y[p]),
                    this.animationValues && (this.animationValues[p] = y[p]));
            d.scheduleRender();
        }
        applyProjectionStyles(d, m) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                d.visibility = "hidden";
                return;
            }
            const h = this.getTransformTemplate();
            if (this.needsReset) {
                ((this.needsReset = !1),
                    (d.visibility = ""),
                    (d.opacity = ""),
                    (d.pointerEvents =
                        Cr(m == null ? void 0 : m.pointerEvents) || ""),
                    (d.transform = h ? h(this.latestValues, "") : "none"));
                return;
            }
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                (this.options.layoutId &&
                    ((d.opacity =
                        this.latestValues.opacity !== void 0
                            ? this.latestValues.opacity
                            : 1),
                        (d.pointerEvents =
                            Cr(m == null ? void 0 : m.pointerEvents) || "")),
                    this.hasProjected &&
                    !Si(this.latestValues) &&
                    ((d.transform = h ? h({}, "") : "none"),
                        (this.hasProjected = !1)));
                return;
            }
            d.visibility = "";
            const p = y.animationValues || y.latestValues;
            this.applyTransformsToTarget();
            let b = iT(this.projectionDeltaWithTransform, this.treeScale, p);
            (h && (b = h(p, b)), (d.transform = b));
            const { x: S, y: j } = this.projectionDelta;
            ((d.transformOrigin = `${S.origin * 100}% ${j.origin * 100}% 0`),
                y.animationValues
                    ? (d.opacity =
                        y === this
                            ? (p.opacity ?? this.latestValues.opacity ?? 1)
                            : this.preserveOpacity
                                ? this.latestValues.opacity
                                : p.opacityExit)
                    : (d.opacity =
                        y === this
                            ? p.opacity !== void 0
                                ? p.opacity
                                : ""
                            : p.opacityExit !== void 0
                                ? p.opacityExit
                                : 0));
            for (const M in Yl) {
                if (p[M] === void 0) continue;
                const { correct: H, applyTo: V, isCSSVariable: U } = Yl[M],
                    O = b === "none" ? p[M] : H(p[M], y);
                if (V) {
                    const G = V.length;
                    for (let K = 0; K < G; K++) d[V[K]] = O;
                } else
                    U
                        ? (this.options.visualElement.renderState.vars[M] = O)
                        : (d[M] = O);
            }
            this.options.layoutId &&
                (d.pointerEvents =
                    y === this
                        ? Cr(m == null ? void 0 : m.pointerEvents) || ""
                        : "none");
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            (this.root.nodes.forEach((d) => {
                var m;
                return (m = d.currentAnimation) == null ? void 0 : m.stop();
            }),
                this.root.nodes.forEach(yy),
                this.root.sharedNodes.clear());
        }
    };
}
function sT(n) {
    n.updateLayout();
}
function rT(n) {
    var s;
    const a = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && a && n.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: u } = n.layout,
            { animationType: f } = n.options,
            d = a.source !== n.layout.source;
        f === "size"
            ? Ue((b) => {
                const S = d ? a.measuredBox[b] : a.layoutBox[b],
                    j = re(S);
                ((S.min = r[b].min), (S.max = S.min + j));
            })
            : E1(f, a.layoutBox, r) &&
            Ue((b) => {
                const S = d ? a.measuredBox[b] : a.layoutBox[b],
                    j = re(r[b]);
                ((S.max = S.min + j),
                    n.relativeTarget &&
                    !n.currentAnimation &&
                    ((n.isProjectionDirty = !0),
                        (n.relativeTarget[b].max =
                            n.relativeTarget[b].min + j)));
            });
        const m = ba();
        Vl(m, r, a.layoutBox);
        const h = ba();
        d
            ? Vl(h, n.applyTransform(u, !0), a.measuredBox)
            : Vl(h, r, a.layoutBox);
        const y = !w1(m);
        let p = !1;
        if (!n.resumeFrom) {
            const b = n.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
                const { snapshot: S, layout: j } = b;
                if (S && j) {
                    const M = Lt();
                    Bl(M, a.layoutBox, S.layoutBox);
                    const H = Lt();
                    (Bl(H, r, j.layoutBox),
                        C1(M, H) || (p = !0),
                        b.options.layoutRoot &&
                        ((n.relativeTarget = H),
                            (n.relativeTargetOrigin = M),
                            (n.relativeParent = b)));
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: r,
            snapshot: a,
            delta: h,
            layoutDelta: m,
            hasLayoutChanged: y,
            hasRelativeLayoutChanged: p,
        });
    } else if (n.isLead()) {
        const { onExitComplete: r } = n.options;
        r && r();
    }
    n.options.transition = void 0;
}
function oT(n) {
    n.parent &&
        (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
            n.isSharedProjectionDirty ||
            (n.isSharedProjectionDirty = !!(
                n.isProjectionDirty ||
                n.parent.isProjectionDirty ||
                n.parent.isSharedProjectionDirty
            )),
            n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function uT(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function cT(n) {
    n.clearSnapshot();
}
function yy(n) {
    n.clearMeasurements();
}
function gy(n) {
    n.isLayoutDirty = !1;
}
function fT(n) {
    const { visualElement: a } = n.options;
    (a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
        n.resetTransform());
}
function vy(n) {
    (n.finishAnimation(),
        (n.targetDelta = n.relativeTarget = n.target = void 0),
        (n.isProjectionDirty = !0));
}
function dT(n) {
    n.resolveTargetDelta();
}
function hT(n) {
    n.calcProjection();
}
function mT(n) {
    n.resetSkewAndRotation();
}
function pT(n) {
    n.removeLeadSnapshot();
}
function xy(n, a, s) {
    ((n.translate = Nt(a.translate, 0, s)),
        (n.scale = Nt(a.scale, 1, s)),
        (n.origin = a.origin),
        (n.originPoint = a.originPoint));
}
function by(n, a, s, r) {
    ((n.min = Nt(a.min, s.min, r)), (n.max = Nt(a.max, s.max, r)));
}
function yT(n, a, s, r) {
    (by(n.x, a.x, s.x, r), by(n.y, a.y, s.y, r));
}
function gT(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const vT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Sy = (n) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(n),
    Ty = Sy("applewebkit/") && !Sy("chrome/") ? Math.round : me;
function wy(n) {
    ((n.min = Ty(n.min)), (n.max = Ty(n.max)));
}
function xT(n) {
    (wy(n.x), wy(n.y));
}
function E1(n, a, s) {
    return (
        n === "position" || (n === "preserve-aspect" && !A4(my(a), my(s), 0.2))
    );
}
function bT(n) {
    var a;
    return n !== n.root && ((a = n.scroll) == null ? void 0 : a.wasRoot);
}
const ST = j1({
    attachResizeListener: (n, a) => Gl(n, "resize", a),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
}),
    Vc = { current: void 0 },
    M1 = j1({
        measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
        defaultParent: () => {
            if (!Vc.current) {
                const n = new ST({});
                (n.mount(window),
                    n.setOptions({ layoutScroll: !0 }),
                    (Vc.current = n));
            }
            return Vc.current;
        },
        resetTransform: (n, a) => {
            n.style.transform = a !== void 0 ? a : "none";
        },
        checkIsScrollRoot: (n) =>
            window.getComputedStyle(n).position === "fixed",
    }),
    TT = {
        pan: { Feature: H4 },
        drag: { Feature: k4, ProjectionNode: M1, MeasureLayout: b1 },
    };
function Cy(n, a, s) {
    const { props: r } = n;
    n.animationState &&
        r.whileHover &&
        n.animationState.setActive("whileHover", s === "Start");
    const u = "onHover" + s,
        f = r[u];
    f && bt.postRender(() => f(a, $l(a)));
}
class wT extends ei {
    mount() {
        const { current: a } = this.node;
        a &&
            (this.unmount = US(
                a,
                (s, r) => (
                    Cy(this.node, r, "Start"),
                    (u) => Cy(this.node, u, "End")
                ),
            ));
    }
    unmount() { }
}
class CT extends ei {
    constructor() {
        (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
        let a = !1;
        try {
            a = this.node.current.matches(":focus-visible");
        } catch {
            a = !0;
        }
        !a ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !0),
                (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1),
                (this.isActive = !1));
    }
    mount() {
        this.unmount = Ql(
            Gl(this.node.current, "focus", () => this.onFocus()),
            Gl(this.node.current, "blur", () => this.onBlur()),
        );
    }
    unmount() { }
}
function Ay(n, a, s) {
    const { props: r } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState &&
        r.whileTap &&
        n.animationState.setActive("whileTap", s === "Start");
    const u = "onTap" + (s === "End" ? "" : s),
        f = r[u];
    f && bt.postRender(() => f(a, $l(a)));
}
class AT extends ei {
    mount() {
        const { current: a } = this.node;
        a &&
            (this.unmount = YS(
                a,
                (s, r) => (
                    Ay(this.node, r, "Start"),
                    (u, { success: f }) =>
                        Ay(this.node, u, f ? "End" : "Cancel")
                ),
                { useGlobalTarget: this.node.props.globalTapTarget },
            ));
    }
    unmount() { }
}
const cf = new WeakMap(),
    Bc = new WeakMap(),
    jT = (n) => {
        const a = cf.get(n.target);
        a && a(n);
    },
    ET = (n) => {
        n.forEach(jT);
    };
function MT({ root: n, ...a }) {
    const s = n || document;
    Bc.has(s) || Bc.set(s, {});
    const r = Bc.get(s),
        u = JSON.stringify(a);
    return (
        r[u] || (r[u] = new IntersectionObserver(ET, { root: n, ...a })),
        r[u]
    );
}
function DT(n, a, s) {
    const r = MT(a);
    return (
        cf.set(n, s),
        r.observe(n),
        () => {
            (cf.delete(n), r.unobserve(n));
        }
    );
}
const NT = { some: 0, all: 1 };
class RT extends ei {
    constructor() {
        (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
        this.unmount();
        const { viewport: a = {} } = this.node.getProps(),
            { root: s, margin: r, amount: u = "some", once: f } = a,
            d = {
                root: s ? s.current : void 0,
                rootMargin: r,
                threshold: typeof u == "number" ? u : NT[u],
            },
            m = (h) => {
                const { isIntersecting: y } = h;
                if (
                    this.isInView === y ||
                    ((this.isInView = y), f && !y && this.hasEnteredView)
                )
                    return;
                (y && (this.hasEnteredView = !0),
                    this.node.animationState &&
                    this.node.animationState.setActive("whileInView", y));
                const { onViewportEnter: p, onViewportLeave: b } =
                    this.node.getProps(),
                    S = y ? p : b;
                S && S(h);
            };
        return DT(this.node.current, d, m);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: a, prevProps: s } = this.node;
        ["amount", "margin", "root"].some(OT(a, s)) && this.startObserver();
    }
    unmount() { }
}
function OT({ viewport: n = {} }, { viewport: a = {} } = {}) {
    return (s) => n[s] !== a[s];
}
const zT = {
    inView: { Feature: RT },
    tap: { Feature: AT },
    focus: { Feature: CT },
    hover: { Feature: wT },
},
    _T = { layout: { ProjectionNode: M1, MeasureLayout: b1 } },
    VT = { ...x4, ...zT, ...TT, ..._T },
    Q = L3(VT, $3),
    BT = 50,
    jy = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
    }),
    LT = () => ({ time: 0, x: jy(), y: jy() }),
    UT = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
    };
function Ey(n, a, s, r) {
    const u = s[a],
        { length: f, position: d } = UT[a],
        m = u.current,
        h = s.time;
    ((u.current = n[`scroll${d}`]),
        (u.scrollLength = n[`scroll${f}`] - n[`client${f}`]),
        (u.offset.length = 0),
        (u.offset[0] = 0),
        (u.offset[1] = u.scrollLength),
        (u.progress = Ta(0, u.scrollLength, u.current)));
    const y = r - h;
    u.velocity = y > BT ? 0 : Ef(u.current - m, y);
}
function kT(n, a, s) {
    (Ey(n, "x", a, s), Ey(n, "y", a, s), (a.time = s));
}
function HT(n, a) {
    const s = { x: 0, y: 0 };
    let r = n;
    for (; r && r !== a;)
        if (Gf(r))
            ((s.x += r.offsetLeft), (s.y += r.offsetTop), (r = r.offsetParent));
        else if (r.tagName === "svg") {
            const u = r.getBoundingClientRect();
            r = r.parentElement;
            const f = r.getBoundingClientRect();
            ((s.x += u.left - f.left), (s.y += u.top - f.top));
        } else if (r instanceof SVGGraphicsElement) {
            const { x: u, y: f } = r.getBBox();
            ((s.x += u), (s.y += f));
            let d = null,
                m = r.parentNode;
            for (; !d;) (m.tagName === "svg" && (d = m), (m = r.parentNode));
            r = d;
        } else break;
    return s;
}
const ff = { start: 0, center: 0.5, end: 1 };
function My(n, a, s = 0) {
    let r = 0;
    if ((n in ff && (n = ff[n]), typeof n == "string")) {
        const u = parseFloat(n);
        n.endsWith("px")
            ? (r = u)
            : n.endsWith("%")
                ? (n = u / 100)
                : n.endsWith("vw")
                    ? (r = (u / 100) * document.documentElement.clientWidth)
                    : n.endsWith("vh")
                        ? (r = (u / 100) * document.documentElement.clientHeight)
                        : (n = u);
    }
    return (typeof n == "number" && (r = a * n), s + r);
}
const qT = [0, 0];
function YT(n, a, s, r) {
    let u = Array.isArray(n) ? n : qT,
        f = 0,
        d = 0;
    return (
        typeof n == "number"
            ? (u = [n, n])
            : typeof n == "string" &&
            ((n = n.trim()),
                n.includes(" ")
                    ? (u = n.split(" "))
                    : (u = [n, ff[n] ? n : "0"])),
        (f = My(u[0], s, r)),
        (d = My(u[1], a)),
        f - d
    );
}
const GT = {
    All: [
        [0, 0],
        [1, 1],
    ],
},
    XT = { x: 0, y: 0 };
function KT(n) {
    return "getBBox" in n && n.tagName !== "svg"
        ? n.getBBox()
        : { width: n.clientWidth, height: n.clientHeight };
}
function PT(n, a, s) {
    const { offset: r = GT.All } = s,
        { target: u = n, axis: f = "y" } = s,
        d = f === "y" ? "height" : "width",
        m = u !== n ? HT(u, n) : XT,
        h = u === n ? { width: n.scrollWidth, height: n.scrollHeight } : KT(u),
        y = { width: n.clientWidth, height: n.clientHeight };
    a[f].offset.length = 0;
    let p = !a[f].interpolate;
    const b = r.length;
    for (let S = 0; S < b; S++) {
        const j = YT(r[S], y[d], h[d], m[f]);
        (!p && j !== a[f].interpolatorOffsets[S] && (p = !0),
            (a[f].offset[S] = j));
    }
    (p &&
        ((a[f].interpolate = Bf(a[f].offset, xg(r), { clamp: !1 })),
            (a[f].interpolatorOffsets = [...a[f].offset])),
        (a[f].progress = an(0, 1, a[f].interpolate(a[f].current))));
}
function QT(n, a = n, s) {
    if (((s.x.targetOffset = 0), (s.y.targetOffset = 0), a !== n)) {
        let r = a;
        for (; r && r !== n;)
            ((s.x.targetOffset += r.offsetLeft),
                (s.y.targetOffset += r.offsetTop),
                (r = r.offsetParent));
    }
    ((s.x.targetLength = a === n ? a.scrollWidth : a.clientWidth),
        (s.y.targetLength = a === n ? a.scrollHeight : a.clientHeight),
        (s.x.containerLength = n.clientWidth),
        (s.y.containerLength = n.clientHeight));
}
function ZT(n, a, s, r = {}) {
    return {
        measure: (u) => {
            (QT(n, r.target, s),
                kT(n, s, u),
                (r.offset || r.target) && PT(n, s, r));
        },
        notify: () => a(s),
    };
}
const Ml = new WeakMap(),
    Dy = new WeakMap(),
    Lc = new WeakMap(),
    Ny = (n) => (n === document.scrollingElement ? window : n);
function D1(n, { container: a = document.scrollingElement, ...s } = {}) {
    if (!a) return me;
    let r = Lc.get(a);
    r || ((r = new Set()), Lc.set(a, r));
    const u = LT(),
        f = ZT(a, n, u, s);
    if ((r.add(f), !Ml.has(a))) {
        const m = () => {
            for (const b of r) b.measure($t.timestamp);
            bt.preUpdate(h);
        },
            h = () => {
                for (const b of r) b.notify();
            },
            y = () => bt.read(m);
        Ml.set(a, y);
        const p = Ny(a);
        (window.addEventListener("resize", y, { passive: !0 }),
            a !== document.documentElement && Dy.set(a, JS(a, y)),
            p.addEventListener("scroll", y, { passive: !0 }),
            y());
    }
    const d = Ml.get(a);
    return (
        bt.read(d, !1, !0),
        () => {
            var y;
            Pe(d);
            const m = Lc.get(a);
            if (!m || (m.delete(f), m.size)) return;
            const h = Ml.get(a);
            (Ml.delete(a),
                h &&
                (Ny(a).removeEventListener("scroll", h),
                    (y = Dy.get(a)) == null || y(),
                    window.removeEventListener("resize", h)));
        }
    );
}
const Ry = new Map();
function FT(n) {
    const a = { value: 0 },
        s = D1((r) => {
            a.value = r[n.axis].progress * 100;
        }, n);
    return { currentTime: a, cancel: s };
}
function N1({ source: n, container: a, ...s }) {
    const { axis: r } = s;
    n && (a = n);
    const u = Ry.get(a) ?? new Map();
    Ry.set(a, u);
    const f = s.target ?? "self",
        d = u.get(f) ?? {},
        m = r + (s.offset ?? []).join(",");
    return (
        d[m] ||
        (d[m] =
            !s.target && wg()
                ? new ScrollTimeline({ source: a, axis: r })
                : FT({ container: a, ...s })),
        d[m]
    );
}
function $T(n, a) {
    const s = N1(a);
    return n.attachTimeline({
        timeline: a.target ? void 0 : s,
        observe: (r) => (
            r.pause(),
            Hg((u) => {
                r.time = r.duration * u;
            }, s)
        ),
    });
}
function JT(n) {
    return n.length === 2;
}
function WT(n, a) {
    return JT(n)
        ? D1((s) => {
            n(s[a.axis].progress, s);
        }, a)
        : Hg(n, N1(a));
}
function IT(
    n,
    { axis: a = "y", container: s = document.scrollingElement, ...r } = {},
) {
    if (!s) return me;
    const u = { axis: a, container: s, ...r };
    return typeof n == "function" ? WT(n, u) : $T(n, u);
}
const t6 = () => ({
    scrollX: Ke(0),
    scrollY: Ke(0),
    scrollXProgress: Ke(0),
    scrollYProgress: Ke(0),
}),
    gr = (n) => (n ? !n.current : !1);
function e6({ container: n, target: a, ...s } = {}) {
    const r = Di(t6),
        u = _.useRef(null),
        f = _.useRef(!1),
        d = _.useCallback(
            () => (
                (u.current = IT(
                    (m, { x: h, y }) => {
                        (r.scrollX.set(h.current),
                            r.scrollXProgress.set(h.progress),
                            r.scrollY.set(y.current),
                            r.scrollYProgress.set(y.progress));
                    },
                    {
                        ...s,
                        container: (n == null ? void 0 : n.current) || void 0,
                        target: (a == null ? void 0 : a.current) || void 0,
                    },
                )),
                () => {
                    var m;
                    (m = u.current) == null || m.call(u);
                }
            ),
            [n, a, JSON.stringify(s.offset)],
        );
    return (
        Pl(() => {
            if (((f.current = !1), gr(n) || gr(a))) {
                f.current = !0;
                return;
            } else return d();
        }, [d]),
        _.useEffect(() => {
            if (f.current) return (Ul(!gr(n)), Ul(!gr(a)), d());
        }, [d]),
        r
    );
}
function df(n) {
    const a = Di(() => Ke(n)),
        { isStatic: s } = _.useContext(qr);
    if (s) {
        const [, r] = _.useState(n);
        _.useEffect(() => a.on("change", r), []);
    }
    return a;
}
function id(n, a) {
    const s = df(a()),
        r = () => s.set(a());
    return (
        r(),
        Pl(() => {
            const u = () => bt.preRender(r, !1, !0),
                f = n.map((d) => d.on("change", u));
            return () => {
                (f.forEach((d) => d()), Pe(r));
            };
        }),
        s
    );
}
function n6(n, ...a) {
    const s = n.length;
    function r() {
        let u = "";
        for (let f = 0; f < s; f++) {
            u += n[f];
            const d = a[f];
            d && (u += Jt(d) ? d.get() : d);
        }
        return u;
    }
    return id(a.filter(Jt), r);
}
function i6(n) {
    ((zl.current = []), n());
    const a = id(zl.current, n);
    return ((zl.current = void 0), a);
}
function Oy(n, a, s, r) {
    if (typeof n == "function") return i6(n);
    const u = typeof a == "function" ? a : IS(a, s, r);
    return Array.isArray(n) ? zy(n, u) : zy([n], ([f]) => u(f));
}
function zy(n, a) {
    const s = Di(() => []);
    return id(n, () => {
        s.length = 0;
        const r = n.length;
        for (let u = 0; u < r; u++) s[u] = n[u].get();
        return a(s);
    });
}
function a6(n) {
    n.values.forEach((a) => a.stop());
}
function hf(n, a) {
    [...a].reverse().forEach((r) => {
        const u = n.getVariant(r);
        (u && ed(n, u),
            n.variantChildren &&
            n.variantChildren.forEach((f) => {
                hf(f, a);
            }));
    });
}
function l6(n, a) {
    if (Array.isArray(a)) return hf(n, a);
    if (typeof a == "string") return hf(n, [a]);
    ed(n, a);
}
function s6() {
    const n = new Set(),
        a = {
            subscribe(s) {
                return (n.add(s), () => void n.delete(s));
            },
            start(s, r) {
                const u = [];
                return (
                    n.forEach((f) => {
                        u.push(d1(f, s, { transitionOverride: r }));
                    }),
                    Promise.all(u)
                );
            },
            set(s) {
                return n.forEach((r) => {
                    l6(r, s);
                });
            },
            stop() {
                n.forEach((s) => {
                    a6(s);
                });
            },
            mount() {
                return () => {
                    a.stop();
                };
            },
        };
    return a;
}
function r6() {
    const n = Di(s6);
    return (Pl(n.mount, []), n);
}
const o6 = r6,
    Kr = ({ title: n, subtitle: a, highlight: s, align: r = "center" }) => {
        const { themeColors: u } = Kt((d) => d.themeReducer),
            f = { center: "text-center mx-auto", left: "text-left mr-auto" };
        return v.jsxs(Q.div, {
            className: `mb-16 ${f[r]} max-w-3xl`,
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            children: [
                v.jsxs(Q.h2, {
                    className: "text-4xl md:text-5xl font-bold mb-4",
                    style: { color: u.text },
                    whileHover: { scale: 1.02 },
                    children: [
                        n,
                        " ",
                        s &&
                        v.jsx("span", {
                            className: "inline-block font-bold",
                            style: {
                                backgroundImage: `linear-gradient(90deg, ${u.primaryColor}, ${u.secondary})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            },
                            children: s,
                        }),
                    ],
                }),
                v.jsx(Q.div, {
                    className:
                        "w-24 h-1.5 rounded-full relative overflow-hidden mx-auto",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.3 },
                    children: v.jsx(Q.div, {
                        className: "absolute inset-0",
                        style: {
                            background: `linear-gradient(90deg, ${u.primaryColor}, ${u.secondary})`,
                            boxShadow: `0 0 12px ${u.primaryColor}80`,
                        },
                        initial: { scaleX: 0 },
                        animate: { scaleX: 1 },
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    }),
                }),
                a &&
                v.jsx(Q.p, {
                    className: "text-lg mt-6",
                    style: { color: u.summeryText },
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    children: a,
                }),
            ],
        });
    },
    u6 =
        "I’m Kunal Bhosale, a passionate Software Developer and Founder of NXTVEL Technologies. I specialize in building fast, scalable, and secure web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js. I focus on system design, performance optimization, and automation to deliver real-world business value.",
    c6 = "Software Developer & Founder",
    // f6 = "https://harsh-portfolio-zeta-ruby.vercel.app/harsh-profile-lit.png",
    // d6 = "https://harsh-portfolio-zeta-ruby.vercel.app/harsh-profile.png",
    f6 = baseUrl + "/public/assets/image/kunalbg.png",
    d6 = baseUrl + "/public/assets/image/kunalbg.png",
    h6 = [
        {
            title: "Frontend Developer & Team Lead",
            location: "Navindhara Research & IT Organisation",
            duration: "Aug 2025 – Present",
            description: [
                "Led frontend architecture and development using React.js.",
                "Built reusable UI components and optimized performance.",
                "Mentored junior developers and conducted code reviews.",
            ],
            icon: "💻",
        },
        {
            title: "Founder & CEO",
            location: "NXTVEL Technologies",
            duration: "Oct 2024 – Present",
            description: [
                "Built an AI-powered website builder platform.",
                "Delivered custom web & mobile app solutions.",
                "Managed product, business growth, and client acquisition.",
            ],
            icon: "🚀",
        },
        {
            title: "Social Media Executive & IT",
            location: "The Bullevents Management Pvt. Ltd.",
            duration: "Oct 2023 – Mar 2025",
            description: [
                "Developed and maintained the official company website.",
                "Managed content systems and improved engagement.",
            ],
            icon: "📈",
        },
        {
            title: "Frontend Developer",
            location: "Singinn Software Pvt. Ltd.",
            duration: "May 2023 – Jun 2024",
            description: [
                "Worked on frontend development using HTML, CSS, JavaScript.",
                "Collaborated in team-based environments.",
            ],
            icon: "👨‍💻",
        },
    ],
    m6 = [
        {
            location: "Lovely Professional University (LPU)",
            duration: "Aug 2025 - Oct 2027",
            title: "Master of Computer Applications - MCA",
            icon: "🎓",
        },
        {
            location: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
            duration: "Oct 2021 - Oct 2024",
            title: "Bachelor of Computer Applications - BCA",
            icon: "🎓",
        },
        {
            location: "Subhadra Kumar Inter College",
            duration: "Completed 2021",
            title: "Intermediate",
            icon: "🏫",
        },
    ],
    p6 = [
        {
            title: "Ultimate Web Development Course 2025",
            location: "Instructor: Haris Ali Khan",
            duration: "2024",
            description: [
                "Covered HTML5, CSS3, JavaScript, React, Node.js, and responsive website development.",
            ],
            icon: "📜",
        },
        {
            title: "TCS MasterCraft™ DataPlus",
            location: "TCS MasterCraft™ Academy",
            duration: "October 2022",
            description: [
                "Gained foundational understanding of data management, automation, and analytics concepts using TCS DataPlus tools",
            ],
            icon: "🏅",
        },
    ],
    y6 = [
        {
            name: "React",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            size: "large",
            angle: 0,
            tooltipColor: "#61DAFB",
        },
        {
            name: "laravel",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
            size: "large",
            angle: 72,
            tooltipColor: "#a63030",
        },
        {
            name: "Node.js",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            size: "large",
            angle: 144,
            tooltipColor: "#339933",
        },
        {
            name: "MongoDB",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            size: "large",
            angle: 216,
            tooltipColor: "#47A248",
        },
        {
            name: "Tailwind",
            src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
            size: "large",
            angle: 288,
            tooltipColor: "#38B2AC",
        },
        {
            name: "HTML5",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            size: "small",
            angle: 0,
            tooltipColor: "#E34F26",
        },
        {
            name: "CSS3",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            size: "small",
            angle: 60,
            tooltipColor: "#1572B6",
        },
        {
            name: "JavaScript",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            size: "small",
            angle: 120,
            tooltipColor: "#F7DF1E",
        },
        {
            name: "Python",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            size: "small",
            angle: 180,
            tooltipColor: "#3776AB",
        },
        {
            name: "Java",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            size: "small",
            angle: 240,
            tooltipColor: "#007396",
        },
        {
            name: "Git",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            size: "small",
            angle: 300,
            tooltipColor: "#F05032",
        },
    ],
    Ll = { subtitle: u6, badge: c6, image: f6, imageLit: d6, techIcons: y6 };
function g6({ item: n }) {
    const { themeColors: a } = Kt((u) => u.themeReducer),
        [s, r] = Tn.useState(!1);
    return v.jsxs("div", {
        className: "flex relative pl-14",
        children: [
            v.jsx("div", {
                className:
                    "absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-xl z-10",
                style: {
                    backgroundColor: a.bg,
                    border: `3px solid ${a.primaryColor}`,
                    boxShadow: `0 0 0 4px ${a.bg}`,
                    color: a.primaryColor,
                },
                children: n.icon,
            }),
            v.jsx("div", {
                className: "w-full",
                children: v.jsxs("div", {
                    className: "p-5 rounded-lg transition-all duration-300",
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1),
                    style: {
                        backgroundColor: a.bg,
                        border: `1px solid ${a.border}`,
                        boxShadow: s
                            ? `0 10px 30px -10px ${a.primaryColor}50`
                            : "none",
                        transform: s ? "translateY(-5px)" : "translateY(0)",
                    },
                    children: [
                        v.jsx("h4", {
                            className: "text-xl font-semibold mb-2",
                            style: { color: a.text },
                            children: n.title,
                        }),
                        v.jsxs("p", {
                            className: "text-sm mb-2 flex items-center",
                            style: { color: a.summeryText },
                            children: [
                                v.jsxs("svg", {
                                    className: "w-5 h-5 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    style: { color: a.primaryColor },
                                    children: [
                                        v.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                                        }),
                                        v.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                        }),
                                    ],
                                }),
                                n.location,
                            ],
                        }),
                        v.jsx("span", {
                            className:
                                "inline-block px-3 py-1 text-xs font-semibold rounded-full",
                            style: {
                                backgroundColor: `${a.primaryColor}15`,
                                color: a.primaryColor,
                                border: `1px solid ${a.primaryColor}30`,
                            },
                            children: n.duration,
                        }),
                        n.description &&
                        v.jsx("ol", {
                            className: "text-sm mt-2 ",
                            style: { color: a.summeryText },
                            children: n.description.map((u, f) =>
                                v.jsx("li", { children: u }, f),
                            ),
                        }),
                    ],
                }),
            }),
        ],
    });
}
const Uc = _.memo(g6);
function v6() {
    const { themeColors: n } = Kt((a) => a.themeReducer);
    return v.jsxs("div", {
        className: "lg:sticky top-24 h-fit lg:w-1/2",
        children: [
            v.jsxs("h3", {
                className: "text-3xl font-semibold mb-8 flex items-center",
                style: { color: n.primaryColor },
                children: [
                    v.jsx("span", {
                        className: "w-6 h-6 rounded-full mr-3",
                        style: {
                            backgroundColor: `${n.primaryColor}20`,
                            border: `2px solid ${n.primaryColor}`,
                        },
                    }),
                    "Work Experience",
                ],
            }),
            v.jsxs("div", {
                className: "space-y-10 relative pl-2",
                children: [
                    v.jsx("div", {
                        className:
                            "absolute left-5 top-0 bottom-0 w-1 rounded-full",
                        style: { backgroundColor: n.primaryColor },
                    }),
                    h6.map((a, s) => v.jsx(Uc, { item: a }, s)),
                ],
            }),
            v.jsxs("h3", {
                className: "text-3xl font-semibold mb-8 mt-4 flex items-center",
                style: { color: n.primaryColor },
                children: [
                    v.jsx("span", {
                        className: "w-6 h-6 rounded-full mr-3",
                        style: {
                            backgroundColor: `${n.primaryColor}20`,
                            border: `2px solid ${n.primaryColor}`,
                        },
                    }),
                    "Education Background",
                ],
            }),
            v.jsxs("div", {
                className: "space-y-10 relative pl-2",
                children: [
                    v.jsx("div", {
                        className:
                            "absolute left-5 top-0 bottom-0 w-1 rounded-full",
                        style: { backgroundColor: n.primaryColor },
                    }),
                    m6.map((a, s) => v.jsx(Uc, { item: a }, s)),
                ],
            }),
            v.jsxs("h3", {
                className: "text-3xl font-semibold mb-8 mt-4 flex items-center",
                style: { color: n.primaryColor },
                children: [
                    v.jsx("span", {
                        className: "w-6 h-6 rounded-full mr-3",
                        style: {
                            backgroundColor: `${n.primaryColor}20`,
                            border: `2px solid ${n.primaryColor}`,
                        },
                    }),
                    "Certifications",
                ],
            }),
            v.jsxs("div", {
                className: "space-y-10 relative pl-2",
                children: [
                    v.jsx("div", {
                        className:
                            "absolute left-5 top-0 bottom-0 w-1 rounded-full",
                        style: { backgroundColor: n.primaryColor },
                    }),
                    p6.map((a, s) => v.jsx(Uc, { item: a }, s)),
                ],
            }),
        ],
    });
}
const x6 = _.memo(v6);
function b6() {
    const { themeColors: n } = Kt((f) => f.themeReducer),
        [a, s] = Tn.useState(!1),
        r = [
            {
                icon: "🧠",
                title: "Analytical Problem Solving",
                description:
                    "I enjoy breaking down complex problems into manageable solutions.",
            },
            {
                icon: "🔄",
                title: "Lifelong Learning",
                description:
                    "Committed to staying updated with the latest web technologies.",
            },
        ],
        u = ({ children: f }) =>
            v.jsx("span", { style: { color: n.primaryColor }, children: f });
    return v.jsx("div", {
        className: "lg:w-1/2",
        children: v.jsxs("div", {
            className: "sticky top-24",
            children: [
                v.jsxs("div", {
                    className: "mb-10",
                    children: [
                        v.jsx("h3", {
                            className: "text-3xl font-semibold mb-6",
                            style: { color: n.primaryColor },
                            children: "My Development Philosophy",
                        }),
                        v.jsx("div", {
                            className: "p-8 rounded-xl",
                            style: {
                                backgroundColor: `${n.primaryColor}08`,
                                border: `1px solid ${n.border}`,
                            },
                            children: v.jsxs("p", {
                                className: "text-lg leading-relaxed",
                                style: { color: n.summeryText },
                                children: [
                                    v.jsxs("li", {
                                        children: [
                                            v.jsx(u, {
                                                children:
                                                    "Next.js, React, TypeScript",
                                            }),
                                            ": Architecting type-safe, scalable frontend applications. I leverage Next.js Server Actions and SSR for maximum performance and SEO.",
                                        ],
                                    }),
                                    v.jsxs("li", {
                                        children: [
                                            v.jsx(u, {
                                                children:
                                                    "MERN Stack, MongoDB, Node.js, Convex",
                                            }),
                                            ": Building robust backend architectures. I specialize in both traditional REST APIs (Express/Mongo) and modern serverless backends for flexible full-stack solutions.",
                                        ],
                                    }),
                                    v.jsxs("li", {
                                        children: [
                                            v.jsx(u, {
                                                children:
                                                    "TanStack Query, Redux Toolkit, Zod",
                                            }),
                                            ": Managing complex server state and enforcing strict data validation. I ensure robust data flow with optimized caching and type integrity.",
                                        ],
                                    }),
                                    v.jsxs("li", {
                                        children: [
                                            v.jsx(u, {
                                                children:
                                                    "Tailwind CSS, Shadcn UI, Framer Motion",
                                            }),
                                            ": Expertly crafting clean, animated, and accessible UIs. I guarantee pixel-perfect fidelity from complex Figma mockups.",
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                v.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: r.map((f, d) =>
                        v.jsxs(
                            "div",
                            {
                                className: "p-5 rounded-lg flex flex-col",
                                style: {
                                    backgroundColor: n.bg,
                                    border: `1px solid ${n.border}`,
                                },
                                children: [
                                    v.jsx("div", {
                                        className:
                                            "w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl",
                                        style: {
                                            backgroundColor: `${n.primaryColor}15`,
                                            color: n.primaryColor,
                                        },
                                        children: f.icon,
                                    }),
                                    v.jsx("h4", {
                                        className: "text-lg font-semibold mb-2",
                                        style: { color: n.primaryColor },
                                        children: f.title,
                                    }),
                                    v.jsx("p", {
                                        className: "text-sm",
                                        style: { color: n.summeryText },
                                        children: f.description,
                                    }),
                                ],
                            },
                            d,
                        ),
                    ),
                }),
                v.jsxs("div", {
                    className: "mt-8",
                    children: [
                        v.jsx("h4", {
                            className: "text-lg font-semibold mb-4",
                            style: { color: n.primaryColor },
                            children: "Upcoming Learning Goals",
                        }),
                        v.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                "AI Automations",
                                "Full Stack Mastering",
                            ].map((f, d) =>
                                v.jsx(
                                    "span",
                                    {
                                        className:
                                            "px-3 py-1 text-xs font-medium rounded-full",
                                        style: {
                                            backgroundColor: `${n.primaryColor}15`,
                                            color: n.primaryColor,
                                            border: `1px solid ${n.primaryColor}30`,
                                        },
                                        children: f,
                                    },
                                    d,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
const S6 = _.memo(b6);
function T6() {
    const { themeColors: n } = Kt((a) => a.themeReducer);
    return v.jsx("section", {
        className: "py-16 px-6 md:px-10 lg:px-16",
        style: { backgroundColor: n.bg },
        id: "about",
        children: v.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
                v.jsx(Kr, { title: "About My", highlight: "Journey" }),
                v.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-14",
                    children: [v.jsx(x6, {}), v.jsx(S6, {})],
                }),
            ],
        }),
    });
}
class Jl {
    constructor(a = 0, s = "Network Error") {
        ((this.status = a), (this.text = s));
    }
}
const w6 = () => {
    if (!(typeof localStorage > "u"))
        return {
            get: (n) => Promise.resolve(localStorage.getItem(n)),
            set: (n, a) => Promise.resolve(localStorage.setItem(n, a)),
            remove: (n) => Promise.resolve(localStorage.removeItem(n)),
        };
},
    ne = {
        origin: "https://api.emailjs.com",
        blockHeadless: !1,
        storageProvider: w6(),
    },
    ad = (n) =>
        n
            ? typeof n == "string"
                ? { publicKey: n }
                : n.toString() === "[object Object]"
                    ? n
                    : {}
            : {},
    C6 = (n, a = "https://api.emailjs.com") => {
        if (!n) return;
        const s = ad(n);
        ((ne.publicKey = s.publicKey),
            (ne.blockHeadless = s.blockHeadless),
            (ne.storageProvider = s.storageProvider),
            (ne.blockList = s.blockList),
            (ne.limitRate = s.limitRate),
            (ne.origin = s.origin || a));
    },
    R1 = async (n, a, s = {}) => {
        const r = await fetch(ne.origin + n, {
            method: "POST",
            headers: s,
            body: a,
        }),
            u = await r.text(),
            f = new Jl(r.status, u);
        if (r.ok) return f;
        throw f;
    },
    O1 = (n, a, s) => {
        if (!n || typeof n != "string")
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!a || typeof a != "string")
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!s || typeof s != "string")
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    },
    A6 = (n) => {
        if (n && n.toString() !== "[object Object]")
            throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
    },
    z1 = (n) => n.webdriver || !n.languages || n.languages.length === 0,
    _1 = () => new Jl(451, "Unavailable For Headless Browser"),
    j6 = (n, a) => {
        if (!Array.isArray(n)) throw "The BlockList list has to be an array";
        if (typeof a != "string")
            throw "The BlockList watchVariable has to be a string";
    },
    E6 = (n) => {
        var a;
        return !((a = n.list) != null && a.length) || !n.watchVariable;
    },
    M6 = (n, a) => (n instanceof FormData ? n.get(a) : n[a]),
    V1 = (n, a) => {
        if (E6(n)) return !1;
        j6(n.list, n.watchVariable);
        const s = M6(a, n.watchVariable);
        return typeof s != "string" ? !1 : n.list.includes(s);
    },
    B1 = () => new Jl(403, "Forbidden"),
    D6 = (n, a) => {
        if (typeof n != "number" || n < 0)
            throw "The LimitRate throttle has to be a positive number";
        if (a && typeof a != "string")
            throw "The LimitRate ID has to be a non-empty string";
    },
    N6 = async (n, a, s) => {
        const r = Number((await s.get(n)) || 0);
        return a - Date.now() + r;
    },
    L1 = async (n, a, s) => {
        if (!a.throttle || !s) return !1;
        D6(a.throttle, a.id);
        const r = a.id || n;
        return (await N6(r, a.throttle, s)) > 0
            ? !0
            : (await s.set(r, Date.now().toString()), !1);
    },
    U1 = () => new Jl(429, "Too Many Requests"),
    R6 = async (n, a, s, r) => {
        const u = ad(r),
            f = u.publicKey || ne.publicKey,
            d = u.blockHeadless || ne.blockHeadless,
            m = u.storageProvider || ne.storageProvider,
            h = { ...ne.blockList, ...u.blockList },
            y = { ...ne.limitRate, ...u.limitRate };
        return d && z1(navigator)
            ? Promise.reject(_1())
            : (O1(f, n, a),
                A6(s),
                s && V1(h, s)
                    ? Promise.reject(B1())
                    : (await L1(location.pathname, y, m))
                        ? Promise.reject(U1())
                        : R1(
                            "/api/v1.0/email/send",
                            JSON.stringify({
                                lib_version: "4.4.1",
                                user_id: f,
                                service_id: n,
                                template_id: a,
                                template_params: s,
                            }),
                            { "Content-type": "application/json" },
                        ));
    },
    O6 = (n) => {
        if (!n || n.nodeName !== "FORM")
            throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
    },
    z6 = (n) => (typeof n == "string" ? document.querySelector(n) : n),
    _6 = async (n, a, s, r) => {
        const u = ad(r),
            f = u.publicKey || ne.publicKey,
            d = u.blockHeadless || ne.blockHeadless,
            m = ne.storageProvider || u.storageProvider,
            h = { ...ne.blockList, ...u.blockList },
            y = { ...ne.limitRate, ...u.limitRate };
        if (d && z1(navigator)) return Promise.reject(_1());
        const p = z6(s);
        (O1(f, n, a), O6(p));
        const b = new FormData(p);
        return V1(h, b)
            ? Promise.reject(B1())
            : (await L1(location.pathname, y, m))
                ? Promise.reject(U1())
                : (b.append("lib_version", "4.4.1"),
                    b.append("service_id", n),
                    b.append("template_id", a),
                    b.append("user_id", f),
                    R1("/api/v1.0/email/send-form", b));
    },
    V6 = { init: C6, send: R6, sendForm: _6, EmailJSResponseStatus: Jl };
function B6({ itemVariants: n }) {
    const { themeColors: a } = Kt((p) => p.themeReducer),
        s = _.useRef(),
        [r, u] = _.useState(null),
        [f, d] = _.useState(!1),
        m = [
            { name: "your_name", placeholder: "Your Name" },
            { name: "your_email", placeholder: "Your Email" },
            { name: "subject", placeholder: "Subject" },
        ],
        h = (p) => {
            (p.preventDefault(),
                d(!0),
                u(null),
                V6.sendForm("service_e6aqm2q", "template_erbf1ca", s.current, {
                    publicKey: "cU1SHntRbaMWKZnfO",
                })
                    .then(() => {
                        s.current;
                    })
                    .then(
                        () => {
                            (u("success"), d(!1), s.current.reset());
                        },
                        (b) => {
                            (u("error"),
                                d(!1),
                                console.log("FAILED...", b.text));
                        },
                    ));
        },
        y = () => {
            if (!r) return null;
            const p = {
                success: {
                    icon: "✓",
                    message: "Message sent successfully!",
                    bgColor: "bg-green-100",
                    textColor: "text-green-800",
                    borderColor: "border-green-300",
                },
                error: {
                    icon: "✕",
                    message: "Failed to send message. Please try again.",
                    bgColor: "bg-red-100",
                    textColor: "text-red-800",
                    borderColor: "border-red-300",
                },
            },
                {
                    icon: b,
                    message: S,
                    bgColor: j,
                    textColor: M,
                    borderColor: H,
                } = p[r];
            return v.jsxs(Q.div, {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: `p-4 mb-6 rounded-lg border ${j} ${M} ${H} flex items-center`,
                children: [
                    v.jsx("span", {
                        className: "text-xl mr-3 font-bold",
                        children: b,
                    }),
                    v.jsx("span", { children: S }),
                ],
            });
        };
    return v.jsxs(Q.div, {
        className:
            "rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl",
        style: { backgroundColor: a.cardBg, border: `1px solid ${a.border}` },
        variants: n,
        whileHover: { scale: 1.01 },
        children: [
            v.jsx("h3", {
                className: "text-2xl font-semibold mb-6",
                style: { color: a.primaryColor },
                children: "Send a Message",
            }),
            v.jsx(y, {}),
            v.jsxs("form", {
                ref: s,
                className: "space-y-6",
                onSubmit: h,
                children: [
                    m.map((p, b) =>
                        v.jsx(
                            Q.div,
                            {
                                variants: n,
                                whileHover: { scale: 1.02 },
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                },
                                children: v.jsx("input", {
                                    type:
                                        p.placeholder === "Your Email"
                                            ? "email"
                                            : "text",
                                    name: p.name,
                                    placeholder: p.placeholder,
                                    required: !0,
                                    disabled: f,
                                    className:
                                        "w-full px-5 py-3 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-70",
                                    style: {
                                        border: `1px solid ${a.border}`,
                                        color: a.text,
                                        boxShadow: `0 2px 4px ${a.border}20`,
                                    },
                                }),
                            },
                            b,
                        ),
                    ),
                    v.jsx(Q.div, {
                        variants: n,
                        whileHover: { scale: 1.02 },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        },
                        children: v.jsx("textarea", {
                            rows: "5",
                            placeholder: "Your Message",
                            name: "message",
                            required: !0,
                            disabled: f,
                            className:
                                "w-full px-5 py-3 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-70",
                            style: {
                                border: `1px solid ${a.border}`,
                                color: a.text,
                                boxShadow: `0 2px 4px ${a.border}20`,
                                caretColor: a.text,
                            },
                        }),
                    }),
                    v.jsx(Q.button, {
                        type: "submit",
                        disabled: f,
                        className:
                            "w-full py-3 rounded-lg font-medium transition-all duration-300 relative",
                        style: {
                            backgroundColor: f
                                ? `${a.primaryColor}80`
                                : a.primaryColor,
                            color: "#fff",
                            boxShadow: `0 4px 6px ${a.primaryColor}40`,
                        },
                        variants: n,
                        whileHover: f
                            ? {}
                            : {
                                scale: 1.02,
                                boxShadow: `0 6px 8px ${a.primaryColor}60`,
                            },
                        whileTap: f ? {} : { scale: 0.98 },
                        children: f
                            ? v.jsxs("div", {
                                className: "flex justify-center items-center",
                                children: [
                                    v.jsxs("svg", {
                                        className:
                                            "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            v.jsx("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4",
                                            }),
                                            v.jsx("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                            }),
                                        ],
                                    }),
                                    "Sending...",
                                ],
                            })
                            : v.jsxs(v.Fragment, {
                                children: [
                                    "Send Message",
                                    v.jsx("span", {
                                        className: "ml-2",
                                        children: "→",
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
const L6 = () => {
    const { themeColors: n } = Kt((r) => r.themeReducer),
        a = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
        },
        s = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
            },
        };
    return v.jsx("section", {
        id: "contact",
        style: { backgroundColor: n.bg },
        className: "overflow-hidden",
        children: v.jsxs("div", {
            className: "max-w-screen-xl mx-auto px-4 py-24",
            children: [
                v.jsx(Kr, {
                    highlight: "Get In Touch",
                    subtitle:
                        "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
                }),
                v.jsxs(Q.div, {
                    className:
                        "grid grid-cols-1 lg:grid-cols-2 gap-14 items-start",
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-100px" },
                    variants: a,
                    children: [
                        v.jsx(B6, { itemVariants: s }),
                        v.jsxs(Q.div, {
                            className: "space-y-10",
                            variants: a,
                            children: [
                                [
                                    {
                                        icon: "Mail",
                                        title: "Email",
                                        value: "team@nxtvel.com",
                                        href: "mailto:team@nxtvel.com",
                                    },
                                    {
                                        icon: "MapPin",
                                        title: "Location",
                                        value: "Varanasi, Uttar Pradesh, India",
                                    },
                                ].map((r, u) =>
                                    v.jsxs(
                                        Q.div,
                                        {
                                            className:
                                                "flex items-start gap-5 group",
                                            variants: s,
                                            whileHover: { x: 5 },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                            },
                                            children: [
                                                v.jsx("div", {
                                                    className:
                                                        "p-3 rounded-xl shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-110",
                                                    style: {
                                                        backgroundColor: `${n.primaryColor}20`,
                                                        color: n.primaryColor,
                                                    },
                                                    children: v.jsx("i", {
                                                        className:
                                                            "block w-6 h-6",
                                                        children: v.jsxs(
                                                            "svg",
                                                            {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className:
                                                                    "w-full h-full",
                                                                fill: "none",
                                                                viewBox:
                                                                    "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                children: [
                                                                    r.icon ===
                                                                    "Mail" &&
                                                                    v.jsxs(
                                                                        v.Fragment,
                                                                        {
                                                                            children:
                                                                                [
                                                                                    v.jsx(
                                                                                        "path",
                                                                                        {
                                                                                            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                                                        },
                                                                                    ),
                                                                                    v.jsx(
                                                                                        "polyline",
                                                                                        {
                                                                                            points: "22,6 12,13 2,6",
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                    r.icon ===
                                                                    "Phone" &&
                                                                    v.jsx(
                                                                        "path",
                                                                        {
                                                                            d: "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.14.84.37 1.67.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.14.33 1.97.56 2.81.7A2 2 0 0 1 22 16.92z",
                                                                        },
                                                                    ),
                                                                    r.icon ===
                                                                    "MapPin" &&
                                                                    v.jsxs(
                                                                        v.Fragment,
                                                                        {
                                                                            children:
                                                                                [
                                                                                    v.jsx(
                                                                                        "path",
                                                                                        {
                                                                                            d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z",
                                                                                        },
                                                                                    ),
                                                                                    v.jsx(
                                                                                        "circle",
                                                                                        {
                                                                                            cx: "12",
                                                                                            cy: "10",
                                                                                            r: "3",
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                                }),
                                                v.jsxs("div", {
                                                    children: [
                                                        v.jsx("h4", {
                                                            className:
                                                                "text-sm uppercase tracking-wider mb-1",
                                                            style: {
                                                                color: n.summeryText,
                                                            },
                                                            children:
                                                                r.title,
                                                        }),
                                                        r.href
                                                            ? v.jsxs("a", {
                                                                href: r.href,
                                                                className:
                                                                    "text-lg font-medium hover:underline transition-all duration-300",
                                                                style: {
                                                                    color: n.text,
                                                                },
                                                                children:
                                                                    [
                                                                        r.value,
                                                                        v.jsx(
                                                                            "span",
                                                                            {
                                                                                className:
                                                                                    "inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                                                children:
                                                                                    "↗",
                                                                            },
                                                                        ),
                                                                    ],
                                                            })
                                                            : v.jsx("p", {
                                                                className:
                                                                    "text-lg font-medium",
                                                                style: {
                                                                    color: n.text,
                                                                },
                                                                children:
                                                                    r.value,
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        u,
                                    ),
                                ),
                                v.jsx(Q.div, {
                                    className:
                                        "rounded-xl overflow-hidden h-52 w-full border relative",
                                    style: {
                                        backgroundColor: n.border,
                                        border: `1px solid ${n.border}`,
                                    },
                                    variants: s,
                                    whileHover: { scale: 1.01 },
                                    children: v.jsx("div", {
                                        className:
                                            "absolute inset-0 flex items-center justify-center",
                                        children: v.jsx("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.14624663976!2d82.8434516455106!3d25.320844293712756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766128995015!5m2!1sen!2sin",
                                            width: "100%",
                                            height: "100%",
                                            style: { border: 0 },
                                            allowFullScreen: !0,
                                            loading: "lazy",
                                            referrerPolicy:
                                                "no-referrer-when-downgrade",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
},
    U6 = [
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in the modern Next.js ecosystem, combining full-stack development with DevOps principles. My core stack includes TypeScript, Next.js (App Router), and Docker for containerization. I build robust backends using both the MERN stack and serverless solutions like Convex, ensuring end-to-end type safety.",
        },
        {
            question: "What kind of projects have you built?",
            answer: "I build production-ready systems, not just hobby projects. My flagship app, 'Ezensi' (Live), is an AI-Native Blog Platform containerized with Docker and deployed via CI/CD on Render. I've also architected 'ShopEase,' a high-performance eCommerce app with advanced caching, and a secure Next.js full-stack system with custom auth.",
        },
        {
            question: "Do you have experience with DevOps and Deployment?",
            answer: "Yes. I move beyond basic deployments by using Docker to containerize applications, ensuring consistent environments from development to production. I implement Multi-Stage builds to optimize image sizes (reducing my latest app to ~276MB) and set up automated CI/CD pipelines on platforms like Render.",
        },
        {
            question: "How do you ensure code quality and stability?",
            answer: "I enforce a strict quality standard using Husky, ESLint, and Prettier for pre-commit checks. Beyond syntax, I use Docker to prevent 'it works on my machine' issues, and I strictly validate all data using Zod to ensure type integrity across the full stack.",
        },
        {
            question: "Do you have full-stack development experience?",
            answer: "Yes, I am comfortable across the entire stack. I build scalable backends using Node.js/Express (MERN) and Serverless (Convex). My expertise includes designing database schemas (MongoDB/MySQL), handling complex state with Redux/TanStack Query, and securing APIs with Clerk or custom JWT implementation.",
        },
        {
            question: "Are your projects mobile responsive?",
            answer: "Absolutely. I follow a mobile-first approach using Tailwind CSS and Shadcn UI. I rigorously test across devices to ensure seamless UX, maintaining 90+ Lighthouse performance scores even on mobile networks.",
        },
        {
            question: "How do you optimize application performance?",
            answer: "Performance is a priority. I use TanStack Query for aggressive caching and Next.js Server Actions to minimize client-side JavaScript. I also optimize Docker images for faster cold starts and implement debouncing and code-splitting to keep the application lightweight.",
        },
        {
            question: "What is your approach to security?",
            answer: "I believe in security by design. I implement HTTP-only cookies for session management, use Bcrypt for password hashing, and protect API routes with Middleware. I also ensure strict environment variable isolation to keep production secrets safe.",
        },
        {
            question: "What are you currently learning or improving?",
            answer: "I am currently focused on advanced Engineering best practices. I am diving deeper into Unit Testing with Jest/React Testing Library to ensure rock-solid reliability, and I am exploring System Design patterns to build even more scalable architectures.",
        },
    ],
    k6 = (n, a, s) => {
        const r = new RegExp(`\\b(${a.join("|")})\\b`, "gi");
        return n.replace(
            r,
            (u) =>
                `<strong style="color: ${s.primaryColor}; font-weight: 600;">${u}</strong>`,
        );
    },
    H6 = () => {
        const { themeColors: n } = Kt((d) => d.themeReducer),
            a = _.useRef(null),
            [s, r] = _.useState({ x: 0, y: 0 }),
            [u, f] = _.useState(!1);
        return (
            _.useEffect(() => {
                const d = (h) => {
                    const y = a.current.getBoundingClientRect();
                    r({ x: h.clientX - y.left, y: h.clientY - y.top });
                },
                    m = a.current;
                return (
                    m == null || m.addEventListener("mousemove", d),
                    () =>
                        m == null
                            ? void 0
                            : m.removeEventListener("mousemove", d)
                );
            }, []),
            v.jsxs("section", {
                ref: a,
                id: "faq",
                className: "relative py-32 px-6 sm:px-10 overflow-hidden",
                style: { backgroundColor: n.bg },
                children: [
                    v.jsx("div", {
                        className: "absolute inset-0 z-0 pointer-events-none",
                        style: {
                            backgroundImage: `linear-gradient(to right, ${n.primaryColor}22 1px, transparent 1px),
                            linear-gradient(to bottom, ${n.primaryColor}22 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        },
                    }),
                    v.jsx("div", {
                        className: "absolute inset-0 z-10 pointer-events-none",
                        style: {
                            backgroundImage: `linear-gradient(to right, ${n.primaryColor} 1px, transparent 1px),
                            linear-gradient(to bottom, ${n.primaryColor} 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                            maskImage: `radial-gradient(circle 200px at ${s.x}px ${s.y}px, white 0%, transparent 80%)`,
                            WebkitMaskImage: `radial-gradient(circle 200px at ${s.x}px ${s.y}px, white 0%, transparent 80%)`,
                            opacity: 0.6,
                            transition: "mask-position 0.1s ease-out",
                        },
                    }),
                    v.jsx(Q.div, {
                        className:
                            "absolute z-20 pointer-events-none blur-3xl rounded-full",
                        style: {
                            width: 350,
                            height: 350,
                            left: s.x - 175,
                            top: s.y - 175,
                            background: `radial-gradient(circle, ${n.primaryColor}33 0%, transparent 70%)`,
                        },
                        animate: { left: s.x - 175, top: s.y - 175 },
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        },
                    }),
                    v.jsxs("div", {
                        className: "relative z-30 max-w-5xl mx-auto",
                        children: [
                            v.jsx("div", {
                                className: "text-center mb-20",
                                children: v.jsx(Kr, {
                                    title: "Technical Insights",
                                    subtitle:
                                        "Explore my technical skills, thought process, and how I build scalable, aesthetic, and performant systems.",
                                }),
                            }),
                            v.jsx("div", {
                                className: "space-y-6",
                                children: U6.map((d, m) =>
                                    v.jsx(
                                        q6,
                                        {
                                            faq: d,
                                            themeColors: n,
                                            index: m,
                                            open: u,
                                            setOpen: f,
                                        },
                                        m,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    q6 = ({ faq: n, themeColors: a, index: s, open: r, setOpen: u }) => {
        const f = [
            "Auth.js, Bcrypt, and JWTs",
            "Next.js Server Actions",
            "Next.js ecosystem",
            "automated CI/CD pipelines",
            "Next.js Middleware",
            "Route Handlers",
            "full-stack capabilities",
            "TanStack Query caching strategies",
            "efficient state management",
            "Next.js App Router patterns",
            "MERN application with production-grade workflows",
            "advanced full-stack architecture",
            "both MongoDB in the MERN stack and external MySQL databases",
            "AI-Native Blog Platform",
            "Google's GenAI SDKs",
            "eCommerce UI with advanced caching",
            "full-stack application",
            "code splitting",
            "ShopEase",
            "Shadcn",
            "Clerk",
            "Docker",
            "Render",
            "Express",
            "TypeScript",
            "Convex",
            "Ezensi",
            "React",
            "Zod",
            "MySQL",
            "MERN stack",
            "Next.js",
            "TanStack Query",
            "Redux Toolkit",
            "Tailwind CSS",
            "Material UI",
            "Shadcn components",
            "Framer Motion",
            "Material UI/Shadcn",
            "ESLint",
            "Redux",
            "Prettier",
            "Husky",
            "Auth.js",
            "Google OAuth",
            "HMAC verification",
            "Bcrypt hashing",
            "JWT tokens",
            "MongoDB",
            "Express.js",
            "Node.js",
            "lint-staged",
            "CI/CD-ready approach",
            "MERN application",
            "custom cookie-based sessions",
            "Bcrypt for password hashing",
            "OAuth integrations",
            "full-stack MERN experience",
            "built production-grade full-stack applications",
            "Secure Todo Application with custom authentication",
            "Portfolio with custom theming",
            "ShopEase E-Commerce with advanced features",
        ];
        return v.jsxs(Q.div, {
            className: "rounded-2xl border overflow-hidden",
            style: { borderColor: a.border, backgroundColor: a.cardBg },
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.4 },
            children: [
                v.jsxs("button", {
                    className:
                        "flex w-full justify-between items-center px-6 py-5 text-left group cursor-pointer",
                    onClick: () => u(r === s ? null : s),
                    style: {
                        color: a.text,
                        backgroundColor: `${a.primaryColor}08`,
                    },
                    children: [
                        v.jsx("span", {
                            className: "text-lg font-semibold",
                            children: n.question,
                        }),
                        v.jsx(Q.span, {
                            animate: { rotate: r === s ? 45 : 0 },
                            className: "transition-transform duration-300",
                            children: v.jsx("svg", {
                                width: "18",
                                height: "18",
                                stroke: "currentColor",
                                fill: "none",
                                strokeWidth: "2",
                                children: v.jsx("path", {
                                    d: "M12 5v14M5 12h14",
                                }),
                            }),
                        }),
                    ],
                }),
                v.jsx(Sn, {
                    children:
                        r === s &&
                        v.jsx(Q.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: { duration: 0.4 },
                            className: "px-6 pb-5",
                            children: v.jsx("p", {
                                className:
                                    "text-base opacity-90 leading-relaxed",
                                style: { color: a.summeryText },
                                dangerouslySetInnerHTML: {
                                    __html: k6(n.answer, f, a),
                                },
                            }),
                        }),
                }),
            ],
        });
    };
var k1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
},
    _y = Tn.createContext && Tn.createContext(k1),
    Y6 = ["attr", "size", "title"];
function G6(n, a) {
    if (n == null) return {};
    var s = X6(n, a),
        r,
        u;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(n);
        for (u = 0; u < f.length; u++)
            ((r = f[u]),
                !(a.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(n, r) &&
                (s[r] = n[r]));
    }
    return s;
}
function X6(n, a) {
    if (n == null) return {};
    var s = {};
    for (var r in n)
        if (Object.prototype.hasOwnProperty.call(n, r)) {
            if (a.indexOf(r) >= 0) continue;
            s[r] = n[r];
        }
    return s;
}
function Rr() {
    return (
        (Rr = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = arguments[a];
                    for (var r in s)
                        Object.prototype.hasOwnProperty.call(s, r) &&
                            (n[r] = s[r]);
                }
                return n;
            }),
        Rr.apply(this, arguments)
    );
}
function Vy(n, a) {
    var s = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(n);
        (a &&
            (r = r.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            s.push.apply(s, r));
    }
    return s;
}
function Or(n) {
    for (var a = 1; a < arguments.length; a++) {
        var s = arguments[a] != null ? arguments[a] : {};
        a % 2
            ? Vy(Object(s), !0).forEach(function (r) {
                K6(n, r, s[r]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                : Vy(Object(s)).forEach(function (r) {
                    Object.defineProperty(
                        n,
                        r,
                        Object.getOwnPropertyDescriptor(s, r),
                    );
                });
    }
    return n;
}
function K6(n, a, s) {
    return (
        (a = P6(a)),
        a in n
            ? Object.defineProperty(n, a, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (n[a] = s),
        n
    );
}
function P6(n) {
    var a = Q6(n, "string");
    return typeof a == "symbol" ? a : a + "";
}
function Q6(n, a) {
    if (typeof n != "object" || !n) return n;
    var s = n[Symbol.toPrimitive];
    if (s !== void 0) {
        var r = s.call(n, a);
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(n);
}
function H1(n) {
    return (
        n &&
        n.map((a, s) =>
            Tn.createElement(a.tag, Or({ key: s }, a.attr), H1(a.child)),
        )
    );
}
function ke(n) {
    return (a) =>
        Tn.createElement(Z6, Rr({ attr: Or({}, n.attr) }, a), H1(n.child));
}
function Z6(n) {
    var a = (s) => {
        var { attr: r, size: u, title: f } = n,
            d = G6(n, Y6),
            m = u || s.size || "1em",
            h;
        return (
            s.className && (h = s.className),
            n.className && (h = (h ? h + " " : "") + n.className),
            Tn.createElement(
                "svg",
                Rr(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    s.attr,
                    r,
                    d,
                    {
                        className: h,
                        style: Or(
                            Or({ color: n.color || s.color }, s.style),
                            n.style,
                        ),
                        height: m,
                        width: m,
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                ),
                f && Tn.createElement("title", null, f),
                n.children,
            )
        );
    };
    return _y !== void 0
        ? Tn.createElement(_y.Consumer, null, (s) => a(s))
        : a(k1);
}
function By(n) {
    return ke({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" },
                child: [],
            },
            {
                tag: "polyline",
                attr: { points: "7 10 12 15 17 10" },
                child: [],
            },
            {
                tag: "line",
                attr: { x1: "12", y1: "15", x2: "12", y2: "3" },
                child: [],
            },
        ],
    })(n);
}
function F6(n) {
    return ke({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                },
                child: [],
            },
        ],
    })(n);
}
function $6(n) {
    return ke({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                },
                child: [],
            },
            {
                tag: "rect",
                attr: { x: "2", y: "9", width: "4", height: "12" },
                child: [],
            },
            { tag: "circle", attr: { cx: "4", cy: "4", r: "2" }, child: [] },
        ],
    })(n);
}
function J6(n) {
    return ke({
        attr: { viewBox: "0 0 496 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
                },
                child: [],
            },
        ],
    })(n);
}
function W6(n) {
    return ke({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
                },
                child: [],
            },
        ],
    })(n);
}
function I6(n) {
    return ke({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
                },
                child: [],
            },
        ],
    })(n);
}
function tw(n) {
    return ke({
        attr: { viewBox: "0 0 512 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
                },
                child: [],
            },
        ],
    })(n);
}
function q1(n) {
    return ke({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
                },
                child: [],
            },
        ],
    })(n);
}
function ew(n) {
    return ke({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
                },
                child: [],
            },
        ],
    })(n);
}
function nw(n) {
    return ke({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
                },
                child: [],
            },
        ],
    })(n);
}
function zr(n) {
    return ke({
        attr: { viewBox: "0 0 352 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
                },
                child: [],
            },
        ],
    })(n);
}
function iw(n) {
    return ke({
        attr: { viewBox: "0 0 640 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
                },
                child: [],
            },
        ],
    })(n);
}
const aw = () => {
    const { themeColors: n } = Kt((s) => s.themeReducer),
        a = [
            {
                id: "whatsapp",
                icon: q1,
                label: "#",
                url: "#",
                color: "#128C7E",
            },
            {
                id: "linkedin",
                icon: $6,
                label: "in/harsh937",
                url: "https://www.linkedin.com/in/harsh937",
                color: "#0e76a8",
            },
            {
                id: "github",
                icon: F6,
                label: "harsh937",
                url: "https://github.com/",
                color: n.text,
            },
        ];
    return v.jsx("div", {
        className: "flex items-center justify-center flex-wrap gap-3",
        children: a.map(({ id: s, icon: r, label: u, url: f, color: d }) =>
            v.jsx(
                "a",
                {
                    href: f,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                        "group flex items-center justify-start h-[50px] w-[50px] rounded-xl shadow-md transition-all duration-300 overflow-hidden hover:w-[160px] hover:rounded-md cursor-pointer",
                    style: { backgroundColor: n.bg },
                    children: v.jsxs("div", {
                        className: "flex items-center gap-2 px-2",
                        children: [
                            v.jsx(r, {
                                className: "w-6 h-6",
                                style: { color: d },
                            }),
                            v.jsx("span", {
                                className:
                                    "text-sm font-medium transition-all duration-300 w-0 overflow-hidden group-hover:w-[90px]",
                                style: { color: n.text },
                                children: u,
                            }),
                        ],
                    }),
                },
                s,
            ),
        ),
    });
},
    lw = () => {
        const { themeColors: n, theme: a } = Kt((d) => d.themeReducer),
            s = _.useRef(null),
            { scrollYProgress: r } = e6({
                target: s,
                offset: ["start end", "end end"],
            }),
            u = Oy(r, [0, 0.3], [0, 1]),
            f = Oy(r, [0, 0.3], [40, 0]);
        return v.jsxs(Q.footer, {
            ref: s,
            className: "relative overflow-hidden",
            style: {
                backgroundColor: n.bg,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderTop: `1px solid ${n.borderLight}`,
            },
            children: [
                v.jsx("div", {
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                        background: `radial-gradient(circle at 70% 30%, ${a === "dark" ? "rgba(242, 140, 38, 0.03)" : "rgba(234, 88, 12, 0.03)"} 0%, transparent 70%)`,
                    },
                }),
                v.jsxs(Q.div, {
                    style: { opacity: u, y: f },
                    className: "max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20",
                    children: [
                        v.jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                            children: [
                                v.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [
                                        v.jsxs(Q.div, {
                                            initial: { opacity: 0, x: -20 },
                                            whileInView: { opacity: 1, x: 0 },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.2,
                                            },
                                            viewport: {
                                                once: !0,
                                                margin: "-50px",
                                            },
                                            children: [
                                                v.jsx("h2", {
                                                    className:
                                                        "text-3xl font-light mb-2",
                                                    style: {
                                                        color: n.primaryColor,
                                                    },
                                                    children: "Kunal Bhosale",
                                                }),
                                                v.jsx("p", {
                                                    className:
                                                        "text-sm uppercase tracking-wider opacity-75",
                                                    style: {
                                                        color: n.summeryText,
                                                    },
                                                    children:
                                                        "Software Developer & Founder • Full Stack & UI/UX",
                                                }),
                                            ],
                                        }),
                                        v.jsx(Q.p, {
                                            className:
                                                "mt-6 text-sm leading-relaxed",
                                            initial: { opacity: 0 },
                                            whileInView: { opacity: 0.8 },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.4,
                                            },
                                            viewport: {
                                                once: !0,
                                                margin: "-50px",
                                            },
                                            style: { color: n.summeryText },
                                            children:
                                                "I blend aesthetics with engineering to craft web interfaces that not only work — they wow.",
                                        }),
                                    ],
                                }),
                                v.jsx("div", {
                                    className:
                                        "flex flex-col items-center lg:items-end",
                                    children: v.jsxs(Q.div, {
                                        initial: { opacity: 0 },
                                        whileInView: { opacity: 1 },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.3,
                                        },
                                        viewport: { once: !0, margin: "-50px" },
                                        className:
                                            "flex flex-col items-center lg:items-end",
                                        children: [
                                            v.jsx("p", {
                                                className:
                                                    "text-sm mb-6 text-center lg:text-right",
                                                style: { color: n.summeryText },
                                                children:
                                                    "Let’s stay connected — I post dev notes, design experiments, and bad jokes.",
                                            }),
                                            v.jsx("div", {
                                                className: "flex gap-4",
                                                children: v.jsx(aw, {}),
                                            }),
                                        ],
                                    }),
                                }),
                                v.jsxs(Q.div, {
                                    initial: { opacity: 0 },
                                    whileInView: { opacity: 1 },
                                    transition: { duration: 0.6, delay: 0.4 },
                                    viewport: { once: !0, margin: "-50px" },
                                    className:
                                        "flex flex-col items-center lg:items-end",
                                    children: [
                                        v.jsx("p", {
                                            className:
                                                "text-sm mb-6 text-center lg:text-right",
                                            style: { color: n.summeryText },
                                            children:
                                                "Open to freelance, consulting, or just a tech chat over coffee.",
                                        }),
                                        v.jsxs(Q.a, {
                                            href: "https://www.linkedin.com/in/harsh937",
                                            target: "_blank",
                                            className:
                                                "px-6 py-3 rounded-full text-sm font-medium relative overflow-hidden",
                                            style: {
                                                backgroundColor: n.primaryColor,
                                                color: n.cardBg,
                                            },
                                            whileHover: {
                                                y: -2,
                                                boxShadow: `0 4px 20px -6px ${n.primaryColor}`,
                                            },
                                            whileTap: { scale: 0.98 },
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                            },
                                            children: [
                                                "Start a conversation →",
                                                v.jsx("span", {
                                                    className:
                                                        "absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        v.jsx(Q.div, {
                            initial: { scaleX: 0 },
                            whileInView: { scaleX: 1 },
                            transition: {
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            },
                            viewport: { once: !0, margin: "-50px" },
                            className: "w-full h-px my-12 origin-left",
                            style: { backgroundColor: n.borderLight },
                        }),
                        v.jsxs("div", {
                            className:
                                "flex flex-col md:flex-row justify-between items-center gap-4",
                            children: [
                                v.jsxs(Q.p, {
                                    initial: { opacity: 0 },
                                    whileInView: { opacity: 0.7 },
                                    transition: { duration: 0.6, delay: 0.5 },
                                    viewport: { once: !0, margin: "-50px" },
                                    className: "text-xs tracking-wider",
                                    style: { color: n.summeryText },
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " ",
                                        v.jsx("a", {
                                            href: "https://www.linkedin.com/in/harsh937",
                                            children: v.jsx("span", {
                                                style: {
                                                    color: n.primaryColor,
                                                },
                                                children: "Kunal",
                                            }),
                                        }),
                                        " · Coded with intent, designed with care.",
                                    ],
                                }),
                                v.jsx("div", {
                                    className: "flex gap-6",
                                    children: [
                                        "Privacy Policy",
                                        "Terms of Service",
                                        "Cookie Preferences",
                                    ].map((d, m) =>
                                        v.jsxs(
                                            Q.a,
                                            {
                                                href: "#",
                                                className:
                                                    "text-xs relative group",
                                                initial: { opacity: 0, y: 5 },
                                                whileInView: {
                                                    opacity: 0.7,
                                                    y: 0,
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    delay: 0.5 + m * 0.1,
                                                },
                                                viewport: {
                                                    once: !0,
                                                    margin: "-50px",
                                                },
                                                style: { color: n.summeryText },
                                                children: [
                                                    d,
                                                    v.jsx("span", {
                                                        className:
                                                            "absolute left-0 bottom-0 w-0 h-px group-hover:w-full transition-all duration-300",
                                                        style: {
                                                            backgroundColor:
                                                                n.primaryColor,
                                                        },
                                                    }),
                                                ],
                                            },
                                            m,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
function ee(n) {
    return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var sw = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
    Ly = sw,
    kc = () => Math.random().toString(36).substring(7).split("").join("."),
    rw = {
        INIT: `@@redux/INIT${kc()}`,
        REPLACE: `@@redux/REPLACE${kc()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${kc()}`,
    },
    _r = rw;
function ld(n) {
    if (typeof n != "object" || n === null) return !1;
    let a = n;
    for (; Object.getPrototypeOf(a) !== null;) a = Object.getPrototypeOf(a);
    return Object.getPrototypeOf(n) === a || Object.getPrototypeOf(n) === null;
}
function Y1(n, a, s) {
    if (typeof n != "function") throw new Error(ee(2));
    if (
        (typeof a == "function" && typeof s == "function") ||
        (typeof s == "function" && typeof arguments[3] == "function")
    )
        throw new Error(ee(0));
    if (
        (typeof a == "function" && typeof s > "u" && ((s = a), (a = void 0)),
            typeof s < "u")
    ) {
        if (typeof s != "function") throw new Error(ee(1));
        return s(Y1)(n, a);
    }
    let r = n,
        u = a,
        f = new Map(),
        d = f,
        m = 0,
        h = !1;
    function y() {
        d === f &&
            ((d = new Map()),
                f.forEach((V, U) => {
                    d.set(U, V);
                }));
    }
    function p() {
        if (h) throw new Error(ee(3));
        return u;
    }
    function b(V) {
        if (typeof V != "function") throw new Error(ee(4));
        if (h) throw new Error(ee(5));
        let U = !0;
        y();
        const O = m++;
        return (
            d.set(O, V),
            function () {
                if (U) {
                    if (h) throw new Error(ee(6));
                    ((U = !1), y(), d.delete(O), (f = null));
                }
            }
        );
    }
    function S(V) {
        if (!ld(V)) throw new Error(ee(7));
        if (typeof V.type > "u") throw new Error(ee(8));
        if (typeof V.type != "string") throw new Error(ee(17));
        if (h) throw new Error(ee(9));
        try {
            ((h = !0), (u = r(u, V)));
        } finally {
            h = !1;
        }
        return (
            (f = d).forEach((O) => {
                O();
            }),
            V
        );
    }
    function j(V) {
        if (typeof V != "function") throw new Error(ee(10));
        ((r = V), S({ type: _r.REPLACE }));
    }
    function M() {
        const V = b;
        return {
            subscribe(U) {
                if (typeof U != "object" || U === null) throw new Error(ee(11));
                function O() {
                    const K = U;
                    K.next && K.next(p());
                }
                return (O(), { unsubscribe: V(O) });
            },
            [Ly]() {
                return this;
            },
        };
    }
    return (
        S({ type: _r.INIT }),
        { dispatch: S, subscribe: b, getState: p, replaceReducer: j, [Ly]: M }
    );
}
function ow(n) {
    Object.keys(n).forEach((a) => {
        const s = n[a];
        if (typeof s(void 0, { type: _r.INIT }) > "u") throw new Error(ee(12));
        if (typeof s(void 0, { type: _r.PROBE_UNKNOWN_ACTION() }) > "u")
            throw new Error(ee(13));
    });
}
function uw(n) {
    const a = Object.keys(n),
        s = {};
    for (let f = 0; f < a.length; f++) {
        const d = a[f];
        typeof n[d] == "function" && (s[d] = n[d]);
    }
    const r = Object.keys(s);
    let u;
    try {
        ow(s);
    } catch (f) {
        u = f;
    }
    return function (d = {}, m) {
        if (u) throw u;
        let h = !1;
        const y = {};
        for (let p = 0; p < r.length; p++) {
            const b = r[p],
                S = s[b],
                j = d[b],
                M = S(j, m);
            if (typeof M > "u") throw (m && m.type, new Error(ee(14)));
            ((y[b] = M), (h = h || M !== j));
        }
        return ((h = h || r.length !== Object.keys(d).length), h ? y : d);
    };
}
function Vr(...n) {
    return n.length === 0
        ? (a) => a
        : n.length === 1
            ? n[0]
            : n.reduce(
                (a, s) =>
                    (...r) =>
                        a(s(...r)),
            );
}
function cw(...n) {
    return (a) => (s, r) => {
        const u = a(s, r);
        let f = () => {
            throw new Error(ee(15));
        };
        const d = { getState: u.getState, dispatch: (h, ...y) => f(h, ...y) },
            m = n.map((h) => h(d));
        return ((f = Vr(...m)(u.dispatch)), { ...u, dispatch: f });
    };
}
function fw(n) {
    return ld(n) && "type" in n && typeof n.type == "string";
}
var G1 = Symbol.for("immer-nothing"),
    Uy = Symbol.for("immer-draftable"),
    Ae = Symbol.for("immer-state");
function Xe(n, ...a) {
    throw new Error(
        `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
    );
}
var Ca = Object.getPrototypeOf;
function Ei(n) {
    return !!n && !!n[Ae];
}
function An(n) {
    var a;
    return n
        ? X1(n) ||
        Array.isArray(n) ||
        !!n[Uy] ||
        !!((a = n.constructor) != null && a[Uy]) ||
        Qr(n) ||
        Zr(n)
        : !1;
}
var dw = Object.prototype.constructor.toString();
function X1(n) {
    if (!n || typeof n != "object") return !1;
    const a = Ca(n);
    if (a === null) return !0;
    const s = Object.hasOwnProperty.call(a, "constructor") && a.constructor;
    return s === Object
        ? !0
        : typeof s == "function" && Function.toString.call(s) === dw;
}
function Br(n, a) {
    Pr(n) === 0
        ? Reflect.ownKeys(n).forEach((s) => {
            a(s, n[s], n);
        })
        : n.forEach((s, r) => a(r, s, n));
}
function Pr(n) {
    const a = n[Ae];
    return a ? a.type_ : Array.isArray(n) ? 1 : Qr(n) ? 2 : Zr(n) ? 3 : 0;
}
function mf(n, a) {
    return Pr(n) === 2 ? n.has(a) : Object.prototype.hasOwnProperty.call(n, a);
}
function K1(n, a, s) {
    const r = Pr(n);
    r === 2 ? n.set(a, s) : r === 3 ? n.add(s) : (n[a] = s);
}
function hw(n, a) {
    return n === a ? n !== 0 || 1 / n === 1 / a : n !== n && a !== a;
}
function Qr(n) {
    return n instanceof Map;
}
function Zr(n) {
    return n instanceof Set;
}
function Ti(n) {
    return n.copy_ || n.base_;
}
function pf(n, a) {
    if (Qr(n)) return new Map(n);
    if (Zr(n)) return new Set(n);
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    const s = X1(n);
    if (a === !0 || (a === "class_only" && !s)) {
        const r = Object.getOwnPropertyDescriptors(n);
        delete r[Ae];
        let u = Reflect.ownKeys(r);
        for (let f = 0; f < u.length; f++) {
            const d = u[f],
                m = r[d];
            (m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
                (m.get || m.set) &&
                (r[d] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: m.enumerable,
                    value: n[d],
                }));
        }
        return Object.create(Ca(n), r);
    } else {
        const r = Ca(n);
        if (r !== null && s) return { ...n };
        const u = Object.create(r);
        return Object.assign(u, n);
    }
}
function sd(n, a = !1) {
    return (
        Fr(n) ||
        Ei(n) ||
        !An(n) ||
        (Pr(n) > 1 && (n.set = n.add = n.clear = n.delete = mw),
            Object.freeze(n),
            a && Object.entries(n).forEach(([s, r]) => sd(r, !0))),
        n
    );
}
function mw() {
    Xe(2);
}
function Fr(n) {
    return Object.isFrozen(n);
}
var pw = {};
function Mi(n) {
    const a = pw[n];
    return (a || Xe(0, n), a);
}
var Xl;
function P1() {
    return Xl;
}
function yw(n, a) {
    return {
        drafts_: [],
        parent_: n,
        immer_: a,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
    };
}
function ky(n, a) {
    a &&
        (Mi("Patches"),
            (n.patches_ = []),
            (n.inversePatches_ = []),
            (n.patchListener_ = a));
}
function yf(n) {
    (gf(n), n.drafts_.forEach(gw), (n.drafts_ = null));
}
function gf(n) {
    n === Xl && (Xl = n.parent_);
}
function Hy(n) {
    return (Xl = yw(Xl, n));
}
function gw(n) {
    const a = n[Ae];
    a.type_ === 0 || a.type_ === 1 ? a.revoke_() : (a.revoked_ = !0);
}
function qy(n, a) {
    a.unfinalizedDrafts_ = a.drafts_.length;
    const s = a.drafts_[0];
    return (
        n !== void 0 && n !== s
            ? (s[Ae].modified_ && (yf(a), Xe(4)),
                An(n) && ((n = Lr(a, n)), a.parent_ || Ur(a, n)),
                a.patches_ &&
                Mi("Patches").generateReplacementPatches_(
                    s[Ae].base_,
                    n,
                    a.patches_,
                    a.inversePatches_,
                ))
            : (n = Lr(a, s, [])),
        yf(a),
        a.patches_ && a.patchListener_(a.patches_, a.inversePatches_),
        n !== G1 ? n : void 0
    );
}
function Lr(n, a, s) {
    if (Fr(a)) return a;
    const r = a[Ae];
    if (!r) return (Br(a, (u, f) => Yy(n, r, a, u, f, s)), a);
    if (r.scope_ !== n) return a;
    if (!r.modified_) return (Ur(n, r.base_, !0), r.base_);
    if (!r.finalized_) {
        ((r.finalized_ = !0), r.scope_.unfinalizedDrafts_--);
        const u = r.copy_;
        let f = u,
            d = !1;
        (r.type_ === 3 && ((f = new Set(u)), u.clear(), (d = !0)),
            Br(f, (m, h) => Yy(n, r, u, m, h, s, d)),
            Ur(n, u, !1),
            s &&
            n.patches_ &&
            Mi("Patches").generatePatches_(
                r,
                s,
                n.patches_,
                n.inversePatches_,
            ));
    }
    return r.copy_;
}
function Yy(n, a, s, r, u, f, d) {
    if (Ei(u)) {
        const m =
            f && a && a.type_ !== 3 && !mf(a.assigned_, r)
                ? f.concat(r)
                : void 0,
            h = Lr(n, u, m);
        if ((K1(s, r, h), Ei(h))) n.canAutoFreeze_ = !1;
        else return;
    } else d && s.add(u);
    if (An(u) && !Fr(u)) {
        if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
        (Lr(n, u),
            (!a || !a.scope_.parent_) &&
            typeof r != "symbol" &&
            Object.prototype.propertyIsEnumerable.call(s, r) &&
            Ur(n, u));
    }
}
function Ur(n, a, s = !1) {
    !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && sd(a, s);
}
function vw(n, a) {
    const s = Array.isArray(n),
        r = {
            type_: s ? 1 : 0,
            scope_: a ? a.scope_ : P1(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: a,
            base_: n,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
        };
    let u = r,
        f = rd;
    s && ((u = [r]), (f = Kl));
    const { revoke: d, proxy: m } = Proxy.revocable(u, f);
    return ((r.draft_ = m), (r.revoke_ = d), m);
}
var rd = {
    get(n, a) {
        if (a === Ae) return n;
        const s = Ti(n);
        if (!mf(s, a)) return xw(n, s, a);
        const r = s[a];
        return n.finalized_ || !An(r)
            ? r
            : r === Hc(n.base_, a)
                ? (qc(n), (n.copy_[a] = xf(r, n)))
                : r;
    },
    has(n, a) {
        return a in Ti(n);
    },
    ownKeys(n) {
        return Reflect.ownKeys(Ti(n));
    },
    set(n, a, s) {
        const r = Q1(Ti(n), a);
        if (r != null && r.set) return (r.set.call(n.draft_, s), !0);
        if (!n.modified_) {
            const u = Hc(Ti(n), a),
                f = u == null ? void 0 : u[Ae];
            if (f && f.base_ === s)
                return ((n.copy_[a] = s), (n.assigned_[a] = !1), !0);
            if (hw(s, u) && (s !== void 0 || mf(n.base_, a))) return !0;
            (qc(n), vf(n));
        }
        return (
            (n.copy_[a] === s && (s !== void 0 || a in n.copy_)) ||
            (Number.isNaN(s) && Number.isNaN(n.copy_[a])) ||
            ((n.copy_[a] = s), (n.assigned_[a] = !0)),
            !0
        );
    },
    deleteProperty(n, a) {
        return (
            Hc(n.base_, a) !== void 0 || a in n.base_
                ? ((n.assigned_[a] = !1), qc(n), vf(n))
                : delete n.assigned_[a],
            n.copy_ && delete n.copy_[a],
            !0
        );
    },
    getOwnPropertyDescriptor(n, a) {
        const s = Ti(n),
            r = Reflect.getOwnPropertyDescriptor(s, a);
        return (
            r && {
                writable: !0,
                configurable: n.type_ !== 1 || a !== "length",
                enumerable: r.enumerable,
                value: s[a],
            }
        );
    },
    defineProperty() {
        Xe(11);
    },
    getPrototypeOf(n) {
        return Ca(n.base_);
    },
    setPrototypeOf() {
        Xe(12);
    },
},
    Kl = {};
Br(rd, (n, a) => {
    Kl[n] = function () {
        return ((arguments[0] = arguments[0][0]), a.apply(this, arguments));
    };
});
Kl.deleteProperty = function (n, a) {
    return Kl.set.call(this, n, a, void 0);
};
Kl.set = function (n, a, s) {
    return rd.set.call(this, n[0], a, s, n[0]);
};
function Hc(n, a) {
    const s = n[Ae];
    return (s ? Ti(s) : n)[a];
}
function xw(n, a, s) {
    var u;
    const r = Q1(a, s);
    return r
        ? "value" in r
            ? r.value
            : (u = r.get) == null
                ? void 0
                : u.call(n.draft_)
        : void 0;
}
function Q1(n, a) {
    if (!(a in n)) return;
    let s = Ca(n);
    for (; s;) {
        const r = Object.getOwnPropertyDescriptor(s, a);
        if (r) return r;
        s = Ca(s);
    }
}
function vf(n) {
    n.modified_ || ((n.modified_ = !0), n.parent_ && vf(n.parent_));
}
function qc(n) {
    n.copy_ || (n.copy_ = pf(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var bw = class {
    constructor(n) {
        ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.produce = (a, s, r) => {
                if (typeof a == "function" && typeof s != "function") {
                    const f = s;
                    s = a;
                    const d = this;
                    return function (h = f, ...y) {
                        return d.produce(h, (p) => s.call(this, p, ...y));
                    };
                }
                (typeof s != "function" && Xe(6),
                    r !== void 0 && typeof r != "function" && Xe(7));
                let u;
                if (An(a)) {
                    const f = Hy(this),
                        d = xf(a, void 0);
                    let m = !0;
                    try {
                        ((u = s(d)), (m = !1));
                    } finally {
                        m ? yf(f) : gf(f);
                    }
                    return (ky(f, r), qy(u, f));
                } else if (!a || typeof a != "object") {
                    if (
                        ((u = s(a)),
                            u === void 0 && (u = a),
                            u === G1 && (u = void 0),
                            this.autoFreeze_ && sd(u, !0),
                            r)
                    ) {
                        const f = [],
                            d = [];
                        (Mi("Patches").generateReplacementPatches_(a, u, f, d),
                            r(f, d));
                    }
                    return u;
                } else Xe(1, a);
            }),
            (this.produceWithPatches = (a, s) => {
                if (typeof a == "function")
                    return (d, ...m) =>
                        this.produceWithPatches(d, (h) => a(h, ...m));
                let r, u;
                return [
                    this.produce(a, s, (d, m) => {
                        ((r = d), (u = m));
                    }),
                    r,
                    u,
                ];
            }),
            typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
            this.setAutoFreeze(n.autoFreeze),
            typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" &&
            this.setUseStrictShallowCopy(n.useStrictShallowCopy));
    }
    createDraft(n) {
        (An(n) || Xe(8), Ei(n) && (n = Sw(n)));
        const a = Hy(this),
            s = xf(n, void 0);
        return ((s[Ae].isManual_ = !0), gf(a), s);
    }
    finishDraft(n, a) {
        const s = n && n[Ae];
        (!s || !s.isManual_) && Xe(9);
        const { scope_: r } = s;
        return (ky(r, a), qy(void 0, r));
    }
    setAutoFreeze(n) {
        this.autoFreeze_ = n;
    }
    setUseStrictShallowCopy(n) {
        this.useStrictShallowCopy_ = n;
    }
    applyPatches(n, a) {
        let s;
        for (s = a.length - 1; s >= 0; s--) {
            const u = a[s];
            if (u.path.length === 0 && u.op === "replace") {
                n = u.value;
                break;
            }
        }
        s > -1 && (a = a.slice(s + 1));
        const r = Mi("Patches").applyPatches_;
        return Ei(n) ? r(n, a) : this.produce(n, (u) => r(u, a));
    }
};
function xf(n, a) {
    const s = Qr(n)
        ? Mi("MapSet").proxyMap_(n, a)
        : Zr(n)
            ? Mi("MapSet").proxySet_(n, a)
            : vw(n, a);
    return ((a ? a.scope_ : P1()).drafts_.push(s), s);
}
function Sw(n) {
    return (Ei(n) || Xe(10, n), Z1(n));
}
function Z1(n) {
    if (!An(n) || Fr(n)) return n;
    const a = n[Ae];
    let s;
    if (a) {
        if (!a.modified_) return a.base_;
        ((a.finalized_ = !0),
            (s = pf(n, a.scope_.immer_.useStrictShallowCopy_)));
    } else s = pf(n, !0);
    return (
        Br(s, (r, u) => {
            K1(s, r, Z1(u));
        }),
        a && (a.finalized_ = !1),
        s
    );
}
var je = new bw(),
    F1 = je.produce;
je.produceWithPatches.bind(je);
je.setAutoFreeze.bind(je);
je.setUseStrictShallowCopy.bind(je);
je.applyPatches.bind(je);
je.createDraft.bind(je);
je.finishDraft.bind(je);
function $1(n) {
    return ({ dispatch: s, getState: r }) =>
        (u) =>
            (f) =>
                typeof f == "function" ? f(s, r, n) : u(f);
}
var Tw = $1(),
    ww = $1,
    Cw =
        typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (arguments.length !== 0)
                    return typeof arguments[0] == "object"
                        ? Vr
                        : Vr.apply(null, arguments);
            };
function Gy(n, a) {
    function s(...r) {
        if (a) {
            let u = a(...r);
            if (!u) throw new Error(wn(0));
            return {
                type: n,
                payload: u.payload,
                ...("meta" in u && { meta: u.meta }),
                ...("error" in u && { error: u.error }),
            };
        }
        return { type: n, payload: r[0] };
    }
    return (
        (s.toString = () => `${n}`),
        (s.type = n),
        (s.match = (r) => fw(r) && r.type === n),
        s
    );
}
var J1 = class Nl extends Array {
    constructor(...a) {
        (super(...a), Object.setPrototypeOf(this, Nl.prototype));
    }
    static get [Symbol.species]() {
        return Nl;
    }
    concat(...a) {
        return super.concat.apply(this, a);
    }
    prepend(...a) {
        return a.length === 1 && Array.isArray(a[0])
            ? new Nl(...a[0].concat(this))
            : new Nl(...a.concat(this));
    }
};
function Xy(n) {
    return An(n) ? F1(n, () => { }) : n;
}
function vr(n, a, s) {
    return n.has(a) ? n.get(a) : n.set(a, s(a)).get(a);
}
function Aw(n) {
    return typeof n == "boolean";
}
var jw = () =>
    function (a) {
        const {
            thunk: s = !0,
            immutableCheck: r = !0,
            serializableCheck: u = !0,
            actionCreatorCheck: f = !0,
        } = a ?? {};
        let d = new J1();
        return (s && (Aw(s) ? d.push(Tw) : d.push(ww(s.extraArgument))), d);
    },
    Ew = "RTK_autoBatch",
    Ky = (n) => (a) => {
        setTimeout(a, n);
    },
    Mw =
        (n = { type: "raf" }) =>
            (a) =>
                (...s) => {
                    const r = a(...s);
                    let u = !0,
                        f = !1,
                        d = !1;
                    const m = new Set(),
                        h =
                            n.type === "tick"
                                ? queueMicrotask
                                : n.type === "raf"
                                    ? typeof window < "u" && window.requestAnimationFrame
                                        ? window.requestAnimationFrame
                                        : Ky(10)
                                    : n.type === "callback"
                                        ? n.queueNotification
                                        : Ky(n.timeout),
                        y = () => {
                            ((d = !1), f && ((f = !1), m.forEach((p) => p())));
                        };
                    return Object.assign({}, r, {
                        subscribe(p) {
                            const b = () => u && p(),
                                S = r.subscribe(b);
                            return (
                                m.add(p),
                                () => {
                                    (S(), m.delete(p));
                                }
                            );
                        },
                        dispatch(p) {
                            var b;
                            try {
                                return (
                                    (u = !(
                                        (b = p == null ? void 0 : p.meta) != null &&
                                        b[Ew]
                                    )),
                                    (f = !u),
                                    f && (d || ((d = !0), h(y))),
                                    r.dispatch(p)
                                );
                            } finally {
                                u = !0;
                            }
                        },
                    });
                },
    Dw = (n) =>
        function (s) {
            const { autoBatch: r = !0 } = s ?? {};
            let u = new J1(n);
            return (r && u.push(Mw(typeof r == "object" ? r : void 0)), u);
        };
function Nw(n) {
    const a = jw(),
        {
            reducer: s = void 0,
            middleware: r,
            devTools: u = !0,
            preloadedState: f = void 0,
            enhancers: d = void 0,
        } = n || {};
    let m;
    if (typeof s == "function") m = s;
    else if (ld(s)) m = uw(s);
    else throw new Error(wn(1));
    let h;
    typeof r == "function" ? (h = r(a)) : (h = a());
    let y = Vr;
    u && (y = Cw({ trace: !1, ...(typeof u == "object" && u) }));
    const p = cw(...h),
        b = Dw(p);
    let S = typeof d == "function" ? d(b) : b();
    const j = y(...S);
    return Y1(m, f, j);
}
function W1(n) {
    const a = {},
        s = [];
    let r;
    const u = {
        addCase(f, d) {
            const m = typeof f == "string" ? f : f.type;
            if (!m) throw new Error(wn(28));
            if (m in a) throw new Error(wn(29));
            return ((a[m] = d), u);
        },
        addMatcher(f, d) {
            return (s.push({ matcher: f, reducer: d }), u);
        },
        addDefaultCase(f) {
            return ((r = f), u);
        },
    };
    return (n(u), [a, s, r]);
}
function Rw(n) {
    return typeof n == "function";
}
function Ow(n, a) {
    let [s, r, u] = W1(a),
        f;
    if (Rw(n)) f = () => Xy(n());
    else {
        const m = Xy(n);
        f = () => m;
    }
    function d(m = f(), h) {
        let y = [
            s[h.type],
            ...r.filter(({ matcher: p }) => p(h)).map(({ reducer: p }) => p),
        ];
        return (
            y.filter((p) => !!p).length === 0 && (y = [u]),
            y.reduce((p, b) => {
                if (b)
                    if (Ei(p)) {
                        const j = b(p, h);
                        return j === void 0 ? p : j;
                    } else {
                        if (An(p)) return F1(p, (S) => b(S, h));
                        {
                            const S = b(p, h);
                            if (S === void 0) {
                                if (p === null) return p;
                                throw Error(
                                    "A case reducer on a non-draftable value must not return undefined",
                                );
                            }
                            return S;
                        }
                    }
                return p;
            }, m)
        );
    }
    return ((d.getInitialState = f), d);
}
var zw = Symbol.for("rtk-slice-createasyncthunk");
function _w(n, a) {
    return `${n}/${a}`;
}
function Vw({ creators: n } = {}) {
    var s;
    const a = (s = n == null ? void 0 : n.asyncThunk) == null ? void 0 : s[zw];
    return function (u) {
        const { name: f, reducerPath: d = f } = u;
        if (!f) throw new Error(wn(11));
        const m =
            (typeof u.reducers == "function"
                ? u.reducers(Uw())
                : u.reducers) || {},
            h = Object.keys(m),
            y = {
                sliceCaseReducersByName: {},
                sliceCaseReducersByType: {},
                actionCreators: {},
                sliceMatchers: [],
            },
            p = {
                addCase(K, z) {
                    const P = typeof K == "string" ? K : K.type;
                    if (!P) throw new Error(wn(12));
                    if (P in y.sliceCaseReducersByType) throw new Error(wn(13));
                    return ((y.sliceCaseReducersByType[P] = z), p);
                },
                addMatcher(K, z) {
                    return (
                        y.sliceMatchers.push({ matcher: K, reducer: z }),
                        p
                    );
                },
                exposeAction(K, z) {
                    return ((y.actionCreators[K] = z), p);
                },
                exposeCaseReducer(K, z) {
                    return ((y.sliceCaseReducersByName[K] = z), p);
                },
            };
        h.forEach((K) => {
            const z = m[K],
                P = {
                    reducerName: K,
                    type: _w(f, K),
                    createNotation: typeof u.reducers == "function",
                };
            Hw(z) ? Yw(P, z, p, a) : kw(P, z, p);
        });
        function b() {
            const [K = {}, z = [], P = void 0] =
                typeof u.extraReducers == "function"
                    ? W1(u.extraReducers)
                    : [u.extraReducers],
                J = { ...K, ...y.sliceCaseReducersByType };
            return Ow(u.initialState, (Z) => {
                for (let st in J) Z.addCase(st, J[st]);
                for (let st of y.sliceMatchers)
                    Z.addMatcher(st.matcher, st.reducer);
                for (let st of z) Z.addMatcher(st.matcher, st.reducer);
                P && Z.addDefaultCase(P);
            });
        }
        const S = (K) => K,
            j = new Map(),
            M = new WeakMap();
        let H;
        function V(K, z) {
            return (H || (H = b()), H(K, z));
        }
        function U() {
            return (H || (H = b()), H.getInitialState());
        }
        function O(K, z = !1) {
            function P(Z) {
                let st = Z[K];
                return (typeof st > "u" && z && (st = vr(M, P, U)), st);
            }
            function J(Z = S) {
                const st = vr(j, z, () => new WeakMap());
                return vr(st, Z, () => {
                    const jt = {};
                    for (const [Ut, _t] of Object.entries(u.selectors ?? {}))
                        jt[Ut] = Bw(_t, Z, () => vr(M, Z, U), z);
                    return jt;
                });
            }
            return {
                reducerPath: K,
                getSelectors: J,
                get selectors() {
                    return J(P);
                },
                selectSlice: P,
            };
        }
        const G = {
            name: f,
            reducer: V,
            actions: y.actionCreators,
            caseReducers: y.sliceCaseReducersByName,
            getInitialState: U,
            ...O(d),
            injectInto(K, { reducerPath: z, ...P } = {}) {
                const J = z ?? d;
                return (
                    K.inject({ reducerPath: J, reducer: V }, P),
                    { ...G, ...O(J, !0) }
                );
            },
        };
        return G;
    };
}
function Bw(n, a, s, r) {
    function u(f, ...d) {
        let m = a(f);
        return (typeof m > "u" && r && (m = s()), n(m, ...d));
    }
    return ((u.unwrapped = n), u);
}
var Lw = Vw();
function Uw() {
    function n(a, s) {
        return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: a,
            ...s,
        };
    }
    return (
        (n.withTypes = () => n),
        {
            reducer(a) {
                return Object.assign(
                    {
                        [a.name](...s) {
                            return a(...s);
                        },
                    }[a.name],
                    { _reducerDefinitionType: "reducer" },
                );
            },
            preparedReducer(a, s) {
                return {
                    _reducerDefinitionType: "reducerWithPrepare",
                    prepare: a,
                    reducer: s,
                };
            },
            asyncThunk: n,
        }
    );
}
function kw({ type: n, reducerName: a, createNotation: s }, r, u) {
    let f, d;
    if ("reducer" in r) {
        if (s && !qw(r)) throw new Error(wn(17));
        ((f = r.reducer), (d = r.prepare));
    } else f = r;
    u.addCase(n, f)
        .exposeCaseReducer(a, f)
        .exposeAction(a, d ? Gy(n, d) : Gy(n));
}
function Hw(n) {
    return n._reducerDefinitionType === "asyncThunk";
}
function qw(n) {
    return n._reducerDefinitionType === "reducerWithPrepare";
}
function Yw({ type: n, reducerName: a }, s, r, u) {
    if (!u) throw new Error(wn(18));
    const {
        payloadCreator: f,
        fulfilled: d,
        pending: m,
        rejected: h,
        settled: y,
        options: p,
    } = s,
        b = u(n, f, p);
    (r.exposeAction(a, b),
        d && r.addCase(b.fulfilled, d),
        m && r.addCase(b.pending, m),
        h && r.addCase(b.rejected, h),
        y && r.addMatcher(b.settled, y),
        r.exposeCaseReducer(a, {
            fulfilled: d || xr,
            pending: m || xr,
            rejected: h || xr,
            settled: y || xr,
        }));
}
function xr() { }
function wn(n) {
    return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const od = {
    primaryColor: "#1068f4",
    secondary: "#063cbc",
    bg: "#121212",
    cardBg: "#1E1E1E",
    cardSecondary: "#252525",
    text: "#F5F5F5",
    summeryText: "#B0B0B0",
    headingText: "#FFFFFF",
    accentGreen: "#10B981",
    accentBlue: "#3B82F6",
    accentGold: "#FBBF24",
    accentRed: "#EF4444",
    tooltipText: "#FFFFFF",
    border: "#333333",
    borderLight: "#404040",
    borderHighlight: "#4A4A4A",
    hover: "#F97316",
    active: "#EA580C",
    disabled: "#3D3D3D",
    overlay: "rgba(0,0,0,0.7)",
    shadow: "rgba(0,0,0,0.5)",
},
    I1 = {
        primaryColor: "#EA580C",
        secondary: "#C2410C",
        bg: "#F8FAFC",
        cardBg: "#FFFFFF",
        cardSecondary: "#F1F5F9",
        text: "#1E293B",
        summeryText: "#64748B",
        headingText: "#0F172A",
        accentGreen: "#059669",
        accentBlue: "#2563EB",
        accentGold: "#D97706",
        accentRed: "#DC2626",
        tooltipText: "#FFFFFF",
        border: "#E2E8F0",
        borderLight: "#CBD5E1",
        borderHighlight: "#94A3B8",
        hover: "#F97316",
        active: "#EA580C",
        disabled: "#E2E8F0",
        overlay: "rgba(255,255,255,0.7)",
        shadow: "rgba(0,0,0,0.1)",
    };
let Gw = JSON.parse(localStorage.getItem("customTheme")) || { ...od };
const Yc = localStorage.getItem("theme") || "dark",
    Xw = {
        theme: Yc,
        themeColors: Yc === "dark" ? od : Yc === "custom" ? Gw : I1,
    },
    tv = Lw({
        name: "theme",
        initialState: Xw,
        reducers: {
            setDarkTheme: (n) => {
                ((n.theme = "dark"),
                    (n.themeColors = od),
                    localStorage.setItem("theme", "dark"));
            },
            setLightTheme: (n) => {
                ((n.theme = "light"),
                    (n.themeColors = I1),
                    localStorage.setItem("theme", "light"));
            },
            setCustomTheme: (n, a) => {
                ((n.theme = "custom"),
                    (n.themeColors = a.payload),
                    localStorage.setItem("theme", "custom"),
                    localStorage.setItem(
                        "customTheme",
                        JSON.stringify(a.payload),
                    ));
            },
        },
    }),
    { setDarkTheme: bC, setLightTheme: SC, setCustomTheme: Kw } = tv.actions,
    Pw = tv.reducer,
    Qw = () => {
        const [n, a] = _.useState(!1),
            [s, r] = _.useState(""),
            [u, f] = _.useState(!1),
            [d, m] = _.useState(!1),
            [h, y] = _.useState({}),
            {
                themeColors: p,
                theme: b,
                darkTheme: S,
                lightTheme: j,
            } = Kt((O) => O.themeReducer),
            M = Jb(),
            H = [
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact", href: "#contact" },
            ];
        (_.useEffect(() => {
            const O = () => {
                const G = document.querySelectorAll("section"),
                    K = window.scrollY + 100;
                G.forEach((z) => {
                    const P = z.offsetTop,
                        J = z.offsetHeight,
                        Z = z.getAttribute("id");
                    K >= P && K < P + J && r(`#${Z}`);
                });
            };
            return (
                window.addEventListener("scroll", O),
                O(),
                () => window.removeEventListener("scroll", O)
            );
        }, []),
            _.useEffect(
                () => (
                    (document.body.style.overflow = n ? "hidden" : "auto"),
                    () => (document.body.style.overflow = "auto")
                ),
                [n],
            ));
        const V = () => {
            (M(Kw({ ...p, ...h })), m(!1));
        },
            U = () => a(!1);
        return v.jsx("header", {
            className:
                "fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300",
            style: {
                backgroundColor: `${p.bg}30`,
                borderColor: `${p.border}40`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
            },
            children: v.jsxs("div", {
                className:
                    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center",
                children: [
                    v.jsxs("a", {
                        href: "#",
                        "aria-label": "Homepage",
                        onClick: U,
                        className:
                            "text-2xl sm:text-3xl font-bold hover:rotate-2 transition-transform duration-300",
                        style: { color: p.text },
                        children: [
                            v.jsx("span", {
                                style: { color: p.primaryColor },
                                children: "{ ",
                            }),
                            "Kunal",
                            v.jsx("span", {
                                style: { color: p.primaryColor },
                                children: " }",
                            }),
                        ],
                    }),
                    v.jsx("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: H.map((O) =>
                            v.jsxs(
                                "a",
                                {
                                    href: O.href,
                                    className: `relative group py-2 transition-colors duration-300 ${s === O.href ? "font-semibold" : "font-medium"}`,
                                    style: {
                                        color:
                                            s === O.href
                                                ? p.primaryColor
                                                : p.text,
                                    },
                                    children: [
                                        O.name,
                                        v.jsx("span", {
                                            className: `absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${s === O.href ? "w-full" : "w-0 group-hover:w-full"}`,
                                            style: {
                                                backgroundColor: p.primaryColor,
                                            },
                                        }),
                                    ],
                                },
                                O.name,
                            ),
                        ),
                    }),
                    v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            v.jsx("a", {
                                href: "./Kunal_Doc.pdf",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: v.jsxs("button", {
                                    className:
                                        "hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 cursor-pointer",
                                    style: {
                                        background: `linear-gradient(135deg, ${p.primaryColor}, ${p.secondary})`,
                                    },
                                    children: [
                                        "Resume",
                                        " ",
                                        v.jsx(By, {
                                            className:
                                                "transition-transform hover:translate-y-0.5",
                                        }),
                                    ],
                                }),
                            }),
                            v.jsx("button", {
                                onClick: () => a(!n),
                                className:
                                    "md:hidden p-2 rounded-full transition-colors duration-300 cursor-pointer",
                                style: {
                                    color: p.text,
                                    backgroundColor: n
                                        ? `${p.primaryColor}20`
                                        : `${p.border}20`,
                                    border: `1px solid ${n ? p.primaryColor : p.border}`,
                                },
                                "aria-label": n ? "Close menu" : "Open menu",
                                children: n
                                    ? v.jsx(zr, { size: 18 })
                                    : v.jsx(nw, { size: 18 }),
                            }),
                        ],
                    }),
                    v.jsx(Sn, {
                        children:
                            n &&
                            v.jsx(Q.div, {
                                className:
                                    "md:hidden fixed inset-0 top-16 z-40 overflow-y-auto",
                                initial: { x: "100%" },
                                animate: { x: 0 },
                                exit: { x: "100%" },
                                transition: { duration: 0.3 },
                                style: {
                                    height: "calc(100vh - 4rem)",
                                    backgroundColor: p.bg,
                                },
                                children: v.jsx("div", {
                                    className: "container mx-auto px-6 py-8",
                                    children: v.jsxs("div", {
                                        className: "flex flex-col space-y-6",
                                        children: [
                                            H.map((O, G) =>
                                                v.jsxs(
                                                    Q.a,
                                                    {
                                                        href: O.href,
                                                        onClick: U,
                                                        className:
                                                            "group flex justify-between items-center py-4 text-lg font-medium",
                                                        style: {
                                                            color:
                                                                s === O.href
                                                                    ? p.primaryColor
                                                                    : p.text,
                                                        },
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20,
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                        },
                                                        transition: {
                                                            delay: G * 0.05,
                                                        },
                                                        children: [
                                                            O.name,
                                                            v.jsx(ew, {
                                                                className:
                                                                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                                style: {
                                                                    color: p.primaryColor,
                                                                },
                                                            }),
                                                        ],
                                                    },
                                                    O.name,
                                                ),
                                            ),
                                            v.jsx(Q.a, {
                                                href: "akdjfn",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "block",
                                                initial: { opacity: 0, y: 20 },
                                                animate: { opacity: 1, y: 0 },
                                                transition: {
                                                    delay: H.length * 0.05,
                                                },
                                                children: v.jsxs("button", {
                                                    className:
                                                        "w-full py-4 rounded-xl font-semibold text-lg flex justify-center items-center gap-3 mt-6 hover:shadow-lg transition-all duration-300 cursor-pointer",
                                                    style: {
                                                        background: `linear-gradient(135deg, ${p.primaryColor}, ${p.secondary})`,
                                                        color: "white",
                                                    },
                                                    children: [
                                                        "Resume ",
                                                        v.jsx(By, {}),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                    v.jsx(Sn, {
                        children:
                            d &&
                            v.jsx(Q.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                className:
                                    "fixed  bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 top-0",
                                onClick: () => m(!1),
                                children: v.jsxs(Q.div, {
                                    initial: { scale: 0.9 },
                                    animate: { scale: 1 },
                                    exit: { scale: 0.9 },
                                    className:
                                        "rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                                    style: {
                                        backgroundColor: p.cardBg,
                                        border: `1px solid ${p.border}`,
                                    },
                                    onClick: (O) => O.stopPropagation(),
                                    children: [
                                        v.jsxs("div", {
                                            className:
                                                "flex justify-between items-center mb-6",
                                            children: [
                                                v.jsxs("h3", {
                                                    className:
                                                        "text-2xl font-semibold mb-2 inline-flex items-center gap-2 tracking-tight",
                                                    style: {
                                                        color: p.primaryColor,
                                                    },
                                                    children: [
                                                        "🎨 Customize Theme",
                                                        v.jsx("span", {
                                                            className:
                                                                "text-sm font-normal text-gray-500 dark:text-gray-400",
                                                            children:
                                                                "(via hex code or color picker)",
                                                        }),
                                                    ],
                                                }),
                                                v.jsx("button", {
                                                    onClick: () => m(!1),
                                                    className:
                                                        "p-1 rounded-full hover:bg-opacity-10 transition-colors",
                                                    style: {
                                                        color: p.text,
                                                        backgroundColor: `${p.border}20`,
                                                    },
                                                    "aria-label":
                                                        "Close theme customizer",
                                                    children: v.jsx(zr, {
                                                        size: 18,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        v.jsxs("div", {
                                            className:
                                                "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                v.jsxs("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        v.jsx("h4", {
                                                            className:
                                                                "font-semibold pb-2 border-b",
                                                            style: {
                                                                color: p.text,
                                                                borderColor:
                                                                    p.border,
                                                            },
                                                            children:
                                                                "Core Colors",
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Primary Color",
                                                            value: h.primaryColor,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    primaryColor:
                                                                        O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Secondary Color",
                                                            value: h.secondary,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    secondary:
                                                                        O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Accent Color",
                                                            value: h.accent,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    accent: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                    ],
                                                }),
                                                v.jsxs("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        v.jsx("h4", {
                                                            className:
                                                                "font-semibold pb-2 border-b",
                                                            style: {
                                                                color: p.text,
                                                                borderColor:
                                                                    p.border,
                                                            },
                                                            children:
                                                                "Backgrounds",
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Page Background",
                                                            value: h.bg,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    bg: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Card Background",
                                                            value: h.cardBg,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    cardBg: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Secondary Card BG",
                                                            value: h.cardSecondary,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    cardSecondary:
                                                                        O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                    ],
                                                }),
                                                v.jsxs("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        v.jsx("h4", {
                                                            className:
                                                                "font-semibold pb-2 border-b",
                                                            style: {
                                                                color: p.text,
                                                                borderColor:
                                                                    p.border,
                                                            },
                                                            children:
                                                                "Text Colors",
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Primary Text",
                                                            value: h.text,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    text: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Secondary Text",
                                                            value: h.summeryText,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    summeryText:
                                                                        O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Heading Text",
                                                            value: h.headingText,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    headingText:
                                                                        O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                    ],
                                                }),
                                                v.jsxs("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        v.jsx("h4", {
                                                            className:
                                                                "font-semibold pb-2 border-b",
                                                            style: {
                                                                color: p.text,
                                                                borderColor:
                                                                    p.border,
                                                            },
                                                            children:
                                                                "Borders & States",
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Border Color",
                                                            value: h.border,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    border: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Hover State",
                                                            value: h.hover,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    hover: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                        v.jsx(Le, {
                                                            label: "Active State",
                                                            value: h.active,
                                                            onChange: (O) =>
                                                                y({
                                                                    ...h,
                                                                    active: O,
                                                                }),
                                                            themeColors: p,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        v.jsxs("div", {
                                            className: "mt-8 p-4 rounded-lg",
                                            style: {
                                                backgroundColor: h.cardBg,
                                                border: `1px solid ${h.border}`,
                                            },
                                            children: [
                                                v.jsx("h4", {
                                                    className:
                                                        "font-semibold mb-3",
                                                    style: {
                                                        color: h.primaryColor,
                                                    },
                                                    children: "Theme Preview",
                                                }),
                                                v.jsxs("div", {
                                                    className:
                                                        "grid grid-cols-2 gap-4",
                                                    children: [
                                                        v.jsx("div", {
                                                            className:
                                                                "p-3 rounded",
                                                            style: {
                                                                backgroundColor:
                                                                    h.bg,
                                                                color: h.text,
                                                            },
                                                            children:
                                                                "Page Background",
                                                        }),
                                                        v.jsx("div", {
                                                            className:
                                                                "p-3 rounded",
                                                            style: {
                                                                backgroundColor:
                                                                    h.primaryColor,
                                                                color: "white",
                                                            },
                                                            children:
                                                                "Primary Color",
                                                        }),
                                                        v.jsx("div", {
                                                            className:
                                                                "p-3 rounded",
                                                            style: {
                                                                backgroundColor:
                                                                    h.cardBg,
                                                                color: h.text,
                                                                border: `1px solid ${h.border}`,
                                                            },
                                                            children:
                                                                "Card Example",
                                                        }),
                                                        v.jsx("div", {
                                                            className:
                                                                "p-3 rounded",
                                                            style: {
                                                                backgroundColor:
                                                                    h.hover,
                                                                color: "white",
                                                            },
                                                            children:
                                                                "Hover State",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        v.jsxs("div", {
                                            className:
                                                "flex justify-end gap-3 mt-8",
                                            children: [
                                                v.jsx("button", {
                                                    onClick: () => {
                                                        (m(!1),
                                                            y(
                                                                b === "dark"
                                                                    ? S
                                                                    : j,
                                                            ));
                                                    },
                                                    className:
                                                        "px-4 py-2 rounded-lg font-medium",
                                                    style: {
                                                        backgroundColor: `${p.border}20`,
                                                        color: p.text,
                                                    },
                                                    children: "Cancel",
                                                }),
                                                v.jsx("button", {
                                                    onClick: V,
                                                    className:
                                                        "px-4 py-2 rounded-lg font-medium",
                                                    style: {
                                                        backgroundColor:
                                                            p.primaryColor,
                                                        color: "#fff",
                                                    },
                                                    children: "Apply Theme",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                    }),
                ],
            }),
        });
    },
    Le = ({ label: n, value: a, onChange: s, themeColors: r }) =>
        v.jsxs("div", {
            children: [
                v.jsx("label", {
                    className: "block text-sm mb-1",
                    style: { color: r.text },
                    children: n,
                }),
                v.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                        v.jsxs("div", {
                            className: "relative",
                            children: [
                                v.jsx("input", {
                                    type: "color",
                                    value: a,
                                    onChange: (u) => s(u.target.value),
                                    className:
                                        "w-10 h-10 rounded cursor-pointer",
                                    style: { border: `1px solid ${r.border}` },
                                }),
                                v.jsx("div", {
                                    className:
                                        "absolute inset-0 rounded pointer-events-none",
                                    style: {
                                        boxShadow: `0 0 0 2px ${r.cardBg}, 0 0 0 3px ${r.border}`,
                                    },
                                }),
                            ],
                        }),
                        v.jsx("div", {
                            className: "flex-1",
                            children: v.jsx("input", {
                                type: "text",
                                value: a,
                                onChange: (u) => s(u.target.value),
                                className: "w-full px-3 py-1 text-sm rounded",
                                style: {
                                    backgroundColor: r.cardBg,
                                    color: r.text,
                                    border: `1px solid ${r.border}`,
                                },
                            }),
                        }),
                    ],
                }),
            ],
        });
function Zw() {
    const [n, a] = _.useState({ width: void 0, height: void 0 });
    return (
        _.useEffect(() => {
            function s() {
                a({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
                window.addEventListener("resize", s),
                s(),
                () => window.removeEventListener("resize", s)
            );
        }, []),
        n
    );
}
function Fw() {
    const { themeColors: n, theme: a } = Kt((U) => U.themeReducer),
        [s, r] = _.useState(!1),
        [u, f] = _.useState(!1),
        [d, m] = _.useState(null),
        h = Zw(),
        p = h.width
            ? h.width >= 1280
                ? 500
                : h.width >= 1024
                    ? 450
                    : h.width >= 768
                        ? 400
                        : h.width >= 640
                            ? 350
                            : Math.min(300, h.width - 40)
            : 300,
        b = p / 2,
        S = p * 0.33,
        j = p * 0.5,
        M = p * 0.08,
        H = p * 0.14,
        V = (U, O, G, K) =>
            Ll.techIcons
                .filter((z) => z.size === U)
                .map((z, P) => {
                    const J = d === `${U}-${P}`,
                        Z = U === "small" ? M : H;
                    return v.jsx(
                        "div",
                        {
                            className: "icon-wrapper",
                            style: {
                                position: "absolute",
                                left: `calc(50% - ${Z / 2}px)`,
                                top: `calc(50% - ${Z / 2}px)`,
                                transform: `rotate(${z.angle}deg) translateX(${O}px) rotate(-${z.angle}deg)`,
                                animation: `${G}s linear infinite ${K}`,
                                "--current-angle": `${z.angle}deg`,
                                "--current-radius": `${O}px`,
                                cursor: "pointer",
                                pointerEvents: "auto",
                            },
                            onMouseEnter: () => m(`${U}-${P}`),
                            onMouseLeave: () => m(null),
                            children: v.jsxs("div", {
                                style: {
                                    width: `${Z}px`,
                                    position: "relative",
                                },
                                children: [
                                    v.jsx("img", {
                                        alt: z.name,
                                        src: z.src,
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            transition: "transform 0.3s ease",
                                        },
                                    }),
                                    J &&
                                    v.jsxs("div", {
                                        className: "tech-tooltip",
                                        style: {
                                            backgroundColor: z.tooltipColor,
                                        },
                                        children: [
                                            z.name,
                                            v.jsx("div", {
                                                className:
                                                    "tech-tooltip-arrow",
                                                style: {
                                                    borderTopColor:
                                                        z.tooltipColor,
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        },
                        `${U}-${P}`,
                    );
                });
    return v.jsx("div", {
        className: "scrolling-images-container",
        children: v.jsxs("div", {
            className: "relative mx-auto",
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            style: {
                width: `${p}px`,
                height: `${p}px`,
                minWidth: "280px",
                minHeight: "280px",
            },
            children: [
                v.jsxs("svg", {
                    className: "absolute top-0 left-0",
                    width: p,
                    height: p,
                    style: {
                        filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 25px rgba(59, 130, 246, 0.2))",
                    },
                    children: [
                        v.jsx("circle", {
                            cx: b,
                            cy: b,
                            r: S,
                            stroke: "rgba(59, 130, 246, 0.6)",
                            strokeWidth: "2",
                            strokeDasharray: "5 5",
                            fill: "none",
                        }),
                        v.jsx("circle", {
                            cx: b,
                            cy: b,
                            r: j,
                            stroke: "rgba(59, 130, 246, 0.7)",
                            strokeWidth: "3",
                            strokeDasharray: "10 10",
                            fill: "none",
                        }),
                    ],
                }),
                v.jsx("div", {
                    className:
                        "absolute top-0 left-0 w-full h-full pointer-events-none",
                    children: V("small", S, 6, "orbit-rotate"),
                }),
                v.jsx("div", {
                    className: "relative z-10 rounded-full overflow-hidden",
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    },
                    children: v.jsxs("div", {
                        className: "w-full h-full relative",
                        onMouseEnter: () => f(!0),
                        onMouseLeave: () => f(!1),
                        onMouseMove: (U) => {
                            const O = U.currentTarget.getBoundingClientRect(),
                                G = U.clientX - O.left,
                                K = U.clientY - O.top;
                            (U.currentTarget.style.setProperty(
                                "--mouse-x",
                                `${G}px`,
                            ),
                                U.currentTarget.style.setProperty(
                                    "--mouse-y",
                                    `${K}px`,
                                ));
                        },
                        style: { "--mouse-x": "50%", "--mouse-y": "50%" },
                        children: [
                            v.jsx("img", {
                                alt: "Kunal - Software Developer (Lit)",
                                src: Ll.imageLit,
                                className:
                                    "absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                                style: {
                                    height: `${p * 1.1}px`,
                                    width: "auto",
                                    maxWidth: "none",
                                    zIndex: 1,
                                },
                            }),
                            v.jsx("img", {
                                alt: "Kunal - Software Developer",
                                src: Ll.image,
                                className:
                                    "absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out pointer-events-none",
                                style: {
                                    height: `${p * 1.1}px`,
                                    width: "auto",
                                    maxWidth: "none",
                                    zIndex: 2,
                                    maskImage: u
                                        ? "radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), transparent 0%, black 60%, black 100%)"
                                        : "none",
                                    WebkitMaskImage: u
                                        ? "radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), transparent 0%, black 60%, black 100%)"
                                        : "none",
                                },
                            }),
                        ],
                    }),
                }),
                v.jsx("div", {
                    className:
                        "absolute top-0 left-0 w-full h-full z-20 pointer-events-none",
                    children: V("large", j, 12, "orbit-rotate"),
                }),
            ],
        }),
    });
}
const $w = _.memo(Fw),
    Jw = ({ words: n, wait: a = 3e3, themeColors: s }) => {
        const [r, u] = _.useState(n[0]),
            [f, d] = _.useState(0);
        return (
            _.useEffect(() => {
                let m, h;
                const y = n[f];
                let p = 0;
                return (
                    (m = setInterval(() => {
                        (u(
                            y
                                .split("")
                                .map((b, S) =>
                                    S < p
                                        ? y[S]
                                        : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"[
                                        Math.floor(Math.random() * 46)
                                        ],
                                )
                                .join(""),
                        ),
                            p >= y.length &&
                            (clearInterval(m),
                                (h = setTimeout(() => {
                                    d((b) => (b + 1) % n.length);
                                }, a))),
                            (p += 1 / 3));
                    }, 30)),
                    () => {
                        (clearInterval(m), clearTimeout(h));
                    }
                );
            }, [f, n, a]),
            v.jsxs("span", {
                style: { fontFamily: "monospace", fontWeight: "bold" },
                children: [
                    r,
                    v.jsx("span", {
                        className: "animate-pulse",
                        style: { color: s == null ? void 0 : s.primaryColor },
                        children: "_",
                    }),
                ],
            })
        );
    };
function Ww() {
    const { themeColors: n } = Kt((a) => a.themeReducer);
    return v.jsxs("div", {
        className:
            "w-full lg:w-1/2 mx-auto shrink-0 lg:mx-0 py-8 lg:py-12 order-2 lg:order-1 text-center lg:text-left",
        children: [
            v.jsx("div", {
                className: "mt-0",
                children: v.jsx("div", {
                    className:
                        "flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 items-center lg:items-start",
                    children: v.jsx("span", {
                        className:
                            "rounded-full px-3 py-1 text-sm/6 font-semibold",
                        style: {
                            backgroundColor: `${n.primaryColor}1a`,
                            border: `1px solid ${n.primaryColor}33`,
                            color: n.primaryColor,
                        },
                        children: Ll.badge,
                    }),
                }),
            }),
            v.jsx("div", {
                className: "mt-6 sm:mt-4",
                children: v.jsxs("h1", {
                    className:
                        "font-bold text-3xl md:text-5xl md:leading-tight max-w-3xl mx-auto",
                    style: { color: n.text },
                    children: [
                        "Hey! I'm",
                        " ",
                        v.jsx("span", {
                            style: { color: n.primaryColor },
                            children: "Kunal",
                        }),
                        " ",
                        v.jsx("br", {}),
                        " A",
                        " ",
                        v.jsx("span", {
                            children: v.jsx(Jw, {
                                words: [
                                    "Software Developer",
                                    "Founder @ NXTVEL",
                                    "Tech Innovator",
                                ],
                                wait: 2500,
                                themeColors: n,
                            }),
                        }),
                    ],
                }),
            }),
            v.jsx("div", {
                className: "mt-6 sm:mt-4 max-w-md mx-auto lg:mx-0",
                children: v.jsx("p", {
                    className: "text-sm md:text-base max-w-2xl mt-8",
                    style: { color: n.summeryText },
                    children: Ll.subtitle,
                }),
            }),
            v.jsxs("div", {
                className:
                    "mt-8 flex flex-wrap justify-center lg:justify-start sm:flex-row gap-4",
                children: [
                    v.jsx("a", {
                        href: "/#projects",
                        children: v.jsx("button", {
                            className:
                                "px-6 py-3 text-white font-medium rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer",
                            style: {
                                background: `linear-gradient(to right, ${n.primaryColor}, ${n.secondary})`,
                                boxShadow: `0 0 15px ${n.primaryColor}4D`,
                            },
                            children: "Check portfolio",
                        }),
                    }),
                    v.jsx("a", {
                        href: "/#contact",
                        children: v.jsx("button", {
                            className:
                                "px-6 py-3 font-medium rounded-lg transition-colors duration-300 ease-in-out hover:bg-[--primary] hover:text-white cursor-pointer",
                            style: {
                                border: `1px solid ${n.primaryColor}`,
                                color: n.primaryColor,
                                backgroundColor: `${n.primaryColor}1a`,
                                "--primary": n.primaryColor,
                            },
                            children: "Contact Me",
                        }),
                    }),
                ],
            }),
        ],
    });
}
const Iw = _.memo(Ww),
    tC = () => {
        const { themeColors: n } = Kt((f) => f.themeReducer);
        let a = df(0),
            s = df(0);
        function r({ currentTarget: f, clientX: d, clientY: m }) {
            let { left: h, top: y } = f.getBoundingClientRect();
            (a.set(d - h), s.set(m - y));
        }
        const u = n6`radial-gradient(circle 250px at ${a}px ${s}px, white 0%, transparent 80%)`;
        return (
            n.bg,
            v.jsx("section", {
                className: "relative overflow-hidden group",
                id: "home",
                onMouseMove: r,
                style: { backgroundColor: n.bg },
                children: v.jsx("div", {
                    className: "relative w-full",
                    children: v.jsx("div", {
                        className:
                            "w-full transition-opacity duration-500 pt-14 md:pt-16 opacity-100 z-10 pointer-events-auto",
                        children: v.jsxs("div", {
                            className:
                                "block relative isolate overflow-hidden h-full transition-all duration-300 shadow-2xl",
                            children: [
                                v.jsx("div", {
                                    className:
                                        "absolute inset-0 z-0 pointer-events-none",
                                    style: {
                                        backgroundImage: `linear-gradient(to right, ${n.primaryColor}22 1px, transparent 1px),
                                  linear-gradient(to bottom, ${n.primaryColor}22 1px, transparent 1px)`,
                                        backgroundSize: "40px 40px",
                                    },
                                }),
                                v.jsx(Q.div, {
                                    className:
                                        "absolute inset-0 z-10 pointer-events-none",
                                    style: {
                                        backgroundImage: `linear-gradient(to right, ${n.primaryColor} 1px, transparent 1px),
                                  linear-gradient(to bottom, ${n.primaryColor} 1px, transparent 1px)`,
                                        backgroundSize: "40px 40px",
                                        maskImage: u,
                                        WebkitMaskImage: u,
                                        opacity: 0.8,
                                    },
                                }),
                                v.jsx(Q.div, {
                                    className:
                                        "absolute z-20 pointer-events-none blur-3xl rounded-full",
                                    style: {
                                        width: 300,
                                        height: 300,
                                        background: `radial-gradient(circle, ${n.primaryColor}33 0%, transparent 70%)`,
                                        x: a,
                                        y: s,
                                        translateX: "-50%",
                                        translateY: "-50%",
                                    },
                                }),
                                v.jsxs("div", {
                                    className:
                                        "relative z-30 mx-auto max-w-7xl py-6 px-6 h-full flex flex-col lg:flex-row lg:items-center lg:px-8 lg:gap-8 container ",
                                    children: [v.jsx(Iw, {}), v.jsx($w, {})],
                                }),
                            ],
                        }),
                    }),
                }),
            })
        );
    };
function eC({ project: n, index: a, isHovered: s, setHoveredProject: r }) {
    const { themeColors: u } = Kt((V) => V.themeReducer),
        f = o6(),
        [d, m] = _.useState(!1),
        h = a % 2 === 0,
        y = {
            hidden: { opacity: 0, y: 50 },
            visible: (V) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: V * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                },
            }),
        },
        p = {
            hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
            visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            },
        },
        b = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
        S = (V) => {
            (r(V),
                f.start({
                    scale: [1, 1.05, 1],
                    transition: { duration: 0.5 },
                }));
        },
        j = (V) => {
            (V.preventDefault(), V.stopPropagation(), m(!0));
        },
        M = (V) => {
            (V.preventDefault(), V.stopPropagation(), m(!1));
        },
        H = (V) => {
            (V && window.open(V, "_blank", "noopener,noreferrer"), m(!1));
        };
    return v.jsxs(v.Fragment, {
        children: [
            v.jsxs(Q.div, {
                className:
                    "flex flex-col sm:flex-row gap-8 items-center relative cursor-pointer",
                custom: a,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-100px" },
                variants: y,
                onMouseEnter: () => S(a),
                onMouseLeave: () => r(null),
                onClick: j,
                children: [
                    v.jsx("div", {
                        className: `h-0.5 hidden sm:block absolute top-[31%] ${h ? "left-1/2 right-1/4" : "left-1/4 right-1/2"}`,
                        style: { backgroundColor: n.projectColor },
                    }),
                    v.jsx(Q.div, {
                        className:
                            "w-4 h-4 rounded-full border-3 absolute top-[29%] left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center",
                        style: {
                            borderColor: n.projectColor,
                            backgroundColor: u.bg,
                        },
                        animate: {
                            scale: s ? 1.3 : 1,
                            boxShadow: s
                                ? `0 0 0 8px ${n.projectColor}30`
                                : "none",
                        },
                        transition: { type: "spring", stiffness: 500 },
                        children:
                            s &&
                            v.jsx(Q.div, {
                                className: "w-2 h-2 rounded-full",
                                style: { backgroundColor: n.projectColor },
                                initial: { scale: 0 },
                                animate: { scale: 1 },
                                transition: { delay: 0.2 },
                            }),
                    }),
                    v.jsx(Q.div, {
                        className: `flex w-full relative justify-center ${h ? "sm:justify-start" : "sm:order-2 sm:justify-end"}`,
                        whileHover: { scale: 1.02 },
                        animate: f,
                        children: v.jsxs("div", {
                            className: "relative group max-w-[500px] w-full",
                            children: [
                                v.jsx(Q.img, {
                                    className:
                                        "w-full rounded-lg shadow-xl border border-opacity-10",
                                    src: n.image,
                                    alt: n.title,
                                    loading: "lazy",
                                    style: {
                                        borderColor: u.border,
                                        transformOrigin: h
                                            ? "left center"
                                            : "right center",
                                    },
                                    whileHover: { scale: 1.03 },
                                }),
                                v.jsx(Q.div, {
                                    className:
                                        "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    style: {
                                        backgroundColor: `${n.projectColor}30`,
                                    },
                                    initial: { opacity: 0 },
                                    whileHover: { opacity: 1 },
                                    children: v.jsxs(Q.span, {
                                        className:
                                            "text-white bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm flex items-center border border-white border-opacity-20",
                                        initial: { y: 10 },
                                        whileHover: { y: 0 },
                                        transition: { delay: 0.1 },
                                        children: [
                                            "View Project",
                                            v.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-4 w-4 ml-2",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: v.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                    clipRule: "evenodd",
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    v.jsxs(Q.div, {
                        className: `w-full ${h ? "" : "sm:order-1"}`,
                        style: { color: u.text },
                        animate: { x: s ? (h ? 10 : -10) : 0 },
                        transition: { type: "spring", stiffness: 300 },
                        children: [
                            v.jsx(Q.div, {
                                children: v.jsxs(Q.h3, {
                                    className:
                                        "font-bold text-3xl md:text-4xl mb-1 cursor-pointer inline-block relative",
                                    style: { color: n.projectColor },
                                    animate: {
                                        textShadow: s
                                            ? `0 0 8px ${n.projectColor}40`
                                            : "none",
                                    },
                                    children: [
                                        n.title,
                                        v.jsx(Q.div, {
                                            className:
                                                "absolute left-0 rounded-full",
                                            style: {
                                                backgroundColor: n.projectColor,
                                            },
                                            initial: { width: 0 },
                                            animate: { width: "100%" },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2,
                                            },
                                        }),
                                    ],
                                }),
                            }),
                            v.jsx(Q.span, {
                                className: "text-lg md:text-xl opacity-80",
                                style: { color: n.projectColor },
                                children: n.subtitle,
                            }),
                            v.jsx(Q.p, {
                                className:
                                    "mt-3 text-base md:text-lg leading-relaxed",
                                style: { color: u.text },
                                animate: { opacity: s ? 1 : 0.9 },
                                children: n.description,
                            }),
                            v.jsx(Q.ul, {
                                className: "flex flex-wrap gap-2 mt-4",
                                animate: {
                                    transition: { staggerChildren: 0.05 },
                                },
                                children: n.tags.map((V, U) =>
                                    v.jsxs(
                                        Q.li,
                                        {
                                            className:
                                                "border rounded-full px-3 py-1 text-xs md:text-sm",
                                            style: {
                                                borderColor: u.border,
                                                color: u.text,
                                                backgroundColor: `${u.border}10`,
                                            },
                                            whileHover: {
                                                backgroundColor: `${n.projectColor}20`,
                                                borderColor: n.projectColor,
                                                scale: 1.05,
                                            },
                                            children: ["#", V],
                                        },
                                        U,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            v.jsx(Sn, {
                children:
                    d &&
                    v.jsxs(Q.div, {
                        className:
                            "fixed inset-0 z-50 flex items-center justify-center p-4",
                        variants: b,
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden",
                        onClick: M,
                        children: [
                            v.jsx(Q.div, {
                                className: `absolute inset-0 bg-[${n.projectColor}] bg-opacity-50`,
                                onClick: M,
                            }),
                            v.jsxs(Q.div, {
                                className:
                                    "relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-auto p-6 border",
                                style: {
                                    borderColor: u.border,
                                    backgroundColor: u.bg,
                                },
                                variants: p,
                                initial: "hidden",
                                animate: "visible",
                                exit: "hidden",
                                onClick: (V) => V.stopPropagation(),
                                children: [
                                    v.jsx("h3", {
                                        className: "text-2xl font-bold mb-2",
                                        style: { color: u.text },
                                        children: n.title,
                                    }),
                                    v.jsx("p", {
                                        className:
                                            "text-gray-600 dark:text-gray-300 mb-6",
                                        children:
                                            "Choose an option to explore:",
                                    }),
                                    v.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                            v.jsxs(Q.button, {
                                                className:
                                                    "w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group",
                                                style: {
                                                    borderColor: u.border,
                                                    backgroundColor: `${u.border}08`,
                                                },
                                                whileHover: {
                                                    scale: 1.02,
                                                    backgroundColor: `${n.projectColor}15`,
                                                    borderColor: n.projectColor,
                                                },
                                                whileTap: { scale: 0.98 },
                                                onClick: () =>
                                                    H(n.liveDemo || n.link),
                                                children: [
                                                    v.jsxs("div", {
                                                        className:
                                                            "flex items-center",
                                                        children: [
                                                            v.jsx("div", {
                                                                className:
                                                                    "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                                                                style: {
                                                                    backgroundColor: `${n.projectColor}20`,
                                                                },
                                                                children: v.jsx(
                                                                    "svg",
                                                                    {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className:
                                                                            "h-5 w-5",
                                                                        style: {
                                                                            color: n.projectColor,
                                                                        },
                                                                        viewBox:
                                                                            "0 0 20 20",
                                                                        fill: "currentColor",
                                                                        children:
                                                                            v.jsx(
                                                                                "path",
                                                                                {
                                                                                    fillRule:
                                                                                        "evenodd",
                                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                                                                                    clipRule:
                                                                                        "evenodd",
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            }),
                                                            v.jsxs("div", {
                                                                className:
                                                                    "text-left",
                                                                children: [
                                                                    v.jsx(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "font-semibold",
                                                                            style: {
                                                                                color: u.text,
                                                                            },
                                                                            children:
                                                                                "Live Demo",
                                                                        },
                                                                    ),
                                                                    v.jsx(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "text-sm opacity-70",
                                                                            style: {
                                                                                color: u.text,
                                                                            },
                                                                            children:
                                                                                "View deployed project",
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    v.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "h-5 w-5 opacity-50 group-hover:opacity-100",
                                                        style: {
                                                            color: n.projectColor,
                                                        },
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: v.jsx(
                                                            "path",
                                                            {
                                                                fillRule:
                                                                    "evenodd",
                                                                d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                                clipRule:
                                                                    "evenodd",
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            v.jsxs(Q.button, {
                                                className:
                                                    "w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 group",
                                                style: {
                                                    borderColor: u.border,
                                                    backgroundColor: `${u.border}08`,
                                                },
                                                whileHover: {
                                                    scale: 1.02,
                                                    backgroundColor: `${n.projectColor}15`,
                                                    borderColor: n.projectColor,
                                                },
                                                whileTap: { scale: 0.98 },
                                                onClick: () => H(n.githubRepo),
                                                children: [
                                                    v.jsxs("div", {
                                                        className:
                                                            "flex items-center",
                                                        children: [
                                                            v.jsx("div", {
                                                                className:
                                                                    "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                                                                style: {
                                                                    backgroundColor: `${n.projectColor}20`,
                                                                },
                                                                children: v.jsx(
                                                                    "svg",
                                                                    {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className:
                                                                            "h-5 w-5",
                                                                        style: {
                                                                            color: n.projectColor,
                                                                        },
                                                                        viewBox:
                                                                            "0 0 20 20",
                                                                        fill: "currentColor",
                                                                        children:
                                                                            v.jsx(
                                                                                "path",
                                                                                {
                                                                                    fillRule:
                                                                                        "evenodd",
                                                                                    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                                                                                    clipRule:
                                                                                        "evenodd",
                                                                                },
                                                                            ),
                                                                    },
                                                                ),
                                                            }),
                                                            v.jsxs("div", {
                                                                className:
                                                                    "text-left",
                                                                children: [
                                                                    v.jsxs(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "font-semibold",
                                                                            style: {
                                                                                color: u.text,
                                                                            },
                                                                            children:
                                                                                [
                                                                                    "GitHub ",
                                                                                    n.title ===
                                                                                    "My Portfolio" &&
                                                                                    "Private",
                                                                                    " ",
                                                                                    "Repo",
                                                                                ],
                                                                        },
                                                                    ),
                                                                    v.jsx(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "text-sm opacity-70",
                                                                            style: {
                                                                                color: u.text,
                                                                            },
                                                                            children:
                                                                                "View source code",
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    v.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "h-5 w-5 opacity-50 group-hover:opacity-100",
                                                        style: {
                                                            color: n.projectColor,
                                                        },
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: v.jsx(
                                                            "path",
                                                            {
                                                                fillRule:
                                                                    "evenodd",
                                                                d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                                clipRule:
                                                                    "evenodd",
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    v.jsx(Q.button, {
                                        className:
                                            "w-full mt-6 py-3 rounded-xl border font-medium transition-all duration-200",
                                        style: {
                                            borderColor: u.border,
                                            color: u.text,
                                            backgroundColor: `${u.border}10`,
                                        },
                                        whileHover: {
                                            backgroundColor: `${u.border}20`,
                                        },
                                        whileTap: { scale: 0.98 },
                                        onClick: M,
                                        children: "Cancel",
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
        ],
    });
}
const Py = [
    {
        title: "Upcoming MERN Stack Project",
        subtitle: " ",
        description:
            "I'm currently architecting a new, full-stack MERN application with a Next.js 16 frontend. This project will focus on scalable real-time features and advanced backend architecture. The initial code will be pushed to GitHub soon — stay tuned!",
        tags: ["Ongoing", "MERN Stack", "Next.js", "TypeScript"],
        image: "https://harsh-portfolio-zeta-ruby.vercel.app/comingSoon.webp",
        liveDemo: "#",
        githubRepo: "#",
        projectColor: "#9333ea",
    },
    {
        title: "Nxtvel - Digital Marketplace",
        subtitle: "Website, Apps, Scripts & Video Templates",
        description:
            "Nxtvel is a modern digital marketplace offering ready-to-use websites, mobile apps, scripts, and professional video templates. It helps businesses and creators launch faster with high-quality, customizable Temaples",
        tags: ["React", "Supabase", "Node.js", "Framer"],
        image: "https://harsh-portfolio-zeta-ruby.vercel.app/nxtvel-website.png",
        liveDemo: "https://www.nxtvel.com/",
        githubRepo: "https://www.nxtvel.com/about",
        projectColor: "#E34F26",
    },
    {
        title: "Modern Portfolio",
        subtitle: "Kunal - Full Stack Developer",
        description:
            "Designed and built a fully custom, animation-rich portfolio to leave a strong first impression with custom theme controls: light/dark toggle + ",
        tags: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Context API",
            "Email Js",
            "AI",
        ],
        image: "https://harsh-portfolio-zeta-ruby.vercel.app/harsh-kumar.png",
        liveDemo: "#",
        githubRepo: "#",
        projectColor: "#3776AB",
    },
    {
        title: "E-Commerce Site - Frontend",
        subtitle: "E-Commerce for Devs",
        description:
            "Built a blazing-fast eCommerce site from scratch—streamlined product discovery and checkout for a seamless user journey. Achieved 90+ Lighthouse scores .",
        tags: ["MERN Stack", "Redux", "Stripe", "Tailwind"],
        image: "https://harsh-portfolio-zeta-ruby.vercel.app/ecommerce.webp",
        liveDemo: "#",
        githubRepo: "#",
        projectColor: "#E34F26",
    },
],
    nC = () => {
        const { themeColors: n } = Kt((r) => r.themeReducer),
            [a, s] = _.useState(null);
        return v.jsxs("section", {
            id: "projects",
            className: "relative py-20 overflow-hidden",
            style: { backgroundColor: n.bg },
            children: [
                v.jsx("div", {
                    className:
                        "absolute inset-0 overflow-hidden pointer-events-none",
                    children: Py.map((r, u) =>
                        v.jsx(
                            Q.div,
                            {
                                className: "absolute rounded-full opacity-10",
                                style: {
                                    backgroundColor: r.projectColor,
                                    width: `${Math.random() * 300 + 100}px`,
                                    height: `${Math.random() * 300 + 100}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    filter: "blur(60px)",
                                },
                                animate: {
                                    x: [0, Math.random() * 100 - 50],
                                    y: [0, Math.random() * 100 - 50],
                                },
                                transition: {
                                    duration: Math.random() * 30 + 20,
                                    repeat: 1 / 0,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                },
                            },
                            u,
                        ),
                    ),
                }),
                v.jsxs("div", {
                    className: "max-w-screen-xl mx-auto px-4 relative z-10",
                    children: [
                        v.jsx(Q.div, {
                            className: "text-center mb-16",
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: { duration: 0.8 },
                            viewport: { once: !0, margin: "-50px" },
                            children: v.jsxs(Q.h2, {
                                className:
                                    "text-4xl md:text-5xl font-bold inline-block px-6 py-2 relative z-10",
                                style: {
                                    color: n.primaryColor,
                                    backgroundColor: n.bg,
                                },
                                whileHover: { scale: 1.02 },
                                children: [
                                    v.jsx("span", {
                                        className: "relative z-10",
                                        children: "Latest Works",
                                    }),
                                    v.jsx(Q.span, {
                                        className:
                                            "absolute bottom-0 left-0 right-0 h-1 mx-auto",
                                        style: {
                                            backgroundColor: n.primaryColor,
                                        },
                                        initial: { scaleX: 0 },
                                        whileInView: { scaleX: 1 },
                                        transition: {
                                            delay: 0.2,
                                            duration: 0.6,
                                        },
                                    }),
                                ],
                            }),
                        }),
                        v.jsx("div", {
                            className:
                                "w-0.5 hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2",
                            style: { backgroundColor: n.primaryColor },
                        }),
                        v.jsx("div", {
                            className: "space-y-24 sm:space-y-32",
                            children: Py.map((r, u) => {
                                const f = a === u;
                                return v.jsx(
                                    eC,
                                    {
                                        project: r,
                                        index: u,
                                        isHovered: f,
                                        setHoveredProject: s,
                                    },
                                    u,
                                );
                            }),
                        }),
                    ],
                }),
                v.jsxs(Q.div, {
                    className: "max-w-2xl mx-auto mt-20 px-6 relative group",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    viewport: { once: !0, margin: "-50px" },
                    children: [
                        v.jsx("div", {
                            className:
                                "absolute inset-0 rounded-xl pointer-events-none",
                            style: {
                                backgroundColor: n.cardBg,
                                border: `1px solid ${n.borderLight}`,
                                boxShadow: `0 4px 20px ${n.shadow}`,
                                opacity: 0.7,
                            },
                        }),
                        v.jsx("div", {
                            className: "relative z-10 p-6 md:p-8",
                            children: v.jsx("div", {
                                className: "flex items-start gap-4",
                                children: v.jsxs("div", {
                                    children: [
                                        v.jsxs(Q.p, {
                                            className:
                                                "text-lg md:text-xl leading-relaxed",
                                            style: { color: n.text },
                                            whileHover: {
                                                x: 4,
                                                transition: { duration: 0.3 },
                                            },
                                            children: [
                                                v.jsxs("span", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: n.primaryColor,
                                                    },
                                                    children: [
                                                        "Project Selection:",
                                                        " ",
                                                    ],
                                                }),
                                                "During my learning journey, I built several practice projects including",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: n.accentBlue,
                                                    },
                                                    children: "calculator",
                                                }),
                                                ",",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: n.accentBlue,
                                                    },
                                                    children: "watches",
                                                }),
                                                ",",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: n.accentBlue,
                                                    },
                                                    children: "website clones",
                                                }),
                                                ", and",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-medium",
                                                    style: {
                                                        color: n.accentBlue,
                                                    },
                                                    children: "many more",
                                                }),
                                                " ",
                                                "to sharpen my skills. The projects shown above represent my",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-semibold",
                                                    style: {
                                                        color: n.accentGreen,
                                                    },
                                                    children: "best work",
                                                }),
                                                " ",
                                                "— fully designed and developed from scratch, showcasing complete",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-semibold",
                                                    style: {
                                                        color: n.accentGold,
                                                    },
                                                    children: "UI/UX ownership",
                                                }),
                                                " ",
                                                "and",
                                                " ",
                                                v.jsx("span", {
                                                    className: "font-semibold",
                                                    style: {
                                                        color: n.accentGold,
                                                    },
                                                    children:
                                                        "project building logic",
                                                }),
                                                ".",
                                            ],
                                        }),
                                        v.jsxs(Q.div, {
                                            className:
                                                "mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 border-t",
                                            style: {
                                                borderColor: n.borderLight,
                                            },
                                            initial: { opacity: 0 },
                                            whileInView: { opacity: 1 },
                                            transition: { delay: 0.4 },
                                            children: [
                                                v.jsxs("div", {
                                                    className:
                                                        "flex items-center gap-2",
                                                    children: [
                                                        v.jsx("div", {
                                                            className:
                                                                "w-2 h-2 rounded-full animate-pulse",
                                                            style: {
                                                                backgroundColor:
                                                                    n.accentRed,
                                                            },
                                                        }),
                                                        v.jsx("span", {
                                                            className:
                                                                "text-xs uppercase tracking-wider",
                                                            style: {
                                                                color: n.summeryText,
                                                            },
                                                            children:
                                                                "Currently Mastering",
                                                        }),
                                                    ],
                                                }),
                                                v.jsx("div", {
                                                    className:
                                                        "px-3 py-1 rounded-full text-xs font-medium",
                                                    style: {
                                                        backgroundColor:
                                                            n.cardSecondary,
                                                        color: n.secondary,
                                                        border: `1px solid ${n.border}`,
                                                    },
                                                    children: "Next.js",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    iC = ({ icon: n, themeColors: a, theme: s }) =>
        v.jsxs(Q.div, {
            className:
                "flex flex-col items-center justify-center p-3 rounded-2xl group relative transition-all duration-300",
            whileHover: { scale: 1.1, y: -5 },
            children: [
                v.jsx("div", {
                    className:
                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none",
                    style: { backgroundColor: n.tooltipColor },
                }),
                v.jsx("div", {
                    className:
                        "w-12 h-12 mb-2 flex items-center justify-center relative",
                    children: v.jsx("img", {
                        src: n.src,
                        alt: n.name,
                        className:
                            "w-full h-full object-contain filter drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]",
                        style: {
                            filter:
                                s === "dark"
                                    ? `drop-shadow(0 0 2px ${n.tooltipColor}40)`
                                    : "none",
                        },
                    }),
                }),
                v.jsx("span", {
                    className:
                        "text-[10px] uppercase font-bold tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-center",
                    style: { color: s === "dark" ? "#fff" : a.text },
                    children: n.name,
                }),
                v.jsx(Sn, {
                    children: v.jsx(Q.div, {
                        className:
                            "absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50",
                        initial: { opacity: 0, scale: 0.8 },
                        whileHover: { opacity: 1, scale: 1 },
                        children: n.name,
                    }),
                }),
            ],
        }),
    aC = ({ category: n, index: a }) => {
        const { themeColors: s, theme: r } = Kt((u) => u.themeReducer);
        return v.jsxs(Q.div, {
            className:
                "relative p-8 rounded-[2.5rem] border backdrop-blur-3xl overflow-hidden group h-full flex flex-col",
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { delay: a * 0.1, duration: 0.8 },
            whileHover: { y: -10 },
            style: {
                backgroundColor:
                    r === "dark"
                        ? "rgba(20, 20, 30, 0.4)"
                        : "rgba(255, 255, 255, 0.4)",
                borderColor: `${s.border}30`,
                boxShadow: `0 20px 40px -20px rgba(0,0,0,${r === "dark" ? "0.5" : "0.1"})`,
            },
            children: [
                v.jsx("div", {
                    className:
                        "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none",
                    style: { backgroundColor: s.primaryColor },
                }),
                v.jsxs("div", {
                    className: "flex items-center gap-4 mb-8",
                    children: [
                        v.jsx("div", {
                            className: "w-1.5 h-10 rounded-full",
                            style: { backgroundColor: s.primaryColor },
                        }),
                        v.jsx("h3", {
                            className: "text-2xl font-black tracking-tight",
                            style: { color: r === "dark" ? "#fff" : "#000" },
                            children: n.title,
                        }),
                    ],
                }),
                v.jsx("div", {
                    className:
                        "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 flex-grow",
                    children: n.icons.map((u, f) =>
                        v.jsx(iC, { icon: u, themeColors: s, theme: r }, f),
                    ),
                }),
                v.jsx(Q.div, {
                    className:
                        "absolute bottom-0 left-0 h-1 transition-all duration-500",
                    initial: { width: 0 },
                    whileHover: { width: "100%" },
                    style: { backgroundColor: s.primaryColor },
                }),
            ],
        });
    },
    lC = () => {
        const { themeColors: n, theme: a } = Kt((r) => r.themeReducer),
            s = [
                {
                    id: "frontend",
                    title: "Frontend",
                    icons: [
                        {
                            name: "React",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                            tooltipColor: "#61DAFB",
                        },
                        {
                            name: "Next.js",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                            tooltipColor: "#ffffff",
                        },
                        {
                            name: "Redux",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                            tooltipColor: "#764ABC",
                        },
                        {
                            name: "Tailwind",
                            src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
                            tooltipColor: "#38B2AC",
                        },
                        {
                            name: "JS",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                            tooltipColor: "#F7DF1E",
                        },
                        {
                            name: "HTML5",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                            tooltipColor: "#E34F26",
                        },
                        {
                            name: "CSS3",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                            tooltipColor: "#1572B6",
                        },
                        {
                            name: "Framer",
                            src: "https://framerusercontent.com/images/MadJ73ykiBPmXMK5j0iTVYDPACI.png?scale-down-to=512&width=1024&height=1024",
                            tooltipColor: "#0055FF",
                        },
                    ],
                },
                {
                    id: "backend",
                    title: "Backend",
                    icons: [
                        {
                            name: "Node.js",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                            tooltipColor: "#339933",
                        },
                        {
                            name: "Express",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                            tooltipColor: "#828282",
                        },
                        {
                            name: "MongoDB",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                            tooltipColor: "#47A248",
                        },
                        {
                            name: "Firebase",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                            tooltipColor: "#FFCA28",
                        },
                        {
                            name: "Java",
                            src: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
                            tooltipColor: "#F24E1E",
                        },
                        {
                            name: "API",
                            src: "https://img.icons8.com/color/48/api-settings.png",
                            tooltipColor: "#009688",
                        },
                    ],
                },
                {
                    id: "design",
                    title: "Design",
                    icons: [
                        {
                            name: "Figma",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                            tooltipColor: "#F24E1E",
                        },
                        {
                            name: "PS",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
                            tooltipColor: "#31A8FF",
                        },
                        {
                            name: "AE",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
                            tooltipColor: "#9999FF",
                        },
                        {
                            name: "Canva",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
                            tooltipColor: "#00C4CC",
                        },
                    ],
                },
                {
                    id: "ai",
                    title: "AI & Tools",
                    icons: [
                        {
                            name: "N8N",
                            src: "https://meta-q.cdn.bubble.io/f1740327389123x713161792968389100/n8n%20plugin.png",
                            tooltipColor: "#FF6584",
                        },
                        {
                            name: "AI Agents",
                            src: "https://img.icons8.com/fluency/48/bot.png",
                            tooltipColor: "#10A37F",
                        },
                        {
                            name: "System Design",
                            src: "https://img.icons8.com/color/48/server.png",
                            tooltipColor: "#4285F4",
                        },
                        {
                            name: "Linux",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
                            tooltipColor: "#FCC624",
                        },
                        {
                            name: "Git/Github",
                            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                            tooltipColor: "#F05032",
                        },
                    ],
                },
            ];
        return v.jsxs("section", {
            className:
                "py-24 px-4 sm:px-8 relative overflow-hidden flex flex-col items-center min-h-screen",
            style: { backgroundColor: n.bg },
            id: "skills",
            children: [
                v.jsx("div", {
                    className:
                        "absolute inset-0 pointer-events-none opacity-20",
                    style: {
                        background: `radial-gradient(circle at 10% 10%, ${n.primaryColor}10 0%, transparent 40%), radial-gradient(circle at 90% 90%, ${n.secondary}10 0%, transparent 40%)`,
                    },
                }),
                v.jsx("div", {
                    className: "absolute inset-0 z-0 opacity-[0.03]",
                    children: v.jsx("div", {
                        className: "w-full h-full",
                        style: {
                            backgroundImage: `linear-gradient(${n.border} 1px, transparent 1px), linear-gradient(90deg, ${n.border} 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        },
                    }),
                }),
                v.jsx(Kr, {
                    title: "Tech Stack",
                    highlight: "Expertise",
                    subtitle:
                        "A professional toolkit optimized for performance and scalability",
                }),
                v.jsx("div", {
                    className:
                        "w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 z-10",
                    children: s.map((r, u) =>
                        v.jsx(aC, { category: r, index: u }, r.id),
                    ),
                }),
            ],
        });
    },
    sC = _.memo(lC),
    rC = () => {
        const { themeColors: n } = Kt((M) => M.themeReducer),
            [a, s] = _.useState(!1),
            [r, u] = _.useState(null),
            [f, d] = _.useState(!1),
            [m, h] = _.useState(null),
            y = [
                { icon: tw, name: "Twitter", color: "#1DA1F2", url: "" },
                {
                    icon: W6,
                    name: "Instagram",
                    color: "#E4405F",
                    url: "https://www.instagram.com/nxtvel/",
                },
                { icon: J6, name: "GitHub", color: "#181717", url: "#" },
                {
                    icon: I6,
                    name: "LinkedIn",
                    color: "#0A66C2",
                    url: "https://www.linkedin.com/in/harsh937",
                },
                {
                    icon: q1,
                    name: "WhatsApp",
                    color: "#25D366",
                    url: "https://wa.me/",
                },
            ],
            p = () => {
                (s((M) => !M), u(null));
            },
            b = (M) => {
                M.url ? (window.open(M.url, "_blank"), s(!1)) : (h(M), d(!0));
            },
            S = () => {
                (d(!1), h(null));
            };
        _.useEffect(
            () => (
                a || f
                    ? (document.body.style.overflow = "hidden")
                    : (document.body.style.overflow = "auto"),
                () => {
                    document.body.style.overflow = "auto";
                }
            ),
            [a, f],
        );
        const j = y.filter((M) => M.url);
        return v.jsxs(v.Fragment, {
            children: [
                v.jsx(Sn, {
                    children:
                        a &&
                        v.jsx(Q.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 0.3 },
                            exit: { opacity: 0 },
                            className: "fixed inset-0 bg-black z-40",
                            onClick: p,
                        }),
                }),
                v.jsx(Sn, {
                    children:
                        f &&
                        v.jsxs(v.Fragment, {
                            children: [
                                v.jsx(Q.div, {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 0.5 },
                                    exit: { opacity: 0 },
                                    className: "fixed inset-0 bg-black z-50",
                                    onClick: S,
                                }),
                                v.jsx(Q.div, {
                                    initial: { opacity: 0, scale: 0.8 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.8 },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    },
                                    className:
                                        "fixed inset-0 flex items-center justify-center z-50 p-4",
                                    children: v.jsxs("div", {
                                        className:
                                            "relative max-w-md w-full rounded-xl p-6 shadow-2xl",
                                        style: {
                                            backgroundColor: n.cardBg,
                                            border: `1px solid ${n.border}`,
                                        },
                                        children: [
                                            v.jsx("button", {
                                                onClick: S,
                                                className:
                                                    "absolute top-4 right-4 p-1 rounded-full",
                                                style: { color: n.text },
                                                children: v.jsx(zr, {
                                                    size: 20,
                                                }),
                                            }),
                                            v.jsxs("div", {
                                                className: "text-center",
                                                children: [
                                                    v.jsx("div", {
                                                        className:
                                                            "mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4",
                                                        style: {
                                                            backgroundColor:
                                                                m == null
                                                                    ? void 0
                                                                    : m.color,
                                                        },
                                                        children: v.jsx(
                                                            m.icon,
                                                            {
                                                                size: 28,
                                                                className:
                                                                    "text-white",
                                                            },
                                                        ),
                                                    }),
                                                    v.jsx("h3", {
                                                        className:
                                                            "text-xl font-bold mb-2",
                                                        style: {
                                                            color: n.primaryColor,
                                                        },
                                                        children:
                                                            "Thank you for your interest!",
                                                    }),
                                                    v.jsxs("p", {
                                                        className: "mb-4",
                                                        style: {
                                                            color: n.text,
                                                        },
                                                        children: [
                                                            "I'm not active on ",
                                                            m == null
                                                                ? void 0
                                                                : m.name,
                                                            ", but you can connect with me on:",
                                                        ],
                                                    }),
                                                    v.jsx("div", {
                                                        className:
                                                            "flex flex-wrap justify-center gap-3 mt-5",
                                                        children: j.map((M) =>
                                                            v.jsx(
                                                                Q.button,
                                                                {
                                                                    className:
                                                                        "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
                                                                    style: {
                                                                        backgroundColor:
                                                                            M.color,
                                                                        border: `2px solid ${n.border}`,
                                                                    },
                                                                    whileHover:
                                                                    {
                                                                        scale: 1.1,
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.95,
                                                                    },
                                                                    onClick:
                                                                        () => {
                                                                            (window.open(
                                                                                M.url,
                                                                                "_blank",
                                                                            ),
                                                                                S());
                                                                        },
                                                                    "aria-label":
                                                                        M.name,
                                                                    children:
                                                                        v.jsx(
                                                                            M.icon,
                                                                            {
                                                                                size: 20,
                                                                                className:
                                                                                    "text-white",
                                                                            },
                                                                        ),
                                                                },
                                                                M.name,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                }),
                v.jsxs("div", {
                    className: "fixed bottom-7 right-6 z-50",
                    children: [
                        v.jsx(Sn, {
                            children:
                                a &&
                                v.jsx(Q.div, {
                                    initial: { opacity: 0, y: 10 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: 10 },
                                    className:
                                        "absolute bottom-full right-0 mb-4 flex flex-col items-end space-y-2",
                                    children: y.map((M, H) =>
                                        v.jsxs(
                                            Q.div,
                                            {
                                                initial: { opacity: 0, x: 20 },
                                                animate: { opacity: 1, x: 0 },
                                                exit: { opacity: 0, x: 20 },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20,
                                                    delay: H * 0.05,
                                                },
                                                className: "relative",
                                                onMouseEnter: () => u(M.name),
                                                onMouseLeave: () => u(null),
                                                children: [
                                                    v.jsx(Q.button, {
                                                        className:
                                                            "w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white",
                                                        style: {
                                                            backgroundColor:
                                                                M.color,
                                                            border: `2px solid ${n.border}`,
                                                        },
                                                        whileHover: {
                                                            scale: 1.1,
                                                        },
                                                        whileTap: {
                                                            scale: 0.95,
                                                        },
                                                        onClick: () => b(M),
                                                        "aria-label": M.name,
                                                        children: v.jsx(
                                                            M.icon,
                                                            { size: 28 },
                                                        ),
                                                    }),
                                                    r === M.name &&
                                                    v.jsxs(Q.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            x: 5,
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            x: 0,
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            x: 5,
                                                        },
                                                        className:
                                                            "absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap",
                                                        style: {
                                                            backgroundColor:
                                                                M.color,
                                                            color:
                                                                M.name ===
                                                                    "Snapchat"
                                                                    ? "#000"
                                                                    : "#fff",
                                                        },
                                                        children: [
                                                            M.name,
                                                            v.jsx("div", {
                                                                className:
                                                                    "absolute left-full top-1/2 w-2 h-2 transform -translate-y-1/2 rotate-45",
                                                                style: {
                                                                    backgroundColor:
                                                                        M.color,
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            M.name,
                                        ),
                                    ),
                                }),
                        }),
                        v.jsxs("div", {
                            className: "relative z-50 group",
                            children: [
                                v.jsx(Sn, {
                                    children:
                                        !a &&
                                        r === "connect" &&
                                        v.jsx(Q.div, {
                                            initial: { opacity: 0, x: 20 },
                                            animate: { opacity: 1, x: 0 },
                                            exit: { opacity: 0, x: 20 },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 18,
                                            },
                                            className:
                                                "absolute right-full top-1/2 transform -translate-y-1/2 mr-4 max-w-[180px]",
                                            children: v.jsxs("div", {
                                                className:
                                                    "relative px-4 py-2 rounded-2xl text-sm font-medium shadow-md",
                                                style: {
                                                    backgroundColor: n.cardBg,
                                                    color: n.primaryColor,
                                                    border: `1px solid ${n.borderLight}`,
                                                    boxShadow: `0 4px 12px ${n.shadow}`,
                                                },
                                                children: [
                                                    "Let's connect!",
                                                    v.jsx("div", {
                                                        className:
                                                            "absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45",
                                                        style: {
                                                            backgroundColor:
                                                                n.cardBg,
                                                            borderBottom: `1px solid ${n.borderLight}`,
                                                            borderRight: `1px solid ${n.borderLight}`,
                                                        },
                                                    }),
                                                ],
                                            }),
                                        }),
                                }),
                                v.jsx(Q.button, {
                                    className:
                                        "w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer",
                                    style: {
                                        backgroundColor: a
                                            ? n.cardSecondary
                                            : n.primaryColor,
                                        color: n.text,
                                        transition: "all 0.3s ease-in-out",
                                    },
                                    onClick: p,
                                    onMouseEnter: () => u("connect"),
                                    onMouseLeave: () => u(null),
                                    whileHover: { scale: 1.1 },
                                    whileTap: { scale: 0.95 },
                                    "aria-label": a
                                        ? "Close connect menu"
                                        : "Open connect menu",
                                    children: v.jsx(Q.div, {
                                        animate: { rotate: a ? 180 : 0 },
                                        transition: { duration: 0.3 },
                                        children: a
                                            ? v.jsx(zr, { size: 22 })
                                            : v.jsx(iw, {
                                                className: "fill-white",
                                                size: 22,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    oC = _.memo(Qw),
    uC = _.memo(tC),
    cC = _.memo(T6),
    fC = _.memo(sC),
    dC = _.memo(nC),
    hC = _.memo(H6),
    mC = _.memo(L6),
    pC = _.memo(lw),
    yC = _.memo(rC);
function gC() {
    return v.jsxs(v.Fragment, {
        children: [
            v.jsx(oC, {}),
            v.jsx(uC, {}),
            v.jsx(cC, {}),
            v.jsx(fC, {}),
            v.jsx(dC, {}),
            v.jsx(hC, {}),
            v.jsx(mC, {}),
            v.jsx(pC, {}),
            v.jsx(yC, {}),
        ],
    });
}
const vC = Nw({ reducer: { themeReducer: Pw }, devTools: !1 });
zb.createRoot(document.getElementById("root")).render(
    v.jsx(_.StrictMode, {
        children: v.jsx(Zb, { store: vC, children: v.jsx(gC, {}) }),
    }),
);
