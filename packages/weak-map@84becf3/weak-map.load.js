montageDefine("84becf3","weak-map",{dependencies:[],factory:function(e,t,n){(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,p.length)==p&&"___"===e.substr(e.length-3))}function r(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[f];if(t&&t.key===e)return t;if(!d(e))return void 0;t={key:e};try{return h(e,f,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}catch(n){return void 0}}function i(e){return e.prototype=null,Object.freeze(e)}function o(){_||"undefined"==typeof console||(_=!0,console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))}if("undefined"==typeof ses||!ses.ok||ses.ok()){"undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e);var a=!1;if("function"==typeof WeakMap){var s=WeakMap;if("undefined"!=typeof navigator&&/Firefox/.test(navigator.userAgent));else{var l=new s,u=Object.freeze({});if(l.set(u,1),1===l.get(u))return n.exports=WeakMap,void 0;a=!0}}Object.prototype.hasOwnProperty;var c=Object.getOwnPropertyNames,h=Object.defineProperty,d=Object.isExtensible,p="weakmap:",f=p+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var m=new ArrayBuffer(25),v=new Uint8Array(m);crypto.getRandomValues(v),f=p+"rand:"+Array.prototype.map.call(v,function(e){return(e%36).toString(36)}).join("")+"___"}if(h(Object,"getOwnPropertyNames",{value:function(e){return c(e).filter(t)}}),"getPropertyNames"in Object){var g=Object.getPropertyNames;h(Object,"getPropertyNames",{value:function(e){return g(e).filter(t)}})}(function(){var e=Object.freeze;h(Object,"freeze",{value:function(t){return r(t),e(t)}});var t=Object.seal;h(Object,"seal",{value:function(e){return r(e),t(e)}});var n=Object.preventExtensions;h(Object,"preventExtensions",{value:function(e){return r(e),n(e)}})})();var _=!1,b=0,y=function(){function e(e,t){var n,i=r(e);return i?u in i?i[u]:t:(n=s.indexOf(e),n>=0?l[n]:t)}function t(e){var t=r(e);return t?u in t:s.indexOf(e)>=0}function n(e,t){var n,i=r(e);return i?i[u]=t:(n=s.indexOf(e),n>=0?l[n]=t:(n=s.length,l[n]=t,s[n]=e)),this}function a(e){var t,n,i=r(e);return i?u in i&&delete i[u]:(t=s.indexOf(e),0>t?!1:(n=s.length-1,s[t]=void 0,l[t]=l[n],s[t]=s[n],s.length=n,l.length=n,!0))}this instanceof y||o();var s=[],l=[],u=b++;return Object.create(y.prototype,{get___:{value:i(e)},has___:{value:i(t)},set___:{value:i(n)},delete___:{value:i(a)}})};y.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){return this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof s?function(){function t(){function t(e,t){return c?u.has(e)?u.get(e):c.get___(e,t):u.get(e,t)}function n(e){return u.has(e)||(c?c.has___(e):!1)}function r(e){var t=!!u["delete"](e);return c?c.delete___(e)||t:t}this instanceof y||o();var l,u=new s,c=void 0,h=!1;return l=a?function(e,t){return u.set(e,t),u.has(e)||(c||(c=new y),c.set(e,t)),this}:function(e,t){if(h)try{u.set(e,t)}catch(n){c||(c=new y),c.set___(e,t)}else u.set(e,t);return this},Object.create(y.prototype,{get___:{value:i(t)},has___:{value:i(n)},set___:{value:i(l)},delete___:{value:i(r)},permitHostObjects___:{value:i(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");h=!0})}})}a&&"undefined"!=typeof Proxy&&(Proxy=void 0),t.prototype=y.prototype,n.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),n.exports=y)}})()}});