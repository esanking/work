import{k as u,l as f,o as _,f as b,g as t,m as a,v as i,q as y}from"./vendor.936b408a.js";import{_ as h}from"./index.8fd059e0.js";const x={setup(){let n=u({coin:[],yearCoin:[],year:[],rest:[]}),s=f("");function d(){let e=0,c=0,l=0,o=0,m="";for(let r=1;r<=n.year;r+=1)c+=n.coin*12,e=Math.round((n.coin*12+l+n.yearCoin)*(n.rest/100)),l=Math.round(n.coin*12+l+e+n.yearCoin),o=Math.round(e/12),m+=`
                <tr>
                    <td>\u7B2C${r}\u5E74</td>
                    <td>${c.toLocaleString()}</td>
                    <td>${l.toLocaleString()}</td>
                    <td>${e.toLocaleString()}</td>
                    <td>${o.toLocaleString()}</td>
                </tr>`;s.value=m}return{formdata:n,data:s,submit:d}}},p={class:"w-100 MtMargin"},v=t("div",{class:"header pt-4"},[t("h3",{class:"w-100 text-center text-success"},"\u80A1\u7968\u8907\u5229\u8A66\u7B97")],-1),w={class:"main w-100 mt-4"},g={class:"outside w-100 d-flex justify-content-center"},M={class:"circle w-75 h-100 border border-success d-flex flex-column",style:{"font-size":"16px"}},C={class:"m-2 d-flex align-items-center justify-content-center"},j=t("label",{for:"",class:"text-success w-25"},"\u6BCF\u6708\u5B58\u5165",-1),L={class:"m-2 d-flex align-items-center justify-content-center"},T=t("label",{for:"",class:"text-success w-25"},"\u6BCF\u5E74\u984D\u5916\u5B58\u5165",-1),V={class:"m-2 d-flex align-items-center justify-content-center"},k=t("label",{for:"",class:"text-success w-25"},"\u9810\u5B58\u5E7E\u5E74",-1),B={class:"m-2 d-flex align-items-center justify-content-center"},S=t("label",{for:"",class:"text-success w-25"},"\u6B96\u5229\u7387",-1),U={class:"w-100 text-center mt-2"},H={class:"footer mt-4"},I={class:"table text-success"},K=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"\u5E74"),t("th",{scope:"col"},"\u5B58\u91D1\u984D"),t("th",{scope:"col"},"\u91D1\u984D\u52A0\u5229\u606F"),t("th",{scope:"col"},"\u55AE\u5E74\u5229\u606F"),t("th",{scope:"col"},"\u5E73\u5747\u6BCF\u6708\u5229\u606F\u7372\u5229")])],-1),q=["innerHTML"];function z(n,s,d,e,c,l){return _(),b("div",p,[v,t("div",w,[t("div",g,[t("div",M,[t("ul",null,[t("li",C,[j,a(t("input",{type:"number","onUpdate:modelValue":s[0]||(s[0]=o=>e.formdata.coin=o),class:"coin w-50"},null,512),[[i,e.formdata.coin]])]),t("li",L,[T,a(t("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=o=>e.formdata.yearCoin=o),class:"coin w-50"},null,512),[[i,e.formdata.yearCoin]])]),t("li",V,[k,a(t("input",{type:"number","onUpdate:modelValue":s[2]||(s[2]=o=>e.formdata.year=o),class:"wantY w-50"},null,512),[[i,e.formdata.year]])]),t("li",B,[S,a(t("input",{type:"number",onKeyup:s[3]||(s[3]=y((...o)=>e.submit&&e.submit(...o),["enter"])),"onUpdate:modelValue":s[4]||(s[4]=o=>e.formdata.rest=o),"aria-label":"%",placeholder:"%",class:"rest w-50"},null,544),[[i,e.formdata.rest]])]),t("li",U,[t("div",{class:"btn btn-success submit",onClick:s[5]||(s[5]=(...o)=>e.submit&&e.submit(...o))},"submit")])])])])]),t("div",H,[t("table",I,[K,t("tbody",{innerHTML:e.data,class:"td"},null,8,q)])])])}var N=h(x,[["render",z]]);export{N as default};