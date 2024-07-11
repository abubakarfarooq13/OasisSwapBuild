import{s as n,j as t,c as i}from"./index-e995caac.js";const s="/assets/background-gradient-64327287.png",a=n.div`
  flex: 1;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${s});
  background-size: 100%;
  background-repeat: repeat-y;
`,o=n.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    gap: 16px;
  `};
`,r=n.div`
  font-size: 20px;
  line-height: 24px;
  color: ${({theme:e})=>e.subText};
  text-align: center;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    font-size: 16px;
    line-height: 20px;
  `};
`,l=()=>t.jsx("img",{src:"/logo-dark.svg",alt:"loading-icon",style:{width:230,maxWidth:"90vw"}});function c({msg:e}){return t.jsx(a,{children:t.jsxs(o,{children:[t.jsx(l,{}),t.jsxs(r,{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx(i,{size:"20px"})," ",e]})]})})}export{a as C,l as K,c as P,r as T,o as a};
