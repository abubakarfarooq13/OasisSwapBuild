import{f as o,r,K as n,E as a,j as t,D as i,d as u}from"./index-9f9c5e72.js";import{P as c}from"./styled-ba35fa4c.js";function f(){const{consent_challenge:e}=o();return r.useEffect(()=>{e&&(n.initialize({mode:a}),n.oauthUi.getFlowConsent(e).then(s=>{console.debug("Oauth resp consent",s)}).catch(s=>{console.debug("Oauth consent error",s)}))},[e]),t.jsx(c,{msg:t.jsx(i,{children:t.jsx(u,{id:"KLlo/7"})})})}export{f as default};