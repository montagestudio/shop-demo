montageDefine("07f2c2d","reader",{dependencies:["q"],factory:function(e,t,n){function r(e,t){function n(){var e;return e=t?u.join(""):i.constructor.join(u),u.splice(0,u.length),e}var i=Object.create(r.prototype);t&&e.setEncoding&&e.setEncoding(t);var o=a.defer(),s=a.defer();e.on("error",function(e){o.reject(e)});var l,u=[];return e.on("end",function(){o.resolve(i),s.resolve()}),e.on("data",function(e){o.resolve(i),l?l(e):u.push(e)}),i.read=function(){l=void 0;var e=a.defer();return a.done(s.promise,function(){e.resolve(n())}),e.promise},i.forEach=function(e){return u&&u.length&&e(n()),l=e,a.when(s.promise,function(){l=void 0})},i.close=function(){e.destroy()},i.node=e,o.promise}function i(e,t){var n=[];return e.forEach(function(e){n.push(e)}),t?n.join(""):o(n)}function o(e){var t,n,r,i,o=0,a=e.length;for(n=0;a>n;n++)r=e[n],o+=r.length;for(i=new Buffer(o),t=0,n=0;a>n;n++)r=e[n],r.copy(i,t,0),t+=r.length;return e.splice(0,a,i),i}var a=e("q");n.exports=r,r.read=i,r.join=o}});