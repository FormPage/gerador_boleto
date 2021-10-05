(this.webpackJsonpformexport=this.webpackJsonpformexport||[]).push([[0],{125:function(e,n,t){"use strict";t.r(n);var a,r,c,i,l,o,d,s=t(0),u=t.n(s),j=t(66),b=t.n(j),x=(t(88),t(77)),m=t(24),p=t(147),g=t(10),f=t(11),h=f.a.button(a||(a=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: ",";\n  height: 25px;\n  border-radius: 4px;\n  width: 100%;\n  border-style: none;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n\n  ","\n\n  ","\n\n  ","\n  \n  ","\n  ","\n  \n  ","\n\n  ","\n\n  ","\n"])),(function(e){return"align"===e.variant?"6px":"0"}),(function(e){return e.background?e.background:"#fff"}),(function(e){return"primary"===e.variant&&"\n    background-color: #6875f5;\n    color: #fff;\n    border: 1px solid  #6875f5;\n  "}),(function(e){return"info"===e.variant&&"\n    background-color: #374151;\n    color: #fff;\n    border: 1px solid  #374151;\n  "}),(function(e){return"danger"===e.variant&&"\n    background-color: #f3413b;\n    color: #fff;\n    border: 1px solid  #c81e1e;\n  "}),(function(e){return"delete"===e.variant&&"\n  background-color: #d91529;\n  color: #fff;\n  border: 1px solid  #c81e1e;\n"}),(function(e){return"tertiary"===e.variant&&"\n    background-color: #c9cbce;\n    color: black;\n    border: 0px;\n  "}),(function(e){return"secondary"===e.variant&&"\n    background-color: #046c4e;\n    color: #fff;\n    border: 1px solid  #046c4e;\n  "}),(function(e){return"return"===e.variant&&"\n  background-color: #dddddd;\n  color: #000;\n"}),(function(e){return e.disabled&&"\n    background-color: #dddddd;\n    cursor: default;\n    border: none;\n  "})),O=t(2),v=function(e){e.label;var n=e.type,t=e.onClick,a=e.variant,r=e.width,c=e.margin,i=e.disabled,l=e.fullWidthMobile,o=e.style,d=e.children;return Object(O.jsx)(h,{type:n,onClick:t,variant:a,width:r,margin:c,disabled:i,fullWidthMobile:l,style:o,children:d})},y=t(5),R=f.a.div(r||(r=Object(g.a)(["\n  width: 600px;\n  background-color: white;\n  box-shadow: 0 0 1em black;\n  border-radius: 3px;\n  padding: 10px;\n  color: black;\n  display: flex;\n  flex-direction: row;\n"]))),w=f.a.div(c||(c=Object(g.a)(["\n  border: 1px solid #A6A6A6;\n  border-radius: 3px;\n  padding: 10px;\n  margin-top: 10px;\n"]))),C=(f.a.div(i||(i=Object(g.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-bottom: 2px solid #dcdcdc;\n  width: auto;\n"]))),f.a.div(l||(l=Object(g.a)(["\n  display: flex;\n  font-size: inherit;\n"]))),t(146)),_=f.a.label(o||(o=Object(g.a)(["\n  font-size: 16px;\n  font-weight: 400;\n  color: ",";\n  justify-content: center;\n  margin-right: 7px;\n"])),(function(e){return e.error&&"red"})),S=f.a.input(d||(d=Object(g.a)(["\n  width: 100%;\n  min-height: 26px;\n  border-radius: 6px;\n  padding: 0 16px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #cfd8e3;\n  position: relative;\n  transition: all 0.5s ease-out;\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){return e.editing&&"black;"})),k=function(e){var n=e.editing,t=e.label,a=e.placeholder,r=e.name,c=e.onChange,i=e.type,l=e.value,o=e.required,d=e.marginBottom,s=e.disabled,u=e.isInvalid,j=e.min,b=e.max,x=e.defaultValue,m=e.isInvalidMsg,p=e.maxLength,g=e.minLength;e.showPassword,e.onClick,e.isPassword;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",whiteSpace:"nowrap"},children:[t&&Object(O.jsxs)(_,{children:[t,": "]}),Object(O.jsx)(S,{defaultValue:x,editing:n,min:j,max:b,minLength:g,maxLength:p,placeholder:a,name:r,onChange:c,type:i,value:l,required:o,marginBottom:d,disabled:s,isInvalid:u})]}),u&&Object(O.jsx)(_,{error:!0,children:m})]})},I=t(25),L={locatario:null,aluguel:null,multa:null,iptu:null,condominio:null,valor:null,recebedor:null,valor_extenso:null,imovel_tipo:null,endereco:null,proprietario:null,data:null},D=function(e){var n=e.reference,t=Object(s.useState)(L),a=Object(m.a)(t,2),r=a[0],c=a[1],i=function(e){if(!Number(e))return"";var n=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e/100);return"".concat(n)};return Object(s.useEffect)((function(){console.log(r)}),[r]),Object(O.jsxs)(O.Fragment,{children:[console.log(r),Object(O.jsxs)(p.a,{style:{width:"1000px",flexDirection:"row",justifyContent:"center",display:"flex",border:"1px solid #A6A6A6",marginTop:"10px",borderRadius:"4px"},ref:n,id:"teste",children:[Object(O.jsx)(R,{children:Object(O.jsxs)(p.a,{children:[Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsxs)(p.a,{item:!0,xs:12,md:12,lg:12,children:[Object(O.jsx)(k,{label:"LOCAT\xc1RIO",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{locatario:e.target.value})}))}}),Object(O.jsx)(C.a,{style:{marginTop:"10px"}})]}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,style:{display:"flex",alignItems:"center"},children:"RECIBO DE ALUGUEL"}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:Object(O.jsx)(I.a,{disabled:!0,customInput:k,decimalScale:2,thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,placeholder:"R$ 0,00",allowLeadingZeros:!0,label:"VALOR",value:100*r.aluguel+100*r.iptu+100*r.multa+100*r.condominio,prefix:"R$ ",format:i})})]}),Object(O.jsx)(w,{children:Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:Object(O.jsx)(I.a,{customInput:k,decimalScale:2,thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,placeholder:"R$ 0,00",allowLeadingZeros:!0,label:"Aluguel",onValueChange:function(e){e.formattedValue;var n=e.value;c((function(e){return Object(y.a)(Object(y.a)({},e),{},{aluguel:Number(n)/100})}))},prefix:"R$ ",format:i})}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:Object(O.jsx)(I.a,{customInput:k,decimalScale:2,thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,placeholder:"R$ 0,00",allowLeadingZeros:!0,label:"Multa",onValueChange:function(e){e.formattedValue;var n=e.value;c((function(e){return Object(y.a)(Object(y.a)({},e),{},{multa:Number(n)/100})}))},prefix:"R$ ",format:i})}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:Object(O.jsx)(I.a,{customInput:k,decimalScale:2,thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,placeholder:"R$ 0,00",allowLeadingZeros:!0,label:"IPTU",onValueChange:function(e){e.formattedValue;var n=e.value;c((function(e){return Object(y.a)(Object(y.a)({},e),{},{iptu:Number(n)/100})}))},prefix:"R$ ",format:i})}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:Object(O.jsx)(I.a,{customInput:k,decimalScale:2,thousandSeparator:".",decimalSeparator:",",fixedDecimalScale:!0,placeholder:"R$ 0,00",allowLeadingZeros:!0,label:"Condom\xednio",onValueChange:function(e){e.formattedValue;var n=e.value;c((function(e){return Object(y.a)(Object(y.a)({},e),{},{condominio:Number(n)/100})}))},prefix:"R$ ",format:i})})]})}),Object(O.jsx)(w,{style:{flexDirection:"column"},children:Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:Object(O.jsx)(k,{label:"Recebi (emos) de",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{recebedor:e.target.value})}))}})}),Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:Object(O.jsx)(k,{label:"A import\xe2ncia de",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{valor_extenso:e.target.value})}))}})}),Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:Object(O.jsx)(k,{label:"Proveniente do aluguel do im\xf3vel",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{imovel_tipo:e.target.value})}))}})}),Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:Object(O.jsx)(k,{label:"Sito \xe0",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{endereco:e.target.value})}))}})})]})}),Object(O.jsx)(w,{children:Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:Object(O.jsx)(k,{label:"Propriet\xe1rio",onChange:function(e){c((function(n){return Object(y.a)(Object(y.a)({},n),{},{proprietario:e.target.value})}))}})}),Object(O.jsx)(p.a,{item:!0,xs:9,md:9,lg:9,children:"Assinatura:"}),Object(O.jsx)(p.a,{item:!0,xs:3,md:3,lg:3,children:"Data: __/__/____"})]})})]})}),Object(O.jsx)(R,{style:{width:"auto",maxWidth:"400px"},children:Object(O.jsxs)(p.a,{style:{maxWidth:"400px"},children:[Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsxs)(p.a,{item:!0,xs:12,md:12,lg:12,children:["PROPRIET\xc1RIO ",r.proprietario,Object(O.jsx)(C.a,{style:{marginTop:"17px"}})]}),Object(O.jsx)(p.a,{item:!0,xs:6,md:6,lg:6,children:"RECIBO"}),Object(O.jsxs)(p.a,{item:!0,xs:6,md:6,lg:6,children:["VALOR"," ",i(100*r.aluguel+100*r.iptu+100*r.multa+100*r.condominio)]})]}),Object(O.jsx)(w,{style:{marginTop:"20px"},children:Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:1,children:[Object(O.jsxs)(p.a,{item:!0,xs:6,md:6,lg:6,children:["Aluguel R$ ",i(100*r.aluguel)]}),Object(O.jsxs)(p.a,{item:!0,xs:6,md:6,lg:6,children:["Multa R$ ",i(100*r.multa)]}),Object(O.jsxs)(p.a,{item:!0,xs:6,md:6,lg:6,children:["IPTU R$ ",i(100*r.iptu)]}),Object(O.jsxs)(p.a,{item:!0,xs:6,md:6,lg:6,children:["Condom\xednio R$ ",i(100*r.condominio)]})]})}),Object(O.jsx)(w,{style:{flexDirection:"column",wordWrap:"break-word"},children:Object(O.jsxs)(p.a,{container:!0,columns:2,spacing:5,children:[Object(O.jsxs)(p.a,{item:!0,xs:12,md:12,lg:12,children:["Recebi (emos) de ",r.recebedor]}),Object(O.jsxs)(p.a,{item:!0,xs:12,md:12,lg:12,children:["Proveniente do aluguel do im\xf3vel ",r.imovel_tipo]}),Object(O.jsxs)(p.a,{item:!0,xs:12,md:12,lg:12,children:["Sito \xe0 ",r.endereco]}),Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,children:"Correspondente ao per\xedodo de 1 m\xeas vencido em: __/__/____"})]})}),Object(O.jsx)(p.a,{container:!0,children:Object(O.jsx)(p.a,{item:!0,xs:12,md:12,lg:12,style:{display:"flex",marginTop:"10px",alignItems:"flex-end",justifyContent:"flex-end"},children:"Data: __/__/____"})})]})})]})]})},P=t(76),A=t.n(P),$=t(47),T=t(48),V=t.n(T),F=u.a.createRef(),N=function(){var e=Object(s.useState)(1),n=Object(m.a)(e,2),t=n[0],a=n[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(p.a,{container:!0,direction:"row",justifyContent:"center",spacing:1,style:{marginTop:"200px"},children:[Object(O.jsx)(p.a,{item:!0,xs:4,md:4,lg:4,children:Object(O.jsx)(v,{variant:"primary",style:{height:"48px"},onClick:function(){return a(1)},children:"Recibos Identicos"})}),Object(O.jsx)(p.a,{item:!0,xs:4,md:4,lg:4,children:Object(O.jsx)(v,{variant:"primary",style:{height:"48px"},onClick:function(){return a(3)},children:"Recibos Diferentes"})}),1===t&&Object(O.jsx)(p.a,{item:!0,xs:4,md:4,lg:4,children:Object(O.jsx)(v,{variant:"primary",style:{height:"48px"},onClick:function(){V()(document.querySelector("#teste"),{scale:.79}).then((function(e){var n=e.toDataURL("image/png"),t=e.toDataURL("image/png"),a=e.toDataURL("image/png"),r=new $.jsPDF("p","mm","a4");r.addImage(n,"PNG",0,0),r.addImage(t,"PNG",0,100),r.addImage(a,"PNG",0,200),r.save("recibo.pdf")}))},children:"Gerar PDF"})}),3===t&&Object(O.jsx)(p.a,{item:!0,lg:4,children:Object(O.jsx)(A.a,{targetRef:F,filename:"recibo.pdf",x:.5,y:.5,scale:.79,children:function(e){var n=e.toPdf;return Object(O.jsx)(v,{variant:"primary",style:{height:"48px"},onClick:n,children:"Gerar PDF"})}})})]}),1===t&&Object(O.jsx)(D,{}),3===t&&Object(O.jsxs)("div",{ref:F,children:[Object(O.jsx)(D,{}),Object(O.jsx)(D,{}),Object(O.jsx)(D,{})]})]})},B=function(){return Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{exact:!0,path:"/",children:Object(O.jsx)(x.a,{to:"/receipt"})}),Object(O.jsx)(x.b,{exact:!0,path:"/receipt",component:N})]})},E=t(13),U=Object(E.a)();var G=function(){return Object(O.jsx)(x.c,{history:U,children:Object(O.jsx)(B,{})})},M=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,298)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};b.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(G,{})}),document.getElementById("root")),M()},88:function(e,n,t){}},[[125,1,3]]]);
//# sourceMappingURL=main.189706dd.chunk.js.map