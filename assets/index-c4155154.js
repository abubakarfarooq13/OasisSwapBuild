import{s as g,k as le,j as e,g as v,J as Ae,X as $e,u as ge,r as i,bP as B,f as je,ek as V,az as Ee,de as Me,el as fe,x as ae,bo as X,d as a,U as J,em as xe,F as u,W as K,T as S,cS as We,a1 as ke,cR as Oe,en as be,dP as we,a6 as re,eo as $,bl as E,b0 as de,ep as Fe,aR as _e,eq as ve,er as Be,es as qe,a5 as ze,ag as ne,et as Re,eu as De,ev as Ne,aX as Ue,ed as Ye,ew as pe,B as He,cP as Ve,ex as Ge,ey as Qe,P as Xe}from"./index-d4668781.js";import{C as ie,P as Je,E as Ke,a as Ze,b as et,U as tt}from"./updater-ecea0656.js";import{W as st}from"./Withdraw-3ab9e4e4.js";import{F as Te}from"./index-a2592e0d.js";import{S as ot}from"./Search-e40e830a.js";import{S as Se}from"./SlippageSettingGroup-a32834c3.js";import{T as Z,a as ee}from"./index-31ad565a.js";import{S as nt}from"./index-d5476f4f.js";import{u as it,a as at,b as rt,F as dt}from"./ProAmmPooledTokens-92956595.js";import"./usePools-faf4787e.js";import"./useTransactionDeadline-bd9cefa7.js";import"./useParsedAmount-2c01ab4b.js";import"./styleds-c45de1f5.js";import"./index-8d4dfd45.js";const lt=g.div`
  z-index: 1;
  position: relative;
  background-color: ${({theme:t})=>t.background};
  border-radius: 999px;
  min-width: ${({minWidth:t})=>t||"360px"};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,ct=g.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 12px;
  border-radius: 40px;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    box-shadow: none;
    min-width: 100%;
  }
`,xt=g.input`
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: ${({theme:t})=>t.text};
  font-size: 12px;

  ::placeholder {
    color: ${({theme:t})=>t.subText};
    font-size: 12px;
  }
`,pt=({searchValue:t,onSearch:l,placeholder:L,minWidth:x,style:r})=>{const w=le();return e.jsx(lt,{style:r,minWidth:x,children:e.jsxs(ct,{children:[e.jsx(xt,{type:"text","data-testid":"search-pool",placeholder:L||v._({id:"Zukjpz"}),value:t,onChange:j=>{l(j.target.value)}}),t&&e.jsx(Ae,{onClick:()=>l(""),style:{padding:"2px 4px",width:"max-content"},children:e.jsx($e,{color:w.subText,size:14,style:{minWidth:"14px"}})}),e.jsx(ot,{color:w.subText,onClick:()=>l(t)})]})})},Le=pt,ue=g.span`
  color: ${({theme:t})=>t.text};
`,ut=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  ${({theme:t})=>t.mediaWidth.upToLarge`
    gap: 1rem;
    width: 100%;
    flex-direction: column;
  `}
