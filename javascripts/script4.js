$(document).ready(function(){
    $(window).scroll(function(){
        
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   

    var typed = new Typed(".typing", {
        strings: ["Construction Accesseries"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    

   
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll('.menu-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                btns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});