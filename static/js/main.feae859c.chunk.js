(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(1),a=r.n(n),s=r(9),i=r.n(s),o=(r(17),r(3)),u=(r(18),r(4)),j=r.n(u),b=r(7),l=(r(20),r(10)),f=r.n(l),d=r(2),O=r.n(d),p=(O.a.func.isRequired,O.a.func.isRequired,O.a.func.isRequired,function(){var e=Object(b.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo1030918.mockable.io/");case 2:return t=e.sent,r=t.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),m=Object(n.memo)((function(e){var t=e.setField,r=e.setOpenSquare,a=e.setHistoryHover,s=Object(n.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(n.useState)(!0),O=Object(o.a)(d,2),m=O[0],h=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r=Object.entries(t),l(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v=Object(n.useCallback)((function(e){var t=e.target.value;"Pick mode"===t?(r(!1),h(!0),a([])):(h(!1),a([])),x(t)}),[]),y=Object(n.useCallback)((function(){r(!0)}),[]),x=Object(n.useCallback)((function(e){for(var r=[],c=1;c<=e;c+=1)r.push(c);t(r)}),[]);return Object(c.jsxs)("form",{className:"form",children:[Object(c.jsxs)("select",{className:"form__select",onChange:v,children:[Object(c.jsx)("option",{children:"Pick mode"}),u.map((function(e){return Object(c.jsx)("option",{value:e[1].field,children:e[0]},e[0])}))]}),Object(c.jsx)("button",{className:f()("form__button",{"form__button--disabled":m}),type:"button",onClick:y,disabled:m,children:"START"})]})})),h=r(11),v=(r(23),O.a.arrayOf(O.a.number).isRequired,O.a.arrayOf(O.a.string).isRequired,O.a.func.isRequired,Object(n.memo)((function(e){var t=e.field,r=e.historyHover,a=e.setHistoryHover,s=Object(n.useCallback)((function(e){var t=e.target;a([].concat(Object(h.a)(r),[t.dataset.place]))}),[r]);return Object(c.jsx)("div",{className:"square",children:t.map((function(e){return Object(c.jsx)("div",{className:"square__row",children:t.map((function(t){return Object(c.jsx)("button",{className:"square__item",type:"button","data-place":"row ".concat(e," col ").concat(t),onMouseOver:s},e+t)}))},e)}))})}))),y=(r(24),{historyHover:O.a.arrayOf(O.a.string).isRequired}.isRequired),x=Object(n.memo)((function(e){var t=e.historyHover;return Object(c.jsxs)("div",{className:"history",children:[Object(c.jsx)("h3",{className:"history__title",children:"History"}),t.map((function(e){return Object(c.jsx)("div",{className:"history__item",children:e},e)}))]})}));x.propTypes=y;var _=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),u=i[0],j=i[1],b=Object(n.useState)(!1),l=Object(o.a)(b,2),f=l[0],d=l[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(m,{setField:a,setOpenSquare:d,setHistoryHover:j}),f&&Object(c.jsxs)("div",{className:"container__main",children:[Object(c.jsx)(v,{field:r,historyHover:u,setHistoryHover:j}),Object(c.jsx)(x,{historyHover:u})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.feae859c.chunk.js.map