(function(e){"use strict";var t,n=function(t){function n(){document.removeEventListener("DOMContentLoaded",n,!0),u=!0,l()}function r(e){if(!_[e]&&g[e]){var t=_[e]={};_[e]=g[e](r,t)||t}return _[e]}function s(){h=r("promise"),c=r("require"),d=r("mini-url"),l()}function l(){u&&c&&t(c,h,d)}var u,c,h,d,p=i();/interactive|complete/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n,!0);var m={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload){var f=a(window.location,p.mrLocation);for(var v in m)o(a(f,m[v]))}var g={};e.bootstrap=function(t,n){g[t]=n,delete m[t];for(t in m)return;delete e.bootstrap,s()},e.bootstrap("mini-url",function(e,t){t.resolve=a});var _={}},i=function(){var e,n,i,r,o,s,l;if(!t){t={};var u=document.getElementsByTagName("script");for(e=0;u.length>e;e++)if(r=u[e],r.src&&(i=r.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(o=i[1]),r.hasAttribute("data-mr-location")&&(o=a(window.location,r.getAttribute("data-mr-location"))),o){if(r.dataset)for(l in r.dataset)r.dataset.hasOwnProperty(l)&&(t[l]=r.dataset[l]);else if(r.attributes){var c=/-([a-z])/g,h=function(e,t){return t.toUpperCase()};for(n=0;r.attributes.length>n;n++)s=r.attributes[n],i=s.name.match(/^data-(.*)$/),i&&(t[i[1].replace(c,h)]=s.value)}r.parentNode.removeChild(r),t.mrLocation=o;break}}return t},r=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),i=document.createElement("a");return function(r,a){if(t||n.appendChild(e),r+="",!/^[\w\-]+:/.test(r))throw Error("Can't resolve "+JSON.stringify(a)+" relative to "+JSON.stringify(r));var o=e.href;e.href=r,i.href=a;var s=i.href;return e.href=o,t||n.removeChild(e),s}},a=r(),o=function(e){var t=document.createElement("script");t.src=e,t.onload=function(){t.parentNode.removeChild(t)},document.querySelector("head").appendChild(t)};n(function(t,n,r){var a=i(),s={},l=r.resolve(t.getLocation(),a.package||"."),u=a.module||"";if(e.preload){var c={},h=function(e){return c[e]=c[e]||n.defer()};e.bundleLoaded=function(e){h(e).resolve()};var d=n.defer();s.preloaded=d.promise;var p=n.resolve();e.preload.forEach(function(e){p=p.then(function(){return n.all(e.map(function(e){return o(e),h(e).promise}))})}),d.resolve(p.then(function(){delete e.preload,delete e.bundleLoaded}))}t.loadPackage({location:a.mrLocation,hash:a.mrHash},s).then(function(e){return e.inject("mini-url",r),e.inject("promise",n),e.inject("require",t),e.loadPackage({name:"q",location:a.qLocation,hash:a.qHash}).then(function(t){return t.inject("q",n),"autoPackage"in a&&e.injectPackageDescription(l,{}),e.loadPackage({location:l,hash:a.applicationHash}).invoke("async",u)})}).done()})})(this);