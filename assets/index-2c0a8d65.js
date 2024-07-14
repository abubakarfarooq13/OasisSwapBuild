import{r as v,R as p,aP as u,j as e,s as y,fI as T,fr as j,hQ as k,k as C,hR as B,I as E,F as H,bk as M,T as h,hS as S,X as O,B as V,U as g,hT as R,hU as F,hV as I,db as L,aa as P,g as W,cQ as _}from"./index-3b83b03c.js";function m(){return m=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},m.apply(this,arguments)}function A(t,r){if(t==null)return{};var n=$(t,r),s,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)s=i[o],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function $(t,r){if(t==null)return{};var n={},s=Object.keys(t),o,i;for(i=0;i<s.length;i++)o=s[i],!(r.indexOf(o)>=0)&&(n[o]=t[o]);return n}var w=v.forwardRef(function(t,r){var n=t.color,s=n===void 0?"currentColor":n,o=t.size,i=o===void 0?24:o,a=A(t,["color","size"]);return p.createElement("svg",m({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),p.createElement("circle",{cx:"18",cy:"5",r:"3"}),p.createElement("circle",{cx:"6",cy:"12",r:"3"}),p.createElement("circle",{cx:"18",cy:"19",r:"3"}),p.createElement("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),p.createElement("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}))});w.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};w.displayName="Share2";const D=w;function z({size:t,color:r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"36",height:t||"36",viewBox:"0 0 36 36",fill:"none",children:e.jsx("g",{clipPath:"url(#clip0_4036_80040)",children:e.jsx("path",{d:"M20.4305 35.9297H14.6541C13.6893 35.9297 12.9044 35.1464 12.9044 34.1834V21.18H9.53436C8.56953 21.18 7.78467 20.3964 7.78467 19.4337V13.8617C7.78467 12.8988 8.56953 12.1154 9.53436 12.1154H12.9044V9.3252C12.9044 6.55856 13.7749 4.20474 15.4213 2.51862C17.0753 0.824799 19.3866 -0.0703125 22.1056 -0.0703125L26.5109 -0.0631714C27.4741 -0.0615234 28.2576 0.721802 28.2576 1.68311V6.85657C28.2576 7.81952 27.473 8.60285 26.5084 8.60285L23.5424 8.60394C22.6378 8.60394 22.4075 8.78494 22.3582 8.84042C22.277 8.93244 22.1804 9.19254 22.1804 9.91077V12.1152H26.2855C26.5946 12.1152 26.894 12.1913 27.1513 12.3346C27.7064 12.6442 28.0515 13.2295 28.0515 13.862L28.0493 19.434C28.0493 20.3964 27.2644 21.1797 26.2996 21.1797H22.1804V34.1834C22.1804 35.1464 21.3953 35.9297 20.4305 35.9297ZM15.019 33.8192H20.0656V20.2352C20.0656 19.5922 20.5898 19.0692 21.2338 19.0692H25.9347L25.9366 14.2259H21.2335C20.5895 14.2259 20.0656 13.703 20.0656 13.06V9.91077C20.0656 9.08624 20.1495 8.14856 20.7731 7.44379C21.5266 6.5918 22.714 6.49347 23.5418 6.49347L26.143 6.49237V2.04675L22.1039 2.04016C17.7344 2.04016 15.019 4.83179 15.019 9.3252V13.06C15.019 13.7027 14.495 14.2259 13.8511 14.2259H9.89927V19.0692H13.8511C14.495 19.0692 15.019 19.5922 15.019 20.2352V33.8192ZM26.5068 2.0473H26.5071H26.5068Z",fill:r||"#A7B6BD"})})})}const U=y.div`
  text-align: center;
  color: ${({theme:t})=>t.subText};
  font-size: 14px;

  a {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    &:hover {
      background-color: ${({theme:t})=>t.buttonBlack};
    }
  }
`,Z=y.div`
  background-color: ${({theme:t})=>t.buttonBlack};
  border-radius: 999px;
  padding: 4px;
  display: flex;
  width: 100%;
  input {
    border: none;
    outline: none;
    color: ${({theme:t})=>t.text};
    font-size: 14px;
    background: transparent;
    flex: 1;
    padding-left: 10px;
  }
`,G=y.span`
  position: absolute;
  top: -25px;
  background: #ddd;
  color: #222;
  border-radius: 5px;
  font-size: 12px;
  padding: 3px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  &.show {
    visibility: visible;
    opacity: 0.9;
  }
`,N=({children:t,onClick:r,renderItem:n})=>{const s=C(),[o,i]=v.useState(!1),a=()=>{i(!0)},x=()=>{i(!1)},d=o?s.text:s.subText,l={onClick:r,color:d,children:t,onMouseEnter:a,onMouseLeave:x};return n?n(l):e.jsx(U,{...l,children:t(d)})},Q=({shareUrl:t,onShared:r=()=>null,showLabel:n=!0,renderItem:s,size:o=36})=>{const{telegram:i,twitter:a,facebook:x,discord:d}=X(t),l=c=>e.jsx(N,{renderItem:s,onClick:r,children:c.children});return e.jsxs(H,{justifyContent:"space-between",padding:"32px 0",width:"100%",children:[e.jsx(l,{onClick:r,children:c=>e.jsxs(e.Fragment,{children:[e.jsx(g,{href:i,style:{display:"flex"},children:e.jsx(R,{size:o,color:c})}),n&&e.jsx(h,{children:"Telegram"})]})}),e.jsx(l,{onClick:r,children:c=>e.jsxs(e.Fragment,{children:[e.jsx(g,{href:a,style:{display:"flex"},children:e.jsx(F,{width:o,height:o,color:c})}),n&&e.jsx(h,{children:"Twitter"})]})}),e.jsx(l,{onClick:r,children:c=>e.jsxs(e.Fragment,{children:[e.jsx(g,{href:x,style:{display:"flex"},children:e.jsx(z,{color:c,size:o})}),n&&e.jsx(h,{children:"Facebook"})]})}),e.jsx(l,{onClick:r,children:c=>e.jsxs(e.Fragment,{children:[e.jsx(g,{href:d,style:{display:"flex"},children:e.jsx(I,{width:o,height:o,color:c})}),n&&e.jsx(h,{children:"Discord"})]})})]})},X=t=>({telegram:"https://telegram.me/share/url?url="+encodeURIComponent(t),twitter:"https://twitter.com/intent/tweet?text="+encodeURIComponent(t),facebook:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t),discord:"https://discord.com/app/"}),f=()=>{};function q({title:t,url:r,onShared:n=f,onDismiss:s=f}){const o=T(j.SHARE),i=k(j.SHARE),a=C(),[x,d]=B(),l=r||window.location.href,c=()=>{n(),d(l)},b=()=>{s(),i()};return e.jsx(E,{isOpen:o,onDismiss:b,children:e.jsxs(H,{flexDirection:"column",alignItems:"center",padding:"25px",width:"100%",children:[e.jsxs(M,{children:[e.jsx(h,{fontSize:18,fontWeight:500,children:t}),e.jsx(S,{onClick:b,style:{lineHeight:"0"},children:e.jsx(O,{color:a.text})})]}),e.jsx(Q,{shareUrl:l,onShared:n}),e.jsxs(Z,{children:[e.jsx("input",{type:"text",value:l,onChange:f}),e.jsxs(V,{onClick:c,fontSize:14,padding:"8px 12px",width:"auto",children:["Copy Link",e.jsx(G,{className:x?"show":"",children:"Copied!"})]})]})]})})}const K=({url:t,onShared:r,color:n,title:s})=>{const o=C(),i=k(j.SHARE);return e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:i,children:e.jsx(P,{text:W._({id:"Z8lGw6"}),placement:"top",width:"fit-content",disableTooltip:_,children:e.jsx(D,{size:18,color:n||o.subText})})}),e.jsx(q,{url:t,onShared:r,title:s})]})};export{D as S,q as a,K as b};
