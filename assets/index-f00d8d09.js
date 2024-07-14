import{r as x,R as V,aP as D,k as B,u as U,fI as Xe,fr as ce,hQ as _e,j as e,I as Ce,bk as w,eb as ve,T as r,d as c,F as Z,X as Ee,ea as z,B as xe,s as d,aS as m,aR as He,a1 as Je,aa as ke,g as S,i3 as et,bN as je,e$ as tt,i4 as re,Z as J,b7 as X,h$ as he,dT as nt,ag as me,dS as it,a9 as ae,ch as st,Y as Q,cQ as b,bl as ye,hZ as Ve,i5 as k,i6 as Ye,C as Me,i7 as ot,a as Fe,b as Ne,hJ as $e,f1 as rt,a6 as at,aV as lt,hW as ct,i8 as dt,i9 as xt,a_ as ht,ia as K,bj as I,fN as Le,i1 as ut,em as pt,bC as gt,bE as jt}from"./index-c19adf44.js";import{b as mt}from"./about_background-625b4bf1.js";import{T as le}from"./TimerCountdown-9c393b9e.js";import{K as Ke}from"./kncLogo-e8ab0f19.js";import{L as ft,H as bt,Y as wt}from"./YourTransactionsModal-d96f5124.js";import{S as _t}from"./Search-19c9cd1d.js";function be(){return be=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},be.apply(this,arguments)}function Ct(t,n){if(t==null)return{};var a=vt(t,n),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)i=l[s],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function vt(t,n){if(t==null)return{};var a={},i=Object.keys(t),s,l;for(l=0;l<i.length;l++)s=i[l],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var Se=x.forwardRef(function(t,n){var a=t.color,i=a===void 0?"currentColor":a,s=t.size,l=s===void 0?24:s,o=Ct(t,["color","size"]);return V.createElement("svg",be({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),V.createElement("polyline",{points:"9 11 12 14 22 4"}),V.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}))});Se.propTypes={color:D.string,size:D.oneOfType([D.string,D.number])};Se.displayName="CheckSquare";const kt=Se;function we(){return we=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},we.apply(this,arguments)}function yt(t,n){if(t==null)return{};var a=$t(t,n),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)i=l[s],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function $t(t,n){if(t==null)return{};var a={},i=Object.keys(t),s,l;for(l=0;l<i.length;l++)s=i[l],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var Te=x.forwardRef(function(t,n){var a=t.color,i=a===void 0?"currentColor":a,s=t.size,l=s===void 0?24:s,o=yt(t,["color","size"]);return V.createElement("svg",we({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),V.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}))});Te.propTypes={color:D.string,size:D.oneOfType([D.string,D.number])};Te.displayName="Square";const St=Te,Tt="/assets/luxury-green-background-small-9a29aef7.jpg",zt=d.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Mt=d.div`
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 12px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  ${({theme:t})=>m`
    background-color: ${t.buttonBlack};
    color: ${t.subText};
    :disabled {
      color: ${t.border};
    }
  `}
`;function Lt({amount:t,onConfirmClaim:n}){const a=B(),{account:i}=U(),s=Xe(ce.KYBER_DAO_CLAIM),l=_e(ce.KYBER_DAO_CLAIM);return e.jsx(Ce,{isOpen:s,onDismiss:l,children:e.jsxs(zt,{children:[e.jsxs(w,{children:[e.jsx(ve,{gap:"2px",children:e.jsx(r,{fontSize:20,children:e.jsx(c,{id:"Q0p68l"})})}),e.jsx(Z,{sx:{cursor:"pointer"},role:"button",onClick:l,children:e.jsx(Ee,{onClick:l,size:20,color:a.subText})})]}),e.jsxs(Mt,{children:[e.jsx(r,{fontSize:12,children:e.jsx(c,{id:"UgFbtv"})}),e.jsx(r,{color:a.border,children:i})]}),e.jsx(r,{fontSize:16,lineHeight:"24px",fontWeight:400,color:a.text,children:e.jsx(c,{id:"7knONb"})}),e.jsxs(z,{gap:"10px",children:[e.jsx(Ke,{size:28})," ",e.jsxs(r,{fontSize:32,children:[t," KNC"]})]}),e.jsx(xe,{onClick:n,children:"Claim"})]})})}function Pt({size:t}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"20",height:t||"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M9.89551 14.875C10.1316 14.875 10.34 14.7882 10.5205 14.6146C10.7011 14.441 10.7913 14.2292 10.7913 13.9792C10.7913 13.7431 10.7045 13.5382 10.5309 13.3646C10.3573 13.191 10.1455 13.1042 9.89551 13.1042C9.6594 13.1042 9.45454 13.191 9.28092 13.3646C9.10731 13.5382 9.02051 13.7431 9.02051 13.9792C9.02051 14.2292 9.10731 14.441 9.28092 14.6146C9.45454 14.7882 9.6594 14.875 9.89551 14.875ZM9.12467 11.7917H10.4788C10.4788 11.4028 10.5448 11.0625 10.6768 10.7708C10.8087 10.4792 11.0622 10.1597 11.4372 9.8125C11.8261 9.40972 12.1143 9.03125 12.3018 8.67708C12.4893 8.32292 12.583 7.93056 12.583 7.5C12.583 6.73611 12.34 6.13889 11.8538 5.70833C11.3677 5.27778 10.7288 5.0625 9.93717 5.0625C9.20106 5.0625 8.57259 5.25347 8.05176 5.63542C7.53092 6.01736 7.15245 6.51389 6.91634 7.125L8.20801 7.64583C8.40245 7.28472 8.63509 6.99653 8.90592 6.78125C9.17676 6.56597 9.52051 6.45833 9.93717 6.45833C10.3261 6.45833 10.6316 6.5625 10.8538 6.77083C11.0761 6.97917 11.1872 7.25 11.1872 7.58333C11.1872 7.84722 11.1108 8.09722 10.958 8.33333C10.8052 8.56944 10.59 8.82639 10.3122 9.10417C9.77051 9.63194 9.43717 10.0625 9.31217 10.3958C9.18717 10.7292 9.12467 11.1944 9.12467 11.7917ZM3.85384 17.7917C3.4094 17.7917 3.02398 17.6285 2.69759 17.3021C2.3712 16.9757 2.20801 16.5903 2.20801 16.1458V3.85417C2.20801 3.39583 2.3712 3.00347 2.69759 2.67708C3.02398 2.35069 3.4094 2.1875 3.85384 2.1875H16.1455C16.6038 2.1875 16.9962 2.35069 17.3226 2.67708C17.649 3.00347 17.8122 3.39583 17.8122 3.85417V16.1458C17.8122 16.5903 17.649 16.9757 17.3226 17.3021C16.9962 17.6285 16.6038 17.7917 16.1455 17.7917H3.85384Z",fill:"currentColor"})})}function At({size:t}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"20",height:t||"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_943_7035)",children:e.jsx("path",{d:"M16.6665 4.99935H15.8332V11.666C15.8332 12.1243 15.4582 12.4993 14.9998 12.4993H4.99984V13.3327C4.99984 14.2493 5.74984 14.9993 6.6665 14.9993H14.9998L18.3332 18.3327V6.66602C18.3332 5.74935 17.5832 4.99935 16.6665 4.99935ZM14.1665 9.16602V3.33268C14.1665 2.41602 13.4165 1.66602 12.4998 1.66602H3.33317C2.4165 1.66602 1.6665 2.41602 1.6665 3.33268V14.166L4.99984 10.8327H12.4998C13.4165 10.8327 14.1665 10.0827 14.1665 9.16602Z",fill:"currentcolor"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_943_7035",children:e.jsx("rect",{width:t||"20",height:t||"20",fill:"white"})})})]})}const Bt="/assets/kyber_logo-b909d3b0.svg",Ot=He`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`,Wt=d.div`
  width: ${({size:t})=>t}px;
  height: ${({size:t})=>t}px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
`,Dt=d.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  > div {
    position: absolute;
    animation: ${Ot} 1s linear infinite;
    width: ${({size:t})=>t*.8}px;
    height: ${({size:t})=>t*.8}px;
    top: ${({size:t})=>t*.1}px;
    left: ${({size:t})=>t*.1}px;
    border-radius: 50%;
    box-shadow: 0 ${({size:t})=>t>=200?"3px":"2px"} 0 0 ${({theme:t})=>t.primary};
    transform-origin: ${({size:t})=>`${t*.4}px ${t*.41}px`};
    box-sizing: content-box;
  }
`;function Rt({size:t=160}){return e.jsx(Wt,{size:t,children:e.jsxs(Dt,{size:t,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("img",{src:Bt,width:"30%",alt:""})]})})}const de={19:{1:"Base - KNC-USDC & KNC-ETH"}},Et=d.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ht=d(r)`
  & b {
    font-weight: 500;
    color: ${({theme:t})=>t.text};
  }
`;function Vt({isShow:t,toggle:n,options:a,title:i,onVoteConfirm:s}){const l=B();return e.jsx(Ce,{isOpen:t,onDismiss:n,children:e.jsxs(Et,{children:[e.jsxs(w,{children:[e.jsx(ve,{gap:"2px",children:e.jsx(r,{fontSize:20,children:e.jsx(c,{id:"lQXQKs"})})}),e.jsx(Z,{sx:{cursor:"pointer"},role:"button",onClick:n,children:e.jsx(Ee,{onClick:n,size:20,color:l.subText})})]}),e.jsx(Ht,{fontSize:16,lineHeight:"24px",color:l.subText,children:e.jsx(c,{id:"TjsZ5Q",values:{options:a,title:i},components:{0:e.jsx("b",{}),1:e.jsx("b",{})}})}),e.jsx(xe,{onClick:s,children:"Vote"})]})})}function Yt({size:t}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:t||"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_943_9117)",children:[e.jsx("path",{d:"M8.00016 1.33203C4.32016 1.33203 1.3335 4.3187 1.3335 7.9987C1.3335 11.6787 4.32016 14.6654 8.00016 14.6654C11.6802 14.6654 14.6668 11.6787 14.6668 7.9987C14.6668 4.3187 11.6802 1.33203 8.00016 1.33203ZM8.00016 13.332C5.0535 13.332 2.66683 10.9454 2.66683 7.9987C2.66683 5.05203 5.0535 2.66536 8.00016 2.66536C10.9468 2.66536 13.3335 5.05203 13.3335 7.9987C13.3335 10.9454 10.9468 13.332 8.00016 13.332Z",fill:"white"}),e.jsx("path",{d:"M7.99984 11.3346C9.84079 11.3346 11.3332 9.84225 11.3332 8.0013C11.3332 6.16035 9.84079 4.66797 7.99984 4.66797C6.15889 4.66797 4.6665 6.16035 4.6665 8.0013C4.6665 9.84225 6.15889 11.3346 7.99984 11.3346Z",fill:"white"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_943_9117",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})}function Ft({size:t}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:t||"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_943_8272)",children:e.jsx("path",{d:"M8.00016 1.33203C4.32016 1.33203 1.3335 4.3187 1.3335 7.9987C1.3335 11.6787 4.32016 14.6654 8.00016 14.6654C11.6802 14.6654 14.6668 11.6787 14.6668 7.9987C14.6668 4.3187 11.6802 1.33203 8.00016 1.33203ZM8.00016 13.332C5.0535 13.332 2.66683 10.9454 2.66683 7.9987C2.66683 5.05203 5.0535 2.66536 8.00016 2.66536C10.9468 2.66536 13.3335 5.05203 13.3335 7.9987C13.3335 10.9454 10.9468 13.332 8.00016 13.332Z",fill:"currentcolor"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_943_8272",children:e.jsx("rect",{width:"16",height:"16",fill:"transparent"})})})]})}const Nt=d.div`
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  min-height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  user-select: none;
  ${({theme:t})=>m`
    background-color: ${t.buttonBlack};
  `};
  ${({type:t,theme:n})=>t==="Pending"&&m`
      color: ${n.subText};
      background-color: ${n.buttonBlack};
    `}
  ${({disabled:t})=>!t&&m`
      cursor: pointer;

      :hover {
        filter: brightness(1.1);
      }
    `}
`,Kt=He`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 0;
  }
`,It=d.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 4px;
  width: ${({width:t})=>t||0}%;
  background-color: ${({theme:t})=>Je(t.primary,.2)};
  z-index: 0;
