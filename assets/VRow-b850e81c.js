import{p as b,m as p,a as v,g as V,o as k,bR as w,bS as L,bI as N}from"./index-2338b91a.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return L.reduce((e,a)=>{const n=t+N(a);return e[n]=s(),e},{})}const P=[...o,"baseline","stretch"],d=t=>P.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),A=[...o,...g],y=t=>A.includes(t),C=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...g,"stretch"],j=t=>E.includes(t),m=i("alignContent",()=>({type:String,default:null,validator:j})),u={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function R(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const G=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:j},...m,...p(),...v()},"VRow"),T=V()({name:"VRow",props:G(),setup(t,s){let{slots:e}=s;const a=k(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const S=t[c],r=R(l,c,S);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return w(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{T as V};