`,mt=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${({theme:t})=>t.mediaWidth.upToSmall`
    gap: 8px;
  `}
`,me=t=>e.jsx(nt,{iconOnly:t,subscribeTooltip:e.jsx("div",{children:e.jsx(a,{id:"qwvvS6",components:{0:e.jsx(ue,{}),1:e.jsx(ue,{})}})}),trackingEvent:de.MYPOOLS_CLICK_SUBSCRIBE_BTN});function ht(){const{account:t,chainId:l,networkInfo:L}=ge(),x=i.useRef({}),{positions:r,loading:w}=it(t),{userInfo:j}=at(),p=i.useMemo(()=>(j==null?void 0:j.map(n=>({nonce:B.from("1"),tokenId:n.nftId,operator:"0x0000000000000000000000000000000000000000",poolId:n.poolAddress,tickLower:n.position.tickLower,tickUpper:n.position.tickUpper,liquidity:B.from(n.position.liquidity.toString()),feeGrowthInsideLast:B.from(0),stakedLiquidity:n.stakedLiquidity,rTokenOwed:B.from(0),token0:n.position.pool.token0.wrapped.address,token1:n.position.pool.token1.wrapped.address,fee:n.position.pool.fee})))||[],[j]),{farmPositions:y,loading:se,userFarmInfo:q}=rt(),[N,z]=i.useMemo(()=>(r==null?void 0:r.reduce((n,s)=>{var o;return n[(o=s.liquidity)!=null&&o.eq(0)?1:0].push(s),n},[[],[]]))??[[],[]],[r]),d=le(),{search:U="",tab:Y=V.ELASTIC,nftId:M}=je(),f=Ee(),W=Me(),O=n=>{f(W.pathname+"?search="+n+"&tab="+Y,{replace:!0})},m=fe(U.trim().toLowerCase(),300),[C,oe]=i.useState(!1),R=i.useCallback(n=>m.trim().length===0||!!x.current[n.token0.toLowerCase()]&&x.current[n.token0.toLowerCase()].includes(m)||!!x.current[n.token1.toLowerCase()]&&x.current[n.token1.toLowerCase()].includes(m)||n.poolId.toLowerCase()===m||n.tokenId.toString()===m,[m]),h=i.useMemo(()=>[...y,...p].filter(R),[R,y,p]),T=i.useCallback((n,s)=>+n.tokenId.toString()-+s.tokenId.toString(),[]),I=i.useMemo(()=>h.filter(n=>n.liquidity.gt("0")).sort(T),[h,T]),k=i.useMemo(()=>h.filter(n=>n.liquidity.eq("0")).sort(T),[h,T]),F=i.useMemo(()=>{const n=[...N,...I].sort(T),s=[...z,...k].sort(T);return(C?[...n,...s]:n).filter(o=>M?o.tokenId.toString()===M:m.trim().length===0||!!x.current[o.token0.toLowerCase()]&&x.current[o.token0.toLowerCase()].includes(m)||!!x.current[o.token1.toLowerCase()]&&x.current[o.token1.toLowerCase()].includes(m)||o.poolId.toLowerCase()===m||o.tokenId.toString()===m).filter((o,c,P)=>P.findIndex(A=>A.tokenId.eq(o.tokenId))===c)},[C,N,z,m,M,I,k,T]),[b,D]=i.useState(!1),H=i.useMemo(()=>b?C?[...I,...k]:I:F,[b,F,I,k,C]),_=ae("(max-width: 768px)");return e.jsxs(e.Fragment,{children:[e.jsx(ce,{style:{padding:0,marginTop:"24px"},children:e.jsxs(X,{gap:"lg",style:{width:"100%"},children:[e.jsxs(ye,{children:[e.jsx(a,{id:"yWF1ax"}),!_&&e.jsx(J,{href:`${xe[l]}/account/${t}`,children:e.jsxs(u,{alignItems:"center",children:[e.jsx(K,{size:16}),e.jsxs(S,{fontSize:"14px",marginLeft:"4px",children:[e.jsx(a,{id:"9dMHHP"})," ↗"]})]})})]}),e.jsxs(ut,{children:[e.jsxs(u,{justifyContent:"space-between",flex:1,alignItems:"center",width:"100%",children:[e.jsxs(mt,{children:[e.jsx(te,{active:!b,role:"button",onClick:()=>{D(!1)},children:e.jsx(a,{id:"Gs02OK"})}),e.jsx(te,{active:b,onClick:()=>{D(!0)},role:"button",children:We?e.jsx(a,{id:"ac44Ia"}):e.jsx(a,{id:"0ho6gf"})})]}),_&&e.jsxs(u,{sx:{gap:"8px"},children:[e.jsx(J,{href:`${xe[l]}/account/${t}`,children:e.jsx(u,{sx:{borderRadius:"50%"},width:"36px",backgroundColor:ke(d.subText,.2),height:"36px",alignItems:"center",justifyContent:"center",children:e.jsx(K,{size:16,color:d.subText})})}),e.jsx(Z,{type:ee.ELASTIC_MY_POOLS}),me(!0)]})]}),e.jsxs(jt,{children:[e.jsxs(u,{alignItems:"center",style:{gap:"8px"},children:[e.jsx(S,{fontSize:"14px",color:d.subText,children:e.jsx(a,{id:"GOctE4"})}),e.jsx(Oe,{isActive:C,toggle:()=>oe(n=>!n)})]}),e.jsx(Le,{minWidth:"254px",searchValue:U,onSearch:O,placeholder:v._({id:"4nzwq3"})}),!_&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{type:ee.ELASTIC_MY_POOLS}),me(!1)]})]})]}),t?w&&!r||se&&!q&&!(r!=null&&r.length)?e.jsxs(G,{children:[e.jsx(ie,{}),e.jsx(ie,{}),e.jsx(ie,{})]}):F.length>0||h.length>0?e.jsx(e.Fragment,{children:e.jsx(Je,{positions:H,refe:x})}):e.jsxs(u,{flexDirection:"column",alignItems:"center",marginTop:"60px",children:[e.jsx(re,{size:48,color:d.subText}),e.jsx(S,{fontSize:16,lineHeight:1.5,color:d.subText,textAlign:"center",marginTop:"1rem",children:e.jsx(a,{id:"9REM2J",components:{0:e.jsx($,{to:`${E.POOLS}/${L.route}?tab=elastic`})}})})]}):e.jsx(be,{padding:"40px",children:e.jsx(we.body,{color:d.text3,textAlign:"center",children:e.jsx(a,{id:"jWRT4F"})})})]})}),e.jsx(dt,{}),e.jsx(Ke,{})]})}const te=g.div`
  padding: 4px 0;
  color: ${({active:t,theme:l})=>t?l.primary:l.subText};
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: ${t=>t.theme.primary};
  }
  ${({theme:t})=>t.mediaWidth.upToSmall`
    font-size: 14px;
  `};
`,ce=g(X)`
  padding: 32px 0 100px;
  width: 100%;
  max-width: 1224px;

  ${({theme:t})=>t.mediaWidth.upToLarge`
    padding: 24px 12px 100px;
    max-width: 832px;
  `}
  ${({theme:t})=>t.mediaWidth.upToSmall`
    max-width: 392px;
  `};
`,ye=g.div`
  width: 100%;
  padding: 16px 0;
  font-size: 12px;
  line-height: 1.5;
  border-top: 1px solid ${({theme:t})=>t.border};
  color: ${({theme:t})=>t.subText};
  border-bottom: 1px solid ${({theme:t})=>t.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gt=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    gap: 1rem;
    width: 100%;
    flex-direction: column;
  `};
