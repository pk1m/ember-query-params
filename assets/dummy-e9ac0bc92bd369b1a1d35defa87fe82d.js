"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({paramsRelay:t["default"].inject.service("params-relay"),appName:"Ember Twiddle",queryParams:["theme",{isSidebar:"sidebar"}],theme:"bye",isSidebar:!1,counter:0,init:function(){var e=this;this._super.apply(this,arguments);var t=this.get("paramsRelay");t.autoSubscribe(this),t.subscribe("theme",function(t,a){return e.set("theme2",a+2)})},actions:{updateTheme:function(){var e=this.get("paramsRelay"),t=this.incrementProperty("counter");e.setParam("theme","hi"+t),e.setParam("isSidebar",t%2===1)}}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/params-relay",["exports","ember-query-params/services/params-relay"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1"),n=e.createTextNode("ember-query-params");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("button");e.setAttribute(a,"type","button");var n=e.createTextNode("Test");e.appendChild(a,n),e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[12]),r=new Array(5);return r[0]=e.createMorphAt(t,6,6,a),r[1]=e.createElementMorph(n),r[2]=e.createMorphAt(t,15,15,a),r[3]=e.createMorphAt(t,18,18,a),r[4]=e.createMorphAt(t,21,21,a),r},statements:[["content","outlet",["loc",[null,[4,0],[4,10]]]],["element","action",["updateTheme"],[],["loc",[null,[8,22],[8,46]]]],["content","theme",["loc",[null,[9,0],[9,9]]]],["content","theme2",["loc",[null,[10,0],[10,10]]]],["content","isSidebar",["loc",[null,[11,0],[11,13]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-query-params",version:"1.0.1+5a6aabb3"});