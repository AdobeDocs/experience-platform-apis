"use strict";(self.webpackChunkexperience_platform_apis=self.webpackChunkexperience_platform_apis||[]).push([[6760],{7256:function(e,s,a){a.d(s,{q:function(){return F}});var l=a(88763),o=a(60480),r=a(46942),t=a.n(r),n=a(18356),i=a(71052),c=a(71710),d=a.n(c),p=a(47009),m=a.n(p),u=a(4213),g=a(35413);var v={name:"1a50hjl",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;color:var(--spectrum-global-color-gray-800);text-decoration:underline;cursor:pointer;&:hover{color:var(--spectrum-global-color-gray-900);}"},y={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},f={name:"wwrf8h",styles:"display:flex;flex-direction:column;gap:8px;width:80%"},w={name:"zjik7",styles:"display:flex"},x={name:"1gznmyj",styles:"color:var(--spectrum-global-color-gray-800);margin:2px 0;&:hover{color:var(--spectrum-global-color-gray-900);}"},h={name:"17fjgey",styles:"width:fit-content;margin-top:10px"},b={name:"omfma2",styles:"position:absolute;bottom:25px;top:unset;white-space:nowrap"},Y={name:"17jxmzm",styles:"border:1px solid var(--spectrum-global-color-gray-400);border-radius:3px;padding:3px 6px"},k={name:"5uruvs",styles:"font-family:Source Code Pro,Monaco,monospace;white-space:normal;overflow-wrap:anywhere;max-width:300px"},C={name:"1llzu2n",styles:"display:flex;align-items:center;gap:24px"},z={name:"3w0yoi",styles:"display:flex;flex-direction:column;gap:8px"},N={name:"43cxha",styles:"display:flex;flex-direction:column;gap:32px"},S={name:"znjkts",styles:"margin:0;border:none;border-top:1px solid #D0D0D0!important"},j={name:"zwbqmk",styles:"display:flex;gap:20px;align-items:center"},A={name:"1xr24iu",styles:"padding:5%;display:flex;flex-direction:column;gap:24px;border:1px solid var(--spectrum-global-color-gray-200);border-radius:8px"},B={name:"1swkvfk",styles:"padding:0;font-family:'adobe-clean';border:none;background:transparent;margin-left:10px;cursor:pointer;text-decoration:underline;color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},H={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},D={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},P={name:"ti75j2",styles:"margin:0"},M={name:"a29rn1",styles:"display:flex;text-align:center;align-items:center;gap:10px"},I={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},T={name:"1xg43bt",styles:"display:flex;gap:20px;align-items:baseline"},_={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"};const F=e=>{var s,a;let{credentialProps:r,formData:c,setShowCreateForm:p,setShowCredential:O,organizationName:L,response:R,orgID:E}=e;const{0:U,1:q}=(0,l.useState)(null),{0:J,1:K}=(0,l.useState)({}),{0:G,1:X}=(0,l.useState)(),{0:Q,1:V}=(0,l.useState)(""),W=[{key:"API Key",value:R.apiKey},{key:"Allowed domains",value:c.AllowedOrigins},{key:"Organization",value:L}];(0,l.useEffect)((()=>{var e;const s=null===(e=localStorage)||void 0===e?void 0:e.getItem("OrgInfo");s?K(JSON.parse(s)):(0,i.SA)(K),c.Downloads&&se("/console/api/organizations/"+E+"/projects/"+R.projectId+"/workspaces/"+R.workspaceId+"/download",c.Download,c.zipUrl)}),[]);const Z=null==r?void 0:r[F],$="/console/projects/"+(null==J?void 0:J.id)+"/"+R.projectId+"/overview",ee=()=>{q(null)},se=async function(e,s,a){void 0===s&&(s="download");try{var l,o,r,t,n;const i=await m().getBinaryContent(a),c=new Uint8Array(i).buffer,p=new(d());X(!0),await p.loadAsync(c);const g={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===(l=window.adobeIMS)||void 0===l||null===(o=l.getTokenFromStorage())||void 0===o?void 0:o.token),"x-api-key":null===(r=window)||void 0===r||null===(t=r.adobeIMS)||void 0===t||null===(n=t.adobeIdData)||void 0===n?void 0:n.client_id}},v=await fetch(e,g);if(200===v.status){const e=await v.json();p.file("credential.json",JSON.stringify(e));const a=await p.generateAsync({type:"blob"});(0,u.saveAs)(a,s+".zip")}else console.error("Failed to fetch additional data. Response status:",v.status)}catch(i){console.error("An error occurred:",i)}finally{X(!1)}};return(0,o.Y)("div",{className:t()(null==Z?void 0:Z.className),css:_},(0,o.Y)("div",{className:t()(null==Z?void 0:Z.className),css:(0,o.AH)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){padding:0;width:100%;}","")},(0,o.Y)("div",{css:T},(null==Z?void 0:Z.title)&&(0,o.Y)("h2",{className:"spectrum-Heading spectrum-Heading--sizeL",css:I},null==Z?void 0:Z.title),G&&(0,o.Y)("div",{css:M},(0,o.Y)("div",{class:"spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-track"}),(0,o.Y)("div",{class:"spectrum-ProgressCircle-fills"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-fillMask1"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-fillSubMask1"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-fill"}))),(0,o.Y)("div",{class:"spectrum-ProgressCircle-fillMask2"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-fillSubMask2"},(0,o.Y)("div",{class:"spectrum-ProgressCircle-fill"}))))),(0,o.Y)("p",{css:P},"Downloading..."))),c.Downloads&&(null==Z?void 0:Z.paragraph)&&(0,o.Y)("p",{className:"spectrum-Body spectrum-Body--sizeL",css:D},null==Z?void 0:Z.paragraph),c.Downloads&&(0,o.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:H},"Download not working?",(0,o.Y)("button",{css:B,onClick:()=>se("/console/api/organizations/"+(null==J?void 0:J.id)+"/projects/"+R.projectId+"/workspaces/"+R.workspaceId+"/download",c.Download,c.zipUrl)},"Restart download"))),(0,o.Y)("div",{css:(0,o.AH)("display:flex;gap:35px;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){flex-direction:column;padding-left:0;}","")},(0,o.Y)("div",{css:(0,o.AH)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){width:100%;}","")},(0,o.Y)("div",{css:(0,o.AH)("background:white;border-radius:8px;width:90%;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){width:100%;}","")},(0,o.Y)("div",{css:A},(0,o.Y)("div",{css:j},(0,o.Y)(i.RY,null),(0,o.Y)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM"},c.CredentialName)),(0,o.Y)("hr",{css:S}),(0,o.Y)("div",{css:N},null==W?void 0:W.map(((e,s)=>{let{key:a,value:r}=e;return(0,o.Y)(l.default.Fragment,null,r&&(0,o.Y)(l.default.Fragment,null,(0,o.Y)("div",{css:z},(0,o.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS"},a),(0,o.Y)("div",{css:C},(0,o.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:k},r),(0,o.Y)("div",{css:(0,o.AH)("position:relative;display:","Organization"===a?"none":"block",";","")},(0,o.Y)("button",{className:"spectrum-ActionButton spectrum-ActionButton--sizeM",onMouseEnter:()=>q(s),onMouseLeave:ee,onClick:()=>(e=>{navigator.clipboard.writeText(e),V(!0)})(r),css:Y},(0,o.Y)("span",{className:"spectrum-ActionButton-label"},(0,o.Y)(i.Td,null))),U===s&&(0,o.Y)("span",{className:"spectrum-Tooltip spectrum-Tooltip--top is-open",css:b},(0,o.Y)("span",{className:"spectrum-Tooltip-label"},"Copy"),(0,o.Y)("span",{className:"spectrum-Tooltip-tip"})))))))})),(0,o.Y)("div",{css:(0,o.AH)("display:flex;gap:24px;align-items:end;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){flex-direction:column;align-items:start;}","")},(0,o.Y)("a",{href:null==Z?void 0:Z.nextStepsHref,target:"_blank",rel:"noreferrer"},(0,o.Y)("button",{className:"spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM",css:h},(0,o.Y)("span",{className:"spectrum-Button-label"},null==Z?void 0:Z.nextStepsLabel))),(0,o.Y)("a",{href:$,target:"_blank",rel:"noreferrer",css:x},(0,o.Y)("div",{css:w},(0,o.Y)("div",null,null==Z?void 0:Z.developerConsoleManage),(0,o.Y)("div",{css:(0,o.AH)("margin-left:10px;@media screen and (min-width:",i.jd,") and (max-width:",i.cp,"){display:none;}","")},(0,o.Y)(i.Lg,null)))))))),(0,o.Y)("div",{css:f},(0,o.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:y},"Need another credential"),(0,o.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS"},(0,o.Y)("button",{onClick:()=>{p(!0),O(!1)},css:v},"Restart and create a new credential")))),null!=Z&&Z.children?(0,o.Y)(n.T4,{sideContent:null==Z||null===(s=Z.children)||void 0===s||null===(a=s.props)||void 0===a?void 0:a.children}):null),Q&&(0,o.Y)(g.y,{variant:"success",message:"Copied to clipboard",disable:1e3,customDisableFunction:V}))}}}]);
//# sourceMappingURL=862bb76f-1435db28244d14f1f403.js.map