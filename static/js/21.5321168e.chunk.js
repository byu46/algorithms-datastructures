(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{152:function(e,r,a){"use strict";a.r(r);var o=a(20),t=a(0),l=a.n(t),i=a(59),n=a(178),s=a(182),c=a(181),d=a(177),b=a(179),m=a(180),p=a(107),g=a(183),x=Object(i.a)((function(e){return{root:{},code:{fontSize:"calc(3px + 1vw)",display:"inline-block!important",boxSizing:"border-box!important",wordBreak:"break-all"},tooltip:{position:"relative"},text:{display:"table",wordBreak:"break-all","&:hover":{color:"#eeeeee",backgroundColor:"rgba(00, 00, 00, 0.6)",boxShadow:"0 0 10px 3px rgba(11, 11, 11, 0.6)"},cursor:"pointer"},active:{color:"#eeeeee",backgroundColor:"rgba(00, 00, 00, 0.6)",boxShadow:"0 0 10px 3px rgba(11, 11, 11, 0.6)"},table:{marginTop:"5px",marginBottom:"5px",marginLeft:"auto",marginRight:"auto",width:"60%",minWidth:"650px"},tableNoBorderRight:{backgroundColor:"rgba(00, 00, 00, 0.2)",fontWeight:"500",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",paddingRight:"2px"},tableNoBorderLeft:{backgroundColor:"rgba(00, 00, 00, 0.2)",fontWeight:"500",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)",paddingLeft:"2px"},tableBorder:{},zero:{backgroundColor:"rgba(00, 00, 00, 0.2)",fontWeight:"500",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"},one:{backgroundColor:"rgba(00, 150, 00, 0.6)",color:"#004000",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"},two:{backgroundColor:"rgba(130, 240, 10, 0.6)",color:"#004000",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"},three:{backgroundColor:"rgba(255,100,0, 0.6)",color:"#804000",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"},four:{backgroundColor:"rgba(255,0,0, 0.6)",color:"#804000",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"},five:{backgroundColor:"rgba(255,0,0, 0.6)",color:"#800000",borderTop:"2px solid rgba(255, 255, 255, 1)",borderBottom:"2px solid rgba(255, 255, 255, 1)",borderLeft:"2px solid rgba(255, 255, 255, 1)",borderRight:"2px solid rgba(255, 255, 255, 1)"}}}));r.default=function(e){var r=x(),a=Object(t.useState)(!1),i=Object(o.a)(a,2),u=(i[0],i[1],e.unit),w=(e.id,e.solo),C=[r.zero,r.one,r.two,r.three,r.four,r.five];function k(e,r,a,o,t,l,i,n,s,c,d){return{name:e,desc:r,rc_avg:a,rc_avg_rank:o,rc_avg_desc:t,rc_worst:l,rc_worst_rank:i,rc_worst_desc:n,sc_worst:s,sc_worst_rank:c,sc_worst_desc:d}}console.log(e.unit);var _=[];return w?_.push(k(u.name,u.desc,u.runtimeComplexity.average.runtime,u.runtimeComplexity.average.rank,u.runtimeComplexity.average.desc,u.runtimeComplexity.worst.runtime,u.runtimeComplexity.worst.rank,u.runtimeComplexity.worst.desc,u.spaceComplexity.worst.runtime,u.spaceComplexity.worst.rank,u.spaceComplexity.worst.desc)):u.map((function(e){_.push(k(e.name,e.desc,e.runtimeComplexity.average.runtime,e.runtimeComplexity.average.rank,e.runtimeComplexity.average.desc,e.runtimeComplexity.worst.runtime,e.runtimeComplexity.worst.rank,e.runtimeComplexity.worst.desc,e.spaceComplexity.worst.runtime,e.spaceComplexity.worst.rank,e.spaceComplexity.worst.desc))})),l.a.createElement("div",null,l.a.createElement(d.a,{component:p.a,className:r.table,square:!0},l.a.createElement(n.a,{"aria-label":"table"},l.a.createElement(b.a,null,l.a.createElement(m.a,null,l.a.createElement(c.a,{className:r.zero}),l.a.createElement(c.a,{align:"right",className:r.tableNoBorderRight},"Runtime"),l.a.createElement(c.a,{align:"left",className:r.tableNoBorderLeft},"Complexity"),l.a.createElement(c.a,{align:"center",className:r.zero},"Space Complexity")),l.a.createElement(m.a,null,l.a.createElement(c.a,{align:"left",className:r.zero},"Algorithms"),l.a.createElement(c.a,{align:"center",className:r.zero},"Average Case"),l.a.createElement(c.a,{align:"center",className:r.zero},"Worst Case"),l.a.createElement(c.a,{align:"center",className:r.zero},"Worst Case"))),l.a.createElement(s.a,null,_.map((function(e){return l.a.createElement(m.a,{key:e.name},l.a.createElement(g.a,{title:e.desc,interactive:!0,arrow:!0},l.a.createElement(c.a,{component:"th",scope:"row",className:r.zero},e.name)),l.a.createElement(g.a,{title:e.rc_avg_desc,interactive:!0,arrow:!0},l.a.createElement(c.a,{align:"center",className:C[e.rc_avg_rank]},e.rc_avg)),l.a.createElement(g.a,{title:e.rc_worst_desc,interactive:!0,arrow:!0},l.a.createElement(c.a,{align:"center",className:C[e.rc_worst_rank]},e.rc_worst)),l.a.createElement(g.a,{title:e.sc_worst_desc,interactive:!0,arrow:!0},l.a.createElement(c.a,{align:"center",className:C[e.sc_worst_rank]},e.sc_worst)))}))))))}}}]);
//# sourceMappingURL=21.5321168e.chunk.js.map