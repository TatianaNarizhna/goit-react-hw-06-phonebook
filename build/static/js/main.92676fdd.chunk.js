(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__2rwPA",inputFilter:"Filter_inputFilter__1j3mW",title:"Filter_title__27H4s"}},16:function(t,e,n){t.exports={list:"BookItem_list__3Kk6f",button:"BookItem_button__1zHHz"}},18:function(t,e,n){t.exports={container:"Container_container__20sWZ"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(8),i=n.n(a),o=n(18),s=n.n(o),u=n(1),l=function(t){var e=t.children;return Object(u.jsx)("div",{className:s.a.container,children:e})},b=n(17),j=n(4),d=n(3),m=n(38),f={addContact:Object(d.b)("contact/addContact",(function(t){return{payload:{id:Object(m.a)(),name:t.name,number:t.number}}})),deleteItem:Object(d.b)("contact/delete"),changeFilter:Object(d.b)("filter/change")},O=n(6),h=n.n(O);var p=Object(j.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onFormSubmit:function(e){return t(f.addContact(e))}}}))((function(t){var e=t.onFormSubmit,n=t.contacts,r=Object(c.useState)(""),a=Object(b.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)(""),l=Object(b.a)(s,2),j=l[0],d=l[1],f=Object(c.useRef)(Object(m.a)()),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":d(c);break;default:return}},p=function(){o(""),d("")};return Object(u.jsx)("div",{className:h.a.inputContainer,children:Object(u.jsxs)("form",{className:h.a.form,onSubmit:function(t){if(t.preventDefault(),n.some((function(t){return t.name===i})))return alert("".concat(i," is already in contacts")),void p();e({name:i,number:j,contactId:f}),p()},children:[Object(u.jsxs)("label",{className:h.a.formItem,children:["Name"," ",Object(u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:i,onChange:O})]}),Object(u.jsxs)("label",{className:h.a.formItem,children:["Number"," ",Object(u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:O})]}),Object(u.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})})})),x=n(11),_=n.n(x),v=Object(j.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(f.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(u.jsxs)("label",{className:_.a.filter,children:[Object(u.jsx)("p",{className:_.a.title,children:"Find contacts by name "}),Object(u.jsx)("input",{className:_.a.inputFilter,type:"text",value:e,onChange:n})]})})),g=n(16),C=n.n(g),F=function(t){var e=t.id,n=t.name,c=t.number,r=t.onDeleteList;return Object(u.jsxs)("li",{className:C.a.list,children:[Object(u.jsxs)("p",{children:[n,":"]}),Object(u.jsx)("p",{children:c}),Object(u.jsx)("button",{className:C.a.button,onClick:function(){return r(e)},children:"Delete"})]},e)},k=function(t){var e=function(t){return t.contacts.items}(t),n=function(t){return t.contacts.filter}(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},I=function(t){var e=t.title,n=Object(j.d)(k),c=Object(j.c)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e}),Object(u.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(u.jsx)(F,{name:n,number:r,onDeleteList:function(){return function(t){return c(f.deleteItem(t))}(e)}},e)}))})]})};var N,y=function(){return Object(u.jsxs)(l,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(p,{}),Object(u.jsx)(v,{}),Object(u.jsx)(I,{title:"Contacts"})]})},w=n(19),z=n(10),A=n(2),S=n(20),B=n.n(S),D=n(5),J=n(21),L=n.n(J),T=n(12),Z=Object(d.c)([],(N={},Object(T.a)(N,f.addContact,(function(t,e){return[].concat(Object(z.a)(t),[e.payload])})),Object(T.a)(N,f.deleteItem,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),N)),H=Object(d.c)("",Object(T.a)({},f.changeFilter,(function(t,e){return e.payload}))),W=Object(A.b)({items:Z,filter:H}),q=[].concat(Object(z.a)(Object(d.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[B.a]),M={key:"contacts",storage:L.a,blacklist:["filter"]},P=Object(A.b)({contacts:Object(D.g)(M,W)}),E=Object(d.a)({reducer:P,middleware:q,devTools:!1}),G={store:E,persistor:Object(D.h)(E)};n(35),n(36);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j.a,{store:G.store,children:Object(u.jsx)(w.a,{loading:null,persistor:G.persistor,children:Object(u.jsx)(y,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={inputContainer:"InputForm_inputContainer__1zJik",form:"InputForm_form__16T5g",formItem:"InputForm_formItem__3kYT5",button:"InputForm_button__22GhW"}}},[[37,1,2]]]);
//# sourceMappingURL=main.92676fdd.chunk.js.map