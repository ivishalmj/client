(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,n){},157:function(e,t,n){},228:function(e,t,n){},233:function(e,t,n){},253:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(41),l=n.n(r),i=(n(228),n(13)),s=n(11),o=n(16),j=n(15),u=n.n(j),d=n(23),b=n(14),p=n(375),O=n(363),h=n(376),x=n(379),m=(n(233),n(0)),v=function(e){var t=e.numActive,n=Object(i.b)();function a(){n({type:"USER::LOGOUT",payload:null})}return Object(m.jsxs)("div",{className:"logo-wrapper",children:[1===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:"home",to:"/logout",onClick:a,children:"Logout"}),Object(m.jsx)(s.b,{className:"home",to:"/profile",children:"Profile"}),Object(m.jsx)(s.b,{className:"home",to:"/dashboard",children:"Dashboard"})]}):null,2===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:"home",to:"/profile",children:"Profile"}),Object(m.jsx)(s.b,{className:"home",to:"/dashboard",children:"Dashboard"}),Object(m.jsx)(s.b,{className:"home",to:"/logout",onClick:a,children:"Logout"})]}):null,3===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:"home",to:"/logout",onClick:a,children:"Logout"}),Object(m.jsx)(s.b,{className:"home",to:"/dashboard",children:"Dashboard"})]}):null,4===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:"home",to:"/lookup",children:"Add Fleet/Lookup"}),Object(m.jsx)(s.b,{className:"home",to:"/fleets",children:"View Policies"}),Object(m.jsx)(s.b,{className:"home",to:"/dashboard",children:"Dashboard"}),Object(m.jsx)(s.b,{className:"home",to:"/logout",onClick:a,children:"Logout"})]}):null,5===t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:"home",to:"/logout",onClick:a,children:"Logout"}),Object(m.jsx)(s.b,{className:"home",to:"/profile",children:"Profile"})]}):null,Object(m.jsx)("h1",{className:"logo",children:Object(m.jsx)(s.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/lookup",children:"Stable"})})]})},f=(n(157),function(e){var t=e.children,n=e.step;return Object(m.jsxs)("div",{className:"page dashboard",children:[Object(m.jsx)(v,{numActive:n}),Object(m.jsx)("div",{className:"content-outer-wrapper",children:Object(m.jsx)("div",{className:"content-inner-wrapper",children:Object(m.jsx)("div",{className:"content",children:t})})})]})}),y=n(37),g=n.n(y),N={get:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/fleets/all-fleets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},C=(n(253),Object(o.g)((function(e){var t=e.history,n=Object(i.b)(),c=Object(a.useState)(null),r=Object(b.a)(c,2),l=(r[0],r[1]),s=Object(a.useState)(!1),j=Object(b.a)(s,2),v=(j[0],j[1],Object(a.useState)(!1)),y=Object(b.a)(v,2),g=(y[0],y[1],Object(a.useState)(null)),C=Object(b.a)(g,2),E=C[0],w=(C[1],Object(a.useState)(null)),S=Object(b.a)(w,2),F=(S[0],S[1],Object(a.useState)(!1)),T=Object(b.a)(F,2),k=T[0],P=T[1],D=Object(i.c)((function(e){return e.fleet.fleets}));return console.log(k),Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get();case 2:t=e.sent,n({type:"FLEET::SET_FLEETS",payload:t.data.data.fleet});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),k?Object(m.jsx)(o.a,{to:"/underwriting"}):Object(m.jsx)(f,{step:1,children:Object(m.jsxs)("div",{className:"lookup-wrapper",children:[Object(m.jsxs)("div",{className:"policy-management",children:[Object(m.jsx)("h1",{children:"Policy Management"}),Object(m.jsx)("label",{style:{padding:"15px",marginBottom:"20px"},htmlFor:"new-user",children:"Add Fleet Customer"}),Object(m.jsx)(p.a,{className:"new-user",placeholder:"Enter Fleet Name",onChange:function(e){l(e.target.value)}}),Object(m.jsx)(O.a,{onClick:null,children:"Next"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{style:{marginRight:"20px"},htmlFor:"dropdown",children:"Select Fleet"}),Object(m.jsx)(h.a,{className:"dropdown",options:D.map((function(e){return{key:e._id,value:e._id,text:e.fleetName}})),onChange:function(e,n){var a=n.value;t.push("/fleets/".concat(a))}}),E&&Object(m.jsx)(x.a,{error:!0,header:"User not found. Please check your ID and try again."})]}),Object(m.jsxs)("div",{className:"underwriting-management",children:[Object(m.jsx)("h1",{children:"Underwriting Management"}),Object(m.jsx)("h3",{children:"Current Version:"}),Object(m.jsx)(O.a,{children:"Edit"}),Object(m.jsx)(O.a,{onClick:function(){return P(!0)},children:"New"})]})]})})}))),E=n(378),w=(n(168),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.policy.policies})),n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],l=c[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{style:{width:"20%"},placeholder:"Policy Search",onChange:function(e){l(e.target.value)}}),Object(m.jsxs)(E.a,{celled:!0,fixed:!0,singleLine:!0,children:[Object(m.jsx)(E.a.Header,{children:Object(m.jsxs)(E.a.Row,{children:[Object(m.jsx)(E.a.HeaderCell,{children:Object(m.jsx)("div",{children:null})}),Object(m.jsx)(E.a.HeaderCell,{children:"Policy Number"}),Object(m.jsx)(E.a.HeaderCell,{children:"VIN"}),Object(m.jsx)(E.a.HeaderCell,{children:"Driver Name"}),Object(m.jsx)(E.a.HeaderCell,{children:"Premium"})]})}),Object(m.jsx)(E.a.Body,{children:t.filter((function(e){if(""===r)return!0;var t=new RegExp(r.replace(/\\/g,""),"i");return e.policyNumber.match(t)||e.vin.match(t)||e.driverName.match(t)||e.premium.toString().match(t)})).map((function(t,n){return Object(m.jsxs)(E.a.Row,{children:[Object(m.jsx)(E.a.Cell,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(s.b,{to:"/policies/".concat(t.policyNumber,"/edit"),style:{fontWeight:"bold",color:"blue"},children:"Edit Policy"}),Object(m.jsx)("div",{}),Object(m.jsx)(s.b,{to:"/index",style:{fontWeight:"bold",color:"blue"},onClick:function(){return e({type:"POLICY::DELETE",payload:t.policyNumber})},children:"Delete Policy"})]})}),Object(m.jsx)(E.a.Cell,{children:Object(m.jsxs)(s.b,{to:"/policies/".concat(t.policyNumber,"/view"),style:{fontWeight:"bold",color:"blue"},children:[" ",t.policyNumber]})}),Object(m.jsx)(E.a.Cell,{children:t.vin}),Object(m.jsx)(E.a.Cell,{children:t.driverName}),Object(m.jsx)(E.a.Cell,{children:t.premium})]},n)}))})]})]})}),S=function(e){return g.a.get("/api/policies",{params:{email:e}})},F=function(e){var t=e.currentPolicy;return g.a.post("/api/policies",t)},T=Object(o.g)((function(e){var t=e.match.params.id,n=Object(i.b)(),c=Object(a.useState)(!1),r=Object(b.a)(c,2),l=r[0];r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var a,c,r,l,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get();case 2:return c=e.sent,r=c.data.data.fleet,l=r.find((function(e){return e._id===t})),i=l.email,e.next=8,S(i);case 8:s=e.sent,n({type:"POLICY::SET_POLICIES",payload:null===(a=s.data.data)||void 0===a?void 0:a.policies});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),l?Object(m.jsx)(o.a,{to:"/add-details"}):Object(m.jsxs)(f,{step:3,children:[Object(m.jsx)("h3",{style:{border:"1px solid black"},children:"Current Policies"}),Object(m.jsx)(s.b,{to:"/add-details",style:{fontWeight:"bold",color:"blue"},children:"Add New Policy"}),Object(m.jsx)("br",{}),Object(m.jsx)(w,{})]})})),k=n(56),P=n(377),D=n(198),I=n(199),R=n(119),L=n(210),A=n(209),U=n(40),_=n.n(U),M=n(200),V=n.n(M),Y=n(203),z=n.n(Y),W=n(204),H=n.n(W),G=n(205),B=n.n(G),K=(n(342),n(343),function(e){Object(L.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).state={open:!1},a.handleModalClick=a.handleModalClick.bind(Object(R.a)(a)),a.uppy=_()({id:"uppy1",autoProceed:!0,debug:!0}).use(V.a,{endpoint:"/api/v1/documents"}).use(z.a,{companionUrl:"https://companion.uppy.io"}).use(H.a,{endpoint:"/api/v1/policies",formData:!0,fieldName:"files[]"}),a}return Object(I.a)(n,[{key:"componentWillUnmount",value:function(){this.uppy.close()}},{key:"handleModalClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=this.state.open;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{id:"dashboardmodal",onClick:this.handleModalClick,children:t?"Close dashboard":"Upload Documents"}),Object(m.jsx)(B.a,{uppy:this.uppy,open:t,target:document.body,onRequestClose:function(){return e.setState({open:!1})},plugins:["Webcam"],trigger:"#dashboardmodal"})]})})}}]),n}(a.Component)),Z=(n(142),function(){var e=Object(i.b)(),t=Object(a.useState)(null),n=Object(b.a)(t,2),c=n[0],r=n[1],l=Object(i.c)((function(e){return e.policy.currentPolicy}));function s(t,n){e({type:"POLICY::UPDATE_CURRENT",payload:Object(k.a)({},t,n.target.value)})}function j(){return(j=Object(d.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F({currentPolicy:l,event:n});case 2:a=t.sent,console.log(a),e({type:"POLICY::CREATE",payload:l}),n.preventDefault(),r(!0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return c?Object(m.jsx)(o.a,{to:"/index"}):Object(m.jsx)(f,{step:4,children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)(K,{}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"select",children:"Select a deposit amount"}),Object(m.jsxs)("select",{name:"select",children:[Object(m.jsx)("option",{value:"option 1",children:"15%"}),Object(m.jsx)("option",{value:"option 2",children:"20%"}),Object(m.jsx)("option",{value:"option 3",children:"25%"}),Object(m.jsx)("option",{value:"option 4",children:"40%"}),Object(m.jsx)("option",{value:"option 5",children:"100%"})]})]}),Object(m.jsxs)(P.a,{children:[Object(m.jsx)("label",{htmlFor:"policy-number",children:"Policy Number:"}),Object(m.jsx)("input",{onChange:function(e){return s("policyNumber",e)},type:"text",id:"policy-number",value:null===l||void 0===l?void 0:l.policyNumber}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"eff-date",children:"Effective Date:"}),Object(m.jsx)("input",{type:"text",id:"eff-date",name:"lname",onChange:function(e){return s("effectiveDate",e)},value:null===l||void 0===l?void 0:l.effectiveDate}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"exp-date",children:"Expiration Date:"}),Object(m.jsx)("input",{type:"text",id:"exp-date",name:"fname",onChange:function(e){return s("expirationDate",e)},value:null===l||void 0===l?void 0:l.expirationDate}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"year",children:"Year:"}),Object(m.jsx)("input",{type:"text",id:"year",name:"lname",onChange:function(e){return s("year",e)},value:null===l||void 0===l?void 0:l.year}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"make",children:"Make:"}),Object(m.jsx)("input",{type:"text",id:"make",name:"fname",onChange:function(e){return s("make",e)},value:null===l||void 0===l?void 0:l.make}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"vin",children:"VIN:"}),Object(m.jsx)("input",{onChange:function(e){return s("vin",e)},type:"text",id:"vin",name:"lname",value:null===l||void 0===l?void 0:l.vin}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"seats",children:"Seats:"}),Object(m.jsx)("input",{type:"text",id:"seats",name:"fname",onChange:function(e){return s("seats",e)},value:null===l||void 0===l?void 0:l.seats}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"insured-name",children:"Insured Name:"}),Object(m.jsx)("input",{type:"text",id:"insured-name",name:"lname",onChange:function(e){return s("insuredName",e)},value:null===l||void 0===l?void 0:l.insuredName}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"street-address",children:"Street Address:"}),Object(m.jsx)("input",{type:"text",id:"street-address",name:"fname",onChange:function(e){return s("streetAddress",e)},value:null===l||void 0===l?void 0:l.streetAddress}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"city",children:"City:"}),Object(m.jsx)("input",{type:"text",id:"city",name:"lname",onChange:function(e){return s("city",e)},value:null===l||void 0===l?void 0:l.city}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"state",children:"State:"}),Object(m.jsx)("input",{type:"text",id:"state",name:"lname",onChange:function(e){return s("state",e)},value:null===l||void 0===l?void 0:l.state}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"zip",children:"Zip:"}),Object(m.jsx)("input",{type:"text",id:"zip",name:"lname",onChange:function(e){return s("zip",e)},value:null===l||void 0===l?void 0:l.zip}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"driver-name",children:"Driver Name:"}),Object(m.jsx)("input",{onChange:function(e){return s("driverName",e)},type:"text",id:"driver-name",name:"lname",value:null===l||void 0===l?void 0:l.driverName}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"premium",children:"Premium:"}),Object(m.jsx)("input",{onChange:function(e){return s("premium",e)},type:"text",id:"premium",name:"lname",value:null===l||void 0===l?void 0:l.premium}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{onClick:function(e){return j.apply(this,arguments)},type:"submit",children:"Submit"})]})]})})}),J=Object(o.g)((function(e){var t=e.match.params.id,n=Object(i.b)(),c=Object(a.useState)(null),r=Object(b.a)(c,2),l=r[0],s=r[1],j=Object(i.c)((function(e){return e.policy.currentPolicy}));function u(e,t){n({type:"POLICY::UPDATE_CURRENT",payload:Object(k.a)({},e,t.target.value)})}return Object(a.useEffect)((function(){n({type:"POLICY::SET_CURRENT",payload:t})}),[n,t]),l?Object(m.jsx)(o.a,{to:"/index"}):Object(m.jsx)(f,{step:3,children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)(O.a,{children:"Upload FH1"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:"Upload DEC"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:"Upload COI"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"select",children:"Select a deposit amount"}),Object(m.jsxs)("select",{name:"select",children:[Object(m.jsx)("option",{value:"option 1",children:"15%"}),Object(m.jsx)("option",{value:"option 2",children:"20%"}),Object(m.jsx)("option",{value:"option 3",children:"25%"}),Object(m.jsx)("option",{value:"option 4",children:"40%"}),Object(m.jsx)("option",{value:"option 5",children:"100%"})]})]}),Object(m.jsxs)(P.a,{children:[Object(m.jsxs)("h4",{htmlFor:"policy-number",children:["Policy Number:",j.policyNumber]}),Object(m.jsx)("label",{htmlFor:"eff-date",children:"Effective Date:"}),Object(m.jsx)(p.a,{type:"text",id:"eff-date",name:"lname",onChange:function(e){return u("effectiveDate",e)},value:j.effectiveDate}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"exp-date",children:"Expiration Date:"}),Object(m.jsx)(p.a,{type:"text",id:"exp-date",name:"fname",onChange:function(e){return u("expirationDate",e)},value:j.expirationDate}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"year",children:"Year:"}),Object(m.jsx)(p.a,{type:"text",id:"year",name:"lname",onChange:function(e){return u("year",e)},value:j.year}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"make",children:"Make:"}),Object(m.jsx)(p.a,{type:"text",id:"make",name:"fname",onChange:function(e){return u("make",e)},value:j.make}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"vin",children:"VIN:"}),Object(m.jsx)(p.a,{onChange:function(e){return u("vin",e)},type:"text",id:"vin",name:"lname",value:j.vin}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"seats",children:"Seats:"}),Object(m.jsx)(p.a,{type:"text",id:"seats",name:"fname",onChange:function(e){return u("seats",e)},value:j.seats}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"insured-name",children:"Insured Name:"}),Object(m.jsx)(p.a,{type:"text",id:"insured-name",name:"lname",onChange:function(e){return u("insuredName",e)},value:j.insuredName}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"street-address",children:"Street Address:"}),Object(m.jsx)(p.a,{type:"text",id:"street-address",name:"fname",onChange:function(e){return u("streetAddress",e)},value:j.streetAddress}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"city",children:"City:"}),Object(m.jsx)(p.a,{type:"text",id:"city",name:"lname",onChange:function(e){return u("city",e)},value:j.city}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"state",children:"State:"}),Object(m.jsx)(p.a,{type:"text",id:"state",name:"lname",onChange:function(e){return u("state",e)},value:j.state}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"zip",children:"Zip:"}),Object(m.jsx)(p.a,{type:"text",id:"zip",name:"lname",onChange:function(e){return u("zip",e)},value:j.zip}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"driver-name",children:"Driver Name:"}),Object(m.jsx)(p.a,{onChange:function(e){return u("driverName",e)},type:"text",id:"driver-name",name:"lname",value:j.driverName}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"premium",children:"Premium:"}),Object(m.jsx)(p.a,{onChange:function(e){return u("premium",e)},type:"text",id:"premium",name:"lname",value:j.premium}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{onClick:function(e){n({type:"POLICY::UPDATE",payload:j}),e.preventDefault(),s(!0)},type:"submit",children:"Submit"})]})]})})})),q=Object(o.g)((function(e){var t=e.match.params.id,n=Object(i.b)(),c=Object(i.c)((function(e){return e.policy.currentPolicy}));return Object(a.useEffect)((function(){n({type:"POLICY::SET_CURRENT",payload:t})}),[n,t]),Object(m.jsx)(f,{step:3,children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)(O.a,{children:"Upload FH1"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:"Upload DEC"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{children:"Upload COI"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"select",children:"Select a deposit amount"}),Object(m.jsxs)("select",{name:"select",children:[Object(m.jsx)("option",{value:"option 1",children:"15%"}),Object(m.jsx)("option",{value:"option 2",children:"20%"}),Object(m.jsx)("option",{value:"option 3",children:"25%"}),Object(m.jsx)("option",{value:"option 4",children:"40%"}),Object(m.jsx)("option",{value:"option 5",children:"100%"})]})]}),Object(m.jsxs)(P.a,{children:[Object(m.jsxs)("h4",{htmlFor:"policy-number",children:["Policy Number:",null===c||void 0===c?void 0:c.policyNumber]}),Object(m.jsx)("label",{htmlFor:"eff-date",children:"Effective Date:"}),Object(m.jsx)(p.a,{type:"text",id:"eff-date",name:"lname",value:null===c||void 0===c?void 0:c.effectiveDate,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"exp-date",children:"Expiration Date:"}),Object(m.jsx)(p.a,{type:"text",id:"exp-date",name:"fname",value:null===c||void 0===c?void 0:c.expirationDate,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"year",children:"Year:"}),Object(m.jsx)(p.a,{type:"text",id:"year",name:"lname",value:null===c||void 0===c?void 0:c.year,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"make",children:"Make:"}),Object(m.jsx)(p.a,{type:"text",id:"make",name:"fname",value:null===c||void 0===c?void 0:c.make,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"vin",children:"VIN:"}),Object(m.jsx)(p.a,{type:"text",id:"vin",name:"lname",value:null===c||void 0===c?void 0:c.vin,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"seats",children:"Seats:"}),Object(m.jsx)(p.a,{type:"text",id:"seats",name:"fname",value:null===c||void 0===c?void 0:c.seats,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"insured-name",children:"Insured Name:"}),Object(m.jsx)(p.a,{type:"text",id:"insured-name",name:"lname",value:null===c||void 0===c?void 0:c.insuredName,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"street-address",children:"Street Address:"}),Object(m.jsx)(p.a,{type:"text",id:"street-address",name:"fname",value:null===c||void 0===c?void 0:c.streetAddress,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"city",children:"City:"}),Object(m.jsx)(p.a,{type:"text",id:"city",name:"lname",value:null===c||void 0===c?void 0:c.city,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"state",children:"State:"}),Object(m.jsx)(p.a,{type:"text",id:"state",name:"lname",value:null===c||void 0===c?void 0:c.state,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"zip",children:"Zip:"}),Object(m.jsx)(p.a,{type:"text",id:"zip",name:"lname",value:null===c||void 0===c?void 0:c.zip,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"driver-name",children:"Driver Name:"}),Object(m.jsx)(p.a,{type:"text",id:"driver-name",name:"lname",value:null===c||void 0===c?void 0:c.driverName,disabled:"true"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"premium",children:"Premium:"}),Object(m.jsx)(p.a,{type:"text",id:"premium",name:"lname",value:null===c||void 0===c?void 0:c.premium,disabled:"true"}),Object(m.jsx)("br",{})]})]})})})),X=(n(344),function(){return Object(m.jsxs)("div",{className:"logo-wrapper",children:[Object(m.jsx)(s.b,{style:{color:"inherit",textDecoration:"inherit"},className:"nav-button",to:"/signup",children:"Create Account"}),Object(m.jsx)("h1",{className:"logo",children:Object(m.jsx)(s.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/lookup",children:"Stable"})})]})}),$=(n(345),function(e){var t=e.children;return Object(m.jsxs)("div",{className:"page dashboard",children:[Object(m.jsx)(X,{}),Object(m.jsx)("div",{className:"content-outer-wrapper",children:Object(m.jsx)("div",{className:"content-inner-wrapper",children:Object(m.jsx)("div",{className:"content",children:t})})})]})}),Q=function(e,t){return g.a.post("api/adminauth/login",{email:e,password:t})},ee=(n(346),function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),s=Object(b.a)(l,2),o=s[0],j=s[1];function h(){return(h=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(c,o);case 3:n=t.sent,a=n.data.token,e({type:"USER::SET_ADMIN_LOGIN_TOKEN",payload:a}),e({type:"APP_NOTIFICATIONS::CLEAR",payload:null}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"APP_NOTIFICATIONS::CREATE",payload:{message:"Invalid username/password.",status:"error"}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}return Object(m.jsx)($,{children:Object(m.jsxs)("div",{className:"login-wrapper",children:[Object(m.jsx)("h3",{children:" Administrator Login"}),Object(m.jsxs)("div",{className:"well",children:[Object(m.jsx)("label",{htmlFor:"email-input",children:"Email address"}),Object(m.jsx)(p.a,{size:"40",maxLength:"40",className:"email-input",value:c,type:"text",placeholder:"Enter your email address",onChange:function(e){r(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"password-label",htmlFor:"password-input",children:"Password"}),Object(m.jsx)(p.a,{size:"40",maxLength:"40",value:o,className:"password-input",type:"password",placeholder:"Enter your password",onChange:function(e){j(e.target.value)}})]}),Object(m.jsx)(O.a,{className:"pointer-events-none",onClick:function(){return h.apply(this,arguments)},children:"Log in"})]})})}),te={create:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.emailInputValue,a=t.passwordInputValue,c=t.confirmInputValue,e.abrupt("return",g.a.post("api/adminauth/signup",{email:n,password:a,passwordConfirm:c}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=(n(347),function(){return Object(m.jsxs)("div",{className:"logo-wrapper",children:[Object(m.jsx)(s.b,{style:{color:"inherit",textDecoration:"inherit"},className:"nav-button",to:"/",children:"Login"}),Object(m.jsx)("h1",{className:"logo",children:Object(m.jsx)(s.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/lookup",children:"Stable"})})]})}),ae=function(e){var t=e.children;return Object(m.jsxs)("div",{className:"page dashboard",children:[Object(m.jsx)(ne,{}),Object(m.jsx)("div",{className:"content-outer-wrapper",children:Object(m.jsx)("div",{className:"content-inner-wrapper",children:Object(m.jsx)("div",{className:"content",children:t})})})]})},ce=(n(348),function(){var e=Object(i.b)(),t=Object(a.useState)(null),n=Object(b.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(null),s=Object(b.a)(l,2),j=s[0],h=s[1],x=Object(a.useState)(null),v=Object(b.a)(x,2),f=v[0],y=v[1],g=Object(a.useState)(!1),N=Object(b.a)(g,2),C=N[0],E=N[1],w=Object(a.useState)(null),S=Object(b.a)(w,2),F=(S[0],S[1]),T=Object(a.useState)(null),k=Object(b.a)(T,2);k[0],k[1],Object(i.c)((function(e){return e.user.adminSignupToken}));function P(){return(P=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te.create({emailInputValue:c,passwordInputValue:j,confirmInputValue:f});case 3:n=t.sent,a=n.data.token,e({type:"USER::SET_ADMIN_SIGNUP_TOKEN",payload:a}),e({type:"APP_NOTIFICATIONS::CREATE",payload:{message:"Account creation successful, please login",status:"success"}}),E(!0),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e({type:"APP_NOTIFICATIONS::CREATE",payload:{message:t.t0.response.data.error,status:"error"}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}if(C)return Object(m.jsx)(o.a,{to:"/"});return Object(m.jsx)(ae,{children:Object(m.jsxs)("div",{className:"login-wrapper",children:[Object(m.jsx)("h3",{children:" Register New Account"}),Object(m.jsxs)("div",{className:"well",children:[Object(m.jsx)("label",{htmlFor:"email-input",children:"Email address"}),Object(m.jsx)(p.a,{className:"email-input",value:c,type:"text",placeholder:"Enter your email address",onChange:function(e){r(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"password-label",htmlFor:"password-input",children:"Password"}),Object(m.jsx)(p.a,{value:j,className:"password-input",type:"password",onKeyDown:function(e){F(e.target.value.length>=7)},placeholder:"Enter your password",onChange:function(e){h(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"confirm-password-label",htmlFor:"confirm-password-input",children:"Confirm Password"}),Object(m.jsx)(p.a,{value:f,className:"confirm-password-input",type:"password",placeholder:"Confirm Password",onChange:function(e){y(e.target.value)}})]}),Object(m.jsx)(O.a,{type:"submit",className:"submit-button",onClick:function(){return P.apply(this,arguments)},children:"Submit"})]})})}),re=(n(349),function(){return Object(m.jsx)(f,{step:3,children:Object(m.jsx)("div",{className:"profile-wrapper",children:Object(m.jsx)("h3",{children:"Profile"})})})}),le=function(e){var t=e.currentRater;return console.log(t),g.a.post("api/underwriting/rater",t)},ie=(n(350),function(){var e=Object(i.b)(),t=Object(a.useState)(null),n=Object(b.a)(t,2),c=n[0],r=n[1],l=Object(i.c)((function(e){return e.underwriting.currentRater}));function s(t,n){e({type:"RATER::UPDATE_CURRENT",payload:Object(k.a)({},t,n.target.value)})}function j(){return(j=Object(d.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(l,n),t.next=4,le({currentRater:l,event:n});case 4:a=t.sent,console.log(a),e({type:"RATER::CREATE",payload:l}),n.preventDefault(),r(!0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert("Must provide a valid date and/or name and cannot be left blank");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return console.log(l),c?Object(m.jsx)(o.a,{to:"/lookup"}):Object(m.jsxs)(f,{step:3,children:[Object(m.jsx)("h1",{children:"Underwriting Criteria"}),Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)(P.a,{children:[Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)("label",{htmlFor:"base-price",children:"Base Price"}),Object(m.jsx)(p.a,{icon:"dollar",onChange:function(e){return s("basePrice",e)},type:"text",className:"base-price",value:null===l||void 0===l?void 0:l.basePrice}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"dmv-range",children:"1-3 Years DMV"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"dmv-range",onChange:function(e){return s("yearsDMV1to3",e)},value:null===l||void 0===l?void 0:l.yearsDMV1to3}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"yearsTLC1to3",children:"1-3 Years TLC"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"yearsTLC1to3",onChange:function(e){return s("yearsTLC1to3",e)},value:null===l||void 0===l?void 0:l.yearsTLC1to3}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"yearsDMV3plus",children:"3+ Years DMV"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"yearsDMV3plus",onChange:function(e){return s("yearsDMV3plus",e)},value:null===l||void 0===l?void 0:l.yearsDMV3plus}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"yearsTLC3plus",children:"3+ Years TLC"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"yearsTLC3plus",onChange:function(e){return s("yearsTLC3plus",e)},value:null===l||void 0===l?void 0:l.yearsTLC3plus}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"ddc",children:"DDC"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"ddc  ",onChange:function(e){return s("hasDDC",e)},value:null===l||void 0===l?void 0:l.hasDDC}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"points",children:"1-6 Points"}),Object(m.jsx)(p.a,{icon:"percent",onChange:function(e){return s("points1_6",e)},type:"text",className:"points",value:null===l||void 0===l?void 0:l.points1_6}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"accident-1",children:"Accidents"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"accident-1",onChange:function(e){return s("accident1",e)},value:null===l||void 0===l?void 0:l.accident1}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"accidents-2",children:"Accidents 2"}),Object(m.jsx)(p.a,{icon:"percent",type:"text",className:"accidents-2",onChange:function(e){return s("accident2",e)},value:null===l||void 0===l?void 0:l.accident2}),Object(m.jsx)("br",{}),Object(m.jsx)(O.a,{onClick:function(e){return j.apply(this,arguments)},type:"submit",children:"Submit"})]}),Object(m.jsx)("label",{htmlFor:"date",children:"Date"}),Object(m.jsx)(p.a,{onChange:function(e){return s("date",e)},type:"text",className:"date",value:null===l||void 0===l?void 0:l.date}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)(p.a,{type:"text",className:"name",onChange:function(e){return s("name",e)},value:null===l||void 0===l?void 0:l.name}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"version",children:"Version"}),Object(m.jsx)(p.a,{type:"text",className:"version",onChange:function(e){return s("version",e)},value:null===l||void 0===l?void 0:l.version}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})})]})}),se=(n(351),function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];return n?Object(m.jsx)(o.a,{to:"lookup"}):Object(m.jsx)(f,{step:5,children:Object(m.jsxs)("div",{className:"dash-wrapper",children:[Object(m.jsx)("h3",{children:"Dashboard"}),Object(m.jsx)("div",{children:Object(m.jsx)(O.a,{style:{padding:100,marginRight:700,fontSize:20},onClick:function(){c(!0)},children:"Rocinante"})})]})})}),oe=n(206),je=n.n(oe),ue=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],l=c.a.useRef(),s=Object(i.c)((function(e){return e.appNotifications.notifications}));return Object(a.useEffect)((function(){l.current&&s.forEach((function(e){n.includes(e.id)||(l.current.addNotification({message:e.message,level:e.status}),r(n.concat([e.id])))}))}),[l,s,n]),Object(m.jsx)("div",{children:Object(m.jsx)(je.a,{ref:l})})};n(361);function de(){return Object(m.jsxs)(s.a,{children:[Object(m.jsx)(ue,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/",component:ee}),Object(m.jsx)(o.b,{exact:!0,path:"/signup",component:ce}),Object(m.jsx)(o.b,{exact:!0,path:"/logout",render:function(){return Object(m.jsx)(o.a,{to:"/"})}}),Object(m.jsx)(o.a,{to:"/"})]})]})}function be(){return Object(m.jsx)(s.a,{children:Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/lookup",component:C}),Object(m.jsx)(o.b,{exact:!0,path:"/logout",render:function(){return Object(m.jsx)(o.a,{to:"/"})}}),Object(m.jsx)(o.b,{exact:!0,path:"/dashboard",component:se}),Object(m.jsx)(o.b,{exact:!0,path:"/profile",component:re}),Object(m.jsx)(o.b,{exact:!0,path:"/fleets/:id",component:T}),Object(m.jsx)(o.b,{exact:!0,path:"/policies/:id/view",component:q}),Object(m.jsx)(o.b,{exact:!0,path:"/add-details",component:Z}),Object(m.jsx)(o.b,{exact:!0,path:"/policies/:id/edit",component:J}),Object(m.jsx)(o.b,{exact:!0,path:"/underwriting",component:ie}),Object(m.jsx)(o.a,{to:"/dashboard"})]})})}var pe=function(){return Object(i.c)((function(e){return e.user.adminLoginToken}))?Object(m.jsx)(be,{}):Object(m.jsx)(de,{})},Oe=n(71),he=n(9),xe={adminLoginToken:localStorage.getItem("adminLoginToken"),currentUser:null,newUser:{email:"",password:"",passwordConfirm:""}},me=n(121),ve={policyNumber:null,licensePlate:null,driverName:null,effectiveDate:null,expirationDate:null,year:null,make:null,seats:null,vin:null,insuredName:null,streetAddress:null,city:null,state:null,zip:null,premium:null,deposit:null,id:null,fh1Link:null,decLink:null,coiLink:null},fe={policies:[],currentPolicy:ve},ye={fleets:[],currentFleet:null},ge={date:null,name:null,version:null,basePrice:null,dmvRange:null,tlcRange:null,dmvExcess:null,tlcExcess:null,doc:null,points:null,accidents1:null,accidents2:null},Ne={raters:[],currentRater:ge},Ce=n(207),Ee=n.n(Ce),we={notifications:[]},Se=Object(Oe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER::SET_NEW_USER":return Object(he.a)(Object(he.a)({},e),{},{currentUser:t.payload});case"USER:CREATE":return Object(he.a)(Object(he.a)({},e),{},{newUser:t.payload});case"USER::SET_EXISTING_USER":return Object(he.a)(Object(he.a)({},e),{},{currentUser:t.payload});case"USER::SET_ADMIN_LOGIN_TOKEN":return localStorage.setItem("adminLoginToken",t.payload),Object(he.a)(Object(he.a)({},e),{},{adminLoginToken:t.payload});case"USER::LOGOUT":return localStorage.clear(),Object(he.a)(Object(he.a)({},e),{},{adminLoginToken:null});case"USER::SET_ADMIN_SIGNUP_TOKEN":return localStorage.setItem("adminSignupToken",t.payload),Object(he.a)(Object(he.a)({},e),{},{adminSignupToken:t.payload});default:return e}},policy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POLICY::CREATE":return Object(he.a)(Object(he.a)({},e),{},{currentPolicy:ve,policies:[].concat(Object(me.a)(e.policies),[Object(he.a)(Object(he.a)({},t.payload),{},{policyNumber:Date.now()})])});case"POLICY::SET_POLICIES":return Object(he.a)(Object(he.a)({},e),{},{policies:t.payload});case"POLICY::DELETE":return Object(he.a)(Object(he.a)({},e),{},{policies:e.policies.filter((function(e){return e.policyNumber!==t.payload}))});case"POLICY::UPDATE":return Object(he.a)(Object(he.a)({},e),{},{policies:e.policies.map((function(e){return e.policyNumber==t.payload.policyNumber?t.payload:e}))});case"POLICY::UPDATE_CURRENT":return Object(he.a)(Object(he.a)({},e),{},{currentPolicy:Object(he.a)(Object(he.a)({},e.currentPolicy),t.payload)});case"POLICY::SET_CURRENT":return Object(he.a)(Object(he.a)({},e),{},{currentPolicy:e.policies.find((function(e){return e.policyNumber===t.payload}))});default:return e}},appNotifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_NOTIFICATIONS::CREATE":return{notifications:e.notifications.concat({message:t.payload.message,status:t.payload.status,id:Ee()()})};case"APP_NOTIFICATIONS::CLEAR":return we;default:return e}},fleet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLEET::SET_FLEETS":return Object(he.a)(Object(he.a)({},e),{},{fleets:t.payload});default:return e}},underwriting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RATER::CREATE":return Object(he.a)(Object(he.a)({},e),{},{currentRater:ge,rater:Object(me.a)(e.raters)});case"RATER::UPDATE_CURRENT":return Object(he.a)(Object(he.a)({},e),{},{currentRater:Object(he.a)(Object(he.a)({},e.currentRater),t.payload)});default:return e}}}),Fe=Object(Oe.c)(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{store:Fe,children:Object(m.jsx)(pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[362,1,2]]]);
//# sourceMappingURL=main.44f9f334.chunk.js.map