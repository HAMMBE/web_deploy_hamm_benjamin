"use strict";(self.webpackChunktp02_HAMM_Benjamin=self.webpackChunktp02_HAMM_Benjamin||[]).push([[573],{5573:(w,h,c)=>{c.r(h),c.d(h,{ProductModule:()=>x});var s=c(6895),d=c(3074),f=c(4004),u=c(5442),t=c(8274),C=c(6690),l=c(4318),p=c(4006);const v=function(e){return[e]};function _(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"a",3),t._uU(2),t.qZA(),t.TgZ(3,"button",4),t.NdJ("click",function(){const a=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.addToCart(a))}),t._uU(4,"Add to cart"),t.qZA()()}if(2&e){const o=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,v,o.id)),t.xp6(1),t.lnq(" ",o.name," ",o.price," ",o.id," ")}}let g=(()=>{class e{constructor(o,n){this.productService=o,this.store=n,this.filter=""}ngOnInit(){this.productList$=this.productService.getProducts()}getFilteredProducts(){this.productList$=""==this.filter?this.productService.getProducts():this.productService.getProducts().pipe((0,f.U)(o=>o.filter(n=>n.name.includes(this.filter))))}addToCart(o){this.store.dispatch(new u.R(o))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(C.M),t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-show-catalogue"]],decls:7,vars:4,consts:[["for","filter"],["id","filter",3,"ngModel","ngModelChange","keyup"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"show-catalogue works!"),t.qZA(),t.TgZ(2,"label",0),t._uU(3,"Filter : "),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(a){return n.filter=a})("keyup",function(){return n.getFilteredProducts()}),t.qZA(),t.YNc(5,_,5,6,"div",2),t.ALo(6,"async")),2&o&&(t.xp6(4),t.Q6J("ngModel",n.filter),t.xp6(1),t.Q6J("ngForOf",t.lcZ(6,2,n.productList$)))},dependencies:[s.sg,d.yS,p.Fj,p.JJ,p.On,s.Ov]}),e})();function T(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div"),t._uU(1),t.TgZ(2,"button",1),t.NdJ("click",function(){const a=t.CHM(o).$implicit,m=t.oxw();return t.KtG(m.deleteFromCart(a))}),t._uU(3,"Delete from cart"),t.qZA()()}if(2&e){const o=r.$implicit;t.xp6(1),t.lnq(" ",o.id," ",o.name," ",o.price," ")}}function F(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",1),t._uU(1),t.TgZ(2,"button",2),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addToCart(i.product))}),t._uU(3,"Add to cart"),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(1),t.lnq("\n",o.product.name," ",o.product.price," ",o.product.id," ")}}const M=[{path:"",component:g},{path:"catalogue",component:g},{path:"cart",component:(()=>{class e{constructor(o){this.store=o,this.cart$=this.store.select(n=>n.cart.products)}ngOnInit(){}deleteFromCart(o){this.store.dispatch(new u.K(o))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:4,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"cart works!"),t.qZA(),t.YNc(2,T,4,3,"div",0),t.ALo(3,"async")),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,n.cart$)))},dependencies:[s.sg,s.Ov]}),e})()},{path:":id",component:(()=>{class e{constructor(o,n,i){this.route=o,this.productService=n,this.store=i,this.id=0}ngOnInit(){this.id=Number(this.route.snapshot.paramMap.get("id")),this.productService.getProducts().subscribe(o=>{this.product=o.find(n=>n.id==this.route.snapshot.params.id)})}addToCart(o){this.store.dispatch(new u.R(o))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.gz),t.Y36(C.M),t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-detail"]],decls:3,vars:1,consts:[["id","product-detail",4,"ngIf"],["id","product-detail"],[3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"product-detail works!"),t.qZA(),t.YNc(2,F,4,3,"div",0)),2&o&&(t.xp6(2),t.Q6J("ngIf",n.product))},dependencies:[s.O5]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,d.Bz.forChild(M),p.UX,p.u5]}),e})()}}]);