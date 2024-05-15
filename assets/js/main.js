




var sickPrimary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.text-slider',
      centerMode: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

var sickSecondary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.image-slider',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);


//owl
// $('#banner').on('changed.owl.carousel', function(event) {
//     var totalSlides = event.item.count;
//     var currentSlide = event.page.index + 1;
//     $('#current-slide').text(currentSlide);
//     $('#total-slides').text(totalSlides);
// });

// $('#banner').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });

$(document).ready(function(){
    var owl = $('#banner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    owl.on('changed.owl.carousel', function(event) {
        var totalSlides = event.item.count;
        var currentSlide = event.item.index + 1;
        if (currentSlide > totalSlides) {
            currentSlide = 1; 
        }
        $('.current-slide').text(currentSlide);
        $('.total-slides').text(totalSlides);
    });
});





// client

$('#client').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    stagePadding: 50,
    autoplay:true,   
    autoplayTimeout: 2500,
    smartSpeed: 400,
    center: true,
    paginationSpeed: 500,
    dots:false,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 6000,
    responsiveClass:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1023:{
            items:6
        },
        1000:{
            items:8
        }
    }
});
// heavy
$('#heavy').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 30,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    autoplay:true,
    autoplaySpeed:1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
// spare
$('#spare').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 30,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
// compare
$('#compare').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 30,
    autoplay:true,
    autoplaySpeed:1000,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// blog

$('#blog').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1280:{
            items:4
        }
    }
})

// testimonial
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


// bannerH3
function fadeInElements() {
      var bannerH5 = document.getElementById('banner-h5');
      var bannerH3 = document.getElementById('banner-h3');
      
      bannerH5.classList.add('fade-in');
      bannerH3.classList.add('fade-in');
   }



// dropdown
 function openForm(formId) {
      document.querySelectorAll('form').forEach(form => {
         form.style.display = 'none';
      });
      document.querySelector(formId).style.display = 'block';
   }
   window.onload = function() {
      document.getElementById('form-1').style.display = 'block';
   };




function openForm(formToShow, formToHide) {
        document.querySelector(formToHide).style.display = 'none';

        
        document.querySelector(formToShow).style.display = 'block';

        
        var yellowButton = document.querySelector('.banner-buttons-btn a.yellow');
        var greyButton = document.querySelector('.banner-buttons-btn a.grey');

        yellowButton.classList.toggle('yellow');
        yellowButton.classList.toggle('grey');
        greyButton.classList.toggle('yellow');
        greyButton.classList.toggle('grey');
    }

    window.onload = function () {
       
    };


// modal
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});




