"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[767],{2767:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var r=a(9101),d=a(7781),i=a(1548),t=a(2906),n=(a(2791),"Dialogs_dialogs__Iiw2Y"),u={},o=a(184),l=function(e){var s=e.message;return(0,o.jsx)("div",{className:u.message,children:s})},m={},c={messages:"AddMessageForm_messages__BI8qJ",addMessageFieldError:"AddMessageForm_addMessageFieldError__4dCr7",errorMessage:"AddMessageForm_errorMessage__mgYEJ"},g=a(5705),h=a(1091),p=function(e){var s=e.addMessage,a=(0,g.TA)({initialValues:{addMessageField:""},validationSchema:h.bD,onSubmit:function(e,a){s(e.addMessageField),a.resetForm()}}),r=a.values,d=a.errors,i=a.touched,t=a.isSubmitting,n=a.handleChange,u=a.handleBlur,l=a.handleSubmit;return(0,o.jsxs)("form",{onSubmit:l,autoComplete:"off",children:[(0,o.jsxs)("div",{className:c.textareaField,children:[(0,o.jsx)("textarea",{name:"addMessageField",id:"addMessageField",type:"textarea",onChange:n,value:r.addMessageField,placeholder:"Input your message!",onBlur:u,className:d.addMessageField&&i.addMessageField?c.addMessageFieldError:""}),d.addMessageField&&i.addMessageField&&(0,o.jsx)("p",{className:c.errorMessage,children:d.addMessageField})]}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{disabled:t,type:"submit",children:"Send Message"})})]})},x=function(e){var s=e.messagesState,a=e.addMessage;return(0,o.jsxs)("div",{className:m.messages,children:[s.messages.map((function(e,a){return(0,o.jsx)(l,{message:s.messages[a].message},e.id)})),(0,o.jsx)(p,{addMessage:a})]})},v=a(1087),f={active:"User_active__mQiL2",nonActive:"User_nonActive__I2CYm"},M=function(e){var s=e.index,a=e.name;return(0,o.jsx)("div",{className:f.item,children:(0,o.jsx)(v.OL,{className:function(e){var s=e.isActive;return"".concat(s?f.active:f.nonActive)},to:"/messages/".concat(s),children:a})})},_="Users_dialogItems__2kCsx",j=function(e){var s=e.users;return(0,o.jsx)("div",{className:_,children:s.map((function(e,s){return(0,o.jsx)(M,{index:s,name:e.name},e.id)}))})},F=function(e){var s=e.usersState,a=e.messagesState,r=e.createNewMessage,d=e.updateTextarea;return(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)(j,{users:s.userNames}),(0,o.jsx)(x,{messagesState:a,addMessage:r,updateMessageTextarea:d})]})},b=(0,d.qC)((0,r.$j)((function(e){return{messagesState:e.dialogsReducer.messagesWrapper,usersState:e.dialogsReducer.usersWrapper}}),{createNewMessage:t.s}),i.D)(F)},1548:function(e,s,a){a.d(s,{D:function(){return g}});var r=a(1413),d=a(5671),i=a(3144),t=a(136),n=a(7277),u=a(2791),o=a(9101),l=a(7689),m=a(184),c=function(e){return{isAuth:e.authReducer.isAuth}},g=function(e){var s=function(s){(0,t.Z)(u,s);var a=(0,n.Z)(u);function u(){return(0,d.Z)(this,u),a.apply(this,arguments)}return(0,i.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,m.jsx)(e,(0,r.Z)({},this.props)):(0,m.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,o.$j)(c)(s)}},1091:function(e,s,a){a.d(s,{W3:function(){return d},bD:function(){return t},vo:function(){return i}});var r=a(6727),d=r.Ry().shape({email:r.Z_().email("Please enter the valid email.").required("Email required."),password:r.Z_().min(5,"Password is too short - should be 5 chars minimum.").matches(/(?=.*[0-9])/,{message:"Please create a stronger password."}).required("Password required."),rememberMe:r.O7()}),i=r.Ry().shape({addPostField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")}),t=r.Ry().shape({addMessageField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")})}}]);
//# sourceMappingURL=767.75939a68.chunk.js.map