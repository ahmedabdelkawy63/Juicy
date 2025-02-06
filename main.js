var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_section",
    start: "0% 95%",
    end: "80% 60%",
    scrub: true,
  },
});

tl.to(
  "#can",
  {
    top: "145%",
    left: "77%",
    width: "30%",
    rotate: "-30deg",
  },
  "can"
);

tl.to(
  "#leaf",
  {
    top: "150%",
    left: "73%",
    width: "13%",
    rotate: "-20deg",
  },
  "can"
);
tl.to(
  "#blackberry1",
  {
    top: "125%",
    left: "-70",
    width: "7%",
    rotate: "0deg",
  },
  "can"
);
tl.to(
  "#blackberry2",
  {
    top: "160%",
    left: "60%",
    width: "10%",
    rotate: "50deg",
  },
  "can"
);
tl.to(
  "#blackberry3",
  {
    top: "110%",
    left: "75%",
    width: "20%",
    rotate: "100deg",
  },
  "can"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third_section",
    start: "0 95%",
    end: "20% 50%",
    scrub: true,
  },
});

tl2.to(
  "#can",
  {
    top: "262%",
    left: "50%",
    rotate: "0deg",
    width: "30%",
  },
  "can"
);
