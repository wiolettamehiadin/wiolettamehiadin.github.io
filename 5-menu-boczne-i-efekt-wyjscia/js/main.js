$(document).ready(function(){
    $('.hamburger').click(function(){
       $('.main-menu').toggleClass('open');
    });

    $('.main-menu-item a').click(function(e){   //odwolanie sie do 'a' w main-menu
        e.preventDefault();  //klikam w link bez przeladowania

        $('body').fadeOut(2000, function() {  //funkcja zwrotna przeladuje strone
            window.location.href = $(e.target).attr('href');   //e.target.attr-po kliknieciu, przeniesie nas do href
        });
    });
});

