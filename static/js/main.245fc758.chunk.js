(this["webpackJsonpsports-app"]=this["webpackJsonpsports-app"]||[]).push([[0],{45:function(n,t,e){},46:function(n,t,e){},70:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),a=e(35),s=e.n(a),j=(e(45),e(46),e(2)),o=e(8),u=e(3),d=e(20),b=e.n(d);function l(){var n=Object(j.a)(["\n    text-align: center;\n    color: #000;\n"]);return l=function(){return n},n}function f(){var n=Object(j.a)(["\n    justify-content: space-between;\n    align-items: center;\n    display: flex;\n    width: 75%;\n    margin: 0 auto;\n    color: #000;\n"]);return f=function(){return n},n}function x(){var n=Object(j.a)(["\n    font-size: 36px;\n    margin: 0 30px;\n    color: #000;\n"]);return x=function(){return n},n}function O(){var n=Object(j.a)(["\n    margin: 0 20px;\n    font-size: 24px;\n    color: #000;\n"]);return O=function(){return n},n}function h(){var n=Object(j.a)(["\n    height: 100px;\n"]);return h=function(){return n},n}function p(){var n=Object(j.a)(["\n    width: 30%;\n    text-align: center;\n    justify-content: space-between;\n    display: flex;\n    align-items: center;\n"]);return p=function(){return n},n}function g(){var n=Object(j.a)(["\n    padding: 20px 40px;\n    border-radius: 30px;\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);\n    margin-bottom: 50px;\n    cursor: pointer;\n"]);return g=function(){return n},n}function v(){var n=Object(j.a)(["\n    padding: 100px 50px;\n"]);return v=function(){return n},n}function m(){var n=Object(j.a)(["\n    text-align: center;\n    margin: 30px 0;\n    font-weight: bold;\n    color: #fff;\n    font-size: 26px;\n"]);return m=function(){return n},n}function w(){var n=Object(j.a)(["\n    color: #fff;\n    text-align: left;\n    margin-top: 10px;\n"]);return w=function(){return n},n}function y(){var n=Object(j.a)(["\n    width: 80%;\n    margin: 0 auto;\n"]);return y=function(){return n},n}function D(){var n=Object(j.a)(["\n    z-index: 3;\n    width: 25%;\n    text-align: center;\n"]);return D=function(){return n},n}function F(){var n=Object(j.a)(["\n    max-width: 50%;\n    color: #fff;\n    font-size: 28px;\n    text-align: center;\n    margin: 0 75px;\n"]);return F=function(){return n},n}function S(){var n=Object(j.a)(["\n    font-size: 36px;\n    color: #fff;\n    font-weight: bold;\n    margin: 50px 0;\n"]);return S=function(){return n},n}function k(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n"]);return k=function(){return n},n}function z(){var n=Object(j.a)(["\n    font-size: 100px;\n    color: #fff;\n    font-weight: bold;\n"]);return z=function(){return n},n}function P(){var n=Object(j.a)(["\n    height: 300px;\n    z-index: 4;\n"]);return P=function(){return n},n}function E(){var n=Object(j.a)(["\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n"]);return E=function(){return n},n}function C(){var n=Object(j.a)(["\n    width: 80%;\n    margin: -130px auto 0;\n"]);return C=function(){return n},n}function L(){var n=Object(j.a)([""]);return L=function(){return n},n}function A(){var n=Object(j.a)(["\n    width: 50%;\n    filter: grayscale(100%) brightness(35%);\n    z-index: 2;\n    object-fit: cover;\n\n"]);return A=function(){return n},n}function G(){var n=Object(j.a)(["\n    display: flex;\n    z-index: 1;\n"]);return G=function(){return n},n}function M(){var n=Object(j.a)(["\n    background: #DD0543;\n    padding: 0 0 50px;\n"]);return M=function(){return n},n}function J(){var n=Object(c.useState)([]),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),j=s[0],u=s[1],d=Object(c.useState)([]),l=Object(o.a)(d,2),f=l[0],x=l[1],O=Object(c.useState)([]),h=Object(o.a)(O,2),p=h[0],g=h[1];Object(c.useEffect)((function(){b.a.get("https://api.npoint.io/2a326cca783e9b8f84c4").then((function(n){i(n.data.data),u([n.data.data[0]]),x(n.data.data[0].gscrt1),g(n.data.data[0].gscrt2)})).catch((function(n){console.log(n)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(T,{children:j.map((function(n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(B,{src:n.bnimgt1,alt:"Player1"}),Object(r.jsx)(B,{src:n.bnimgt2,alt:"Player2"})]}),Object(r.jsx)(I,{children:Object(r.jsxs)(N,{children:[Object(r.jsxs)(W,{children:[Object(r.jsxs)(V,{children:[Object(r.jsx)(H,{src:n.t1lg,alt:"team1"}),Object(r.jsx)(R,{children:n.team1}),Object(r.jsx)(X,{children:f.map((function(n,t){return Object(r.jsx)(Y,{children:n},t)}))})]}),Object(r.jsx)(K,{children:n.t1g}),Object(r.jsx)(K,{children:n.t2g}),Object(r.jsxs)(V,{children:[Object(r.jsx)(H,{src:n.t2lg,alt:"team2"}),Object(r.jsx)(R,{children:n.team2}),Object(r.jsx)(X,{children:p.map((function(n,t){return Object(r.jsx)(Y,{children:n},t)}))})]})]}),Object(r.jsx)(Z,{children:n.date}),Object(r.jsx)(Z,{children:n.time}),Object(r.jsx)(Z,{children:n.currenttime}),Object(r.jsx)(Q,{children:Object(r.jsxs)(U,{children:[n.title,", ",n.titledet]})})]})})]})}))}),Object(r.jsx)($,{children:e.map((function(n){return Object(r.jsxs)(_,{onClick:function(){return t=n.id,u([e.find((function(n){return n.id===t}))]),x(e.find((function(n){return n.id===t})).gscrt1),void g(e.find((function(n){return n.id===t})).gscrt2);var t},children:[Object(r.jsx)(an,{children:n.title}),Object(r.jsxs)(cn,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{src:n.t1lg,alt:"team1"}),Object(r.jsx)(en,{children:n.team1})]}),Object(r.jsx)(rn,{children:n.t1g}),"|",Object(r.jsx)(rn,{children:n.t2g}),Object(r.jsxs)(nn,{children:[Object(r.jsx)(en,{children:n.team2}),Object(r.jsx)(tn,{src:n.t2lg,alt:"team2"})]})]})]},n.id)}))})]})}var T=u.a.section(M()),q=u.a.div(G()),B=u.a.img(A()),I=u.a.div(L()),N=u.a.div(C()),W=u.a.div(E()),H=u.a.img(P()),K=u.a.h1(z()),Q=u.a.div(k()),R=u.a.h2(S()),U=u.a.p(F()),V=u.a.div(D()),X=u.a.ul(y()),Y=u.a.li(w()),Z=u.a.p(m()),$=u.a.section(v()),_=u.a.div(g()),nn=u.a.div(p()),tn=u.a.img(h()),en=u.a.h3(O()),rn=u.a.h2(x()),cn=u.a.div(f()),an=u.a.h3(l());function sn(){var n=Object(j.a)(["\n    height: 60%;\n    display: inline-block;\n    margin: 0 10px 0 0;\n    // display: none;\n"]);return sn=function(){return n},n}function jn(){var n=Object(j.a)(["\n    width: 25px;\n"]);return jn=function(){return n},n}function on(){var n=Object(j.a)(["\n    width: 6.25%;\n    text-align: left;\n    align-items: center;\n    display: flex;\n    justify-content: space-arround;\n    &:first-child {\n        width:50%;\n        // align-items: center;\n        // display: flex;\n    }\n"]);return on=function(){return n},n}function un(){var n=Object(j.a)(["\n    width: 100%;\n"]);return un=function(){return n},n}function dn(){var n=Object(j.a)(["\n    width: 6.25%;\n    text-align: left;\n    border-bottom: 2px solid #E80A47;\n    align-items: center;\n    display: flex;\n    &:first-child {\n        width:50%;\n    }\n"]);return dn=function(){return n},n}function bn(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 40px;\n    tbody &:nth-child(2n) {\n        background: #E4E5E9;\n    }\n    tbody &:nth-last-child(-n+2) {\n        background: #F5443D;\n        color: #fff;\n    }\n    tbody &:nth-child(-n+2) {\n        background: #2C84EF;\n        color: #fff;\n    }\n    tbody &:nth-child(3) {\n        background: #FF7C30;\n        color: #fff;\n    }\n"]);return bn=function(){return n},n}function ln(){var n=Object(j.a)(["\n    width: 100%;\n"]);return ln=function(){return n},n}function fn(){var n=Object(j.a)(["\n    // margin-top: 40px;\n    width: 50%;\n    margin: 10px auto;\n    border: 2px solid #E80A47;\n    background: #F1F3F4;\n"]);return fn=function(){return n},n}function xn(){var n=Object(j.a)(["\n    text-align: center;\n"]);return xn=function(){return n},n}function On(){var n=Object(j.a)([""]);return On=function(){return n},n}function hn(){var n=Object(j.a)(["\n    background: #E80A47;\n"]);return hn=function(){return n},n}function pn(){var n=Object(j.a)(["\n    // padding: 40px 20px 0;\n"]);return pn=function(){return n},n}function gn(){var n=Object(c.useState)([]),t=Object(o.a)(n,2),e=(t[0],t[1]),i=Object(c.useState)([]),a=Object(o.a)(i,2),s=a[0],j=a[1];return Object(c.useEffect)((function(){b.a.get("https://api.npoint.io/a5dfe0fc4834e0e3d34e").then((function(n){var t,r;e(n.data.data),j((t=n.data.data,r="Pts",t.sort((function(n,t){return n[r]>t[r]?-1:0}))))})).catch((function(n){console.log(n)}))}),[]),Object(r.jsx)("div",{children:Object(r.jsxs)(vn,{children:[Object(r.jsx)(mn,{children:Object(r.jsx)(yn,{children:"La Liga 20-21 Season"})}),Object(r.jsx)(wn,{children:Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Fn,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsx)(kn,{children:"Club"}),Object(r.jsx)(kn,{children:"MP"}),Object(r.jsx)(kn,{children:"W"}),Object(r.jsx)(kn,{children:"D"}),Object(r.jsx)(kn,{children:"L"}),Object(r.jsx)(kn,{children:"GF"}),Object(r.jsx)(kn,{children:"GA"}),Object(r.jsx)(kn,{children:"GD"}),Object(r.jsx)(kn,{children:"Pts"})]})}),Object(r.jsx)(zn,{children:s.map((function(n,t){return Object(r.jsxs)(Sn,{children:[Object(r.jsxs)(Pn,{children:[Object(r.jsx)(En,{children:t+1})," ",Object(r.jsx)(Cn,{src:n.img,alt:"team1"}),n.team]}),Object(r.jsx)(Pn,{children:n.MP}),Object(r.jsx)(Pn,{children:n.W}),Object(r.jsx)(Pn,{children:n.D}),Object(r.jsx)(Pn,{children:n.L}),Object(r.jsx)(Pn,{children:n.GF}),Object(r.jsx)(Pn,{children:n.GA}),Object(r.jsx)(Pn,{children:n.GD}),Object(r.jsx)(Pn,{children:n.Pts})]},n.id)}))})]})})]})})}var vn=u.a.section(pn()),mn=u.a.div(hn()),wn=u.a.div(On()),yn=u.a.h3(xn()),Dn=u.a.table(fn()),Fn=u.a.thead(ln()),Sn=u.a.tr(bn()),kn=u.a.th(dn()),zn=u.a.tbody(un()),Pn=u.a.td(on()),En=u.a.p(jn()),Cn=u.a.img(sn()),Ln=e(5),An=e(39);function Gn(){var n=Object(j.a)([""]);return Gn=function(){return n},n}function Mn(){var n=Object(j.a)([""]);return Mn=function(){return n},n}function Jn(){var n=Object(c.useState)([]),t=Object(o.a)(n,2),e=t[0],i=t[1],a=Object(An.a)(),s=a.register,j=a.handleSubmit,u=a.errors;return Object(r.jsx)("div",{children:Object(r.jsx)(Tn,{children:Object(r.jsxs)(qn,{onSubmit:j((function(n){i([].concat(Object(Ln.a)(e),[n])),console.log(e)})),children:[Object(r.jsxs)("center",{children:[Object(r.jsx)("input",{type:"email",placeholder:"email",name:"email",ref:s})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",placeholder:"password",name:"password",ref:s({required:"Password is required",minLength:{value:8,message:"Password must contain at least 8 or more characters!"}})}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",value:"Submit"})]}),u.password&&alert(u.password.message)]})})})}var Tn=u.a.section(Mn()),qn=u.a.form(Gn()),Bn=e(13);function In(){var n=Object(j.a)(["\n    padding: 25px;\n    color: #000;\n    &:hover {\n        background: #DD0543;\n        color: #fff;\n    }\n"]);return In=function(){return n},n}function Nn(){var n=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    margin: 30px 0 0;\n"]);return Nn=function(){return n},n}function Wn(){var n=Object(j.a)(["\n    font-size: 46px;\n    color: #DD0543;\n    cursor: pointer;\n"]);return Wn=function(){return n},n}function Hn(){var n=Object(j.a)(["\n    background: #fff;\n    color: #DD0543;\n    padding: 50px 100px 0; \n    border-bottom: 15px solid #DD0543;\n"]);return Hn=function(){return n},n}function Kn(){return Object(r.jsxs)(Qn,{children:[Object(r.jsx)(Bn.b,{to:"/sports-app",children:Object(r.jsx)(Rn,{children:"Jasu's Sports App"})}),Object(r.jsxs)(Un,{children:[Object(r.jsx)(Bn.b,{to:"/sports-app",children:Object(r.jsx)(Vn,{className:"active",children:"Matches"})}),Object(r.jsx)(Bn.b,{to:"/sports-app/table",children:Object(r.jsx)(Vn,{children:"Table"})}),Object(r.jsx)(Bn.b,{to:"/sports-app/news",children:Object(r.jsx)(Vn,{children:"News"})})]})]})}var Qn=u.a.header(Hn()),Rn=u.a.h1(Wn()),Un=u.a.ul(Nn()),Vn=u.a.li(In()),Xn=e(4);var Yn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Bn.a,{children:[Object(r.jsx)(Kn,{}),Object(r.jsxs)(Xn.c,{children:[Object(r.jsx)(Xn.a,{path:"/sports-app",exact:!0,children:Object(r.jsx)(J,{})}),Object(r.jsx)(Xn.a,{path:"/sports-app/table",children:Object(r.jsx)(gn,{})}),Object(r.jsx)(Xn.a,{path:"/sports-app/news",children:Object(r.jsx)(Jn,{})})]})]})})},Zn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,71)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),r(n),c(n),i(n),a(n)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Yn,{})}),document.getElementById("root")),Zn()}},[[70,1,2]]]);
//# sourceMappingURL=main.245fc758.chunk.js.map