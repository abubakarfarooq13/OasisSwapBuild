import{k as g,aV as $,ey as T,r as c,az as j,bj as B,ez as N,j as e,cB as w,eA as A,d as u,s as p,B as M,T as P,aS as R}from"./index-5ecfe8e3.js";const x=s=>R`
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
  ${({iconOnly:s,bgColor:t})=>s&&x(t)};
  ${({theme:s,bgColor:t,iconOnly:a})=>a!==!1&&s.mediaWidth.upToExtraSmall`
   ${x(t)}
  `}
`,y=p(P)`
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px !important;
  ${({iconOnly:s})=>s&&"display: none"};
  ${({theme:s,iconOnly:t})=>t!==!1&&s.mediaWidth.upToExtraSmall`
    display: none;
  `}
`;function z({subscribeTooltip:s,iconOnly:t,trackingEvent:a,onClick:o,topicId:i,style:l}){const m=g(),{mixpanelHandler:h}=$(),{topicGroups:n}=T(),b=c.useMemo(()=>i?n.some(E=>E.topics.some(d=>d.isSubscribed&&String(d.id)===String(i))):!1,[n,i]),r=j(),S=c.useCallback(()=>{r(`${B.PROFILE_MANAGE}${N.PREFERENCE}`)},[r]),f=()=>{S(),o==null||o(),a&&setTimeout(()=>{h(a)},100)};return e.jsx(w,{text:s,width:"400px",children:e.jsxs(v,{bgColor:m.primary,onClick:f,iconOnly:t,style:l,children:[e.jsx(A,{size:16}),e.jsx(y,{iconOnly:t,children:b?e.jsx(u,{id:"SMaFdc"}):e.jsx(u,{id:"EDl9kS"})})]})})}export{z as S};