`,G=g.div`
  display: grid;
  grid-template-columns: minmax(392px, auto) minmax(392px, auto) minmax(392px, auto);
  gap: 24px;
  max-width: 1224px;

  ${({theme:t})=>t.mediaWidth.upToLarge`
    grid-template-columns: 1fr 1fr;
    max-width: 832px;
  `}
  ${({theme:t})=>t.mediaWidth.upToSmall`
    grid-template-columns: 1fr;
    max-width: 392px;
  `};
`,jt=g(u)`
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${({theme:t})=>t.mediaWidth.upToLarge`
      width: 100%;
      justify-content: flex-end;
  `}

  ${({theme:t})=>t.mediaWidth.upToSmall`
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 0;

    > div {
      margin-top: 12px;
      width: 100%
      justify-content: space-between
      &:nth-child(1){
        margin-top: 20px
      }
    }
  `}
`,ft=_e`
    100% {
      transform: translateX(100%);
    }
`,Q=g.div`
  width: ${({width:t})=>t??"100%"};
  height: ${({height:t})=>t??"436px"};
  background: ${({theme:t})=>t.background};
  border-radius: 8px;
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0));
    animation: ${ft} 2s infinite;

    content: '';
  }
`;function Ot(){const{tab:t=V.ELASTIC}=je();return Fe(),e.jsxs(e.Fragment,{children:[e.jsxs(ce,{style:{paddingBottom:"24px"},children:[e.jsx(Ze,{}),t===V.ELASTIC?e.jsx(ht,{}):t===V.ELASTIC_LEGACY?e.jsx(et,{tab:"my_positions"}):e.jsx(kt,{})]}),e.jsx(Se,{})]})}function kt(){const t=le(),{account:l,chainId:L,networkInfo:x}=ge(),r=ae("(max-width:768px)"),w=ve(),{loading:j,data:p}=Be(),{data:y,loading:se}=qe(),[q,N]=ze(),z=q.get("search")||"",d=fe(z.trim().toLowerCase(),300),U=s=>{q.set("search",s),N(q)},Y=i.useMemo(()=>Object.values(y).flat().filter(s=>{var o;return ne.greaterThan(ne.BigInt(((o=s.userData)==null?void 0:o.stakedBalance)||0),ne.BigInt(0))}),[y]),M=i.useMemo(()=>Y.reduce((s,o)=>{var c,P,A;if(!s[o.stakeToken])s[o.stakeToken]=o;else{const Ce=s[o.stakeToken].totalStake.add(o.totalStake),Ie=((c=o.userData)==null?void 0:c.stakedBalance)||B.from("0"),Pe=B.from(((A=(P=s[o.stakeToken].userData)==null?void 0:P.stakedBalance)==null?void 0:A.toString())||"0").add(Ie);s[o.stakeToken]={...s[o.stakeToken],totalStake:Ce,userData:{...s[o.stakeToken].userData||{},stakedBalance:Pe.toString()}}}return s},{}),[Y]),f=i.useMemo(()=>Object.values(M),[M]),W=Re(w),O=i.useMemo(()=>W.map(s=>s.liquidityTokens),[W]),m=i.useMemo(()=>O.flat(),[O]),[C,oe]=De(m),R=i.useMemo(()=>O.reduce((s,o,c)=>(o.filter(P=>{var A;return(A=C[P.address])==null?void 0:A.greaterThan("0")}).forEach(P=>{s.push({liquidityToken:P,tokens:W[c].tokens})}),s),[]),[W,O,C]),h=Ne(R.map(({liquidityToken:s,tokens:o})=>({address:s.address,currencies:o}))),T=oe||(h==null?void 0:h.length)<R.length||(h==null?void 0:h.some(s=>!s[1])),I=i.useMemo(()=>h.map(([,s])=>s).filter(s=>!!s),[h]),k=i.useMemo(()=>I.filter(s=>{var o,c;return d?((o=s.token0.symbol)==null?void 0:o.toLowerCase().includes(d))||((c=s.token1.symbol)==null?void 0:c.toLowerCase().includes(d))||s.address.toLowerCase()===d:!0}).filter(s=>!f.map(o=>o.id.toLowerCase()).includes(s.address.toLowerCase())),[I,d,f]),F={};p==null||p.liquidityPositions.forEach(s=>{F[s.pool.id]=s});const[b,D]=i.useState(!1),H=T||j||se,{mixpanelHandler:_}=Ue(),n=ae("(max-width: 768px)");return e.jsxs(e.Fragment,{children:[e.jsx(tt,{isInterval:!1}),e.jsx(ce,{style:{padding:0,marginTop:"24px"},children:e.jsx(X,{gap:"lg",justify:"center",children:e.jsxs(X,{gap:"lg",style:{width:"100%"},children:[e.jsx(Ye,{children:e.jsxs(ye,{children:[e.jsx(a,{id:"lWErAB"}),!n&&e.jsx(J,{href:`${pe[L]}/account/${l}`,children:e.jsxs(u,{alignItems:"center",children:[e.jsx(K,{size:16}),e.jsxs(S,{fontSize:"14px",marginLeft:"4px",children:[e.jsx(a,{id:"9dMHHP"})," ↗"]})]})})]})}),e.jsxs(gt,{children:[e.jsxs(u,{justifyContent:"space-between",flex:1,alignItems:"center",width:"100%",children:[e.jsxs(u,{sx:{gap:"1.5rem"},alignItems:"center",children:[e.jsx(te,{active:!b,onClick:()=>{b&&_(de.MYPOOLS_POOLS_VIEWED),D(!1)},role:"button",children:e.jsx(a,{id:"fZFkP1"})}),e.jsx(te,{active:b,onClick:()=>{b||_(de.MYPOOLS_STAKED_VIEWED),D(!0)},role:"button",children:e.jsx(a,{id:"HteBNx"})})]}),n&&e.jsxs(u,{sx:{gap:"12px"},children:[e.jsx(J,{href:`${pe[L]}/account/${l}`,children:e.jsx(u,{sx:{borderRadius:"50%"},width:"36px",backgroundColor:ke(t.subText,.2),height:"36px",alignItems:"center",justifyContent:"center",children:e.jsx(K,{size:16,color:t.subText})})}),e.jsx(Z,{type:ee.CLASSIC_MY_POOLS})]})]}),e.jsxs(u,{alignItems:"center",flexDirection:"row",justifyContent:"flex-end",sx:{gap:"12px"},width:r?"100%":void 0,children:[e.jsx(Le,{style:{width:"unset",flex:r?1:void 0},minWidth:r?"224px":"254px",searchValue:z,onSearch:U,placeholder:v._({id:"4rqZ4H"})}),e.jsxs(He,{as:$,to:E.FIND_POOL,style:{color:t.textReverse,padding:"10px 12px",fontSize:"14px",width:"max-content",height:"36px",textDecoration:"none"},children:[e.jsx(st,{}),e.jsx(S,{marginLeft:"4px",children:e.jsx(a,{id:"65tPVb"})})]}),!n&&e.jsx(Z,{type:ee.CLASSIC_MY_POOLS})]})]}),l?b?H&&!f.length?e.jsx(Ve,{}):f.length?e.jsxs(e.Fragment,{children:[e.jsx(G,{children:f.filter(s=>{var o,c;return((o=s.token0.symbol)==null?void 0:o.toLowerCase().includes(d))||((c=s.token1.symbol)==null?void 0:c.toLowerCase().includes(d))||s.id.toLowerCase()===d}).map(s=>e.jsx(he,{farm:s,userLiquidityPositions:p==null?void 0:p.liquidityPositions,tab:"STAKED"},s.id))}),e.jsxs(S,{fontSize:16,color:t.subText,textAlign:"center",marginTop:"1rem",children:[v._({id:"PYEcaw"})," ",e.jsx($,{id:"import-pool-link",to:E.FIND_POOL,children:e.jsx(a,{id:"sbWW4Q"})})]})]}):e.jsxs(u,{flexDirection:"column",alignItems:"center",marginTop:"60px",children:[e.jsx(re,{size:48,color:t.subText}),e.jsx(S,{fontSize:16,lineHeight:1.5,color:t.subText,textAlign:"center",marginTop:"1rem",children:e.jsx(a,{id:"eatnpo",components:{0:e.jsx($,{to:`${E.FARMS}/${x.route}`})}})})]}):H&&!k.length&&!f.length?e.jsxs(G,{children:[e.jsx(Q,{}),e.jsx(Q,{}),e.jsx(Q,{})]}):(k==null?void 0:k.length)>0||f.length?e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[k.map(s=>{const o=Object.values(y).flat().find(c=>c.id.toLowerCase()===s.address.toLowerCase());return e.jsx(Te,{pair:s,myLiquidity:F[s.address.toLowerCase()],farm:o,tab:"ALL"},s.liquidityToken.address)}),f.filter(s=>{var o,c;return((o=s.token0.symbol)==null?void 0:o.toLowerCase().includes(d))||((c=s.token1.symbol)==null?void 0:c.toLowerCase().includes(d))||s.id.toLowerCase()===d}).map(s=>e.jsx(he,{farm:s,userLiquidityPositions:p==null?void 0:p.liquidityPositions,tab:"ALL"},s.id))]}),e.jsxs(S,{fontSize:16,color:t.subText,textAlign:"center",marginTop:"1rem",children:[v._({id:"PYEcaw"})," ",e.jsx($,{id:"import-pool-link",to:E.FIND_POOL,children:e.jsx(a,{id:"sbWW4Q"})})]})]}):e.jsxs(u,{flexDirection:"column",alignItems:"center",marginTop:"60px",children:[e.jsx(re,{size:48,color:t.subText}),e.jsxs(S,{fontSize:16,lineHeight:1.5,color:t.subText,textAlign:"center",marginTop:"1rem",children:[e.jsx(a,{id:"9REM2J",components:{0:e.jsx($,{to:`${E.POOLS}/${x.route}?tab=classic`})}}),e.jsx("br",{}),v._({id:"PYEcaw"})," ",e.jsx($,{id:"import-pool-link",to:E.FIND_POOL,children:e.jsx(a,{id:"sbWW4Q"})})]})]}):e.jsx(be,{padding:"40px",children:e.jsx(we.body,{color:t.text3,textAlign:"center",children:e.jsx(a,{id:"jWRT4F"})})})]})})}),e.jsx(Se,{})]})}const he=({farm:t,userLiquidityPositions:l,tab:L})=>{var w,j,p;const{farmAPR:x}=Ge(t),r=Qe((w=t.token0)==null?void 0:w.wrapped,(j=t.token1)==null?void 0:j.wrapped,t.id)[1];return r?e.jsx(Te,{pair:r,stakedBalance:Xe.fromRawAmount(r.liquidityToken,((p=t.userData)==null?void 0:p.stakedBalance)||"0"),myLiquidity:l==null?void 0:l.find(y=>y.pool.id===r.address),farm:t,farmAPR:x,tab:L}):e.jsx(Q,{})};export{jt as FilterRow,ye as InstructionText,ce as PageWrapper,G as PositionCardGrid,Q as PreloadCard,te as Tab,gt as TitleRow,Ot as default};
