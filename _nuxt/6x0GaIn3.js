import{d as C,r as o,k as $,x as i,y as r,z as e,Q as B,R as y,S as k,T as D,O as n,A as l,a1 as u,a2 as b,L as p,_ as N}from"./7Wc41u3H.js";import{u as P}from"./Cr-K-Jex.js";const R={class:"config"},V={class:"flex border-b mb-4"},T=["onClick"],U={key:0},A={type:"button",class:"btn-gradient mb-2 w-full"},G={class:"mb-4"},K={class:"flex bg-glass p-1 pb-2 items-center"},M={class:"block text-white/60 flex-shrink-0 mx-2"},z={class:"block text-white mx-2"},I={class:"flex bg-glass p-1 pb-2 items-center"},L={class:"block text-white/60 flex-shrink-0 mx-2"},O={class:"block text-white mx-2"},Y={class:"flex bg-glass p-1 pb-2 items-center"},j={class:"block text-white/60 flex-shrink-0 mx-2"},q={class:"block text-white mx-2"},E={key:1},F={type:"button",class:"btn-gradient mb-2 w-full"},H={class:"relative flex editor-wrapper"},Q={class:"py-6 pr-2 text-right text-white/30 font-mono text-sm select-none line-numbers"},W=C({__name:"SConfig",setup(X){const f=P("chainName",()=>"BSC"),g=[{key:"basic",labelKey:"BasicSettings"},{key:"advanced",labelKey:"AdvancedSettings"}],c=o("basic"),_=o(null),m=o(null),S=()=>{if(!_.value||!m.value)return;const a=_.value.scrollTop,s=m.value.querySelector(".line-numbers");s&&(s.style.transform=`translateY(-${a}px)`)},x=o("-1"),v=o("0.1"),h=o("0.001"),d=o(`
X = 5
Y = 5
W = 1000
H = 600

"调试模式" = 0


"代理接口" = "http://127.0.0.1:10808"
"基础缓存" = "127.0.0.1:6379,password=,defaultDatabase=0,prefix=BSC_"


"会话缓存时长" = 2                # 小时
"会话缓存前缀" = "Session_"
"会话映射前缀" = "UserSession_"


"区块链型" = "BSC"
"油价小数" = 2      # 保留小数位
"固定油价" = "-1"
"追加油价" = "0.00001"
"限制油价" = "100"`),w=$(()=>d.value.split(`
`).length);return(a,s)=>(r(),i("div",R,[e("div",V,[(r(),i(y,null,k(g,t=>e("button",{key:t.key,type:"button",class:D(["tab-btn",n(c)===t.key?"active":"border-transparent text-gray-500"]),onClick:J=>c.value=t.key},l(a.$t(t.labelKey)),11,T)),64))]),n(c)==="basic"?(r(),i("div",U,[e("button",A,l(a.$t("StartAirdrop")),1),e("div",G,[e("div",K,[e("label",M,l(a.$t("GasPriceMax")),1),u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>p(v)?v.value=t:null),type:"text",class:"input-field text-end border-b input-border"},null,512),[[b,n(v)]]),e("label",z,l(n(f)),1)]),e("div",I,[e("label",L,l(a.$t("GasPriceDynamic")),1),u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>p(x)?x.value=t:null),type:"text",class:"input-field text-end border-b input-border"},null,512),[[b,n(x)]]),e("label",O,l(n(f)),1)]),e("div",Y,[e("label",j,l(a.$t("GasPriceIncrease")),1),u(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>p(h)?h.value=t:null),type:"text",class:"input-field text-end border-b input-border"},null,512),[[b,n(h)]]),e("label",q,l(n(f)),1)])])])):n(c)==="advanced"?(r(),i("div",E,[e("button",F,l(a.$t("SaveConfig")),1),e("div",H,[e("div",{ref_key:"lineNumbersRef",ref:m,class:"editor-line-numbers"},[e("div",Q,[(r(!0),i(y,null,k(n(w),t=>(r(),i("div",{key:t},l(t),1))),128))])],512),u(e("textarea",{ref_key:"textareaRef",ref:_,"onUpdate:modelValue":s[3]||(s[3]=t=>p(d)?d.value=t:null),class:"editor-textarea",spellcheck:"false",placeholder:"加载配置中...",wrap:"off",style:{"white-space":"pre"},onScroll:S},null,544),[[b,n(d)]])])])):B("",!0)]))}}),te=Object.assign(N(W,[["__scopeId","data-v-cd70156c"]]),{__name:"SConfig"});export{te as default};
