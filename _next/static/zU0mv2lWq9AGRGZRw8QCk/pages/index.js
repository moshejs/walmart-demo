(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),i=n("0iUn"),o=n("sLSF"),c=n("MI3g"),s=n("a7VT"),u=n("Tit0"),l=n("q1tI"),p=n.n(l),d=n("/MKj"),m=n("AT/M"),b=n("vYYK"),f=(n("1/UH"),n("bMWq")),h=p.a.createElement,v=function(e){function t(e,n){var r;return Object(i.a)(this,t),r=Object(c.a)(this,Object(s.a)(t).call(this,e,n)),Object(b.a)(Object(m.a)(r),"handleMouseDown",(function(e){r.props.toggleMobileMenu(),e.stopPropagation()})),r}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h("div",{className:"headerStyle"},h("img",{className:"hamburgerStyle",src:"assets/icons/hamburger.svg",onMouseDown:this.handleMouseDown}),h("img",{className:"logoStyle",src:"assets/icons/logo.svg"}),h("nav",null,h("a",{href:"#"},"Toys ",h("img",{src:"assets/icons/nav_active.svg"})),h("a",{href:"#"},"Furniture"),h("a",{href:"#"},"Food"),h("a",{href:"#"},"Health"),h("div",{className:"cart"},h("span",{className:"cartQuantity"},this.props.cartItems),h("img",{src:"assets/icons/basket.svg"}))))}}]),t}(l.Component),g=Object(d.b)((function(e){return{cartItems:e.products.cart}}),(function(e){return{toggleMobileMenu:function(){return e(Object(f.e)())}}}))(v),O=(n("wJYp"),p.a.createElement),y=Object(d.b)((function(e){return{mobileMenuVisible:e.mobileMenuVisible}}))((function(e){return O("div",{className:e.mobileMenuVisible?"menuOpen":"menuClosed"},O(g,null),e.children)})),j=(n("HJcZ"),n("BgNx"),p.a.createElement),E=function(e){function t(e,n){var r;return Object(i.a)(this,t),r=Object(c.a)(this,Object(s.a)(t).call(this,e,n)),Object(b.a)(Object(m.a)(r),"showDropdownMenu",(function(e){e.preventDefault(),r.setState({displayMenu:!0},(function(){document.addEventListener("click",r.hideDropdownMenu)}))})),Object(b.a)(Object(m.a)(r),"hideDropdownMenu",(function(){r.setState({displayMenu:!1},(function(){document.removeEventListener("click",r.hideDropdownMenu)}))})),r.state={displayMenu:!1},r}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return j("div",{className:"dropdown"},j("div",{className:"button",onClick:this.showDropdownMenu},"Sort By"),this.state.displayMenu?j("div",{className:"dropdownMenu"},j("ul",null,j("li",{onClick:function(){return e.props.setSortingType(f.a.PRICE_ASC)}},"$ - $$$"),j("li",{onClick:function(){return e.props.setSortingType(f.a.PRICE_DESC)}},"$$$ - $"),j("li",{onClick:function(){return e.props.setSortingType(f.a.TOP_RATED)}},"Top Rated"),j("li",{onClick:function(){return e.props.setSortingType(f.a.POPULAR)}},"Popular"))):null)}}]),t}(l.Component),w=Object(d.b)(null,(function(e){return{setSortingType:function(t){return e(Object(f.d)(t))}}}))(E),N=p.a.createElement,M=function(e){return N("div",{className:"heroContainer"},N("div",{className:"heroTitle"},N("h1",null,"Dog Toys"),N("h2",null,"For Good Girls & Boys")),N(w,null))},T=n("G4qV"),C=n("hfKm"),P=n.n(C),_=n("2Eek"),S=n.n(_),D=n("XoMD"),k=n.n(D),R=n("Jo+v"),I=n.n(R),F=n("4mXO"),x=n.n(F),A=n("pLtp"),L=n.n(A),U=p.a.createElement;function $(e,t){var n=L()(e);if(x.a){var r=x()(e);t&&(r=r.filter((function(t){return I()(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):k.a?S()(e,k()(n)):$(Object(n)).forEach((function(t){P()(e,t,I()(n,t))}))}return e}var V={fontSize:"14px",fontFamily:"BogleWeb-Bold",width:"55px",height:"55px",textAlign:"center",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",marginTop:"-60px"},W=B({},V,{color:"black",backgroundColor:"#E2F3F7"}),z=B({},V,{color:"white",backgroundColor:"#006697",fontSize:"12px",fontFamily:"BogleWeb-Regular"}),X=B({},V,{color:"#FFFFFF",backgroundColor:"#63327E"}),J={NEW_ITEM:"New!",EXCLUSIVE_ITEM:"Only @ Walmart",TOP_RATED:"Top Rated"},K={NEW_ITEM:W,EXCLUSIVE_ITEM:z,TOP_RATED:X},H=function(e){return U("div",{style:K[e.itemType]},J[e.itemType])},q=(n("61Vv"),p.a.createElement),G=function(e){var t=e.product;return q("div",{className:"productStyle"},q("div",{className:"moreBadgeContainerStyle"},t.more_choices&&q("div",{className:"moreBadgeStyle"},"More Choices")),q("img",{src:t.image_url,className:"imgStyle"}),t.type&&q(H,{itemType:t.type}),q("div",{className:"container"},q("div",{className:"itemName"},t.name),q("div",{className:"originalPrice"},t.original_price)),q("div",{className:"container"},q("div",{className:"itemDescription"},t.description),q("div",{className:"priceContainer"},q("span",{className:t.original_price?"discountPrice":"price"},t.price))))},Y=(n("Khtt"),p.a.createElement),Q=function(e){var t=e.products;return Y("div",{className:"productListStyle"},t.map((function(e,t){return Y(G,{key:t,product:e})})))};function Z(e){return e.split("-")[0].split("$")[1]}var ee=Object(T.a)([function(e){return e.products.currentProducts},function(e){return e.sortType}],(function(e,t){switch(t){case f.a.NONE:return e;case f.a.PRICE_ASC:return e.slice().sort((function(e,t){return Number(Z(e.price))-Number(Z(t.price))}));case f.a.PRICE_DESC:return e.slice().sort((function(e,t){return Number(Z(t.price))-Number(Z(e.price))}));case f.a.TOP_RATED:return e.slice().sort((function(e,t){return Number("TOP_RATED"===t.type)-Number("TOP_RATED"===e.type)}));case f.a.POPULAR:return e.slice().sort((function(e,t){return Number("POPULAR"===t.type)-Number("POPULAR"===e.type)}));default:throw new Error("Unknown filter: "+t)}})),te=Object(d.b)((function(e){return{products:ee(e)}}))(Q),ne=(n("m09W"),n("8msz"),p.a.createElement),re={backgroundColor:"#041E42",height:"100vh",width:"100vw",zIndex:999},ae={height:"50%"},ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a))),Object(b.a)(Object(m.a)(n),"handleMouseDown",(function(e){n.props.toggleMobileMenu(),e.stopPropagation()})),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return ne("div",{style:re},ne("div",{style:{height:"80px",padding:"0 15px",display:"flex",alignItems:"center",justifyContent:"space-between"}},ne("img",{style:ae,src:"assets/icons/hamburger_close.svg",onMouseDown:this.handleMouseDown})),ne("nav",{className:"mobileMenuNav"},ne("a",{href:"#"},"Toys ",ne("img",{src:"assets/icons/nav_active.svg"})),ne("a",{href:"#"},"Furniture"),ne("a",{href:"#"},"Food"),ne("a",{href:"#"},"Health")))}}]),t}(l.Component),oe=Object(d.b)(null,(function(e){return{toggleMobileMenu:function(){return e(Object(f.e)())}}}))(ie),ce=n("8Kt/"),se=n.n(ce),ue=p.a.createElement,le=function(){var e=Object(d.c)((function(e){return e.products.siteTitle}));return ue(se.a,null,ue("title",null,e),ue("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),ue("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"}))},pe=p.a.createElement,de=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return pe(p.a.Fragment,null,pe(le,null),pe(oe,null),pe(y,null,pe(M,null),pe(te,null)))}}],[{key:"getInitialProps",value:function(e){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.reduxStore,n.next=3,a.a.awrap(t.dispatch(Object(f.b)()));case 3:return n.abrupt("return",{});case 4:case"end":return n.stop()}}))}}]),t}(p.a.Component);t.default=Object(d.b)()(de)}},[["/EDR",1,0,7]]]);