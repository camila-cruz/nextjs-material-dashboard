_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{FoiA:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o("rePB"),a=o("q1tI"),i=o.n(a),r=o("TSYQ"),c=o.n(r),s=o("R/WZ"),l=o("t2Oo"),u=o("PsDL"),f=o("ZPUd"),p=o.n(f),d=o("nnxe"),m=i.a.createElement,b=Object(s.a)(d.a);function g(e){var t=b(),o=e.message,a=e.color,i=e.close,r=e.icon,s=e.rtlActive,f=[],d=c()(Object(n.a)({},t.iconMessage,void 0!==r));return void 0!==i&&(f=[m(u.a,{className:t.iconButton,key:"close","aria-label":"Close",color:"inherit"},m(p.a,{className:t.close}))]),m(l.a,{message:m("div",null,void 0!==r?m(e.icon,{className:t.icon}):null,m("span",{className:d},o)),classes:{root:t.root+" "+t[a],message:t.message,action:c()(Object(n.a)({},t.actionRTL,s))},action:f})}},Ji3w:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("q1tI")),i=(0,n(o("8/g6")).default)(a.default.createElement("path",{d:"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"}),"AddAlert");t.default=i},"M+Gb":function(e,t,o){"use strict";o.r(t);var n=o("ODXe"),a=o("q1tI"),i=o.n(a),r=o("R/WZ"),c=o("Ji3w"),s=o.n(c),l=o("i6E2"),u=o("i4t8"),f=o("mtPR"),p=o("Kg+a"),d=o("FoiA"),m=o("rePB"),b=o("TSYQ"),g=o.n(b),h=o("Ff2n"),O=o("wx14"),v=(o("17x9"),o("iuhU")),w=o("H2TA"),x=o("wpWl"),j=o("668i"),y=o("Ovef"),E=o("NqtD"),T=o("x6Ns"),C=o("bqsI"),k=o("t2Oo"),N=a.forwardRef((function(e,t){var o=e.action,n=e.anchorOrigin,i=(n=void 0===n?{vertical:"bottom",horizontal:"center"}:n).vertical,r=n.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,l=e.children,u=e.classes,f=e.className,p=e.ClickAwayListenerProps,d=e.ContentProps,m=e.disableWindowBlurListener,b=void 0!==m&&m,g=e.message,w=e.onClose,N=e.onEnter,S=e.onEntered,P=e.onEntering,A=e.onExit,D=e.onExited,R=e.onExiting,W=e.onMouseEnter,L=e.onMouseLeave,I=e.open,M=e.resumeHideDuration,B=e.TransitionComponent,H=void 0===B?C.a:B,F=e.transitionDuration,_=void 0===F?{enter:x.b.enteringScreen,exit:x.b.leavingScreen}:F,z=e.TransitionProps,q=Object(h.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=a.useRef(),U=a.useState(!0),Y=U[0],G=U[1],X=Object(y.a)((function(){w&&w.apply(void 0,arguments)})),Z=Object(y.a)((function(e){w&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){X(null,"timeout")}),e))}));a.useEffect((function(){return I&&Z(s),function(){clearTimeout(J.current)}}),[I,s,Z]);var V=function(){clearTimeout(J.current)},K=a.useCallback((function(){null!=s&&Z(null!=M?M:.5*s)}),[s,M,Z]);return a.useEffect((function(){if(!b&&I)return window.addEventListener("focus",K),window.addEventListener("blur",V),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",V)}}),[b,K,I]),!I&&Y?null:a.createElement(j.a,Object(O.a)({onClickAway:function(e){w&&w(e,"clickaway")}},p),a.createElement("div",Object(O.a)({className:Object(v.a)(u.root,u["anchorOrigin".concat(Object(E.a)(i)).concat(Object(E.a)(r))],f),onMouseEnter:function(e){W&&W(e),V()},onMouseLeave:function(e){L&&L(e),K()},ref:t},q),a.createElement(H,Object(O.a)({appear:!0,in:I,onEnter:Object(T.a)((function(){G(!1)}),N),onEntered:S,onEntering:P,onExit:A,onExited:Object(T.a)((function(){G(!0)}),D),onExiting:R,timeout:_,direction:"top"===i?"down":"up"},z),l||a.createElement(k.a,Object(O.a)({message:g,action:o},d)))))})),S=Object(w.a)((function(e){var t={top:8},o={bottom:8},n={justifyContent:"flex-end"},a={justifyContent:"flex-start"},i={top:24},r={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(O.a)({},t,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({},i,l))),anchorOriginBottomCenter:Object(O.a)({},o,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({},r,l))),anchorOriginTopRight:Object(O.a)({},t,n,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({left:"auto"},i,c))),anchorOriginBottomRight:Object(O.a)({},o,n,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({left:"auto"},r,c))),anchorOriginTopLeft:Object(O.a)({},t,a,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({right:"auto"},i,s))),anchorOriginBottomLeft:Object(O.a)({},o,a,Object(m.a)({},e.breakpoints.up("sm"),Object(O.a)({right:"auto"},r,s)))}}),{flip:!1,name:"MuiSnackbar"})(N),P=o("PsDL"),A=o("ZPUd"),D=o.n(A),R=o("nnxe"),W=i.a.createElement,L=Object(r.a)(R.a);function I(e){var t=L(),o=e.message,n=e.color,a=e.close,i=e.icon,r=e.place,c=e.open,s=e.rtlActive,l=[],u=g()(Object(m.a)({},t.iconMessage,void 0!==i));return void 0!==a&&(l=[W(P.a,{className:t.iconButton,key:"close","aria-label":"Close",color:"inherit",onClick:function(){return e.closeNotification()}},W(D.a,{className:t.close}))]),W(S,{anchorOrigin:{vertical:-1===r.indexOf("t")?"bottom":"top",horizontal:-1!==r.indexOf("l")?"left":-1!==r.indexOf("c")?"center":"right"},open:c,message:W("div",null,void 0!==i?W(e.icon,{className:t.icon}):null,W("span",{className:u},o)),action:l,ContentProps:{classes:{root:t.root+" "+t[n],message:t.message,action:g()(Object(m.a)({},t.actionRTL,s))}}})}var M=o("A2So"),B=o("2zww"),H=o("UsYt"),F=i.a.createElement,_=Object(r.a)({cardCategoryWhite:{"&,& a,& a:hover,& a:focus":{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},"& a,& a:hover,& a:focus":{color:"#FFFFFF"}},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:"#777",fontSize:"65%",fontWeight:"400",lineHeight:"1"}}});function z(){var e=_(),t=i.a.useState(!1),o=Object(n.a)(t,2),a=o[0],r=o[1],c=i.a.useState(!1),l=Object(n.a)(c,2),m=l[0],b=l[1],g=i.a.useState(!1),h=Object(n.a)(g,2),O=h[0],v=h[1],w=i.a.useState(!1),x=Object(n.a)(w,2),j=x[0],y=x[1],E=i.a.useState(!1),T=Object(n.a)(E,2),C=T[0],k=T[1],N=i.a.useState(!1),S=Object(n.a)(N,2),P=S[0],A=S[1];i.a.useEffect((function(){return function(){for(var e=window.setTimeout(null,0);e--;)window.clearTimeout(e)}}));var D=function(e){switch(e){case"tl":a||(r(!0),setTimeout((function(){r(!1)}),6e3));break;case"tc":m||(b(!0),setTimeout((function(){b(!1)}),6e3));break;case"tr":O||(v(!0),setTimeout((function(){v(!1)}),6e3));break;case"bl":j||(y(!0),setTimeout((function(){y(!1)}),6e3));break;case"bc":C||(k(!0),setTimeout((function(){k(!1)}),6e3));break;case"br":P||(A(!0),setTimeout((function(){A(!1)}),6e3))}};return F(M.a,null,F(B.a,{color:"primary"},F("h4",{className:e.cardTitleWhite},"Notifications"),F("p",{className:e.cardCategoryWhite},"Handcrafted by our friends from"," ",F("a",{target:"_blank",href:"https://material-ui-next.com/?ref=creativetime"},"Material UI")," ","and styled by"," ",F("a",{target:"_blank",href:"https://www.creative-tim.com/?ref=njsmd-notifications-page"},"Creative Tim"),". Please checkout the"," ",F("a",{href:"#pablo",target:"_blank"},"full documentation"),".")),F(H.a,null,F(f.a,null,F(u.a,{xs:12,sm:12,md:6},F("h5",null,"Notifications Style"),F("br",null),F(d.a,{message:"This is a plain notification"}),F(d.a,{message:"This is a notification with close button.",close:!0}),F(d.a,{message:"This is a notification with close button and icon.",close:!0,icon:s.a}),F(d.a,{message:"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",close:!0,icon:s.a})),F(u.a,{xs:12,sm:12,md:6},F("h5",null,"Notifications States"),F("br",null),F(d.a,{message:'INFO - This is a regular notification made with color="info"',close:!0,color:"info"}),F(d.a,{message:'SUCCESS - This is a regular notification made with color="success"',close:!0,color:"success"}),F(d.a,{message:'WARNING - This is a regular notification made with color="warning"',close:!0,color:"warning"}),F(d.a,{message:'DANGER - This is a regular notification made with color="danger"',close:!0,color:"danger"}),F(d.a,{message:'PRIMARY - This is a regular notification made with color="primary"',close:!0,color:"primary"}))),F("br",null),F("br",null),F(f.a,{justify:"center"},F(u.a,{xs:12,sm:12,md:6,style:{textAlign:"center"}},F("h5",null,"Notifications Places",F("br",null),F("small",null,"Click to view notifications")))),F(f.a,{justify:"center"},F(u.a,{xs:12,sm:12,md:10,lg:8},F(f.a,null,F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("tl")}},"Top Left"),F(I,{place:"tl",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:a,closeNotification:function(){return r(!1)},close:!0})),F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("tc")}},"Top Center"),F(I,{place:"tc",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:m,closeNotification:function(){return b(!1)},close:!0})),F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("tr")}},"Top Right"),F(I,{place:"tr",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:O,closeNotification:function(){return v(!1)},close:!0}))))),F(f.a,{justify:"center"},F(u.a,{xs:12,sm:12,md:10,lg:8},F(f.a,null,F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("bl")}},"Bottom Left"),F(I,{place:"bl",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:j,closeNotification:function(){return y(!1)},close:!0})),F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("bc")}},"Bottom Center"),F(I,{place:"bc",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:C,closeNotification:function(){return k(!1)},close:!0})),F(u.a,{xs:12,sm:12,md:4},F(p.a,{fullWidth:!0,color:"primary",onClick:function(){return D("br")}},"Bottom Right"),F(I,{place:"br",color:"info",icon:s.a,message:"Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.",open:P,closeNotification:function(){return A(!1)},close:!0})))))))}z.layout=l.a;t.default=z},UwaY:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/notifications",function(){return o("M+Gb")}])},ZPUd:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("q1tI")),i=(0,n(o("8/g6")).default)(a.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},i6E2:function(e,t,o){"use strict";o.d(t,"a",(function(){return N}));var n=o("wx14"),a=o("ODXe"),i=o("Ff2n"),r=o("q1tI"),c=o.n(r),s=o("nOHt"),l=o("t/UT"),u=(o("faiq"),o("R/WZ")),f=o("gWHO"),p=o("HXcA"),d=o("RG8o"),m=o("em7R"),b=o("8cHP"),g=o("rePB"),h=o("jfJP");function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach((function(t){Object(g.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var w,x=function(e){var t;return{wrapper:{position:"relative",top:"0",height:"100vh"},mainPanel:v(v((t={},Object(g.a)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(h.j,"px)")}),Object(g.a)(t,"overflow","auto"),Object(g.a)(t,"position","relative"),Object(g.a)(t,"float","right"),t),h.z),{},{maxHeight:"100%",width:"100%",overflowScrolling:"touch"}),content:{marginTop:"70px",padding:"30px 15px",minHeight:"calc(100vh - 123px)"},container:h.c,map:{marginTop:"70px"}}},j=o("fC67"),y=o.n(j),E=o("p3mC"),T=o.n(E),C=c.a.createElement,k=Object(u.a)(x);function N(e){var t=e.children,o=Object(i.a)(e,["children"]),r=Object(s.useRouter)(),u=k(),g=c.a.createRef(),h=c.a.useState(y.a),O=Object(a.a)(h,2),v=O[0],x=O[1],j=c.a.useState("white"),E=Object(a.a)(j,2),N=E[0],S=E[1],P=c.a.useState("dropdown show"),A=Object(a.a)(P,2),D=A[0],R=A[1],W=c.a.useState(!1),L=Object(a.a)(W,2),I=L[0],M=L[1],B=function(){M(!I)},H=function(){return"/admin/maps"!==r.pathname},F=function(){window.innerWidth>=960&&M(!1)};return c.a.useEffect((function(){return navigator.platform.indexOf("Win")>-1&&(w=new l.a(g.current,{suppressScrollX:!0,suppressScrollY:!1}),document.body.style.overflow="hidden"),window.addEventListener("resize",F),function(){navigator.platform.indexOf("Win")>-1&&w.destroy(),window.removeEventListener("resize",F)}}),[g]),C("div",{className:u.wrapper},C(d.a,Object(n.a)({routes:b.a,logoText:"Creative Tim",logo:T.a,image:v,handleDrawerToggle:B,open:I,color:N},o)),C("div",{className:u.mainPanel,ref:g},C(f.a,Object(n.a)({routes:b.a,handleDrawerToggle:B},o)),H()?C("div",{className:u.content},C("div",{className:u.container},t)):C("div",{className:u.map},t),H()?C(p.a,null):null,C(m.a,{handleImageClick:function(e){x(e)},handleColorClick:function(e){S(e)},bgColor:N,bgImage:v,handleFixedClick:function(){R("dropdown"===D?"dropdown show":"dropdown")},fixedClasses:D})))}},nnxe:function(e,t,o){"use strict";var n=o("rePB"),a=o("jfJP");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c={root:r(r({},a.i),{},{flexWrap:"unset",position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:a.D,color:a.k[7],borderRadius:"3px",minWidth:"unset",maxWidth:"unset",boxShadow:"0 12px 20px -10px rgba("+Object(a.l)(a.D)+", 0.28), 0 4px 20px 0px rgba("+Object(a.l)(a.a)+", 0.12), 0 7px 8px -5px rgba("+Object(a.l)(a.D)+", 0.2)"}),top20:{top:"20px"},top40:{top:"40px"},info:r({backgroundColor:a.o[3],color:a.D},a.m),success:r({backgroundColor:a.x[3],color:a.D},a.v),warning:r({backgroundColor:a.C[3],color:a.D},a.A),danger:r({backgroundColor:a.f[3],color:a.D},a.d),primary:r({backgroundColor:a.r[3],color:a.D},a.p),rose:r({backgroundColor:a.u[3],color:a.D},a.s),message:{padding:"0",display:"block",maxWidth:"89%"},close:{width:"11px",height:"11px"},iconButton:{width:"24px",height:"24px",padding:"0px"},icon:{display:"block",left:"15px",position:"absolute",top:"50%",marginTop:"-15px",width:"30px",height:"30px"},infoIcon:{color:a.o[3]},successIcon:{color:a.x[3]},warningIcon:{color:a.C[3]},dangerIcon:{color:a.f[3]},primaryIcon:{color:a.r[3]},roseIcon:{color:a.u[3]},iconMessage:{paddingLeft:"50px",display:"block"},actionRTL:{marginLeft:"-8px",marginRight:"auto"}};t.a=c},t2Oo:function(e,t,o){"use strict";var n=o("Ff2n"),a=o("rePB"),i=o("wx14"),r=o("q1tI"),c=(o("17x9"),o("iuhU")),s=o("H2TA"),l=o("kKAo"),u=o("ye/S"),f=r.forwardRef((function(e,t){var o=e.action,a=e.classes,s=e.className,u=e.message,f=e.role,p=void 0===f?"alert":f,d=Object(n.a)(e,["action","classes","className","message","role"]);return(r.createElement(l.a,Object(i.a)({role:p,square:!0,elevation:6,className:Object(c.a)(a.root,s),ref:t},d),r.createElement("div",{className:a.message},u),o?r.createElement("div",{className:a.action},o):null))}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,o=Object(u.b)(e.palette.background.default,t);return{root:Object(i.a)({},e.typography.body2,Object(a.a)({color:e.palette.getContrastText(o),backgroundColor:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(f)}},[["UwaY",0,2,1,3,5,6,4]]]);