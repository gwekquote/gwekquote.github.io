import{S as R,i as W,s as X,e as h,t as _,k as z,c,a as u,h as p,d as r,m as A,b as Y,g as Z,K as e,j as w,E as N,L as ee}from"../chunks/index-c65a4a84.js";import{s as P}from"../chunks/statistics-0b1e5207.js";import"../chunks/index-4ceb3503.js";function te(l){let i,t,d,a,g,v=l[0].list.length+"",n,S,o,k,Q,I=l[1](l[0].timeStamps.reverse())+"",C,T,H,E,j,O=l[0].maxStreak+"",M,q,b,L,D,x=l[0].timesOpened+"",V;return{c(){i=h("div"),t=h("ul"),d=h("li"),a=h("h2"),g=_("Quotes Viewed: "),n=_(v),S=z(),o=h("li"),k=h("h2"),Q=_("Current Streak: "),C=_(I),T=z(),H=h("li"),E=h("h2"),j=_("Max Streak: "),M=_(O),q=z(),b=h("li"),L=h("h2"),D=_("Times Opened: "),V=_(x),this.h()},l(s){i=c(s,"DIV",{class:!0});var m=u(i);t=c(m,"UL",{});var f=u(t);d=c(f,"LI",{});var B=u(d);a=c(B,"H2",{});var K=u(a);g=p(K,"Quotes Viewed: "),n=p(K,v),K.forEach(r),B.forEach(r),S=A(f),o=c(f,"LI",{});var F=u(o);k=c(F,"H2",{});var U=u(k);Q=p(U,"Current Streak: "),C=p(U,I),U.forEach(r),F.forEach(r),T=A(f),H=c(f,"LI",{});var G=u(H);E=c(G,"H2",{});var $=u(E);j=p($,"Max Streak: "),M=p($,O),$.forEach(r),G.forEach(r),q=A(f),b=c(f,"LI",{});var J=u(b);L=c(J,"H2",{});var y=u(L);D=p(y,"Times Opened: "),V=p(y,x),y.forEach(r),J.forEach(r),f.forEach(r),m.forEach(r),this.h()},h(){Y(i,"class","main")},m(s,m){Z(s,i,m),e(i,t),e(t,d),e(d,a),e(a,g),e(a,n),e(t,S),e(t,o),e(o,k),e(k,Q),e(k,C),e(t,T),e(t,H),e(H,E),e(E,j),e(E,M),e(t,q),e(t,b),e(b,L),e(L,D),e(L,V)},p(s,[m]){m&1&&v!==(v=s[0].list.length+"")&&w(n,v),m&1&&I!==(I=s[1](s[0].timeStamps.reverse())+"")&&w(C,I),m&1&&O!==(O=s[0].maxStreak+"")&&w(M,O),m&1&&x!==(x=s[0].timesOpened+"")&&w(V,x)},i:N,o:N,d(s){s&&r(i)}}}function ae(l,i,t){let d;ee(l,P,n=>t(2,d=n));let a=d;function g(){t(0,a.maxStreak=1,a)}function v(n){let S=1;for(let o=0;o<n.length;o++)if(n[o]===n[o+1]+864e5)S+=1;else return S>a.maxStreak&&g(),S;return 0}return l.$$.update=()=>{l.$$.dirty&1&&P.set(a)},[a,v]}class ie extends R{constructor(i){super(),W(this,i,ae,te,X,{})}}export{ie as default};
