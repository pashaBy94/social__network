(self.webpackChunkmy_app2=self.webpackChunkmy_app2||[]).push([[59],{9059:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5671),o=n(3144),a=n(136),i=n(7277),s=n(2791),c=n(9439),p={login:"Login_login__9zpJq",form__login:"Login_form__login__6hlCq",form__login_title:"Login_form__login_title__rMx5A",wrap__input_form:"Login_wrap__input_form__ZM-zh",input__form:"Login_input__form__bLtm+",form__btn:"Login_form__btn__fiaWE",modal__login:"Login_modal__login__ldGbo",modal__password:"Login_modal__password__AtMgZ",input__error:"Login_input__error__0A66-",form__checkbox:"Login_form__checkbox__HbavS",messag__errors:"Login_messag__errors__tn2lR",wrap_captcha:"Login_wrap_captcha__A4mpM"},d=n(5705),h=n(1317),l=n(2007),u=n.n(l);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(_(t)),t.handleErrored=t.handleErrored.bind(_(t)),t.handleChange=t.handleChange.bind(_(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(_(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return s.createElement("div",f({},t,{ref:this.handleRecaptchaRef}))},r}(s.Component);m.displayName="ReCAPTCHA",m.propTypes={sitekey:u().string.isRequired,onChange:u().func,grecaptcha:u().object,theme:u().oneOf(["dark","light"]),type:u().oneOf(["image","audio"]),tabindex:u().number,onExpired:u().func,onErrored:u().func,size:u().oneOf(["compact","normal","invisible"]),stoken:u().string,hl:u().string,badge:u().oneOf(["bottomright","bottomleft","inline"])},m.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var g=n(2110),v=n.n(g);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var b={},x=0;var w="onloadcallback";var C,k,L=(C=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+w+"&render=explicit"},k=(k={callbackName:w,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function o(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var a=o.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+x++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof C?C():C,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=b[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[k.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=k,o=r.globalName,a=r.callbackName,i=r.scriptId;if(o&&"undefined"!==typeof window[o]&&(b[t]={loaded:!0,observers:{}}),b[t]){var s=b[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},b[t]={loaded:!1,observers:c};var p=document.createElement("script");for(var d in p.src=t,p.async=!0,k.attributes)p.setAttribute(d,k.attributes[d]);i&&(p.id=i);var h=function(e){if(b[t]){var n=b[t].observers;for(var r in n)e(n[r])&&delete n[r]}};a&&"undefined"!==typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=b[t];e&&(e.loaded=!0,h((function(t){return!a&&(t(e),!0)})))},p.onerror=function(){var e=b[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(p)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===k.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=b[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===k.removeOnUnmount&&delete b[e])},a.render=function(){var t=k.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(o[t]="undefined"!==typeof window[t]?window[t]:void 0),o.ref=r,(0,s.createElement)(e,o)},o}(s.Component),r=(0,s.forwardRef)((function(e,t){return(0,s.createElement)(n,y({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:u().func},v()(r,e)})(m),R=L,j=n(184);function O(e){return(0,j.jsxs)("div",{children:[(0,j.jsx)("img",{src:e.captchaUrl,alt:""}),(0,j.jsx)("input",{type:"text",id:"responseCaptcha",name:"responseCaptcha",placeholder:"captcha",onChange:e.handleChange,onBlur:e.handleBlur})," ",(0,j.jsx)("button",{onClick:function(t){t.preventDefault(),e.getCaptchaThank()},children:"O"})]})}function S(e){var t=(0,s.useState)(!0),n=(0,c.Z)(t,2),r=n[0],o=n[1],a=(0,s.useState)(!1),i=(0,c.Z)(a,2),l=i[0],u=i[1],f=function(){return o(!1)};return(0,j.jsx)(d.J9,{initialValues:{login:"",password:"",rememberMe:!1,responseCaptcha:""},validate:(0,h.Gu)(20,u),onSubmit:function(t,n){e.loginThank(t.login,t.password,t.rememberMe,t.responseCaptcha,n.setStatus,u)},children:function(t){return(0,j.jsxs)("form",{onSubmit:t.handleSubmit,className:p.form__login,children:[(0,j.jsx)("h3",{className:p.form__login_title,children:"You must log in"}),(0,j.jsxs)("div",{className:p.wrap__input_form,children:[(0,j.jsx)("input",{type:"text",id:"login",name:"login",placeholder:"login",onChange:t.handleChange,onBlur:t.handleBlur,className:t.touched.login&&t.errors.login?"".concat(p.input__error," ").concat(p.input__form):p.input__form}),t.touched.login&&t.errors.login&&(0,j.jsx)("div",{className:p.modal__login,children:t.errors.login})]}),(0,j.jsxs)("div",{className:p.wrap__input_form,children:[(0,j.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"password",onChange:t.handleChange,onBlur:t.handleBlur,className:t.touched.password&&t.errors.password?"".concat(p.input__error," ").concat(p.input__form):p.input__form}),t.touched.password&&t.errors.password&&(0,j.jsx)("div",{className:p.modal__password,children:t.errors.password})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"rememberMe",children:"remember my"}),(0,j.jsx)("input",{type:"checkbox",id:"rememberMe",name:"rememberMe",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.rememberMe,className:p.form__checkbox})]}),(0,j.jsx)("div",{className:p.wrap_captcha,children:(0,j.jsx)(R,{sitekey:"6LdqdB4mAAAAAD-2xGpIp6Ump4xyy7Er4jDU0-7Y",onChange:f,theme:"light",size:"normal",id:"capch"})}),e.captchaUrl?(0,j.jsx)(O,{handleChange:t.handleChange,handleBlur:t.handleBlur,responseCaptcha:t.values.responseCaptcha,captchaUrl:e.captchaUrl,getCaptchaThank:e.getCaptchaThank}):null,(0,j.jsx)("input",{type:"submit",value:"submit",onClick:function(){return u(!1)},disabled:r,className:p.form__btn}),l?(0,h.F1)(t,p):null]})}})}function E(e){return(0,j.jsx)("div",{className:p.login,children:(0,j.jsx)(S,{loginThank:e.loginThank,captchaUrl:e.captchaUrl,getCaptchaThank:e.getCaptchaThank})})}var T=n(9101),I=n(9511),N=n(7689),U=n(6351),A=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return this.props.isAuth?(0,j.jsx)(N.Fg,{replace:!0,to:"/profile"}):(0,j.jsx)(E,{loginThank:this.props.loginThank,captchaUrl:this.props.captchaUrl,getCaptchaThank:this.props.getCaptchaThank})}}]),n}(s.Component),D=(0,T.$j)((function(e){return{isAuth:(0,U.Od)(e),captchaUrl:(0,U.z5)(e)}}),{loginThank:I.Ws,logoutThank:I.Ab,getCaptchaThank:I.Q1})(A)},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=59.f9415ecb.chunk.js.map