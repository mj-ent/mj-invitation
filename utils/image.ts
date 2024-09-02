const prefixImage = '/images'

export function getImagePath(fileName: string, prefix?: string) {
  return `${prefix || prefixImage}/${fileName}`
}
