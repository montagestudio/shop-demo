montageDefine("3d3086e","compile-observer",{dependencies:["./observers","./operators"],factory:function(e,t,n){function r(e){return a.compile(e)}var i=e("./observers"),o=e("./operators");n.exports=r;var a=r.semantics={compilers:{property:i.makePropertyObserver,get:i.makeGetObserver,path:i.makePathObserver,"with":i.makeWithObserver,"if":i.makeConditionalObserver,parent:i.makeParentObserver,not:i.makeNotObserver,and:i.makeAndObserver,or:i.makeOrObserver,"default":i.makeDefaultObserver,defined:i.makeDefinedObserver,rangeContent:Function.identity,mapContent:Function.identity,keys:i.makeKeysObserver,values:i.makeValuesObserver,items:i.makeEntriesObserver,entries:i.makeEntriesObserver,toMap:i.makeToMapObserver,mapBlock:i.makeMapBlockObserver,filterBlock:i.makeFilterBlockObserver,everyBlock:i.makeEveryBlockObserver,someBlock:i.makeSomeBlockObserver,sortedBlock:i.makeSortedBlockObserver,sortedSetBlock:i.makeSortedSetBlockObserver,groupBlock:i.makeGroupBlockObserver,groupMapBlock:i.makeGroupMapBlockObserver,minBlock:i.makeMinBlockObserver,maxBlock:i.makeMaxBlockObserver,min:i.makeMinObserver,max:i.makeMaxObserver,enumerate:i.makeEnumerationObserver,reversed:i.makeReversedObserver,flatten:i.makeFlattenObserver,concat:i.makeConcatObserver,view:i.makeViewObserver,sum:i.makeSumObserver,average:i.makeAverageObserver,last:i.makeLastObserver,only:i.makeOnlyObserver,one:i.makeOneObserver,has:i.makeHasObserver,tuple:i.makeArrayObserver,range:i.makeRangeObserver,startsWith:i.makeStartsWithObserver,endsWith:i.makeEndsWithObserver,contains:i.makeContainsObserver,join:i.makeJoinObserver,toArray:i.makeToArrayObserver,asArray:i.makeToArrayObserver},compile:function(e){var t=this.compilers;if("literal"===e.type)return i.makeLiteralObserver(e.value);if("value"===e.type)return i.observeValue;if("parameters"===e.type)return i.observeParameters;if("element"===e.type)return i.makeElementObserver(e.id);if("component"===e.type)return i.makeComponentObserver(e.label,e);if("record"===e.type){var n={},r=e.args;for(var o in r)n[o]=this.compile(r[o]);return i.makeObjectObserver(n)}t.hasOwnProperty(e.type)||(t[e.type]=i.makeMethodObserverMaker(e.type));var a=e.args.map(this.compile,this);return t[e.type].apply(null,a)}},s=a.compilers;Object.keys(o).forEach(function(e){s[e]||(s[e]=i.makeOperatorObserverMaker(o[e]))}),s.toString=i.makeOperatorObserverMaker(o.toString)}});