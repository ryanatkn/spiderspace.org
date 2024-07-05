import{s as C,a as k,b as A,c as L,d as G,e as b}from"./string.UaW7egS1.js";import{a as c,n as B,c as d,t as H,o as h,f,b as n,s as E}from"./disclose-version.CuiJ47FC.js";import{t as w,B as T,M as z,p as D,a as F}from"./runtime.DV--gxMp.js";import{p as y,i as _}from"./props.CFqUhD2w.js";const J=(o,e,u)=>{const{name:l}=e,i=(t=>t?k(C(k(t,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),p=e.homepage??null,s=!e.private&&!!e.exports&&e.version!=="0.0.1",v=s?"https://www.npmjs.com/package/"+e.name:null,m=s&&i?i+"/blob/main/CHANGELOG.md":null,x=I(l),r=i?C(i,"https://github.com/").split("/")[0]:null;return{url:o,package_json:e,src_json:u,name:l,repo_name:x,repo_url:i,owner_name:r,homepage_url:p,npm_url:v,changelog_url:m,published:s}},I=o=>o[0]==="@"?o.split("/")[1]:o,N=o=>k(C(C(o,"https://"),"www."),"/");var O=B(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function Q(o,e){const u=y(e,"fill",3,"var(--text_color, #000)"),l=y(e,"size",3,"var(--space_xl7, 64px)"),g=y(e,"label",3,"the GitHub icon, an octocat silhouette"),i=z(()=>e.width??l()),p=z(()=>e.height??l());var s=O();let v;var m=d(s);w(()=>{v=A(s,v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e.attrs,"aria-label":g(),class:e.classes},!1,""),L(s,"width",T(i)),L(s,"height",T(p)),G(m,"fill",u())}),c(o,s)}var R=H('<div class="root_url svelte-cs8o0f"><a> </a></div>'),S=H('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function K(o,e){D(e,!0);const u=y(e,"root_url",3,null);var l=S(),g=d(l);_(g,()=>e.children,r=>{var t=h(),a=f(t);b(()=>e.children,a),c(r,t)});var i=n(n(g,!0)),p=d(i);_(p,()=>e.logo_header,r=>{var t=h(),a=f(t);b(()=>e.logo_header,a),c(r,t)});var s=n(n(p,!0)),v=d(s);_(v,()=>e.logo,r=>{var t=h(),a=f(t);b(()=>e.logo,a),c(r,t)},r=>{var t=h(),a=f(t);Q(a,{}),c(r,t)});var m=n(n(s,!0));_(m,()=>e.logo_footer,r=>{var t=h(),a=f(t);b(()=>e.logo_footer,a),c(r,t)});var x=n(n(i,!0));_(x,u,r=>{var t=R(),a=d(t),M=d(a);w(()=>E(M,N(u()))),w(()=>G(a,"href",u())),c(r,t)}),w(()=>G(s,"href",e.pkg.repo_url)),c(o,l),F()}const P={name:"spiderspace.org",version:"0.0.1",description:"community website with a YouTube channel about building it",motto:"weaving web community",glyph:"🕸️",logo:"logo.svg",logo_alt:"a friendly yellow spider facing you",license:"MIT",public:!0,homepage:"https://www.spiderspace.org/",repository:"https://github.com/spiderspace/spiderspace",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/spiderspace/spiderspace/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},devDependencies:{"@ryanatkn/belt":"^0.24.1","@ryanatkn/eslint-config":"^0.3.0","@ryanatkn/fuz":"^0.107.1","@ryanatkn/gro":"^0.129.0","@ryanatkn/moss":"^0.6.3","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.17","@sveltejs/vite-plugin-svelte":"^3.1.1",eslint:"^9.6.0","eslint-plugin-svelte":"^2.41.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5",svelte:"^5.0.0-next.165","svelte-check":"^3.8.2",tslib:"^2.6.3",typescript:"^5.5.2","typescript-eslint":"^8.0.0-alpha.39",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"]},U={name:"spiderspace.org",version:"0.0.1"};export{K as L,P as a,N as f,J as p,U as s};