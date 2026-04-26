'use client';

export async function initGSAP() {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);

  return { gsap, ScrollTrigger };
}

export async function animateCounter(
  element: Element,
  end: number,
  duration = 2,
  suffix = ''
) {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  const obj = { val: 0 };
  gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
    onUpdate() {
      element.textContent = Math.round(obj.val) + suffix;
    },
  });
}

export async function splitTextReveal(element: Element, delay = 0) {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  const text = element.textContent ?? '';
  const words = text.split(' ');
  element.innerHTML = words
    .map((w) => `<span class="gsap-word" style="display:inline-block;overflow:hidden"><span style="display:inline-block;transform:translateY(110%)">${w}</span></span>`)
    .join(' ');

  const spans = element.querySelectorAll<HTMLElement>('.gsap-word span');

  gsap.to(spans, {
    y: '0%',
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.06,
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 88%',
      once: true,
    },
  });
}

export async function parallaxElement(element: Element, speed = 0.3) {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
