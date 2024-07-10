import{cY as ke,j as e,F as g,a1 as qe,fg as Ae,hI as $e,e6 as We,P as Ee,s as i,bm as A,em as Ce,bn as Le,gm as Re,T as t,r as Me,cH as X,ag as c,dm as G,eB as $,cX as f,d as s,ab as K,u as Pe,x as Ve,M as _e,eQ as Ne,fh as Oe,b0 as Be,hJ as De,fa as Ue,dU as B,du as Q,k as me,bj as oe,a8 as He,cD as Ye,aa as H,g as Y,h0 as Je,Y as re,Z as de,Q as q,e as Qe,fd as E,df as ce,B as xe,J as le,U as Xe,ev as Ge,cm as Ke,hx as ae,hE as Ze}from"./index-5ecfe8e3.js";import{I as en}from"./styleds-fee96e10.js";import{u as W}from"./index-5b8c3efc.js";const he=()=>{const n=ke();return e.jsx(g,{width:24,height:24,justifyContent:"center",alignItems:"center",sx:{borderRadius:"999px",background:qe(n.apr,.2)},children:e.jsx(Ae,{size:16,color:n.apr})})};function Z(n){var p,m;const u=$e(n==null?void 0:n.address),o=(m=(p=We(u,"totalSupply"))==null?void 0:p.result)==null?void 0:m[0];return n&&o?Ee.fromRawAmount(n,o.toString()):void 0}i.div`
  padding: 28px 16px 100px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 24px 16px 100px;
  }

  @media only screen and (min-width: 1000px) {
    padding: 24px 32px 100px;
  }

  @media only screen and (min-width: 1366px) {
    padding: 24px 215px 50px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 24px 252px 50px;
  }
`;i.div`
  max-width: 936px;
  margin: 0 auto;
  padding: 4px 20px 24px;
  background: ${({theme:n})=>n.background};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 20px;

  @media only screen and (min-width: 1000px) {
    padding: 4px 24px 24px;
  }
`;i.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;i.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  border-top: 1px solid ${({theme:n})=>n.border};
  margin-top: 1rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
`;i.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding-right: 24px;
  }
`;i.div`
  display: flex;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:n})=>n.subText};

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;i(A)`
  grid-auto-rows: min-content;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:n})=>n.border};
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    padding-right: 24px;
    padding-bottom: 0;
    border-right: 1px solid ${({theme:n})=>n.border};
    border-bottom: none;
  }
`;i(A)`
  grid-auto-rows: min-content;
  padding-top: 24px;

  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    padding-top: 0;
  }
`;const ge=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;i.div`
  font-weight: 500;
  font-size: 12px;
  color: ${({theme:n})=>n.subText};
`;i(Ce)`
  padding: 16px 12px;
  border: 1px solid ${({theme:n})=>n.border};

  @media only screen and (min-width: 768px) {
    padding: 16px;
  }
`;i.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px dashed ${({theme:n})=>n.border};
  padding-bottom: 8px;
`;i.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;i(A)`
  flex: 1;
  justify-content: flex-start;
`;i.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 8px;
  color: ${({theme:n})=>n.subText};
`;i.div`
  display: flex;
  background: ${({theme:n})=>`${n.warning}20`};
  border-radius: 999px;
  padding: 0.75rem 1rem;
  margin-bottom: 24px;
`;i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;const C=i(Le)`
  height: 24px;
`,je=i.div`
  width: 1px;
  height: 10px;
  background-color: ${({theme:n})=>n.subText};
`,fe=i(Re)`
  border: none;
  background: ${({theme:n})=>n.background};
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 20px;

  ${({theme:n})=>n.mediaWidth.upToSmall`
    padding: 16px;
  `}
`,nn=i.div`
  display: flex;
  flex-direction: column;
  background: ${({theme:n})=>n.background};
  border-radius: 20px;
  padding: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    padding: 20px 16px;
    gap: 1rem;
  }
`,J=i(je)`
  height: 36px;
  background-color: ${({theme:n})=>n.border};

  @media only screen and (max-width: 999px) {
    display: none;
  }
