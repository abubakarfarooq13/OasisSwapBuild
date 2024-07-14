import{s as i,cP as C,a1 as P,aS as _,k as I,aB as H,fV as V,hK as G,r as p,fI as K,fr as L,a5 as Q,j as e,hL as U,c5 as Z,g as o,db as J,F as c,b5 as M,aa as A,d as b,bk as F,b2 as X,J as R,az as W,dc as $,u as Y,x as q,cx as ee,T as te,a8 as se,cC as oe,cB as ne}from"./index-3b83b03c.js";import{T as re,S as ie}from"./index-ef0a8092.js";import{Q as z}from"./index-0c52be50.js";import{b as ae}from"./index-2c0a8d65.js";import{A as le,a as ce,S as de,T as ge}from"./TransactionSettingsIcon-1f9c2821.js";const xe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,he=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;

  ${C} {
    background: ${({theme:t})=>t.buttonBlack};
    &[data-active='true'] {
      background: ${({theme:t})=>P(t.primary,.2)};
    }
  }
`,ue=_`
  min-width: 322px;
  right: -10px;
  top: 3.25rem;

  ${({theme:t})=>t.mediaWidth.upToLarge`
    top: 3.25rem;
    bottom: unset;
    & > div:after {
      top: -40px;
      border-top-color: transparent;
      border-bottom-color: ${({theme:s})=>s.tableHeader};
      border-width: 10px;
      margin-left: -10px;
    }
  `};
`;function pe({isElastic:t,hoverBg:s}){const n=I(),[d,S]=H(),[w,f]=V(),a=G(),[T,g]=p.useState(!1),x=K(L.TRANSACTION_SETTINGS),[l,m]=Q(),r=l.get("showSetting");p.useEffect(()=>{r==="true"&&a()},[r]);const[v,h]=p.useState(!1),y=p.useCallback(()=>h(!0),[h]),u=p.useCallback(()=>h(!1),[h]),j=()=>{if(d){S(),g(!1);return}a(),r==="true"&&(l.delete("showSetting"),m(l,{replace:!0})),g(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(le,{show:T,setShow:g}),e.jsx(xe,{children:e.jsx(U,{trigger:e.jsx(Z,{width:"fit-content",placement:"top",text:o._({id:"laM0ia"}),show:d&&v,children:e.jsx("div",{onMouseEnter:y,onMouseLeave:u,children:e.jsx(J,{hoverBg:s,active:x,onClick:a,id:"open-settings-dialog-button","aria-label":"Transaction Settings",children:e.jsx(ce,{fill:d?n.warning:n.subText})})})}),customStyle:ue,isOpen:x,toggle:()=>{a(),r==="true"&&(l.delete("showSetting"),m(l,{replace:!0}))},title:o._({id:"JiIKww"}),mobileCustomStyle:{paddingBottom:"40px"},hasArrow:!0,children:e.jsxs(he,{children:[e.jsx(de,{shouldShowPinButton:!1}),e.jsx(ge,{}),e.jsxs(c,{justifyContent:"space-between",children:[e.jsx(c,{width:"fit-content",alignItems:"center",children:e.jsx(M,{fontSize:12,fontWeight:400,color:n.subText,underlineColor:n.border,children:e.jsx(A,{text:o._({id:"0ugWx2"}),placement:"right",children:e.jsx(b,{id:"2l3xuC"})})})}),e.jsx(C,{id:"toggle-expert-mode-button",isActive:d,toggle:j,highlight:r==="true"})]}),t&&e.jsxs(c,{justifyContent:"space-between",children:[e.jsx(c,{width:"fit-content",alignItems:"center",children:e.jsx(M,{fontSize:12,fontWeight:400,color:n.subText,underlineColor:n.border,children:e.jsx(A,{text:o._({id:"n4Afxx"}),placement:"right",children:e.jsx(b,{id:"0x/Wlo"})})})}),e.jsx(C,{id:"toggle-aggregator-for-zap",isActive:w,toggle:f})]})]})})})]})}const D=i.div`
  ${({theme:t})=>t.flexRowNoWrap}
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,fe=i(F)`
  padding: 1rem 0 4px;

  @media only screen and (min-width: 768px) {
    padding: 1rem 0;
  }
`,N=i.div`
  font-weight: 500;
  font-size: 20px;
`,O=i(X)`
  color: ${({theme:t})=>t.text};
`,me=i(R)`
  width: 28px;
  height: 28px;
  justify-content: center;
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({theme:t})=>t.buttonBlack};
  }
  margin-right: 8px;
`,B=i.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:t})=>t.subText};

  border-radius: 999px;

  :hover {
    cursor: pointer;
    outline: none;
    background-color: ${({theme:t})=>t.buttonBlack};
  }

  ${({active:t})=>t?_`
          cursor: pointer;
          outline: none;
          background-color: ${({theme:s})=>s.buttonBlack};
        `:""}
`;function ve(){const t=W(),s=$(),n=()=>{s.key==="default"?t("/"):t(-1)};return e.jsx(D,{children:e.jsxs(F,{style:{padding:"1rem"},children:[e.jsx(R,{width:"fit-content",padding:"0",onClick:n,children:e.jsx(O,{})}),e.jsx(N,{children:e.jsx(b,{id:"65tPVb"})}),e.jsx(z,{text:o._({id:"lqx7iU"})})]})})}var E;(function(t){t[t.CREATE=0]="CREATE",t[t.ADD=1]="ADD",t[t.INCREASE=2]="INCREASE",t[t.REMOVE=3]="REMOVE"})(E||(E={}));function ye({isElastic:t,action:s,alignTitle:n="center",showTooltip:d=!0,hideShare:S=!1,onShared:w,onCleared:f,onBack:a,tooltip:T,tutorialType:g,owner:x,showOwner:l}){const{chainId:m}=Y(),r=W(),v=$(),h=q("(max-width: 768px)"),y=()=>{v.key==="default"?r("/"):r(-1)},u=I(),j=e.jsx(me,{width:"fit-content",padding:"0",onClick:a||y,children:n==="left"?e.jsx(ee,{color:u.subText}):e.jsx(O,{})}),k=e.jsxs(c,{children:[e.jsx(N,{children:s===0?o._({id:"G8nyeW"}):s===1?o._({id:"OBdohg"}):s===2?o._({id:"+zruvG"}):o._({id:"3XBvkd"})}),d&&e.jsx(z,{size:16,text:T||(s===0?o._({id:"i0VaFM"}):s===1?o._({id:"q0HxvU"}):s===2?"":s===3?o._({id:"EbACKQ"}):"")})]});return e.jsx(D,{children:e.jsxs(fe,{children:[h||n==="left"?e.jsxs(c,{alignItems:"center",children:[j,k]}):e.jsxs(e.Fragment,{children:[j,k]}),e.jsxs(c,{style:{gap:"0px"},children:[l&&x&&e.jsxs(te,{fontSize:"12px",fontWeight:"500",color:u.subText,display:"flex",alignItems:"center",marginRight:"8px",children:[e.jsx(b,{id:"2rvOHc",values:{0:se(m,x)}}),e.jsx(oe,{toCopy:x})]}),g&&e.jsx(re,{type:g,customIcon:e.jsx(B,{children:e.jsx(ie,{})})}),f&&e.jsx(B,{active:!1,onClick:f,children:e.jsx(ne,{size:18})}),e.jsx(pe,{isElastic:t,hoverBg:u.buttonBlack}),!S&&e.jsx(ae,{onShared:w,title:o._({id:"iN1Ds6"})})]})]})})}export{ye as A,ve as F,E as L};
