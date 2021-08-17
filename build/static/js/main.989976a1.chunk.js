(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={list:"BookItem_list__3Kk6f",button:"BookItem_button__1zHHz"}},13:function(e,t,n){e.exports={container:"Container_container__20sWZ"}},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(6),o=n.n(a),i=n(16),s=n(2),u=n(30),l=n(13),b=n.n(l),j=n(1),m=function(e){var t=e.children;return Object(j.jsx)("div",{className:b.a.container,children:t})},d=n(4),f=n.n(d);function O(e){var t=e.onFormSubmit,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),b=l[0],m=l[1],d=Object(r.useRef)(Object(u.a)()),O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":m(r);break;default:return}},h=function(){o(""),m("")};return Object(j.jsx)("div",{className:f.a.inputContainer,children:Object(j.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),t({name:a,number:b,contactId:d}),h()},children:[Object(j.jsxs)("label",{className:f.a.formItem,children:["Name"," ",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:O})]}),Object(j.jsxs)("label",{className:f.a.formItem,children:["Number"," ",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:O})]}),Object(j.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})})}var h=n(8),p=n.n(h),x=function(e){var t=e.value,n=e.onChangeFilter;return Object(j.jsxs)("label",{className:p.a.filter,children:[Object(j.jsx)("p",{className:p.a.title,children:"Find contacts by name "}),Object(j.jsx)("input",{className:p.a.inputFilter,type:"text",value:t,onChange:n})]})},v=n(11),_=n.n(v),g=function(e){var t=e.id,n=e.name,r=e.number,c=e.onDeleteList;return Object(j.jsxs)("li",{className:_.a.list,children:[Object(j.jsxs)("p",{children:[n,":"]}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("button",{className:_.a.button,onClick:function(){return c(t)},children:"Delete"})]},t)},C=function(e){var t=e.contacts,n=e.title,r=e.onDeleteList;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(j.jsx)(g,{name:n,number:c,onDeleteList:function(){return r(t)}},t)}))})]})};function F(){var e=function(e,t){var n=Object(r.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,o]}("contacts",[]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(s.a)(a,2),l=o[0],b=o[1];return Object(j.jsxs)(m,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onFormSubmit:function(e){if(console.log(e),n.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var t={id:Object(u.a)(),name:e.name,number:e.number};c((function(e){return[].concat(Object(i.a)(e),[t])}))}}}),Object(j.jsx)(x,{value:l,onChangeFilter:function(e){b(e.currentTarget.value)}}),Object(j.jsx)(C,{contacts:function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),title:"Contacts",onDeleteList:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}var N=n(15),I=n(3),k=n(14),S=Object(I.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}}),w=Object(I.combineReducers)({contacts:S}),y=Object(I.createStore)(w,Object(k.composeWithDevTools)());n(27),n(28);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N.a,{store:y,children:Object(j.jsx)(F,{})})}),document.getElementById("root"))},4:function(e,t,n){e.exports={inputContainer:"InputForm_inputContainer__1zJik",form:"InputForm_form__16T5g",formItem:"InputForm_formItem__3kYT5",button:"InputForm_button__22GhW"}},8:function(e,t,n){e.exports={filter:"Filter_filter__2rwPA",inputFilter:"Filter_inputFilter__1j3mW",title:"Filter_title__27H4s"}}},[[29,1,2]]]);
//# sourceMappingURL=main.989976a1.chunk.js.map