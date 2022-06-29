(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(215)),l={title:"Changelog",id:"changelog"},o={unversionedId:"around_tidal/changelog",id:"around_tidal/changelog",isDocsHomePage:!1,title:"Changelog",description:"Tidal 1.0.0",source:"@site/docs/around_tidal/changelog.md",slug:"/around_tidal/changelog",permalink:"/docs/around_tidal/changelog",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/around_tidal/changelog.md",version:"current",lastUpdatedBy:"callnasty",lastUpdatedAt:1651580836,sidebar:"docs",previous:{title:"Tidal History",permalink:"/docs/around_tidal/tidal_history"}},c=[{value:"Tidal 1.0.0",id:"tidal-100",children:[{value:"Name changes, new functions, changed behaviour",id:"name-changes-new-functions-changed-behaviour",children:[]},{value:"Interaction",id:"interaction",children:[]},{value:"Other new features",id:"other-new-features",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Tempo and scheduling changes",id:"tempo-and-scheduling-changes",children:[]},{value:"Pattern structure",id:"pattern-structure",children:[]},{value:"Regressions",id:"regressions",children:[]},{value:"Internal and dev changes",id:"internal-and-dev-changes",children:[]}]}],b={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tidal-100"},"Tidal 1.0.0"),Object(r.b)("p",null,"Under the hood, ",Object(r.b)("strong",{parentName:"p"},"Tidal")," ",Object(r.b)("inlineCode",{parentName:"p"},"1.0.0")," is a major rewrite. If you're used to previous versions, this will mostly be evident in terms of new functionality. But there are some breaking changes too. Below is a growing list of changes and additions. I, Yaxu, have tried to thank people who have done/contributed towards things, apologies to those I've missed. Things not marked are probably entirely my fault."),Object(r.b)("h3",{id:"name-changes-new-functions-changed-behaviour"},"Name changes, new functions, changed behaviour"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The old ",Object(r.b)("inlineCode",{parentName:"li"},"scale")," has been renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"range")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scale")," is now used to specify musical scale"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"protate")," and friends has been replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"rot")),Object(r.b)("li",{parentName:"ul"},"New function ",Object(r.b)("inlineCode",{parentName:"li"},"fix")," for manipulating control patterns with matching control values"),Object(r.b)("li",{parentName:"ul"},"New function ",Object(r.b)("inlineCode",{parentName:"li"},"mono")," for making a pattern monophonic (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"bgold"),")"),Object(r.b)("li",{parentName:"ul"},"New function ",Object(r.b)("inlineCode",{parentName:"li"},"smooth")," for turning a discrete/digital numerical pattern into a continuous/analog one, by interpolating between the values (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"bgold"),")"),Object(r.b)("li",{parentName:"ul"},"Chord names can now be put into numerical patterns, e.g. n \"c'maj e'min\". The old ",Object(r.b)("inlineCode",{parentName:"li"},"chordP")," has been removed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"discretise")," is now known as ",Object(r.b)("inlineCode",{parentName:"li"},"segment")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"e")," is now known as ",Object(r.b)("inlineCode",{parentName:"li"},"euclid")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"breakOut")," is now known as ",Object(r.b)("inlineCode",{parentName:"li"},"arpeggiate")),Object(r.b)("li",{parentName:"ul"},"Functions generally standardised into being 'slow', e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"scan")," n will work over n cycles, not squeeze the whole buildup into a single cycle."),Object(r.b)("li",{parentName:"ul"},"Functions that only worked on one numerical type generalised to work on any where it makes sense, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"rand")," can now be used as a pattern of time/rational values as well as double/floating point values (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"msp"),")"),Object(r.b)("li",{parentName:"ul"},"select functions for choosing between patterns with a pattern of floats"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"wchoose")," weights no longer have to add up to ",Object(r.b)("inlineCode",{parentName:"li"},"1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"weave'")," is now known as ",Object(r.b)("inlineCode",{parentName:"li"},"weaveWith")),Object(r.b)("li",{parentName:"ul"},"New ",Object(r.b)("inlineCode",{parentName:"li"},"arp")," function for arpeggiation"),Object(r.b)("li",{parentName:"ul"},"Easy ways to send Custom OSC to systems other than ",Object(r.b)("strong",{parentName:"li"},"SuperDirt")),Object(r.b)("li",{parentName:"ul"},"The meaning of ",Object(r.b)("inlineCode",{parentName:"li"},"stut")," and ",Object(r.b)("inlineCode",{parentName:"li"},"stutWith")," parameters have changed to match each other.")),Object(r.b)("h3",{id:"interaction"},"Interaction"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"solo")," now does a 'true' solo. I.e. there is now also ",Object(r.b)("inlineCode",{parentName:"li"},"unsolo"),"."),Object(r.b)("li",{parentName:"ul"},"You can now run a cycle immediately, once, with ",Object(r.b)("inlineCode",{parentName:"li"},"once")),Object(r.b)("li",{parentName:"ul"},"Experimental transition interpolate for merging between new and old values")),Object(r.b)("h3",{id:"other-new-features"},"Other new features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tidal now takes input from OSC and MIDI - see ",Object(r.b)("inlineCode",{parentName:"li"},"Configuration > I/O"),". This means you can send numbers and strings into ",Object(r.b)("strong",{parentName:"li"},"Tidal")," to be used as control values, function parameters, or parsed sequences"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'Show'")," instance for patterns (and control patterns) is now more readable"),Object(r.b)("li",{parentName:"ul"},"If you treat a control pattern as a number, you'll be manipulating the n control, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'(s "bd" # n "1 2") + 3 '),"will add ",Object(r.b)("inlineCode",{parentName:"li"},"3")," to both ",Object(r.b)("inlineCode",{parentName:"li"},"1")," and ",Object(r.b)("inlineCode",{parentName:"li"},"2"),"."),Object(r.b)("li",{parentName:"ul"},"More parameters are patternable, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"sometimesBy")),Object(r.b)("li",{parentName:"ul"},"The parser can now produce binary (boolean) patterns where euclidean rhythms produce ",Object(r.b)("inlineCode",{parentName:"li"},"true")," and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," values not, true and silence. Useful for use with e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"sew")," and ",Object(r.b)("inlineCode",{parentName:"li"},"struct")),Object(r.b)("li",{parentName:"ul"},"Configuration is done via a boot script and not environment variables")),Object(r.b)("h3",{id:"documentation"},"Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Documentation has moved to a wiki (thanks to many, including ",Object(r.b)("inlineCode",{parentName:"li"},"kindohm"),")"),Object(r.b)("li",{parentName:"ul"},"What we used to call a 'param pattern' is now called a 'control pattern'")),Object(r.b)("h3",{id:"tempo-and-scheduling-changes"},"Tempo and scheduling changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setcps")," is now used to set a fixed tempo"),Object(r.b)("li",{parentName:"ul"},"Tempo can now be patterned, using ",Object(r.b)("inlineCode",{parentName:"li"},"cps")," as a control pattern")),Object(r.b)("h3",{id:"pattern-structure"},"Pattern structure"),Object(r.b)("p",null,"The way patterns are combined has been reworked:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The old 'structure comes from the left' adage no longer applies - you can now control where structure comes from"),Object(r.b)("li",{parentName:"ul"},"The behaviour of ",Object(r.b)("inlineCode",{parentName:"li"},"|+|"),", ",Object(r.b)("inlineCode",{parentName:"li"},"|*|")," has changed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"#")," works the same as before, but is now an alias for ",Object(r.b)("inlineCode",{parentName:"li"},">|"),", rather than ",Object(r.b)("inlineCode",{parentName:"li"},"|=|")," (which no longer exists).")),Object(r.b)("h3",{id:"regressions"},"Regressions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tidal-midi")," is not currently working (but midi is still working great via ",Object(r.b)("strong",{parentName:"li"},"SuperDirt"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tidalink")," is not currently working (should be fixed soon)"),Object(r.b)("li",{parentName:"ul"},"classic ",Object(r.b)("strong",{parentName:"li"},"Dirt")," is not currently supported (should also be fixed soon)")),Object(r.b)("h3",{id:"internal-and-dev-changes"},"Internal and dev changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Switched to ",Object(r.b)("inlineCode",{parentName:"li"},"system.random")," for random number generation (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"d0kt0r0")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MiniTidal")," moved into core tidal repo (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"d0kt0r0"),")"),Object(r.b)("li",{parentName:"ul"},"Started on a unit test suite (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"vivid-synth"),", ",Object(r.b)("inlineCode",{parentName:"li"},"msp"),", ",Object(r.b)("inlineCode",{parentName:"li"},"nini-faroux")," and co)"),Object(r.b)("li",{parentName:"ul"},"More lawful Applicative and Monad instances for Pattern"),Object(r.b)("li",{parentName:"ul"},"Definition of ",Object(r.b)("inlineCode",{parentName:"li"},"<*")," and ",Object(r.b)("inlineCode",{parentName:"li"},"*>"),", that work like ",Object(r.b)("inlineCode",{parentName:"li"},"<*> "),"but using the structure on the left or right"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<*>")," now uses structure on both sides"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"innerJoin")," and ",Object(r.b)("inlineCode",{parentName:"li"},"outerJoin")," for 'flattening' patterns of patterns - works like join but taking structure from the inner or outer pattern respectively."),Object(r.b)("li",{parentName:"ul"},"Patterns are now flagged as either analog or digital"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tidal")," is generally a single process, multithreaded thing, rather than multi-process as before"),Object(r.b)("li",{parentName:"ul"},"The websocket tempo protocol has been replaced with an OSC based one"),Object(r.b)("li",{parentName:"ul"},"The modules have been extensively reorganised, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"Strategies")," no longer exists, but ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Core"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Control")," and ",Object(r.b)("inlineCode",{parentName:"li"},"UI")," do."),Object(r.b)("li",{parentName:"ul"},"Compiles without warnings"),Object(r.b)("li",{parentName:"ul"},"Better stack support (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"tonyday567"),")"),Object(r.b)("li",{parentName:"ul"},"Fleshed out datatype structure (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"tonyday567"),")"),Object(r.b)("li",{parentName:"ul"},"Tidyier travis builds with more haskell versions tested (thanks ",Object(r.b)("inlineCode",{parentName:"li"},"tonyday567"),")"),Object(r.b)("li",{parentName:"ul"},"New function ",Object(r.b)("inlineCode",{parentName:"li"},"inv")," for inverting a binary (boolean) pattern"),Object(r.b)("li",{parentName:"ul"},"Calculation is done based on ",Object(r.b)("inlineCode",{parentName:"li"},"hZ")," rather than calculations/cycle. By default it tidal runs at 20 calculations per second.")))}s.isMDXComponent=!0},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return t?i.a.createElement(m,o(o({ref:n},b),{},{components:t})):i.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=t[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);