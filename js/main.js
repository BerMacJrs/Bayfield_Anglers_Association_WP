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

    gsap.utils.toArray(".hero > *, .intro > *, .features > *, .events > *, .announce > *, .contact > *, .faq > *, .contributors > *, .volunteer > *, .register > *").forEach((item) => {
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