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
  dark: "#16222a",
  dark1: "#283d4b", // Background color
  dark3: "#2e3141",
  white: "#ffffff",
  color: "#e13726", // name box
  rgba1: "rgba(255, 255, 255, 0.1)", // menu background
  rgba2: "rgba(255, 255, 255, 0.3)", // menu lines
  rgba3: "rgba(255, 255, 255, 0.6)", // menu items
  rgba4: "rgba(255, 255, 255, 0.7)", // Project text
  spacing: {
    "1": "100px", // top and bottom padding of each section for desktop
    "2": "50px", // top and botom of section for mobile devices
    "3": "40px", // for spacing between paragraphs
  },
}

export default theme
