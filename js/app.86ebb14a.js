(function(t){function e(e){for(var n,l,o=e[0],r=e[1],c=e[2],u=0,p=[];u<o.length;u++)l=o[u],a[l]&&p.push(a[l][0]),a[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var n={},a={app:0},i=[];function l(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=n,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(s,n,function(e){return t[e]}.bind(null,n));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("c21b"),a=s.n(n);a.a},"0916":function(t,e,s){"use strict";var n=s("26f6"),a=s.n(n);a.a},"26f6":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("slds-vue")],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("global-navigation",{attrs:{name:"Vue SLDS"}},[s("context-bar-menu-dropdown",{attrs:{title:"Components",active:"component"==t.activeMenu}},[s("dropdown-item",{attrs:{title:"Overview"},on:{click:function(e){t.changeSection(e,"Overview")}}}),s("dropdown-divider"),t._l(t.componentMenu,function(e){return s("dropdown-item",{key:e,attrs:{title:e},on:{click:function(s){t.changeSection(s,"component",e)}}})})],2),s("context-bar-menu-dropdown",{attrs:{title:"Layout",active:"layout"==t.activeMenu}},[s("dropdown-item",{attrs:{title:"Overview"},on:{click:function(e){t.changeSection(e,"layout","Overview")}}}),s("dropdown-divider"),t._l(t.layoutMenu,function(e){return s("dropdown-item",{key:e,attrs:{title:e},on:{click:function(s){t.changeSection(s,"layout",e)}}})})],2),s("context-bar-menu-dropdown",{attrs:{title:"Directives",active:"directive"==t.activeMenu}},[s("dropdown-item",{attrs:{title:"Overview"},on:{click:function(e){t.changeSection(e,"directive","Overview")}}}),s("dropdown-divider"),t._l(t.directiveMenu,function(e){return s("dropdown-item",{key:e,attrs:{title:e},on:{click:function(s){t.changeSection(s,"directive",e)}}})})],2)],1),s("div",{staticClass:"body"},[s("alert-doc"),s("component-documentation",{attrs:{title:"Badge"}},[s("Badge",{attrs:{type:"dark"}},[t._v("I am a badge")])],1),s("component-documentation",{attrs:{title:"Checkbox"}},[s("Checkbox",{model:{value:t.checkboxValue,callback:function(e){t.checkboxValue=e},expression:"checkboxValue"}},[t._v("This is a checkbox")]),s("h2",[t._v("v-model")]),t._v("\n      This component supports v-model.\n")],1),s("component-documentation",{attrs:{title:"Checkbox Group"}},[s("CheckboxGroup",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),s("BrandBand",{attrs:{size:"large"}}),s("Icon",{attrs:{name:"utility.announcement",description:"blahblah"}}),s("Grid",{directives:[{name:"size",rawName:"v-size",value:"1/2",expression:"'1/2'"}]},[s("MediaObject",{attrs:{center:!0}},[s("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Fugiat minus molestias reprehenderit consequuntur sapiente.\n        Modi veritatis totam accusantium numquam assumenda.\n      ")]),s("span",{staticClass:"slds-avatar slds-avatar_large",attrs:{slot:"right-figure"},slot:"right-figure"},[s("img",{attrs:{alt:"Person name",src:"/assets/images/avatar3.jpg",title:"User avatar"}})])])],1),s("Icon",{attrs:{name:"action.description"}}),s("Grid"),s("Notification",{attrs:{subject:"test"},on:{close:t.logEvent}},[t._v("A Notification "),s("Icon",{attrs:{slot:"icon",name:"utility.announcement"},slot:"icon"})],1),s("Button",{attrs:{icon:"utility.close",border:!0,type:"filled"},on:{click:t.logEvent}})],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{class:{"slds-badge":!0,"slds-badge_inverse":"dark"==t.type,"slds-badge_lightest":"light"==t.type}},[t._t("default")],2)},c=[],d={props:{type:{type:String,default:""}}},u=d,p=s("2877"),_=Object(p["a"])(u,r,c,!1,null,null,null);_.options.__file="Badge.vue";var v=_.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"slds-brand-band slds-brand-band_"+t.size+" "+(0==t.background?"slds-brand-band_none":"")})},f=[],h={props:{size:{type:String,default:"medium"},background:{type:Boolean,default:!0}}},b=h,g=Object(p["a"])(b,m,f,!1,null,null,null);g.options.__file="BrandBand.vue";var x=g.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{class:t.buttonClass,attrs:{title:t.description,disabled:t.disabled},on:{click:t.doClick}},[t.icon?s("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.iconPath,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})]):t._e(),t._t("default"),t.description?s("span",{staticClass:"slds-assistive-text"},[t._v(t._s(t.description))]):t._e()],2)},y=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{class:t.containerClassName,attrs:{title:t.description}},[s("svg",{class:t.iconClassName,attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.iconPath}})]),t.description?s("span",{staticClass:"slds-assistive-text"},[t._v(t._s(t.description))]):t._e()])},w=[],N=(s("7f7f"),s("a481"),s("28a5"),s("9393")),S={path:"",iconPath:function(t){var e=(t||".").toLowerCase().replace(/ /g,"_").split(/\./),s=Object(N["a"])(e,2),n=s[0],a=s[1];return"".concat(S.path,"/icons/").concat(n,"-sprite/svg/symbols.svg#").concat(a)}},O={props:{color:{type:String,default:"default"},name:{type:String,default:""},description:{type:String,default:""},size:{type:String,default:""}},computed:{containerClassName:function(){var t="slds-icon_container",e=(this.name||".").toLowerCase().replace(/ /g,"_").split(/\./),s=Object(N["a"])(e,2),n=s[0],a=s[1];return t+=" slds-icon-".concat(n,"-").concat(a),"current"===this.color&&(t+=" slds-current-color"),"action"===n&&(t+=" slds-icon_container_circle"),t},iconClassName:function(){var t="slds-icon slds-icon-text-default";return this.size&&(t+=" slds-icon_".concat(this.size)),this.color&&"current"!==this.color&&(t+=" slds-icon-text-".concat(this.color)),t},iconPath:function(t){return S.iconPath(this.name)}},basePath:function(t){S.path=t},iconPath:function(t){return S.iconPath(t)}},j=O,B=Object(p["a"])(j,k,w,!1,null,null,null);B.options.__file="Icon.vue";var $=B.exports,M={props:{icon:{type:String,default:""},description:{type:String,default:""},border:{type:Boolean,default:!1},type:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="slds-button";return this.icon&&(t+=" slds-button_icon"),this.border?this.type?t=t+" slds-button_icon-border-"+this.type:t+=" slds-button_icon-border":this.type&&(t=t+" slds-button_icon-"+this.type),t},iconPath:function(){return $.iconPath(this.icon)}},methods:{doClick:function(t){this.$emit("click",t)}}},D=M,E=Object(p["a"])(D,C,y,!1,null,null,null);E.options.__file="Button.vue";var z=E.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{class:t.checkboxClassName},[t.required?s("abbr",{staticClass:"slds-required",attrs:{title:"required"}},[t._v("*")]):t._e(),s("input",{attrs:{name:"options",id:"checkbox-41",type:"checkbox",disabled:t.disabled},domProps:{checked:t.value},on:{input:function(e){t.$emit("input",e.target.checked)}}}),s("label",{staticClass:"slds-checkbox__label",attrs:{for:"checkbox-41"}},[s("span",{staticClass:"slds-checkbox_faux"}),s("span",{staticClass:"slds-form-element__label"},[t._t("default")],2)])])},I=[],L={props:{value:Boolean,stacked:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{checkboxClassName:function(){var t="slds-checkbox";return this.stacked&&(t+=" slds-checkbox_stacked"),t}}},T=L,A=Object(p["a"])(T,P,I,!1,null,null,null);A.options.__file="Checkbox.vue";var G,q=A.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-checkbox_button-group"},t._l(t.group,function(e,n){return s("span",{key:n,staticClass:"slds-button slds-checkbox_button"},[s("input",{attrs:{id:t.checkboxId(n),value:"true",name:"checkbox",type:"checkbox"},domProps:{checked:e.value},on:{input:function(s){t.toggle(s,n,e)}}}),s("label",{staticClass:"slds-checkbox_button__label",attrs:{for:t.checkboxId(n)}},[s("span",{staticClass:"slds-checkbox_faux"},[t._v(t._s(e.label))])])])}))},F=[],H=s("a322"),J=0,W=(G={data:function(){return{id:null}},props:{value:Array}},Object(H["a"])(G,"data",function(){return{group:this.value}}),Object(H["a"])(G,"mounted",function(){J+=1,this.id="slds-checkbox-group-".concat(J)}),Object(H["a"])(G,"methods",{checkboxId:function(t){return"slds-checkbox-group-".concat(this.id,"-").concat(t)},toggle:function(t,e,s){this.group[e].value=t.target.checked,this.$emit("input",this.group)}}),G),R=W,U=Object(p["a"])(R,V,F,!1,null,null,null);U.options.__file="CheckboxGroup.vue";var K=U.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{class:t.contextBarMenuDropdownClassName},[s("a",{staticClass:"slds-context-bar__label-action",attrs:{href:"javascript:void(0);",title:t.title}},[s("span",{staticClass:"slds-truncate",attrs:{title:t.title}},[t._v(t._s(t.title))])]),s("div",{staticClass:"slds-context-bar__icon-action slds-p-left_none"},[s("button",{staticClass:"slds-button slds-button_icon slds-button_icon slds-context-bar__button",attrs:{"aria-haspopup":"true",title:"Open menu item submenu"}},[s("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"}})]),s("span",{staticClass:"slds-assistive-text"},[t._v("Open menu item submenu")])])]),s("dropdown-list",[t._t("default")],2)],1)},X=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.dropdownListClassName},[s("ul",{staticClass:"slds-dropdown__list",attrs:{role:"menu"}},[t._t("default")],2)])},Z=[],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"slds-has-divider_top-space",attrs:{role:"separator"}})},et=[],st={},nt=st,at=Object(p["a"])(nt,tt,et,!1,null,null,null);at.options.__file="DropdownDivider.vue";var it=at.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"slds-dropdown__item",attrs:{role:"presentation"}},[s("a",{attrs:{href:"javascript:void(0);",role:"menuitem",tabindex:"0"},on:{click:function(e){t.onClick(e)}}},[s("span",{staticClass:"slds-truncate",attrs:{title:t.title}},[t._v(t._s(t.title))])])])},ot=[],rt={props:{title:String},methods:{onClick:function(t){this.$emit("click",t)}}},ct=rt,dt=Object(p["a"])(ct,lt,ot,!1,null,null,null);dt.options.__file="DropdownItem.vue";var ut=dt.exports,pt={components:{DropdownDivider:it,DropdownItem:ut},props:{side:{type:String,default:"right"}},computed:{dropdownListClassName:function(){var t="slds-dropdown";return this.side&&(t+=" slds-dropdown_".concat(this.side)),t}}},_t=pt,vt=Object(p["a"])(_t,Y,Z,!1,null,null,null);vt.options.__file="DropdownList.vue";var mt=vt.exports,ft={components:{DropdownList:mt},props:{active:Boolean,title:String},computed:{contextBarMenuDropdownClassName:function(){var t="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover";return this.active&&(t+=" slds-is-active"),t}}},ht=ft,bt=Object(p["a"])(ht,Q,X,!1,null,null,null);bt.options.__file="ContextBarMenuDropdown.vue";var gt=bt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{class:t.contextBarMenuItemClassName},[s("a",{staticClass:"slds-context-bar__label-action",attrs:{href:"javascript:void(0);",title:t.title},on:{click:function(e){t.onClick(e)}}},[s("span",{staticClass:"slds-assistive-text"},[t._v(t._s(t.assistive))]),s("span",{staticClass:"slds-truncate",attrs:{title:t.title}},[t._v(t._s(t.title))])])])},Ct=[],yt={props:{active:Boolean,title:String,description:String},computed:{contextBarMenuItemClassName:function(){var t="slds-context-bar__item";return this.active&&(t+=" slds-is-active"),t},assistive:function(){return this.description||this.title}},methods:{onClick:function(t){this.$emit("click",t)}}},kt=yt,wt=Object(p["a"])(kt,xt,Ct,!1,null,null,null);wt.options.__file="ContextBarMenuItem.vue";var Nt=wt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-form-element__control"},[t._t("default")],2)},Ot=[],jt={},Bt=jt,$t=Object(p["a"])(Bt,St,Ot,!1,null,null,null);$t.options.__file="Control.vue";var Mt=$t.exports,Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{class:t.formClassName},[t.label?s("legend",{staticClass:"slds-form-element__legend slds-form-element__label"},[t._v(t._s(t.label))]):t._e(),s("Control",[t._t("default")],2)],1)},Et=[],zt={props:{label:{type:String,default:""},layout:{type:String,default:""}},computed:{formClassName:function(){var t="slds-form-element";return this.layout&&(t+=" slds-form_".concat(this.layout)),t}}},Pt=zt,It=Object(p["a"])(Pt,Dt,Et,!1,null,null,null);It.options.__file="Form.vue";var Lt=It.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"slds-context-bar"},[s("div",{staticClass:"slds-context-bar__primary"},[s("app-launcher-button",{attrs:{name:t.name}})],1),s("context-bar-menu",[t._t("default")],2)],1)])},At=[],Gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"},[t._m(0),s("span",{staticClass:"slds-context-bar__label-action slds-context-bar__app-name"},[s("span",{staticClass:"slds-truncate",attrs:{title:t.name}},[t._v(t._s(t.name))])])])},qt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-context-bar__icon-action"},[s("button",{staticClass:"slds-button slds-icon-waffle_container slds-context-bar__button",attrs:{title:"Description of the icon when needed"}},[s("span",{staticClass:"slds-icon-waffle"},[s("span",{staticClass:"slds-r1"}),s("span",{staticClass:"slds-r2"}),s("span",{staticClass:"slds-r3"}),s("span",{staticClass:"slds-r4"}),s("span",{staticClass:"slds-r5"}),s("span",{staticClass:"slds-r6"}),s("span",{staticClass:"slds-r7"}),s("span",{staticClass:"slds-r8"}),s("span",{staticClass:"slds-r9"})]),s("span",{staticClass:"slds-assistive-text"},[t._v("Open App Launcher")])])])}],Vt={props:{name:String}},Ft=Vt,Ht=Object(p["a"])(Ft,Gt,qt,!1,null,null,null);Ht.options.__file="AppLauncherButton.vue";var Jt=Ht.exports,Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"slds-context-bar__secondary",attrs:{role:"navigation"}},[s("ul",{staticClass:"slds-grid"},[t._t("default")],2)])},Rt=[],Ut={},Kt=Ut,Qt=Object(p["a"])(Kt,Wt,Rt,!1,null,null,null);Qt.options.__file="ContextBarMenu.vue";var Xt=Qt.exports,Yt={components:{AppLauncherButton:Jt,ContextBarMenu:Xt,ContextBarMenuItem:Nt},props:{name:String}},Zt=Yt,te=Object(p["a"])(Zt,Tt,At,!1,null,null,null);te.options.__file="GlobalNavigation.vue";var ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.gridClassName},[t._t("default")],2)},ne=[],ae={props:{direction:{type:String,default:"horizontal"},wrap:{type:Boolean,default:!1},gutters:{type:Boolean,default:!1},gutterSpacing:{type:String,default:""},pullPadding:{type:String,default:""}},computed:{gridClassName:function(){var t="slds-grid";return this.wrap&&(t+=" slds-wrap"),this.direction&&(t+=" slds-grid_".concat(this.direction)),this.gutters&&(t+=" slds-gutters"),this.gutterSpacing&&(t+=" slds-gutters_".concat(this.gutterSpacing)),this.pullPadding&&(t+=" slds-grid_pull-padded-".concat(this.pullPadding)),t}}},ie=ae,le=Object(p["a"])(ie,se,ne,!1,null,null,null);le.options.__file="Grid.vue";var oe=le.exports,re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.mediaClassName},[s("div",{staticClass:"slds-media__figure"},[t._t("left-figure")],2),s("div",{staticClass:"slds-media__body"},[t._t("default")],2),s("div",{staticClass:"slds-media__figure slds-media__figure_reverse"},[t._t("right-figure")],2)])},ce=[],de={props:{sizing:{type:String,default:""},center:{type:Boolean,default:!1},responsive:{type:Boolean,default:!1}},computed:{mediaClassName:function(){var t="slds-media";return this.sizing&&(t+=" slds-media_".concat(this.sizing)),this.center&&(t+=" slds-media_center"),this.responsive&&(t+=" slds-media_responsive"),t}}},ue=de,pe=Object(p["a"])(ue,re,ce,!1,null,null,null);pe.options.__file="MediaObject.vue";var _e=pe.exports,ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"slds-notification",attrs:{role:"dialog","aria-labelledby":t.labelId,"aria-describedby":t.bodyId}},[s("div",{staticClass:"slds-notification__body",attrs:{id:t.bodyId}},[s("a",{staticClass:"slds-notification__target slds-media",on:{click:t.onBodyClick}},[t._t("icon"),s("div",{staticClass:"slds-media__body"},[s("h2",{staticClass:"slds-text-heading--small slds-m-bottom--xx-small",attrs:{id:t.labelId}},[s("span",{staticClass:"slds-assistive-text"},[t._v(t._s(t.type)+" notification:")]),t._v(t._s(t.subject))]),s("p",[t._t("default")],2)])],2),s("button",{staticClass:"slds-button slds-button_icon slds-button--icon-container slds-notification__close",attrs:{title:"Dismiss "+t.subject},on:{click:t.onDismissClick}},[s("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"/assets/icons/utility-sprite/svg/symbols.svg#close","xmlns:xlink":"http://www.w3.org/1999/xlink"}})]),s("span",{staticClass:"slds-assistive-text"},[t._v("Dismiss "+t._s(t.subject))])])])])},me=[],fe=0,he={data:function(){return{bodyId:null,labelId:null}},props:{type:{type:String,default:"event"},subject:{type:String,default:"Notification"},body:{type:String,default:""}},mounted:function(){this.bodyId="slds-dialog-body-".concat(fe++),this.labelId="slds-dialog-label-".concat(fe++)},methods:{onBodyClick:function(t){this.$emit("click",t)},onDismissClick:function(t){this.$emit("close",t)}}},be=he,ge=Object(p["a"])(be,ve,me,!1,null,null,null);ge.options.__file="Notification.vue";var xe=ge.exports,Ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-page-header"},[t._t("default")],2)},ye=[],ke={},we=ke,Ne=Object(p["a"])(we,Ce,ye,!1,null,null,null);Ne.options.__file="PageHeader.vue";var Se=Ne.exports,Oe={inserted:function(t,e){var s=e.value||"default";t.className=t.className+" slds-dl_".concat(s," ");for(var n=t.querySelectorAll("dt"),a=0;a<n.length;++a)n[a].className=n[a].className+" slds-dl_".concat(s,"__label");for(var i=t.querySelectorAll("dl"),l=0;l<i.length;++l)i[l].className=i[l].className+" slds-dl_".concat(s,"__detail")}},je={inserted:function(t,e){var s=e.value||"around medium",n=s.split(/\s+/),a=Object(N["a"])(n,2),i=a[0],l=a[1];l||(l=i,i="around"),t.className=t.className+" slds-m-".concat(i,"_").concat(l)}},Be={inserted:function(t,e){var s=e.value||"around medium",n=s.split(/\s+/),a=Object(N["a"])(n,2),i=a[0],l=a[1];l||(l=i,i="around"),t.className=t.className+" slds-p-".concat(i,"_").concat(l)}},$e={inserted:function(t,e){var s=e.value||"fixed";t.className=t.className+" slds-is-".concat(s)}},Me={inserted:function(t,e){var s=e.value||"1/1",n=s.split(/\s*\/\s*/),a=Object(N["a"])(n,2),i=a[0],l=a[1];t.className=t.className+" slds-size_".concat(i,"-of-").concat(l)}},De={inserted:function(t,e){t.className=t.className+" slds-text_align-".concat(e.value)}},Ee={inserted:function(t,e){t.className=t.className+" slds-text-color_".concat(e.value)}},ze={inserted:function(t,e){t.className=t.className+" slds-text-".concat(e.value)}},Pe={inserted:function(t,e){var s="slds-text-title";"caps"===e.value&&(s+="_caps"),t.className=t.className+" ".concat(s)}},Ie={inserted:function(t,e){var s="slds-text-link";"reset"===e.value?s+="_reset":"faux"===e.value&&(s+="_faux"),t.className=t.className+" ".concat(s)}},Le={inserted:function(t,e){t.className=t.className+" slds-text-longform"}},Te={inserted:function(t,e){t.className=t.className+" slds-text-font_monospace"}},Ae={DescriptionList:Oe,Margin:je,Padding:Be,Position:$e,Size:Me,TextAlign:De,TextColor:Ee,TextLink:Ie,TextLongForm:Le,TextMonospace:Te,TextSize:ze,TextTitle:Pe},Ge=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"padding",rawName:"v-padding",value:"horizontal medium",expression:"'horizontal medium'"}],staticClass:"component-documentation"},[s("component-header",{attrs:{title:t.title}}),t._t("default"),s("hr")],2)},qe=[],Ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{directives:[{name:"text-size",rawName:"v-text-size",value:"heading_medium",expression:"'heading_medium'"}],attrs:{id:t.id}},[t._v(t._s(t.title))])},Fe=[],He={directives:Ae,props:{title:String},computed:{id:function(){return"component__".concat(this.title.replace(" ","_").toLowerCase())}}},Je=He,We=Object(p["a"])(Je,Ve,Fe,!1,null,null,null);We.options.__file="ComponentHeader.vue";var Re=We.exports,Ue={components:{ComponentHeader:Re},directives:Ae,props:{title:String}},Ke=Ue,Qe=(s("0916"),Object(p["a"])(Ke,Ge,qe,!1,null,"4ae638e2",null));Qe.options.__file="ComponentDocumentation.vue";var Xe=Qe.exports,Ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("component-documentation",{attrs:{title:"Alert"}},[s("alert",[t._v("Welcome to SLDS")]),s("a",{attrs:{href:"https://www.lightningdesignsystem.com/components/alert/"}},[t._v("SLDS Documentation")]),s("div",[s("h2",{directives:[{name:"text-size",rawName:"v-text-size",value:"heading_small",expression:"'heading_small'"}]},[t._v("Properties")]),s("dl",{directives:[{name:"description-list",rawName:"v-description-list",value:"horizontal",expression:"'horizontal'"}]},[s("dt",[t._v("type")]),s("dd",[t._v("The type of alert to show.  Must be one of info, warning, error, or offline.  Defaults to info.")])])]),s("div",[s("h2",{directives:[{name:"text-size",rawName:"v-text-size",value:"heading_small",expression:"'heading_small'"}]},[t._v("Events")]),s("dl",{directives:[{name:"description-list",rawName:"v-description-list",value:"horizontal",expression:"'horizontal'"}]},[s("dt",[t._v("close")]),s("dd",[t._v("Emitted when the close button is pushed in the notification.")])])]),s("div",[s("h2",{directives:[{name:"text-size",rawName:"v-text-size",value:"heading_small",expression:"'heading_small'"}]},[t._v("Slots")])])],1)},Ze=[],ts=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_"+t.type,attrs:{role:"alert"}},[s("span",{staticClass:"slds-assistive-text"},[t._v(t._s(t.type))]),t._t("default"),s("button",{staticClass:"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse",attrs:{title:"Close"},on:{click:function(e){t.$emit("close",e)}}},[s("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"/assets/icons/utility-sprite/svg/symbols.svg#close"}})]),s("span",{staticClass:"slds-assistive-text"},[t._v("Close")])])],2)},es=[],ss={props:{type:{type:String,default:"info"}}},ns=ss,as=Object(p["a"])(ns,ts,es,!1,null,null,null);as.options.__file="Alert.vue";var is=as.exports,ls={components:{ComponentDocumentation:Xe,Alert:is},directives:Ae},os=ls,rs=Object(p["a"])(os,Ye,Ze,!1,null,null,null);rs.options.__file="Alert.vue";var cs=rs.exports;$.basePath("./assets");var ds={components:{AlertDoc:cs,Badge:v,BrandBand:x,Button:z,Checkbox:q,CheckboxGroup:K,ContextBarMenuDropdown:gt,ContextBarMenuItem:Nt,Control:Mt,DropdownDivider:it,DropdownItem:ut,DropdownList:mt,Form:Lt,GlobalNavigation:ee,Grid:oe,Icon:$,MediaObject:_e,Notification:xe,PageHeader:Se,ComponentDocumentation:Xe,ComponentHeader:Re},directives:Ae,name:"SldsVue",props:{msg:String},data:function(){return{checkboxValue:!1,group:[{label:"Mon",value:!1},{label:"Tue",value:!1},{label:"Wed",value:!1},{label:"Thur",value:!1},{label:"Fri",value:!1}],componentMenu:["Alert","Badge","Button","Checkbox","Checkbox Group","Icon"],layoutMenu:["Grid"],directiveMenu:["Text Align","Text Color","Text Size"],activeMenu:"component"}},methods:{logEvent:function(t){console.log(t)},changeSection:function(t,e,s){console.log("Route to",e,s),this.activeMenu=e}}},us=ds,ps=Object(p["a"])(us,l,o,!1,null,null,null);ps.options.__file="SldsVue.vue";var _s=ps.exports,vs={name:"app",components:{SldsVue:_s}},ms=vs,fs=(s("034f"),Object(p["a"])(ms,a,i,!1,null,null,null));fs.options.__file="App.vue";var hs=fs.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(hs)}}).$mount("#app")},c21b:function(t,e,s){}});
//# sourceMappingURL=app.86ebb14a.js.map