import{k as O,S,l as r,A as T,B as k,C as A,f as b,i as E,s as o,n as w,m as x,v as y,e as I,w as m,D as M,F as g,G as v,q as B,H as h,J as D,K}from"./runtime.BgOnWdgt.js";import{U as d}from"./disclose-version.C7wEW_2o.js";function _(e,n=!0,s=null,f){if(typeof e=="object"&&e!=null&&!O(e)&&!(S in e)){if(r in e){const i=e[r];if(i.t===e||i.p===e)return i.p}const t=M(e);if(t===T||t===k){const i=new Proxy(e,L);return A(e,r,{value:{s:new Map,v:b(0),a:E(e),i:n,p:i,t:e},writable:!0,enumerable:!1}),i}}return e}function R(e,n=1){o(e,e.v+n)}const L={defineProperty(e,n,s){if(s.value){const f=e[r],t=f.s.get(n);t!==void 0&&o(t,_(s.value,f.i,f))}return Reflect.defineProperty(e,n,s)},deleteProperty(e,n){const s=e[r],f=s.s.get(n),t=s.a,i=delete e[n];if(t&&i){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&o(a,l)}return f!==void 0&&o(f,d),i&&R(s.v),i},get(e,n,s){var i;if(n===r)return Reflect.get(e,r);const f=e[r];let t=f.s.get(n);if(t===void 0&&(!(n in e)||(i=w(e,n))!=null&&i.writable)&&(t=(f.i?b:x)(_(e[n],f.i,f)),f.s.set(n,t)),t!==void 0){const a=y(t);return a===d?void 0:a}return Reflect.get(e,n,s)},getOwnPropertyDescriptor(e,n){const s=Reflect.getOwnPropertyDescriptor(e,n);if(s&&"value"in s){const t=e[r].s.get(n);t&&(s.value=y(t))}return s},has(e,n){var i;if(n===r)return!0;const s=e[r],f=Reflect.has(e,n);let t=s.s.get(n);return(t!==void 0||I!==null&&(!f||(i=w(e,n))!=null&&i.writable))&&(t===void 0&&(t=(s.i?b:x)(f?_(e[n],s.i,s):d),s.s.set(n,t)),y(t)===d)?!1:f},set(e,n,s,f){const t=e[r];let i=t.s.get(n);i===void 0&&(m(()=>f[n]),i=t.s.get(n)),i!==void 0&&o(i,_(s,t.i,t));const a=t.a,l=!(n in e);if(a&&n==="length")for(let c=s;c<e.length;c+=1){const u=t.s.get(c+"");u!==void 0&&o(u,d)}if(e[n]=s,l){if(a){const c=t.s.get("length"),u=e.length;c!==void 0&&c.v!==u&&o(c,u)}R(t.v)}return!0},ownKeys(e){const n=e[r];return y(n.v),Reflect.ownKeys(e)}};function P(e,n){var f;var s=e&&((f=e[r])==null?void 0:f.t);return e===n||s===n}function U(e={},n,s,f){g(()=>{var t,i;return v(()=>{t=i,i=(f==null?void 0:f())||[],m(()=>{e!==s(...i)&&(n(e,...i),t&&P(s(...t),e)&&n(null,...t))})}),()=>{B(()=>{i&&P(s(...i),e)&&n(null,...i)})}})}function N(e){h===null&&D(),h.l!==null?j(h).m.push(e):K(()=>{const n=m(e);if(typeof n=="function")return n})}function Y(e){h===null&&D(),N(()=>()=>m(e))}function j(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{Y as a,U as b,N as o,_ as p};