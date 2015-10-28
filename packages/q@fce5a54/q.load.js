montageDefine("fce5a54","q",{dependencies:[],factory:function(e,t,n){(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof t)n.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){return function(){return K.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===tt(e)||e instanceof U}function i(e,t){if(B&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(nt)){for(var n=[],i=t;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(e.stack);var a=n.join("\n"+nt+"\n");e.stack=r(a)}}function r(e){for(var t=e.split("\n"),n=[],i=0;t.length>i;++i){var r=t[i];s(r)||a(r)||!r||n.push(r)}return n.join("\n")}function a(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function o(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(e);return i?[i[1],Number(i[2])]:void 0}function s(e){var t=o(e);if(!t)return!1;var n=t[0],i=t[1];return n===W&&i>=Y&&ot>=i}function l(){if(B)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],i=o(n);if(!i)return;return W=i[0],i[1]}}function u(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function c(e){return g(e)?e:_(e)?D(e):T(e)}function h(){function e(e){t=e,a.source=e,G(n,function(t,n){H(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,i=void 0}var t,n=[],i=[],r=Z(h.prototype),a=Z(m.prototype);if(a.promiseDispatch=function(e,r,a){var o=X(arguments);n?(n.push(o),"when"===r&&a[1]&&i.push(a[1])):H(function(){t.promiseDispatch.apply(t,o)})},a.valueOf=function(){if(n)return a;var e=v(t);return g(e)&&(t=e),e},a.inspect=function(){return t?t.inspect():{state:"pending"}},c.longStackSupport&&B)try{throw Error()}catch(o){a.stack=o.stack.substring(o.stack.indexOf("\n")+1)}return r.promise=a,r.resolve=function(n){t||e(c(n))},r.fulfill=function(n){t||e(T(n))},r.reject=function(n){t||e(S(n))},r.notify=function(e){t||G(i,function(t,n){H(function(){n(e)})},void 0)},r}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=h();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function p(e){return d(function(t,n){for(var i=0,r=e.length;r>i;i++)c(e[i]).then(t,n)})}function m(e,t,n){void 0===t&&(t=function(e){return S(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=Z(m.prototype);if(i.promiseDispatch=function(n,r,a){var o;try{o=e[r]?e[r].apply(i,a):t.call(i,r,a)}catch(s){o=S(s)}n&&n(o)},i.inspect=n,n){var r=n();"rejected"===r.state&&(i.exception=r.reason),i.valueOf=function(){var e=n();return"pending"===e.state||"rejected"===e.state?i:e.value}}return i}function f(e,t,n,i){return c(e).then(t,n,i)}function v(e){if(g(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function g(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function _(e){return t(e)&&"function"==typeof e.then}function b(e){return g(e)&&"pending"===e.inspect().state}function y(e){return!g(e)||"fulfilled"===e.inspect().state}function w(e){return g(e)&&"rejected"===e.inspect().state}function E(){it.length=0,rt.length=0,at||(at=!0)}function C(e,t){at&&(rt.push(e),t&&t.stack!==void 0?it.push(t.stack):it.push("(no stack) "+t))}function P(e){if(at){var t=$(rt,e);-1!==t&&(rt.splice(t,1),it.splice(t,1))}}function S(e){var t=m({when:function(t){return t&&P(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return C(t,e),t}function T(e){return m({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return et(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function D(e){var t=h();return H(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function M(e){return m({isDef:function(){}},function(t,n){return k(e,t,n)},function(){return c(e).inspect()})}function O(e,t,n){return c(e).spread(t,n)}function x(e){return function(){function t(e,t){var o;if("undefined"==typeof StopIteration){try{o=i[e](t)}catch(s){return S(s)}return o.done?o.value:f(o.value,r,a)}try{o=i[e](t)}catch(s){return n(s)?s.value:S(s)}return f(o,r,a)}var i=e.apply(this,arguments),r=t.bind(t,"next"),a=t.bind(t,"throw");return r()}}function L(e){c.done(c.async(e)())}function A(e){throw new U(e)}function I(e){return function(){return O([this,z(arguments)],function(t,n){return e.apply(t,n)})}}function k(e,t,n){return c(e).dispatch(t,n)}function z(e){return f(e,function(e){var t=0,n=h();return G(e,function(i,r,a){var o;g(r)&&"fulfilled"===(o=r.inspect()).state?e[a]=o.value:(++t,f(r,function(i){e[a]=i,0===--t&&n.resolve(e)},n.reject,function(e){n.notify({index:a,value:e})}))},void 0),0===t&&n.resolve(e),n.promise})}function j(e){return f(e,function(e){return e=J(e,c),f(z(J(e,function(e){return f(e,V,V)})),function(){return e})})}function R(e){return c(e).allSettled()}function N(e,t){return c(e).then(void 0,void 0,t)}function F(e,t){return c(e).nodeify(t)}var B=!1;try{throw Error()}catch(q){B=!!q.stack}var W,U,Y=l(),V=function(){},H=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var r=t.domain;r&&(t.domain=void 0,r.enter());try{n()}catch(o){if(a)throw r&&r.exit(),setTimeout(e,0),r&&r.enter(),o;setTimeout(function(){throw o},0)}r&&r.exit()}i=!1}var t={task:void 0,next:null},n=t,i=!1,r=void 0,a=!1;if(H=function(e){n=n.next={task:e,domain:a&&process.domain,next:null},i||(i=!0,r())},"undefined"!=typeof process&&process.nextTick)a=!0,r=function(){process.nextTick(e)};else if("function"==typeof setImmediate)r="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var o=new MessageChannel;o.port1.onmessage=function(){r=s,o.port1.onmessage=e,e()};var s=function(){o.port2.postMessage(0)};r=function(){setTimeout(e,0),s()}}else r=function(){setTimeout(e,0)};return H}(),K=Function.call,X=e(Array.prototype.slice),G=e(Array.prototype.reduce||function(e,t){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(t=e(t,this[n],n));return t}),$=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),J=e(Array.prototype.map||function(e,t){var n=this,i=[];return G(n,function(r,a,o){i.push(e.call(t,a,o,n))},void 0),i}),Z=Object.create||function(e){function t(){}return t.prototype=e,new t},Q=e(Object.prototype.hasOwnProperty),et=Object.keys||function(e){var t=[];for(var n in e)Q(e,n)&&t.push(n);return t},tt=e(Object.prototype.toString);U="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var nt="From previous event:";c.resolve=c,c.nextTick=H,c.longStackSupport=!1,c.defer=h,h.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(X(arguments,1)):e.resolve(n)}},c.Promise=d,c.promise=d,d.race=p,d.all=z,d.reject=S,d.resolve=c,c.passByCopy=function(e){return e},m.prototype.passByCopy=function(){return this},c.join=function(e,t){return c(e).join(t)},m.prototype.join=function(e){return c([this,e]).spread(function(e,t){if(e===t)return e;throw Error("Can't join: not the same: "+e+" "+t)})},c.race=p,m.prototype.race=function(){return this.then(c.race)},c.makePromise=m,m.prototype.toString=function(){return"[object Promise]"},m.prototype.then=function(e,t,n){function r(t){try{return"function"==typeof e?e(t):t}catch(n){return S(n)}}function a(e){if("function"==typeof t){i(e,s);try{return t(e)}catch(n){return S(n)}}return S(e)}function o(e){return"function"==typeof n?n(e):e}var s=this,l=h(),u=!1;return H(function(){s.promiseDispatch(function(e){u||(u=!0,l.resolve(r(e)))},"when",[function(e){u||(u=!0,l.resolve(a(e)))}])}),s.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=o(e)}catch(i){if(n=!0,!c.onerror)throw i;c.onerror(i)}n||l.notify(t)}]),l.promise},c.when=f,m.prototype.thenResolve=function(e){return this.then(function(){return e})},c.thenResolve=function(e,t){return c(e).thenResolve(t)},m.prototype.thenReject=function(e){return this.then(function(){throw e})},c.thenReject=function(e,t){return c(e).thenReject(t)},c.nearer=v,c.isPromise=g,c.isPromiseAlike=_,c.isPending=b,m.prototype.isPending=function(){return"pending"===this.inspect().state},c.isFulfilled=y,m.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},c.isRejected=w,m.prototype.isRejected=function(){return"rejected"===this.inspect().state};var it=[],rt=[],at=!0;c.resetUnhandledRejections=E,c.getUnhandledReasons=function(){return it.slice()},c.stopUnhandledRejectionTracking=function(){E(),at=!1},E(),c.reject=S,c.fulfill=T,c.master=M,c.spread=O,m.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},c.async=x,c.spawn=L,c["return"]=A,c.promised=I,c.dispatch=k,m.prototype.dispatch=function(e,t){var n=this,i=h();return H(function(){n.promiseDispatch(i.resolve,e,t)}),i.promise},c.get=function(e,t){return c(e).dispatch("get",[t])},m.prototype.get=function(e){return this.dispatch("get",[e])},c.set=function(e,t,n){return c(e).dispatch("set",[t,n])},m.prototype.set=function(e,t){return this.dispatch("set",[e,t])},c.del=c["delete"]=function(e,t){return c(e).dispatch("delete",[t])},m.prototype.del=m.prototype["delete"]=function(e){return this.dispatch("delete",[e])},c.mapply=c.post=function(e,t,n){return c(e).dispatch("post",[t,n])},m.prototype.mapply=m.prototype.post=function(e,t){return this.dispatch("post",[e,t])},c.send=c.mcall=c.invoke=function(e,t){return c(e).dispatch("post",[t,X(arguments,2)])},m.prototype.send=m.prototype.mcall=m.prototype.invoke=function(e){return this.dispatch("post",[e,X(arguments,1)])},c.fapply=function(e,t){return c(e).dispatch("apply",[void 0,t])},m.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])},c["try"]=c.fcall=function(e){return c(e).dispatch("apply",[void 0,X(arguments,1)])},m.prototype.fcall=function(){return this.dispatch("apply",[void 0,X(arguments)])},c.fbind=function(e){var t=c(e),n=X(arguments,1);return function(){return t.dispatch("apply",[this,n.concat(X(arguments))])}},m.prototype.fbind=function(){var e=this,t=X(arguments);return function(){return e.dispatch("apply",[this,t.concat(X(arguments))])}},c.keys=function(e){return c(e).dispatch("keys",[])},m.prototype.keys=function(){return this.dispatch("keys",[])},c.all=z,m.prototype.all=function(){return z(this)},c.allResolved=u(j,"allResolved","allSettled"),m.prototype.allResolved=function(){return j(this)},c.allSettled=R,m.prototype.allSettled=function(){return this.then(function(e){return z(J(e,function(e){function t(){return e.inspect()}return e=c(e),e.then(t,t)}))})},c.fail=c["catch"]=function(e,t){return c(e).then(void 0,t)},m.prototype.fail=m.prototype["catch"]=function(e){return this.then(void 0,e)},c.progress=N,m.prototype.progress=function(e){return this.then(void 0,void 0,e)},c.fin=c["finally"]=function(e,t){return c(e)["finally"](t)},m.prototype.fin=m.prototype["finally"]=function(e){return e=c(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},c.done=function(e,t,n,i){return c(e).done(t,n,i)},m.prototype.done=function(e,t,n){var r=function(e){H(function(){if(i(e,a),!c.onerror)throw e;c.onerror(e)})},a=e||t||n?this.then(e,t,n):this;"object"==typeof process&&process&&process.domain&&(r=process.domain.bind(r)),a.then(void 0,r)},c.timeout=function(e,t,n){return c(e).timeout(t,n)},m.prototype.timeout=function(e,t){var n=h(),i=setTimeout(function(){n.reject(Error(t||"Timed out after "+e+" ms"))},e);return this.then(function(e){clearTimeout(i),n.resolve(e)},function(e){clearTimeout(i),n.reject(e)},n.notify),n.promise},c.delay=function(e,t){return void 0===t&&(t=e,e=void 0),c(e).delay(t)},m.prototype.delay=function(e){return this.then(function(t){var n=h();return setTimeout(function(){n.resolve(t)},e),n.promise})},c.nfapply=function(e,t){return c(e).nfapply(t)},m.prototype.nfapply=function(e){var t=h(),n=X(e);return n.push(t.makeNodeResolver()),this.fapply(n).fail(t.reject),t.promise},c.nfcall=function(e){var t=X(arguments,1);return c(e).nfapply(t)},m.prototype.nfcall=function(){var e=X(arguments),t=h();return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise},c.nfbind=c.denodeify=function(e){var t=X(arguments,1);return function(){var n=t.concat(X(arguments)),i=h();return n.push(i.makeNodeResolver()),c(e).fapply(n).fail(i.reject),i.promise}},m.prototype.nfbind=m.prototype.denodeify=function(){var e=X(arguments);return e.unshift(this),c.denodeify.apply(void 0,e)},c.nbind=function(e,t){var n=X(arguments,2);return function(){function i(){return e.apply(t,arguments)}var r=n.concat(X(arguments)),a=h();return r.push(a.makeNodeResolver()),c(i).fapply(r).fail(a.reject),a.promise}},m.prototype.nbind=function(){var e=X(arguments,0);return e.unshift(this),c.nbind.apply(void 0,e)},c.nmapply=c.npost=function(e,t,n){return c(e).npost(t,n)},m.prototype.nmapply=m.prototype.npost=function(e,t){var n=X(t||[]),i=h();return n.push(i.makeNodeResolver()),this.dispatch("post",[e,n]).fail(i.reject),i.promise},c.nsend=c.nmcall=c.ninvoke=function(e,t){var n=X(arguments,2),i=h();return n.push(i.makeNodeResolver()),c(e).dispatch("post",[t,n]).fail(i.reject),i.promise},m.prototype.nsend=m.prototype.nmcall=m.prototype.ninvoke=function(e){var t=X(arguments,1),n=h();return t.push(n.makeNodeResolver()),this.dispatch("post",[e,t]).fail(n.reject),n.promise},c.nodeify=F,m.prototype.nodeify=function(e){return e?(this.then(function(t){H(function(){e(null,t)})},function(t){H(function(){e(t)})}),void 0):this};var ot=l();return c})}});