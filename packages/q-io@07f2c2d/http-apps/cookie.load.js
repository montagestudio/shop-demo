montageDefine("07f2c2d","http-apps/cookie",{dependencies:["q","../http-cookie"],factory:function(e,t){function n(e){var t=c.exec(e);return t?[t[1],t[2]]:[e,""]}function r(e){var t=n(e),r=t[0],i=t[1];if(u.test(r))return[r+i];if("localhost"===r)return[r+i];for(var t=r.split("."),o=[];t.length>1;)o.push("."+t.join(".")+i),t.shift();return o}function i(e,t){var r=n(e),i=r[0],o=r[1],a=n(t),s=a[0],l=a[1];return o!==l?!1:u.test(i)||u.test(s)?i===s:/^\./.test(i)?s.lastIndexOf(i)===s.length-i.length||i.slice(1)===s:i===s}function o(e,t){return/^\/$/.test(e)?0===t.indexOf(e):t===e||0===t.indexOf(e+"/")}function a(e){return[].concat.apply([],e)}var s=e("q"),l=e("../http-cookie");s.longStackSupport=!0,t.CookieJar=function(e){var t={};return function(c){if(!c.headers.host)throw Error("Requests must have a host header");var h=r(c.headers.host),d=new Date,p=a(h.map(function(e){for(var e in t){var n=t[e];for(var r in n){var s=n[r];for(var l in s){var u=s[l];u.expires&&u.expires>d&&delete u[l]}}}return a(Object.keys(t).map(function(e){if(!i(e,c.headers.host))return[];var n=t[e];return a(Object.keys(n).map(function(e){if(!o(e,c.path))return[];var t=n[e];return Object.keys(t).map(function(e){return t[e]}).filter(function(e){return e.secure?c.ssl:!0})}))}))}));return p.length&&(c.headers.cookie=p.map(function(e){return l.stringify(e.key,e.value,e)}).join("; ")),s.when(e.apply(this,arguments),function(e){if(e.headers=e.headers||{},e.headers["set-cookie"]){var r=c.headers.host,o=n(r),a=o[0],s=u.test(a)?r:"."+r;Array.isArray(e.headers["set-cookie"])||(e.headers["set-cookie"]=[e.headers["set-cookie"]]),e.headers["set-cookie"].forEach(function(n){var r=e.headers.date?new Date(e.headers.date):new Date;n=l.parse(n,r),n.host&&!i(s,n.host)&&delete n.host;var o=s||n.host,a=n.path||"/",u=t[o]=t[o]||{},c=u[a]=u[a]||{};c[n.key]=n}),delete e.headers["set-cookie"]}return e})}};var u=/^\d+\.\d+\.\d+\.\d+$/,c=/^(.*)(:\d+)$/}});