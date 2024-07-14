import{r as d,R as L,aP as ie,j as t,s as f,aS as we,e as Ne,B as ce,d as j,aa as Ie,b7 as ve,c as Re,k as ue,kq as De,kr as Le,z as ke,x as Pe,g as w,N as te,k9 as $e,bk as Ve,T as N,X as ze,I as We,ks as ne,cQ as Be,kt as He,D as Ge,bt as _e,a7 as Fe,b as Ue,c5 as Ze,C as le,i as Xe,ex as qe,u as Ke,jX as Ye,jZ as Je,aV as Qe,ku as oe,jr as he,kv as me,az as et,bg as tt,ey as st,a_ as be,a2 as it}from"./index-bd92f56a.js";import{X as nt}from"./XCircle-87c6d166.js";function de(){return de=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},de.apply(this,arguments)}function ot(e,i){if(e==null)return{};var r=rt(e,i),o,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function rt(e,i){if(e==null)return{};var r={},o=Object.keys(e),a,u;for(u=0;u<o.length;u++)a=o[u],!(i.indexOf(a)>=0)&&(r[a]=e[a]);return r}var pe=d.forwardRef(function(e,i){var r=e.color,o=r===void 0?"currentColor":r,a=e.size,u=a===void 0?24:a,y=ot(e,["color","size"]);return L.createElement("svg",de({ref:i,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},y),L.createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),L.createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),L.createElement("polyline",{points:"7 3 7 8 15 8"}))});pe.propTypes={color:ie.string,size:ie.oneOfType([ie.string,ie.number])};pe.displayName="Save";const at=pe;function ge({size:e=22,color:i="currentColor"}){const r=.8636363636363636*e|0;return t.jsx("svg",{width:e,height:r,viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.62539 18.35C2.09206 18.35 1.62956 18.1542 1.23789 17.7625C0.846224 17.3708 0.650391 16.9083 0.650391 16.375V3.625C0.650391 3.075 0.846224 2.60417 1.23789 2.2125C1.62956 1.82083 2.09206 1.625 2.62539 1.625H13.2004C13.1004 1.95833 13.0379 2.29167 13.0129 2.625C12.9879 2.95833 13.0004 3.29167 13.0504 3.625H2.62539V16.375H19.3754V7.775C19.7421 7.675 20.0921 7.53333 20.4254 7.35C20.7587 7.16667 21.0754 6.95 21.3754 6.7V16.375C21.3754 16.9083 21.1796 17.3708 20.7879 17.7625C20.3962 18.1542 19.9254 18.35 19.3754 18.35H2.62539ZM2.62539 3.625V16.375V3.625ZM18.0004 6C17.1671 6 16.4587 5.70833 15.8754 5.125C15.2921 4.54167 15.0004 3.83333 15.0004 3C15.0004 2.16667 15.2921 1.45833 15.8754 0.875C16.4587 0.291667 17.1671 0 18.0004 0C18.8337 0 19.5421 0.291667 20.1254 0.875C20.7087 1.45833 21.0004 2.16667 21.0004 3C21.0004 3.83333 20.7087 4.54167 20.1254 5.125C19.5421 5.70833 18.8337 6 18.0004 6ZM11.0004 9.075L14.6254 6.675C14.8254 6.875 15.0462 7.04583 15.2879 7.1875C15.5296 7.32917 15.7754 7.45 16.0254 7.55L11.5504 10.525C11.3837 10.6417 11.2046 10.7 11.0129 10.7C10.8212 10.7 10.6337 10.6417 10.4504 10.525L2.62539 5.425V3.625L11.0004 9.075Z",fill:i})})}const ct=f.div`
  font-size: 14px;
  font-weight: 500;
`,lt=we`
  width: 100%;
  justify-content: space-around;
  margin-top: 4px;
`,dt=f.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    ${lt}
`};
`,Ae=we`
  width: 120px;
  height: 36px;
  border-radius: 46px;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    width: 45%;
`};
`,ut=f(Ne)`
  ${Ae}
`,pt=f(ce)`
  ${Ae}
`;function xt({disableButtonSave:e,isLoading:i,onSave:r,onUnsubscribeAll:o,subscribeAtLeast1Topic:a,tooltipSave:u}){return t.jsxs(dt,{children:[t.jsxs(ut,{onClick:o,disabled:!a,children:[t.jsx(nt,{size:"14px"})," ",t.jsx(j,{id:"IBUMsZ"})]}),t.jsxs(pt,{disabled:e,onClick:r,children:[t.jsx(at,{size:14})," ",t.jsx(Ie,{text:u,children:t.jsx(ct,{children:(()=>i?t.jsxs(ve,{children:[t.jsx(Re,{})," ",t.jsx(j,{id:"XGuIqy"})]}):t.jsx(j,{id:"tfDRzk"}))()})})]})]})}const ft=f.input`
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: none;
  outline: none;
  border-radius: 20px;
  width: 100%;
  padding: 12px 14px;
  color: ${({theme:e,color:i})=>i||e.subText};
  font-size: 14px;
  background-color: ${({theme:e})=>e.buttonBlack};
  transition: border 0.5s;
  border: ${({theme:e,$borderColor:i})=>`1px solid ${i||e.border}`};
  ::placeholder {
    color: ${({theme:e})=>e.border};
    font-size: 12px;
  }
  ${({$isPassword:e})=>e&&"-webkit-text-security: disc !important;"};
`;function ht({borderColor:e,type:i,...r}){return t.jsx(ft,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",...r,$isPassword:i==="password",type:i==="password"?"text":i,$borderColor:e})}const mt=({value:e="",numInputs:i=6,onChange:r,renderInput:o,shouldAutoFocus:a=!1,inputType:u="number",containerStyle:y,inputStyle:c,onFocus:h,onBlur:E})=>{const[p,m]=L.useState(0),I=L.useRef([]),v=()=>e?e.toString().split(""):[],W=u==="number";L.useEffect(()=>{I.current=I.current.slice(0,i)},[i]),L.useEffect(()=>{var s;a&&((s=I.current[0])==null||s.focus())},[a]);const B=s=>(W?!isNaN(Number(s)):typeof s=="string")&&s.trim().length>=1,H=s=>{const{value:l}=s.target;if(B(l)){const x=v(),[O,C]=l.split(""),M=x[p]===O?C:O;A(M),T(p+1)}else{const x=s.nativeEvent;x.data===null&&x.inputType==="deleteContentBackward"&&(s.preventDefault(),A(""),T(p-1))}},U=()=>s=>{h==null||h(),m(s)},R=()=>{E==null||E(),m(p-1)},_=s=>{const l=v();[s.code,s.key].includes("Backspace")?(s.preventDefault(),A(""),l[p]||T(p-1)):s.code==="Delete"?(s.preventDefault(),A("")):s.code==="ArrowLeft"?(s.preventDefault(),T(p-1)):s.code==="ArrowRight"||s.key===l[p]?(s.preventDefault(),T(p+1)):(s.code==="Spacebar"||s.code==="Space"||s.code==="ArrowUp"||s.code==="ArrowDown"||W&&isNaN(+s.key)&&!((s.metaKey||s.ctrlKey)&&s.key==="v"))&&s.preventDefault()},T=s=>{var x;const l=Math.max(Math.min(i-1,s),0);I.current[l]&&((x=I.current[l])==null||x.focus(),m(l))},A=s=>{const l=v();l[p]=s[0],P(l)},P=s=>{const l=s.join("");r(l)},Z=(s,l)=>{s.preventDefault();const x=v();let O=l;const C=s.clipboardData.getData("text/plain").split("").slice(0,i);if(W&&C.some(g=>isNaN(Number(g))))return;let M=0;for(let g=0;g<i;++g)g>=l&&(x[g]=C[M++]??"",x[g]&&O++),x[g]||(x[g]="");T(O),P(x)};return t.jsx("div",{style:{display:"flex",alignItems:"center",...y},children:Array.from({length:i},(s,l)=>l).map(s=>t.jsx(L.Fragment,{children:o({value:v()[s]??"",ref:l=>I.current[s]=l,onChange:H,onFocus:()=>U()(s),onBlur:R,onKeyDown:_,onPaste:l=>Z(l,s),autoComplete:"off",maxLength:1,"aria-label":`Please enter OTP character ${s+1}`,style:{textAlign:"center",...c},type:u},s)},s))})},bt=f.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`,je=f.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`,ye=f.span`
  color: ${({theme:e})=>e.subText};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,gt=f.input`
  background: ${({theme:e})=>e.buttonBlack};
  border-radius: 20px;
  width: 56px;
  height: 80px;
  font-size: 48px;
  outline: none;
  color: ${({theme:e,hasError:i})=>i?e.red:e.subText};
  border: 1px solid ${({theme:e,hasError:i})=>i?e.red:e.border};
  text-align: center;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    font-size: 28px;
    width: 46px;
    height: 60px;
  `}
`,jt=e=>{const i=e/60|0,r=o=>o<10?"0"+o:o;return`${r(i)}:${r(e-i*60)}`},Oe=5,yt=Oe*_e.ONE_MIN;var Ce;(function(e){e.VALIDATE_ERROR="VALIDATE_ERROR",e.SEND_EMAIL_ERROR="SEND_EMAIL_ERROR",e.RATE_LIMIT="RATE_LIMIT"})(Ce||(Ce={}));function Ct({isOpen:e,onDismiss:i,onVerifySuccess:r,email:o,showVerifySuccess:a,verifySuccessTitle:u,verifySuccessContent:y,sendCodeFn:c,verifyCodeFn:h,getErrorMsgFn:E,refreshProfile:p=!0}){const m=ue(),[I,v]=d.useState(""),[W]=De(),[B]=Le(),[H,U]=d.useState(!1),[R,_]=d.useState(),T=ke(),[A,P]=d.useState(!1),Z=Pe("(max-height: 450px)"),[s,l]=d.useState(0),x=R==="SEND_EMAIL_ERROR",O=R==="VALIDATE_ERROR",C=R==="RATE_LIMIT",M=!x&&!C&&s<(Oe-1)*_e.ONE_MIN,g=d.useRef();d.useEffect(()=>(g.current=setInterval(()=>{l(s-1)},1e3),()=>g.current&&clearInterval(g.current)),[s]);const X=d.useCallback((S=!0)=>{U(!0),S&&T({title:w._({id:"nKExoO"}),summary:w._({id:"vH6fr9"}),type:te.SUCCESS})},[T]),G=d.useCallback(async()=>{if(g.current&&clearInterval(g.current),!!o)try{await(c?c({email:o}):B({email:o}).unwrap()),l(yt),_(void 0)}catch(S){l(0),_(S!=null&&S.status?"SEND_EMAIL_ERROR":"RATE_LIMIT")}},[o,B,c]),$=d.useRef(!1),F=d.useCallback(()=>{$.current||($.current=!0,G())},[G]);d.useEffect(()=>{e?a?X(!1):F():(setTimeout(()=>{_(void 0),v(""),U(!1)},300),$.current=!1)},[e,X,a,F]);const se=$e(),[q,K]=d.useState(!1),re=async()=>{if(!(!o||q))try{K(!0),await(h?h({code:I,email:o}):W({code:I,email:o}).unwrap()),await(r?r():i()),p&&(await se(),X())}catch(S){_("VALIDATE_ERROR"),T({title:w._({id:"SlfejT"}),summary:E==null?void 0:E(S),type:te.ERROR})}finally{K(!1)}},ae=S=>{O&&_(void 0),v(S)},Y=t.jsxs(Ve,{children:[t.jsx(N,{color:m.text,fontWeight:"500",fontSize:"20",children:H?u:t.jsx(j,{id:"VGfNFQ"})}),t.jsx(ze,{color:m.text,cursor:"pointer",onClick:i})]}),J=!x&&!C&&s>0;return t.jsx(We,{isOpen:e,onDismiss:i,minHeight:!1,maxWidth:450,maxHeight:A&&ne?window.innerHeight+"px":void 0,height:Be?He&&Z?"100%":A&&ne?window.innerHeight+"px":void 0:void 0,children:t.jsx(bt,{children:H?t.jsxs(je,{children:[Y,y]}):t.jsxs(je,{children:[Y,t.jsx(ye,{style:{color:x||C?m.red:m.subText},children:C?t.jsx(j,{id:"CJhs9o"}):x?t.jsx(j,{id:"IA1HMj",values:{email:o},components:{0:t.jsx(N,{as:"span",color:m.text})}}):t.jsx(j,{id:"DTZF0k",values:{email:o},components:{0:t.jsx(N,{as:"span",color:m.text})}})}),t.jsx(mt,{containerStyle:{justifyContent:"space-between"},value:I,onChange:ae,numInputs:6,renderInput:S=>t.jsx(gt,{...S,hasError:O,placeholder:"-",type:"number",onFocus:()=>{ne&&P(!0),setTimeout(()=>{window.scrollTo({top:0})},100)},onBlur:()=>ne&&P(!1)})}),(J||M)&&t.jsxs(ye,{style:{width:"100%",textAlign:"center"},children:[J&&t.jsx(j,{id:"RSzSFn",values:{0:jt(s),1:M?".":""}})," ",M&&t.jsx(j,{id:"U9/AEt",components:{0:t.jsx(N,{as:"span",color:m.primary,style:{cursor:"pointer"},onClick:G})}})]}),x?t.jsx(ce,{height:"36px",onClick:G,children:t.jsx(j,{id:"MyjAbr"})}):t.jsx(ce,{height:"36px",disabled:I.length<6||C||q,onClick:re,children:q?t.jsx(Ge,{children:t.jsx(j,{id:"bl9677"})}):t.jsx(j,{id:"uSMfoN"})})]})})})}const St=f(Fe)`
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
`,Et=f(Ue)`
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 12px;
`,Tt=f.div`
  position: relative;
`;function wt({value:e,onChange:i,isVerifiedEmail:r,showVerifyModal:o,disabled:a,hasError:u,style:y,placement:c}){const h=ue();return t.jsx(Ze,{text:w._({id:"XILg0L"}),style:{zIndex:1},show:!!u,placement:"top",width:"fit-content",containerStyle:y,children:t.jsxs(Tt,{style:y,children:[t.jsx(ht,{color:y==null?void 0:y.color,style:{maxHeight:"100%"},disabled:a,borderColor:u?h.red:h.border,value:e,placeholder:c||"example@email.com",onChange:E=>i(E.target.value)}),!r&&e&&t.jsx(Et,{width:"50px",height:"24px",disabled:u||a,onClick:E=>{E.preventDefault(),o==null||o()},children:t.jsx(j,{id:"uSMfoN"})}),r&&e&&!u&&t.jsx(St,{color:h.primary})]})})}function It(e){const{value:i,isShowVerify:r,onDismissVerifyModal:o,sendCodeFn:a,verifyCodeFn:u,getErrorMsgFn:y}=e;return t.jsxs(t.Fragment,{children:[t.jsx(wt,{...e}),t.jsx(Ct,{isOpen:r,onDismiss:o,email:i,sendCodeFn:a,verifyCodeFn:u,getErrorMsgFn:y})]})}const vt=f.div`
  margin: 0;
  padding: 30px 24px;
  width: 100%;
  display: flex;
  gap: 18px;
  flex-direction: column;
  width: 100%;
  ${({theme:e})=>e.mediaWidth.upToMedium`
     gap: 14px;
     padding: 24px 16px;
  `}
`,Se=f.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.subText};
`,Rt=f.label`
  display: flex;
  gap: 14px;
  font-weight: 500;
  align-items: center;
  width: 100%;

  ${({theme:e})=>e.mediaWidth.upToMedium`
     flex-basis: unset;
  `}
`,kt=f.div`
  border-top: 1px solid ${({theme:e})=>e.border};
  width: 100%;
`,_t=f.label`
  color: ${({theme:e})=>e.text};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`,At=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  flex-direction: row;
  justify-content: space-between;
  ${({theme:e})=>e.mediaWidth.upToMedium`
     flex-direction: column;
     gap: 24px;
  `}
`,Ee=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,Ot=f(le)`
  max-width: 50%;
  ${({theme:e})=>e.mediaWidth.upToMedium`
     max-width: 100%;
  `}
`,Mt=()=>{},Te=e=>[...e].sort((i,r)=>r.priority-i.priority),Nt=e=>{const[i,r]=d.useState(e||""),[o,a]=d.useState(null),u=d.useCallback(h=>{const E=Xe(h),p=w._({id:"2qmjD0"}),m=h.length&&!E?p:"";a(m||null)},[]),y=d.useCallback(h=>{r(h),u(h)},[u]),c=d.useCallback(h=>{a(null),r(h||e||"")},[e]);return{inputEmail:i.trim(),onChangeEmail:y,errorInput:o,reset:c}};function Dt({toggleModal:e=Mt}){const i=ue(),{isLoading:r,saveNotification:o,topicGroups:a,unsubscribeAll:u}=qe(),{account:y}=Ke(),{userInfo:c,isLogin:h}=Ye(),{isSignInEmail:E}=Je(),{inputEmail:p,errorInput:m,onChangeEmail:I,reset:v}=Nt(c==null?void 0:c.email),[W,B]=d.useState(!1),H=()=>{B(!0)},U=()=>{B(!1),M()},[R,_]=d.useState([]),T=ke(),{mixpanelHandler:A}=Qe(),[P,Z]=d.useState(""),s=!!m,[l,x]=d.useState([]),O=d.useCallback((n,b)=>{const k=a.map(D=>{const V=D.topics.map(z=>({...z,isSubscribed:n.includes(z.id)?!0:b.includes(z.id)?!1:z.isSubscribed}));return{...D,topics:V,isSubscribed:V==null?void 0:V.every(z=>z.isSubscribed)}});_(Te(k))},[a]);d.useEffect(()=>{Z(""),v(c==null?void 0:c.email)},[c,v]),d.useEffect(()=>{x(a.filter(n=>n.isSubscribed).map(n=>n.id)),_(Te(a))},[a]);const C=d.useCallback(n=>{let b=[],k=[],D=[],V=[];n.forEach(Q=>{const fe=l.includes(Q.id);Q.isSubscribed&&!fe&&Q.topics.forEach(ee=>{b=oe(b,ee.id),D=oe(D,ee.code)}),!Q.isSubscribed&&fe&&Q.topics.forEach(ee=>{k=oe(k,ee.id),V=oe(V,ee.code)})});const z=!s&&p&&(c==null?void 0:c.email)!==p&&l.length&&p!==P;return{subscribeIds:k,unsubscribeIds:b,unsubscribeNames:D,subscribeNames:V,hasChanged:k.length+b.length!==0||!!z}},[l,p,c,P,s]),M=async()=>{try{const{unsubscribeIds:n,subscribeIds:b,subscribeNames:k,unsubscribeNames:D}=C(a);k.length&&A(be.NOTIFICATION_SELECT_TOPIC,{topics:k}),D.length&&A(be.NOTIFICATION_DESELECT_TOPIC,{topics:D}),p!==(c==null?void 0:c.email)&&Z(p),await o({subscribeIds:b,unsubscribeIds:n}),O(b,n),T({title:w._({id:"vFn9Nk"}),summary:w._({id:"z9kwSM"}),type:te.SUCCESS,icon:t.jsx(ge,{color:i.primary})},1e4),e()}catch(n){T({title:w._({id:"i2B0g8"}),summary:n.status===403?w._({id:"CJtIz0"}):w._({id:"3BpAIm"}),type:te.ERROR}),console.log(n)}},g=n=>{x(l.includes(n)?l.filter(b=>b!==n):[...l,n])},X=(c==null?void 0:c.email)&&p===(c==null?void 0:c.email),G=p&&p!==(c==null?void 0:c.email),$=s,F=d.useCallback(()=>{const n=C(R);return n.subscribeIds.includes(+he)||n.unsubscribeIds.includes(+he)},[R,C]),se=d.useMemo(()=>{if(r)return!0;const n=C(R);return!F()&&$?!0:!n.hasChanged},[C,F,r,R,$]),q=()=>{if(!se){if(G&&!F()){H();return}M()}},K=a.some(n=>n.isSubscribed),re=()=>{K&&(u(),e(),T({title:w._({id:"jDBqY5"}),summary:w._({id:"t3hswL"}),type:te.SUCCESS,icon:t.jsx(ge,{color:i.primary})},1e4))},ae=()=>t.jsx(_t,{htmlFor:"selectAll",children:t.jsx(N,{fontSize:"14px",children:t.jsx(j,{id:"vFn9Nk"})})}),{commons:Y,restrict:J}=d.useMemo(()=>({commons:a.filter(n=>n.type===me.NORMAL),restrict:a.filter(n=>n.type===me.RESTRICT)}),[a]),S=Y.length+J.length,xe=(n,b,k)=>t.jsx(Ie,{text:b?k:"",children:t.jsxs(Rt,{htmlFor:`topic${n.id}`,style:{alignItems:"flex-start"},children:[t.jsx(it,{disabled:b,borderStyle:!0,checked:l.includes(n.id),id:`topic${n.id}`,style:{width:14,height:14,minWidth:14},onChange:()=>g(n.id)}),t.jsxs(le,{gap:"10px",children:[t.jsx(N,{color:b?i.border:i.text,fontSize:14,children:n.name}),t.jsx(N,{color:b?i.border:i.subText,fontSize:12,children:n.description})]})]},n.id)},n.id),Me=et();return t.jsxs(vt,{children:[t.jsx(N,{fontWeight:"500",color:i.text,fontSize:"14px",children:t.jsx(j,{id:"eYvBWE"})}),t.jsxs(Ot,{children:[t.jsx(Se,{children:t.jsx(j,{id:"Ged9/Z"})}),t.jsx(It,{hasError:s,showVerifyModal:H,onChange:I,value:p,isVerifiedEmail:!!X,isShowVerify:W,onDismissVerifyModal:U,disabled:E}),m&&t.jsx(Se,{style:{color:m?i.red:i.border,margin:"7px 0px 0px 0px"},children:m})]}),t.jsx(kt,{}),t.jsxs(le,{gap:"16px",children:[ae(),t.jsxs(At,{children:[t.jsx(Ee,{children:Y.map(n=>{const b=n.isPriceElasticPool?!y:n.isPriceAlert?!1:$;return xe(n,b,b?w._({id:"tB7Ze9"}):"")})}),t.jsx(Ee,{children:J.map(n=>xe(n,$||!h,t.jsx(j,{id:"43Mfub",components:{0:t.jsx(N,{sx:{cursor:"pointer"},as:"span",color:i.primary,onClick:()=>Me(`${tt.PROFILE_MANAGE}${st.PROFILE}`)})}})))})]}),S===0&&t.jsxs(ve,{justify:"center",align:"center",gap:"6px",marginTop:"20px",width:"100%",children:[t.jsx(Re,{}),t.jsx(N,{color:i.subText,fontSize:14,children:t.jsx(j,{id:"FcWZ2D"})})]})]}),S>0&&t.jsx(xt,{disableButtonSave:se,onSave:q,subscribeAtLeast1Topic:K,onUnsubscribeAll:re,isLoading:r,tooltipSave:C(R).hasChanged&&(G||!(c!=null&&c.email))&&!F()?w._({id:"RkCDHl"}):""})]})}const Lt=f.div`
  ${({theme:e})=>e.mediaWidth.upToMedium`
    max-width: unset;
  `}
`;function Vt(){return t.jsx(Lt,{children:t.jsx(Dt,{})})}export{It as I,ge as M,Vt as O,at as S,ht as a,Nt as u};
