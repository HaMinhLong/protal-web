"use strict";(self.webpackChunkprotal_web=self.webpackChunkprotal_web||[]).push([[753],{62461:function(e,i,n){n.d(i,{Z:function(){return a}});var l=n(1413),t=n(14868),o=n(22293),s=[{value:"",label:"T\u1ea5t c\u1ea3"},{value:1,label:"K\xedch ho\u1ea1t"},{value:0,label:"B\u1ecb \u1ea9n"}],d=n(80184),a=function(e){var i=e.formik,n=e.setFieldValue,a=e.addOrEdit;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.Z,{fullWidth:!0,size:"small",disablePortal:!0,disableClearable:!0,id:"combo-box-demo",value:null===s||void 0===s?void 0:s.filter((function(e){var n;return e.value===(null===i||void 0===i||null===(n=i.values)||void 0===n?void 0:n.status)}))[0],options:a?s.filter((function(e){return""!==e.value})):s,renderInput:function(e){return(0,d.jsx)(o.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Tr\u1ea1ng th\xe1i"}))},onChange:function(e,i){return n("status",null===i||void 0===i?void 0:i.value)}})})}},20958:function(e,i,n){var l=n(1413),t=n(70885),o=n(72791),s=n(14868),d=n(22293),a=n(47071),r=n(29388),u=n(93051),c=n(9478),v=n(80184);i.Z=function(e){var i=e.formik,n=e.setFieldValue,m=e.addOrEdit,h=e.readOnly,x=e.handleChange,f=(0,u.I0)(),g=(0,o.useState)([]),Z=(0,t.Z)(g,2),p=Z[0],b=Z[1],j=JSON.parse(localStorage.getItem("user")||"{}");(0,o.useEffect)((function(){(null===j||void 0===j?void 0:j.userGroupId)===c.hi?w():y()}),[]);var y=function(){f({type:"website/fetchLazyLoading",payload:{filter:JSON.stringify({status:1}),range:JSON.stringify([0,50])},callback:function(e){var i=(null===e||void 0===e?void 0:e.results).list,n=null===i||void 0===i?void 0:i.map((function(e){return{value:e.id,label:e.name}}));b(n)}})},w=function(){f({type:"websiteUser/fetch",payload:{id:j.id},callback:function(e){if(null!==e&&void 0!==e&&e.success){var i,n,l=e.results.list,t=null===l||void 0===l||null===(i=l[0])||void 0===i||null===(n=i.websites)||void 0===n?void 0:n.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));b(t)}}})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.Z,{fullWidth:!0,size:"small",disablePortal:!0,id:"combo-box-demo",value:(null===p||void 0===p?void 0:p.length)>0?null===p||void 0===p?void 0:p.filter((function(e){var n;return e.value===(null===i||void 0===i||null===(n=i.values)||void 0===n?void 0:n.websiteId)}))[0]:{value:"",label:""},readOnly:h,options:p,disableClearable:m,renderInput:function(e){var n;return(0,v.jsx)(d.Z,(0,l.Z)((0,l.Z)({},e),{},{name:"websiteId",label:m?(0,v.jsxs)("span",{className:"input-label",children:["Website ",(0,v.jsx)("span",{children:" *"})]}):"Website",error:i.touched.websiteId&&Boolean(null===(n=i.errors)||void 0===n?void 0:n.websiteId)}))},onChange:function(e,i){n("websiteId",null===i||void 0===i?void 0:i.value),x&&x()}}),i.touched.websiteId&&i.errors.websiteId&&(0,v.jsxs)(a.Z,{error:!0,className:"error-custom",children:[(0,v.jsx)(r.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),i.errors.websiteId]})]})}},58357:function(e,i,n){n.d(i,{Z:function(){return a}});var l=n(5289),t=n(65661),o=n(97123),s=n(36151),d=n(80184);function a(e){var i=e.name,n=e.open,a=e.handleClose;return(0,d.jsx)(l.Z,{open:n,onClose:function(){return a(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"item-delete-title","aria-describedby":"item-delete-description",children:n&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.Z,{id:"item-delete-title",children:(0,d.jsxs)("p",{children:[i," - B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?"]})})," ",(0,d.jsxs)(o.Z,{sx:{mr:2},children:[(0,d.jsx)(s.Z,{size:"small",onClick:function(){return a(!1)},variant:"outlined",children:"H\u1ee7y"}),(0,d.jsx)(s.Z,{variant:"contained",onClick:function(){return a(!0)},autoFocus:!0,size:"small",children:"X\xf3a"})]})]})})}},99198:function(e,i,n){var l=n(80184);i.Z=function(){return(0,l.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(214, 214, 214, 0.2)",zIndex:9999},children:(0,l.jsx)("div",{className:"lds-hourglass"})})}},79472:function(e,i,n){var l=n(13967),t=n(47524),o=n(80184);i.Z=function(){var e=(0,l.Z)();return(0,o.jsxs)("div",{className:"noData",children:[(0,o.jsx)(t.Z,{sx:{mr:1,color:e.palette.primary.dark}}),(0,o.jsx)("p",{style:{fontSize:"14px"},children:"Kh\xf4ng c\xf3 b\u1ea3n ghi n\xe0o \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb"})]})}},39987:function(e,i,n){var l=n(1413),t=(n(72791),n(9955)),o=n(66934),s=n(80184);i.Z=function(e){var i=e.status,n=e.id,d=e.handleStatus,a=(0,o.ZP)((function(e){return(0,s.jsx)(t.Z,(0,l.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,onChange:function(e,i){return d(i?1:0,n)},defaultChecked:!!i},e))}))((function(e){var i=e.theme;return{width:40,height:20,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(20px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===i.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===i.palette.mode?i.palette.grey[100]:i.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===i.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:16,height:16},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===i.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:i.transitions.create(["background-color"],{duration:500})}}}));return(0,s.jsx)(a,{})}},15405:function(e,i,n){var l=n(1413),t=n(45987),o=n(72791),s=n(22293),d=n(47071),a=n(29388),r=n(80184),u=["name","required","label","formik","errors","size","maxLength","type","bgColor","handleChange","readOnly"];i.Z=function(e){var i,n,c,v=e.name,m=e.required,h=e.label,x=e.formik,f=e.errors,g=e.size,Z=e.maxLength,p=e.type,b=e.bgColor,j=e.handleChange,y=e.readOnly,w=(0,t.Z)(e,u),S=(0,o.useMemo)((function(){var e,i,n,t,o,u;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,(0,l.Z)((0,l.Z)({},w),{},{sx:{"& input":{background:b||"#fff"}},label:m?(0,r.jsxs)("span",{className:"input-label",children:["".concat(h),(0,r.jsx)("span",{children:" *"})]}):h,type:p||"text",fullWidth:!0,id:v,name:v,size:g||"small",value:null===x||void 0===x||null===(e=x.values)||void 0===e?void 0:e[v],onChange:function(e){Z&&e.target.value.length>Z&&(e.target.value=e.target.value.slice(0,Z)),null===x||void 0===x||x.setFieldTouched(v,!0),null===x||void 0===x||x.handleChange(e),j&&j(e.target.value)},error:(null===x||void 0===x||null===(i=x.touched)||void 0===i?void 0:i[v])&&Boolean(null===x||void 0===x||null===(n=x.errors)||void 0===n?void 0:n[v])||Boolean(null===f||void 0===f?void 0:f[v]),InputProps:{readOnly:y}})),((null===x||void 0===x||null===(t=x.touched)||void 0===t?void 0:t[v])&&(null===x||void 0===x||null===(o=x.errors)||void 0===o?void 0:o[v])||(null===f||void 0===f?void 0:f[v]))&&(0,r.jsxs)(d.Z,{error:!0,className:"error-custom",children:[(0,r.jsx)(a.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),(null===x||void 0===x||null===(u=x.errors)||void 0===u?void 0:u[v])||(null===f||void 0===f?void 0:f[v])]})]})}),[null===x||void 0===x||null===(i=x.values)||void 0===i?void 0:i[v],null===x||void 0===x||null===(n=x.touched)||void 0===n?void 0:n[v],null===x||void 0===x||null===(c=x.errors)||void 0===c?void 0:c[v],null===f||void 0===f?void 0:f[v],m,h,p]);return(0,r.jsx)(r.Fragment,{children:S})}},44753:function(e,i,n){n.r(i),n.d(i,{default:function(){return Y}});var l=n(1413),t=n(70885),o=n(72791),s=n(94667),d=n(93051),a=n(60116),r=n(32004),u=n(95193),c=n(73974),v=n(64554),m=n(20890),h=n(47924),x=n(61889),f=n(36151),g=n(13967),Z=n(55705),p=n(96051),b=n(53329),j=n(38926),y=n(15405),w=n(62461),S=n(99198),k=n(20958),I=n(80184),C=function(e){var i=e.visible,n=e.closeDrawer,s=e.dataEdit,a=e.getList,C=(0,d.I0)(),E=(0,g.Z)(),z=(0,u.Z)(E.breakpoints.down("md")),N=(0,o.useState)(!1),O=(0,t.Z)(N,2),V=O[0],F=O[1],M=(0,o.useState)({}),P=(0,t.Z)(M,2),D=P[0],L=P[1],A=p.Ry().shape({name:p.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp h\u1ecd t\xean"),phone:p.Z_().trim().max(20).required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),message:p.Z_().trim().max(254).required("Vui l\xf2ng nh\u1eadp l\u1eddi nh\u1eafn"),websiteId:p.Z_().required("Vui l\xf2ng ch\u1ecdn website")}),J=(0,Z.TA)({enableReinitialize:!0,initialValues:{name:(null===s||void 0===s?void 0:s.name)||"",phone:(null===s||void 0===s?void 0:s.phone)||"",email:(null===s||void 0===s?void 0:s.email)||"",message:(null===s||void 0===s?void 0:s.message)||"",websiteId:(null===s||void 0===s?void 0:s.websiteId)||"",status:0===(null===s||void 0===s?void 0:s.status)?0:1},validationSchema:A,onSubmit:function(e){T(e)}}),T=function(e){var i,n,t;F(!0);var o=(0,l.Z)((0,l.Z)({},e),{},{name:null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i.trim(),phone:null===e||void 0===e||null===(n=e.phone)||void 0===n?void 0:n.trim(),email:null===e||void 0===e||null===(t=e.email)||void 0===t?void 0:t.trim()});null!==s&&void 0!==s&&s.id?C({type:"message/update",payload:{id:null===s||void 0===s?void 0:s.id,params:(0,l.Z)({},o)},callback:function(e){null!==e&&void 0!==e&&e.success?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),a(),W()):(L(e.error),(0,r.Z)("error",e.message)),F(!1)}}):C({type:"message/add",payload:o,callback:function(e){F(!1),null!==e&&void 0!==e&&e.success?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),a(),W()):(L(e.error),(0,r.Z)("error",e.message))}})},W=function(){n(),J.resetForm(),J.setTouched({},!1),L({})};return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(c.ZP,{anchor:"right",open:i,onClose:W,children:[(0,I.jsxs)(v.Z,{sx:{width:z?"100%":"400px",p:2},children:[(0,I.jsxs)(m.Z,{variant:"h4",sx:{mb:3},children:[null!==s&&void 0!==s&&s.id?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===s||void 0===s?void 0:s.name):"Th\xeam m\u1edbi li\xean h\u1ec7",(0,I.jsx)(h.Z,{sx:{mt:1}})]}),(0,I.jsxs)("form",{onSubmit:J.handleSubmit,children:[(0,I.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(y.Z,{name:"name",formik:J,errors:D,label:"T\xean li\xean h\u1ec7"})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(y.Z,{name:"phone",formik:J,errors:D,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(y.Z,{name:"email",formik:J,errors:D,label:"Email"})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(y.Z,{name:"message",formik:J,errors:D,label:"L\u1eddi nh\u1eafn",multiline:!0,required:!0,rows:3})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(k.Z,{formik:J,setFieldValue:J.setFieldValue,addOrEdit:!0})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,children:(0,I.jsx)(w.Z,{addOrEdit:!0,formik:J,setFieldValue:J.setFieldValue})})]}),(0,I.jsxs)(x.ZP,{item:!0,xs:12,sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:[(0,I.jsx)(f.Z,{onClick:function(){return W()},size:"small",variant:"outlined",sx:{mr:"10px"},type:"submit",endIcon:(0,I.jsx)(j.Z,{}),children:"H\u1ee7y"}),(0,I.jsx)(f.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,I.jsx)(b.Z,{}),children:"L\u01b0u l\u1ea1i"})]})]})]}),V&&(0,I.jsx)(S.Z,{})]})})},E=n(5403),z=Number("20"),N=function(e){e.setDataEdit,e.setVisibleDrawer;var i,n,l,t,o=e.setLoading,s=(0,d.I0)(),u=(0,d.v9)(a.yw),c=(0,Z.TA)({enableReinitialize:!0,initialValues:{name:(null===u||void 0===u||null===(i=u.filter)||void 0===i?void 0:i.name)||"",phone:(null===u||void 0===u||null===(n=u.filter)||void 0===n?void 0:n.phone)||"",websiteId:(null===u||void 0===u||null===(l=u.filter)||void 0===l?void 0:l.websiteId)||"",status:(null===u||void 0===u||null===(t=u.filter)||void 0===t?void 0:t.status)||""},onSubmit:function(e){v(e)}}),v=function(e){var i,n,l,t;o(!0);var d={name:null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i.trim(),phone:null===e||void 0===e||null===(n=e.phone)||void 0===n?void 0:n.trim(),websiteId:null===e||void 0===e?void 0:e.websiteId,status:"".concat(null===e||void 0===e?void 0:e.status)};null!==e&&void 0!==e&&null!==(l=e.name)&&void 0!==l&&l.trim()||delete d.name,null!==e&&void 0!==e&&null!==(t=e.phone)&&void 0!==t&&t.trim()||delete d.phone,""===(null===e||void 0===e?void 0:e.websiteId)&&delete d.websiteId,null!==e&&void 0!==e&&e.status||delete d.status;var u={filter:JSON.stringify(d),range:JSON.stringify([0,z]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};s((0,a.hX)(e)),s({type:"message/fetch",payload:u,callback:function(e){o(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,I.jsx)("form",{onSubmit:c.handleSubmit,children:(0,I.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,I.jsx)(y.Z,{name:"name",formik:c,label:"H\u1ecd t\xean"})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,I.jsx)(y.Z,{name:"phone",formik:c,label:"S\u1ed1 \u0111i\u1ec7n th\u1ecdai"})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,I.jsx)(k.Z,{formik:c,setFieldValue:c.setFieldValue,addOrEdit:!1})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,I.jsx)(w.Z,{addOrEdit:!1,formik:c,setFieldValue:c.setFieldValue})}),(0,I.jsx)(x.ZP,{item:!0,xs:12,md:12,lg:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,I.jsx)(f.Z,{variant:"contained",endIcon:(0,I.jsx)(E.Z,{}),type:"submit",children:"T\xecm ki\u1ebfm"})})]})})},O=n(35855),V=n(53994),F=n(39281),M=n(79836),P=n(56890),D=n(53382),L=n(57246),A=n(41286),J=n(27247),T=n(79472),W=n(39987),q=n(58357),H=n(72426),B=n.n(H),_=Number("20"),R=function(e){var i=e.dataEdit,n=e.setDataEdit,s=e.setVisibleDrawer,c=e.loading,h=e.setLoading,x=e.getList,Z=(0,d.I0)(),p=(0,g.Z)(),b=(0,u.Z)(p.breakpoints.down("md")),j=(0,d.v9)(a.yw),y=j.data.list,w=j.data.pagination,k=(0,o.useState)(!1),C=(0,t.Z)(k,2),E=C[0],z=C[1],N=function(e,i){Z({type:"message/updateStatus",payload:{id:i,params:{status:e}},callback:function(e){!0===(null===e||void 0===e?void 0:e.success)?(0,r.Z)("success",null===e||void 0===e?void 0:e.message):(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})},H=function(e){return(0,I.jsx)(W.Z,{status:null===e||void 0===e?void 0:e.status,id:null===e||void 0===e?void 0:e.id,handleStatus:N})},R=function(e){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.Z,{size:"small",variant:"outlined",endIcon:(0,I.jsx)(A.Z,{}),onClick:function(){n(e),s(!0)},children:"S\u1eeda"}),(0,I.jsx)(f.Z,{size:"small",variant:"outlined",color:"error",sx:{ml:1},endIcon:(0,I.jsx)(J.Z,{}),onClick:function(){z(!0),n(e)},children:"X\xf3a"})]})};return(0,I.jsxs)(v.Z,{sx:{position:"relative",pb:2},children:[(0,I.jsxs)(F.Z,{sx:{overflow:"auto"},children:[(0,I.jsxs)(M.Z,{children:[(0,I.jsx)(P.Z,{children:function(){var e={whiteSpace:"nowrap",fontWeight:"bold"};return(0,I.jsxs)(O.Z,{children:[(0,I.jsx)(V.Z,{sx:(0,l.Z)((0,l.Z)({},e),{},{width:"5%"}),align:"center",children:"#"}),(0,I.jsx)(V.Z,{sx:e,children:"H\u1ecd t\xean"}),(0,I.jsx)(V.Z,{sx:e,children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,I.jsx)(V.Z,{sx:e,children:"Email"}),(0,I.jsx)(V.Z,{sx:e,children:"Website"}),(0,I.jsx)(V.Z,{sx:e,children:"Ng\xe0y t\u1ea1o"}),(0,I.jsx)(V.Z,{sx:e,children:"Tr\u1ea1ng th\xe1i"}),(0,I.jsx)(V.Z,{align:"right",sx:e,children:"H\xe0nh \u0111\u1ed9ng"})]})}()}),(0,I.jsx)(D.Z,{children:null===y||void 0===y?void 0:y.map((function(e,i){return function(e,i){var n;return(0,I.jsxs)(O.Z,{hover:!0,children:[(0,I.jsx)(V.Z,{sx:{width:"5%"},align:"center",children:(0,I.jsx)(m.Z,{variant:"body2",children:i+_*((null===w||void 0===w?void 0:w.current)-1)+1})}),(0,I.jsx)(V.Z,{sx:{width:"20%",overflow:"hidden",maxWidth:300},component:"th",scope:"row",children:e.name}),(0,I.jsx)(V.Z,{children:null===e||void 0===e?void 0:e.phone}),(0,I.jsx)(V.Z,{children:null===e||void 0===e?void 0:e.email}),(0,I.jsx)(V.Z,{children:null===e||void 0===e||null===(n=e.website)||void 0===n?void 0:n.name}),(0,I.jsx)(V.Z,{children:B()(null===e||void 0===e?void 0:e.createdAt).format("DD/MM/YYYY HH:mm")}),(0,I.jsx)(V.Z,{children:H(e)}),(0,I.jsx)(V.Z,{align:"right",children:R(e)})]},e.id)}(e,i)}))})]}),(null===y||void 0===y?void 0:y.length)>0&&(0,I.jsx)(L.Z,{sx:{mt:2,display:"flex",justifyContent:"flex-end"},size:b?"small":"medium",count:Math.floor((null===w||void 0===w?void 0:w.total)/(null===w||void 0===w?void 0:w.pageSize))+1,page:null===w||void 0===w?void 0:w.current,color:"primary",shape:"rounded",onChange:function(e,i){var n,l,t,o;h(!0);var s=j.filter,d={name:null===s||void 0===s||null===(n=s.name)||void 0===n?void 0:n.trim(),phone:null===s||void 0===s||null===(l=s.phone)||void 0===l?void 0:l.trim(),websiteId:null===s||void 0===s?void 0:s.websiteId,status:null===s||void 0===s?void 0:s.status};null!==s&&void 0!==s&&null!==(t=s.name)&&void 0!==t&&t.trim()||delete d.name,null!==s&&void 0!==s&&null!==(o=s.phone)&&void 0!==o&&o.trim()||delete d.phone,""===(null===s||void 0===s?void 0:s.websiteId)&&delete d.websiteId,""===(null===s||void 0===s?void 0:s.status)&&delete d.status;var a={filter:JSON.stringify(d),range:JSON.stringify([i*w.pageSize-w.pageSize,i*w.pageSize]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};Z({type:"message/fetch",payload:a,callback:function(e){h(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})}})]}),0===(null===y||void 0===y?void 0:y.length)&&(0,I.jsx)(T.Z,{}),c&&(0,I.jsx)(S.Z,{}),E&&(0,I.jsx)(q.Z,{name:null===i||void 0===i?void 0:i.name,open:E,handleClose:function(e){z(!1),e&&Z({type:"message/delete",payload:{id:null===i||void 0===i?void 0:i.id},callback:function(e){!0===(null===e||void 0===e?void 0:e.success)?((0,r.Z)("success",null===e||void 0===e?void 0:e.message),x()):!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",e&&e.message)}})}})]})},X=Number("20"),Y=function(){var e=(0,d.I0)(),i=(0,d.v9)(a.yw),n=(0,o.useState)(!1),u=(0,t.Z)(n,2),c=u[0],v=u[1],m=(0,o.useState)(!1),h=(0,t.Z)(m,2),x=h[0],f=h[1],g=(0,o.useState)({id:0,name:"",phone:"",email:"",message:"",websiteId:0,createdAt:"",status:0}),Z=(0,t.Z)(g,2),p=Z[0],b=Z[1];(0,o.useEffect)((function(){j()}),[]);var j=function(){v(!0);var n=i.query,t=i.filter,o={filter:JSON.stringify({}),range:JSON.stringify([0,X]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,phone,email,message,websiteId,status,createdAt"};"{}"!==(null===n||void 0===n?void 0:n.filter)&&(o=(0,l.Z)((0,l.Z)({},o),{},{filter:null===n||void 0===n?void 0:n.filter})),"{}"!==(null===n||void 0===n?void 0:n.range)&&(o=(0,l.Z)((0,l.Z)({},o),{},{range:null===n||void 0===n?void 0:n.range})),"{}"!==(null===n||void 0===n?void 0:n.sort)&&(o=(0,l.Z)((0,l.Z)({},o),{},{sort:null===n||void 0===n?void 0:n.sort})),e((0,a.hX)(t)),e({type:"message/fetch",payload:o,callback:function(e){v(!1),!1===(null===e||void 0===e?void 0:e.success)&&(0,r.Z)("error",null===e||void 0===e?void 0:e.message)}})};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(s.Z,{title:(0,I.jsx)(N,{setDataEdit:b,setVisibleDrawer:f,setLoading:v}),content:!1,children:(0,I.jsx)(R,{getList:j,dataEdit:p,setDataEdit:b,setVisibleDrawer:f,loading:c,setLoading:v})}),(0,I.jsx)(C,{visible:x,closeDrawer:function(){return f(!1)},dataEdit:p,getList:j})]})}}}]);
//# sourceMappingURL=753.0e6d17f3.chunk.js.map