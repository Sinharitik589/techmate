_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{PhZ4:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return D}));var a=n("8Kt/"),r=n.n(a),o=n("EVdn"),i=n.n(o),l=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return l(e,t),e}(Error);function s(t,e){if(!t)throw new c(e)}function u(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}var h=n("q1tI"),d=n.n(h),p=n("TSYQ"),g=n.n(p),f=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),m=function(){return(m=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},w=function(t,e,n,a){return new(n||(n=Promise))((function(r,o){function i(t){try{c(a.next(t))}catch(e){o(e)}}function l(t){try{c(a.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}c((a=a.apply(t,e||[])).next())}))},v=function(t,e){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(l){o=[6,l],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},b=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},y=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},_=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},k=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function C(t,e,n){var a=e.height,r=e.width,o=b(e,["height","width"]),i=m({height:a,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),l=window.open(t,"",Object.keys(i).map((function(t){return t+"="+i[t]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(t){console.error(t)}}),1e3);return l}var O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,a=n.onShareWindowClose,r=n.windowHeight,o=void 0===r?400:r,i=n.windowPosition,l=void 0===i?"windowCenter":i,c=n.windowWidth,s=void 0===c?550:c;C(t,m({height:o,width:s},"windowCenter"===l?_(s,o):k(s,o)),a)},e.handleClick=function(t){return w(e,void 0,void 0,(function(){var e,n,a,r,o,i,l,c,s,u;return v(this,(function(h){switch(h.label){case 0:return e=this.props,n=e.beforeOnClick,a=e.disabled,r=e.networkLink,o=e.onClick,i=e.url,l=e.openShareDialogOnClick,c=e.opts,s=r(i,c),a?[2]:(t.preventDefault(),n?(u=n(),y(u)?[4,u]:[3,2]):[3,2]);case 1:h.sent(),h.label=2;case 2:return l&&this.openShareDialog(s),o&&o(t,s),[2]}}))}))},e}return f(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,a=t.disabled,r=t.disabledStyle,o=t.forwardedRef,i=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),c=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,b(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=g()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},n),h=m(m(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),a&&r);return d.a.createElement("button",m({},s,{"aria-label":s["aria-label"]||i,className:u,onClick:this.handleClick,ref:o,style:h}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(h.Component),N=function(){return(N=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var j=function(t,e,n,a){function r(r,o){var i=n(r),l=N({},r);return Object.keys(i).forEach((function(t){delete l[t]})),d.a.createElement(O,N({},a,l,{forwardedRef:o,networkName:t,networkLink:e,opts:n(r)}))}return r.displayName="ShareButton-"+t,Object(h.forwardRef)(r)};var S=j("facebook",(function(t,e){var n=e.quote,a=e.hashtag;return s(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:t,quote:n,hashtag:a})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),z=function(){return(z=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},H=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n};function x(t){var e=function(e){var n=e.bgStyle,a=e.borderRadius,r=e.iconFillColor,o=e.round,i=e.size,l=H(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return d.a.createElement("svg",z({viewBox:"0 0 64 64",width:i,height:i},l),o?d.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):d.a.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:t.color,style:n}),d.a.createElement("path",{d:t.path,fill:r}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var M=x({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var P=j("whatsapp",(function(t,e){var n=e.title,a=e.separator;return s(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+u({text:n?n+a+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400}),E=x({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var A=j("twitter",(function(t,e){var n=e.title,a=e.via,r=e.hashtags,o=void 0===r?[]:r,i=e.related,l=void 0===i?[]:i;return s(t,"twitter.url"),s(Array.isArray(o),"twitter.hashtags is not an array"),s(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+u({url:t,text:n,via:a,hashtags:o.length>0?o.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),I=x({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),T=n("97+O"),B=n("7vrA"),L=n("3Z9Z"),q=n("JI6e"),V=n("YFqc"),F=n.n(V),R=d.a.createElement,D=!0;e.default=function(t){var e=t.blog,n=function(t){for(var e=t,n=0;n<t.length;n++)e=e.replace(" ","_");return e},a=function(t,e,n){if(t.length>0){var a=t.split(",");return R(d.a.Fragment,null,R("div",{style:{backgroundColor:n}},e),R("ul",null,a.map((function(t){if(t.length>0)return R("li",null,t)}))))}},o=new Date(e.createdAt),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()],c=o.getDate(),s=["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()],u=o.getFullYear(),h="".concat(l," ").concat(c," ").concat(s," ").concat(u),p=e.description.split("\n").join("<br/>");return R("div",{className:"about"},R(r.a,null,R("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),R("title",null,e.heading),R("meta",{name:"title",content:e.heading}),R("meta",{name:"description",content:e.meta_description}),R("meta",{property:"og:type",content:"website"}),R("meta",{property:"og:url",content:"https://thtechmates.in/".concat(n(e.heading))}),R("meta",{property:"og:title",content:e.heading}),R("meta",{property:"og:description",content:e.meta_description}),R("meta",{property:"og:image",content:e.imageUrl}),R("meta",{property:"twitter:card",content:"summary_large_image"}),R("meta",{property:"twitter:url",content:"https://thtechmates.in/".concat(n(e.heading))}),R("meta",{property:"twitter:title",content:e.heading}),R("meta",{property:"twitter:description",content:e.meta_description}),R("meta",{property:"twitter:image",content:e.imageUrl}),R("script",{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",integrity:"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",crossorigin:"anonymous"}),R("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",crossorigin:"anonymous"}),R("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",integrity:"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",crossorigin:"anonymous"}),R("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),R("link",{rel:"shortcut icon",href:"../logo.jpeg"})),R("nav",null,R(F.a,{href:"/",as:"/"},R("a",null,R("img",{alt:"logo",className:"logo_img",src:"../logo.jpeg"}))),R("span",{className:"techmate",style:{color:"blue"}},"<TECH_",R("span",{style:{color:"black"}},"MATE/>")),R("span",{className:"toggler_icon",onClick:function(){i()("#header_toggle").slideToggle()}},R("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-list",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},R("path",{"fill-rule":"evenodd",d:"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))),R("div",{className:"desc_toggler"},R(F.a,{href:"/",as:"/"},R("a",null,R("span",{className:"toggler_menu"},"Home"))),R(T.a,{as:"span",className:"toggler_menu"},"Categories",R(T.a.Toggle,{variant:"success",as:"span",id:"dropdown-split-basic"}),R(T.a.Menu,null,R(T.a.Item,{as:"div"},R(F.a,{href:{pathname:"/Categories[category]"},as:{pathname:"/Categories/gadgets"},passHref:!0},R("a",{style:{color:"black"}},"Gadgets"))),R(T.a.Item,{as:"div"},R(F.a,{href:{pathname:"/Categories[category]"},as:{pathname:"/Categories/colleges"},passHref:!0},R("a",{style:{color:"black"}},"Colleges"))))),R(F.a,{href:"/contact",as:"/contact"},R("a",null,R("span",{className:"toggler_menu"},"Contact"))),R(F.a,{href:"/about",as:"/about"},R("a",null,R("span",{className:"toggler_menu"},"About"))))),R("div",{id:"header_toggle"},R("div",{className:"header_toggler"},R(F.a,{href:"/",as:"/"},R("a",null,R("span",{style:{color:"black"},id:"home"},"Home"))),R(T.a,null,"Categories",R(T.a.Toggle,{variant:"success",as:"span",id:"dropdown-split-basic"}),R(T.a.Menu,null,R(T.a.Item,null,R(F.a,{href:{pathname:"/Categories[category]"},as:{pathname:"/Categories/gadgets"},passHref:!0},R("a",{style:{color:"black"}},"Gadgets"))),R(T.a.Item,null,R(F.a,{href:{pathname:"/Categories[category]"},as:{pathname:"/Categories/colleges"},passHref:!0},R("a",{style:{color:"black"}},"Colleges"))))),R(F.a,{href:"/contact",as:"/contact"},R("a",{style:{color:"black"}},R("span",{id:"contact"},"Contact"))),R(F.a,{href:"/about",as:"/about"},R("a",{style:{color:"black"}},R("span",{id:"about"},"About"))))),R(B.a,null,R("main",null,R(L.a,null,R(q.a,{xs:12,md:8},R("h3",{id:"heading"},e.heading),R("hr",null),R("h5",{className:"time"},R("span",null,R("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-calendar-check",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},R("path",{"fill-rule":"evenodd",d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),R("path",{"fill-rule":"evenodd",d:"M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"}),R("path",{"fill-rule":"evenodd",d:"M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"})),h),R("span",null,R("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pencil",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},R("path",{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),R("path",{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})),e.username)),R("img",{className:"heading_img",alt:e.heading,src:e.imageUrl}),R("div",{className:"icon_container"},R("span",null,R(S,{url:"https://thtechmates.in/blogs/".concat(e.heading),quote:e.heading},R(M,{size:50,round:!0}))),R("span",null,R(P,{url:"https://thtechmates.in/blogs/".concat(n(e.heading)),title:e.heading},R(E,{size:50,round:!0}))),R("span",null,R(A,{url:"https://thtechmates.in/blogs/".concat(n(e.heading)),title:e.heading,via:"dspeakingsoul"},R(I,{size:50,round:!0})))),R("hr",null),R("p",{className:"subheading description_sub",dangerouslySetInnerHTML:{__html:p}}),e.subheading.map((function(t){var n=t.title,r=t.content,o=t.key_feature,i=t.pros,l=t.cons,c=t.flipkart,s=t.amazon,u=function(t){var n=t;return e.urls.map((function(t){console.log(t,"value"),n=n.replace("".concat(t.keyword),"<a href=".concat(t.url,">").concat(t.keyword,"</a>"))})),n}(r.split("\n").join("<br/>"));return R("div",{className:"subheading"},R("h3",{dangerouslySetInnerHTML:{__html:n}}),R("div",{className:"subheading-image"},function(t,e){if(t)return R("img",{alt:e,src:t})}(t.url,n)),R("p",{dangerouslySetInnerHTML:{__html:u}}),R("div",{className:"pro-con"},a(o,"Key Features","blue")),R("div",{className:"pro-con"},a(i,"Pros","green")),R("div",{className:"pro-con"},a(l,"Cons","red")),R("div",{className:"row"},function(t,e){if(t.length>0&&e.length>0)return R(d.a.Fragment,null,R("a",{href:e,className:"col-md-4 buy-button"},R("img",{style:{margin:0,padding:0},src:"https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",alt:"buy on amazon"}),R("div",null,"Buy on amazon")),R("a",{className:"col-md-4 offset-md-4 buy-button",href:t},R("img",{style:{margin:0,padding:0},src:"https://latestnews.fresherslive.com/images/articles/ians/origin/2020/07/14/walmart-led-investors-pump-in-12-bn-in-flipkart-group-5f0da8994d322-1594730649.jpg",alt:"buy on flipkart"}),R("div",{style:{backgroundColor:"#0b275b",color:"white"}},"Buy on flipkart")))}(c,s)))})),function(t){if(t.length>0)return R("div",{className:"subheading"},R("h3",null,"Conclusion"),R("p",{dangerouslySetInnerHTML:{__html:t}}))}(e.conclusion)),R(q.a,{xs:12,md:4},R("div",{className:"right"},R("div",{id:"ad"},"Space For Ad"),R("div",{id:"quest"},e.questions.map((function(t,e){return R("div",{className:"quest-container"},R("div",{id:"question_".concat(e)},t.question,R("span",{id:"question_button_".concat(e),onClick:function(){!function(t){i()("#answer_".concat(t)).toggle(),i()("#answer_".concat(t)).is(":hidden")?i()("#question_button_".concat(t)).html('<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n</svg>'):i()("#question_button_".concat(t)).html('<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n</svg>')}(e)}},R("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},R("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})))),R("p",{id:"answer_".concat(e)},t.answer))})))))))),R("footer",null,R("div",null,R("a",{href:"https://www.linkedin.com/in/tech-mate-9846731b6"},R("svg",{id:"Bold","enable-background":"new 0 0 24 24",height:"25",viewBox:"0 0 24 24",width:"25",xmlns:"http://www.w3.org/2000/svg"},R("path",{d:"m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"}),R("path",{d:"m.396 7.977h4.976v16.023h-4.976z"}),R("path",{d:"m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"}))),R("a",{href:"https://twitter.com/the_tech_mate_?s=08"},R("img",{alt:"twitter",src:"../twitter.svg"})),R("a",{href:"https://www.facebook.com/Tech_Mate-101184858397572/"},R("img",{alt:"facebook",src:"../facebook.svg"})),R("a",{href:"https://www.instagram.com/the_tech_mate_/?hl=en"},R("img",{alt:"instagram",src:"../instagram.svg"}))),R("div",null,R(F.a,{href:"/about",as:"/about"},R("a",{style:{color:"#808080",marginLeft:10}},"About")),R(F.a,{href:"/contact",as:"/contact"},R("a",{style:{color:"#808080",marginLeft:10}},"Contact"))),R("div",null,R("span",{dangerouslySetInnerHTML:{__html:"&#169Copyright 2020 All rights reserved"}}))))}},aTOK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[blog]",function(){return n("PhZ4")}])}},[["aTOK",0,2,4,1,3]]]);