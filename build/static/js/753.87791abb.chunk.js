"use strict";(self.webpackChunkprotal_web=self.webpackChunkprotal_web||[]).push([[753],{62461:function(e,i,n){n.d(i,{Z:function(){return a}});var l=n(1413),t=n(14868),o=n(22293),d=[{value:"",label:"T\u1ea5t c\u1ea3"},{value:1,label:"K\xedch ho\u1ea1t"},{value:0,label:"B\u1ecb \u1ea9n"}],s=n(80184),a=function(e){var i=e.formik,n=e.setFieldValue,a=e.addOrEdit;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.Z,{fullWidth:!0,size:"small",disablePortal:!0,disableClearable:!0,id:"combo-box-demo",value:null===d||void 0===d?void 0:d.filter((function(e){var n;return e.value===(null===i||void 0===i||null===(n=i.values)||void 0===n?void 0:n.status)}))[0],options:a?d.filter((function(e){return""!==e.value})):d,renderInput:function(e){return(0,s.jsx)(o.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Tr\u1ea1ng th\xe1i"}))},onChange:function(e,i){return n("status",null===i||void 0===i?void 0:i.value)}})})}},20958:function(e,i,n){var l=n(1413),t=n(70885),o=n(72791),d=n(14868),s=n(22293),a=n(47071),r=n(29388),u=n(93051),c=n(9478),v=n(80184);i.Z=function(e){var i=e.formik,n=e.setFieldValue,m=e.addOrEdit,h=e.readOnly,x=e.handleChange,f=(0,u.I0)(),g=(0,o.useState)([]),Z=(0,t.Z)(g,2),p=Z[0],b=Z[1],j=JSON.parse(localStorage.getItem("user")||"{}");(0,o.useEffect)((function(){(null===j||void 0===j?void 0:j.userGroupId)===c.hi?y():w()}),[]);var w=function(){f({type:"website/fetchLazyLoading",payload:{filter:JSON.stringify({status:1}),range:JSON.stringify([0,50])},callback:function(e){var i=(null===e||void 0===e?void 0:e.results).list,n=null===i||void 0===i?void 0:i.map((function(e){return{value:e.id,label:e.name}}));b(n)}})},y=function(){f({type:"websiteUser/fetch",payload:{id:j.id},callback:function(e){if(null!==e&&void 0!==e&&e.success){var i,n,l=e.results.list,t=null===l||void 0===l||null===(i=l[0])||void 0===i||null===(n=i.websites)||void 0===n?void 0:n.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));b(t)}}})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{fullWidth:!0,size:"small",disablePortal:!0,id:"combo-box-demo",value:(null===p||void 0===p?void 0:p.length)>0?null===p||void 0===p?void 0:p.filter((function(e){var n;return e.value===(null===i||void 0===i||null===(n=i.values)||void 0===n?void 0:n.websiteId)}))[0]:{value:"",label:""},readOnly:h,options:p,disableClearable:m,renderInput:function(e){var n;return(0,v.jsx)(s.Z,(0,l.Z)((0,l.Z)({},e),{},{name:"websiteId",label:m?(0,v.jsxs)("span",{className:"input-label",children:["Website ",(0,v.jsx)("span",{children:" *"})]}):"Website",error:i.touched.websiteId&&Boolean(null===(n=i.errors)||void 0===n?void 0:n.websiteId)}))},onChange:function(e,i){n("websiteId",null===i||void 0===i?void 0:i.value),x&&x()}}),i.touched.websiteId&&i.errors.websiteId&&(0,v.jsxs)(a.Z,{error:!0,className:"error-custom",children:[(0,v.jsx)(r.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),i.errors.websiteId]})]})}},58357:function(e,i,n){n.d(i,{Z:function(){return a}});var l=n(5289),t=n(65661),o=n(97123),d=n(36151),s=n(80184);function a(e){var i=e.name,n=e.open,a=e.handleClose;return(0,s.jsx)(l.Z,{open:n,onClose:function(){return a(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"item-delete-title","aria-describedby":"item-delete-description",children:n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.Z,{id:"item-delete-title",children:(0,s.jsxs)("p",{children:[i," - B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?"]})})," ",(0,s.jsxs)(o.Z,{sx:{mr:2},children:[(0,s.jsx)(d.Z,{size:"small",onClick:function(){return a(!1)},variant:"outlined",children:"H\u1ee7y"}),(0,s.jsx)(d.Z,{variant:"contained",onClick:function(){return a(!0)},autoFocus:!0,size:"small",children:"X\xf3a"})]})]})})}},99198:function(e,i,n){var l=n(80184);i.Z=function(){return(0,l.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(214, 214, 214, 0.2)",zIndex:9999},children:(0,l.jsx)("div",{className:"lds-hourglass"})})}},79472:function(e,i,n){var l=n(13967),t=n(47524),o=n(80184);i.Z=function(){var e=(0,l.Z)();return(0,o.jsxs)("div",{className:"noData",children:[(0,o.jsx)(t.Z,{sx:{mr:1,color:e.palette.primary.dark}}),(0,o.jsx)("p",{style:{fontSize:"14px"},children:"Kh\xf4ng c\xf3 b\u1ea3n ghi n\xe0o \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb"})]})}},39987:function(e,i,n){var l=n(1413),t=(n(72791),n(9955)),o=n(66934),d=n(80184);i.Z=function(e){var i=e.status,n=e.id,s=e.handleStatus,a=(0,o.ZP)((function(e){return(0,d.jsx)(t.Z,(0,l.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,onChange:function(e,i){return s(i?1:0,n)},defaultChecked:!!i},e))}))((function(e){var i=e.theme;return{width:40,height:20,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(20px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===i.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===i.palette.mode?i.palette.grey[100]:i.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===i.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:16,height:16},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===i.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:i.transitions.create(["background-color"],{duration:500})}}}));return(0,d.jsx)(a,{})}},15405:function(e,i,n){var l=n(1413),t=n(45987),o=n(72791),d=n(22293),s=n(47071),a=n(29388),r=n(80184),u=["name","required","label","formik","errors","size","maxLength","type","bgColor","handleChange","readOnly"];i.Z=function(e){var i,n,c,v=e.name,m=e.required,h=e.label,x=e.formik,f=e.errors,g=e.size,Z=e.maxLength,p=e.type,b=e.bgColor,j=e.handleChange,w=e.readOnly,y=(0,t.Z)(e,u),S=(0,o.useMemo)((function(){var e,i,n,t,o,u;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,(0,l.Z)((0,l.Z)({},y),{},{sx:{"& input":{background:b||"#fff"}},label:m?(0,r.jsxs)("span",{className:"input-label",children:["".concat(h),(0,r.jsx)("span",{children:" *"})]}):h,type:p||"text",fullWidth:!0,id:v,name:v,size:g||"small",value:null===x||void 0===x||null===(e=x.values)||void 0===e?void 0:e[v],onChange:function(e){Z&&e.target.value.length>Z&&(e.target.value=e.target.value.slice(0,Z)),null===x||void 0===x||x.setFieldTouched(v,!0),null===x||void 0===x||x.handleChange(e),j&&j(e.target.value)},error:(null===x||void 0===x||null===(i=x.touched)||void 0===i?void 0:i[v])&&Boolean(null===x||void 0===x||null===(n=x.errors)||void 0===n?void 0:n[v])||Boolean(null===f||void 0===f?void 0:f[v]),InputProps:{readOnly:w}})),((null===x||void 0===x||null===(t=x.touched)||void 0===t?void 0:t[v])&&(null===x||void 0===x||null===(o=x.errors)||void 0===o?void 0:o[v])||(null===f||void 0===f?void 0:f[v]))&&(0,r.jsxs)(s.Z,{error:!0,className:"error-custom",children:[(0,r.jsx)(a.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),(null===x||void 0===x||null===(u=x.errors)||void 0===u?void 0:u[v])||(null===f||void 0===f?void 0:f[v])]})]})}),[null===x||void 0===x||null===(i=x.values)||void 0===i?void 0:i[v],null===x||void 0===x||null===(n=x.touched)||void 0===n?void 0:n[v],null===x||void 0===x||null===(c=x.errors)||void 0===c?void 0:c[v],null===f||void 0===f?void 0:f[v],m,h,p]);return(0,r.jsx)(r.Fragment,{children:S})}},44753:function(e,i,n){n.r(i),n.d(i,{default:function(){return X}});var l=n(1413),t=n(70885),o=n(72791),d=n(94667),s=n(93051),a=n(60116),r=n(32004),u=n(95193),c=n(73974),v=n(64554),m=n(20890),h=n(47924),x=n(61889),f=n(36151),g=n(13967),Z=n(55705),p=n(96051),b=n(53329),j=n(15405),w=n(62461),y=n(99198),S=n(20958),k=n(80184),I=function(e){var i=e.visible,n=e.closeDrawer,d=e.dataEdit,a=e.getList,I=(0,s.I0)(),C=(0,g.Z)(),E=(0,u.Z)(C.breakpoints.down("md")),z=(0,o.useState)(!1),N=(0,t.Z)(z,2),O=N[0],V=N[1],F=(0,o.useState)({}),M=(0,t.Z)(F,2),P=M[0],D=M[1],L=p.Ry().shape({name:p.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp h\u1ecd t\xean"),phone:p.Z_().trim().max(20).required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),message:p.Z_().trim().max(254).required("Vui l\xf2ng nh\u1eadp l\u1eddi nh\u1eafn"),websiteId:p.Z_().required("Vui l\xf2ng ch\u1ecdn website")}),A=(0,Z.TA)({enableReinitialize:!0,initialValues:{name:(null===d||void 0===d?void 0:d.name)||"",phone:(null===d||void 0===d?void 0:d.phone)||"",email:(null===d||void 0===d?void 0:d.email)||"",message:(null===d||void 0===d?void 0:d.message)||"",websiteId:(null===d||void 0===d?void 0:d.websiteId)||"",status:0===(null===d||void 0===d?void 0:d.status)?0:1},validationSchema:L,onSubmit:function(e){J(e)}}),J=function(e){var i,n,t;V(!0);var o=(0,l.Z)((0,l.Z)({},e),{},{name:null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i.trim(),phone:null===e||void 0===e||null===(n=e.phone)||void 0===n?void 0:n.trim(),email:null===e||void 0===e||null===(t=e.email)||void 0===t?void 0:t.trim()});null!==d&&void 0!==d&&d.id?I({type:"message/update",payload:{id:null===d||void 0===d?void 0:d.id,params:(0,l.Z)({},o)},callback:function(e){null!==e&&void 0!==e&&e.success?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),a(),T()):(D(e.error),(0,r.Z)("error",e.message)),V(!1)}}):I({type:"message/add",payload:o,callback:function(e){V(!1),null!==e&&void 0!==e&&e.success?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),a(),T()):(D(e.error),(0,r.Z)("error",e.message))}})},T=function(){n(),A.resetForm(),A.setTouched({},!1),D({})};return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(c.ZP,{anchor:"right",open:i,onClose:T,children:[(0,k.jsxs)(v.Z,{sx:{width:E?"100%":"400px",p:2},children:[(0,k.jsxs)(m.Z,{variant:"h4",sx:{mb:3},children:[null!==d&&void 0!==d&&d.id?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===d||void 0===d?void 0:d.name):"Th\xeam m\u1edbi li\xean h\u1ec7",(0,k.jsx)(h.Z,{sx:{mt:1}})]}),(0,k.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,k.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{name:"name",formik:A,errors:P,label:"T\xean li\xean h\u1ec7"})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{name:"phone",formik:A,errors:P,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{name:"email",formik:A,errors:P,label:"Email"})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(j.Z,{name:"message",formik:A,errors:P,label:"L\u1eddi nh\u1eafn",multiline:!0,required:!0,rows:3})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(S.Z,{formik:A,setFieldValue:A.setFieldValue,addOrEdit:!0})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,children:(0,k.jsx)(w.Z,{addOrEdit:!0,formik:A,setFieldValue:A.setFieldValue})})]}),(0,k.jsx)(x.ZP,{item:!0,xs:12,sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)(f.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,k.jsx)(b.Z,{}),children:"L\u01b0u l\u1ea1i"})})]})]}),O&&(0,k.jsx)(y.Z,{})]})})},C=n(5403),E=Number("20"),z=function(e){e.setDataEdit,e.setVisibleDrawer;var i,n,l,t,o=e.setLoading,d=(0,s.I0)(),u=(0,s.v9)(a.yw),c=(0,Z.TA)({enableReinitialize:!0,initialValues:{name:(null===u||void 0===u||null===(i=u.filter)||void 0===i?void 0:i.name)||"",phone:(null===u||void 0===u||null===(n=u.filter)||void 0===n?void 0:n.phone)||"",websiteId:(null===u||void 0===u||null===(l=u.filter)||void 0===l?void 0:l.websiteId)||"",status:(null===u||void 0===u||null===(t=u.filter)||void 0===t?void 0:t.status)||""},onSubmit:function(e){v(e)}}),v=function(e){var i,n,l,t;o(!0);var s={name:null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i.trim(),phone:null===e||void 0===e||null===(n=e.phone)||void 0===n?void 0:n.trim(),websiteId:null===e||void 0===e?void 0:e.websiteId,status:"".concat(null===e||void 0===e?void 0:e.status)};null!==e&&void 0!==e&&null!==(l=e.name)&&void 0!==l&&l.trim()||delete s.name,null!==e&&void 0!==e&&null!==(t=e.phone)&&void 0!==t&&t.trim()||delete s.phone,""===(null===e||void 0===e?void 0:e.websiteId)&&delete s.websiteId,null!==e&&void 0!==e&&e.status||delete s.status;var u={filter:JSON.stringify(s),range:JSON.stringify([0,E]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};d((0,a.hX)(e)),d({type:"message/fetch",payload:u,callback:function(e){o(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,k.jsx)("form",{onSubmit:c.handleSubmit,children:(0,k.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,k.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,k.jsx)(j.Z,{name:"name",formik:c,label:"H\u1ecd t\xean"})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,k.jsx)(j.Z,{name:"phone",formik:c,label:"S\u1ed1 \u0111i\u1ec7n th\u1ecdai"})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,k.jsx)(S.Z,{formik:c,setFieldValue:c.setFieldValue,addOrEdit:!1})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,k.jsx)(w.Z,{addOrEdit:!1,formik:c,setFieldValue:c.setFieldValue})}),(0,k.jsx)(x.ZP,{item:!0,xs:12,md:12,lg:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)(f.Z,{variant:"contained",endIcon:(0,k.jsx)(C.Z,{}),type:"submit",children:"T\xecm ki\u1ebfm"})})]})})},N=n(35855),O=n(53994),V=n(39281),F=n(79836),M=n(56890),P=n(53382),D=n(57246),L=n(41286),A=n(27247),J=n(79472),T=n(39987),W=n(58357),q=n(72426),B=n.n(q),H=Number("20"),_=function(e){var i=e.dataEdit,n=e.setDataEdit,d=e.setVisibleDrawer,c=e.loading,h=e.setLoading,x=e.getList,Z=(0,s.I0)(),p=(0,g.Z)(),b=(0,u.Z)(p.breakpoints.down("md")),j=(0,s.v9)(a.yw),w=j.data.list,S=j.data.pagination,I=(0,o.useState)(!1),C=(0,t.Z)(I,2),E=C[0],z=C[1],q=function(e,i){Z({type:"message/updateStatus",payload:{id:i,params:{status:e}},callback:function(e){!0===(null===e||void 0===e?void 0:e.success)?(0,r.Z)("success",null===e||void 0===e?void 0:e.message):(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})},_=function(e){return(0,k.jsx)(T.Z,{status:null===e||void 0===e?void 0:e.status,id:null===e||void 0===e?void 0:e.id,handleStatus:q})},R=function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.Z,{size:"small",variant:"outlined",endIcon:(0,k.jsx)(L.Z,{}),onClick:function(){n(e),d(!0)},children:"S\u1eeda"}),(0,k.jsx)(f.Z,{size:"small",variant:"outlined",color:"error",sx:{ml:1},endIcon:(0,k.jsx)(A.Z,{}),onClick:function(){z(!0),n(e)},children:"X\xf3a"})]})};return(0,k.jsxs)(v.Z,{sx:{position:"relative",pb:2},children:[(0,k.jsxs)(V.Z,{sx:{overflow:"auto"},children:[(0,k.jsxs)(F.Z,{children:[(0,k.jsx)(M.Z,{children:function(){var e={whiteSpace:"nowrap",fontWeight:"bold"};return(0,k.jsxs)(N.Z,{children:[(0,k.jsx)(O.Z,{sx:(0,l.Z)((0,l.Z)({},e),{},{width:"5%"}),align:"center",children:"#"}),(0,k.jsx)(O.Z,{sx:e,children:"H\u1ecd t\xean"}),(0,k.jsx)(O.Z,{sx:e,children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,k.jsx)(O.Z,{sx:e,children:"Email"}),(0,k.jsx)(O.Z,{sx:e,children:"Website"}),(0,k.jsx)(O.Z,{sx:e,children:"Ng\xe0y t\u1ea1o"}),(0,k.jsx)(O.Z,{sx:e,children:"Tr\u1ea1ng th\xe1i"}),(0,k.jsx)(O.Z,{align:"right",sx:e,children:"H\xe0nh \u0111\u1ed9ng"})]})}()}),(0,k.jsx)(P.Z,{children:null===w||void 0===w?void 0:w.map((function(e,i){return function(e,i){var n;return(0,k.jsxs)(N.Z,{hover:!0,children:[(0,k.jsx)(O.Z,{sx:{width:"5%"},align:"center",children:(0,k.jsx)(m.Z,{variant:"body2",children:i+H*((null===S||void 0===S?void 0:S.current)-1)+1})}),(0,k.jsx)(O.Z,{sx:{width:"20%",overflow:"hidden",maxWidth:300},component:"th",scope:"row",children:e.name}),(0,k.jsx)(O.Z,{children:null===e||void 0===e?void 0:e.phone}),(0,k.jsx)(O.Z,{children:null===e||void 0===e?void 0:e.email}),(0,k.jsx)(O.Z,{children:null===e||void 0===e||null===(n=e.website)||void 0===n?void 0:n.name}),(0,k.jsx)(O.Z,{children:B()(null===e||void 0===e?void 0:e.createdAt).format("DD/MM/YYYY HH:mm")}),(0,k.jsx)(O.Z,{children:_(e)}),(0,k.jsx)(O.Z,{align:"right",children:R(e)})]},e.id)}(e,i)}))})]}),(null===w||void 0===w?void 0:w.length)>0&&(0,k.jsx)(D.Z,{sx:{mt:2,display:"flex",justifyContent:"flex-end"},size:b?"small":"medium",count:Math.floor((null===S||void 0===S?void 0:S.total)/(null===S||void 0===S?void 0:S.pageSize))+1,page:null===S||void 0===S?void 0:S.current,color:"primary",shape:"rounded",onChange:function(e,i){var n,l,t,o;h(!0);var d=j.filter,s={name:null===d||void 0===d||null===(n=d.name)||void 0===n?void 0:n.trim(),phone:null===d||void 0===d||null===(l=d.phone)||void 0===l?void 0:l.trim(),websiteId:null===d||void 0===d?void 0:d.websiteId,status:null===d||void 0===d?void 0:d.status};null!==d&&void 0!==d&&null!==(t=d.name)&&void 0!==t&&t.trim()||delete s.name,null!==d&&void 0!==d&&null!==(o=d.phone)&&void 0!==o&&o.trim()||delete s.phone,""===(null===d||void 0===d?void 0:d.websiteId)&&delete s.websiteId,""===(null===d||void 0===d?void 0:d.status)&&delete s.status;var a={filter:JSON.stringify(s),range:JSON.stringify([i*S.pageSize-S.pageSize,i*S.pageSize]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};Z({type:"message/fetch",payload:a,callback:function(e){h(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})}})]}),0===(null===w||void 0===w?void 0:w.length)&&(0,k.jsx)(J.Z,{}),c&&(0,k.jsx)(y.Z,{}),E&&(0,k.jsx)(W.Z,{name:null===i||void 0===i?void 0:i.name,open:E,handleClose:function(e){z(!1),e&&Z({type:"message/delete",payload:{id:null===i||void 0===i?void 0:i.id},callback:function(e){!0===(null===e||void 0===e?void 0:e.success)?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),x()):!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",e&&e.message)}})}})]})},R=Number("20"),X=function(){var e=(0,s.I0)(),i=(0,s.v9)(a.yw),n=(0,o.useState)(!1),u=(0,t.Z)(n,2),c=u[0],v=u[1],m=(0,o.useState)(!1),h=(0,t.Z)(m,2),x=h[0],f=h[1],g=(0,o.useState)({id:0,name:"",phone:"",email:"",message:"",websiteId:0,createdAt:"",status:0}),Z=(0,t.Z)(g,2),p=Z[0],b=Z[1];(0,o.useEffect)((function(){j()}),[]);var j=function(){v(!0);var n=i.query,t=i.filter,o={filter:JSON.stringify({}),range:JSON.stringify([0,R]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};"{}"!==(null===n||void 0===n?void 0:n.filter)&&(o=(0,l.Z)((0,l.Z)({},o),{},{filter:null===n||void 0===n?void 0:n.filter})),"{}"!==(null===n||void 0===n?void 0:n.range)&&(o=(0,l.Z)((0,l.Z)({},o),{},{range:null===n||void 0===n?void 0:n.range})),"{}"!==(null===n||void 0===n?void 0:n.sort)&&(o=(0,l.Z)((0,l.Z)({},o),{},{sort:null===n||void 0===n?void 0:n.sort})),e((0,a.hX)(t)),e({type:"message/fetch",payload:o,callback:function(e){v(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Z,{title:(0,k.jsx)(z,{setDataEdit:b,setVisibleDrawer:f,setLoading:v}),content:!1,children:(0,k.jsx)(_,{getList:j,dataEdit:p,setDataEdit:b,setVisibleDrawer:f,loading:c,setLoading:v})}),(0,k.jsx)(I,{visible:x,closeDrawer:function(){return f(!1)},dataEdit:p,getList:j})]})}}}]);
//# sourceMappingURL=753.87791abb.chunk.js.map