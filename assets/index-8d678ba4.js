import{r as d,R as $,aP as ie,s as f,aS as Ce,e as De,B as ce,j as t,d as j,aa as Ie,bc as ve,c as Re,k as ue,ku as Pe,kv as $e,z as ke,x as Me,g as C,N as te,kd as Le,bp as ze,T as D,X as Ve,I as We,kw as ne,cS as Be,kx as Ge,D as He,ba as Ae,a7 as Fe,b as Ue,c7 as Xe,C as le,i as Ze,ez as qe,u as Ke,j_ as Ye,k0 as Je,aX as Qe,ky as oe,ju as he,kz as me,az as et,bl as tt,eA as st,b0 as be,k4 as ge,a2 as it}from"./index-3260f031.js";import{X as nt}from"./XCircle-a11bc6cf.js";function de(){return de=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},de.apply(this,arguments)}function ot(e,i){if(e==null)return{};var a=rt(e,i),o,r;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)o=u[r],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function rt(e,i){if(e==null)return{};var a={},o=Object.keys(e),r,u;for(u=0;u<o.length;u++)r=o[u],!(i.indexOf(r)>=0)&&(a[r]=e[r]);return a}var pe=d.forwardRef(function(e,i){var a=e.color,o=a===void 0?"currentColor":a,r=e.size,u=r===void 0?24:r,y=ot(e,["color","size"]);return $.createElement("svg",de({ref:i,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},y),$.createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),$.createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),$.createElement("polyline",{points:"7 3 7 8 15 8"}))});pe.propTypes={color:ie.string,size:ie.oneOfType([ie.string,ie.number])};pe.displayName="Save";const at=pe,ct=f.div`
  font-size: 14px;
  font-weight: 500;
`,lt=Ce`
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
`,_e=Ce`
  width: 120px;
  height: 36px;
  border-radius: 46px;
  ${({theme:e})=>e.mediaWidth.upToSmall`
    width: 45%;
