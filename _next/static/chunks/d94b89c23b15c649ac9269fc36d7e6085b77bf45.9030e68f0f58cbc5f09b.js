(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},"3Z9Z":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),u=n.n(o),i=n("q1tI"),c=n.n(i),s=n("vUet"),f=["xl","lg","md","sm","xs"],l=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.noGutters,l=e.as,d=void 0===l?"div":l,p=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(s.a)(n,"row"),h=v+"-cols",y=[];return f.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&y.push(""+h+r+"-"+t)})),c.a.createElement(d,Object(r.a)({ref:t},p,{className:u.a.apply(void 0,[o,v,i&&"no-gutters"].concat(y))}))}));l.displayName="Row",l.defaultProps={noGutters:!1},t.a=l},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),u=n.n(o),i=n("q1tI"),c=n.n(i),s=n("vUet"),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,i=e.as,f=void 0===i?"div":i,l=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(n,"container"),v="string"===typeof o?"-"+o:"-fluid";return c.a.createElement(f,Object(r.a)({ref:t},d,{className:u()(l,o?""+p+v:p)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.a=f},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var f=d[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(l)?(p.add(l),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),u=n.n(o),i=n("q1tI"),c=n.n(i),s=n("vUet"),f=["xl","lg","md","sm","xs"],l=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,l=void 0===i?"div":i,d=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(n,"col"),v=[],h=[];return f.forEach((function(e){var t,n,r,a=d[e];if(delete d[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var u="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+u:""+p+u+"-"+t),null!=r&&h.push("order"+u+"-"+r),null!=n&&h.push("offset"+u+"-"+n)})),v.length||v.push(p),c.a.createElement(l,Object(r.a)({},d,{ref:t,className:u.a.apply(void 0,[o].concat(v,h))}))}));l.displayName="Col",t.a=l},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&e.push(u)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),c=n("vNVm"),s={};function f(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",l=o.default.useMemo((function(){var t=(0,u.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,u.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var g=o.Children.only(v),w=g&&"object"===typeof g&&g.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),M=r(x,2),O=M[0],I=M[1],C=o.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,o.useEffect)((function(){var e=I&&t&&(0,u.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,I,b,t,n]);var j={ref:C,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,h,y,m,b)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof b?b:n&&n.locale,P=n&&n.isLocaleDomain&&(0,u.getDomainLocale)(p,_,n&&n.locales,n&&n.domainLocales);j.href=P||(0,u.addBasePath)((0,u.addLocale)(p,_,n&&n.defaultLocale))}return o.default.cloneElement(g,j)};t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=(0,a.useRef)(),s=(0,a.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){if(!u&&!l){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[l]),[p,l]};var a=n("q1tI"),o=n("0G5g"),u="undefined"!==typeof IntersectionObserver;var i=new Map},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function u(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);