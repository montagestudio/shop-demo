montageDefine("40094f0","ui/products-carousel-item.reel/products-carousel-item",{dependencies:["montage/ui/component"],factory:function(e,a){var o=e("montage/ui/component").Component;a.ProductsCarouselItem=o.specialize({_image:{value:null},image:{get:function(){return this._image},set:function(e){this._image!==e&&(this._image=e,e&&(this.needsDraw=!0))}},_background:{value:null},background:{get:function(){return this._background},set:function(e){this._background!==e&&(this._background=e,e&&(this.needsDraw=!0))}},draw:{value:function(){this._image&&(this.imageElement.style.backgroundImage="url(assets/"+this._image+")",this.blurredImageElement.style.backgroundImage="url(assets/"+this._image+")"),this._background&&(this._element.style.backgroundColor=this._background)}}})}});