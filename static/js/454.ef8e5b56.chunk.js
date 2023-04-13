"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[454],{4934:function(e,o,t){t.d(o,{Z:function(){return i}});t(2791);var r="InputField_InputField__-AAGd",a="InputField_inputError__IqH1J",s="InputField_errorMessage__b59HU",n=t(184),i=function(e){var o=e.id,t=e.name,i=e.type,l=e.placeholder,u=e.handleChange,d=e.handleBlur,c=e.errors,f=e.touched,h=e.values,p=e.text;return(0,n.jsxs)("span",{className:r,children:[(0,n.jsxs)("label",{htmlFor:i,children:[p," "]}),(0,n.jsx)("input",{id:o,name:t,type:i,onChange:u,value:h[t],placeholder:l,onBlur:d,className:c[t]&&f[t]?a:""}),c[t]&&f[t]&&(0,n.jsx)("p",{className:s,children:c[t]})]})}},8216:function(e,o,t){t.r(o),t.d(o,{default:function(){return L}});var r=t(1413),a=t(5671),s=t(3144),n=t(136),i=t(7277),l=t(2791),u=t(9101),d=t(2661),c=t(6508),f={},h="Post_avatar__wYY9I",p="Post_postText__4Lm6J",m="Post_likesItem__m3xyx",g="Post_postWrapper__5ROJz",P=t(8166),v=t(184),x=function(e){var o=e.smallProfilePhoto,t=e.likesCount,r=e.text;return(0,v.jsxs)("div",{className:g,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:o||P,alt:"profile avatar",className:h}),(0,v.jsxs)("span",{className:p,children:[r," "]})]}),(0,v.jsxs)("div",{className:m,children:[" likes: ",t]})]})},b={addPostFieldError:"AddPostForm_addPostFieldError__gHvw-",errorMessage:"AddPostForm_errorMessage__xzbi9"},j=t(5705),_=t(1091),k=function(e){var o=e.addPost,t=(0,j.TA)({initialValues:{addPostField:""},validationSchema:_.vo,onSubmit:function(e,t){o(e.addPostField),t.resetForm()}}),r=t.values,a=t.errors,s=t.touched,n=t.isSubmitting,i=t.handleChange,l=t.handleBlur,u=t.handleSubmit;return(0,v.jsxs)("form",{onSubmit:u,autoComplete:"off",children:[(0,v.jsxs)("div",{className:b.textareaField,children:[(0,v.jsx)("textarea",{name:"addPostField",id:"addPostField",type:"textarea",onChange:i,value:r.addPostField,placeholder:"Share your news:)",onBlur:l,className:a.addPostField&&s.addPostField?b.addPostFieldError:""}),a.addPostField&&s.addPostField&&(0,v.jsx)("p",{className:b.errorMessage,children:a.addPostField})]}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{disabled:n,type:"submit",children:"add post"})})]})},F=function(e){var o=e.addPost,t=e.posts,r=e.smallProfilePhoto;return(0,v.jsxs)("div",{className:f.posts,children:["My posts",(0,v.jsx)(k,{addPost:o}),t.map((function(e,o){return(0,v.jsx)(x,{smallProfilePhoto:r,text:e.text,likesCount:t[o].likesCount},e.id)}))]})},y=(0,u.$j)((function(e){return{posts:e.profileReducer.posts}}),{addPost:c.q2})(F),N=t(9439),S={largeProfilePhoto:"ProfileInfo_largeProfilePhoto__YuZFa"},C=t.p+"static/media/defaultLargeUserPhoto.6fd2b4bcaf03a2cb4037.jpg",I={contactsField:"UserInfo_contactsField__XTWNR",profileInfo:"UserInfo_profileInfo__IJmn7"},Z=function(e){var o=e.contactTitle,t=e.contactValue;return(0,v.jsxs)("div",{className:I.contact,children:[o," - ",t||"none:)"]})},A=function(e){var o=e.profilePage,t=e.isOwner,r=e.setEditMode;return(0,v.jsxs)("div",{className:I.profileInfo,children:[(0,v.jsx)("div",{children:"Profile Information:"}),(0,v.jsxs)("div",{children:["Nickname: ",o.fullName||"none:)"]}),(0,v.jsxs)("div",{children:["General info about me: ",o.aboutMe||"none:)"]}),(0,v.jsxs)("div",{children:["Info about the job i'm looking for:",o.lookingForAJob?o.lookingForAJobDescription:"none:)"]}),(0,v.jsxs)("div",{className:I.contactsField,children:["My contacts: ",Object.keys(o.contacts).map((function(e,t){return(0,v.jsx)(Z,{contactTitle:e,contactValue:o.contacts[e]},t)}))]}),t&&(0,v.jsx)("button",{onClick:function(e){r(!0)},children:"Edit"})]})},w={profileInfo:"UserInfoForm_profileInfo__w4-cw",errorMessage:"UserInfoForm_errorMessage__LZ5L8"},M=t(4934),J=function(e){var o=e.profilePage,t=e.setEditMode,r=e.saveProfileChanges,a=(0,j.TA)({enableReinitialize:!0,initialValues:{fullName:o.fullName||"",aboutMe:o.aboutMe||"",lookingForAJob:o.lookingForAJob||!1,lookingForAJobDescription:o.lookingForAJobDescription||"",contacts:{facebook:o.contacts.facebook||"",website:o.contacts.website||"",vk:o.contacts.vk||"",twitter:o.contacts.twitter||"",instagram:o.contacts.instagram||"",youtube:o.contacts.youtube||"",github:o.contacts.github||"",mainLink:o.contacts.mainLink||""}},validationSchema:_.kp,onSubmit:function(e,o){var a=o.setSubmitting,s=o.setStatus;a(!0),r(e,s,a).then((function(){t(!1)})).catch((function(){}))}}),s=a.values,n=a.status,i=a.errors,l=a.touched,u=a.isSubmitting,d=a.handleChange,c=a.handleBlur,f=a.handleSubmit;return(0,v.jsxs)("form",{onSubmit:f,autoComplete:"off",className:w.profileInfo,children:[(0,v.jsx)("div",{children:"Profile Information:"}),(0,v.jsx)("div",{children:(0,v.jsx)(M.Z,{id:"fullName",name:"fullName",type:"text",placeholder:"Enter nickName",handleChange:d,handleBlur:c,errors:i,touched:l,values:s,text:"Nickname: "})}),(0,v.jsx)("div",{children:(0,v.jsx)(M.Z,{id:"aboutMe",name:"aboutMe",type:"textarea",placeholder:"Enter smth about you",handleChange:d,handleBlur:c,errors:i,touched:l,values:s,text:"General info about me: "})}),(0,v.jsx)("div",{children:(0,v.jsxs)("label",{children:["Looking for a job?",(0,v.jsx)("input",{id:"lookingForAJob",name:"lookingForAJob",type:"checkbox",onChange:d,checked:s.lookingForAJob,onBlur:c,className:i.lookingForAJob&&l.lookingForAJob?w.inputError:""})]})}),(0,v.jsx)("div",{children:(0,v.jsx)(M.Z,{id:"lookingForAJobDescription",name:"lookingForAJobDescription",type:"textarea",placeholder:"Describe the job",handleChange:d,handleBlur:c,errors:i,touched:l,values:s,text:"Info about the job i'm looking for: "})}),(0,v.jsxs)("div",{className:w.contactsField,children:["My contacts:",Object.keys(o.contacts).map((function(e,o){var t,r,a,n,u;return(0,v.jsxs)("div",{children:[e," - ",(0,v.jsx)("input",{id:e,name:"contacts.".concat(e),type:"text",placeholder:"Input ".concat(e),onChange:d,onBlur:c,className:null!==(t=i.contacts)&&void 0!==t&&t[e]&&null!==(r=l.contacts)&&void 0!==r&&r[e]?w.inputError:"",value:s.contacts[e]}),(null===(a=i.contacts)||void 0===a?void 0:a[e])&&(null===(n=l.contacts)||void 0===n?void 0:n[e])&&(0,v.jsx)("p",{className:w.errorMessage,children:null===(u=i.contacts)||void 0===u?void 0:u[e]})]},o)}))]}),n&&(0,v.jsx)("div",{className:w.errorMessage,children:n}),(0,v.jsx)("button",{disabled:u,type:"submit",children:"Save"})]})},E=function(e){var o=e.profilePage,t=e.isOwner,r=e.saveProfilePhoto,a=e.saveProfileChanges,s=(0,l.useState)(!1),n=(0,N.Z)(s,2),i=n[0],u=n[1];return(0,v.jsxs)("div",{className:S.profileInfoAndPhoto,children:[(0,v.jsx)("img",{className:S.largeProfilePhoto,alt:"large profile avatar",src:o.photos.large?o.photos.large:C}),t&&(0,v.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),i?(0,v.jsx)(J,{saveProfileChanges:a,setEditMode:u,profilePage:o}):(0,v.jsx)(A,{setEditMode:u,profilePage:o,isOwner:t})]})},R={mainPic:"Profile_mainPic__9UGwW"},D=l.memo((function(e){var o=e.profileStatus,t=e.updateProfileStatus,r=(0,l.useState)(!1),a=(0,N.Z)(r,2),s=a[0],n=a[1],i=(0,l.useState)(o),u=(0,N.Z)(i,2),d=u[0],c=u[1];(0,l.useEffect)((function(){return c(o)}),[o]);var f;return f=s?(0,v.jsx)("input",{value:d||"",onChange:function(e){c(e.target.value)},autoFocus:!0,onBlur:function(){n(!1),t(d)}}):(0,v.jsx)("span",{onClick:function(){n(!0)},children:o||"defaultStatus"}),(0,v.jsx)("div",{children:f})})),O=function(e){var o=e.profilePage,t=e.profileStatus,r=e.updateProfileStatus,a=e.saveProfilePhoto,s=e.isOwner,n=e.saveProfileChanges;return o?(0,v.jsxs)("main",{className:R.content,children:[(0,v.jsx)(D,{profileStatus:t,updateProfileStatus:r}),(0,v.jsx)(E,{saveProfileChanges:n,isOwner:s,saveProfilePhoto:a,profilePage:o}),(0,v.jsx)(y,{smallProfilePhoto:o.photos.small})]}):(0,v.jsx)(d.Z,{})},U=t(7689),q=t(1548),B=function(e){(0,n.Z)(t,e);var o=(0,i.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=o.call.apply(o,[this].concat(s))).refreshProfilePage=function(){var o=e.props.param.userId;o||(o=e.props.authorizedUserId),e.props.getProfilePage(o),e.props.getProfileStatus(o)},e}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.refreshProfilePage()}},{key:"componentDidUpdate",value:function(e){e.param.userId!==this.props.param.userId&&this.refreshProfilePage()}},{key:"render",value:function(){return(0,v.jsx)(O,{saveProfileChanges:this.props.saveProfileChanges,saveProfilePhoto:this.props.saveProfilePhoto,isOwner:!this.props.param.userId,profileStatus:this.props.profileStatus,updateProfileStatus:this.props.updateProfileStatus,profilePage:this.props.profilePage})}}]),t}(l.Component),T=(0,q.D)(B),L=(0,u.$j)((function(e){return{profilePage:e.profileReducer.profilePage,profileStatus:e.profileReducer.profileStatus,authorizedUserId:e.authReducer.id,isAuth:e.authReducer.isAuth}}),{getProfilePage:c.CJ,updateProfileStatus:c.vq,getProfileStatus:c.TL,saveProfilePhoto:c.ew,saveProfileChanges:c.Z})((function(e){return(0,v.jsx)(T,(0,r.Z)((0,r.Z)({},e),{},{param:(0,U.UO)()}))}))},1548:function(e,o,t){t.d(o,{D:function(){return h}});var r=t(1413),a=t(5671),s=t(3144),n=t(136),i=t(7277),l=t(2791),u=t(9101),d=t(7689),c=t(184),f=function(e){return{isAuth:e.authReducer.isAuth}},h=function(e){var o=function(o){(0,n.Z)(l,o);var t=(0,i.Z)(l);function l(){return(0,a.Z)(this,l),t.apply(this,arguments)}return(0,s.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,r.Z)({},this.props)):(0,c.jsx)(d.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(f)(o)}},1091:function(e,o,t){t.d(o,{W3:function(){return a},bD:function(){return n},kp:function(){return i},vo:function(){return s}});var r=t(6727),a=r.Ry().shape({email:r.Z_().email("Please enter the valid email.").required("Email required."),password:r.Z_().min(5,"Password is too short - should be 5 chars minimum.").matches(/(?=.*[0-9])/,{message:"Please create a stronger password."}).required("Password required."),rememberMe:r.O7()}),s=r.Ry().shape({addPostField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")}),n=r.Ry().shape({addMessageField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")}),i=r.Ry().shape({fullName:r.Z_().max(15,"Nickname is too long - should be 15 chars maximum."),aboutMe:r.Z_().max(50,"General info is too long - should be 50 chars maximum."),lookingForAJob:r.O7(),lookingForAJobDescription:r.Z_().max(50,"Text is too long - should be 50 chars maximum.")})},8166:function(e,o,t){e.exports=t.p+"static/media/defaultSmallUserPhoto.b03d82111adb48e16775.jpeg"}}]);
//# sourceMappingURL=454.ef8e5b56.chunk.js.map