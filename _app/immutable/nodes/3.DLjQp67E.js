import{l as te,w as re,t as q,a as l,c as D,s as O,b as sa}from"../chunks/IjHIH9ON.js";import{a3 as Wa,E as se,aA as ie,aB as ne,e as oe,u as ve,aC as le,V as ce,q as _e,B as ra,a0 as za,a1 as La,a2 as de,r as ue,z as ge,p as _a,t as z,b as da,d as v,g as o,s as w,f as L,G as i,$ as B,W as ha}from"../chunks/BkQbCUWC.js";import{p as fe,i as F,s as Pa,a as Ba}from"../chunks/DQWL-Nza.js";import{g as U,d as Sa,b as xa,c as Ta,a as R,e as ka,i as Aa,f as wa,s as oa}from"../chunks/BtjeXl0Y.js";import{s as pe}from"../chunks/CY9XWNCI.js";import{c as me,p as he,H as xe,L as ke,s as we,b as ma}from"../chunks/CN5Myjdt.js";import{b as be}from"../chunks/cDCqjjT3.js";const ye=()=>performance.now(),K={tick:s=>requestAnimationFrame(s),now:()=>ye(),tasks:new Set};function Ra(){const s=K.now();K.tasks.forEach(a=>{a.c(s)||(K.tasks.delete(a),a.f())}),K.tasks.size!==0&&K.tick(Ra)}function qe(s){let a;return K.tasks.size===0&&K.tick(Ra),{promise:new Promise(n=>{K.tasks.add(a={c:s,f:n})}),abort(){K.tasks.delete(a)}}}function ca(s,a){re(()=>{s.dispatchEvent(new CustomEvent(a))})}function je(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const a=s.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Na(s){const a={},n=s.split(";");for(const c of n){const[x,e]=c.split(":");if(!x||e===void 0)break;const b=je(x.trim());a[b]=e.trim()}return a}const Fe=s=>s;function Ee(s,a,n,c){var x=(s&le)!==0,e="both",b,T=a.inert,N=a.style.overflow,m,h;function y(){var C=de,f=Wa;za(null),La(null);try{return b??(b=n()(a,(c==null?void 0:c())??{},{direction:e}))}finally{za(C),La(f)}}var W={is_global:x,in(){a.inert=T,ca(a,"introstart"),m=ba(a,y(),h,1,()=>{ca(a,"introend"),m==null||m.abort(),m=b=void 0,a.style.overflow=N})},out(C){a.inert=!0,ca(a,"outrostart"),h=ba(a,y(),m,0,()=>{ca(a,"outroend"),C==null||C()})},stop:()=>{m==null||m.abort(),h==null||h.abort()}},j=Wa;if((j.transitions??(j.transitions=[])).push(W),te){var E=x;if(!E){for(var d=j.parent;d&&(d.f&se)!==0;)for(;(d=d.parent)&&(d.f&ie)===0;);E=!d||(d.f&ne)!==0}E&&oe(()=>{ve(()=>W.in())})}}function ba(s,a,n,c,x){var e=c===1;if(ce(a)){var b,T=!1;return _e(()=>{if(!T){var C=a({direction:e?"in":"out"});b=ba(s,C,n,c,x)}}),{abort:()=>{T=!0,b==null||b.abort()},deactivate:()=>b.deactivate(),reset:()=>b.reset(),t:()=>b.t()}}if(n==null||n.deactivate(),!(a!=null&&a.duration))return x(),{abort:ra,deactivate:ra,reset:ra,t:()=>c};const{delay:N=0,css:m,tick:h,easing:y=Fe}=a;var W=[];if(e&&n===void 0&&(h&&h(0,1),m)){var j=Na(m(0,1));W.push(j,j)}var E=()=>1-c,d=s.animate(W,{duration:N});return d.onfinish=()=>{var C=(n==null?void 0:n.t())??1-c;n==null||n.abort();var f=c-C,A=a.duration*Math.abs(f),I=[];if(A>0){var $=!1;if(m)for(var Q=Math.ceil(A/16.666666666666668),V=0;V<=Q;V+=1){var M=C+f*y(V/Q),P=Na(m(M,1-M));I.push(P),$||($=P.overflow==="hidden")}$&&(s.style.overflow="hidden"),E=()=>{var G=d.currentTime;return C+f*y(G/A)},h&&qe(()=>{if(d.playState!=="running")return!1;var G=E();return h(G,1-G),!0})}d=s.animate(I,{duration:A,fill:"forwards"}),d.onfinish=()=>{E=()=>c,h==null||h(c,1-c),x()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=ra)},deactivate:()=>{x=ra},reset:()=>{c===0&&(h==null||h(1,0))},t:()=>E()}}function Ce(s,a,n,c,x){var e=()=>{c(n[s])};n.addEventListener(a,e),x?ue(()=>{n[s]=x()}):e(),(n===document.body||n===window||n===document)&&ge(()=>{n.removeEventListener(a,e)})}const We=()=>{const s=pe;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Da={subscribe(s){return We().page.subscribe(s)}};function ze(s){const a=s-1;return a*a*a+1}function Le(s,{delay:a=0,duration:n=400,easing:c=ze,axis:x="y"}={}){const e=getComputedStyle(s),b=+e.opacity,T=x==="y"?"height":"width",N=parseFloat(e[T]),m=x==="y"?["top","bottom"]:["left","right"],h=m.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),y=parseFloat(e[`padding${h[0]}`]),W=parseFloat(e[`padding${h[1]}`]),j=parseFloat(e[`margin${h[0]}`]),E=parseFloat(e[`margin${h[1]}`]),d=parseFloat(e[`border${h[0]}Width`]),C=parseFloat(e[`border${h[1]}Width`]);return{delay:a,duration:n,easing:c,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*b};${T}: ${f*N}px;padding-${m[0]}: ${f*y}px;padding-${m[1]}: ${f*W}px;margin-${m[0]}: ${f*j}px;margin-${m[1]}: ${f*E}px;border-${m[0]}-width: ${f*d}px;border-${m[1]}-width: ${f*C}px;min-${T}: 0`}}var Se=q("<div><!></div>"),Te=q("<details><summary><!></summary> <!></details>");function Ae(s,a){_a(a,!0);let n=fe(a,"open",15);var c=Te();let x;var e=v(c);let b;var T=v(e);U(T,()=>a.summary),o(e);var N=w(e,2);{var m=y=>{var W=D(),j=L(W);U(j,()=>a.children),l(y,W)},h=(y,W)=>{{var j=E=>{var d=Se(),C=v(d);U(C,()=>a.children),o(d),Ee(3,d,()=>Le),l(E,d)};F(y,E=>{n()&&E(j)},W)}};F(N,y=>{a.eager?y(m):y(h,!1)})}o(c),z(()=>{x=Sa(c,x,{...a.attrs}),b=Sa(e,b,{...a.summary_attrs})}),Ce("open","toggle",c,n,n),l(s,c),da()}var Ne=q('<div class="repo_name svelte-w7xguq"> <!></div>'),Oe=q('<div class="description svelte-w7xguq"> </div>'),Pe=q('<div class="motto svelte-w7xguq"> </div>'),Be=q('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Re=q('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a><img> </a></div>',1),De=q('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Ie=q('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),Me=q('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Ge=q('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),He=q('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Ue=q('<div class="logo svelte-w7xguq"><img></div>'),Je=q("<li> </li>"),Ke=q('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Ve=q('<li><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),Qe=q('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),Xe=q("<pre><code> </code></pre>"),Ye=q('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function Ze(s,a){_a(a,!0);const[n,c]=Pa(),x=()=>Ba(Da,"$page",n),e=B(()=>a.pkg.package_json),b=B(()=>a.pkg.src_json),T=B(()=>i(b).modules),N=B(()=>i(e).repository?xa(Ta(Ta(typeof i(e).repository=="string"?i(e).repository:i(e).repository.url,".git"),"/"),"git+"):null),m=B(()=>i(e).license&&i(N)?i(N)+"/blob/main/LICENSE":null),h=(t,r)=>t+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),y=B(()=>i(e).exports&&Object.keys(i(e).exports)),W=B(()=>i(e).exports?Object.keys(i(e).exports).map(t=>{const r=xa(t,"./");return r==="."?"index.js":r}):null);var j=Ye(),E=v(j),d=v(E),C=v(d),f=v(C),A=v(f);{var I=t=>{var r=D(),u=L(r);U(u,()=>a.repo_name,()=>a.pkg.repo_name),l(t,r)},$=t=>{var r=Ne(),u=v(r,!0),p=w(u);{var k=g=>{var _=sa();z(()=>O(_,` ${i(e).glyph??""}`)),l(g,_)};F(p,g=>{i(e).glyph&&g(k)})}o(r),z(()=>O(u,a.pkg.repo_name)),l(t,r)};F(A,t=>{a.repo_name?t(I):t($,!1)})}o(f);var Q=w(f,2);U(Q,()=>a.children??ra,()=>a.pkg);var V=w(Q,2);{var M=t=>{var r=D(),u=L(r);{var p=g=>{var _=D(),S=L(_);U(S,()=>a.description,()=>i(e).description),l(g,_)},k=g=>{var _=Oe(),S=v(_,!0);o(_),z(()=>O(S,i(e).description)),l(g,_)};F(u,g=>{a.description?g(p):g(k,!1)})}l(t,r)};F(V,t=>{i(e).description&&t(M)})}var P=w(V,2);{var G=t=>{var r=D(),u=L(r);{var p=g=>{var _=D(),S=L(_);U(S,()=>a.motto,()=>i(e).motto),l(g,_)},k=g=>{var _=Pe(),S=v(_,!0);o(_),z(()=>O(S,i(e).motto)),l(g,_)};F(u,g=>{a.motto?g(p):g(k,!1)})}l(t,r)};F(P,t=>{i(e).motto&&t(G)})}var aa=w(P,2);{var ia=t=>{var r=D(),u=L(r);{var p=g=>{var _=D(),S=L(_);U(S,()=>a.npm_url,()=>a.pkg.npm_url),l(g,_)},k=g=>{var _=Be(),S=v(_);o(_),z(()=>O(S,`npm i -D ${i(e).name??""}`)),l(g,_)};F(u,g=>{a.npm_url?g(p):g(k,!1)})}l(t,r)};F(aa,t=>{a.pkg.npm_url&&t(ia)})}var J=w(aa,2),X=v(J);{var ua=t=>{var r=D(),u=L(r);{var p=g=>{var _=D(),S=L(_);U(S,()=>a.homepage_url,()=>a.pkg.homepage_url),l(g,_)},k=g=>{var _=Re(),S=w(L(_),2),Y=v(S);let na;var Z=v(Y);Aa(Z,"",{},{width:"16px",height:"16px","margin-right":"var(--space_xs)"});var va=w(Z);o(Y),o(S),z((ea,ga)=>{na=oa(Y,1,"chip svelte-w7xguq",null,na,ea),R(Y,"href",a.pkg.homepage_url),R(Z,"src",a.pkg.logo_url),R(Z,"alt",a.pkg.logo_alt),O(va,` ${ga??""}`)},[()=>({selected:a.pkg.homepage_url===x().url.href}),()=>me(a.pkg.homepage_url)]),l(g,_)};F(u,g=>{a.homepage_url?g(p):g(k,!1)})}l(t,r)};F(X,t=>{a.pkg.homepage_url&&t(ua)})}var ya=w(X,2);{var Ia=t=>{var r=De(),u=w(L(r),2),p=v(u),k=v(p);o(p),o(u),z(()=>{R(p,"href",a.pkg.repo_url),O(k,`${a.pkg.owner_name??""}/${a.pkg.repo_name??""}`)}),l(t,r)};F(ya,t=>{a.pkg.repo_url&&t(Ia)})}var qa=w(ya,2);{var Ma=t=>{var r=Ie(),u=w(L(r),2),p=v(u),k=v(p,!0);o(p),o(u),z(()=>{R(p,"href",a.pkg.npm_url),O(k,i(e).name)}),l(t,r)};F(qa,t=>{a.pkg.npm_url&&t(Ma)})}var ja=w(qa,2);{var Ga=t=>{var r=Me(),u=w(L(r),2),p=v(u),k=v(p,!0);o(p),o(u),z(()=>{R(p,"href",a.pkg.changelog_url),O(k,i(e).version)}),l(t,r)};F(ja,t=>{a.pkg.changelog_url&&t(Ga)})}var Fa=w(ja,2);{var Ha=t=>{var r=Ge(),u=w(L(r),2),p=v(u),k=v(p,!0);o(p),o(u),z(()=>{R(p,"href",i(m)),O(k,i(e).license)}),l(t,r)};F(Fa,t=>{i(m)&&t(Ha)})}var Ua=w(Fa,2);{var Ja=t=>{var r=He(),u=w(L(r),2),p=v(u),k=w(p,2);o(u),z((g,_)=>{R(p,"href",`${g??""}.well-known/package.json`),R(k,"href",`${_??""}.well-known/src.json`)},[()=>ka(a.pkg.homepage_url,"/"),()=>ka(a.pkg.homepage_url,"/")]),l(t,r)};F(Ua,t=>{a.pkg.homepage_url&&t(Ja)})}o(J),o(C),o(d);var Ka=w(d,2);{var Va=t=>{var r=Ue(),u=v(r);Aa(u,"",{},{width:"var(--size, var(--icon_size_xl2))",height:"var(--size, var(--icon_size_xl2))"}),o(r),z(()=>{R(u,"src",a.pkg.logo_url),R(u,"alt",a.pkg.logo_alt)}),l(t,r)};F(Ka,t=>{a.pkg.logo_url&&t(Va)})}o(E);var Ea=w(E,2);{var Qa=t=>{var r=Qe(),u=v(r);wa(u,22,()=>i(W),p=>p,(p,k,g)=>{var _=Ve();const S=B(()=>h(a.pkg.repo_url,k)),Y=B(()=>{var H;return(H=i(y))==null?void 0:H[i(g)]}),na=B(()=>{var H;return i(Y)?(H=i(T))==null?void 0:H[i(Y)]:void 0});let Z;var va=v(_),ea=v(va),ga=v(ea,!0);o(ea);var Ya=w(ea,2);{var Za=H=>{var ta=Ke();wa(ta,21,()=>i(na).declarations,({name:fa,kind:pa})=>fa,(fa,pa)=>{let $a=()=>i(pa).name,ae=()=>i(pa).kind;var la=Je(),ee=v(la,!0);o(la),z(()=>{oa(la,1,`declaration chip ${ae()??""}_declaration`,"svelte-w7xguq"),O(ee,$a())}),l(fa,la)}),o(ta),l(H,ta)};F(Ya,H=>{var ta;(ta=i(na))!=null&&ta.declarations.length&&H(Za)})}o(va),o(_),z(H=>{Z=oa(_,1,"module svelte-w7xguq",null,Z,H),R(ea,"href",i(S)),O(ga,k)},[()=>({ts:k.endsWith(".js"),svelte:k.endsWith(".svelte"),css:k.endsWith(".css"),json:k.endsWith(".json")})]),l(p,_)}),o(u),o(r),l(t,r)};F(Ea,t=>{i(W)&&a.pkg.repo_url&&t(Qa)})}var Ca=w(Ea,2),Xa=v(Ca);Ae(Xa,{summary:r=>{ha();var u=sa("raw package metadata");l(r,u)},children:(r,u)=>{var p=Xe(),k=v(p),g=v(k,!0);o(k),o(p),z(_=>O(g,_),[()=>JSON.stringify(a.pkg,null,"	")]),l(r,p)},$$slots:{summary:!0,default:!0}}),o(Ca),o(j),l(s,j),da(),c()}const $e=s=>s.split("/").filter(a=>a&&a!=="."&&a!==".."),at=s=>{const a=[],n=$e(s);n.length&&a.push({type:"separator",path:"/"});let c="";for(let x=0;x<n.length;x++){const e=n[x];c+="/"+e,a.push({type:"piece",name:e,path:c}),x!==n.length-1&&a.push({type:"separator",path:c})}return a};var et=q("<a> </a>"),tt=q('<span class="separator svelte-c9k2g"><!></span>'),rt=q('<div class="breadcrumb svelte-c9k2g"><a><!></a><!></div>');function Oa(s,a){_a(a,!0);const[n,c]=Pa(),x=()=>Ba(Da,"$page",n),e=B(()=>a.base_path??be),b=B(()=>a.path??xa(x().url.pathname,i(e))),T=B(()=>a.selected_path===null?null:a.selected_path??i(b)),N=B(()=>at(i(b))),m=B(()=>ka(i(e),"/"));var h=rt(),y=v(h);let W;var j=v(y);{var E=f=>{var A=D(),I=L(A);U(I,()=>a.children),l(f,A)},d=f=>{var A=sa("•");l(f,A)};F(j,f=>{a.children?f(E):f(d,!1)})}o(y);var C=w(y);wa(C,16,()=>i(N),f=>f,(f,A)=>{var I=D(),$=L(I);{var Q=M=>{var P=et();let G;var aa=v(P,!0);o(P),z(ia=>{R(P,"href",i(e)+A.path),G=oa(P,1,"svelte-c9k2g",null,G,ia),O(aa,A.name)},[()=>({selected:A.path===i(T)})]),l(M,P)},V=M=>{var P=tt(),G=v(P);{var aa=J=>{var X=D(),ua=L(X);U(ua,()=>a.separator),l(J,X)},ia=J=>{var X=sa("/");l(J,X)};F(G,J=>{a.separator?J(aa):J(ia,!1)})}o(P),l(M,P)};F($,M=>{A.type==="piece"?M(Q):M(V,!1)})}l(f,I)}),o(h),z(f=>{R(y,"href",i(m)),W=oa(y,1,"svelte-c9k2g",null,W,f)},[()=>({selected:i(m)===i(e)+i(T)})]),l(s,h),da(),c()}var st=q('<div class="mb_xl"><!></div>'),it=q('<main class="width_md svelte-aa2n4y"><section class="box"><!> <div class="mt_xl3"><!></div></section> <section class="box w_100 mb_lg"><div class="panel p_md width_md"><!></div></section> <section class="box"><!></section></main>');function ut(s,a){_a(a,!0);const n=he(ma,we);var c=it(),x=v(c),e=v(x);xe(e);var b=w(e,2),T=v(b);Oa(T,{children:(j,E)=>{ha();var d=sa();z(()=>O(d,ma.glyph)),l(j,d)},$$slots:{default:!0}}),o(b),o(x);var N=w(x,2),m=v(N),h=v(m);Ze(h,{pkg:n}),o(m),o(N);var y=w(N,2),W=v(y);ke(W,{pkg:n,children:(j,E)=>{var d=st(),C=v(d);Oa(C,{children:(f,A)=>{ha();var I=sa();z(()=>O(I,ma.glyph)),l(f,I)},$$slots:{default:!0}}),o(d),l(j,d)},$$slots:{default:!0}}),o(y),o(c),l(s,c),da()}export{ut as component};
