import{s as t,T as i}from"./index-3b83b03c.js";const o=t.div`
  position: relative;
`;t(i)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.primary};
`;const s=t.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;export{s as D,o as W};
