import{d as O,a2 as I,u as R,U as W,K as k,h as l,n as B,w as E,ae as C,a1 as L,af as F}from"./runtime.BSXrOBhK.js";import{i as K,c as w,d as M,n as S,b as q}from"./disclose-version.BoPw_akI.js";function H(s,t,...r){var i=s,f=W,u;O(()=>{f!==(f=t())&&(u&&(k(u),u=null),u=R(()=>f(i,...r)))},I),l&&(i=B)}function z(s,t){if(t){const r=document.body;s.autofocus=!0,E(()=>{document.activeElement===r&&s.focus()})}}function D(s,t,r,i){r=r==null?null:r+"";var f=s.__attributes??(s.__attributes={});l&&(f[t]=s.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&s.nodeName==="LINK")||f[t]!==(f[t]=r)&&(t==="loading"&&(s[C]=r),r===null?s.removeAttribute(t):s.setAttribute(t,r))}function J(s,t,r,i,f=!1,u){var e=t||{},v=s.tagName==="OPTION";for(var p in t)p in r||(r[p]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);var h=T.get(s.nodeName);h||T.set(s.nodeName,h=U(s));var P=s.__attributes??(s.__attributes={}),y=[];for(const a in r){let n=r[a];if(v&&a==="value"&&n==null){s.value=s.__value="",e[a]=n;continue}var b=e[a];if(n!==b){e[a]=n;var N=a[0]+a[1];if(N!=="$$")if(N==="on"){const _={},g="$$"+a;let c=a.slice(2);var d=q(c);if(K(c)&&(c=c.slice(0,-7),_.capture=!0),!d&&b){if(n!=null)continue;s.removeEventListener(c,e[g],_),e[g]=null}if(n!=null)if(d)s[`__${c}`]=n,M([c]);else{let A=function($){e[a].call(this,$)};t?e[g]=w(c,s,A,_):y.push([a,n,()=>e[g]=w(c,s,A,_)])}}else if(n==null)P[a]=null,s.removeAttribute(a);else if(a==="style")s.style.cssText=n+"";else if(a==="autofocus")z(s,!!n);else if(a==="__value"||a==="value")s.value=s[a]=s.__value=n;else{var o=a;f||(o=S(o)),h.includes(o)?l&&(o==="src"||o==="href"||o==="srcset")||(s[o]=n):typeof n!="function"&&D(s,o,n)}}}return t||E(()=>{if(s.isConnected)for(const[a,n,_]of y)e[a]===n&&_()}),e}var G=["width","height","draggable"],T=new Map;function U(s){for(var t=[],r,i=L(s);i.constructor.name!=="Element";){r=F(i);for(var f in r)r[f].set&&!G.includes(f)&&t.push(f);i=L(i)}return t}function Q(s,t){var r=s.__className,i=V(t);l&&s.className===i?s.__className=i:(r!==i||l&&s.className!==i)&&(t==null?s.removeAttribute("class"):s.className=i,s.__className=i)}function V(s){return s??""}function X(s,t,r){if(r){if(s.classList.contains(t))return;s.classList.add(t)}else{if(!s.classList.contains(t))return;s.classList.remove(t)}}function Z(s,t,r,i,f){var u=s.__attributes??(s.__attributes={}),e=s.style,v="style-"+t;u[v]===r&&(!f||e.getPropertyValue(t)===r)||(u[v]=r,r==null?e.removeProperty(t):e.setProperty(t,r,i?"important":""))}const x=(s,t)=>!t||!s.startsWith(t)?s:s.substring(t.length),m=(s,t)=>!t||!s.endsWith(t)?s:s.substring(0,s.length-t.length),ss=(s,t)=>s.endsWith(t)?s:s+t;export{m as a,J as b,Z as c,D as d,ss as e,H as f,Q as g,x as s,X as t};