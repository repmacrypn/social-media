"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[210],{5176:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var o=r(1413),s=r(5671),a=r(3144),i=r(136),n=r(7277),l=r(2791),u=r(9101),d=r(2661),c=r(6508),f={},p="Post_avatar__wYY9I",h="Post_postText__4Lm6J",m="Post_likesItem__m3xyx",P="Post_postWrapper__5ROJz",x=r(8166),g=r(184),j=function(e){var t=e.smallProfilePhoto,r=e.likesCount,o=e.text;return(0,g.jsxs)("div",{className:P,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:t||x,alt:"profile avatar",className:p}),(0,g.jsxs)("span",{className:h,children:[o," "]})]}),(0,g.jsxs)("div",{className:m,children:[" likes: ",r]})]})},v={addPostFieldError:"AddPostForm_addPostFieldError__gHvw-",errorMessage:"AddPostForm_errorMessage__xzbi9"},b=r(5705),_=r(1091),S=function(e){var t=e.addPost,r=(0,b.TA)({initialValues:{addPostField:""},validationSchema:_.vo,onSubmit:function(e,r){t(e.addPostField),r.resetForm()}}),o=r.values,s=r.errors,a=r.touched,i=r.isSubmitting,n=r.handleChange,l=r.handleBlur,u=r.handleSubmit;return(0,g.jsxs)("form",{onSubmit:u,autoComplete:"off",children:[(0,g.jsxs)("div",{className:v.textareaField,children:[(0,g.jsx)("textarea",{name:"addPostField",id:"addPostField",type:"textarea",onChange:n,value:o.addPostField,placeholder:"Share your news:)",onBlur:l,className:s.addPostField&&a.addPostField?v.addPostFieldError:""}),s.addPostField&&a.addPostField&&(0,g.jsx)("p",{className:v.errorMessage,children:s.addPostField})]}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{disabled:i,type:"submit",children:"add post"})})]})},F=function(e){var t=e.addPost,r=e.posts,o=e.smallProfilePhoto;return(0,g.jsxs)("div",{className:f.posts,children:["My posts",(0,g.jsx)(S,{addPost:t}),r.map((function(e,t){return(0,g.jsx)(j,{smallProfilePhoto:o,text:e.text,likesCount:r[t].likesCount},e.id)}))]})},k=(0,u.$j)((function(e){return{posts:e.profileReducer.posts}}),{addPost:c.q2})(F),y={largeProfilePhoto:"ProfileInfo_largeProfilePhoto__YuZFa",profileInfo:"ProfileInfo_profileInfo__KHMX6"},Z=r.p+"static/media/defaultLargeUserPhoto.6fd2b4bcaf03a2cb4037.jpg",N=function(e){var t=e.profilePage;return(0,g.jsxs)("div",{className:y.profileInfoAndPhoto,children:[(0,g.jsx)("img",{className:y.largeProfilePhoto,alt:"large profile avatar",src:t.photos.large?t.photos.large:Z}),(0,g.jsxs)("div",{className:y.profileInfo,children:["Hey! ",(0,g.jsx)("br",{}),"My name is ",t.fullName?t.fullName:"none:)"," ",(0,g.jsx)("br",{}),"Some info about me: ",t.aboutMe?t.aboutMe:"none:)"," ",(0,g.jsx)("br",{}),"Looking for a job description: ",t.lookingForAJob?t.lookingForAJobDescription:"none:)"," ",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"My contacts:  ",(0,g.jsx)("br",{}),"vk - ",t.contacts.vk?t.contacts.vk:"none:)"," ",(0,g.jsx)("br",{}),"facebook - ",t.contacts.facebook?t.contacts.facebook:"none:)"," ",(0,g.jsx)("br",{}),"instagram - ",t.contacts.instagram?t.contacts.instagram:"none:)"," ",(0,g.jsx)("br",{}),"github - ",t.contacts.github?t.contacts.github:"none:)"," ",(0,g.jsx)("br",{})]})]})},C={mainPic:"Profile_mainPic__9UGwW"},I=r(9439),A=l.memo((function(e){var t=e.profileStatus,r=e.updateProfileStatus,o=(0,l.useState)(!1),s=(0,I.Z)(o,2),a=s[0],i=s[1],n=(0,l.useState)(t),u=(0,I.Z)(n,2),d=u[0],c=u[1];(0,l.useEffect)((function(){return c(t)}),[t]);var f;return f=a?(0,g.jsx)("input",{value:d||"",onChange:function(e){c(e.target.value)},autoFocus:!0,onBlur:function(){i(!1),r(d)}}):(0,g.jsx)("span",{onClick:function(){i(!0)},children:t||"defaultStatus"}),(0,g.jsx)("div",{children:f})})),M=function(e){var t=e.profilePage,r=e.profileStatus,o=e.updateProfileStatus;return t?(0,g.jsxs)("main",{className:C.content,children:[(0,g.jsx)(A,{profileStatus:r,updateProfileStatus:o}),(0,g.jsx)(N,{profilePage:t}),(0,g.jsx)(k,{smallProfilePhoto:t.photos.small})]}):(0,g.jsx)(d.Z,{})},R=r(7689),w=r(1548),q=function(e){(0,i.Z)(r,e);var t=(0,n.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).refreshProfilePage=function(){var t=e.props.param.userId;t||(t=e.props.authorizedUserId),e.props.getProfilePage(t),e.props.getProfileStatus(t)},e}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){this.refreshProfilePage()}},{key:"componentDidUpdate",value:function(e){e.param.userId!==this.props.param.userId&&this.refreshProfilePage()}},{key:"render",value:function(){return(0,g.jsx)(M,{profileStatus:this.props.profileStatus,updateProfileStatus:this.props.updateProfileStatus,profilePage:this.props.profilePage})}}]),r}(l.Component),U=(0,w.D)(q),D=(0,u.$j)((function(e){return{profilePage:e.profileReducer.profilePage,profileStatus:e.profileReducer.profileStatus,authorizedUserId:e.authReducer.id,isAuth:e.authReducer.isAuth}}),{getProfilePage:c.CJ,updateProfileStatus:c.vq,getProfileStatus:c.TL})((function(e){return(0,g.jsx)(U,(0,o.Z)((0,o.Z)({},e),{},{param:(0,R.UO)()}))}))},1548:function(e,t,r){r.d(t,{D:function(){return p}});var o=r(1413),s=r(5671),a=r(3144),i=r(136),n=r(7277),l=r(2791),u=r(9101),d=r(7689),c=r(184),f=function(e){return{isAuth:e.authReducer.isAuth}},p=function(e){var t=function(t){(0,i.Z)(l,t);var r=(0,n.Z)(l);function l(){return(0,s.Z)(this,l),r.apply(this,arguments)}return(0,a.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,o.Z)({},this.props)):(0,c.jsx)(d.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(f)(t)}},1091:function(e,t,r){r.d(t,{W3:function(){return s},bD:function(){return i},vo:function(){return a}});var o=r(6727),s=o.Ry().shape({email:o.Z_().email("Please enter the valid email.").required("Email required."),password:o.Z_().min(5,"Password is too short - should be 5 chars minimum.").matches(/(?=.*[0-9])/,{message:"Please create a stronger password."}).required("Password required."),rememberMe:o.O7()}),a=o.Ry().shape({addPostField:o.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")}),i=o.Ry().shape({addMessageField:o.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")})},8166:function(e,t,r){e.exports=r.p+"static/media/defaultSmallUserPhoto.b03d82111adb48e16775.jpeg"}}]);
//# sourceMappingURL=210.1a1d3979.chunk.js.map