(function(t){function e(e){for(var a,i,c=e[0],l=e[1],s=e[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(h.length)h.shift()();return n.push.apply(n,s||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.teachers?r("div",[r("StatusSchool",{attrs:{optionSet:t.areaSet,teachers:t.teachers,choice:"area"}}),r("hr"),r("StatusSchool",{attrs:{optionSet:t.schoolSet,teachers:t.teachers,choice:"school"}})],1):t._e()])},n=[],i=(r("d3b7"),r("6062"),r("3ca3"),r("498a"),r("ddb0"),r("b85c")),c=(r("96cf"),r("1da1")),l=r("bc3a"),s=r.n(l),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["school"===t.choice?r("h3",[t._v("Выберете школу")]):"area"===t.choice?r("h3",[t._v("Выберете Район")]):t._e(),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?r:r[0]}}},["area"===t.choice?r("option",{attrs:{value:"Все"}},[t._v("Всe")]):t._e(),t._l(t.optionSet,(function(e,a){return r("option",{key:a,attrs:{"value:item":""}},[t._v(t._s(e))])}))],2),t.datacollection?r("div",{staticClass:"small"},[r("line-chart",{attrs:{chartData:t.datacollection,options:t.options}})],1):t._e()])},u=[],h=(r("99af"),r("4de4"),r("4ec9"),r("a9e3"),r("b680"),r("1fca")),p=h["b"].reactiveProp,d={extends:h["a"],mixins:[p],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},m={props:["optionSet","teachers","choice"],name:"StatusSchool",data:function(){return{filter:"",size:Number,root:"",datacollection:null,color:["rgb(25, 152, 161)","rgb(190, 255, 115)","red","rgb(148, 42, 0)","rgb(0, 85, 196)","rgb(0, 190, 196)","rgb(255, 224, 139)","rgb(24, 67, 255)","rgb(21, 104, 0)","#fcac45","#f87979"],options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}},updated:function(){"area"===this.choice?""===this.filter&&(this.filter="Все",this.fillData(this.filter)):"school"===this.choice&&""===this.filter&&(this.filter="Шербакульский Лицей",this.fillData(this.filter))},components:{LineChart:d},watch:{filter:function(t){t!==this.root&&(console.log(this.filter),this.root=t,this.fillData(this.filter))}},methods:{fillData:function(t){var e,r=new Map,a=Object(i["a"])(this.teachers);try{for(a.s();!(e=a.n()).done;){var o=e.value;if("Дневник.ру"!==o.platform.trim()&&"дневник.ру"!==o.platform.trim())if("school"===this.choice){if(o.school===t)if(r.has(o.platform.trim())){var n=r.get(o.platform.trim());n++,r.set(o.platform.trim(),n)}else r.set(o.platform.trim(),1)}else if("area"===this.choice){if("Все"===t)if(r.has(o.platform.trim())){var c=r.get(o.platform.trim());c++,r.set(o.platform.trim(),c)}else r.set(o.platform.trim(),1);if(o.Area===t)if(r.has(o.platform.trim())){var l=r.get(o.platform.trim());l++,r.set(o.platform.trim(),l)}else r.set(o.platform.trim(),1)}}}catch(_){a.e(_)}finally{a.f()}var s,f=[],u=[],h=0,p=0,d=Object(i["a"])(r.keys());try{for(d.s();!(s=d.n()).done;){var m=s.value;f[p]=m,p++}}catch(_){d.e(_)}finally{d.f()}p=0;var v,b=Object(i["a"])(r.values());try{for(b.s();!(v=b.n()).done;){var g=v.value;h+=g,u[p]=g,p++}}catch(_){b.e(_)}finally{b.f()}for(var y=[],S=0;S<u.length;S++)y[S]={label:"".concat(S+1,":").concat(f[S],"(").concat((u[S]/h*100).toFixed(2),"%)"),backgroundColor:this.color[S],data:[u[S]]};this.datacollection={labels:["".concat(t," (").concat(h," человек)")],datasets:y},console.log(this.datacollection)}}},v=m,b=(r("7c93"),r("2877")),g=Object(b["a"])(v,f,u,!1,null,"1a9da656",null),y=g.exports,S={name:"App",components:{StatusSchool:y},data:function(){return{teachers:[],schoolSet:{},areaSet:{}}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api").then((function(e){console.log(e.data),t.teachers=e.data,t.areaSet=new Set,t.schoolSet=new Set;var r,a=Object(i["a"])(t.teachers);try{for(a.s();!(r=a.n()).done;){var o=r.value;t.schoolSet.add(o.school.trim()),t.areaSet.add(o.Area.trim())}}catch(n){a.e(n)}finally{a.f()}})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})))()}},_=S,w=(r("034f"),Object(b["a"])(_,o,n,!1,null,null,null)),O=w.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},"7c93":function(t,e,r){"use strict";var a=r("aeba"),o=r.n(a);o.a},"85ec":function(t,e,r){},aeba:function(t,e,r){}});
//# sourceMappingURL=app.eef3ccd9.js.map