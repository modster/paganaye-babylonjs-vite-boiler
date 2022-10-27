var l = Object.defineProperty;
var u = (o, e, r) =>
  e in o
    ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (o[e] = r);
var c = (o, e, r) => (u(o, typeof e != 'symbol' ? e + '' : e, r), r);
import { b as s } from './vendor.ae4966cc.js';
const h = function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) i(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerpolicy && (n.referrerPolicy = t.referrerpolicy),
      t.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : t.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function i(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = r(t);
    fetch(t.href, n);
  }
};
h();
class d {
  constructor(e) {
    c(this, 'engine');
    c(this, 'scene');
    (this.canvas = e),
      (this.engine = new s.exports.Engine(e)),
      window.addEventListener('resize', () => {
        this.engine.resize();
      }),
      (this.scene = p(this.engine, this.canvas));
  }
  debug(e = !0) {
    e
      ? this.scene.debugLayer.show({ overlay: !0 })
      : this.scene.debugLayer.hide();
  }
  run() {
    this.debug(!0),
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });
  }
}
var p = function (o, e) {
  var r = new s.exports.Scene(o),
    i = new s.exports.FreeCamera(
      'camera1',
      new s.exports.Vector3(0, 5, -10),
      r,
    );
  i.setTarget(s.exports.Vector3.Zero()), i.attachControl(e, !0);
  var t = new s.exports.HemisphericLight(
    'light',
    new s.exports.Vector3(0, 1, 0),
    r,
  );
  t.intensity = 0.7;
  var n = s.exports.MeshBuilder.CreateSphere(
    'sphere',
    { diameter: 2, segments: 32 },
    r,
  );
  return (
    (n.position.y = 1),
    s.exports.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, r),
    r
  );
};
console.log(`index.ts starting ${d.name}`);
window.addEventListener('DOMContentLoaded', () => {
  let o = document.getElementById('renderCanvas');
  new d(o).run();
});
