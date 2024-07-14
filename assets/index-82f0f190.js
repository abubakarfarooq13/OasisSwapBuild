import{r as j,s as p,a1 as X,k as P,fI as Q,fr as D,iw as G,j as e,I as q,C as J,bk as ee,T as o,d as x,hS as K,X as te,b7 as se,ix as c,aR as ne,x as V,u as ie,a as re,hQ as oe,v as l,iy as ae,iz as le,aV as xe,f as ce,az as pe,cH as de,F as i,B as T,i6 as y,d5 as A,iA as he,iB as ge,iC as ue,iD as me,a_ as L,b as E,U as $,cC as fe,fc as je,bg as we,bx as be,R as Ce}from"./index-c19adf44.js";import{F as Te,K as Se}from"./index-79e98a02.js";import{c as ve,a as ke}from"./wallets-dbc0e0b9.js";import{D as ye}from"./Deposit-2377dab4.js";import"./knc-graphic-684a65b2.js";import"./styleds-30c1b0c4.js";import"./about_background-625b4bf1.js";const Ae="/assets/apple-pay-e3bd9714.svg",Le="/assets/bank-transfer-7243dfc3.svg",Ie="/assets/buy-now-961a26dc.png",De="/assets/google-pay-ae63ea0a.svg",We="/assets/intro-fe2b137d.png",Me="/assets/master-card-eabd36bd.svg",ze="/assets/visa-a9cf74d9.svg",He="/assets/oasis-logo-3d5448f9.png",Ne=s=>j.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},j.createElement("path",{d:"M2.04004 32.2618V43.1158H18.558V40.7098H4.44604V32.2618H2.04004ZM43.554 32.2618V40.7098H29.442V43.1158H45.96V32.2618H43.554ZM18.582 15.7378V32.2558H29.436V30.0838H20.994V15.7378H18.582ZM2.04004 4.88379V15.7378H4.44604V7.28979H18.558V4.88379H2.04004ZM29.442 4.88379V7.28979H43.554V15.7378H45.96V4.88379H29.442Z",fill:"#ffffff"})),Be=p.a`
  display: flex;
  gap: 8px;
  border-radius: 999px;
  padding: 12px 16px;
  color: ${({theme:s})=>s.subText};
  font-size: 16px;
  font-weight: 500;
  background: ${({theme:s})=>s.buttonBlack};
  line-height: 24px;
  text-decoration: none;

  flex-basis: calc((100% - 20px) / 2); // 20px gap
  min-width: 170px;
  box-sizing: border-box;
  ${({theme:s})=>s.mediaWidth.upToExtraSmall`
    flex-basis: 100%;
  `}

  :hover {
    background: ${({theme:s})=>X(s.buttonBlack,.6)};
  }
`;function Ve(){const s=P(),t=Q(D.DOWNLOAD_WALLET),n=G(D.DOWNLOAD_WALLET);return e.jsx(q,{isOpen:t,onDismiss:n,maxWidth:"600px",children:e.jsxs(J,{width:"100%",padding:"30px 24px",overflowY:"scroll",children:[e.jsxs(ee,{children:[e.jsx(o,{fontSize:"20px",fontWeight:"500",children:e.jsx(x,{id:"a8Koeo"})}),e.jsx(K,{onClick:n,style:{lineHeight:0},children:e.jsx(te,{size:24,color:s.text})})]}),e.jsx(se,{gap:"20px",marginTop:"24px",flexWrap:"wrap",children:Object.values(ve).filter(a=>a.installLink).map(a=>e.jsxs(Be,{href:a.installLink,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(c,{width:"24px",maxHeight:"24px",src:a.icon}),a.name]},a.installLink))})]})})}function Ee({size:s=20,color:t,style:n}){return e.jsx("svg",{width:s,height:s,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:n,children:e.jsx("path",{d:"M5.83325 14.9998C4.91658 14.9998 4.17492 15.7498 4.17492 16.6665C4.17492 17.5832 4.91658 18.3332 5.83325 18.3332C6.74992 18.3332 7.49992 17.5832 7.49992 16.6665C7.49992 15.7498 6.74992 14.9998 5.83325 14.9998ZM0.833252 2.49984C0.833252 2.95817 1.20825 3.33317 1.66659 3.33317H2.49992L5.49992 9.65817L4.37492 11.6915C3.76659 12.8082 4.56659 14.1665 5.83325 14.1665H14.9999C15.4583 14.1665 15.8333 13.7915 15.8333 13.3332C15.8333 12.8748 15.4583 12.4998 14.9999 12.4998H5.83325L6.74992 10.8332H12.9583C13.5833 10.8332 14.1333 10.4915 14.4166 9.97484L17.3999 4.5665C17.7083 4.0165 17.3083 3.33317 16.6749 3.33317H4.34159L3.78325 2.1415C3.64992 1.84984 3.34992 1.6665 3.03325 1.6665H1.66659C1.20825 1.6665 0.833252 2.0415 0.833252 2.49984ZM14.1666 14.9998C13.2499 14.9998 12.5083 15.7498 12.5083 16.6665C12.5083 17.5832 13.2499 18.3332 14.1666 18.3332C15.0833 18.3332 15.8333 17.5832 15.8333 16.6665C15.8333 15.7498 15.0833 14.9998 14.1666 14.9998Z",fill:t||"currentColor"})})}const $e=p(Ne)`
  path {
    fill: currentColor;
  }
`,O=p.div`
  background: radial-gradient(88.77% 152.19% at 12.8% -49.11%, #237c71 0%, #251c72 31%, #0f054c 100%);
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
`,W=p.div`
  max-width: 1200px;
  padding: 100px 24px 48px;
  margin: auto;
  display: flex;
  align-items: center;

  ${({theme:s})=>s.mediaWidth.upToMedium`
    flex-direction: column-reverse;
    padding: 44px 16px 30px;
  `}
`,Oe=p.div`
  cursor: pointer;
  border-radius: 50%;
  background: ${({theme:s,active:t})=>t?s.primary:"transparent"};
  border: 1px solid ${({theme:s,active:t})=>t?s.primary:s.border};
  color: ${({theme:s,active:t})=>t?s.textReverse:s.subText};
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`,Re=p.div`
  width: ${({direction:s})=>s==="vertical"?"1px":"16px"};
  height: ${({direction:s})=>s==="vertical"?"16px":"1px"};
  background: ${({theme:s})=>s.border};
`,_e=ne`
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, 10px);
  }
  40% {
    transform: translate(0, 0);
  }
`,I=p(K)`
  animation: ${_e} 1.5s infinite;
`,R=p.div`
  background: ${({theme:s})=>s.buttonBlack};
  width: 100%;
  min-height: 100vh;
  display: flex;
`,_=p(W)`
  padding: 120px 24px 48px;
  overflow-x: hidden;

  ${({theme:s})=>s.mediaWidth.upToMedium`
    flex-direction: column;
    padding: 80px 16px 30px;
  `}
`,Pe=p.div`
  max-width: calc(100vw - 32px);
  gap: 4px;
  display: flex;
  border-radius: 999px;
  padding: 14px 18px;
  color: ${({theme:s})=>s.subText};
  font-size: 12px;
  background: ${({theme:s})=>s.buttonBlack};
  margin-top: 16px;
  width: fit-content;
`,u=({currentStep:s=1,direction:t="vertical",onStepClick:n})=>{const a=[1,2,3,4];return e.jsx(i,{width:"fit-content",flexDirection:t==="vertical"?"column":"row",sx:{gap:"4px"},alignItems:"center",justifyContent:"center",children:a.map((w,S)=>e.jsxs(Ce.Fragment,{children:[e.jsx(Oe,{role:"button",active:s===w,onClick:()=>n(w)}),S!==a.length-1&&e.jsx(Re,{direction:t})]},w))})};function Ge(){const s=P(),t=V("(max-width: 992px)"),n=V("(max-width: 768px)"),{account:a,chainId:w,networkInfo:S}=ie(),U=re(),F=oe(D.DOWNLOAD_WALLET),M=j.useRef(null),h=j.useRef(null),g=j.useRef(null),b=j.useRef(null),v={[l.MAINNET]:"ethereum",[l.MATIC]:"polygon",[l.ARBITRUM]:"arbitrum",[l.OPTIMISM]:"optimism",[l.BSCMAINNET]:"bsc",[l.AVAXMAINNET]:"avaxcchain",[l.FANTOM]:"fantom",[l.ZKSYNC]:null,[l.CRONOS]:null,[l.GÖRLI]:null,[l.MUMBAI]:null,[l.BSCTESTNET]:null,[l.AVAXTESTNET]:null,[l.BTTC]:null},Y=["AVAX","USDC","ETH","USDS","BNB","BUSD","DAI","USDT","WBTC","FTM","MATIC","WETH","VLX","SOL"],Z=window.location.hostname.includes("localhost")?"https://kyberswap.com/swap":window.location.origin+"/swap",z=`${ae}?apiKey=${le}&cryptoCurrencyList=${Y.join(",")}&networks=${Object.values(v).filter(Boolean).join(",")}${a?`&walletAddress=${a}`:""}&defaultNetwork=${v[w]||v[l.MAINNET]}&excludeFiatCurrencies=SGD&redirectURL=${Z}`,{mixpanelHandler:k}=xe(),d=r=>{var m,f,C,B;switch(r){case 1:(m=M.current)==null||m.scrollIntoView({behavior:"smooth"});break;case 2:(f=h.current)==null||f.scrollIntoView({behavior:"smooth"});break;case 3:(C=g.current)==null||C.scrollIntoView({behavior:"smooth"});break;case 4:(B=b.current)==null||B.scrollIntoView({behavior:"smooth"});break}},H=ce(),N=pe();return j.useEffect(()=>{setTimeout(()=>{const{step:r,...m}=H,f=Number(r);isNaN(f)||(d(f),N({search:de(m)},{replace:!0}))},500)},[H,N]),e.jsxs(e.Fragment,{children:[e.jsx(Ve,{}),e.jsx(O,{ref:M,children:e.jsxs(W,{children:[!t&&e.jsx(u,{currentStep:1,direction:"vertical",onStepClick:d}),e.jsxs(i,{flexDirection:"column",marginLeft:t?0:"68px",children:[e.jsxs(i,{flex:1,alignItems:"center",flexDirection:t?"column-reverse":"row","data-aos":"fade-right",children:[e.jsxs(i,{flexDirection:"column",flex:1,children:[e.jsx(o,{color:"white",fontSize:t?"28px":"44px",lineHeight:t?"32px":"60px",marginTop:t?"40px":void 0,children:e.jsx(x,{id:"OU9l+0"})}),e.jsx(o,{color:"#A7B6BD",fontSize:t?"16px":"20px",lineHeight:t?"24px":"28px",marginTop:t?"40px":"48px",children:"You can now seamlessly buy 100+ cryptocurrencies on over 10+ blockchains using a wide range of payment options!"}),e.jsxs(i,{sx:{gap:"28px"},marginTop:"24px",children:[e.jsx(c,{src:ze,width:n?"36px":"64px"}),e.jsx(c,{src:Me,width:n?"36px":"64px"}),e.jsx(c,{src:De,width:n?"36px":"64px"}),e.jsx(c,{src:Ae,width:n?"36px":"64px"}),e.jsx(c,{src:Le,width:n?"36px":"64px"})]}),e.jsx(T,{margin:t?"40px 0 0":"48px 0 0",width:n?"100%":"50%",onClick:()=>{var r;return(r=h==null?void 0:h.current)==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:e.jsx(o,{fontSize:"14px",marginLeft:"8px",children:e.jsx(x,{id:"c3b0B0"})})})]}),e.jsx(i,{sx:{flex:1,marginLeft:n?"auto":"48px",maxWidth:t?"252px":"496px"},children:e.jsx(c,{src:We,"data-aos":"zoom-in-left"})})]}),e.jsxs(i,{justifyContent:"space-between",marginTop:t?"42px":"64px",children:[e.jsx(I,{onClick:()=>{var r;(r=h==null?void 0:h.current)==null||r.scrollIntoView({behavior:"smooth"})},children:t?e.jsx(y,{size:36,color:s.subText}):e.jsx(A,{size:48,color:s.subText})}),t&&e.jsx(u,{direction:"horizontal",currentStep:1,onStepClick:d})]})]})]})}),e.jsx(R,{ref:h,children:e.jsx(_,{children:e.jsxs(i,{flexDirection:"column",children:[e.jsxs(i,{alignItems:"center",children:[!t&&e.jsxs(e.Fragment,{children:[e.jsx(u,{direction:"vertical",currentStep:2,onStepClick:d}),e.jsx(c,{src:He,marginLeft:"68px",maxWidth:"300px","data-aos":"zoom-in-right",flex:1})]}),e.jsxs(i,{flexDirection:"column",marginLeft:t?0:"48px","data-aos":"fade-left",flex:1,children:[e.jsx(o,{color:s.primary,fontSize:"16px",fontWeight:"500",children:e.jsx(x,{id:"YMKwLe"})}),e.jsx(o,{fontSize:t?"28px":"36px",fontWeight:"500",marginTop:"8px",children:e.jsx(x,{id:"IOESc+"})}),e.jsx(o,{color:s.subText,lineHeight:1.5,marginTop:t?"40px":"48px",children:e.jsx(x,{id:"BMI/vY",components:{0:e.jsx("br",{}),1:e.jsx("br",{})}})}),e.jsxs(i,{sx:{gap:t?"28px":"40px"},marginTop:"28px",children:[e.jsx(c,{src:he,width:n?"36px":"48px"}),e.jsx(c,{src:ke,width:n?"36px":"48px"}),e.jsx(c,{src:ge,width:n?"36px":"48px"}),e.jsx(ue,{width:n?"36px":"48px"}),e.jsx($e,{width:n?"36px":"48px"}),e.jsx(me,{width:n?"36px":"48px",height:"48px"})]}),e.jsxs(i,{margin:t?"40px 0 0":"48px 0 0",sx:{gap:"24px"},children:[e.jsxs(T,{style:{flex:n?2:1},width:n?"100%":"50%",padding:"10px",onClick:()=>{k(L.TRANSAK_DOWNLOAD_WALLET_CLICKED),F()},children:[e.jsx(ye,{width:24,height:24}),e.jsx(o,{fontSize:"14px",marginLeft:"8px",children:e.jsx(x,{id:"mQepJe"})})]}),e.jsx(E,{style:{flex:1},onClick:()=>{var r;(r=g==null?void 0:g.current)==null||r.scrollIntoView({behavior:"smooth"})},children:e.jsx(o,{fontSize:"14px",children:e.jsx(x,{id:"AEzIhh",values:{0:t?" ":"Already have a wallet? "}})})})]})]})]}),e.jsxs(i,{children:[!t&&e.jsx(i,{flex:1,marginLeft:"68px"}),e.jsxs(i,{justifyContent:"space-between",marginTop:t?"42px":"64px",flex:1,marginLeft:t?0:"48px",children:[e.jsx(I,{onClick:()=>{var r;(r=g==null?void 0:g.current)==null||r.scrollIntoView({behavior:"smooth"})},children:t?e.jsx(y,{size:36,color:s.subText}):e.jsx(A,{size:48,color:s.subText})}),t&&e.jsx(u,{direction:"horizontal",currentStep:2,onStepClick:d})]})]})]})})}),e.jsx(O,{ref:g,children:e.jsxs(W,{children:[!t&&e.jsx(u,{currentStep:3,direction:"vertical",onStepClick:d}),e.jsxs(i,{flexDirection:"column",marginLeft:t?0:"68px",children:[e.jsxs(i,{flex:1,alignItems:"center",flexDirection:t?"column-reverse":"row","data-aos":"fade-right",children:[e.jsxs(i,{flexDirection:"column",flex:1,children:[e.jsx(o,{color:s.primary,fontSize:"16px",fontWeight:"500",children:e.jsx(x,{id:"ddKiWP"})}),e.jsx(o,{color:"white",fontSize:t?"28px":"44px",lineHeight:t?"32px":"60px",children:e.jsx(x,{id:"8QIs3c"})}),e.jsxs(o,{color:"#A7B6BD",lineHeight:1.5,marginTop:t?"40px":"48px",children:['Note: Clicking "Buy Crypto" will bring you to a third party website, owned and operated by an independent party over which OasisSwap has no control ("',e.jsx($,{href:"https://app.transak.com/",children:"Third Party Website"}),'").',e.jsx("br",{}),e.jsx("br",{}),"For support, please contact Transak"," ",e.jsx($,{href:"https://support.transak.com/",children:"here"}),"."]}),e.jsx(o,{color:"#A7B6BD",marginTop:"24px",children:"Your wallet address"}),a?e.jsxs(Pe,{children:[e.jsx(o,{flex:1,sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a}),e.jsx(fe,{toCopy:a})]}):e.jsx(E,{margin:"16px 0 0",width:n?"100%":"50%",onClick:U,children:"Connect"}),e.jsxs(T,{id:"buy-crypto-button",margin:t?"40px 0 0":"44px 0 0",width:n?"100%":"50%",as:"a",target:"popup",href:z,onClick:()=>{k(L.TRANSAK_BUY_CRYPTO_CLICKED);const r=500,m=625,f=window.innerWidth/2-r/2,C=window.innerHeight/2-m/2;return window.open(z,"popup",`width=${r},height=${m},top=${C},left=${f}`),!1},children:[e.jsx(Ee,{}),e.jsx(o,{fontSize:"14px",marginLeft:"8px",children:e.jsx(x,{id:"8QIs3c"})})]})]}),e.jsx(i,{sx:{flex:1,marginLeft:n?"auto":"48px",maxWidth:t?"252px":"496px"},children:e.jsx(c,{src:Ie,"data-aos":"zoom-in-left"})})]}),e.jsxs(i,{justifyContent:"space-between",marginTop:t?"42px":"64px",children:[e.jsx(I,{onClick:()=>{var r;(r=b==null?void 0:b.current)==null||r.scrollIntoView({behavior:"smooth"})},children:t?e.jsx(y,{size:36,color:s.subText}):e.jsx(A,{size:48,color:s.subText})}),t&&e.jsx(u,{direction:"horizontal",currentStep:3,onStepClick:d})]})]})]})}),e.jsx(R,{children:e.jsx(_,{ref:b,children:e.jsxs(i,{flexDirection:"column",children:[e.jsxs(i,{alignItems:"center",children:[!t&&e.jsxs(e.Fragment,{children:[e.jsx(u,{direction:"vertical",currentStep:4,onStepClick:d}),e.jsx(i,{children:e.jsx(c,{src:Te,marginLeft:"68px",maxWidth:"496px","data-aos":"zoom-in-right",flex:1})})]}),e.jsxs(i,{flexDirection:"column",marginLeft:t?0:"48px","data-aos":"fade-left",flex:1,children:[e.jsx(o,{color:s.primary,fontSize:"16px",fontWeight:"500",children:e.jsx(x,{id:"UbAPhF"})}),e.jsx(o,{fontSize:t?"28px":"36px",fontWeight:"500",marginTop:"8px",children:e.jsx(x,{id:"rUrbNm"})}),e.jsx(o,{color:s.subText,lineHeight:1.5,marginTop:t?"40px":"48px",children:e.jsx(x,{id:"Juhiqp"})}),e.jsx(Se,{}),e.jsxs(T,{margin:t?"40px 0 0":"48px 0 0",width:n?"100%":"50%",padding:"10px",as:je,to:we.SWAP+"/"+S.route,onClick:()=>{k(L.TRANSAK_SWAP_NOW_CLICKED)},children:[e.jsx(be,{size:24}),e.jsx(o,{fontSize:"14px",marginLeft:"8px",children:e.jsx(x,{id:"zbNrIy"})})]})]})]}),t&&e.jsx(i,{marginTop:"40px",justifyContent:"flex-end",children:e.jsx(u,{direction:"horizontal",currentStep:4,onStepClick:d})})]})})})]})}export{Ge as default};
