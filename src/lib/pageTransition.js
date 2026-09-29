const leave = {
  name: "page-leave",
  duration: "0.22s",
  easing: "cubic-bezier(0.4, 0, 1, 1)",
  fillMode: "both",
};

const enter = {
  name: "page-enter",
  delay: "0.1s",
  duration: "0.45s",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  fillMode: "both",
};

export const pageTransition = {
  forwards: { old: leave, new: enter },
  backwards: { old: leave, new: enter },
};
