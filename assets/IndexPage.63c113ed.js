import{c as d,h as g}from"./render.33841959.js";import{e as t,c,h,d as i,f,j as m,g as y,_ as x,A as _,B as v,C,D as $,G as P}from"./index.59e5e94d.js";var Q=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=i(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},g(o.default))}}),B="/assets/quasar-logo-vertical.55e9c854.svg";const F=_({name:"IndexPage"}),q=P("img",{alt:"Quasar logo",src:B,style:{width:"200px",height:"200px"}},null,-1);function H(n,o,s,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[q]),_:1})}var j=x(F,[["render",H]]);export{j as default};
