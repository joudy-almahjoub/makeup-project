(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0fa5":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("cartbtn"),i("v-container",t._l(t.products,(function(t){return i("shopp",{key:t.id,attrs:{id:t.id,name:t.name,image:t.image,price:t.price}})})),1)],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"#F48FB1",dark:""}},"v-btn",n,!1),s),[i("v-icon",{attrs:{left:""}},[t._v(" mdi-cart-check ")]),t._v(" "+t._s(t.cartCount)+" your cart ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._l(t.StoreCart,(function(e,s){return i("v-card",{key:s},[i("v-img",{attrs:{src:e.image,height:"300px"}}),i("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" "+t._s(e.name)+" ")]),i("v-card-text",[t._v(" "+t._s("$"+e.price)+" ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.removeItem(s)}}},[t._v(" remove ")])],1)],1)})),i("v-btn",[t._v("$"+t._s(t.calcSum))]),i("v-btn",{attrs:{color:"#F48FB1"},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],2)],1)])},a=[],o=(i("d81d"),i("7db0"),i("d3b7"),{data:function(){return{dialog:!1}},computed:{StoreCart:function(){var t=this;return this.$store.getters.StoreCart.map((function(e){return t.$store.getters.products.find((function(t){return e===t.id}))}))},cartCount:function(){return this.StoreCart.length},cart:function(){return this.$store.getters.StoreCart},calcSum:function(){return this.StoreCart.reduce((function(t,e){return t+e.price}),0)}},methods:{removeItem:function(t){this.$store.dispatch("removeItem",t)}}}),l=o,c=(i("89bd"),i("2877")),h=i("6544"),d=i.n(h),u=i("8336"),v=i("5530"),f=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),p=i("297c"),m=i("1c87"),g=i("58df"),b=Object(g["a"])(p["a"],m["a"],f["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({"v-card":!0},m["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},f["a"].options.computed.classes.call(this))},styles:function(){var t=Object(v["a"])({},f["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=p["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),w=i("80d2"),y=Object(w["h"])("v-card__actions"),O=Object(w["h"])("v-card__subtitle"),$=Object(w["h"])("v-card__text"),x=Object(w["h"])("v-card__title"),C=i("2909"),k=i("ade3"),S=(i("498a"),i("caad"),i("2532"),i("368e"),i("480e")),_=i("4ad4"),j=i("b848"),A=i("75eb"),T=(i("3c93"),i("a9ad")),I=i("7560"),B=i("f2e7"),E=Object(g["a"])(T["a"],I["a"],B["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(v["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),V=E,N=i("2b0e"),L=N["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new V({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(w["o"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(w["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[w["q"].up,w["q"].pageup],i=[w["q"].down,w["q"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,s,n=e.shiftKey||e.deltaX?"x":"y",r="y"===n?e.deltaY:e.deltaX||e.deltaY;"y"===n?(i=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);var a=r<0,o=r>0;return!(i||!a)||(!(s||!o)||!(!i&&!s)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(w["f"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,s=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(s,i))||!this.shouldScroll(i,t)}for(var n=0;n<e.length;n++){var r=e[n];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(w["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),M=i("e4d3"),z=i("21be"),W=i("a293"),D=i("d9bd"),P=Object(g["a"])(_["a"],j["a"],A["a"],L,M["a"],z["a"],B["a"]),R=P.extend({name:"v-dialog",directives:{ClickOutside:W["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(k["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(k["a"])(t,"v-dialog--active",this.isActive),Object(k["a"])(t,"v-dialog--persistent",this.persistent),Object(k["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(k["a"])(t,"v-dialog--scrollable",this.scrollable),Object(k["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(D["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):L.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=Object(C["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));s&&s.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(S["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(v["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(v["a"])(Object(v["a"])({},t.style),{},{maxWidth:Object(w["g"])(this.maxWidth),width:Object(w["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),F=(i("8ce9"),I["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(v["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(v["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})),q=i("132d"),X=i("adda"),Y=i("2fa4"),H=Object(c["a"])(l,r,a,!1,null,"2202da1f",null),Z=H.exports;d()(H,{VBtn:u["a"],VCard:b,VCardActions:y,VCardText:$,VCardTitle:x,VDialog:R,VDivider:F,VIcon:q["a"],VImg:X["a"],VSpacer:Y["a"]});var K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",id:"card"}},[i("v-img",{attrs:{src:t.image,height:"300px",id:"img"}}),i("v-card-title",[t._v(" "+t._s(t.name)+" ")]),i("v-card-subtitle",[t._v(" price: "+t._s("$"+t.price)+" ")]),i("v-card-actions",[i("v-btn",{attrs:{id:"btn",text:""},on:{click:function(e){return t.addItem(t.id)}}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-cart-arrow-down ")]),t._v(" Add to cart ")],1),i("v-spacer")],1)],1)],1)],1)],1)],1)},U=[],J={props:["id","name","image","price"],components:{},methods:{addItem:function(t){this.$store.dispatch("addItem",t)}}},G=J,Q=(i("d822"),i("62ad")),tt=i("a523"),et=i("0fd9"),it=Object(c["a"])(G,K,U,!1,null,"d223b1f8",null),st=it.exports;d()(it,{VBtn:u["a"],VCard:b,VCardActions:y,VCardSubtitle:O,VCardTitle:x,VCol:Q["a"],VContainer:tt["a"],VIcon:q["a"],VImg:X["a"],VRow:et["a"],VSpacer:Y["a"]});var nt={name:"Shop",components:{Shopp:st,Cartbtn:Z},computed:{products:function(){return this.$store.getters.products}}},rt=nt,at=(i("585a"),Object(c["a"])(rt,s,n,!1,null,"6592b99a",null));e["default"]=at.exports;d()(at,{VContainer:tt["a"]})},"170e":function(t,e,i){},"1bfb":function(t,e,i){},"2af1":function(t,e,i){var s=i("23e7"),n=i("f748");s({target:"Math",stat:!0},{sign:n})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"536e":function(t,e,i){},"585a":function(t,e,i){"use strict";i("f359")},"608a":function(t,e,i){},"608c":function(t,e,i){},"615b":function(t,e,i){},"89bd":function(t,e,i){"use strict";i("536e")},"8ce9":function(t,e,i){},a8ed:function(t,e,i){"use strict";i("170e")},d822:function(t,e,i){"use strict";i("608a")},f359:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",justify:"center",align:"center"}},[i("v-tabs",{attrs:{color:"#f48fb1e1","background-color":"antiquewhite"}},[i("v-tab",[t._v("service one")]),i("v-tab-item",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("h2",{staticClass:"pa-3"},[t._v("Makeup Artists")]),i("h4",{staticClass:"pa-1"},[t._v("in case you are looking for a professional makeup artist"),i("span",[t._v(' "For You"')]),t._v(" have many experts that can help you!")])]),i("v-col",[i("v-img",{attrs:{src:"https://i.pinimg.com/736x/60/a6/f6/60a6f6dd1774fb156fb25cc450ea0161.jpg","max-width":"450"}})],1)],1)],1),i("v-tab",[t._v("service Two")]),i("v-tab-item",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("h2",{staticClass:"pa-3"},[t._v("Fashionista")]),i("h4",{staticClass:"pa-1"},[t._v("You wanna look stylish and modern?")]),i("p",[t._v("well,we have plenty ways that can help you just contact us for more details")])]),i("v-col",[i("v-img",{attrs:{src:"https://i.pinimg.com/564x/24/66/d2/2466d286b2bc870a0879d2643ac48b84.jpg","max-width":"450"}})],1)],1)],1),i("v-tab",[t._v("service Three")]),i("v-tab-item",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("h2",{staticClass:"pa-3"},[t._v("Hair Dresser")]),i("h4",{staticClass:"pa-1"},[t._v("You want your hair to look good?")]),i("p",[i("span",[t._v('"For You"')]),t._v(" always your best choice for good looking, so if you are interesred our hair dressers can always help you! ")])]),i("v-col",[i("v-img",{attrs:{src:"https://i.pinimg.com/736x/71/6c/8b/716c8b76486c882ee113c67300c72180.jpg","max-width":"450"}})],1)],1)],1),i("v-spacer")],1)],1)],1)],1)],1)},n=[],r=(i("a8ed"),i("2877")),a=i("6544"),o=i.n(a),l=i("62ad"),c=i("a523"),h=i("adda"),d=i("0fd9"),u=i("2fa4"),v=i("5530"),f=(i("ac1f"),i("5319"),i("4e82")),p=i("1c87"),m=i("7560"),g=i("80d2"),b=i("58df"),w=Object(b["a"])(p["a"],Object(f["a"])("tabsBar"),m["a"]),y=w.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({"v-tab":!0},p["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click:function(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle:function(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,n=i.data;return n.attrs=Object(v["a"])(Object(v["a"])({},n.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),n.on=Object(v["a"])(Object(v["a"])({},n.on),{},{keydown:function(t){t.keyCode===g["q"].enter&&e.click(t),e.$emit("keydown",t)}}),t(s,n,this.$slots.default)}}),O=i("1e6c"),$=O["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=O["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),x=(i("a9e3"),i("b0c0"),i("1bfb"),i("b85c")),C=(i("2af1"),i("caad"),i("99af"),i("fb6a"),i("608c"),i("9d26")),k=i("0789"),S=i("604c"),_=i("d9bd"),j=i("2b0e"),A=j["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,s=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10),a=!isNaN(r);return a?i<r:s===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(_["d"])("mobile-break-point","mobile-breakpoint",this)}}),T=i("dc22"),I=i("c3f0");function B(t){var e=.501,i=Math.abs(t);return Math.sign(t)*(i/((1/e-2)*(1-i)+1))}function E(t,e,i,s){var n=t.clientWidth,r=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var a=e.wrapper+s,o=n+r,l=.4*n;return r<=s?s=Math.max(r-l,0):a<=o&&(s=Math.min(s-(a-o-l),e.content-e.wrapper)),i?-s:s}function V(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var r=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var a=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))}var N=Object(b["a"])(S["a"],A).extend({name:"base-slide-group",directives:{Resize:T["a"],Touch:I["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(v["a"])(Object(v["a"])({},S["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?B(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+B(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,i=Object(x["a"])(Object(g["f"])(t));try{for(i.s();!(e=i.n()).done;){var s,n=e.value,r=Object(x["a"])(this.items);try{for(r.s();!(s=r.n()).done;){var a=s.value;if(a.$el===n)return void(this.scrollOffset=E(a.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(o){r.e(o)}finally{r.f()}}}catch(o){i.e(o)}finally{i.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(C["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(k["a"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,r=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=V(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=E(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),L=(N.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),i("d10f")),M=Object(b["a"])(N,L["a"],m["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},N.options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=N.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,s=this.items,n=t.path,r=e.path,a=!1,o=!1,l=Object(x["a"])(s);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===r?o=!0:c.to===n&&(a=!0),a&&o)break}}catch(h){l.e(h)}finally{l.f()}!a&&o&&(this.internalValue=void 0)}}},render:function(t){var e=N.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),z=i("f665"),W=z["a"].extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},z["a"].options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||S["a"].options.methods.getValue.call(this,t,e)}}}),D=i("a9ad"),P=Object(b["a"])(D["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),R=i("a452"),F=Object(b["a"])(D["a"],R["a"],m["a"]),q=F.extend().extend({name:"v-tabs",directives:{Resize:T["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(v["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(g["g"])(this.slider.height),left:this.isReversed?void 0:Object(g["g"])(this.slider.left),right:this.isReversed?Object(g["g"])(this.slider.right):void 0,top:this.vertical?Object(g["g"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(g["g"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,s={style:{height:Object(g["g"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(M,s,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(W,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(P,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],s=[],n=this.$slots.default||[],r=n.length,a=0;a<r;a++){var o=n[a];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:s.push(o)}else s.push(o)}return{tab:s,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,s=e.slider,n=e.items,r=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,s),this.genItems(n,r)])}}),X={},Y=Object(r["a"])(X,s,n,!1,null,"b827feb4",null);e["default"]=Y.exports;o()(Y,{VCol:l["a"],VContainer:c["a"],VImg:h["a"],VRow:d["a"],VSpacer:u["a"],VTab:y,VTabItem:$,VTabs:q})}}]);
//# sourceMappingURL=about.921f5099.js.map