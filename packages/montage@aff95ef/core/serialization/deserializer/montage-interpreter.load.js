montageDefine("aff95ef","core/serialization/deserializer/montage-interpreter",{dependencies:["../../core","mousse/deserialization/context","./montage-reviver","../../promise"],factory:function(e,t){var n=e("../../core").Montage,r=e("mousse/deserialization/context").Context,i=e("./montage-reviver").MontageReviver,a=e("../../promise").Promise,o=n.specialize({_require:{value:null},_reviver:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw Error("Function 'require' missing.");return this._reviver=(new i).init(e,t),this._require=e,this}},instantiate:{value:function(e,t,n){var r;return r=(new s).init(e,this._reviver,t,n,this._require),r.getObjects()}},preloadModules:{value:function(e){var t,n,r,o,s=this._reviver,l=s.moduleLoader,u=[];for(var c in e)t=e[c],n=t.prototype||t.object,n&&(r=i.parseObjectLocationId(n),o=l.getModule(r.moduleId,c),a.isPromise(o)&&u.push(o));return u.length>0?a.all(u):void 0}}}),s=n.specialize.call(r,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,t,n,i,a){return r.call(this,e,t,n),this._element=i,this._require=a,this}},hasObject:{value:function(e){return e in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(t)}},setUnitsToDeserialize:{value:function(e,t,n){this._unitsToDeserialize.push({object:e,objectDesc:t,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});t.MontageInterpreter=o,t.MontageContext=s}});