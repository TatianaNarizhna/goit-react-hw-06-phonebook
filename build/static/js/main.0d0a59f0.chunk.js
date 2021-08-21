(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={filter:"Filter_filter__2rwPA",inputFilter:"Filter_inputFilter__1j3mW",title:"Filter_title__27H4s"}},16:function(e,t,n){e.exports={list:"BookItem_list__3Kk6f",button:"BookItem_button__1zHHz"}},18:function(e,t,n){e.exports={container:"Container_container__20sWZ"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),i=n.n(a),o=n(18),s=n.n(o),u=n(1),l=function(e){var t=e.children;return Object(u.jsx)("div",{className:s.a.container,children:t})},b=n(17),j=n(5),d=n(3),m=n(38),f={addContact:Object(d.b)("contact/addContact",(function(e){return{payload:{id:Object(m.a)(),name:e.name,number:e.number}}})),deleteItem:Object(d.b)("contact/delete"),changeFilter:Object(d.b)("filter/change")},O=n(6),h=n.n(O);var p=Object(j.b)(null,(function(e){return{onFormSubmit:function(t){return e(f.addContact(t))}}}))((function(e){var t=e.onFormSubmit,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(""),s=Object(b.a)(o,2),l=s[0],j=s[1],d=Object(r.useRef)(Object(m.a)()),f=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"number":j(r);break;default:return}},O=function(){i(""),j("")};return Object(u.jsx)("div",{className:h.a.inputContainer,children:Object(u.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault(),t({name:a,number:l,contactId:d}),O()},children:[Object(u.jsxs)("label",{className:h.a.formItem,children:["Name"," ",Object(u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:f})]}),Object(u.jsxs)("label",{className:h.a.formItem,children:["Number"," ",Object(u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:f})]}),Object(u.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})})})),x=n(11),_=n.n(x),v=Object(j.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e(f.changeFilter(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.onChangeFilter;return Object(u.jsxs)("label",{className:_.a.filter,children:[Object(u.jsx)("p",{className:_.a.title,children:"Find contacts by name "}),Object(u.jsx)("input",{className:_.a.inputFilter,type:"text",value:t,onChange:n})]})})),g=n(16),C=n.n(g),F=function(e){var t=e.id,n=e.name,r=e.number,c=e.onDeleteList;return Object(u.jsxs)("li",{className:C.a.list,children:[Object(u.jsxs)("p",{children:[n,":"]}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("button",{className:C.a.button,onClick:function(){return c(t)},children:"Delete"})]},t)},k=Object(j.b)((function(e){var t=e.contacts,n=t.filter;return{contacts:function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t.items,n)}}),(function(e){return{onDeleteList:function(t){return e(f.deleteItem(t))}}}))((function(e){var t=e.contacts,n=e.title,r=e.onDeleteList;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(u.jsx)(F,{name:n,number:c,onDeleteList:function(){return r(t)}},t)}))})]})}));var I,N=function(){return Object(u.jsxs)(l,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(p,{}),Object(u.jsx)(v,{}),Object(u.jsx)(k,{title:"Contacts"})]})},y=n(19),w=n(10),z=n(2),A=n(20),D=n.n(A),L=n(4),S=n(21),B=n.n(S),J=n(12),T=Object(d.c)([],(I={},Object(J.a)(I,f.addContact,(function(e,t){return[].concat(Object(w.a)(e),[t.payload])})),Object(J.a)(I,f.deleteItem,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),I)),Z=Object(d.c)("",Object(J.a)({},f.changeFilter,(function(e,t){return t.payload}))),H=Object(z.b)({items:T,filter:Z}),W=[].concat(Object(w.a)(Object(d.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})),[D.a]),q={key:"contacts",storage:B.a,blacklist:["filter"]},M=Object(z.b)({contacts:Object(L.g)(q,H)}),P=Object(d.a)({reducer:M,middleware:W,devTools:!1}),E={store:P,persistor:Object(L.h)(P)};n(35),n(36);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j.a,{store:E.store,children:Object(u.jsx)(y.a,{loading:null,persistor:E.persistor,children:Object(u.jsx)(N,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={inputContainer:"InputForm_inputContainer__1zJik",form:"InputForm_form__16T5g",formItem:"InputForm_formItem__3kYT5",button:"InputForm_button__22GhW"}}},[[37,1,2]]]);
//# sourceMappingURL=main.0d0a59f0.chunk.js.map