import{A as m}from"./_ant-design-vue@3.2.10@ant-design-vue.f80834eb.js";import{c as f}from"./_@vue_runtime-dom@3.2.37@@vue.c2295e1b.js";import{ai as d,ac as h,P as _}from"./_@vue_runtime-core@3.2.37@@vue.14a2a806.js";import{c as g,a as y}from"./_vue-router@4.1.3@vue-router.31ba7b38.js";import{c as b}from"./_vuex@4.0.2@vuex.f5f6627b.js";import{v}from"./_@ts-pro_vue-eternal-loading@1.2.0@@ts-pro.57d01f5e.js";import"./_@babel_runtime@7.18.9@@babel.e62f9163.js";import"./_resize-observer-polyfill@1.5.1@resize-observer-polyfill.62773a2d.js";import"./_@vue_reactivity@3.2.37@@vue.f361355a.js";import"./_@vue_shared@3.2.37@@vue.1f15685f.js";import"./_vue-types@3.0.2@vue-types.ff7ca497.js";import"./_@ant-design_icons-vue@6.1.0@@ant-design.79b39c92.js";import"./_@ant-design_icons-svg@4.2.1@@ant-design.cc2890d4.js";import"./_@ant-design_colors@6.0.0@@ant-design.f63ed091.js";import"./_@ctrl_tinycolor@3.4.1@@ctrl.fb3199b4.js";import"./_dom-align@1.12.3@dom-align.30a680d1.js";import"./_lodash-es@4.17.21@lodash-es.394ee518.js";import"./_dayjs@1.11.4@dayjs.7a6434d2.js";import"./_async-validator@4.2.5@async-validator.b8d521e8.js";import"./_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed.d1b0cd52.js";import"./_compute-scroll-into-view@1.0.17@compute-scroll-into-view.78a38d38.js";import"./_@vue_devtools-api@6.2.1@@vue.8ef49068.js";import"./_vue@3.2.37@vue.e4ea772e.js";const S=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};S();const E={name:"App",created(){sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",()=>{sessionStorage.setItem("store",JSON.stringify(this.$store.state))})}},I=Object.assign(E,{setup(t){return(e,s)=>{const o=d("router-view");return h(),_(o)}}}),L="modulepreload",a={},O="/",k=function(e,s){return!s||s.length===0?e():Promise.all(s.map(o=>{if(o=`${O}${o}`,o in a)return;a[o]=!0;const r=o.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":L,r||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),r)return new Promise((p,u)=>{i.addEventListener("load",p),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},c=b({state(){return{count:0,profile:{},collapse:!1,shelf:[],bid:"",chapters:[],chapterIdx:0,bookInfo:{}}},mutations:{increment(t){t.count++},set_profile(t,e){t.profile=e},logout(t){t.profile={}},set_shelf(t,e){(e===void 0||e===""||e==null)&&(e=[]),t.shelf=e},set_bid(t,e){t.bid=e},set_chapterIdx(t,e){t.chapterIdx=e},set_chapters(t,e){t.chapters=e},set_book_info(t,e){t.bookInfo=e}},getters:{getChapter(t){return t.chapters[t.chapterIdx]}}}),$=[{path:"/",redirect:"/home"},{path:"/home",component:()=>k(()=>import("./Home.a358754b.js"),["assets/Home.a358754b.js","assets/Home.5f45f3a4.css","assets/_axios@0.23.0@axios.d268783a.js","assets/_ant-design-vue@3.2.10@ant-design-vue.f80834eb.js","assets/_ant-design-vue@3.2.10@ant-design-vue.14ad31f8.css","assets/_@babel_runtime@7.18.9@@babel.e62f9163.js","assets/_resize-observer-polyfill@1.5.1@resize-observer-polyfill.62773a2d.js","assets/_@vue_runtime-core@3.2.37@@vue.14a2a806.js","assets/_@vue_reactivity@3.2.37@@vue.f361355a.js","assets/_@vue_shared@3.2.37@@vue.1f15685f.js","assets/_vue-types@3.0.2@vue-types.ff7ca497.js","assets/_@vue_runtime-dom@3.2.37@@vue.c2295e1b.js","assets/_@ant-design_icons-vue@6.1.0@@ant-design.79b39c92.js","assets/_@ant-design_icons-svg@4.2.1@@ant-design.cc2890d4.js","assets/_@ant-design_colors@6.0.0@@ant-design.f63ed091.js","assets/_@ctrl_tinycolor@3.4.1@@ctrl.fb3199b4.js","assets/_dom-align@1.12.3@dom-align.30a680d1.js","assets/_lodash-es@4.17.21@lodash-es.394ee518.js","assets/_dayjs@1.11.4@dayjs.7a6434d2.js","assets/_async-validator@4.2.5@async-validator.b8d521e8.js","assets/_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed.d1b0cd52.js","assets/_compute-scroll-into-view@1.0.17@compute-scroll-into-view.78a38d38.js","assets/_vue-router@4.1.3@vue-router.31ba7b38.js","assets/_vuex@4.0.2@vuex.f5f6627b.js","assets/_@vue_devtools-api@6.2.1@@vue.8ef49068.js","assets/_@ts-pro_vue-eternal-loading@1.2.0@@ts-pro.57d01f5e.js","assets/_vue@3.2.37@vue.e4ea772e.js"])}],l=g({history:y(),routes:$,scrollBehavior(t,e,s){return s||{top:0}}});l.beforeEach((t,e,s)=>{if(!t.meta.needToken)s();else{var o=c.state.profile.token;o!=null&&o!=""&&o!=null?s():s({path:"/login"})}});f(I).use(v.exports.VueEternalLoading).use(c).use(l).use(m).mount("#app");export{l as r,c as s};
