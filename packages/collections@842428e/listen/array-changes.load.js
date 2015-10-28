montageDefine("842428e","listen/array-changes",{dependencies:["../shim","../list","./property-changes","./range-changes","./map-changes"],factory:function(e,t){function n(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}e("../shim"),e("../list");var i=e("./property-changes"),r=e("./range-changes"),a=e("./map-changes");Array.prototype.splice;var o=Array.prototype.slice;Array.prototype.reverse;var s,l=Array.prototype.sort,u=Array.prototype.swap,c=Array.prototype.push,h={}.__proto__===Object.prototype;s=h?function(){this.__proto__=p}:function(){Object.defineProperties(this,d)},Object.defineProperty(Array.prototype,"makeObservable",{value:s,writable:!0,configurable:!0,enumerable:!1}),n(i.prototype),Object.defineProperty(Array.prototype,"makePropertyObservable",{value:function(){},writable:!0,configurable:!0,enumerable:!1}),n(r.prototype),n(a.prototype);var d={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){var e,t;for(this.dispatchBeforeRangeChange(this,this,0),e=0,t=this.length;t>e;e++)i.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);for(l.apply(this,arguments),e=0,t=this.length;t>e;e++)i.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},_dispatchBeforeOwnPropertyChange:{value:function(e,t){for(var n=e,r=e+t;r>n;n++)i.dispatchBeforeOwnPropertyChange(this,n,this[n]),this.dispatchBeforeMapChange(n,this[n])}},_dispatchOwnPropertyChange:{value:function(e,t){for(var n=e,i=e+t;i>n;n++)this.dispatchOwnPropertyChange(n,this[n]),this.dispatchMapChange(n,this[n])}},swap:{value:function(e,t,n){var r,a,s;if(n?Array.isArray(n)||(n=o.call(n)):n=Array.empty,0>e)e=this.length+e;else if(e>this.length){var l=e-this.length,c=Array(l+n.length);for(a=0,s=l;n.length>a;a++,s++)a in n&&(c[s]=n[a]);n=c,e=this.length}var h;if(0===t){if(0===n.length)return[];h=Array.empty}else h=o.call(this,e,e+t);var d=n.length-h.length,p=this.length,f=Math.max(this.length+d,e+n.length),m=Math.max(p,f);d&&i.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(n,h,e),0===d?this._dispatchBeforeOwnPropertyChange(e,n.length):(r=i.hasOwnPropertyChangeDescriptor(this))&&this._dispatchBeforeOwnPropertyChange(e,m-e),e>p&&(this.length=e);var v=u.call(this,e,t,n);return 0===d?this._dispatchOwnPropertyChange(e,n.length):r&&this._dispatchOwnPropertyChange(e,m-e),this.dispatchRangeChange(n,h,e),d&&this.dispatchOwnPropertyChange("length",this.length),v},writable:!0,configurable:!0},splice:{value:function(e,t){return e>this.length&&(e=this.length),this.swap.call(this,e,t,o.call(arguments,2))},writable:!0,configurable:!0},set:{value:function(e,t){return this.swap(e,e>=this.length?0:1,[t]),!0},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(){var e,t,n=this.length,r=arguments.length;e=1===r?[arguments[0]]:Array.apply(null,arguments),r>0&&(i.dispatchBeforeOwnPropertyChange(this,"length",n),this.dispatchBeforeRangeChange(e,Array.empty,n),(t=i.hasOwnPropertyChangeDescriptor(this))&&this._dispatchBeforeOwnPropertyChange(n,r)),c.apply(this,arguments),r>0&&(t&&this._dispatchOwnPropertyChange(n,r),this.dispatchRangeChange(e,Array.empty,n),this.dispatchOwnPropertyChange("length",this.length))},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=o.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},p=Object.create(Array.prototype,d);t.observableArrayProperties=d}});