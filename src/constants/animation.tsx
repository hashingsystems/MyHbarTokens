export const fadeIn = {
  defaultStyle: {
    transition: `opacity 500ms ease-in-out`,
    opacity: 0
  },
  transitionStyles: {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }
}