`};
`,ut=f(De)`
  ${_e}
`,pt=f(ce)`
  ${_e}
`;function xt({disableButtonSave:e,isLoading:i,onSave:a,onUnsubscribeAll:o,subscribeAtLeast1Topic:r,tooltipSave:u}){return t.jsxs(dt,{children:[t.jsxs(ut,{onClick:o,disabled:!r,children:[t.jsx(nt,{size:"14px"})," ",t.jsx(j,{id:"IBUMsZ"})]}),t.jsxs(pt,{disabled:e,onClick:a,children:[t.jsx(at,{size:14})," ",t.jsx(Ie,{text:u,children:t.jsx(ct,{children:(()=>i?t.jsxs(ve,{children:[t.jsx(Re,{})," ",t.jsx(j,{id:"XGuIqy"})]}):t.jsx(j,{id:"tfDRzk"}))()})})]})]})}const ft=f.input`
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
`;function ht({borderColor:e,type:i,...a}){return t.jsx(ft,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",...a,$isPassword:i==="password",type:i==="password"?"text":i,$borderColor:e})}const mt=({value:e="",numInputs:i=6,onChange:a,renderInput:o,shouldAutoFocus:r=!1,inputType:u="number",containerStyle:y,inputStyle:c,onFocus:h,onBlur:T})=>{const[p,m]=$.useState(0),I=$.useRef([]),v=()=>e?e.toString().split(""):[],W=u==="number";$.useEffect(()=>{I.current=I.current.slice(0,i)},[i]),$.useEffect(()=>{var s;r&&((s=I.current[0])==null||s.focus())},[r]);const B=s=>(W?!isNaN(Number(s)):typeof s=="string")&&s.trim().length>=1,G=s=>{const{value:l}=s.target;if(B(l)){const x=v(),[O,S]=l.split(""),N=x[p]===O?S:O;_(N),w(p+1)}else{const x=s.nativeEvent;x.data===null&&x.inputType==="deleteContentBackward"&&(s.preventDefault(),_(""),w(p-1))}},U=()=>s=>{h==null||h(),m(s)},R=()=>{T==null||T(),m(p-1)},A=s=>{const l=v();[s.code,s.key].includes("Backspace")?(s.preventDefault(),_(""),l[p]||w(p-1)):s.code==="Delete"?(s.preventDefault(),_("")):s.code==="ArrowLeft"?(s.preventDefault(),w(p-1)):s.code==="ArrowRight"||s.key===l[p]?(s.preventDefault(),w(p+1)):(s.code==="Spacebar"||s.code==="Space"||s.code==="ArrowUp"||s.code==="ArrowDown"||W&&isNaN(+s.key)&&!((s.metaKey||s.ctrlKey)&&s.key==="v"))&&s.preventDefault()},w=s=>{var x;const l=Math.max(Math.min(i-1,s),0);I.current[l]&&((x=I.current[l])==null||x.focus(),m(l))},_=s=>{const l=v();l[p]=s[0],M(l)},M=s=>{const l=s.join("");a(l)},X=(s,l)=>{s.preventDefault();const x=v();let O=l;const S=s.clipboardData.getData("text/plain").split("").slice(0,i);if(W&&S.some(g=>isNaN(Number(g))))return;let N=0;for(let g=0;g<i;++g)g>=l&&(x[g]=S[N++]??"",x[g]&&O++),x[g]||(x[g]="");w(O),M(x)};return t.jsx("div",{style:{display:"flex",alignItems:"center",...y},children:Array.from({length:i},(s,l)=>l).map(s=>t.jsx($.Fragment,{children:o({value:v()[s]??"",ref:l=>I.current[s]=l,onChange:G,onFocus:()=>U()(s),onBlur:R,onKeyDown:A,onPaste:l=>X(l,s),autoComplete:"off",maxLength:1,"aria-label":`Please enter OTP character ${s+1}`,style:{textAlign:"center",...c},type:u},s)},s))})},bt=f.div`
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
`,jt=e=>{const i=e/60|0,a=o=>o<10?"0"+o:o;return`${a(i)}:${a(e-i*60)}`},Oe=5,yt=Oe*Ae.ONE_MIN;var Se;(function(e){e.VALIDATE_ERROR="VALIDATE_ERROR",e.SEND_EMAIL_ERROR="SEND_EMAIL_ERROR",e.RATE_LIMIT="RATE_LIMIT"})(Se||(Se={}));function St({isOpen:e,onDismiss:i,onVerifySuccess:a,email:o,showVerifySuccess:r,verifySuccessTitle:u,verifySuccessContent:y,sendCodeFn:c,verifyCodeFn:h,getErrorMsgFn:T,refreshProfile:p=!0}){const m=ue(),[I,v]=d.useState(""),[W]=Pe(),[B]=$e(),[G,U]=d.useState(!1),[R,A]=d.useState(),w=ke(),[_,M]=d.useState(!1),X=Me("(max-height: 450px)"),[s,l]=d.useState(0),x=R==="SEND_EMAIL_ERROR",O=R==="VALIDATE_ERROR",S=R==="RATE_LIMIT",N=!x&&!S&&s<(Oe-1)*Ae.ONE_MIN,g=d.useRef();d.useEffect(()=>(g.current=setInterval(()=>{l(s-1)},1e3),()=>g.current&&clearInterval(g.current)),[s]);const Z=d.useCallback((E=!0)=>{U(!0),E&&w({title:C._({id:"nKExoO"}),summary:C._({id:"vH6fr9"}),type:te.SUCCESS})},[w]),H=d.useCallback(async()=>{if(g.current&&clearInterval(g.current),!!o)try{await(c?c({email:o}):B({email:o}).unwrap()),l(yt),A(void 0)}catch(E){l(0),A(E!=null&&E.status?"SEND_EMAIL_ERROR":"RATE_LIMIT")}},[o,B,c]),L=d.useRef(!1),F=d.useCallback(()=>{L.current||(L.current=!0,H())},[H]);d.useEffect(()=>{e?r?Z(!1):F():(setTimeout(()=>{A(void 0),v(""),U(!1)},300),L.current=!1)},[e,Z,r,F]);const se=Le(),[q,K]=d.useState(!1),re=async()=>{if(!(!o||q))try{K(!0),await(h?h({code:I,email:o}):W({code:I,email:o}).unwrap()),await(a?a():i()),p&&(await se(),Z())}catch(E){A("VALIDATE_ERROR"),w({title:C._({id:"SlfejT"}),summary:T==null?void 0:T(E),type:te.ERROR})}finally{K(!1)}},ae=E=>{O&&A(void 0),v(E)},Y=t.jsxs(ze,{children:[t.jsx(D,{color:m.text,fontWeight:"500",fontSize:"20",children:G?u:t.jsx(j,{id:"VGfNFQ"})}),t.jsx(Ve,{color:m.text,cursor:"pointer",onClick:i})]}),J=!x&&!S&&s>0;return t.jsx(We,{isOpen:e,onDismiss:i,minHeight:!1,maxWidth:450,maxHeight:_&&ne?window.innerHeight+"px":void 0,height:Be?Ge&&X?"100%":_&&ne?window.innerHeight+"px":void 0:void 0,children:t.jsx(bt,{children:G?t.jsxs(je,{children:[Y,y]}):t.jsxs(je,{children:[Y,t.jsx(ye,{style:{color:x||S?m.red:m.subText},children:S?t.jsx(j,{id:"CJhs9o"}):x?t.jsx(j,{id:"IA1HMj",values:{email:o},components:{0:t.jsx(D,{as:"span",color:m.text})}}):t.jsx(j,{id:"DTZF0k",values:{email:o},components:{0:t.jsx(D,{as:"span",color:m.text})}})}),t.jsx(mt,{containerStyle:{justifyContent:"space-between"},value:I,onChange:ae,numInputs:6,renderInput:E=>t.jsx(gt,{...E,hasError:O,placeholder:"-",type:"number",onFocus:()=>{ne&&M(!0),setTimeout(()=>{window.scrollTo({top:0})},100)},onBlur:()=>ne&&M(!1)})}),(J||N)&&t.jsxs(ye,{style:{width:"100%",textAlign:"center"},children:[J&&t.jsx(j,{id:"RSzSFn",values:{0:jt(s),1:N?".":""}})," ",N&&t.jsx(j,{id:"U9/AEt",components:{0:t.jsx(D,{as:"span",color:m.primary,style:{cursor:"pointer"},onClick:H})}})]}),x?t.jsx(ce,{height:"36px",onClick:H,children:t.jsx(j,{id:"MyjAbr"})}):t.jsx(ce,{height:"36px",disabled:I.length<6||S||q,onClick:re,children:q?t.jsx(He,{children:t.jsx(j,{id:"bl9677"})}):t.jsx(j,{id:"uSMfoN"})})]})})})}const Et=f(Fe)`
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
`,Tt=f(Ue)`
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 12px;
`,wt=f.div`
  position: relative;
`;function Ct({value:e,onChange:i,isVerifiedEmail:a,showVerifyModal:o,disabled:r,hasError:u,style:y,placement:c}){const h=ue();return t.jsx(Xe,{text:C._({id:"XILg0L"}),style:{zIndex:1},show:!!u,placement:"top",width:"fit-content",containerStyle:y,children:t.jsxs(wt,{style:y,children:[t.jsx(ht,{color:y==null?void 0:y.color,style:{maxHeight:"100%"},disabled:r,borderColor:u?h.red:h.border,value:e,placeholder:c||"example@email.com",onChange:T=>i(T.target.value)}),!a&&e&&t.jsx(Tt,{width:"50px",height:"24px",disabled:u||r,onClick:T=>{T.preventDefault(),o==null||o()},children:t.jsx(j,{id:"uSMfoN"})}),a&&e&&!u&&t.jsx(Et,{color:h.primary})]})})}function It(e){const{value:i,isShowVerify:a,onDismissVerifyModal:o,sendCodeFn:r,verifyCodeFn:u,getErrorMsgFn:y}=e;return t.jsxs(t.Fragment,{children:[t.jsx(Ct,{...e}),t.jsx(St,{isOpen:a,onDismiss:o,email:i,sendCodeFn:r,verifyCodeFn:u,getErrorMsgFn:y})]})}const vt=f.div`
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
`,Ee=f.p`
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
`,At=f.label`
  color: ${({theme:e})=>e.text};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`,_t=f.div`
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
`,Te=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,Ot=f(le)`
  max-width: 50%;
  ${({theme:e})=>e.mediaWidth.upToMedium`
     max-width: 100%;
  `}
`,Nt=()=>{},we=e=>[...e].sort((i,a)=>a.priority-i.priority),Dt=e=>{const[i,a]=d.useState(e||""),[o,r]=d.useState(null),u=d.useCallback(h=>{const T=Ze(h),p=C._({id:"2qmjD0"}),m=h.length&&!T?p:"";r(m||null)},[]),y=d.useCallback(h=>{a(h),u(h)},[u]),c=d.useCallback(h=>{r(null),a(h||e||"")},[e]);return{inputEmail:i.trim(),onChangeEmail:y,errorInput:o,reset:c}};function Pt({toggleModal:e=Nt}){const i=ue(),{isLoading:a,saveNotification:o,topicGroups:r,unsubscribeAll:u}=qe(),{account:y}=Ke(),{userInfo:c,isLogin:h}=Ye(),{isSignInEmail:T}=Je(),{inputEmail:p,errorInput:m,onChangeEmail:I,reset:v}=Dt(c==null?void 0:c.email),[W,B]=d.useState(!1),G=()=>{B(!0)},U=()=>{B(!1),N()},[R,A]=d.useState([]),w=ke(),{mixpanelHandler:_}=Qe(),[M,X]=d.useState(""),s=!!m,[l,x]=d.useState([]),O=d.useCallback((n,b)=>{const k=r.map(P=>{const z=P.topics.map(V=>({...V,isSubscribed:n.includes(V.id)?!0:b.includes(V.id)?!1:V.isSubscribed}));return{...P,topics:z,isSubscribed:z==null?void 0:z.every(V=>V.isSubscribed)}});A(we(k))},[r]);d.useEffect(()=>{X(""),v(c==null?void 0:c.email)},[c,v]),d.useEffect(()=>{x(r.filter(n=>n.isSubscribed).map(n=>n.id)),A(we(r))},[r]);const S=d.useCallback(n=>{let b=[],k=[],P=[],z=[];n.forEach(Q=>{const fe=l.includes(Q.id);Q.isSubscribed&&!fe&&Q.topics.forEach(ee=>{b=oe(b,ee.id),P=oe(P,ee.code)}),!Q.isSubscribed&&fe&&Q.topics.forEach(ee=>{k=oe(k,ee.id),z=oe(z,ee.code)})});const V=!s&&p&&(c==null?void 0:c.email)!==p&&l.length&&p!==M;return{subscribeIds:k,unsubscribeIds:b,unsubscribeNames:P,subscribeNames:z,hasChanged:k.length+b.length!==0||!!V}},[l,p,c,M,s]),N=async()=>{try{const{unsubscribeIds:n,subscribeIds:b,subscribeNames:k,unsubscribeNames:P}=S(r);k.length&&_(be.NOTIFICATION_SELECT_TOPIC,{topics:k}),P.length&&_(be.NOTIFICATION_DESELECT_TOPIC,{topics:P}),p!==(c==null?void 0:c.email)&&X(p),await o({subscribeIds:b,unsubscribeIds:n}),O(b,n),w({title:C._({id:"vFn9Nk"}),summary:C._({id:"z9kwSM"}),type:te.SUCCESS,icon:t.jsx(ge,{color:i.primary})},1e4),e()}catch(n){w({title:C._({id:"i2B0g8"}),summary:n.status===403?C._({id:"CJtIz0"}):C._({id:"3BpAIm"}),type:te.ERROR}),console.log(n)}},g=n=>{x(l.includes(n)?l.filter(b=>b!==n):[...l,n])},Z=(c==null?void 0:c.email)&&p===(c==null?void 0:c.email),H=p&&p!==(c==null?void 0:c.email),L=s,F=d.useCallback(()=>{const n=S(R);return n.subscribeIds.includes(+he)||n.unsubscribeIds.includes(+he)},[R,S]),se=d.useMemo(()=>{if(a)return!0;const n=S(R);return!F()&&L?!0:!n.hasChanged},[S,F,a,R,L]),q=()=>{if(!se){if(H&&!F()){G();return}N()}},K=r.some(n=>n.isSubscribed),re=()=>{K&&(u(),e(),w({title:C._({id:"jDBqY5"}),summary:C._({id:"t3hswL"}),type:te.SUCCESS,icon:t.jsx(ge,{color:i.primary})},1e4))},ae=()=>t.jsx(At,{htmlFor:"selectAll",children:t.jsx(D,{fontSize:"14px",children:t.jsx(j,{id:"vFn9Nk"})})}),{commons:Y,restrict:J}=d.useMemo(()=>({commons:r.filter(n=>n.type===me.NORMAL),restrict:r.filter(n=>n.type===me.RESTRICT)}),[r]),E=Y.length+J.length,xe=(n,b,k)=>t.jsx(Ie,{text:b?k:"",children:t.jsxs(Rt,{htmlFor:`topic${n.id}`,style:{alignItems:"flex-start"},children:[t.jsx(it,{disabled:b,borderStyle:!0,checked:l.includes(n.id),id:`topic${n.id}`,style:{width:14,height:14,minWidth:14},onChange:()=>g(n.id)}),t.jsxs(le,{gap:"10px",children:[t.jsx(D,{color:b?i.border:i.text,fontSize:14,children:n.name}),t.jsx(D,{color:b?i.border:i.subText,fontSize:12,children:n.description})]})]},n.id)},n.id),Ne=et();return t.jsxs(vt,{children:[t.jsx(D,{fontWeight:"500",color:i.text,fontSize:"14px",children:t.jsx(j,{id:"eYvBWE"})}),t.jsxs(Ot,{children:[t.jsx(Ee,{children:t.jsx(j,{id:"Ged9/Z"})}),t.jsx(It,{hasError:s,showVerifyModal:G,onChange:I,value:p,isVerifiedEmail:!!Z,isShowVerify:W,onDismissVerifyModal:U,disabled:T}),m&&t.jsx(Ee,{style:{color:m?i.red:i.border,margin:"7px 0px 0px 0px"},children:m})]}),t.jsx(kt,{}),t.jsxs(le,{gap:"16px",children:[ae(),t.jsxs(_t,{children:[t.jsx(Te,{children:Y.map(n=>{const b=n.isPriceElasticPool?!y:n.isPriceAlert?!1:L;return xe(n,b,b?C._({id:"tB7Ze9"}):"")})}),t.jsx(Te,{children:J.map(n=>xe(n,L||!h,t.jsx(j,{id:"43Mfub",components:{0:t.jsx(D,{sx:{cursor:"pointer"},as:"span",color:i.primary,onClick:()=>Ne(`${tt.PROFILE_MANAGE}${st.PROFILE}`)})}})))})]}),E===0&&t.jsxs(ve,{justify:"center",align:"center",gap:"6px",marginTop:"20px",width:"100%",children:[t.jsx(Re,{}),t.jsx(D,{color:i.subText,fontSize:14,children:t.jsx(j,{id:"FcWZ2D"})})]})]}),E>0&&t.jsx(xt,{disableButtonSave:se,onSave:q,subscribeAtLeast1Topic:K,onUnsubscribeAll:re,isLoading:a,tooltipSave:S(R).hasChanged&&(H||!(c!=null&&c.email))&&!F()?C._({id:"RkCDHl"}):""})]})}const $t=f.div`
  ${({theme:e})=>e.mediaWidth.upToMedium`
    max-width: unset;
  `}
`;function zt(){return t.jsx($t,{children:t.jsx(Pt,{})})}export{It as I,zt as O,at as S,ht as a,Dt as u};
