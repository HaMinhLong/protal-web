"use strict";(self.webpackChunkprotal_web=self.webpackChunkprotal_web||[]).push([[101],{62461:function(i,e,n){n.d(e,{Z:function(){return d}});var t=n(1413),l=n(14868),o=n(22293),r=[{value:"",label:"T\u1ea5t c\u1ea3"},{value:1,label:"K\xedch ho\u1ea1t"},{value:0,label:"B\u1ecb \u1ea9n"}],s=n(80184),d=function(i){var e=i.formik,n=i.setFieldValue,d=i.addOrEdit;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{fullWidth:!0,size:"small",disablePortal:!0,disableClearable:!0,id:"combo-box-demo",value:null===r||void 0===r?void 0:r.filter((function(i){var n;return i.value===(null===e||void 0===e||null===(n=e.values)||void 0===n?void 0:n.status)}))[0],options:d?r.filter((function(i){return""!==i.value})):r,renderInput:function(i){return(0,s.jsx)(o.Z,(0,t.Z)((0,t.Z)({},i),{},{label:"Tr\u1ea1ng th\xe1i"}))},onChange:function(i,e){return n("status",null===e||void 0===e?void 0:e.value)}})})}},58357:function(i,e,n){n.d(e,{Z:function(){return d}});var t=n(5289),l=n(65661),o=n(97123),r=n(36151),s=n(80184);function d(i){var e=i.name,n=i.open,d=i.handleClose;return(0,s.jsx)(t.Z,{open:n,onClose:function(){return d(!1)},keepMounted:!0,maxWidth:"xs","aria-labelledby":"item-delete-title","aria-describedby":"item-delete-description",children:n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{id:"item-delete-title",children:(0,s.jsxs)("p",{children:[e," - B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?"]})})," ",(0,s.jsxs)(o.Z,{sx:{mr:2},children:[(0,s.jsx)(r.Z,{size:"small",onClick:function(){return d(!1)},variant:"outlined",children:"H\u1ee7y"}),(0,s.jsx)(r.Z,{variant:"contained",onClick:function(){return d(!0)},autoFocus:!0,size:"small",children:"X\xf3a"})]})]})})}},99198:function(i,e,n){var t=n(80184);e.Z=function(){return(0,t.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(214, 214, 214, 0.2)",zIndex:9999},children:(0,t.jsx)("div",{className:"lds-hourglass"})})}},79472:function(i,e,n){var t=n(13967),l=n(47524),o=n(80184);e.Z=function(){var i=(0,t.Z)();return(0,o.jsxs)("div",{className:"noData",children:[(0,o.jsx)(l.Z,{sx:{mr:1,color:i.palette.primary.dark}}),(0,o.jsx)("p",{style:{fontSize:"14px"},children:"Kh\xf4ng c\xf3 b\u1ea3n ghi n\xe0o \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb"})]})}},39987:function(i,e,n){var t=n(1413),l=(n(72791),n(9955)),o=n(66934),r=n(80184);e.Z=function(i){var e=i.status,n=i.id,s=i.handleStatus,d=(0,o.ZP)((function(i){return(0,r.jsx)(l.Z,(0,t.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,onChange:function(i,e){return s(e?1:0,n)},defaultChecked:!!e},i))}))((function(i){var e=i.theme;return{width:40,height:20,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(20px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===e.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===e.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:16,height:16},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===e.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:e.transitions.create(["background-color"],{duration:500})}}}));return(0,r.jsx)(d,{})}},15405:function(i,e,n){var t=n(1413),l=n(45987),o=n(72791),r=n(22293),s=n(47071),d=n(29388),a=n(80184),u=["name","required","label","formik","errors","size","maxLength","type","bgColor","handleChange","readOnly"];e.Z=function(i){var e,n,c,v=i.name,h=i.required,m=i.label,x=i.formik,f=i.errors,Z=i.size,p=i.maxLength,g=i.type,j=i.bgColor,b=i.handleChange,y=i.readOnly,k=(0,l.Z)(i,u),S=(0,o.useMemo)((function(){var i,e,n,l,o,u;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,(0,t.Z)((0,t.Z)({},k),{},{sx:{"& input":{background:j||"#fff"}},label:h?(0,a.jsxs)("span",{className:"input-label",children:["".concat(m),(0,a.jsx)("span",{children:" *"})]}):m,type:g||"text",fullWidth:!0,id:v,name:v,size:Z||"small",value:null===x||void 0===x||null===(i=x.values)||void 0===i?void 0:i[v],onChange:function(i){p&&i.target.value.length>p&&(i.target.value=i.target.value.slice(0,p)),null===x||void 0===x||x.setFieldTouched(v,!0),null===x||void 0===x||x.handleChange(i),b&&b(i.target.value)},error:(null===x||void 0===x||null===(e=x.touched)||void 0===e?void 0:e[v])&&Boolean(null===x||void 0===x||null===(n=x.errors)||void 0===n?void 0:n[v])||Boolean(null===f||void 0===f?void 0:f[v]),InputProps:{readOnly:y}})),((null===x||void 0===x||null===(l=x.touched)||void 0===l?void 0:l[v])&&(null===x||void 0===x||null===(o=x.errors)||void 0===o?void 0:o[v])||(null===f||void 0===f?void 0:f[v]))&&(0,a.jsxs)(s.Z,{error:!0,className:"error-custom",children:[(0,a.jsx)(d.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),(null===x||void 0===x||null===(u=x.errors)||void 0===u?void 0:u[v])||(null===f||void 0===f?void 0:f[v])]})]})}),[null===x||void 0===x||null===(e=x.values)||void 0===e?void 0:e[v],null===x||void 0===x||null===(n=x.touched)||void 0===n?void 0:n[v],null===x||void 0===x||null===(c=x.errors)||void 0===c?void 0:c[v],null===f||void 0===f?void 0:f[v],h,m,g]);return(0,a.jsx)(a.Fragment,{children:S})}},7101:function(i,e,n){n.r(e),n.d(e,{default:function(){return X}});var t=n(1413),l=n(70885),o=n(72791),r=n(94667),s=n(93051),d=n(38014),a=n(32004),u=n(95193),c=n(73974),v=n(64554),h=n(20890),m=n(47924),x=n(61889),f=n(36151),Z=n(13967),p=n(55705),g=n(96051),j=n(53329),b=n(15405),y=n(62461),k=n(99198),S=n(80184),w=function(i){var e=i.visible,n=i.closeDrawer,r=i.dataEdit,d=i.getList,w=(0,s.I0)(),C=(0,Z.Z)(),M=(0,u.Z)(C.breakpoints.down("md")),z=(0,o.useState)(!1),E=(0,l.Z)(z,2),D=E[0],N=E[1],O=(0,o.useState)({}),V=(0,l.Z)(O,2),F=V[0],A=V[1],I=g.Ry().shape({name:g.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp t\xean nh\xf3m t\xe0i kho\u1ea3n"),description:g.Z_().trim().max(255)}),P=(0,p.TA)({enableReinitialize:!0,initialValues:{name:(null===r||void 0===r?void 0:r.name)||"",description:(null===r||void 0===r?void 0:r.description)||"",status:0===(null===r||void 0===r?void 0:r.status)?0:1},validationSchema:I,onSubmit:function(i){T(i)}}),T=function(i){var e,n;N(!0);var l=(0,t.Z)((0,t.Z)({},i),{},{name:null===i||void 0===i||null===(e=i.name)||void 0===e?void 0:e.trim(),nameOld:null===r||void 0===r||null===(n=r.name)||void 0===n?void 0:n.trim()});null!==r&&void 0!==r&&r.id?w({type:"userGroup/update",payload:{id:null===r||void 0===r?void 0:r.id,params:(0,t.Z)({},l)},callback:function(i){null!==i&&void 0!==i&&i.success?((0,a.Z)("success",null===i||void 0===i?void 0:i.message),d(),L()):(A(i.error),(0,a.Z)("error",i.message)),N(!1)}}):w({type:"userGroup/add",payload:l,callback:function(i){N(!1),null!==i&&void 0!==i&&i.success?((0,a.Z)("success",null===i||void 0===i?void 0:i.message),d(),L()):(A(i.error),(0,a.Z)("error",i.message))}})},L=function(){n(),P.resetForm(),P.setTouched({},!1),A({})};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(c.ZP,{anchor:"right",open:e,onClose:L,children:[(0,S.jsxs)(v.Z,{sx:{width:M?"100%":"400px",p:2},children:[(0,S.jsxs)(h.Z,{variant:"h4",sx:{mb:3},children:[null!==r&&void 0!==r&&r.id?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===r||void 0===r?void 0:r.name):"Th\xeam m\u1edbi nh\xf3m t\xe0i kho\u1ea3n",(0,S.jsx)(m.Z,{sx:{mt:1}})]}),(0,S.jsxs)("form",{onSubmit:P.handleSubmit,children:[(0,S.jsxs)(x.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(x.ZP,{item:!0,xs:12,children:(0,S.jsx)(b.Z,{name:"name",formik:P,errors:F,label:"T\xean nh\xf3m t\xe0i kho\u1ea3n",required:!0})}),(0,S.jsx)(x.ZP,{item:!0,xs:12,children:(0,S.jsx)(b.Z,{name:"description",formik:P,errors:F,label:"M\xf4 t\u1ea3",multiline:!0,rows:3})}),(0,S.jsx)(x.ZP,{item:!0,xs:12,children:(0,S.jsx)(y.Z,{addOrEdit:!0,formik:P,setFieldValue:P.setFieldValue})})]}),(0,S.jsx)(x.ZP,{item:!0,xs:12,sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:(0,S.jsx)(f.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,S.jsx)(j.Z,{}),children:"L\u01b0u l\u1ea1i"})})]})]}),D&&(0,S.jsx)(k.Z,{})]})})},C=n(5403),M=n(42419),z=Number("20"),E=function(i){var e,n,t=i.setDataEdit,l=i.setVisibleDrawer,o=i.setLoading,r=(0,s.I0)(),u=(0,s.v9)(d.o),c=(0,p.TA)({enableReinitialize:!0,initialValues:{name:(null===u||void 0===u||null===(e=u.filter)||void 0===e?void 0:e.name)||"",status:(null===u||void 0===u||null===(n=u.filter)||void 0===n?void 0:n.status)||""},onSubmit:function(i){v(i)}}),v=function(i){var e,n;o(!0);var t={name:null===i||void 0===i||null===(e=i.name)||void 0===e?void 0:e.trim(),status:"".concat(null===i||void 0===i?void 0:i.status)};null!==i&&void 0!==i&&null!==(n=i.name)&&void 0!==n&&n.trim()||delete t.name,null!==i&&void 0!==i&&i.status||delete t.status;var l={filter:JSON.stringify(t),range:JSON.stringify([0,z]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,status,createdAt"};r((0,d.hX)(i)),r({type:"userGroup/fetch",payload:l,callback:function(i){o(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,a.Z)("error",null===i||void 0===i?void 0:i.message)}})};return(0,S.jsx)("form",{onSubmit:c.handleSubmit,children:(0,S.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,S.jsx)(b.Z,{name:"name",formik:c,label:"T\xean nh\xf3m t\xe0i kho\u1ea3n"})}),(0,S.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,S.jsx)(y.Z,{addOrEdit:!1,formik:c,setFieldValue:c.setFieldValue})}),(0,S.jsxs)(x.ZP,{item:!0,xs:12,md:6,lg:6,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,S.jsx)(f.Z,{variant:"contained",endIcon:(0,S.jsx)(C.Z,{}),type:"submit",children:"T\xecm ki\u1ebfm"}),(0,S.jsx)(f.Z,{variant:"outlined",color:"success",endIcon:(0,S.jsx)(M.Z,{}),sx:{ml:2},onClick:function(){t({}),l(!0)},children:"Th\xeam m\u1edbi"})]})]})})},D=n(35855),N=n(53994),O=n(39281),V=n(79836),F=n(56890),A=n(53382),I=n(57246),P=n(72426),T=n.n(P),L=n(41286),J=n(27247),G=n(39987),W=n(79472),q=n(58357),B=Number("20"),H=function(i){var e=i.dataEdit,n=i.setDataEdit,r=i.setVisibleDrawer,c=i.loading,m=i.setLoading,x=i.getList,p=(0,s.I0)(),g=(0,Z.Z)(),j=(0,u.Z)(g.breakpoints.down("md")),b=(0,s.v9)(d.o),y=b.data.list,w=b.data.pagination,C=(0,o.useState)(!1),M=(0,l.Z)(C,2),z=M[0],E=M[1],P=function(i,e){p({type:"userGroup/updateStatus",payload:{id:e,params:{status:i}},callback:function(i){!0===(null===i||void 0===i?void 0:i.success)?(0,a.Z)("success",null===i||void 0===i?void 0:i.message):(0,a.Z)("error",null===i||void 0===i?void 0:i.message)}})},H=function(i){return(0,S.jsx)(G.Z,{status:null===i||void 0===i?void 0:i.status,id:null===i||void 0===i?void 0:i.id,handleStatus:P})},R=function(i){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(f.Z,{size:"small",variant:"outlined",endIcon:(0,S.jsx)(L.Z,{}),onClick:function(){n(i),r(!0)},children:"S\u1eeda"}),(0,S.jsx)(f.Z,{size:"small",variant:"outlined",color:"error",sx:{ml:1},endIcon:(0,S.jsx)(J.Z,{}),onClick:function(){E(!0),n(i)},children:"X\xf3a"})]})};return(0,S.jsxs)(v.Z,{sx:{position:"relative",pb:2},children:[(0,S.jsxs)(O.Z,{sx:{overflow:"auto"},children:[(0,S.jsxs)(V.Z,{children:[(0,S.jsx)(F.Z,{children:function(){var i={whiteSpace:"nowrap",fontWeight:"bold"};return(0,S.jsxs)(D.Z,{children:[(0,S.jsx)(N.Z,{sx:(0,t.Z)((0,t.Z)({},i),{},{width:"5%"}),align:"center",children:"#"}),(0,S.jsx)(N.Z,{sx:i,children:"T\xean nh\xf3m t\xe0i kho\u1ea3n"}),(0,S.jsx)(N.Z,{sx:i,children:"M\xf4 t\u1ea3"}),(0,S.jsx)(N.Z,{sx:i,children:"Ng\xe0y t\u1ea1o"}),(0,S.jsx)(N.Z,{sx:i,children:"Tr\u1ea1ng th\xe1i"}),(0,S.jsx)(N.Z,{align:"right",sx:i,children:"H\xe0nh \u0111\u1ed9ng"})]})}()}),(0,S.jsx)(A.Z,{children:null===y||void 0===y?void 0:y.map((function(i,e){return function(i,e){return(0,S.jsxs)(D.Z,{hover:!0,children:[(0,S.jsx)(N.Z,{sx:{width:"5%"},align:"center",children:(0,S.jsx)(h.Z,{variant:"body2",children:e+B*((null===w||void 0===w?void 0:w.current)-1)+1})}),(0,S.jsx)(N.Z,{sx:{width:"20%",overflow:"hidden",maxWidth:300},component:"th",scope:"row",children:null===i||void 0===i?void 0:i.name}),(0,S.jsx)(N.Z,{sx:{overflow:"hidden",textOverflow:"ellipsis",minWidth:"300px",maxWidth:"500px"},children:null===i||void 0===i?void 0:i.description}),(0,S.jsx)(N.Z,{children:T()(null===i||void 0===i?void 0:i.createdAt).format("DD/MM/YYYY HH:mm")}),(0,S.jsx)(N.Z,{children:H(i)}),(0,S.jsx)(N.Z,{align:"right",children:R(i)})]},i.id)}(i,e)}))})]}),(null===y||void 0===y?void 0:y.length)>0&&(0,S.jsx)(I.Z,{sx:{mt:2,display:"flex",justifyContent:"flex-end"},size:j?"small":"medium",count:Math.floor((null===w||void 0===w?void 0:w.total)/(null===w||void 0===w?void 0:w.pageSize))+1,page:null===w||void 0===w?void 0:w.current,color:"primary",shape:"rounded",onChange:function(i,e){var n,t;m(!0);var l=b.filter,o={name:null===l||void 0===l||null===(n=l.name)||void 0===n?void 0:n.trim(),status:null===l||void 0===l?void 0:l.status};null!==l&&void 0!==l&&null!==(t=l.name)&&void 0!==t&&t.trim()||delete o.name,""===(null===l||void 0===l?void 0:l.status)&&delete o.status;var r={filter:JSON.stringify(o),range:JSON.stringify([e*w.pageSize-w.pageSize,e*w.pageSize]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,status,createdAt"};p({type:"userGroup/fetch",payload:r,callback:function(i){m(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,a.Z)("error",null===i||void 0===i?void 0:i.message)}})}})]}),0===(null===y||void 0===y?void 0:y.length)&&(0,S.jsx)(W.Z,{}),c&&(0,S.jsx)(k.Z,{}),z&&(0,S.jsx)(q.Z,{name:null===e||void 0===e?void 0:e.name,open:z,handleClose:function(i){E(!1),i&&p({type:"userGroup/delete",payload:{id:null===e||void 0===e?void 0:e.id},callback:function(i){!0===(null===i||void 0===i?void 0:i.success)?((0,a.Z)("success",null===i||void 0===i?void 0:i.message),x()):!1===(null===i||void 0===i?void 0:i.success)&&(0,a.Z)("error",i&&i.message)}})}})]})},R=Number("20"),X=function(){var i=(0,s.I0)(),e=(0,s.v9)(d.o),n=(0,o.useState)(!1),u=(0,l.Z)(n,2),c=u[0],v=u[1],h=(0,o.useState)(!1),m=(0,l.Z)(h,2),x=m[0],f=m[1],Z=(0,o.useState)({id:0,name:"",description:"",createdAt:"",status:0}),p=(0,l.Z)(Z,2),g=p[0],j=p[1];(0,o.useEffect)((function(){b()}),[]);var b=function(){v(!0);var n=e.query,l=e.filter,o={filter:JSON.stringify({}),range:JSON.stringify([0,R]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,status,createdAt"};"{}"!==(null===n||void 0===n?void 0:n.filter)&&(o=(0,t.Z)((0,t.Z)({},o),{},{filter:null===n||void 0===n?void 0:n.filter})),"{}"!==(null===n||void 0===n?void 0:n.range)&&(o=(0,t.Z)((0,t.Z)({},o),{},{range:null===n||void 0===n?void 0:n.range})),"{}"!==(null===n||void 0===n?void 0:n.sort)&&(o=(0,t.Z)((0,t.Z)({},o),{},{sort:null===n||void 0===n?void 0:n.sort})),i((0,d.hX)(l)),i({type:"userGroup/fetch",payload:o,callback:function(i){v(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,a.Z)("error",null===i||void 0===i?void 0:i.message)}})};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.Z,{title:(0,S.jsx)(E,{setDataEdit:j,setVisibleDrawer:f,setLoading:v}),content:!1,children:(0,S.jsx)(H,{getList:b,dataEdit:g,setDataEdit:j,setVisibleDrawer:f,loading:c,setLoading:v})}),(0,S.jsx)(w,{visible:x,closeDrawer:function(){return f(!1)},dataEdit:g,getList:b})]})}},42419:function(i,e,n){var t=n(64836);e.Z=void 0;var l=t(n(45649)),o=n(80184),r=(0,l.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=r}}]);
//# sourceMappingURL=101.8959a4eb.chunk.js.map