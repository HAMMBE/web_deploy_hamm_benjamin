"use strict";(self.webpackChunktp02_HAMM_Benjamin=self.webpackChunktp02_HAMM_Benjamin||[]).push([[564],{2564:(Z,m,l)=>{l.r(m),l.d(m,{ClientModule:()=>h});var a=l(6895),u=l(3074),n=l(4006),e=l(8274),c=l(529);let s=(()=>{class o{constructor(t){this.httpClient=t}postClient(t){return console.log(t),this.httpClient.post("https://tp-hamm-benjamin.onrender.com/api/register",{client:t})}getClient(t){return{title:"",valid:!0,firstname:"",lastname:"",email:"",password:"",login:"",phone:""}}postlogin(t,i){return console.log(t+" "+i),this.httpClient.post("https://tp-hamm-benjamin.onrender.com/api/login",{login:t,password:i})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function f(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const p=e.oxw();return e.KtG(p.submit())}),e.TgZ(2,"label"),e._uU(3,"login : "),e.qZA(),e._UZ(4,"input",2)(5,"br"),e.TgZ(6,"label"),e._uU(7,"password : "),e.qZA(),e._UZ(8,"input",3)(9,"br")(10,"br"),e.TgZ(11,"button",4),e._uU(12,"Submit"),e.qZA(),e._UZ(13,"br"),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.loginForm)}}function d(o,r){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e._UZ(2,"br"),e._uU(3),e._UZ(4,"br"),e._uU(5),e._UZ(6,"br"),e._uU(7),e._UZ(8,"br"),e._uU(9),e._UZ(10,"br"),e.qZA()),2&o){const t=r.ngIf;e.xp6(1),e.hij("Login : ",t.login," "),e.xp6(2),e.hij(" Email : ",t.email," "),e.xp6(2),e.hij(" Firstname : ",t.firstname," "),e.xp6(2),e.hij(" Lastname : ",t.lastname," "),e.xp6(2),e.hij(" Phone : ",t.phone," ")}}const C=[{path:"register",component:(()=>{class o{constructor(t,i){this.formBuilder=t,this.ClientService=i,this.e={firstname:"",lastname:"",email:"",password:"",login:"",phone:""},this.formClient=this.formBuilder.group({firstname:new n.NI("",[n.kI.required,n.kI.pattern("^[A-Za-z-]{2,20}$")]),lastname:new n.NI("",[n.kI.required,n.kI.pattern("^[A-Za-z-]{2,20}$")]),email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required,n.kI.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]),login:new n.NI("",[n.kI.required,n.kI.pattern("^[A-Za-z0-9]{8,20}$")]),phone:new n.NI("",[n.kI.required,n.kI.pattern("^[0-9]{10}$")])})}ngOnInit(){}ngOnDestory(){}ngOnChanges(){}click(){const t={firstname:this.formClient.get("firstname")?.value,lastname:this.formClient.get("lastname")?.value,email:this.formClient.get("email")?.value,password:this.formClient.get("password")?.value,login:this.formClient.get("login")?.value,phone:this.formClient.get("phone")?.value};this.ClientService.postClient(t).subscribe(i=>console.log(i))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.qu),e.Y36(s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-client"]],features:[e.TTD],decls:28,vars:2,consts:[[3,"formGroup","ngSubmit"],["type","text","formControlName","firstname","name","firstname"],["type","text","formControlName","lastname","name","lastname"],["type","text","formControlName","email","name","email"],["type","password","formControlName","password","name","password"],["type","text","formControlName","login","name","login"],["type","text","formControlName","phone","name","phone"],["type","submit",3,"disabled"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.click()}),e.TgZ(1,"label"),e._uU(2,"Name : "),e.qZA(),e._UZ(3,"input",1)(4,"br"),e.TgZ(5,"label"),e._uU(6,"lastname : "),e.qZA(),e._UZ(7,"input",2)(8,"br"),e.TgZ(9,"label"),e._uU(10,"email : "),e.qZA(),e._UZ(11,"input",3)(12,"br"),e.TgZ(13,"label"),e._uU(14,"password : "),e.qZA(),e._UZ(15,"input",4)(16,"br"),e.TgZ(17,"label"),e._uU(18,"login : "),e.qZA(),e._UZ(19,"input",5)(20,"br"),e.TgZ(21,"label"),e._uU(22,"phone : "),e.qZA(),e._UZ(23,"input",6)(24,"br"),e.TgZ(25,"button",7),e._uU(26,"Submit"),e.qZA(),e._UZ(27,"br"),e.qZA()),2&t&&(e.Q6J("formGroup",i.formClient),e.xp6(25),e.Q6J("disabled",!i.formClient.valid))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),o})()},{path:"login",component:(()=>{class o{constructor(t){this.ClientService=t,this.loginForm=new n.cw({login:new n.NI(""),password:new n.NI("")})}ngOnInit(){}submit(){this.client$=this.ClientService.postlogin(this.loginForm.value.login,this.loginForm.value.password)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:4,vars:6,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],["type","text","formControlName","login","name","login"],["type","text","formControlName","password","name","password"],["type","submit"]],template:function(t,i){1&t&&(e.YNc(0,f,14,1,"div",0),e.ALo(1,"async"),e.YNc(2,d,11,5,"div",0),e.ALo(3,"async")),2&t&&(e.Q6J("ngIf",!e.lcZ(1,2,i.client$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,i.client$)))},dependencies:[a.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,a.Ov]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,n.UX,u.Bz.forChild(C)]}),o})()}}]);