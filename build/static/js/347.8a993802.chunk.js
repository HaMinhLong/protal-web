"use strict";(self.webpackChunkprotal_web=self.webpackChunkprotal_web||[]).push([[347],{62461:function(e,i,l){l.d(i,{Z:function(){return s}});var n=l(1413),t=l(14868),o=l(22293),r=[{value:"",label:"T\u1ea5t c\u1ea3"},{value:1,label:"K\xedch ho\u1ea1t"},{value:0,label:"B\u1ecb \u1ea9n"}],d=l(80184),s=function(e){var i=e.formik,l=e.setFieldValue,s=e.addOrEdit;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.Z,{fullWidth:!0,size:"small",disablePortal:!0,disableClearable:!0,id:"combo-box-demo",value:null===r||void 0===r?void 0:r.filter((function(e){var l;return e.value===(null===i||void 0===i||null===(l=i.values)||void 0===l?void 0:l.status)}))[0],options:s?r.filter((function(e){return""!==e.value})):r,renderInput:function(e){return(0,d.jsx)(o.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"Tr\u1ea1ng th\xe1i"}))},onChange:function(e,i){return l("status",null===i||void 0===i?void 0:i.value)}})})}},20958:function(e,i,l){var n=l(1413),t=l(70885),o=l(72791),r=l(14868),d=l(22293),s=l(47071),a=l(29388),u=l(93051),c=l(9478),v=l(80184);i.Z=function(e){var i=e.formik,l=e.setFieldValue,p=e.addOrEdit,x=e.readOnly,f=e.handleChange,m=(0,u.I0)(),h=(0,o.useState)([]),Z=(0,t.Z)(h,2),g=Z[0],b=Z[1],j=JSON.parse(localStorage.getItem("user")||"{}");(0,o.useEffect)((function(){(null===j||void 0===j?void 0:j.userGroupId)===c.hi?w():y()}),[]);var y=function(){m({type:"website/fetchLazyLoading",payload:{filter:JSON.stringify({status:1}),range:JSON.stringify([0,50])},callback:function(e){var i=(null===e||void 0===e?void 0:e.results).list,l=null===i||void 0===i?void 0:i.map((function(e){return{value:e.id,label:e.name}}));b(l)}})},w=function(){m({type:"websiteUser/fetch",payload:{id:j.id},callback:function(e){if(null!==e&&void 0!==e&&e.success){var i,l,n=e.results.list,t=null===n||void 0===n||null===(i=n[0])||void 0===i||null===(l=i.websites)||void 0===l?void 0:l.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));b(t)}}})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.Z,{fullWidth:!0,size:"small",disablePortal:!0,id:"combo-box-demo",value:(null===g||void 0===g?void 0:g.length)>0?null===g||void 0===g?void 0:g.filter((function(e){var l;return e.value===(null===i||void 0===i||null===(l=i.values)||void 0===l?void 0:l.websiteId)}))[0]:{value:"",label:""},readOnly:x,options:g,disableClearable:p,renderInput:function(e){var l;return(0,v.jsx)(d.Z,(0,n.Z)((0,n.Z)({},e),{},{name:"websiteId",label:p?(0,v.jsxs)("span",{className:"input-label",children:["Website ",(0,v.jsx)("span",{children:" *"})]}):"Website",error:i.touched.websiteId&&Boolean(null===(l=i.errors)||void 0===l?void 0:l.websiteId)}))},onChange:function(e,i){l("websiteId",null===i||void 0===i?void 0:i.value),f&&f()}}),i.touched.websiteId&&i.errors.websiteId&&(0,v.jsxs)(s.Z,{error:!0,className:"error-custom",children:[(0,v.jsx)(a.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),i.errors.websiteId]})]})}},58357:function(e,i,l){l.d(i,{Z:function(){return s}});var n=l(5289),t=l(65661),o=l(97123),r=l(36151),d=l(80184);function s(e){var i=e.name,l=e.open,s=e.handleClose;return(0,d.jsx)(n.Z,{open:l,onClose:function(){return s(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"item-delete-title","aria-describedby":"item-delete-description",children:l&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.Z,{id:"item-delete-title",children:(0,d.jsxs)("p",{children:[i," - B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?"]})})," ",(0,d.jsxs)(o.Z,{sx:{mr:2},children:[(0,d.jsx)(r.Z,{size:"small",onClick:function(){return s(!1)},variant:"outlined",children:"H\u1ee7y"}),(0,d.jsx)(r.Z,{variant:"contained",onClick:function(){return s(!0)},autoFocus:!0,size:"small",children:"X\xf3a"})]})]})})}},99198:function(e,i,l){var n=l(80184);i.Z=function(){return(0,n.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(214, 214, 214, 0.2)",zIndex:9999},children:(0,n.jsx)("div",{className:"lds-hourglass"})})}},15405:function(e,i,l){var n=l(1413),t=l(45987),o=l(72791),r=l(22293),d=l(47071),s=l(29388),a=l(80184),u=["name","required","label","formik","errors","size","maxLength","type","bgColor","handleChange","readOnly"];i.Z=function(e){var i,l,c,v=e.name,p=e.required,x=e.label,f=e.formik,m=e.errors,h=e.size,Z=e.maxLength,g=e.type,b=e.bgColor,j=e.handleChange,y=e.readOnly,w=(0,t.Z)(e,u),C=(0,o.useMemo)((function(){var e,i,l,t,o,u;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,(0,n.Z)((0,n.Z)({},w),{},{sx:{"& input":{background:b||"#fff"}},label:p?(0,a.jsxs)("span",{className:"input-label",children:["".concat(x),(0,a.jsx)("span",{children:" *"})]}):x,type:g||"text",fullWidth:!0,id:v,name:v,size:h||"small",value:null===f||void 0===f||null===(e=f.values)||void 0===e?void 0:e[v],onChange:function(e){Z&&e.target.value.length>Z&&(e.target.value=e.target.value.slice(0,Z)),null===f||void 0===f||f.setFieldTouched(v,!0),null===f||void 0===f||f.handleChange(e),j&&j(e.target.value)},error:(null===f||void 0===f||null===(i=f.touched)||void 0===i?void 0:i[v])&&Boolean(null===f||void 0===f||null===(l=f.errors)||void 0===l?void 0:l[v])||Boolean(null===m||void 0===m?void 0:m[v]),InputProps:{readOnly:y}})),((null===f||void 0===f||null===(t=f.touched)||void 0===t?void 0:t[v])&&(null===f||void 0===f||null===(o=f.errors)||void 0===o?void 0:o[v])||(null===m||void 0===m?void 0:m[v]))&&(0,a.jsxs)(d.Z,{error:!0,className:"error-custom",children:[(0,a.jsx)(s.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),(null===f||void 0===f||null===(u=f.errors)||void 0===u?void 0:u[v])||(null===m||void 0===m?void 0:m[v])]})]})}),[null===f||void 0===f||null===(i=f.values)||void 0===i?void 0:i[v],null===f||void 0===f||null===(l=f.touched)||void 0===l?void 0:l[v],null===f||void 0===f||null===(c=f.errors)||void 0===c?void 0:c[v],null===m||void 0===m?void 0:m[v],p,x,g]);return(0,a.jsx)(a.Fragment,{children:C})}},99347:function(e,i,l){l.r(i),l.d(i,{default:function(){return M}});var n=l(1413),t=l(70885),o=l(72791),r=l(64554),d=l(20890),s=l(15287),a=l(27785),u=l(94667),c=l(93051),v=l(17940),p=l(32004),x=l(39587),f=l(24240),m=l(22402),h=l(29532),Z=l(13967),g=l(95193),b=l(61889),j=l(36151),y=l(55705),w=l(5403),C=l(42419),I=l(62461),_=l(14868),k=l(22293),S=l(80184),O=[{value:1,label:"Menu Top"},{value:2,label:"Menu Bottom"}],V=function(e){var i,l=e.formik,t=e.setFieldValue,r=e.addOrEdit;return(0,o.useMemo)((function(){return(0,S.jsx)(_.Z,{fullWidth:!0,size:"small",disablePortal:!0,disableClearable:!0,id:"combo-box-demo",value:null===O||void 0===O?void 0:O.find((function(e){var i;return e.value===((null===l||void 0===l||null===(i=l.values)||void 0===i?void 0:i.location)||1)})),options:r?O.filter((function(e){return""!==e.value})):O,renderInput:function(e){return(0,S.jsx)(k.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"V\u1ecb tr\xed menu"}))},onChange:function(e,i){return t("location",null===i||void 0===i?void 0:i.value)}})}),[r,null===l||void 0===l||null===(i=l.values)||void 0===i?void 0:i.location])},N=l(20958),T=function(e){var i,l,n,t=e.selectedCategory,o=e.setSelectedCategory,r=e.setVisibleDrawer,d=e.setLoading,s=e.setIsAddNew,a=(0,c.I0)(),u=(0,Z.Z)(),x=(0,g.Z)(u.breakpoints.down("sm")),f=(0,c.v9)(v.ed),m=(0,y.TA)({enableReinitialize:!0,initialValues:{websiteId:(null===f||void 0===f||null===(i=f.filter)||void 0===i?void 0:i.websiteId)||"",location:(null===f||void 0===f||null===(l=f.filter)||void 0===l?void 0:l.location)||1,status:(null===f||void 0===f||null===(n=f.filter)||void 0===n?void 0:n.status)||""},onSubmit:function(e){h(e)}}),h=function(e){if(d(!0),null===e||void 0===e||!e.websiteId||null===e||void 0===e||!e.location)return a((0,v.a1)({})),void d(!1);var i={websiteId:null===e||void 0===e?void 0:e.websiteId,location:null===e||void 0===e?void 0:e.location,status:"".concat(null===e||void 0===e?void 0:e.status)};null!==e&&void 0!==e&&e.status||delete i.status,""===(null===e||void 0===e?void 0:e.websiteId)&&delete i.websiteId,""===(null===e||void 0===e?void 0:e.location)&&delete i.location;var l={filter:JSON.stringify(i),range:JSON.stringify([0,1e3]),attributes:"id,text,droppable,parent,icon,url,position,websiteId,status,createdAt"};a((0,v.hX)(e)),a({type:"menuWebsite/fetch",payload:l,callback:function(e){d(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,p.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,S.jsx)("form",{onSubmit:m.handleSubmit,children:(0,S.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(b.ZP,{item:!0,xs:12,md:12,lg:12,xl:8,children:(0,S.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(b.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(N.Z,{formik:m,setFieldValue:m.setFieldValue,addOrEdit:!1})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(V,{formik:m,setFieldValue:m.setFieldValue,addOrEdit:!1})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(I.Z,{addOrEdit:!1,formik:m,setFieldValue:m.setFieldValue})})]})}),(0,S.jsxs)(b.ZP,{item:!0,xs:12,md:12,lg:12,xl:4,sx:{display:"flex",justifyContent:"flex-end",flexWrap:"wrap"},children:[(0,S.jsx)(j.Z,{fullWidth:x,variant:"contained",endIcon:(0,S.jsx)(w.Z,{}),type:"submit",children:"T\xecm ki\u1ebfm"}),(0,S.jsx)(j.Z,{fullWidth:x,variant:"outlined",color:"success",endIcon:(0,S.jsx)(C.Z,{}),sx:{ml:x?0:2,mt:x?1:0},onClick:function(){r(!0),s(!0)},disabled:!t,children:"Th\xeam m\u1edbi"}),(0,S.jsx)(j.Z,{fullWidth:x,variant:"outlined",color:"success",endIcon:(0,S.jsx)(C.Z,{}),sx:{ml:x?0:2,mt:x?1:0},onClick:function(){r(!0),o(""),s(!0)},children:"Th\xeam m\u1edbi Root"})]})]})})},F=l(73974),P=l(47924),A=l(96051),z=l(53329),W=l(38926),L=l(15405),D=l(99198),E=l(68418),R=function(e){var i=e.visible,l=e.closeDrawer,s=e.dataEdit,a=e.isAddNew,u=e.getList,v=(0,c.I0)(),x=(0,Z.Z)(),f=(0,g.Z)(x.breakpoints.down("md")),m=(0,o.useState)(!1),h=(0,t.Z)(m,2),w=h[0],C=h[1],_=(0,o.useState)({}),k=(0,t.Z)(_,2),O=k[0],T=k[1],R=(0,o.useState)({}),M=(0,t.Z)(R,2),q=M[0],B=M[1];(0,o.useEffect)((function(){i&&(null!==s&&void 0!==s&&s.id?(C(!0),v({type:"menuWebsite/getOne",payload:{id:null===s||void 0===s?void 0:s.id},callback:function(e){if(C(!1),!0===(null===e||void 0===e?void 0:e.success)){var i=e.results.list;B(i)}else!1===(null===e||void 0===e?void 0:e.success)&&(0,p.Z)("error",null===e||void 0===e?void 0:e.message)}})):B({}))}),[i]);var J=A.Ry().shape({text:A.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp t\xean menu"),url:A.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp URL"),icon:A.Z_().trim().max(254),location:A.Z_().required("Vui l\xf2ng ch\u1ecdn v\u1ecb tr\xed menu"),status:A.Z_().trim().required("Vui l\xf2ng nh\u1eadp tr\u1ea1ng th\xe1i"),websiteId:A.Z_().required("Vui l\xf2ng ch\u1ecdn website")}),U=(0,y.TA)({enableReinitialize:!0,initialValues:{text:!a&&null!==q&&void 0!==q&&q.text?null===q||void 0===q?void 0:q.text:"",url:!a&&null!==q&&void 0!==q&&q.url?null===q||void 0===q?void 0:q.url:"",icon:!a&&null!==q&&void 0!==q&&q.icon?null===q||void 0===q?void 0:q.icon:"",position:a?1:null===q||void 0===q?void 0:q.position,location:a?1:null===q||void 0===q?void 0:q.location,websiteId:!a&&null!==q&&void 0!==q&&q.websiteId?null===q||void 0===q?void 0:q.websiteId:"",parent:a?(null===s||void 0===s?void 0:s.id)||0:null===q||void 0===q?void 0:q.parent,droppable:!0,categoryId:null,articleId:null,status:0===(null===q||void 0===q?void 0:q.status)?0:1},validationSchema:J,onSubmit:function(e){X(e)}}),X=function(e){var i,l,t,o;C(!0);var r=(0,n.Z)((0,n.Z)({},e),{},{text:null===e||void 0===e||null===(i=e.text)||void 0===i?void 0:i.trim(),textOld:null===q||void 0===q||null===(l=q.text)||void 0===l?void 0:l.trim(),url:null===e||void 0===e||null===(t=e.url)||void 0===t?void 0:t.trim(),icon:null===e||void 0===e||null===(o=e.icon)||void 0===o?void 0:o.trim()});null!==q&&void 0!==q&&q.id&&!a?v({type:"menuWebsite/update",payload:{id:null===q||void 0===q?void 0:q.id,params:(0,n.Z)({},r)},callback:function(e){null!==e&&void 0!==e&&e.success?((0,p.Z)("success",null===e||void 0===e?void 0:e.message),u(),H()):(T(e.error),(0,p.Z)("error",e.message)),C(!1)}}):v({type:"menuWebsite/add",payload:r,callback:function(e){C(!1),null!==e&&void 0!==e&&e.success?((0,p.Z)("success",null===e||void 0===e?void 0:e.message),u(),H()):(T(e.error),(0,p.Z)("error",e.message))}})},H=function(){l(),U.resetForm(),U.setTouched({},!1),T({})};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(F.ZP,{anchor:"right",open:i,onClose:H,children:[(0,S.jsxs)(r.Z,{sx:{width:f?"100%":"400px",p:2},children:[(0,S.jsxs)(d.Z,{variant:"h4",sx:{mb:3},children:[null!==q&&void 0!==q&&q.id&&!a?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===q||void 0===q?void 0:q.text):"Th\xeam m\u1edbi menu website",(0,S.jsx)(P.Z,{sx:{mt:1}})]}),(0,S.jsxs)("form",{onSubmit:U.handleSubmit,children:[(0,S.jsxs)(b.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(L.Z,{name:"text",formik:U,errors:O,label:"T\xean menu",handleChange:function(e){!function(e){var i,l,n=(0,E.CQ)(e),t=null===n||void 0===n||null===(i=n.split(" "))||void 0===i||null===(l=i.join("-"))||void 0===l?void 0:l.toLowerCase();U.setFieldValue("url","/".concat(t))}(e)},required:!0})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(L.Z,{name:"url",formik:U,errors:O,label:"URL",required:!0})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(L.Z,{name:"icon",formik:U,errors:O,label:"Icon"})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(N.Z,{formik:U,setFieldValue:U.setFieldValue,addOrEdit:!0})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(V,{formik:U,setFieldValue:U.setFieldValue,addOrEdit:!0})}),(0,S.jsx)(b.ZP,{item:!0,xs:12,children:(0,S.jsx)(I.Z,{addOrEdit:!0,formik:U,setFieldValue:U.setFieldValue})})]}),(0,S.jsxs)(b.ZP,{item:!0,xs:12,sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:[(0,S.jsx)(j.Z,{onClick:function(){return H()},size:"small",variant:"outlined",sx:{mr:"10px"},type:"submit",endIcon:(0,S.jsx)(W.Z,{}),children:"H\u1ee7y"}),(0,S.jsx)(j.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,S.jsx)(z.Z,{}),children:"L\u01b0u l\u1ea1i"})]})]})]}),w&&(0,S.jsx)(D.Z,{})]})})},M=function(){var e=(0,c.I0)(),i=(0,c.v9)(v.ed),l=i.data.list,Z=(0,o.useState)([]),g=(0,t.Z)(Z,2),b=g[0],j=g[1],y=(0,o.useState)(""),w=(0,t.Z)(y,2),C=w[0],I=w[1],_=(0,o.useState)(!1),k=(0,t.Z)(_,2),O=k[0],V=k[1],N=(0,o.useState)(!1),F=(0,t.Z)(N,2),P=F[0],A=F[1],z=(0,o.useState)(!1),W=(0,t.Z)(z,2),L=W[0],E=W[1];(0,o.useEffect)((function(){j(l)}),[l]);var M=function(){V(!0);var l=i.query,t=i.filter,o={filter:JSON.stringify({}),range:JSON.stringify([0,1e3]),attributes:"id,text,droppable,parent,icon,url,position,websiteId,status,createdAt"};null!==l&&void 0!==l&&l.filter&&(o=(0,n.Z)((0,n.Z)({},o),{},{filter:null===l||void 0===l?void 0:l.filter})),null!==l&&void 0!==l&&l.range&&(o=(0,n.Z)((0,n.Z)({},o),{},{range:null===l||void 0===l?void 0:l.range})),e((0,v.hX)(t)),e({type:"menuWebsite/fetch",payload:o,callback:function(e){V(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,p.Z)("error",null===e||void 0===e?void 0:e.message)}})},q=(0,o.useRef)(null),B=function(e,i){for(var l=i.dragSourceId,t=i.dropTargetId,o={},r=0,d=0;d<(null===e||void 0===e?void 0:e.length);d+=1){var s=e[d];if(t===(null===s||void 0===s?void 0:s.parent)&&(r+=1,l===(null===s||void 0===s?void 0:s.id))){o=(0,n.Z)((0,n.Z)({},s),{},{position:r});break}}J(o),j(e)},J=function(i){e({type:"menuWebsite/update",payload:{id:null===i||void 0===i?void 0:i.id,params:(0,n.Z)((0,n.Z)({},i),{},{textOld:null===i||void 0===i?void 0:i.text})},callback:function(e){null!==e&&void 0!==e&&e.success?M():(0,p.Z)("error",e.message),V(!1)}})},U=(0,o.useMemo)((function(){return(0,S.jsx)("div",{className:h.Z.app,children:(0,S.jsx)(s.W,{backend:a.Am,options:(0,a.bK)(),children:(0,S.jsx)(a.mp,{tree:b,ref:q,rootId:0,sort:!1,insertDroppableFirst:!1,initialOpen:!0,render:function(e,i){var l=i.depth,n=i.isOpen,t=i.onToggle;return(0,S.jsx)(x.Z,{treeData:b,node:e,depth:l,isOpen:n,onToggle:t,selectedCategory:C,setSelectedCategory:I,setVisibleDrawer:A,setIsAddNew:E,getList:M,isMenu:!0})},dragPreviewRender:function(e){return(0,S.jsx)(f.Z,{monitorProps:e})},onDrop:B,canDrop:function(e,i){var l=i.dragSource,n=i.dropTargetId;return(null===l||void 0===l?void 0:l.id)!==n},dropTargetOffset:5,placeholderRender:function(e,i){var l=i.depth;return(0,S.jsx)(m.Z,{depth:l})},classes:{root:h.Z.treeRoot,draggingSource:h.Z.draggingSource,dropTarget:h.Z.dropTarget,placeholder:h.Z.placeholderContainer}})})})}),[b,C,null===q||void 0===q?void 0:q.current]);return(0,S.jsxs)(u.Z,{title:(0,S.jsx)(T,{setIsAddNew:E,selectedCategory:C,setSelectedCategory:I,setVisibleDrawer:A,setLoading:V}),content:!1,children:[(0,S.jsxs)(r.Z,{sx:{padding:2,position:"relative"},children:[null!==b&&void 0!==b&&b.length?U:(0,S.jsx)(d.Z,{textAlign:"center",children:"Vui l\xf2ng ch\u1ecdn website v\xe0 v\u1ecb tr\xed website"}),O&&(0,S.jsx)(D.Z,{})]}),(0,S.jsx)(R,{isAddNew:L,visible:P,closeDrawer:function(){return A(!1)},dataEdit:{id:C},getList:M})]})}},24240:function(e,i,l){l.d(i,{Z:function(){return a}});var n=l(72791),t=l(43463),o="CustomDragPreview_root__f4cUx",r="CustomDragPreview_icon__TxBwT",d="CustomDragPreview_label__sVqcp",s=l(80184),a=function(e){var i=e.monitorProps;return(0,n.useMemo)((function(){var e,l=i.item;return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("div",{className:r,children:(0,s.jsx)(t.Z,{droppable:l.droppable,fileType:null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.fileType})}),(0,s.jsx)("div",{className:d,children:l.text})]})}),[i])}},39587:function(e,i,l){l.d(i,{Z:function(){return C}});var n=l(1413),t=l(70885),o=l(72791),r=l(64554),d=l(20890),s=l(36151),a=l(93385),u=l(27785),c=l(39568),v=l(41286),p=l(27247),x=l(43463),f="CustomNode_root__tCF70",m="CustomNode_expandIconWrapper__T-ex1",h="CustomNode_isOpen__4blbH",Z="CustomNode_labelGridItem__DOMIv",g=l(63684),b=l(93051),j=l(32004),y=l(58357),w=l(80184),C=function(e){var i=e.node,l=e.depth,C=e.isOpen,I=e.onToggle,_=e.selectedCategory,k=e.setSelectedCategory,S=e.setVisibleDrawer,O=e.setIsAddNew,V=e.treeData,N=e.getList,T=e.isMenu,F=(0,b.I0)(),P=i.id,A=i.droppable,z=i.data,W=(0,o.useState)(!1),L=(0,t.Z)(W,2),D=L[0],E=L[1],R=(0,o.useState)({}),M=(0,t.Z)(R,2),q=M[0],B=M[1],J=(0,u.t0)(P,C,I),U=function(e){return!!V.find((function(i){return(null===i||void 0===i?void 0:i.parent)===e}))},X={display:"inline-block",p:"4px 16px"},H=function(e){E(!1),e&&F({type:T?"menuWebsite/delete":"category/delete",payload:{id:_},callback:function(e){!0===(null===e||void 0===e?void 0:e.success)?((0,j.Z)("success",null===e||void 0===e?void 0:e.message),k(""),N()):!1===(null===e||void 0===e?void 0:e.success)&&(0,j.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,o.useMemo)((function(){var e;return(0,w.jsxs)(r.Z,(0,n.Z)((0,n.Z)({className:"tree-node ".concat(f)},J),{},{onClick:function(){k(P)},sx:{borderBottom:"1.5px solid ".concat(_===P?"#2196f3":"#a0a0a0"),p:"2px 10px 0px",cursor:"pointer"},children:[(0,w.jsx)("div",{className:"".concat(m," ").concat(C?h:""),children:U(null===i||void 0===i?void 0:i.id)&&(0,w.jsx)("div",{onClick:function(e){return function(e){e.stopPropagation(),I(i.id)}(e)},style:{display:"flex",alignItems:"center"},children:(0,w.jsx)(a.Z,{sx:{width:"16px",height:"16px"}})})}),(0,w.jsx)("div",{children:U(null===i||void 0===i?void 0:i.id)?(0,w.jsx)(x.Z,{droppable:A,fileType:null===z||void 0===z?void 0:z.fileType}):(0,w.jsx)(c.Z,{color:"primary"})}),(0,w.jsxs)(r.Z,{className:Z,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,w.jsxs)(r.Z,{children:[(0,w.jsx)(d.Z,{sx:(0,n.Z)({},X),color:"primary",children:null===i||void 0===i?void 0:i.text}),(0,w.jsx)(d.Z,{sx:X,children:null===i||void 0===i?void 0:i.url}),(0,w.jsx)(d.Z,{sx:X,children:null===i||void 0===i||null===(e=i.website)||void 0===e?void 0:e.name}),(0,w.jsx)(d.Z,{sx:X,children:null!==i&&void 0!==i&&i.status?(0,w.jsx)(g.Z,{label:"Active",size:"small",chipColor:"success"}):(0,w.jsx)(g.Z,{label:"Inactive",size:"small",chipColor:"error"})})]}),(0,w.jsxs)(r.Z,{sx:(0,n.Z)((0,n.Z)({},X),{},{width:"200px"}),children:[(0,w.jsx)(s.Z,{variant:"outlined",endIcon:(0,w.jsx)(v.Z,{}),size:"small",onClick:function(){S(!0),k(null===i||void 0===i?void 0:i.id),O(!1)},children:"S\u1eeda"}),(0,w.jsx)(s.Z,{variant:"outlined",color:"error",endIcon:(0,w.jsx)(p.Z,{}),sx:{ml:1},size:"small",onClick:function(){E(!0),k(null===i||void 0===i?void 0:i.id),B(i)},children:"X\xf3a"})]})]}),D&&(0,w.jsx)(y.Z,{name:null===q||void 0===q?void 0:q.text,open:D,handleClose:H})]}))}),[i,l,C,_,q,D,V])}},22402:function(e,i,l){l.d(i,{Z:function(){return r}});var n=l(72791),t="Placeholder_root__ipR7y",o=l(80184),r=function(e){var i=e.depth;return(0,n.useMemo)((function(){var e=24*i;return(0,o.jsx)("div",{className:t,style:{left:e}})}),[i])}},43463:function(e,i,l){var n=l(53717),t=l(95764),o=l(41992),r=l(39568),d=l(80184);i.Z=function(e){var i=e.droppable,l=e.fileType;if(i)return(0,d.jsx)(n.Z,{color:"primary"});switch(l){case"image":return(0,d.jsx)(t.Z,{});case"csv":return(0,d.jsx)(o.Z,{});case"text":return(0,d.jsx)(r.Z,{});default:return null}}},68418:function(e,i,l){l.d(i,{CQ:function(){return t},T4:function(){return n}});var n=function(e){return null===e||void 0===e?void 0:e.toLocaleString("vi",{style:"currency",currency:"VND"})},t=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"")).replace(/\u02C6|\u0306|\u031B/g,"")).replace(/ + /g," ")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")}},42419:function(e,i,l){var n=l(64836);i.Z=void 0;var t=n(l(45649)),o=l(80184),r=(0,t.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");i.Z=r},29532:function(e,i){i.Z={app:"App_app__OLVFg",treeRoot:"App_treeRoot__MFRQR",draggingSource:"App_draggingSource__A8ks-",placeholderContainer:"App_placeholderContainer__LeAeL",dropTarget:"App_dropTarget__UqXd-"}}}]);
//# sourceMappingURL=347.8a993802.chunk.js.map