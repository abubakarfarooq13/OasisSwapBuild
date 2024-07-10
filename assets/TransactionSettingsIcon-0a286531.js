import{s as g,X as I,aB as M,r as C,k as j,aV as k,j as e,I as H,F as d,T as p,d as a,e as P,bu as v,a_ as y,hM as E,hN as A,gM as D,hO as L,dE as V,gZ as S,b5 as b,aa as w,U as _,hP as z,dF as W,dH as B,g as f,h1 as $,aA as G,f1 as N,O}from"./index-3fcf9943.js";const R=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${({theme:t})=>t.tableHeader};
`,U=g.input`
  margin-top: 24px;
  background: ${({theme:t})=>t.buttonBlack};
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500px;
  line-height: 20px;
  outline: none;
  color: ${({theme:t})=>t.text};
  border: none;
  &::placeholder {
    color: ${({theme:t})=>t.disableText};
  }
`,Z=g(I)`
  height: 24px;
  width: 24px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({theme:t})=>t.text};
  }
`,F=g.span`
  color: ${({theme:t})=>t.warning};
  cursor: not-allowed;
  user-select: none;
`;function q({show:t,setShow:n}){const[,i]=M(),[r,s]=C.useState(""),l=j(),{mixpanelHandler:c}=k(),x=()=>{r.trim().toLowerCase()==="confirm"&&(c(y.DEGEN_MODE_TOGGLE,{type:"on"}),i(),s(""),n(!1))};return e.jsx(H,{isOpen:t,onDismiss:()=>{s(""),n(!1)},maxHeight:100,width:"480px",maxWidth:"unset",children:e.jsxs(R,{children:[e.jsxs(d,{alignItems:"center",justifyContent:"space-between",children:[e.jsx(p,{fontSize:"20px",fontWeight:500,lineHeight:"24px",children:e.jsx(a,{id:"6foA8n"})}),e.jsx(Z,{onClick:()=>n(!1)})]}),e.jsx(p,{marginTop:"24px",fontSize:14,fontWeight:500,lineHeight:"20px",color:l.subText,children:e.jsx(a,{id:"CAyITr"})}),e.jsx(p,{marginTop:"24px",fontSize:14,fontWeight:400,lineHeight:"24px",color:l.text,children:e.jsx(a,{id:"+BzDT+",components:{0:e.jsx(F,{})}})}),e.jsx(U,{placeholder:"Confirm",value:r,onChange:o=>s(o.target.value),onKeyUp:o=>{o.key==="Enter"&&x()}}),e.jsxs(d,{sx:{gap:"16px"},marginTop:"24px",justifyContent:"center",children:[e.jsx(P,{style:{flex:1,fontSize:"16px",padding:"10px"},onClick:()=>{s(""),n(!1)},children:e.jsx(a,{id:"VeDYgJ"})}),e.jsx(v,{disabled:r.trim().toLowerCase()!=="confirm",style:{fontSize:"16px",flex:1,padding:"10px"},onClick:x,children:e.jsx(a,{id:"7VpPHA"})})]})]})})}const K=({isActive:t,onClick:n})=>{const i=j();return e.jsx(d,{sx:{width:"16px",height:"16px",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:"8px"},role:"button",onClick:n,children:t?e.jsx(E,{height:"16px",color:i.text}):e.jsx(A,{height:"16px",color:i.subText})})},X=g.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  &[data-warning='true'] {
    color: ${({theme:t})=>t.warning};
  }

  &[data-error='true'] {
    color: ${({theme:t})=>t.red1};
  }
`,ee=({shouldShowPinButton:t=!0})=>{const{rawSlippage:n,setRawSlippage:i,isSlippageControlPinned:r,togglePinSlippage:s}=D(),l=L(),c=V(),x=$(n,l,c),o=x!==S.NORMAL,u=j();return e.jsxs(d,{sx:{flexDirection:"column",rowGap:"8px"},children:[e.jsxs(d,{sx:{alignItems:"center"},children:[e.jsx(b,{fontSize:12,fontWeight:400,color:u.subText,underlineColor:u.border,children:e.jsx(w,{text:e.jsx(p,{children:e.jsx(a,{id:"IQ5oQu",components:{0:e.jsx(_,{href:"https://docs.kyberswap.com/getting-started/foundational-topics/decentralized-finance/slippage"})}})}),placement:"right",children:e.jsx(a,{id:"x6GJ4a"})})}),t&&e.jsx(K,{isActive:r,onClick:s})]}),e.jsx(z,{rawSlippage:n,setRawSlippage:i,isWarning:o,defaultRawSlippage:l?W:B}),o&&e.jsx(X,{"data-warning":!0,"data-error":!1,children:x===S.HIGH?l?f._({id:"hW915/"}):c?f._({id:"/e7qAv"}):f._({id:"3jGUwg"}):f._({id:"SzyXkE"})})]})},T=t=>{const n=Number.parseInt(t,10);return t.length>5||Number.isNaN(n)||String(Math.floor(n))!==t?!1:0<n&&n<1e4},Y=({className:t})=>{const n=j(),[i,r]=G(),[s,l]=C.useState(String(Math.floor(i/60))),c=C.useRef(null),x=T(s),o=()=>{if(!T(s))return;const h=parseInt(s,10)*60;r(h)},u=h=>{var m;h.key==="Enter"&&(o(),(m=c.current)==null||m.blur())};return N(c,()=>o()),C.useEffect(()=>{l(String(Math.floor(i/60)))},[i]),e.jsxs(d,{justifyContent:"space-between",alignItems:"center",className:t,children:[e.jsx(d,{alignItems:"center",children:e.jsx(b,{fontSize:12,fontWeight:400,color:n.subText,underlineColor:n.border,children:e.jsx(w,{text:e.jsx(p,{children:e.jsx(a,{id:"DMtNzZ"})}),placement:"right",children:e.jsx(a,{id:"wNtlPc"})})})}),e.jsxs(d,{sx:{height:"28px",fontWeight:500,fontSize:"12px",lineHeight:"16px",columnGap:"2px",alignItems:"center",backgroundColor:n.tabBackground,padding:"0 8px",borderRadius:"40px"},children:[e.jsx(O,{width:60,children:e.jsx("input",{ref:c,className:"input",placeholder:String(i/60),value:s,onChange:h=>l(h.target.value),onBlur:o,onKeyUp:u,"data-valid":x})}),e.jsx(p,{fontWeight:500,fontSize:"12px",lineHeight:"16px",children:e.jsx(a,{id:"3131gY"})})]})]})},te=g(Y)`
  .input {
    width: 100%;
    background: transparent;
    font-size: 12px;
    font-weight: 500;
    outline: none;
    border: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    color: ${({theme:t})=>t.text};
    text-align: right;

    &[data-valid='false'] {
      color: ${({theme:t})=>t.red1};
    }
  }
`,J=({size:t,fill:n,style:i={},onClick:r})=>e.jsx("svg",{onClick:r,style:i,width:t||20,height:t||20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z",fill:n||"white"})}),ne=J;export{q as A,ee as S,te as T,ne as a};
