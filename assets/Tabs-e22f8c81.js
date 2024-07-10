import{s as f,u as E,eS as w,br as m,fO as R,cn as S,r as d,j as n,Q as W,fP as z,F as C,k as $,a1 as H}from"./index-2f7a0c8d.js";import{u as j,p as L}from"./useThrottle-9f9059a5.js";const y=f.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  width: 100%;
  max-width: calc(100vw - 32px);

  ${({theme:r})=>r.mediaWidth.upToSmall`
    justify-content: flex-start;
  `}

  &.left-visible:after,
  &.right-visible:before {
    content: '';
    display: block;
    z-index: 2;
    pointer-events: none;
    position: absolute;
    inset: 0 0 auto auto;
    width: 40px;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  &.left-visible:after {
    background: linear-gradient(
      to right,
      ${({theme:r,backgroundColor:s})=>s??r.buttonBlack},
      transparent
    );
    left: 0;
  }

  &.right-visible:before {
    background: linear-gradient(
      to left,
      ${({theme:r,backgroundColor:s})=>s??r.buttonBlack},
      transparent
    );
    right: 0;
  }
`,I=f.div`
  display: flex;
`,N=f.div`
  display: flex;
  align-items: center;
  padding-left: ${({isFirstItem:r})=>r?"0":"20px"};
  padding-right: ${({isLastItem:r})=>r?"0":"20px"};
  border-left: ${({theme:r,isFirstItem:s})=>s?"none":`1px solid ${r.border}`};
  white-space: nowrap;
`,T=f.span`
  margin-left: 4px;
  font-size: 14px;
  font-weight: 400;
  margin-right: 4px;
`,A=({style:r={},rewardTokens:s})=>{const{chainId:l}=E(),u=s.findIndex(e=>e.wrapped.address===w)>=0,h=s.findIndex(e=>e.wrapped.address===m[l].address)>=0;s=u&&h?s.filter(e=>e.wrapped.address!==m[l].address):s,s.sort(function(e,i){return e.wrapped.address===R[l].address?-1:i.wrapped.address===R[l].address?1:e.wrapped.address===w||e.wrapped.address===m[l].address?-1:i.wrapped.address===w||i.wrapped.address===m[l].address?1:0});const p=S(s.map(e=>e.wrapped.address)),o=d.useRef(null),a=d.useRef(null),t=d.useRef(null),c=j(()=>{var i,x,b,g,v;const e=o.current;(e==null?void 0:e.scrollLeft)>0?(i=t.current)==null||i.classList.add("left-visible"):(x=t.current)==null||x.classList.remove("left-visible"),((b=a.current)==null?void 0:b.scrollWidth)-(e==null?void 0:e.scrollLeft)>(e==null?void 0:e.clientWidth)?(g=t.current)==null||g.classList.add("right-visible"):(v=t.current)==null||v.classList.remove("right-visible")},300);return d.useEffect(()=>(window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[]),d.useEffect(()=>{c()},[l]),s.length?n.jsx(y,{ref:t,style:r,children:n.jsx(L,{innerRef:o,vertical:!1,className:"scroll-container",onScroll:c,children:n.jsx(I,{ref:a,children:s.map((e,i)=>n.jsxs(N,{isFirstItem:i===0,isLastItem:i===(s==null?void 0:s.length)-1,children:[n.jsx(W,{currency:e,size:"20px"}),n.jsxs(T,{children:[e.symbol,":"]}),n.jsx("span",{children:p[e.wrapped.address]?z(p[e.wrapped.address],!0):"N/A"})]},i))})})}):null},F=({items:r,renderItem:s,style:l,backgroundColor:u,noShadow:h})=>{const p=d.useRef(null),o=d.useRef(null),a=d.useRef(null),t=j(()=>{var i,x,b,g,v;if(h||!o.current)return;const e=p.current;(e==null?void 0:e.scrollLeft)>0?(i=a.current)==null||i.classList.add("left-visible"):(x=a.current)==null||x.classList.remove("left-visible"),((b=o.current)==null?void 0:b.scrollWidth)-(e==null?void 0:e.scrollLeft)>(e==null?void 0:e.clientWidth)?(g=a.current)==null||g.classList.add("right-visible"):(v=a.current)==null||v.classList.remove("right-visible")},300);d.useEffect(()=>(window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)),[]),d.useEffect(()=>{t()},[r]);const c=$();return n.jsx(y,{ref:a,style:{flex:1,overflow:"hidden",justifyContent:"flex-start",...l},backgroundColor:u??c.background,children:n.jsx(L,{innerRef:p,vertical:!1,className:"scroll-container",onScroll:t,children:n.jsx(P,{style:l,ref:o,children:(r??[]).map(e=>n.jsx(d.Fragment,{children:s(e)},e))})})})},P=f(C)`
  align-items: center;
  gap: 4px;
  flex: 1;
`,B=f.div(({theme:r})=>({borderRadius:"20px",background:r.buttonBlack,overflow:"hidden",display:"flex",flexDirection:"column"})),D=f.div(({theme:r})=>({display:"flex",overflowY:"scroll",borderBottom:`1px solid ${r.border}`})),O=f.div(({theme:r,active:s})=>({display:"flex",padding:"0.5rem",borderRight:`1px solid ${r.border}`,background:s?H(r.primary,.3):r.buttonBlack,color:s?r.primary:r.subText,fontSize:"12px",fontWeight:"500",cursor:"pointer"})),G=({activeKey:r,items:s,className:l,onChange:u,horizontalWrapperStyle:h={},tabItemStyle:p={},tabItemActiveStyle:o={}})=>{var a;return n.jsxs(B,{className:l,children:[n.jsx(D,{children:n.jsx(F,{style:{gap:0,...h},items:s.map(t=>t.key.toString()),renderItem:t=>{var e;const c=((e=s.find(i=>+i.key==+t))==null?void 0:e.label)||"";return n.jsx(O,{onClick:()=>u(t),active:+t==+r,style:+t!=+r?p:o,children:c})}})}),(a=s.find(t=>t.key===r))==null?void 0:a.children]})};export{F as H,A as R,G as T};
