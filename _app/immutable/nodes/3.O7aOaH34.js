import{l as Da,a as l,t as F,c as P,b as Y,s as I}from"../chunks/disclose-version.CNEirw6w.js";import{N as Ua,av as Ha,aw as Ga,e as Ja,ax as Ka,y as Xa,u as Qa,_ as Va,q as Ya,n as V,ay as Za,az as $a,b as ae,h as ee,p as sa,t as j,a as na,f as C,c as v,r as i,s as y,i as t,$ as ra,X as S}from"../chunks/runtime.BXnGeDaX.js";import{p as te,i as T}from"../chunks/props.D4AreRSf.js";import{g as B,d as ka,s as L,t as X,f as Q,e as va,c as la,a as ca,i as qa,j as re,b as wa}from"../chunks/string.DW3M7GCq.js";import{s as ja,a as Fa,p as Ea}from"../chunks/stores._4_Cv0Vz.js";import{c as se,p as ne,H as ie,L as oe,s as ve,b as oa}from"../chunks/Header.B6riTJYE.js";import{b as le}from"../chunks/paths.iNIVCehh.js";const ce=requestAnimationFrame,_e=()=>performance.now(),G={tick:c=>ce(c),now:()=>_e(),tasks:new Set};function Na(c){G.tasks.forEach(a=>{a.c(c)||(G.tasks.delete(a),a.f())}),G.tasks.size!==0&&G.tick(Na)}function de(c){let a;return G.tasks.size===0&&G.tick(Na),{promise:new Promise(n=>{G.tasks.add(a={c,f:n})}),abort(){G.tasks.delete(a)}}}function ta(c,a){c.dispatchEvent(new CustomEvent(a))}function ge(c){const a=c.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function ya(c){const a={},n=c.split(";");for(const _ of n){const[e,d]=_.split(":");if(!e||d===void 0)break;const E=ge(e.trim());a[E]=d.trim()}return a}const ue=c=>c;function me(c,a,n,_){var e=(c&Ka)!==0,d=(c&Za)!==0,E=e&&d,z=(c&$a)!==0,A=E?"both":e?"in":"out",h,u=a.inert,x,k;function q(){return h??(h=n()(a,(_==null?void 0:_())??{},{direction:A}))}var b={is_global:z,in(){var w;if(a.inert=u,!e){k==null||k.abort(),(w=k==null?void 0:k.reset)==null||w.call(k);return}d||x==null||x.abort(),ta(a,"introstart"),x=_a(a,q(),k,1,()=>{ta(a,"introend"),x==null||x.abort(),x=h=void 0})},out(w){if(!d){w==null||w(),h=void 0;return}a.inert=!0,ta(a,"outrostart"),k=_a(a,q(),x,0,()=>{ta(a,"outroend"),w==null||w()})},stop:()=>{x==null||x.abort(),k==null||k.abort()}},p=Xa;if((p.transitions??(p.transitions=[])).push(b),e&&Da){var O=z;if(!O){for(var m=p.parent;m&&m.f&Ua;)for(;(m=m.parent)&&!(m.f&Ha););O=!m||(m.f&Ga)!==0}O&&Ja(()=>{Qa(()=>b.in())})}}function _a(c,a,n,_,e){var d=_===1;if(Va(a)){var E,z=!1;return Ya(()=>{if(!z){var O=a({direction:d?"in":"out"});E=_a(c,O,n,_,e)}}),{abort:()=>{z=!0,E==null||E.abort()},deactivate:()=>E.deactivate(),reset:()=>E.reset(),t:()=>E.t()}}if(n==null||n.deactivate(),!(a!=null&&a.duration))return e(),{abort:V,deactivate:V,reset:V,t:()=>_};const{delay:A=0,css:h,tick:u,easing:x=ue}=a;var k=[];if(d&&n===void 0&&(u&&u(0,1),h)){var q=ya(h(0,1));k.push(q,q)}var b=()=>1-_,p=c.animate(k,{duration:A});return p.onfinish=()=>{var O=(n==null?void 0:n.t())??1-_;n==null||n.abort();var m=_-O,w=a.duration*Math.abs(m),W=[];if(w>0){if(h)for(var U=Math.ceil(w/16.666666666666668),M=0;M<=U;M+=1){var J=O+m*x(M/U),Z=h(J,1-J);W.push(ya(Z))}b=()=>{var K=p.currentTime;return O+m*x(K/w)},u&&de(()=>{if(p.playState!=="running")return!1;var K=b();return u(K,1-K),!0})}p=c.animate(W,{duration:w,fill:"forwards"}),p.onfinish=()=>{b=()=>_,u==null||u(_,1-_),e()}},{abort:()=>{p&&(p.cancel(),p.effect=null)},deactivate:()=>{e=V},reset:()=>{_===0&&(u==null||u(1,0))},t:()=>b()}}function pe(c,a,n,_,e){var d=()=>{_(n[c])};n.addEventListener(a,d),e?ae(()=>{n[c]=e()}):d(),(n===document.body||n===window||n===document)&&ee(()=>{n.removeEventListener(a,d)})}function fe(c){const a=c-1;return a*a*a+1}function he(c,{delay:a=0,duration:n=400,easing:_=fe,axis:e="y"}={}){const d=getComputedStyle(c),E=+d.opacity,z=e==="y"?"height":"width",A=parseFloat(d[z]),h=e==="y"?["top","bottom"]:["left","right"],u=h.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),x=parseFloat(d[`padding${u[0]}`]),k=parseFloat(d[`padding${u[1]}`]),q=parseFloat(d[`margin${u[0]}`]),b=parseFloat(d[`margin${u[1]}`]),p=parseFloat(d[`border${u[0]}Width`]),O=parseFloat(d[`border${u[1]}Width`]);return{delay:a,duration:n,easing:_,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*E};${z}: ${m*A}px;padding-${h[0]}: ${m*x}px;padding-${h[1]}: ${m*k}px;margin-${h[0]}: ${m*q}px;margin-${h[1]}: ${m*b}px;border-${h[0]}-width: ${m*p}px;border-${h[1]}-width: ${m*O}px;`}}var xe=F("<div><!></div>"),ke=F("<details><summary><!></summary> <!></details>");function we(c,a){sa(a,!0);let n=te(a,"open",15);var _=ke();let e;var d=v(_);let E;var z=v(d);B(z,()=>a.summary),i(d);var A=y(d,2);T(A,()=>a.eager,h=>{var u=P(),x=C(u);B(x,()=>a.children),l(h,u)},h=>{var u=P(),x=C(u);T(x,n,k=>{var q=xe(),b=v(q);B(b,()=>a.children),i(q),me(3,q,()=>he),l(k,q)},null,!0),l(h,u)}),i(_),j(()=>{e=ka(_,e,{...a.attrs}),E=ka(d,E,{...a.summary_attrs})}),pe("open","toggle",_,n,n),l(c,_),na()}var ye=F('<div class="repo_name svelte-w7xguq"> <!></div>'),be=F('<div class="description svelte-w7xguq"> </div>'),qe=F('<div class="motto svelte-w7xguq"> </div>'),je=F('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Fe=F('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Ee=F('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Ne=F('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),Te=F('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Ce=F('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),Oe=F('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Se=F('<div class="logo svelte-w7xguq"><img></div>'),ze=F("<li> </li>"),Ae=F('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Ie=F('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),Le=F('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),Pe=F("raw data for <code>pkg: Package_Meta</code>",1),We=F("<pre><code> </code></pre>"),Re=F('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function Me(c,a){sa(a,!0);const n=ja(),_=()=>Fa(Ea,"$page",n),e=S(()=>a.pkg.package_json),d=S(()=>a.pkg.src_json),E=S(()=>t(d).modules),z=S(()=>t(e).repository?ca(wa(wa(typeof t(e).repository=="string"?t(e).repository:t(e).repository.url,".git"),"/"),"git+"):null),A=S(()=>t(e).license&&t(z)?t(z)+"/blob/main/LICENSE":null),h=(f,r)=>f+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),u=S(()=>t(e).exports&&Object.keys(t(e).exports)),x=S(()=>t(e).exports?Object.keys(t(e).exports).map(f=>{const r=ca(f,"./");return r==="."?"index.js":r}):null);var k=Re(),q=v(k),b=v(q),p=v(b),O=v(p),m=v(O);T(m,()=>a.repo_name,f=>{var r=P(),g=C(r);B(g,()=>a.repo_name,()=>a.pkg.repo_name),l(f,r)},f=>{var r=ye(),g=v(r),o=y(g);T(o,()=>t(e).glyph,s=>{var N=Y();j(()=>I(N,` ${t(e).glyph??""}`)),l(s,N)}),i(r),j(()=>I(g,a.pkg.repo_name)),l(f,r)}),i(O);var w=y(O,2);B(w,()=>a.children??V,()=>a.pkg);var W=y(w,2);T(W,()=>t(e).description,f=>{var r=P(),g=C(r);T(g,()=>a.description,o=>{var s=P(),N=C(s);B(N,()=>a.description,()=>t(e).description),l(o,s)},o=>{var s=be(),N=v(s);i(s),j(()=>I(N,t(e).description)),l(o,s)}),l(f,r)});var U=y(W,2);T(U,()=>t(e).motto,f=>{var r=P(),g=C(r);T(g,()=>a.motto,o=>{var s=P(),N=C(s);B(N,()=>a.motto,()=>t(e).motto),l(o,s)},o=>{var s=qe(),N=v(s);i(s),j(()=>I(N,t(e).motto)),l(o,s)}),l(f,r)});var M=y(U,2);T(M,()=>a.pkg.npm_url,f=>{var r=P(),g=C(r);T(g,()=>a.npm_url,o=>{var s=P(),N=C(s);B(N,()=>a.npm_url,()=>a.pkg.npm_url),l(o,s)},o=>{var s=je(),N=v(s);i(s),j(()=>I(N,`npm i -D ${t(e).name??""}`)),l(o,s)}),l(f,r)});var J=y(M,2),Z=v(J);T(Z,()=>a.pkg.homepage_url,f=>{var r=P(),g=C(r);T(g,()=>a.homepage_url,o=>{var s=P(),N=C(s);B(N,()=>a.homepage_url,()=>a.pkg.homepage_url),l(o,s)},o=>{var s=Fe(),N=y(C(s),2),R=v(N),H=v(R),$=y(H);j(()=>I($,` ${se(a.pkg.homepage_url)??""}`)),i(R),i(N),j(()=>{L(R,"href",a.pkg.homepage_url),X(R,"selected",a.pkg.homepage_url===_().url.href),L(H,"src",a.pkg.logo_url),L(H,"alt",a.pkg.logo_alt),Q(H,"width","16px"),Q(H,"height","16px"),Q(H,"margin-right","var(--space_xs)")}),l(o,s)}),l(f,r)});var K=y(Z,2);T(K,()=>a.pkg.repo_url,f=>{var r=Ee(),g=y(C(r),2),o=v(g),s=v(o);i(o),i(g),j(()=>{L(o,"href",a.pkg.repo_url),I(s,`${a.pkg.owner_name??""}/${a.pkg.repo_name??""}`)}),l(f,r)});var da=y(K,2);T(da,()=>a.pkg.npm_url,f=>{var r=Ne(),g=y(C(r),2),o=v(g),s=v(o);i(o),i(g),j(()=>{L(o,"href",a.pkg.npm_url),I(s,t(e).name)}),l(f,r)});var ga=y(da,2);T(ga,()=>a.pkg.changelog_url,f=>{var r=Te(),g=y(C(r),2),o=v(g),s=v(o);i(o),i(g),j(()=>{L(o,"href",a.pkg.changelog_url),I(s,t(e).version)}),l(f,r)});var ua=y(ga,2);T(ua,()=>t(A),f=>{var r=Ce(),g=y(C(r),2),o=v(g),s=v(o);i(o),i(g),j(()=>{L(o,"href",t(A)),I(s,t(e).license)}),l(f,r)});var Ta=y(ua,2);T(Ta,()=>a.pkg.homepage_url,f=>{var r=Oe(),g=y(C(r),2),o=v(g);j(()=>L(o,"href",`${va(a.pkg.homepage_url,"/")??""}.well-known/package.json`));var s=y(o,2);j(()=>L(s,"href",`${va(a.pkg.homepage_url,"/")??""}.well-known/src.json`)),i(g),l(f,r)}),i(J),i(p),i(b);var Ca=y(b,2);T(Ca,()=>a.pkg.logo_url,f=>{var r=Se(),g=v(r);i(r),j(()=>{L(g,"src",a.pkg.logo_url),L(g,"alt",a.pkg.logo_alt),Q(g,"width","var(--size, var(--icon_size_xl2))"),Q(g,"height","var(--size, var(--icon_size_xl2))")}),l(f,r)}),i(q);var ma=y(q,2);T(ma,()=>t(x)&&a.pkg.repo_url,f=>{var r=Le(),g=v(r);la(g,22,()=>t(x),o=>o,(o,s,N)=>{var R=Ie();const H=S(()=>h(a.pkg.repo_url,s)),$=S(()=>{var D;return(D=t(u))==null?void 0:D[t(N)]}),fa=S(()=>{var D;return t($)&&((D=t(E))==null?void 0:D[t($)])}),Sa=S(()=>s.endsWith(".js"));j(()=>X(R,"ts",t(Sa)));const za=S(()=>s.endsWith(".svelte"));j(()=>X(R,"svelte",t(za)));const Aa=S(()=>s.endsWith(".css"));j(()=>X(R,"css",t(Aa)));const Ia=S(()=>s.endsWith(".json"));j(()=>X(R,"json",t(Ia)));var ha=v(R),aa=v(ha),La=v(aa);i(aa);var Pa=y(aa,2);T(Pa,()=>{var D;return(D=t(fa))==null?void 0:D.declarations.length},D=>{var ia=Ae();la(ia,21,()=>t(fa).declarations,qa,(Wa,xa)=>{let Ra=()=>t(xa).name,Ma=()=>t(xa).kind;var ea=ze(),Ba=v(ea);i(ea),j(()=>{re(ea,`declaration chip ${Ma()??""}_declaration svelte-w7xguq`),I(Ba,Ra())}),l(Wa,ea)}),i(ia),l(D,ia)}),i(ha),i(R),j(()=>{L(aa,"href",t(H)),I(La,s)}),l(o,R)}),i(g),i(r),l(f,r)});var pa=y(ma,2),Oa=v(pa);we(Oa,{summary:r=>{ra();var g=Pe();ra(),l(r,g)},children:(r,g)=>{var o=We(),s=v(o),N=v(s);j(()=>I(N,JSON.stringify(a.pkg,null,"	"))),i(s),i(o),l(r,o)},$$slots:{default:!0}}),i(pa),i(k),l(c,k),na()}const Be=c=>c.split("/").filter(a=>a&&a!=="."&&a!==".."),De=c=>{const a=[],n=Be(c);n.length&&a.push({type:"separator",path:"/"});let _="";for(let e=0;e<n.length;e++){const d=n[e];_+="/"+d,a.push({type:"piece",name:d,path:_}),e!==n.length-1&&a.push({type:"separator",path:_})}return a};var Ue=F('<a class="svelte-c9k2g"> </a>'),He=F('<span class="separator svelte-c9k2g"><!></span>'),Ge=F('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function ba(c,a){sa(a,!0);const n=ja(),_=()=>Fa(Ea,"$page",n),e=S(()=>a.base_path??le),d=S(()=>a.path??ca(_().url.pathname,t(e))),E=S(()=>a.selected_path===null?null:a.selected_path??t(d)),z=S(()=>De(t(d))),A=S(()=>va(t(e),"/"));var h=Ge(),u=v(h),x=v(u);T(x,()=>a.children,q=>{var b=P(),p=C(b);B(p,()=>a.children),l(q,b)},q=>{var b=Y("•");l(q,b)}),i(u);var k=y(u);la(k,17,()=>t(z),qa,(q,b)=>{var p=P(),O=C(p);T(O,()=>t(b).type==="piece",m=>{var w=Ue(),W=v(w);i(w),j(()=>{L(w,"href",t(e)+t(b).path),X(w,"selected",t(b).path===t(E)),I(W,t(b).name)}),l(m,w)},m=>{var w=He(),W=v(w);T(W,()=>a.separator,U=>{var M=P(),J=C(M);B(J,()=>a.separator),l(U,M)},U=>{var M=Y("/");l(U,M)}),i(w),l(m,w)}),l(q,p)}),i(h),j(()=>{L(u,"href",t(A)),X(u,"selected",t(A)===t(e)+t(E))}),l(c,h),na()}var Je=F('<div class="mb_xl"><!></div>'),Ke=F('<main class="width_md svelte-aa2n4y"><section class="box"><!> <div class="mt_xl3"><!></div></section> <section class="box w_100 mb_lg"><div class="panel p_md width_md"><!></div></section> <section class="box"><!></section></main>');function et(c,a){sa(a,!0);const n=ne(oa,ve);var _=Ke(),e=v(_),d=v(e);ie(d);var E=y(d,2),z=v(E);ba(z,{children:(q,b)=>{ra();var p=Y();j(()=>I(p,oa.glyph)),l(q,p)},$$slots:{default:!0}}),i(E),i(e);var A=y(e,2),h=v(A),u=v(h);Me(u,{pkg:n}),i(h),i(A);var x=y(A,2),k=v(x);oe(k,{pkg:n,children:(q,b)=>{var p=Je(),O=v(p);ba(O,{children:(m,w)=>{ra();var W=Y();j(()=>I(W,oa.glyph)),l(m,W)},$$slots:{default:!0}}),i(p),l(q,p)},$$slots:{default:!0}}),i(x),i(_),l(c,_),na()}export{et as component};