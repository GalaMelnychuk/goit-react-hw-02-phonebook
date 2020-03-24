(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(e,t,n){e.exports={containetForm:"ContactForm_containetForm__Qk-10",inputForm:"ContactForm_inputForm__3LDCN",buttonForm:"ContactForm_buttonForm__sFkpn",phoneHeader:"ContactForm_phoneHeader__2Yy_U"}},function(e,t,n){e.exports={name:"ContactListItem_name__3maI8",number:"ContactListItem_number__1SUGv",buttonForm:"ContactListItem_buttonForm__zr7Z9"}},,,,,,,function(e,t,n){e.exports={headerPhone:"App_headerPhone__24vGa"}},function(e,t,n){e.exports={filter:"Filter_filter__1__jF",inputFilter:"Filter_inputFilter__30E-N"}},,,function(e,t,n){e.exports={contactList:"ContactList_contactList__23LjC"}},,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=n(14),i=n(3),m=n(5),u=n(6),s=n(7),d=n(8),h=n(4),p=n(1),b=n.n(p),f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).maxId=100,e.state={id:"",name:"",number:""},e.handlerChangeInput=function(t){e.setState(Object(h.a)({id:e.maxId++},t.target.name,t.target.value))},e.handlerSubmitForm=function(t){e.props.onItemAdded(Object(i.a)({},e.state)),t.preventDefault(),e.reset()},e.reset=function(){e.setState({id:"",name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("div",{className:b.a.containetForm},r.a.createElement("form",{className:b.a.phoneForm,onSubmit:this.handlerSubmitForm},r.a.createElement("label",{className:b.a.phoneHeader},"Name",r.a.createElement("input",{className:b.a.inputForm,onChange:this.handlerChangeInput,type:"text",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s]+$",name:"name",placeholder:"Please, enter Contact's Name and Last Name",value:t})),r.a.createElement("label",{className:b.a.phoneHeader}," Number "),r.a.createElement("input",{className:b.a.inputForm,onChange:this.handlerChangeInput,type:"text",name:"number",placeholder:"xxx-xxx-xxx",required:!0,pattern:"[0-9]{3}-[0-9]{3}-[0-9]{3}",value:n}),r.a.createElement("button",{className:b.a.buttonForm,type:"submit"},"Add contact")))}}]),n}(a.Component),_=n(9),C=n.n(_),F=n(13),v=n.n(F),E=n(2),N=n.n(E),O=function(e){var t=e.contact,n=e.onDeleted,a=t.name,c=t.number;return r.a.createElement("li",{className:N.a.item},r.a.createElement("p",{className:N.a.name},a),r.a.createElement("p",{className:N.a.number},c),r.a.createElement("button",{className:N.a.buttonForm,type:"click",onClick:n},"Delete"))},g=function(e){var t=e.contacts,n=e.onItemDeleted;return r.a.createElement("ul",{className:v.a.contactList},t.map((function(e){return r.a.createElement(O,{contact:e,key:e.id,onDeleted:function(){return n(e.id)}})})))},x=n(10),j=n.n(x),y=function(e){var t=e.value,n=e.onChangeFilterContact;return r.a.createElement("label",{className:j.a.filter},"Find contact by name",r.a.createElement("input",{className:j.a.inputFilter,value:t,onChange:n}))},I=function(e,t,n){return e.find((function(e){return e.name.includes(t)&&e.number.includes(n)}))},k=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.addContact=function(t){var n=Object(i.a)({},t);I(e.state.contacts,n.name,n.number)?alert("NOOOOOOOOOOO!!!!!"):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[n])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilterContact=function(t){e.setState({filter:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return r.a.createElement("div",null,r.a.createElement("h1",{className:C.a.headerPhone},"Phonebook"),r.a.createElement(f,{onItemAdded:this.addContact}),r.a.createElement("h2",{className:C.a.headerPhone},"Contacts"),t.length>=2&&r.a.createElement(y,{value:n,onChangeFilterContact:this.changeFilterContact,allContacts:t}),r.a.createElement(g,{contacts:a,onItemDeleted:this.deleteContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5ed006fd.chunk.js.map