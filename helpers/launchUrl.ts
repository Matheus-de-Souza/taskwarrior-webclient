export const launchUrl = async (url: string, urlName: string) => {
  setTimeout(() => {
    window.open(url)
  }, 700)
  return `Opening ${urlName} in new tab...`
}
