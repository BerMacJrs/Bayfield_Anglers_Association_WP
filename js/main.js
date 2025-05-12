// Hamburger Menu Functionality

(() => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
})();

// GSAP Animation Functionality

(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".hero p, .hero h2, .hero button, .intro > *, .features > *, .events > *, .announce > *, .contact > *, .faq > *, .contributors > *, .volunteer > *, .register > *").forEach((item) => {
      gsap.set(item, { opacity: 0, y: 50 });
  
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 75%",
          toggleActions: "play none none none",
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    });  
})();