import { onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useAnimation() {
  const triggers = [];
  const timelines = [];

  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  /**
   * Bidirectional Fade & Slide reveal for elements on scroll down and scroll up
   */
  const revealElements = (selector, options = {}) => {
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, y: 0 });
      return;
    }

    const {
      y = 30,
      duration = 0.7,
      stagger = 0.1,
      start = 'top 90%',
      end = 'bottom 10%',
      toggleActions = 'play reverse play reverse'
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (!elements.length) return;

    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y });

      const anim = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions, // Bidirectional: animates both when scrolling down and scrolling up
          invalidateOnRefresh: true
        }
      });

      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    // Safety net: ensure elements never remain invisible if ScrollTrigger is missed
    setTimeout(() => {
      elements.forEach(el => {
        if (el && window.getComputedStyle(el).opacity === '0') {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.4 });
        }
      });
    }, 1500);

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  };

  /**
   * Counter animation for statistics (e.g. 15+, 25k+, 99%)
   */
  const animateCounter = (element, targetNumber, suffix = '', options = {}) => {
    if (prefersReducedMotion()) {
      if (element) element.innerText = targetNumber.toLocaleString() + suffix;
      return;
    }

    const { duration = 2.5, start = 'top 85%' } = options;
    if (!element) return;

    const proxy = { val: 0 };
    const anim = gsap.to(proxy, {
      val: targetNumber,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        once: true
      },
      onUpdate: () => {
        const current = Math.ceil(proxy.val);
        element.innerText = current.toLocaleString('en-US') + suffix;
      }
    });

    if (anim.scrollTrigger) {
      triggers.push(anim.scrollTrigger);
    }

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  };

  /**
   * Hero entrance animation
   */
  const animateHero = (containerSelector) => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timelines.push(tl);

    tl.fromTo(
      `${containerSelector} .hero-badge`,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      `${containerSelector} .hero-title`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    )
    .fromTo(
      `${containerSelector} .hero-desc`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.4'
    )
    .fromTo(
      `${containerSelector} .hero-cta`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
      '-=0.4'
    )
    .fromTo(
      `${containerSelector} .hero-image-wrap`,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      `${containerSelector} .hero-float-card`,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
      '-=0.4'
    );

    return tl;
  };

  /**
   * Cleanup lifecycle hook
   */
  const cleanup = () => {
    triggers.forEach(t => {
      if (t && typeof t.kill === 'function') t.kill();
    });
    triggers.length = 0;

    timelines.forEach(tl => {
      if (tl && typeof tl.kill === 'function') tl.kill();
    });
    timelines.length = 0;
  };

  onUnmounted(() => {
    cleanup();
  });

  return {
    gsap,
    ScrollTrigger,
    revealElements,
    animateCounter,
    animateHero,
    cleanup,
    prefersReducedMotion
  };
}
