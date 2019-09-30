export const getMainPathname = (fullPathname: string) => {
  return `/${fullPathname.split('/')[1]}`
}