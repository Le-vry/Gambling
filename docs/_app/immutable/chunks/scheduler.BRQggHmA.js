function y(){}const B=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function D(){return Object.create(null)}function q(t){t.forEach(E)}function v(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function P(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function S(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return m(t,e=>n=e)(),n}function G(t,n,e){t.$$.on_destroy.push(m(n,e))}function H(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function J(t,n,e,r,o,a){if(o){const _=x(n,e,r,a);t.p(_,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t,n,e){return t.set(e),n}function N(t){return t&&v(t.destroy)?t.destroy:y}let l;function d(t){l=t}function k(){if(!l)throw new Error("Function called outside component initialization");return l}function Q(t){k().$$.on_mount.push(t)}function R(t){k().$$.after_update.push(t)}const i=[],b=[];let u=[];const g=[],w=Promise.resolve();let p=!1;function O(){p||(p=!0,w.then(M))}function T(){return O(),w}function z(t){u.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,d(n),A(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(i.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function A(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function V(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{E as A,i as B,O as C,U as D,H as a,I as b,G as c,L as d,P as e,z as f,K as g,B as h,v as i,R as j,b as k,C as l,k as m,y as n,Q as o,d as p,M as q,q as r,F as s,T as t,J as u,N as v,D as w,S as x,V as y,l as z};
