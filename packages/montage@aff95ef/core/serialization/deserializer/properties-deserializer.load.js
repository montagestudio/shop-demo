montageDefine("aff95ef","core/serialization/deserializer/properties-deserializer",{dependencies:["../../core"],factory:function(e,t){var n=e("../../core").Montage,r=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},initWithObjectAndObjectDescriptorAndContext:{value:function(e,t,n){return this._object=e,this._objectDescriptor=t,this._context=n,this}},get:{value:function(e){return this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},deserializeProperties:{value:function(e){var t,r=this._object,i=this._objectDescriptor.properties;if(i){e||(e=n.getSerializablePropertyNames(r));for(var a=0,o=e.length;o>a;a++)t=e[a],r[t]=i[t]}}},getObjectByLabel:{value:function(e){this._context.getObject(e)}}});t.PropertiesDeserializer=r}});