"use strict";(self.webpackChunkmy_app2=self.webpackChunkmy_app2||[]).push([[999],{999:function(s,e,t){t.r(e),t.d(e,{default:function(){return D}});var n=t(5671),r=t(3144),o=t(7326),u=t(136),_=t(7277),a=t(2791),i={users:"Users_users__55eY6",users__title:"Users_users__title__9iuv+",users__show:"Users_users__show__uoSVY",users__btn:"Users_users__btn__kn-mN"},l=t(4942),c=t(9439),d={steps:"Paginator_steps__mE9ji",steps__button:"Paginator_steps__button__NQlu+",steps__current:"Paginator_steps__current__NosPi",no__active:"Paginator_no__active__tn3VO"},p=t(4238),h=t(1694),g=t.n(h),m=t(184);function j(s){var e,t,n=(0,a.useState)(1),r=(0,c.Z)(n,2),o=r[0],u=r[1];console.log(s);return(0,a.useEffect)((function(){s.setCurrentPage(1),s.setAjaxAndWriteUser(1)}),[]),(0,m.jsxs)("div",{className:d.steps,children:[(0,m.jsx)("button",{onClick:function(){u((function(s){return s-1}))},disabled:1===o,className:g()((e={},(0,l.Z)(e,d.no__active,1===o),(0,l.Z)(e,d.steps__button,!0),e)),children:"prev"}),function(e,t,n,r){if(r.length>0){var u=r[o],_=[];return u.forEach((function(r){_.push((0,m.jsx)("span",{className:e===r?n.steps__current:n.steps__nocurrent,onClick:function(){t(r),s.setCurrentPage(r)},children:r},(0,p.Qg)()))})),_}}(s.numberCurrentPage,s.setAjaxAndWriteUser,d,s.lengthCountPage),(0,m.jsx)("button",{onClick:function(){u((function(s){return s+1}))},disabled:o===s.lengthCountPage.length,className:g()((t={},(0,l.Z)(t,d.no__active,o===s.lengthCountPage.length),(0,l.Z)(t,d.steps__button,!0),t)),children:"next"})]})}var x={users__content_list:"ListUsers_users__content_list__z365a",users__content_line:"ListUsers_users__content_line__Sv78A"},P={users__point:"OneUser_users__point__Ejy+u"},f=t(1087),U={user__followed:"OneUserPhoto_user__followed__Ao7l-",user__imag:"OneUserPhoto_user__imag__4Fr41",users__point_imag:"OneUserPhoto_users__point_imag__W7R0y",user__wrap:"OneUserPhoto_user__wrap__EbmdE"};function C(s){var e=s.props,t=e.user,n=t.id,r=t.followed;return(0,m.jsx)("button",{className:U.user__followed,disabled:e.isDisabledFollowButton.includes(n),onClick:function(){return r?e.thunkUnFollow(n):e.thunkAddFollow(n)},children:r?"Unfollower":"Follower"})}function v(s){var e=s.props,t=e.user,n=t.id,r=t.photos;return(0,m.jsx)("div",{className:U.users__point_imag,children:(0,m.jsxs)("div",{className:U.user__wrap,children:[(0,m.jsx)(f.OL,{to:"/profile/".concat(n),children:(0,m.jsx)("img",{src:r.small?r.small:"noava.png",alt:"",className:U.user__imag})}),(0,m.jsx)(C,{props:e})]})})}var b={users__point_body:"OneUserBody_users__point_body__OK5wm",user__description:"OneUserBody_user__description__POqLN",user__status:"OneUserBody_user__status__0Pif2",user__location:"OneUserBody_user__location__eSOi7"};function w(s){var e=s.user;return(0,m.jsxs)("div",{className:b.users__point_body,children:[(0,m.jsxs)("div",{className:b.user__description,children:[(0,m.jsx)("p",{className:b.user__name,children:e.name}),(0,m.jsx)("p",{className:b.user__status,children:e.status})]}),(0,m.jsx)("div",{className:b.user__location,children:(0,m.jsx)("p",{children:e.location})})]})}function N(s){return(0,m.jsxs)("div",{className:P.users__point,children:[(0,m.jsx)(v,{props:s}),(0,m.jsx)(w,{user:s.user})]})}function A(s){var e=s.props;return(0,m.jsxs)("div",{className:x.users__content_list,children:[(0,m.jsx)("hr",{className:x.users__content_line}),(0,p.Nh)(e,N)]})}var k=(0,a.memo)((function(s){return(0,m.jsxs)("div",{className:i.users,children:[(0,m.jsx)("h2",{className:i.users__title,children:"\u0414\u0440\u0443\u0437\u044c\u044f"}),(0,m.jsx)(j,{numberCurrentPage:s.numberCurrentPage,setAjaxAndWriteUser:s.setAjaxAndWriteUser,totalCountPage:s.totalCountPage,lengthCountPage:s.lengthCountPage,setCurrentPage:s.setCurrentPage}),(0,m.jsxs)("div",{className:i.users__content,children:[(0,m.jsx)(A,{props:s}),(0,m.jsx)("div",{className:i.users__show,children:(0,m.jsx)("div",{className:i.users__show_vrap,children:(0,m.jsx)("button",{className:i.users__btn,children:"Show more"})})})]})]})})),F=t(9101),y=t(9511),O=t(4639),Z=t(7091),W=t(7781),B=t(372),E=t(6351),L=function(s){(0,u.Z)(t,s);var e=(0,_.Z)(t);function t(s){var r;return(0,n.Z)(this,t),(r=e.call(this,s)).setAjaxAndWriteUser=r.setAjaxAndWriteUser.bind((0,o.Z)(r)),r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.props.thunkAddUsers(this.props.countUsersPage,this.props.totalCountPage,this.props.numberCurrentPage,this.props.isLoader)}},{key:"setAjaxAndWriteUser",value:function(s){this.props.thunkAddNextUsers(s,this.props.countUsersPage)}},{key:"render",value:function(){return(0,m.jsxs)(m.Fragment,{children:["  ",this.props.isLoader?(0,m.jsx)(Z.Z,{}):null,(0,m.jsx)(k,{setCurrentPage:this.props.setCurrentPage,numberCurrentPage:this.props.numberCurrentPage,setAjaxAndWriteUser:this.setAjaxAndWriteUser,countUsersPage:this.props.countUsersPage,users:this.props.users,isDisabledFollowButton:this.props.isDisabledFollowButton,thunkAddFollow:this.props.thunkAddFollow,thunkUnFollow:this.props.thunkUnFollow,totalCountPage:this.props.totalCountPage,lengthCountPage:this.props.lengthCountPage})]})}}]),t}(a.Component),D=(0,W.qC)((0,F.$j)((function(s){return{users:(0,E.Rf)(s),numberCurrentPage:(0,E.Rl)(s),countUsersPage:(0,E.YC)(s),totalCountPage:(0,E.z8)(s),isLoader:(0,E.jZ)(s),isDisabledFollowButton:(0,E.FE)(s),lengthCountPage:(0,E.B3)(s)}}),{setCurrentPage:O.D4,thunkAddUsers:y.sm,thunkAddNextUsers:y.iI,thunkAddFollow:y.Uu,thunkUnFollow:y.qF}),B.g)(L)}}]);
//# sourceMappingURL=999.106b9161.chunk.js.map