`,Zt=d.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 4px;
  width: ${({width:t})=>t||0}%;
  background-color: ${({theme:t})=>t.primary};
  z-index: 0;
`,Ut=d.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 4px;
  width: 100%;
  background-color: ${({theme:t})=>t.darkerGreen};
  z-index: 0;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.1) 28%,
      transparent 28%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 78%,
      transparent 78%,
      transparent
    );
    background-size: 25px 25px;
    animation: ${Kt} 1.5s linear infinite;
  }
`,Gt=d.div`
  width: 18px;
  > svg {
    display: block;
  }
`;function qt({checked:t,percent:n=40,title:a,type:i="Finished",onOptionClick:s,isCheckBox:l,disabled:o,proposalId:h,id:p}){var v;const j=parseFloat(n.toFixed(2)||"0"),u=(v=de[h])==null?void 0:v[p];return e.jsxs(Nt,{onClick:()=>!o&&(s==null?void 0:s()),disabled:o,type:i,children:[e.jsx("div",{style:{zIndex:4,width:"100%"},children:e.jsxs(w,{style:{zIndex:1},alignItems:"center",children:[e.jsx(ke,{text:i==="Pending"&&S._({id:"Qsh7ZS"}),placement:"top",width:"fit-content",children:e.jsxs(z,{gap:"5px",style:{fontSize:"12px",overflow:"hidden",wordBreak:"break-word"},children:[e.jsxs(Gt,{style:{width:"18px"},children:[l?t?e.jsx(kt,{size:18}):e.jsx(St,{size:18}):t?e.jsx(Yt,{}):e.jsx(Ft,{})," "]}),e.jsx(r,{children:`${p}. ${u||a}`})]})}),e.jsxs(r,{fontSize:"12px",padding:"0 4px",children:[j,"%"]})]})}),i==="Active"&&e.jsx(Zt,{width:n}),i==="Choosing"&&e.jsx(Ut,{width:n}),i==="Finished"&&e.jsx(It,{width:n})]})}const Ie="/assets/gold_icon-effd362c.svg",Qt=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  & > * {
    width: calc(25% - 20px * 3 / 4);
  }
  flex-wrap: wrap;

  ${({theme:t})=>t.mediaWidth.upToMedium`
     & > * {
      width: calc(33.33% - 20px * 2 / 3);
    }
  `}
  ${({theme:t})=>t.mediaWidth.upToSmall`
     & > * {
      width: calc(50% - 20px / 2);
    }
  `}
  ${({theme:t})=>t.mediaWidth.upToExtraSmall`
     & > * {
      width: 100%;
    }
  `}
`,Ze=d.div`
  border-radius: 20px;
  padding: 12px 16px;
  transition: all 0.1s ease;
  ${({hasHoverStyle:t})=>t&&m`
      cursor: pointer;
      :hover {
        filter: brightness(1.2);
        box-shadow: 0 2px 5px 2px ${({theme:n})=>n.buttonBlack};
      }
    `}
  ${({theme:t,isWonOption:n})=>m`
    border: 1px solid ${t.border};
    background-color: ${t.buttonBlack};
    ${n&&"background: linear-gradient(180deg, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 0.12) 54.69%, rgba(41, 41, 41, 0.7) 100%), linear-gradient(90deg, rgba(228, 181, 86, 0.25) 0%, rgba(241, 192, 94, 0.127155) 69.27%, rgba(255, 204, 102, 0) 100%);"}
  `}
`,Ue=d.div`
  height: 150px;
  overflow: auto;
  user-select: none;
  ${({theme:t})=>t.mediaWidth.upToExtraSmall`
     height: 130px;
  `}
`,Ge=d(w)`
  font-size: 12px;
  padding: 6px 0;
  & > * {
    flex: 1;
  }
  & > *:nth-child(2) {
    text-align: center;
  }
  & > *:last-child {
    text-align: right;
  }
`,qe=d(w)`
  & > * {
    flex: 1;
  }
  & > *:nth-child(2) {
    text-align: center;
  }
  & > *:last-child {
    text-align: right;
  }
`,Xt=({isOpen:t,onDismiss:n,participants:a,isWonOption:i,sumPower:s,option:l})=>{const o=B();return e.jsx(Ce,{isOpen:t,onDismiss:n,children:e.jsxs(Ze,{isWonOption:i,style:{width:"100%"},children:[e.jsxs(w,{children:[e.jsxs(z,{height:19,children:[i&&e.jsx("img",{alt:"gold-medal",src:Ie,style:{marginRight:"8px"}}),e.jsx(r,{style:{overflow:"hidden",textOverflow:"ellipsis"},children:l})]}),e.jsx(r,{style:{paddingLeft:"10px",flexShrink:0},children:s?Math.round(s).toLocaleString():"--"})]}),e.jsx(J,{margin:"10px 0"}),e.jsxs(qe,{fontSize:12,color:o.subText,children:[e.jsx(r,{children:e.jsx(c,{id:"sb9Y58"})}),e.jsx(r,{children:e.jsx(c,{id:"hehnjM"})})]}),e.jsx(J,{margin:"10px 0"}),e.jsx(Ue,{style:{height:"fit-content",maxHeight:"70vh",minHeight:"200px"},children:a.map(h=>e.jsxs(Ge,{children:[e.jsx(r,{children:h.staker_name||h.staker}),e.jsx(r,{color:o.subText,children:h.power})]},h.staker))})]})})};function Jt({proposalId:t}){const n=B(),[a,i]=x.useState(null),{data:s}=et.useGetProposalByIdQuery({id:t},{skip:!t}),l=x.useMemo(()=>{var p;if((p=s==null?void 0:s.vote_stats)!=null&&p.votes)return s.vote_stats.votes.slice().sort((j,u)=>je.from(j.power).sub(je.from(u.power)).gt(0)?-1:1).map(j=>({...j,staker:j.staker.slice(0,9)+"..."+j.staker.slice(-4),power:Math.floor(parseFloat(tt(je.from(j.power),18))).toLocaleString()}))},[s]),o=s==null?void 0:s.options.map((p,j)=>{var u;return((u=t?de[t]:{})==null?void 0:u[j])||p}),h=x.useMemo(()=>o?o.some(p=>p.length>30):!1,[o]);return e.jsx(Qt,{children:o&&l?o.map((p,j)=>{var Y,T,R;const u=(Y=s==null?void 0:s.vote_stats.options.find(C=>C.option===j))==null?void 0:Y.vote_count,v=(s==null?void 0:s.proposal_type)===re.BinaryProposal&&((T=s==null?void 0:s.vote_stats)==null?void 0:T.options.reduce((C,L)=>L.vote_count>C.vote_count?L:C).option)===j,g=l.filter(C=>C.option===j),y=t?(R=de[t])==null?void 0:R[j]:void 0;return e.jsxs(Ze,{isWonOption:v,onClick:()=>i(j),hasHoverStyle:!0,children:[e.jsxs(w,{children:[e.jsxs(z,{height:19,children:[v&&e.jsx("img",{alt:"gold-medal",src:Ie,style:{marginRight:"8px"}}),e.jsx(r,{fontSize:h?"14px":"16px",style:{overflow:"hidden",textOverflow:"ellipsis"},children:y||p})]}),e.jsx(r,{fontSize:h?"14px":"16px",style:{paddingLeft:"10px",flexShrink:0},children:u?Math.round(u).toLocaleString():"--"})]}),e.jsx(J,{margin:"10px 0"}),e.jsxs(qe,{fontSize:12,color:n.subText,children:[e.jsx(r,{children:e.jsx(c,{id:"sb9Y58"})}),e.jsx(r,{children:e.jsx(c,{id:"hehnjM"})})]}),e.jsx(J,{margin:"10px 0"}),e.jsxs(Ue,{children:[g.slice(0,5).map(C=>e.jsxs(Ge,{children:[e.jsx(r,{children:C.staker_name||C.staker}),e.jsx(r,{color:n.subText,children:C.power})]},C.staker)),g.length>5&&e.jsx(X,{justify:"center",marginTop:"4px",children:e.jsx(r,{fontSize:"12px",color:n.primary,children:"View more"})})]}),e.jsx(Xt,{participants:g,isOpen:j===a,onDismiss:()=>i(null),isWonOption:v,sumPower:u,option:p})]},p)}):null})}const en=d.div`
  border-radius: 20px;
  padding: 12px 16px;
  margin-bottom: 20px;
  ${({theme:t})=>m`
    border: 1px solid ${t.border};
    background-color: ${t.buttonBlack};
  `}
`,W=d(w)`
  font-size: 12px;
  padding: 6px 0;
`;function tn(t,n,a){const i=Math.floor((a-n)/t),s=n+i*t;return{epochNumber:i,epochStartTimestamp:s}}function Pe({proposal:t}){const n=B(),{account:a}=U(),{stakerInfo:i,daoInfo:s}=he(),l=x.useMemo(()=>i?(i.delegate.toLowerCase()===(a==null?void 0:a.toLowerCase())?i.stake_amount:0)+i.delegated_stake_amount:0,[i,a]),o=new nt(t.max_voting_power,me.exponentiate(me.BigInt(10),me.BigInt(18))).multiply(t.executor_minimum_quorum).divide(it),{epochNumber:h,epochStartTimestamp:p}=tn((s==null?void 0:s.epoch_period_in_seconds)??0,(s==null?void 0:s.first_epoch_start_timestamp)??0,t.start_timestamp);return e.jsxs(en,{children:[e.jsx(r,{children:e.jsx(c,{id:"yHbuPD"})}),e.jsx(J,{margin:"10px 0"}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"6GCMla"})}),e.jsx(r,{color:n.text,children:t.proposal_type})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"D3iCkb"})}),e.jsx(r,{color:n.text,children:ae(t.start_timestamp*1e3).format("DD MMMM YYYY")})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"VFv2ZC"})}),e.jsx(r,{color:n.text,children:ae(t.end_timestamp*1e3).format("DD MMMM YYYY")})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"kuwWbi"})}),e.jsx(r,{color:n.text,children:t.vote_stats.total_address_count})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"7r4ubk"})}),e.jsx(r,{color:n.text,children:Math.floor(t.vote_stats.total_vote_count).toLocaleString()})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"MK0Z7u",values:{epochNumber:h}})}),e.jsx(r,{color:n.text,children:ae(p*1e3).format("DD MMMM YYYY")})]}),e.jsxs(W,{children:[e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"U2GebD"})}),t.vote_stats.quorum_status===1?e.jsx(r,{color:n.text,children:e.jsx(c,{id:"7T/o5R"})}):e.jsx(ke,{text:`Total amount required: ${Math.floor(+o.toFixed(0)).toLocaleString()} KNC`,placement:"bottom",width:"fit-content",children:e.jsxs(X,{width:"fit-content",gap:"6px",color:n.warning,children:[e.jsx(st,{size:"16",solid:!0}),e.jsx(r,{color:n.warning,fontWeight:500,children:e.jsx(c,{id:"cuCuxw"})})]})})]}),e.jsxs(W,{children:[e.jsxs(r,{color:n.subText,children:[e.jsx(c,{id:"xNskUJ"})," ",e.jsx(Q,{placement:"top",text:"Your KIP Voting Power is calculated by [Your Staked KNC] / [Total Voted KNC in this KIP] * 100%."})]}),e.jsxs(r,{color:n.text,children:[l>0&&t.vote_stats.total_vote_count>0?+(l/t.vote_stats.total_vote_count*100).toPrecision(4):t.vote_stats.total_vote_count===0?100:0,"%"]})]})]})}const nn=d.div`
  content-visibility: auto;
  contain-intrinsic-size: 60px;
  padding: ${b?"16px":"20px 24px"};
  border-radius: 20px;
  box-shadow: 0px 2px 34px rgba(0, 0, 0, 0.0467931);
  overflow: hidden;
  ${({theme:t})=>m`
    background-color: ${t.background};
  `}
`,sn=d.div`
  display: flex;
  flex-direction: column;
  gap: ${b?"16px":"20px"};
  z-index: 1;
  & > *:first-child {
    cursor: pointer;
  }
  ${({theme:t})=>m`
    /* background-color: ${t.background}; */
  `}
`,on=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  ${({theme:t})=>m`
    color: ${t.subText};
    background-color: ${ye(.8,t.subText)};
  `}
