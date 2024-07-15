import{k as E,aV as $,ex as T,r as c,az as j,bg as N,ey as w,j as e,cA as A,ez as B,d as x,s as p,B as M,T as P,aS as R}from"./index-a78ffe49.js";const u=s=>R`
  width: 36px;
  min-width: 36px;
  padding: 6px;
  background: ${s};
  &:hover {
    background: ${s};
  }
`,v=p(M)`
  overflow: hidden;
  width: fit-content;
  height: 32px;
  padding: 8px 12px;
  background: ${({bgColor:s})=>s};
  color: ${({theme:s,isDisabled:t})=>t?s.border:s.textReverse};
  &:hover {
    background: ${({bgColor:s})=>s};
  }
  ${({iconOnly:s,bgColor:t})=>s&&u(t)};
  ${({theme:s,bgColor:t,iconOnly:a})=>a!==!1&&s.mediaWidth.upToExtraSmall`
   ${u(t)}
  `}
`,y=p(P)`
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px !important;
  ${({iconOnly:s})=>s&&"display: none"};
  ${({theme:s,iconOnly:t})=>t!==!1&&s.mediaWidth.upToExtraSmall`
    display: none;
  `}
`;function z({subscribeTooltip:s,iconOnly:t,trackingEvent:a,onClick:o,topicId:i,style:l}){const m=E(),{mixpanelHandler:h}=$(),{topicGroups:n}=T(),b=c.useMemo(()=>i?n.some(g=>g.topics.some(d=>d.isSubscribed&&String(d.id)===String(i))):!1,[n,i]),r=j(),S=c.useCallback(()=>{r(`${N.PROFILE_MANAGE}${w.PREFERENCE}`)},[r]),f=()=>{S(),o==null||o(),a&&setTimeout(()=>{h(a)},100)};return e.jsx(A,{text:s,width:"400px",children:e.jsxs(v,{bgColor:m.primary,onClick:f,iconOnly:t,style:l,children:[e.jsx(B,{size:16}),e.jsx(y,{iconOnly:t,children:b?e.jsx(x,{id:"SMaFdc"}):e.jsx(x,{id:"EDl9kS"})})]})})}export{z as S};
