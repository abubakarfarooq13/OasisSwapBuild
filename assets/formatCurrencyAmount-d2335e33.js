import{ag as e,dV as n}from"./index-d4668781.js";function f(r,i){return r?e.equal(r.quotient,e.BigInt(0))?"0":r.divide(r.decimalScale).lessThan(new n(1,1e5))?"<0.00001":r.toSignificant(i):"-"}export{f};