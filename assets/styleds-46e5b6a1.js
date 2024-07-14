import{s as i,J as r,a1 as a,hJ as p}from"./index-c19adf44.js";const d=i.div`
  padding: 32px 24px 50px;
  width: 100%;
  max-width: 1500px;

  ${({theme:t})=>t.mediaWidth.upToSmall`
    padding: 24px 16px 100px;
  `}

  display: flex;
  flex-direction: column;
  gap: 20px;
`,s=i.div`
  display: flex;
  align-items: center;
`;i.div`
  text-align: center;
  height: 100%;
  padding: 24px;
`;const o=i.div`
  border-radius: 50%;
  background: ${({theme:t})=>t.apr};
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;i(r)`
  background: ${({theme:t,color:e})=>a(e||t.subText,.2)};
  width: 28px;
  min-width: 28px;
  height: 28px;
  min-height: 28px;
  border-radius: 50%;
  padding: 0;
  color: ${({theme:t,color:e})=>e||t.subText} !important;

  :hover {
    background: ${({theme:t,color:e})=>p(.4,a(e||t.subText,.2))};
  }
`;const x=i.div`
  padding: 6px 12px;
  background: ${({theme:t,active:e})=>e?t.tabActive:"transparent"};
  border-radius: 999px;
  cursor: pointer;
  color: ${({active:t,theme:e})=>t?e.text:e.subText};
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;export{s as C,o as I,d as P,x as T};
