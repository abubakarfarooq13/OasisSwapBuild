import{s as x,r as n,k as d,j as s,F as f,c5 as h,a6 as m}from"./index-bd92f56a.js";const j=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
  color: ${({theme:o,useCurrentColor:t})=>t?"inherit":o.text2};

  :hover,
  :focus {
    opacity: 0.7;
  }
`;function k({text:o,color:t,size:c=12,useCurrentColor:r,placement:i}){const[l,e]=n.useState(!1),a=n.useCallback(()=>e(!0),[e]),u=n.useCallback(()=>e(!1),[e]),p=d();return s.jsx(f,{as:"span",marginLeft:"0.25rem",alignItems:"center",children:s.jsx(h,{placement:i,text:o,show:l,children:s.jsx(j,{onClick:a,onMouseEnter:a,onMouseLeave:u,useCurrentColor:r,children:s.jsx(m,{size:c,color:r?void 0:t||p.subText})})})})}export{k as Q};
