export const pageTransition = {
  forwards: {
    old: {
      name: "page-slide-leave",
      duration: "0.35s",
      easing: "cubic-bezier(0.4, 0, 1, 1)",
      fillMode: "both",
    },
    new: {
      name: "page-slide-enter",
      delay: "0.35s",
      duration: "0.6s",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fillMode: "both",
    },
  },
  backwards: {
    old: {
      name: "page-slide-leave",
      duration: "0.35s",
      easing: "cubic-bezier(0.4, 0, 1, 1)",
      fillMode: "both",
    },
    new: {
      name: "page-slide-enter",
      delay: "0.35s",
      duration: "0.6s",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fillMode: "both",
    },
  },
};
