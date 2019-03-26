$('.w3-image,.w3-margin-bottom,.w3-justify').hide();
$("form").hide();

$(document).ready(() => {
    $('*').on("mouseenter", () => {
      $('.w3-top').slideDown('slow');
      $('.w3-image,.w3-margin-bottom,.w3-justify').fadeIn('slow');
      $('form').fadeIn('slow');
    })
    $('.w3-top').slideUp(200);

    $("[href='#contact']").on('dblclick',() => {
        $('#contact').toggle();
    })    

    $("[href='#about']").on('dblclick',() => {
        $('#about').toggle();
    })

    $("[href='#food']").on('dblclick',() => {
        $('#food').toggle();
    })

    $("[href='#maintouristattractions']").on('dblclick',() => {
        $('#maintouristattractions').toggle();
    })

    $("div.w3-display-container").mouseover(function () {
        $(this).animate({
            height: '+=30px',
            width: '+=30px',
            padding: '6px',
        });
    });

    $("div.w3-display-container").mouseout(function () {
        $(this).animate({
            height: '-=30px',
            width: '-=30px',
            padding: '6px'
        });
    });

});
