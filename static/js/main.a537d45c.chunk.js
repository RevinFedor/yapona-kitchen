(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1eSrr",total:"Cart_total__3jo-j",actions:"Cart_actions__HTvlU","button--alt":"Cart_button--alt__2vk_Y",button:"Cart_button__1Hmyh"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__MbK92",summary:"CartItem_summary__3O1FT",price:"CartItem_price__KOILV",amount:"CartItem_amount__urJc6",actions:"CartItem_actions__1IsHA"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__25Gur",icon:"HeaderCartButton_icon__37QdL",badge:"HeaderCartButton_badge__3dkxT",bump:"HeaderCartButton_bump__2W5J4"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1BEzh",modal:"Modal_modal__DSoqT","slide-down":"Modal_slide-down__19c4s"}},function(e,t,n){e.exports={meal:"MealsItem_meal__3bFsT",description:"MealsItem_description__1TcwL",price:"MealsItem_price__2ELFn"}},,function(e,t,n){e.exports={header:"Header_header__3eJVi","main-image":"Header_main-image__QjuWt"}},,function(e,t,n){e.exports={card:"Card_card__1EwbQ"}},function(e,t,n){e.exports={meals:"MealList_meals__1CHoP","meals-appear":"MealList_meals-appear__2ei_N"}},function(e,t,n){e.exports={input:"Input_input__3DQf1"}},function(e,t,n){e.exports={form:"MealItemForm_form__3VvoT"}},function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__3-PTx"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(2),d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(10),l=n.n(m),u=n(0),j=function(e){return Object(u.jsx)("div",{onClick:e.onClick,className:l.a.backdrop})},b=function(e){return Object(u.jsx)("div",{className:l.a.modal,children:Object(u.jsx)("div",{className:l.a.content,children:e.children})})},x=document.getElementById("overlace"),O=function(e){return Object(u.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(u.jsx)(j,{onClick:e.onClick}),x),a.a.createPortal(Object(u.jsx)(b,{children:e.children}),x)]})},p=n(4),_=n.n(p),h=n(5),f=n.n(h),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:f.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:f.a.summary,children:[Object(u.jsx)("span",{className:f.a.price,children:t}),Object(u.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:f.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},C=function(e){var t=Object(r.useContext)(d),n="$".concat(Math.abs(t.totalAmount).toFixed(2)),c=t.items.length>0,a=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},s=Object(u.jsx)("ul",{className:_.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onAdd:a.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))});return Object(u.jsxs)(O,{onClick:e.onHideCart,children:[s,Object(u.jsxs)("div",{className:_.a.total,children:[Object(u.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:_.a.actions,children:[Object(u.jsx)("button",{className:_.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),c&&Object(u.jsx)("button",{className:_.a.button,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]})]})},I=n(13),N=n.n(I),g=n.p+"static/media/1.a2b4b921.jpg",M=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},k=n(8),A=n.n(k),H=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useContext)(d),o=s.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(A.a.button,"  ").concat(c?A.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){a(!0);var e=setTimeout((function(){a(!1)}),200);return function(){clearTimeout(e)}}}),[s.items]),Object(u.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(u.jsx)("span",{className:A.a.icon,children:Object(u.jsx)(M,{})}),Object(u.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(u.jsx)("span",{className:A.a.badge,children:o})]})},T=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:N.a.header,children:[Object(u.jsx)("h1",{children:"\u042f\u043f\u043e\u043d\u0430 \u043a\u0443\u0445\u043d\u044f"}),Object(u.jsx)(H,{onClick:e.onShowCard})]}),Object(u.jsx)("div",{className:N.a["main-image"],children:Object(u.jsx)("img",{src:g})})]})},w=n(15),E=n.n(w),y=function(e){return Object(u.jsx)("div",{className:E.a.card,children:e.children})},F=n(16),B=n.n(F),S=n(17),D=n.n(S),R=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:D.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(o.a)({ref:t},e.input))]})})),L=n(18),P=n.n(L),V=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:P.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value;0===n.trim().length||+n<1||+n>10?a(!1):e.onAddToCart(+n)},children:[Object(u.jsx)(R,{ref:s,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",input:{id:e.id,type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),!c&&Object(u.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442 1 \u0434\u043e 10"})]})},J=n(11),z=n.n(J),Q=function(e){var t=Object(r.useContext)(d),n="".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:z.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:z.a.description,children:e.description}),Object(u.jsx)("div",{className:z.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(V,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},K=[{id:"m1",name:'\u0420\u043e\u043b\u043b "\u041d\u0430\u043e\u043c\u0438"',description:"\u0421\u044b\u0440 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f, \u043a\u0443\u0440\u0438\u043d\u043e\u0435 \u0444\u0438\u043b\u0435, \u043c\u0430\u0441\u0430\u0433\u043e, \u043f\u043e\u043c\u0438\u0434\u043e\u0440, \u043e\u0433\u0443\u0440\u0435\u0446, \u043a\u0443\u043d\u0436\u0443\u0442",price:11.99},{id:"m2",name:"\u0421\u043f\u0430\u0439\u0441 \u0432 \u043b\u043e\u0441\u043e\u0441\u0435",description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u0441\u043e\u0443\u0441 \u0441\u043f\u0430\u0439\u0441",price:3.99},{id:"m3",name:"\u0421\u0443\u0448\u0438 \u0441 \u0443\u0433\u0440\u0435\u043c",description:"\u0423\u0433\u043e\u0440\u044c \u043a\u043e\u043f\u0447\u0435\u043d\u044b\u0439, \u0441\u043e\u0443\u0441 \u0443\u043d\u0430\u0433\u0438, \u043a\u0443\u043d\u0436\u0443\u0442",price:4.99},{id:"m4",name:'\u0421\u0430\u043b\u0430\u0442 "\u041f\u043e\u043a\u0435 \u0441 \u043b\u043e\u0441\u043e\u0441\u0435\u043c"',description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u043e\u0433\u0443\u0440\u0435\u0446, \u0447\u0443\u043a\u0430, \u043d\u043e\u0440\u0438, \u0441\u0442\u0440\u0443\u0436\u043a\u0430 \u0442\u0443\u043d\u0446\u0430, \u0441\u043e\u0443\u0441 \u043e\u0440\u0435\u0445\u043e\u0432\u044b\u0439",price:7.99}],W=function(){return Object(u.jsx)("div",{className:B.a.meals,children:Object(u.jsx)(y,{children:Object(u.jsx)("ul",{children:K.map((function(e){return Object(u.jsx)(Q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},$=n(19),q=n.n($),G=function(){return Object(u.jsxs)("section",{className:q.a["promo-text"],children:[Object(u.jsx)("h2",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0421\u0443\u0448\u0438 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(u.jsx)("p",{children:"\u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f - \u044d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0438-\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0441\u0443\u0448\u0438 \u0438 \u0441\u0430\u0448\u0438\u043c\u0438, \u0440\u043e\u043b\u043b\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0430\u0440\u043e\u0432."}),Object(u.jsx)("p",{children:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0440\u0438\u0434\u0430\u044e\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u043a\u0443\u0441 \u0431\u043b\u044e\u0434\u0430\u043c, \u0434\u0430\u0440\u044f\u0442 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0442\u0440\u0430\u043f\u0435\u0437\u044b."})]})},U=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(G,{}),Object(u.jsx)(W,{})]})},Y=n(14),X={items:[],totalAmount:0},Z=function(e,t){if("ADD_ITEM"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(o.a)(Object(o.a)({},r),{},{amount:r.amount+t.item.amount}),(c=Object(Y.a)(e.items))[i]=n):(n=Object(o.a)({},t.item),c=e.items.concat(n)),{items:c,totalAmount:a}}if("REMOVE_ITEM"===t.type){var s,d=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[d],l=e.totalAmount-m.price;if(1===m.amount)s=e.items.filter((function(e){return e.id!=t.id}));else{var u=Object(o.a)(Object(o.a)({},m),{},{amount:m.amount-1});(s=Object(Y.a)(e.items))[d]=u}return{items:s,totalAmount:l}}return X},ee=function(e){var t=Object(r.useReducer)(Z,X),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})}};return Object(u.jsxs)(d.Provider,{value:s,children:[" ","// props",e.children]})},te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(C,{onHideCart:function(){c(!1)}}),Object(u.jsx)(T,{onShowCard:function(){c(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(U,{})})]})};a.a.render(Object(u.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a537d45c.chunk.js.map