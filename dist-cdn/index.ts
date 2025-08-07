/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, F = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = Symbol(), G = /* @__PURE__ */ new WeakMap();
let at = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Z) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (F && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = G.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && G.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pt = (i) => new at(typeof i == "string" ? i : i + "", void 0, Z), ft = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, o) => s + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[o + 1], i[0]);
  return new at(e, i, Z);
}, _t = (i, t) => {
  if (F) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), n = R.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  }
}, Q = F ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return pt(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: gt, defineProperty: mt, getOwnPropertyDescriptor: At, getOwnPropertyNames: yt, getOwnPropertySymbols: bt, getPrototypeOf: Et } = Object, m = globalThis, X = m.trustedTypes, Pt = X ? X.emptyScript : "", I = m.reactiveElementPolyfillSupport, v = (i, t) => i, D = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Pt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, J = (i, t) => !gt(i, t), Y = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: J };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class P extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Y) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && mt(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: n, set: o } = At(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return n == null ? void 0 : n.call(this);
    }, set(r) {
      const a = n == null ? void 0 : n.call(this);
      o.call(this, r), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(v("elementProperties"))) return;
    const t = Et(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(v("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(v("properties"))) {
      const e = this.properties, s = [...yt(e), ...bt(e)];
      for (const n of s) this.createProperty(n, e[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, n] of e) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const n = this._$Eu(e, s);
      n !== void 0 && this._$Eh.set(n, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s) e.unshift(Q(n));
    } else t !== void 0 && e.push(Q(t));
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
    return _t(t, this.constructor.elementStyles), t;
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
    const s = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, s);
    if (n !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : D).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, n = s._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : D;
      this._$Em = n, this[n] = a.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? J)(this[t], e)) return;
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
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [o, r] of n) r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((n) => {
        var o;
        return (o = n.hostUpdate) == null ? void 0 : o.call(n);
      }), this.update(e)) : this._$EU();
    } catch (n) {
      throw t = !1, this._$EU(), n;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var n;
      return (n = s.hostUpdated) == null ? void 0 : n.call(s);
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
P.elementStyles = [], P.shadowRootOptions = { mode: "open" }, P[v("elementProperties")] = /* @__PURE__ */ new Map(), P[v("finalized")] = /* @__PURE__ */ new Map(), I == null || I({ ReactiveElement: P }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis, k = U.trustedTypes, tt = k ? k.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, lt = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + g, St = `<${dt}>`, E = document, O = () => E.createComment(""), T = (i) => i === null || typeof i != "object" && typeof i != "function", K = Array.isArray, wt = (i) => K(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", V = `[ 	
\f\r]`, x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, et = /-->/g, st = />/g, y = RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, it = /"/g, ct = /^(?:script|style|textarea|title)$/i, xt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), Mt = xt(1), S = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), b = E.createTreeWalker(E, 129);
function ut(i, t) {
  if (!K(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return tt !== void 0 ? tt.createHTML(t) : t;
}
const vt = (i, t) => {
  const e = i.length - 1, s = [];
  let n, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", r = x;
  for (let a = 0; a < e; a++) {
    const h = i[a];
    let d, c, l = -1, u = 0;
    for (; u < h.length && (r.lastIndex = u, c = r.exec(h), c !== null); ) u = r.lastIndex, r === x ? c[1] === "!--" ? r = et : c[1] !== void 0 ? r = st : c[2] !== void 0 ? (ct.test(c[2]) && (n = RegExp("</" + c[2], "g")), r = y) : c[3] !== void 0 && (r = y) : r === y ? c[0] === ">" ? (r = n ?? x, l = -1) : c[1] === void 0 ? l = -2 : (l = r.lastIndex - c[2].length, d = c[1], r = c[3] === void 0 ? y : c[3] === '"' ? it : nt) : r === it || r === nt ? r = y : r === et || r === st ? r = x : (r = y, n = void 0);
    const $ = r === y && i[a + 1].startsWith("/>") ? " " : "";
    o += r === x ? h + St : l >= 0 ? (s.push(d), h.slice(0, l) + lt + h.slice(l) + g + $) : h + g + (l === -2 ? a : $);
  }
  return [ut(i, o + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class H {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, h = this.parts, [d, c] = vt(t, e);
    if (this.el = H.createElement(d, s), b.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (n = b.nextNode()) !== null && h.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const l of n.getAttributeNames()) if (l.endsWith(lt)) {
          const u = c[r++], $ = n.getAttribute(l).split(g), f = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: o, name: f[2], strings: $, ctor: f[1] === "." ? Ct : f[1] === "?" ? Ot : f[1] === "@" ? Tt : j }), n.removeAttribute(l);
        } else l.startsWith(g) && (h.push({ type: 6, index: o }), n.removeAttribute(l));
        if (ct.test(n.tagName)) {
          const l = n.textContent.split(g), u = l.length - 1;
          if (u > 0) {
            n.textContent = k ? k.emptyScript : "";
            for (let $ = 0; $ < u; $++) n.append(l[$], O()), b.nextNode(), h.push({ type: 2, index: ++o });
            n.append(l[u], O());
          }
        }
      } else if (n.nodeType === 8) if (n.data === dt) h.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = n.data.indexOf(g, l + 1)) !== -1; ) h.push({ type: 7, index: o }), l += g.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = E.createElement("template");
    return s.innerHTML = t, s;
  }
}
function w(i, t, e = i, s) {
  var r, a;
  if (t === S) return t;
  let n = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = T(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== o && ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1), o === void 0 ? n = void 0 : (n = new o(i), n._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = n : e._$Cl = n), n !== void 0 && (t = w(i, n._$AS(i, t.values), n, s)), t;
}
class Ut {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, n = ((t == null ? void 0 : t.creationScope) ?? E).importNode(e, !0);
    b.currentNode = n;
    let o = b.nextNode(), r = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let d;
        h.type === 2 ? d = new N(o, o.nextSibling, this, t) : h.type === 1 ? d = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (d = new Ht(o, this, t)), this._$AV.push(d), h = s[++a];
      }
      r !== (h == null ? void 0 : h.index) && (o = b.nextNode(), r++);
    }
    return b.currentNode = E, n;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class N {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, n) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = w(this, t, e), T(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== S && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : wt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(E.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = H.createElement(ut(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === n) this._$AH.p(e);
    else {
      const r = new Ut(n, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    K(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const o of t) n === e.length ? e.push(s = new N(this.O(O()), this.O(O()), this, this.options)) : s = e[n], s._$AI(o), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, n, o) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, n) {
    const o = this.strings;
    let r = !1;
    if (o === void 0) t = w(this, t, e, 0), r = !T(t) || t !== this._$AH && t !== S, r && (this._$AH = t);
    else {
      const a = t;
      let h, d;
      for (t = o[0], h = 0; h < o.length - 1; h++) d = w(this, a[s + h], e, h), d === S && (d = this._$AH[h]), r || (r = !T(d) || d !== this._$AH[h]), d === p ? t = p : t !== p && (t += (d ?? "") + o[h + 1]), this._$AH[h] = d;
    }
    r && !n && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Ot extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Tt extends j {
  constructor(t, e, s, n, o) {
    super(t, e, s, n, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? p) === S) return;
    const s = this._$AH, n = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== p && (s === p || n);
    n && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const q = U.litHtmlPolyfillSupport;
q == null || q(H, N), (U.litHtmlVersions ?? (U.litHtmlVersions = [])).push("3.2.1");
const Nt = (i, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let n = s._$litPart$;
  if (n === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = n = new N(t.insertBefore(O(), o), o, void 0, e ?? {});
  }
  return n._$AI(i), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let C = class extends P {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Nt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return S;
  }
};
var ht;
C._$litElement$ = !0, C.finalized = !0, (ht = globalThis.litElementHydrateSupport) == null || ht.call(globalThis, { LitElement: C });
const W = globalThis.litElementPolyfillSupport;
W == null || W({ LitElement: C });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bt = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: J }, Rt = (i = Lt, t, e) => {
  const { kind: s, metadata: n } = e;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), o.set(e.name, i), s === "accessor") {
    const { name: r } = e;
    return { set(a) {
      const h = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(r, h, i);
    }, init(a) {
      return a !== void 0 && this.P(r, void 0, i), a;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(a) {
      const h = this[r];
      t.call(this, a), this.requestUpdate(r, h, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Dt(i) {
  return (t, e) => typeof e == "object" ? Rt(i, t, e) : ((s, n, o) => {
    const r = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, r ? { ...s, wrapped: !0 } : s), r ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(i, t, e);
}
function kt({
  topLeftCornerRadius: i,
  topRightCornerRadius: t,
  bottomRightCornerRadius: e,
  bottomLeftCornerRadius: s,
  width: n,
  height: o
}) {
  const r = {
    topLeft: -1,
    topRight: -1,
    bottomLeft: -1,
    bottomRight: -1
  }, a = {
    topLeft: i,
    topRight: t,
    bottomLeft: s,
    bottomRight: e
  };
  return Object.entries(a).sort(([, h], [, d]) => d - h).forEach(([h, d]) => {
    const c = h, l = zt[c], u = Math.min(
      ...l.map(($) => {
        const f = a[$.corner];
        if (d === 0 && f === 0)
          return 0;
        const _ = r[$.corner], B = $.side === "top" || $.side === "bottom" ? n : o;
        return _ >= 0 ? B - r[$.corner] : d / (d + f) * B;
      })
    );
    r[c] = u, a[c] = Math.min(d, u);
  }), {
    topLeft: {
      radius: a.topLeft,
      roundingAndSmoothingBudget: r.topLeft
    },
    topRight: {
      radius: a.topRight,
      roundingAndSmoothingBudget: r.topRight
    },
    bottomLeft: {
      radius: a.bottomLeft,
      roundingAndSmoothingBudget: r.bottomLeft
    },
    bottomRight: {
      radius: a.bottomRight,
      roundingAndSmoothingBudget: r.bottomRight
    }
  };
}
var zt = {
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
function M({
  cornerRadius: i,
  cornerSmoothing: t,
  preserveSmoothing: e,
  roundingAndSmoothingBudget: s
}) {
  let n = (1 + t) * i;
  if (!e) {
    const f = s / i - 1;
    t = Math.min(t, f), n = Math.min(n, s);
  }
  const o = 90 * (1 - t), r = Math.sin(L(o / 2)) * i * Math.sqrt(2), a = (90 - o) / 2, h = i * Math.tan(L(a / 2)), d = 45 * t, c = h * Math.cos(L(d)), l = c * Math.tan(L(d));
  let u = (n - r - c - l) / 3, $ = 2 * u;
  if (e && n > s) {
    const f = s - l - r - c, _ = f / 6, B = f - _;
    u = Math.min(u, B), $ = f - u, n = Math.min(n, s);
  }
  return {
    a: $,
    b: u,
    c,
    d: l,
    p: n,
    arcSectionLength: r,
    cornerRadius: i
  };
}
function ot({
  width: i,
  height: t,
  topLeftPathParams: e,
  topRightPathParams: s,
  bottomLeftPathParams: n,
  bottomRightPathParams: o
}) {
  return `
    M ${i - s.p} 0
    ${jt(s)}
    L ${i} ${t - o.p}
    ${It(o)}
    L ${n.p} ${t}
    ${Vt(n)}
    L 0 ${e.p}
    ${qt(e)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim();
}
function jt({
  cornerRadius: i,
  a: t,
  b: e,
  c: s,
  d: n,
  p: o,
  arcSectionLength: r
}) {
  return i ? A`
    c ${t} 0 ${t + e} 0 ${t + e + s} ${n}
    a ${i} ${i} 0 0 1 ${r} ${r}
    c ${n} ${s}
        ${n} ${e + s}
        ${n} ${t + e + s}` : A`l ${o} 0`;
}
function It({
  cornerRadius: i,
  a: t,
  b: e,
  c: s,
  d: n,
  p: o,
  arcSectionLength: r
}) {
  return i ? A`
    c 0 ${t}
      0 ${t + e}
      ${-n} ${t + e + s}
    a ${i} ${i} 0 0 1 -${r} ${r}
    c ${-s} ${n}
      ${-(e + s)} ${n}
      ${-(t + e + s)} ${n}` : A`l 0 ${o}`;
}
function Vt({
  cornerRadius: i,
  a: t,
  b: e,
  c: s,
  d: n,
  p: o,
  arcSectionLength: r
}) {
  return i ? A`
    c ${-t} 0
      ${-(t + e)} 0
      ${-(t + e + s)} ${-n}
    a ${i} ${i} 0 0 1 -${r} -${r}
    c ${-n} ${-s}
      ${-n} ${-(e + s)}
      ${-n} ${-(t + e + s)}` : A`l ${-o} 0`;
}
function qt({
  cornerRadius: i,
  a: t,
  b: e,
  c: s,
  d: n,
  p: o,
  arcSectionLength: r
}) {
  return i ? A`
    c 0 ${-t}
      0 ${-(t + e)}
      ${n} ${-(t + e + s)}
    a ${i} ${i} 0 0 1 ${r} -${r}
    c ${s} ${-n}
      ${e + s} ${-n}
      ${t + e + s} ${-n}` : A`l 0 ${-o}`;
}
function L(i) {
  return i * Math.PI / 180;
}
function A(i, ...t) {
  return i.reduce((e, s, n) => {
    const o = t[n];
    return typeof o == "number" ? e + s + o.toFixed(4) : e + s + (o ?? "");
  }, "");
}
function Wt({
  cornerRadius: i = 0,
  topLeftCornerRadius: t,
  topRightCornerRadius: e,
  bottomRightCornerRadius: s,
  bottomLeftCornerRadius: n,
  cornerSmoothing: o,
  width: r,
  height: a,
  preserveSmoothing: h = !1
}) {
  if (t = t ?? i, e = e ?? i, n = n ?? i, s = s ?? i, t === e && e === s && s === n && n === t) {
    const $ = Math.min(r, a) / 2, f = Math.min(
      t,
      $
    ), _ = M({
      cornerRadius: f,
      cornerSmoothing: o,
      preserveSmoothing: h,
      roundingAndSmoothingBudget: $
    });
    return ot({
      width: r,
      height: a,
      topLeftPathParams: _,
      topRightPathParams: _,
      bottomLeftPathParams: _,
      bottomRightPathParams: _
    });
  }
  const { topLeft: d, topRight: c, bottomLeft: l, bottomRight: u } = kt(
    {
      topLeftCornerRadius: t,
      topRightCornerRadius: e,
      bottomRightCornerRadius: s,
      bottomLeftCornerRadius: n,
      width: r,
      height: a
    }
  );
  return ot({
    width: r,
    height: a,
    topLeftPathParams: M({
      cornerSmoothing: o,
      preserveSmoothing: h,
      cornerRadius: d.radius,
      roundingAndSmoothingBudget: d.roundingAndSmoothingBudget
    }),
    topRightPathParams: M({
      cornerSmoothing: o,
      preserveSmoothing: h,
      cornerRadius: c.radius,
      roundingAndSmoothingBudget: c.roundingAndSmoothingBudget
    }),
    bottomRightPathParams: M({
      cornerSmoothing: o,
      preserveSmoothing: h,
      cornerRadius: u.radius,
      roundingAndSmoothingBudget: u.roundingAndSmoothingBudget
    }),
    bottomLeftPathParams: M({
      cornerSmoothing: o,
      preserveSmoothing: h,
      cornerRadius: l.radius,
      roundingAndSmoothingBudget: l.roundingAndSmoothingBudget
    })
  });
}
var Ft = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, $t = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Zt(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Ft(t, e, n), n;
};
let z = class extends C {
  constructor() {
    super(...arguments), this.width = 400, this.height = 300, this.radius = 100, this.smoothing = 1;
  }
  render() {
    const i = Wt({
      width: this.width,
      height: this.height,
      cornerRadius: this.radius,
      cornerSmoothing: this.smoothing
    });
    return Mt`
		<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}"><path fill="#f00" d="${i}" /></svg>`;
  }
};
z.styles = ft`
		svg {
			display: block;
			margin-top: 8px;
		}
	`;
$t([
  Dt({ type: Number })
], z.prototype, "width", 2);
z = $t([
  Bt("figma-squircle")
], z);
