(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contactFormContainer:"InputForm_contactFormContainer__3d_1e",btn:"InputForm_btn__2MB_2"}},59:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),s=n(10),u=n(11),i=n(13),d=n(12),l=n(6),b=n(15),j=n.n(b),h=n(1),f=function(t){var e=t.state,n=e.name,c=e.number,a=e.sex,r=t.handleChange,o=t.addContact;return Object(h.jsxs)("div",{className:j.a.contactFormContainer,children:[Object(h.jsx)("h3",{children:"Name"}),Object(h.jsxs)("form",{onSubmit:o,children:[Object(h.jsx)("input",{onChange:r,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(h.jsx)("h3",{children:"Number"}),Object(h.jsx)("input",{onChange:r,type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",className:j.a.btn,children:"Add contact"})}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"sex",value:"male",checked:"male"===a,onChange:r})," \ud83d\udc68",Object(h.jsx)("input",{type:"radio",name:"sex",value:"female",checked:"female"===a,onChange:r})," \ud83d\udc69"]})]})]})},O=n(61),C=n(5),p=n(17),m=n.n(p),x=n(27),v=n(7),g=n.n(v),y=n(2),S=Object(y.b)("contacts/fetchContactRequest"),F=Object(y.b)("contacts/fetchContactSuccess"),k=Object(y.b)("contacts/fetchContactError"),q=Object(y.b)("contacts/addContactRequest"),R=Object(y.b)("contacts/addContactSuccess"),E=Object(y.b)("contacts/addContactError"),w=Object(y.b)("contacts/delContactRequest"),_=Object(y.b)("contacts/delContactSuccess"),A=Object(y.b)("contacts/delContactError"),z={changeFilter:Object(y.b)("contacts/filteredContacts"),addContactRequest:q,addContactSuccess:R,addContactError:E,delContactRequest:w,delContactSuccess:_,delContactError:A,fetchContactRequest:S,fetchContactSuccess:F,fetchContactError:k};g.a.defaults.baseURL="http://localhost:3000/";var D,M=function(t){return function(e){e(z.addContactRequest()),g.a.post("/contacts",t).then((function(t){var n=t.data;return e(z.addContactSuccess(n))})).catch((function(t){return e(z.addContactError(t))}))}},N=function(t){return function(e){e(z.delContactRequest()),g.a.delete("/contacts/".concat(t)).then((function(){return e(z.delContactSuccess(t))})).catch((function(t){return e(z.delContactError(t))}))}},B=function(){return function(){var t=Object(x.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(z.fetchContactRequest()),t.prev=1,t.next=4,g.a.get("/contacts");case 4:n=t.sent,c=n.data,e(z.fetchContactSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(z.fetchContactError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},I=n(9),J=function(t){return t.contacts.filter},L={getContacts:function(t){return t.contacts.contacts},getFilter:J,getVisibleContacts:Object(I.a)([function(t){return t.contacts.contacts},J],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},Z=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",id:"",sex:"male"},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(l.a)({},c,a)),t.setState({id:Object(O.a)()})},t.addContact=function(e){e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name}))?alert("".concat(t.state.name," is already exist in contacts")):t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:"",id:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(f,{state:this.state,handleChange:this.handleChange,addContact:this.addContact,handleSexRadio:this.handleChange})}}]),n}(a.a.Component),V=Object(C.b)(null,(function(t){return{onSubmit:function(e){return t(M(e))}}}))(Z),P=Object(C.b)((function(t){return{contacts:L.getVisibleContacts(t)}}),(function(t){return{handlerDel:function(e){return t(N(e))}}}))((function(t){var e=t.contacts,n=t.handlerDel;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,a=t.sex,r=t.id;return Object(h.jsxs)("li",{children:[e,": ",c," (",a,")",Object(h.jsx)("button",{onClick:function(){return n(r)},type:"submit",id:r,children:"delete"})]},r)}))})})})),T=Object(C.b)((function(t){return{filter:L.getFilter(t)}}),(function(t){return{handlerFilter:function(e){return t(z.changeFilter(e.target.value))}}}))((function(t){var e=t.handlerFilter,n=t.filter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Find contacts by name:"}),Object(h.jsx)("input",{onChange:e,type:"text",value:n})]})})),U=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(V,{contacts:this.props.contacts}),Object(h.jsx)("h2",{children:"Contacts"}),this.props.contacts.length>1&&Object(h.jsx)(T,{}),Object(h.jsx)(P,{})]})}}]),n}(a.a.Component),$=Object(C.b)((function(t){return{contacts:L.getContacts(t),filter:L.getFilter(t)}}),(function(t){return{fetchContacts:function(){return t(B())}}}))(U),G=n(28),H=n(4),K=z.addContactSuccess,Q=z.delContactSuccess,W=z.changeFilter,X=z.fetchContactSuccess,Y=Object(y.c)([],(D={},Object(l.a)(D,X,(function(t,e){return e.payload})),Object(l.a)(D,K,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(l.a)(D,Q,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),tt=Object(y.c)("",Object(l.a)({},W,(function(t,e){return e.payload}))),et=Object(H.b)({contacts:Y,filter:tt}),nt=Object(y.a)({reducer:{contacts:et}});o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C.a,{store:nt,children:Object(h.jsx)($,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.bb617bcc.chunk.js.map