import{q as re,a9 as ce,A as P,ao as ae,B as N,F as k,C as B,z as oe,am as se,H as ve,D as X,G as V,L as C,ap as D,I as ie,J as H,K as _e,w as Q,aq as Y,ar as Z,as as q,at as de,al as he,au as pe,av as z,ad as L,ai as ge,a8 as ye,aw as Ae,O as Ee,i as j,ax as Ne,ac as te,aj as Te,ah as be,E as we,M as Ie,ay as Ce,y as Re,az as Le}from"./runtime.Bc4Rs81V.js";import{d as x,e as Oe,i as ke,f as De,g as He,j as Me,k as Se}from"./disclose-version.CLxORo2w.js";function $e(e,r){if(r){const a=document.body;e.autofocus=!0,re(()=>{document.activeElement===a&&e.focus()})}}function Je(e,r){return r}function Ve(e,r,a,s){for(var i=[],l=r.length,v=0;v<l;v++)de(r[v].e,i,!0);var p=l>0&&i.length===0&&a!==null;if(p){var _=a.parentNode;he(_),_.append(a),s.clear(),I(e,r[0].prev,r[l-1].next)}pe(i,()=>{for(var E=0;E<l;E++){var d=r[E];p||(s.delete(d.k),I(e,d.prev,d.next)),z(d.e,!p)}})}function Ue(e,r,a,s,i,l=null){var v=e,p={flags:r,items:new Map,first:null},_=(r&ae)!==0;if(_){var E=e;v=N?k(L(E)):E.appendChild(ce())}N&&B();var d=null,y=!1;P(()=>{var T=a(),u=oe(T)?T:T==null?[]:se(T),o=u.length;if(y&&o===0)return;y=o===0;let f=!1;if(N){var b=v.data===ve;b!==(o===0)&&(v=X(),k(v),V(!1),f=!0)}if(N){for(var n=null,c,g=0;g<o;g++){if(C.nodeType===8&&C.data===ge){v=C,f=!0,V(!1);break}var A=u[g],t=s(A,g);c=fe(C,p,n,null,A,t,g,i,r),p.items.set(t,c),n=c}o>0&&k(X())}if(!N){var h=ye;Be(u,p,v,i,r,(h.f&D)!==0,s)}l!==null&&(o===0?d?ie(d):d=H(()=>l(v)):d!==null&&_e(d,()=>{d=null})),f&&V(!0),a()}),N&&(v=C)}function Be(e,r,a,s,i,l,v,p){var W,G,K,J;var _=(i&Ae)!==0,E=(i&(Y|q))!==0,d=e.length,y=r.items,T=r.first,u=T,o,f=null,b,n=[],c=[],g,A,t,h;if(_)for(h=0;h<d;h+=1)g=e[h],A=v(g,h),t=y.get(A),t!==void 0&&((W=t.a)==null||W.measure(),(b??(b=new Set)).add(t));for(h=0;h<d;h+=1){if(g=e[h],A=v(g,h),t=y.get(A),t===void 0){var M=u?u.e.nodes_start:a;f=fe(M,r,f,f===null?r.first:f.next,g,A,h,s,i),y.set(A,f),n=[],c=[],u=f.next;continue}if(E&&Pe(t,g,h,i),t.e.f&D&&(ie(t.e),_&&((G=t.a)==null||G.unfix(),(b??(b=new Set)).delete(t))),t!==u){if(o!==void 0&&o.has(t)){if(n.length<c.length){var O=c[0],w;f=O.prev;var F=n[0],S=n[n.length-1];for(w=0;w<n.length;w+=1)m(n[w],O,a);for(w=0;w<c.length;w+=1)o.delete(c[w]);I(r,F.prev,S.next),I(r,f,F),I(r,S,O),u=O,f=S,h-=1,n=[],c=[]}else o.delete(t),m(t,u,a),I(r,t.prev,t.next),I(r,t,f===null?r.first:f.next),I(r,f,t),f=t;continue}for(n=[],c=[];u!==null&&u.k!==A;)(l||!(u.e.f&D))&&(o??(o=new Set)).add(u),c.push(u),u=u.next;if(u===null)continue;t=u}n.push(t),f=t,u=t.next}if(u!==null||o!==void 0){for(var R=o===void 0?[]:se(o);u!==null;)(l||!(u.e.f&D))&&R.push(u),u=u.next;var $=R.length;if($>0){var ue=i&ae&&d===0?a:null;if(_){for(h=0;h<$;h+=1)(K=R[h].a)==null||K.measure();for(h=0;h<$;h+=1)(J=R[h].a)==null||J.fix()}Ve(r,R,ue,y)}}_&&re(()=>{var U;if(b!==void 0)for(t of b)(U=t.a)==null||U.apply()}),Q.first=r.first&&r.first.e,Q.last=f&&f.e}function Pe(e,r,a,s){s&Y&&Z(e.v,r),s&q?Z(e.i,a):e.i=a}function fe(e,r,a,s,i,l,v,p,_,E){var d=(_&Y)!==0,y=(_&Ne)===0,T=d?y?Ee(i):j(i):i,u=_&q?j(v):v,o={i:u,v:T,k:l,a:null,e:null,prev:a,next:s};try{return o.e=H(()=>p(e,T,u),N),o.e.prev=a&&a.e,o.e.next=s&&s.e,a===null?r.first=o:(a.next=o,a.e.next=o.e),s!==null&&(s.prev=o,s.e.prev=o.e),o}finally{}}function m(e,r,a){for(var s=e.next?e.next.e.nodes_start:a,i=r?r.e.nodes_start:a,l=e.e.nodes_start;l!==s;){var v=te(l);i.before(l),l=v}}function I(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function Xe(e,r,a,s,i){var l=e,v="",p;P(()=>{if(v===(v=r()??"")){N&&B();return}p!==void 0&&(z(p),p=void 0),v!==""&&(p=H(()=>{if(N){C.data;for(var _=B(),E=_;_!==null&&(_.nodeType!==8||_.data!=="");)E=_,_=te(_);if(_===null)throw Te(),be;x(C,E),l=k(_);return}var d=v+"";a?d=`<svg>${d}</svg>`:s&&(d=`<math>${d}</math>`);var y=Oe(d);if((a||s)&&(y=L(y)),x(L(y),y.lastChild),a||s)for(;L(y);)l.before(L(y));else l.before(y)}))})}function Qe(e,r,...a){var s=e,i=Ie,l;P(()=>{i!==(i=r())&&(l&&(z(l),l=null),l=H(()=>i(s,...a)))},we),N&&(s=C)}function ne(e){var r,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(a=ne(e[r]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function Ye(){for(var e,r,a=0,s="",i=arguments.length;a<i;a++)(e=arguments[a])&&(r=ne(e))&&(s&&(s+=" "),s+=r);return s}function qe(e){return typeof e=="object"?Ye(e):e??""}function ze(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fe(e,r,a,s){var i=e.__attributes??(e.__attributes={});N&&(i[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||i[r]!==(i[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ce]=a),a==null?e.removeAttribute(r):typeof a!="string"&&le(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function Ze(e,r,a,s,i=!1,l=!1,v=!1){var p=r||{},_=e.tagName==="OPTION";for(var E in r)E in a||(a[E]=null);a.class&&(a.class=qe(a.class)),s!==void 0&&(a.class=a.class?a.class+" "+s:s);var d=le(e),y=e.__attributes??(e.__attributes={});for(const n in a){let c=a[n];if(_&&n==="value"&&c==null){e.value=e.__value="",p[n]=c;continue}var T=p[n];if(c!==T){p[n]=c;var u=n[0]+n[1];if(u!=="$$"){if(u==="on"){const g={},A="$$"+n;let t=n.slice(2);var o=Se(t);if(ke(t)&&(t=t.slice(0,-7),g.capture=!0),!o&&T){if(c!=null)continue;e.removeEventListener(t,p[A],g),p[A]=null}if(c!=null)if(o)e[`__${t}`]=c,He([t]);else{let h=function(M){p[n].call(this,M)};p[A]=De(t,e,h,g)}else o&&(e[`__${t}`]=void 0)}else if(n==="style"&&c!=null)e.style.cssText=c+"";else if(n==="autofocus")$e(e,!!c);else if(n==="__value"||n==="value"&&c!=null)e.value=e[n]=e.__value=c;else if(n==="selected"&&_)ze(e,c);else{var f=n;i||(f=Me(f));var b=f==="defaultValue"||f==="defaultChecked";if(c==null&&!l&&!b)if(y[n]=null,f==="value"||f==="checked"){let g=e;if(f==="value"){let A=g.defaultValue;g.removeAttribute(f),g.defaultValue=A}else{let A=g.defaultChecked;g.removeAttribute(f),g.defaultChecked=A}}else e.removeAttribute(n);else b||d.includes(f)&&(l||typeof c!="string")?e[f]=c:typeof c!="function"&&(N&&(f==="src"||f==="href"||f==="srcset")||Fe(e,f,c))}n==="style"&&"__styles"in e&&(e.__styles={})}}}return p}var ee=new Map;function le(e){var r=ee.get(e.nodeName);if(r)return r;ee.set(e.nodeName,r=[]);for(var a,s=e,i=Element.prototype;i!==s;){a=Le(s);for(var l in a)a[l].set&&r.push(l);s=Re(s)}return r}function je(e,r,a){var s=e.__className,i=We(r,a);N&&e.className===i?e.__className=i:(s!==i||N&&e.className!==i)&&(r==null&&!a?e.removeAttribute("class"):e.className=i,e.__className=i)}function We(e,r){return(e??"")+(r?" "+r:"")}function xe(e,r,a){if(a){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}function me(e,r,a,s){var i=e.__styles??(e.__styles={});i[r]!==a&&(i[r]=a,a==null?e.style.removeProperty(r):e.style.setProperty(r,a,s?"important":""))}const er=(e,r)=>!r||!e.startsWith(r)?e:e.substring(r.length),rr=(e,r)=>!r||!e.endsWith(r)?e:e.substring(0,e.length-r.length),ar=(e,r)=>e.endsWith(r)?e:e+r;export{er as a,rr as b,Ue as c,Ze as d,ar as e,me as f,Qe as g,Xe as h,Je as i,je as j,Fe as s,xe as t};