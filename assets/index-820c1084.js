import{r as h,j as e,bn as rt,Z as Re,s as l,bo as ie,bp as A,k as V,fK as we,ft as H,hS as J,I as ze,T as s,d as o,F as Ee,X as fe,g as d,e as lt,B as w,aS as oe,f6 as Ge,hY as me,ed as F,f1 as ce,W as He,c8 as Ke,ge as ye,v as C,hZ as Le,u as De,a as Fe,h_ as Oe,cH as Ue,ap as We,$ as S,h$ as be,U as ge,d7 as ct,bc as ee,aq as y,b as te,i0 as Pe,i1 as dt,dD as xt,aX as Be,i2 as pt,b0 as O,bz as ht,Y as de,aa as Ze,i3 as gt,a8 as ut,dk as jt,cj as ft,bE as mt,bG as bt,hL as se,fe as Ct,ec as Ye,az as kt,dN as St,cS as xe,dS as pe,bl as he,i4 as At,cy as Tt}from"./index-3260f031.js";import{u as Xe,S as yt}from"./useParsedAmount-50535ad3.js";import{b as ve}from"./about_background-625b4bf1.js";import{K as ue}from"./kncLogo-4b99e909.js";import{H as vt,Y as Nt}from"./YourTransactionsModal-fd1d422f.js";const It="/assets/governance-eb1bb89d.png",Mt="/assets/knc_utility-d6453611.png",Rt="/assets/kyber_crystal-c136f848.png",wt="/assets/kyberdao-9fb41ac2.png",zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTExLTA2VDE4OjI2OjM5KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMS0wOFQwMDoxODozMyswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMS0wOFQwMDoxODozMyswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTgzMzQwNi0wMjEyLTc1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",Et="/assets/stake_vote-22505fe2.png",Gt="/assets/refund1-cfad4b11.svg",Ht="/assets/refund2-72825b93.svg",Kt="/assets/refund3-9c48aefb.svg",Lt=l(ie)`
  & * {
    transition: all ease-in-out 0.3s;
  }
`,Dt=l(A)`
  cursor: pointer;
  z-index: 1;
`,Ft=l.div`
  max-height: 0;
  margin-top: 0;

  ${({$expanded:t})=>t?"opacity:1; max-height:500px;":"opacity:0; max-height:0;"}
  z-index: 0;
`;function Ne({expandedDefault:t=!1,headerContent:c,expandContent:p,backgroundColor:f,border:g,borderRadius:i,padding:r="12px",color:m,style:k,className:I,hasDivider:M=!0,isExpanded:v,onChange:z}){var L;const[n,K]=h.useState(t),b=h.useRef(null),T=(L=b.current)==null?void 0:L.getBoundingClientRect().height,U=()=>{z&&v!==void 0?z(!v):K(j=>!j)},u=v!==void 0?v:n;return e.jsxs(Lt,{style:{backgroundColor:f||"black",border:g||"none",borderRadius:i||"8px",overflow:"hidden",color:m,padding:r,...k},className:I,children:[e.jsxs(Dt,{onClick:U,$expanded:u,style:{backgroundColor:f||"black"},children:[c||"Header"," ",e.jsx(rt,{style:{transform:u?"rotate(180deg)":void 0}})]}),e.jsxs(Ft,{ref:b,$expanded:u,$height:T,children:[M&&e.jsx(Re,{style:{margin:"16px 0",opacity:u?"1":"0"}}),p]})]})}const Ot=l.div`
  padding: 24px;
`,Ut=l.input`
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 10px 12px;
  font-size: 14px;
  ${({theme:t})=>oe`
    background-color: ${t.buttonBlack};
    color: ${t.subText};
  `}
