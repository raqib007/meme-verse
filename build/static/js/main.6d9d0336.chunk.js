(this.webpackJsonpMemeVerse=this.webpackJsonpMemeVerse||[]).push([[0],{218:function(e,t,n){},219:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},328:function(e,t,n){},403:function(e,t,n){},404:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(26),o=n.n(s),a=(n(269),n(270),n(22)),r=(n(271),n(417)),l=n(411),u=n(264),j=n(263),d=n(409),m=n(410),b=n(420),h=n(30),g=n(415),f=n(425),O=n(421),p=n(39),x=n(428),v=n(429),w=n(4);function y(e){var t=g.a.useForm(),n=Object(a.a)(t,1)[0];return Object(w.jsxs)("div",{children:[e.errorMsg&&Object(w.jsx)(f.a,{message:e.errorMsg,type:"error",showIcon:!0,style:{marginBottom:20}}),Object(w.jsxs)(g.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){e.onSigninClick(t,n)},form:n,children:[Object(w.jsx)(g.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid Email!"},{required:!0,message:"Please input your Email!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(w.jsx)(g.a.Item,{name:"password",rules:[{required:!0,message:"Password is required!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(v.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(w.jsxs)(g.a.Item,{children:[Object(w.jsx)("a",{className:"login-form-forgot",href:"/#",children:"Forgot password?"}),Object(w.jsx)("a",{className:"login-form-signup",href:"/#",onClick:function(t){return function(t){t.preventDefault(),e.onAccountClick(!0,"signup","Sign Up")}(t)},children:"Need an account?"})]}),Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(p.a,{type:"primary",htmlType:"submit",loading:e.isLoading,className:"login-form-button",block:!0,children:"Sign in"})})]})]})}function k(e){var t=g.a.useForm(),n=Object(a.a)(t,1)[0];return Object(w.jsxs)(w.Fragment,{children:[e.errorMsg&&Object(w.jsx)(f.a,{message:e.errorMsg,type:"error",showIcon:!0,style:{marginBottom:20}}),Object(w.jsxs)(g.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){e.onSignupClick(t,n)},form:n,children:[Object(w.jsx)(g.a.Item,{children:Object(w.jsxs)(d.a,{gutter:8,children:[Object(w.jsx)(m.a,{span:12,children:Object(w.jsx)(g.a.Item,{name:"first_name",noStyle:!0,rules:[{required:!0,message:"First Name is required!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"First Name"})})}),Object(w.jsx)(m.a,{span:12,children:Object(w.jsx)(g.a.Item,{name:"last_name",noStyle:!0,rules:[{required:!0,message:"Last Name is required!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Last Name"})})})]})}),Object(w.jsx)(g.a.Item,{name:"email",rules:[{required:!0,message:"Email is required!"},{type:"email",message:"The input is not valid Email!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(w.jsx)(g.a.Item,{name:"password",rules:[{required:!0,message:"Password is required!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(v.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(p.a,{type:"primary",htmlType:"submit",loading:null===e||void 0===e?void 0:e.isLoading,className:"login-form-button",block:!0,children:"Sign up"})}),Object(w.jsxs)(g.a.Item,{children:[Object(w.jsx)("span",{children:"Have an account? "}),Object(w.jsx)("a",{className:"",href:"/#",onClick:function(t){return function(t){t.preventDefault(),e.onSigninClick(!0,"signin","Sign In")}(t)},children:"Login Here"})]})]})]})}var C=n(33),S=n(414),I=n(416),_=n(122),A=n(430),N=n(431);function M(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],s=n[1];return{get:function(t){return s(!0),new Promise((function(n,c){fetch(e+t).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),c(e);s(!1),n(e)})).catch((function(e){s(!1),c(e)}))}))},post:function(t,n){return s(!0),new Promise((function(c,i){fetch(e+t,{method:"post",headers:{"Content-Type":"application/json","x-access-token":JSON.parse(localStorage.getItem("token"))},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),i(e);s(!1),c(e)})).catch((function(e){s(!1),i(e)}))}))},put:function(t,n){return s(!0),new Promise((function(c,i){fetch(e+t,{method:"put",headers:{"Content-Type":"application/json","x-access-token":JSON.parse(localStorage.getItem("token"))},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),i(e);s(!1),c(e)})).catch((function(e){s(!1),i(e)}))}))},Delete:function(t){return s(!0),new Promise((function(n,c){fetch(e+t,{method:"delete"}).then((function(e){return e.json()})).then((function(e){if(!e)return s(!1),c(e);s(!1),n(e)})).catch((function(e){s(!1),c(e)}))}))},isLoading:i}}function E(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),i=n[0],s=n[1],o=M("https://meme-verse-2021.herokuapp.com/api/"),r=o.get,l=o.post,u=o.isLoading,d=Object(c.useState)(!1),m=Object(a.a)(d,2),b=m[0],f=m[1],x=Object(c.useState)({}),v=Object(a.a)(x,2),y=v[0],k=v[1],E=Object(h.f)(),L=g.a.useForm(),T=Object(a.a)(L,1)[0];Object(c.useEffect)((function(){r("category").then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]);var F={name:"file",action:"https://api.Cloudinary.com/v1_1/ddgllfems/image/upload",data:{upload_preset:"czaobowo"},beforeUpload:function(e){var t=!0;return console.log("file.type = ",e.type),"image/png"!==e.type&&"image/jpg"!==e.type&&"image/gif"!==e.type&&"image/jpeg"!==e.type&&(j.b.error("".concat(e.name," is not a png/jpg/gif file")),t=!1),!!t||S.a.LIST_IGNORE},onChange:function(e){"uploading"===e.file.status&&f(!0),"uploading"!==e.file.status&&(console.log(e.file.response),k(Object.assign({},{image_url:e.file.response.secure_url,image_public_id:e.file.response.public_id}))),"done"===e.file.status?(f(!1),j.b.success("".concat(e.file.name," file uploaded successfully"))):"error"===e.file.status&&(f(!1),j.b.error("".concat(e.file.name," file upload failed.")))}};return Object(w.jsxs)("div",{children:[(null===y||void 0===y?void 0:y.image_url)&&Object(w.jsx)(I.a,{width:300,src:null===y||void 0===y?void 0:y.image_url,placeholder:Object(w.jsx)(I.a,{preview:!1,src:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",width:300})}),Object(w.jsxs)(g.a,{name:"normal_login",className:"login-form",onFinish:function(t){var n=Object.assign({},t,y,{likes:[],unlikes:[],user_id:e.user});console.log(n),(null===n||void 0===n?void 0:n.image_url)?(console.log(n),l("meme",n).then((function(t){!1!==(null===t||void 0===t?void 0:t.status)&&(k({}),T.resetFields(),e.modalStatus(!1,"",""),E.push("/")),console.log(t)})).catch((function(e){console.log(e)}))):j.b.error("Meme image is required")},form:T,children:[Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(S.a,Object(C.a)(Object(C.a)({},F),{},{multiple:!1,maxCount:1,showUploadList:!1,children:Object(w.jsx)(p.a,{icon:Object(w.jsx)(A.a,{}),loading:b,children:"Click to Upload"})}))}),Object(w.jsx)(g.a.Item,{style:{marginTop:20},name:"description",rules:[{required:!0,message:"Description is required!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(N.a,{className:"site-form-item-icon"}),placeholder:"Description"})}),Object(w.jsx)(g.a.Item,{name:"category",rules:[{required:!0,message:"Category is required!"}],children:Object(w.jsx)(_.a,{placeholder:"Select a Category",loading:u,allowClear:!0,children:i.map((function(e){return Object(w.jsx)(_.a.Option,{value:e._id,children:e.name},e._id)}))})}),Object(w.jsx)(g.a.Item,{style:{float:"right"},children:Object(w.jsx)(p.a,{type:"primary",htmlType:"submit",loading:u,className:"login-form-button",children:"Save"})})]})]})}var L=n(424),T=n(423),F=n(422),q=(n(328),n(38)),P=n(123),B=n.n(P),U=n(195),V=n(196);var D=Object(c.createContext)();function z(e){var t=e.children,n=function(){var e=Object(c.useState)((function(){var e=null;return localStorage.getItem("token")&&(e=Object(V.a)(JSON.parse(localStorage.getItem("token")))),e})),t=Object(a.a)(e,2),n=t[0],i=t[1];function s(){return(s=Object(U.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=3;break}return e.next=3,i(Object(V.a)(JSON.parse(localStorage.getItem("token"))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(U.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(null);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{user:n,setAuth:function(){return s.apply(this,arguments)},clearAuth:function(){return o.apply(this,arguments)}}}();return Object(w.jsx)(D.Provider,{value:n,children:t})}function Y(e){var t=Object(c.useContext)(D),n=l.a.Header,i=Object(w.jsxs)(L.a,{onClick:o,children:[Object(w.jsx)(L.a.Item,{onClick:function(){return e.showModal(!0,"signin","Sign In")},children:"Login"}),Object(w.jsx)(L.a.Item,{onClick:function(){return e.showModal(!0,"signup","Sign Up")},children:"Sign Up"})]}),s=Object(w.jsx)(L.a,{onClick:o,children:Object(w.jsx)(L.a.Item,{onClick:function(){return e.showModal(!0,"signin","Sign In")},children:"Logout"})});function o(e){console.log("click",e)}return Object(w.jsx)(n,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(w.jsxs)("div",{className:"header-content",children:[Object(w.jsx)(q.b,{to:"/",children:Object(w.jsx)("img",{className:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA4CAYAAABUv9KRAAAEYUlEQVR4nO2aMZbqMAxF2UlWwjqyiyyCLbCErIA+PTUtbdppU79fRAbxLDsZhhn+Ce+eM8VEtizLsi3b7HZCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBbBsAewJX+2oU6l++UF+JPATDikaFS9kBlv/7SViEWAdCvDVIA57XBL8RbANAgJ0wjAExrygnxViwvrq68QboxvsNWsQCAI4BTWm0AtAAGd+g5A+hMtrctOh2MLgCOFd2p/NnpOyV9rlxn3w9U78rt2Ip6JJ09gKZix8H0+z7d6pg+T5Z2IE83epInu7zvBvaP+fcM4Ez/e9uSXV2grwewL/SztX768TmVym8KGwC/hX6Zw0oMyLfcxDnQX9N1q2OO95xq7ZidESMoqDEPcKk8rJ00kYvpBHJfAS5IMAdyyeabbZj75ol8NJlOnkDMgexjPzLFhWczVJw2IT/9eyLntRW9F8wrSxY0yFfHpXYSY6Cvdza0JJ9w310ebCvYPDhdbOOlIhutHfZfj3nnWSLtHp60CyXbv1z7TdDWgHzyTL8fUW8GeV4I1Fct4J5+cGD09r2j737w2cknxIcy4J5icDsAcDIZD7xviyeDn3APFOz2QcM2+PSHd7mmoO9q36MdY8Q8Fr3VY9s7Z8ue+sI+9ZO6qGeTYF7FmKOTs0POTpYFp33nla6r6EuBwROn1o4PtFLQ8Ep4rdTx+jjYWuQTbnLleXU+VexOKRZPjgl5qhTuIoUxfLDZfW9QSZM2C3J8bsgB6PO2UkBnDsYcYDxIY6WdY6UdnwqUAjoMNMS5ru8T57RDoMtPtmzyIs6VJ5hfA1l0/oh2zivyw3Q4cc2O1Q9Gm4K9RrLa1lcKaKa0xTY/acdkpYDOVvXABiC/geAAGfG9HSdq55bCLfWHbCkdqm/P7cj7PyFOE7NJs1m45yR7RUB7Z4fXfM+0Y7K1Ae0ZMQdL6eqLV7aHHHnB7gdbEFwn1voT2NIhPkNMmCcf99/zBXfl+jGwF0j2TEDzKnXkQQ1seHVAc5qw+kdEQV3PQGWzmxEs5Km1/lTqRNePA/IdZcKnBTDDI0ayZwI6vBFYsOHVAc2H3dU/IkL51gWgYEV+y7K4tdf6s1CP8+rU1887+NXgESPZMwGdvbrh8aB5wBz0w0/aMVkY0CbjFc3X2+P+cpit3Ii3+eypG/G9srf99gq4pj9BmdsrHwqHU8R3/unqsLF6V3zCw8pu9/qANln0YBMdmPY/bKcW0PywAsSHprW3DD2Xs7JRihL1NV1RrglotjHK65PvmkAe2fAZP3VlL5DsqUBz8tLtQjow/VpAm7xFvNoC90PTYReAPKiWfitSellNh9B0M7HktwbzJKnpa4M658BmwB3Ga33YDJiD4vZHspbk/qptT7LSrUGzosxT7ZDujge61MZKv7Rr9Ab1qnXW+i3Qt1g20L/9ABZCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHEf8k/gnldEKCf2ggAAAAASUVORK5CYII=",alt:""})}),Object(w.jsx)("span",{className:"headerMenu",children:null!==t.user?Object(w.jsx)(T.a.Button,{overlay:s}):Object(w.jsx)(T.a.Button,{overlay:i})}),null!==t.user?Object(w.jsxs)("div",{className:"header-button",children:[Object(w.jsx)(F.a,{icon:Object(w.jsx)(x.a,{})})," \xa0\xa0",Object(w.jsx)("span",{style:{color:"#ffffff",marginRight:10},children:t.user.first_name}),Object(w.jsx)(p.a,{type:"primary",onClick:function(){return e.showModal(!0,"upload","Create Post")},shape:"round",icon:Object(w.jsx)(A.a,{}),children:"Upload"}),Object(w.jsx)(p.a,{type:"text",onClick:function(){localStorage.getItem("token")&&(localStorage.removeItem("token"),t.clearAuth().then((function(){console.log("signed out")})))},children:"Logout"})]}):Object(w.jsxs)("div",{className:"header-button",children:[Object(w.jsx)(p.a,{type:"text",onClick:function(){return e.showModal(!0,"signin","Sign In")},children:"Login"}),Object(w.jsx)(p.a,{type:"text",onClick:function(){return e.showModal(!0,"signup","Sign Up")},children:"Sign Up"})]})]})})}var J=n(418);n(218);function Q(e){return Object(w.jsx)("div",{className:"div-category-list",children:Object(w.jsx)(J.b,{itemLayout:"horizontal",dataSource:e.categories,renderItem:function(e){return Object(w.jsx)(q.b,{to:"/meme/".concat(e._id),children:Object(w.jsx)(J.b.Item,{children:Object(w.jsx)(J.b.Item.Meta,{avatar:Object(w.jsx)(F.a,{shape:"square",size:"small",src:"https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216707.0007_ESESyM_100x100.jpg"}),title:e.name})})})}})})}var H=n(426),Z=n(249),R=(n(219),n(68)),G=n(432),K=n(433);function W(e){var t,n,s=e.item,o=Object(c.useContext)(D),r=M("https://meme-verse-2021.herokuapp.com/api/").put,l=Object(c.useState)(s),u=Object(a.a)(l,2),j=u[0],d=u[1],m=function(e){var t=e.icon,n=e.text;return Object(w.jsxs)(H.b,{children:[i.a.createElement(t),n]})},b=function(e){return void 0!=e&&e.filter((function(e){var t;return e==(null===o||void 0===o||null===(t=o.user)||void 0===t?void 0:t.userId)})).length>0};return Object(w.jsxs)("div",{children:[Object(w.jsx)(p.a,{className:b(null===j||void 0===j?void 0:j.likes)?"button-selected":"",onClick:function(){return null!==o.user?function(e){var t="meme/like/".concat(e._id);e.likes.filter((function(e){return e==o.user.userId})).length>0&&(t="meme/removelike/".concat(e._id)),r(t,{}).then((function(e){d(Object(C.a)(Object(C.a)({},j),{},{likes:Object(R.a)(e.data.likes),unlikes:Object(R.a)(e.data.unlikes)}))})).catch((function(e){console.log(e)}))}(j):e.singinModal(!0,"signin","Sign In")},children:Object(w.jsx)(m,{icon:G.a,text:null===j||void 0===j||null===(t=j.likes)||void 0===t?void 0:t.length},"list-vertical-like-o")}),",",Object(w.jsx)(p.a,{className:b(null===j||void 0===j?void 0:j.unlikes)?"button-selected":"",onClick:function(){return null!==o.user?function(e){var t="meme/unlike/".concat(e._id);e.unlikes.filter((function(e){return e==o.user.userId})).length>0&&(t="meme/removeunlike/".concat(e._id)),r(t,{}).then((function(e){d(Object(C.a)(Object(C.a)({},j),{},{likes:Object(R.a)(e.data.likes),unlikes:Object(R.a)(e.data.unlikes)}))})).catch((function(e){console.log(e)}))}(j):e.singinModal(!0,"signin","Sign In")},children:Object(w.jsx)(m,{icon:K.a,text:null===j||void 0===j||null===(n=j.unlikes)||void 0===n?void 0:n.length},"list-vertical-like-o")})]})}function X(e){var t=Object(h.f)(),n=Object(h.g)(),s=(Object(c.useContext)(D),Object(c.useState)([])),o=Object(a.a)(s,2),r=o[0],l=o[1],u=M("https://meme-verse-2021.herokuapp.com/api/"),j=u.get,d=u.isLoading;Object(c.useEffect)((function(){console.log("inside params"),j("meme/".concat(n.id?n.id:"all")).then((function(e){l(e)})).catch((function(e){console.log(e)}))}),[null===n||void 0===n?void 0:n.id]);var m=function(e){var t=e.icon,n=e.text;return Object(w.jsxs)(H.b,{children:[i.a.createElement(t),n]})};return Object(w.jsx)(Z.a,{spinning:d,children:Object(w.jsx)(J.b,{itemLayout:"vertical",size:"large",dataSource:r,renderItem:function(n){return Object(w.jsx)(J.b.Item,{actions:[Object(w.jsx)(W,{item:n,singinModal:e.onShowModal}),Object(w.jsx)(p.a,{onClick:function(){return t.push("/comments/".concat(n._id))},children:Object(w.jsx)(m,{icon:N.a,text:n.comments.length},"list-vertical-message")})],children:Object(w.jsx)(J.b.Item.Meta,{avatar:Object(w.jsx)(F.a,{style:{backgroundColor:"#00a2ae",verticalAlign:"middle"},size:"large",children:n.user_id.first_name}),title:Object(w.jsxs)(q.b,{to:"/meme_user/".concat(n.user_id._id),children:[n.user_id.first_name," ",n.user_id.last_name]}),description:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:n.description}),Object(w.jsx)(q.b,{to:"/details/".concat(n._id),children:Object(w.jsx)(I.a,{src:n.image_url,placeholder:Object(w.jsx)(I.a,{preview:!1,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",className:"responsive-img"}),preview:!1})})]})})},n._id)}})})}var $=n(419),ee=n(412),te=n(413);function ne(e){var t,n,i,s,o=Object(h.g)(),r=Object(c.useContext)(D),l=M("https://meme-verse-2021.herokuapp.com/api/"),u=l.get,d=l.post,m=l.put,b=l.isLoading,f=Object(c.useState)({}),v=Object(a.a)(f,2),y=v[0],k=v[1],S=Object(c.useState)(""),_=Object(a.a)(S,2),A=_[0],N=_[1],E=Object(c.useState)(!1),L=Object(a.a)(E,2),T=L[0],P=L[1],B=Object(c.useState)(!1),U=Object(a.a)(B,2),V=U[0],z=U[1],Y=O.a.TextArea;Object(c.useEffect)((function(){P(!0),u("meme/getById/".concat(o.id)).then((function(e){k(e),P(!1)})).catch((function(e){P(!1)}))}),[]);return Object(w.jsx)(Z.a,{spinning:b,children:Object(w.jsx)("div",{style:{padding:"10px 24px"},children:Object(w.jsxs)($.a,{avatar:!0,paragraph:{rows:12},loading:T,active:!0,children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(F.a,{size:"small",shape:"square",icon:Object(w.jsx)(x.a,{})})," ",null===y||void 0===y||null===(t=y.category)||void 0===t?void 0:t.name," - 1h"]}),Object(w.jsx)("h2",{children:null===y||void 0===y?void 0:y.description}),Object(w.jsxs)("p",{children:[null===y||void 0===y||null===(n=y.comments)||void 0===n?void 0:n.length," Comments"]}),Object(w.jsx)("div",{children:!b&&Object(w.jsx)(W,{item:y,singinModal:e.onShowModal})}),Object(w.jsx)("div",{style:{marginTop:10},children:Object(w.jsx)(I.a,{width:"100%",src:y.image_url,placeholder:Object(w.jsx)(I.a,{preview:!1,src:"".concat(y.image_url,"?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"),width:200})})}),Object(w.jsx)(ee.a,{}),Object(w.jsx)("div",{children:Object(w.jsx)(te.a,{content:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(Y,{rows:4,onChange:function(e){N(e.target.value)},value:A})}),Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(p.a,{htmlType:"submit",loading:V,onClick:function(){if(null!==r.user){if(""!=A){z(!0);var t=Object.assign({},{meme_id:o.id,user_id:r.user.userId,comment:A});d("comment",t).then((function(e){var t=y.comments,n=e.data,c={_id:r.user.userId,first_name:r.user.first_name,last_name:r.user.last_name};Object.assign(n,{user_id:c});var i=[].concat(Object(R.a)(t),[n]);k(Object(C.a)(Object(C.a)({},y),{},{comments:i})),N(""),z(!1)})).catch((function(e){console.log(e),z(!1)}))}}else e.onShowModal(!0,"signin","Sign In")},type:"primary",children:"Add Comment"})})]})})}),Object(w.jsx)(J.b,{dataSource:null===y||void 0===y?void 0:y.comments,header:"".concat(null===(i=y.comments)||void 0===i?void 0:i.length," ").concat((null===y||void 0===y||null===(s=y.comments)||void 0===s||s.length,"comments")),itemLayout:"horizontal",renderItem:function(e){var t,n,c,i;return Object(w.jsx)(J.b.Item,{actions:[Object(w.jsx)("a",{children:"edit"},"list-loadmore-edit"),Object(w.jsx)("a",{onClick:function(t){return function(e,t){e.preventDefault(),console.log(t),m("comment/".concat(t._id),{deleted:!0}).then((function(e){console.log(e),j.b.success("Comment deleted");var n=y.comments.filter((function(e){return e._id!==t._id}));k(Object(C.a)(Object(C.a)({},y),{},{comments:n}))})).catch((function(e){console.log(e)}))}(t,e)},children:"remove"},"list-loadmore-more")],children:Object(w.jsx)(J.b.Item.Meta,{avatar:Object(w.jsx)(F.a,{style:{backgroundColor:"#00a2ae",verticalAlign:"middle"},size:45,children:null===(t=e.user_id)||void 0===t?void 0:t.first_name}),title:Object(w.jsxs)(q.b,{to:"/meme_user/".concat(null===(n=e.user_id)||void 0===n?void 0:n._id),children:[null===(c=e.user_id)||void 0===c?void 0:c.first_name," ",null===(i=e.user_id)||void 0===i?void 0:i.last_name]}),description:e.comment})})}})]})})})}var ce=n(197),ie=n.n(ce),se=(n(403),n(427)),oe=(n(404),r.a.Title),ae=r.a.Text;function re(e){var t=Object(h.g)().id,n=Object(c.useState)(null),i=Object(a.a)(n,2),s=i[0],o=i[1],r=Object(c.useState)(!1),l=Object(a.a)(r,2),u=l[0],g=l[1],f=Object(c.useState)("Show Followers List"),O=Object(a.a)(f,2),x=O[0],v=O[1],y=Object(c.useState)([]),k=Object(a.a)(y,2),S=k[0],_=k[1],A=Object(c.useContext)(D).state,N=Object(c.useState)(!A||!A.following.includes(t)),E=Object(a.a)(N,2),L=E[0],T=E[1],q=M("https://meme-verse-2021.herokuapp.com/api/"),P=q.get,B=q.post,U=Object(c.useContext)(D);function V(e,t,n){console.log(!0),console.log(!1),g(e),v(t),_(n)}Object(c.useEffect)((function(){P("users/".concat(t)).then((function(e){null!==U.user&&(e.followers.filter((function(e){return e._id===U.user.userId})).length>0&&T(!1));o(e)})).catch((function(e){console.log(e)}))}),[]);return Object(w.jsxs)(w.Fragment,{children:[s?Object(w.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto",border:"0px solid red",padding:"10px 24px"},children:[Object(w.jsxs)(d.a,{gutter:20,children:[Object(w.jsx)(m.a,{xs:{span:6},lg:{span:4},children:Object(w.jsx)(F.a,{style:{backgroundColor:"#00a2ae",verticalAlign:"middle"},size:64,children:s.first_name})}),Object(w.jsx)(m.a,{xs:{span:18},lg:{span:20},children:Object(w.jsxs)(H.b,{direction:"vertical",children:[Object(w.jsxs)(oe,{level:3,style:{marginBottom:"0"},children:[s.first_name," ",s.last_name]}),Object(w.jsx)(ae,{type:"secondary",children:s.email}),Object(w.jsxs)("div",{className:"following-btn",children:[Object(w.jsxs)("h4",{children:[s.posts.length," posts"]}),Object(w.jsxs)("h4",{onClick:function(){return V(!0,"Show Followers List",s.followers)},children:[s.followers.length," followers"]}),Object(w.jsxs)("h4",{onClick:function(){return V(!0,"Show Followering User List",s.following)},children:[s.following.length," following"]})]}),L?Object(w.jsx)(p.a,{onClick:function(){null!==U.user?B("users/".concat(t,"/follow-user"),{}).then((function(e){e.success?(o((function(e){var t={_id:U.user.userId,email:U.user.email,first_name:U.user.first_name,last_name:U.user.last_name};return Object(C.a)(Object(C.a)({},e),{},{followers:[].concat(Object(R.a)(e.followers),[t])})})),T(!1)):j.b.warning(e.message)})).catch((function(e){console.log(e),j.b.warning(e)})):e.onShowModal(!0,"signin","Sign In")},icon:Object(w.jsx)(se.a,{}),children:"Follow"}):Object(w.jsx)(p.a,{onClick:function(){null!==U.user?B("users/".concat(t,"/unfollow-user"),{}).then((function(e){e.success?(o((function(e){var t=e.followers.filter((function(e){return e._id!=U.user.userId}));return Object(C.a)(Object(C.a)({},e),{},{followers:t})})),T(!0)):j.b.warning(e.message)})).catch((function(e){console.log(e),j.b.warn("error",e)})):e.onShowModal(!0,"signin","Sign In")},children:"Unfollow"})]})})]}),Object(w.jsx)(ee.a,{}),Object(w.jsx)("div",{className:"gallery",children:s.posts.map((function(e){return Object(w.jsx)(I.a,{src:e.image_url,alt:e.description,placeholder:Object(w.jsx)(I.a,{preview:!1,src:e.image_url,className:"responsive-img"})},e._id)}))})]}):Object(w.jsx)("div",{className:"example",children:Object(w.jsx)(Z.a,{})}),Object(w.jsxs)(b.a,{title:x,centered:!0,visible:u,onOk:function(){return V(!1,"",[])},onCancel:function(){return V(!1,"",[])},children:[Object(w.jsx)(J.b,{itemLayout:"horizontal",dataSource:S,renderItem:function(e){return Object(w.jsx)(J.b.Item,{children:Object(w.jsx)(J.b.Item.Meta,{avatar:Object(w.jsx)(F.a,{style:{backgroundColor:"#00a2ae",verticalAlign:"middle"},size:45,children:null===e||void 0===e?void 0:e.first_name}),title:Object(w.jsxs)("a",{href:"#",children:[null===e||void 0===e?void 0:e.first_name," ",null===e||void 0===e?void 0:e.last_name]})})})}}),","]})]})}var le=n(256),ue=n.n(le),je=r.a.Title,de=l.a.Content;function me(e){var t=Object(c.useContext)(D),n=Object(c.useState)([]),i=Object(a.a)(n,2),s=i[0],o=i[1],r=Object(c.useState)(!1),g=Object(a.a)(r,2),f=g[0],O=g[1],p=Object(c.useState)(""),x=Object(a.a)(p,2),v=x[0],C=x[1],S=Object(c.useState)(""),I=Object(a.a)(S,2),_=I[0],A=I[1],N=Object(c.useState)(""),L=Object(a.a)(N,2),T=L[0],F=L[1],q=M("https://meme-verse-2021.herokuapp.com/api/"),P=q.get,B=q.put,U=q.isLoading,V="https://meme-verse-2021.herokuapp.com/api/",z=Object(c.useRef)();function J(e,t,n){O(e),C(t),A(n),F("")}function H(e,n){fetch("".concat(V,"signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200==e.status)return F(""),e.json();throw j.b.error("Username or password wrong!"),F("Username or password wrong!"),new Error("HTTP status "+e.status)})).then((function(e){localStorage.setItem("token",JSON.stringify(e.token)),t.setAuth().then((function(){J(!1,""),n.resetFields()}))})).catch((function(e){console.log("err",e)}))}function Z(e){console.log(e),fetch("".concat(V,"users"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200==e.status)return F(""),e.json();throw F(e.message),new Error("HTTP status "+e.status)})).then((function(e){console.log(e),e.success?J(!0,"signin","Sign In"):(j.b.error(e.message),F(e.message))})).catch((function(e){console.log("err",e)}))}function R(e){var n="meme/like/".concat(e._id);e.likes.filter((function(e){return e==t.user.userId})).length>0&&(n="meme/removelike/".concat(e._id)),B(n,{}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}function G(e){var n="meme/unlike/".concat(e._id);e.likes.filter((function(e){return e==t.user.userId})).length>0&&(n="meme/removeunlike/".concat(e._id)),B(n,{}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}Object(c.useEffect)((function(){(P("category").then((function(e){o(e)})).catch((function(e){console.log(e)})),z.current=new ue.a("9194f1ce56888aa072f2",{cluster:"mt1"}),null!==t.user)?(console.log("inside pusher bind "),z.current.subscribe("pusher-".concat(t.user.userId)).bind("post_upload",(function(e){u.a.info({message:null===e||void 0===e?void 0:e.message,description:null===e||void 0===e?void 0:e.description,placement:"bottomRight",duration:9})}))):console.log("Not binding pusher");return function(){return z.current.disconnect()}}),[z,t]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(l.a,{className:"layout",style:{height:"100vh"},children:[Object(w.jsx)(Y,{showModal:J}),Object(w.jsx)(de,{className:"content",children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(m.a,{xs:{span:8,offset:0},lg:{span:3,offset:3},className:"div-category",children:Object(w.jsxs)(ie.a,{enabled:!0,top:65,onStateChange:function(e){e.status===ie.a.STATUS_FIXED&&console.log("the component is sticky")},children:[Object(w.jsx)(je,{level:4,style:{paddingLeft:10},children:"All Section"}),Object(w.jsx)(Q,{categories:s})]})}),Object(w.jsx)(m.a,{xs:{span:16,offset:0},lg:{span:12,offset:0},className:"site-layout-content",children:Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{path:"/",exact:!0,children:Object(w.jsx)(X,{onUpVoteClick:R,onDownVoteClick:G,onShowModal:J})}),Object(w.jsx)(h.a,{path:"/meme/:id",exact:!0,children:Object(w.jsx)(X,{onUpVoteClick:R,onDownVoteClick:G,onShowModal:J})}),Object(w.jsx)(h.a,{path:"/details/:id",exact:!0,children:Object(w.jsx)(ne,{onUpVoteClick:R,onDownVoteClick:G,onShowModal:J})}),Object(w.jsx)(h.a,{path:"/comments/:id",exact:!0,children:Object(w.jsx)(ne,{onUpVoteClick:R,onDownVoteClick:G,onShowModal:J})}),Object(w.jsx)(h.a,{path:"/meme_user/:id",exact:!0,children:Object(w.jsx)(re,{onUpVoteClick:R,onDownVoteClick:G,onShowModal:J})}),Object(w.jsx)(h.a,{children:Object(w.jsx)("h1",{style:{textAlign:"center"},children:"404 | Not Found"})})]})})]})}),Object(w.jsx)(b.a,{title:_,centered:!0,visible:f,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},onCancel:function(){return J(!1,"")},width:"30vw",maskClosable:!1,children:function(){var e;return"signin"===v?e=Object(w.jsx)(y,{onSigninClick:H,onAccountClick:J,isLoading:U,errorMsg:T}):"signup"===v?e=Object(w.jsx)(k,{onSignupClick:Z,onSigninClick:J,isLoading:U,errorMsg:T}):"upload"===v&&(e=Object(w.jsx)(E,{modalStatus:J,user:t.user.userId})),e}()})]})})}var be=function(){return Object(w.jsx)(me,{})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};o.a.render(Object(w.jsx)(z,{children:Object(w.jsx)(q.a,{children:Object(w.jsx)(be,{})})}),document.getElementById("root")),he()}},[[406,1,2]]]);
//# sourceMappingURL=main.6d9d0336.chunk.js.map