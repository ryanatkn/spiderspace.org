import{V as B,ah as q,j as G,w as U,b as T,d as Y,al as j,h as _,am as V,M as k,m as w,e as b,n as u,i as m,x as I,an as P,ao as x,g as W,ap as D,aq as A,o as z,ar as Q,as as J,G as K,k as X,at as Z,u as ee,p as te,a as re,Q as ae}from"./runtime.BSXrOBhK.js";const F=new Set,M=new Set;function ne(e,t,r,i){function n(a){if(i.capture||E.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?U(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function _e(e,t,r,i,n){var a={capture:i,passive:n},o=ne(e,t,r,a);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(e,o,a)})}function he(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of M)r(e)}function E(e){var O;var t=this,r=t.ownerDocument,i=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],a=n[0]||e.target,o=0,p=e.__root;if(p){var d=n.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var l=n.indexOf(t);if(l===-1)return;d<=l&&(o=d)}if(a=n[o]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var g,s=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var f=a["__"+i];if(f!==void 0&&!a.disabled)if(G(f)){var[L,...N]=f;L.apply(a,[e,...N])}else f.call(a,e)}catch(S){g?s.push(S):g=S}if(e.cancelBubble||v===t||v===null)break;a=v}if(g){for(let S of s)queueMicrotask(()=>{throw S});throw g}}finally{e.__root=t,delete e.currentTarget}}}let c;function oe(){c=void 0}function pe(e){let t=null,r=_;var i;if(_){for(t=u,c===void 0&&(c=m(document.head));c!==null&&(c.nodeType!==8||c.data!==V);)c=k(c);c===null?w(!1):c=b(k(c))}_||(i=document.head.appendChild(T()));try{Y(()=>e(i),j)}finally{r&&(w(!0),c=u,b(t))}}function H(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function h(e,t){var r=I;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ve(e,t){var r=(t&P)!==0,i=(t&x)!==0,n,a=!e.startsWith("<!>");return()=>{if(_)return h(u,null),u;n===void 0&&(n=H(a?e:"<!>"+e),r||(n=m(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var p=m(o),d=o.lastChild;h(p,d)}else h(o,o);return o}}function me(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&P)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(_)return h(u,null),u;if(!o){var p=H(a),d=m(p);if(n)for(o=document.createDocumentFragment();m(d);)o.appendChild(m(d));else o=m(d)}var l=o.cloneNode(!0);if(n){var g=m(l),s=l.lastChild;h(g,s)}else h(l,l);return l}}function ge(e=""){if(!_){var t=T(e+"");return h(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=T()),b(r)),h(r,r),r}function ye(){if(_)return h(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),h(t,r),e}function we(e,t){if(_){I.nodes_end=u,W();return}e!==null&&e.before(t)}function Ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ie=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Te(e){return ie.includes(e)}const se={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e){return e=e.toLowerCase(),se[e]??e}const ue=["wheel","mousewheel","touchstart","touchmove"];function de(e){return ue.includes(e)}let C=!0;function Le(e,t){t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function le(e,t){const r=t.anchor??t.target.appendChild(T());return $(e,{...t,anchor:r})}function Ne(e,t){D(),t.intro=t.intro??!1;const r=t.target,i=_,n=u;try{for(var a=m(r);a&&(a.nodeType!==8||a.data!==V);)a=k(a);if(!a)throw A;w(!0),b(a),W();const o=$(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==z)throw Q(),A;return w(!1),o}catch(o){if(o===A)return t.recover===!1&&J(),D(),K(r),w(!1),le(e,t);throw o}finally{w(i),b(n),oe()}}const y=new Map;function $(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){D();var p=new Set,d=s=>{for(var v=0;v<s.length;v++){var f=s[v];if(!p.has(f)){p.add(f);var L=de(f);t.addEventListener(f,E,{passive:L});var N=y.get(f);N===void 0?(document.addEventListener(f,E,{passive:L}),y.set(f,1)):y.set(f,N+1)}}};d(X(F)),M.add(d);var l=void 0,g=Z(()=>(ee(()=>{if(a){te({});var s=ae;s.c=a}n&&(i.$$events=n),_&&h(r,null),C=o,l=e(r,i)||{},C=!0,_&&(I.nodes_end=u),a&&re()}),()=>{for(var s of p){t.removeEventListener(s,E);var v=y.get(s);--v===0?(document.removeEventListener(s,E),y.delete(s)):y.set(s,v)}M.delete(d),R.delete(l)}));return R.set(l,g),l}let R=new WeakMap;function Se(e){const t=R.get(e);t&&t()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{we as a,Te as b,ne as c,he as d,ye as e,ge as f,me as g,Ne as h,Ee as i,C as j,h as k,H as l,le as m,be as n,pe as o,_e as p,Le as s,ve as t,Se as u};
