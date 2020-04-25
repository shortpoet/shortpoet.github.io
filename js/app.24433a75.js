(function(e){function t(t){for(var n,o,s=t[0],d=t[1],l=t[2],c=0,p=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var d=a[o];0!==i[d]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"0b826148","chunk-4361358b":"9e324b66","chunk-03e81e71":"05accbfc","chunk-1788b753":"4d8e650e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;r=function(t){d.onerror=d.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1a5d":function(e,t,a){var n={"./About.vue":["f820","chunk-2d22d746"],"./PDF.vue":["e4a5","chunk-4361358b","chunk-03e81e71"],"./Start.vue":["d701","chunk-4361358b","chunk-1788b753"]};function i(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id="1a5d",e.exports=i},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=a("2877"),s={},d=Object(o["a"])(s,i,r,!1,null,null,null),l=d.exports,c=(a("d81d"),a("b0c0"),a("d3b7"),a("8c4f")),u=[{path:"/",view:"Start"},{path:"/about",view:"About"},{path:"/pdf",view:"PDF"}],p=u,m=function(e){return e.map((function(e){return{name:e.name||e.view,path:e.path,component:function(t){return a("1a5d")("./".concat(e.view,".vue")).then(t)}}}))},g=function(e,t,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})};n["default"].use(c["a"]);var h,f=new c["a"]({mode:"history",base:"/",routes:m(p),scrollBehavior:g}),y=f,b=a("2f62"),v=(a("4de4"),a("4160"),a("5377"),a("159b"),a("96cf"),a("1da1")),w=a("ade3"),k=a("bc3a"),S=a.n(k),D={aboutMe:'As a lifelong polyglot and software developer, I have come to describe myself as a Language Data Specialist. \\n\\r Through living, studying and working internationally, I developed keen and varied insight into human interaction, motivation, and the sheer nitty-gritty of life - witnessed everywhere from hospitals to courthouses and union halls in between. \\n\\r Over time, considering where spoken languages and behavior intersect with data got me interested in programming. The call to bridge the gap between my linguistic expertise and (long-dormant) digital dexterity came in the form of my brother’s coaching, freecodecamp, and finally formal training at Washington University St. Louis Data Analytics Boot Camp. \\n\\r Today, I apply my advanced tech skills to analyses that consider where the cultural and the computational collide. This, combined with my fluency for the most widely spoken languages, allows my clients a unique perspective on their field of choice. \\n\\r Showcasing the evolution of these skills in this - <em>work-in-progress</em> - resume site has been a learning process of its own. This site is hosted on <a href="https://shortpoet.azurewebsites.net">Azure</a> with a linked database to dynamically populate different resume formats. Please check out the <a href="/pdf">PDF-friendly</a> version. And coming soon, a guestbook that will fully illustrate the capabilities of a linked data source! 🤓',address:"Currently in St. Louis, MO",brief:"As a lifelong polyglot turned software developer, I have come to describe myself as a Language Data Specialist. A fascination with where human interaction, behaviour and spoken language meets the many layers of data and programming has driven me to provide insight from data sources as they reflect human behavior. \\n\\r In this sense, my route into programming was atypical. The call to bridge the gap between my linguistic expertise and (long-dormant) digital dexterity came in the form of my brother’s coaching, freecodecamp, and finally formal training at Washington University St. Louis Data Analytics Boot Camp. \\n\\r Today, my advanced tech skills combined with my fluency for the most widely spoken languages, allows my clients a unique perspective on their field of choice.",email:"soriano.carlitos@gmail.com",flags:"🇪🇸, 🇵🇭, 🇺🇸, 🇨🇳, 🇫🇷, 🇮🇹, 🇩🇪, 🇧🇷",interests:"When I'm not knuckle-deep in code, I like to knead bread, dig gardens, vermicompost and cook tasty meals.   I do some yoga and pilates to work on the code-bod.   I have been known to be insipired by the dramatic muses.  Ask for an accent sometime! Being a big fan of perspective, when I started going underwater at age 11, what once was a world of fear turned into a world of wonder.  When I can, SCUBA is pretty sweet stuff.  Speaking of perspective, here's some shortpoetry...\n",name:"CARLOS",surname:"SORIANO",title:"Carlos Resume 2020 04 23",visas:"USA, EU, UK",educations:[{id:1,institution:"Washington University in St. Louis",degree:"Data Analytics Certificate",focus:"Python, Javascript, Tableau",resumeEducations:[]},{id:2,institution:"University of Pennsylvania",degree:"Bachelor of Arts and Sciences",focus:"Major in East Asian Languages and Cultures, Chinese Concentration, relevant coursework in linguistics and anthropology",resumeEducations:[]},{id:3,institution:"Thacher School",degree:"High School",focus:"Boarding, emphasis on academics, the outdoors, camping, horsemanship, and environmental awareness, Year Abroad in France",resumeEducations:[]}],jobs:[{id:1,experienceType:"hospitality",position:"Grill Chef de Partie",company:"Many Different Restaurants - mostly a cook, sometimes a bartender",description:"Post Haus Restaurant - St. Moritz, Switzerland stands out as I ran the gamut from helping plan restaurant concept, designed Grill Station, assisted in menu planning and execution, provided back-end data for owners during the length of the contract, offering particular assistance interpreting for members of the multi-cultural staff and management.",startDate:"August 1998",endDate:"August 2018"},{id:2,experienceType:"hospitality",position:"Food delivery logistics",company:"DoorDash and Grubhub",description:"Operating 2 apps at the same time to maximize earnings, while maintaining customer satisfaction and high ratings, experienced first hand the effects of data collection of market and labor fluctuations and how they determined the logic behind the apps while I was learning to code.",startDate:"April 2017",endDate:"April 2019"},{id:3,experienceType:"sales",position:"Product Specialist - Sales",company:"Toyota of Hollywood & Hollywood Electrics – Electric Cycle Dealership",description:"New and Pre-owned Conventional and Electric Car and Cycle Sales; Sales made in English, Spanish, Tagalog, French, and Mandarin, Self-directed marketing efforts",startDate:"July 2010",endDate:"February 2017"},{id:4,experienceType:"language",position:"Sinologist",company:"World Eye Reports",description:"Shanghai, PRC. Translator, Interpreter, media Sales, wrote articles and sold ads for advertorial project based out of Shanghai.",startDate:"August 2003",endDate:"January 2004"},{id:5,experienceType:"language",position:"QA Tester",company:"GTL Media",description:"Translator, linguistic tester, translated texts for various media including video games, film, and legal, checked video games for linguistic bugs and translation errors, translation of .xml databases for in-game script",startDate:"December 2011",endDate:"August 2014"},{id:6,experienceType:"language",position:"Executive Assistant to the CEO",company:"EZI",description:"Manila, Philippines. Participated in managing daily operations in a bilingual office setting, supervised staff, attended developmental meetings, tracked and prepared development projects, made calls to and from suppliers and manufacturers, purchased investment property, created investment portfolios and marketing and business plans, gaining insights into the world of Big Business.",startDate:"January 2008",endDate:"December 2008"},{id:7,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Escoba Card Game App \\n\\r •  c#, vuejs \\n\\r •  Game manager handles game logic in dotnet backend server.  Game sessions and game state managed by backend.  UI state managed by vuex store. \\n\\r •  Future... Drag/Drop swipeable UI - Machine learning to create AI \\n\\r •  In collaboration with Ignacio Soriano\n",startDate:"October 2019",endDate:"ongoing"},{id:8,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Poet University \\n\\r •  c#, vuejs, IdentityServer \\n\\r •  An extension of Contoso University in microsoft docs.  Randomly generated data from lists and some basic logic I coded before learning about the faker library hehe. Has a working implementation of an IdentityServer auth provider.  Frontend client app uses IdentityServer as well as Auth0 to provide authentication for  authorization experiments on the protected routes of the University. \\n\\r •  Future... More variety with the faker library.  Better auth.  Cleaner UI. Complete the university environment.\n",startDate:"March 2020",endDate:"ongoing"},{id:9,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Web App and Social Integration Dashboard \\n\\r •  c#, node.js, vuejs, Auth0, Gapi, REST APIs \\n\\r •  Authentication to Google API (gmail, sheets, drive, etc), LinkedIn, Facebook and access to my account's data and programattic access to APIs. User jwt for authentication.  Use cases include mass unsubscribe, sending emails that are programatically created, integrating Linkedin searches with gmail messages for job search,   and many others.  Also a way to explore the intricacies of authentication through the use of Auth0 and Google as identity providers. \\n\\r •  Future... More integrations and built-in functionality.  Using headless browser to unsubscribe from senders that don't provide a 'mailto' but rather a url.\n",startDate:"March 2020",endDate:"ongoing"},{id:10,experienceType:"software",position:"Software Engineer",company:"Boeing",description:"• Built an application to assess the validity of employee timesheet entries.  Managers asked for functionality to parse different types of copy/pasted input of time data. A SQL databse function checked against translation tables maintained in collaboration with the business operations team.  Data output was displayed using d3 for data visualization to help understand labor costs. \\n\\r • Learned and fully implemented advanced features of the Vue framework for a variety of data analytics applications and reconstructing legacy Angular products to help transition an aging library of corporate applications. \\n\\r • Parts and labor tracking system to integrate the builds across teams ans systems.  Collaborated with deparatments across the company to pull and collate relevant data enabling wider-reaching analytics. \\n\\r • Centralized data vizualization dashboard with responsive layout and reusable data viz components.  Charts and tables that are dynamically populated to avoid repetitive hard-coding and save on future similar requests from customers. Wrapper for tableau api to better integrate server and dashboard functionality across apps.  Use of recursive components to display org structure drilldown.  \\n\\r • Ensured data integrity of daily loading from source systems mostly using c#/dotnet and sql scripts with some python and R developing new ETL architecture for reusable data analytics pipeline.  As new data sources come from increased collaboration, creating a workflow enabled efficient operations. \\n\\r • Team devops guy - deployment of products using Cloud Foundry, Gitlab CI/CD, bash and powershell scripting, and windows server virtual machine.  Things break and someone has to fix them. \\n\\r • Liaising with other teams/departments to collaborate in data flow and analytics.  Collaborated with a diverse and distributed team  working with a 12-hour time difference with India and delivered results tracking contributions through Gitlab and Jira in a remote-work environment. Being able to communicate changes and action items needed across teams allows for smoother workflow.\n",startDate:"April 2019",endDate:"April 2020"},{id:11,experienceType:"language",position:"Freelance Translator / Interpreter",company:"Various Interpretation Agencies",description:"Medical, dental and media conferences, on-site medical and legal interpretation for depositions, insurance and immigration interviews, simultaneous interpretation of contract negotiations, guided tours, consecutive and simultaneous interpretation for training meetings, document translation of many types, including legal, medical, media localization, and various other language-related assignments, primarily in Spanish and Tagalog, some French.",startDate:"July 2011",endDate:"Present"}],skills:[{id:1,type:"Markdown",details:"HTML, CSS, YAML, MD, SCSS",resumeSkills:[]},{id:2,type:"Miscellaneous",details:"Cooking, Gardening, YogaWorks Teacher Traning, Cicerone Beer Server Certification, Adobe Creative Suite",resumeSkills:[]},{id:3,type:"Data Vizualization",details:"D3, Tableau",resumeSkills:[]},{id:4,type:"Document Db",details:"mongoDB, Pymongo",resumeSkills:[]},{id:5,type:"Dotnet",details:"Framework 4.x, Core, Entity Framework, Razor, MVC",resumeSkills:[]},{id:6,type:"Python",details:"Pandas, Matplotlib, Flask, Selenium, Sklearn",resumeSkills:[]},{id:7,type:"Javascript",details:"Vue, Leafly, Plotly, c3",resumeSkills:[]},{id:8,type:"Workflow",details:"Mobile-First & Responsive Design, Cross Browser Testing & Debugging, CI/CD, Agile Development & Scrum, Visual Studio / VSCode",resumeSkills:[]},{id:9,type:"Relational Db",details:"msSQL, mySQL, Entity Framework, SQLAlchemy",resumeSkills:[]}],socials:[{id:1,provider:"github",url:"https://github.com/shortpoet",resumeSocials:[]},{id:2,provider:"linkedin",url:"https://www.linkedin.com/in/carlos-soriano-49aaa97/",resumeSocials:[]},{id:3,provider:"instagram",url:"https://www.instagram.com/shortpoet/",resumeSocials:[]},{id:4,provider:"twitter",url:"https://twitter.com/shortpoet3",resumeSocials:[]},{id:5,provider:"website",url:"https://www.shortpoet.com",resumeSocials:[]},{id:6,provider:"website hosted",url:"https://shortpoet.azurewebsites.net",resumeSocials:[]}],spokenLanguages:[{id:1,type:"proficient",languages:"Italian",translationInterpretationProfessional:!1,resumeSpokenLanguages:[]},{id:2,type:"native",languages:"English, Spanish, Tagalog",translationInterpretationProfessional:!0,resumeSpokenLanguages:[]},{id:3,type:"fluent",languages:"Mandarin Chinese, French",translationInterpretationProfessional:!1,resumeSpokenLanguages:[]},{id:4,type:"workingKnowledge",languages:"German, Portuguese",translationInterpretationProfessional:!1,resumeSpokenLanguages:[]}],experiences:[{type:"software",jobs:[{id:7,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Escoba Card Game App \\n\\r •  c#, vuejs \\n\\r •  Game manager handles game logic in dotnet backend server.  Game sessions and game state managed by backend.  UI state managed by vuex store. \\n\\r •  Future... Drag/Drop swipeable UI - Machine learning to create AI \\n\\r •  In collaboration with Ignacio Soriano\n",startDate:"October 2019",endDate:"ongoing"},{id:8,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Poet University \\n\\r •  c#, vuejs, IdentityServer \\n\\r •  An extension of Contoso University in microsoft docs.  Randomly generated data from lists and some basic logic I coded before learning about the faker library hehe. Has a working implementation of an IdentityServer auth provider.  Frontend client app uses IdentityServer as well as Auth0 to provide authentication for  authorization experiments on the protected routes of the University. \\n\\r •  Future... More variety with the faker library.  Better auth.  Cleaner UI. Complete the university environment.\n",startDate:"March 2020",endDate:"ongoing"},{id:9,experienceType:"software",position:"Developer",company:"Personal Project",description:"•  Web App and Social Integration Dashboard \\n\\r •  c#, node.js, vuejs, Auth0, Gapi, REST APIs \\n\\r •  Authentication to Google API (gmail, sheets, drive, etc), LinkedIn, Facebook and access to my account's data and programattic access to APIs. User jwt for authentication.  Use cases include mass unsubscribe, sending emails that are programatically created, integrating Linkedin searches with gmail messages for job search,   and many others.  Also a way to explore the intricacies of authentication through the use of Auth0 and Google as identity providers. \\n\\r •  Future... More integrations and built-in functionality.  Using headless browser to unsubscribe from senders that don't provide a 'mailto' but rather a url.\n",startDate:"March 2020",endDate:"ongoing"},{id:10,experienceType:"software",position:"Software Engineer",company:"Boeing",description:"• Built an application to assess the validity of employee timesheet entries.  Managers asked for functionality to parse different types of copy/pasted input of time data. A SQL databse function checked against translation tables maintained in collaboration with the business operations team.  Data output was displayed using d3 for data visualization to help understand labor costs. \\n\\r • Learned and fully implemented advanced features of the Vue framework for a variety of data analytics applications and reconstructing legacy Angular products to help transition an aging library of corporate applications. \\n\\r • Parts and labor tracking system to integrate the builds across teams ans systems.  Collaborated with deparatments across the company to pull and collate relevant data enabling wider-reaching analytics. \\n\\r • Centralized data vizualization dashboard with responsive layout and reusable data viz components.  Charts and tables that are dynamically populated to avoid repetitive hard-coding and save on future similar requests from customers. Wrapper for tableau api to better integrate server and dashboard functionality across apps.  Use of recursive components to display org structure drilldown.  \\n\\r • Ensured data integrity of daily loading from source systems mostly using c#/dotnet and sql scripts with some python and R developing new ETL architecture for reusable data analytics pipeline.  As new data sources come from increased collaboration, creating a workflow enabled efficient operations. \\n\\r • Team devops guy - deployment of products using Cloud Foundry, Gitlab CI/CD, bash and powershell scripting, and windows server virtual machine.  Things break and someone has to fix them. \\n\\r • Liaising with other teams/departments to collaborate in data flow and analytics.  Collaborated with a diverse and distributed team  working with a 12-hour time difference with India and delivered results tracking contributions through Gitlab and Jira in a remote-work environment. Being able to communicate changes and action items needed across teams allows for smoother workflow.\n",startDate:"April 2019",endDate:"April 2020"}]},{type:"language",jobs:[{id:4,experienceType:"language",position:"Sinologist",company:"World Eye Reports",description:"Shanghai, PRC. Translator, Interpreter, media Sales, wrote articles and sold ads for advertorial project based out of Shanghai.",startDate:"August 2003",endDate:"January 2004"},{id:5,experienceType:"language",position:"QA Tester",company:"GTL Media",description:"Translator, linguistic tester, translated texts for various media including video games, film, and legal, checked video games for linguistic bugs and translation errors, translation of .xml databases for in-game script",startDate:"December 2011",endDate:"August 2014"},{id:6,experienceType:"language",position:"Executive Assistant to the CEO",company:"EZI",description:"Manila, Philippines. Participated in managing daily operations in a bilingual office setting, supervised staff, attended developmental meetings, tracked and prepared development projects, made calls to and from suppliers and manufacturers, purchased investment property, created investment portfolios and marketing and business plans, gaining insights into the world of Big Business.",startDate:"January 2008",endDate:"December 2008"},{id:11,experienceType:"language",position:"Freelance Translator / Interpreter",company:"Various Interpretation Agencies",description:"Medical, dental and media conferences, on-site medical and legal interpretation for depositions, insurance and immigration interviews, simultaneous interpretation of contract negotiations, guided tours, consecutive and simultaneous interpretation for training meetings, document translation of many types, including legal, medical, media localization, and various other language-related assignments, primarily in Spanish and Tagalog, some French.",startDate:"July 2011",endDate:"Present"}]},{type:"sales",jobs:[{id:3,experienceType:"sales",position:"Product Specialist - Sales",company:"Toyota of Hollywood & Hollywood Electrics – Electric Cycle Dealership",description:"New and Pre-owned Conventional and Electric Car and Cycle Sales; Sales made in English, Spanish, Tagalog, French, and Mandarin, Self-directed marketing efforts",startDate:"July 2010",endDate:"February 2017"}]},{type:"hospitality",jobs:[{id:1,experienceType:"hospitality",position:"Grill Chef de Partie",company:"Many Different Restaurants - mostly a cook, sometimes a bartender",description:"Post Haus Restaurant - St. Moritz, Switzerland stands out as I ran the gamut from helping plan restaurant concept, designed Grill Station, assisted in menu planning and execution, provided back-end data for owners during the length of the contract, offering particular assistance interpreting for members of the multi-cultural staff and management.",startDate:"August 1998",endDate:"August 2018"},{id:2,experienceType:"hospitality",position:"Food delivery logistics",company:"DoorDash and Grubhub",description:"Operating 2 apps at the same time to maximize earnings, while maintaining customer satisfaction and high ratings, experienced first hand the effects of data collection of market and labor fluctuations and how they determined the logic behind the apps while I was learning to code.",startDate:"April 2017",endDate:"April 2019"}]}]},A="SET_RESUME_LOADED",E="SET_RESUME",P={BACKEND_PREFIX_PROD:"https://shortpoet.azurewebsites.net",BACKEND_PREFIX_DEV:"https://localhost:5001"},T={RESUME_GET_API:"/api/Resume/Get",RESUME_FETCH_API:"/api/Resume/Fetch/1",RESUME_FETCH_LATEST_API:"/api/Resume/FetchLatest"},I={ROLES_API:"/api/Roles",HEADERS_API:"/api/Idy/Get"},x={index:P,resume:T,auth:I},C={resume:{},resumeLoaded:!1},j={getResume:function(e){return e.resume},getResumeLoaded:function(e){return e.resumeLoaded}},M=(h={},Object(w["a"])(h,E,(function(e,t){e.resume=t})),Object(w["a"])(h,A,(function(e,t){e.resumeLoaded=t})),h),L={loadResume:function(e){var t=e.commit,a=e.rootGetters;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n,i,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a.getEnv,n=x.resume.RESUME_FETCH_LATEST_API,i=a.getUrlPrefix+n,e.next=5,S.a.get(i);case 5:r=e.sent,o=["software","language","sales","hospitality"],s={aboutMe:r.data.aboutMe,address:r.data.address,brief:r.data.brief,email:r.data.email,flags:r.data.flags,interests:r.data.interests,name:r.data.name,surname:r.data.surname,title:r.data.title,visas:r.data.visas,educations:r.data.resumeEducations.map((function(e){return e.education})),jobs:r.data.resumeJobs.map((function(e){return e.job})),skills:r.data.resumeSkills.map((function(e){return e.skill})),socials:r.data.resumeSocials.map((function(e){return e.social})),spokenLanguages:r.data.resumeSpokenLanguages.map((function(e){return e.spokenLanguages})),experiences:[]},o.forEach((function(e){s.experiences.push({type:e,jobs:s.jobs.filter((function(t){return t.experienceType===e}))})})),t(E,s),t(A,!0),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t(E,D);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},R={namespaced:!0,state:C,getters:j,mutations:M,actions:L};n["default"].use(b["a"]);var F={getUrlPrefix:function(e){return"production"===e.environment?x.index.BACKEND_PREFIX_PROD:x.index.BACKEND_PREFIX_DEV},getEnv:function(e){return e.environment}},U=new b["a"].Store({modules:{resume:R},state:{environment:"production"},getters:F,mutations:{},actions:{}}),O=a("1157"),_=a.n(O),G=a("2b88"),z=a.n(G),B=a("ecee"),J=a("c074"),H=a("ad3d");n["default"].use(z.a),a("4989"),a("6a5c"),a("f9e3"),a("5fc5"),a("7f10"),B["c"].add(J["a"],J["b"],J["d"],J["e"],J["c"]),n["default"].component("font-awesome-icon",H["a"]),n["default"].component("font-awesome-layers",H["b"]),n["default"].config.devtools=!1,n["default"].prototype.jquery=_.a,n["default"].config.productionTip=!1,new n["default"]({router:y,store:U,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.24433a75.js.map