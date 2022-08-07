import{_ as x}from"./_axios@0.23.0@axios.d268783a.js";import{s as _,r as h}from"./index.c7f01263.js";import{m as w}from"./_ant-design-vue@3.2.10@ant-design-vue.f80834eb.js";import{ai as c,ac as P,R as b,c as s,ax as o,F as j,U as a,E as g}from"./_@vue_runtime-core@3.2.37@@vue.14a2a806.js";import{M as p}from"./_@vue_shared@3.2.37@@vue.1f15685f.js";import"./_@vue_runtime-dom@3.2.37@@vue.c2295e1b.js";import"./_@vue_reactivity@3.2.37@@vue.f361355a.js";import"./_vue-router@4.1.3@vue-router.31ba7b38.js";import"./_vuex@4.0.2@vuex.f5f6627b.js";import"./_@vue_devtools-api@6.2.1@@vue.8ef49068.js";import"./_@ts-pro_vue-eternal-loading@1.2.0@@ts-pro.57d01f5e.js";import"./_@babel_runtime@7.18.9@@babel.e62f9163.js";import"./_vue@3.2.37@vue.e4ea772e.js";import"./_resize-observer-polyfill@1.5.1@resize-observer-polyfill.62773a2d.js";import"./_vue-types@3.0.2@vue-types.ff7ca497.js";import"./_@ant-design_icons-vue@6.1.0@@ant-design.79b39c92.js";import"./_@ant-design_icons-svg@4.2.1@@ant-design.cc2890d4.js";import"./_@ant-design_colors@6.0.0@@ant-design.f63ed091.js";import"./_@ctrl_tinycolor@3.4.1@@ctrl.fb3199b4.js";import"./_dom-align@1.12.3@dom-align.30a680d1.js";import"./_lodash-es@4.17.21@lodash-es.394ee518.js";import"./_dayjs@1.11.4@dayjs.7a6434d2.js";import"./_async-validator@4.2.5@async-validator.b8d521e8.js";import"./_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed.d1b0cd52.js";import"./_compute-scroll-into-view@1.0.17@compute-scroll-into-view.78a38d38.js";const d=x.create({baseURL:"https://api.vvhan.com"});x.create({baseURL:"http://134.175.83.19:8012"});d.interceptors.request.use(t=>(_.state.profile.token&&(t.headers.auth=_.state.profile.token),t),t=>Promise.reject(t));d.interceptors.response.use(t=>{var e=t.status;return console.log(e),e==200||e==201||w.error(t.data.msg),t.data.data},t=>{if(t.response)switch(t.response.status){case 401:_.commit("logout"),h.replace({path:"login",query:{redirect:h.currentRoute.fullPath}})}return Promise.reject(t)});var U=(t,e)=>{const m=t.__vccOpts||t;for(const[f,r]of e)m[f]=r;return m};const C={name:"Home",components:{},setup(t){return{}},mounted(){this.get_music()},data(){return{data:{},next:!0}},methods:{get_ip(){},async get_music(){let t=await d.get("/api/reping");this.data=t,this.$refs.au.src=t.mp3url},async next_music(){this.next&&await this.get_music()}}},R=["src"],B={class:"music-name"},E={class:"music-auther"},H={class:"content"},N=g("\u81EA\u52A8\u4E0B\u4E00\u9996"),V=g(" \u6362\u4E00\u9996 ");function q(t,e,m,f,r,l){const n=c("a-col"),u=c("a-row"),v=c("a-space"),y=c("a-radio"),k=c("a-button");return P(),b(j,null,[s(u,{class:"r",justify:"center"},{default:o(()=>[s(n,{xs:14,sm:10,md:10,lg:10,xl:8},{default:o(()=>[s(u,{justify:"end"},{default:o(()=>[s(n,null,{default:o(()=>[a("img",{src:r.data.picUrl,style:{height:"200px","max-width":"100%"}},null,8,R)]),_:1})]),_:1})]),_:1}),s(n,{class:"left",xs:22,sm:10,md:10,lg:10,xl:10},{default:o(()=>[s(v,{direction:"vertical",size:"large"},{default:o(()=>[a("div",null,[a("span",B,p(r.data.name),1),a("span",E,p(r.data.auther),1)]),a("div",H,p(r.data.content),1),a("div",null,[a("audio",{controls:"controls",ref:"au",onPause:e[0]||(e[0]=(...i)=>t.onPause&&t.onPause(...i)),onEnded:e[1]||(e[1]=(...i)=>l.next_music&&l.next_music(...i))},null,544)])]),_:1})]),_:1})]),_:1}),s(u,{class:"r",justify:"center"},{default:o(()=>[s(n,{xs:10,sm:3,md:2,lg:2,xl:2},{default:o(()=>[s(y,{checked:r.next,"onUpdate:checked":e[2]||(e[2]=i=>r.next=i)},{default:o(()=>[N]),_:1},8,["checked"])]),_:1}),s(n,{xs:8,sm:3,md:2,lg:2,xl:1},{default:o(()=>[s(k,{type:"primary",block:"",onClick:l.get_music},{default:o(()=>[V]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var nt=U(C,[["render",q]]);export{nt as default};
