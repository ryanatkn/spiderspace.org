import{N as Y,q as B,C as F,i as q,b as G,T as X,e as R,U as H,V as K,W as Q,X as Z,c as j,p as z,a as J,H as ee}from"./runtime.DGcgR5j2.js";function te(e){console.warn("hydration_mismatch")}const de=1,_e=2,he=4,pe=8,ve=16,me=64,Ee=1,Te=2,ye=4,ge=8,we=1,Ie=2,Se=4,k=1,ne=2,O="[",re="[!",U="]",A={},Ce=Symbol(),Ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],ae=["touchstart","touchmove","touchend"],Ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e,t="exclude-on"){return e.endsWith("capture")?t=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let u=!1;function C(e){u=e}let i;function E(e){return i=e}function L(){return i=i.nextSibling}function Re(e){u&&(i=e)}function Oe(){u&&L()}function Le(){for(var e=0,t=i;;){if(t.nodeType===8){var n=t.data;if(n===U){if(e===0)return t;e-=1}else(n===O||n===re)&&(e+=1)}var o=t.nextSibling;t.remove(),t=o}}var P,oe;function x(){if(P===void 0){P=window,oe=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function T(){return document.createTextNode("")}function De(e){if(!u)return e.firstChild;var t=i.firstChild;return t===null&&(t=i.appendChild(T())),E(t),t}function Pe(e,t){if(!u){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}if(t&&(i==null?void 0:i.nodeType)!==3){var o=T();return i==null||i.before(o),E(o),o}return i}function Me(e,t=!1){if(!u)return e.nextSibling;var n=i.nextSibling,o=n.nodeType;if(t&&o!==3){var r=T();return n==null||n.before(r),E(r),r}return E(n),n}function ie(e){e.textContent=""}const V=new Set,N=new Set;function se(e,t,n,o){function r(a){if(o.capture||g.call(t,a),!a.cancelBubble)return n.call(this,a)}return e.startsWith("pointer")||e==="wheel"?B(()=>{t.addEventListener(e,r,o)}):t.addEventListener(e,r,o),r}function He(e,t,n,o,r){var a={capture:o,passive:r},s=se(e,t,n,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,s,a)})}function ke(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var n of N)n(e)}function g(e){var D;var t=this,n=t.ownerDocument,o=e.type,r=((D=e.composedPath)==null?void 0:D.call(e))||[],a=r[0]||e.target,s=0,h=e.__root;if(h){var l=r.indexOf(h);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var f=r.indexOf(t);if(f===-1)return;l<=f&&(s=l)}if(a=r[s]||e.target,a!==t){F(e,"currentTarget",{configurable:!0,get(){return a||n}});try{for(var m,c=[];a!==null;){var p=a.parentNode||a.host||null;try{var d=a["__"+o];if(d!==void 0&&!a.disabled)if(q(d)){var[w,...I]=d;w.apply(a,[e,...I])}else d.call(a,e)}catch(S){m?c.push(S):m=S}if(e.cancelBubble||p===t||p===null)break;a=p}if(m){for(let S of c)queueMicrotask(()=>{throw S});throw m}}finally{e.__root=t,a=t}}}let v;function ue(){v=void 0}function Ue(e){let t=null,n=u;var o;if(u){for(t=i,v===void 0&&(v=document.head.firstChild);v.nodeType!==8||v.data!==O;)v=v.nextSibling;v=E(v.nextSibling)}else o=document.head.appendChild(T());try{G(()=>e(o),X)}finally{n&&E(t)}}function $(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var n;(n=R).nodes??(n.nodes={start:e,end:t})}function xe(e,t){var n=(t&k)!==0,o=(t&ne)!==0,r,a=!e.startsWith("<!>");return()=>{if(u)return _(i,null),i;r||(r=$(a?e:"<!>"+e),n||(r=r.firstChild));var s=o?document.importNode(r,!0):r.cloneNode(!0);if(n){var h=s.firstChild,l=s.lastChild;_(h,l)}else _(s,s);return s}}function Ve(e,t,n="svg"){var o=!e.startsWith("<!>"),r=(t&k)!==0,a=`<${n}>${o?e:"<!>"+e}</${n}>`,s;return()=>{if(u)return _(i,null),i;if(!s){var h=$(a),l=h.firstChild;if(r)for(s=document.createDocumentFragment();l.firstChild;)s.appendChild(l.firstChild);else s=l.firstChild}var f=s.cloneNode(!0);if(r){var m=f.firstChild,c=f.lastChild;_(m,c)}else _(f,f);return f}}function $e(){if(!u){var e=T();return _(e,e),e}var t=i;return t.nodeType!==3&&(t.before(t=T()),E(t)),_(t,t),t}function We(){if(u)return _(i,null),i;var e=document.createDocumentFragment(),t=document.createComment(""),n=T();return e.append(t,n),_(t,n),e}function Ye(e,t){if(u){R.nodes.end=i,L();return}e!==null&&e.before(t)}let M=!0;function Be(e,t){(e.__t??(e.__t=e.nodeValue))!==t&&(e.nodeValue=e.__t=t)}function ce(e,t){const n=t.anchor??t.target.appendChild(T());return H(()=>W(e,{...t,anchor:n}),!1)}function Fe(e,t){t.intro=t.intro??!1;const n=t.target,o=u;try{return H(()=>{for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==O);)r=r.nextSibling;if(!r)throw A;C(!0),E(r),L();const a=W(e,{...t,anchor:r});if(i.nodeType!==8||i.data!==U)throw te(),A;return C(!1),a},!1)}catch(r){if(r===A)return t.recover===!1&&K(),x(),ie(n),C(!1),ce(e,t);throw r}finally{C(o),ue()}}const y=new Map;function W(e,{target:t,anchor:n,props:o={},events:r,context:a,intro:s=!0}){x();var h=new Set,l=c=>{for(var p=0;p<c.length;p++){var d=c[p];if(!h.has(d)){h.add(d);var w=ae.includes(d);t.addEventListener(d,g,{passive:w});var I=y.get(d);I===void 0?(document.addEventListener(d,g,{passive:w}),y.set(d,1)):y.set(d,I+1)}}};l(Q(V)),N.add(l);var f=void 0,m=Z(()=>(j(()=>{if(a){z({});var c=ee;c.c=a}r&&(o.$$events=r),u&&_(n,null),M=s,f=e(n,o)||{},M=!0,u&&(R.nodes.end=i),a&&J()}),()=>{for(var c of h){t.removeEventListener(c,g);var p=y.get(c);--p===0?(document.removeEventListener(c,g),y.delete(c)):y.set(c,p)}N.delete(l),b.delete(f)}));return b.set(f,m),f}let b=new WeakMap;function qe(e){const t=b.get(e);t==null||t()}const le="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);export{P as $,ke as A,Ne as B,Fe as C,Ae as D,pe as E,ce as F,qe as G,re as H,We as I,$e as J,Ve as K,Oe as L,M,Ie as N,Se as O,ye as P,te as Q,A as R,_ as S,we as T,Ce as U,$ as V,Ue as W,He as X,oe as Y,Ye as a,Me as b,De as c,E as d,T as e,Pe as f,L as g,u as h,Le as i,C as j,i as k,U as l,de as m,_e as n,me as o,ie as p,ve as q,Re as r,Be as s,xe as t,he as u,Ee as v,Te as w,ge as x,be as y,se as z};
