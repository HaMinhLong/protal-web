"use strict";(self.webpackChunkprotal_web=self.webpackChunkprotal_web||[]).push([[984],{79472:function(i,e,n){var l=n(13967),t=n(47524),s=n(80184);e.Z=function(){var i=(0,l.Z)();return(0,s.jsxs)("div",{className:"noData",children:[(0,s.jsx)(t.Z,{sx:{mr:1,color:i.palette.primary.dark}}),(0,s.jsx)("p",{style:{fontSize:"14px"},children:"Kh\xf4ng c\xf3 b\u1ea3n ghi n\xe0o \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb"})]})}},39987:function(i,e,n){var l=n(1413),t=(n(72791),n(9955)),s=n(66934),o=n(80184);e.Z=function(i){var e=i.status,n=i.id,d=i.handleStatus,a=(0,s.ZP)((function(i){return(0,o.jsx)(t.Z,(0,l.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,onChange:function(i,e){return d(e?1:0,n)},defaultChecked:!!e},i))}))((function(i){var e=i.theme;return{width:40,height:20,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(20px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===e.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===e.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:16,height:16},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===e.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:e.transitions.create(["background-color"],{duration:500})}}}));return(0,o.jsx)(a,{})}},77630:function(i,e,n){var l=n(70885),t=n(1413),s=n(45987),o=n(72791),d=n(64554),a=n(20890),r=n(25228),u=n(43896),c=n(80184),v=["children","value","index"];function m(i){var e=i.children,n=i.value,l=i.index,o=(0,s.Z)(i,v);return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:n!==l,id:"simple-tabpanel-".concat(l),"aria-labelledby":"simple-tab-".concat(l)},o),{},{children:n===l&&(0,c.jsx)(d.Z,{sx:{p:3},children:(0,c.jsx)(a.Z,{children:e})})}))}e.Z=function(i){var e=i.tabWrapper,n=i.noContent,s=i.handleChangeValue,a=(0,o.useState)(0),v=(0,l.Z)(a,2),x=v[0],h=v[1];return(0,c.jsxs)(d.Z,{sx:{width:"100%"},children:[(0,c.jsx)(d.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,c.jsx)(r.Z,{value:x,onChange:function(i,e){h(e),s&&s(e)},"aria-label":"basic tabs example",children:null===e||void 0===e?void 0:e.map((function(i){return(0,c.jsx)(u.Z,(0,t.Z)({label:i.label},(e=i.value,{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)})));var e}))})}),!n&&(null===e||void 0===e?void 0:e.map((function(i){return(0,c.jsx)(m,{value:x,index:i.value,children:null===i||void 0===i?void 0:i.tab})})))]})}},95496:function(i,e,n){n.r(e),n.d(e,{default:function(){return si}});var l=n(1413),t=n(70885),s=n(72791),o=n(94667),d=n(93051),a=n(47134),r=n(32004),u=n(13967),c=n(95193),v=n(61889),m=n(64554),x=n(36151),h=n(55705),p=n(96051),Z=n(53329),f=n(38926),b=n(36370),g=n(15405),j=n(62461),w=n(14868),y=n(22293),S=n(47071),k=n(29388),C=n(80184),I=function(i){var e=i.formik,n=i.setFieldValue,o=i.addOrEdit,a=(0,d.I0)(),r=(0,s.useState)([]),u=(0,t.Z)(r,2),c=u[0],v=u[1];(0,s.useEffect)((function(){m()}),[]);var m=function(){a({type:"websiteGroup/fetchLazyLoading",payload:{filter:JSON.stringify({status:1}),range:JSON.stringify([0,20])},callback:function(i){var e=(null===i||void 0===i?void 0:i.results).list,n=null===e||void 0===e?void 0:e.map((function(i){return{value:i.id,label:i.name}}));v(n)}})};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.Z,{fullWidth:!0,size:"small",disablePortal:!0,id:"combo-box-demo",value:(null===c||void 0===c?void 0:c.length)>0?null===c||void 0===c?void 0:c.filter((function(i){var n;return i.value===(null===e||void 0===e||null===(n=e.values)||void 0===n?void 0:n.websiteGroupId)}))[0]:{value:"",label:""},options:c,disableClearable:o,renderInput:function(i){var n;return(0,C.jsx)(y.Z,(0,l.Z)((0,l.Z)({},i),{},{name:"websiteGroupId",label:o?(0,C.jsxs)("span",{className:"input-label",children:["Nh\xf3m website ",(0,C.jsx)("span",{children:" *"})]}):"Nh\xf3m website",error:e.touched.websiteGroupId&&Boolean(null===(n=e.errors)||void 0===n?void 0:n.websiteGroupId)}))},onChange:function(i,e){return n("websiteGroupId",null===e||void 0===e?void 0:e.value)}}),e.touched.websiteGroupId&&e.errors.websiteGroupId&&(0,C.jsxs)(S.Z,{error:!0,className:"error-custom",children:[(0,C.jsx)(k.Z,{fontSize:"small",sx:{mr:.5,width:"18px",height:"18px"}}),e.errors.websiteGroupId]})]})},V=n(20782),G=n(99198),E=n(77630),N=n(35855),O=n(53994),z=n(20890),F=n(13400),P=n(39281),D=n(79836),T=n(56890),M=n(53382),A=n(41286),J=n(27247),L=n(59434),q=n(79472),W=n(20958),_=function(i){var e,n=i.open,o=i.dataEdit,d=i.handleClose,a=i.formikProp,j=i.getList,w=(0,L.I0)(),y=(0,u.Z)(),S=(0,c.Z)(y.breakpoints.down("lg")),k=(0,s.useState)({}),I=(0,t.Z)(k,2),V=I[0],E=I[1],N=(0,s.useState)(!1),O=(0,t.Z)(N,2),z=O[0],F=O[1];(0,s.useEffect)((function(){n&&E(o)}),[n]);var P=p.Ry().shape({name:p.Z_().required("Vui l\xf2ng nh\u1eadp t\xean \u0111\u1ecba \u0111i\u1ec3m"),mobile:p.Z_().required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),address:p.Z_().required("Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9"),location:p.Z_().required("Vui l\xf2ng nh\u1eadp \u0111\u1ecba \u0111i\u1ec3m tr\xean google map"),websiteId:p.Z_().required("Vui l\xf2ng ch\u1ecdn website")}),D=(0,h.TA)({enableReinitialize:!0,initialValues:{id:(null===V||void 0===V?void 0:V.id)||0,name:(null===V||void 0===V?void 0:V.name)||"",mobile:(null===V||void 0===V?void 0:V.mobile)||"",email:(null===V||void 0===V?void 0:V.email)||"",bankName:(null===V||void 0===V?void 0:V.bankName)||"",address:(null===V||void 0===V?void 0:V.address)||"",location:(null===V||void 0===V?void 0:V.location)||"",websiteId:null===a||void 0===a||null===(e=a.values)||void 0===e?void 0:e.id,status:0===(null===V||void 0===V?void 0:V.status)?0:1},validationSchema:P,onSubmit:function(i){T(i)}}),T=function(i){var e,n;F(!0);var t=(0,l.Z)((0,l.Z)({},i),{},{name:null===i||void 0===i||null===(e=i.name)||void 0===e?void 0:e.trim(),nameOld:null===V||void 0===V||null===(n=V.name)||void 0===n?void 0:n.trim()});null!==V&&void 0!==V&&V.id?w({type:"location/update",payload:{id:null===V||void 0===V?void 0:V.id,params:t},callback:function(i){F(!1),null!==i&&void 0!==i&&i.success?((0,r.Z)("success",null===i||void 0===i?void 0:i.message),j(),M()):(0,r.Z)("error",i.message)}}):w({type:"location/add",payload:t,callback:function(i){F(!1),null!==i&&void 0!==i&&i.success?((0,r.Z)("success",null===i||void 0===i?void 0:i.message),j(),M()):(0,r.Z)("error",i.message)}})},M=function(){d(),D.resetForm(),D.setTouched({},!1)};return(0,C.jsx)(b.Z,{open:n,title:null!==V&&void 0!==V&&V.id?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===V||void 0===V?void 0:V.name):"Th\xeam m\u1edbi \u0111\u1ecba \u0111i\u1ec3m",handleClose:function(){M()},styleBox:{minWidth:S?"100%":"800px",minHeight:"350px"},styleChildBox:{p:"0px 30px 20px"},styleTitle:{p:"10px 30px"},showButtonCloseDialog:!0,children:(0,C.jsx)(m.Z,{children:(0,C.jsxs)("form",{onSubmit:D.handleSubmit,style:{position:"relative"},children:[(0,C.jsxs)(v.ZP,{container:!0,spacing:3,sx:{mt:0},children:[(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(g.Z,{name:"name",formik:D,required:!0,label:"T\xean \u0111\u1ecba \u0111i\xeam"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(g.Z,{name:"mobile",formik:D,required:!0,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(g.Z,{name:"email",formik:D,label:"Email"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(g.Z,{name:"bankName",formik:D,label:"T\xe0i kho\u1ea3n ng\xe2n h\xe0ng"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(W.Z,{formik:D,setFieldValue:D.setFieldValue,addOrEdit:!0})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,C.jsx)(g.Z,{name:"location",formik:D,required:!0,label:"Google map"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,C.jsx)(g.Z,{name:"address",formik:D,label:"\u0110\u1ecba ch\u1ec9",multiline:!0,rows:3})})]}),(0,C.jsxs)(m.Z,{sx:{mt:3,mb:S?15:0,display:"flex",justifyContent:"center"},children:[(0,C.jsx)(x.Z,{onClick:function(){return M()},size:"small",variant:"outlined",sx:{mr:"10px"},endIcon:(0,C.jsx)(f.Z,{}),children:"H\u1ee7y"}),(0,C.jsx)(x.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,C.jsx)(Z.Z,{}),children:"L\u01b0u l\u1ea1i"})]}),z&&(0,C.jsx)(G.Z,{})]})})})},B=n(39987),H=function(i){var e,n=i.formik,o=(0,L.I0)(),d=(0,s.useState)(!1),a=(0,t.Z)(d,2),u=a[0],c=a[1],v=(0,s.useState)(!1),h=(0,t.Z)(v,2),p=(h[0],h[1]),Z=(0,s.useState)([]),f=(0,t.Z)(Z,2),b=f[0],g=f[1],j=(0,s.useState)({}),w=(0,t.Z)(j,2),y=w[0],S=w[1],k=(0,s.useState)(!1),I=(0,t.Z)(k,2),V=I[0],E=I[1];(0,s.useEffect)((function(){W()}),[]);var W=function(){var i;E(!0);var e={filter:JSON.stringify({websiteId:null===n||void 0===n||null===(i=n.values)||void 0===i?void 0:i.id}),range:JSON.stringify([0,30]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,mobile,email,address,location,websiteId,status,createdAt"};o({type:"location/fetch",payload:e,callback:function(i){if(E(!1),null!==i&&void 0!==i&&i.success){var e=i.results.list;g(e)}}})},H={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},R=function(i,e){o({type:"location/updateStatus",payload:{id:e,params:{status:i}},callback:function(i){!0===(null===i||void 0===i?void 0:i.success)?(0,r.Z)("success",null===i||void 0===i?void 0:i.message):(0,r.Z)("error",null===i||void 0===i?void 0:i.message)}})},X=function(i){return(0,C.jsx)(B.Z,{status:null===i||void 0===i?void 0:i.status,id:null===i||void 0===i?void 0:i.id,handleStatus:R})},Y=function(i){return(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(F.Z,{size:"small",onClick:function(){S(i),c(!0)},children:(0,C.jsx)(A.Z,{fontSize:"small",color:"primary"})}),(0,C.jsx)(F.Z,{size:"small",onClick:function(){p(!0),S(i)},children:(0,C.jsx)(J.Z,{fontSize:"small",color:"error"})})]})};return(0,C.jsxs)(m.Z,{sx:{mt:0,mb:0,position:"relative"},children:[(null===n||void 0===n||null===(e=n.values)||void 0===e?void 0:e.id)&&(0,C.jsx)(m.Z,{display:"flex",justifyContent:"flex-end",children:(0,C.jsx)(x.Z,{variant:"outlined",color:"success",sx:{mb:"10px"},onClick:function(){c(!0),S({id:0})},children:"Th\xeam \u0111\u1ecba \u0111i\xeam"})}),(0,C.jsx)(m.Z,{children:(0,C.jsxs)(P.Z,{sx:{overflow:"auto",minHeight:"200px"},children:[(0,C.jsxs)(D.Z,{children:[(0,C.jsx)(T.Z,{children:function(){var i,e={whiteSpace:"nowrap",fontWeight:"bold"};return(0,C.jsxs)(N.Z,{children:[(0,C.jsx)(O.Z,{sx:(0,l.Z)((0,l.Z)({},e),{},{width:"5%"}),align:"center",children:"#"}),(0,C.jsx)(O.Z,{sx:e,children:"T\xean \u0111\u1ecba \u0111i\u1ec3m"}),(0,C.jsx)(O.Z,{sx:e,children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,C.jsx)(O.Z,{sx:e,children:"\u0110\u1ecba ch\u1ec9"}),(0,C.jsx)(O.Z,{sx:e,children:"Tr\u1ea1ng th\xe1i"}),(null===n||void 0===n||null===(i=n.values)||void 0===i?void 0:i.id)&&(0,C.jsx)(O.Z,{align:"right",sx:e,children:"#"})]})}()}),(0,C.jsx)(M.Z,{children:null===b||void 0===b?void 0:b.map((function(i,e){return function(i,e){var t;return(0,C.jsxs)(N.Z,{hover:!0,children:[(0,C.jsx)(O.Z,{sx:{width:"5%"},align:"center",children:(0,C.jsx)(z.Z,{variant:"body2",children:e+1})}),(0,C.jsx)(O.Z,{sx:(0,l.Z)({maxWidth:350},H),component:"th",scope:"row",children:null===i||void 0===i?void 0:i.name}),(0,C.jsx)(O.Z,{children:null===i||void 0===i?void 0:i.mobile}),(0,C.jsx)(O.Z,{sx:(0,l.Z)((0,l.Z)({},H),{},{maxWidth:200}),children:null===i||void 0===i?void 0:i.address}),(0,C.jsx)(O.Z,{children:X(i)}),(null===n||void 0===n||null===(t=n.values)||void 0===t?void 0:t.id)&&(0,C.jsx)(O.Z,{children:Y(i)})]},i.id)}(i,e)}))})]}),!(null!==b&&void 0!==b&&b.length)&&(0,C.jsx)(q.Z,{})]})}),(0,C.jsx)(_,{open:u,dataEdit:y,handleClose:function(){return c(!1)},formikProp:n,getList:W}),V&&(0,C.jsx)(G.Z,{})]})},R=function(i){var e=i.visible,n=i.closeDrawer,o=i.dataEdit,a=i.getList,w=(0,d.I0)(),y=(0,u.Z)(),S=(0,c.Z)(y.breakpoints.down("lg")),k=(0,s.useState)(!1),N=(0,t.Z)(k,2),O=N[0],z=N[1],F=(0,s.useState)({}),P=(0,t.Z)(F,2),D=P[0],T=P[1],M=p.Ry().shape({name:p.Z_().trim().max(50).required("Vui l\xf2ng nh\u1eadp t\xean website"),description:p.Z_().trim().max(255),websiteGroupId:p.Z_().required("Vui l\xf2ng ch\u1ecdn nh\xf3m website")}),A=(0,h.TA)({enableReinitialize:!0,initialValues:{id:(null===o||void 0===o?void 0:o.id)||"",name:(null===o||void 0===o?void 0:o.name)||"",description:(null===o||void 0===o?void 0:o.description)||"",logo:(null===o||void 0===o?void 0:o.logo)||"",websiteGroupId:(null===o||void 0===o?void 0:o.websiteGroupId)||"",status:0===(null===o||void 0===o?void 0:o.status)?0:1},validationSchema:M,onSubmit:function(i){J(i)}}),J=function(i){var e,n;z(!0);var t=(0,l.Z)((0,l.Z)({},i),{},{name:null===i||void 0===i||null===(e=i.name)||void 0===e?void 0:e.trim(),nameOld:null===o||void 0===o||null===(n=o.name)||void 0===n?void 0:n.trim()}),s=new FormData;s.append("name",t.name),s.append("nameOld",t.nameOld),s.append("description",t.description),s.append("websiteGroupId",t.websiteGroupId),s.append("status",t.status),s.append("logo",t.logo),null!==o&&void 0!==o&&o.id?w({type:"website/update",payload:{id:null===o||void 0===o?void 0:o.id,params:s},callback:function(i){null!==i&&void 0!==i&&i.success?((0,r.Z)("success",null===i||void 0===i?void 0:i.message),a(),L()):(T(i.error),(0,r.Z)("error",i.message)),z(!1)}}):w({type:"website/add",payload:s,callback:function(i){z(!1),null!==i&&void 0!==i&&i.success?((0,r.Z)("success",null===i||void 0===i?void 0:i.message),a(),L()):(T(i.error),(0,r.Z)("error",i.message))}})},L=function(){n(),A.resetForm(),A.setTouched({},!1),T({})},q=[{value:0,label:"Th\xf4ng tin c\u01a1 b\u1ea3n",tab:(0,C.jsxs)(v.ZP,{container:!0,spacing:3,children:[(0,C.jsx)(v.ZP,{item:!0,xs:12,lg:4,children:(0,C.jsx)(g.Z,{name:"name",formik:A,errors:D,label:"T\xean website",required:!0})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,lg:4,children:(0,C.jsx)(I,{formik:A,setFieldValue:A.setFieldValue,addOrEdit:!0})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,lg:4,children:(0,C.jsx)(j.Z,{addOrEdit:!0,formik:A,setFieldValue:A.setFieldValue})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,lg:8,children:(0,C.jsx)(g.Z,{name:"description",formik:A,errors:D,label:"M\xf4 t\u1ea3",multiline:!0,rows:6})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,lg:4,children:(0,C.jsx)(V.Z,{image:A.values.logo?"".concat("https://cms-protal-sever.naru.software").concat(A.values.logo):"",setFieldValue:A.setFieldValue,field:"logo"})})]})},{value:1,label:"Th\xf4ng tin \u0111\u1ecba \u0111i\u1ec3m",tab:(0,C.jsx)(H,{formik:A})}];return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(b.Z,{open:e,title:null!==o&&void 0!==o&&o.id?"C\u1eadp nh\u1eadt th\xf4ng tin ".concat(null===o||void 0===o?void 0:o.name):"Th\xeam m\u1edbi wesite",handleClose:function(){L()},styleBox:{minWidth:S?"100%":"1000px",minHeight:"500px",maxHeight:"1200px"},styleChildBox:{p:"0px 30px 20px"},styleTitle:{p:"10px 30px"},showButtonCloseDialog:!0,children:(0,C.jsxs)(m.Z,{children:[(0,C.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,C.jsx)(E.Z,{tabWrapper:q}),(0,C.jsxs)(m.Z,{sx:{mt:3,mb:S?15:0,display:"flex",justifyContent:"center"},children:[(0,C.jsx)(x.Z,{onClick:function(){return L()},size:"small",variant:"outlined",sx:{mr:"10px"},endIcon:(0,C.jsx)(f.Z,{}),children:"H\u1ee7y"}),(0,C.jsx)(x.Z,{size:"small",variant:"contained",type:"submit",endIcon:(0,C.jsx)(Z.Z,{}),children:"L\u01b0u l\u1ea1i"})]})]}),O&&(0,C.jsx)(G.Z,{})]})})})},X=n(5403),Y=n(42419),K=Number("20"),Q=function(i){var e,n,l,t=i.setDataEdit,s=i.setVisibleDrawer,o=i.setLoading,u=(0,d.I0)(),c=(0,d.v9)(a.CF),m=(0,h.TA)({enableReinitialize:!0,initialValues:{name:(null===c||void 0===c||null===(e=c.filter)||void 0===e?void 0:e.name)||"",websiteGroupId:(null===c||void 0===c||null===(n=c.filter)||void 0===n?void 0:n.websiteGroupId)||"",status:(null===c||void 0===c||null===(l=c.filter)||void 0===l?void 0:l.status)||""},onSubmit:function(i){p(i)}}),p=function(i){var e,n;o(!0);var l={name:null===i||void 0===i||null===(e=i.name)||void 0===e?void 0:e.trim(),websiteGroupId:null===i||void 0===i?void 0:i.websiteGroupId,status:"".concat(null===i||void 0===i?void 0:i.status)};null!==i&&void 0!==i&&null!==(n=i.name)&&void 0!==n&&n.trim()||delete l.name,null!==i&&void 0!==i&&i.status||delete l.status,""===(null===i||void 0===i?void 0:i.websiteGroupId)&&delete l.websiteGroupId;var t={filter:JSON.stringify(l),range:JSON.stringify([0,K]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,logo,websiteGroupId,status,createdAt"};u((0,a.hX)(i)),u({type:"website/fetch",payload:t,callback:function(i){o(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,r.Z)("error",null===i||void 0===i?void 0:i.message)}})};return(0,C.jsx)("form",{onSubmit:m.handleSubmit,children:(0,C.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,C.jsx)(g.Z,{name:"name",formik:m,label:"T\xean website"})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,C.jsx)(I,{formik:m,setFieldValue:m.setFieldValue,addOrEdit:!1})}),(0,C.jsx)(v.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,C.jsx)(j.Z,{addOrEdit:!1,formik:m,setFieldValue:m.setFieldValue})}),(0,C.jsxs)(v.ZP,{item:!0,xs:12,md:6,lg:3,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,C.jsx)(x.Z,{variant:"contained",endIcon:(0,C.jsx)(X.Z,{}),type:"submit",children:"T\xecm ki\u1ebfm"}),(0,C.jsx)(x.Z,{variant:"outlined",color:"success",endIcon:(0,C.jsx)(Y.Z,{}),sx:{ml:2},onClick:function(){t({}),s(!0)},children:"Th\xeam m\u1edbi"})]})]})})},U=n(57246),$=n(58357),ii=n(72426),ei=n.n(ii),ni=Number("20"),li=function(i){var e=i.dataEdit,n=i.setDataEdit,o=i.setVisibleDrawer,v=i.loading,h=i.setLoading,p=i.getList,Z=(0,d.I0)(),f=(0,u.Z)(),b=(0,c.Z)(f.breakpoints.down("md")),g=(0,d.v9)(a.CF),j=g.data.list,w=g.data.pagination,y=(0,s.useState)(!1),S=(0,t.Z)(y,2),k=S[0],I=S[1],V=function(i,e){Z({type:"website/updateStatus",payload:{id:e,params:{status:i}},callback:function(i){!0===(null===i||void 0===i?void 0:i.success)?(0,r.Z)("success",null===i||void 0===i?void 0:i.message):(0,r.Z)("error",null===i||void 0===i?void 0:i.message)}})},E=function(i){return(0,C.jsx)(B.Z,{status:null===i||void 0===i?void 0:i.status,id:null===i||void 0===i?void 0:i.id,handleStatus:V})},F=function(i){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x.Z,{size:"small",variant:"outlined",endIcon:(0,C.jsx)(A.Z,{}),onClick:function(){n(i),o(!0)},children:"S\u1eeda"}),(0,C.jsx)(x.Z,{size:"small",variant:"outlined",color:"error",sx:{ml:1},endIcon:(0,C.jsx)(J.Z,{}),onClick:function(){I(!0),n(i)},children:"X\xf3a"})]})};return(0,C.jsxs)(m.Z,{sx:{position:"relative",pb:2},children:[(0,C.jsxs)(P.Z,{sx:{overflow:"auto"},children:[(0,C.jsxs)(D.Z,{children:[(0,C.jsx)(T.Z,{children:function(){var i={whiteSpace:"nowrap",fontWeight:"bold"};return(0,C.jsxs)(N.Z,{children:[(0,C.jsx)(O.Z,{sx:(0,l.Z)((0,l.Z)({},i),{},{width:"5%"}),align:"center",children:"#"}),(0,C.jsx)(O.Z,{sx:i,children:"T\xean website"}),(0,C.jsx)(O.Z,{sx:i,children:"M\xf4 t\u1ea3"}),(0,C.jsx)(O.Z,{sx:i,children:"Nh\xf3m website"}),(0,C.jsx)(O.Z,{sx:i,children:"Ng\xe0y t\u1ea1o"}),(0,C.jsx)(O.Z,{sx:i,children:"Tr\u1ea1ng th\xe1i"}),(0,C.jsx)(O.Z,{align:"right",sx:i,children:"H\xe0nh \u0111\u1ed9ng"})]})}()}),(0,C.jsx)(M.Z,{children:null===j||void 0===j?void 0:j.map((function(i,e){return function(i,e){var n;return(0,C.jsxs)(N.Z,{hover:!0,children:[(0,C.jsx)(O.Z,{sx:{width:"5%"},align:"center",children:(0,C.jsx)(z.Z,{variant:"body2",children:e+ni*((null===w||void 0===w?void 0:w.current)-1)+1})}),(0,C.jsx)(O.Z,{sx:{width:"20%",overflow:"hidden",maxWidth:300},component:"th",scope:"row",children:i.name}),(0,C.jsx)(O.Z,{sx:{overflow:"hidden",textOverflow:"ellipsis",minWidth:"300px",maxWidth:"500px"},children:null===i||void 0===i?void 0:i.description}),(0,C.jsx)(O.Z,{children:null===i||void 0===i||null===(n=i.websiteGroup)||void 0===n?void 0:n.name}),(0,C.jsx)(O.Z,{children:ei()(null===i||void 0===i?void 0:i.createdAt).format("DD/MM/YYYY HH:mm")}),(0,C.jsx)(O.Z,{children:E(i)}),(0,C.jsx)(O.Z,{align:"right",children:F(i)})]},i.id)}(i,e)}))})]}),(null===j||void 0===j?void 0:j.length)>0&&(0,C.jsx)(U.Z,{sx:{mt:2,display:"flex",justifyContent:"flex-end"},size:b?"small":"medium",count:Math.floor((null===w||void 0===w?void 0:w.total)/(null===w||void 0===w?void 0:w.pageSize))+1,page:null===w||void 0===w?void 0:w.current,color:"primary",shape:"rounded",onChange:function(i,e){var n,l;h(!0);var t=g.filter,s={name:null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.trim(),websiteGroupId:null===t||void 0===t?void 0:t.websiteGroupId,status:null===t||void 0===t?void 0:t.status};null!==t&&void 0!==t&&null!==(l=t.name)&&void 0!==l&&l.trim()||delete s.name,""===(null===t||void 0===t?void 0:t.status)&&delete s.status,""===(null===t||void 0===t?void 0:t.websiteGroupId)&&delete s.websiteGroupId;var o={filter:JSON.stringify(s),range:JSON.stringify([e*w.pageSize-w.pageSize,e*w.pageSize]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,logo,websiteGroupId,status,createdAt"};Z({type:"website/fetch",payload:o,callback:function(i){h(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,r.Z)("error",null===i||void 0===i?void 0:i.message)}})}})]}),0===(null===j||void 0===j?void 0:j.length)&&(0,C.jsx)(q.Z,{}),v&&(0,C.jsx)(G.Z,{}),k&&(0,C.jsx)($.Z,{name:null===e||void 0===e?void 0:e.name,open:k,handleClose:function(i){I(!1),i&&Z({type:"website/delete",payload:{id:null===e||void 0===e?void 0:e.id},callback:function(i){!0===(null===i||void 0===i?void 0:i.success)?((0,r.Z)("success",null===i||void 0===i?void 0:i.message),p()):!1===(null===i||void 0===i?void 0:i.success)&&(0,r.Z)("error",i&&i.message)}})}})]})},ti=Number("20"),si=function(){var i=(0,d.I0)(),e=(0,d.v9)(a.CF),n=(0,s.useState)(!1),u=(0,t.Z)(n,2),c=u[0],v=u[1],m=(0,s.useState)(!1),x=(0,t.Z)(m,2),h=x[0],p=x[1],Z=(0,s.useState)({id:0,name:"",description:"",logo:"",websiteGroupId:0,createdAt:"",status:0}),f=(0,t.Z)(Z,2),b=f[0],g=f[1];(0,s.useEffect)((function(){j()}),[]);var j=function(){v(!0);var n=e.query,t=e.filter,s={filter:JSON.stringify({}),range:JSON.stringify([0,ti]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,name,description,logo,websiteGroupId,status,createdAt"};"{}"!==(null===n||void 0===n?void 0:n.filter)&&(s=(0,l.Z)((0,l.Z)({},s),{},{filter:null===n||void 0===n?void 0:n.filter})),"{}"!==(null===n||void 0===n?void 0:n.range)&&(s=(0,l.Z)((0,l.Z)({},s),{},{range:null===n||void 0===n?void 0:n.range})),"{}"!==(null===n||void 0===n?void 0:n.sort)&&(s=(0,l.Z)((0,l.Z)({},s),{},{sort:null===n||void 0===n?void 0:n.sort})),i((0,a.hX)(t)),i({type:"website/fetch",payload:s,callback:function(i){v(!1),!1===(null===i||void 0===i?void 0:i.success)&&(0,r.Z)("error",null===i||void 0===i?void 0:i.message)}})};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.Z,{title:(0,C.jsx)(Q,{setDataEdit:g,setVisibleDrawer:p,setLoading:v}),content:!1,children:(0,C.jsx)(li,{getList:j,dataEdit:b,setDataEdit:g,setVisibleDrawer:p,loading:c,setLoading:v})}),(0,C.jsx)(R,{visible:h,closeDrawer:function(){return p(!1)},dataEdit:b,getList:j})]})}}}]);
//# sourceMappingURL=984.19ddbaf0.chunk.js.map