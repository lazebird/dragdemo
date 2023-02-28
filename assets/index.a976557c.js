var R=Object.defineProperty;var z=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var N=(l,o,e)=>o in l?R(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,V=(l,o)=>{for(var e in o||(o={}))q.call(o,e)&&N(l,e,o[e]);if(z)for(var e of z(o))A.call(o,e)&&N(l,e,o[e]);return l};import{o as u,c,a as g,t as m,u as f,b as y,p as B,d as F,e as D,r as b,f as J,g as r,w as v,F as O,h as H,i as I,n as K,_ as G,j as Q,k as W,M as X,l as Y}from"./vendor.a1170c7c.js";const Z=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};Z();const ee="@lazebird/dragdemo",te="0.0.5",ne=["vue3","vite","vuedraggable"],le="lazebird",oe="MIT",se={url:"https://github.com/lazebird/dragdemo/issues"},ae="https://github.com/lazebird/dragdemo",ie=["dist"],de="./dist/dragdemo.umd.js",re="./dist/dragdemo.es.js",ue={".":{import:"./dist/dragdemo.es.js",require:"./dist/dragdemo.umd.js"}},ce={dev:"vite",build:"vue-tsc --noEmit && vite build",demo:"vue-tsc --noEmit && vite build --mode demo",publish:"npm publish --access public",preview:"vite preview",report:"cross-env REPORT=true npm run build","lint:eslint":'eslint --cache --max-warnings 0  "{src,mock}/**/*.{vue,ts,tsx}" --fix',"lint:prettier":'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "**/*.{less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',"lint:lint-staged":"lint-staged -c ./.husky/lintstagedrc.js",prepare:"husky install"},pe={"ant-design-vue":"^3.2.15",vue:"^3.2.31",vuedraggable:"^4.1.0"},ve={"@commitlint/cli":"^16.2.1","@commitlint/config-conventional":"^16.2.1","@types/node":"^17.0.19","@typescript-eslint/eslint-plugin":"^5.12.1","@typescript-eslint/parser":"^5.12.1","@vitejs/plugin-vue":"^2.2.2","@vue/compiler-sfc":"^3.2.31","cz-conventional-changelog":"^3.3.0",eslint:"^8.9.0","eslint-define-config":"^1.2.5","eslint-plugin-vue":"^8.5.0",husky:"^7.0.4","lint-staged":"^12.3.4",prettier:"^2.5.1",rollup:"^2.68.0","rollup-plugin-visualizer":"^5.5.4",stylelint:"^14.5.2","stylelint-config-standard":"^25.0.0",typescript:"^4.5.5","unplugin-vue-components":"^0.17.20",vite:"^2.8.4","vue-eslint-parser":"^8.3.0","vue-tsc":"^0.31.4"},me={commitizen:{path:"./node_modules/cz-conventional-changelog"}};var _e={name:ee,version:te,keywords:ne,author:le,license:oe,bugs:se,homepage:ae,files:ie,main:de,module:re,exports:ue,private:!1,scripts:ce,dependencies:pe,devDependencies:ve,config:me};var $=(l,o)=>{const e=l.__vccOpts||l;for(const[i,n]of o)e[i]=n;return e};const M=l=>(B("data-v-38ad69a2"),l=l(),F(),l),fe=M(()=>g("label",null,"Home: ",-1)),ge=["href"],he=y(),be=M(()=>g("label",null,"License: ",-1)),ye={setup(l){const{name:o,version:e,homepage:i,license:n}=_e;return document.title=o,(s,p)=>(u(),c("div",null,[fe,g("a",{href:f(i),target:"_blank"},m(f(o))+" "+m(f(e)),9,ge),he,be,y(m(f(n)),1)]))}};var ke=$(ye,[["__scopeId","data-v-38ad69a2"]]);const we={key:0,class:"text"},xe={key:1,class:"text"},Ve={props:{data:{type:Object,required:!0}},emits:["dbclick"],setup(l,{emit:o}){const e=n=>n.id?n.row!==void 0?`P${n.id}`:`N${n.id}`:".placeholder",i=n=>o("dbclick",n);return(n,s)=>(u(),c("div",{onDblclick:s[0]||(s[0]=p=>i(l.data))},[l.data.row!==void 0&&(l.data.row&1)===0?(u(),c("div",we,m(l.data.id),1)):D("v-if",!0),g("div",null,m(e(l.data)),1),l.data.row!==void 0&&(l.data.row&1)===1?(u(),c("div",xe,m(l.data.id),1)):D("v-if",!0)],32))}};var L=$(Ve,[["__scopeId","data-v-c9b309ae"]]);const Ie={key:0},De=y("Trash "),Oe={setup(l){const o=b(),e=b([]),i=b([]),n=b([]),s=b({visible:!1}),p=t=>JSON.parse(JSON.stringify(t));function E(){e.value=[[],[],[{id:0}]];for(let t=1;t<=12;t++)t&1?e.value[0].push({id:t}):e.value[1].push({id:t});for(let t=101;t<=112;t++)i.value.push({id:t})}function j(){for(var t=0;t<e.value.length;t++)e.value[t]=e.value[t].filter(a=>a.id);e.value=e.value.filter(a=>a.length),e.value.push([{id:0}]),console.log("[fixPlaceholder] portData ",p(e.value))}function P(t){console.log("[move] evt ",t);let a=parseInt(t.from.id),_=parseInt(t.to.id),w=t.oldIndex,k=t.newIndex;t.to.id!=="trash"?console.log("[move] move %o from [%d][%d] to [%d][%d]",p(e.value[_][k]),a,w,_,k):n.value=[],j()}function S(t){console.log("[clone] evt ",t),t.pullMode==="clone"&&j()}function T(t){t.row===void 0||t.id===void 0||(s.value=V({visible:!0},t),K(()=>{var a;return(a=o.value)==null?void 0:a.focus()}))}function U(){const t=V({},s.value);console.log("[handleOk] port ",t);const a=e.value[t.row].find(_=>_.id===t.id);a.id=t.newid,s.value={visible:!1}}return J(()=>E()),(t,a)=>{const _=G,w=Q,k=W,C=X;return u(),c(O,null,[r(w,null,{default:v(()=>[r(_,{span:16},{default:v(()=>[g("table",null,[e.value&&e.value.length?(u(),c("tbody",Ie,[(u(!0),c(O,null,H(e.value,(d,h)=>(u(),c("tr",{key:h},[r(f(I),{modelValue:e.value[h],"onUpdate:modelValue":x=>e.value[h]=x,group:{name:"panel",pull:!0,put:!0},onEnd:P,"item-key":"id",id:h,class:"row"},{item:v(({element:x})=>[g("td",null,[r(L,{data:{id:x.id,row:h},onDbclick:T},null,8,["data"])])]),_:2},1032,["modelValue","onUpdate:modelValue","id"])]))),128))])):D("v-if",!0)])]),_:1}),r(_,{span:8},{default:v(()=>[r(f(I),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=d=>i.value=d),group:{name:"element",pull:"clone",put:!1},sort:!1,onEnd:S,"item-key":"id",style:{display:"flex","flex-flow":"wrap"}},{item:v(({element:d})=>[r(L,{data:{id:d.id}},null,8,["data"])]),_:1},8,["modelValue"]),r(f(I),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=d=>n.value=d),group:{name:"trash",draggable:".dropitem",put:!0,pull:!1},class:"dropzone trashzone","item-key":"id",id:"trash"},{item:v(({element:d})=>[y(m(d.id),1)]),footer:v(()=>[De]),_:1},8,["modelValue","group"])]),_:1})]),_:1}),r(C,{visible:s.value.visible,"onUpdate:visible":a[3]||(a[3]=d=>s.value.visible=d),title:"Modify Port ID",onOk:U},{default:v(()=>[y(m(s.value.id)+" --> ",1),r(k,{ref_key:"inputRef",ref:o,value:s.value.newid,"onUpdate:value":a[2]||(a[2]=d=>s.value.newid=d),min:1,max:100},null,8,["value"])]),_:1},8,["visible"])],64)}}};var $e=$(Oe,[["__scopeId","data-v-71947c61"]]);const je=g("br",null,null,-1),ze={setup(l){return(o,e)=>(u(),c(O,null,[r(ke),je,r($e)],64))}},Ne=Y(ze);Ne.mount("#app");
