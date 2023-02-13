import{u as ut,a as ct,Q as ee,R as dt,v as Ue,c as $e,g as ft,b as Z}from"./QBtn.09154106.js";import{c as H,h as ne,a as vt,b as ht,d as Ae}from"./render.33841959.js";import{c as f,h as w,r as A,i as Se,o as te,a as O,n as Je,b as qe,g as U,l as Te,e as N,w as Q,d as ve,f as he,p as Ce,j as mt,k as bt,t as De,s as Ee,m as gt,q as yt,u as wt,v as pe,x as _t,y as G,z as xt,_ as qt,A as Tt,B as At,C as St,D as $,E as T,F as ue,G as r}from"./index.59e5e94d.js";var Ct=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:n.value},ne(i.default))}}),pt=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:n.value,role:"toolbar"},ne(i.default))}});function Mt(){const e=A(!Se.value);return e.value===!1&&te(()=>{e.value=!0}),e}const Ze=typeof ResizeObserver!="undefined",Ve=Ze===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var oe=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,o,t={width:-1,height:-1};function v(_){_===!0||e.debounce===0||e.debounce==="0"?h():n===null&&(n=setTimeout(h,e.debounce))}function h(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:_,offsetHeight:m}=o;(_!==t.width||m!==t.height)&&(t={width:_,height:m},i("resize",t))}}const{proxy:M}=U();if(Ze===!0){let _;const m=C=>{o=M.$el.parentNode,o?(_=new ResizeObserver(v),_.observe(o),h()):C!==!0&&qe(()=>{m(!0)})};return te(()=>{m()}),O(()=>{n!==null&&clearTimeout(n),_!==void 0&&(_.disconnect!==void 0?_.disconnect():o&&_.unobserve(o))}),Je}else{let C=function(){n!==null&&(clearTimeout(n),n=null),m!==void 0&&(m.removeEventListener!==void 0&&m.removeEventListener("resize",v,Te.passive),m=void 0)},R=function(){C(),o&&o.contentDocument&&(m=o.contentDocument.defaultView,m.addEventListener("resize",v,Te.passive),h())};const _=Mt();let m;return te(()=>{qe(()=>{o=M.$el,o&&R()})}),O(C),M.trigger=v,()=>{if(_.value===!0)return w("object",{style:Ve.style,tabindex:-1,type:"text/html",data:Ve.url,"aria-hidden":"true",onLoad:R})}}}}),zt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:o}}=U(),t=ve(he,N);if(t===N)return console.error("QHeader needs to be child of QLayout"),N;const v=A(parseInt(e.heightHint,10)),h=A(!0),M=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),_=f(()=>{if(e.modelValue!==!0)return 0;if(M.value===!0)return h.value===!0?v.value:0;const d=v.value-t.scroll.value.position;return d>0?d:0}),m=f(()=>e.modelValue!==!0||M.value===!0&&h.value!==!0),C=f(()=>e.modelValue===!0&&m.value===!0&&e.reveal===!0),R=f(()=>"q-header q-layout__section--marginal "+(M.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(m.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),B=f(()=>{const d=t.rows.value.top,u={};return d[0]==="l"&&t.left.space===!0&&(u[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(u[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),u});function g(d,u){t.update("header",d,u)}function S(d,u){d.value!==u&&(d.value=u)}function p({height:d}){S(v,d),g("size",d)}function I(d){C.value===!0&&S(h,!0),n("focusin",d)}Q(()=>e.modelValue,d=>{g("space",d),S(h,!0),t.animate()}),Q(_,d=>{g("offset",d)}),Q(()=>e.reveal,d=>{d===!1&&S(h,e.modelValue)}),Q(h,d=>{t.animate(),n("reveal",d)}),Q(t.scroll,d=>{e.reveal===!0&&S(h,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const V={};return t.instances.header=V,e.modelValue===!0&&g("size",v.value),g("space",e.modelValue),g("offset",_.value),O(()=>{t.instances.header===V&&(t.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const d=vt(i.default,[]);return e.elevated===!0&&d.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(w(oe,{debounce:0,onResize:p})),w("header",{class:R.value,style:B.value,onFocusin:I},d)}}}),j=H({name:"QAvatar",props:{...ut,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:i}){const n=ct(e),o=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const v=e.icon!==void 0?[w(ee,{name:e.icon})]:void 0;return w("div",{class:o.value,style:n.value},[w("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},ht(i.default,v))])}}});const kt={dark:{type:Boolean,default:null}};function Lt(e,i){return f(()=>e.dark===null?i.dark.isActive:e.dark)}const Rt=["horizontal","vertical","cell","none"];var Bt=H({name:"QMarkupTable",props:{...kt,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Rt.includes(e)}},setup(e,{slots:i}){const n=U(),o=Lt(e,n.proxy.$q),t=f(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(o.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>w("div",{class:t.value},[w("table",{class:"q-table"},ne(i.default))])}}),Qt=H({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=U(),o=ve(he,N);if(o===N)return console.error("QPageContainer needs to be child of QLayout"),N;Ce(mt,!0);const t=f(()=>{const v={};return o.header.space===!0&&(v.paddingTop=`${o.header.size}px`),o.right.space===!0&&(v[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(v.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(v[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),v});return()=>w("div",{class:"q-page-container",style:t.value},ne(i.default))}});let we,ce=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const Pt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return i=>{const n=new Uint8Array(i);return e.getRandomValues(n),n}}return i=>{const n=[];for(let o=i;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),Fe=4096;function It(){(we===void 0||ce+16>Fe)&&(ce=0,we=Pt(Fe));const e=Array.prototype.slice.call(we,ce,ce+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}let $t=0;const Et=["click","keydown"],Vt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${$t++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ft(e,i,n,o){const t=ve(De,N);if(t===N)return console.error("QTab/QRouteTab component needs to be child of QTabs"),N;const{proxy:v}=U(),h=A(null),M=A(null),_=A(null),m=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=f(()=>t.currentModel.value===e.name),R=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),B=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=f(()=>e.disable===!0||t.hasFocus.value===!0||C.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function S(u,c){if(c!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&Ee(u);return}if(o===void 0){t.updateModel({name:e.name}),n("click",u);return}if(o.hasRouterLink.value===!0){const a=(y={})=>{let L;const F=y.to===void 0||wt(y.to,e.to)===!0?t.avoidRouteWatcher=It():null;return o.navigateToRouterLink(u,{...y,returnRouterError:!0}).catch(J=>{L=J}).then(J=>{if(F===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,L===void 0&&(J===void 0||J.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),y.returnRouterError===!0)return L!==void 0?Promise.reject(L):J})};n("click",u,a),u.defaultPrevented!==!0&&a();return}n("click",u)}function p(u){gt(u,[13,32])?S(u,!0):yt(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&t.onKbdNavigate(u.keyCode,v.$el)===!0&&Ee(u),n("keydown",u)}function I(){const u=t.tabProps.value.narrowIndicator,c=[],a=w("div",{ref:_,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&c.push(w(ee,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&c.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&c.push(e.alertIcon!==void 0?w(ee,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&c.push(a);const y=[w("div",{class:"q-focus-helper",tabindex:-1,ref:h}),w("div",{class:B.value},Ae(i.default,c))];return u===!1&&y.push(a),y}const V={name:f(()=>e.name),rootRef:M,tabIndicatorRef:_,routeData:o};O(()=>{t.unregisterTab(V)}),te(()=>{t.registerTab(V)});function d(u,c){const a={ref:M,class:R.value,tabindex:g.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:p,...c};return bt(w(u,a,I()),[[dt,m.value]])}return{renderTab:d,$tabs:t}}var de=H({name:"QTab",props:Vt,emits:Et,setup(e,{slots:i,emit:n}){const{renderTab:o}=Ft(e,i,n);return()=>o("div")}});function _e(){let e;const i=U();function n(){e=void 0}return pe(n),O(n),{removeTick:n,registerTick(o){e=o,qe(()=>{e===o&&(Ue(i)===!1&&e(),e=void 0)})}}}function Ne(){let e=null;const i=U();function n(){e!==null&&(clearTimeout(e),e=null)}return pe(n),O(n),{removeTimeout:n,registerTimeout(o,t){n(),Ue(i)===!1&&(e=setTimeout(o,t))}}}let Oe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const i=document.createElement("div");Object.assign(i.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(i),e.scrollLeft=-1e3,Oe=e.scrollLeft>=0,e.remove()}function Nt(e,i,n){const o=n===!0?["left","right"]:["top","bottom"];return`absolute-${i===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Ht=["left","center","right","justify"];var Ut=H({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ht.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:i,emit:n}){const{proxy:o}=U(),{$q:t}=o,{registerTick:v}=_e(),{registerTick:h}=_e(),{registerTick:M}=_e(),{registerTimeout:_,removeTimeout:m}=Ne(),{registerTimeout:C,removeTimeout:R}=Ne(),B=A(null),g=A(null),S=A(e.modelValue),p=A(!1),I=A(!0),V=A(!1),d=A(!1),u=[],c=A(0),a=A(!1);let y=null,L=null,F;const J=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Nt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),We=f(()=>{const l=c.value,s=S.value;for(let b=0;b<l;b++)if(u[b].name.value===s)return!0;return!1}),Ke=f(()=>`q-tabs__content--align-${p.value===!0?"left":d.value===!0?"justify":e.align}`),Xe=f(()=>`q-tabs row no-wrap items-center q-tabs--${p.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ye=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ke.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ae=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),re=f(()=>e.vertical!==!0&&t.lang.rtl===!0),me=f(()=>Oe===!1&&re.value===!0);Q(re,Y),Q(()=>e.modelValue,l=>{be({name:l,setCurrent:!0,skipEmit:!0})}),Q(()=>e.outsideArrows,ie);function be({name:l,setCurrent:s,skipEmit:b}){S.value!==l&&(b!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",l),(s===!0||e["onUpdate:modelValue"]===void 0)&&(je(S.value,l),S.value=l))}function ie(){v(()=>{Me({width:B.value.offsetWidth,height:B.value.offsetHeight})})}function Me(l){if(ae.value===void 0||g.value===null)return;const s=l[ae.value.container],b=Math.min(g.value[ae.value.scroll],Array.prototype.reduce.call(g.value.children,(k,q)=>k+(q[ae.value.content]||0),0)),z=s>0&&b>s;p.value=z,z===!0&&h(Y),d.value=s<parseInt(e.breakpoint,10)}function je(l,s){const b=l!=null&&l!==""?u.find(k=>k.name.value===l):null,z=s!=null&&s!==""?u.find(k=>k.name.value===s):null;if(b&&z){const k=b.tabIndicatorRef.value,q=z.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),k.style.transition="none",k.style.transform="none",q.style.transition="none",q.style.transform="none";const x=k.getBoundingClientRect(),E=q.getBoundingClientRect();q.style.transform=e.vertical===!0?`translate3d(0,${x.top-E.top}px,0) scale3d(1,${E.height?x.height/E.height:1},1)`:`translate3d(${x.left-E.left}px,0,0) scale3d(${E.width?x.width/E.width:1},1,1)`,M(()=>{y=setTimeout(()=>{y=null,q.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",q.style.transform="none"},70)})}z&&p.value===!0&&X(z.rootRef.value)}function X(l){const{left:s,width:b,top:z,height:k}=g.value.getBoundingClientRect(),q=l.getBoundingClientRect();let x=e.vertical===!0?q.top-z:q.left-s;if(x<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(x),Y();return}x+=e.vertical===!0?q.height-k:q.width-b,x>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(x),Y())}function Y(){const l=g.value;if(l===null)return;const s=l.getBoundingClientRect(),b=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);re.value===!0?(I.value=Math.ceil(b+s.width)<l.scrollWidth-1,V.value=b>0):(I.value=b>0,V.value=e.vertical===!0?Math.ceil(b+s.height)<l.scrollHeight:Math.ceil(b+s.width)<l.scrollWidth)}function ze(l){L!==null&&clearInterval(L),L=setInterval(()=>{tt(l)===!0&&W()},5)}function ke(){ze(me.value===!0?Number.MAX_SAFE_INTEGER:0)}function Le(){ze(me.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){L!==null&&(clearInterval(L),L=null)}function Ge(l,s){const b=Array.prototype.filter.call(g.value.children,E=>E===s||E.matches&&E.matches(".q-tab.q-focusable")===!0),z=b.length;if(z===0)return;if(l===36)return X(b[0]),b[0].focus(),!0;if(l===35)return X(b[z-1]),b[z-1].focus(),!0;const k=l===(e.vertical===!0?38:37),q=l===(e.vertical===!0?40:39),x=k===!0?-1:q===!0?1:void 0;if(x!==void 0){const E=re.value===!0?-1:1,D=b.indexOf(s)+x*E;return D>=0&&D<z&&(X(b[D]),b[D].focus({preventScroll:!0})),!0}}const et=f(()=>me.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,s)=>{l.scrollLeft=-s}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,s)=>{l.scrollTop=s}}:{get:l=>l.scrollLeft,set:(l,s)=>{l.scrollLeft=s}});function tt(l){const s=g.value,{get:b,set:z}=et.value;let k=!1,q=b(s);const x=l<q?-1:1;return q+=x*5,q<0?(k=!0,q=0):(x===-1&&q<=l||x===1&&q>=l)&&(k=!0,q=l),z(s,q),Y(),k}function Re(l,s){for(const b in l)if(l[b]!==s[b])return!1;return!0}function ot(){let l=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const b=u.filter(x=>x.routeData!==void 0&&x.routeData.hasRouterLink.value===!0),{hash:z,query:k}=o.$route,q=Object.keys(k).length;for(const x of b){const E=x.routeData.exact.value===!0;if(x.routeData[E===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:D,query:ge,matched:it,href:st}=x.routeData.resolvedLink.value,ye=Object.keys(ge).length;if(E===!0){if(D!==z||ye!==q||Re(k,ge)===!1)continue;l=x.name.value;break}if(D!==""&&D!==z||ye!==0&&Re(ge,k)===!1)continue;const K={matchedLen:it.length,queryDiff:q-ye,hrefLen:st.length-D.length};if(K.matchedLen>s.matchedLen){l=x.name.value,s=K;continue}else if(K.matchedLen!==s.matchedLen)continue;if(K.queryDiff<s.queryDiff)l=x.name.value,s=K;else if(K.queryDiff!==s.queryDiff)continue;K.hrefLen>s.hrefLen&&(l=x.name.value,s=K)}l===null&&u.some(x=>x.routeData===void 0&&x.name.value===S.value)===!0||be({name:l,setCurrent:!0})}function nt(l){if(m(),a.value!==!0&&B.value!==null&&l.target&&typeof l.target.closest=="function"){const s=l.target.closest(".q-tab");s&&B.value.contains(s)===!0&&(a.value=!0,p.value===!0&&X(s))}}function lt(){_(()=>{a.value=!1},30)}function se(){Qe.avoidRouteWatcher===!1?C(ot):R()}function Be(){if(F===void 0){const l=Q(()=>o.$route.fullPath,se);F=()=>{l(),F=void 0}}}function at(l){u.push(l),c.value++,ie(),l.routeData===void 0||o.$route===void 0?C(()=>{if(p.value===!0){const s=S.value,b=s!=null&&s!==""?u.find(z=>z.name.value===s):null;b&&X(b.rootRef.value)}}):(Be(),l.routeData.hasRouterLink.value===!0&&se())}function rt(l){u.splice(u.indexOf(l),1),c.value--,ie(),F!==void 0&&l.routeData!==void 0&&(u.every(s=>s.routeData===void 0)===!0&&F(),se())}const Qe={currentModel:S,tabProps:J,hasFocus:a,hasActiveTab:We,registerTab:at,unregisterTab:rt,verifyRouteModel:se,updateModel:be,onKbdNavigate:Ge,avoidRouteWatcher:!1};Ce(De,Qe);function Pe(){y!==null&&clearTimeout(y),W(),F!==void 0&&F()}let Ie;return O(Pe),pe(()=>{Ie=F!==void 0,Pe()}),_t(()=>{Ie===!0&&Be(),ie()}),()=>w("div",{ref:B,class:Xe.value,role:"tablist",onFocusin:nt,onFocusout:lt},[w(oe,{onResize:Me}),w("div",{ref:g,class:Ye.value,onScroll:Y},ne(i.default)),w(ee,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ke,onTouchstartPassive:ke,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),w(ee,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Le,onTouchstartPassive:Le,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})])}}),Jt=H({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:o}}=U(),t=ve(he,N);if(t===N)return console.error("QFooter needs to be child of QLayout"),N;const v=A(parseInt(e.heightHint,10)),h=A(!0),M=A(Se.value===!0||t.isContainer.value===!0?0:window.innerHeight),_=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),m=f(()=>t.isContainer.value===!0?t.containerHeight.value:M.value),C=f(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return h.value===!0?v.value:0;const a=t.scroll.value.position+m.value+v.value-t.height.value;return a>0?a:0}),R=f(()=>e.modelValue!==!0||_.value===!0&&h.value!==!0),B=f(()=>e.modelValue===!0&&R.value===!0&&e.reveal===!0),g=f(()=>"q-footer q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(R.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(_.value!==!0?" hidden":""):"")),S=f(()=>{const a=t.rows.value.bottom,y={};return a[0]==="l"&&t.left.space===!0&&(y[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(y[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function p(a,y){t.update("footer",a,y)}function I(a,y){a.value!==y&&(a.value=y)}function V({height:a}){I(v,a),p("size",a)}function d(){if(e.reveal!==!0)return;const{direction:a,position:y,inflectionPoint:L}=t.scroll.value;I(h,a==="up"||y-L<100||t.height.value-m.value-y-v.value<300)}function u(a){B.value===!0&&I(h,!0),n("focusin",a)}Q(()=>e.modelValue,a=>{p("space",a),I(h,!0),t.animate()}),Q(C,a=>{p("offset",a)}),Q(()=>e.reveal,a=>{a===!1&&I(h,e.modelValue)}),Q(h,a=>{t.animate(),n("reveal",a)}),Q([v,t.scroll,t.height],d),Q(()=>o.screen.height,a=>{t.isContainer.value!==!0&&I(M,a)});const c={};return t.instances.footer=c,e.modelValue===!0&&p("size",v.value),p("space",e.modelValue),p("offset",C.value),O(()=>{t.instances.footer===c&&(t.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const a=Ae(i.default,[w(oe,{debounce:0,onResize:V})]);return e.elevated===!0&&a.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:g.value,style:S.value,onFocusin:u},a)}}});const Dt=[null,document,document.body,document.scrollingElement,document.documentElement];function Zt(e,i){let n=ft(i);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Dt.includes(n)?window:n}function Ot(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Wt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let fe;function xe(){if(fe!==void 0)return fe;const e=document.createElement("p"),i=document.createElement("div");$e(e,{width:"100%",height:"200px"}),$e(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const n=e.offsetWidth;i.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=i.clientWidth),i.remove(),fe=n-o,fe}const{passive:He}=Te,Kt=["both","horizontal","vertical"];var Xt=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,v;Q(()=>e.scrollTarget,()=>{_(),M()});function h(){o!==null&&o();const R=Math.max(0,Ot(t)),B=Wt(t),g={top:R-n.position.top,left:B-n.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const S=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:R,left:B},n.directionChanged=n.direction!==S,n.delta=g,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),i("scroll",{...n})}function M(){t=Zt(v,e.scrollTarget),t.addEventListener("scroll",m,He),m(!0)}function _(){t!==void 0&&(t.removeEventListener("scroll",m,He),t=void 0)}function m(R){if(R===!0||e.debounce===0||e.debounce==="0")h();else if(o===null){const[B,g]=e.debounce?[setTimeout(h,e.debounce),clearTimeout]:[requestAnimationFrame(h),cancelAnimationFrame];o=()=>{g(B),o=null}}}const{proxy:C}=U();return Q(()=>C.$q.lang.rtl,h),te(()=>{v=C.$el.parentNode,M()}),O(()=>{o!==null&&o(),_()}),Object.assign(C,{trigger:m,getPosition:()=>n}),Je}}),Yt=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:o}}=U(),t=A(null),v=A(o.screen.height),h=A(e.container===!0?0:o.screen.width),M=A({position:0,direction:"down",inflectionPoint:0}),_=A(0),m=A(Se.value===!0?0:xe()),C=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),R=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),B=f(()=>m.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${m.value}px`}:null),g=f(()=>m.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${m.value}px`,width:`calc(100% + ${m.value}px)`}:null);function S(c){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:c.position.top,direction:c.direction,directionChanged:c.directionChanged,inflectionPoint:c.inflectionPoint.top,delta:c.delta.top};M.value=a,e.onScroll!==void 0&&n("scroll",a)}}function p(c){const{height:a,width:y}=c;let L=!1;v.value!==a&&(L=!0,v.value=a,e.onScrollHeight!==void 0&&n("scrollHeight",a),V()),h.value!==y&&(L=!0,h.value=y),L===!0&&e.onResize!==void 0&&n("resize",c)}function I({height:c}){_.value!==c&&(_.value=c,V())}function V(){if(e.container===!0){const c=v.value>_.value?xe():0;m.value!==c&&(m.value=c)}}let d=null;const u={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:v,containerHeight:_,scrollbarWidth:m,totalWidth:f(()=>h.value+m.value),rows:f(()=>{const c=e.view.toLowerCase().split(" ");return{top:c[0].split(""),middle:c[1].split(""),bottom:c[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:M,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(c,a,y){u[c][a]=y}};if(Ce(he,u),xe()>0){let y=function(){c=null,a.classList.remove("hide-scrollbar")},L=function(){if(c===null){if(a.scrollHeight>o.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(c);c=setTimeout(y,300)},F=function(J){c!==null&&J==="remove"&&(clearTimeout(c),y()),window[`${J}EventListener`]("resize",L)},c=null;const a=document.body;Q(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),xt(()=>{F("remove")})}return()=>{const c=Ae(i.default,[w(Xt,{onScroll:S}),w(oe,{onResize:p})]),a=w("div",{class:C.value,style:R.value,ref:e.container===!0?void 0:t,tabindex:-1},c);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:t},[w(oe,{onResize:I}),w("div",{class:"absolute-full",style:B.value},[w("div",{class:"scroll",style:g.value},[a])])]):a}}}),le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAitQTFRF/////4AA/6oA/4AA/5kz/4sX8pQb9JUV9Y8f9pUa95Ea95QZ95MX+JYX+JUc+JEc+JQb+JAa+ZUZ9JUb9ZIa9ZQa9ZEZ9ZMZ9pQb95Ua95IZ95Eb+JQa+JQc+JQb+JMa9pQb95IZ95Ib95Qb95Ma95Ma95Qa+JQa+JIa+JMZ9pQZ9pMa9pQa95QZ95Ib95Mb95Ia95Ma95MZ95Ma+JQa+JQa+JIZ9pMb9pQa9pMa9pMa9pIa95Ia95Mb95Ma95Ia95Qa95Ma95MZ95Ib95Mb95Ma95Ma+JQZ+JMa95Ma95Ma95Ma95Ma95Ma95Ma95Ma95Ma95Ma95Ma95Qa95Ma95Ma95Ma95Ma95Ma95Ma95Ma95Mb95Ue95Yf95Yg95Yh95cj95gl+Joo+Jsq+Jss+J0v+J0w+J4w+J4x+J4y+KA1+KA2+KE3+KE4+KM8+KQ/+KZC+ahG+apL+a5T+a9W+bFa+bNe+bRg+rhp+rlq+rpu+rtu+r1y+8OA+8SC+8iJ+8mM+8qP+8qQ+8uR+82U+82W+86Y+8+a/NCb/NCc/NGe/NSk/NWm/Nao/Nmu/Nqw/Nqx/Nu0/d65/d+8/eG+/eHA/eLB/eLC/ePF/eTG/eXI/efM/efN/erS/erT/uvV/uzX/u3Y/u7a/u7b/u/e/vDg/vHg/vHi/vLj/vTo/vTp/vXp/vbr/vfu/vjw//nz//r0//r1//z4//z5//37//78//79///+////pTiBTwAAAFp0Uk5TAAIDBAULExgZHR4fISIkJSYnKTAxMjM0OTw9QUVKTE5WW15fYWNka2xvcHR3eXx9gYKEh4qMjZCRkpOUlpmam52goaKjpqirrri72+Hj6Ors7fHy8/X4+vv+wETTwAAAAaxJREFUGBltwYdDjHEABuCX7L2z90ohZJQZQkaI4l4JUcku2ZFVRPYeHdLZo4zr/fNc3/e73/fdueeBX/+psxcsmzMhuTMS6ZW5iUbewmGI133FDvqt640Yo/MYpyAFPmkB/i8D1nRa++lZAmN8gNbLL3sqj9GYDEe3LXSVk8W/3/CpyukqGIQOy+na9f3rvTo1FLW9Z1QuIgYE6CoNtkv6+VqNtIYASKd1To6/t8to5ADYQOu0FKq68kFqq6ZrWxcMpKdeaiT3vZKCNEZgLD1N0nmSV6UfNGZhBq2SsFRXXXHym3SXRhYyaJ1R1KcTNLKRTuuG9PDS8z9S61FGrUUqraB0gTz4TAodopGJiXTtLTselg6TPCLpGo0U9KXrosLSR0ZUSrpOYwywkY5HimhvuV9787OkU3Rt7wospqv0bJOintDIBtBnJ40Xqnqg0Nt3zbdKaIxCxEq6dv9q5mNV0CcXHXpupePAnctFrS30KewHxzhGFdfU0CcVxlwmlAVrJhNY3QmeSfmMUzgNMXrkMMb6wYg3dNFmGvlrkpFI0sgp81YtnZ82PAmef3QeP0PAzgscAAAAAElFTkSuQmCC";const jt=Tt({name:"MainLayout",components:{},setup(){return{state:G({tab:""})}}}),Gt={class:"q-pa-md q-gutter-sm"},eo=r("thead",null,[r("tr",null,[r("th",{class:"text-left"},"\u4EA4\u6613\u54C1\u79CD"),r("th",{class:"text-right"},"\u4E70\u4EF7"),r("th",{class:"text-right"},"\u5356\u4EF7"),r("th",{class:"text-right"},"\u6DA8\u8DCC\u5E45")])],-1),to={class:"text-left"},oo={class:"row items-center"},no=r("img",{src:le},null,-1),lo=r("div",null,[r("div",null,"BTCUSD"),r("div",{class:"text-616161"},"14:12:15")],-1),ao=r("td",{class:"text-right"},"159",-1),ro=r("td",{class:"text-right"},"6",-1),io=r("td",{class:"text-right"},"24",-1),so={class:"text-left"},uo={class:"row items-center"},co=r("img",{src:le},null,-1),fo=r("div",null,[r("div",null,"EURUSD"),r("div",{class:"text-616161"},"14:12:15")],-1),vo=r("td",{class:"text-right"},"237",-1),ho=r("td",{class:"text-right"},"9",-1),mo=r("td",{class:"text-right"},"37",-1),bo={class:"text-left"},go={class:"row items-center"},yo=r("img",{src:le},null,-1),wo=r("div",null,[r("div",null,"GBPUSD"),r("div",{class:"text-616161"},"14:12:15")],-1),_o=r("td",{class:"text-right"},"262",-1),xo=r("td",{class:"text-right"},"16",-1),qo=r("td",{class:"text-right"},"23",-1),To={class:"text-left"},Ao={class:"row items-center"},So=r("img",{src:le},null,-1),Co=r("div",null,[r("div",null,"USDGPY"),r("div",{class:"text-616161"},"14:12:15")],-1),po=r("td",{class:"text-right"},"305",-1),Mo=r("td",{class:"text-right"},"3.7",-1),zo=r("td",{class:"text-right"},"67",-1),ko={class:"text-left"},Lo={class:"row items-center"},Ro=r("img",{src:le},null,-1),Bo=r("div",null,[r("div",null,"ETHUSD"),r("div",{class:"text-616161"},"14:12:15")],-1),Qo=r("td",{class:"text-right"},"356",-1),Po=r("td",{class:"text-right"},"16",-1),Io=r("td",{class:"text-right"},"49",-1);function $o(e,i,n,o,t,v){return At(),St(Yt,{view:"lHh Lpr lFf",style:{background:"#1a1e26"}},{default:$(()=>[T(zt,{elevated:"",style:{background:"#1a1e26"}},{default:$(()=>[T(pt,null,{default:$(()=>[T(Z,{round:"",dense:"",class:"q-mr-sm q-mt-xs",size:"lg"},{default:$(()=>[ue("\u81EA\u9009")]),_:1}),T(Z,{round:"",dense:"",class:"q-mr-sm flb",style:{color:"#616161"}},{default:$(()=>[ue("\u5916\u6C47")]),_:1}),T(Z,{round:"",dense:"",class:"q-mr-sm flb",style:{color:"#616161"}},{default:$(()=>[ue("\u6570\u5B57\u8D27\u5E01")]),_:1}),T(Z,{round:"",dense:"",class:"q-mr-sm flb",style:{color:"#616161"}},{default:$(()=>[ue("\u671F\u6743\u5408\u7EA6")]),_:1}),T(Ct),T(Z,{flat:"",round:"",dense:"",icon:"search"})]),_:1})]),_:1}),T(Qt,null,{default:$(()=>[r("div",Gt,[T(Z,{style:{background:"#17b978",color:"white"},label:"\u5168\u90E8",rounded:"",size:"sm"}),T(Z,{outline:"",style:{color:"#616161"},label:"\u5916\u6C47",rounded:"",size:"sm"}),T(Z,{outline:"",style:{color:"#616161"},label:"\u6570\u5B57\u8D27\u5E01",rounded:"",size:"sm"}),T(Z,{outline:"",style:{color:"#616161"},label:"\u671F\u6743\u5408\u7EA6",rounded:"",size:"sm"})]),T(Bt,{flat:"",dark:"",style:{background:"#1a1e26"}},{default:$(()=>[eo,r("tbody",null,[r("tr",null,[r("td",to,[r("div",oo,[T(j,{size:"28px",color:"primary","text-color":"white",class:"q-mr-sm"},{default:$(()=>[no]),_:1}),lo])]),ao,ro,io]),r("tr",null,[r("td",so,[r("div",uo,[T(j,{size:"28px",color:"primary","text-color":"white",class:"q-mr-sm"},{default:$(()=>[co]),_:1}),fo])]),vo,ho,mo]),r("tr",null,[r("td",bo,[r("div",go,[T(j,{size:"28px",color:"primary","text-color":"white",class:"q-mr-sm"},{default:$(()=>[yo]),_:1}),wo])]),_o,xo,qo]),r("tr",null,[r("td",To,[r("div",Ao,[T(j,{size:"28px",color:"primary","text-color":"white",class:"q-mr-sm"},{default:$(()=>[So]),_:1}),Co])]),po,Mo,zo]),r("tr",null,[r("td",ko,[r("div",Lo,[T(j,{size:"28px",color:"primary","text-color":"white",class:"q-mr-sm"},{default:$(()=>[Ro]),_:1}),Bo])]),Qo,Po,Io])])]),_:1})]),_:1}),T(Jt,{elevated:"",style:{background:"#1e232d"}},{default:$(()=>[T(Ut,{modelValue:e.state.tab,"onUpdate:modelValue":i[0]||(i[0]=h=>e.state.tab=h),class:"text-white"},{default:$(()=>[T(de,{name:"mails",icon:"mail",label:"\u9996\u9875"}),T(de,{name:"alarms",icon:"alarm",label:"\u884C\u60C5"}),T(de,{name:"movies",icon:"movie",label:"\u4EA4\u6613"}),T(de,{name:"movies",icon:"movie",label:"\u6211\u7684"})]),_:1},8,["modelValue"])]),_:1})]),_:1})}var No=qt(jt,[["render",$o]]);export{No as default};
