import{u as c}from"./useThrottle-02136d76.js";import{s as i,aS as l}from"./index-d7bc20ab.js";const b=(t,o)=>t.exchange==="1inch"?{name:"1inch",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png"}:t.exchange==="paraswap"?{name:"Paraswap",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/14534.png"}:t.exchange==="0x"?{name:"0x",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/1896.png"}:o==null?void 0:o.find(a=>a.id===t.exchange||(t.exchange==="kyberswap"||t.exchange==="kyberswap-static")&&a.id==="kyberswapv1"),f=(t,o=0)=>o===1?"100%":!t&&t!==0?null:`${(o>1?Math.min(99.99,Math.max(.01,t)):t).toFixed(0)}%`,u=t=>{((t==null?void 0:t.scrollTop)??0)>0?t==null||t.classList.add("top"):t==null||t.classList.remove("top"),((t==null?void 0:t.scrollHeight)??0)-((t==null?void 0:t.scrollTop)??0)>((t==null?void 0:t.clientHeight)??0)?t==null||t.classList.add("bottom"):t==null||t.classList.remove("bottom")},y=(t,o,a)=>c(()=>{var s,e,n,p,d;const r=t.current;(r==null?void 0:r.scrollLeft)>0?(s=o.current)==null||s.classList.add("left-visible"):(e=o.current)==null||e.classList.remove("left-visible"),Math.floor((((n=a.current)==null?void 0:n.scrollWidth)||0)-(r==null?void 0:r.scrollLeft))>Math.floor(r==null?void 0:r.clientWidth)?(p=o.current)==null||p.classList.add("right-visible"):(d=o.current)==null||d.classList.remove("right-visible")},300),w=i.div`
  flex: 1;
  max-height: 100%;
  max-width: 100%;
  margin-left: 0;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.border};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track-piece {
    background: transparent;
  }
`,v=i.div`
  position: relative;
  min-height: 0;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    display: block;
    z-index: 3;
    pointer-events: none;
    position: absolute;
    height: 50px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    opacity: 0;
  }

  &:before {
    background: linear-gradient(to bottom, ${({backgroundColor:t})=>t}, transparent);
    top: 0;
  }

  &:after {
    background: linear-gradient(to top, ${({backgroundColor:t})=>t}, transparent);
    bottom: 0;
  }

  &.top:before,
  &.bottom:after {
    opacity: 1;
  }
`,m=i.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  position: absolute;
  top: calc(50% - 15px);
  left: 8px;
  transform: translateY(50%);
  z-index: 2;
  color: ${({theme:t})=>t.primary};
  background: ${({backgroundColor:t})=>t};
`,k=i.i`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: ${({out:t})=>t?"unset":"6.5px"};
  right: ${({out:t})=>t?"6.5px":"unset"};
  z-index: 1;
  background-color: ${({theme:t})=>t.primary};
`,S=i.div`
  position: relative;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$=i.div`
  flex: auto;
  min-width: 50px;
  border-bottom: 1px solid ${({theme:t})=>t.border};
  height: 1px;
`,L=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  width: max-content;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  min-height: 38px;
  border-radius: 0.5rem;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    min-width: 120px;
  `}
`,z=i.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;
  color: ${({theme:t})=>t.subText};
  ${({reverse:t})=>t&&l`
      flex-direction: row-reverse;
      justify-content: flex-start;
    `}
  padding-bottom: 7px;
  border-bottom: 1px solid ${({theme:t})=>t.bg7};

  & > span {
    margin-left: 4px;
    margin-right: 4px;
  }
`,T=i.div`
  margin: auto;
  width: 100%;
  position: relative;
  padding: 20px 10px 0;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    right: 0;
  }
`,j=i.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;

  &:before,
  &:after {
    content: '';
    display: block;
    border-left: 1px solid ${({theme:t})=>t.primary};
    width: 100%;
    height: calc(50% + 20px);
    position: absolute;
    border-right: 1px solid ${({theme:t})=>t.primary};
    box-sizing: border-box;
    pointer-events: none;
  }

  &:before {
    top: -20px;
  }

  &:after {
    bottom: -10px;
  }

  &:last-child:after {
    display: none;
  }
`,H=i.div`
  position: absolute;
  border-bottom: 1px solid ${({theme:t})=>t.primary};
  width: calc(100% - 68px);
  left: 43px;
`,P=i.div`
  z-index: 1;
  display: flex;
  align-items: center;
`,W=i.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({theme:t})=>t.bg8};
  border: 1px solid ${({theme:t})=>t.primary};
  height: fit-content;
  position: relative;
  flex: 0 0 146px;
  margin: auto;
  transition: filter 0.15s ease;
  cursor: pointer;

  :hover {
    filter: brightness(130%);
  }
`,C=i.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({theme:t})=>t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: ${({theme:t})=>t.white};
  }

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`,M=i.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin-top: 4px;
  font-size: 10px;
  border-radius: 8px;
  color: ${({theme:t})=>t.subText};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;

  & > .img--sm {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &:first-child {
    margin-top: 8px;
  }
`,R=i.div`
  width: calc(100% - 68px);
  margin: 10px 0 10px 6px;
  &:after,
  &:before {
    transition: all 0.1s ease;
    content: '';
    display: block;
    z-index: 2;
    pointer-events: none;
    position: absolute;
    inset: 0 0 auto auto;
    width: 40px;
    height: calc(100% - 20px);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  &:after {
    background: linear-gradient(to right, ${({backgroundColor:t})=>t}, transparent);
    left: 42px;
  }

  &:before {
    background: linear-gradient(to left, ${({backgroundColor:t})=>t}, transparent);
    right: 24px;
  }

  &.left-visible:after,
  &.right-visible:before {
    opacity: 1;
  }
`,U=i.div`
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({theme:t})=>t.primary};
`,E=i.div`
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{v as S,w as a,S as b,L as c,$ as d,T as e,k as f,j as g,m as h,f as i,H as j,E as k,U as l,R as m,P as n,u as o,W as p,b as q,C as r,M as s,z as t,y as u};
