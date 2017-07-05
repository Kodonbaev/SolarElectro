
$('.slider').slick({
    dots: true,
    autoplay: true,
  	autoplaySpeed: 2000,
    responsive: [
        {
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3
            }
        }
    ]

});
$('.slider-order').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
         {
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
