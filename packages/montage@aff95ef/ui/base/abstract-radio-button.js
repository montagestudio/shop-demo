var AbstractControl=require("./abstract-control").AbstractControl,PressComposer=require("../../composer/press-composer").PressComposer,KeyComposer=require("../../composer/key-composer").KeyComposer,CLASS_PREFIX="montage-RadioButton",AbstractRadioButton=exports.AbstractRadioButton=AbstractControl.specialize({constructor:{value:function AbstractRadioButton(){if(this.constructor===AbstractRadioButton)throw Error("AbstractRadioButton cannot be instantiated.");AbstractControl.constructor.call(this),this._pressComposer=new PressComposer,this.addComposer(this._pressComposer),this._keyComposer=new KeyComposer,this._keyComposer.component=this,this._keyComposer.keys="space",this.addComposer(this._keyComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"},"classList.has('montage-RadioButton--checked')":{"<-":"checked"}})}},active:{value:!1},_checked:{value:null},checked:{set:function(e){this._checked=e},get:function(){return this._checked}},enabled:{value:!0},_keyComposer:{value:null},_radioButtonController:{value:null},radioButtonController:{set:function(e){this._radioButtonController&&this._radioButtonController.unregisterRadioButton(this),this._radioButtonController=e,e.registerRadioButton(this)},get:function(){return this._radioButtonController}},_pressComposer:{value:null},enterDocument:{value:function(e){e&&(this.element.setAttribute("role","radio"),this._keyComposer.addEventListener("keyPress",this,!1),this._keyComposer.addEventListener("keyRelease",this,!1))}},draw:{value:function(){this.checked?this.element.setAttribute("aria-checked","true"):this.element.setAttribute("aria-checked","false")}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},check:{value:function(){this.enabled&&!this.checked&&(this.dispatchActionEvent(),this.checked=!0)}},handlePress:{value:function(){this.active=!1,this.check()}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleKeyPress:{value:function(){this.active=!0}},handleKeyRelease:{value:function(){this.active=!1,this.check()}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},activate:{value:function(){this.check()}}});