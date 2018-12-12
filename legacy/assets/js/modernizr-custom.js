/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-mq-setclasses-cssclassprefix:mod_ !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in h)if(h.hasOwnProperty(l)){if(e=[],n=h[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,l,u,f,c="modernizr",p=s("div"),d=a();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function m(e,n,o,i){function a(){f&&(delete j.style,delete j.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var f,c,m,v,y,g=["modernizr","tspan","samp"];!j.style&&g.length;)f=!0,j.modElem=s(g.shift()),j.style=j.modElem.style;for(m=e.length,c=0;m>c;c++)if(v=e[c],y=j.style[v],u(v,"-")&&(v=d(v)),j.style[v]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?v:!0;try{j.style[v]=o}catch(h){}if(j.style[v]!=y)return a(),"pfx"==n?v:!0}return a(),!1}function v(e,n){return function(){return e.apply(n,arguments)}}function y(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?v(o,t||n):o);return!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(a,n,o,i):(a=(e+" "+P.join(s+" ")+s).split(" "),y(a,n,t))}var h=[],C={_version:"3.6.0",_config:{classPrefix:"mod_",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=[],_=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();C.mq=x;var b="Moz O ms Webkit",z=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=z;var E={elem:s("modernizr")};Modernizr._q.push(function(){delete E.elem});var j={style:E.elem.style};Modernizr._q.unshift(function(){delete j.style});var P=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=P,C.testAllProps=g;var N=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=N;var T=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=d(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("objectfit",!!T("objectFit"),{aliases:["object-fit"]}),o(),i(S),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);