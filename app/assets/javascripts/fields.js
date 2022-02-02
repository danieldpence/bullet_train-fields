var t=require("stimulus");function e(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}var a=function(t){function i(){return t.apply(this,arguments)||this}return e(i,t),i.prototype.clickShadowField=function(t){t.preventDefault(),this.shadowFieldTarget.click()},i}(t.Controller);a.targets=["shadowField"];var o=function(t){function i(){return t.apply(this,arguments)||this}e(i,t);var a=i.prototype;return a.pickImageAndUpload=function(t){t.preventDefault();var e=["local","url","camera"];this.hasGoogleApiKeyValue&&e.push("image_search");var i={cloud_name:this.cloudNameValue,apiKey:this.apiKeyValue,upload_preset:this.uploadPresetValue,upload_signature:this.getCloudinarySignature.bind(this),multiple:!1,sources:this.hasSourcesValue?this.sourcesValue.split(","):e,search_by_rights:!this.hasSearchByRightsValue||!1!==this.searchByRightsValue};this.hasGoogleApiKeyValue&&(i.google_api_key=this.googleApiKeyValue),cloudinary.openUploadWidget(i,this.handleWidgetResponse.bind(this))},a.clearImage=function(t){t.preventDefault(),this.hiddenFieldTarget.value=null,this.removeThumbnail()},a.getCloudinarySignature=function(t,e){$.ajax({url:this.signaturesUrlValue,type:"GET",dataType:"text",data:{data:e},complete:function(){console.log("complete")},success:function(e,i,a){t(e)},error:function(t,e,i){console.log(t,e,i)}})},a.handleWidgetResponse=function(t,e){if(!t&&e&&"success"===e.event){var i=e.info;this.hiddenFieldTarget.value=i.public_id,this.removeThumbnail(),this.addThumbnail(this.urlFormatValue.replace("CLOUDINARY_ID",i.public_id))}},a.addThumbnail=function(t){var e=$('<img src="'+t+'" width="'+this.widthValue+'" height="'+this.heightValue+'" data-'+this.identifier+'-target="thumbnail" />');$(this.uploadButtonTarget).prepend(e),this.uploadButtonTarget.classList.add(this.thumbnailShownClass)},a.removeThumbnail=function(){this.hasThumbnailTarget&&(this.uploadButtonTarget.removeChild(this.thumbnailTarget),this.uploadButtonTarget.classList.remove(this.thumbnailShownClass))},i}(t.Controller);o.targets=["uploadButton","hiddenField","thumbnail"],o.values={signaturesUrl:String,height:Number,width:Number,cloudName:String,apiKey:String,googleApiKey:String,urlFormat:String,sources:String,searchByRights:Boolean},o.classes=["thumbnailShown"],exports.ButtonToggleController=a,exports.CloudinaryImageController=o;
//# sourceMappingURL=fields.js.map