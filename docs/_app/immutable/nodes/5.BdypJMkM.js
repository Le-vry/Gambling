import{s as ee,n as K,a as V,i as te}from"../chunks/scheduler.c61x3f7M.js";import{S as se,i as le,e as k,s as I,t as Q,c as E,a as y,k as L,f as C,d as M,b as U,l as p,q,g as x,h as i,o as $,j as W,r as ae}from"../chunks/index.CbmhN0cM.js";import{e as X}from"../chunks/each.D6YF6ztN.js";function Y(a,l,t){const e=a.slice();return e[11]=l[t],e}function Z(a){let l,t,e,_,n,d,g,u,b;return{c(){l=k("div"),t=k("img"),_=I(),n=k("img"),g=I(),this.h()},l(v){l=E(v,"DIV",{class:!0});var c=y(l);t=E(c,"IMG",{class:!0,src:!0,alt:!0}),_=C(c),n=E(c,"IMG",{class:!0,src:!0,alt:!0}),g=C(c),c.forEach(M),this.h()},h(){p(t,"class","front svelte-vatcmk"),V(t.src,e=a[11].cardfront)||p(t,"src",e),p(t,"alt","f*ck you"),p(n,"class","back svelte-vatcmk"),V(n.src,d=fe)||p(n,"src",d),p(n,"alt","f*ck you"),p(l,"class","card svelte-vatcmk"),q(l,"flipped",a[11].flipped)},m(v,c){x(v,l,c),i(l,t),i(l,_),i(l,n),i(l,g),u||(b=$(l,"click",function(){te(a[4](a[11]))&&a[4](a[11]).apply(this,arguments)}),u=!0)},p(v,c){a=v,c&4&&!V(t.src,e=a[11].cardfront)&&p(t,"src",e),c&4&&q(l,"flipped",a[11].flipped)},d(v){v&&M(l),u=!1,b()}}}function re(a){let l,t,e,_="Memory",n,d,g,u,b="Reset",v,c,A="",R,s,f,j,w,D,T,H,z,N,P=X(a[2]),h=[];for(let o=0;o<P.length;o+=1)h[o]=Z(Y(a,P,o));return{c(){l=k("main"),t=k("div"),e=k("h1"),e.textContent=_,n=I(),d=k("div");for(let o=0;o<h.length;o+=1)h[o].c();g=I(),u=k("h2"),u.textContent=b,v=I(),c=k("aside"),c.innerHTML=A,R=I(),s=k("aside"),f=k("p"),j=Q(a[0]),w=I(),D=k("aside"),T=k("p"),H=Q(a[1]),this.h()},l(o){l=E(o,"MAIN",{class:!0});var m=y(l);t=E(m,"DIV",{class:!0});var r=y(t);e=E(r,"H1",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-d4dgzr"&&(e.textContent=_),n=C(r),d=E(r,"DIV",{class:!0});var S=y(d);for(let G=0;G<h.length;G+=1)h[G].l(S);S.forEach(M),g=C(r),u=E(r,"H2",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-1ukzilz"&&(u.textContent=b),r.forEach(M),v=C(m),c=E(m,"ASIDE",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-gh7u7u"&&(c.innerHTML=A),R=C(m),s=E(m,"ASIDE",{class:!0});var O=y(s);f=E(O,"P",{class:!0});var B=y(f);j=U(B,a[0]),B.forEach(M),O.forEach(M),w=C(m),D=E(m,"ASIDE",{class:!0});var F=y(D);T=E(F,"P",{class:!0});var J=y(T);H=U(J,a[1]),J.forEach(M),F.forEach(M),m.forEach(M),this.h()},h(){p(e,"class","svelte-vatcmk"),p(d,"class","memory-grid svelte-vatcmk"),p(u,"class","svelte-vatcmk"),p(t,"class","container svelte-vatcmk"),p(c,"class","turn svelte-vatcmk"),q(c,"blue",a[3]),p(f,"class","svelte-vatcmk"),p(s,"class","svelte-vatcmk"),p(T,"class","svelte-vatcmk"),p(D,"class","blue svelte-vatcmk"),p(l,"class","svelte-vatcmk")},m(o,m){x(o,l,m),i(l,t),i(t,e),i(t,n),i(t,d);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(d,null);i(t,g),i(t,u),i(l,v),i(l,c),i(l,R),i(l,s),i(s,f),i(f,j),i(l,w),i(l,D),i(D,T),i(T,H),z||(N=$(u,"click",a[5]),z=!0)},p(o,[m]){if(m&20){P=X(o[2]);let r;for(r=0;r<P.length;r+=1){const S=Y(o,P,r);h[r]?h[r].p(S,m):(h[r]=Z(S),h[r].c(),h[r].m(d,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=P.length}m&8&&q(c,"blue",o[3]),m&1&&W(j,o[0]),m&2&&W(H,o[1])},i:K,o:K,d(o){o&&M(l),ae(h,o),z=!1,N()}}}let fe="ER_golden_order.png",ce="Margit..jpg",ne="Godrick.jpg",oe="Renalla.png",ie="Radahn.jpg",de="Mohg.jpg",ue="Malenia.png";function pe(a,l,t){let e=[],_=!1,n=[],d,g,u=0,b=0;function v(){for(let s=0;s<12;s++)s<2?e.push({cardfront:ce,flipped:!1,matched:!1}):s<4?e.push({cardfront:ne,flipped:!1,matched:!1}):s<6?e.push({cardfront:oe,flipped:!1,matched:!1}):s<8?e.push({cardfront:ie,flipped:!1,matched:!1}):s<10?e.push({cardfront:de,flipped:!1,matched:!1}):e.push({cardfront:ue,flipped:!1,matched:!1});for(let s=e.length-1;s>0;s--){let f=Math.floor(Math.random()*(s+1)),j=e[s];t(2,e[s]=e[f],e),t(2,e[f]=j,e)}t(2,e)}function c(){let s=0;for(let f=0;f<e.length;f++)e[f].matched==!0&&(s+=1);return s}function A(s){s.matched!==!0&&s.flipped!==!0&&(n.length<2&&(n.push(s),typeof d<"u"?g=e.indexOf(s):d=e.indexOf(s),n=n,s.flipped=!s.flipped),n.length==2&&typeof d<"u"&&typeof g<"u"&&(n[0].cardfront==n[1].cardfront?setTimeout(()=>{t(2,e[d].matched=!0,e),t(2,e[g].matched=!0,e),d=void 0,g=void 0,_==!1?(t(0,u+=1),t(3,_=!0)):(t(1,b+=1),t(3,_=!1));for(let f=0;f<e.length;f++)e[f].matched!==!0&&t(2,e[f].flipped=!1,e);n=[]},1e3):setTimeout(()=>{t(2,e[d].flipped=!1,e),t(2,e[g].flipped=!1,e),d=void 0,g=void 0,_==!1?t(3,_=!0):t(3,_=!1);for(let f=0;f<e.length;f++)e[f].matched!==!0&&t(2,e[f].flipped=!1,e);n=[]},1e3)),t(2,e))}function R(){for(let s=0;s<e.length;s++)t(2,e[s].flipped=!1,e),t(2,e[s].matched=!1,e);t(2,e),t(2,e=[]),t(0,u=0),t(1,b=0),v()}return v(),a.$$.update=()=>{a.$$.dirty&3&&c()===12&&(u==b?alert("Tie! Nobody wins!"):u>b?alert("Red wins!"):alert("Blue wins!"))},[u,b,e,_,A,R]}class ge extends se{constructor(l){super(),le(this,l,pe,re,ee,{})}}export{ge as component};