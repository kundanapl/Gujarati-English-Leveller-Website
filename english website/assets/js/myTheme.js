AOS.init(),function(e){e(".dropdown-menu a.dropdown-toggle").on("click",function(s){return e(this).next().hasClass("show")||e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),e(this).next(".dropdown-menu").toggleClass("show"),e(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(s){e(".dropdown-submenu .show").removeClass("show")}),!1})}(jQuery),$(".gallerySlider").owlCarousel({loop:!0,margin:10,autoplay:!0,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1000:{items:3,nav:!0,dots:!1}}}),$(".testimonialSlider").owlCarousel({loop:!0,margin:10,dots:!1,autoplay:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!1},1000:{items:1,nav:!0,dots:!1}}}),$(".fourSlider").owlCarousel({loop:!0,margin:16,autoplay:!0,nav:!1,responsive:{0:{items:1},600:{items:2},1000:{items:4}}}),$(".sixSlider").owlCarousel({loop:!0,margin:16,autoplay:!0,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:4},1000:{items:6}}}),window.onscroll=function(){myFunction()};var navbar=document.getElementById("mainMenuWrap"),myNavsticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=myNavsticky?navbar.classList.add("myNavsticky"):navbar.classList.remove("myNavsticky")}function myReadMore(){var e=document.getElementById("dots"),s=document.getElementById("more"),n=document.getElementById("myReadmoreBtn");"inline"===e.style.display?(e.style.display="none",n.innerHTML="Read less",s.style.display="inline"):(e.style.display="inline",n.innerHTML="Read more",s.style.display="none")}$(document).on("click",'[data-toggle="lightbox"]',function(e){e.preventDefault(),$(this).ekkoLightbox()}),$(document).ready(function(){$(".faq-question").on("click",function(){$(this).parent().hasClass("active")?($(this).next().slideUp(),$(this).parent().removeClass("active")):($(".faq-answer").slideUp(),$(".faq-singular").removeClass("active"),$(this).parent().addClass("active"),$(this).next().slideDown())})}); document.addEventListener("DOMContentLoaded",function(){var e,n=document.querySelectorAll("img.lazy");function t(){e&&clearTimeout(e),e=setTimeout(function(){var e=window.pageYOffset;n.forEach(function(n){n.offsetTop<window.innerHeight+e&&(n.src=n.dataset.src,n.classList.remove("lazy"))}),0==n.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t))},20)}document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationChange",t)});


$("#newsLetterSubmit").click(function(){
    var newsLetterEmail = $("#newsLetterEmail").val();
    $.ajax({
      url: "ajax/newsletterAjax.php",
      type: "POST",
      data : {newsLetterEmail : newsLetterEmail},
      success: function(result){
      $("#newsLetterEmail").val('');
      $("#newsLetterFormMessage").html(result);
      $("#newsLetterFormMessage").fadeOut(5000);    
      // console.log(result);
    }});
  });