`,O=i(A)`
  width: 100%;
  border-bottom: ${({theme:n,noBorder:u})=>u?"none":`1px solid ${n.border}`};
  padding-bottom: ${({noPadding:n})=>n?"0":"1rem"};
  gap: 4px;

  @media only screen and (min-width: 1000px) {
    width: fit-content;
    border-bottom: none;
    padding-bottom: 0;
  }
`,pe=i(t)`
  color: ${({theme:n})=>n.warning};
  text-align: center;
`,ue=(n,u)=>{const o=parseFloat(n.toSignificant(6))*u;return e.jsx("span",{children:`(~${Q(o.toString(),!0)})`})};function rn({pair:n,showUnwrapped:u=!1,border:o}){const p=u?n.token0:W(n.token0),m=u?n.token1:W(n.token1),[x,y]=Me.useState(!1),r=X(n.liquidityToken),d=Z(n.liquidityToken),j=r&&d&&c.greaterThanOrEqual(d.quotient,r.quotient)?new G(r.quotient,d.quotient):void 0,[a,h]=n&&d&&r&&c.greaterThanOrEqual(d.quotient,r.quotient)?[n.getLiquidityValue(n.token0,d,r),n.getLiquidityValue(n.token1,d,r)]:[void 0,void 0],b=$(p||void 0),S=$(m||void 0);return e.jsx(e.Fragment,{children:e.jsx(fe,{border:o,children:e.jsxs(A,{gap:"12px",children:[e.jsx(C,{children:e.jsx(f,{children:e.jsx(t,{fontWeight:500,fontSize:16,children:e.jsx(s,{id:"kijTlQ"})})})}),e.jsxs(C,{onClick:()=>y(!x),children:[e.jsxs(f,{children:[e.jsx(K,{currency0:b,currency1:S,margin:!0,size:20}),e.jsxs(t,{fontWeight:500,fontSize:20,children:[b==null?void 0:b.symbol,"/",S==null?void 0:S.symbol]})]}),e.jsx(f,{children:e.jsxs(t,{fontWeight:500,fontSize:20,children:[r?r.toSignificant(4):"-"," "]})})]}),e.jsxs(A,{gap:"4px",children:[e.jsxs(C,{children:[e.jsx(t,{fontSize:16,fontWeight:500,children:e.jsx(s,{id:"CTJcx0"})}),e.jsx(t,{fontSize:16,fontWeight:500,children:j?j.toFixed(6)+"%":"-"})]}),e.jsxs(C,{children:[e.jsxs(t,{fontSize:16,fontWeight:500,children:[b==null?void 0:b.symbol,":"]}),a?e.jsx(f,{children:e.jsx(t,{fontSize:16,fontWeight:500,marginLeft:"6px",children:a==null?void 0:a.toSignificant(6)})}):"-"]}),e.jsxs(C,{children:[e.jsxs(t,{fontSize:16,fontWeight:500,children:[S==null?void 0:S.symbol,":"]}),h?e.jsx(f,{children:e.jsx(t,{fontSize:16,fontWeight:500,marginLeft:"6px",children:h==null?void 0:h.toSignificant(6)})}):"-"]})]})]})})})}function dn({pair:n,showUnwrapped:u=!1}){const o=me(),p=u?n.token0:W(n.token0),m=u?n.token1:W(n.token1),x=X(n.liquidityToken),y=Z(n.liquidityToken),r=x&&y&&c.greaterThanOrEqual(y.quotient,x.quotient)?new G(x.quotient,y.quotient):void 0,[d,j]=n&&y&&x&&c.greaterThanOrEqual(y.quotient,x.quotient)?[n.getLiquidityValue(n.token0,y,x),n.getLiquidityValue(n.token1,y,x)]:[void 0,void 0],a=$(p||void 0),h=$(m||void 0),b=Ke([n.token0.wrapped.address,n.token1.wrapped.address]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{fontWeight:500,fontSize:16,marginX:"16px",paddingY:"1rem",style:{borderBottom:`1px solid ${o.border}`},children:e.jsx(s,{id:"IYWJrB"})}),e.jsxs(nn,{children:[e.jsxs(O,{gap:"4px",children:[e.jsxs(f,{children:[e.jsx(K,{currency0:a,currency1:h,size:16}),e.jsx(ae,{style:{marginLeft:"4px"},children:e.jsxs(t,{fontWeight:500,fontSize:12,color:o.subText,children:[a==null?void 0:a.symbol,"/",h==null?void 0:h.symbol," LP Tokens"]})})]}),e.jsx(f,{children:e.jsxs(t,{fontWeight:400,fontSize:14,children:[x?x.toSignificant(4):"-"," "]})})]}),e.jsx(J,{}),e.jsxs(O,{children:[e.jsxs(ge,{children:[e.jsx(q,{currency:a,size:"16px"}),e.jsx(t,{fontSize:12,fontWeight:500,children:a==null?void 0:a.symbol})]}),d?e.jsx(f,{children:e.jsxs(t,{fontSize:14,fontWeight:400,children:[d.equalTo("0")?"0":d.divide(d.decimalScale).lessThan(new B(c.BigInt(1),c.BigInt(100)))?"<0.01":d==null?void 0:d.toSignificant(6)," ",ue(d,b[n.token0.wrapped.address])]})}):"-"]}),e.jsx(J,{}),e.jsxs(O,{children:[e.jsxs(ge,{children:[e.jsx(q,{currency:h,size:"16px"}),e.jsx(t,{fontSize:12,fontWeight:500,children:h==null?void 0:h.symbol})]}),j?e.jsx(f,{children:e.jsxs(t,{fontSize:14,fontWeight:400,children:[j.equalTo("0")?"0":j.divide(j.decimalScale).lessThan(new B(c.BigInt(1),c.BigInt(100)))?"<0.01":j==null?void 0:j.toSignificant(6)," ",ue(j,b[n.token1.wrapped.address])]})}):"-"]}),e.jsx(J,{}),e.jsxs(O,{gap:"4px",noBorder:!0,noPadding:!0,children:[e.jsx(t,{fontSize:12,fontWeight:500,color:o.subText,children:e.jsx(ae,{children:e.jsx(s,{id:"4NkIrL"})})}),e.jsxs(t,{fontSize:14,fontWeight:400,children:[r&&r.greaterThan("0")?r!=null&&r.lessThan(Ze)?"<0.01":r==null?void 0:r.toFixed(2):"0","%"]})]})]})]})}const k=i(g)`
  justify-content: space-between;
  color: ${({theme:n})=>n.subText};
  font-weight: 500;
  margin-top: 8px;
  font-size: 12px;
  line-height: 2;
