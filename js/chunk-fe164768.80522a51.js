(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe164768"],{"057f":function(t,e,s){var i=s("fc6a"),a=s("241c").f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==n.call(t)?c(t):a(i(t))}},1276:function(t,e,s){"use strict";var i=s("d784"),a=s("44e7"),n=s("825a"),r=s("1d80"),c=s("4840"),l=s("8aa5"),o=s("50c4"),u=s("14c3"),f=s("9263"),d=s("d039"),p=[].push,v=Math.min,g=4294967295,m=!d((function(){return!RegExp(g,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(r(this)),n=void 0===s?g:s>>>0;if(0===n)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,n);var c,l,o,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,d+"g");while(c=f.call(m,i)){if(l=m.lastIndex,l>v&&(u.push(i.slice(v,c.index)),c.length>1&&c.index<i.length&&p.apply(u,c.slice(1)),o=c[0].length,v=l,u.length>=n))break;m.lastIndex===c.index&&m.lastIndex++}return v===i.length?!o&&m.test("")||u.push(""):u.push(i.slice(v)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a,s):i.call(String(a),e,s)},function(t,a){var r=s(i,t,this,a,i!==e);if(r.done)return r.value;var f=n(t),d=String(this),p=c(f,RegExp),h=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),x=new p(m?f:"^(?:"+f.source+")",b),C=void 0===a?g:a>>>0;if(0===C)return[];if(0===d.length)return null===u(x,d)?[d]:[];var y=0,_=0,S=[];while(_<d.length){x.lastIndex=m?_:0;var E,k=u(x,m?d:d.slice(_));if(null===k||(E=v(o(x.lastIndex+(m?0:_)),d.length))===y)_=l(d,_,h);else{if(S.push(d.slice(y,_)),S.length===C)return S;for(var w=1;w<=k.length-1;w++)if(S.push(k[w]),S.length===C)return S;_=y=E}}return S.push(d.slice(y)),S}]}),!m)},"14c3":function(t,e,s){var i=s("c6b6"),a=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var n=s.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),n=s("17c2"),r=s("9112");for(var c in a){var l=i[c],o=l&&l.prototype;if(o&&o.forEach!==n)try{r(o,"forEach",n)}catch(u){o.forEach=n}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),n=s("ae40"),r=a("forEach"),c=n("forEach");t.exports=r&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,s){"use strict";var i=s("6eeb"),a=s("825a"),n=s("d039"),r=s("ad6d"),c="toString",l=RegExp.prototype,o=l[c],u=n((function(){return"/a/b"!=o.call({source:"a",flags:"b"})})),f=o.name!=c;(u||f)&&i(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),s=t.flags,i=String(void 0===s&&t instanceof RegExp&&!("flags"in l)?r.call(t):s);return"/"+e+"/"+i}),{unsafe:!0})},"2e7e":function(t,e,s){},3300:function(t,e,s){"use strict";var i=s("ac8f"),a=s.n(i);a.a},4160:function(t,e,s){"use strict";var i=s("23e7"),a=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"44e7":function(t,e,s){var i=s("861d"),a=s("c6b6"),n=s("b622"),r=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,s){var i=s("83ab"),a=s("da84"),n=s("94ca"),r=s("7156"),c=s("9bf2").f,l=s("241c").f,o=s("44e7"),u=s("ad6d"),f=s("9f7f"),d=s("6eeb"),p=s("d039"),v=s("69f3").set,g=s("2626"),m=s("b622"),h=m("match"),b=a.RegExp,x=b.prototype,C=/a/g,y=/a/g,_=new b(C)!==C,S=f.UNSUPPORTED_Y,E=i&&n("RegExp",!_||S||p((function(){return y[h]=!1,b(C)!=C||b(y)==y||"/a/i"!=b(C,"i")})));if(E){var k=function(t,e){var s,i=this instanceof k,a=o(t),n=void 0===e;if(!i&&a&&t.constructor===k&&n)return t;_?a&&!n&&(t=t.source):t instanceof k&&(n&&(e=u.call(t)),t=t.source),S&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,"")));var c=r(_?new b(t,e):b(t,e),i?this:x,k);return S&&s&&v(c,{sticky:s}),c},w=function(t){t in k||c(k,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},O=l(b),R=0;while(O.length>R)w(O[R++]);x.constructor=k,k.prototype=x,d(a,"RegExp",k)}g("RegExp")},"4de4":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").filter,n=s("1dde"),r=s("ae40"),c=n("filter"),l=r("filter");i({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,s){"use strict";var i=s("d784"),a=s("825a"),n=s("7b0b"),r=s("50c4"),c=s("a691"),l=s("1d80"),o=s("8aa5"),u=s("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,s,i){var h=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(s,i){var a=l(this),n=void 0==s?void 0:s[t];return void 0!==n?n.call(s,a,i):e.call(String(a),s,i)},function(t,i){if(!h&&b||"string"===typeof i&&-1===i.indexOf(x)){var n=s(e,t,this,i);if(n.done)return n.value}var l=a(t),p=String(this),v="function"===typeof i;v||(i=String(i));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}var _=[];while(1){var S=u(l,p);if(null===S)break;if(_.push(S),!g)break;var E=String(S[0]);""===E&&(l.lastIndex=o(p,r(l.lastIndex),y))}for(var k="",w=0,O=0;O<_.length;O++){S=_[O];for(var R=String(S[0]),j=f(d(c(S.index),p.length),0),P=[],A=1;A<S.length;A++)P.push(m(S[A]));var L=S.groups;if(v){var T=[R].concat(P,j,p);void 0!==L&&T.push(L);var I=String(i.apply(void 0,T))}else I=C(R,p,j,P,L,i);j>=w&&(k+=p.slice(w,j)+I,w=j+R.length)}return k+p.slice(w)}];function C(t,s,i,a,r,c){var l=i+t.length,o=a.length,u=g;return void 0!==r&&(r=n(r),u=v),e.call(c,u,(function(e,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,i);case"'":return s.slice(l);case"<":c=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>o){var f=p(u/10);return 0===f?e:f<=o?void 0===a[f-1]?n.charAt(1):a[f-1]+n.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},6547:function(t,e,s){var i=s("a691"),a=s("1d80"),n=function(t){return function(e,s){var n,r,c=String(a(e)),l=i(s),o=c.length;return l<0||l>=o?t?"":void 0:(n=c.charCodeAt(l),n<55296||n>56319||l+1===o||(r=c.charCodeAt(l+1))<56320||r>57343?t?c.charAt(l):n:t?c.slice(l,l+2):r-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},7156:function(t,e,s){var i=s("861d"),a=s("d2bb");t.exports=function(t,e,s){var n,r;return a&&"function"==typeof(n=e.constructor)&&n!==s&&i(r=n.prototype)&&r!==s.prototype&&a(t,r),t}},"746f":function(t,e,s){var i=s("428f"),a=s("5135"),n=s("e538"),r=s("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||r(e,t,{value:n.f(t)})}},"7f8c":function(t,e,s){},"7f96":function(t,e,s){t.exports=s.p+"img/vue_devicon.65662bf7.svg"},8418:function(t,e,s){"use strict";var i=s("c04e"),a=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var r=i(e);r in t?a.f(t,r,n(0,s)):t[r]=s}},"8aa5":function(t,e,s){"use strict";var i=s("6547").charAt;t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},9263:function(t,e,s){"use strict";var i=s("ad6d"),a=s("9f7f"),n=RegExp.prototype.exec,r=String.prototype.replace,c=n,l=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||o;f&&(c=function(t){var e,s,a,c,f=this,d=o&&f.sticky,p=i.call(f),v=f.source,g=0,m=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,g++),s=new RegExp("^(?:"+v+")",p)),u&&(s=new RegExp("^"+v+"$(?!\\s)",p)),l&&(e=f.lastIndex),a=n.call(d?s:f,m),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&r.call(a[0],s,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9eff":function(t,e,s){},"9f7f":function(t,e,s){"use strict";var i=s("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,s){"use strict";var i=s("23e7"),a=s("da84"),n=s("d066"),r=s("c430"),c=s("83ab"),l=s("4930"),o=s("fdbf"),u=s("d039"),f=s("5135"),d=s("e8b5"),p=s("861d"),v=s("825a"),g=s("7b0b"),m=s("fc6a"),h=s("c04e"),b=s("5c6c"),x=s("7c73"),C=s("df75"),y=s("241c"),_=s("057f"),S=s("7418"),E=s("06cf"),k=s("9bf2"),w=s("d1e7"),O=s("9112"),R=s("6eeb"),j=s("5692"),P=s("f772"),A=s("d012"),L=s("90e3"),T=s("b622"),I=s("e538"),$=s("746f"),M=s("d44e"),D=s("69f3"),N=s("b727").forEach,U=P("hidden"),G="Symbol",F="prototype",V=T("toPrimitive"),B=D.set,H=D.getterFor(G),J=Object[F],K=a.Symbol,Y=n("JSON","stringify"),q=E.f,W=k.f,X=_.f,z=w.f,Q=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),st=j("wks"),it=a.QObject,at=!it||!it[F]||!it[F].findChild,nt=c&&u((function(){return 7!=x(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,s){var i=q(J,e);i&&delete J[e],W(t,e,s),i&&t!==J&&W(J,e,i)}:W,rt=function(t,e){var s=Q[t]=x(K[F]);return B(s,{type:G,tag:t,description:e}),c||(s.description=e),s},ct=o?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},lt=function(t,e,s){t===J&&lt(Z,e,s),v(t);var i=h(e,!0);return v(s),f(Q,i)?(s.enumerable?(f(t,U)&&t[U][i]&&(t[U][i]=!1),s=x(s,{enumerable:b(0,!1)})):(f(t,U)||W(t,U,b(1,{})),t[U][i]=!0),nt(t,i,s)):W(t,i,s)},ot=function(t,e){v(t);var s=m(e),i=C(s).concat(vt(s));return N(i,(function(e){c&&!ft.call(s,e)||lt(t,e,s[e])})),t},ut=function(t,e){return void 0===e?x(t):ot(x(t),e)},ft=function(t){var e=h(t,!0),s=z.call(this,e);return!(this===J&&f(Q,e)&&!f(Z,e))&&(!(s||!f(this,e)||!f(Q,e)||f(this,U)&&this[U][e])||s)},dt=function(t,e){var s=m(t),i=h(e,!0);if(s!==J||!f(Q,i)||f(Z,i)){var a=q(s,i);return!a||!f(Q,i)||f(s,U)&&s[U][i]||(a.enumerable=!0),a}},pt=function(t){var e=X(m(t)),s=[];return N(e,(function(t){f(Q,t)||f(A,t)||s.push(t)})),s},vt=function(t){var e=t===J,s=X(e?Z:m(t)),i=[];return N(s,(function(t){!f(Q,t)||e&&!f(J,t)||i.push(Q[t])})),i};if(l||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),s=function(t){this===J&&s.call(Z,t),f(this,U)&&f(this[U],e)&&(this[U][e]=!1),nt(this,e,b(1,t))};return c&&at&&nt(J,e,{configurable:!0,set:s}),rt(e,t)},R(K[F],"toString",(function(){return H(this).tag})),R(K,"withoutSetter",(function(t){return rt(L(t),t)})),w.f=ft,k.f=lt,E.f=dt,y.f=_.f=pt,S.f=vt,I.f=function(t){return rt(T(t),t)},c&&(W(K[F],"description",{configurable:!0,get:function(){return H(this).description}}),r||R(J,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:K}),N(C(st),(function(t){$(t)})),i({target:G,stat:!0,forced:!l},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var s=K(e);return tt[e]=s,et[s]=e,s},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!c},{create:ut,defineProperty:lt,defineProperties:ot,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),i({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),Y){var gt=!l||u((function(){var t=K();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,s){var i,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(i=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),a[1]=e,Y.apply(null,a)}})}K[F][V]||O(K[F],V,K[F].valueOf),M(K,G),A[U]=!0},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},aa21:function(t,e,s){"use strict";var i=s("7f8c"),a=s.n(i);a.a},ab9c:function(t,e,s){"use strict";var i=s("2e7e"),a=s.n(i);a.a},ac1f:function(t,e,s){"use strict";var i=s("23e7"),a=s("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ac8f:function(t,e,s){},ad6d:function(t,e,s){"use strict";var i=s("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,s){var i=s("23e7"),a=s("7b0b"),n=s("df75"),r=s("d039"),c=r((function(){n(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(t){return n(a(t))}})},c975:function(t,e,s){"use strict";var i=s("23e7"),a=s("4d64").indexOf,n=s("a640"),r=s("ae40"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,o=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:l||!o||!u},{indexOf:function(t){return l?c.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d701:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.getResumeLoaded?s("div",{staticClass:"main-wrapper"},[s("StartNav"),s("div",{staticClass:"container-fluid p-0"},[s("StartAbout",{attrs:{name:t.getResume.name,surname:t.getResume.surname,email:t.getResume.email,aboutMe:t.getResume.aboutMe,address:t.getResume.address}}),s("StartExperience",{attrs:{experiences:t.getResume.experiences}}),s("StartEducation",{attrs:{educations:t.getResume.educations}}),s("StartSkills",{attrs:{skills:t.getResume.skills}}),s("StartAwards",{attrs:{awards:t.getResume.spokenLanguages}}),s("StartInterests",{attrs:{interests:t.getResume.interests}})],1)],1):t._e()},a=[],n=(s("4160"),s("ac1f"),s("1276"),s("159b"),s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("ade3"));function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#about"}},[s("span",{staticClass:"d-block d-lg-none"},[t._v("Carlos Soriano - Resume")]),s("span",{staticClass:"d-none d-lg-block",attrs:{id:"pic"},on:{mouseenter:t.cyclePics,mouseleave:t.revertPic}},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:t.pic,alt:"profile pic"}})])]),t._m(0),t._m(1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[t._v("Experience")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#education"}},[t._v("Education")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#skills"}},[t._v("Skills")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#awards"}},[t._v("Spoken Languages")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#interests"}},[t._v("Interests")])])])])}],u={name:"StartNav",data:function(){return{pic:s("e778")}},methods:{revertPic:function(){},cyclePics:function(){}}},f=u,d=(s("ab9c"),s("2877")),p=Object(d["a"])(f,l,o,!1,null,"7ad5b291",null),v=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[s("div",{staticClass:"my-auto"},[s("h1",{staticClass:"mb-0"},[t._v(t._s(t.name)+" "),s("span",{staticClass:"text-primary"},[t._v(t._s(t.surname))])]),s("div",{staticClass:"subheading mb-5"},[t._v(t._s(t.address)+" "),s("span",{staticClass:"ml-1"},[t._v("Ω")]),s("span",{staticClass:"mx-2",staticStyle:{color:"#343a40"}},[t._v("•")]),s("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),s("p",{staticClass:"mb-5"},[t._v(t._s(t.aboutMe1))]),s("p",{staticClass:"mb-5"},[t._v(t._s(t.aboutMe2))]),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-inline list-social-icons mb-0"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://www.instagram.com/shortpoet/"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"fa fa-circle fa-stack-2x"}),s("i",{staticClass:"fa fa-instagram fa-stack-1x fa-inverse"})])])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://twitter.com/shortpoet3"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"fa fa-circle fa-stack-2x"}),s("i",{staticClass:"fa fa-twitter fa-stack-1x fa-inverse"})])])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://www.linkedin.com/in/carlos-soriano-49aaa97/"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"fa fa-circle fa-stack-2x"}),s("i",{staticClass:"fa fa-linkedin fa-stack-1x fa-inverse"})])])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://github.com/shortpoet"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"fa fa-circle fa-stack-2x"}),s("i",{staticClass:"fa fa-github fa-stack-1x fa-inverse"})])])])])}],h=(s("c975"),s("fb6a"),{name:"StartAbout",props:{name:{type:String},surname:{type:String},email:{type:String},aboutMe:{type:String},address:{type:String}},computed:{aboutMe1:function(){return this.aboutMe.slice(0,this.aboutMe.indexOf("The call"))},aboutMe2:function(){return this.aboutMe.slice(this.aboutMe.indexOf("The call"))}}}),b=h,x=Object(d["a"])(b,g,m,!1,null,"bbe7f3b8",null),C=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"experience"}},[s("div",{staticClass:"my-auto"},[s("h2",{staticClass:"mb-5"},[t._v("Experience")]),t._l(t.experiences,(function(e){return s("div",{key:e.type,staticClass:"resume-item d-flex flex-column mb-5"},[s("h2",{staticClass:"mb-3"},[t._v(t._s(e.type))]),t._l(e.jobs,(function(e){return s("div",{key:e.description,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[s("div",{staticClass:"resume-content mr-auto"},[s("h3",{staticClass:"mb-0"},[t._v(t._s(e.position))]),s("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.company))]),s("p",[t._v(t._s(e.description))])]),s("div",{staticClass:"resume-date text-md-right"},[s("span",{staticClass:"text-primary"},[t._v(t._s(e.startDate)+" - "+t._s(e.endDate))])])])}))],2)}))],2)])},_=[],S={name:"StartExperience",props:{experiences:{type:Array}}},E=S,k=Object(d["a"])(E,y,_,!1,null,"32f2df5c",null),w=k.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"education"}},[s("div",{staticClass:"my-auto"},[s("h2",{staticClass:"mb-5"},[t._v("Education")]),t._l(t.educations,(function(e,i){return s("div",{key:i,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[s("div",{staticClass:"resume-content mr-auto"},[s("h3",{staticClass:"mb-0"},[t._v(t._s(e.institution))]),s("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.degree))]),s("div",[t._v(t._s(e.details))])]),s("div",{staticClass:"resume-date text-md-right"},[s("span",{staticClass:"text-primary"},[t._v(t._s(e.focus))])])])}))],2)])},R=[],j={name:"StartEducation",props:{educations:{type:Array,default:function(){return[]}}}},P=j,A=Object(d["a"])(P,O,R,!1,null,"53aeb4d7",null),L=A.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"skills"}},[s("div",{staticClass:"my-auto"},[s("h2",{staticClass:"mb-5"},[t._v("Skills")]),s("div",{staticClass:"subheading mb-3"},[t._v(" Programming Languages & Tools ")]),t._m(0),s("div",{staticClass:"subheading mb-3"},[t._v(" Workflow ")]),t._m(1),t._l(t.skills,(function(e,i){return s("div",{key:i,staticClass:"skill-grid"},[s("div",{staticClass:"subheading mb-3"},[t._v(" "+t._s(e.type)+" ")]),s("ul",{staticClass:"fa-ul mb-3 skill-list"},t._l(t.listSkills(e.details),(function(e,i){return s("li",{key:i},[s("span",{staticClass:"skill"},[s("i",{staticClass:"fa fa-check"}),t._v(" "+t._s(e)+" ")])])})),0)])}))],2)])},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list-inline list-icons"},[i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-html5"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-css3"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-bootstrap"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-sass"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-javascript"})]),i("li",{staticClass:"list-inline-item"},[i("img",{staticClass:"vue-devicon",attrs:{src:s("7f96")}})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-git"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-linux"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-database"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-msql_server"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-dotnet"})]),i("li",{staticClass:"list-inline-item"},[i("i",{staticClass:"devicons devicons-visualstudio"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"fa-ul mb-3 skill-list"},[s("li",[s("i",{staticClass:"fa fa-check"}),t._v(" Mobile-First, Responsive Design")]),s("li",[s("i",{staticClass:"fa fa-check"}),t._v(" Cross Browser Testing & Debugging")]),s("li",[s("i",{staticClass:"fa fa-check"}),t._v(" CI/CD")]),s("li",[s("i",{staticClass:"fa fa-check"}),t._v(" Agile Development & Scrum")])])}],$={name:"StartSkills",props:{skills:{type:Array,default:function(){return[]}}},methods:{listSkills:function(t){return t.split(",")}},mounted:function(){}},M=$,D=(s("f285"),Object(d["a"])(M,T,I,!1,null,"affd5368",null)),N=D.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"interests"}},[s("div",{staticClass:"my-auto"},[s("h2",{staticClass:"mb-5"},[t._v("Interests")]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.interests))])])])},G=[],F={name:"StartInterests",props:{interests:{type:String}}},V=F,B=(s("3300"),Object(d["a"])(V,U,G,!1,null,"525f408d",null)),H=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"awards"}},[s("div",{staticClass:"my-auto"},[s("h2",{staticClass:"mb-5"},[t._v("Spoken Languages & Certifications")]),s("ul",{staticClass:"fa-ul mb-0"},[t._l(t.awards,(function(e,i){return s("li",{key:i},[s("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" "+t._s(t.recase(e.type))+": "+t._s(e.languages)+" ")])})),t._m(0)],2)])])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v(" Certified Interpreter")])}],Y=(s("4d63"),s("25f0"),s("5319"),function(t){var e=new RegExp(/([A-Z][a-z])/g),s=" $1",i=t.replace(e,s).replace(new RegExp(/^./),(function(t){return t.toUpperCase()}));return i}),q=Y,W={name:"StartAwards",props:{awards:{type:Array,default:function(){return[]}}},methods:{recase:function(t){return q(t)}}},X=W,z=Object(d["a"])(X,J,K,!1,null,"a29119f0",null),Q=z.exports,Z=s("2f62"),tt={name:"Start",components:{StartNav:v,StartAbout:C,StartExperience:w,StartEducation:L,StartSkills:N,StartInterests:H,StartAwards:Q},data:function(){return{}},computed:c({},Object(Z["c"])("resume",["getResume","getResumeLoaded"]),{resume:function(){return this.getResume.skills.forEach((function(t){console.log(t),t.details=t.details.split(","),console.log(t)}))}}),methods:c({},Object(Z["b"])("resume",["loadResume"])),mounted:function(){var t=this;this.$nextTick((function(){t.loadResume()}))}},et=tt,st=(s("aa21"),Object(d["a"])(et,i,a,!1,null,null,null));e["default"]=st.exports},d784:function(t,e,s){"use strict";s("ac1f");var i=s("6eeb"),a=s("d039"),n=s("b622"),r=s("9263"),c=s("9112"),l=n("species"),o=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=n("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,f){var v=n(t),g=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),m=g&&!a((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[l]=function(){return s},s.flags="",s[v]=/./[v]),s.exec=function(){return e=!0,null},s[v](""),!e}));if(!g||!m||"replace"===t&&(!o||!u||d)||"split"===t&&!p){var h=/./[v],b=s(v,""[t],(function(t,e,s,i,a){return e.exec===r?g&&!a?{done:!0,value:h.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=b[0],C=b[1];i(String.prototype,t,x),i(RegExp.prototype,v,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},dbb4:function(t,e,s){var i=s("23e7"),a=s("83ab"),n=s("56ef"),r=s("fc6a"),c=s("06cf"),l=s("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=r(t),a=c.f,o=n(i),u={},f=0;while(o.length>f)s=a(i,e=o[f++]),void 0!==s&&l(u,e,s);return u}})},e439:function(t,e,s){var i=s("23e7"),a=s("d039"),n=s("fc6a"),r=s("06cf").f,c=s("83ab"),l=a((function(){r(1)})),o=!c||l;i({target:"Object",stat:!0,forced:o,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(n(t),e)}})},e538:function(t,e,s){var i=s("b622");e.f=i},e778:function(t,e,s){t.exports=s.p+"img/profile_pic.71466a82.jpg"},f285:function(t,e,s){"use strict";var i=s("9eff"),a=s.n(i);a.a},fb6a:function(t,e,s){"use strict";var i=s("23e7"),a=s("861d"),n=s("e8b5"),r=s("23cb"),c=s("50c4"),l=s("fc6a"),o=s("8418"),u=s("b622"),f=s("1dde"),d=s("ae40"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),m=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var s,i,u,f=l(this),d=c(f.length),p=r(t,d),v=r(void 0===e?d:e,d);if(n(f)&&(s=f.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?a(s)&&(s=s[g],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return m.call(f,p,v);for(i=new(void 0===s?Array:s)(h(v-p,0)),u=0;p<v;p++,u++)p in f&&o(i,u,f[p]);return i.length=u,i}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-fe164768.80522a51.js.map