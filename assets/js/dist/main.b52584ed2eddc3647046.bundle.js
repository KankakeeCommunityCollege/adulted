!function(e){var n={};function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)o.d(t,s,function(n){return e[n]}.bind(null,s));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";o.r(n);o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13)},function(e,n){$(document).ready(function(){$(".hero-slider__slider").slick({dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,prevArrow:'<img alt="" class="a-left control-c prev slick-prev" src="assets/img/dbl-prev.svg">',nextArrow:'<img alt="" class="a-right control-c next slick-next" src="assets/img/dbl-next.svg">'}),$(".gallery__button").each(function(){var e=$(this),n=e.data("slide");e.on("click",function(){setTimeout(function(){$("#gallerySlider").slick({dots:!0,initialSlide:e.data("slide"),slidesToShow:1,slidesToScroll:1})},300),$("#gallerySlider").slick("slickGoTo",n)})})})},function(e,n){$(document).ready(function(){[].forEach.call(document.querySelectorAll("img[data-src]"),function(e){e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}})})},function(e,n){$(document).ready(function(){var e=window.location.href,n=e.replace(/(^\w+:|^)\/\//,"");$("#navbarSupportedContent").find(".active").removeClass("active"),"foundation.kcc.edu/"==n||"localhost:3000/"==n?$("#home").addClass("active"):e.indexOf("/about/")>-1?$("#about").addClass("active"):e.indexOf("/programs/")>-1?$("#programs").addClass("active"):e.indexOf("/alumni/")>-1?$("#alumni").addClass("active"):e.indexOf("/resources/")>-1?$("#resources").addClass("active"):e.indexOf("#contact")>-1&&$("#home").addClass("active")})},function(e,n){$("#searchImg").attr("src");$("#searchIcon").click(function(){-1!=$("#searchImg").css("background-image").indexOf("assets/img/search.svg")?$("#searchImg").css("background-image",'url("http://news.kcc.edu/assets/img/x.svg")'):$("#searchImg").css("background-image",'url("http://news.kcc.edu/assets/img/search.svg")'),$("#searchCollapse").toggleClass("global-nav__search-collapse--visible"),$("#mainNav").toggleClass("local-nav--search-toggle"),$("#globalNav").toggleClass("global-nav--search-toggle")}),$("document").ready(function(){window.setTimeout(function(){$("input.gsc-input").attr("placeholder","Search KCC...")},3e3)})},function(e,n){var o=function(){$("#mainNav").offset().top>100?$("#mainNav").addClass("navbar-shrink"):$("#mainNav").removeClass("navbar-shrink")};o(),$(window).scroll(o)},function(e,n){$(document).ready(function(){var e,n,o,t,s,a,i,l,c,r,u,d,g,f=window.location.href,p=window.location.host+"/",m=f.replace(/(^\w+:|^)\/\//,""),h=m.replace("foundation.kcc.edu/","");m!==p&&m!==p+"#contact"&&m!==p+"programs/community-literacy/form/"&&(c="programs",r="esl",u="community-literacy",d="ged",g="GED/HiSet",e='<li class="nav-item">',n='<a href="',o='" class="nav-link sub-nav__nav-link" style="text-transform: capitalize;">',t='" class="nav-link sub-nav__nav-link" style="text-transform: uppercase;">',s='" class="nav-link sub-nav__nav-link">',a=' <span class="sr-only">(current)</span>',i=h.slice(0,-1).split(/\//),l=[],i[i.length-1],i.length,h.indexOf(c)>-1&&(h.indexOf(d)>-1?(l.push('<li class="nav-item active"><a href="../'+d+s+g+a+"</a></li>"),l.push(e+n+"../"+r+t+r.replace(/-/g," ")+"</a></li>"),l.push(e+n+"../"+u+o+u.replace(/-/g," ")+"</a></li>")):h.indexOf(r)>-1?(l.push(e+n+"../"+d+s+g+"</a></li>"),l.push('<li class="nav-item active"><a href="../'+r+t+r.replace(/-/g," ")+a+"</a></li>"),l.push(e+n+"../"+u+o+u.replace(/-/g," ")+"</a></li>")):h.indexOf(u)>-1?(l.push(e+n+"../"+d+s+g+"</a></li>"),l.push(e+n+"../"+r+t+r.replace(/-/g," ")+"</a></li>"),l.push('<li class="nav-item active"><a href="../'+u+o+u.replace(/-/g," ")+"</a></li>")):(l.push(e+n+d+s+g+"</a></li>"),l.push(e+n+r+t+r.replace(/-/g," ")+"</a></li>"),l.push(e+n+u+o+u.replace(/-/g," ")+"</a></li>"))),document.getElementById("subNavNav").innerHTML=l.join(""))})},function(e,n){$(document).ready(function(){!function e(n){if(3==n.nodeType&&(n.data=n.data.replace(/--/g,"—")),1==n.nodeType&&"SCRIPT"!=n.nodeName)for(var o=0;o<n.childNodes.length;o++)e(n.childNodes[o])}(document.body)})},function(e,n){$(document).ready(function(){var e,n=$.Deferred();$.when(n).done(function(){setTimeout(function(){window.scrollTo(0,0)},220)}),(e=document.location.toString()).match(/(?!#contact$)#.+/)&&($('.nav-tabs a[href="#'+e.split("#")[1]+'"]').tab("show"),n.resolve())})},function(e,n){$(".donateTarget").on("click",function(){$("#collapseOne").toggle("show").trigger("showCollapsed")}),$("#collapseOne").on("showCollapsed",function(){$("#plusMinus").toggleClass("buttons__minus")}),$(".plannedTarget").on("click",function(){$("#collapseTwo").toggle("show").trigger("showCollapsed2")}),$("#collapseTwo").on("showCollapsed2",function(){$("#plusMinus2").toggleClass("buttons__minus")}),$(".womensCircleTarget").on("click",function(){$("#collapseThree").toggle("show").trigger("showCollapsed3")}),$("#collapseThree").on("showCollapsed3",function(){$("#plusMinus3").toggleClass("buttons__minus")}),$(".employeeTarget").on("click",function(){$("#collapseFour").toggle("show").trigger("showCollapsed4")}),$("#collapseFour").on("showCollapsed4",function(){$("#plusMinus4").toggleClass("buttons__minus")}),$(".rightsTarget").on("click",function(){$("#collapseFive").toggle("show").trigger("showCollapsed5")}),$("#collapseFive").on("showCollapsed5",function(){$("#plusMinus5").toggleClass("buttons__minus")}),$(".feesTarget").on("click",function(){$("#collapseSix").toggle("show").trigger("showCollapsed6")}),$("#collapseSix").on("showCollapsed6",function(){$("#plusMinus6").toggleClass("buttons__minus")})},function(e,n){document.querySelectorAll("h3.hero-slider__slider--slide-heading").forEach(function(e){e.innerHTML=e.innerHTML.replace(/\*\*POWER\*\*/g,'<span class="typography__power-text">POWER</span>')})},function(e,n){document.addEventListener("DOMContentLoaded",function(){var e=(new Date).getFullYear();document.getElementById("currentYear").innerHTML=e})},function(e,n){$("document").ready(function(){$("#google_translate_element").on("click",function(){$("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *").css({color:"#544F4B","font-family":"Roboto",width:"100%"}),$("iframe").contents().find(".goog-te-menu2-item-selected").css("display","none"),$("iframe").contents().find(".goog-te-menu2").css({"overflow-y":"scroll",padding:"0px"}),$("iframe").contents().find(".goog-te-menu2-item div").css("padding","20px"),$("iframe").contents().find(".goog-te-menu2-item").css("width","100%"),$("iframe").contents().find("td").css({width:"100%",display:"block"}),$("iframe").contents().find(".goog-te-menu2-colpad").css("display","none"),$("iframe").contents().find(".goog-te-menu2-item div").hover(function(){$(this).css("background-color","#4385F5").find("span.text").css("color","white")},function(){$(this).css("background-color","white").find("span.text").css("color","#544F4B")}),$("iframe").contents().find(".goog-te-menu2").css("border","none"),$(".goog-te-menu-frame").css("box-shadow","0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)"),$(".goog-te-menu-frame").css({height:"100%",width:"100%",top:"0px"}),$("iframe").contents().find(".goog-te-menu2").css({height:"100%",width:"100%"})})})},function(e,n){document.addEventListener("DOMContentLoaded",function(){var e=window.location.href,n=window.location.host+"/";e.replace(/(^\w+:|^)\/\//,"")===n+"programs/community-literacy/form/"&&document.querySelector("iframe").addEventListener("load",function(){document.body.scrollTop=document.documentElement.scrollTop=0})})}]);