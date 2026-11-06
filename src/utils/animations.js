import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2, Back } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Image Reveal Animation
  const initImageReveal = () => {
    const revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      if (image) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
            start: "top 85%",
          }
        });
        
        // Set initial states
        gsap.set(container, { overflow: "hidden" });
        gsap.set(image, { scale: 1.2, opacity: 0 });
        
        // Animation sequence
        tl.to(container, {
          duration: 0.6,
          opacity: 1,
          ease: Power2.easeInOut
        })
        .to(image, {
          duration: 0.8,
          scale: 1,
          opacity: 1,
          ease: Power2.easeOut
        }, "-=0.3");
      }
    });
  };

  // Text Animation Style 1 (Word by word)
  const initTextAnimeStyle1 = () => {
    const elements = document.querySelectorAll('.text-anime-style-1');
    elements.forEach(element => {
      // Split text into words
      const words = element.textContent.split(' ');
      element.textContent = '';
      
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        element.appendChild(span);
      });

      const spans = element.querySelectorAll('span');
      gsap.to(spans, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "restart none none reset"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: Power2.easeOut,
        from: { y: 20, opacity: 0 }
      });
    });
  };

  // Text Animation Style 2 (Character by character)
  const initTextAnimeStyle2 = () => {
    const elements = document.querySelectorAll('.text-anime-style-2');
    elements.forEach(element => {
      // Split text into characters
      const chars = element.textContent.split('');
      element.textContent = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        element.appendChild(span);
      });

      const spans = element.querySelectorAll('span');
      gsap.to(spans, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "restart none none reset"
        },
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: Power2.easeOut,
        from: { x: 20, opacity: 0 }
      });
    });
  };

  // Text Animation Style 3 (3D effect)
  const initTextAnimeStyle3 = () => {
    const elements = document.querySelectorAll('.text-anime-style-3');
    elements.forEach(element => {
      // Split text into characters
      const chars = element.textContent.split('');
      element.textContent = '';
      
      chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        element.appendChild(span);
      });

      const spans = element.querySelectorAll('span');
      gsap.set(element, { perspective: 400 });
      
      gsap.to(spans, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "restart none none reset"
        },
        opacity: 1,
        rotationX: 0,
        y: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: Back.easeOut,
        from: { rotationX: -90, y: 30, opacity: 0 }
      });
    });
  };

  // Parallax Effect
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallaxie');
    if (parallaxElements.length && window.innerWidth > 991) {
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.55;
        
        gsap.to(element, {
          y: (i, target) => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });
    }
  };

  // Initialize Preloader Fade
  const initPreloader = () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.6,
        ease: Power2.easeInOut,
        onComplete: () => {
          preloader.style.display = 'none';
        }
      });
    }
  };

  // Initialize all animations
  initPreloader();
  initImageReveal();
  initTextAnimeStyle1();
  initTextAnimeStyle2();
  initTextAnimeStyle3();
  initParallax();
}; 