import{u as W,f as ce,dc as ie,kx as ue,ax as de,ay as z,ar as re,aw as K,a5 as le,dn as fe,av as pe,v as ge,ky as me,r as f,dr as J,dx as V,kz as Se,kA as Ce,au as ne,bm as j,kB as he,dv as ye,kC as Ee,kD as ae,kE as H,kF as Q,cS as be,cT as xe,dy as X,eO as Ae,kG as Te,kH as we,S as ve,dA as Ie,kI as Re,jY as ke,kJ as _e,P as D,ag as F,am as Pe,dT as M,dZ as Ne,$ as Fe,dw as $,dS as Be,af as je,dt as Z,ej as Ue,cJ as Le,s as N,jL as Oe,f1 as $e,kK as De,j as l,cz as Me,jO as Ge,kL as We,aT as Ve,kM as Ye,g as qe,k as ze,_ as Ke,eA as ee,T as te,bw as Je,bx as He,dW as Qe,d as Xe}from"./index-e995caac.js";const bt=(e,t,s,a)=>{var A;const{chainId:o}=W(),n=a||o,r=ce(),c=(e==null?void 0:e.chainId)===n?e:void 0,u=(t==null?void 0:t.chainId)===n?t:void 0,{pathname:m}=ie(),p=ue(r,n,m.startsWith(s)),i=n?((A=de[n])==null?void 0:A.address)??"":"",d=p[z.INPUT].currencyId,S=p[z.OUTPUT].currencyId||i||"",h=r.inputCurrency?d:c||d;let b=r.outputCurrency?S:u||S;const y=n?re[n].symbol:"";y&&b===y&&h===y&&(b=i);const w=K(h&&typeof h=="object"?"":h,n)??c,x=K(b&&typeof b=="object"?"":b,n)??u;return{inputCurrency:w,outputCurrency:x}};var E;(function(e){e.CURRENCY_IN="currency_in",e.CURRENCY_OUT="currency_out",e.NONE=""})(E||(E={}));const Ze=()=>{var y,w,x,A,R,v;const[e]=le();let t=e.get("feeAmount")||"";t&&+t>J&&(t=J.toString());const s=e.get("clientId")||"",a=e.get("chargeFeeBy")||E.NONE,n=(e.get("preferredFeeTokens")||"").split(",").filter(T=>fe(T)).map(T=>T.toLowerCase()),r=e.get("chainId"),c=r&&pe.includes(+r)?+r:ge.MAINNET,u=re[c],m=((y=e.get("inputCurrency"))==null?void 0:y.toLowerCase())===((w=u.symbol)==null?void 0:w.toLowerCase())?u.wrapped.address.toLowerCase():(x=e.get("inputCurrency"))==null?void 0:x.toLowerCase(),p=((A=e.get("outputCurrency"))==null?void 0:A.toLowerCase())===((R=u.symbol)==null?void 0:R.toLowerCase())?u.wrapped.address.toLowerCase():(v=e.get("outputCurrency"))==null?void 0:v.toLowerCase();let i=E.NONE;n!=null&&n.includes(m)?i=E.CURRENCY_IN:n!=null&&n.includes(p)?i=E.CURRENCY_OUT:i=a;const d=me(e.get("enableTip")||""),S=e.get("isInBps")||"",h=e.get("feeReceiver")||"";return f.useMemo(()=>t&&i&&(d||S)&&h?{feeAmount:t,chargeFeeBy:i,enableTip:d,isInBps:d?"1":S,feeReceiver:h,clientId:s}:null,[t,i,d,S,h,s])},G="tokenScores",et=(e,t)=>{const s=localStorage.getItem(G)||"";try{return JSON.parse(s)[e][t]}catch{return}},tt=(e,t,s)=>{const a=localStorage.getItem(G)||"",o=Math.floor(Date.now()/1e3);let n;try{n=JSON.parse(a)}catch{n={}}(!n||typeof n!="object")&&(n={}),n[e]||(n[e]={}),n[e][t]={score:s,savedAt:o},n[e][t.toLowerCase()]={score:s,savedAt:o},localStorage.setItem(G,JSON.stringify(n))},st=(e,t,s)=>H[e].includes(t)&&H[e].includes(s),ot=(e,t,s)=>{const a=Q[e].includes(t),o=Q[e].includes(s);return a===o?void 0:{token:a?t:s,feeBips:ae}},rt=()=>{const{isEnableAuthenAggregator:e}=V(),[t]=Se.useLazyGetTokenScoreQuery(),s=f.useCallback(async(r,c)=>{var S;const u=Math.floor(Date.now()/1e3),{score:m,savedAt:p}=et(r,c)||{};if(m&&p&&u-p<Ce)return m;if(c===ne||c===j[r].address)return;const{data:i,isError:d}=await t({params:{chainId:r,tokenAddress:c},authentication:e});if(!(d||!((S=i==null?void 0:i.data)!=null&&S.score)))return tt(r,c,i.data.score),i.data.score},[e,t]),a=f.useCallback(async(r,c)=>{try{const u=await Promise.race([s(r,c),he(1e3)]);return u||void 0}catch(u){console.error(u);return}},[s]),o=f.useCallback((r,c,u)=>Promise.all([a(r,c),a(r,u)]),[a]);return f.useCallback(async(r,c,u)=>{if(!ye.includes(r))return;const m=ot(r,c,u);if(m)return m;const i=st(r,c,u)?Ee:ae,[d,S]=await o(r,c,u);return!d&&!S?{token:c,feeBips:i}:!d||!S?d?{token:c,feeBips:i}:{token:u,feeBips:i}:{token:d>S?c:u,feeBips:i}},[o])},nt=()=>{const e=be(),[t]=xe(),s=e==null?void 0:e.filter(o=>!t.includes(o.id)).map(o=>o.id);return(s==null?void 0:s.length)===(e==null?void 0:e.length)?"":(s==null?void 0:s.join(",").replace("kyberswapv1","kyberswap,kyberswap-static"))||""},U=e=>e.isNative?ne:e.wrapped.address,at=(e,t,s)=>{if(!e)return{feeAmount:"",chargeFeeBy:E.NONE,isInBps:"",feeReceiver:""};const a=e.token===t?E.CURRENCY_IN:e.token===s?E.CURRENCY_OUT:E.NONE;return!a||!e.feeBips?{feeAmount:"",chargeFeeBy:E.NONE,isInBps:"",feeReceiver:""}:{feeAmount:String(e.feeBips),chargeFeeBy:a,isInBps:"1",feeReceiver:Re}},ct=()=>{const{aggregatorDomain:e}=V(),{authenticationSuccess:t}=ke();return t?e:_e},it=e=>{const{isEnableAuthenAggregator:t}=V(),{parsedAmount:s,currencyIn:a,currencyOut:o,customChain:n,isProcessingSwap:r,clientId:c}=e,{chainId:u}=W(),m=n||u,p=Ze(),[i,d]=X.useLazyGetRouteQuery(),S=ct(),h=rt(),b=nt(),y=f.useRef(!1),w=f.useMemo(()=>y.current?{...d,data:void 0}:d,[d]),x=Ae();f.useEffect(()=>{s||x(X.util.resetApiState())},[x,s]),f.useEffect(()=>{r||(y.current=!0)},[r]);const A=f.useMemo(()=>Te(async v=>{await i({...v,clientId:c}),y.current=!1},we,{leading:!0}),[i,c]);return{fetcher:f.useCallback(async()=>{var g,C;const v=((g=s==null?void 0:s.quotient)==null?void 0:g.toString())||"";if(!a||!o||!v||!((C=s==null?void 0:s.currency)!=null&&C.equals(a)))return;const T=U(a),I=U(o),B=await h(m,T,I),L=p||at(B,T,I),k={tokenIn:T,tokenOut:I,amountIn:v,includedSources:b,gasInclude:"true",gasPrice:"",...L};Object.keys(k).forEach(_=>{k[_]||delete k[_]});const O=`${S}/${ve[m].aggregatorRoute}${Ie.GET_ROUTE}`;A({url:O,params:k,authentication:t})},[S,m,a,o,b,h,t,s==null?void 0:s.currency,s==null?void 0:s.quotient,A,p]),result:w}},xt=(e,t)=>{const s=typeof t=="number"?Pe(t):t,a=new M(e.quotient).multiply(new M(F.BigInt(1)).subtract(s)).quotient;return D.fromRawAmount(e.currency,a)},se=function(e,t){try{return D.fromRawAmount(e,F.BigInt(t))}catch{return D.fromRawAmount(e,0)}},ut=(e,t,s)=>{var c,u;if(!((c=s.extraFee)!=null&&c.chargeFeeBy)||!((u=s.extraFee)!=null&&u.feeAmount))return;const a=s.extraFee.chargeFeeBy===E.CURRENCY_IN?e:t,o=new M(Fe.parseUnits(s.extraFee.feeAmount,$).toString(),F.exponentiate(F.BigInt(10),F.BigInt($))).divide(Be),n=s.extraFee.isInBps?a.multiply(o):je.fromRawAmount(a.currency,s.extraFee.feeAmount),r=s.extraFee.feeAmountUsd;return{currency:a.currency,currencyAmount:n,formattedAmount:Z(n.toSignificant($),!1),formattedAmountUsd:r&&r!=="0"?Z(r,!0,4):""}},dt=(e,t)=>t?(e-t)*100/e:NaN,lt=(e,t,s)=>{const a={routeSummary:void 0,routerAddress:e.routerAddress,fromMeta:e.fromMeta},o=e.routeSummary;if(!o||!(o.tokenIn.toLowerCase()===U(t).toLowerCase()&&o.tokenOut.toLowerCase()===U(s).toLowerCase()))return a;const r=se(t,o.amountIn),c=se(s,o.amountOut),u=new Ne(r.currency,c.currency,r.quotient,c.quotient);return{routeSummary:{...o,parsedAmountIn:r,parsedAmountOut:c,fee:ut(r,c,o),priceImpact:dt(Number(o.amountInUsd),Number(o.amountOutUsd)),executionPrice:u,routerAddress:e.routerAddress},routerAddress:e.routerAddress,fromMeta:e.fromMeta}};function ft(e,t,s){const{chainId:a}=W(),o=s||a,n=f.useMemo(()=>{const i=[e==null?void 0:e.wrapped.address,t==null?void 0:t.wrapped.address];return i.includes(j[o].wrapped.address)||i.push(j[o].wrapped.address),i.filter(Boolean)},[e,t,o]),{data:r,loading:c,refetch:u}=Le(n,o),m=r[j[o].wrapped.address],p=f.useMemo(()=>{if(!e||!t)return;const i=r[e==null?void 0:e.wrapped.address],d=r[t==null?void 0:t.wrapped.address];if(!(!i||!d))return{priceUsdIn:i,priceUsdOut:d,marketRate:i/d,invertRate:d/i,nativePriceUsd:m}},[r,e,t,m]);return{loading:c,tradeInfo:p,refetch:u}}function At(e,t,s){const{loading:a,tradeInfo:o}=ft(e,t,s),n=Ue(a,100);return{loading:a||n,tradeInfo:o}}const Tt=e=>{const{currencyIn:t,currencyOut:s}=e,{fetcher:a,result:o}=it(e);f.useEffect(()=>{a()},[a]);const n=f.useMemo(()=>{var r,c,u;if(!(!((r=o==null?void 0:o.data)!=null&&r.data)||o.error||!t||!s))return(u=(c=lt(o.data.data,t,s))==null?void 0:c.routeSummary)==null?void 0:u.executionPrice},[t,s,o]);return{fetcher:a,result:n||void 0}},pt=N.div`
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
`,gt=N(Oe.div)`
  padding: 8px;
  border-radius: 16px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.36));
  z-index: 2;
  background: ${({theme:e})=>e.tabActive};
  width: max-content;
`,mt=N.div`
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
`,St=N.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  user-select: none;
`,Ct=N.div`
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
`,P=e=>e?typeof e!="object"?e:e.value??"":"",oe=e=>e?typeof e!="object"?e:e.label||e.value:"",ht=[0,2];function yt({options:e=[],activeRender:t,optionRender:s,style:a={},menuStyle:o={},optionStyle:n={},onChange:r,value:c,className:u,forceMenuPlacementTop:m=!1,arrowColor:p,dropdownRender:i,onHideMenu:d,withSearch:S,placement:h="bottom"}){const[b,y]=f.useState(P(e==null?void 0:e[0])),[w,x]=f.useState(!1),[A,R]=f.useState(""),[v]=f.useState(m);f.useEffect(()=>{var C;const g=(C=e.find(_=>P(_)===c))==null?void 0:C.value;y(g||P(e==null?void 0:e[0]))},[c,e]);const T=f.useRef(null);$e(T,()=>{x(!1),d==null||d()});const I=e.find(g=>P(g)===b),B=()=>e.filter(g=>{var C;return S?(C=g.label)==null?void 0:C.toString().toLowerCase().includes(A.toLowerCase()):!0}).map(g=>{const C=P(g),_=Y=>{var q;Y.stopPropagation(),Y.preventDefault(),x(!1),R(""),g.onSelect?(q=g.onSelect)==null||q.call(g):(y(C),r==null||r(C))};return l.jsx(mt,{role:"button",$selected:C===c||C===P(I),onClick:_,style:n,children:s?s(g):oe(g)},C)}),[L,k]=f.useState(null),{styles:O}=De(T.current,L,{placement:h,strategy:"fixed",modifiers:[{name:"offset",options:{offset:ht}}]});return l.jsxs(pt,{ref:T,role:"button",onClick:()=>{x(g=>!g)},style:a,className:u,children:[l.jsx(St,{children:t?t(I):oe(I)}),l.jsx(Me,{rotate:w,color:p}),l.jsx(Ge,{children:w&&l.jsx(We,{children:l.jsx("div",{ref:k,style:{...O.popper,...v?{bottom:40,top:"unset"}:{},zIndex:Ve.POPOVER_CONTAINER},children:l.jsxs(gt,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.1},style:o,children:[S&&l.jsxs(Ct,{onClick:g=>g.stopPropagation(),children:[l.jsx("span",{style:{position:"absolute",left:"8px"},children:l.jsx(Ye,{id:"search"})}),l.jsx("input",{placeholder:qe._({id:"YIix5Y"}),style:{background:"transparent",outline:"none",border:"none"},value:A,onChange:g=>R(g.target.value)})]}),l.jsx("div",{children:i?i(B()):B()})]})})})})]})}const wt=N(yt)``;function vt({price:e,label:t,icon:s,style:a={},color:o}){const n=ze(),[r,c]=f.useState(!1);let u;try{u=Ke(r?e==null?void 0:e.invert():e,{fractionDigits:4})}catch{}const m=!!(e!=null&&e.baseCurrency&&(e!=null&&e.quoteCurrency)&&u),p=ee(e==null?void 0:e.quoteCurrency),i=ee(e==null?void 0:e.baseCurrency),d=r?`1 ${p==null?void 0:p.symbol} = ${u} ${i==null?void 0:i.symbol}`:`1 ${i==null?void 0:i.symbol} = ${u} ${p==null?void 0:p.symbol}`;return l.jsx(te,{fontWeight:500,fontSize:12,color:o||n.subText,style:{alignItems:"center",display:"flex",cursor:"pointer",...a},onClick:()=>c(!r),height:"22px",children:m?l.jsxs(l.Fragment,{children:[t&&l.jsxs(l.Fragment,{children:[t," "]})," ",l.jsx(te,{color:o,children:d}),l.jsx(Je,{children:s||l.jsx(He,{size:12,color:o})})]}):l.jsx(Qe,{children:l.jsx(Xe,{id:"DCeSWE"})})})}export{E as C,wt as S,vt as T,At as a,Ze as b,ct as c,dt as d,it as e,Tt as f,xt as m,lt as p,se as t,bt as u};
