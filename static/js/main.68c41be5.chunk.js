(this["webpackJsonpbird-watching"]=this["webpackJsonpbird-watching"]||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(12),o=n.n(i),a=(n(20),n(2)),u=n(3),s=n(4),j=n(5),d=n(7),b=function(e,t){return Array(e).fill(null).map((function(){return e=t,Math.floor(Math.random()*e);var e}))},l=n(1),f=Object(c.createContext)();function O(){return Object(c.useContext)(f)}var x,h=16,g=3,m=10;function p(e){var t=e.children,n=Object(c.useState)([]),r=Object(s.a)(n,2),i=r[0],o=r[1],a=Object(c.useState)(-1),u=Object(s.a)(a,2),O=u[0],x=u[1],p=Object(c.useState)(!0),v=Object(s.a)(p,2),w=v[0],y=v[1],k=Object(c.useState)(m),S=Object(s.a)(k,2),C=S[0],z=S[1],E=Object(c.useState)({correct:0,incorrect:0}),I=Object(s.a)(E,2),T=I[0],B=I[1],F=Object(c.useState)(!0),G=Object(s.a)(F,2),R=G[0],A=G[1];function M(){var e=b(h,g);o(e),x(+function(e){var t=e.reduce((function(e,t){var n;return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},t,(null!==(n=e[t])&&void 0!==n?n:0)+1))}),{}),n=Object.keys(t);return n.reduce((function(e,n){return t[e]<t[n]?n:e}),n[0])}(e))}function P(e){B((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},e,t[e]+1))}))}var J={colors:i,correctColor:O,newGame:function(){y(!0),z(m),B({correct:0,incorrect:0}),A(!1),M()},onCorrect:function(){P("correct"),M()},playing:w,time:C,endGame:function(){y(!1),z(0)},result:T,onIncorrect:function(){P("incorrect")},firstTime:R};return Object(l.jsx)(f.Provider,{value:J,children:t})}var v,w=u.b.div(x||(x=Object(a.a)(["\n  font-size: ",";\n  color: ",";\n"])),(function(e){return"sm"===e.size?"1.5em":"3em"}),(function(e){return e.color}));var y,k,S,C,z=u.b.button(v||(v=Object(a.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  background-color: dodgerblue;\n  color: white;\n  font-size: 1.5em;\n  border: none;\n  width: ",";\n  cursor: pointer;\n"])),(function(e){return e.w?e.w:"100%"})),E=u.b.circle(k||(k=Object(a.a)(["\n  stroke: ",";\n  fill: transparent;\n  stroke-width: ","px;\n  stroke-dasharray: ",";\n  stroke-dashoffset: ",";\n  transition: all 1s;\n  transform: rotate(-90deg);\n  animation: "," 2s forwards;\n"])),(function(e){return e.color}),20,(function(e){return e.length}),(function(e){return e.length}),(function(e){return function(e){var t=e.from,n=e.to;return Object(u.c)(y||(y=Object(a.a)(["\n  from {\n    stroke-dashoffset: ",";\n  }\n\n  to {\n    stroke-dashoffset: ",";\n  }\n"])),t,n)}(e)}));function I(e){var t=e.color,n=e.size,c=e.ratio,r=e.clockwise,i=n/2-20,o=2*i*Math.PI,a=(1-(r?1:-1)*c)*o;return Object(l.jsx)(E,{from:o,to:a,cx:-n/2,cy:n/2,r:i,length:o,color:t})}function T(e){var t=e.correct,n=t+e.incorrect,c=t/(n||1)*100,r=0===c?0:t/n,i=1-r;return Object(l.jsxs)("svg",{width:"200",height:"200",children:[Object(l.jsx)(I,{color:"dodgerblue",size:200,ratio:r,clockwise:!0}),Object(l.jsx)(I,{color:"tomato",size:200,ratio:i,clockwise:!1}),Object(l.jsx)("text",{x:"50%",y:"40%",textAnchor:"middle",fontSize:"1.5em",children:"Accuracy"}),Object(l.jsxs)("text",{x:"50%",y:"60%",textAnchor:"middle",fontSize:"1.5em",children:[c&&c.toFixed(2),"%"]})]})}var B=u.b.div(S||(S=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n"]))),F=u.b.div(C||(C=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  margin: 50px;\n"])));function G(){var e=O(),t=e.result,n=e.newGame,r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],a=i[1];return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){var e=setTimeout((function(){n.current()}),t);return function(){return clearTimeout(e)}}),[t])}((function(){a(!0)}),1100),o?Object(l.jsxs)(B,{children:[Object(l.jsx)(w,{children:"\ud83d\udc27 Bird watching"}),Object(l.jsxs)(F,{children:[Object(l.jsxs)("center",{children:[Object(l.jsx)("div",{style:{color:"tomato",marginBottom:"10px"},children:"Incorrect"}),Object(l.jsx)(w,{size:"sm",children:t.incorrect})]}),Object(l.jsx)(T,{correct:t.correct,incorrect:t.incorrect}),Object(l.jsxs)("center",{children:[Object(l.jsx)("div",{style:{color:"dodgerblue",marginBottom:"10px"},children:"Correct"}),Object(l.jsx)(w,{size:"sm",children:t.correct})]})]}),Object(l.jsx)(z,{onClick:n,w:"300px",children:"New game"})]}):null}var R,A,M=n(6),P=u.b.div(R||(R=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(e){return e.bg})),J={0:"tomato",1:"forestgreen",2:"dodgerblue"};function L(e){var t=e.color,n=O(),r=n.correctColor,i=n.onCorrect,o=n.onIncorrect,a=Object(c.useRef)();return Object(l.jsx)(P,{ref:a,bg:J[t],onClick:function(){var e;r===t?i():(e=a.current,Object(M.a)({targets:e,duration:100,loop:2,opacity:[0,1],easing:"linear"}),o())}})}function N(e){var t=e.watch,n=void 0===t?0:t,r=e.children,i=e.duration,o=void 0===i?100:i,a=e.delay,u=void 0===a?0:a,s=Object(c.useRef)();return Object(c.useEffect)((function(){Object(M.a)({targets:s.current,opacity:[0,1],easing:"linear",duration:o,delay:u})}),[n,o,u]),Object(l.jsx)("div",{style:{opacity:0},ref:s,children:r})}var D,H,U,_=u.b.div(A||(A=Object(a.a)(["\n  user-select: none;\n  border: 1px dashed dodgerblue;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: auto auto auto auto; // 4x4\n  gap: 15px;\n  width: 600px;\n  height: 600px;\n\n  @media (max-width: 500px) {\n    width: 300px;\n    height: 300px;\n    gap: 10px;\n  }\n"])));function q(){var e=O().colors;return Object(l.jsx)(N,{duration:50,watch:e,children:Object(l.jsx)(_,{children:e.map((function(e){return Object(l.jsx)(L,{color:e})}))})})}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}),[t])}var Q,V=Object(u.c)(D||(D=Object(a.a)(["\n  50% {\n    box-shadow: 0 0 50px 20px tomato;\n  }\n"]))),W=u.b.div(H||(H=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  ","\n"])),(function(e){return e.warning&&Object(u.a)(U||(U=Object(a.a)(["\n      animation: "," 1s linear 5;\n    "])),V)}));function X(){var e=O(),t=e.time,n=e.endGame,r=Object(c.useState)(t),i=Object(s.a)(r,2),o=i[0],a=i[1],u=Object(c.useState)(!1),j=Object(s.a)(u,2),d=j[0],b=j[1];return K((function(){a((function(e){return e-1}))}),1e3),Object(c.useEffect)((function(){o<=0?n():o<=5&&b(!0)}),[o,n]),Object(l.jsx)(W,{warning:d})}function Y(){var e=Object(c.useRef)(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),r=n[0],i=n[1];return K((function(){i(!1)}),1e3),Object(c.useEffect)((function(){Object(M.a)({targets:e.current,fontSize:["3em","4em"]})}),[]),r&&Object(l.jsx)(w,{ref:e,children:"Time's Up"})}var Z,$,ee=u.b.img(Q||(Q=Object(a.a)(["\n  width: 600px;\n  margin: 10px;\n  transition: width 0.2s;\n  @media (max-width: 500px) {\n    width: 300px;\n  }\n"]))),te=n.p+"static/media/game_img.f75ccced.png",ne=u.b.div(Z||(Z=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n"])));function ce(){var e=O().newGame;return Object(l.jsxs)(ne,{children:[Object(l.jsx)(w,{color:"white",children:"How to play"}),Object(l.jsx)(ee,{src:te}),Object(l.jsx)("p",{style:{color:"white"},children:"Select the color that appears the most"}),Object(l.jsx)(z,{onClick:e,w:"300px",children:"New game"})]})}function re(){var e=O(),t=e.playing;return e.firstTime?Object(l.jsx)(ce,{}):t?Object(l.jsxs)("div",{children:[Object(l.jsx)(X,{}),Object(l.jsx)(q,{})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)(Y,{}),Object(l.jsx)(G,{})]})}var ie=u.b.div($||($=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var oe=function(){return Object(l.jsx)(ie,{children:Object(l.jsx)(p,{children:Object(l.jsx)(re,{})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(oe,{})}),document.getElementById("root")),ae()}},[[24,1,2]]]);
//# sourceMappingURL=main.68c41be5.chunk.js.map