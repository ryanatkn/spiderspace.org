var j=(s,e,r)=>{if(!e.has(s))throw TypeError("Cannot "+r)};var c=(s,e,r)=>(j(s,e,"read from private field"),r?r.call(s):e.get(s)),L=(s,e,r)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,r)},O=(s,e,r,n)=>(j(s,e,"write to private field"),n?n.call(s,r):e.set(s,r),r);import{D as M,E as X,z as G,F as H,B as J,K as Q,C as Y,n as _,k as x,a3 as Z,a4 as p,a0 as $,p as ee,a5 as te,g as re,f as k,a as se,a6 as ae,s as ne,c as oe,t as ie,r as ce,a7 as A,X as S}from"../chunks/runtime.DZKqrqBv.js";import{h as le,m as ue,u as fe,f as D,a as E,t as q,e as de,b as he}from"../chunks/disclose-version.CtcYJwBA.js";import{p as B,i as I,a as me}from"../chunks/props.DlRrHfgD.js";import{o as _e,b as V}from"../chunks/index-client.CN5v4PKB.js";function F(s,e,r){M&&X();var n=s,o,i;G(()=>{o!==(o=e())&&(i&&(Y(i),i=null),o&&(i=J(()=>r(n,o))))},H),M&&(n=Q)}function ve(s){return class extends ge{constructor(e){super({component:s,...e})}}}var v,u;class ge{constructor(e){L(this,v,void 0);L(this,u,void 0);var i;var r=new Map,n=(t,a)=>{var d=$(a);return r.set(t,d),d};const o=new Proxy({...e.props||{},$$events:{}},{get(t,a){return _(r.get(a)??n(a,Reflect.get(t,a)))},has(t,a){return _(r.get(a)??n(a,Reflect.get(t,a))),Reflect.has(t,a)},set(t,a,d){return x(r.get(a)??n(a,d),d),Reflect.set(t,a,d)}});O(this,u,(e.hydrate?le:ue)(e.component,{target:e.target,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((i=e==null?void 0:e.props)!=null&&i.$$host)||e.sync===!1)&&Z(),O(this,v,o.$$events);for(const t of Object.keys(c(this,u)))t==="$set"||t==="$destroy"||t==="$on"||p(this,t,{get(){return c(this,u)[t]},set(a){c(this,u)[t]=a},enumerable:!0});c(this,u).$set=t=>{Object.assign(o,t)},c(this,u).$destroy=()=>{fe(c(this,u))}}$set(e){c(this,u).$set(e)}$on(e,r){c(this,v)[e]=c(this,v)[e]||[];const n=(...o)=>r.call(this,...o);return c(this,v)[e].push(n),()=>{c(this,v)[e]=c(this,v)[e].filter(o=>o!==n)}}$destroy(){c(this,u).$destroy()}}v=new WeakMap,u=new WeakMap;const ye="modulepreload",Ee=function(s){return"/"+s},U={},w=function(e,r,n){let o=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link");o=Promise.all(r.map(t=>{if(t=Ee(t),t in U)return;U[t]=!0;const a=t.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!n)for(let g=i.length-1;g>=0;g--){const l=i[g];if(l.href===t&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":ye,a||(h.as="script",h.crossOrigin=""),h.href=t,document.head.appendChild(h),a)return new Promise((g,l)=>{h.addEventListener("load",g),h.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})}))}return o.then(()=>e()).catch(i=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=i,window.dispatchEvent(t),!t.defaultPrevented)throw i})},Oe={};var be=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Pe=q("<!> <!>",1);function Re(s,e){ee(e,!0);let r=B(e,"components",23,()=>[]),n=B(e,"data_0",3,null),o=B(e,"data_1",3,null);te(()=>e.stores.page.set(e.page)),re(()=>{e.stores,e.page,e.constructors,r(),e.form,n(),o(),e.stores.page.notify()});let i=A(!1),t=A(!1),a=A(null);_e(()=>{const l=e.stores.page.subscribe(()=>{_(i)&&(x(t,!0),ae().then(()=>{x(a,me(document.title||"untitled page"))}))});return x(i,!0),l});const d=S(()=>e.constructors[1]);var C=Pe(),h=k(C);I(h,()=>e.constructors[1],l=>{var m=D();const b=S(()=>e.constructors[0]);var P=k(m);F(P,()=>_(b),(y,T)=>{V(T(y,{get data(){return n()},get form(){return e.form},children:(f,ke)=>{var N=D(),z=k(N);F(z,()=>_(d),(K,W)=>{V(W(K,{get data(){return o()},get form(){return e.form}}),R=>r()[1]=R,()=>{var R;return(R=r())==null?void 0:R[1]})}),E(f,N)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),E(l,m)},l=>{var m=D();const b=S(()=>e.constructors[0]);var P=k(m);F(P,()=>_(b),(y,T)=>{V(T(y,{get data(){return n()},get form(){return e.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),E(l,m)});var g=ne(h,2);I(g,()=>_(i),l=>{var m=be(),b=oe(m);I(b,()=>_(t),P=>{var y=de();ie(()=>he(y,_(a))),E(P,y)}),ce(m),E(l,m)}),E(s,C),se()}const Ae=ve(Re),Se=[()=>w(()=>import("../nodes/0.BMF9Hmdm.js"),__vite__mapDeps([0,1,2,3,4,5,6])),()=>w(()=>import("../nodes/1.Djoy9OKJ.js"),__vite__mapDeps([7,1,2,8,9,10])),()=>w(()=>import("../nodes/2.D_slhKwm.js"),__vite__mapDeps([11,1,2,4,10,12,3,13,14])),()=>w(()=>import("../nodes/3.D20ifFn9.js"),__vite__mapDeps([15,1,2,3,4,8,9,10,12,13,16]))],De=[],Be={"/":[2],"/about":[3]},Ie={handleError:({error:s})=>{console.error(s)},reroute:()=>{}};export{Be as dictionary,Ie as hooks,Oe as matchers,Se as nodes,Ae as root,De as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.BMF9Hmdm.js","_app/immutable/chunks/disclose-version.CtcYJwBA.js","_app/immutable/chunks/runtime.DZKqrqBv.js","_app/immutable/chunks/props.DlRrHfgD.js","_app/immutable/chunks/string.DLw6vcqC.js","_app/immutable/chunks/index-client.CN5v4PKB.js","_app/immutable/assets/0.xlhBOlan.css","_app/immutable/nodes/1.Djoy9OKJ.js","_app/immutable/chunks/stores.h9bWu42N.js","_app/immutable/chunks/entry.CZUW5yBy.js","_app/immutable/chunks/paths.B3wDQveQ.js","_app/immutable/nodes/2.D_slhKwm.js","_app/immutable/chunks/Header.DnINWPna.js","_app/immutable/assets/Header.CLN3jOpO.css","_app/immutable/assets/2.CANeccGV.css","_app/immutable/nodes/3.D20ifFn9.js","_app/immutable/assets/3.C2mMLIvL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
