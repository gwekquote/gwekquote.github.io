function N(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(L)}function z(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t,n,e){t.$$.on_destroy.push(H(n,e))}function ut(t,n,e,i){if(t){const o=P(t,n,e,i);return t[0](o)}}function P(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const o=t[2](i(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],c=Math.max(n.dirty.length,o.length);for(let u=0;u<c;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function lt(t,n,e,i,o,l){if(o){const c=P(n,e,i,l);t.p(c,o)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t,n,e){return t.set(e),n}let $=!1;function W(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const o=t+(n-t>>1);e(o)<=i?t=o+1:n=o}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let o=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,f=(o>0&&n[e[o]].claim_order<=s?o+1:J(1,o,y=>n[e[y]].claim_order,s))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,o=Math.max(a,o)}const l=[],c=[];let u=n.length-1;for(let r=e[o]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);l.reverse(),c.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<c.length;r++){for(;s<l.length&&c[r].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(c[r],f)}}function Q(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,o=!1){X(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,o||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,o?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Y(t,n,e,i){return B(t,o=>o.nodeName===n,o=>{const l=[];for(let c=0;c<o.attributes.length;c++){const u=o.attributes[c];e[u.name]||l.push(u.name)}l.forEach(c=>o.removeAttribute(c))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function $t(t){return Z(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function jt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function kt(t,n,e){t.classList[e?"add":"remove"](n)}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Nt(t){w().$$.on_mount.push(t)}function St(t){w().$$.after_update.push(t)}function At(t,n){return w().$$.context.set(t,n),n}function Ct(t){return w().$$.context.get(t)}const _=[],M=[],x=[],E=[],O=Promise.resolve();let j=!1;function q(){j||(j=!0,O.then(D))}function Tt(){return q(),O}function k(t){x.push(t)}function Mt(t){E.push(t)}const v=new Set;let g=0;function D(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),tt(n.$$)}for(h(null),_.length=0,g=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(_.length);for(;E.length;)E.pop()();j=!1,v.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let d;function Lt(){d={r:0,c:[],p:d}}function Pt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Ot=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function qt(t,n){const e={},i={},o={$$scope:1};let l=t.length;for(;l--;){const c=t[l],u=n[l];if(u){for(const r in c)r in u||(i[r]=1);for(const r in u)o[r]||(e[r]=u[r],o[r]=1);t[l]=u}else for(const r in c)o[r]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function It(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=t.$$;o&&o.m(n,e),i||k(()=>{const r=l.map(L).filter(z);c?c.push(...r):p(r),t.$$.on_mount=[]}),u.forEach(k)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,o,l,c,u=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:l,update:N,not_equal:o,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};c&&c(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...A)=>{const C=A.length?A[0]:y;return s.ctx&&o(s.ctx[a],s.ctx[a]=C)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](C),f&&rt(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){W();const a=V(n.target);s.fragment&&s.fragment.l(a),a.forEach(R)}else s.fragment&&s.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),G(),D()}h(r)}class Wt{$destroy(){it(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Et as $,Dt as A,it as B,I as C,Tt as D,N as E,H as F,p as G,z as H,Ct as I,kt as J,Q as K,ct as L,ut as M,lt as N,at as O,st as P,pt as Q,_t as R,Wt as S,Ot as T,gt as U,yt as V,M as W,ft as X,Mt as Y,It as Z,k as _,V as a,jt as a0,xt as b,bt as c,R as d,U as e,vt as f,dt as g,Z as h,Ht as i,wt as j,ht as k,mt as l,$t as m,Lt as n,Bt as o,Pt as p,nt as q,At as r,ot as s,S as t,St as u,Nt as v,zt as w,Ft as x,et as y,qt as z};