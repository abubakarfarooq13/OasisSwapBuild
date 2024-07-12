import{s as a,e as d,B as p,F as o}from"./index-62d3e736.js";import{b as r}from"./about_background-625b4bf1.js";const x=a.div`
  max-width: 1228px;
  margin: auto;
  padding: 160px 12px 0;
  padding-bottom: 160px;
  background: transparent;

  ${({theme:i})=>i.mediaWidth.upToSmall`
    padding-bottom: 100px;
    padding-top: 100px
  `};

  .swiper-pagination-bullet {
    width: 8px;
    border-radius: 8px;
    background: ${({theme:i})=>i.subText};
  }

  .swiper-pagination {
    bottom: -16px !important;
  }

  .swiper-pagination-bullet-active {
    width: 8px;
    border-radius: 8px;
    background: ${({theme:i})=>i.primary};
  }

  .swiper {
    overflow: unset;
  }
`,g=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  margin: auto;
  margin-top: 32px;
`;a(d)`
  width: 216px;
  padding: 12px;
  flex: 1;
  border-radius: 32px;

  ${({theme:i})=>i.mediaWidth.upToSmall`
    width: 100%;
  `};
`;const s=a(p)`
  width: 216px;
  padding: 10px 12px;
  flex: 1;
  border-radius: 32px;
  ${({theme:i})=>i.mediaWidth.upToSmall`
    width: 100%;
  `};
`,c=a.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-top: 100px;
  max-width: 900px;
`,l=a.div`
  background-color: ${({theme:i})=>i.background};
  flex: 1;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  padding: 20px 0px;
`,m=a.div`
  margin-top: 160px;
  gap: 24px;
  display: flex;

  ${({theme:i})=>i.mediaWidth.upToSmall`
    flex-direction: column;
    margin-top: 100px;
  `}
`,u=a(o)`
  margin-top: 20px;
  background-color: ${({theme:i})=>i.background};
  padding: 20px 0;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:i})=>i.primary};
  position: relative;

  ${({theme:i})=>i.mediaWidth.upToLarge`
    flex-direction: column;
    padding: 20px 16px;
    gap: 24px;
  `}
`,b=a.div`
  position: absolute;
  border-radius: 8px;
  background: ${({theme:i})=>`${i.primary}33`};
  top: -1px;
  right: -12px;
  bottom: -1px;
  left: 0;

  ${({theme:i})=>i.mediaWidth.upToLarge`
    top: 0;
    bottom: -12px;
    left: -1px;
    right: -1px;
  `}
`,h=a.div`
  background-color: ${({theme:i})=>i.border};
  width: ${({horizontal:i})=>i?"100%":"1px"};
  height: ${({horizontal:i})=>i?"1px":"50px"};

  ${({theme:i,horizontal:t})=>i.mediaWidth.upToMedium`
    ${!t&&"height: auto;"}
  `}
`,f=a(o)`
  padding: 48px;
  border-radius: 20px;
  width: 100%;
  background-color: ${({theme:i})=>i.background};

  ${({theme:i})=>i.mediaWidth.upToMedium`
    padding: 32px;
    padding-bottom: 48px;
  `};
`,$=a.div`
  display: grid;
  grid-gap: 16px;
  margin-top: 40px;
  padding-bottom: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(300px, 1fr);
  overflow-x: auto;
`;a.div`
  border-radius: 8px;
  background-color: ${({theme:i})=>`${i.primary}33`};
  padding: 20px 16px 12px;
  text-align: center;
`;a.div`
  background-color: ${({theme:i,background:t})=>t||i.buttonBlack};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 14px 16px 24px;
  text-align: center;
`;const w=a.div`
  background: ${({theme:i})=>i.background};
  width: 100%;
  filter: drop-shadow(0px -4px 16px rgba(0, 0, 0, 0.04));

  ${({theme:i})=>i.mediaWidth.upToLarge`
    margin-bottom: 4rem;
  `};
`,v=a.div`
  margin: auto;
  max-width: 1244px;
  padding: 24px;
  font-size: 14px;
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({theme:i})=>i.subText};
  }

  ${({theme:i})=>i.mediaWidth.upToSmall`
    flex-direction: column;
    justify-content: center;
  `};
`,k=a.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
  align-items: center;
  justify-content: center;
  gap: 52px;
  & > * {
    width: calc(100% / 5 - 52px);
  }
  svg {
    max-width: 100%;
  }

  ${({theme:i})=>i.mediaWidth.upToMedium`
    & > * {
      width: calc(25% - 52px);
    }
  `}

  ${({theme:i})=>i.mediaWidth.upToSmall`
    & > * {
      width: calc(100% / 3 - 52px);
    }
  `}

  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    & > * {
      width: calc(50% - 52px);
    }
  `}
`,y=a.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 48px;
  gap: 52px;
  align-items: center;

  svg {
    max-width: 100%;
  }
`,T=a.div`
  width: 100%;
  background-image: url(${r}), url(${r});
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  z-index: 1;
  background-color: transparent, transparent;
  background-position: top, bottom;
`,W=a.div`
  width: 1px;
  height: 0;
  background: ${({theme:i})=>i.border};

  ${({theme:i})=>i.mediaWidth.upToSmall`
    height: auto;
  `}
`,S=a.div`
  margin-top: 160px;
  gap: 76px;
  display: flex;

  ${({theme:i})=>i.mediaWidth.upToSmall`
    flex-direction: column;
    margin-top: 100px;
  `}
`,F=a.div`
  margin: 28px 0px;
  height: 152px;
  background: ${({theme:i})=>i.background};
  display: flex;
  border-radius: 8px;
`,j=a.div`
  display: flex;
  border-radius: 20px;
  background: ${({theme:i})=>i.background};
  width: 100%;
  padding: 64px;
  margin-top: 100px;

  ${({theme:i})=>i.mediaWidth.upToSmall`
    padding:48px;
    flex-direction:column;
    align-items:center;
    text-align:center;
  `}
`;export{T as A,s as B,y as E,w as F,$ as G,j as M,k as P,g as S,W as V,x as W,F as a,v as b,f as c,b as d,u as e,h as f,c as g,l as h,m as i,S as j};
