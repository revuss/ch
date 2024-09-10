export const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

export const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 50,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const fadeInUpTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  duration: 0.5,
};

export const slideFadeTopVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 100,
  },
};

export const slideFadeTopTransition = {
  type: "tween",
  ease: "easeIn",
  duration: 0.6,
};
