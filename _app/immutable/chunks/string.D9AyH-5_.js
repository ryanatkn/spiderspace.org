import{a5 as oa,C as B,a6 as ea,D as T,G as O,E as P,a7 as L,B as ca,a8 as ia,H as va,F as X,I as S,M as w,a9 as _a,J as na,K as D,L as da,aa as k,q as Y,y as Q,ab as F,j as Z,ac as V,ad as ha,m as pa,v as x,ae as ga,af as Ea,ag as Na,ah as W,ai as Aa,aj as fa,ak as Ta,al as ya,N as Ia,n as ba,am as wa,A as j,an as Ra}from"./runtime.DbPr1D-T.js";import{d as m,e as Ca,i as La,f as aa,g as Oa,n as Da,j as Ha}from"./disclose-version.BsYJJVL0.js";let $=null;function Va(a,r){return r}function Ma(a,r,s,e){for(var f=[],l=r.length,u=0;u<l;u++)ga(r[u].e,f,!0);var c=l>0&&f.length===0&&s!==null;if(c){var d=s.parentNode;Ea(d),d.append(s),e.clear(),b(a,r[0].prev,r[l-1].next)}Na(f,()=>{for(var E=0;E<l;E++){var h=r[E];c||(e.delete(h.k),b(a,h.prev,h.next)),W(h.e,!c)}})}function Wa(a,r,s,e,f,l=null){var u=a,c={flags:r,items:new Map,first:null},d=(r&ea)!==0;if(d){var E=a;u=T?O(L(E)):E.appendChild(oa())}T&&P();var h=null;B(()=>{var i=s(),N=ca(i)?i:i==null?[]:ia(i),_=N.length;let p=!1;if(T){var A=u.data===va;A!==(_===0)&&(u=X(),O(u),S(!1),p=!0)}if(T){for(var g=null,o,t=0;t<_;t++){if(w.nodeType===8&&w.data===_a){u=w,p=!0,S(!1);break}var n=N[t],v=e(n,t);o=ta(w,c,g,null,n,v,t,f,r),c.items.set(v,o),g=o}_>0&&O(X())}T||Sa(N,c,u,f,r,e),l!==null&&(_===0?h?na(h):h=D(()=>l(u)):h!==null&&da(h,()=>{h=null})),p&&S(!0)}),T&&(u=w)}function Sa(a,r,s,e,f,l){var G,K,z,J;var u=(f&Aa)!==0,c=(f&(F|V))!==0,d=a.length,E=r.items,h=r.first,i=h,N,_=null,p,A=[],g=[],o,t,n,v;if(u)for(v=0;v<d;v+=1)o=a[v],t=l(o,v),n=E.get(t),n!==void 0&&((G=n.a)==null||G.measure(),(p??(p=new Set)).add(n));for(v=0;v<d;v+=1){if(o=a[v],t=l(o,v),n=E.get(t),n===void 0){var y=i?i.e.nodes_start:s;_=ta(y,r,_,_===null?r.first:_.next,o,t,v,e,f),E.set(t,_),A=[],g=[],i=_.next;continue}if(c&&ka(n,o,v,f),n.e.f&k&&(na(n.e),u&&((K=n.a)==null||K.unfix(),(p??(p=new Set)).delete(n))),n!==i){if(N!==void 0&&N.has(n)){if(A.length<g.length){var R=g[0],I;_=R.prev;var q=A[0],H=A[A.length-1];for(I=0;I<A.length;I+=1)ra(A[I],R,s);for(I=0;I<g.length;I+=1)N.delete(g[I]);b(r,q.prev,H.next),b(r,_,q),b(r,H,R),i=R,_=H,v-=1,A=[],g=[]}else N.delete(n),ra(n,i,s),b(r,n.prev,n.next),b(r,n,_===null?r.first:_.next),b(r,_,n),_=n;continue}for(A=[],g=[];i!==null&&i.k!==t;)i.e.f&k||(N??(N=new Set)).add(i),g.push(i),i=i.next;if(i===null)continue;n=i}A.push(n),_=n,i=n.next}if(i!==null||N!==void 0){for(var C=N===void 0?[]:ia(N);i!==null;)i.e.f&k||C.push(i),i=i.next;var M=C.length;if(M>0){var ua=f&ea&&d===0?s:null;if(u){for(v=0;v<M;v+=1)(z=C[v].a)==null||z.measure();for(v=0;v<M;v+=1)(J=C[v].a)==null||J.fix()}Ma(r,C,ua,E)}}u&&Y(()=>{var U;if(p!==void 0)for(n of p)(U=n.a)==null||U.apply()}),Q.first=r.first&&r.first.e,Q.last=_&&_.e}function ka(a,r,s,e){e&F&&Z(a.v,r),e&V?Z(a.i,s):a.i=s}function ta(a,r,s,e,f,l,u,c,d){var E=$;try{var h=(d&F)!==0,i=(d&ha)===0,N=h?i?pa(f):x(f):f,_=d&V?x(u):u,p={i:_,v:N,k:l,a:null,e:null,prev:s,next:e};return $=p,p.e=D(()=>c(a,N,_),T),p.e.prev=s&&s.e,p.e.next=e&&e.e,s===null?r.first=p:(s.next=p,s.e.next=p.e),e!==null&&(e.prev=p,e.e.prev=p.e),p}finally{$=E}}function ra(a,r,s){for(var e=a.next?a.next.e.nodes_start:s,f=r?r.e.nodes_start:s,l=a.e.nodes_start;l!==e;){var u=fa(l);f.before(l),l=u}}function b(a,r,s){r===null?a.first=s:(r.next=s,r.e.next=s&&s.e),s!==null&&(s.prev=r,s.e.prev=r&&r.e)}function qa(a,r,s,e,f){var l=a,u="",c;B(()=>{if(u===(u=r()??"")){T&&P();return}c!==void 0&&(W(c),c=void 0),u!==""&&(c=D(()=>{if(T){w.data;for(var d=P(),E=d;d!==null&&(d.nodeType!==8||d.data!=="");)E=d,d=fa(d);if(d===null)throw Ta(),ya;m(w,E),l=O(d);return}var h=u+"";s?h=`<svg>${h}</svg>`:e&&(h=`<math>${h}</math>`);var i=Ca(h);if((s||e)&&(i=L(i)),m(L(i),i.lastChild),s||e)for(;L(i);)l.before(L(i));else l.before(i)}))})}function Ga(a,r,...s){var e=a,f=ba,l;B(()=>{f!==(f=r())&&(l&&(W(l),l=null),l=D(()=>f(e,...s)))},Ia),T&&(e=w)}function $a(a,r){if(r){const s=document.body;a.autofocus=!0,Y(()=>{document.activeElement===s&&a.focus()})}}function Pa(a,r,s,e){var f=a.__attributes??(a.__attributes={});T&&(f[r]=a.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&a.nodeName==="LINK")||f[r]!==(f[r]=s)&&(r==="loading"&&(a[wa]=s),s==null?a.removeAttribute(r):typeof s!="string"&&la(a).includes(r)?a[r]=s:a.setAttribute(r,s))}function Ka(a,r,s,e,f=!1,l=!1,u=!1){var c=r||{},d=a.tagName==="OPTION";for(var E in r)E in s||(s[E]=null);e!==void 0&&(s.class=s.class?s.class+" "+e:e);var h=la(a),i=a.__attributes??(a.__attributes={}),N=[];for(const o in s){let t=s[o];if(d&&o==="value"&&t==null){a.value=a.__value="",c[o]=t;continue}var _=c[o];if(t!==_){c[o]=t;var p=o[0]+o[1];if(p!=="$$")if(p==="on"){const n={},v="$$"+o;let y=o.slice(2);var A=Ha(y);if(La(y)&&(y=y.slice(0,-7),n.capture=!0),!A&&_){if(t!=null)continue;a.removeEventListener(y,c[v],n),c[v]=null}if(t!=null)if(A)a[`__${y}`]=t,Oa([y]);else{let R=function(I){c[o].call(this,I)};r?c[v]=aa(y,a,R,n):N.push([o,t,()=>c[v]=aa(y,a,R,n)])}}else if(o==="style"&&t!=null)a.style.cssText=t+"";else if(o==="autofocus")$a(a,!!t);else if(o==="__value"||o==="value"&&t!=null)a.value=a[o]=a.__value=t;else{var g=o;f||(g=Da(g)),t==null&&!l?(i[o]=null,a.removeAttribute(o)):h.includes(g)&&(l||typeof t!="string")?a[g]=t:typeof t!="function"&&(T&&(g==="src"||g==="href"||g==="srcset")||Pa(a,g,t))}}}return r||Y(()=>{if(a.isConnected)for(const[o,t,n]of N)c[o]===t&&n()}),c}var sa=new Map;function la(a){var r=sa.get(a.nodeName);if(r)return r;sa.set(a.nodeName,r=[]);for(var s,e=j(a);e.constructor.name!=="Element";){s=Ra(e);for(var f in s)s[f].set&&r.push(f);e=j(e)}return r}function za(a,r){var s=a.__className,e=Ba(r);T&&a.className===e?a.__className=e:(s!==e||T&&a.className!==e)&&(r==null?a.removeAttribute("class"):a.className=e,a.__className=e)}function Ba(a){return a??""}function Ja(a,r,s){if(s){if(a.classList.contains(r))return;a.classList.add(r)}else{if(!a.classList.contains(r))return;a.classList.remove(r)}}function Ua(a,r,s,e,f){var l=a.__attributes??(a.__attributes={}),u=a.style,c="style-"+r;l[c]===s&&(!f||u.getPropertyValue(r)===s)||(l[c]=s,s==null?u.removeProperty(r):u.setProperty(r,s,e?"important":""))}const Xa=(a,r)=>!r||!a.startsWith(r)?a:a.substring(r.length),Qa=(a,r)=>!r||!a.endsWith(r)?a:a.substring(0,a.length-r.length),Za=(a,r)=>a.endsWith(r)?a:a+r;export{Xa as a,Qa as b,Wa as c,Ka as d,Za as e,Ua as f,Ga as g,qa as h,Va as i,za as j,Pa as s,Ja as t};