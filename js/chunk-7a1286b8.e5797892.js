(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a1286b8"],{1462:function(t,s,a){"use strict";var e=a("cd41"),i=a.n(e);i.a},"1d76":function(t,s,a){"use strict";var e=a("6ee3"),i=a.n(e);i.a},"1dbc":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex d-column",attrs:{id:"about"}},[a("div",{staticClass:"my-auto"},[a("h1",{staticClass:"heading heading-1 mb-0"},[t._v(t._s(t.name)+" "),a("span",{staticClass:"text-primary"},[t._v(t._s(t.surname))])]),a("div",{staticClass:"ml-2 d-inline-flex flex-column subheading"},[a("div",{staticClass:"d-inline-flex flex-column"},[a("span",{staticClass:"not-name",attrs:{id:"start-flags"}},[t._v(t._s(t.flags.replace(/,/g,"")))]),a("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))]),a("span",{attrs:{id:"start-address"}},[t._v(t._s(t.address))])]),a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"not-name",attrs:{id:"start-visas"}},[t._v("Valid Work Visas: "+t._s(t.visas))])])])])])},i=[],n={name:"StartAbout",components:{},props:{name:{type:String},surname:{type:String},email:{type:String},address:{type:String},visas:{type:String},flags:{type:String}},data:function(){return{}},computed:{}},r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},"2df1":function(t,s,a){var e=a("3e5a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("64983052",e,!0,{sourceMap:!1,shadowMode:!1})},"3a89":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex flex-column",attrs:{id:"education"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"heading heading-2 mb-4"},[t._v("Education")]),t._l(t.educations,(function(s,e){return a("div",{key:e,staticClass:"resume-item d-flex flex-column flex-md-row mb-4"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"heading heading-3 mb-0"},[t._v(t._s(s.institution))]),a("div",{staticClass:"start-degree subheading mb-3"},[t._v(t._s(s.degree))]),a("div",{staticClass:"start-education-details"},[t._v(t._s(s.details))])]),a("div",{staticClass:"resume-date text-md-right mt-1"},[a("span",{staticClass:"text-primary"},[t._v(t._s(s.focus))])])])}))],2)])},i=[],n={name:"StartEducation",props:{educations:{type:Array}}},r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},"3c74":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section pl-3 pl-lg-5 py-1 mt-3 d-flex d-column",attrs:{id:"start-socials"}},[a("div",{staticClass:"my-auto"},[a("ul",{staticClass:"list-inline list-social-icons mb-0 mt-0"},t._l(t.socialsComputed,(function(t,s){return a("li",{key:s,staticClass:"social-item list-inline-item ",style:{fontFamily:"FontAwesome"}},[a("a",{attrs:{href:t.url}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),a("i",{class:t.icon+" fa-stack-1x fa-inverse"})])])])})),0)])])},i=[],n=(a("4de4"),a("4160"),a("caad"),a("d81d"),a("2532"),a("159b"),{name:"StartSocials",components:{},props:{socials:{type:Array}},data:function(){return{socialsData:[{social:"github",icon:"fa fa-github",transform:"shrink-5"},{social:"linkedin",icon:"fa fa-linkedin",transform:"shrink-6 right-1"},{social:"instagram",icon:"fa fa-instagram",transform:"shrink-5 right-1"},{social:"twitter",icon:"fa fa-twitter",transform:"shrink-6"},{social:"website",icon:"fa fa-home",url:"/"}]}},computed:{availableSocials:function(){var t=this.socials.map((function(t){return t.provider}));return this.socialsData.filter((function(s){return t.includes(s.social)}))},socialsComputed:function(){var t=this;return this.availableSocials.map((function(s){return void 0===s.url&&t.socials.forEach((function(t){t.provider===s.social&&(s.url=t.url)})),s}))}}}),r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},"3e5a":function(t,s,a){var e=a("24fb");s=e(!1),s.push([t.i,"",""]),t.exports=s},"4f0b":function(t,s,a){var e=a("24fb");s=e(!1),s.push([t.i,"#interests[data-v-32bca53a]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""]),t.exports=s},"50c9":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("portal",{attrs:{to:t.target}},[a("div",{class:t.rippleContainer},[a("div",{class:t.rippleMask},[a("div",{staticClass:"ripple-content"},[t._t("ripple-content",[t._v(" Check out the other layout by clicking the pdf icon. ")])],2)]),a("div",{class:t.iconHalo},[a("div",{staticClass:"icon-circle"},[t.isExpanded?a("a",{attrs:{href:"/pdf"}},[a("font-awesome-icon",{ref:"float-icon-pdf",staticClass:"button-float-icon",attrs:{size:"2x",transform:t.iconMap["pdf"].transform,icon:t.iconMap["pdf"].icon}})],1):a("font-awesome-icon",{ref:"float-icon-rocket",staticClass:"button-float-icon",attrs:{size:"2x",transform:t.iconMap["rocket"].transform,icon:t.iconMap["rocket"].icon},on:{click:t.open}})],1)])])])},i=[],n=(a("d81d"),{name:"StartButtonFloat",components:{},props:{target:{type:String},href:{type:String,required:!1},isExpanded:{type:Boolean,default:!1}},data:function(){return{iconMap:{pdf:{icon:"file-pdf",transform:""},save:{icon:"save",transform:"shrink-5 right-1"},rocket:{icon:"rocket",transform:"down-1 left-1"}},events:["click","touchstart","touchcancel","touchmove","touchend"]}},computed:{mobile:function(){return window.innerWidth<768},rippleContainer:function(){return{"ripple-container":!0,mobile:this.mobile}},iconHalo:function(){return this.isExpanded?"icon-halo icon-halo-show":"icon-halo icon-halo-hide"},rippleMask:function(){return this.isExpanded?"ripple-mask ripple-mask-show":"ripple-mask ripple-mask-hide"}},methods:{open:function(){this.$emit("ripple-open")},close:function(){this.$emit("ripple-close")},handleClickOutside:function(t){"path"!==t.target.tagName&&this.$emit("ripple-close")},addEvents:function(){var t=this;setTimeout((function(){t.events.map((function(s){document.addEventListener(s,t.handleClickOutside)}))}),1e3)},removeEvents:function(){var t=this;this.events.map((function(s){return document.removeEventListener(s,t.handleClickOutside)}))}},mounted:function(){this.addEvents()},destroyed:function(){this.removeEvents()}}),r=n,l=(a("6e4d"),a("2877")),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},"66c5":function(t,s,a){var e=a("24fb");s=e(!1),s.push([t.i,".vue-devicon[data-v-7735497c]{height:3rem;width:3rem;line-height:1;padding:.25rem;margin-bottom:.8rem;color:red}.vue-devicon[data-v-7735497c]:hover{color:red}.skill-list li[data-v-7735497c]{display:inline-block;margin:0 .5rem 0 0}",""]),t.exports=s},"6e4d":function(t,s,a){"use strict";var e=a("2df1"),i=a.n(e);i.a},"6ee3":function(t,s,a){var e=a("4f0b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("4b5bc29c",e,!0,{sourceMap:!1,shadowMode:!1})},"746a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section pl-3 px-lg-5 mt-5 mb-4 mb-md-3 d-flex flex-column",attrs:{id:"skills"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"heading heading-2 mb-4 mb-md-3"},[t._v("Skills")]),a("div",{staticClass:"subheading mb-3"},[t._v(" Programming Languages & Tools ")]),a("ul",{staticClass:"list-devicons list-inline list-icons"},t._l(t.icons,(function(t,s){return a("li",{key:s,staticClass:"list-inline-item"},[a("StartDevIcon",{attrs:{source:t.icon,name:t.name}})],1)})),0),t._l(t.skills,(function(s,e){return a("div",{key:e,staticClass:"skill-grid"},[a("div",{staticClass:"subheading mb-3"},[t._v(" "+t._s(s.type)+" ")]),a("ul",{staticClass:"fa-ul mb-3 skill-list"},t._l(t.listSkills(s.details),(function(s,e){return a("li",{key:e},[a("span",{staticClass:"skill"},[a("i",{staticClass:"skill-icon fa fa-check"}),t._v(" "+t._s(s)+" ")])])})),0)])}))],2)])},i=[],n=(a("ac1f"),a("1276"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{},[t.isImage?a("img",{class:t.imgClass,attrs:{src:t.source}}):a("i",{class:t.source}),t.showName?a("span",{class:t.devicon-t.name},[t._v(t._s(t.name))]):t._e()])}),r=[],l=(a("b0c0"),a("466d"),{name:"StartDevIcon",props:{source:{type:String},name:{type:String,default:null},showName:{type:Boolean,default:!1}},components:{},data:function(){return{}},computed:{isImage:function(){return null!==this.source.match(/svg|jpg|png|jpeg/g)},imgClass:function(){var t="";switch(this.name){case"vue":t="vue-devicon";break;case"tableau":t="tableau-devicon";break;case"d3":t="d3-devicon";break}return t}},methods:{},mounted:function(){}}),c=l,o=a("2877"),u=Object(o["a"])(c,n,r,!1,null,null,null),d=u.exports,p=a("bb22"),m={name:"StartSkills",props:{skills:{type:Array}},components:{StartDevIcon:d},data:function(){return{icons:p["a"].icons}},methods:{listSkills:function(t){return t.split(",")}},mounted:function(){}},f=m,v=(a("1462"),Object(o["a"])(f,e,i,!1,null,"7735497c",null));s["a"]=v.exports},"763e":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex flex-column",attrs:{id:"awards"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"heading heading-2 mb-4 mb-md-3"},[t._v("Natural Languages")]),a("ul",{staticClass:"fa-ul mb-0"},[t._l(t.spokenLanguages,(function(s,e){return a("li",{key:e},[a("i",{class:s.type+" language-icon fa fa-flag fa-li"}),a("span",{staticClass:"mb-5"},[t._v(t._s(s.languages+" ("+t.recase(s.type)+")")+" ")])])})),t._m(0)],2)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("i",{staticClass:"award-icon fa fa-trophy fa-li"}),t._v(" Certified Interpreter ")])}],n=a("e2ff"),r={name:"StartAwards",props:{spokenLanguages:{type:Array}},methods:{recase:function(t){return Object(n["a"])(t)}}},l=r,c=a("2877"),o=Object(c["a"])(l,e,i,!1,null,"951324a6",null);s["a"]=o.exports},"9dbf":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex d-column mb-4 mb-md-3",attrs:{id:"start-objective"}},[a("div",{staticClass:"aboutme-container"},t._l(t.aboutMe.split("\\n\\r"),(function(s,e){return a("div",{key:e,staticClass:"aboutme-paragraph lead"},[s.match(/\<.+\/\>|\<\/.+\>/g)?a("p",{domProps:{innerHTML:t._s(s)}}):a("p",[t._v(" "+t._s(s)+" ")])])})),0)])},i=[],n={name:"StartObjective",components:{},props:{aboutMe:{type:String}},data:function(){return{}},computed:{}},r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},c7ee:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex flex-column",attrs:{id:"experience"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"heading heading-2 start-experience-header mb-4 mb-md-3"},[t._v("Experience")]),t._l(t.experiences,(function(s){return a("div",{key:s.type,staticClass:"resume-item d-flex flex-column mb-2"},[a("h2",{staticClass:"heading heading-2 start-experience-type mb-3"},[t._v(t._s(s.type))]),t._l(s.jobs,(function(s,e){return a("div",{key:e,staticClass:"resume-item d-flex flex-column flex-md-row mb-3"},[a("div",{staticClass:"resume-content mr-auto"},[a("h3",{staticClass:"heading heading-3 mb-0"},[t._v(t._s(s.position))]),a("div",{staticClass:"start-company subheading mb-3"},[t._v(t._s(s.company))]),t._l(s.description.split("\\n\\r"),(function(s,i){return a("div",{key:i},[a("p",{class:"job-"+(e+1)+"-description-"+(i+1),domProps:{innerHTML:t._s(s)}})])}))],2),a("div",{staticClass:"resume-date text-md-right mt-1"},[t.hasDate(s.startDate)?a("span",{staticClass:"text-primary"},[t._v(t._s(s.startDate)+" - "+t._s(s.endDate))]):t._e()])])}))],2)}))],2)])},i=[],n={name:"StartExperience",props:{experiences:{type:Array}},methods:{hasDate:function(t){return""!==t&&null!==t&&void 0!==t}}},r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},cd41:function(t,s,a){var e=a("66c5");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("499e").default;i("0492fd72",e,!0,{sourceMap:!1,shadowMode:!1})},e3e6:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 px-lg-5 d-flex flex-column",attrs:{id:"interests"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"heading heading-2 mb-4 mb-md-3"},[t._v("Interests")]),a("p",{staticClass:"mb-4"},[t._v(t._s(t.interests))])])])},i=[],n={name:"StartInterests",props:{interests:{type:String}},data:function(){return{pic:a("5f1e")}}},r=n,l=(a("1d76"),a("2877")),c=Object(l["a"])(r,e,i,!1,null,"32bca53a",null);s["a"]=c.exports},f87a:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"},on:{click:function(s){return t.collapse(s)}}},[a("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#about"}},[a("span",{staticClass:"d-block d-lg-none"},[t._v("Resume")]),a("span",{staticClass:"d-none d-lg-block",attrs:{id:"pic"}},[a("img",{staticClass:"img-fluid img-profile mx-auto mb-2",attrs:{src:t.pic,alt:"profile pic"}})])]),t._m(0),t._m(1)])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#skills"}},[t._v("Skills")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#awards"}},[t._v("Natural Languages")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[t._v("Experience")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#education"}},[t._v("Education")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#interests"}},[t._v("Interests")])])])])}],n={name:"StartNav",data:function(){return{pic:a("f8b4"),isCollapse:!1}},methods:{collapse:function(){console.log("collapse is called"),this.$(".navbar-collapse").collapse("hide"),this.isCollapse=!0},revertPic:function(){},cyclePics:function(){}}},r=n,l=a("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports}}]);
//# sourceMappingURL=chunk-7a1286b8.e5797892.js.map