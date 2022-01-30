(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3b47cc7c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wordle-game/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4ee2":function(e,t,n){},"7bae":function(e,t,n){e.exports=n.p+"img/check.b8ed64bf.svg"},"8b1b":function(e,t,n){e.exports=n.p+"img/close.2ba22493.svg"},"8e89":function(e,t,n){e.exports=n.p+"img/backspace.29c873c0.svg"},9174:function(e,t,n){e.exports=n.p+"img/settings.8d65b2d7.svg"},aede:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}var o=n("6b0d"),c=n.n(o);const s={},i=c()(s,[["render",a]]);var u=i,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function b(e,t,n,a,o,c){var s=Object(r["v"])("HelloWorld");return Object(r["q"])(),Object(r["d"])(s)}var d=n("2909"),f=n("9174"),g=n.n(f),p=n("7bae"),O=n.n(p),j=n("8e89"),y=n.n(j),h=n("8b1b"),v=n.n(h),m={class:"word-list",id:"word-list",ref:"wordListElement"},w={class:"word",id:"input-zone"},k={class:"bottom-sheet"},L={class:"keyboard"},T=["onClick"],x={class:"game-controls"},S=["title"],E=Object(r["f"])("img",{src:g.a,"aria-hidden":"true"},null,-1),I=[E],C=["title","disabled"],R=Object(r["f"])("img",{src:O.a,"aria-hidden":"true"},null,-1),A=["title","disabled"],q=Object(r["f"])("img",{src:y.a,"aria-hidden":"true"},null,-1),P=[q],W={class:"settings-content"},M={class:"settings-section"},G={class:"radio-btn"},H=Object(r["f"])("label",{for:"language-english"},"English",-1),N={class:"radio-btn"},_=Object(r["f"])("label",{for:"language-french"},"Français",-1),U={class:"settings-section"},Y={class:"radio-btn"},B=Object(r["f"])("label",{for:"keyboard-layout-qwerty"},"Qwerty",-1),Z={class:"radio-btn"},Q=Object(r["f"])("label",{for:"keyboard-layout-azerty"},"Azerty",-1),V={class:"settings-section mt-lg"},z=["title"],F=Object(r["f"])("img",{src:v.a,"aria-hidden":"true"},null,-1);function J(e,t,n,a,o,c){return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",m,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(e.attemps,(function(e){return Object(r["q"])(),Object(r["e"])("div",{class:"word",key:e.id},[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(e.letters,(function(e){return Object(r["q"])(),Object(r["e"])("span",{class:"letter-wrapper",key:e.id},[Object(r["f"])("span",{class:Object(r["l"])(["letter","RIGHT_POSITION"===e.status?"right-pos":"WRONG_POSITION"===e.status?"wrong-pos":""])},Object(r["x"])(e.value),3)])})),128))])})),128)),Object(r["f"])("div",w,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(e.input.letters,(function(t){return Object(r["q"])(),Object(r["e"])("span",{class:"letter-wrapper",key:t.id},[Object(r["f"])("span",{class:Object(r["l"])(["letter",e.badInput?"bad-input":""])},Object(r["x"])(t.value),3)])})),128))])],512),Object(r["f"])("div",k,[Object(r["f"])("div",L,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(e.keyboard,(function(t){return Object(r["q"])(),Object(r["e"])("div",{class:"keyboard-row",key:t},[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(Object(d["a"])(t),(function(t){return Object(r["q"])(),Object(r["e"])("button",{class:"btn",key:t,onClick:function(n){return e.inputLetter(t)}},Object(r["x"])(t),9,T)})),128))])})),128))]),Object(r["f"])("div",x,[Object(r["f"])("button",{class:"btn settings-btn",title:e.i18n("game.settings"),onClick:t[0]||(t[0]=function(t){return e.settings.open=!0})},I,8,S),Object(r["f"])("button",{class:"btn submit-btn",title:e.i18n("game.submit"),onClick:t[1]||(t[1]=function(t){return e.submitWord()}),disabled:5!==e.input.length},[Object(r["f"])("span",null,Object(r["x"])(e.i18n("game.submit")),1),R],8,C),Object(r["f"])("button",{class:"btn erase-btn",title:e.i18n("game.erase"),onClick:t[2]||(t[2]=function(t){return e.removeLastLetter()}),disabled:0===e.input.length},P,8,A)])]),Object(r["f"])("div",{class:Object(r["l"])(["settings-overlay",e.settings.open?"open":""])},[Object(r["f"])("div",W,[Object(r["f"])("section",M,[Object(r["f"])("h2",null,Object(r["x"])(e.i18n("settings.language")),1),Object(r["f"])("div",G,[Object(r["C"])(Object(r["f"])("input",{id:"language-english",type:"radio",name:"language",value:"en","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.settings.language=t})},null,512),[[r["A"],e.settings.language]]),H]),Object(r["f"])("div",N,[Object(r["C"])(Object(r["f"])("input",{id:"language-french",type:"radio",name:"language",value:"fr","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.settings.language=t})},null,512),[[r["A"],e.settings.language]]),_])]),Object(r["f"])("section",U,[Object(r["f"])("h2",null,Object(r["x"])(e.i18n("settings.keyboardLayout")),1),Object(r["f"])("div",Y,[Object(r["C"])(Object(r["f"])("input",{id:"keyboard-layout-qwerty",type:"radio",name:"keyboard-layout",value:"QWERTY","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.settings.keyboardLayout=t})},null,512),[[r["A"],e.settings.keyboardLayout]]),B]),Object(r["f"])("div",Z,[Object(r["C"])(Object(r["f"])("input",{id:"keyboard-layout-azerty",type:"radio",name:"keyboard-layout",value:"AZERTY","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.settings.keyboardLayout=t})},null,512),[[r["A"],e.settings.keyboardLayout]]),Q])]),Object(r["f"])("section",V,[Object(r["f"])("button",{class:"btn",title:e.i18n("settings.close"),onClick:t[7]||(t[7]=function(t){return e.settings.open=!1})},[Object(r["f"])("span",null,Object(r["x"])(e.i18n("settings.close")),1),F],8,z)])])],2)],64)}var D=n("5530"),K=n("1da1"),X=(n("96cf"),n("6062"),n("caad"),n("2532"),n("99af"),n("ac1f"),n("1276"),function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/wordle-game/","data/words-").concat(t,"-5.txt"));case 2:if(n=e.sent,n.ok){e.next=6;break}return console.warn("Could not fetch words for language '".concat(t,"'")),e.abrupt("return",[]);case 6:return e.next=8,n.text();case 8:return r=e.sent,a=r.toUpperCase().split("\n"),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=n("b85c"),ee={en:{game:{settings:"Settings",submit:"Submit",erase:"Erase"},settings:{language:"Language",keyboardLayout:"Keyboard layout",close:"Close settings"}},fr:{game:{settings:"Paramètres",submit:"Envoyer",erase:"Effacer"},settings:{language:"Langue",keyboardLayout:"Disposition du clavier",close:"Fermer les paramètres"}}},te=function(e,t){if(!e||"string"!=typeof e)return console.warn("Wrong i18n parameter: "+e),e;if(!(t in ee))return console.warn("Missing language '".concat(t,"'")),e;var n,r=e.split("."),a=ee[t],o=Object($["a"])(r);try{for(o.s();!(n=o.n()).done;){var c=n.value;if(!a||!(c in a))return console.warn("Missing property '".concat(e,"' for language '").concat(t,"'")),e;a=a[c]}}catch(s){o.e(s)}finally{o.f()}return a||e},ne=function(e){return 1===e.length&&e>="A"&&e<="Z"},re=function(e){var t=Math.floor(Math.random()*e.length);return e[t]},ae=function(){return Math.floor(1e10*Math.random())},oe=n("bee2"),ce=n("d4ec"),se=(n("5319"),n("a15b"),n("fb6a"),5),ie={AZERTY:["AZERTYUIOP","QSDFGHJKLM","WXCVBN"],QWERTY:["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"]},ue=Object(oe["a"])((function e(t){Object(ce["a"])(this,e),this.id=ae(),this.value=t,this.status="ABSENT"})),le=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(ce["a"])(this,e),this.id=ae(),this.word="",this.letters=[],this.update(t)}return Object(oe["a"])(e,[{key:"update",value:function(e){e=e.toUpperCase();for(var t=[],n=0;n<se;n++)n<e.length?t.push(new ue(e[n])):t.push(new ue(" "));this.word=e,this.letters=t}},{key:"length",get:function(){return this.word.replace(" ","").length}},{key:"addLetter",value:function(e){if(this.word.length<se&&ne(e)){var t=this.word+e;this.update(t)}}},{key:"removeLastLetter",value:function(){if(this.word.length>0){var e=Object(d["a"])(this.word).slice(0,this.word.length-1).join("");this.update(e)}}}]),e}(),be=Object(r["g"])({name:"HelloWorld",setup:function(){var e=Object(r["s"])({dictionary:new Set,wordToGuess:"happy",input:new le,attemps:[],badInput:!1,settings:{open:!1,language:"en",keyboardLayout:"AZERTY"}}),t=Object(r["b"])((function(){return ie[e.settings.keyboardLayout]})),n=Object(r["t"])(null);Object(r["o"])(Object(K["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=localStorage.getItem("userSettings.language"),r=localStorage.getItem("userSettings.keyboardLayout"),"en"!==n&&"fr"!==n||(e.settings.language=n),"AZERTY"!==r&&"QWERTY"!==r||(e.settings.keyboardLayout=r),u(),window.addEventListener("keydown",a);case 6:case"end":return t.stop()}}),t)})))),Object(r["p"])((function(){window.removeEventListener("keydown",a)}));var a=function(e){"Backspace"===e.key?o():"Enter"===e.key?c():1===e.key.length&&s(e.key.toUpperCase())},o=function(){e.input.removeLastLetter()},c=function(){if(e.input.length===se&&e.dictionary.has(e.input.word)){for(var t=0;t<se;t++)e.input.letters[t].status=e.input.word[t]===e.wordToGuess.charAt(t)?"RIGHT_POSITION":e.wordToGuess.includes(e.input.word[t])?"WRONG_POSITION":"ABSENT";e.attemps.push(e.input),e.input=new le}else e.badInput=!0,setTimeout((function(){return e.badInput=!1}),500);Object(r["k"])((function(){n.value&&(n.value.scrollTop=n.value.scrollHeight)}))},s=function(t){ne(t)&&e.input.addLetter(t)},i=function(t){return te(t,e.settings.language)},u=function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(e.settings.language);case 2:n=t.sent,console.log("".concat(n.length," words loaded for language '").concat(e.settings.language,"'")),e.dictionary=new Set(n),e.wordToGuess=re(n),e.attemps=[],e.input=new le;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r["B"])((function(){return e.settings.language}),(function(e){localStorage.setItem("userSettings.language",e),u()})),Object(r["B"])((function(){return e.settings.keyboardLayout}),(function(e){localStorage.setItem("userSettings.keyboardLayout",e)})),Object(D["a"])(Object(D["a"])({},Object(r["y"])(e)),{},{wordListElement:n,keyboard:t,removeLastLetter:o,submitWord:c,inputLetter:s,i18n:i})}});const de=c()(be,[["render",J]]);var fe=de,ge=Object(r["g"])({name:"Home",components:{HelloWorld:fe}});const pe=c()(ge,[["render",b]]);var Oe=pe,je=[{path:"/",name:"Home",component:Oe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ye=Object(l["a"])({history:Object(l["b"])(),routes:je}),he=ye;n("4ee2"),n("aede");Object(r["c"])(u).use(he).mount("#app")}});
//# sourceMappingURL=app.b05650c8.js.map