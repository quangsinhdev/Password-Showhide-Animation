const BLINK_SPEED = 0.075;
const TOGGLE_SPEED = 0.125;
const ENCRYPT_SPEED = 1;

const EYE = document.querySelector(".eye");
const TOGGLE = document.querySelector("button");
const INPUT = document.querySelector("#password");

const BLINK = () => {
  const delay = gsap.utils.random(2, 8);
  const duration = BLINK_SPEED;
  const repeat = Math.random() > 0.5 ? 3 : 1;
  blinkTL = gsap
  .timeline({
    delay,
    onComplete: () => BLINK(),
  })
  .to(
    {
      morphSVG: "#eye-closed path"
    },
  );
    };
