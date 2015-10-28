montageDefine("842428e","lfu-map",{dependencies:["./shim","./lfu-set","./generic-collection","./generic-map","./listen/property-changes","lfu-map"],factory:function(e,t,n){"use strict";function i(e,t,n,o,a){return this instanceof i?(n=n||Object.equals,o=o||Object.hash,a=a||Function.noop,this.contentEquals=n,this.contentHash=o,this.getDefault=a,this.store=new r(void 0,t,function(e,t){return n(e.key,t.key)},function(e){return o(e.key)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,o,a)}e("./shim");var r=e("./lfu-set"),o=e("./generic-collection"),a=e("./generic-map"),s=e("./listen/property-changes");n.exports=i,i.LfuMap=i,Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,s.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},i.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)},i.prototype.addMapChangeListener=function(){if(!this.dispatchesMapChanges){var e=this;this.store.addBeforeRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchBeforeMapChange(n[0].key,void 0)}),this.store.addRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchMapChange(n[0].key,void 0)})}a.prototype.addMapChangeListener.apply(this,arguments)}}});