`;function cn({pair:n,border:u,stakedBalance:o,myLiquidity:p,tab:m,farm:x,farmAPR:y=0}){const{chainId:r,networkInfo:d}=Pe(),j=Ve(`(max-width: ${_e.upToSmall}px)`),a=Ne(),h=Math.round(Date.now()/1e3),b=x&&(x.version===Oe.V1?x.endBlock<=(a||Number.MAX_SAFE_INTEGER):x.endTime<=h),S=x?b?"FARM_ENDED":"FARM_ACTIVE":"NO_FARM",ye=Be(),{data:T}=De(n.address.toLowerCase(),ye.currentPrice),be=(T==null?void 0:T.oneDayFeeUSD)||(T==null?void 0:T.oneDayFeeUntracked),ee=Ue(T==null?void 0:T.reserveUSD,be),ne=ee+(m&&m==="STAKED"?y:0),L=W(n.token0),R=W(n.token1),v=X(n.liquidityToken),w=Z(n.liquidityToken),z=o?v==null?void 0:v.add(o):v,D=z&&w&&c.greaterThanOrEqual(w.quotient,z.quotient)?new G(z.quotient,w.quotient):void 0,[M,P]=n&&w&&z&&c.greaterThanOrEqual(w.quotient,z.quotient)?[n.getLiquidityValue(n.token0,w,z),n.getLiquidityValue(n.token1,w,z)]:[void 0,void 0],[V,_]=n&&w&&o&&c.greaterThanOrEqual(w.quotient,o.quotient)?[n.getLiquidityValue(n.token0,w,o),n.getLiquidityValue(n.token1,w,o)]:[void 0,void 0],Se=new B(c.BigInt(n.amp)).divide(c.BigInt(1e4)),U=n.reserve0.asFraction.divide(n.virtualReserve0).multiply("100").divide(n.reserve0.divide(n.virtualReserve0).asFraction.add(n.reserve1.divide(n.virtualReserve1).asFraction)),Te=new B(c.BigInt(100),c.BigInt(1)).subtract(U),we=p?parseFloat(p.liquidityTokenBalance)*parseFloat(p.pool.reserveUSD)/parseFloat(p.pool.totalSupply):0,te=p?parseFloat((o==null?void 0:o.toExact())||"0")*parseFloat(p.pool.reserveUSD)/parseFloat(p.pool.totalSupply):0,ve=Q((we+te).toString(),!0),ie=U.lessThan(c.BigInt(10))||Te.lessThan(c.BigInt(10)),se=ie?U.lessThan(c.BigInt(10))?n.token0.symbol:n.token1.symbol:void 0,I=$(L||void 0),F=$(R||void 0),l=me(),N=S!=="NO_FARM"?`${oe.FARMS}/${d.route}?tab=classic&type=${S==="FARM_ACTIVE"?"active":"ended"}&search=${n.address}`:"",ze=()=>S!=="FARM_ACTIVE"?null:j?e.jsx(H,{placement:"top",noArrow:!0,text:e.jsx(t,{children:e.jsx(s,{id:"enRVVW",components:{0:e.jsx(E,{to:N})}})}),children:e.jsx(he,{})}):e.jsx(H,{width:"fit-content",placement:"top",text:e.jsx(s,{id:"kNG1DT"}),children:e.jsx(E,{to:N,children:e.jsx(he,{})})}),Ie=ee.toFixed(2),Fe=y.toFixed(2);return e.jsxs(fe,{border:u,children:[e.jsxs(g,{justifyContent:"space-between",children:[e.jsxs("div",{children:[e.jsxs(g,{alignItems:"center",children:[e.jsx(K,{currency0:I,currency1:F,size:24}),e.jsx(t,{fontWeight:500,fontSize:20,children:`${I==null?void 0:I.symbol}/${F==null?void 0:F.symbol}`})]}),e.jsxs(g,{alignItems:"center",sx:{gap:"6px"},marginTop:"12px",children:[e.jsxs(t,{color:l.subText,fontWeight:500,fontSize:"12px",width:"max-content",children:["AMP = ",Se.toSignificant(5)]}),e.jsx(je,{}),e.jsxs(g,{alignItems:"center",color:l.subText,fontSize:12,children:[e.jsx(t,{children:He(r,n.address,3)}),e.jsx(Ye,{toCopy:n.address})]})]})]}),e.jsxs(g,{sx:{gap:"4px"},children:[ze(),ie&&e.jsx(H,{text:se?e.jsx(pe,{children:Y._({id:"rrIcnv",values:{warningToken:se}})}):e.jsx(pe,{children:e.jsx(s,{id:"kkDIWb"})}),children:e.jsx(en,{style:{width:"24px",height:"24px",background:l.warning,marginLeft:S==="FARM_ACTIVE"?"8px":0},children:e.jsx(Je,{color:l.textReverse,size:16})})})]})]}),e.jsx(g,{marginTop:"0.25rem",justifyContent:"flex-end",alignItems:"center"}),e.jsxs(g,{alignItems:"center",justifyContent:"space-between",marginTop:"1rem",children:[e.jsx(t,{fontSize:"1rem",fontWeight:500,color:l.subText,children:m==="ALL"?e.jsx(s,{id:"YHc3B+"}):e.jsx(s,{id:"luOvdJ"})}),e.jsxs(g,{fontSize:12,color:l.subText,marginTop:"2px",alignItems:"baseline",sx:{gap:"4px"},children:[e.jsxs(g,{alignItems:"center",flexDirection:"row",children:["APR ",m==="STAKED"&&e.jsx(re,{text:Y._({id:"IsfDu0",values:{feeApr:Ie,farmApr:Fe}}),size:14})]}),e.jsx(t,{as:"span",color:l.apr,fontSize:"20px",fontWeight:500,children:ne?`${ne.toFixed(2)}%`:"--"})]})]}),e.jsx(de,{sx:{marginTop:"0.5rem"}}),e.jsx(g,{height:"168px",marginTop:"0.75rem",flexDirection:"column",children:m==="ALL"?e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"UTDllE"})}),e.jsx(t,{fontSize:14,color:l.text,children:ve})]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"oTDDqF"})}),e.jsx(t,{color:l.text,fontSize:14,children:(z==null?void 0:z.toSignificant(6))??"-"})]}),e.jsxs(k,{children:[e.jsxs(g,{alignItems:"center",children:[e.jsx(t,{children:e.jsx(s,{id:"InYg6n"})}),e.jsx(re,{text:Y._({id:"PtfsIG"}),size:14})]}),e.jsx(t,{color:l.text,fontSize:14,children:(v==null?void 0:v.toSignificant(6))??"0"})]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"51e8y3",values:{0:I==null?void 0:I.symbol}})}),M?e.jsxs(f,{children:[e.jsx(q,{size:"16px",currency:L}),e.jsx(t,{fontSize:14,fontWeight:500,marginLeft:"6px",color:l.text,children:M==null?void 0:M.toSignificant(6)})]}):"-"]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"51e8y3",values:{0:F==null?void 0:F.symbol}})}),P?e.jsxs(f,{children:[e.jsx(q,{size:"16px",currency:R}),e.jsx(t,{color:l.text,fontSize:14,fontWeight:500,marginLeft:"6px",children:P==null?void 0:P.toSignificant(6)})]}):"-"]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"4NkIrL"})}),e.jsx(t,{fontSize:14,color:l.text,children:D?(D.toFixed(2)==="0.00"?"<0.01":D.toFixed(2))+"%":"-"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"bEml4G"})}),e.jsx(t,{fontSize:14,color:l.text,children:Q(te.toString(),!0)})]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"KqT48S"})}),e.jsx(t,{color:l.text,fontSize:14,children:(o==null?void 0:o.toSignificant(6))??"-"})]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"TxQ8NV",values:{0:I==null?void 0:I.symbol}})}),V?e.jsxs(f,{children:[e.jsx(q,{size:"16px",currency:L}),e.jsx(t,{fontSize:14,fontWeight:500,marginLeft:"6px",color:l.text,children:V==null?void 0:V.toSignificant(6)})]}):"-"]}),e.jsxs(k,{children:[e.jsx(t,{children:e.jsx(s,{id:"TxQ8NV",values:{0:F==null?void 0:F.symbol}})}),_?e.jsxs(f,{children:[e.jsx(q,{size:"16px",currency:R}),e.jsx(t,{color:l.text,fontSize:14,fontWeight:500,marginLeft:"6px",children:_==null?void 0:_.toSignificant(6)})]}):"-"]})]})}),m==="ALL"?e.jsx(g,{marginTop:"20px",sx:{gap:"1rem"},children:v!=null&&v.greaterThan(c.BigInt(0))?e.jsx(Qe,{style:{padding:"10px",fontSize:"14px"},as:E,to:`/${d.route}${oe.CLASSIC_REMOVE_POOL}/${ce(L,r)}/${ce(R,r)}/${n.address}`,children:e.jsx(t,{width:"max-content",children:e.jsx(s,{id:"3XBvkd"})})}):e.jsx(xe,{disabled:!0,style:{padding:"10px",fontSize:"14px"},children:e.jsx(t,{width:"max-content",children:e.jsx(s,{id:"3XBvkd"})})})}):e.jsx(xe,{padding:"10px",style:{fontSize:"14px"},as:E,to:N,children:e.jsx(t,{width:"max-content",children:e.jsx(s,{id:"Qul+Hq"})})}),e.jsx(de,{sx:{marginTop:"20px"}}),e.jsxs(g,{justifyContent:"space-between",marginTop:"16px",alignItems:"center",children:[e.jsx(le,{width:"max-content",style:{fontSize:"14px"},padding:"0",children:e.jsx(Xe,{style:{width:"100%",textAlign:"center"},href:`${Ge[r]}/pool/${(T==null?void 0:T.id)??""}`,children:e.jsx(s,{id:"gwSjS9"})})}),!!x&&e.jsx(le,{width:"max-content",style:{fontSize:"14px"},padding:"0",as:E,to:N,children:e.jsx(s,{id:"gbY6VB"})})]})]})}export{cn as F,dn as M,rn as N,Z as u};
