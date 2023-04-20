// import { useEffect, useRef } from 'react';
// import { Expo, gsap } from 'gsap';
// import { getRandomPic } from '~/utils/GetRandomPic';

// // import './index.scss';

// const RainbowText = ({ text, subText, imgSrc }) => {
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);
//   const init = () => {
//     console.log('gsap', gsap);

//     gsap.effects.rainbow(text1Ref.current, {
//       scrollTrigger: {
//         trigger: text1Ref.current,
//         start: 'top-=500',
//         end: 'bottom+=100',
//         scrub: 1,
//       },
//       y: -210,
//       opacity: 1,
//     });
//     gsap.effects.rainbow(text2Ref.current, {
//       scrollTrigger: {
//         trigger: text2Ref.current,
//         start: 'top-=1000',
//         end: 'bottom+=500',
//         scrub: 1,
//       },
//       y: -420,
//       opacity: 0.3,
//     });
//   };
//   useEffect(() => {
//     init();
//   }, []);
//   return (
//     <section className="section-text-view" data-component="sticky-text">
//       <div className="sticky-wrapper">
//         <div className="sticky-content">
//           <div className="section-wrapper">
//             <h1 className="opacity-0 h1 show-text-1" ref={text1Ref}>
//               {text}
//             </h1>
//             <h2 className="mt-40 h2 show-text-2 opacity-5" ref={text2Ref}>
//               {subText}
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RainbowText;
