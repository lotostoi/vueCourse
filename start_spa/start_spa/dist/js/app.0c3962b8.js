(function(t){function e(e){for(var n,o,l=e[0],s=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2861:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"sample"},[a("win-modal",{attrs:{fields:t.info,valid:t.valid},on:{switch:function(e){t.show=!t.show}}}),a("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInUp animate__faster overFlof","leave-active-class":"animate__animated animate__fadeOutUp animate__faster overFlof",mode:"out-in"}},[t.show?a("form",{staticClass:"animate__animated animate__fadeInUp"},[a("b-progress",{staticClass:"app-progress",attrs:{value:t.lengBar,max:100,"show-progress":"",animated:t.valid}}),a("div",t._l(t.info,(function(e,n){return a("AppField",{key:n,attrs:{name:e.name,value:e.value,valid:e.valid},on:{valid:function(e){return t.chengData(n,e)}}})})),1),a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.valid}},[t._v("Send Data")])],1):a("dat-table",{attrs:{fields:t.info,valid:t.valid}},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.valid},on:{click:function(e){t.show=!t.show}}},[t._v("Back")])])],1)],1)])},r=[],o=(a("4160"),a("45fc"),a("ac1f"),a("841c"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{staticStyle:{display:"flex"}},[a("span",[t._v(t._s(t.name))]),a("div",{class:t.getClassForWrapper},[a("div",{staticClass:"contIcons ml-2",class:t.getClassForContent},[a("BIconCheck",{staticClass:"check"}),a("BIconInfo",{staticClass:"info"})],1)])]),a("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){return t.makeEvent(e)}}})])}),l=[],s=a("7386"),c={name:"AppField",components:{BIconCheck:s["a"],BIconInfo:s["b"]},props:{name:{type:String,default:""},valid:{type:Boolean,default:!1},value:{type:String}},mounted:function(){var t=this,e=this.active?0:1e3;setTimeout((function(){t.fl=!0}),e)},data:function(){return{fl:!1,ch_value:""}},methods:{makeEvent:function(t){this.ch_value=t.target.value,this.$emit("valid",{value:this.ch_value,valid:this.valid})}},computed:{active:function(){return""!=this.value},getClassForWrapper:function(){return this.active?"animate__animated animate__slideInRight duration ":"animate__animated animate__slideOutRight duration "},getClassForContent:function(){var t=this.valid?"rotateFront":"rotateBack",e=this.fl?"contIcons-active":"contIcons-off";return t+" "+e}}},u=c,d=(a("a456"),a("2877")),f=Object(d["a"])(u,o,l,!1,null,"42700e82",null),p=f.exports,v=a("49f5"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal",attrs:{"hide-backdrop":"",id:"modal-1",title:"Проверка"},scopedSlots:t._u([{key:"modal-header",fn:function(){return[a("div",[a("h4",{staticClass:"my-4"},[t._v("Проверьте данные перед отправкой!")])])]},proxy:!0},{key:"modal-footer",fn:function(){return[a("b-button",{staticClass:"mt-3",on:{click:function(e){return t.$refs["modal"].hide()}}},[t._v("Редактировать")]),a("b-button",{staticClass:"mt-3",on:{click:t.sendData}},[t._v("Отправить")])]},proxy:!0}])},[a("dat-table",{attrs:{fields:t.fields,valid:t.valid}})],1)},h=[],b=a("6aac"),_=a("1947"),y=a("e6c7"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table table-bordered"},t._l(t.fields,(function(e,n){return a("tr",{key:1+n},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.value))])])})),0),t._t("default")],2)},w=[],C={name:"data-table",props:{fields:{type:Array,required:!0},valid:{type:Boolean,default:!1,required:!0}}},k=C,O=Object(d["a"])(k,g,w,!1,null,null,null),B=O.exports,x={name:"win-modal",components:{BModal:b["a"],BButton:_["a"],VBModal:y["a"],DatTable:B},props:{fields:{type:Array,required:!0},valid:{type:Boolean,default:!1,required:!0}},methods:{sendData:function(){var t=this;this.$refs["modal"].hide(),setTimeout((function(){t.$emit("switch")}),200)}}},$=x,j=Object(d["a"])($,m,h,!1,null,null,null),F=j.exports,I={name:"App",components:{AppField:p,BProgress:v["a"],WinModal:F,DatTable:B},directives:{"b-modal":y["a"]},data:function(){return{info:[{name:"Name",value:"",pattern:/^[a-zA-Z ]{2,30}$/},{name:"Phone",value:"",pattern:/^[0-9]{7,14}$/},{name:"Email",value:"",pattern:/.+/},{name:"Some Field 1",value:"",pattern:/.+/},{name:"Some Field 2",value:"",pattern:/.+/}],show:!0}},created:function(){var t=this;this.info.forEach((function(e,a){var n=-1!=e.value.search(t.info[a].pattern);t.$set(e,"valid",n)}))},methods:{chengData:function(t,e){var a=-1!=e.value.search(this.info[t].pattern);this.$set(this.info[t],"value",e.value),this.$set(this.info[t],"valid",a)}},computed:{lengBar:function(){var t=0;return this.info.forEach((function(e){e.valid&&t++})),100/this.info.length*t},valid:function(){return this.info.some((function(t){return!t.valid}))}}},S=I,P=(a("5c0b"),Object(d["a"])(S,i,r,!1,null,null,null)),E=P.exports;a("77ed"),a("f9e3");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"9c0c":function(t,e,a){},a456:function(t,e,a){"use strict";var n=a("2861"),i=a.n(n);i.a}});
//# sourceMappingURL=app.0c3962b8.js.map