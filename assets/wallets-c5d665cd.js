import{iF as r,bQ as l,iG as i,iH as d,iI as k,iJ as u,iK as I,iL as e,iM as b,iN as j,iO as p,iP as S,iQ as f,iR as m,iS as y,iT as C,iU as L,iV as h,iW as E,iX as T,iY as W,iZ as w,i_ as N,i$ as B,j0 as g,j1 as A,j2 as D,j3 as s,j4 as O,j5 as v,j6 as H,j7 as R,iC as K,j8 as U,j9 as M,ja as _,jb as V,iB as Y,jc as Z,jd as x,je as a,jf as z,jg as F,jh as n,ji as J,jj as G,jk as P,jl as Q,cQ as q}from"./index-62d3e736.js";var X=r();const $=l(X),tt="/assets/coin98-3be873ba.svg",et="/assets/safe-123a68e2.svg",st="/assets/trust-wallet-e39bec5d.svg",ot="/assets/zerion-3e43f8ca.svg";var o;(function(t){t.Installed="Installed",t.NotDetected="NotDetected",t.Loadable="Loadable",t.Unsupported="Unsupported"})(o||(o={}));const at=()=>Z()?"Installed":"Unsupported",nt=()=>x()?"Installed":"NotDetected",ct=()=>a()?"Unsupported":"Installed",rt=()=>a()?"Installed":"Unsupported";let c=!1;const lt=new $({});(async()=>{try{await lt.safe.getEnvironmentInfo()&&(c=!0)}catch{}})();const it=()=>c?"Installed":"NotDetected",dt=()=>z()?"Installed":"NotDetected",kt=()=>F()?"Installed":"NotDetected",ut=()=>n()?"Installed":"Unsupported",It=()=>n()?"Unsupported":"Installed",bt=()=>J()?"Installed":"NotDetected",jt=()=>G()?"Installed":"NotDetected",pt=()=>(()=>Q()?"Installed":window.coinbaseWalletExtension&&!q?"Loadable":"NotDetected")(),St=()=>P()?"Installed":"NotDetected",ft={INJECTED:{connector:i,hooks:d,name:"Browser Wallet",icon:k,readyState:at},KRYSTAL:{connector:u,hooks:I,name:"Krystal",icon:e,installLink:"https://wallet.krystal.app",readyState:ut},RABBY:{connector:b,hooks:j,name:"Rabby",icon:p,installLink:"https://rabby.io",readyState:dt},ZERION:{connector:S,hooks:f,name:"Zerion",icon:ot,installLink:"https://zerion.io",readyState:kt},TRUST_WALLET:{connector:m,hooks:y,name:"Trust Wallet",icon:st,installLink:"https://trustwallet.com/vi/deeplink",readyState:St},BRAVE:{connector:C,hooks:L,name:"Brave Wallet",icon:h,installLink:"https://brave.com/download",readyState:bt},SAFE:{connector:E,hooks:T,name:"Safe",icon:et,installLink:"https://safe.global/wallet",readyState:it},COINBASE:{connector:W,hooks:w,name:"Coinbase",icon:N,installLink:"https://www.coinbase.com/wallet",readyState:pt},COIN98:{connector:B,hooks:g,name:"Coin98",icon:tt,installLink:"https://wallet.coin98.com/",readyState:jt},BLOCTO_INJECTED:{connector:A,hooks:D,name:"Blocto",icon:s,readyState:rt},KRYSTAL_WC:{connector:O,hooks:v,name:"Krystal",icon:e,readyState:It},WALLET_CONNECT:{connector:H,hooks:R,name:"WalletConnect",icon:K,readyState:()=>"Installed"},BLOCTO:{connector:U,hooks:M,name:"Blocto",icon:s,installLink:"https://www.blocto.io/download",readyState:ct},METAMASK:{connector:_,hooks:V,name:"MetaMask",icon:Y,installLink:"https://metamask.io/download",readyState:nt}},Ct=Object.values(ft).filter(t=>"connector"in t);export{tt as a,Ct as c};