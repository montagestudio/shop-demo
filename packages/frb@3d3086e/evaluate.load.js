montageDefine("3d3086e","evaluate",{dependencies:["./parse","./compile-evaluator","./scope"],factory:function(e,t,n){function r(e,t,n,r,s){var l;l="string"==typeof e?i(e):e;var u=o(l),c=new a(t);return c.parameters=n,c.document=r,c.components=s,u(c)}var i=e("./parse"),o=e("./compile-evaluator"),a=e("./scope");n.exports=r}});