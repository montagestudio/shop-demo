(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,d.length)==d&&"___"===e.substr(e.length-3))}function n(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[p];if(t&&t.key===e)return t;if(!h(e))return void 0;t={key:e};try{return c(e,p,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}catch(n){return void 0}}function r(e){return e.prototype=null,Object.freeze(e)}function i(){g||"undefined"==typeof console||(g=!0,console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))}if("undefined"==typeof ses||!ses.ok||ses.ok()){"undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e);var o=!1;if("function"==typeof WeakMap){var a=WeakMap;if("undefined"!=typeof navigator&&/Firefox/.test(navigator.userAgent));else{var s=new a,l=Object.freeze({});if(s.set(l,1),1===s.get(l))return module.exports=WeakMap,void 0;o=!0}}Object.prototype.hasOwnProperty;var u=Object.getOwnPropertyNames,c=Object.defineProperty,h=Object.isExtensible,d="weakmap:",p=d+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var f=new ArrayBuffer(25),m=new Uint8Array(f);crypto.getRandomValues(m),p=d+"rand:"+Array.prototype.map.call(m,function(e){return(e%36).toString(36)}).join("")+"___"}if(c(Object,"getOwnPropertyNames",{value:function(e){return u(e).filter(t)}}),"getPropertyNames"in Object){var v=Object.getPropertyNames;c(Object,"getPropertyNames",{value:function(e){return v(e).filter(t)}})}(function(){var e=Object.freeze;c(Object,"freeze",{value:function(t){return n(t),e(t)}});var t=Object.seal;c(Object,"seal",{value:function(e){return n(e),t(e)}});var r=Object.preventExtensions;c(Object,"preventExtensions",{value:function(e){return n(e),r(e)}})})();var g=!1,_=0,b=function(){function e(e,t){var r,i=n(e);return i?u in i?i[u]:t:(r=s.indexOf(e),r>=0?l[r]:t)}function t(e){var t=n(e);return t?u in t:s.indexOf(e)>=0}function o(e,t){var r,i=n(e);return i?i[u]=t:(r=s.indexOf(e),r>=0?l[r]=t:(r=s.length,l[r]=t,s[r]=e)),this}function a(e){var t,r,i=n(e);return i?u in i&&delete i[u]:(t=s.indexOf(e),0>t?!1:(r=s.length-1,s[t]=void 0,l[t]=l[r],s[t]=s[r],s.length=r,l.length=r,!0))}this instanceof b||i();var s=[],l=[],u=_++;return Object.create(b.prototype,{get___:{value:r(e)},has___:{value:r(t)},set___:{value:r(o)},delete___:{value:r(a)}})};b.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){return this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof a?function(){function t(){function t(e,t){return c?u.has(e)?u.get(e):c.get___(e,t):u.get(e,t)}function n(e){return u.has(e)||(c?c.has___(e):!1)}function s(e){var t=!!u["delete"](e);return c?c.delete___(e)||t:t}this instanceof b||i();var l,u=new a,c=void 0,h=!1;return l=o?function(e,t){return u.set(e,t),u.has(e)||(c||(c=new b),c.set(e,t)),this}:function(e,t){if(h)try{u.set(e,t)}catch(n){c||(c=new b),c.set___(e,t)}else u.set(e,t);return this},Object.create(b.prototype,{get___:{value:r(t)},has___:{value:r(n)},set___:{value:r(l)},delete___:{value:r(s)},permitHostObjects___:{value:r(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");h=!0})}})}o&&"undefined"!=typeof Proxy&&(Proxy=void 0),t.prototype=b.prototype,module.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),module.exports=b)}})();