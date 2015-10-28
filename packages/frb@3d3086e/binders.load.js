montageDefine("3d3086e","binders",{dependencies:["./scope","./observers"],factory:function(e,t){function n(){return Error("").stack.replace(/^.*\n.*\n/,"\n")}function i(e,t,i,r,o,a){return i(P(function(i){if(!o.isActive)try{o.isActive=!0,a&&console.log("SET",a.targetPath,"TO",i,"ON",e,"BECAUSE",a.sourcePath,n()),Array.isArray(e)&&t>>>0===t?e.set(t,i):e[t]=i}finally{o.isActive=!1}}),r)}function r(e,t){return function(n,i,r,o,a){return t(P(function(t){return null!=t?e(P(function(e){return null!=e?e.bindProperty?e.bindProperty(t,n,i,o,a):k(e,t,n,i,o,a):void 0}),r):void 0}),r)}}function o(e,t,i,r,o,a){return i(P(function(i){if(!o.isActive)try{o.isActive=!0,a&&console.log("SET FOR KEY",t,"TO",i,"ON",e,"BECAUSE",a.sourcePath,n()),e.set(t,i)}finally{o.isActive=!1}}),r)}function a(e,t){return function(n,i,r,o,a){return e(P(function(e){return e?t(P(function(t){return null!=t?j(e,t,n,i,o,a):void 0}),r):void 0}),r)}}function s(e,t){return function(i,r,o,a,s){return e(P(function(e){return e?t(P(function(t){return null!=t?i(P(function(i){if(i)(e.has||e.contains).call(e,t)||(s&&console.log("ADD",t,"TO",s.targetPath,"BECAUSE",s.sourcePath,n()),e.add(t));else for(;(e.has||e.contains).call(e,t);)s&&console.log("REMOVE",t,"FROM",s.targetPath,"BECAUSE",s.sourcePath,n()),(e.remove||e["delete"]).call(e,t)}),r):void 0}),o):void 0}),o)}}function l(e,t){return function(i,r,o,a,s){return i(P(function(i){return i?(s&&console.log("BIND",s.targetPath,"TO",s.sourcePath,n()),e(t,r,r,a,s),function(){s&&console.log("UNBIND",s.targetPath,"FROM",s.sourcePath,n())}):void 0}),o)}}function u(e,t,n){return function(i,r,o,a,s){return i(P(function(i){return i?e(P(function(e){function i(e,i,l){O(r.slice(l,l+i.length)),r.swap(l,i.length,e.map(function(e){var i=o.nest(e);return t(n,i,i,a,s)}))}if(e){var r=[],l=S(e,i,o);return function(){O(r),l()}}}),o):void 0}),r)}}function c(e,t,n,i,r,o){var a=T(i),s=D(n,a);return function(n,i,a,l,u){return n(P(function(n){if(null!=n){if(n){var i=e(r,L,a,l,u),c=t(o,L,a,l,u);return function(){i(),c()}}return e(s,a,a,l,u)}}),i)}}function h(e,t,n,i,r,o){var a=T(i),s=M(n,a);return function(n,i,a,l,u){return n(P(function(n){if(null!=n){if(n)return e(s,a,a,l,u);var i=e(r,A,a,l,u),c=t(o,A,a,l,u);return function(){i(),c()}}}),i)}}function d(e,t,n){return function(i,r,o,a,s){return e(P(function(e){return null!=e?e?t(i,r,o,a,s):n(i,r,o,a,s):void 0}),r)}}function p(e){return function(t,n,i){return e(P(function(e){return e?t(P(function(t){null!=t&&(e.splice?e.splice(0,e.length,t):e.clear&&e.add&&(e.clear(),e.add(t)))}),n):void 0}),i)}}function f(e){return function(t,n,i){return e(P(function(e){return e?t(P(function(t){null!=t&&t!==e.one()&&(e.splice?e.splice(0,e.length,t):e.clear&&e.add&&(e.clear(),e.add(t)))}),n):void 0}),i)}}function m(e,t){return function(i,r,o,a,s){return e(P(function(e){return e?i(P(function(t){function i(t,i,r){w(e)||(s&&console.log("SWAPPING",i,"FOR",t,"AT",r,"ON",s.targetPath,n()),e.swap?e.swap(r,i.length,t):e.add&&(e.remove||e["delete"])&&(t.forEach(e.add,e),i.forEach(e.remove||e["delete"],e)))}if(t!==e){if(!t)return e.clear(),void 0;if(t.addRangeChangeListener)return t.addRangeChangeListener(i),i(Array.from(t),Array.from(e),0),function(){t.removeRangeChangeListener(i)}}}),r):t(E.makeLiteralObserver([]),r,o,a,s)}),o)}}function v(e){return function(t,i,r,o,a){return e(P(function(e){return e?t(P(function(t){function i(t,i){if(!o.isActive)try{o.isActive=!0,void 0===t?(a&&a&&console.log("DELETED",a.targetPath,"FOR KEY",i,"ON",e,"BECAUSE",a.sourcePath,n()),Array.isArray(e)?e.splice(i,1):e["delete"](i)):(a&&a&&console.log("SET",a.targetPath,"FOR KEY",i,"TO",t,"ON",e,"BECAUSE",a.sourcePath,n()),e.set(i,t))}finally{o.isActive=!1}}return t?(e.clear(),t.forEach(i),t.addMapChangeListener(i)):(e.clear(),void 0)}),i):void 0}),r)}}function g(e){return function(t,n,i){return e(P(function(e){return e?t(P(function(t){function n(t,n,i){if(!w(e)){var r=e.length-i-n.length;e.swap(r,n.length,t.reversed())}}return t?(t.addRangeChangeListener(n),n(t,e,0),function(){t.removeRangeChangeListener(n)}):(e.clear(),void 0)}),n):void 0}),i)}}function _(e){return function(t,n,i,r,o){return t(P(function(t){return t?Function.noop:e(x,n,i,r,o)}),i)}}function b(e){return function(t,n,i,r,o){return i.parent?e(t,n,i.parent,r,o):void 0}}function y(e,t){return function(n,i,r,o,a){return e(P(function(e){return null!=e?t(n,i,r.nest(e),o,a):void 0}),r)}}function w(e){return e.getRangeChangeDescriptor&&e.getRangeChangeDescriptor().isActive}var C=e("./scope"),E=e("./observers"),P=E.autoCancelPrevious,S=E.observeRangeChange,O=E.cancelEach,T=E.makeNotObserver,M=E.makeOrObserver,D=E.makeAndObserver;E.observeValue;var x=E.makeLiteralObserver(),L=new C(!0),A=new C(!1);t.bindProperty=i;var k=i;t.makePropertyBinder=r,t.bindGet=o;var j=o;t.makeGetBinder=a,t.makeHasBinder=s,t.makeEqualityBinder=l,t.makeEveryBlockBinder=u,t.makeAndBinder=c,t.makeOrBinder=h,t.makeConditionalBinder=d,t.makeOnlyBinder=p,t.makeOneBinder=f,t.makeRangeContentBinder=m,t.makeMapContentBinder=v,t.makeReversedBinder=g,t.makeDefinedBinder=_,t.makeParentBinder=b,t.makeWithBinder=y}});