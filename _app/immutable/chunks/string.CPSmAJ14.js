import{q as aa,a1 as la,x as P,a2 as sa,y as T,B as D,z as B,w as ua,a3 as ra,H as _a,A as X,C as k,I as R,a4 as H,D as ea,F as S,G as oa,m as J,a5 as Y,a6 as q,a7 as va,a8 as ca,a9 as da,aa as F,ab as L,ac as ha,ad as pa,ae as ga,af as Ea,ag as ia,ah as ya,ai as Aa,E as Na,aj as Ta,ak as wa,v as Ia,al as Ra}from"./runtime.BNSBLXG_.js";import{l as Q,m as ba,d as Z,n as x,o as Ca,p as La,q as Oa,r as Da,v as Ha,w as Sa}from"./disclose-version.9B9dBOoN.js";function Ma(a,s){if(s){const r=document.body;a.autofocus=!0,aa(()=>{document.activeElement===r&&a.focus()})}}function Wa(a,s){return s}function $a(a,s,r,e){for(var n=[],t=s.length,v=0;v<t;v++)va(s[v].e,n,!0);var _=t>0&&n.length===0&&r!==null;if(_){var p=r.parentNode;ca(p),p.append(r),e.clear(),I(a,s[0].prev,s[t-1].next)}da(n,()=>{for(var g=0;g<t;g++){var c=s[g];_||(e.delete(c.k),I(a,c.prev,c.next)),F(c.e,!_)}})}function za(a,s,r,e,n,t=null){var v=a,_={flags:s,items:new Map,first:null},p=(s&sa)!==0;if(p){var g=a;v=T?D(L(g)):g.appendChild(la())}T&&B();var c=null,E=!1;P(()=>{var f=r(),h=ua(f)?f:f==null?[]:ra(f),o=h.length;if(E&&o===0)return;E=o===0;let y=!1;if(T){var l=v.data===_a;l!==(o===0)&&(v=X(),D(v),k(!1),y=!0)}if(T){for(var u=null,N,A=0;A<o;A++){if(R.nodeType===8&&R.data===ha){v=R,y=!0,k(!1);break}var i=h[A],d=e(i,A);N=na(R,_,u,null,i,d,A,n,s),_.items.set(d,N),u=N}o>0&&D(X())}if(!T){var b=pa;ka(h,_,v,n,s,(b.f&H)!==0,e)}t!==null&&(o===0?c?ea(c):c=S(()=>t(v)):c!==null&&oa(c,()=>{c=null})),y&&k(!0),r()}),T&&(v=R)}function ka(a,s,r,e,n,t,v){var z,G,V,K;var _=(n&ga)!==0,p=(n&(Y|q))!==0,g=a.length,c=s.items,E=s.first,f=E,h,o=null,y,l=[],u=[],N,A,i,d;if(_)for(d=0;d<g;d+=1)N=a[d],A=v(N,d),i=c.get(A),i!==void 0&&((z=i.a)==null||z.measure(),(y??(y=new Set)).add(i));for(d=0;d<g;d+=1){if(N=a[d],A=v(N,d),i=c.get(A),i===void 0){var b=f?f.e.nodes_start:r;o=na(b,s,o,o===null?s.first:o.next,N,A,d,e,n),c.set(A,o),l=[],u=[],f=o.next;continue}if(p&&Ba(i,N,d,n),i.e.f&H&&(ea(i.e),_&&((G=i.a)==null||G.unfix(),(y??(y=new Set)).delete(i))),i!==f){if(h!==void 0&&h.has(i)){if(l.length<u.length){var O=u[0],w;o=O.prev;var W=l[0],M=l[l.length-1];for(w=0;w<l.length;w+=1)j(l[w],O,r);for(w=0;w<u.length;w+=1)h.delete(u[w]);I(s,W.prev,M.next),I(s,o,W),I(s,M,O),f=O,o=M,d-=1,l=[],u=[]}else h.delete(i),j(i,f,r),I(s,i.prev,i.next),I(s,i,o===null?s.first:o.next),I(s,o,i),o=i;continue}for(l=[],u=[];f!==null&&f.k!==A;)(t||!(f.e.f&H))&&(h??(h=new Set)).add(f),u.push(f),f=f.next;if(f===null)continue;i=f}l.push(i),o=i,f=i.next}if(f!==null||h!==void 0){for(var C=h===void 0?[]:ra(h);f!==null;)(t||!(f.e.f&H))&&C.push(f),f=f.next;var $=C.length;if($>0){var ta=n&sa&&g===0?r:null;if(_){for(d=0;d<$;d+=1)(V=C[d].a)==null||V.measure();for(d=0;d<$;d+=1)(K=C[d].a)==null||K.fix()}$a(s,C,ta,c)}}_&&aa(()=>{var U;if(y!==void 0)for(i of y)(U=i.a)==null||U.apply()}),J.first=s.first&&s.first.e,J.last=o&&o.e}function Ba(a,s,r,e){e&Y&&Q(a.v,s),e&q?Q(a.i,r):a.i=r}function na(a,s,r,e,n,t,v,_,p){var g=(p&Y)!==0,c=(p&Ea)===0,E=g?c?ba(n):Z(n):n,f=p&q?Z(v):v,h={i:f,v:E,k:t,a:null,e:null,prev:r,next:e};try{return h.e=S(()=>_(a,E,f),T),h.e.prev=r&&r.e,h.e.next=e&&e.e,r===null?s.first=h:(r.next=h,r.e.next=h.e),e!==null&&(e.prev=h,e.e.prev=h.e),h}finally{}}function j(a,s,r){for(var e=a.next?a.next.e.nodes_start:r,n=s?s.e.nodes_start:r,t=a.e.nodes_start;t!==e;){var v=ia(t);n.before(t),t=v}}function I(a,s,r){s===null?a.first=r:(s.next=r,s.e.next=r&&r.e),r!==null&&(r.prev=s,r.e.prev=s&&s.e)}function Ga(a,s,r,e,n){var t=a,v="",_;P(()=>{if(v===(v=s()??"")){T&&B();return}_!==void 0&&(F(_),_=void 0),v!==""&&(_=S(()=>{if(T){R.data;for(var p=B(),g=p;p!==null&&(p.nodeType!==8||p.data!=="");)g=p,p=ia(p);if(p===null)throw ya(),Aa;x(R,g),t=D(p);return}var c=v+"";r?c=`<svg>${c}</svg>`:e&&(c=`<math>${c}</math>`);var E=Ca(c);if((r||e)&&(E=L(E)),x(L(E),E.lastChild),r||e)for(;L(E);)t.before(L(E));else t.before(E)}))})}function Va(a,s,...r){var e=a,n=Ta,t;P(()=>{n!==(n=s())&&(t&&(F(t),t=null),t=S(()=>n(e,...r)))},Na),T&&(e=R)}function Pa(a,s,r,e){var n=a.__attributes??(a.__attributes={});T&&(n[s]=a.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&a.nodeName==="LINK")||n[s]!==(n[s]=r)&&(s==="style"&&"__styles"in a&&(a.__styles={}),s==="loading"&&(a[wa]=r),r==null?a.removeAttribute(s):typeof r!="string"&&fa(a).includes(s)?a[s]=r:a.setAttribute(s,r))}function Ka(a,s,r,e,n=!1,t=!1,v=!1){var _=s||{},p=a.tagName==="OPTION";for(var g in s)g in r||(r[g]=null);e!==void 0&&(r.class=r.class?r.class+" "+e:e);var c=fa(a),E=a.__attributes??(a.__attributes={});for(const l in r){let u=r[l];if(p&&l==="value"&&u==null){a.value=a.__value="",_[l]=u;continue}var f=_[l];if(u!==f){_[l]=u;var h=l[0]+l[1];if(h!=="$$"){if(h==="on"){const N={},A="$$"+l;let i=l.slice(2);var o=Sa(i);if(La(i)&&(i=i.slice(0,-7),N.capture=!0),!o&&f){if(u!=null)continue;a.removeEventListener(i,_[A],N),_[A]=null}if(u!=null)if(o)a[`__${i}`]=u,Da([i]);else{let d=function(b){_[l].call(this,b)};_[A]=Oa(i,a,d,N)}else o&&(a[`__${i}`]=void 0)}else if(l==="style"&&u!=null)a.style.cssText=u+"";else if(l==="autofocus")Ma(a,!!u);else if(l==="__value"||l==="value"&&u!=null)a.value=a[l]=a.__value=u;else{var y=l;n||(y=Ha(y)),u==null&&!t?(E[l]=null,a.removeAttribute(l)):c.includes(y)&&(t||typeof u!="string")?a[y]=u:typeof u!="function"&&(T&&(y==="src"||y==="href"||y==="srcset")||Pa(a,y,u))}l==="style"&&"__styles"in a&&(a.__styles={})}}}return _}var m=new Map;function fa(a){var s=m.get(a.nodeName);if(s)return s;m.set(a.nodeName,s=[]);for(var r,e=a,n=Element.prototype;n!==e;){r=Ra(e);for(var t in r)r[t].set&&s.push(t);e=Ia(e)}return s}function Ua(a,s){var r=a.__className,e=Ya(s);T&&a.className===e?a.__className=e:(r!==e||T&&a.className!==e)&&(s==null?a.removeAttribute("class"):a.className=e,a.__className=e)}function Ya(a){return a??""}function Xa(a,s,r){if(r){if(a.classList.contains(s))return;a.classList.add(s)}else{if(!a.classList.contains(s))return;a.classList.remove(s)}}function Ja(a,s,r,e){var n=a.__styles??(a.__styles={});n[s]!==r&&(n[s]=r,r==null?a.style.removeProperty(s):a.style.setProperty(s,r,e?"important":""))}const Qa=(a,s)=>!s||!a.startsWith(s)?a:a.substring(s.length),Za=(a,s)=>!s||!a.endsWith(s)?a:a.substring(0,a.length-s.length),xa=(a,s)=>a.endsWith(s)?a:a+s;export{Qa as a,Za as b,za as c,Ka as d,xa as e,Ja as f,Va as g,Ga as h,Wa as i,Ua as j,Pa as s,Xa as t};
