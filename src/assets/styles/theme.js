const rem = (px) => {
  const rem = px / 16;
  return `${rem}rem`
}

const em = (px) => {
  const em = px / 16;
  return `${em}em`
}

const theme = {
  c: {
    bg: "#16222a",
    bg2: "#2e3141",
    card: "#283d4b",
    text: "#ffffff",
    navBg: "rgba(255, 255, 255, 0.1)",
    navLine: "rgba(255, 255, 255, 0.3)",
    navItem: "rgba(255, 255, 255, 0.6)",
    active: "#e13726",
  },
  mq: {
    tablet: "@media(min-width: 600px)",
    laptop: "@media(min-width: 1050px)",
    desktop: "@media(min-width: 1255px)",
  },
  f: {
    rem: rem,
    em: em
  },
  fontFamily2: "'Cabin', sans-serif",
  padding: {
    mobile1: rem(40),
    laptop1: rem(100),
  },
}

export default theme
