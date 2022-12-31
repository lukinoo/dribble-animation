const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.to(".intro-container", 1, { transform: "translateX(-100%)", delay: 1 }),
  tl.fromTo(
    ".intro-container__title",
    0.8,
    { transform: "translateX(0)" },
    { transform: "translateX(140%)" },
    "-=1"
  ),
  tl.to(".intro-container", { display: "none" }, "-=0.5"),
  tl.to(".second-container__title", 1, { transform: "translateX(0)" }, "-=1"),
  tl.to(".second-container__title__prefix", 0.5, {
    transform: "translateY(0) rotate(0)",
    stagger: 0.1,
  }),
  tl.to(".third-container", 1, { transform: "translateY(0)" }),
  tl.to(".second-container__title", { transform: "translateY(200%)" }, "-=0.8"),
  tl.to(".second-container", 1, { display: "none" }, "-=1"),
  tl.to(
    ".thid-container__title__prefix",
    0.3,
    { transform: "translateY(0) rotate(0)", stagger: 0.1 },
    "-=0.2"
  ),
  tl.to(".fifth-container", 1, { transform: "translateX(0)" }),
  tl.to(
    ".third-container__title",
    0.8,
    { transform: "translateX(100%)" },
    "-=0.8"
  ),
  tl.to(".third-container", { display: "none" }),
  tl.to(".sixth-container", 1, { transform: "translateY(0)" }, "-=0.5"),
  tl.to(
    ".fifth-container__title",
    1,
    { transform: "translateY(200%)" },
    "-=0.8"
  ),
  tl.to(".outro-container", 1, { transform: "translateY(-100%)" }),
  tl.to(
    ".sixth-container__title__prefix",
    0.3,
    { transform: "translateY(0) rotate(0)", stagger: 0.1 },
    "-=0.3"
  ),
  tl.to(".sixth-container__title__prefix", 0.3, {
    transform: "translateY(-100%) rotate(-30deg)",
    filter: "blur(20px)",
  }),
  tl.to(".sixth-container__title__concept__prefix", 0.5, {
    transform: "translateY(0) rotate(0)",
    opacity: 1,
    stagger: 0.1,
  }),
  tl.to(".fifth-container", { display: "none" }),
  tl.to(".outro-container", { display: "none" });
