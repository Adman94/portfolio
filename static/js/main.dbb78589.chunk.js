(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/ekceer.ae6266c5.png"},44:function(e,t,a){e.exports=a.p+"static/media/profile.8e4ae1b1.png"},45:function(e,t,a){e.exports=a.p+"static/media/quench.304f19df.png"},48:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),c=(a(53),a(8)),o=a(11),s=a(10),m=a(9),u=a(25),d=a(5),h=a(6),b=a(33),E=a(47),p=a(18),f=a(16);var g=function(){return l.a.createElement("footer",{className:"pt-5 mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:" justify-content-between p-4"},l.a.createElement(f.a,{className:"",md:3,sm:12},"This site was made by Adeeb."),l.a.createElement(f.a,{className:"d-flex",md:3,sm:12},"Copyright \xa9 2020 All rights reserved."))))},v=a(19);var k=function(e){return l.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center ml-5 pl-5 py-4"},l.a.createElement(f.a,{className:"title",md:10,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(23),S=a(43),w=a.n(S),N=a(44),C=a.n(N),T=a(45),j=a.n(T),x=a(40);var A=function(e){var t=Object(x.b)({opacity:1,from:{opacity:0}});return l.a.createElement(x.a.div,{className:"",style:t},l.a.createElement("p",{className:"a-card-title"},e.title),l.a.createElement("p",{className:"a-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var I=function(e){return l.a.createElement("div",{className:"d-inline-block a-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"a-card-img",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(y.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(I,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Ekceer",subTitle:"A beauty and clinic app",imgSrc:w.a,link:"https://tahseens.azurewebsites.net",selected:!1},{id:1,title:"Github",subTitle:"Small projects on github",imgSrc:C.a,link:"https://github.com/Adman94",selected:!1},{id:2,title:"Quench",subTitle:"Non-profit affordable water project",imgSrc:j.a,link:"https://quenchpoverty.org/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(n.Component);var _=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"mt-5 bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(L,null))))};var O=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var R=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"mt-5 bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text})),l.a.createElement(h.a,{className:"about"},l.a.createElement(O,null,l.a.createElement("p",null,"Hello, my name is Adeeb Rahman. I'm a recent graduate and aspiring to pursue a career in full stack software engineering. I've had experience working with React, Next JS, Node JS, Express JS, MongoDB, MySQL, etc. and looking forward to learn more and more new technologies in the years to come."),l.a.createElement("p",null,"I'm always in the pursuit of new ideas to develop and contribute to the world for the future. I hope to start my own business as I grow my portfolio, so that I can help others and create job opportunities."),l.a.createElement("p",null,"My latest project is create an expense tracking application that would be simple enough for people who find technology to be quite challenging. I'm taking the approach of using React Native along with Google Firebase, but would also like to try out Flutter for future cross platform mobile application development."),l.a.createElement("p",null,"When I'm not coding or building tech stuff, I'd play the guitar or play soccer."),l.a.createElement("p",null,"Thanks for reading!")))))},P=a(12),M=a(37),J=a(22),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={senderEmail:"",feedback:"",formSubmitted:!1,disabled:!1,emailSent:null},e.handleCancel=e.handleCancel.bind(Object(P.a)(e)),e.handleChange=e.handleChange.bind(Object(P.a)(e)),e.handleEmailChange=e.handleEmailChange.bind(Object(P.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(P.a)(e)),e}return Object(o.a)(a,[{key:"handleCancel",value:function(){this.setState({senderEmail:"",feedback:""})}},{key:"handleChange",value:function(e){this.setState({feedback:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({senderEmail:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.env,a=t.REACT_APP_EMAILJS_RECEIVER,n=t.REACT_APP_EMAILJS_TEMPLATEID,l=t.REACT_APP_EMAILJS_USERID;this.sendFeedback(n,this.state.senderEmail,a,this.state.feedback,l),this.setState({formSubmitted:!0,disabled:!0,emailSent:!0})}},{key:"sendFeedback",value:function(e,t,a,n,l){var r=this;window.emailjs.send("default_service",e,{senderEmail:t,receiverEmail:a,feedback:n},l).then((function(e){r.setState({formEmailSent:!0})})).catch((function(e){return console.error("Failed to send feedback. Error: ",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"mt-5 bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(k,{title:this.props.title,subTitle:this.props.subTitle,text:this.props.text}),l.a.createElement(O,null,l.a.createElement(J.a,{onSubmit:this.handleSubmit},l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(J.a.Control,{id:"sender",name:"sender",placeholder:"email@example.com",type:"email",value:this.state.senderEmail,onChange:this.handleEmailChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"feedback"},"Feedback"),l.a.createElement(J.a.Control,{id:"feedback",name:"feedback",placeholder:"Let's catch up!",as:"textarea",rows:"3",value:this.state.feedback,onChange:this.handleChange})),l.a.createElement("div",{className:"btn-group"},l.a.createElement(M.a,{className:"d-inline-block",variant:"outline-danger",onClick:this.handleCancel},"Cancel")),l.a.createElement("div",{className:"btn-group"},l.a.createElement(M.a,{disabled:this.state.disabled,type:"submit",className:"d-inline-block ml-5",variant:"outline-success"},"Submit")),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))))}}]),a}(n.Component),D=(a(57),{color:"inherit",textDecoration:"inherit"}),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Adeeb Rahman",headerLinks:[{title:"Home",path:"/"},{subTitle:"About",path:"/about"},{text:"Contact",path:"/contact"}],home:{title:"Welcome Everyone!",subTitle:"Love to learn and teach",text:'Some projects I"m working on...'},about:{title:"About Me",subTitle:"It'd be great to know each other!",text:"Little bit about myself"},contact:{title:"Let's get coffee!!",subTitle:"Send me an email",text:"Let's connect, would love to know your feedback on the website. Have a great day...!!"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{fixed:"top",className:"overflow-auto border-bottom",bg:"white",expand:"lg"},l.a.createElement(u.b,{style:D,className:"nav-Link p-2",to:"/"},"Adeeb Rahman"),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(u.b,{style:D,className:"nav-Link p-2",to:"/"},"Home"),l.a.createElement(u.b,{style:D,className:"nav-Link p-2",to:"/about"},"About"),l.a.createElement(u.b,{style:D,className:"nav-Link p-2",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(_,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return l.a.createElement(R,{title:e.state.about.title,subTitle:e.state.about.subTitle,text:e.state.about.text})}}),l.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(F,{env:e.props.env,title:e.state.contact.title,subTitle:e.state.contact.subTitle,text:e.state.contact.text})}}),l.a.createElement(g,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,{env:{REACT_APP_EMAILJS_RECEIVER:"secluded.grace@gmail.com",REACT_APP_EMAILJS_TEMPLATEID:"test_template",REACT_APP_EMAILJS_USERID:"user_YPci1L5eIjUOjN3u2Tvjk"}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.dbb78589.chunk.js.map