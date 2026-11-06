import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initializeAnimations } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useEffect(() => {
    // Initialize all animations
    initializeAnimations();

    // Cleanup function
    return () => {
      // Kill all GSAP animations
      const animations = gsap.globalTimeline.getChildren();
      animations.forEach(animation => animation.kill());

      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Remove all split text spans
      document.querySelectorAll('.text-anime-style-1 span, .text-anime-style-2 span, .text-anime-style-3 span')
        .forEach(span => {
          const parent = span.parentElement;
          if (parent) {
            parent.textContent = parent.textContent;
          }
        });
    };
  }, []); // Empty dependency array means this runs once on mount
};

export default useAnimations; 