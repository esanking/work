import{B as T,l as d,k as y,y as N,o as c,f as i,g as e,C as m,t as u,D as g,F as O,j as G}from"./vendor.936b408a.js";import{_ as b}from"./index.4e86d4e4.js";const I={setup(){const k=T();let s=d(""),a=d(""),t=y([]),o=d([]),n=d(!1);N(()=>{s.value=k.params.UserName,W(),_()});function l(){v(),o.value.push({UserName:s.value,GoWorkTime:a.value,OffWorkTime:""});const r=JSON.stringify(o.value);localStorage.setItem("Record",r),_()}function f(){v(),o.value.forEach((r,h)=>{if(r.OffWorkTime===""){o.value[h].OffWorkTime=a.value;const p=JSON.stringify(o.value);localStorage.setItem("Record",p),o.value[h].OffWorkTime=a.value}}),_()}function W(){o.value=JSON.parse(localStorage.getItem("Record"))||[],C()}function C(){o.value=o.value.filter(r=>r.UserName===s.value)}function v(){a.value=new Date().toLocaleString()}function _(){o.value.length===0?n.value=!1:o.value[o.value.length-1].OffWorkTime===""?n.value=!0:n.value=!1}return{UserName:s,Time:a,Record:t,data:o,WorkCheck:n,GoToWork:l,GoOffWork:f}}},R={class:"w-100 bg-pink MtMargin"},S=e("div",{class:"ClockInImg"},null,-1),U={class:"ClockIn py-3"},x=e("h1",{class:"text-info fw-bold"},"\u6253\u5361",-1),B={class:"ClockInForm"},D={class:"FormUser"},w=e("br",null,null,-1),F=m(" \u8ACB\u6253\u5361 "),j=e("h1",null,"\u4E0A\u73ED",-1),J=[j],L=e("h1",null,"\u4E0B\u73ED",-1),M=[L],V={class:"ClockInRecord py-3"},E=e("h1",{class:"text-info fw-bold"},"\u6253\u5361\u7D00\u9304",-1),P={class:"RecordList"},H={class:"table"},q=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"\u59D3\u540D"),e("th",{scope:"col"},"\u4E0A\u73ED\u6642\u9593"),e("th",{scope:"col"},"\u4E0B\u73ED\u6642\u9593")])],-1);function z(k,s,a,t,o,n){return c(),i("div",R,[S,e("div",U,[x,e("div",B,[e("div",D,[m(" Hello "+u(t.UserName)+", ",1),w,F]),t.WorkCheck?g("",!0):(c(),i("div",{key:0,class:"ClockBtn bg-info",onClick:s[0]||(s[0]=(...l)=>t.GoToWork&&t.GoToWork(...l))},J)),t.WorkCheck?(c(),i("div",{key:1,class:"ClockBtn bg-info",onClick:s[1]||(s[1]=(...l)=>t.GoOffWork&&t.GoOffWork(...l))},M)):g("",!0)])]),e("div",V,[E,e("div",P,[e("table",H,[q,e("tbody",null,[(c(!0),i(O,null,G(t.data,(l,f)=>(c(),i("tr",{key:f},[e("td",null,u(l.UserName),1),e("td",null,u(l.GoWorkTime),1),e("td",null,u(l.OffWorkTime),1)]))),128))])])])])])}var Q=b(I,[["render",z]]);export{Q as default};
