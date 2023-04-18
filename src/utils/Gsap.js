import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { TextPlugin } from 'gsap/TextPlugin.js';
gsap.registerPlugin(ScrollTrigger, TextPlugin);
// 注册
gsap.registerEffect({
  name: 'rainbow',
  effect: (target, config) => {
    let split = new gsap.SplitText(target, { type: 'chars,words,lines' });
    return gsap.from(
      split.chars,
      config ?? { opacity: 0, y: -100, stagger: 0.05 },
    );
  },
});