`,Qe=m`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 14px;
`,Ae=d.div`
  ${Qe}
  color: ${({theme:t})=>t.subText};
  background-color: ${({theme:t})=>t.buttonBlack};
`,Be=d.div`
  ${Qe}
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }

  ${({color:t,theme:n})=>t?m`
          color: ${t};
          background-color: ${ye(.8,t)};
        `:m`
          color: ${n.subText};
          background-color: ${n.buttonBlack};
        `}
`,rn=d.div`
  gap: 24px;
  padding: 24px 0;
  transition: all 0.2s ease;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,an=d(w)`
  ${({optionCount:t,theme:n})=>t&&t>2?m`
        flex-wrap: wrap;
        justify-content: flex-start;
        > * {
          width: calc(33.33% - 20px * 2 / 3);
        }
        ${n.mediaWidth.upToMedium`
          > * {
            width: calc(50% - 20px / 2);
          }
        `}
        ${n.mediaWidth.upToSmall`
          > * {
            width: 100%;
          }
        `}
      `:""}
`,ln=({status:t,onVoteClick:n,errorMessage:a,voted:i})=>{const{account:s}=U(),l=Fe(),o=x.useRef(!0);return x.useEffect(()=>{const h=setTimeout(()=>{o.current=!1},1500);return()=>{clearTimeout(h)}},[]),e.jsx(e.Fragment,{children:t===k.Active?s?e.jsx(xe,{width:b?"100%":"fit-content",minWidth:"200px",fontWeight:500,fontSize:"14px",onClick:n,disabled:o.current||!!a,children:a&&!o.current?a:i?e.jsx(c,{id:"uuj+T0"}):e.jsx(c,{id:"1G1y32"})}):e.jsx(Ne,{width:b?"100%":"200px",onClick:l,children:e.jsx(c,{id:"iSLIjg"})}):e.jsx(e.Fragment,{})})},cn=[14,15,17,18,19,20,22];function dn({proposal:t,showByDefault:n,onBadgeClick:a,voteCallback:i}){var E;const s=B(),{account:l}=U(),{votesInfo:o,stakerInfo:h}=he(),p=h?(h.delegate.toLowerCase()===(l==null?void 0:l.toLowerCase())?h.stake_amount:0)+h.delegated_stake_amount:0,j=!!h&&h.delegate.toLowerCase()!==(l==null?void 0:l.toLowerCase()),[u,v]=x.useState(!!n),[g,y]=x.useState([]),[Y,T]=x.useState(null),[R,C]=x.useState(!1);x.useEffect(()=>{j?T(S._({id:"VbCFBZ"})):p?(g==null?void 0:g.length)===0?T(S._({id:"7oehSn"})):T(null):T(S._({id:"zKxGU0"}))},[g.length,h==null?void 0:h.stake_amount,j,p]);const L=x.useRef(),ee=()=>{switch(t.status){case k.Pending:return s.warning;case k.Active:return s.blue;case k.Approved:case k.Executed:return s.primary;case k.Canceled:case k.Failed:return s.red;default:return s.blue}},{switchToEthereum:O}=Ve(),ue=x.useCallback(()=>{O(S._({id:"Ao7rLa"})).then(()=>{g.length>0&&C(!0)})},[O,C,g]),te=x.useCallback(()=>{C(!1),g.length>0&&(i==null||i(t.proposal_id,g.map(f=>f+1).reduce((f,_)=>f+=1<<_-1,0)).then(()=>{y([])}).catch(f=>{T(f.message)}))},[g,t.proposal_id,i]),$=x.useMemo(()=>o==null?void 0:o.find(f=>f.proposal_id===t.proposal_id),[o,t.proposal_id]);x.useEffect(()=>{y([])},[$]);const A=cn.includes(t.proposal_id),G=x.useCallback(f=>{if(t.proposal_type===re.BinaryProposal||A)y([f]);else if(t.proposal_type===re.GenericProposal)if(g.length===0)y([f]);else{const _=[...g],P=_.indexOf(f);P!==-1?_.splice(P,P+1):_.push(f),y(_)}},[t.proposal_type,y,g,A]),M=t.status===k.Active,F=x.useMemo(()=>e.jsx(an,{gap:b?"16px":"20px",flexDirection:b?"column":"row",optionCount:t.options.length,children:t.options.map((f,_)=>{var q,ie,se;const P=((q=$==null?void 0:$.options)==null?void 0:q.includes(_))||!1,ne=(se=(ie=t==null?void 0:t.vote_stats)==null?void 0:ie.options)==null?void 0:se.find(pe=>pe.option===_);return e.jsx(qt,{disabled:!M,percent:ne?ne.vote_count/t.vote_stats.total_vote_count*100:0,title:f,checked:(g==null?void 0:g.includes(_))||P,onOptionClick:()=>G(_),type:t.status===k.Pending?"Pending":g!=null&&g.includes(_)?"Choosing":P?"Active":"Finished",isCheckBox:t.proposal_type===re.GenericProposal&&!A,proposalId:t.proposal_id,id:_},f)})}),[t,g,$==null?void 0:$.options,G,M,A]);return e.jsxs(nn,{children:[e.jsxs(sn,{children:[e.jsxs(w,{onClick:()=>v(f=>!f),children:[e.jsx(r,{children:t.title}),e.jsx(on,{children:e.jsx(Ye,{size:24,style:{transition:"all 0.2s ease",transform:u?"rotate(180deg)":void 0}})})]}),(u||M)&&b&&e.jsxs(w,{children:[e.jsxs(z,{gap:"8px",flexWrap:"wrap",children:[e.jsx(Be,{color:ee(),onClick:()=>a==null?void 0:a(t.status),children:t.status}),e.jsxs(Ae,{children:["ID #",t.proposal_id]})]}),M&&e.jsxs(z,{gap:"4px",flexShrink:0,children:[e.jsx(r,{color:s.subText,fontSize:12,children:e.jsx(c,{id:"8nbhXc"})}),e.jsx(le,{endTime:t.end_timestamp})]})]}),(u||M)&&F,e.jsxs(w,{children:[M?e.jsx(Me,{gap:"4px",children:e.jsx(ln,{status:t.status,onVoteClick:ue,errorMessage:Y,voted:!!($!=null&&$.options)&&$.options.length>0})}):t.status===k.Pending?e.jsxs(z,{gap:"4px",children:[e.jsx(r,{color:s.subText,fontSize:12,children:e.jsx(c,{id:"PiKJ9+"})}),e.jsx(le,{endTime:t.start_timestamp})]}):e.jsxs(r,{color:s.subText,fontSize:12,children:["Ended ",ae(t.end_timestamp*1e3).format("DD MMM YYYY")]}),!((u||M)&&b)&&e.jsxs(Me,{gap:"8px",children:[e.jsxs(X,{gap:"8px",justify:"flex-end",children:[e.jsx(Be,{color:ee(),onClick:()=>a==null?void 0:a(t.status),children:t.status}),e.jsxs(Ae,{children:["ID #",t.proposal_id]})]}),M&&e.jsxs(X,{gap:"4px",children:[e.jsx(r,{color:s.subText,fontSize:12,children:e.jsx(c,{id:"8nbhXc"})}),e.jsx(le,{endTime:t.end_timestamp})]})]})]})]}),u&&e.jsxs(rn,{ref:L,children:[e.jsxs(X,{align:"flex-start",gap:"16px",children:[e.jsxs("div",{style:{flex:1},children:[(t==null?void 0:t.link)&&t.link!=="0x0"&&e.jsxs("a",{href:(E=t.link)!=null&&E.startsWith("http")?t.link:"http://"+t.link,style:{marginBottom:"12px",width:"fit-content"},target:"_blank",rel:"noreferrer",children:[e.jsx("span",{style:{marginRight:"4px"},children:e.jsx(ft,{size:14})}),e.jsx("span",{style:{fontSize:"14px",verticalAlign:"top"},children:e.jsx(c,{id:"j3Cc3u"})})]}),e.jsx(r,{fontSize:b?14:16,lineHeight:b?"18px":"22px",color:s.subText,marginBottom:"20px",dangerouslySetInnerHTML:{__html:ot(t.desc.replaceAll("\\n","").replaceAll("\\r",""))},style:{wordBreak:"break-word"}}),b&&e.jsx(Pe,{proposal:t})]}),!b&&e.jsx("div",{style:{width:"368px"},children:e.jsx(Pe,{proposal:t})})]}),e.jsx(Jt,{proposalId:t.proposal_id})]}),t.status===k.Active&&e.jsx(Vt,{isShow:R,title:t.title,toggle:()=>C(!1),options:g.length>0?g.map(f=>{var _;return((_=de[t.proposal_id])==null?void 0:_[f])||t.options[f]}).join(", "):"",onVoteConfirm:te})]})}const xn=V.memo(dn),hn=d.div`
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  padding: 6px 12px;
  position: relative;
  display: flex;
  ${({theme:t})=>m`
      background-color: ${t.background};
      color: ${t.border};
    `}
`,un=d.input`
  border: none;
  outline: none;
  background-color: transparent;
  line-height: 18px;
  width: min(400px, 35vw);
  ${({theme:t})=>m`
      color: ${t.subText};
      ::placeholder {
        color: ${t.border};
      }
    `}
`;function pn({search:t,setSearch:n}){return e.jsxs(hn,{children:[e.jsx(un,{placeholder:S._({id:"aCmWRP"}),value:t,onChange:a=>n==null?void 0:n(a.target.value)}),e.jsx(_t,{})]})}const gn=d.div`
  position: relative;
`,jn=d.div`
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  width: min(140px, 30vw);
  height: 36px;
  z-index: 101;
  position: inherit;
  ${({theme:t})=>m`
    background-color: ${t.background};
    color: ${t.border};
    :hover {
      background-color: ${$e(.1,t.background)};
    }
  `}
`,mn=d.div`
  border-radius: 8px;
  transition: 0.2s all ease;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 140px;
  z-index: 100;
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  ${({theme:t,show:n})=>m`
    background-color: ${t.tableHeader};
    color: ${t.subText};
    ${n?m`
          opacity: 1;
          max-height: 500px;
          top: calc(100% + 4px);
        `:m`
          opacity: 0;
          top: 0;
          max-height: 0;
        `};
  `}
`,Oe=d.div`
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  ${({theme:t,active:n})=>m`
    :hover {
      background-color: ${t.buttonGray};
    }
    ${n&&`color: ${t.primary}`}
  `}
`;function fn({status:t,setStatus:n}){const a=B(),[i,s]=x.useState(!1),l=x.useRef(null);return rt(l,()=>s(!1)),e.jsx(e.Fragment,{children:e.jsxs(gn,{ref:l,children:[e.jsxs(jn,{onClick:()=>s(o=>!o),children:[e.jsx(r,{color:t&&t!=="All"?a.text:void 0,children:t||"All"}),e.jsx(Ye,{size:16})]}),e.jsxs(mn,{show:i,children:[e.jsx(Oe,{active:!t,onClick:()=>{s(!1),n==null||n("")},children:e.jsx(c,{id:"N40H+G"})},"All"),Object.values(k).map(o=>e.jsx(Oe,{active:o===t,onClick:()=>{s(!1),n==null||n(o)},children:o},o))]})]})})}const bn=d.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  margin-top: 10px;
`,We=d.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
  ${({theme:t})=>m`
    color: ${t.subText};
    :hover {
      color: ${$e(.2,t.primary)} !important;
    }
  `}
`,wn=d(z)`
  justify-content: flex-end;
  gap: 4px;
  cursor: pointer;
  color: ${({theme:t})=>t.subText};
  :hover {
    color: ${({theme:t})=>$e(.2,t.primary)};
  }
`;function _n({voteCallback:t}){const n=B(),{account:a}=U(),{proposals:i}=he(),[s,l]=x.useState(),[o,h]=x.useState(),p=x.useMemo(()=>(i==null?void 0:i.filter(u=>s?u.status===s:o?u.title.toLowerCase().includes(o.toLowerCase()):!0).sort((u,v)=>v.proposal_id-u.proposal_id).sort((u,v)=>u.status===k.Active?-1:v.status===k.Active?1:0))||[],[i,s,o]),j=_e(ce.YOUR_TRANSACTIONS_STAKE_KNC);return e.jsxs(bn,{children:[e.jsxs(w,{marginBottom:"10px",children:[e.jsx(Z,{children:e.jsx(r,{color:n.primary,fontSize:20,children:e.jsx(c,{id:"81RIiP"})})}),e.jsxs(Z,{style:{gap:"30px"},children:[a&&e.jsxs(wn,{onClick:j,children:[e.jsx(bt,{}),e.jsxs(r,{fontSize:14,hidden:b,children:[" ",e.jsx(c,{id:"0caMy7"})]})]}),e.jsxs(We,{href:"https://gov.kyber.org/",target:"_blank",rel:"noreferrer",children:[e.jsx(At,{})," ",e.jsx(r,{hidden:b,children:e.jsx(c,{id:"7AtLTK"})})]}),e.jsxs(We,{href:"https://docs.kyberswap.com/kyber-dao/kyber-dao-introduction",target:"_blank",rel:"noreferrer",children:[e.jsx(Pt,{}),e.jsx(r,{hidden:b,children:e.jsx(c,{id:"/lDBHm"})})]})]})]}),e.jsxs(w,{children:[e.jsx(fn,{status:s,setStatus:l}),e.jsx(pn,{search:o,setSearch:h})]}),i?p.length>0?p.map((u,v)=>e.jsx(xn,{proposal:u,showByDefault:v===0,onBadgeClick:l,voteCallback:t},u.proposal_id.toString())):e.jsxs(Z,{flexDirection:"column",justifyContent:"center",alignItems:"center",color:n.subText,style:{height:"200px",gap:"12px"},children:[e.jsx(at,{size:24,color:n.subText}),e.jsx(r,{color:n.subText,children:e.jsx(c,{id:"zoU4+G"})})]}):e.jsx(Z,{flexDirection:"column",justifyContent:"center",alignItems:"center",color:n.subText,style:{height:"200px",gap:"12px"},children:e.jsx(Rt,{})}),e.jsx(wt,{})]})}const Cn=V.memo(_n),vn=d.div`
  width: 100%;
  background-image: url(${mt});
  background-size: 100% auto;
  background-repeat: repeat-y;
  z-index: 1;
  background-color: transparent;
  background-position: top;
`,kn=d.div`
  width: 1224px;
  margin: auto;
  min-height: 1200px;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({theme:t})=>t.mediaWidth.upToLarge`
    width:100%;
    padding: 48px 16px;
  `}
`,fe=d.div`
  padding: 20px 24px;
  border-radius: 20px;

  ${({theme:t})=>m`
    background-color: ${ye(.3,t.buttonGray)};
    flex: 1;
  `}
  ${({hasGreenBackground:t})=>t&&m`
      background-image: url('${Tt}');
      background-size: cover;
    `}
`,yn=d(w)`
  width: 100%;
  gap: 24px;
  margin-bottom: 12px;
  align-items: stretch;
  ${({theme:t})=>t.mediaWidth.upToMedium`
    flex-direction: column;
  `}
`,De=d.span`
  cursor: pointer;
  ${({active:t,theme:n})=>t&&`color: ${n.primary}`};

  :hover {
    filter: brightness(1.2);
  }
`,oe=t=>t===void 0?"--":t===0?"0%":t<1e-4?"<0.0001 %":t<1?t.toFixed(4)+" %":t.toPrecision(4)+" %";var Re;(function(t){t[t.YourReward=0]="YourReward",t[t.ClaimedReward=1]="ClaimedReward"})(Re||(Re={}));function Pn(){var ze;const t=B(),{account:n}=U(),{mixpanelHandler:a}=lt(),{daoInfo:i,remainingCumulativeAmount:s,claimedRewardAmount:l,stakerInfo:o,stakerInfoNextEpoch:h}=he(),p=ct(),j=dt(),{vote:u}=xt(),{switchToEthereum:v}=Ve(),g=!!s&&!s.eq(0),y=_e(ce.KYBER_DAO_CLAIM),Y=Fe(),[T,R]=x.useState(0),[C,L]=x.useState(!1),[ee,O]=x.useState(!1),[ue,te]=x.useState(""),[$,A]=x.useState(void 0),[G,M]=x.useState(void 0),F=o?(o==null?void 0:o.stake_amount)+(o==null?void 0:o.pending_stake_amount):0,E=x.useMemo(()=>o?(o.delegate.toLowerCase()===(n==null?void 0:n.toLowerCase())?o.stake_amount:0)+o.delegated_stake_amount:0,[o,n]),f=x.useMemo(()=>h?(h.delegate.toLowerCase()===(n==null?void 0:n.toLowerCase())?h.stake_amount:0)+h.delegated_stake_amount:0,[h,n]),_=o&&o.stake_amount>0,P=o&&o.pending_stake_amount>0,ne=o&&o.delegated_stake_amount>0,q=o&&n?((ze=o.delegate)==null?void 0:ze.toLowerCase())!==n.toLowerCase():!1,ie=x.useCallback(()=>{v(S._({id:"UjiJd0"})).then(()=>{a(ht.KYBER_DAO_CLAIM_CLICK),y()})},[y,a,v]),se=x.useCallback(async()=>{const ge=K(s);te(S._({id:"rAR3jR",values:{amount:ge}})),L(!0),O(!0),y();try{const H=await j();A(H)}catch(H){M(H==null?void 0:H.message),A(void 0)}finally{O(!1)}},[j,s,y]),pe=x.useCallback(async(ge,H)=>{te(S._({id:"ZeWIoC"})),L(!0),O(!0);try{const N=await u(ge,H);return O(!1),A(N),!0}catch(N){throw L(!1),O(!1),M(N==null?void 0:N.message),A(void 0),N}},[u]);return e.jsx(vn,{children:e.jsxs(kn,{children:[e.jsxs(w,{marginBottom:b?0:36,children:[e.jsx(r,{fontSize:b?22:24,lineHeight:"28px",fontWeight:500,flex:1,children:e.jsx(c,{id:"gNaKXf"})}),e.jsxs(z,{gap:"4px",children:[e.jsx(Ke,{size:20}),e.jsxs(r,{fontSize:16,children:["ONC: $",p?(+p).toPrecision(4):"--"]})]})]}),e.jsxs(yn,{children:[e.jsx(fe,{children:e.jsxs(I,{children:[e.jsx(r,{color:t.subText,fontSize:"14px",marginBottom:"20px",children:e.jsx(c,{id:"1850U5"})}),e.jsx(r,{fontSize:20,marginBottom:"8px",fontWeight:500,children:i?Le(Math.round(i.total_staked))+" KNC":"--"}),e.jsx(r,{fontSize:12,color:t.subText,children:i&&p?"~"+Le(+p*Math.round(i.total_staked))+" USD":""})]})}),e.jsx(fe,{children:e.jsxs(I,{children:[e.jsxs(r,{color:t.subText,fontSize:"14px",marginBottom:"20px",children:[e.jsx(c,{id:"AUji8Z"})," ",e.jsx(Q,{fontSize:12,placement:"top",text:S._({id:"LjMTbU"})})]}),e.jsxs(w,{marginBottom:"8px",children:[e.jsxs(z,{children:[e.jsxs(r,{fontSize:20,color:P&&!_?t.border:t.text,fontWeight:500,children:[oe((i==null?void 0:i.total_staked)&&E&&E/i.total_staked*100),P&&_||ne?e.jsx(Q,{fontSize:12,placement:"top",width:"fit-content",color:t.warning,size:14,text:e.jsxs(I,{gap:"8px",children:[e.jsx(r,{color:t.subText,lineHeight:"14px",style:{width:"260px"},children:P?e.jsx(c,{id:"Eeulm/"}):e.jsx(c,{id:"omvBoA"})}),e.jsx(r,{color:t.text,children:e.jsx(c,{id:"lvcHiT",values:{0:oe(E&&(i==null?void 0:i.total_staked)&&E/i.total_staked*100)}})}),o!=null&&o.delegated_stake_amount?e.jsx(r,{color:t.text,children:e.jsx(c,{id:"1lIIMG",values:{0:oe((o==null?void 0:o.delegated_stake_amount)&&(i==null?void 0:i.total_staked)&&(o==null?void 0:o.delegated_stake_amount)/i.total_staked*100)}})}):null,e.jsx(r,{color:t.warning,children:e.jsx(c,{id:"Zz3wM2",values:{0:oe(f&&(i==null?void 0:i.total_staked)&&f/i.total_staked*100)}})})]})}):null,F&&(o==null?void 0:o.stake_amount)===0&&!q?e.jsx(Q,{fontSize:12,size:14,color:t.subText,placement:"top",text:S._({id:"XA82Zw"})}):null]}),F?null:e.jsx(Q,{placement:"top",fontSize:12,text:S._({id:"eW2ksU"})})]}),q&&e.jsx(ke,{text:S._({id:"jDQopj"}),placement:"top",children:e.jsxs(z,{gap:"4px",color:t.subText,children:[e.jsx(ut,{size:14}),e.jsx(r,{fontSize:12,children:(o==null?void 0:o.delegate.slice(0,5))+"..."+(o==null?void 0:o.delegate.slice(-4))})]})})]}),e.jsxs(w,{children:[e.jsx(r,{fontSize:12,color:t.subText,children:F?(+F.toFixed(2)).toLocaleString()+" ONC Staked":"--"}),e.jsx(pt,{to:"/kyberdao/stake-knc",style:{fontSize:"12px",whiteSpace:"nowrap"},children:e.jsx(c,{id:"4st+5A"})})]})]})}),e.jsx(fe,{hasGreenBackground:g,children:e.jsxs(I,{justify:"space-between",children:[e.jsxs(r,{color:t.subText,fontSize:"14px",marginBottom:20,children:[e.jsx(De,{active:T===0,onClick:()=>R(0),children:e.jsx(c,{id:"uiEhIw"})})," ","|"," ",e.jsx(De,{active:T===1,onClick:()=>R(1),children:e.jsx(c,{id:"v+ijb6"})})]}),n?T===0?e.jsxs(w,{children:[e.jsxs(I,{children:[e.jsxs(r,{fontSize:20,marginBottom:"8px",fontWeight:500,children:[K(s,void 0,2)," ONC"]}),e.jsxs(r,{fontSize:12,color:t.subText,children:[(+(+K(s)*+(p||"0")).toFixed(2)).toLocaleString()," ","USD"]})]}),e.jsx(xe,{width:"75px",disabled:!g,style:{filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16))"},onClick:ie,children:e.jsx(c,{id:"hom7qf"})})]}):e.jsx(w,{children:e.jsxs(I,{children:[e.jsxs(r,{fontSize:20,marginBottom:"8px",fontWeight:500,children:[(+K(l,void 0,2)).toLocaleString()," ONC"]}),e.jsxs(r,{fontSize:12,color:t.subText,children:[(+(+K(l)*+(p||0)).toFixed(2)).toLocaleString()," ","USD"]})]})}):e.jsx(Ne,{onClick:Y,children:e.jsx(c,{id:"iSLIjg"})})]})})]}),e.jsxs(ve,{fontSize:12,flexDirection:b?"column":"row",alignItems:b?"start !important":"center",gap:b?"4px":"0px",children:[e.jsxs(z,{children:[e.jsx(r,{children:e.jsx(c,{id:"ph9BBh",values:{0:i?i.current_epoch:"--"}})}),i&&e.jsx(le,{endTime:i.first_epoch_start_timestamp+i.current_epoch*i.epoch_period_in_seconds})]}),e.jsx(r,{children:e.jsx(c,{id:"8kOhCN"})})]}),e.jsx(r,{color:t.subText,fontStyle:"italic",fontSize:12,hidden:b,children:e.jsx(c,{id:"WVMa8X"})}),e.jsx(Cn,{voteCallback:pe}),e.jsx(Lt,{amount:K(s),onConfirmClaim:se}),e.jsx(gt,{isOpen:C,onDismiss:()=>L(!1),attemptingTxn:ee,hash:$,pendingText:ue,content:()=>G?e.jsx(jt,{message:G,onDismiss:()=>L(!1)}):e.jsx(e.Fragment,{})})]})})}export{Pn as default};