`;function Wt({address:t,isUndelegate:c,delegatedAddress:p,onAddressChange:f,delegateCallback:g}){const i=V(),r=we(H.DELEGATE_CONFIRM),m=J(H.DELEGATE_CONFIRM);return e.jsx(ze,{isOpen:r,onDismiss:m,minHeight:!1,maxHeight:90,maxWidth:500,children:e.jsx(Ot,{children:e.jsxs(ie,{gap:"20px",children:[e.jsxs(A,{children:[e.jsx(s,{fontSize:20,children:c?e.jsx(o,{id:"tSGlKv"}):e.jsx(o,{id:"XbvxUa"})}),e.jsx(Ee,{sx:{cursor:"pointer"},role:"button",onClick:m,children:e.jsx(fe,{onClick:m,size:20,color:i.subText})})]}),e.jsx(s,{fontSize:16,lineHeight:"24px",color:i.subText,children:c?e.jsx(o,{id:"CWj4DA"}):e.jsx(o,{id:"q49F2P",components:{0:e.jsx("span",{style:{color:i.text}})}})}),e.jsx(Ut,{placeholder:d._({id:"mwDgdz"}),value:c?p:t,onChange:k=>f(k.target.value),disabled:!0}),e.jsxs(A,{gap:"24px",children:[e.jsx(lt,{onClick:m,children:e.jsx(s,{fontSize:14,lineHeight:"20px",children:e.jsx(o,{id:"dEgA5A"})})}),e.jsx(w,{onClick:g,children:e.jsx(s,{fontSize:14,lineHeight:"20px",children:e.jsx(o,{id:"7VpPHA"})})})]})]})})})}const Pt="/assets/KNC-6909d2c3.svg",Bt=l.div`
  border-radius: 16px;
  background-color: ${({theme:t})=>t.buttonBlack};
  padding: 12px 16px;
  //width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16));
`;function Ie({value:t,setValue:c,tokenAddress:p,tokenName:f,disabled:g}){const i=V(),r=Ge(p),m=me(),k=h.useMemo(()=>!m||!t?0:(m*parseFloat(t)).toFixed(2),[m,t]);return e.jsxs(Bt,{children:[e.jsxs(A,{children:[e.jsx(F,{gap:"2px",children:!g&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{onClick:()=>c(ce(r.value,r.decimals,r.decimals)),children:"Max"}),e.jsx(ne,{onClick:()=>c(ce(r.value.div(2),r.decimals,r.decimals)),children:"Half"})]})}),e.jsxs(F,{gap:"3px",justify:"flex-end",color:i.subText,children:[e.jsx(He,{})," ",e.jsx(s,{fontSize:12,children:r?ce(r.value,r.decimals):0})]})]}),e.jsxs(A,{children:[e.jsx(Ke,{value:t,onUserInput:c,disabled:g}),e.jsxs("span",{style:{color:i.border,fontSize:"14px",marginRight:"6px"},children:["~$",k]}),e.jsxs(Ve,{children:[ye(p,C.MAINNET)!==""?e.jsx("img",{src:`${ye(p,C.MAINNET)}`,alt:"knc-logo",width:"24px",height:"24px"}):e.jsx("img",{src:Pt,alt:"knc-logo",width:"24px",height:"24px"}),f]})]})]})}const Zt=l.div`
  padding: 24px;
