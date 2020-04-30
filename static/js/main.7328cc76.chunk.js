(this["webpackJsonpmeal-finder-react"]=this["webpackJsonpmeal-finder-react"]||[]).push([[0],{17:function(e,a,n){e.exports=n(34)},22:function(e,a,n){},28:function(e,a,n){},29:function(e,a,n){},30:function(e,a,n){},31:function(e,a,n){},32:function(e,a,n){},34:function(e,a,n){"use strict";n.r(a),n.d(a,"store",(function(){return O}));var t=n(0),r=n.n(t),c=n(2),o=n.n(c),i=(n(22),n(1)),s=n(9),l=n(10),u=n(3),d=n(12),m=n(13),E=n(16),h=n(14),f=function(){return r.a.createElement("h1",{className:"tc"},"Meal Finder App")},p=(n(28),function(e){var a=e.onSearchChange,n=e.onMealSearch,t=e.onRandomSearch;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{onChange:a,type:"text",placeholder:"Search for meals"}),r.a.createElement("button",{onClick:n,className:"search-btn"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("button",{onClick:t,className:"random-btn"},r.a.createElement("i",{className:"fas fa-random"})))}),g=function(e){var a=e.searchValue;return null===e.meals?r.a.createElement("p",{className:"f3 mv3"},"No results found, try again..."):r.a.createElement("p",{className:"f3 mv3"},'Searching for "',a,'"')},v=(n(29),function(e){var a=e.id,n=e.viewMealDetails,t=e.image,c=e.name;return r.a.createElement("div",{className:"meal",onClick:n},r.a.createElement("img",{src:t,alt:c}),r.a.createElement("div",{className:"meal-info","data-id":"".concat(a)},c))}),M=(n(30),function(e){var a=e.meals,n=e.viewMealDetails;return r.a.createElement("div",{className:"meal-grid"},null!==a?a.map((function(e){return r.a.createElement(v,{key:e.idMeal,id:e.idMeal,viewMealDetails:n,image:e.strMealThumb,name:e.strMeal})})):null)}),S=(n(31),n(15)),y=function(e){var a,n=e.ingredients;return n&&(a=n.map((function(e,a){var n=e.split(" - "),t=Object(S.a)(n,2),c=t[0],o=t[1];return r.a.createElement("li",{className:"list-item br3 bn",style:{display:"inline-block",margin:"3px",padding:"3px 5px",backgroundColor:"#fff",color:"#000"},key:a},c,": ",o)}))),r.a.createElement("div",null,r.a.createElement("ul",{className:"mv3",style:{width:"70%",listStyle:"none",margin:"10px auto"}},a))},_=function(e){var a=e.mealDetails;return r.a.createElement("div",{className:"tc meal-desc"},r.a.createElement("h1",{className:"f2"},a.name),r.a.createElement("img",{src:a.photoSrc,width:"350px",height:"350px",alt:"asd"}),r.a.createElement("div",{className:"desc tc f3 ph4 pv3 br3 ba b--dashed bw2"},r.a.createElement("h2",null,a.category),r.a.createElement("h4",null,a.area),r.a.createElement("a",{href:a.video,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#fff"}},"Video")),r.a.createElement("div",{className:"instructions f4"},a.instructions),r.a.createElement(y,{ingredients:a.ingredients}))},b=(n(32),function(e){Object(E.a)(n,e);var a=Object(h.a)(n);function n(){return Object(d.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,a=e.onRequestMeal,n=e.searchField,t=e.onSearchChange,c=e.meals,o=e.onRequestRandomMeal,i=e.meal,s=e.onRequestViewMeal;return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(p,{onSearchChange:t,onMealSearch:a,onRandomSearch:o}),r.a.createElement(g,{searchValue:n,meals:c}),r.a.createElement(M,{meals:c,viewMealDetails:s}),void 0!==i.name?r.a.createElement(_,{mealDetails:i}):null)}}]),n}(t.Component)),w=Object(u.b)((function(e){return{searchField:e.searchMeals.searchField,meals:e.requestMeal.meals,randomMeal:e.requestMeal.randomMeal,isPending:e.requestMeal.isPending,error:e.requestMeal.error,meal:e.requestViewMeal.meal}}),(function(e){return{onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})},onRequestMeal:function(){return e((function(e,a){var n=a().searchMeals.searchField;e({type:"REQUEST_MEAL_PENDING"}),fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(n)).then((function(e){return e.json()})).then((function(a){e({type:"REQUEST_MEAL_SUCCESS",payload:a.meals})})).catch((function(a){return e({type:"REQUEST_MEAL_FAILED",payload:a})}))}))},onRequestRandomMeal:function(){return e((function(e,a){e({type:"REQUEST_RANDOM_MEAL_PENDING"}),fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(a){return e({type:"REQUEST_RANDOM_MEAL_SUCCESS",payload:a.meals})})).catch((function(a){return e({type:"REQUEST_RANDOM_MEAL_FAILED",payload:a})}))}))},onRequestViewMeal:function(a){return e((n=a.target.getAttribute("data-id"),function(e){var a=n;e({type:"REQUEST_VIEW_MEAL_PENDING"}),fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(a)).then((function(e){return e.json()})).then((function(a){return e({type:"REQUEST_VIEW_MEAL_SUCCESS",payload:a.meals[0]})})).catch((function(a){return e({type:"REQUEST_VIEW_MEAL_FAILED",payload:a})}))}));var n}}}))(b),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(33);var R={searchField:""},C={isPending:!1,meals:[],error:""},L={meal:{},isPending:!1},j=Object(l.createLogger)(),D=Object(i.c)({searchMeals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},requestMeal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_MEAL_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_MEAL_SUCCESS":return Object.assign({},e,{isPending:!1,meals:a.payload});case"REQUEST_MEAL_FAILED":return Object.assign({},e,{isPending:!1,error:a.error});case"REQUEST_RANDOM_MEAL_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_RANDOM_MEAL_SUCCESS":return Object.assign({},e,{isPending:!1,meals:a.payload});case"REQUEST_RANDOM_MEAL_FAILED":return Object.assign({},e,{isPending:!1,error:a.error});default:return e}},requestViewMeal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_VIEW_MEAL_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_VIEW_MEAL_SUCCESS":for(var n=[],t=1;t<=20;t++)a.payload["strIngredient".concat(t)]&&n.push("".concat(a.payload["strIngredient".concat(t)]," - ").concat(a.payload["strMeasure".concat(t)]," "));return Object.assign({},e,{meal:{name:a.payload.strMeal,category:a.payload.strCategory,area:a.payload.strArea,photoSrc:a.payload.strMealThumb,instructions:a.payload.strInstructions,ingredients:n,video:a.payload.strYoutube},isPending:!1});case"REQUEST_VIEW_MEAL_FAILED":return Object.assign({},e,{meal:{},isPending:!1});default:return e}}}),O=Object(i.d)(D,Object(i.a)(s.a,j));o.a.render(r.a.createElement(u.a,{store:O},r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meal-finder-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/meal-finder-react","/service-worker.js");A?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(a,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.7328cc76.chunk.js.map