import{a5 as ua,C as P,a6 as sa,D as T,G as O,E as $,a7 as C,B as oa,a8 as ea,H as ca,F as U,I as S,M as b,a9 as va,J as ia,K as D,L as _a,aa as da,q as B,y as X,ab as Y,j as Q,ac as F,ad as ha,m as pa,v as Z,ae as ga,af as Ea,ag as Na,ah as V,ai as Aa,aj as na,ak as Ta,al as ya,N as Ia,n as ba,am as wa,A as x,an as Ra}from"./runtime.BXnGeDaX.js";import{d as j,e as Ca,i as La,f as m,g as Oa,n as Da,j as Ha}from"./disclose-version.CNEirw6w.js";let k=null;function Va(a,r){return r}function Ma(a,r,s,e){for(var f=[],o=r.length,i=0;i<o;i++)ga(r[i].e,f,!0);var p=o>0&&f.length===0&&s!==null;if(p){var _=s.parentNode;Ea(_),_.append(s),e.clear(),I(a,r[0].prev,r[o-1].next)}Na(f,()=>{for(var E=0;E<o;E++){var d=r[E];p||(e.delete(d.k),I(a,d.prev,d.next)),V(d.e,!p)}})}function Wa(a,r,s,e,f,o=null){var i=a,p={flags:r,items:new Map,first:null},_=(r&sa)!==0;if(_){var E=a;i=T?O(C(E)):E.appendChild(ua())}T&&$();var d=null;P(()=>{var n=s(),A=oa(n)?n:n==null?[]:ea(n),v=A.length;let h=!1;if(T){var g=i.data===ca;g!==(v===0)&&(i=U(),O(i),S(!1),h=!0)}if(T){for(var u=null,c,N=0;N<v;N++){if(b.nodeType===8&&b.data===va){i=b,h=!0,S(!1);break}var t=A[N],l=e(t,N);c=fa(b,p,u,null,t,l,N,f,r),p.items.set(l,c),u=c}v>0&&O(U())}T||Sa(A,p,i,f,r,e),o!==null&&(v===0?d?ia(d):d=D(()=>o(i)):d!==null&&_a(d,()=>{d=null})),h&&S(!0)}),T&&(i=b)}function Sa(a,r,s,e,f,o){var q,G,K,z;var i=(f&Aa)!==0,p=(f&(Y|F))!==0,_=a.length,E=r.items,d=r.first,n=d,A,v=null,h,g=[],u=[],c,N,t,l;if(i)for(l=0;l<_;l+=1)c=a[l],N=o(c,l),t=E.get(N),t!==void 0&&((q=t.a)==null||q.measure(),(h??(h=new Set)).add(t));for(l=0;l<_;l+=1){if(c=a[l],N=o(c,l),t=E.get(N),t===void 0){var L=n?n.e.nodes_start:s;v=fa(L,r,v,v===null?r.first:v.next,c,N,l,e,f),E.set(N,v),g=[],u=[],n=v.next;continue}if(p&&ka(t,c,l,f),t.e.f&da&&(ia(t.e),i&&((G=t.a)==null||G.unfix(),(h??(h=new Set)).delete(t))),t!==n){if(A!==void 0&&A.has(t)){if(g.length<u.length){var w=u[0],y;v=w.prev;var W=g[0],H=g[g.length-1];for(y=0;y<g.length;y+=1)aa(g[y],w,s);for(y=0;y<u.length;y+=1)A.delete(u[y]);I(r,W.prev,H.next),I(r,v,W),I(r,H,w),n=w,v=H,l-=1,g=[],u=[]}else A.delete(t),aa(t,n,s),I(r,t.prev,t.next),I(r,t,v===null?r.first:v.next),I(r,v,t),v=t;continue}for(g=[],u=[];n!==null&&n.k!==N;)(A??(A=new Set)).add(n),u.push(n),n=n.next;if(n===null)continue;t=n}g.push(t),v=t,n=t.next}if(n!==null||A!==void 0){for(var R=A===void 0?[]:ea(A);n!==null;)R.push(n),n=n.next;var M=R.length;if(M>0){var la=f&sa&&_===0?s:null;if(i){for(l=0;l<M;l+=1)(K=R[l].a)==null||K.measure();for(l=0;l<M;l+=1)(z=R[l].a)==null||z.fix()}Ma(r,R,la,E)}}i&&B(()=>{var J;if(h!==void 0)for(t of h)(J=t.a)==null||J.apply()}),X.first=r.first&&r.first.e,X.last=v&&v.e}function ka(a,r,s,e){e&Y&&Q(a.v,r),e&F?Q(a.i,s):a.i=s}function fa(a,r,s,e,f,o,i,p,_){var E=k;try{var d=(_&Y)!==0,n=(_&ha)===0,A=d?n?pa(f):Z(f):f,v=_&F?Z(i):i,h={i:v,v:A,k:o,a:null,e:null,prev:s,next:e};return k=h,h.e=D(()=>p(a,A,v),T),h.e.prev=s&&s.e,h.e.next=e&&e.e,s===null?r.first=h:(s.next=h,s.e.next=h.e),e!==null&&(e.prev=h,e.e.prev=h.e),h}finally{k=E}}function aa(a,r,s){for(var e=a.next?a.next.e.nodes_start:s,f=r?r.e.nodes_start:s,o=a.e.nodes_start;o!==e;){var i=na(o);f.before(o),o=i}}function I(a,r,s){r===null?a.first=s:(r.next=s,r.e.next=s&&s.e),s!==null&&(s.prev=r,s.e.prev=r&&r.e)}function qa(a,r,s,e,f){var o=a,i="",p;P(()=>{if(i===(i=r()??"")){T&&$();return}p!==void 0&&(V(p),p=void 0),i!==""&&(p=D(()=>{if(T){b.data;for(var _=$(),E=_;_!==null&&(_.nodeType!==8||_.data!=="");)E=_,_=na(_);if(_===null)throw Ta(),ya;j(b,E),o=O(_);return}var d=i+"";s?d=`<svg>${d}</svg>`:e&&(d=`<math>${d}</math>`);var n=Ca(d);if((s||e)&&(n=C(n)),j(C(n),n.lastChild),s||e)for(;C(n);)o.before(C(n));else o.before(n)}))})}function Ga(a,r,...s){var e=a,f=ba,o;P(()=>{f!==(f=r())&&(o&&(V(o),o=null),o=D(()=>f(e,...s)))},Ia),T&&(e=b)}function $a(a,r){if(r){const s=document.body;a.autofocus=!0,B(()=>{document.activeElement===s&&a.focus()})}}function Pa(a,r,s,e){var f=a.__attributes??(a.__attributes={});T&&(f[r]=a.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&a.nodeName==="LINK")||f[r]!==(f[r]=s)&&(r==="loading"&&(a[wa]=s),s==null?a.removeAttribute(r):typeof s!="string"&&ta(a).includes(r)?a[r]=s:a.setAttribute(r,s))}function Ka(a,r,s,e,f=!1,o){var i=r||{},p=a.tagName==="OPTION";for(var _ in r)_ in s||(s[_]=null);e!==void 0&&(s.class=s.class?s.class+" "+e:e);var E=ra.get(a.nodeName);E||ra.set(a.nodeName,E=ta(a));var d=a.__attributes??(a.__attributes={}),n=[];for(const u in s){let c=s[u];if(p&&u==="value"&&c==null){a.value=a.__value="",i[u]=c;continue}var A=i[u];if(c!==A){i[u]=c;var v=u[0]+u[1];if(v!=="$$")if(v==="on"){const N={},t="$$"+u;let l=u.slice(2);var h=Ha(l);if(La(l)&&(l=l.slice(0,-7),N.capture=!0),!h&&A){if(c!=null)continue;a.removeEventListener(l,i[t],N),i[t]=null}if(c!=null)if(h)a[`__${l}`]=c,Oa([l]);else{let L=function(w){i[u].call(this,w)};r?i[t]=m(l,a,L,N):n.push([u,c,()=>i[t]=m(l,a,L,N)])}}else if(c==null)d[u]=null,a.removeAttribute(u);else if(u==="style")a.style.cssText=c+"";else if(u==="autofocus")$a(a,!!c);else if(u==="__value"||u==="value")a.value=a[u]=a.__value=c;else{var g=u;f||(g=Da(g)),E.includes(g)&&typeof c!="string"?a[g]=c:typeof c!="function"&&(T&&(g==="src"||g==="href"||g==="srcset")||Pa(a,g,c))}}}return r||B(()=>{if(a.isConnected)for(const[u,c,N]of n)i[u]===c&&N()}),i}var ra=new Map;function ta(a){for(var r=[],s,e=x(a);e.constructor.name!=="Element";){s=Ra(e);for(var f in s)s[f].set&&r.push(f);e=x(e)}return r}function za(a,r){var s=a.__className,e=Ba(r);T&&a.className===e?a.__className=e:(s!==e||T&&a.className!==e)&&(r==null?a.removeAttribute("class"):a.className=e,a.__className=e)}function Ba(a){return a??""}function Ja(a,r,s){if(s){if(a.classList.contains(r))return;a.classList.add(r)}else{if(!a.classList.contains(r))return;a.classList.remove(r)}}function Ua(a,r,s,e,f){var o=a.__attributes??(a.__attributes={}),i=a.style,p="style-"+r;o[p]===s&&(!f||i.getPropertyValue(r)===s)||(o[p]=s,s==null?i.removeProperty(r):i.setProperty(r,s,e?"important":""))}const Xa=(a,r)=>!r||!a.startsWith(r)?a:a.substring(r.length),Qa=(a,r)=>!r||!a.endsWith(r)?a:a.substring(0,a.length-r.length),Za=(a,r)=>a.endsWith(r)?a:a+r;export{Xa as a,Qa as b,Wa as c,Ka as d,Za as e,Ua as f,Ga as g,qa as h,Va as i,za as j,Pa as s,Ja as t};
