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


(() => {
    document.addEventListener('DOMContentLoaded', () => {
    const zoomBtn = document.querySelector('.zoom-trigger');
    const hero = document.querySelector('.hero-img');

    if (!zoomBtn || !hero) {
        console.warn('Zoom trigger or hero section not found');
        return;
    }

    zoomBtn.addEventListener('pointerenter', () => {
        hero.classList.add('zoom-active');
    });

    zoomBtn.addEventListener('pointerleave', () => {
        hero.classList.remove('zoom-active');
    });
});
})();