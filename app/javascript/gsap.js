import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("turbo:load", function () {
const horizontalsChilds = document.querySelectorAll('.horizontals li')
  gsap.to('.horizontals', {
    x: `-${horizontalsChilds[0].clientWidth * (horizontalsChilds.length - 1)}`,
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontalWrapper',
      start: 'center center',
      end: `+=${horizontalsChilds[0].clientHeight * horizontalsChilds.length}`,
      pin: true,
      scrub: true,
      // markers: true
    }
  })
});
