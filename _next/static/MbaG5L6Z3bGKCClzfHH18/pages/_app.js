(window.webpackJsonp=window.webpackJsonp||[]).push([["0340"],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n("0iUn"),u=n("sLSF"),a=n("MI3g"),o=n("a7VT"),i=n("Tit0"),l=n("q1tI"),c=n.n(l),f=n("8Bbg"),d=n.n(f),s=(n("p62I"),n("m/Pd")),p=n.n(s),h=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(f.Container,null,c.a.createElement(p.a,null,c.a.createElement("title",null,"Andres Sweeney-Rios"),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Questrial",rel:"stylesheet"}),c.a.createElement("meta",{name:"theme-color",content:"#272727"})),c.a.createElement(t,n))}}]),t}(d.a)},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),u=r(n("0iUn")),a=r(n("MI3g")),o=r(n("a7VT")),i=r(n("AT/M")),l=r(n("sLSF")),c=r(n("Tit0")),f=r(n("dfwq")),d=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new d.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,u.default)(this,f),r=(0,a.default)(this,(0,o.default)(f).call(this,e)),p&&(t.add((0,i.default)(r)),n((0,i.default)(r))),r}return(0,c.default)(f,r),(0,l.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),u=r(n("eVuF")),a=r(n("UXZV")),o=r(n("/HRN")),i=r(n("WaGi")),l=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=d(n("q1tI")),h=s(n("17x9")),v=n("Bu4q"),m=n("nOHt"),y=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"getChildContext",value:function(){return{router:m.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,u=b(t);return p.default.createElement(w,null,p.default.createElement(n,(0,a.default)({},r,{url:u})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return u.default.resolve(v.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return u.default.reject(r)}}}]),t}(p.Component);y.childContextTypes={router:h.default.object},t.default=y;var w=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(p.Component);t.Container=w;var g=v.execOnce(function(){0});function b(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,u=n||t;return e.push(r,u)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,u=n||t;return e.replace(r,u)}}}t.createUrl=b},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),u=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,u(0,n)):e[t]=n}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),u=n("Y7ZC"),a=n("JB68"),o=n("sNwI"),i=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),f=n("fNZA");u(u.S+u.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,u,d,s=a(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,w=f(s);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==w||p==Array&&i(w))for(n=new p(t=l(s.length));t>y;y++)c(n,y,m?v(s[y],y):s[y]);else for(d=w.call(s),n=new p;!(u=d.next()).done;y++)c(n,y,m?o(d,v,[u.value,y],!0):u.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI")),a=n("imt6");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,r=e.hybrid,u=void 0!==r&&r,a=e.hasQuery;return n&&(!u||u&&(void 0!==a&&a))}t.isAmp=o,t.useAmp=function(){return o(u.default.useContext(a.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=u.default.useContext(a.AmpModeContext);return r.enabled=!0,r.hybrid=n,u.default.createElement(e,t)}return r.__nextAmpOnly=!n,r.getInitialProps=e.getInitialProps,r}},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),u=n.n(r);var a=n("d04V"),o=n.n(a),i=n("yLu3"),l=n.n(i);function c(e){return function(e){if(u()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return c})},imt6:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=r(n("q1tI"));t.AmpModeContext=u.createContext({})},ldVq:function(e,t,n){var r=n("QMMT"),u=n("UWiX")("iterator"),a=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[u]||"@@iterator"in t||a.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("q1tI")),o=u(n("4hZ1")),i=n("imt6"),l=n("IClC"),c=n("Wziy");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[a.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(a.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var s=["name","httpEquiv","charSet","viewport","itemProp"];function p(e,t){return e.reduce(function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(f("",t.isAmp)).filter((n=new r.default,u=new r.default,o=new r.default,i={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(u.has(e.type))return!1;u.add(e.type);break;case"meta":for(var t=0,a=s.length;t<a;t++){var l=s[t];if(e.props.hasOwnProperty(l))if("charSet"===l||"viewport"===l){if(o.has(l))return!1;o.add(l)}else{var c=e.props[l],f=i[l]||new r.default;if(f.has(c))return!1;f.add(c),i[l]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return a.default.cloneElement(e,{key:r,className:n})});var n,u,o,i}var h=o.default();function v(e){var t=e.children;return a.default.createElement(i.AmpModeContext.Consumer,null,function(e){return a.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return a.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,isAmp:c.isAmp(e)},t)})})}v.rewind=h.rewind,t.default=v},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["GcxT","5d41","9da1","ad9d"]]]);