import{j as e,k as te,u as re,i1 as ne,fK as ie,ft as Y,hS as le,ie as oe,r as P,i0 as de,ig as i,ec as ae,cE as xe,T as n,hT as he,I as ce,F as w,bp as pe,d as o,X as je,d8 as me,v as h,ih as K,U as z,cF as O,bo as T,a9 as u,bc as B,ge as ue,ii as ge,fe,cQ as Ce,s as d,aS as k}from"./index-828313f3.js";function Me({size:s}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:s||"16",height:s||"16",viewBox:"0 0 22 20",children:e.jsx("g",{fill:"none",fillRule:"evenodd",children:e.jsx("g",{children:e.jsx("g",{children:e.jsxs("g",{children:[e.jsx("path",{d:"M0 0L24 0 24 24 0 24z",transform:"translate(-798 -98) translate(789 90) translate(8 6)"}),e.jsxs("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",children:[e.jsx("path",{d:"M4.5 9L2.25 11.25 0 9M2.25 9c0 .694.086 1.366.235 2.015M20.25 9c0-4.971-4.029-9-9-9s-9 4.029-9 9M11.25 18c4.971 0 9-4.029 9-9M3.879 14.155C5.506 16.478 8.198 18 11.25 18",transform:"translate(-798 -98) translate(789 90) translate(8 6) translate(1.875 3)"}),e.jsx("path",{d:"M14.621 11.871L10.969 9.698 10.969 4.985",transform:"translate(-798 -98) translate(789 90) translate(8 6) translate(1.875 3)"})]})]})})})})})}function U({size:s}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s||"24",height:s||"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_8770_108835)",children:e.jsx("path",{d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V3H15C14.45 3 14 3.45 14 4Z",fill:"currentcolor"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_8770_108835",children:e.jsx("rect",{width:"24",height:"24",fill:"transparent"})})})]})}function we({size:s="52"}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 52 52",fill:"none",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26 2V2C39.256 2 50 12.744 50 26V26C50 39.256 39.256 50 26 50V50C12.744 50 2 39.256 2 26V26C2 12.744 12.744 2 26 2Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M25.998 15.5C25.722 15.5 25.498 15.724 25.5 16C25.5 16.276 25.724 16.5 26 16.5C26.276 16.5 26.5 16.276 26.5 16C26.5 15.724 26.276 15.5 25.998 15.5",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M27 37V24H24",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Te=d.div`
  width: 100%;
  padding: 20px;
`,Q="5fr 3fr 3fr 3fr",be="1fr 1fr",ke=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,ye=d.div`
  display: grid;
  grid-template-columns: ${Q};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px 8px 0px 0px;
  ${({theme:s})=>k`
    background-color: ${s.background};
  `}

  ${({theme:s})=>s.mediaWidth.upToSmall`
    display: none;
  `}
`,g=d.div`
  padding: 16px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: ${({align:s})=>s};
  ${({theme:s})=>k`
    color: ${s.subText};
  `}
`,Z=d.div`
  height: 55px;
  display: grid;
  grid-template-columns: ${Q};
  ${({theme:s})=>k`
    border-bottom: 1px solid ${s.border};
  `};
  ${({theme:s})=>s.mediaWidth.upToSmall`
    grid-template-columns: ${be};
    height: 76px;
  `}
`,x=d.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 4px;
  font-size: 14px;
  color: ${({theme:s})=>s.text};
  justify-content: ${({justify:s})=>s};
  svg {
    width: 16px;
    height: 16px;
    color: ${({theme:s})=>s.subText};
  }
  ${({theme:s})=>s.mediaWidth.upToSmall`
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 0;
    &>*{
      flex:1;
    }
  `}
`,G=d.div`
  cursor: pointer;
`,b=s=>s>0&&s<.001?"<0.001":s==null?void 0:s.toLocaleString();function ve(){const s=te(),{chainId:X}=re(),{proposals:c,calculateVotingPower:f}=ne(),q=ie(Y.YOUR_TRANSACTIONS_STAKE_KNC),p=le(Y.YOUR_TRANSACTIONS_STAKE_KNC),y=oe(),_=y.width&&y.width<768,[j,J]=P.useState(1),m=_?5:10,{stakerActions:l}=de(),C=P.useMemo(()=>{var r;return((r=l==null?void 0:l.slice((j-1)*m,j*m))==null?void 0:r.map(t=>({...t,hashText:t.tx_hash.slice(0,6)+"..."+t.tx_hash.slice(-4),type:{[i.VoteEmitted]:"Vote",[i.ClaimReward]:"Claim",[i.Deposit]:"Stake",[i.Withdraw]:"Unstake",[i.Delegate]:"Delegate"}[t.type],description:(()=>{var v,S,L,I,N,R,$,V,W,D,H,A,E,F;switch(t.type){case i.VoteEmitted:{const a=c==null?void 0:c.find(se=>se.proposal_id===t.meta.proposal_id);if(!a)return e.jsx(e.Fragment,{});const ee=((v=t.meta)==null?void 0:v.amount)??0;return e.jsxs(e.Fragment,{children:[b(ee)+" KNC",e.jsxs(n,{fontSize:12,color:s.subText,children:["+ ",(+(((S=t.meta)==null?void 0:S.amount)||0)/((L=a.vote_stats)==null?void 0:L.total_vote_count)*100).toPrecision(3),"% Power"]})]})}case i.Deposit:{const a=((I=t.meta)==null?void 0:I.amount)??0;return e.jsxs(e.Fragment,{children:[b(a)+" KNC",e.jsxs(n,{fontSize:12,color:s.subText,children:["+ ",f(((R=(N=t.meta)==null?void 0:N.amount)==null?void 0:R.toString())||"0"),"% Power"]})]})}case i.Withdraw:{const a=(($=t.meta)==null?void 0:$.amount)??0;return e.jsxs(e.Fragment,{children:[b(a)+" KNC",e.jsxs(n,{fontSize:12,color:s.subText,children:["- ",f(((W=(V=t.meta)==null?void 0:V.amount)==null?void 0:W.toString())||"0"),"% Power"]})]})}case i.Delegate:return e.jsxs(e.Fragment,{children:["--",e.jsxs(ae,{fontSize:12,color:s.subText,children:["to ",`${(H=(D=t==null?void 0:t.meta)==null?void 0:D.d_addr)==null?void 0:H.slice(0,6)}...${(E=(A=t==null?void 0:t.meta)==null?void 0:A.d_addr)==null?void 0:E.slice(-4)}`,e.jsx(xe,{toCopy:((F=t==null?void 0:t.meta)==null?void 0:F.d_addr)||"",style:{display:"inline-block",width:"12px",height:"16px"}})]})]})}return t.meta.amount?`${t.meta.amount} KNC`:t.meta.d_addr?t.meta.d_addr.slice(0,6)+"..."+t.meta.d_addr.slice(-4):""})()})))||[]},[l,c,f,s.subText,j,m]),[,M]=he();return e.jsx(ce,{isOpen:q,onDismiss:p,maxHeight:750,maxWidth:800,width:"70vw",children:e.jsx(Te,{children:e.jsxs(w,{flexDirection:"column",style:{minHeight:"500px",gap:"20px"},children:[e.jsxs(pe,{children:[e.jsx(n,{fontSize:20,children:e.jsx(o,{id:"cyx/NW"})}),e.jsx(w,{sx:{cursor:"pointer"},role:"button",onClick:p,children:e.jsx(je,{onClick:p,size:20,color:s.subText})})]}),e.jsxs(ke,{children:[e.jsxs(ye,{children:[e.jsx(g,{children:e.jsx(o,{id:"IFhn8a"})}),e.jsx(g,{children:e.jsx(o,{id:"bwRvnp"})}),e.jsx(g,{children:e.jsx(o,{id:"D/9dsd"})}),e.jsx(g,{align:"right",children:e.jsx(o,{id:"hehnjM"})})]}),C.length>0?_?e.jsx(e.Fragment,{children:C.map(r=>e.jsxs(Z,{children:[e.jsxs(x,{children:[e.jsxs(B,{gap:"4px",children:[e.jsx("img",{src:`${ue(ge,h.MAINNET)}`,alt:"knc-logo",width:"24px",height:"24px"}),e.jsx(n,{children:r.type}),e.jsx(G,{onClick:()=>M(r.tx_hash),children:e.jsx(K,{})}),e.jsx(z,{href:O(1,r.tx_hash,"transaction"),children:e.jsx(U,{})})]}),e.jsxs(B,{gap:"4px",children:[e.jsx(n,{color:s.text,children:u(r.timestamp).format("MM/DD/YYYY")}),e.jsx(n,{color:s.subText,children:u(r.timestamp).format("hh:mm:ss")})]})]}),e.jsx(x,{children:e.jsx(T,{justify:"flex-end",style:{width:"100%"},children:r.description})})]},r.tx_hash))}):e.jsx(e.Fragment,{children:C.map(r=>e.jsxs(Z,{children:[e.jsxs(x,{children:[e.jsx(me,{style:{width:16,height:16},chainId:h.MAINNET}),e.jsx(n,{children:r.hashText}),e.jsx(G,{onClick:()=>M(r.tx_hash),children:e.jsx(K,{})}),e.jsx(z,{href:O(X===h.GÖRLI?h.GÖRLI:h.MAINNET,r.tx_hash,"transaction"),children:e.jsx(U,{})})]}),e.jsx(x,{children:e.jsx(n,{children:r.type})}),e.jsx(x,{children:e.jsxs(T,{children:[e.jsx(n,{color:s.text,children:u(r.timestamp*1e3).format("DD/MM/YYYY")}),e.jsx(n,{color:s.subText,children:u(r.timestamp*1e3).format("hh:mm:ss A")})]})}),e.jsx(x,{children:e.jsx(T,{justify:"flex-end",style:{width:"100%",color:s.text},gap:"4px",children:r.description})})]},r.tx_hash))}):e.jsxs(w,{alignItems:"center",justifyContent:"center",flex:1,flexDirection:"column",style:{gap:"10px"},children:[e.jsx(we,{}),e.jsx(n,{children:e.jsx(o,{id:"UwN8tW"})}),e.jsx(n,{children:e.jsx(o,{id:"ITl0HR",components:{0:e.jsx(fe,{to:"/kyberdao/stake-knc",onClick:()=>p()})}})})]}),e.jsx(Ce,{currentPage:j,onPageChange:r=>J(r),pageSize:m,totalCount:(l==null?void 0:l.length)||0,haveBg:!1})]})]})})})}export{Me as H,U as L,ve as Y};
