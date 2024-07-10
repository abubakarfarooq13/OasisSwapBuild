import{r as i,j as b,s as e,bo as s}from"./index-d4668781.js";const g=e.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:r})=>r}px;
    width: ${({size:r})=>r}px;
    background-color: ${({theme:r})=>r.subText};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:r})=>r.subText};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:r})=>r}px;
    width: ${({size:r})=>r}px;
    background-color: ${({theme:r})=>r.subText};
    border-radius: 100%;
    border: none;
    color: ${({theme:r})=>r.subText};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:r})=>r}px;
    width: ${({size:r})=>r}px;
    background-color: ${({theme:r})=>r.subText};
    border-radius: 100%;
    color: ${({theme:r})=>r.subText};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:r})=>r.subText}, ${({theme:r})=>r.subText});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:r})=>r.subText}, ${({theme:r})=>r.subText});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:r})=>r.subText};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:r})=>r.subText};
  }
  &::-ms-fill-upper {
    background: ${({theme:r})=>r.subText};
  }
`;function u({value:r,onChange:o,min:t=0,step:x=1,max:a=100,size:n=28,style:d,className:p}){const c=i.useCallback(l=>{o(parseInt(l.target.value))},[o]);return b.jsx(g,{size:n,type:"range",value:r,style:d||{width:"90%",marginLeft:15,marginRight:15,padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:x,min:t,max:a,className:p})}const h=e.div`
  padding: 28px 16px 100px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 24px 16px 100px;
  }

  @media only screen and (min-width: 1000px) {
    padding: 24px 32px 100px;
  }

  @media only screen and (min-width: 1366px) {
    padding: 24px 215px 50px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 24px 252px 50px;
  }
`,f=e.div`
  max-width: 936px;
  margin: 0 auto;
  padding: 4px 20px 24px;
  background: ${({theme:r})=>r.background};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 20px;

  @media only screen and (min-width: 1000px) {
    padding: 4px 24px 24px;
  }
`,w=e.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,$=e.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  border-top: 1px solid ${({theme:r})=>r.border};
  margin-top: 1rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
`,y=e.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding-right: 24px;
  }
`,k=e.div`
  display: flex;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:r})=>r.subText};

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`,T=e(s)`
  grid-auto-rows: min-content;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:r})=>r.border};
  gap: 20px;

  @media only screen and (min-width: 768px) {
    padding-right: 24px;
    padding-bottom: 0;
    border-right: 1px solid ${({theme:r})=>r.border};
    border-bottom: none;
  }
`,v=e(s)`
  grid-auto-rows: min-content;
  padding-top: 24px;

  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    padding-top: 0;
  }
`,C=e.button`
  flex: 1;
  padding: 6px 0;
  background-color: ${({theme:r})=>`${r.primary}33`};
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 1rem;
  ${({theme:r})=>r.mediaWidth.upToSmall`
    padding: 0.25rem 0;
  `};
  font-weight: 500;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:r})=>r.primary};
  :hover {
    border: 1px solid ${({theme:r})=>r.primary};
  }
  :focus {
    border: 1px solid ${({theme:r})=>r.primary};
    outline: none;
  }
`,S=e(s)`
  padding: 1rem 1rem 12px;
  border: 1px solid ${({theme:r})=>r.border};
  margin: 24px 0 28px;
  border-radius: 20px;
`,W=e.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`,j=e.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,z=e.div`
  border: 1px solid ${({theme:r})=>r.border};
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 28px;
`,D=e.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;function P(r,o,t=100){const[x,a]=i.useState(()=>r),n=i.useRef(),d=i.useCallback(p=>{a(p),n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{o(p),n.current=void 0},t)},[t,o]);return i.useEffect(()=>{n.current&&(clearTimeout(n.current),n.current=void 0),a(r)},[r]),[x,d]}export{D as C,S as D,T as F,w as G,y as L,C as M,h as P,u as S,j as T,v as a,W as b,z as c,f as d,$ as e,k as f,P as u};
