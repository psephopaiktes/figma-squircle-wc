import { css as j, LitElement as D, html as R } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b = globalThis, M = b.ShadowRoot && (b.ShadyCSS === void 0 || b.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, x = Symbol(), v = /* @__PURE__ */ new WeakMap();
let N = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== x) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (M && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = v.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && v.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const k = (n) => new N(typeof n == "string" ? n : n + "", void 0, x), F = (n, t) => {
  if (M) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = b.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  }
}, L = M ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return k(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: I, defineProperty: J, getOwnPropertyDescriptor: K, getOwnPropertyNames: V, getOwnPropertySymbols: W, getPrototypeOf: G } = Object, m = globalThis, B = m.trustedTypes, H = B ? B.emptyScript : "", U = m.reactiveElementPolyfillSupport, E = (n, t) => n, w = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? H : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, O = (n, t) => !I(n, t), C = { attribute: !0, type: String, converter: w, reflect: !1, hasChanged: O };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class y extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = C) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && J(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = K(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const h = i == null ? void 0 : i.call(this);
      o.call(this, r), this.requestUpdate(t, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? C;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = G(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, s = [...V(e), ...W(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(L(i));
    } else t !== void 0 && e.push(L(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return F(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : w).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), h = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : w;
      this._$Em = i, this[i] = h.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? O)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, r] of i) r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[E("elementProperties")] = /* @__PURE__ */ new Map(), y[E("finalized")] = /* @__PURE__ */ new Map(), U == null || U({ ReactiveElement: y }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = { attribute: !0, type: String, converter: w, reflect: !1, hasChanged: O }, Q = (n = Z, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), o.set(e.name, n), s === "accessor") {
    const { name: r } = e;
    return { set(h) {
      const a = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(r, a, n);
    }, init(h) {
      return h !== void 0 && this.P(r, void 0, n), h;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(h) {
      const a = this[r];
      t.call(this, h), this.requestUpdate(r, a, n);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function X(n) {
  return (t, e) => typeof e == "object" ? Q(n, t, e) : ((s, i, o) => {
    const r = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, r ? { ...s, wrapped: !0 } : s), r ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(n, t, e);
}
function Y({
  topLeftCornerRadius: n,
  topRightCornerRadius: t,
  bottomRightCornerRadius: e,
  bottomLeftCornerRadius: s,
  width: i,
  height: o
}) {
  const r = {
    topLeft: -1,
    topRight: -1,
    bottomLeft: -1,
    bottomRight: -1
  }, h = {
    topLeft: n,
    topRight: t,
    bottomLeft: s,
    bottomRight: e
  };
  return Object.entries(h).sort(([, a], [, c]) => c - a).forEach(([a, c]) => {
    const d = a, f = tt[d], l = Math.min(
      ...f.map((u) => {
        const p = h[u.corner];
        if (c === 0 && p === 0)
          return 0;
        const $ = r[u.corner], _ = u.side === "top" || u.side === "bottom" ? i : o;
        return $ >= 0 ? _ - r[u.corner] : c / (c + p) * _;
      })
    );
    r[d] = l, h[d] = Math.min(c, l);
  }), {
    topLeft: {
      radius: h.topLeft,
      roundingAndSmoothingBudget: r.topLeft
    },
    topRight: {
      radius: h.topRight,
      roundingAndSmoothingBudget: r.topRight
    },
    bottomLeft: {
      radius: h.bottomLeft,
      roundingAndSmoothingBudget: r.bottomLeft
    },
    bottomRight: {
      radius: h.bottomRight,
      roundingAndSmoothingBudget: r.bottomRight
    }
  };
}
var tt = {
  topLeft: [
    {
      corner: "topRight",
      side: "top"
    },
    {
      corner: "bottomLeft",
      side: "left"
    }
  ],
  topRight: [
    {
      corner: "topLeft",
      side: "top"
    },
    {
      corner: "bottomRight",
      side: "right"
    }
  ],
  bottomLeft: [
    {
      corner: "bottomRight",
      side: "bottom"
    },
    {
      corner: "topLeft",
      side: "left"
    }
  ],
  bottomRight: [
    {
      corner: "bottomLeft",
      side: "bottom"
    },
    {
      corner: "topRight",
      side: "right"
    }
  ]
};
function P({
  cornerRadius: n,
  cornerSmoothing: t,
  preserveSmoothing: e,
  roundingAndSmoothingBudget: s
}) {
  let i = (1 + t) * n;
  if (!e) {
    const p = s / n - 1;
    t = Math.min(t, p), i = Math.min(i, s);
  }
  const o = 90 * (1 - t), r = Math.sin(S(o / 2)) * n * Math.sqrt(2), h = (90 - o) / 2, a = n * Math.tan(S(h / 2)), c = 45 * t, d = a * Math.cos(S(c)), f = d * Math.tan(S(c));
  let l = (i - r - d - f) / 3, u = 2 * l;
  if (e && i > s) {
    const p = s - f - r - d, $ = p / 6, _ = p - $;
    l = Math.min(l, _), u = p - l, i = Math.min(i, s);
  }
  return {
    a: u,
    b: l,
    c: d,
    d: f,
    p: i,
    arcSectionLength: r,
    cornerRadius: n
  };
}
function T({
  width: n,
  height: t,
  topLeftPathParams: e,
  topRightPathParams: s,
  bottomLeftPathParams: i,
  bottomRightPathParams: o
}) {
  return `
    M ${n - s.p} 0
    ${et(s)}
    L ${n} ${t - o.p}
    ${st(o)}
    L ${i.p} ${t}
    ${it(i)}
    L 0 ${e.p}
    ${nt(e)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim();
}
function et({
  cornerRadius: n,
  a: t,
  b: e,
  c: s,
  d: i,
  p: o,
  arcSectionLength: r
}) {
  return n ? g`
    c ${t} 0 ${t + e} 0 ${t + e + s} ${i}
    a ${n} ${n} 0 0 1 ${r} ${r}
    c ${i} ${s}
        ${i} ${e + s}
        ${i} ${t + e + s}` : g`l ${o} 0`;
}
function st({
  cornerRadius: n,
  a: t,
  b: e,
  c: s,
  d: i,
  p: o,
  arcSectionLength: r
}) {
  return n ? g`
    c 0 ${t}
      0 ${t + e}
      ${-i} ${t + e + s}
    a ${n} ${n} 0 0 1 -${r} ${r}
    c ${-s} ${i}
      ${-(e + s)} ${i}
      ${-(t + e + s)} ${i}` : g`l 0 ${o}`;
}
function it({
  cornerRadius: n,
  a: t,
  b: e,
  c: s,
  d: i,
  p: o,
  arcSectionLength: r
}) {
  return n ? g`
    c ${-t} 0
      ${-(t + e)} 0
      ${-(t + e + s)} ${-i}
    a ${n} ${n} 0 0 1 -${r} -${r}
    c ${-i} ${-s}
      ${-i} ${-(e + s)}
      ${-i} ${-(t + e + s)}` : g`l ${-o} 0`;
}
function nt({
  cornerRadius: n,
  a: t,
  b: e,
  c: s,
  d: i,
  p: o,
  arcSectionLength: r
}) {
  return n ? g`
    c 0 ${-t}
      0 ${-(t + e)}
      ${i} ${-(t + e + s)}
    a ${n} ${n} 0 0 1 ${r} -${r}
    c ${s} ${-i}
      ${e + s} ${-i}
      ${t + e + s} ${-i}` : g`l 0 ${-o}`;
}
function S(n) {
  return n * Math.PI / 180;
}
function g(n, ...t) {
  return n.reduce((e, s, i) => {
    const o = t[i];
    return typeof o == "number" ? e + s + o.toFixed(4) : e + s + (o ?? "");
  }, "");
}
function rt({
  cornerRadius: n = 0,
  topLeftCornerRadius: t,
  topRightCornerRadius: e,
  bottomRightCornerRadius: s,
  bottomLeftCornerRadius: i,
  cornerSmoothing: o,
  width: r,
  height: h,
  preserveSmoothing: a = !1
}) {
  if (t = t ?? n, e = e ?? n, i = i ?? n, s = s ?? n, t === e && e === s && s === i && i === t) {
    const u = Math.min(r, h) / 2, p = Math.min(
      t,
      u
    ), $ = P({
      cornerRadius: p,
      cornerSmoothing: o,
      preserveSmoothing: a,
      roundingAndSmoothingBudget: u
    });
    return T({
      width: r,
      height: h,
      topLeftPathParams: $,
      topRightPathParams: $,
      bottomLeftPathParams: $,
      bottomRightPathParams: $
    });
  }
  const { topLeft: c, topRight: d, bottomLeft: f, bottomRight: l } = Y(
    {
      topLeftCornerRadius: t,
      topRightCornerRadius: e,
      bottomRightCornerRadius: s,
      bottomLeftCornerRadius: i,
      width: r,
      height: h
    }
  );
  return T({
    width: r,
    height: h,
    topLeftPathParams: P({
      cornerSmoothing: o,
      preserveSmoothing: a,
      cornerRadius: c.radius,
      roundingAndSmoothingBudget: c.roundingAndSmoothingBudget
    }),
    topRightPathParams: P({
      cornerSmoothing: o,
      preserveSmoothing: a,
      cornerRadius: d.radius,
      roundingAndSmoothingBudget: d.roundingAndSmoothingBudget
    }),
    bottomRightPathParams: P({
      cornerSmoothing: o,
      preserveSmoothing: a,
      cornerRadius: l.radius,
      roundingAndSmoothingBudget: l.roundingAndSmoothingBudget
    }),
    bottomLeftPathParams: P({
      cornerSmoothing: o,
      preserveSmoothing: a,
      cornerRadius: f.radius,
      roundingAndSmoothingBudget: f.roundingAndSmoothingBudget
    })
  });
}
var ot = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, z = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? ht(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = (s ? r(t, e, i) : r(i)) || i);
  return s && i && ot(t, e, i), i;
};
let A = class extends D {
  constructor() {
    super(...arguments), this.width = 400, this.height = 300, this.radius = 100, this.smoothing = 1;
  }
  render() {
    const n = rt({
      width: this.width,
      height: this.height,
      cornerRadius: this.radius,
      cornerSmoothing: this.smoothing
    });
    return R`
		<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}"><path fill="#f00" d="${n}" /></svg>`;
  }
};
A.styles = j`
		svg {
			display: block;
			margin-top: 8px;
		}
	`;
z([
  X({ type: Number })
], A.prototype, "width", 2);
A = z([
  q("figma-squircle")
], A);
