
//1. podpiecie jQuery
//2. zdarzenie click
//3. rozwiniecie paragrafu // this -element klikniety

$(document).ready(function(){

    $('.accordion-item').click(function() {

    if($(this).hasClass('open')) {   //jezeli ma klase open - slide up
        $(this).removeClass('open');
        $(this).find('.accordion-content').slideUp();

    } else {
        $(this).addClass('open');   
        $(this).find('.accordion-content').slideDown();  //jezeli nie ma klasy open- slide down
    }
    });
});




