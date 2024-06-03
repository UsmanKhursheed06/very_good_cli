"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[817],{1310:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(512),i=n(5281),r=n(2802),a=n(8596),l=n(3692),o=n(5999),c=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.ZP)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.Z,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function p(e){let{children:t,active:n,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function g(){const e=(0,r.s1)(),t=(0,a.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},5501:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var s=n(7294),i=n(1944),r=n(2802),a=n(4996),l=n(512),o=n(3692),c=n(2263);const d=["zero","one","two","few","many","other"];function u(e){return d.filter((t=>e.includes(t)))}const m={locale:"en",pluralForms:u(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,c.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:u(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),m}}),[e])}function b(){const e=h();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}var x=n(3919),p=n(5999),g=n(2503);const v={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=n(5893);function j(e){let{href:t,children:n}=e;return(0,f.jsx)(o.Z,{href:t,className:(0,l.Z)("card padding--lg",v.cardContainer),children:n})}function N(e){let{href:t,icon:n,title:s,description:i}=e;return(0,f.jsxs)(j,{href:t,children:[(0,f.jsxs)(g.Z,{as:"h2",className:(0,l.Z)("text--truncate",v.cardTitle),title:s,children:[n," ",s]}),i&&(0,f.jsx)("p",{className:(0,l.Z)("text--truncate",v.cardDescription),title:i,children:i})]})}function Z(e){let{item:t}=e;const n=(0,r.LM)(t),s=function(){const{selectMessage:e}=b();return t=>e(t,(0,p.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,f.jsx)(N,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function L(e){let{item:t}=e;const n=(0,x.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return(0,f.jsx)(N,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,f.jsx)(L,{item:t});case"category":return(0,f.jsx)(Z,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function _(e){let{className:t}=e;const n=(0,r.jA)();return(0,f.jsx)(T,{items:n.items,className:t})}function T(e){const{items:t,className:n}=e;if(!t)return(0,f.jsx)(_,{...e});const s=(0,r.MN)(t);return(0,f.jsx)("section",{className:(0,l.Z)("row",n),children:s.map(((e,t)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(k,{item:e})},t)))})}var I=n(4966),y=n(3120),w=n(4364),C=n(1310);const M={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function P(e){let{categoryGeneratedIndex:t}=e;return(0,f.jsx)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.ZP)(t.image)})}function F(e){let{categoryGeneratedIndex:t}=e;const n=(0,r.jA)();return(0,f.jsxs)("div",{className:M.generatedIndexPage,children:[(0,f.jsx)(y.Z,{}),(0,f.jsx)(C.Z,{}),(0,f.jsx)(w.Z,{}),(0,f.jsxs)("header",{children:[(0,f.jsx)(g.Z,{as:"h1",className:M.title,children:t.title}),t.description&&(0,f.jsx)("p",{children:t.description})]}),(0,f.jsx)("article",{className:"margin-top--lg",children:(0,f.jsx)(T,{items:n.items,className:M.list})}),(0,f.jsx)("footer",{className:"margin-top--lg",children:(0,f.jsx)(I.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function V(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(P,{...e}),(0,f.jsx)(F,{...e})]})}},4966:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(5999),i=n(512),r=n(3692),a=n(5893);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,a.jsxs)(r.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(l,{...t,subLabel:(0,a.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(l,{...n,subLabel:(0,a.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(512),i=n(5999),r=n(5281),a=n(4477),l=n(5893);function o(e){let{className:t}=e;const n=(0,a.E)();return n.badge?(0,l.jsx)("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var s=n(512),i=n(2263),r=n(3692),a=n(5999),l=n(143),o=n(5281),c=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(r.Z,{to:n,onClick:s,children:(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(a),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.Jo)(a),p=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}}}]);