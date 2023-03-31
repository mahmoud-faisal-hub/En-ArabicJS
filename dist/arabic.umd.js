(function(t,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(t=typeof globalThis<"u"?globalThis:t||self,r(t.arabic={}))})(this,function(t){"use strict";var S=Object.defineProperty;var A=(t,r,s)=>r in t?S(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;var f=(t,r,s)=>(A(t,typeof r!="symbol"?r+"":r,s),s);const r=e=>{let a=["january","february","march","april","may","june","july","august","september","october","november","december","saturday","sunday","monday","tuesday","wednesday","thursday","friday","am","pm"],u=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec","sat","sun","mon","tue","wed","thu","fri","am","pm"],l=["يناير","فبراير","مارس","إبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر","السبت","الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","ص","م"];return e.trim().split(/\s+/).map(o=>{let n=o.replace(/[^a-zA-Z ]/g,""),i=n.toLowerCase();return a.includes(i)?o.replace(n,l[a.indexOf(i)]):u.includes(i)?o.replace(n,l[u.indexOf(i)]):o}).join(" ").toString()},s=e=>e.replace(/[أإآ]/g,"ا").replace(/[ؤ]/g,"و").replace(/[ىئ]/g,"ي").replace(/[ه]/g,"ة"),b=(e,a=!1)=>{let u=["January","February","March","April","May","June","July","August","September","October","November","December","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","am","pm"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Sat","Sun","Mon","Tue","Wed","Thu","Fri","am","pm"],c=["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر","السبت","الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","ص","م"];return e.trim().split(/\s+/).map(n=>{let i=n.replace(/[^ء-ي ]/g,""),p=s(i);return c.includes(p)?a?n.replace(i,l[c.indexOf(p)]):n.replace(i,u[c.indexOf(p)]):n}).join(" ").toString()},m=e=>{e=String(e);let a=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];return e.replace(/[0-9]/g,function(u){return a[+u]})},g=e=>(e=String(e),e.replace(/[٠-٩]/g,a=>String("٠١٢٣٤٥٦٧٨٩".indexOf(a)))),d=e=>decodeURIComponent(JSON.parse('"'+e.replace(/\"/g,'\\"')+'"'));class h{constructor(a){f(this,"str");a=String(a),this.str=a}toArabicDate(){return this.str=r(this.str),this}toEnglishDate(a=!1){return this.str=b(this.str,a),this}toArabicNumbers(){return this.str=m(this.str),this}toEnglishNumbers(){return this.str=g(this.str),this}decodeURL(){return this.str=d(this.str),this}toString(){return this.str}}h.prototype.fixURL=h.prototype.decodeURL;const y=e=>(e=String(e),new h(e));t.decodeURL=d,t.default=y,t.fixURL=d,t.toArabicDate=r,t.toArabicNumbers=m,t.toEnglishDate=b,t.toEnglishNumbers=g,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