`;function Yt({setPendingText:t,setShowConfirm:c,setAttemptingTxn:p,setTransactionError:f,setTxHash:g}){const i=Le(),r=V(),{chainId:m,account:k}=De(),I=we(H.MIGRATE_KNC),M=J(H.MIGRATE_KNC),v=Fe(),{migrate:z}=Oe(),[n,K]=h.useState("1"),[b,T]=h.useState(""),U=Xe(new Ue(m===C.GÖRLI?C.GÖRLI:C.MAINNET,(i==null?void 0:i.KNCLAddress)||"",18,"KNCL"),n),[u,L]=We(U,i==null?void 0:i.KNCAddress),j=Ge((i==null?void 0:i.KNCLAddress)||"");h.useEffect(()=>{try{S.parseUnits(n,18)}catch{T(d._({id:"5zbbOn"}));return}if(!n||isNaN(parseFloat(n))||parseFloat(n)<=0)T(d._({id:"5zbbOn"}));else if(j.value.gte(S.parseUnits(n,18)))T("");else{T(d._({id:"/N1IUS"}));return}},[n,j==null?void 0:j.value]);const{switchToEthereum:ae}=be(),E=()=>{T(""),ae(d._({id:"y5rS9U"})).then(()=>{try{t(d._({id:"ak4ScU",values:{value:n}})),c(!0),p(!0),M(),z(S.parseUnits(n,18),n).then(N=>{p(!1),g(N)}).catch(N=>{f(N==null?void 0:N.message),p(!1)})}catch(N){T(N)}})};return e.jsx(ze,{isOpen:I,onDismiss:M,minHeight:!1,maxHeight:664,maxWidth:420,children:e.jsx(Zt,{children:e.jsxs(ie,{gap:"20px",children:[e.jsxs(A,{children:[e.jsx(s,{fontSize:20,color:r.text,children:e.jsx(o,{id:"o4SD+T"})}),e.jsx(Ee,{sx:{cursor:"pointer"},role:"button",onClick:M,children:e.jsx(fe,{onClick:M,size:20,color:r.subText})})]}),e.jsx(s,{fontSize:12,lineHeight:"16px",color:r.subText,children:e.jsx(o,{id:"U3Ho1m",components:{0:e.jsx(ge,{href:"https://blog.kyber.network/knc-token-migration-guide-fda08bfe62c2"})}})}),e.jsx(Ie,{value:n,setValue:K,tokenAddress:(i==null?void 0:i.KNCLAddress)||"",tokenName:"KNCL"}),e.jsxs(A,{children:[e.jsx(s,{fontSize:12,color:r.subText,children:"1KNCL = 1KNC"}),e.jsx(F,{style:{height:"44px",width:"44px",borderRadius:"50%",background:r.buttonBlack,padding:"10px"},children:e.jsx(ct,{})})]}),e.jsx(Ie,{value:n,setValue:K,tokenAddress:(i==null?void 0:i.KNCAddress)||"",tokenName:"KNC",disabled:!0}),e.jsx(ee,{gap:"12px",children:k?e.jsxs(e.Fragment,{children:[(u===y.NOT_APPROVED||u===y.PENDING)&&!b&&e.jsx(w,{onClick:()=>L(),disabled:u===y.PENDING,children:u===y.PENDING?"Approving...":"Approve"}),e.jsx(w,{disabled:u!==y.APPROVED||!!b,onClick:E,children:e.jsx(s,{fontSize:14,children:b||e.jsx(o,{id:"y5rS9U"})})})]}):e.jsx(te,{onClick:v,children:e.jsx(o,{id:"iSLIjg"})})})]})})})}var je;(function(t){t.Stake="Stake",t.Unstake="Unstake",t.Delegate="Delegate"})(je||(je={}));const Xt=l.div`
  display: flex;
  flex-direction: column;
  width: 404px;
  order: 4;
  ${({theme:t})=>t.mediaWidth.upToLarge`
    order: 2;
  `}
  ${({theme:t})=>t.mediaWidth.upToXXSmall`
    width: 100vw;
    padding: 0 16px;
  `}
`,Jt=l.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 18px;

  ${({theme:t})=>t.mediaWidth.upToXXSmall`
    gap: inherit;
    justify-content: space-between;
  `}
`,Je=l.div`
  background-color: ${({theme:t})=>t.background};
  border-radius: 20px;
  padding: 16px;
  width: 100%;
`,Me=l.div`
  border-radius: 16px;
  background-color: ${({theme:t})=>t.buttonBlack};
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16));
`,ne=l.button`
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  ${({theme:t})=>oe`
    background-color: ${t.tableHeader};
    color: ${t.subText};
    :hover {
      background-color: ${se(.05,t.tableHeader)};
    }
    :active {
      background-color: ${se(.1,t.tableHeader)};
    }
  `}
`,Vt=l.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &:hover {
    color: ${({theme:t})=>se(.1,t.primary)};
  }
  color: ${({theme:t,$active:c})=>c?t.primary:t.subText};

  ${({theme:t})=>t.mediaWidth.upToXXSmall`
    font-size: 16px;
    line-height: 20px;
    &:last-child {
      margin-left: 0;
    }
  `}
