import{R as v,r as h,bQ as m,kO as b,g9 as y}from"./index-c19adf44.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var g=function(i,o){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(i,o)},w,u,E=(function(i){/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var o={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if(s==="string"||s==="number")t.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&t.push(a)}else if(s==="object")for(var l in r)o.call(r,l)&&r[l]&&t.push(l)}}return t.join(" ")}i.exports?(n.default=n,i.exports=n):window.classNames=n})()}(u={path:w,exports:{},require:function(i,o){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(o==null&&u.path)}},u.exports),u.exports);function f(i,o,n){var t,e,r,s,a;function l(){var c=Date.now()-s;c<o&&c>=0?t=setTimeout(l,o-c):(t=null,n||(a=i.apply(r,e),r=e=null))}o==null&&(o=100);var p=function(){r=this,e=arguments,s=Date.now();var c=n&&!t;return t||(t=setTimeout(l,o)),c&&(a=i.apply(r,e),r=e=null),a};return p.clear=function(){t&&(clearTimeout(t),t=null)},p.flush=function(){t&&(a=i.apply(r,e),r=e=null,clearTimeout(t),t=null)},p}f.debounce=f;var M=f;(function(i,o){o===void 0&&(o={});var n=o.insertAt;if(i&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",n==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))}})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);var d,S=(d="indiana-scroll-container",function(i,o){if(!i)return d;var n;typeof i=="string"?n=i:o=i;var t=d;return n&&(t+="__"+n),t+(o?Object.keys(o).reduce(function(e,r){var s=o[r];return s&&(e+=" "+(typeof s=="boolean"?t+"--"+r:t+"--"+r+"_"+s)),e},""):"")}),R=function(i){function o(n){var t=i.call(this,n)||this;return t.onEndScroll=function(){t.scrolling=!1,!t.pressed&&t.started&&t.processEnd()},t.onScroll=function(e){var r=t.container.current;r.scrollLeft===t.scrollLeft&&r.scrollTop===t.scrollTop||(t.scrolling=!0,t.processScroll(e),t.onEndScroll())},t.onTouchStart=function(e){var r=t.props.nativeMobileScroll;if(t.isDraggable(e.target))if(t.internal=!0,r&&t.scrolling)t.pressed=!0;else{var s=e.touches[0];t.processClick(e,s.clientX,s.clientY),!r&&t.props.stopPropagation&&e.stopPropagation()}},t.onTouchEnd=function(e){var r=t.props.nativeMobileScroll;t.pressed&&(!t.started||t.scrolling&&r?t.pressed=!1:t.processEnd(),t.forceUpdate())},t.onTouchMove=function(e){var r=t.props.nativeMobileScroll;if(t.pressed&&(!r||!t.isMobile)){var s=e.touches[0];s&&t.processMove(e,s.clientX,s.clientY),e.preventDefault(),t.props.stopPropagation&&e.stopPropagation()}},t.onMouseDown=function(e){t.isDraggable(e.target)&&t.isScrollable()&&(t.internal=!0,t.props.buttons.indexOf(e.button)!==-1&&(t.processClick(e,e.clientX,e.clientY),e.preventDefault(),t.props.stopPropagation&&e.stopPropagation()))},t.onMouseMove=function(e){t.pressed&&(t.processMove(e,e.clientX,e.clientY),e.preventDefault(),t.props.stopPropagation&&e.stopPropagation())},t.onMouseUp=function(e){t.pressed&&(t.started?t.processEnd():(t.internal=!1,t.pressed=!1,t.forceUpdate(),t.props.onClick&&t.props.onClick(e)),e.preventDefault(),t.props.stopPropagation&&e.stopPropagation())},t.container=v.createRef(),t.onEndScroll=M(t.onEndScroll,300),t.scrolling=!1,t.started=!1,t.pressed=!1,t.internal=!1,t.getRef=t.getRef.bind(t),t}return function(n,t){function e(){this.constructor=n}g(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}(o,i),o.prototype.componentDidMount=function(){var n=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),n&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},o.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},o.prototype.getElement=function(){return this.container.current},o.prototype.isMobileDevice=function(){return window.orientation!==void 0||navigator.userAgent.indexOf("IEMobile")!==-1},o.prototype.isDraggable=function(n){var t=this.props.ignoreElements;if(t){var e=n.closest(t);return e===null||e.contains(this.getElement())}return!0},o.prototype.isScrollable=function(){var n=this.container.current;return n&&(n.scrollWidth>n.clientWidth||n.scrollHeight>n.clientHeight)},o.prototype.processClick=function(n,t,e){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=e,this.pressed=!0},o.prototype.processStart=function(n){n===void 0&&(n=!0);var t=this.props.onStartScroll;this.started=!0,n&&document.body.classList.add("indiana-dragging"),t&&t({external:!this.internal}),this.forceUpdate()},o.prototype.processScroll=function(n){if(this.started){var t=this.props.onScroll;t&&t({external:!this.internal})}else this.processStart(!1)},o.prototype.processMove=function(n,t,e){var r=this.props,s=r.horizontal,a=r.vertical,l=r.activationDistance,p=r.onScroll,c=this.container.current;this.started?(s&&(c.scrollLeft-=t-this.clientX),a&&(c.scrollTop-=e-this.clientY),p&&p({external:!this.internal}),this.clientX=t,this.clientY=e,this.scrollLeft=c.scrollLeft,this.scrollTop=c.scrollTop):(s&&Math.abs(t-this.clientX)>l||a&&Math.abs(e-this.clientY)>l)&&(this.clientX=t,this.clientY=e,this.processStart())},o.prototype.processEnd=function(){var n=this.props.onEndScroll;this.container.current&&n&&n({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},o.prototype.getRef=function(n){[this.container,this.props.innerRef].forEach(function(t){t&&(typeof t=="function"?t(n):t.current=n)})},o.prototype.render=function(){var n=this.props,t=n.children,e=n.draggingClassName,r=n.className,s=n.style,a=n.hideScrollbars,l=n.component;return v.createElement(l,{className:E(r,this.pressed&&e,S({dragging:this.pressed,"hide-scrollbars":a,"native-scroll":this.isMobile})),style:s,ref:this.getRef,onScroll:this.onScroll},t)},o.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},o}(h.PureComponent),T=b,x=y,L="Expected a function";function D(i,o,n){var t=!0,e=!0;if(typeof i!="function")throw new TypeError(L);return x(n)&&(t="leading"in n?!!n.leading:t,e="trailing"in n?!!n.trailing:e),T(i,o,{leading:t,maxWait:o,trailing:e})}var _=D;const P=m(_);function k(i,o){const n=h.useRef(i);return n.current=i,h.useMemo(()=>P(n.current,o),[o])}export{P as _,R as p,k as u};