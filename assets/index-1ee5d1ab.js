import{ef as Pt,u as dt,an as $e,gT as n,r as y,af as O,dl as H,ao as Ut,P as Oe,eO as Lt,gU as _t,j as e,d as C,s as I,bj as se,gV as le,gW as Ft,dc as Yt,bN as Wt,gX as Bt,T as x,F as f,fA as Mt,k as zt,l as Dt,a as $t,e5 as Ot,dn as Ht,az as Qt,bI as qt,bm as He,cl as Gt,aC as Xt,A as Jt,gp as Zt,fY as Qe,dk as V,x as Kt,M as Vt,bC as en,bE as tn,gY as nn,g as qe,c as ee,gk as rn,Z as de,bk as sn,b5 as on,aa as an,U as cn,dN as me,dp as dn,gZ as Ge,g_ as Xe,g$ as Je,h0 as Ze,eN as Ke,Q as te,at as Ve,dt as et,e9 as mn,B as ln,dV as un,h1 as xn,cv as tt,fS as nt,am as X,ag as rt,ai as st,n as gn,G as pn,h2 as hn}from"./index-3b83b03c.js";import{b as fn,d as Cn,N as Tn}from"./usePools-1e98a7ac.js";import{D as jn,K as yn,L as Sn,M as Rn,G as ot,H as bn,I as En,R as In,O as at}from"./ProAmmPooledTokens-d7268f8a.js";import{A as wn,L as vn}from"./index-638ff8cd.js";import{M as kn,u as An,S as Nn}from"./useDebouncedChangeHandler-808cb410.js";import{u as ne,a as Pn}from"./index-ef0a8092.js";import{u as Un}from"./useTransactionDeadline-63fc7745.js";import"./index-0c52be50.js";import"./index-2c0a8d65.js";import"./TransactionSettingsIcon-1f9c2821.js";function mt(){return Pt(t=>t.burnProAmm)}function Ln(t,S=!1,R=!1){const{account:d}=dt(),{independentField:U,typedValue:oe}=mt(),v=$e(t==null?void 0:t.token0),T=$e(t==null?void 0:t.token1),j={[n.CURRENCY_A]:v,[n.CURRENCY_B]:T},[,A]=fn(v??void 0,T??void 0,t==null?void 0:t.fee),m=y.useMemo(()=>A&&(t!=null&&t.liquidity)&&typeof(t==null?void 0:t.tickLower)=="number"&&typeof(t==null?void 0:t.tickUpper)=="number"?new Cn({pool:A,liquidity:t.liquidity.toString(),tickLower:t.tickLower,tickUpper:t.tickUpper}):void 0,[A,t]),D={[n.CURRENCY_A]:m&&(S?m.amount0:O.fromRawAmount(ne(m.amount0.currency),m.amount0.quotient.toString()))||void 0,[n.CURRENCY_B]:m&&(S?m.amount1:O.fromRawAmount(ne(m.amount1.currency),m.amount1.quotient.toString()))||void 0};let l=new H("0","100");if(U===n.LIQUIDITY_PERCENT)l=new H(oe,"100");else if(j[U]){const z=Ut(oe,j[U]??void 0),L=D[U];z&&L&&!z.greaterThan(L)&&(l=new H(z.quotient,L.quotient))}R&&+l.toFixed()==100&&(l=new H("9999","10000"));const g=m?l.multiply(m.amount0.quotient).quotient:void 0,M=m?l.multiply(m.amount1.quotient).quotient:void 0,b=v&&g?O.fromRawAmount(S?v:ne(v),g):void 0,k=T&&M?O.fromRawAmount(S?T:ne(T),M):void 0,J=A&&t?A.tickCurrent<t.tickLower||A.tickCurrent>=t.tickUpper:!1;let Q;d||(Q=e.jsx(C,{id:"iSLIjg"}));const Z={[n.LIQUIDITY_PERCENT]:l,[n.CURRENCY_A]:v&&l&&l.greaterThan("0")&&b&&m?Oe.fromRawAmount(v.wrapped,l.multiply(m.amount0.quotient).quotient):void 0,[n.CURRENCY_B]:T&&l&&l.greaterThan("0")&&k&&m?Oe.fromRawAmount(T.wrapped,l.multiply(m.amount1.quotient).quotient):void 0};return{position:m,pooledAmount0:D[n.CURRENCY_A],pooledAmount1:D[n.CURRENCY_B],liquidityPercentage:l,liquidityValue0:b,liquidityValue1:k,feeValue0:b!=null&&b.currency?O.fromRawAmount(b==null?void 0:b.currency,0):void 0,feeValue1:k!=null&&k.currency?O.fromRawAmount(k==null?void 0:k.currency,0):void 0,loadingFee:!1,outOfRange:J,error:Q,parsedAmounts:Z}}function _n(){const t=Lt();return{onUserInput:y.useCallback((R,d)=>{t(_t({field:R,typedValue:d}))},[t])}}const Fn=I.div`
  text-align: center;
  width: calc(100% - 24px);
  margin: 0 auto 12px;
  max-width: 1200px;
  border-radius: 0.5rem;
`,Yn=I.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1.35fr 2fr;

  ${({theme:t})=>t.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
  `}
`,Wn=I(se)`
  height: fit-content;
  padding-right: 24px;
  border-right: 1px solid ${({theme:t})=>t.border};
  grid-auto-rows: min-content;
  gap: 1rem;

  ${({theme:t})=>t.mediaWidth.upToMedium`
    border: none;
    padding-right: 0;
    gap: 20px;
  `}
`,Bn=I(se)`
  border-radius: 1.25rem;
  grid-auto-rows: min-content;
`,Mn=I.div`
  background: ${({theme:t})=>t.background};
  padding: 24px;
  border: 1px solid ${({theme:t})=>t.border};
  border-radius: 20px;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    padding: 1rem;
  `}
