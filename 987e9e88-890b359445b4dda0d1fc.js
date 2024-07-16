"use strict";(self.webpackChunkexperience_platform_apis=self.webpackChunkexperience_platform_apis||[]).push([[5298],{18356:function(e,t,l){l.d(t,{i:function(){return I}});var n=l(54705),o=l(54506),i=l(88763),a=l(60480),r=l(46942),s=l.n(r),d=l(35413),c=l(71052),u=l(25013),p=l(88790),m=l(52359),f=l(68623),g=l(76944),h=l(3322),v=l(36002),w=l(73193),y=l(7256),b=l(94087),C=l(19243),O=l(45295),Y=l(32712),x=l(3823);function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function D(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach((function(t){(0,n.A)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const A=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var j={name:"14s3c4g",styles:"display:flex;gap:32px;width:100%;flex-direction:column"},k={name:"h8f25w",styles:"color:var(--spectrum-global-color-gray-800);display:inline-flex"},P={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"},N={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const I=e=>{var t,l;let{showCreateForm:n,setShowCreateForm:r,isCreateNewCredential:S,setIsCreateNewCredential:F,setIsPrevious:T,formData:z,setFormData:E}=e;const{getCredentialData:H}=(0,i.useContext)(x.A),L=H,{0:q,1:B}=(0,i.useState)(!1),{0:M,1:U}=(0,i.useState)(!1),{0:V,1:_}=(0,i.useState)({}),{0:R,1:X}=(0,i.useState)(""),{0:$,1:J}=(0,i.useState)(!1),{0:Z,1:W}=(0,i.useState)([]),{0:G,1:K}=(0,i.useState)(!1),{0:Q,1:ee}=(0,i.useState)(!1),{0:te,1:le}=(0,i.useState)(!1),{0:ne,1:oe}=(0,i.useState)(!1),{0:ie,1:ae}=(0,i.useState)(),{selectedOrganization:re,template:se,previousProjectDetail:de}=(0,i.useContext)(x.A),ce=null==L?void 0:L[I],ue=null==ce||null===(t=ce.children)||void 0===t?void 0:t.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp")))));(0,i.useEffect)((()=>{var e;null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser()?setTimeout((()=>{B(!1)}),1e3):B(!0)}),[null===(l=window.adobeIMS)||void 0===l?void 0:l.isSignedInUser()]),(0,i.useEffect)((()=>{n&&U(!1)}),[n]),(0,i.useEffect)((()=>{(()=>{const e={},t={label:"Language",selectOptions:[]},l={label:"products",productList:[]};null==ce||ce.children.forEach((n=>{let{type:i,props:a}=n;var r,s;i===f.o&&null!=a&&a.children&&(t.required=a.required||!1,(r=t.selectOptions).push.apply(r,(0,o.A)([].concat(a.children).map((e=>{let{props:{title:t,href:l}}=e;return{title:t,href:l}})))),E((e=>{var t,l;return D(D({},e),Array.isArray(a.children)?null:{Download:null===(t=a.children)||void 0===t||null===(l=t.props)||void 0===l?void 0:l.title})}))),i===O.lk&&null!=a&&a.children&&(s=l.productList).push.apply(s,(0,o.A)([].concat(a.children).map((e=>{let{props:{label:t,icon:l}}=e;return{label:t,icon:l}})))),e[i]=D(D({},a),{},{required:i===p.X||(null==a?void 0:a.required)})})),t.selectOptions.length&&(e[g.f]=t,1===t.selectOptions.length&&E((e=>{var l,n;return D(D({},e),{},{Download:null===(l=t.selectOptions[0])||void 0===l?void 0:l.title,zipUrl:null===(n=t.selectOptions[0])||void 0===n?void 0:n.href})}))),null!=l&&l.productList.length&&(e[O.Yt]=l);const n=!(null==de||!de.count);ee(!!n),W(e)})()}),[]),(0,i.useEffect)((()=>{const e=A.test(z.CredentialName),t=ce.children.some((e=>e.type===m.o));let l;t?z.AllowedOrigins&&(l=(0,c.$p)(z.AllowedOrigins)):l=!0,ae(l);const n=e&&(!t||l)&&!0===z.Agree;K(n)}),[z]);const pe=(e,t)=>{let l;if(l="Download"===t?e.title:"Downloads"===t||"Agree"===t?e.target.checked:e.target.value,E((e=>D(D({},e),{},{[t]:l}))),"Downloads"===t&&pe(null==ve?void 0:ve.selectOptions[0],"Download"),"Download"===t){var n;const e=null==Z||null===(n=Z[g.f])||void 0===n?void 0:n.selectOptions.find((e=>e.title===l));e&&E((t=>D(D({},t),{},{zipUrl:e.href})))}};(0,i.useEffect)((()=>{Q&&(T(!0),r(!0))}),[Q]);const me=null==Z?void 0:Z[u.D],fe=null==Z?void 0:Z[p.X],ge=null==Z?void 0:Z[m.o],he=null==Z?void 0:Z[f.o],ve=null==Z?void 0:Z[g.f],we=null==Z?void 0:Z[O.lk],ye=null==Z?void 0:Z[O.Yt],be=null==Z?void 0:Z[v.R];return(0,a.Y)(i.default.Fragment,null,n&&!q&&(0,a.Y)("div",{className:s()(null==ce?void 0:ce.className),css:N},(0,a.Y)("div",{css:(0,a.AH)("display:flex;flex-direction:column;gap:48px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",c.jd,") and (max-width: ",c.cp,"){padding:0;width:100%;}","")},(0,a.Y)("div",{css:P},(null==ce?void 0:ce.title)&&(0,a.Y)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==ce?void 0:ce.title),(null==ce?void 0:ce.paragraph)&&(0,a.Y)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==ce?void 0:ce.paragraph),(0,a.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:k,onClick:()=>le(!0)},"developer"===re.type?"You're creating this credential in your personal developer organization":(0,a.Y)(i.default.Fragment,null,"You're creating this credential in [",(0,a.Y)("b",null,null==re?void 0:re.name),"]."),(0,a.Y)(Y.y,{isShow:te,setIsShow:le})))),(0,a.Y)("div",{css:(0,a.AH)("display:flex;gap:35px;@media screen and (min-width: ",c.jd,") and (max-width: ",c.cp,"){flex-direction:column;padding-left:0;}","")},(0,a.Y)("div",{css:(0,a.AH)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",c.jd,") and (max-width: ",c.cp,"){width:100%;}","")},(0,a.Y)("div",{css:j},fe&&(0,a.Y)(p.X,{nameProps:fe,isFormValue:ue,formData:z,handleChange:pe}),ge&&(0,a.Y)(m.o,{originsProps:ge,isFormValue:ue,formData:z,handleChange:pe,isAllowedOriginsValid:ie}),he&&ve&&(0,a.Y)(f.o,{downloadsProp:he,type:"Downloads",formData:z,handleChange:pe}),z.Downloads&&ve&&(0,a.Y)(g.f,{downloadProp:ve,isFormValue:ue,handleChange:pe}),(0,a.Y)(O.lk,{products:we,product:ye}),be&&(0,a.Y)(v.R,{formData:z,adobeDeveloperConsole:be,handleChange:pe}),(0,a.Y)(w.e,{createCredential:async()=>{var e,t;const l=null===(e=window.adobeIMS)||void 0===e||null===(t=e.getTokenFromStorage())||void 0===t?void 0:t.token;l||console.log("User not logged in"),B(!0),r(!1);const n=se.apis.map((e=>({code:e.code,credentialType:e.credentialType,flowType:e.flowType,licenseConfigs:Array.isArray(e.licenseConfigs)&&e.licenseConfigs.length>0?[D(D({},e.licenseConfigs[0]),{},{op:"add"})]:[]}))),o={projectName:z.CredentialName,description:"created for get credential",metadata:{domain:z.AllowedOrigins},orgId:re.code,apis:n};try{var i,a,s;const e="/templates/install/"+se.id,t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"x-api-key":null===(i=window)||void 0===i||null===(a=i.adobeIMS)||void 0===a||null===(s=a.adobeIdData)||void 0===s?void 0:s.client_id,Accept:"application/json"},body:JSON.stringify(o)}),n=await(null==t?void 0:t.json());if(t.ok)_(n),J(!0),oe(!0),B(!1);else{const e=n.errors[0].message.match(/\((\{.*\})\)/)[1],t=JSON.parse(e);d=t.messages[0].message,B(!1),oe(!0),K(!1),X(d),r(!0),U(!0)}}catch(c){r(!0),B(!1),oe(!0),X(c.message),U(!0)}var d},isValid:G,setIsCreateNewCredential:F,isCreateNewCredential:S}))),me?(0,a.Y)(h.T,{sideContent:null==me?void 0:me.children,SideComp:u.D}):null)),ne&&(0,a.Y)(i.default.Fragment,null,(0,a.Y)(d.y,{customDisableFunction:oe,message:n&&!$?R:!M&&$&&"Your credentials were created successfully.",variant:M||n&&!$?"error":"success",disable:5e3})),q&&!$&&!M&&!n&&(0,a.Y)(b.R,{credentials:ce,isCreateCredential:!0,downloadStatus:z.Downloads}),M&&!n&&!$&&(0,a.Y)(C.T,{errorMessage:null==L?void 0:L[C.T]}),$&&!n&&(0,a.Y)(y.q,{response:V,formData:z,handleRestart:()=>{r(!0),J(!1),F(!0),ee(!0),E({})}}))}}}]);
//# sourceMappingURL=987e9e88-890b359445b4dda0d1fc.js.map