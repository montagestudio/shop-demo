montageDefine("3d3086e","parse",{dependencies:["collections/shim","./grammar"],factory:function(e,t,n){function r(e,t){if(Array.isArray(e))return{type:"tuple",args:e.map(function(e){return r(e,t)})};if(!t&&Object.prototype.hasOwnProperty.call(o,e))return o[e];try{var n=i.parse(e,t||Object.empty);return t||(o[e]=n),n}catch(a){throw a.message=a.message.replace(/[\s\.]+$/,"")+" "+" on line "+a.line+" column "+a.column,a}}e("collections/shim");var i=e("./grammar"),o={};n.exports=r}});