`,zn=I(le)`
  padding: 1rem;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    padding: 0;
    background: transparent;
  `}
`,Dn=I.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({color:t})=>t};
`,$n=I.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  ${({theme:t})=>t.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`,it=I(x)`
  border-bottom: 1px solid ${({theme:t})=>t.text};
  width: fit-content;
  display: inline;
  cursor: pointer;
  color: ${({theme:t})=>t.text};
  font-weight: 500;
`,ct=I(x)`
  border-bottom: 1px solid transparent;
  width: fit-content;
  display: inline;
`,re=I(kn)`
  margin: 0;
  flex: unset;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  height: max-content;
  width: max-content;
  background: transparent;
  border-color: ${({theme:t})=>t.border};
  color: ${({theme:t})=>t.subText};

  ${({theme:t})=>t.mediaWidth.upToSmall`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  `}

  ${({theme:t})=>t.mediaWidth.upToExtraSmall`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    flex: 1;
  `}
`,On=I(f)`
  gap: 0.5rem;
  justify-content: flex-end;
  flex: 1;

  ${({theme:t})=>t.mediaWidth.upToExtraSmall`
    gap: 0.25rem
  `}
`,Hn=I(x)`
  ${({theme:t})=>t.mediaWidth.upToExtraSmall`
    font-size: 28px !important;
    min-width: 72px !important;
  `}
`;function sr(){const{tokenId:t}=Ft(),S=Yt(),R=y.useMemo(()=>{try{return Wt.from(t)}catch{return null}},[t]);return R===null||R.eq(0)?e.jsx(Bt,{to:{...S,pathname:"/myPools"}}):e.jsx(Qn,{tokenId:R})}function Qn({tokenId:t}){var ve,ke,Ae,Ne,Pe,Ue,Le,_e,Fe,Ye,We,Be,Me,ze,De;const{position:S}=jn(t),R=Mt(),d=zt(),[U,oe]=y.useState(!1),{networkInfo:v,account:T,chainId:j}=dt(),{library:A}=Dt(),m=$t(),[D,l]=y.useState(""),g=(ve=Ot(t?R:null,"ownerOf",[t.toNumber()]).result)==null?void 0:ve[0],M=(ke=v.elastic.farmV2S)==null?void 0:ke.map(i=>i.toLowerCase()).includes(g==null?void 0:g.toLowerCase()),b=(Ae=v.elastic["farmV2.1S"])==null?void 0:Ae.map(i=>i.toLowerCase()).includes(g==null?void 0:g.toLowerCase()),k=v.elastic.farms.flat().includes(Ht(g)),J=k||M||b,Q=g===T||J,Z=Qt(),z=qt(j);y.useEffect(()=>{j&&z&&j!==z&&Z("/myPools")},[j,z,Z]);const[L,ue]=y.useState(!1),{independentField:xe,typedValue:ge}=mt(),{position:c,liquidityPercentage:N,liquidityValue0:s,liquidityValue1:a,pooledAmount0:p,pooledAmount1:u,feeValue0:r,feeValue1:o,loadingFee:pe,outOfRange:he,error:lt,parsedAmounts:P}=Ln(S,L,k),fe=!!(j&&(s!=null&&s.currency.isNative)),Ce=!!(j&&(s!=null&&s.currency.equals(He[j]))),Te=!!(j&&(a!=null&&a.currency.isNative)),je=!!(j&&(a!=null&&a.currency.equals(He[j]))),{onUserInput:w}=_n(),K=(Ne=S==null?void 0:S.liquidity)==null?void 0:Ne.eq(0),ut=yn((Pe=c==null?void 0:c.pool)==null?void 0:Pe.token0,(Ue=c==null?void 0:c.pool)==null?void 0:Ue.token1,(Le=c==null?void 0:c.pool)==null?void 0:Le.fee),xt=y.useCallback(i=>{w(n.LIQUIDITY_PERCENT,i.toString())},[w]),[ye,gt]=An(Number.parseInt(P[n.LIQUIDITY_PERCENT].toFixed(0)),xt,0),Se={[n.LIQUIDITY_PERCENT]:P[n.LIQUIDITY_PERCENT].equalTo("0")?"0":P[n.LIQUIDITY_PERCENT].lessThan(new H("1","100"))?"<1":P[n.LIQUIDITY_PERCENT].toFixed(0),[n.CURRENCY_A]:xe===n.CURRENCY_A?ge:((_e=P[n.CURRENCY_A])==null?void 0:_e.toSignificant(6))??"",[n.CURRENCY_B]:xe===n.CURRENCY_B?ge:((Fe=P[n.CURRENCY_B])==null?void 0:Fe.toSignificant(6))??""},q=(p==null?void 0:p.currency.wrapped.address)||"",G=(u==null?void 0:u.currency.wrapped.address)||"",_=Gt([q,G]),pt=parseFloat((p==null?void 0:p.toExact())||"0")*_[q]+parseFloat((u==null?void 0:u.toExact())||"0")*_[G],Re=parseFloat((r==null?void 0:r.toExact())||"0")*_[q]+parseFloat((o==null?void 0:o.toExact())||"0")*_[G],ht=P[n.CURRENCY_A]&&_[q]?parseFloat(P[n.CURRENCY_A].toSignificant(6))*_[q]:0,ft=P[n.CURRENCY_B]&&_[G]?parseFloat(P[n.CURRENCY_B].toSignificant(6))*_[G]:0,F=Un(),[Y]=Xt(),[Ct,be]=y.useState(!1),[Tt,$]=y.useState(!1),[ae,Ee]=y.useState(),jt=Jt(),yt=Zt(g),St=Qe(M?g:void 0,Sn),Rt=Qe(b?g:void 0,Rn),Ie=i=>{$(!1);const E=s==null?void 0:s.toSignificant(6),W=a==null?void 0:a.toSignificant(6),h=(s==null?void 0:s.currency.symbol)??"",B=(a==null?void 0:a.currency.symbol)??"";jt({hash:i.hash,type:pn.ELASTIC_REMOVE_LIQUIDITY,extraInfo:{tokenAmountIn:E,tokenAmountOut:W,tokenSymbolIn:h,tokenSymbolOut:B,tokenAddressIn:s==null?void 0:s.currency.wrapped.address,tokenAddressOut:a==null?void 0:a.currency.wrapped.address,contract:ut,nftId:t.toString()}}),Ee(i.hash)},bt=async()=>{const i=b?Rt:M?St:yt;if(!(!i||!s||!a||!F||!c||!N))try{const E=s==null?void 0:s.subtract(s.multiply(X(Y))),W=a==null?void 0:a.subtract(a.multiply(X(Y))),h=b?[t.toString(),N.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),hn({isClaimFee:!1,isSyncFee:!1,isClaimReward:!1,isReceiveNative:!L})]:M?[t.toString(),N.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),!1,!L]:[t.toString(),N.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),!L,[!1,!1]],B=await i.estimateGas.removeLiquidity(...h),ce=await i.removeLiquidity(...h,{gasLimit:st(B)});Ie(ce)}catch(E){$(!1),l((E==null?void 0:E.message)||JSON.stringify(E))}},Et=async()=>{if($(!0),!R||!s||!a||!F||!T||!j||!r||!o||!c||!N||!A){$(!1),l("Some things went wrong");const h=new Error("Remove Elastic Liquidity Error");h.name=tt.RemoveElasticLiquidityError,nt(h,{extra:{positionManager:R,liquidityValue0:s,liquidityValue1:a,deadline:F,account:T,chainId:j,feeValue0:r,feeValue1:o,positionSDK:c,liquidityPercentage:N}});return}if(J)return bt();const{calldata:i,value:E}=Tn.removeCallParameters(c,{tokenId:t.toString(),liquidityPercentage:N,slippageTolerance:X(Y),deadline:F.toString(),collectOptions:{expectedCurrencyOwed0:r.subtract(r.multiply(X(Y))),expectedCurrencyOwed1:o.subtract(o.multiply(X(Y))),recipient:T,deadline:F.toString(),isRemovingLiquid:!0,havingFee:U&&!(r.equalTo(rt.BigInt("0"))&&o.equalTo(rt.BigInt("0")))}}),W={to:R.address,data:i,value:E};A.getSigner().estimateGas(W).then(async h=>{const B={...W,gasLimit:st(h)};return A.getSigner().sendTransaction(B).then(ce=>{Ie(ce)})}).catch(h=>{if(console.log("error",h),$(!1),!gn(h)){const B=new Error("Remove Elastic Liquidity Error",{cause:h});B.name=tt.RemoveElasticLiquidityError,nt(B,{extra:{calldata:i,value:E,to:R.address}})}l((h==null?void 0:h.message)||JSON.stringify(h))})},ie=y.useCallback(()=>{be(!1),ae&&w(n.LIQUIDITY_PERCENT,"0"),$(!1),Ee(""),l("")},[w,ae]),It=e.jsx(C,{id:"LWyy1S",values:{0:s==null?void 0:s.toSignificant(6),1:(Ye=s==null?void 0:s.currency)==null?void 0:Ye.symbol,2:a==null?void 0:a.toSignificant(6),3:(We=a==null?void 0:a.currency)==null?void 0:We.symbol,4:U&&(r!=null&&r.greaterThan(V)||o!=null&&o.greaterThan(V))?e.jsx("br",{}):"",5:U&&(r!=null&&r.greaterThan(V)||o!=null&&o.greaterThan(V))?`Collecting fee of ${r==null?void 0:r.toSignificant(6)} ${(Be=r==null?void 0:r.currency)==null?void 0:Be.symbol} and ${o==null?void 0:o.toSignificant(6)} ${(Me=o==null?void 0:o.currency)==null?void 0:Me.symbol}`:""}});function wt(){return e.jsx(ln,{mt:"16px",onClick:Et,children:e.jsx(C,{id:"t/YqKh"})})}const vt=y.useCallback(i=>w(n.CURRENCY_A,i),[w]),kt=y.useCallback(i=>w(n.CURRENCY_B,i),[w]),At=Kt(`(max-width: ${Vt.upToMedium}px)`),Nt=un(Y,!1,!1),we=xn(Y,!1,!1);return e.jsxs(e.Fragment,{children:[e.jsx(en,{isOpen:Ct,onDismiss:ie,attemptingTxn:Tt,hash:ae,content:()=>D?e.jsx(tn,{onDismiss:ie,message:D}):e.jsx(nn,{title:qe._({id:"3XBvkd"}),onDismiss:ie,topContent:()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{marginTop:"1.5rem"}),c&&e.jsx(ot,{position:c,tokenId:t.toString()}),e.jsx(bn,{liquidityValue0:s,liquidityValue1:a,title:qe._({id:"oVPqBa"})}),c?U?e.jsx(En,{totalFeeRewardUSD:Re,feeValue0:r,feeValue1:o,position:c,tokenId:t}):null:e.jsx(ee,{}),e.jsx(rn,{marginTop:"1rem",padding:"1rem",children:e.jsxs(se,{gap:"md",children:[e.jsx(x,{fontSize:12,fontWeight:500,children:e.jsx(C,{id:"Y1Iw94"})}),e.jsx(de,{}),e.jsxs(sn,{children:[e.jsx(on,{fontSize:12,fontWeight:500,color:d.subText,minWidth:"max-content",children:e.jsx(an,{width:"200px",text:e.jsx(x,{children:e.jsx(C,{id:"WUxFPF",components:{0:e.jsx(cn,{href:"https://docs.kyberswap.com/getting-started/foundational-topics/decentralized-finance/slippage"})}})}),placement:"auto",children:e.jsx(C,{id:"x6GJ4a"})})}),e.jsx(me.black,{fontSize:12,color:Nt?d.warning:void 0,children:dn(Y)})]})]})}),we===Ge.HIGH&&e.jsx(Xe,{padding:"10px 16px",m:"20px 0 0",children:e.jsxs(f,{alignItems:"center",children:[e.jsx(Je,{stroke:d.warning,size:"16px"}),e.jsx(me.black,{ml:"12px",fontSize:"12px",flex:1,children:e.jsx(C,{id:"Cdal08",components:{0:e.jsx(it,{style:{minWidth:"max-content"},as:"a",href:Ze,target:"_blank",rel:"noreferrer"}),1:e.jsx(ct,{sx:{ml:"0.5ch"}})}})})]})})]}),bottomContent:wt}),pendingText:It}),e.jsxs(Fn,{children:[e.jsx(wn,{hideShare:!0,isElastic:!0,alignTitle:"left",action:vn.REMOVE,showTooltip:!1,tutorialType:Pn.ELASTIC_REMOVE_LIQUIDITY,owner:g,showOwner:g&&T&&!Q}),e.jsx(Mn,{children:S?e.jsx(se,{gap:"md",style:{textAlign:"left"},children:e.jsxs(Yn,{children:[e.jsxs(Wn,{children:[c?e.jsx(ot,{position:c,tokenId:t.toString(),showRangeInfo:!1}):e.jsx(ee,{}),e.jsxs(le,{style:{borderRadius:"1rem",padding:"1rem"},children:[e.jsxs(f,{alignItems:"center",sx:{gap:"4px"},children:[e.jsxs(Dn,{color:K?d.red:he?d.warning:d.primary,children:["#",t.toString()]}),e.jsx(In,{removed:K,inRange:!he,hideText:!0,size:14})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",fontWeight:"500",marginTop:"1rem",marginBottom:"0.75rem",children:[e.jsx(x,{children:e.jsx(C,{id:"YHc3B+"})}),e.jsx(x,{children:Ke(pt)})]}),e.jsx(de,{}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:["Pooled ",p==null?void 0:p.currency.symbol]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(te,{currency:p==null?void 0:p.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[p&&e.jsx(at,{currencyAmount:p})," ",(ze=p==null?void 0:p.currency)==null?void 0:ze.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:["Pooled ",u==null?void 0:u.currency.symbol]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(te,{currency:u==null?void 0:u.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[u==null?void 0:u.toSignificant(10)," ",u==null?void 0:u.currency.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",fontWeight:"500",marginTop:"1.25rem",marginBottom:"0.75rem",children:[e.jsx(x,{children:"My Fee Earnings"}),pe&&!r?e.jsx(ee,{}):e.jsx(x,{children:Ke(Re)})]}),e.jsx(de,{}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:[r==null?void 0:r.currency.symbol," Fee Earned"]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(te,{currency:r==null?void 0:r.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[r&&e.jsx(at,{currencyAmount:r})," ",(De=r==null?void 0:r.currency)==null?void 0:De.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:[o==null?void 0:o.currency.symbol," Fee Earned"]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(te,{currency:o==null?void 0:o.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[o==null?void 0:o.toSignificant(10)," ",o==null?void 0:o.currency.symbol]})]})]})]})]}),e.jsxs(Bn,{children:[e.jsxs(zn,{children:[e.jsx(x,{fontSize:12,color:d.subText,fontWeight:"500",children:e.jsx(C,{id:"dQldnN"})}),e.jsxs(le,{padding:"1rem",marginTop:"1rem",style:{borderRadius:"1rem",border:`1px solid ${d.border}`},children:[e.jsxs(f,{sx:{gap:"1rem"},alignItems:"center",children:[e.jsxs(Hn,{fontSize:36,fontWeight:"500",children:[ye,"%"]}),e.jsxs(On,{children:[e.jsx(re,{onClick:()=>w(n.LIQUIDITY_PERCENT,"25"),children:e.jsx(C,{id:"Xeb0wM"})}),e.jsx(re,{onClick:()=>w(n.LIQUIDITY_PERCENT,"50"),children:e.jsx(C,{id:"wW+u6Y"})}),e.jsx(re,{onClick:()=>w(n.LIQUIDITY_PERCENT,"75"),children:e.jsx(C,{id:"N+aNR1"})}),e.jsx(re,{onClick:()=>w(n.LIQUIDITY_PERCENT,"100"),children:e.jsx(C,{id:"CK1KXz"})})]})]}),e.jsx(Nn,{value:ye,onChange:gt,size:16,style:{width:"100%",margin:"1rem 0 0",padding:"0.75rem 0"}})]}),e.jsxs($n,{children:[e.jsx("div",{style:{flex:1,border:`1px solid ${d.border}`,borderRadius:"1rem"},children:e.jsx(Ve,{value:Se[n.CURRENCY_A],onUserInput:vt,onMax:null,onHalf:null,currency:s==null?void 0:s.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokena",estimatedUsd:et(ht.toString(),!0)||void 0,disableCurrencySelect:!fe&&!Ce,isSwitchMode:fe||Ce,onSwitchCurrency:()=>ue(i=>!i)})}),e.jsx("div",{style:{flex:1,border:`1px solid ${d.border}`,borderRadius:"1rem"},children:e.jsx(Ve,{value:Se[n.CURRENCY_B],onUserInput:kt,onMax:null,onHalf:null,currency:a==null?void 0:a.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokenb",estimatedUsd:et(ft.toString(),!0)||void 0,disableCurrencySelect:!Te&&!je,isSwitchMode:Te||je,onSwitchCurrency:()=>ue(i=>!i)})})]})]}),we===Ge.HIGH&&e.jsx(Xe,{padding:"10px 16px",m:"24px 0 0",children:e.jsxs(f,{alignItems:"center",children:[e.jsx(Je,{stroke:d.warning,size:"16px"}),e.jsx(me.black,{ml:"12px",fontSize:"12px",flex:1,children:e.jsx(C,{id:"Cdal08",components:{0:e.jsx(it,{style:{minWidth:"max-content"},as:"a",href:Ze,target:"_blank",rel:"noreferrer"}),1:e.jsx(ct,{sx:{ml:"0.5ch"}})}})})]})}),e.jsx(f,{justifyContent:"flex-end",children:e.jsx(mn,{style:{marginTop:"16px",width:At?"100%":"fit-content",minWidth:"164px"},confirmed:!1,disabled:K||pe&&!r||(N==null?void 0:N.equalTo(new H(0,100)))||!s||!!g&&!!T&&!Q,onClick:()=>{T?be(!0):m()},children:K?e.jsx(C,{id:"D87pha"}):lt??e.jsx(C,{id:"rdUucN"})})})]})]})}):e.jsx(ee,{})})]})]})}export{sr as default};
