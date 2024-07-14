import{bm as A,ar as o,cF as L,eQ as E,r,s as x,a1 as l,k as w,j as s,F as d,aa as _,g as I,I as f,T as u,J as T,X as g,d as t}from"./index-7527f4fc.js";function M(e){return e.equals(A[e.chainId])?o[e.chainId]:e instanceof L&&e.address===E?o[e.chainId]:e}const j=e=>r.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M12.5026 10.0001L8.83317 12.7502V7.25001L12.5026 10.0001ZM2.1665 10.0001C2.1665 5.67622 5.67598 2.16675 9.99984 2.16675C14.3237 2.16675 17.8332 5.67622 17.8332 10.0001C17.8332 14.3239 14.3237 17.8334 9.99984 17.8334C5.67598 17.8334 2.1665 14.3239 2.1665 10.0001ZM2.83317 10.0001C2.83317 13.9512 6.0487 17.1667 9.99984 17.1667C13.951 17.1667 17.1665 13.9512 17.1665 10.0001C17.1665 6.04894 13.951 2.83341 9.99984 2.83341C6.0487 2.83341 2.83317 6.04894 2.83317 10.0001Z",fill:"currentColor",stroke:"currentColor"})),D=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 20px;
  background-color: ${({theme:e})=>e.background};
`,b=x.button`
  outline: none;
  border: none;
  height: 36px;
  width: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({theme:e})=>l(e.subText,.2)};
  color: ${({theme:e})=>e.subText};
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>l(e.subText,.4)};
  }
`;var C;(function(e){e.ELASTIC_POOLS="elastic_pools",e.ELASTIC_FARMS="elastic_farms",e.ELASTIC_MY_POOLS="elastic_my_pools",e.ELASTIC_ADD_LIQUIDITY="elastic_add_liquidity",e.ELASTIC_REMOVE_LIQUIDITY="elastic_remove_liquidity",e.ELASTIC_INCREASE_LIQUIDITY="ELASTIC_INCREASE_LIQUIDITY",e.CLASSIC_ADD_LIQUIDITY="CLASSIC_ADD_LIQUIDITY",e.CLASSIC_CREATE_POOL="CLASSIC_CREATE_POOL",e.CLASSIC_POOLS="classic_pools",e.CLASSIC_FARMS="classic_farms",e.CLASSIC_MY_POOLS="classic_my_pools",e.SWAP="swap",e.LIMIT_ORDER="limit_order"})(C||(C={}));const O={elastic_pools:"HCTI3pNDXIM",classic_pools:"HCTI3pNDXIM",elastic_my_pools:"gANTlasXStA",classic_my_pools:"gANTlasXStA",elastic_add_liquidity:"EyFOiR1httA",elastic_remove_liquidity:"VE58XeRVXgQ",ELASTIC_INCREASE_LIQUIDITY:"goMNh3hsjt4",swap:"1cW_IhT4_dw",limit_order:"N9pLtZHjCuw",elastic_farms:"zvq62WtE_YA",classic_farms:"FoQRGcf5tJc",CLASSIC_CREATE_POOL:"wIMzSIKXUbs",CLASSIC_ADD_LIQUIDITY:"9Pudw0LqBQE"},R=e=>O[e]||"";function Q({customIcon:e,type:a,showTooltip:S}){const c=w(),[m,i]=r.useState(!1),h=(()=>{switch(a){case"elastic_pools":return s.jsx(t,{id:"u7upl1"});case"classic_pools":return s.jsx(t,{id:"u7upl1"});case"elastic_farms":return s.jsx(t,{id:"4mJBuu"});case"classic_farms":return s.jsx(t,{id:"4mJBuu"});case"elastic_my_pools":return s.jsx(t,{id:"6IarcC"});case"classic_my_pools":return s.jsx(t,{id:"6IarcC"});default:return s.jsx(t,{id:"T7w4KT"})}})(),n=(()=>{switch(a){case"CLASSIC_ADD_LIQUIDITY":return s.jsx(t,{id:"Tho4xc"});case"elastic_add_liquidity":return s.jsx(t,{id:"5yVavn"});case"ELASTIC_INCREASE_LIQUIDITY":return s.jsx(t,{id:"Q3WGHS"});case"elastic_remove_liquidity":return s.jsx(t,{id:"UINx5G"});default:return}})(),p=R(a);return s.jsxs(s.Fragment,{children:[e?s.jsx(d,{onClick:()=>i(!0),alignItems:"center",children:s.jsx(_,{text:I._({id:"T7w4KT"}),placement:"top",width:"fit-content",disableTooltip:!S,children:e})}):s.jsx(b,{onClick:()=>i(!0),children:s.jsx(_,{text:I._({id:"T7w4KT"}),placement:"top",width:"fit-content",children:s.jsx(j,{})})}),s.jsx(f,{isOpen:m,onDismiss:()=>i(!1),maxWidth:"808px",maxHeight:80,minHeight:50,children:s.jsxs(D,{children:[s.jsxs(d,{alignItems:"center",justifyContent:"space-between",children:[s.jsx(u,{fontWeight:"500",children:h}),s.jsx(T,{onClick:()=>i(!1),width:"36px",height:"36px",padding:"0",children:s.jsx(g,{color:c.text})})]}),n&&s.jsx(u,{color:c.subText,fontSize:12,marginTop:"24px",marginBottom:"16px",children:n}),s.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${p}`,frameBorder:"0",title:"Tutorial",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})]})}export{j as S,Q as T,C as a,M as u};
