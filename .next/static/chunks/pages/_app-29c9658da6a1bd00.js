(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3653)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(4532),a=n(3353),i=n(1410),c=n(9064),f=n(370),s=n(9955),d=n(4224),p=n(508),h=n(1516),v=n(4266);let _=new Set;function y(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:_,children:b,prefetch:j,passHref:m,replace:x,shallow:M,scroll:C,locale:E,onClick:k,onMouseEnter:P,onTouchStart:w,legacyBehavior:N=!1}=e,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let T=!1!==j,L=l.default.useContext(s.RouterContext),R=l.default.useContext(d.AppRouterContext),I=null!=L?L:R,S=!L,{href:A,as:K}=l.default.useMemo(()=>{if(!L){let e=g(i);return{href:e,as:_?g(_):e}}let[e,t]=u.resolveHref(L,i,!0);return{href:e,as:_?u.resolveHref(L,_):t||e}},[L,i,_]),U=l.default.useRef(A),D=l.default.useRef(K);N&&(r=l.default.Children.only(n));let H=N?r&&"object"==typeof r&&r.ref:t,[X,Z,B]=p.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(D.current!==K||U.current!==A)&&(B(),D.current=K,U.current=A),X(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[K,H,A,B,X]);l.default.useEffect(()=>{I&&Z&&T&&y(I,A,K,{locale:E},S)},[K,A,Z,E,T,null==L?void 0:L.locale,I,S]);let z={ref:q,onClick(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,u,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(h):h()}(e,I,A,K,x,M,C,E,S,T)},onMouseEnter(e){N||"function"!=typeof P||P(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(T||!S)&&y(I,A,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){N||"function"!=typeof w||w(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(T||!S)&&y(I,A,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(c.isAbsoluteUrl(K))z.href=K;else if(!N||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(K,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);z.href=t||v.addBasePath(f.addLocale(K,e,null==L?void 0:L.defaultLocale))}return N?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},O,z),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!l,[f,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,f,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,f,h]};var r=n(7294),o=n(29);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893);n(3814);var o=n(1262),l=n.n(o),u=n(1664),a=n.n(u),i=function(){return(0,r.jsxs)("header",{className:l().header,children:[(0,r.jsx)("div",{className:l().logo,children:"React Meetups"}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/",children:"All Meetups"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},c=n(4302),f=n.n(c),s=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i,{}),(0,r.jsx)("main",{className:f().main,children:e.children})]})},d=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(t,{...n})]})}},3814:function(){},4302:function(e){e.exports={main:"Layout_main__NgJgX"}},1262:function(e){e.exports={header:"MainNavigation_header__WuiTa",logo:"MainNavigation_logo__oTonQ",active:"MainNavigation_active__eKPZi"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);