(function(t){function a(a){for(var r,n,c=a[0],o=a[1],A=a[2],u=0,l=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&l.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(a);while(l.length)l.shift()();return s.push.apply(s,A||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(r=!1)}r&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},n={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-148dccaa":"16d1115e","chunk-3190f4da":"d3b8b7ce","chunk-36fc42a1":"1f1d5923"}[t]+".js"}function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={"chunk-148dccaa":1,"chunk-3190f4da":1,"chunk-36fc42a1":1};n[t]?a.push(n[t]):0!==n[t]&&e[t]&&a.push(n[t]=new Promise((function(a,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-148dccaa":"35e807c9","chunk-3190f4da":"269549c5","chunk-36fc42a1":"9d6f764e"}[t]+".css",i=o.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var A=s[c],u=A.getAttribute("data-href")||A.getAttribute("href");if("stylesheet"===A.rel&&(u===r||u===i))return a()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){A=l[c],u=A.getAttribute("data-href");if(u===r||u===i)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var r=a&&a.target&&a.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],d.parentNode.removeChild(d),e(s)},d.href=i;var O=document.getElementsByTagName("head")[0];O.appendChild(d)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(a,e){r=i[t]=[a,e]}));a.push(r[2]=s);var A,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var l=new Error;A=function(a){u.onerror=u.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,e[1](l)}i[t]=void 0}};var d=setTimeout((function(){A({type:"timeout",target:u})}),12e4);u.onerror=u.onload=A,document.head.appendChild(u)}return Promise.all(a)},o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var A=window["webpackJsonp"]=window["webpackJsonp"]||[],u=A.push.bind(A);A.push=a,A=A.slice();for(var l=0;l<A.length;l++)a(A[l]);var d=u;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0021":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAQAAABQ+cdNAAAAAXNSR0IArs4c6QAAAERJREFUCNdjuJx/+T8arGe4KnTlPrLQpa+XNRkYGM4bXPqDJBzOAAGXc+HqZjIgwOXlYMEz/5mRBG/wXrp56f1lZQgPAK2pRXj0TR42AAAAAElFTkSuQmCC"},"21ab":function(t,a,e){"use strict";e("b99f")},2395:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],s={},c=s,o=(e("7c55"),e("2877")),A=Object(o["a"])(c,n,i,!1,null,null,null),u=A.exports,l=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),d=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"home"},[r("div",{staticClass:"left"},[r("div",{staticClass:"headTitle",on:{click:t.goHome}},[r("img",{attrs:{src:e("a53e")}})]),r("div",{staticClass:"contentBox"},[r("div",{staticClass:"title"},[t._v("Suite/architecture overviews")]),t._m(0),r("div",{staticClass:"amdArmBtn"},[r("div",{class:["btnSmall","first","arm64"===t.architecture?"active":""],on:{click:function(a){return t.changeArchitecture("arm64")}}},[t._v(" arm64 ")]),r("div",{class:["btnSmall","amd64"===t.architecture?"active":""],on:{click:function(a){return t.changeArchitecture("amd64")}}},[t._v(" amd64 ")])]),t._m(1),r("div",{staticClass:"longBtnWrap"},t._l(t.testedSuitesArray,(function(a,e){return r("div",{key:e,class:["longBtn",t.testedSuite===a?"active":""],on:{click:function(e){return t.changeTestedSuites(a)}}},[t._v(" "+t._s(a)+" ")])})),0)]),r("div",{staticClass:"border"}),t._m(2),r("div",{staticClass:"border"}),t._m(3)]),r("div",{staticClass:"right"},[r("div",[r("router-view")],1)])])},O=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"titleInside"},[r("img",{attrs:{src:e("f3a0")}}),r("div",{staticClass:"text"},[t._v("Tested architectures")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"titleInside"},[r("img",{attrs:{src:e("c232")}}),r("div",{staticClass:"text"},[t._v("Tested suites")])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"contentBox box2"},[r("div",{staticClass:"title"},[t._v("Reproducible openGauss overview")]),r("div",{staticClass:"titleInside"},[r("img",{attrs:{src:e("c3f5")}}),r("div",{staticClass:"text"},[t._v("Dashboard")])]),r("div",{staticClass:"titleInside"},[r("img",{attrs:{src:e("9edd")}}),r("div",{staticClass:"text"},[t._v("Categorized issues")]),r("img",{attrs:{src:e("0021")}})]),r("div",{staticClass:"titleInside"},[r("img",{attrs:{src:e("6300")}}),r("div",{staticClass:"text"},[t._v("Bugs filed")]),r("img",{attrs:{src:e("0021")}})])])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"contentBox"},[r("div",{staticClass:"title"},[t._v("The Reproducible Builds project")]),r("div",{staticClass:"linkWrap"},[r("div",{staticClass:"linkBox"},[r("img",{attrs:{src:e("a1f2")}}),r("a",{staticClass:"link",attrs:{href:"https://github.com/7Light/reproducibleopengauss",target:"_blank"}},[t._v("reproducible-opengauss")])]),r("div",{staticClass:"linkBox"},[r("img",{attrs:{src:e("a1f2")}}),r("a",{staticClass:"link",attrs:{href:"https://reproducible-builds.org",target:"_blank"}},[t._v("reproducible-builds.org")])]),r("div",{staticClass:"linkBox"},[r("img",{attrs:{src:e("a1f2")}}),r("span",[t._v("Reproducible Builds - "),r("a",{staticClass:"link",attrs:{href:"https://reproducible-builds.org/docs",target:"_blank"}},[t._v("Docs")]),t._v("• "),r("a",{staticClass:"link",attrs:{href:"https://reproducible-builds.org/news",target:"_blank"}},[t._v("News")])])]),r("div",{staticClass:"linkBox"},[r("img",{attrs:{src:e("a1f2")}}),r("span",[t._v("Reproducible Builds in Debian - "),r("a",{staticClass:"link",attrs:{href:"https://wiki.debian.org/ReproducibleBuilds",target:"_blank"}},[t._v("Wiki")])])]),r("div",{staticClass:"linkBox"},[r("img",{attrs:{src:e("a1f2")}}),r("a",{staticClass:"link",attrs:{href:"https://reproducible-builds.org/specs/source-date-epoch/",target:"_blank"}},[t._v("SOURCE_DATE_EPOCH specification")])])])])}],f=e("5530"),h=e("2f62"),g={data:function(){return{testedSuitesArray:[]}},computed:Object(f["a"])({},Object(h["c"])(["testedSuite","architecture","urlParam"])),methods:Object(f["a"])(Object(f["a"])({},Object(h["b"])(["changeTestedSuiteVx","changeArchitectureVx","changeUrlParamVx"])),{},{changeArchitecture:function(t){this.changeArchitectureVx({architecture:t})},changeTestedSuites:function(t){this.changeTestedSuiteVx({testedSuite:t})},goHome:function(){this.$router.push({path:"/"})}}),mounted:function(){var t=this;this.$route.query.type&&this.changeUrlParamVx({urlParam:this.$route.query.type}),this.$axios.get("".concat(this.urlParam,"/countBranch")).then((function(a){t.testedSuitesArray=a,t.changeTestedSuiteVx({testedSuite:a[0]})}))}},p=g,Y=(e("21ab"),Object(o["a"])(p,d,O,!1,null,"2efca8e4",null)),m=Y.exports;r["default"].use(l["a"]);var v=[{path:"/",component:m,children:[{path:"/",component:function(){return e.e("chunk-36fc42a1").then(e.bind(null,"cd56"))}},{path:"/detail",name:"detail",component:function(){return e.e("chunk-3190f4da").then(e.bind(null,"c84b"))}},{path:"/testResult/:tableId/:type/:resultIndex",name:"testResult",component:function(){return e.e("chunk-148dccaa").then(e.bind(null,"328b"))}}]}],I=new l["a"]({mode:"history",base:"/",routes:v,scrollBehavior:function(){return{y:0}}}),b=I;r["default"].use(h["a"]);var C=new h["a"].Store({state:{testedSuite:"",architecture:"amd64",urlParam:"openGauss"},mutations:{changeTestedSuiteVx:function(t,a){t.testedSuite=a.testedSuite},changeArchitectureVx:function(t,a){t.architecture=a.architecture},changeUrlParamVx:function(t,a){t.urlParam=a.urlParam}},actions:{},modules:{}}),K=e("f825"),S=e.n(K),E=(e("f8ce"),e("bc3a")),R=e.n(E),k=R.a.create({baseURL:"https://reproducible-builds.opengauss.org/api",withCredentials:!0,headers:{"Content-Type":"application/json;charset=UTF-8"}});k.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),k.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var B={post:function(t,a){return new Promise((function(e,r){k({method:"post",url:t,data:a}).then((function(t){e(t.data)})).catch((function(t){r(t)}))}))},get:function(t,a){return new Promise((function(e,r){k({method:"get",url:t,params:a}).then((function(t){e(t.data)})).catch((function(t){r(t)}))}))},put:function(t,a){return new Promise((function(e,r){k({method:"put",url:t,data:a}).then((function(t){e(t.data)})).catch((function(t){r(t)}))}))},delete:function(t,a){return new Promise((function(e,r){k({method:"delete",url:t,data:a}).then((function(t){e(t.data)})).catch((function(t){r(t)}))}))}};r["default"].prototype.$axios=B,r["default"].use(S.a),r["default"].config.productionTip=!1,new r["default"]({router:b,store:C,render:function(t){return t(u)}}).$mount("#app")},6300:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAORQTFRFAAAAAAAAAP//gICAZmaZYIC/ZoCzaoC/Ynaxa4a8ZoCzYYa2aoC1bICxbYm2aoSwaoS5Zn+yaICvaIC3Z4OzZYC1aoO0Z4C2ZYKyZYKyaISzZ4KzZ4S1aIO3aoO2Z4O1aYG2Z4OzZ4O3Z4GzaIGzaIS3aYS0aYO1aYS2aYO1aIS2aYO0aIS1aIGzaYK2aYO1aYK1aYK1aYS1aYO2aYK0aYO1aIO2aYO1aIO1aYK0aYO1aoK1aYO1aYK1aYS1aYO2aYO1aYO0aYK1aYO0aYO1aYO1aYO1aIO0aIO1aIO1aYO1aYO1Oo3rewAAAEt0Uk5TAAEBAgUICgwNExQVGBocHR0eICAlJikqKzU2OT5ARkhJSkpNUVFfYXB1dnd4gI+Ul5uboKOjpKWztLm6vb6+v9DU2d7n7/H5+f7+q5uNowAAALdJREFUGNOd0dcSgjAQQNFdsPfeFexi771i1///H5OImohPnqfsHdiZAMgECmgBWrN17a1RhGeWUndBAVnGkpirRrbXmhzNzTImF5slZ73KIc3z+xcdaJ5+5y3JaPGFiWCUCdGz34pg09kTlxi9ReDEhoMLEsabE0AJ2saQh/hr4yyTHrzOyifz/su3iodRzkK+eoFxHMUl+9GYGO6ekwrOX7sjgC1z7QH5Kmqn3+N1yxL7DSay/AAXOVrnqC5TJAAAAABJRU5ErkJggg=="},"7c55":function(t,a,e){"use strict";e("2395")},"9edd":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAhJJREFUOE/llE1oE0EYht93JtoKVj0oFBUUQZEe/D0UBA+eok3Sk7SKKB40JsWLVzXtms1RRBG7SUXwVKsiYrubIngSQQ9aBG1zFNGDVBBB4g9m55ONKIk2Y+7Obed79pm/d4ZZx98AzRsAtuLv9oXApdFcwolKmbx/meQRAB3NKAUij8V8O8BsPpgEkVpA9rtLaHqVcK2Ad2wcIB6zbjADYLsVFBwSootA0c7xPjOu/4zgDusMRQ4SahkoJauQmP4/hcEM/3EoIhgUyEpFXrHuNeAz4wanCFxoCQrmw2p1Ezo7l+uYmgW4tDWrDjMqZl2/X8j1Iqh//2oKqJGxydGz8TdR3wl3aiNFx4WiG7ko1qTMebnkg7pgqODvEsOeRkjEEFBfv0s1uOYMfGisHXXurujg4n0kVoF82R0ueeg4e2oRE92UYyCuWvbmdRianjEn9bm+mnw5Dcp5AF0N/1SM5v7S6b656KY8BbDTGlgjA95I8vZQoTwoIhMt2PcMsaXtYBeHkxNZN3gLYE3LwcmLbQuxSD9hzbyyPw6cbVtojDzXWlXsQlTaFnabxK13uvyRzYfR5BfBeNvPlzecGM+4/hmChRazDCWUbZFwGsBe21LCWrh77Fz/o5+xCTwQmT/4T8aY46WR1E2mnanNWql7INYtII3Cet3LJU421tL5oFdD+qC4WgxewMQmik58PmJ+APPs+eNOm18FAAAAAElFTkSuQmCC"},a1f2:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAAXNSR0IArs4c6QAAAjRJREFUOE+VUztoVEEUPWfeS/xAdqNuYZbszK6VBj+Fn0YrE7DTRhQlqATsBCstLIx1/DSihQoiaETERgQtDCqoIHZaCXHdmbcE0Q3+omh231yZdTcuokIuDMzcOffMnTNniI7I5XI9mUymL03TnPc+9t7PKqXeJ0nyOsAKhcJqAEtJpiIymyTJ8876MGcrEWutRwAcIVkAsACAtEZirS0NDAx0zczMfCS5MNSJiCc5LSKnnXNjLewvwv7+/uNRFI0CeCUiF0SkopT6AUBFUeTK5fLLgNNabwawGECWZFZEDpDcIiLXnHPDzQ5LpdI67/0jAE/q9fr+qamp2p/X+N/aGHMWwCEAO621t6i1HiV5LE3TjdVq9cXvYuHW3e9WKDKD7i5ImsZMfUNU96eJ8d5y5yHGmA8A7llr99AYc1VEdjjnlgBotIFDe6e3UfG2iHS1c2RT2Ib4+sqJ8eVzpMaYOwDWWGtN6HCM5GFrbdAmbRcP7vu8jL5xBoIsICkpWRHWCNbq/vuJh9fzc9JorZ8BWOScWxsId5G8AeCgtfbSfPRrPegmpdQDkuestUebr2yMeQpgPYARa20g960R9oN9/hZxsVgcEpFT3vseERmsVquTTcJ8Pp+L4/guyQ0AvgGYFJGgZ5DgpHPupjFmFYDzAIIPuwH0ikiR5JtgH+fc405jh3mktR4muV1EelrmfgvgvnPuojGmT0SukPwqIhkAX5RSQbvLlUol4JrR/inzle6f+J/B5vgNLBF2KQAAAABJRU5ErkJggg=="},a53e:function(t,a,e){t.exports=e.p+"img/opengauss.af3aa072.png"},b99f:function(t,a,e){},c232:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAAXNSR0IArs4c6QAAANVQTFRFAAAAAAD/Y4C4a4a8ZIWxaoC1aICvZoK1aoW1aYK0Z4S1aIK2aIOzaIO1Z4G1aIGzaIK1aYK1aYS0aIK2aoO0aoO3aYK1aYO1aYO0aIS1aIO0aoO0aIO2aIO1aIG0aYO1aYK0aYK2aIO1aIKzaIK0aIS0aIO0aIS0aYO1aYK0aIK0aYO1aIK1aYO2aIK1aYO1aYO1aYO1aYO1aYO1aYO1aYO2aYK1aYO0aYO1aYO1aYO0aYO0aIO1aYO1aYO1aIO1aYO1aYO2aYO1aYO1aYO1aIO1aYO1RFd75wAAAEZ0Uk5TAAESExcYIC0wMzQ7QExPUVZaX2JjY2RrbW57e31/goqLi5CRk5OanZ6jp6iwucTFx8jKz9bY3eTk6+zv8Pf4+fn6+/z9/tY9SvgAAACoSURBVBjTbdHFAoJQEIXhY3d3d4KKmKBin/d/JBdKXPDfzbeYWQyAUHdvWGlyAgBiOsUagF+juzRazvE6P5HcY+PEMWok7ziaIDXfHKJE0rDRD5UjlEUMQhHwkFO9WEfGiy2kvdhAigxgyQEKFirxGVlNnrmKSeJ1uy/KZbNi+0ka2JKMwG5N3tAnqXR6vzrTN6kj/PDsrADZl8smPgDRxcV+h7HL438fGfhRCFMW+VEAAAAASUVORK5CYII="},c3f5:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAQtQTFRFAAAAAAD/QIC/ZoCzXYu5aoCqW4C2bYC2YICvaYe0a4a8ZoW4ZIC2aoS5Zn+yaYC0aoO0ZoK1aYK0Z4S1aYO0Z4O3aYG0aIO1Z4OzaIK1aYS0aIK1Z4O0aIO2Z4K0aYO1aIK2Z4O0Z4K0aYO2aYO1aYK0aYO1aYO0aYK0aIK0aIK1aYO0aYS1aYK1aIS1aIO1aYK0aIK0aYO1aYK0aYO0aYO0aYO1aYK0aYS1aIO1aIK0aIK1aYO1aIK0aIO0aIO2aYO1aYO0aYO1aIK0aYO1aYK1aIK1aIK1aYO1aYO1aYO1aYO2aYO1aYK1aIO0aYO0aYO1aYO0aYO1aIO0aYO1aYO1aYO0aYO1aYO1Cq/0hQAAAFh0Uk5TAAEECgsMDg4QERMZHB0eIik3PT5ESktMVFZfYGNpamtsbXR3eYWGiI+TlZaXm5+io6eoqq2xt7i+wcLExcbGxszU1tfa3+Hj5Ofr7O7x8vP09vj5+/z9/vBSX+MAAADDSURBVBjTbc9ZO0JRGIbhl6RImmSmuSQZMmVsHpAoO57//0scLLZ223O0rvvgW9crrZ50+n/1buOSVt6ZaU86mzXepK4Lx1LfvNpHmULVcmAjpvmAR8HDKXzwhUoDPqrrStv45I28miN5Hf/i/sIzAJUWm0tDgyNvFsA6UJG2ygZrugFO/UoA4V2DV2oCUc19ArEtg3VdA49rOYBg0qC1vGOvudPlz+/FbRvPo19TM53b7104kTZceCEp9TJ2VFnUv30DakdkRzeSZ2YAAAAASUVORK5CYII="},f3a0:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAATVQTFRFAAAAAAD/gICAVaqqQICAZmaZVYCqbW22Z4OzaIO1Z4S1aISzaIS3aoO0aIS1Z4OzaoO2aIK1Z4G2Z4G1aoS1Z4K0aYK0aIS1aYO0aIO0Z4K0aIO1aIO0aIO0aIO0aYK2aIO2aYK1aYO1aYO1aoS1aIO1aYO0aIK1aYK1aIK0aIK1aoO1aYO1aYO1aYO1aYO1aIO0aIO1aYO1aYO1aoS1a4S2cIm4cYq5c4u6dY27d4+8fJO+f5XAgJbAgZfBgpjBhZrDhpvDh5zEi5/FjJ/GjqHHlKbKmavMn7DPorLRprbTrLrWrbvXsL7Ysr/ZtcLat8PbucXcvsnfv8rfxM7hxM7iyNHky9Tl1t3q3OLt3+Xv4+jx5urz6e306u306u706u717O/17O/27/L38PL38vT4////FR0SdgAAADN0Uk5TAAECAwQFBgdKTE9RUVJTVFRWV1lZXFyHiI6PkJakpqqrrK3W19ze39/h4ePk8PH4+f7+BCVH2wAAAORJREFUGBkFwVtLwmAAANDzbcuNpUl2MVsXCHrp//+XXiICkwwqQWe7hN86J4D8ZJwXQ9Pttz0EOK1ywO/7DilJdZsBHM1CTUo1B0CYDLXEbA4ALEppfp+ByeN110Iotsm0wPlcVWQ3Li8wKbMxbJ76ZSpOr55hmo3gsHrQDKW3PxhlOdhTx1IDygxcF4TAol1hSBqIEYgRfrMe1qMz8NFCn+xAHyG2YJPsGrjbHYKhvoFtmx66WVCcv3x1+/X3vOvF1z5QXQGA1VpKPYwDgLj6JEB5OwZsly0CODo+GZX2/U97gH8BhVcJHcHKEAAAAABJRU5ErkJggg=="}});