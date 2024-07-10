import{bp as A,ar as l,cF as g,eQ as E,r as c,s as C,a1 as d,k as w,j as e,F as _,aa as u,g as I,I as f,T as p,J as j,X as T,d as t,U as r}from"./index-d7bc20ab.js";function M(s){return s.equals(A[s.chainId])?l[s.chainId]:s instanceof g&&s.address===E?l[s.chainId]:s}const b=s=>c.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},c.createElement("path",{d:"M12.5026 10.0001L8.83317 12.7502V7.25001L12.5026 10.0001ZM2.1665 10.0001C2.1665 5.67622 5.67598 2.16675 9.99984 2.16675C14.3237 2.16675 17.8332 5.67622 17.8332 10.0001C17.8332 14.3239 14.3237 17.8334 9.99984 17.8334C5.67598 17.8334 2.1665 14.3239 2.1665 10.0001ZM2.83317 10.0001C2.83317 13.9512 6.0487 17.1667 9.99984 17.1667C13.951 17.1667 17.1665 13.9512 17.1665 10.0001C17.1665 6.04894 13.951 2.83341 9.99984 2.83341C6.0487 2.83341 2.83317 6.04894 2.83317 10.0001Z",fill:"currentColor",stroke:"currentColor"})),D=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 20px;
  background-color: ${({theme:s})=>s.background};
`,O=C.button`
  outline: none;
  border: none;
  height: 36px;
  width: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({theme:s})=>d(s.subText,.2)};
  color: ${({theme:s})=>s.subText};
  cursor: pointer;

  :hover {
    background: ${({theme:s})=>d(s.subText,.4)};
  }
`;var x;(function(s){s.ELASTIC_POOLS="elastic_pools",s.ELASTIC_FARMS="elastic_farms",s.ELASTIC_MY_POOLS="elastic_my_pools",s.ELASTIC_ADD_LIQUIDITY="elastic_add_liquidity",s.ELASTIC_REMOVE_LIQUIDITY="elastic_remove_liquidity",s.ELASTIC_INCREASE_LIQUIDITY="ELASTIC_INCREASE_LIQUIDITY",s.CLASSIC_ADD_LIQUIDITY="CLASSIC_ADD_LIQUIDITY",s.CLASSIC_CREATE_POOL="CLASSIC_CREATE_POOL",s.CLASSIC_POOLS="classic_pools",s.CLASSIC_FARMS="classic_farms",s.CLASSIC_MY_POOLS="classic_my_pools",s.SWAP="swap",s.LIMIT_ORDER="limit_order"})(x||(x={}));const v={elastic_pools:"HCTI3pNDXIM",classic_pools:"HCTI3pNDXIM",elastic_my_pools:"gANTlasXStA",classic_my_pools:"gANTlasXStA",elastic_add_liquidity:"EyFOiR1httA",elastic_remove_liquidity:"VE58XeRVXgQ",ELASTIC_INCREASE_LIQUIDITY:"goMNh3hsjt4",swap:"1cW_IhT4_dw",limit_order:"N9pLtZHjCuw",elastic_farms:"zvq62WtE_YA",classic_farms:"FoQRGcf5tJc",CLASSIC_CREATE_POOL:"wIMzSIKXUbs",CLASSIC_ADD_LIQUIDITY:"9Pudw0LqBQE"},y=s=>v[s]||"";function Q({customIcon:s,type:a,showTooltip:m}){const o=w(),[h,i]=c.useState(!1),S=(()=>{switch(a){case"elastic_pools":return e.jsx(t,{id:"u7upl1"});case"classic_pools":return e.jsx(t,{id:"u7upl1"});case"elastic_farms":return e.jsx(t,{id:"4mJBuu"});case"classic_farms":return e.jsx(t,{id:"4mJBuu"});case"elastic_my_pools":return e.jsx(t,{id:"6IarcC"});case"classic_my_pools":return e.jsx(t,{id:"6IarcC"});default:return e.jsx(t,{id:"T7w4KT"})}})(),n=(()=>{switch(a){case"CLASSIC_ADD_LIQUIDITY":return e.jsx(t,{id:"gvLbbv",components:{0:e.jsx(r,{href:"https://docs.kyberswap.com/Classic/guides/adding-liquidity-guide"})}});case"elastic_add_liquidity":return e.jsx(t,{id:"SVV6z5",components:{0:e.jsx(r,{href:"https://docs.kyberswap.com/guides/creating-a-pool"})}});case"ELASTIC_INCREASE_LIQUIDITY":return e.jsx(t,{id:"A3Jzrx",components:{0:e.jsx(r,{href:"https://docs.kyberswap.com/guides/increase-liquidity"})}});case"elastic_remove_liquidity":return e.jsx(t,{id:"YOoTj+",components:{0:e.jsx(r,{href:"https://docs.kyberswap.com/guides/remove-liquidity"})}});default:return}})(),L=y(a);return e.jsxs(e.Fragment,{children:[s?e.jsx(_,{onClick:()=>i(!0),alignItems:"center",children:e.jsx(u,{text:I._({id:"T7w4KT"}),placement:"top",width:"fit-content",disableTooltip:!m,children:s})}):e.jsx(O,{onClick:()=>i(!0),children:e.jsx(u,{text:I._({id:"T7w4KT"}),placement:"top",width:"fit-content",children:e.jsx(b,{})})}),e.jsx(f,{isOpen:h,onDismiss:()=>i(!1),maxWidth:"808px",maxHeight:80,minHeight:50,children:e.jsxs(D,{children:[e.jsxs(_,{alignItems:"center",justifyContent:"space-between",children:[e.jsx(p,{fontWeight:"500",children:S}),e.jsx(j,{onClick:()=>i(!1),width:"36px",height:"36px",padding:"0",children:e.jsx(T,{color:o.text})})]}),n&&e.jsx(p,{color:o.subText,fontSize:12,marginTop:"24px",marginBottom:"16px",children:n}),e.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${L}`,frameBorder:"0",title:"Tutorial",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})]})}export{b as S,Q as T,x as a,M as u};
