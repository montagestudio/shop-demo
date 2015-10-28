"use strict";function SortedSet(e,t,n,i){return this instanceof SortedSet?(this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=i||Function.noop,this.root=null,this.length=0,this.addEach(e),void 0):new SortedSet(e,t,n,i)}function Node(e){this.value=e,this.left=null,this.right=null,this.length=1}function Iterator(e,t,n){if(this.set=e,this.prev=null,this.end=n,t){var i=this.set.findLeastGreaterThanOrEqual(t);i&&(this.set.splay(i.value),this.prev=i.getPrevious())}}module.exports=SortedSet;var Shim=require("./shim"),GenericCollection=require("./generic-collection"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes"),TreeLog=require("./tree-log");SortedSet.SortedSet=SortedSet,Object.addEach(SortedSet.prototype,GenericCollection.prototype),Object.addEach(SortedSet.prototype,GenericSet.prototype),Object.addEach(SortedSet.prototype,PropertyChanges.prototype),Object.addEach(SortedSet.prototype,RangeChanges.prototype),SortedSet.prototype.isSorted=!0,SortedSet.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},SortedSet.prototype.has=function(e,t){if(t)throw Error("SortedSet#has does not support second argument: equals");return this.root?(this.splay(e),this.contentEquals(e,this.root.value)):!1},SortedSet.prototype.get=function(e,t){if(t)throw Error("SortedSet#get does not support second argument: equals");return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root.value:this.getDefault(e)},SortedSet.prototype.add=function(e){var t=new this.Node(e);if(!this.root)return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],0),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],0),!0;if(this.splay(e),!this.contentEquals(e,this.root.value)){var n=this.contentCompare(e,this.root.value);if(0===n)throw Error("SortedSet cannot contain incomparable but inequal values: "+e+" and "+this.root.value);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],this.root.index),0>n?(t.right=this.root,t.left=this.root.left,this.root.left=null,this.root.touch()):(t.left=this.root,t.right=this.root.right,this.root.right=null,this.root.touch()),t.touch(),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],this.root.index),!0}return!1},SortedSet.prototype["delete"]=function(e,t){if(t)throw Error("SortedSet#delete does not support second argument: equals");if(this.root&&(this.splay(e),this.contentEquals(e,this.root.value))){var n=this.root.index;if(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n),this.root.left){var i=this.root.right;this.root=this.root.left,this.splay(e),this.root.right=i}else this.root=this.root.right;return this.length--,this.root&&this.root.touch(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n),!0}return!1},SortedSet.prototype.indexOf=function(e,t){if(t)throw Error("SortedSet#indexOf does not support second argument: startIndex");return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root.index:-1},SortedSet.prototype.find=function(e,t,n){if(t)throw Error("SortedSet#find does not support second argument: equals");if(n)throw Error("SortedSet#find does not support third argument: index");return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root:void 0},SortedSet.prototype.findGreatest=function(e){if(this.root){for(e=e||this.root;e.right;)e=e.right;return e}},SortedSet.prototype.findLeast=function(e){if(this.root){for(e=e||this.root;e.left;)e=e.left;return e}},SortedSet.prototype.findGreatestLessThanOrEqual=function(e){return this.root?(this.splay(e),this.contentCompare(this.root.value,e)>0?this.root.getPrevious():this.root):void 0},SortedSet.prototype.findGreatestLessThan=function(e){return this.root?(this.splay(e),this.contentCompare(this.root.value,e)>=0?this.root.getPrevious():this.root):void 0},SortedSet.prototype.findLeastGreaterThanOrEqual=function(e){return this.root?(this.splay(e),this.contentCompare(this.root.value,e)>=0?this.root:this.root.getNext()):void 0},SortedSet.prototype.findLeastGreaterThan=function(e){return this.root?(this.splay(e),0>=this.contentCompare(this.root.value,e)?this.root.getNext():this.root):void 0},SortedSet.prototype.pop=function(){if(this.root){var e=this.findGreatest();return this["delete"](e.value),e.value}},SortedSet.prototype.shift=function(){if(this.root){var e=this.findLeast();return this["delete"](e.value),e.value}},SortedSet.prototype.push=function(){this.addEach(arguments)},SortedSet.prototype.unshift=function(){this.addEach(arguments)},SortedSet.prototype.slice=function(e,t){e=e||0,t=t||this.length,0>e&&(e+=this.length),0>t&&(t+=this.length);var n=[];if(this.root)for(this.splayIndex(e);t>this.root.index&&(n.push(this.root.value),this.root.right);)this.splay(this.root.getNext().value);return n},SortedSet.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},SortedSet.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var i=[];if(this.root){this.splayIndex(e);for(var r=0;t>r;r++){i.push(this.root.value);var o=this.root.getNext();if(this["delete"](this.root.value),!o)break;this.splay(o.value)}}return this.addEach(n),i},SortedSet.prototype.splay=function(e){var t,n,i,r,o,a;if(this.root){for(t=n=i=new this.Node,a=new this.Node,o=this.root;;){var s=this.contentCompare(e,o.value);if(0>s){if(!o.left)break;if(0>this.contentCompare(e,o.left.value)&&(r=o.left,o.left=r.right,o.touch(),r.right=o,r.touch(),o=r,!o.left))break;r=new Node,r.right=o,r.left=a.left,a.left=r,i.left=o,i.touch(),i=o,o=o.left}else{if(!(s>0))break;if(!o.right)break;if(this.contentCompare(e,o.right.value)>0&&(r=o.right,o.right=r.left,o.touch(),r.left=o,r.touch(),o=r,!o.right))break;r=new Node,r.left=o,r.right=a.right,a.right=r,n.right=o,n.touch(),n=o,o=o.right}}for(n.right=o.left,n.touch(),i.left=o.right,i.touch(),o.left=t.right,o.right=t.left;a.left;)a.left.right.touch(),a.left=a.left.left;for(;a.right;)a.right.left.touch(),a.right=a.right.right;o.touch(),this.root=o}},SortedSet.prototype.splayIndex=function(e){if(this.root){for(var t=this.root,n=this.root.index;n!==e;)if(n>e&&t.left)t=t.left,n-=1+(t.right?t.right.length:0);else{if(!(e>n&&t.right))break;t=t.right,n+=1+(t.left?t.left.length:0)}return this.splay(t.value),this.root.index===e}return!1},SortedSet.prototype.reduce=function(e,t,n){return this.root&&(t=this.root.reduce(e,t,0,n,this)),t},SortedSet.prototype.reduceRight=function(e,t,n){return this.root&&(t=this.root.reduceRight(e,t,this.length-1,n,this)),t},SortedSet.prototype.min=function(e){var t=this.findLeast(e);return t?t.value:void 0},SortedSet.prototype.max=function(e){var t=this.findGreatest(e);return t?t.value:void 0},SortedSet.prototype.one=function(){return this.min()},SortedSet.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.toArray(),this.dispatchBeforeRangeChange([],e,0)),this.root=null,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},SortedSet.prototype.iterate=function(e,t){return new this.Iterator(this,e,t)},SortedSet.prototype.Iterator=Iterator,SortedSet.prototype.summary=function(){return this.root?this.root.summary():"()"},SortedSet.prototype.log=function(e,t,n,i){e=e||TreeLog.unicodeRound,t=t||this.logNode,n||(n=console.log,i=console),n=n.bind(i),this.root&&this.root.log(e,t,n,n)},SortedSet.prototype.logNode=function(e,t){t(" "+e.value)},SortedSet.logCharsets=TreeLog,SortedSet.prototype.Node=Node,Node.prototype.reduce=function(e,t,n,i,r,o){if(o=o||0,this.left){var a=this.left.length;t=this.left.reduce(e,t,n,i,r,o+1),n+=a}return t=e.call(i,t,this.value,n,r,this,o),n+=1,this.right&&(t=this.right.reduce(e,t,n,i,r,o+1)),t},Node.prototype.reduceRight=function(e,t,n,i,r,o){return o=o||0,this.right&&(t=this.right.reduce(e,t,n,i,r,o+1),n-=this.right.length),t=e.call(i,t,this.value,this.value,r,this,o),n-=1,this.left&&(t=this.left.reduce(e,t,n,i,r,o+1)),t},Node.prototype.touch=function(){this.length=1+(this.left?this.left.length:0)+(this.right?this.right.length:0),this.index=this.left?this.left.length:0},Node.prototype.checkIntegrity=function(){var e=1;if(e+=this.left?this.left.checkIntegrity():0,e+=this.right?this.right.checkIntegrity():0,this.length!==e)throw Error("Integrity check failed: "+this.summary());return e},Node.prototype.getNext=function(){var e=this;if(e.right){for(e=e.right;e.left;)e=e.left;return e}},Node.prototype.getPrevious=function(){var e=this;if(e.left){for(e=e.left;e.right;)e=e.right;return e}},Node.prototype.summary=function(){var e=this.value||"-";return e+=" <"+this.length,this.left||this.right?"("+e+" "+(this.left?this.left.summary():"()")+", "+(this.right?this.right.summary():"()")+")":"("+e+")"},Node.prototype.log=function(e,t,n,i){var r,o=this;r=this.left&&this.right?e.intersection:this.left?e.branchUp:this.right?e.branchDown:e.through;var a;this.left&&this.left.log(e,t,function(t){a?i(e.strafe+" "+t):(a=!0,i(e.fromBelow+e.through+t))},function(e){i("  "+e)});var s;t(this,function(t){s?n((o.right?e.strafe:" ")+t):(s=!0,n(r+t))},function(t){i((o.left?e.strafe:" ")+t)});var l;this.right&&this.right.log(e,t,function(t){l?n("  "+t):(l=!0,n(e.fromAbove+e.through+t))},function(t){n(e.strafe+" "+t)})},Iterator.prototype.next=function(){var e;if(e=this.prev?this.set.findLeastGreaterThan(this.prev.value):this.set.findLeast(),!e)throw StopIteration;if(void 0!==this.end&&this.set.contentCompare(e.value,this.end)>=0)throw StopIteration;return this.prev=e,e.value};