`,Qt=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 16px;
`,_t=l(Je)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,$t=l(Je)`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,qt=l.input`
  background: none;
  border: none;
  outline: none;
  color: ${({theme:t})=>t.text};
  font-size: 14px;
  min-width: 0;
  :disabled {
    color: ${({theme:t})=>t.border};
  }
`,Ve=l.div`
  border-radius: 20px;
  background: ${({theme:t})=>t.background};
  padding: 8px 12px 8px 8px;
  display: flex;
  color: ${({theme:t})=>t.subText};
  gap: 4px;
  font-size: 20px;
`,es=l(Ct)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({theme:t})=>t.subText};
`,ts=l(Ye)`
  justify-content: flex-end;
  gap: 4px;
  cursor: pointer;
  :hover {
    color: ${({theme:t})=>se(.2,t.primary)};
  }
`,ss=l.div`
  font-size: 12px;
  line-height: 16px;
  padding: 4px 6px;
  border-radius: 30px;
  display: flex;
  gap: 4px;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  user-select: none;
  margin-bottom: -8px;
  ${({theme:t})=>oe`
    background-color: ${t.tableHeader};
    color: ${t.subText};
  `}

  > svg:hover {
    filter: brightness(1.2);
  }
`;function ns(){const t=V(),{account:c,chainId:p}=De(),f=Le(),{stakedBalance:g,KNCBalance:i,delegatedAddress:r}=Pe(),{calculateVotingPower:m}=dt(),k=!!r&&r!==c,{stake:I,unstake:M,delegate:v,undelegate:z}=Oe(),[n,K]=h.useState("Stake"),[b,T]=h.useState(""),[U,u]=h.useState(!1),[L,j]=h.useState(!1),[ae,E]=h.useState(""),[N,D]=h.useState(void 0),[x,re]=h.useState("1"),[Ce,W]=h.useState(),Q=h.useRef(!1),[G,R]=h.useState();h.useEffect(()=>{if(![C.MAINNET,C.GÖRLI].includes(p)){R(void 0);return}try{S.parseUnits(x,18)}catch{R(d._({id:"5zbbOn"}));return}!x||isNaN(parseFloat(x))||parseFloat(x)<=0?R(d._({id:"5zbbOn"})):S.parseUnits(x,18).gt(i)&&n==="Stake"||S.parseUnits(x,18).gt(g)&&n==="Unstake"?R(d._({id:"weuhlN"})):n==="Delegate"&&!xt(p,b)?R(d._({id:"mE/G/f"})):n==="Delegate"&&b.toLowerCase()===(c==null?void 0:c.toLowerCase())?R(d._({id:"Jiqirz"})):n==="Delegate"&&b.toLowerCase()===(r==null?void 0:r.toLowerCase())?R(d._({id:"gneBVK"})):R(void 0)},[p,x,i,g,n,b,c,k,r]);const ke=Fe(),_=J(H.DELEGATE_CONFIRM),Qe=J(H.YOUR_TRANSACTIONS_STAKE_KNC),{switchToEthereum:$}=be(),{mixpanelHandler:q}=Be(),_e=Xe(new Ue(p===C.GÖRLI?C.GÖRLI:C.MAINNET,(f==null?void 0:f.KNCAddress)||"",18,"KNC"),x),[P,$e]=We(n==="Stake"&&x?_e:void 0,f==null?void 0:f.staking),Se=m(S.formatUnits(g)),Ae=parseFloat(m(S.formatUnits(g),(n==="Unstake"?"-":"")+x)),qe=Math.abs(Ae-parseFloat(Se)).toPrecision(3),B=pt(),et=()=>{$(d._({id:"Jzh1sr"})).then(()=>{E(d._({id:"k3afIo",values:{inputValue:x}})),u(!0),j(!0),q(O.KYBER_DAO_STAKE_CLICK,{amount:x}),I(S.parseUnits(x,18),qe).then(a=>{j(!1),D(a),B()}).catch(a=>{j(!1),D(void 0),W(a==null?void 0:a.message)})}).catch()},tt=()=>{$(d._({id:"d64gT+"})).then(()=>{E(d._({id:"cV8tUJ",values:{inputValue:x}})),u(!0),j(!0),q(O.KYBER_DAO_UNSTAKE_CLICK,{amount:x}),M(S.parseUnits(x,18)).then(a=>{j(!1),D(a),B()}).catch(a=>{j(!1),W(a==null?void 0:a.message)})}).catch()},st=()=>{$(d._({id:"XbvxUa"})).then(()=>{Q.current=!1,_()}).catch(a=>{u(!1)})},nt=()=>{$(d._({id:"tSGlKv"})).then(()=>{Q.current=!0,_()}).catch(()=>{u(!1)})},it=h.useCallback(()=>{c&&(Q.current?(E(d._({id:"4TMi3n",values:{delegatedAddress:r}})),u(!0),j(!0),z(c).then(a=>{j(!1),D(a),T(""),B()}).catch(a=>{j(!1),W(a==null?void 0:a.message)})):(E(d._({id:"8XYo78",values:{delegateAddress:b}})),u(!0),j(!0),q(O.KYBER_DAO_DELEGATE_CLICK,{delegateAddress:b}),v(b).then(a=>{j(!1),D(a),T(""),B()}).catch(a=>{j(!1),W(a==null?void 0:a.message)})),_())},[v,b,c,r,_,z,q,B]),le=me(),ot=h.useMemo(()=>!le||!x?0:(le*parseFloat(x)).toFixed(2),[le,x]),Te=h.useCallback(a=>{const at=n==="Stake"?i:g;re(S.formatUnits(at.div(a?2:1)))},[n,i,g]);return h.useEffect(()=>{re("1")},[n]),e.jsxs(Xt,{children:[e.jsx(Jt,{children:Object.keys(je).map(a=>e.jsx(Vt,{onClick:()=>K(a),$active:n===a,children:a},a))}),e.jsxs(_t,{children:[e.jsx(s,{fontSize:12,lineHeight:"16px",color:t.subText,children:e.jsx(o,{id:"EII+9s"})}),e.jsxs(s,{fontSize:16,lineHeight:"20px",color:t.text,display:"flex",alignItems:"center",style:{gap:"8px"},children:[e.jsx(ue,{size:20})," ",S.formatUnits(g)," KNC"]})]}),e.jsx(Qt,{children:e.jsxs($t,{children:[e.jsxs(A,{color:t.subText,children:[e.jsxs(es,{to:"/swap/ethereum/eth-to-knc",children:[e.jsx(ht,{size:16}),e.jsx(s,{fontSize:14,children:e.jsx(o,{id:"XC9XqX"})})]}),c&&e.jsxs(ts,{onClick:Qe,children:[e.jsx(vt,{size:18})," ",e.jsx(s,{fontSize:14,children:"History"})]})]}),(n==="Stake"||n==="Unstake")&&e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsxs(A,{width:"100%",children:[e.jsxs(F,{gap:"2px",children:[e.jsx(ne,{onClick:()=>Te(),children:"Max"}),e.jsx(ne,{onClick:()=>Te(!0),children:"Half"})]}),n==="Stake"&&e.jsxs(F,{gap:"3px",justify:"flex-end",color:t.subText,children:[e.jsx(He,{})," ",e.jsx(s,{fontSize:12,children:i?S.formatUnits(i):0})]})]}),e.jsxs(A,{children:[e.jsx(Ke,{value:x,onUserInput:re}),e.jsxs("span",{style:{color:t.border,fontSize:"14px",marginRight:"6px"},children:["~$",ot]}),e.jsxs(Ve,{children:[e.jsx(ue,{}),"KNC"]})]})]}),c?e.jsxs(ee,{gap:"12px",children:[(P===y.NOT_APPROVED||P===y.PENDING)&&n==="Stake"&&[C.MAINNET,C.GÖRLI].includes(p)&&!G&&e.jsx(w,{onClick:()=>$e(),disabled:P===y.PENDING,children:P===y.PENDING?"Approving...":"Approve"}),n==="Stake"?e.jsx(w,{disabled:[C.MAINNET,C.GÖRLI].includes(p)&&(P!==y.APPROVED||!!G),margin:"8px 0px",onClick:()=>{et()},children:G||d._({id:"JYKRJS"})}):e.jsx(w,{disabled:[C.MAINNET,C.GÖRLI].includes(p)&&!!G,margin:"8px 0px",onClick:()=>{tt()},children:G||d._({id:"OFjZGo"})})]}):e.jsxs(te,{onClick:ke,children:[e.jsx(de,{size:20,fontSize:12,color:t.primary,text:d._({id:"DJcutN"}),style:{marginRight:"5px"},placement:"top"}),e.jsx(o,{id:"iSLIjg"})]})]}),n==="Delegate"&&e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(s,{color:t.subText,fontSize:12,lineHeight:"16px",children:e.jsx(o,{id:"BfMPlb"})}),k&&e.jsx(Ze,{text:d._({id:"jDQopj"}),placement:"top",children:e.jsxs(ss,{children:[e.jsx(gt,{})," ",ut(C.MAINNET,r)," ",e.jsx(fe,{style:{cursor:"pointer"},size:16,onClick:nt})]})})]}),e.jsx(Me,{children:e.jsx(qt,{value:b,onChange:a=>{T(a.target.value)},placeholder:"Ethereum Address"})}),e.jsx(s,{color:t.subText,fontSize:12,lineHeight:"14px",fontStyle:"italic",children:e.jsx(o,{id:"NAAJ5x"})}),e.jsx(Ne,{borderRadius:"16px",backgroundColor:t.buttonBlack,padding:"16px",color:t.subText,style:{filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16))"},headerContent:e.jsxs(F,{children:[e.jsx(jt,{style:{width:"30px",marginRight:"6px"},children:e.jsx(ft,{})}),e.jsx(s,{fontSize:12,lineHeight:"16px",color:t.subText,children:e.jsx(o,{id:"Z0dCXl"})})]}),expandContent:e.jsx(s,{margin:"0 20px 0 30px",fontSize:12,lineHeight:"16px",children:e.jsx(o,{id:"lib6Oy"})})}),c?e.jsx(w,{margin:"8px 0px",onClick:st,disabled:!!G,children:G||e.jsx(o,{id:"XbvxUa"})}):e.jsxs(te,{onClick:ke,children:[e.jsx(de,{size:20,fontSize:12,color:t.primary,text:d._({id:"izRaVN"}),style:{marginRight:"5px"},placement:"top"}),e.jsx(o,{id:"iSLIjg"})]})]})]})}),e.jsx(Ne,{border:`1px solid ${t.border}`,backgroundColor:t.buttonBlack,borderRadius:"16px",color:t.subText,padding:"12px 16px",headerContent:e.jsx(s,{fontSize:12,color:t.text,style:{textTransform:"uppercase"},children:e.jsx(o,{id:"I1gq65"})}),expandContent:e.jsxs(ie,{gap:"10px",style:{fontSize:"12px"},children:[e.jsxs(A,{children:[e.jsx(s,{children:e.jsx(o,{id:"tcsT9V"})}),e.jsxs(s,{children:[S.formatUnits(g)," KNC",n!=="Delegate"&&e.jsxs(e.Fragment,{children:[" ","→"," ",e.jsxs("span",{style:{color:t.text},children:[Math.max(+S.formatUnits(g)+(n==="Unstake"?-(x||"0"):+(x||"0")),0)," ","KNC"]})]})]})]}),e.jsxs(A,{children:[e.jsxs(s,{children:[e.jsx(o,{id:"6bxci/"})," ",e.jsx(de,{text:d._({id:"DU3j00"})})]}),e.jsxs(s,{children:[Se,"%",n!=="Delegate"&&e.jsxs(e.Fragment,{children:[" ","→ ",e.jsxs("span",{style:{color:t.text},children:[Ae,"%"]})]})]})]})]})}),e.jsx(Wt,{address:b,isUndelegate:Q.current,delegatedAddress:r,onAddressChange:T,delegateCallback:it}),e.jsx(Nt,{}),e.jsx(mt,{isOpen:U,onDismiss:()=>u(!1),attemptingTxn:L,hash:N,pendingText:ae,content:()=>Ce?e.jsx(bt,{onDismiss:()=>u(!1),message:Ce}):e.jsx(e.Fragment,{})}),e.jsx(Yt,{setPendingText:E,setShowConfirm:u,setAttemptingTxn:j,setTxHash:D,setTransactionError:W})]})}const is=l.div`
  width: 100%;
  background-image: url(${ve}), url(${ve});
  background-size: 100% auto;
  background-repeat: no-repeat, no-repeat;
  z-index: 1;
  background-color: transparent, transparent;
  background-position: top, bottom;
`,os=l.div`
  margin: auto;
  width: 1224px;
  min-height: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 160px;
  ${({theme:t})=>t.mediaWidth.upToLarge`
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
  `}
`,as=l.div`
  display: flex;
  flex-direction: column;
  width: 772px;
  order: 1;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    width: 100vw;
    padding: 0 16px;
  `}
`,rs=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 772px;
  order: 3;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    width: 100vw;
    padding: 0 16px;
  `}
`,Z=l.div`
  display: flex;
  border: 1px solid ${({theme:t})=>t.border};
  border-radius: 20px;
  gap: 12px;
  width: 100%;
  padding: 24px 16px;
  backdrop-filter: blur(25px);
  ${({background:t})=>t&&oe`
      background: ${t};
    `}
  backdrop-filter: blur(25px);
`,Y=l.img`
  height: 44px;
  width: 44px;
`,ls=l.div`
  width: 404px;
  display: flex;
  justify-content: center;
  order: 2;
  ${({theme:t})=>t.mediaWidth.upToLarge`
    display: none;
  `}
`,X=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;function gs(){const t=V(),c=J(H.MIGRATE_KNC),{switchToEthereum:p}=be(),{totalMigratedKNC:f}=Pe(),g=kt(),{mixpanelHandler:i}=Be(),r=()=>{p(d._({id:"y5rS9U"})).then(()=>{c()})},m=me(),{userTier:k,gasRefundPercentage:I}=St();return e.jsx(is,{children:e.jsxs(os,{children:[e.jsxs(as,{children:[e.jsxs(A,{children:[e.jsx(s,{fontSize:24,lineHeight:"28px",fontWeight:500,children:e.jsx(o,{id:"M5Lbo8"})}),e.jsxs(Ye,{gap:"4px",children:[e.jsx(ue,{size:20}),e.jsxs(s,{fontSize:16,children:["KNC: $",m?(+m).toPrecision(4):"--"]})]})]}),e.jsx(Re,{margin:xe?"20px 0":"28px 0"}),e.jsx(s,{fontSize:16,lineHeight:"24px",fontWeight:400,color:t.subText,marginBottom:"16px",children:e.jsx(o,{id:"I6orQa"})}),e.jsxs(A,{align:xe?"flex-start":"center",flexDirection:xe?"column":"row",gap:"12px",children:[e.jsx(s,{fontSize:16,lineHeight:"24px",fontWeight:400,color:t.warning,children:e.jsx(o,{id:"WFn+VC"})}),e.jsx(pe,{to:he.ABOUT+"/knc",children:"Read about KNC ↗"})]})]}),e.jsx(ls,{children:e.jsx("img",{src:Rt,alt:"KyberDAO",width:"186px"})}),e.jsxs(rs,{children:[e.jsxs(Z,{children:[e.jsx(Y,{src:It,alt:"DAO Governance"}),e.jsxs(X,{children:[e.jsx(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:t.text,children:e.jsx(o,{id:"fTK2tH"})}),e.jsxs(s,{fontSize:12,lineHeight:"16px",fontWeight:500,color:t.subText,children:[e.jsx(o,{id:"dVyCmi"})," ",e.jsx(ge,{href:"https://docs.kyberswap.com/kyber-dao/kyber-dao-introduction",children:"FAQ ↗"})]})]})]}),e.jsxs(Z,{children:[e.jsx(Y,{src:Et,alt:"Stake + Vote"}),e.jsxs(X,{children:[e.jsx(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:t.text,children:e.jsx(o,{id:"K4um9Z"})}),e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,color:t.subText,children:e.jsx(o,{id:"l1ZYaq"})})]}),e.jsx(w,{onClick:()=>{i(O.KYBER_DAO_VOTE_CLICK),g("/kyberdao/vote")},width:"120px",height:"44px",children:"Vote"})]}),e.jsxs(Z,{children:[e.jsx(Y,{src:zt,alt:"Migrate"}),e.jsxs(X,{children:[e.jsx(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:t.text,children:e.jsx(o,{id:"y5rS9U"})}),e.jsxs(ee,{gap:"4px",children:[e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,textAlign:"left",color:t.subText,children:e.jsx(o,{id:"3WMP9u"})}),f?e.jsx(s,{fontSize:12,lineHeight:"16px",children:At(Tt(f).split(".")[0])+" KNC"}):e.jsx("div",{style:{lineHeight:1},children:e.jsx(yt,{height:"12px",width:"90px",baseColor:t.background,highlightColor:t.buttonGray,borderRadius:"1rem",inline:!0})})]})]}),e.jsx(te,{width:"120px",height:"44px",onClick:r,children:"Migrate"})]}),e.jsxs(Z,{children:[e.jsx(Y,{src:Mt,alt:"KNC Utility"}),e.jsxs(X,{children:[e.jsx(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:t.text,children:e.jsx(o,{id:"ohkZl+"})}),e.jsx(ee,{gap:"4px",children:e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,textAlign:"left",color:t.subText,children:e.jsx(o,{id:"eYqWDu",components:{0:e.jsx(pe,{to:he.KYBERDAO_KNC_UTILITY,onClick:()=>{i(O.GAS_REFUND_SOURCE_CLICK,{source:"StakeKNC_page_KNC_utility"})}})}})})})]}),e.jsx(Ze,{text:e.jsx(o,{id:"/LdTRU",values:{userTier:k,0:I?I*100:"--"},components:{0:e.jsx(pe,{to:he.KYBERDAO_KNC_UTILITY,onClick:()=>{i(O.GAS_REFUND_SOURCE_CLICK,{source:"StakeKNC_page_KNC_utility_tier"})}})}}),children:k===1?e.jsx("img",{src:Gt,alt:"Tier 1"}):k===2?e.jsx("img",{src:Ht,alt:"Tier 2"}):k===3?e.jsx("img",{src:Kt,alt:"Tier 3"}):null})]}),e.jsxs(Z,{children:[e.jsx(Y,{src:wt,alt:"KyberDAO v1"}),e.jsxs(X,{children:[e.jsx(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:t.text,children:"KyberDAO v1"}),e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,color:t.subText,children:e.jsx(o,{id:"DNxDPC",components:{0:e.jsx(ge,{href:"https://legacy.kyber.org/vote",target:"_blank",rel:"noreferrer"})}})})]})]})]}),e.jsx(ns,{})]})})}export{gs as default};
