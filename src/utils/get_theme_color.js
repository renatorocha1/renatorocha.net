const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#8A53FF"
  if (theme === "dark") return "#1e1f1c"
}

export default getThemeColor
