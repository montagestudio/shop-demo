function compute(e,t,n){n.target=e,n.targetPath=t;var r=n.source=n.source||e,i=n.args,o=n.compute,a=n.parameters=n.parameters||r,s=n.document,l=n.components,u=n.trace,c=n.sourceScope=new Scope(r);c.parameters=a,c.document=s,c.components=l;var h=n.targetScope=new Scope(e);h.parameters=a,h.document=s,h.components=l;var d=i.map(function(e){return parse(e)}).map(function(e){if("rangeContent"===e.type){var t=compileObserver(e.args[0]);return Observers.makeRangeContentObserver(t)}if("mapContent"===e.type){var t=compileObserver(e.args[0]);return Observers.makeMapContentObserver(t)}return compileObserver(e)}),p=Observers.makeRangeContentObserver(Observers.makeObserversObserver(d)),f=Observers.makeComputerObserver(p,o,e),m=parse(t),v=compileBinder(m);return v(f,c,h,n,u?{sourcePath:i.join(", "),targetPath:t}:void 0)}var parse=require("./parse"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),Observers=require("./observers"),Scope=require("./scope");module.exports=compute;