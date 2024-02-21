(function(){"use strict";var e={9988:function(e,t,r){var s=r(2856),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("ClientForm")],1)},o=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"client-form"},[t("h2",[e._v("Создать клиента")]),t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"client-div"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"surname"}},[e._v("Фамилия *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],attrs:{type:"text",id:"surname"},domProps:{value:e.surname},on:{input:[function(t){t.target.composing||(e.surname=t.target.value)},e.setSurname],blur:function(t){return e.$v.surname.$touch()}}})]),e.$v.surname.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Имя *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.setName],blur:function(t){return e.$v.name.$touch()}}})]),e.$v.name.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Отчество")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.patronymic,expression:"patronymic"}],attrs:{type:"text",id:"patronymic"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"dateOfBirth"}},[e._v("Дата рождения *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfBirth,expression:"dateOfBirth"}],attrs:{type:"date",id:"dateOfBirth"},domProps:{value:e.dateOfBirth},on:{input:[function(t){t.target.composing||(e.dateOfBirth=t.target.value)},e.setDateOfBirth],blur:function(t){return e.$v.dateOfBirth.$touch()}}})]),e.$v.dateOfBirth.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"phoneNumber"}},[e._v("Номер телефона *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"tel",id:"phoneNumber"},domProps:{value:e.phoneNumber},on:{input:[function(t){t.target.composing||(e.phoneNumber=t.target.value)},e.setPhone],blur:function(t){return e.$v.phoneNumber.$touch()}}})]),e.$v.phoneNumber.$error&&!e.$v.phoneNumber.required?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),e.$v.phoneNumber.$error&&!e.$v.phoneNumber.minLength?t("div",{staticClass:"error_small"},[e._v("*11 цифр, начиная с '7'")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"sex"}},[e._v("Пол")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"text",id:"sex"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sex=t.target.multiple?r:r[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Выберите пол:")]),t("option",{attrs:{value:"woman"}},[e._v("Женщина")]),t("option",{attrs:{value:"man"}},[e._v("Мужчина")])])]),t("div",{staticClass:"form-group"},[e._m(0),t("select",{directives:[{name:"model",rawName:"v-model",value:e.clientGroup,expression:"clientGroup"}],attrs:{id:"clientGroup",multiple:""},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.clientGroup=t.target.multiple?r:r[0]},e.setClientGroup],blur:function(t){return e.$v.clientGroup.$touch()}}},[t("option",{attrs:{value:"vip"}},[e._v("VIP")]),t("option",{attrs:{value:"problematic"}},[e._v("Проблемные")]),t("option",{attrs:{value:"oms"}},[e._v("ОМС")])])]),e.$v.clientGroup.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"doctor"}},[e._v("Лечащий врач")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.doctor,expression:"doctor"}],attrs:{id:"doctor"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.doctor=t.target.multiple?r:r[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Выберите врача")]),t("option",{attrs:{value:"ivanov"}},[e._v("Иванов")]),t("option",{attrs:{value:"zakharov"}},[e._v("Захаров")]),t("option",{attrs:{value:"chernysheva"}},[e._v("Чернышева")])])]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sms,expression:"sms"}],attrs:{type:"checkbox",id:"sms"},domProps:{checked:Array.isArray(e.sms)?e._i(e.sms,null)>-1:e.sms},on:{change:function(t){var r=e.sms,s=t.target,a=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&(e.sms=r.concat([o])):n>-1&&(e.sms=r.slice(0,n).concat(r.slice(n+1)))}else e.sms=a}}}),t("label",{attrs:{for:"sms"}},[e._v("Не отправлять SMS")])]),t("div",{staticClass:"multiple"},[t("span",{staticClass:"title"},[e._v("Адрес")]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"index"}},[e._v("Индекс")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.index,expression:"address.index"}],attrs:{type:"number",id:"index"},domProps:{value:e.address.index},on:{input:function(t){t.target.composing||e.$set(e.address,"index",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"country"}},[e._v("Страна")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.country,expression:"address.country"}],attrs:{type:"text",id:"country"},domProps:{value:e.address.country},on:{input:function(t){t.target.composing||e.$set(e.address,"country",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"region"}},[e._v("Область")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.region,expression:"address.region"}],attrs:{type:"text",id:"region"},domProps:{value:e.address.region},on:{input:function(t){t.target.composing||e.$set(e.address,"region",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"city"}},[e._v("Город *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.city,expression:"address.city"}],attrs:{type:"text",id:"city"},domProps:{value:e.address.city},on:{input:[function(t){t.target.composing||e.$set(e.address,"city",t.target.value)},e.setCity],blur:function(t){return e.$v.address.city.$touch()}}})]),e.$v.address.city.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"street"}},[e._v("Улица")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.street,expression:"address.street"}],attrs:{type:"text",id:"street"},domProps:{value:e.address.street},on:{input:function(t){t.target.composing||e.$set(e.address,"street",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"house"}},[e._v("Дом")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address.house,expression:"address.house"}],attrs:{type:"number",id:"house"},domProps:{value:e.address.house},on:{input:function(t){t.target.composing||e.$set(e.address,"house",t.target.value)}}})])]),t("div",{staticClass:"multiple"},[t("span",{staticClass:"title"},[e._v("Документ")]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"documentType"}},[e._v("Тип документа *")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.document.documentType,expression:"document.documentType"}],attrs:{id:"documentType"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.document,"documentType",t.target.multiple?r:r[0])},e.setDocumentType],blur:function(t){return e.$v.document.documentType.$touch()}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Выберите тип документа:")]),t("option",{attrs:{value:"passport"}},[e._v("Паспорт")]),t("option",{attrs:{value:"birthCertificate"}},[e._v("Свидетельство о рождении")]),t("option",{attrs:{value:"driverLicense"}},[e._v("Вод. удостоверение")])])]),e.$v.document.documentType.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e(),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"series"}},[e._v("Серия")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.document.series,expression:"document.series"}],attrs:{type:"number",id:"series"},domProps:{value:e.document.series},on:{input:function(t){t.target.composing||e.$set(e.document,"series",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"number"}},[e._v("Номер")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.document.number,expression:"document.number"}],attrs:{type:"number",id:"number"},domProps:{value:e.document.number},on:{input:function(t){t.target.composing||e.$set(e.document,"number",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"issuedBy"}},[e._v("Кем выдан")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.document.issuedBy,expression:"document.issuedBy"}],attrs:{type:"text",id:"issuedBy"},domProps:{value:e.document.issuedBy},on:{input:function(t){t.target.composing||e.$set(e.document,"issuedBy",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"dateOfIssue"}},[e._v("Дата выдачи *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.document.dateOfIssue,expression:"document.dateOfIssue"}],attrs:{type:"date",id:"dateOfIssue"},domProps:{value:e.document.dateOfIssue},on:{input:[function(t){t.target.composing||e.$set(e.document,"dateOfIssue",t.target.value)},e.setDateOfIssue],blur:function(t){return e.$v.document.dateOfIssue.$touch()}}})]),e.$v.document.dateOfIssue.$error?t("div",{staticClass:"error_small"},[e._v("*обязательное поле")]):e._e()]),e.successMessage?t("div",{staticClass:"success-message"},[e._v(e._s(e.successMessage))]):e._e(),e.errorMessage?t("div",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))]):e._e(),t("button",{attrs:{type:"submit"}},[e._v("Создать клиента")])])])])},i=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"clientGroup"}},[e._v("Группа клиентов * "),t("span",{staticClass:"additional"},[e._v("(зажмите ctrl)")])])}],u=r(1353),d={data(){return{surname:"",name:"",patronymic:"",dateOfBirth:"",phoneNumber:"",sex:"",clientGroup:[],doctor:"",sms:!1,address:{index:"",country:"",region:"",city:"",street:"",house:""},document:{documentType:"",series:"",number:"",issuedBy:"",dateOfIssue:""},successMessage:"",errorMessage:""}},validations:{surname:{required:u.mw},name:{required:u.mw},dateOfBirth:{required:u.mw},phoneNumber:{required:u.mw,minLength:e=>11===e.length&&e.startsWith("7")},clientGroup:{required:u.mw},address:{city:{required:u.mw}},document:{documentType:{required:u.mw},dateOfIssue:{required:u.mw}}},methods:{setName(e){this.name=e.target.value,this.$v.name.$touch()},setSurname(e){this.surname=e.target.value,this.$v.surname.$touch()},setDateOfBirth(e){this.dateOfBirth=e.target.value,this.$v.dateOfBirth.$touch()},setClientGroup(e){this.clientGroup=Array.from(e.target.selectedOptions,(e=>e.value)),this.$v.clientGroup.$touch()},setCity(e){this.address.city=e.target.value,this.$v.address.city.$touch()},setDateOfIssue(e){this.document.dateOfIssue=e.target.value,this.$v.document.dateOfIssue.$touch()},setDocumentType(e){this.document.documentType=e.target.value,this.$v.document.documentType.$touch()},setPhone(e){this.phoneNumber=e.target.value,this.$v.phoneNumber.$touch()},submitForm(){this.$v.$invalid?this.errorMessage="Пожалуйста, заполните все обязательные поля.":(this.resetForm(),this.successMessage="Новый клиент создан успешно!")},resetForm(){this.surname="",this.name="",this.patronymic="",this.dateOfBirth="",this.phoneNumber="",this.sex="",this.clientGroup=[],this.doctor="",this.sms=!1,this.address.index="",this.address.country="",this.address.region="",this.address.city="",this.address.street="",this.address.house="",this.document.documentType="",this.document.series="",this.document.number="",this.document.issuedBy="",this.document.dateOfIssue="",this.$v.$reset()}}},l=d,c=r(1656),m=(0,c.A)(l,n,i,!1,null,null,null),v=m.exports,p={name:"App",components:{ClientForm:v}},f=p,h=(0,c.A)(f,a,o,!1,null,null,null),g=h.exports,y=r(4505);s.Ay.config.productionTip=!1,s.Ay.use(y.Ay),new s.Ay({render:e=>e(g)}).$mount("#app")}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,a,o){if(!s){var n=1/0;for(l=0;l<e.length;l++){s=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<s.length;u++)(!1&o||n>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[u])}))?s.splice(u--,1):(i=!1,o<n&&(n=o));if(i){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,o,n=s[0],i=s[1],u=s[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var l=u(r)}for(t&&t(s);d<n.length;d++)o=n[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},s=self["webpackChunkclient_form"]=self["webpackChunkclient_form"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(9988)}));s=r.O(s)})();
//# sourceMappingURL=app.0b467823.js.map