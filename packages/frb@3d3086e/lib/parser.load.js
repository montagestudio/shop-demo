montageDefine("3d3086e","lib/parser",{dependencies:[],factory:function(e,t){function n(e){return function(t){var n,i=0,o=1,a=e.apply(this,[function(e){return n=e,r()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var s=0;t.length>s;s++)a=a(t[s],{index:s,line:o,column:i}),"\n"===t[s]?(o++,i=0):i++;a=a("",{index:s,line:o,column:i})}catch(l){if(l.loc){var u=l.loc;l.message+=t.length>80?" at line "+u.line+", column "+u.column:" in "+JSON.stringify(t)+" at index "+u.index}throw l}return n}}function r(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function r(){return r}}}function i(e){return function(t){return function(n,r){return n===e?t(n,r):t(null,r)(n,r)}}}t.makeParser=n,t.expectEof=r,t.makeExpect=i}});