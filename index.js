document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  //somooth scrolling
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // gsap for about 
  // $("#about").mouseover(function () { 
  //   gsap.from(".about-left-text",{
  //     x: -700,
  //     delay: 0.6
  //   })
  //   gsap.from(".about-right-img",{
  //     x: -700,
  //     delay: 0.2
  //   })
  //  })

  //  gsap for about 
  // $(".review-card").click(function () { 
  //   gsap.from(".about-left-text",{
  //     // x: -700,
  //     delay: 0.6,
  //     rotate: 360
  //   })
  //  })
  //  $(".review-card").click(function () { 
  //   gsap.from(".review-card",{
  //     rotate:45
  //   })
    
  //  });
  
  // gsap.from(".about-left-text",{
  //   x: -700,
  //   delay: 0.5
  // })
  // gsap.from(".about-right-img",{
  //   x: -700,
  // })

  //jquery animation 
  // $(".review-card").click(function () { 
  //   $this.$(".review-card").animate({opacity:0.5});
    
  // });

  // $(".about-container").click(function () {
  //   $(".about-container").fadeIn();
  // })

  //carousel
  let header = document.querySelector(".header");
  let i = 1;
  
  setInterval(() => {
    header.style.cssText = `background-image: url(images/hotel-bg${i}.jpg)`;
    i = (i % 3) + 1;
  }, 3000);
  

  //typed js
  var typed = new Typed(".hotel-typed-name", {
    strings: ["Majestic Hotel.", "Paradise.", ".", "Kashmir."],
    typeSpeed: 130,
    backSpeed: 120,
    loop: true,
  });
});
