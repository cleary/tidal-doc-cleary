(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(277)),c={title:"fast",permalink:"wiki/fast/",layout:"wiki",tags:["Functions"]},i={unversionedId:"reference/time-functions/fast",id:"reference/time-functions/fast",isDocsHomePage:!1,title:"fast",description:"Type:",source:"@site/docs/reference/time-functions/fast.md",slug:"/reference/time-functions/fast",permalink:"/docs/reference/time-functions/fast",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time-functions/fast.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"fast :: Pattern Time -> Pattern a -> Pattern a\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"fast"),' speeds up a pattern. For example, the following will play the\nsound pattern "bd sn kurt" twice as fast (i.e. so it repeats twice per\ncycle), and the vowel pattern three times as fast:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ sound (fast 2 "bd sn kurt")\n   # fast 3 (vowel "a e o")\n')),Object(o.b)("p",null,"The first parameter can be patterned, for example to play the pattern at\ntwice the speed for the first half of each cycle and then four times the\nspeed for the second half:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ fast "2 4" $ sound "bd sn kurt cp"\n')),Object(o.b)("p",null,"You can also use this function by its older alias,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"density\n")),Object(o.b)("p",null,"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See also: ",Object(o.b)("a",{parentName:"em",href:"slow",title:"wikilink"},"slow"),".")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/wiki/Category:Time_Functions",title:"wikilink"},"Category:Time Functions")))}s.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);