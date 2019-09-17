(function () {
    "use strict";

    //Menu Amborguesa xD
    $('.btn-menu').on('click',function(){
        $('.menu').toggleClass('show');          
    });
    
    //MENU COLOR
    $(window).scroll(function() {
        if($('.navbar').offset().top>50){
            $('.navbar').addClass('color-nav');
        }else{
            $('.navbar').removeClass('color-nav');
        }
    });
    
    //TYPING TEXT
    var typed = new Typed('.anim-typewriter', {
        strings: ["lo programamos.", "te ayudamos!"],
        loop: true,
    typeSpeed: 100
    });
    
    	new WOW().init();
    
    
     
})();


