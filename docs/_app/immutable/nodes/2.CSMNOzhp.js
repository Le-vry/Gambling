import{s as Q,a as W,u as X,g as Y,b as Z,r as $,c as ee,o as te,i as se,d as x}from"../chunks/scheduler.BRQggHmA.js";import{S as le,i as ae,e as g,s as M,c as b,a as C,k as B,f as D,d,l as h,g as T,h as _,m as P,n as q,p as U,o as re,q as oe,r as ne,t as ue,b as fe,j as ie}from"../chunks/index.LQ4eRX2t.js";import{e as z}from"../chunks/each.D6YF6ztN.js";import{b as A}from"../chunks/paths.Dl8boVTm.js";import{g as ce}from"../chunks/entry.DQqlmqR5.js";import{h as w}from"../chunks/search.BbUFm3ve.js";function G(e,a,t){const l=e.slice();return l[8]=a[t],l}function K(e){let a,t=e[8]+"",l,v;return{c(){a=g("a"),l=ue(t),this.h()},l(f){a=b(f,"A",{href:!0,class:!0});var s=C(a);l=fe(s,t),s.forEach(d),this.h()},h(){h(a,"href",v=A+"/Search/"+e[8]),h(a,"class","svelte-2fue8x")},m(f,s){T(f,a,s),_(a,l)},p(f,s){s&1&&t!==(t=f[8]+"")&&ie(l,t),s&1&&v!==(v=A+"/Search/"+f[8])&&h(a,"href",v)},d(f){f&&d(a)}}}function he(e){let a,t,l,v=`<a class="back svelte-2fue8x" href="${A}/">⟵Back</a>`,f,s,i,N,p,J="↻",m,k,y,L,S,E,H,F;const R=e[6].default,c=W(R,e,e[5],null);let O=z(e[0]),n=[];for(let r=0;r<O.length;r+=1)n[r]=K(G(e,O,r));return{c(){a=g("main"),t=g("header"),l=g("div"),l.innerHTML=v,f=M(),s=g("form"),i=g("input"),N=M(),p=g("div"),p.textContent=J,m=M(),c&&c.c(),k=M(),y=g("footer");for(let r=0;r<n.length;r+=1)n[r].c();L=M(),S=g("div"),this.h()},l(r){a=b(r,"MAIN",{class:!0});var u=C(a);t=b(u,"HEADER",{class:!0});var o=C(t);l=b(o,"DIV",{class:!0,"data-svelte-h":!0}),B(l)!=="svelte-f7tmw4"&&(l.innerHTML=v),f=D(o),s=b(o,"FORM",{class:!0});var I=C(s);i=b(I,"INPUT",{type:!0,placeholder:!0,class:!0}),I.forEach(d),N=D(o),p=b(o,"DIV",{class:!0,"data-svelte-h":!0}),B(p)!=="svelte-1txum59"&&(p.textContent=J),o.forEach(d),m=D(u),c&&c.l(u),k=D(u),y=b(u,"FOOTER",{class:!0});var j=C(y);for(let V=0;V<n.length;V+=1)n[V].l(j);j.forEach(d),u.forEach(d),L=D(r),S=b(r,"DIV",{class:!0}),C(S).forEach(d),this.h()},h(){h(l,"class","return svelte-2fue8x"),h(i,"type","text"),h(i,"placeholder","Sök pokemon"),h(i,"class","svelte-2fue8x"),h(s,"class","svelte-2fue8x"),h(p,"class","clear svelte-2fue8x"),h(t,"class","svelte-2fue8x"),h(y,"class","svelte-2fue8x"),h(a,"class","svelte-2fue8x"),h(S,"class","backdrop svelte-2fue8x")},m(r,u){T(r,a,u),_(a,t),_(t,l),_(t,f),_(t,s),_(s,i),P(i,e[1]),_(t,N),_(t,p),_(a,m),c&&c.m(a,null),_(a,k),_(a,y);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(y,null);T(r,L,u),T(r,S,u),E=!0,H||(F=[q(i,"input",e[7]),q(s,"submit",U(function(){se(e[2](e[1]))&&e[2](e[1]).apply(this,arguments)})),q(p,"click",U(e[3]))],H=!0)},p(r,[u]){if(e=r,u&2&&i.value!==e[1]&&P(i,e[1]),c&&c.p&&(!E||u&32)&&X(c,R,e,e[5],E?Z(R,e[5],u,null):Y(e[5]),null),u&1){O=z(e[0]);let o;for(o=0;o<O.length;o+=1){const I=G(e,O,o);n[o]?n[o].p(I,u):(n[o]=K(I),n[o].c(),n[o].m(y,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=O.length}},i(r){E||(re(c,r),E=!0)},o(r){oe(c,r),E=!1},d(r){r&&(d(a),d(L),d(S)),c&&c.d(r),ne(n,r),H=!1,$(F)}}}function _e(e,a,t){let l;ee(e,w,m=>t(4,l=m));let{$$slots:v={},$$scope:f}=a;te(()=>{l.length>2&&t(0,s=JSON.parse(l))});let s=[],i;function N(m){let k;k=m.toLowerCase(),s.length<5||(s.pop(),t(0,s),t(4,l)),s.unshift(k),t(0,s),t(4,l),x(w,l=JSON.stringify(s),l),console.log(s),ce(A+"/Search/"+k)}function p(){t(0,s=[]),x(w,l=JSON.stringify(s),l)}function J(){i=this.value,t(1,i)}return e.$$set=m=>{"$$scope"in m&&t(5,f=m.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&l.length>2&&t(0,s=JSON.parse(l))},[s,i,N,p,l,f,v,J]}class ke extends le{constructor(a){super(),ae(this,a,_e,he,Q,{})}}export{ke as component};
