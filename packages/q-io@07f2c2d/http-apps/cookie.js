function splitHost(e){var t=portRe.exec(e);return t?[t[1],t[2]]:[e,""]}function allHostsContaining(e){var t=splitHost(e),n=t[0],r=t[1];if(ipRe.test(n))return[n+r];if("localhost"===n)return[n+r];for(var t=n.split("."),i=[];t.length>1;)i.push("."+t.join(".")+r),t.shift();return i}function hostContains(e,t){var n=splitHost(e),r=n[0],i=n[1],o=splitHost(t),a=o[0],s=o[1];return i!==s?!1:ipRe.test(r)||ipRe.test(a)?r===a:/^\./.test(r)?a.lastIndexOf(r)===a.length-r.length||r.slice(1)===a:r===a}function pathContains(e,t){return/^\/$/.test(e)?0===t.indexOf(e):t===e||0===t.indexOf(e+"/")}function concat(e){return[].concat.apply([],e)}var Q=require("q"),Cookie=require("../http-cookie");Q.longStackSupport=!0,exports.CookieJar=function(e){var t={};return function(n){if(!n.headers.host)throw Error("Requests must have a host header");var r=allHostsContaining(n.headers.host),i=new Date,o=concat(r.map(function(e){for(var e in t){var r=t[e];for(var o in r){var a=r[o];for(var s in a){var l=a[s];l.expires&&l.expires>i&&delete l[s]}}}return concat(Object.keys(t).map(function(e){if(!hostContains(e,n.headers.host))return[];var r=t[e];return concat(Object.keys(r).map(function(e){if(!pathContains(e,n.path))return[];var t=r[e];return Object.keys(t).map(function(e){return t[e]}).filter(function(e){return e.secure?n.ssl:!0})}))}))}));return o.length&&(n.headers.cookie=o.map(function(e){return Cookie.stringify(e.key,e.value,e)}).join("; ")),Q.when(e.apply(this,arguments),function(e){if(e.headers=e.headers||{},e.headers["set-cookie"]){var r=n.headers.host,i=splitHost(r),o=i[0],a=ipRe.test(o)?r:"."+r;Array.isArray(e.headers["set-cookie"])||(e.headers["set-cookie"]=[e.headers["set-cookie"]]),e.headers["set-cookie"].forEach(function(n){var r=e.headers.date?new Date(e.headers.date):new Date;n=Cookie.parse(n,r),n.host&&!hostContains(a,n.host)&&delete n.host;var i=a||n.host,o=n.path||"/",s=t[i]=t[i]||{},l=s[o]=s[o]||{};l[n.key]=n}),delete e.headers["set-cookie"]}return e})}};var ipRe=/^\d+\.\d+\.\d+\.\d+$/,portRe=/^(.*)(:\d+)$/;