$(document).ready(function () {
  $('.nav-link').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.dropdown-menu').slideToggle();
    
    $(this).parent().siblings().find('.nav-link').removeClass('active');
    $(this).parent().siblings().find('.dropdown-menu').slideUp();
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  lightbox.option({
    'resizeDuration': 200,
    'positionFromTop': 300,
    'wrapAround': true
  })

  $('.top-link').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });

  function showTopBtn() {
    if ($(this).scrollTop() > 500) {
      $('.top-link').fadeIn();
    } else {
      $('.top-link').fadeOut();
    }
  }

  $(window).scroll(showTopBtn);
});