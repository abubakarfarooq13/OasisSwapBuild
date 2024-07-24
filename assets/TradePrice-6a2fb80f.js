import{u as V,f as ie,dc as ue,kw as de,ax as le,ay as Y,ar as ne,aw as J,a5 as fe,dn as pe,av as ge,v as me,kx as Se,r as f,dr as H,dx as q,ky as Ce,kz as he,au as ae,bm as j,kA as ye,dv as Ee,kB as be,kC as ce,kD as X,kE as Q,cS as xe,cT as Te,dy as Z,eO as Ae,kF as we,kG as ve,S as Re,dA as ke,kH as Ie,jX as _e,kI as Pe,P as G,ag as F,am as Ne,dT as M,kJ as D,dZ as Fe,$ as Be,dw as $,dS as je,af as Ue,dt as ee,ej as Le,cJ as Oe,s as N,jK as De,f1 as $e,kK as Ge,j as l,cz as Me,jN as We,kL as Ve,aT as qe,kM as ze,g as Ke,k as Ye,_ as Je,eA as te,T as se,bw as He,bx as Xe,dW as Qe,d as Ze}from"./index-b45b11f3.js";const xt=(e,t,s,a)=>{var T;const{chainId:o}=V(),n=a||o,r=ie(),c=(e==null?void 0:e.chainId)===n?e:void 0,u=(t==null?void 0:t.chainId)===n?t:void 0,{pathname:m}=ue(),p=de(r,n,m.startsWith(s)),i=n?((T=le[n])==null?void 0:T.address)??"":"",d=p[Y.INPUT].currencyId,S=p[Y.OUTPUT].currencyId||i||"",h=r.inputCurrency?d:c||d;let b=r.outputCurrency?S:u||S;const y=n?ne[n].symbol:"";y&&b===y&&h===y&&(b=i);const w=J(h&&typeof h=="object"?"":h,n)??c,x=J(b&&typeof b=="object"?"":b,n)??u;return{inputCurrency:w,outputCurrency:x}};var E;(function(e){e.CURRENCY_IN="currency_in",e.CURRENCY_OUT="currency_out",e.NONE=""})(E||(E={}));const et=()=>{var y,w,x,T,k,v;const[e]=fe();let t=e.get("feeAmount")||"";t&&+t>H&&(t=H.toString());const s=e.get("clientId")||"",a=e.get("chargeFeeBy")||E.NONE,n=(e.get("preferredFeeTokens")||"").split(",").filter(A=>pe(A)).map(A=>A.toLowerCase()),r=e.get("chainId"),c=r&&ge.includes(+r)?+r:me.MAINNET,u=ne[c],m=((y=e.get("inputCurrency"))==null?void 0:y.toLowerCase())===((w=u.symbol)==null?void 0:w.toLowerCase())?u.wrapped.address.toLowerCase():(x=e.get("inputCurrency"))==null?void 0:x.toLowerCase(),p=((T=e.get("outputCurrency"))==null?void 0:T.toLowerCase())===((k=u.symbol)==null?void 0:k.toLowerCase())?u.wrapped.address.toLowerCase():(v=e.get("outputCurrency"))==null?void 0:v.toLowerCase();let i=E.NONE;n!=null&&n.includes(m)?i=E.CURRENCY_IN:n!=null&&n.includes(p)?i=E.CURRENCY_OUT:i=a;const d=Se(e.get("enableTip")||""),S=e.get("isInBps")||"",h=e.get("feeReceiver")||"";return f.useMemo(()=>t&&i&&(d||S)&&h?{feeAmount:t,chargeFeeBy:i,enableTip:d,isInBps:d?"1":S,feeReceiver:h,clientId:s}:null,[t,i,d,S,h,s])},W="tokenScores",tt=(e,t)=>{const s=localStorage.getItem(W)||"";try{return JSON.parse(s)[e][t]}catch{return}},st=(e,t,s)=>{const a=localStorage.getItem(W)||"",o=Math.floor(Date.now()/1e3);let n;try{n=JSON.parse(a)}catch{n={}}(!n||typeof n!="object")&&(n={}),n[e]||(n[e]={}),n[e][t]={score:s,savedAt:o},n[e][t.toLowerCase()]={score:s,savedAt:o},localStorage.setItem(W,JSON.stringify(n))},ot=(e,t,s)=>X[e].includes(t)&&X[e].includes(s),rt=(e,t,s)=>{const a=Q[e].includes(t),o=Q[e].includes(s);return a===o?void 0:{token:a?t:s,feeBips:ce}},nt=()=>{const{isEnableAuthenAggregator:e}=q(),[t]=Ce.useLazyGetTokenScoreQuery(),s=f.useCallback(async(r,c)=>{var S;const u=Math.floor(Date.now()/1e3),{score:m,savedAt:p}=tt(r,c)||{};if(m&&p&&u-p<he)return m;if(c===ae||c===j[r].address)return;const{data:i,isError:d}=await t({params:{chainId:r,tokenAddress:c},authentication:e});if(!(d||!((S=i==null?void 0:i.data)!=null&&S.score)))return st(r,c,i.data.score),i.data.score},[e,t]),a=f.useCallback(async(r,c)=>{try{const u=await Promise.race([s(r,c),ye(1e3)]);return u||void 0}catch(u){console.error(u);return}},[s]),o=f.useCallback((r,c,u)=>Promise.all([a(r,c),a(r,u)]),[a]);return f.useCallback(async(r,c,u)=>{if(!Ee.includes(r))return;const m=rt(r,c,u);if(m)return m;const i=ot(r,c,u)?be:ce,[d,S]=await o(r,c,u);return!d&&!S?{token:c,feeBips:i}:!d||!S?d?{token:c,feeBips:i}:{token:u,feeBips:i}:{token:d>S?c:u,feeBips:i}},[o])},at=()=>{const e=xe(),[t]=Te(),s=e==null?void 0:e.filter(o=>!t.includes(o.id)).map(o=>o.id);return(s==null?void 0:s.length)===(e==null?void 0:e.length)?"":(s==null?void 0:s.join(",").replace("kyberswapv1","kyberswap,kyberswap-static"))||""},U=e=>e.isNative?ae:e.wrapped.address,ct=(e,t,s)=>{if(!e)return{feeAmount:"",chargeFeeBy:E.NONE,isInBps:"",feeReceiver:""};const a=e.token===t?E.CURRENCY_IN:e.token===s?E.CURRENCY_OUT:E.NONE;return!a||!e.feeBips?{feeAmount:"",chargeFeeBy:E.NONE,isInBps:"",feeReceiver:""}:{feeAmount:String(e.feeBips),chargeFeeBy:a,isInBps:"1",feeReceiver:Ie}},it=()=>{const{aggregatorDomain:e}=q(),{authenticationSuccess:t}=_e();return t?e:Pe},ut=e=>{const{isEnableAuthenAggregator:t}=q(),{parsedAmount:s,currencyIn:a,currencyOut:o,customChain:n,isProcessingSwap:r,clientId:c}=e,{chainId:u}=V(),m=n||u,p=et(),[i,d]=Z.useLazyGetRouteQuery(),S=it(),h=nt(),b=at(),y=f.useRef(!1),w=f.useMemo(()=>y.current?{...d,data:void 0}:d,[d]),x=Ae();f.useEffect(()=>{s||x(Z.util.resetApiState())},[x,s]),f.useEffect(()=>{r||(y.current=!0)},[r]);const T=f.useMemo(()=>we(async v=>{await i({...v,clientId:c}),y.current=!1},ve,{leading:!0}),[i,c]);return{fetcher:f.useCallback(async()=>{var g,C;const v=((g=s==null?void 0:s.quotient)==null?void 0:g.toString())||"";if(!a||!o||!v||!((C=s==null?void 0:s.currency)!=null&&C.equals(a)))return;const A=U(a),R=U(o),B=await h(m,A,R),L=p||ct(B,A,R),I={tokenIn:A,tokenOut:R,amountIn:v,includedSources:b,gasInclude:"true",gasPrice:"",...L};Object.keys(I).forEach(_=>{I[_]||delete I[_]});const O=`${S}/${Re[m].aggregatorRoute}${ke.GET_ROUTE}`;T({url:O,params:I,authentication:t})},[S,m,a,o,b,h,t,s==null?void 0:s.currency,s==null?void 0:s.quotient,T,p]),result:w}},Tt=(e,t)=>{const s=typeof t=="number"?Ne(t):t,a=new M(e.quotient).multiply(new M(F.BigInt(1)).subtract(s)).quotient;return G.fromRawAmount(e.currency,a)},oe=function(e,t){try{return G.fromRawAmount(e,F.BigInt(t))}catch{return G.fromRawAmount(e,0)}},dt=(e,t,s)=>{var c,u;if(!((c=s.extraFee)!=null&&c.chargeFeeBy)||!((u=s.extraFee)!=null&&u.feeAmount))return;const a=s.extraFee.chargeFeeBy===E.CURRENCY_IN?e:t,o=new M(Be.parseUnits(s.extraFee.feeAmount,$).toString(),F.exponentiate(F.BigInt(10),F.BigInt($))).divide(je),n=s.extraFee.isInBps?a.multiply(o):Ue.fromRawAmount(a.currency,s.extraFee.feeAmount),r=s.extraFee.feeAmountUsd;return{currency:a.currency,currencyAmount:n,formattedAmount:ee(n.toSignificant($),!1),formattedAmountUsd:r&&r!=="0"?ee(r,!0,4):""}},lt=(e,t)=>t?(e-t)*100/e:NaN,ft=(e,t,s)=>{const a={routeSummary:void 0,routerAddress:D,fromMeta:e.fromMeta},o=e.routeSummary;if(!o||!(o.tokenIn.toLowerCase()===U(t).toLowerCase()&&o.tokenOut.toLowerCase()===U(s).toLowerCase()))return a;const r=oe(t,o.amountIn),c=oe(s,o.amountOut),u=new Fe(r.currency,c.currency,r.quotient,c.quotient);return{routeSummary:{...o,parsedAmountIn:r,parsedAmountOut:c,fee:dt(r,c,o),priceImpact:lt(Number(o.amountInUsd),Number(o.amountOutUsd)),executionPrice:u,routerAddress:D},routerAddress:D,fromMeta:e.fromMeta}};function pt(e,t,s){const{chainId:a}=V(),o=s||a,n=f.useMemo(()=>{const i=[e==null?void 0:e.wrapped.address,t==null?void 0:t.wrapped.address];return i.includes(j[o].wrapped.address)||i.push(j[o].wrapped.address),i.filter(Boolean)},[e,t,o]),{data:r,loading:c,refetch:u}=Oe(n,o),m=r[j[o].wrapped.address],p=f.useMemo(()=>{if(!e||!t)return;const i=r[e==null?void 0:e.wrapped.address],d=r[t==null?void 0:t.wrapped.address];if(!(!i||!d))return{priceUsdIn:i,priceUsdOut:d,marketRate:i/d,invertRate:d/i,nativePriceUsd:m}},[r,e,t,m]);return{loading:c,tradeInfo:p,refetch:u}}function At(e,t,s){const{loading:a,tradeInfo:o}=pt(e,t,s),n=Le(a,100);return{loading:a||n,tradeInfo:o}}const wt=e=>{const{currencyIn:t,currencyOut:s}=e,{fetcher:a,result:o}=ut(e);f.useEffect(()=>{a()},[a]);const n=f.useMemo(()=>{var r,c,u;if(!(!((r=o==null?void 0:o.data)!=null&&r.data)||o.error||!t||!s))return(u=(c=ft(o.data.data,t,s))==null?void 0:c.routeSummary)==null?void 0:u.executionPrice},[t,s,o]);return{fetcher:a,result:n||void 0}},gt=N.div`
  cursor: pointer;
  border-radius: 12px;
  background: ${({theme:e})=>e.buttonBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 12px;
  color: ${({theme:e})=>e.subText};
  padding: 12px;
  :hover {
    filter: brightness(1.2);
  }
`,mt=N(De.div)`
  padding: 8px;
  border-radius: 16px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.36));
  z-index: 2;
  background: ${({theme:e})=>e.tabActive};
  width: max-content;
`,St=N.div`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  color: ${({theme:e})=>e.subText};
  white-space: nowrap;
  &:hover {
    background-color: ${({theme:e})=>e.background};
  }
  font-weight: ${({$selected:e})=>e?"500":"unset"};
`,Ct=N.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  user-select: none;
`,ht=N.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.buttonGray};
  margin-bottom: 8px;
  transition: all 0.1s ease;
  transition-property: background-color, color;
  color: ${({theme:e})=>e.subText};
  :hover {
    background-color: ${({theme:e})=>e.buttonBlack};
    color: ${({theme:e})=>e.text};
  }
  :focus-within {
    background-color: ${({theme:e})=>e.buttonBlack};
    color: ${({theme:e})=>e.text};
  }
  input {
    width: 100%;
    padding-inline-start: 40px;
    line-height: 32px;
    color: ${({theme:e})=>e.text};
  }
`,P=e=>e?typeof e!="object"?e:e.value??"":"",re=e=>e?typeof e!="object"?e:e.label||e.value:"",yt=[0,2];function Et({options:e=[],activeRender:t,optionRender:s,style:a={},menuStyle:o={},optionStyle:n={},onChange:r,value:c,className:u,forceMenuPlacementTop:m=!1,arrowColor:p,dropdownRender:i,onHideMenu:d,withSearch:S,placement:h="bottom"}){const[b,y]=f.useState(P(e==null?void 0:e[0])),[w,x]=f.useState(!1),[T,k]=f.useState(""),[v]=f.useState(m);f.useEffect(()=>{var C;const g=(C=e.find(_=>P(_)===c))==null?void 0:C.value;y(g||P(e==null?void 0:e[0]))},[c,e]);const A=f.useRef(null);$e(A,()=>{x(!1),d==null||d()});const R=e.find(g=>P(g)===b),B=()=>e.filter(g=>{var C;return S?(C=g.label)==null?void 0:C.toString().toLowerCase().includes(T.toLowerCase()):!0}).map(g=>{const C=P(g),_=z=>{var K;z.stopPropagation(),z.preventDefault(),x(!1),k(""),g.onSelect?(K=g.onSelect)==null||K.call(g):(y(C),r==null||r(C))};return l.jsx(St,{role:"button",$selected:C===c||C===P(R),onClick:_,style:n,children:s?s(g):re(g)},C)}),[L,I]=f.useState(null),{styles:O}=Ge(A.current,L,{placement:h,strategy:"fixed",modifiers:[{name:"offset",options:{offset:yt}}]});return l.jsxs(gt,{ref:A,role:"button",onClick:()=>{x(g=>!g)},style:a,className:u,children:[l.jsx(Ct,{children:t?t(R):re(R)}),l.jsx(Me,{rotate:w,color:p}),l.jsx(We,{children:w&&l.jsx(Ve,{children:l.jsx("div",{ref:I,style:{...O.popper,...v?{bottom:40,top:"unset"}:{},zIndex:qe.POPOVER_CONTAINER},children:l.jsxs(mt,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.1},style:o,children:[S&&l.jsxs(ht,{onClick:g=>g.stopPropagation(),children:[l.jsx("span",{style:{position:"absolute",left:"8px"},children:l.jsx(ze,{id:"search"})}),l.jsx("input",{placeholder:Ke._({id:"YIix5Y"}),style:{background:"transparent",outline:"none",border:"none"},value:T,onChange:g=>k(g.target.value)})]}),l.jsx("div",{children:i?i(B()):B()})]})})})})]})}const vt=N(Et)``;function Rt({price:e,label:t,icon:s,style:a={},color:o}){const n=Ye(),[r,c]=f.useState(!1);let u;try{u=Je(r?e==null?void 0:e.invert():e,{fractionDigits:4})}catch{}const m=!!(e!=null&&e.baseCurrency&&(e!=null&&e.quoteCurrency)&&u),p=te(e==null?void 0:e.quoteCurrency),i=te(e==null?void 0:e.baseCurrency),d=r?`1 ${p==null?void 0:p.symbol} = ${u} ${i==null?void 0:i.symbol}`:`1 ${i==null?void 0:i.symbol} = ${u} ${p==null?void 0:p.symbol}`;return l.jsx(se,{fontWeight:500,fontSize:12,color:o||n.subText,style:{alignItems:"center",display:"flex",cursor:"pointer",...a},onClick:()=>c(!r),height:"22px",children:m?l.jsxs(l.Fragment,{children:[t&&l.jsxs(l.Fragment,{children:[t," "]})," ",l.jsx(se,{color:o,children:d}),l.jsx(He,{children:s||l.jsx(Xe,{size:12,color:o})})]}):l.jsx(Qe,{children:l.jsx(Ze,{id:"DCeSWE"})})})}export{E as C,vt as S,Rt as T,At as a,et as b,it as c,lt as d,ut as e,wt as f,Tt as m,ft as p,oe as t,xt as u};
