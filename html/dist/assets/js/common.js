const gb={wW:window.innerWidth,wH:window.innerHeight,html:$("html"),body:$("body"),layout:$("#layout"),main:$(".main"),header:$("#gnb"),listSwiper:$(".list-swiper").get(),listSwiper2:$(".list-swiper2").get(),btnActiveModal:$(".button-active-modal"),btnCloseModal:$(".button-close-modal"),btnActiveTooltip:$(".button-active-tooltip"),isMob:window.innerWidth<=821,isFocus:!1};function setCookie(e,t,o){const i=new Date;let n;i.setDate(i.getDate()+o),n=e+"="+escape(t)+"; path=/ ",void 0!==o&&(n+=";expires="+i.toGMTString()+";"),document.cookie=n}function getCookie(e){e+="=";const t=document.cookie,o=t.indexOf(e),i="";if(-1!=o){o+=e.length;const n=t.indexOf(";",o);-1==n&&(n=t.length),i=t.substring(o,n)}return unescape(i)}window.addEventListener("load",()=>{gb.CommonFunction.init(),gb.main.length&&gb.CommonFunction.zoomIn(),gb.listSwiper.length&&gb.CommonFunction.listSwiper(),gb.listSwiper2.length&&gb.CommonFunction.listSwiper2()}),gb.CommonFunction=function(){const n=()=>{gb.btnActiveModal.removeClass("active"),$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"}),$(".dimmed").css("z-index",990)};const t=()=>{gb.html.stop().animate({scrollTop:0},300)},s=e=>({_clientY:$(e).offset().top-document.documentElement.scrollTop,clientY:document.documentElement.scrollTop+document.documentElement.clientHeight-$(e).offset().top});return{init:()=>{{gb.main.length&&gsap.to(gb.main,{y:0,duration:.5,delay:.3}),gsap.to(gb.header,{y:0,opacity:1,duration:.5,delay:.4}),40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed"),$(".btn-mob-menuOpen").on("click",function(){gb.html.hasClass("m-menu")?e():(gb.html.addClass("m-menu"),gb.body.append('<div class="dimmed btn-mob-menuClose"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"}),gb.main.length||gb.html.removeClass("active"))}),$(document).on("click",".btn-mob-menuClose",function(){e()});const e=()=>{gb.html.removeClass("m-menu"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"}),gb.main.length||gb.html.addClass("active")};$(".depth1").find("> li > a").on("click",function(e){const t=$(this);t.next(".depth2").length&&(e.preventDefault(),e.stopPropagation(),t.closest("li").hasClass("on")?(t.closest("li").removeClass("on"),t.next(".depth2").stop().slideUp(300)):(t.closest("li").addClass("on"),t.next(".depth2").stop().slideDown(300)))})}gb.btnActiveModal.on("click",function(e){e.preventDefault(),e.stopPropagation();const t=$(this);e=t.data("modal-name");$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),t.addClass("active"),$(".modal#modal-"+e).addClass("zoomIn"),gb.body.append('<div class="dimmed button-close-modal"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"}),$(".dimmed").css("z-index",999)}),$(document).on("click",".button-close-modal",()=>{n()}),$(".select-wrap select").niceSelect(),gb.btnHoverTooltip=$(".button-hover-tooltip"),gb.btnActiveTooltip.on("click",function(){var e=s(this);const t=$(this);t.hasClass("on")?(t.removeClass("on"),t.next(".tooltip").removeClass("animation--start")):(e._clientY>=e.clientY?t.next(".tooltip:not(.right)").removeClass("up").addClass("down"):t.next(".tooltip:not(.right)").removeClass("down").addClass("up"),t.addClass("on"),t.next(".tooltip").addClass("animation--start"))}),$(".button-close-tooltip").on("click",function(){$(this).closest(".tooltip").removeClass("animation--start"),$(this).closest(".tooltip").prev("button").removeClass("on")}),gb.btnHoverTooltip.on("mouseenter",function(){var e=s(this);const t=$(this);e._clientY>=e.clientY?t.find(".tooltip:not(.right)").removeClass("up").addClass("down"):t.find(".tooltip:not(.right)").removeClass("down").addClass("up"),t.addClass("on"),t.find(".tooltip").addClass("animation--start"),gb.body.css("user-select","auto")}),gb.btnHoverTooltip.on("mouseleave",function(){const e=$(this);e.removeClass("on"),e.find(".tooltip").removeClass("animation--start"),gb.body.css("user-select","none")}),gb.btnHoverTooltip.on("touchstart",function(){var e=s(this);const t=$(this);$(".tooltip").removeClass("animation--start"),t.hasClass("on")?(t.removeClass("on"),t.find(".tooltip").removeClass("animation--start")):(e._clientY>=e.clientY?t.find(".tooltip:not(.right)").removeClass("up").addClass("down"):t.find(".tooltip:not(.right)").removeClass("down").addClass("up"),t.addClass("on"),t.find(".tooltip").addClass("animation--start"))});{const t=$("input[type=checkbox][name^=chk_all]"),o=$("input[type=checkbox][name^=chk_filter]");t.on("change",function(){$(this).prop("checked")&&o.prop("checked","")}),o.on("change",function(){$(this).prop("checked")&&t.prop("checked","")})}{const i=document.querySelector(".vd-active");i&&i.addEventListener("click",function(){var e=this;e.classList.contains("vd-play")?(e.classList.remove("vd-play"),e.previousElementSibling.pause(),e.parentElement.classList.add("vd-stop")):(e.classList.add("vd-play"),e.previousElementSibling.play(),e.parentElement.classList.remove("vd-stop"))})}gb.dropDown=document.querySelectorAll(".dropDown"),gb.dropDown2=document.querySelectorAll(".dropDown2"),gb.dropDown.forEach(function(e){e.addEventListener("mouseenter",function(){this.children[1].style.opacity=1,this.children[1].style.visibility="visible",this.children[1].style.pointerEvents="auto"}),e.addEventListener("focusin",function(){this.children[1].style.opacity=1,this.children[1].style.visibility="visible",this.children[1].style.pointerEvents="auto"}),e.addEventListener("mouseleave",function(){this.children[1].style.opacity=0,this.children[1].style.visibility="hidden",this.children[1].style.pointerEvents="none"}),e.addEventListener("focusout",function(){this.children[1].style.opacity=0,this.children[1].style.visibility="hidden",this.children[1].style.pointerEvents="none"})}),gb.dropDown2.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();e=t.parentElement.nextElementSibling;t.classList.contains("on")?(t.classList.remove("on"),gsap.to(e,{duration:.4,height:0})):(t.classList.add("on"),gsap.to(e,{duration:.4,height:"auto"}))})}),$(".button-open-sideMenu").on("click",function(){const e=$(this),t=e.closest("aside");e.hasClass("on")?t.stop().animate({right:"-265px"},300,"easeInOutExpo",function(){e.removeClass("on")}):t.stop().animate({right:0},300,"easeInOutExpo",function(){e.addClass("on")})})},zoomIn:()=>{gb.dialog=document.querySelectorAll(".dialog"),gb.visualWrap=document.querySelector(".visual-wrap"),gb.btnDialogOff=document.querySelectorAll(".btn-dialog-off");const o=e=>{t(),gsap.to(gb.visualWrap,{transformOrigin:"0% 100%",ease:"none",onComplete:function(){gb.visualWrap.classList.add("zoom--In"),e.style.opacity=0,e.style.visibility="hidden",e.nextElementSibling.style.opacity=1,e.nextElementSibling.style.pointerEvents="auto",$(".dialog").not($(e)).closest("div").addClass("blur")}}),gb.isFocus=!0},i=e=>{t(),gsap.to(gb.visualWrap,{transformOrigin:"50% 10%",ease:"none",onComplete:function(){gb.visualWrap.classList.add("zoom--In"),e.style.opacity=0,e.style.visibility="hidden",e.nextElementSibling.style.opacity=1,e.nextElementSibling.style.pointerEvents="auto",$(".dialog").not($(e)).closest("div").addClass("blur")}}),gb.isFocus=!0},n=e=>{t(),gsap.to(gb.visualWrap,{transformOrigin:"100% 80%",ease:"none",onComplete:function(){gb.visualWrap.classList.add("zoom--In"),e.style.opacity=0,e.style.visibility="hidden",e.nextElementSibling.style.opacity=1,e.nextElementSibling.style.pointerEvents="auto",$(".dialog").not($(e)).closest("div").addClass("blur")}}),gb.isFocus=!0};gb.dialog.forEach((e,t)=>{e.addEventListener("mouseenter",function(){gb.isFocus||(0==t&&(gb.zoomInLeftBottom=setTimeout(function(){o(e)},600)),1==t&&(gb.zoomInCenterTop=setTimeout(function(){i(e)},600)),2==t&&(gb.zoomInRightBottom=setTimeout(function(){n(e)},600)))}),e.addEventListener("touchstart",function(){gb.isFocus||(0==t&&(gb.zoomInLeftBottom=setTimeout(function(){o(e)},600)),1==t&&(gb.zoomInCenterTop=setTimeout(function(){i(e)},600)),2==t&&(gb.zoomInRightBottom=setTimeout(function(){n(e)},600)))}),e.addEventListener("mouseleave",function(){clearTimeout(gb.zoomInLeftBottom),clearTimeout(gb.zoomInCenterTop),clearTimeout(gb.zoomInRightBottom)})}),gb.btnDialogOff.forEach(e=>{e.addEventListener("click",function(){gb.visualWrap.classList.remove("zoom--In"),gb.dialog.forEach(e=>{e.style.opacity=1,e.style.visibility="visible",e.nextElementSibling.style.opacity=0,e.nextElementSibling.style.pointerEvents="none",e.parentElement.classList.remove("blur")}),gb.isFocus=!1})})},modalOff:n,listSwiper:()=>{gb._listSwiper=gb._listSwiper||[],gb.listSwiper.forEach(function(e,t){void 0!==gb._listSwiper[t]&&(gb._listSwiper[t].destroy(),gb._listSwiper[t]=void 0),gb.listSwiperOption={loop:!1,speed:600,direction:"horizontal",slidesPerView:"auto",spaceBetween:0,centeredSlides:!1,debugger:!0,scrollbar:{el:".swiper-scrollbar-customed",hide:!1,draggable:!0},navigation:{nextEl:".button-swiper-nxt",prevEl:".button-swiper-prev"}},gb._listSwiper[t]=new Swiper(e,gb.listSwiperOption)})},listSwiper2:()=>{gb._listSwiper2=gb._listSwiper2||[],gb.listSwiper2.forEach(function(e,t){void 0!==gb._listSwiper2[t]&&(gb._listSwiper2[t].destroy(),gb._listSwiper2[t]=void 0),gb.listSwiper2Option={loop:!1,speed:600,direction:"horizontal",slidesPerView:1,slidesPerGroup:1,slidesPerColumn:1,spaceBetween:0,breakpoints:{821:{slidesPerView:2,slidesPerGroup:2,slidesPerColumn:2}},centeredSlides:!1,debugger:!0,scrollbar:{el:".swiper-scrollbar-customed",hide:!1,draggable:!0},navigation:{nextEl:".button-swiper-nxt",prevEl:".button-swiper-prev"}},gb._listSwiper2[t]=new Swiper(e,gb.listSwiper2Option)})},goScrollTop:t,fileUpload:(e,t)=>{var o=e.value.lastIndexOf(".");const i=e.value.substring(o+1,e.length);o=i.toLowerCase();const n=new FileReader;var s=$(e)[0].files[0].name;$(e)[0].files[0].size;if(n.readAsDataURL($(e)[0].files[0]),"image"==t&&"jpg"!=o&&"gif"!=o&&"png"!=o&&"jpeg"!=o&&"bmp"!=o)return alert("이미지 파일만 선택 할 수 있습니다."),parentObj=e.parentNode,node=parentObj.replaceChild(e.cloneNode(!0),e),!1;$(e).closest(".file-attach").find(".text-wrap input[type=text]").val(s)},copyUrl:()=>{{var e=location.href;const t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}alert("링크가 복사되었습니다.\n "+location.href)}}}(),window.addEventListener("scroll",()=>{40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed")}),window.addEventListener("resize",()=>{gb.listSwiper.length&&gb.CommonFunction.listSwiper(),gb.listSwiper2.length&&gb.CommonFunction.listSwiper2()});