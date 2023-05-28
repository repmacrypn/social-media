"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[621],{4:function(n,e,r){r.d(e,{Z:function(){return i}});r(2791);var t=r.p+"static/media/preloader.9fafd3bfcc215f8697284986422623e8.svg",o="Preloader_preloader__FrZYS",s=r(184),i=function(){return(0,s.jsx)("div",{className:o,children:(0,s.jsx)("img",{alt:"preloader",src:t})})}},2316:function(n,e,r){r.d(e,{v:function(){return a}});r(2791);var t=r(3158),o=(r(3292),r(184)),s=function(n){var e=n.contactTitle,r=n.contactValue;return(0,o.jsxs)("div",{className:t.Z.contact,children:[e," - ",r||"none:)"]})},i=function(n){var e=n.text,r=n.listValue;return(0,o.jsxs)("div",{className:t.Z.profileInfoList,children:[(0,o.jsxs)("span",{className:t.Z.title,children:[e," "]}),r]})},a=function(n){var e=n.text;return(0,o.jsx)("div",{className:t.Z.mainAbstract,children:e})};e.Z=function(n){var e=n.profilePage,r=n.isOwner,u=n.setEditMode;return(0,o.jsxs)("div",{className:t.Z.profileInfo,children:[(0,o.jsx)(a,{text:"Profile Information"}),(0,o.jsx)(i,{text:"Nickname:",listValue:e.fullName||"none:)"}),(0,o.jsx)(i,{text:"General info about me:",listValue:e.aboutMe||"none:)"}),(0,o.jsx)(i,{text:"Info about the job:",listValue:e.lookingForAJob?e.lookingForAJobDescription:"none:)"}),(0,o.jsx)(i,{text:"My contacts:",listValue:Object.keys(e.contacts).map((function(n,r){return(0,o.jsx)(s,{contactTitle:n,contactValue:e.contacts[n]},r)}))}),r&&(0,o.jsx)("button",{onClick:function(){u(!0)},className:"defaultWebsiteButton",children:"Edit"})]})}},5621:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t=r(5671),o=r(3144),s=r(136),i=r(7277),a=r(2791),u=r(9101),l=r(161),c="NOT_FOUND";var f=function(n,e){return n===e};function p(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?f:t,s=r.maxSize,i=void 0===s?1:s,a=r.resultEqualityCheck,u=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:c},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return c}return{get:t,put:function(e,o){t(e)===c&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,u);function p(){var e=l.get(arguments);if(e===c){if(e=n.apply(null,arguments),a){var r=l.getEntries().find((function(n){return a(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return p.clearCache=function(){return l.clear()},p}function d(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];return function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var s,i=0,a={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(a=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=a.memoizeOptions,c=void 0===l?r:l,f=Array.isArray(c)?c:[c],p=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}(t),d=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(f)),g=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return s=d.apply(null,n)}));return Object.assign(g,{resultFunc:u,memoizedResultFunc:d,dependencies:p,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),g}}var g=d(p),h=g((function(n){return n.searchForFriendsReducer.friends}),(function(n){return n.filter((function(){return!0}))})),v=function(n){return n.searchForFriendsReducer.count},m=function(n){return n.searchForFriendsReducer.totalCount},w=function(n){return n.searchForFriendsReducer.currentPage},_=function(n){return n.searchForFriendsReducer.isFetching},x=function(n){return n.searchForFriendsReducer.followingInProgressArray},j="FriendUser_friendUser__RjWyt",I="UserAvatars_userAvatars__bKgCU",y=r(3793),F=r(1087),P=(r(3292),r(184)),C=function(n){var e=n.id,r=n.follow,t=n.unfollow,o=n.followed,s=n.src,i=n.setFollowingInProgressUserId,a=n.followingInProgressArray;return(0,P.jsxs)("div",{className:I,children:[(0,P.jsx)(F.OL,{to:"../profile/".concat(e),children:(0,P.jsx)("img",{src:s||y,alt:"User Avatar"})}),(0,P.jsx)("button",{className:"defaultWebsiteButton",disabled:a.some((function(n){return n===e})),onClick:function(){i(e,!0),o?t(e):r(e)},children:o?"unfollow":"follow"})]})},U="UserGeneralInfo_userGeneralInfo__eZkEE",k="UserGeneralInfo_userNameWrapper__IuvqJ",b="UserGeneralInfo_userStatusWrapper__LVpNc",N="UserGeneralInfo_userName__4+Knn",A="UserGeneralInfo_userStatus__U44FV",O=a.memo((function(n){var e=n.name,r=n.status;return(0,P.jsxs)("div",{className:U,children:[(0,P.jsxs)("div",{className:k,children:[(0,P.jsx)("span",{className:N,children:"nickname: "}),(0,P.jsx)("span",{children:e})]}),(0,P.jsxs)("div",{className:b,children:[(0,P.jsx)("span",{className:A,children:"Status: "}),(0,P.jsx)("span",{children:r||"none for now:)"})]})]})})),S=function(n){var e=n.friendState,r=n.setFollowingInProgressUserId,t=n.followingInProgressArray,o=n.follow,s=n.unfollow;return(0,P.jsxs)("div",{className:j,children:[(0,P.jsx)(C,{src:e.photos.small,id:e.id,followed:e.followed,setFollowingInProgressUserId:r,followingInProgressArray:t,follow:o,unfollow:s}),(0,P.jsx)(O,{name:e.name,status:e.status})]})},Z={paginatorButtonWrapper:"SearchForFriends_paginatorButtonWrapper__XSKXS",selectedPaginatorButton:"SearchForFriends_selectedPaginatorButton__uXten",paginatorButton:"SearchForFriends_paginatorButton__6g94e"},B=r(4),E=function(n,e,r){for(var t=Math.ceil(n/e),o=r,s=[],i=1;i<=t;i++)s.push(i);return o-3<0?s.slice(0,5):s.slice(o-3,o+2)},R=r(2316);var V=function(n){var e=n.totalCount,r=n.count,t=n.currentPage,o=n.changeCurrentPageOnClick;return(0,P.jsx)("div",{className:Z.paginatorButtonWrapper,children:E(e,r,t).map((function(n){return(0,P.jsx)("span",{className:n===t?Z.selectedPaginatorButton:Z.paginatorButton,onClick:function(){return o(n)},children:n},n)}))})},W=function(n){var e=n.isFetching,r=n.currentPage,t=n.changeCurrentPageOnClick,o=n.follow,s=n.unfollow,i=n.friends,a=n.setFollowingInProgressUserId,u=n.followingInProgressArray,l=n.totalCount,c=n.count;return e?(0,P.jsx)(B.Z,{}):(0,P.jsxs)("div",{className:Z.SFFPageWrapper,children:[(0,P.jsx)(R.v,{text:"Find Friends"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(V,{totalCount:l,count:c,currentPage:r,changeCurrentPageOnClick:t}),i.map((function(n){return(0,P.jsx)(S,{id:n.id,friendState:n,setFollowingInProgressUserId:a,followingInProgressArray:u,follow:o,unfollow:s},n.id)}))]})]})},L=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).changeCurrentPageOnClick=function(e){n.props.getUsersOnPageChange(n.props.count,e)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsersOnPageLoad(this.props.count,this.props.currentPage)}},{key:"render",value:function(){return(0,P.jsx)(W,{friends:this.props.friends,totalCount:this.props.totalCount,count:this.props.count,currentPage:this.props.currentPage,changeCurrentPageOnClick:this.changeCurrentPageOnClick,isFetching:this.props.isFetching,setFollowingInProgressUserId:this.props.setFollowingInProgressUserId,followingInProgressArray:this.props.followingInProgressArray,follow:this.props.follow,unfollow:this.props.unfollow})}}]),r}(a.Component),G=(0,u.$j)((function(n){return{friends:h(n),count:v(n),totalCount:m(n),currentPage:w(n),isFetching:_(n),followingInProgressArray:x(n)}}),{setFollowingInProgressUserId:l.U2,getUsersOnPageChange:l.YL,getUsersOnPageLoad:l.Qv,follow:l.ZN,unfollow:l.fv})(L)},3292:function(){},3158:function(n,e){e.Z={profileInfo:"UserInfo_profileInfo__sk3oM",profileInfoList:"UserInfo_profileInfoList__pmYjE",mainAbstract:"UserInfo_mainAbstract__vr-kB",title:"UserInfo_title__DTwwC",contact:"UserInfo_contact__4rq4v"}},3793:function(n,e,r){n.exports=r.p+"static/media/defaultSmallUserPhoto.b8445dc4ff6cee3f2e2f.jpg"}}]);
//# sourceMappingURL=621.bb664041.chunk.js.map