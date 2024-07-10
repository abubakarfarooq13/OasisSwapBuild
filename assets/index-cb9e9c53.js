import{eh as Nn,u as mn,an as $e,gV as t,r as y,af as O,dn as Q,ao as Ln,P as Oe,eQ as _n,gW as Fn,j as e,d as C,s as I,bo as se,gX as le,gY as Yn,de as Wn,bP as Bn,gZ as Mn,T as x,F as f,fC as zn,k as Dn,l as $n,a as On,e7 as Qn,dq as Hn,az as qn,bK as Gn,br as Qe,cn as Xn,aC as Jn,A as Zn,gr as Kn,f_ as He,dm as V,x as Vn,M as et,bE as nt,bG as tt,g_ as rt,g as qe,c as ee,gm as st,Z as de,bp as ot,b7 as at,aa as it,U as ct,dP as me,dr as dt,g$ as Ge,h0 as Xe,h1 as Je,h2 as Ze,eP as Ke,Q as ne,at as Ve,dv as en,eb as mt,B as lt,dX as ut,h3 as xt,cx as nn,fU as tn,am as X,ag as rn,ai as sn,n as gt,G as pt,h4 as ht}from"./index-20b3a7a2.js";import{b as ft,d as Ct,N as Tt}from"./usePools-75847260.js";import{D as jt,K as yt,L as St,M as Rt,G as on,H as bt,I as Et,R as It,O as an}from"./ProAmmPooledTokens-e8aa32b4.js";import{A as wt,L as vt}from"./index-b37494d2.js";import{M as Pt,u as Ut,S as At}from"./useDebouncedChangeHandler-4e0174f7.js";import{u as te,a as kt}from"./index-47385c8e.js";import{u as Nt}from"./useTransactionDeadline-60940de6.js";import"./index-29ea9a98.js";import"./index-030f2acf.js";import"./TransactionSettingsIcon-0c6e97df.js";function ln(){return Nn(n=>n.burnProAmm)}function Lt(n,S=!1,R=!1){const{account:d}=mn(),{independentField:N,typedValue:oe}=ln(),v=$e(n==null?void 0:n.token0),T=$e(n==null?void 0:n.token1),j={[t.CURRENCY_A]:v,[t.CURRENCY_B]:T},[,U]=ft(v??void 0,T??void 0,n==null?void 0:n.fee),m=y.useMemo(()=>U&&(n!=null&&n.liquidity)&&typeof(n==null?void 0:n.tickLower)=="number"&&typeof(n==null?void 0:n.tickUpper)=="number"?new Ct({pool:U,liquidity:n.liquidity.toString(),tickLower:n.tickLower,tickUpper:n.tickUpper}):void 0,[U,n]),D={[t.CURRENCY_A]:m&&(S?m.amount0:O.fromRawAmount(te(m.amount0.currency),m.amount0.quotient.toString()))||void 0,[t.CURRENCY_B]:m&&(S?m.amount1:O.fromRawAmount(te(m.amount1.currency),m.amount1.quotient.toString()))||void 0};let l=new Q("0","100");if(N===t.LIQUIDITY_PERCENT)l=new Q(oe,"100");else if(j[N]){const z=Ln(oe,j[N]??void 0),L=D[N];z&&L&&!z.greaterThan(L)&&(l=new Q(z.quotient,L.quotient))}R&&+l.toFixed()==100&&(l=new Q("9999","10000"));const g=m?l.multiply(m.amount0.quotient).quotient:void 0,M=m?l.multiply(m.amount1.quotient).quotient:void 0,b=v&&g?O.fromRawAmount(S?v:te(v),g):void 0,P=T&&M?O.fromRawAmount(S?T:te(T),M):void 0,J=U&&n?U.tickCurrent<n.tickLower||U.tickCurrent>=n.tickUpper:!1;let H;d||(H=e.jsx(C,{id:"iSLIjg"}));const Z={[t.LIQUIDITY_PERCENT]:l,[t.CURRENCY_A]:v&&l&&l.greaterThan("0")&&b&&m?Oe.fromRawAmount(v.wrapped,l.multiply(m.amount0.quotient).quotient):void 0,[t.CURRENCY_B]:T&&l&&l.greaterThan("0")&&P&&m?Oe.fromRawAmount(T.wrapped,l.multiply(m.amount1.quotient).quotient):void 0};return{position:m,pooledAmount0:D[t.CURRENCY_A],pooledAmount1:D[t.CURRENCY_B],liquidityPercentage:l,liquidityValue0:b,liquidityValue1:P,feeValue0:b!=null&&b.currency?O.fromRawAmount(b==null?void 0:b.currency,0):void 0,feeValue1:P!=null&&P.currency?O.fromRawAmount(P==null?void 0:P.currency,0):void 0,loadingFee:!1,outOfRange:J,error:H,parsedAmounts:Z}}function _t(){const n=_n();return{onUserInput:y.useCallback((R,d)=>{n(Fn({field:R,typedValue:d}))},[n])}}const Ft=I.div`
  text-align: center;
  width: calc(100% - 24px);
  margin: 0 auto 12px;
  max-width: 1200px;
  border-radius: 0.5rem;
`,Yt=I.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1.35fr 2fr;

  ${({theme:n})=>n.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
  `}
`,Wt=I(se)`
  height: fit-content;
  padding-right: 24px;
  border-right: 1px solid ${({theme:n})=>n.border};
  grid-auto-rows: min-content;
  gap: 1rem;

  ${({theme:n})=>n.mediaWidth.upToMedium`
    border: none;
    padding-right: 0;
    gap: 20px;
  `}
`,Bt=I(se)`
  border-radius: 1.25rem;
  grid-auto-rows: min-content;
`,Mt=I.div`
  background: ${({theme:n})=>n.background};
  padding: 24px;
  border: 1px solid ${({theme:n})=>n.border};
  border-radius: 20px;

  ${({theme:n})=>n.mediaWidth.upToSmall`
    padding: 1rem;
  `}
`,zt=I(le)`
  padding: 1rem;

  ${({theme:n})=>n.mediaWidth.upToSmall`
    padding: 0;
    background: transparent;
  `}
`,Dt=I.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({color:n})=>n};
`,$t=I.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  ${({theme:n})=>n.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`,cn=I(x)`
  border-bottom: 1px solid ${({theme:n})=>n.text};
  width: fit-content;
  display: inline;
  cursor: pointer;
  color: ${({theme:n})=>n.text};
  font-weight: 500;
`,dn=I(x)`
  border-bottom: 1px solid transparent;
  width: fit-content;
  display: inline;
`,re=I(Pt)`
  margin: 0;
  flex: unset;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  height: max-content;
  width: max-content;
  background: transparent;
  border-color: ${({theme:n})=>n.border};
  color: ${({theme:n})=>n.subText};

  ${({theme:n})=>n.mediaWidth.upToSmall`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  `}

  ${({theme:n})=>n.mediaWidth.upToExtraSmall`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    flex: 1;
  `}
`,Ot=I(f)`
  gap: 0.5rem;
  justify-content: flex-end;
  flex: 1;

  ${({theme:n})=>n.mediaWidth.upToExtraSmall`
    gap: 0.25rem
  `}
`,Qt=I(x)`
  ${({theme:n})=>n.mediaWidth.upToExtraSmall`
    font-size: 28px !important;
    min-width: 72px !important;
  `}
`;function sr(){const{tokenId:n}=Yn(),S=Wn(),R=y.useMemo(()=>{try{return Bn.from(n)}catch{return null}},[n]);return R===null||R.eq(0)?e.jsx(Mn,{to:{...S,pathname:"/myPools"}}):e.jsx(Ht,{tokenId:R})}function Ht({tokenId:n}){var ve,Pe,Ue,Ae,ke,Ne,Le,_e,Fe,Ye,We,Be,Me,ze,De;const{position:S}=jt(n),R=zn(),d=Dn(),[N,oe]=y.useState(!1),{networkInfo:v,account:T,chainId:j}=mn(),{library:U}=$n(),m=On(),[D,l]=y.useState(""),g=(ve=Qn(n?R:null,"ownerOf",[n.toNumber()]).result)==null?void 0:ve[0],M=(Pe=v.elastic.farmV2S)==null?void 0:Pe.map(i=>i.toLowerCase()).includes(g==null?void 0:g.toLowerCase()),b=(Ue=v.elastic["farmV2.1S"])==null?void 0:Ue.map(i=>i.toLowerCase()).includes(g==null?void 0:g.toLowerCase()),P=v.elastic.farms.flat().includes(Hn(g)),J=P||M||b,H=g===T||J,Z=qn(),z=Gn(j);y.useEffect(()=>{j&&z&&j!==z&&Z("/myPools")},[j,z,Z]);const[L,ue]=y.useState(!1),{independentField:xe,typedValue:ge}=ln(),{position:c,liquidityPercentage:A,liquidityValue0:s,liquidityValue1:a,pooledAmount0:p,pooledAmount1:u,feeValue0:r,feeValue1:o,loadingFee:pe,outOfRange:he,error:un,parsedAmounts:k}=Lt(S,L,P),fe=!!(j&&(s!=null&&s.currency.isNative)),Ce=!!(j&&(s!=null&&s.currency.equals(Qe[j]))),Te=!!(j&&(a!=null&&a.currency.isNative)),je=!!(j&&(a!=null&&a.currency.equals(Qe[j]))),{onUserInput:w}=_t(),K=(Ae=S==null?void 0:S.liquidity)==null?void 0:Ae.eq(0),xn=yt((ke=c==null?void 0:c.pool)==null?void 0:ke.token0,(Ne=c==null?void 0:c.pool)==null?void 0:Ne.token1,(Le=c==null?void 0:c.pool)==null?void 0:Le.fee),gn=y.useCallback(i=>{w(t.LIQUIDITY_PERCENT,i.toString())},[w]),[ye,pn]=Ut(Number.parseInt(k[t.LIQUIDITY_PERCENT].toFixed(0)),gn,0),Se={[t.LIQUIDITY_PERCENT]:k[t.LIQUIDITY_PERCENT].equalTo("0")?"0":k[t.LIQUIDITY_PERCENT].lessThan(new Q("1","100"))?"<1":k[t.LIQUIDITY_PERCENT].toFixed(0),[t.CURRENCY_A]:xe===t.CURRENCY_A?ge:((_e=k[t.CURRENCY_A])==null?void 0:_e.toSignificant(6))??"",[t.CURRENCY_B]:xe===t.CURRENCY_B?ge:((Fe=k[t.CURRENCY_B])==null?void 0:Fe.toSignificant(6))??""},q=(p==null?void 0:p.currency.wrapped.address)||"",G=(u==null?void 0:u.currency.wrapped.address)||"",_=Xn([q,G]),hn=parseFloat((p==null?void 0:p.toExact())||"0")*_[q]+parseFloat((u==null?void 0:u.toExact())||"0")*_[G],Re=parseFloat((r==null?void 0:r.toExact())||"0")*_[q]+parseFloat((o==null?void 0:o.toExact())||"0")*_[G],fn=k[t.CURRENCY_A]&&_[q]?parseFloat(k[t.CURRENCY_A].toSignificant(6))*_[q]:0,Cn=k[t.CURRENCY_B]&&_[G]?parseFloat(k[t.CURRENCY_B].toSignificant(6))*_[G]:0,F=Nt(),[Y]=Jn(),[Tn,be]=y.useState(!1),[jn,$]=y.useState(!1),[ae,Ee]=y.useState(),yn=Zn(),Sn=Kn(g),Rn=He(M?g:void 0,St),bn=He(b?g:void 0,Rt),Ie=i=>{$(!1);const E=s==null?void 0:s.toSignificant(6),W=a==null?void 0:a.toSignificant(6),h=(s==null?void 0:s.currency.symbol)??"",B=(a==null?void 0:a.currency.symbol)??"";yn({hash:i.hash,type:pt.ELASTIC_REMOVE_LIQUIDITY,extraInfo:{tokenAmountIn:E,tokenAmountOut:W,tokenSymbolIn:h,tokenSymbolOut:B,tokenAddressIn:s==null?void 0:s.currency.wrapped.address,tokenAddressOut:a==null?void 0:a.currency.wrapped.address,contract:xn,nftId:n.toString()}}),Ee(i.hash)},En=async()=>{const i=b?bn:M?Rn:Sn;if(!(!i||!s||!a||!F||!c||!A))try{const E=s==null?void 0:s.subtract(s.multiply(X(Y))),W=a==null?void 0:a.subtract(a.multiply(X(Y))),h=b?[n.toString(),A.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),ht({isClaimFee:!1,isSyncFee:!1,isClaimReward:!1,isReceiveNative:!L})]:M?[n.toString(),A.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),!1,!L]:[n.toString(),A.multiply(c.liquidity).quotient.toString(),E.quotient.toString(),W.quotient.toString(),F.toString(),!L,[!1,!1]],B=await i.estimateGas.removeLiquidity(...h),ce=await i.removeLiquidity(...h,{gasLimit:sn(B)});Ie(ce)}catch(E){$(!1),l((E==null?void 0:E.message)||JSON.stringify(E))}},In=async()=>{if($(!0),!R||!s||!a||!F||!T||!j||!r||!o||!c||!A||!U){$(!1),l("Some things went wrong");const h=new Error("Remove Elastic Liquidity Error");h.name=nn.RemoveElasticLiquidityError,tn(h,{extra:{positionManager:R,liquidityValue0:s,liquidityValue1:a,deadline:F,account:T,chainId:j,feeValue0:r,feeValue1:o,positionSDK:c,liquidityPercentage:A}});return}if(J)return En();const{calldata:i,value:E}=Tt.removeCallParameters(c,{tokenId:n.toString(),liquidityPercentage:A,slippageTolerance:X(Y),deadline:F.toString(),collectOptions:{expectedCurrencyOwed0:r.subtract(r.multiply(X(Y))),expectedCurrencyOwed1:o.subtract(o.multiply(X(Y))),recipient:T,deadline:F.toString(),isRemovingLiquid:!0,havingFee:N&&!(r.equalTo(rn.BigInt("0"))&&o.equalTo(rn.BigInt("0")))}}),W={to:R.address,data:i,value:E};U.getSigner().estimateGas(W).then(async h=>{const B={...W,gasLimit:sn(h)};return U.getSigner().sendTransaction(B).then(ce=>{Ie(ce)})}).catch(h=>{if(console.log("error",h),$(!1),!gt(h)){const B=new Error("Remove Elastic Liquidity Error",{cause:h});B.name=nn.RemoveElasticLiquidityError,tn(B,{extra:{calldata:i,value:E,to:R.address}})}l((h==null?void 0:h.message)||JSON.stringify(h))})},ie=y.useCallback(()=>{be(!1),ae&&w(t.LIQUIDITY_PERCENT,"0"),$(!1),Ee(""),l("")},[w,ae]),wn=e.jsx(C,{id:"LWyy1S",values:{0:s==null?void 0:s.toSignificant(6),1:(Ye=s==null?void 0:s.currency)==null?void 0:Ye.symbol,2:a==null?void 0:a.toSignificant(6),3:(We=a==null?void 0:a.currency)==null?void 0:We.symbol,4:N&&(r!=null&&r.greaterThan(V)||o!=null&&o.greaterThan(V))?e.jsx("br",{}):"",5:N&&(r!=null&&r.greaterThan(V)||o!=null&&o.greaterThan(V))?`Collecting fee of ${r==null?void 0:r.toSignificant(6)} ${(Be=r==null?void 0:r.currency)==null?void 0:Be.symbol} and ${o==null?void 0:o.toSignificant(6)} ${(Me=o==null?void 0:o.currency)==null?void 0:Me.symbol}`:""}});function vn(){return e.jsx(lt,{mt:"16px",onClick:In,children:e.jsx(C,{id:"t/YqKh"})})}const Pn=y.useCallback(i=>w(t.CURRENCY_A,i),[w]),Un=y.useCallback(i=>w(t.CURRENCY_B,i),[w]),An=Vn(`(max-width: ${et.upToMedium}px)`),kn=ut(Y,!1,!1),we=xt(Y,!1,!1);return e.jsxs(e.Fragment,{children:[e.jsx(nt,{isOpen:Tn,onDismiss:ie,attemptingTxn:jn,hash:ae,content:()=>D?e.jsx(tt,{onDismiss:ie,message:D}):e.jsx(rt,{title:qe._({id:"3XBvkd"}),onDismiss:ie,topContent:()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{marginTop:"1.5rem"}),c&&e.jsx(on,{position:c,tokenId:n.toString()}),e.jsx(bt,{liquidityValue0:s,liquidityValue1:a,title:qe._({id:"oVPqBa"})}),c?N?e.jsx(Et,{totalFeeRewardUSD:Re,feeValue0:r,feeValue1:o,position:c,tokenId:n}):null:e.jsx(ee,{}),e.jsx(st,{marginTop:"1rem",padding:"1rem",children:e.jsxs(se,{gap:"md",children:[e.jsx(x,{fontSize:12,fontWeight:500,children:e.jsx(C,{id:"Y1Iw94"})}),e.jsx(de,{}),e.jsxs(ot,{children:[e.jsx(at,{fontSize:12,fontWeight:500,color:d.subText,minWidth:"max-content",children:e.jsx(it,{width:"200px",text:e.jsx(x,{children:e.jsx(C,{id:"WUxFPF",components:{0:e.jsx(ct,{href:"https://docs.kyberswap.com/getting-started/foundational-topics/decentralized-finance/slippage"})}})}),placement:"auto",children:e.jsx(C,{id:"x6GJ4a"})})}),e.jsx(me.black,{fontSize:12,color:kn?d.warning:void 0,children:dt(Y)})]})]})}),we===Ge.HIGH&&e.jsx(Xe,{padding:"10px 16px",m:"20px 0 0",children:e.jsxs(f,{alignItems:"center",children:[e.jsx(Je,{stroke:d.warning,size:"16px"}),e.jsx(me.black,{ml:"12px",fontSize:"12px",flex:1,children:e.jsx(C,{id:"Cdal08",components:{0:e.jsx(cn,{style:{minWidth:"max-content"},as:"a",href:Ze,target:"_blank",rel:"noreferrer"}),1:e.jsx(dn,{sx:{ml:"0.5ch"}})}})})]})})]}),bottomContent:vn}),pendingText:wn}),e.jsxs(Ft,{children:[e.jsx(wt,{hideShare:!0,isElastic:!0,alignTitle:"left",action:vt.REMOVE,showTooltip:!1,tutorialType:kt.ELASTIC_REMOVE_LIQUIDITY,owner:g,showOwner:g&&T&&!H}),e.jsx(Mt,{children:S?e.jsx(se,{gap:"md",style:{textAlign:"left"},children:e.jsxs(Yt,{children:[e.jsxs(Wt,{children:[c?e.jsx(on,{position:c,tokenId:n.toString(),showRangeInfo:!1}):e.jsx(ee,{}),e.jsxs(le,{style:{borderRadius:"1rem",padding:"1rem"},children:[e.jsxs(f,{alignItems:"center",sx:{gap:"4px"},children:[e.jsxs(Dt,{color:K?d.red:he?d.warning:d.primary,children:["#",n.toString()]}),e.jsx(It,{removed:K,inRange:!he,hideText:!0,size:14})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",fontWeight:"500",marginTop:"1rem",marginBottom:"0.75rem",children:[e.jsx(x,{children:e.jsx(C,{id:"YHc3B+"})}),e.jsx(x,{children:Ke(hn)})]}),e.jsx(de,{}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:["Pooled ",p==null?void 0:p.currency.symbol]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(ne,{currency:p==null?void 0:p.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[p&&e.jsx(an,{currencyAmount:p})," ",(ze=p==null?void 0:p.currency)==null?void 0:ze.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:["Pooled ",u==null?void 0:u.currency.symbol]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(ne,{currency:u==null?void 0:u.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[u==null?void 0:u.toSignificant(10)," ",u==null?void 0:u.currency.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",fontWeight:"500",marginTop:"1.25rem",marginBottom:"0.75rem",children:[e.jsx(x,{children:"My Fee Earnings"}),pe&&!r?e.jsx(ee,{}):e.jsx(x,{children:Ke(Re)})]}),e.jsx(de,{}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:[r==null?void 0:r.currency.symbol," Fee Earned"]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(ne,{currency:r==null?void 0:r.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[r&&e.jsx(an,{currencyAmount:r})," ",(De=r==null?void 0:r.currency)==null?void 0:De.symbol]})]})]}),e.jsxs(f,{justifyContent:"space-between",fontSize:"12px",marginTop:"0.75rem",children:[e.jsxs(x,{color:d.subText,children:[o==null?void 0:o.currency.symbol," Fee Earned"]}),e.jsxs(f,{alignItems:"center",children:[e.jsx(ne,{currency:o==null?void 0:o.currency,size:"16px"}),e.jsxs(x,{fontWeight:"500",marginLeft:"4px",children:[o==null?void 0:o.toSignificant(10)," ",o==null?void 0:o.currency.symbol]})]})]})]})]}),e.jsxs(Bt,{children:[e.jsxs(zt,{children:[e.jsx(x,{fontSize:12,color:d.subText,fontWeight:"500",children:e.jsx(C,{id:"dQldnN"})}),e.jsxs(le,{padding:"1rem",marginTop:"1rem",style:{borderRadius:"1rem",border:`1px solid ${d.border}`},children:[e.jsxs(f,{sx:{gap:"1rem"},alignItems:"center",children:[e.jsxs(Qt,{fontSize:36,fontWeight:"500",children:[ye,"%"]}),e.jsxs(Ot,{children:[e.jsx(re,{onClick:()=>w(t.LIQUIDITY_PERCENT,"25"),children:e.jsx(C,{id:"Xeb0wM"})}),e.jsx(re,{onClick:()=>w(t.LIQUIDITY_PERCENT,"50"),children:e.jsx(C,{id:"wW+u6Y"})}),e.jsx(re,{onClick:()=>w(t.LIQUIDITY_PERCENT,"75"),children:e.jsx(C,{id:"N+aNR1"})}),e.jsx(re,{onClick:()=>w(t.LIQUIDITY_PERCENT,"100"),children:e.jsx(C,{id:"CK1KXz"})})]})]}),e.jsx(At,{value:ye,onChange:pn,size:16,style:{width:"100%",margin:"1rem 0 0",padding:"0.75rem 0"}})]}),e.jsxs($t,{children:[e.jsx("div",{style:{flex:1,border:`1px solid ${d.border}`,borderRadius:"1rem"},children:e.jsx(Ve,{value:Se[t.CURRENCY_A],onUserInput:Pn,onMax:null,onHalf:null,currency:s==null?void 0:s.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokena",estimatedUsd:en(fn.toString(),!0)||void 0,disableCurrencySelect:!fe&&!Ce,isSwitchMode:fe||Ce,onSwitchCurrency:()=>ue(i=>!i)})}),e.jsx("div",{style:{flex:1,border:`1px solid ${d.border}`,borderRadius:"1rem"},children:e.jsx(Ve,{value:Se[t.CURRENCY_B],onUserInput:Un,onMax:null,onHalf:null,currency:a==null?void 0:a.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokenb",estimatedUsd:en(Cn.toString(),!0)||void 0,disableCurrencySelect:!Te&&!je,isSwitchMode:Te||je,onSwitchCurrency:()=>ue(i=>!i)})})]})]}),we===Ge.HIGH&&e.jsx(Xe,{padding:"10px 16px",m:"24px 0 0",children:e.jsxs(f,{alignItems:"center",children:[e.jsx(Je,{stroke:d.warning,size:"16px"}),e.jsx(me.black,{ml:"12px",fontSize:"12px",flex:1,children:e.jsx(C,{id:"Cdal08",components:{0:e.jsx(cn,{style:{minWidth:"max-content"},as:"a",href:Ze,target:"_blank",rel:"noreferrer"}),1:e.jsx(dn,{sx:{ml:"0.5ch"}})}})})]})}),e.jsx(f,{justifyContent:"flex-end",children:e.jsx(mt,{style:{marginTop:"16px",width:An?"100%":"fit-content",minWidth:"164px"},confirmed:!1,disabled:K||pe&&!r||(A==null?void 0:A.equalTo(new Q(0,100)))||!s||!!g&&!!T&&!H,onClick:()=>{T?be(!0):m()},children:K?e.jsx(C,{id:"D87pha"}):un??e.jsx(C,{id:"rdUucN"})})})]})]})}):e.jsx(ee,{})})]})]})}export{sr as default};
