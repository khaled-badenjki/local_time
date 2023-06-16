var t;t={config:{},run:function(){return this.getController().processElements()},process:function(...t){var e,r,a;for(r=0,a=t.length;r<a;r++)e=t[r],this.getController().processElement(e);return t.length},getController:function(){return null!=this.controller?this.controller:this.controller=new t.Controller}};var e,r,a,n,s,i,o,u,l,c,d,m,h,f,g,v,y,p,b,S,M,D,T,E,w,A,N,O,$,C=t;C.config.i18n={en:{date:{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbrDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yesterday:"yesterday",today:"today",tomorrow:"tomorrow",on:"on {date}",formats:{default:"%b %e, %Y",thisYear:"%b %e"}},time:{am:"am",pm:"pm",singular:"a {time}",singularAn:"an {time}",elapsed:"{time} ago",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",formats:{default:"%l:%M%P"}},datetime:{at:"{date} at {time}",formats:{default:"%B %e, %Y at %l:%M%P %Z"}}}},C.config.locale="en",C.config.defaultLocale="en",C.config.timerInterval=6e4,a=!isNaN(Date.parse("2011-01-01T12:00:00-05:00")),C.parseDate=function(t){return t=t.toString(),a||(t=r(t)),new Date(Date.parse(t))},e=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,r=function(t){var r,a,n,s,i,o,u,l,c,d;if(s=t.match(e))return[r,c,o,a,n,i,l,d]=s,"Z"!==d&&(u=d.replace(":","")),`${c}/${o}/${a} ${n}:${i}:${l} GMT${[u]}`},C.elementMatchesSelector=(n=document.documentElement,s=null!=(i=null!=(o=null!=(u=null!=(l=n.matches)?l:n.matchesSelector)?u:n.webkitMatchesSelector)?o:n.mozMatchesSelector)?i:n.msMatchesSelector,function(t,e){if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE)return s.call(t,e)}),({config:c}=C),({i18n:m}=c),C.getI18nValue=function(t="",{locale:e}={locale:c.locale}){var r;return null!=(r=d(m[e],t))?r:e!==c.defaultLocale?C.getI18nValue(t,{locale:c.defaultLocale}):void 0},C.translate=function(t,e={},r){var a,n,s;for(a in s=C.getI18nValue(t,r),e)n=e[a],s=s.replace(`{${a}}`,n);return s},d=function(t,e){var r,a,n,s,i;for(i=t,r=0,n=(s=e.split(".")).length;r<n;r++){if(null==i[a=s[r]])return null;i=i[a]}return i},({getI18nValue:h,translate:y}=C),C.strftime=v=function(t,e){var r,a,n,s,i,o,u;return a=t.getDay(),r=t.getDate(),i=t.getMonth(),u=t.getFullYear(),n=t.getHours(),s=t.getMinutes(),o=t.getSeconds(),e.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g,(function(e,l,c){switch(c){case"%":return"%";case"a":return h("date.abbrDayNames")[a];case"A":return h("date.dayNames")[a];case"b":return h("date.abbrMonthNames")[i];case"B":return h("date.monthNames")[i];case"c":return t.toString();case"d":return f(r,l);case"e":return r;case"H":return f(n,l);case"I":return f(v(t,"%l"),l);case"l":return 0===n||12===n?12:(n+12)%12;case"m":return f(i+1,l);case"M":return f(s,l);case"p":return y("time."+(n>11?"pm":"am")).toUpperCase();case"P":return y("time."+(n>11?"pm":"am"));case"S":return f(o,l);case"w":return a;case"y":return f(u%100,l);case"Y":return u;case"Z":return g(t)}}))},f=function(t,e){return"-"===e?t:`0${t}`.slice(-2)},g=function(t){var e,r,a,n,s;return(e=null!=(r=(s=t.toString()).match(/\(([\w\s]+)\)$/))?r[1]:void 0)?/\s/.test(e)?e.match(/\b(\w)/g).join(""):e:(e=null!=(a=s.match(/(\w{3,4})\s\d{4}$/))?a[1]:void 0)||(e=null!=(n=s.match(/(UTC[\+\-]\d+)/))?n[1]:void 0)?e:""},C.CalendarDate=class{static fromDate(t){return new this(t.getFullYear(),t.getMonth()+1,t.getDate())}static today(){return this.fromDate(new Date)}constructor(t,e,r){this.date=new Date(Date.UTC(t,e-1)),this.date.setUTCDate(r),this.year=this.date.getUTCFullYear(),this.month=this.date.getUTCMonth()+1,this.day=this.date.getUTCDate(),this.value=this.date.getTime()}equals(t){return(null!=t?t.value:void 0)===this.value}is(t){return this.equals(t)}isToday(){return this.is(this.constructor.today())}occursOnSameYearAs(t){return this.year===(null!=t?t.year:void 0)}occursThisYear(){return this.occursOnSameYearAs(this.constructor.today())}daysSince(t){if(t)return(this.date-t.date)/864e5}daysPassed(){return this.constructor.today().daysSince(this)}},({strftime:b,translate:S,getI18nValue:p}=C),C.RelativeTime=class{constructor(t){this.date=t,this.calendarDate=C.CalendarDate.fromDate(this.date)}toString(){var t,e;return(e=this.toTimeElapsedString())?S("time.elapsed",{time:e}):(t=this.toWeekdayString())?(e=this.toTimeString(),S("datetime.at",{date:t,time:e})):S("date.on",{date:this.toDateString()})}toTimeOrDateString(){return this.calendarDate.isToday()?this.toTimeString():this.toDateString()}toTimeElapsedString(){var t,e,r,a,n;return r=(new Date).getTime()-this.date.getTime(),a=Math.round(r/1e3),e=Math.round(a/60),t=Math.round(e/60),r<0?null:a<10?(n=S("time.second"),S("time.singular",{time:n})):a<45?`${a} ${S("time.seconds")}`:a<90?(n=S("time.minute"),S("time.singular",{time:n})):e<45?`${e} ${S("time.minutes")}`:e<90?(n=S("time.hour"),S("time.singularAn",{time:n})):t<24?`${t} ${S("time.hours")}`:""}toWeekdayString(){switch(this.calendarDate.daysPassed()){case 0:return S("date.today");case 1:return S("date.yesterday");case-1:return S("date.tomorrow");case 2:case 3:case 4:case 5:case 6:return b(this.date,"%A");default:return""}}toDateString(){var t;return t=this.calendarDate.occursThisYear()?p("date.formats.thisYear"):p("date.formats.default"),b(this.date,t)}toTimeString(){return b(this.date,p("time.formats.default"))}},({elementMatchesSelector:M}=C),C.PageObserver=class{constructor(t,e){this.processMutations=this.processMutations.bind(this),this.processInsertion=this.processInsertion.bind(this),this.selector=t,this.callback=e}start(){if(!this.started)return this.observeWithMutationObserver()||this.observeWithMutationEvent(),this.started=!0}observeWithMutationObserver(){if("undefined"!=typeof MutationObserver&&null!==MutationObserver)return new MutationObserver(this.processMutations).observe(document.documentElement,{childList:!0,subtree:!0}),!0}observeWithMutationEvent(){return addEventListener("DOMNodeInserted",this.processInsertion,!1),!0}findSignificantElements(t){var e;return e=[],(null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&(M(t,this.selector)&&e.push(t),e.push(...t.querySelectorAll(this.selector))),e}processMutations(t){var e,r,a,n,s,i,o,u;for(e=[],r=0,n=t.length;r<n;r++)if("childList"===(i=t[r]).type)for(a=0,s=(u=i.addedNodes).length;a<s;a++)o=u[a],e.push(...this.findSignificantElements(o));return this.notify(e)}processInsertion(t){var e;return e=this.findSignificantElements(t.target),this.notify(e)}notify(t){if(null!=t?t.length:void 0)return"function"==typeof this.callback?this.callback(t):void 0}},({parseDate:E,strftime:w,getI18nValue:T,config:D}=C),C.Controller=function(){var t,e,r;return t="time[data-local]:not([data-localized])",e=function(t){return t.setAttribute("data-localized","")},r=function(t){return new C.RelativeTime(t)},class{constructor(){this.processElements=this.processElements.bind(this),this.pageObserver=new C.PageObserver(t,this.processElements)}start(){if(!this.started)return this.processElements(),this.startTimer(),this.pageObserver.start(),this.started=!0}startTimer(){var t;if(t=D.timerInterval)return null!=this.timer?this.timer:this.timer=setInterval(this.processElements,t)}processElements(e=document.querySelectorAll(t)){var r,a,n;for(a=0,n=e.length;a<n;a++)r=e[a],this.processElement(r);return e.length}processElement(t){var a,n,s,i,o,u;if(n=t.getAttribute("datetime"),s=t.getAttribute("data-format"),i=t.getAttribute("data-local"),o=E(n),!isNaN(o))return t.hasAttribute("title")||(u=w(o,T("datetime.formats.default")),t.setAttribute("title",u)),t.textContent=a=function(){switch(i){case"time":return e(t),w(o,s);case"date":return e(t),r(o).toDateString();case"time-ago":return r(o).toString();case"time-or-date":return r(o).toTimeOrDateString();case"weekday":return r(o).toWeekdayString();case"weekday-or-date":return r(o).toWeekdayString()||r(o).toDateString()}}(),t.hasAttribute("aria-label")?void 0:t.setAttribute("aria-label",a)}}}.call(window),$=!1,A=function(){return document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState},N=function(t){var e;return null!=(e="function"==typeof requestAnimationFrame?requestAnimationFrame(t):void 0)?e:setTimeout(t,17)},O=function(){return C.getController().start()},C.start=function(){if(!$)return $=!0,"undefined"!=typeof MutationObserver&&null!==MutationObserver||A()?O():N(O)},window.LocalTime===C&&C.start();export{C as default};
