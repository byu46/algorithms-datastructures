(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{115:function(e,t,n){"use strict";n.r(t);var r=n(126),a=n.n(r),o=n(127),c=n(20),i=n(0),u=n.n(i),l=n(59),p=n(104),s=n(128),f=Object(l.a)((function(e){return{root:{},code:{fontSize:"calc(2px + 1vw)",overflowWrap:"break-word",wordBreak:"normal",whiteSpace:"unset",maxWidth:"50vw",boxSizing:"border-box!important"},tooltip:{position:"relative"},text:{},active:{color:"#eeeeee",backgroundColor:"rgba(00, 00, 00, 0.6)",boxShadow:"0 0 10px 3px rgba(11, 11, 11, 0.6)"}}}));t.default=function(e){var t=f(),n=Object(i.useState)([]),r=Object(c.a)(n,2),l=r[0],m=r[1],b=e.unit,d=e.id,h=Object(i.useRef)(!1);return Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).then((function(e){return e.split("\n")})).then((function(e){return e.filter((function(e){return e.includes("/*")}))})).then((function(e){return m(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.current||(!function(t){e.apply(this,arguments)}(b),h.current=!0)})),u.a.createElement("div",{className:t.code},u.a.createElement(s.Element,{name:"comments",className:"active",id:d,style:{position:"relative",height:"300px",overflow:"scroll",paddingBottom:"300px"}},u.a.createElement(p.a,null),l.map((function(e,t){if("/**/"!==e.trim())return u.a.createElement(s.Element,{name:t.toString(),key:t},u.a.createElement("p",{key:t},e.split("/* ").join("").split(" */").join("").concat("\n","\n")),u.a.createElement(p.a,null))}))))}}}]);
//# sourceMappingURL=3.c332e9e0.chunk.js.map