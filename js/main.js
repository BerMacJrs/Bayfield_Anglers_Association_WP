// Hamburger Menu Functionality

(() => {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
        burger.classList.toggle('rotate');
    });
})();

// GSAP Animation Functionality

(() => {
  gsap.registerPlugin(ScrollTrigger);

  const heroElements = [
    ".hero-content p",
    ".hero-mobile, .hero-desktop",
    ".hero-content button"
  ];

  heroElements.forEach((selector, i) => {
    gsap.set(selector, { opacity: 0, y: 50 });

    gsap.to(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 90%",
        end: "bottom 75%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.inOut",
      delay: i * 0.1
    });
  });
})();

// Intro Animation

(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".intro p").forEach((item) => {
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
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    });  
})();

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".intro-img", { opacity: 0, y: 50 });

  gsap.to(".intro-img", {
    scrollTrigger: {
      trigger: ".intro-flex",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.Out",
    stagger: 0.15,
  });
})();

// Features Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".features-sides img", { x: -100, opacity: 0 });
  gsap.set(".features-desc", { x: 100, opacity: 0 });

  document.querySelectorAll(".features-sides").forEach((section) => {
    const image = section.querySelector("img");
    const desc = section.querySelector(".features-desc");

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "bottom 75%",
        toggleActions: "play none none none"
      }
    })
    .to(image, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0)
    .to(desc, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0);
  });
})();

// Events Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".events-sides img", { x: -100, opacity: 0 });
  gsap.set(".events-sides > div:last-child", { x: 100, opacity: 0 });

  document.querySelectorAll(".events-sides").forEach((section) => {
    const image = section.querySelector("img");
    const textContainer = section.querySelector("div:last-child");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "bottom 75%",
        toggleActions: "play none none none",
      },
    });

    tl.to(image, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0)
      .to(textContainer, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0);
  });
})();

// Announcement Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".announce-sides img", { x: 100, opacity: 0 });
  gsap.set(".announce-sides > div:first-child", { x: -100, opacity: 0 });

  document.querySelectorAll(".announce-sides").forEach((section) => {
    const text = section.querySelector("div:first-child");
    const image = section.querySelector("img");

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "bottom 75%",
        toggleActions: "play none none none",
      }
    })
    .to(text, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0)
    .to(image, { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0);
  });
})();

// Contribution Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".contributors .main-description", { y: 50, opacity: 0 });
  gsap.set(".contributor-img", { x: -100, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".contributors",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none"
    }
  })
  .to(".contributors .main-description", { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }, 0)
  .to(".contributor-img", { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
})();

// Volunteering Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".volunteer .main-description", { x: -100, opacity: 0 });
  gsap.set(".volunteer-img", { x: 100, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".volunteer",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none"
    }
  })
  .to(".volunteer .main-description", { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0)
  .to(".volunteer-img", { x: 0, opacity: 1, duration: 0.75, ease: "power2.out" }, 0);
})();

// Registration Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  const items = gsap.utils.toArray([
    ".register .main-description",
    ".register-form input",
    ".register-form textarea"
  ].join(","));

  gsap.set(items, { opacity: 0, y: 50 });

  items.forEach(item => {
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
      duration: 0.6,
      ease: "power2.inOut"
    });
  });
})();

// Contact Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".contact .main-description:first-of-type").forEach(item => {
    gsap.set(item, { opacity: 0, y: 50 });
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom 75%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });
  });

  gsap.set(".form-box", { x: -100, opacity: 0 });
  gsap.to(".form-box", {
    scrollTrigger: {
      trigger: ".form-box",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none"
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.set(".contact-info", { x: 100, opacity: 0 });
  gsap.to(".contact-info", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none"
    },
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  });
})();

// FAQ Animation

(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("#faq > .grid-con > div.col-span-full:not(.h2-side)", { 
    opacity: 0, 
    y: 50 
  });

  gsap.to("#faq > .grid-con > div.col-span-full:not(.h2-side)", {
    scrollTrigger: {
      trigger: "#faq",
      start: "top 90%",
      end: "bottom 75%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  });
})();

// Contact Form Functionality

(() => {
    const forms = document.querySelectorAll("form");
    const feedback = document.querySelector("#feedback");

    function handleFormSubmission(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const url = "sendmail.php";

        const formData = new URLSearchParams();
        formData.append('first-name', form.elements['first-name'].value);
        formData.append('last-name', form.elements['last-name'].value);
        formData.append('email', form.elements['email'].value);
        formData.append('mobile', form.elements['mobile'].value);
        formData.append('message', form.elements['message'].value);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        })
        .then(response => response.json())
        .then(response => {
            feedback.innerHTML = "";
            if (response.errors) {
                response.errors.forEach(error => {
                    const errorElement = document.createElement("p");
                    errorElement.textContent = error;
                    feedback.appendChild(errorElement);
                });
            } else {
                form.reset();
                const messageElement = document.createElement("p");
                messageElement.textContent = response.message;
                feedback.appendChild(messageElement);
            }
            feedback.scrollIntoView({ behavior: 'smooth', block: 'end' });
        })
        .catch(error => {
            console.log(error);
            feedback.innerHTML = "";
            feedback.innerHTML = `<p>An error occurred. You might be using an older browser or JavaScript is disabled.</p>`;
        });
    }

    forms.forEach(form => {
        form.addEventListener("submit", handleFormSubmission);
    });
})();

// Hero Zoom Functionality

(() => {
  const button = document.querySelector('.zoom-trigger');
  const hero = document.querySelector('.hero');

  button.addEventListener('mouseenter', () => {
    hero.classList.add('zoomed');
  });

  button.addEventListener('mouseleave', () => {
    hero.classList.remove('zoomed');
  });
})();

// Header Disappear Functionality

(() => {
  const header = document.getElementById("header");
  const footer = document.querySelector("footer");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        header.style.transition = "transform 0.4s ease-in-out";
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(footer);
})();

// Hero Viewport Height Functionality

(() => {
  const adjustHeroHeight = () => {
    const header = document.getElementById('header');
    const hero = document.querySelector('.hero');
    if (!header || !hero) return;

    const headerHeight = header.offsetHeight;
    hero.style.height = `calc(100vh - ${headerHeight}px)`;
  };

  const mediaQuery = window.matchMedia('(min-width: 992px)');

  const handleResize = () => {
    if (mediaQuery.matches) {
      adjustHeroHeight();
    } else {
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = ''; 
    }
  };

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);
})();

// ID Scroll Compensation Functionality

(() => {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      e.preventDefault();

      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
})();