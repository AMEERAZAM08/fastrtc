import { _ as n, j as r, k as g, l as d } from "./mermaid.core-Cmyps_S7.js";
var u = /* @__PURE__ */ n((t, e) => {
  let o;
  return e === "sandbox" && (o = r("#i" + t)), (e === "sandbox" ? r(o.nodes()[0].contentDocument.body) : r("body")).select(`[id="${t}"]`);
}, "getDiagramElement"), b = /* @__PURE__ */ n((t, e, o, i) => {
  t.attr("class", o);
  const { width: a, height: s, x: h, y: x } = l(t, e);
  g(t, s, a, i);
  const c = w(h, x, a, s, e);
  t.attr("viewBox", c), d.debug(`viewBox configured: ${c} with padding: ${e}`);
}, "setupViewPortForSVG"), l = /* @__PURE__ */ n((t, e) => {
  var i;
  const o = ((i = t.node()) == null ? void 0 : i.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: o.width + e * 2,
    height: o.height + e * 2,
    x: o.x,
    y: o.y
  };
}, "calculateDimensionsWithPadding"), w = /* @__PURE__ */ n((t, e, o, i, a) => `${t - a} ${e - a} ${o} ${i}`, "createViewBox");
export {
  u as g,
  b as s
};
