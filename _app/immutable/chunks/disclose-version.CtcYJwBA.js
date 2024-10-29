import{at as q,q as J,a4 as K,au as D,Q as I,y as Q,Z as F,v as L,a8 as N,z as Z,av as X,D as v,aw as H,an as C,J as w,I as A,K as o,ak as b,ax as $,ay as ee,E as z,az as M,ap as R,al as re,ao as te,aA as ne,ah as ae,aa as se,aB as ue,B as ie,p as oe,a as le,d as de,aq as O,u as fe,a0 as ce,n as _e,k as pe}from"./runtime.DZKqrqBv.js";const U=new Set,V=new Set;function ve(e,r,t,a){function s(n){if(a.capture||T.call(r,n),!n.cancelBubble){var u=F,c=L;D(null),I(null);try{return t.call(this,n)}finally{D(u),I(c)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?J(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function Ae(e,r,t,a,s){var n={capture:a,passive:s},u=ve(e,r,t,n);(r===document.body||r===window||r===document)&&q(()=>{r.removeEventListener(e,u,n)})}function Le(e){for(var r=0;r<e.length;r++)U.add(e[r]);for(var t of V)t(e)}function T(e){var P;var r=this,t=r.ownerDocument,a=e.type,s=((P=e.composedPath)==null?void 0:P.call(e))||[],n=s[0]||e.target,u=0,c=e.__root;if(c){var d=s.indexOf(c);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var f=s.indexOf(r);if(f===-1)return;d<=f&&(u=d)}if(n=s[u]||e.target,n!==r){K(e,"currentTarget",{configurable:!0,get(){return n||t}});var E=F,_=L;D(null),I(null);try{for(var i,l=[];n!==null;){var y=n.assignedSlot||n.parentNode||n.host||null;try{var g=n["__"+a];if(g!==void 0&&!n.disabled)if(Q(g)){var[G,...x]=g;G.apply(n,[e,...x])}else g.call(n,e)}catch(S){i?l.push(S):i=S}if(e.cancelBubble||y===r||y===null)break;n=y}if(i){for(let S of l)queueMicrotask(()=>{throw S});throw i}}finally{e.__root=r,delete e.currentTarget,D(E),I(_)}}}let p;function he(){p=void 0}function Se(e){let r=null,t=v;var a;if(v){for(r=o,p===void 0&&(p=b(document.head));p!==null&&(p.nodeType!==8||p.data!==H);)p=C(p);p===null?w(!1):p=A(C(p))}v||(a=document.head.appendChild(N()));try{Z(()=>e(a),X)}finally{t&&(w(!0),p=o,A(r))}}function Y(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function h(e,r){var t=L;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function ke(e,r){var t=(r&$)!==0,a=(r&ee)!==0,s,n=!e.startsWith("<!>");return()=>{if(v)return h(o,null),o;s===void 0&&(s=Y(n?e:"<!>"+e),t||(s=b(s)));var u=a?document.importNode(s,!0):s.cloneNode(!0);if(t){var c=b(u),d=u.lastChild;h(c,d)}else h(u,u);return u}}function De(e,r,t="svg"){var a=!e.startsWith("<!>"),s=(r&$)!==0,n=`<${t}>${a?e:"<!>"+e}</${t}>`,u;return()=>{if(v)return h(o,null),o;if(!u){var c=Y(n),d=b(c);if(s)for(u=document.createDocumentFragment();b(d);)u.appendChild(b(d));else u=b(d)}var f=u.cloneNode(!0);if(s){var E=b(f),_=f.lastChild;h(E,_)}else h(f,f);return f}}function Ie(e=""){if(!v){var r=N(e+"");return h(r,r),r}var t=o;return t.nodeType!==3&&(t.before(t=N()),A(t)),h(t,t),t}function Re(){if(v)return h(o,null),o;var e=document.createDocumentFragment(),r=document.createComment(""),t=N();return e.append(r,t),h(r,t),e}function Ce(e,r){if(v){L.nodes_end=o,z();return}e!==null&&e.before(r)}function Me(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ye=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Oe(e){return ye.includes(e)}const be={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ve(e){return e=e.toLowerCase(),be[e]??e}const ge=["touchstart","touchmove"];function me(e){return ge.includes(e)}let W=!0;function Be(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function we(e,r){return j(e,r)}function Pe(e,r){M(),r.intro=r.intro??!1;const t=r.target,a=v,s=o;try{for(var n=b(t);n&&(n.nodeType!==8||n.data!==H);)n=C(n);if(!n)throw R;w(!0),A(n),z();const u=j(e,{...r,anchor:n});if(o===null||o.nodeType!==8||o.data!==re)throw te(),R;return w(!1),u}catch(u){if(u===R)return r.recover===!1&&ne(),M(),ae(t),w(!1),we(e,r);throw u}finally{w(a),A(s),he()}}const m=new Map;function j(e,{target:r,anchor:t,props:a={},events:s,context:n,intro:u=!0}){M();var c=new Set,d=_=>{for(var i=0;i<_.length;i++){var l=_[i];if(!c.has(l)){c.add(l);var y=me(l);r.addEventListener(l,T,{passive:y});var g=m.get(l);g===void 0?(document.addEventListener(l,T,{passive:y}),m.set(l,1)):m.set(l,g+1)}}};d(se(U)),V.add(d);var f=void 0,E=ue(()=>{var _=t??r.appendChild(N());return ie(()=>{if(n){oe({});var i=de;i.c=n}s&&(a.$$events=s),v&&h(_,null),W=u,f=e(_,a)||{},W=!0,v&&(L.nodes_end=o),n&&le()}),()=>{var y;for(var i of c){r.removeEventListener(i,T);var l=m.get(i);--l===0?(document.removeEventListener(i,T),m.delete(i)):m.set(i,l)}V.delete(d),B.delete(f),_!==t&&((y=_.parentNode)==null||y.removeChild(_))}});return B.set(f,E),f}let B=new WeakMap;function We(e){const r=B.get(e);r&&r()}function Ee(e,r,t){if(e==null)return r(void 0),t&&t(void 0),O;const a=fe(()=>e.subscribe(r,t));return a.unsubscribe?()=>a.unsubscribe():a}let k=!1;function qe(e,r,t){const a=t[r]??(t[r]={store:null,source:ce(void 0),unsubscribe:O});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=Ee(e,n=>{s?a.source.v=n:pe(a.source,n)}),s=!1}return _e(a.source)}function Fe(){const e={};return q(()=>{for(var r in e)e[r].unsubscribe()}),e}function He(e){var r=k;try{return k=!1,[e(),k]}finally{k=r}}const Te="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Te);export{Ce as a,Be as b,qe as c,He as d,Ie as e,Re as f,h as g,Pe as h,Y as i,Me as j,ve as k,Le as l,we as m,Ve as n,Oe as o,De as p,W as q,Se as r,Fe as s,ke as t,We as u,Ae as v};